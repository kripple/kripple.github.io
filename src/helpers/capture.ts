/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

const projects = {
  pokematch: 'https://kripple.github.io/pokematch',
  repos: 'https://kripple.github.io/repos',
};

const width = 1440;
const height = 1000;
const options = { animations: 'disabled' } as const;

Object.entries(projects).forEach(([projectKey, url]) => {
  const file = `${projectKey}.png`;
  test(`capture - ${file}`, async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width, height });
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot(file, options);
  });
});
