/* eslint-disable @typescript-eslint/no-restricted-imports */
import * as childProcess from 'child_process';
import dns from 'dns';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { type PluginOption, defineConfig } from 'vite';
import csp from 'vite-plugin-csp-guard';

import { viteSsg } from './build/ssg';

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
  csp({
    override: true,
    policy: {
      'font-src': ['data:'],
      'script-src-elem': [
        "'sha256-tzLrrNZv/aqmrgUegn5OQd2yWAXpyhJiErT9OKwlHxY='",
        "'sha256-SuXldA839B8Kj+HVFX3MvKTbGSTJA0McHdYdUMrUsi0='",
        "'sha256-1d77p6cOKmtDjoIIzaox3Tc4lQtKf3nwPpdqxILZnO4='",
        "'sha256-Qj8/0HvTtnoZXBLixeL5RzY5gLMyayBwaGj7rmBr4bA='",
        "'sha256-4BHPsfGhReU+KLH/CJEyCRrctgb4TDmkMafg4ruwsK4='",
        "'sha256-XN3vBgqCbcm6BC4tzKi6uzKVRSA9Ud6YgNGP5Sf4v2w='",
      ],
      'style-src': ["'sha256-SuXldA839B8Kj+HVFX3MvKTbGSTJA0McHdYdUMrUsi0='"],
    },
    build: {
      sri: true,
    },
  }),
  viteSsg({
    renderModulePath: resolve(__dirname, 'build/render.tsx'),
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
