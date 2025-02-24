/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

import { screens } from './screens';
import { projects } from '../src/data/projects';

const screenshots = screens.filter((screen) => screen.primary);
function capture({ project, url }: { project: string; url: string }) {
  screenshots.map((screen) => {
    const name = `${project}-${screen.width}x${screen.height}`;
    const options = {
      animations: 'disabled',
      threshold: 0,
    } as const;

    test.skip(name, async ({ page }) => {
      await page.goto(url);
      await page.setViewportSize({
        width: screen.width,
        height: screen.height,
      });

      await page.waitForTimeout(500);
      await expect(page).toHaveScreenshot(`${name}.png`, options);
    });
  });
}

projects.map(({ key: project, websiteUrl: url }) => {
  capture({ project, url });
});
