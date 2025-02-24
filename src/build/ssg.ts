/* eslint-disable @typescript-eslint/no-restricted-imports */

// adapted from sources:
//  - https://github.com/asyarb/vite-plugin-ssr-nojs
//  - https://github.com/richardtallent/vite-plugin-singlefile

import * as fs from 'fs';
import * as path from 'path';

import type { OutputAsset, OutputChunk, OutputOptions } from 'rollup';
import { minify } from 'uglify-js';
import { createServer } from 'vite';
import type { Plugin } from 'vite';

import { injectScriptsBody, injectScriptsHead } from './injectedScripts';
import { renderToString } from './renderToString';

interface PluginOptions {
  /**
   * Absolute path to a module that exports a single `render` function.
   */
  renderModulePath: string;

  /**
   * Absolute path to vite's output directory. This is typically `dist/`.
   */
  viteOutputPath: string;

  /**
   * The string in your `index.html` file to replace with the SSR'd HTML.
   * Must be a statically replacable string like `<!--inject-root-->`. Defaults to
   * `<!--inject-root-->`.
   */
  htmlInjectionString?: string;
}

function getContentSecurityPolicy({
  scripts,
  styles,
}: {
  scripts: string[];
  styles: string[];
}) {
  const defaultSrc = `default-src 'none';`;
  const fontSrc = `font-src data:;`;
  const imgSrc = `img-src 'self';`;
  const manifestSrc = `manifest-src 'self';`;
  const styleSrc = `style-src ${styles.join(' ')};`;
  const scriptSrcElem = `script-src-elem ${scripts.join(' ')};`;
  const content = `${defaultSrc} ${fontSrc} ${imgSrc} ${manifestSrc} ${scriptSrcElem} ${styleSrc}`;
  return `<meta http-equiv="Content-Security-Policy" content="${content}">`;
}

function replaceScript(
  html: string,
  scriptFilename: string,
  scriptCode: string,
): string {
  const reScript = new RegExp(
    `<script([^>]*?) src="[./]*${scriptFilename}"([^>]*)></script>`,
  );
  const preloadMarker = /"?__VITE_PRELOAD__"?/g;
  scriptCode
    .replace(preloadMarker, 'void 0')
    .replace(/<(\/script>|!--)/g, '\\x3C$1');
  const inlined = html.replace(reScript, () => '');
  return removeViteModuleLoader(inlined);
}

const name = 'vite:ssg' as const;
const isJsFile = /\.[mc]?js$/;
const isCssFile = /\.css$/;
const isHtmlFile = /\.html?$/;
function warnNotInlined(filename: string) {
  if (filename.includes('.avif')) return;
  console.debug(`NOTE: asset not inlined: ${filename}`);
}

