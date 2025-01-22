// adapted from sources:
//  - https://github.com/asyarb/vite-plugin-ssr-nojs
//  - https://github.com/richardtallent/vite-plugin-singlefile

import * as fs from 'fs';
import * as path from 'path';

import type { renderToStaticMarkup } from 'react-dom/server';
import type { OutputAsset, OutputChunk, OutputOptions } from 'rollup';
import { createServer } from 'vite';
import type { Plugin } from 'vite';

import { injectScripts } from './injectScripts';

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

interface RenderModule {
  render: () => typeof renderToStaticMarkup;
}

export function replaceScript(
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
  const injected = injectScripts(inlined);

  return removeViteModuleLoader(injected);
}

export function replaceCss(
  html: string,
  scriptFilename: string,
  scriptCode: string,
): string {
  const reStyle = new RegExp(
    `<link([^>]*?) href="[./]*${scriptFilename}"([^>]*?)>`,
  );
  const newCode = scriptCode.replace(`@charset "UTF-8";`, '');
  const inlined = html.replace(
    reStyle,
    () => `<style rel="stylesheet">${newCode.trim()}</style>`,
  );
  return inlined;
}

const isJsFile = /\.[mc]?js$/;
const isCssFile = /\.css$/;
const isHtmlFile = /\.html?$/;
function warnNotInlined(filename: string) {
  if (filename.includes('.jpg')) return;
  console.debug(`NOTE: asset not inlined: ${filename}`);
}

const name = 'vite:ssg';
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
        for (const filename of files.css) {
          const cssChunk = bundle[filename] as OutputAsset;
          console.debug(`inlining: ${filename}`);
          bundlesToDelete.push(filename);
          replacedHtml = replaceCss(
            replacedHtml,
            cssChunk.fileName,
            cssChunk.source as string,
          );
        }
        htmlChunk.source = replacedHtml;
      }

      // deleteInlinedFiles
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

      const vite = await createServer({
        server: { middlewareMode: true },
      });
      const { render } = (await vite.ssrLoadModule(
        renderModulePath,
      )) as RenderModule;
      const appHtml = templateHtml.replace(htmlInjectionString, render());

      const htmlWithAssets = Object.values(bundle).reduce((result, asset) => {
        if (asset.type === 'chunk' || asset.originalFileNames.length === 0)
          return result;
        const target = asset.originalFileNames[0];
        return result.replace(target, asset.fileName);
      }, appHtml);

      const outputPath = path.join(viteOutputPath, `/${entryPoint}`);
      fs.writeFileSync(outputPath, htmlWithAssets);

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
