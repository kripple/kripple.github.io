import fs from 'fs';

import { expect, test } from '@playwright/test';

const snapshotsPath = 'src/helpers/snapshots';
const projects = {
  pokematch: 'https://kripple.github.io/pokematch',
  repos: 'https://kripple.github.io/repos',
  klinky: 'https://klinky.link',
  codebreaker: 'https://kripple.github.io/codebreaker',
  mapSlicer: 'https://kripple.github.io/map-slicer',
};

const width = 1440;
const height = 1000;
const options = { animations: 'disabled' } as const;

Object.entries(projects).forEach(([projectKey, url]) => {
  const file = `${projectKey}.png`;

  // Skip if file already exists
  if (fs.existsSync(`${snapshotsPath}/${file}`)) {
    test.skip(`capture - ${file} (already exists)`, () => {});
    return;
  }

  test(`capture - ${file}`, async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width, height });
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot(file, options);
  });
});
