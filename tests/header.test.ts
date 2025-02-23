/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

import { breakpoints } from './screens';

/**
 * WARNING
 * Browser rendering can vary based on the host OS, version, settings, hardware,
 * power source (battery vs. power adapter), headless mode, and other factors.
 * For consistent screenshots, run tests in the same environment where the
 * baseline screenshots were generated.
 */

function testBreakpoint(width: number) {
  const height = 900 as const;
  const options = { animations: 'disabled' } as const;
  const file = `header-${width}x${height}.png`;

  if (width < 1200) {
    // menu is visible
    test(`menu button is clickable - ${width}x${height}`, async ({ page }) => {
      await page.goto('/');
      await page.setViewportSize({ width, height });

      // menu is hidden by default for smaller screens
      const menu = page.getByTestId('menu');
      await expect(menu).toBeHidden();

      await page.getByTestId('menu-toggle').click();
      await expect(menu).toBeVisible();
    });

    test(`header matches screenshot - ${width}x${height}`, async ({ page }) => {
      await page.goto('/');
      await page.setViewportSize({ width, height });
      await expect(page.locator('.header')).toHaveScreenshot(file, options);
    });
  } else {
    test(`menu button is hidden - ${width}x${height}`, async ({ page }) => {
      await page.goto('/');
      await page.setViewportSize({ width, height });

      // menu is visible by default for larger screen
      const menu = page.getByTestId('menu');
      await expect(menu).toBeVisible();

      // menu button is hidden by default for larger screen
      await expect(page.getByTestId('menu-toggle')).toBeHidden();
    });

    test(`header matches screenshot - ${width}x${height}`, async ({ page }) => {
      await page.goto('/');
      await page.setViewportSize({ width, height });
      await expect(page.locator('.header')).toHaveScreenshot(file, options);
    });
  }
}
breakpoints.map((breakpoint) => {
  testBreakpoint(breakpoint - 1);
  testBreakpoint(breakpoint);
});
// and again for light theme
