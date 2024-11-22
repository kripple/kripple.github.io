import * as childProcess from 'child_process';
import dns from 'dns';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';

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

const plugins: PluginOption[] = [react()];
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