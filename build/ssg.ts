// adapted from source - https://github.com/asyarb/vite-plugin-ssr-nojs

import * as fs from 'fs';
import * as path from 'path';

import type { renderToStaticMarkup } from 'react-dom/server';
import type { Plugin } from 'vite';
import { createServer } from 'vite';

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
   * Must be a statically replacable string like `<!--ssg-html-->`. Defaults to
   * `<!--ssg-html-->`.
   */
  htmlInjectionString?: string;
}

interface RenderModule {
  render: () => typeof renderToStaticMarkup;
}

const name = 'vite:ssg';
export function ssrNoJsPlugin({
  renderModulePath,
  viteOutputPath,
  htmlInjectionString = '<!--ssg-html-->',
}: PluginOptions): Plugin {
  return {
    name,
    async writeBundle() {
      const entryPoint = 'index.html';
      const templatePath = path.join(viteOutputPath, entryPoint);
      const templateHtml = fs.readFileSync(templatePath, 'utf-8');

      const vite = await createServer({
        server: { middlewareMode: true },
      });

      const { render } = (await vite.ssrLoadModule(
        renderModulePath,
      )) as RenderModule;

      const appHtml = await render();
      const routeHtml = templateHtml.replace(htmlInjectionString, appHtml);
      const outputPath = path.join(viteOutputPath, `/${entryPoint}`);
      fs.writeFileSync(outputPath, routeHtml);

      console.debug(`[${name}] injected static html`);
      vite.close();
    },
    enforce: 'post',
    apply: 'build',
  };
}