export function viteSsg({
  renderModulePath,
  viteOutputPath,
  htmlInjectionString = '<!--inject-root-->',
}: PluginOptions): Plugin {
  return {
    name,
    generateBundle: (_, bundle) => {
      console.debug('\n');
      const files = {
        html: [] as string[],
        css: [] as string[],
        js: [] as string[],
        other: [] as string[],
      };
      for (const i of Object.keys(bundle)) {
        if (isHtmlFile.test(i)) {
          files.html.push(i);
        } else if (isCssFile.test(i)) {
          files.css.push(i);
        } else if (isJsFile.test(i)) {
          files.js.push(i);
        } else {
          files.other.push(i);
        }
      }
      const bundlesToDelete = [] as string[];
      for (const name of files.html) {
        const htmlChunk = bundle[name] as OutputAsset;
        let replacedHtml = htmlChunk.source as string;
        for (const filename of files.js) {
          const jsChunk = bundle[filename] as OutputChunk;
          if (jsChunk.code != null) {
            bundlesToDelete.push(filename);
            replacedHtml = replaceScript(
              replacedHtml,
              jsChunk.fileName,
              jsChunk.code,
            );
          }
        }
        htmlChunk.source = replacedHtml;
      }

      // delete inlined files
      for (const name of bundlesToDelete) {
        delete bundle[name];
      }

      for (const name of files.other) {
        warnNotInlined(name);
      }
    },
    async writeBundle(
      _options: OutputOptions,
      bundle: { [fileName: string]: OutputAsset | OutputChunk },
    ) {
      const entryPoint = 'index.html';
      const templatePath = path.join(viteOutputPath, entryPoint);
      const templateHtml = fs.readFileSync(templatePath, 'utf-8');
      const scriptHashes: string[] = [];
      const styleHashes: string[] = [];

      const vite = await createServer({
        server: { middlewareMode: true },
      });
      const { render } = await vite.ssrLoadModule(renderModulePath);
      const staticMarkup: string = render();
      const appHtml = templateHtml.replace(htmlInjectionString, staticMarkup);

      // replace non-inlined asset paths with their resolved values
      const htmlWithAssets = Object.values(bundle).reduce((result, asset) => {
        if (asset.type === 'chunk' || asset.originalFileNames.length === 0)
          return result;
        const target = asset.originalFileNames[0];
        return result.replaceAll(target, asset.fileName);
      }, appHtml);

      // inject script tags
      const scriptsHead = injectScriptsHead(minify).reduce((result, script) => {
        const rendered = renderToString({ script });
        result = result.concat(rendered.script);
        scriptHashes.push(rendered.sha256);
        return result;
      }, '');
      const scriptsBody = injectScriptsBody(minify).reduce((result, script) => {
        const rendered = renderToString({ script });
        result = result.concat(rendered.script);
        scriptHashes.push(rendered.sha256);
        return result;
      }, '');
      const htmlWithScripts = htmlWithAssets
        .replace('<!--inject-script-head-->', scriptsHead)
        .replace('<!--inject-script-body-->', scriptsBody);

      // inject style tags
      const cssFiles = Object.keys(bundle).filter((file) =>
        isCssFile.test(file),
      );
      if (cssFiles.length !== 1) {
        throw Error(
          'something unexpected happened and we should not continue.',
        );
      }
      const cssFileName = cssFiles[0];
      const cssChunk = bundle[cssFileName] as OutputAsset;
      console.debug(`inlining: ${cssFileName}`);
      const cssTarget = new RegExp(
        `<link([^>]*?) href="[./]*${cssChunk.fileName}"([^>]*?)>`,
      );
      const newCode = (cssChunk.source as string).replace(
        `@charset "UTF-8";`,
        '',
      );
      const rendered = renderToString({ style: newCode });
      styleHashes.push(rendered.sha256);
      const htmlWithStyles = htmlWithScripts.replace(cssTarget, rendered.style);
      // delete css source from bundle
      delete bundle[cssFileName];

      // inject csp
      const htmlWithCsp = htmlWithStyles.replace(
        '<!--inject-meta-csp-->',
        getContentSecurityPolicy({
          scripts: scriptHashes,
          styles: styleHashes,
        }),
      );

      const outputPath = path.join(viteOutputPath, `/${entryPoint}`);
      fs.writeFileSync(outputPath, htmlWithCsp);

      console.debug(`[${name}] injected static html`);
      vite.close();
    },
    enforce: 'post',
    apply: 'build',
  };
}

// Optionally remove the Vite module loader since it's no longer needed because this plugin has inlined all code.
// This assumes that the Module Loader is (1) the FIRST function declared in the module, (2) an IIFE, (4) is within
// a script with no unexpected attribute values, and (5) that the containing script is the first script tag that
// matches the above criteria. Changes to the SCRIPT tag especially could break this again in the future. It should
// work whether `minify` is enabled or not.
// Update example:
// https://github.com/richardtallent/vite-plugin-singlefile/issues/57#issuecomment-1263950209
const removeViteModuleLoader = (html: string) =>
  html.replace(
    /(<script type="module" crossorigin>\s*)\(function(?: polyfill)?\(\)\s*\{[\s\S]*?\}\)\(\);/,
    '<script type="module">',
  );
