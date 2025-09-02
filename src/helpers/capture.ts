import fs from 'fs';

import { expect, test } from '@playwright/test';

import { projects } from '@/data/projects';

const snapshotsPath = 'src/helpers/snapshots';
const width = 1440;
const height = 1000;
const options = { animations: 'disabled' } as const;

projects.forEach(({ key, url }) => {
  const file = `${key}.png`;

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
