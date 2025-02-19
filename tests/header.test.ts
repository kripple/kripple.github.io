/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

import { menuIsHidden, menuIsVisible } from './screens';

/**
 * WARNING
 * Browser rendering can vary based on the host OS, version, settings, hardware,
 * power source (battery vs. power adapter), headless mode, and other factors.
 * For consistent screenshots, run tests in the same environment where the
 * baseline screenshots were generated.
 */

menuIsHidden.map((screen) => {
  const name = `header-${screen.width}x${screen.height}`;
  test(name, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize(screen);
    await expect(page).toHaveScreenshot(`${name}.png`, {
      animations: 'disabled',
    });
  });
});

menuIsVisible.map((screen) => {
  const name = `menu-${screen.width}x${screen.height}`;
  test(name, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize(screen);

    // open the menu
    await page.getByTestId('menu-toggle').click();
    await expect(page).toHaveScreenshot(`${name}.png`, {
      animations: 'disabled',
    });
  });
});
