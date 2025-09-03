import fs from 'fs';

import { expect, test } from '@playwright/test';

import { imageCaptureHeight, imageCaptureWidth } from '@/data/constants';
import { projects } from '@/data/projects';

const snapshotsPath = 'src/helpers/snapshots';
const options = { animations: 'disabled' } as const;

Object.entries(projects).forEach(([key, { url }]) => {
  const file = `${key}.png`;

  // Skip if file already exists
  if (fs.existsSync(`${snapshotsPath}/${file}`)) {
    test.skip(`capture - ${file} (already exists)`, () => {});
    return;
  }

  test(`capture - ${file}`, async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({
      width: imageCaptureWidth,
      height: imageCaptureHeight,
    });
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot(file, options);
  });
});
