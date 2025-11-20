/* eslint-disable @typescript-eslint/no-restricted-imports */
import * as childProcess from 'child_process';
import dns from 'dns';
import { resolve } from 'path';

import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { type PluginOption, defineConfig } from 'vite';

import { viteSsg } from './src/build/ssg';

dns.setDefaultResultOrder('verbatim');

const useVisualizer = false;
const gitHash = childProcess
  .execSync('git rev-parse HEAD')
  .toString()
  .trimEnd();
const gitBranch = childProcess
  .execSync('git branch --show-current')
  .toString()
  .trimEnd();

const outDir = 'docs';
const plugins: PluginOption[] = [
  react(),
  mdx(),
  viteSsg({
    renderModulePath: resolve(__dirname, 'src/build/render.tsx'),
    viteOutputPath: resolve(__dirname, outDir),
    htmlInjectionString: '<!--inject-root-->',
  }),
];
if (useVisualizer)
  plugins.push(
    visualizer({
      template: 'treemap',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  );

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    chunkSizeWarningLimit: 200,
    copyPublicDir: true,
    cssCodeSplit: false,
    emptyOutDir: true,
    assetsInlineLimit: 0,
    modulePreload: { polyfill: false },
    outDir,
    rollupOptions: {
      output: {
        compact: true,
        minifyInternalExports: true,
        validate: true,
      },
    },
    sourcemap: false,
  },
  clearScreen: false,
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(gitHash),
    'import.meta.env.GIT_BRANCH': JSON.stringify(gitBranch),
  },
  logLevel: 'silent',
  plugins,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
});
