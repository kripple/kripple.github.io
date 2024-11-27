// adapted from source - https://github.com/richardtallent/vite-plugin-singlefile

import type { OutputAsset, OutputChunk, OutputOptions } from 'rollup';
import type { PluginOption, UserConfig } from 'vite';

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

  return removeViteModuleLoader(inlined);
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
    (_, beforeSrc, afterSrc) =>
      `<style${beforeSrc}${afterSrc}>${newCode.trim()}</style>`,
  );
  return inlined;
}

const isJsFile = /\.[mc]?js$/;
const isCssFile = /\.css$/;
const isHtmlFile = /\.html?$/;

export function viteSingleFileSsg(): PluginOption {
  function warnNotInlined(filename: string) {
    console.debug(`NOTE: asset not inlined: ${filename}`);
  }

  return {
    name: 'vite:singlefile:ssg',
    config: useRecommendedBuildConfig,
    enforce: 'post',
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
            console.debug(`inlining: ${filename}`);
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

// Modifies the Vite build config to make this plugin work well.
const useRecommendedBuildConfig = (config: UserConfig) => {
  if (!config.build) config.build = {};
  // Ensures that even very large assets are inlined in your JavaScript.
  config.build.assetsInlineLimit = () => true;
  // Avoid warnings about large chunks.
  config.build.chunkSizeWarningLimit = 100000000;
  // Emit all CSS as a single file, which `vite-plugin-singlefile` can then inline.
  config.build.cssCodeSplit = false;
  // We need relative path to support any static files in public folder,
  // which are copied to ${build.outDir} by vite.
  config.base = './';
  // Make generated files in ${build.outDir}'s root, instead of default ${build.outDir}/assets.
  // Then the embedded resources can be loaded by relative path.
  config.build.assetsDir = '';

  if (!config.build.rollupOptions) config.build.rollupOptions = {};
  if (!config.build.rollupOptions.output)
    config.build.rollupOptions.output = {};

  const updateOutputOptions = (out: OutputOptions) => {
    // Ensure that as many resources as possible are inlined.
    out.inlineDynamicImports = true;
  };

  if (Array.isArray(config.build.rollupOptions.output)) {
    for (const o of config.build.rollupOptions.output)
      updateOutputOptions(o as OutputOptions);
  } else {
    updateOutputOptions(config.build.rollupOptions.output as OutputOptions);
  }
};
