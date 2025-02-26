/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

import { screens } from './screens';
// import { projects } from '../src/data/projects';

// const screenshots = screens.filter((screen) => screen.primary);
// function capture({ project, url }: { project: string; url: string }) {
//   screenshots.map((screen) => {
//     const name = `${project}-${screen.width}x${screen.height}`;
//     const options = {
//       animations: 'disabled',
//       threshold: 0,
//     } as const;

//     test.skip(`${name} [dark]`, async ({ page }) => {
//       await page.goto(url);
//       await page.setViewportSize({
//         width: screen.width,
//         height: screen.height,
//       });

//       await page.waitForTimeout(500);
//       await expect(page.locator('.projects-section')).toHaveScreenshot(
//         `${name}.png`,
//         options,
//       );
//     });

//     test.skip(`${name} [light]`, async ({ page }) => {
//       await page.goto(url);
//       await page.setViewportSize({
//         width: screen.width,
//         height: screen.height,
//       });
//       await page.waitForTimeout(500);
//       await expect(page.locator('.projects-section')).toHaveScreenshot(
//         `${name}.png`,
//         options,
//       );
//     });
//   });
// }

// projects.map(({ key: project, websiteUrl: url }) => {
//   capture({ project, url });
// });

screens.map((screen) => {
  const name = `projects-${screen.width}px`;
  const options = {
    animations: 'disabled',
    threshold: 0.1,
  } as const;

  test(`${name} [dark]`, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({
      width: screen.width,
      height: screen.height,
    });
    await expect(page.locator('.projects-section')).toHaveScreenshot(
      `${name}-dark.png`,
      options,
    );
  });

  test(`${name} [light]`, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: screen.width, height: screen.height });
    await page.getByTestId('theme-toggle').click();
    await page.mouse.move(0, 0);
    await expect(page.locator('.projects-section')).toHaveScreenshot(
      `${name}-light.png`,
      options,
    );
  });
});
