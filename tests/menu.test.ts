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

  if (width < 1200) {
    // menu is visible
    test(`menu matches screenshot - ${width}x${height}`, async ({ page }) => {
      await page.goto('/');
      await page.setViewportSize({ width, height });

      // open the menu
      await page.getByTestId('menu-toggle').click();
      await expect(page).toHaveScreenshot(
        `menu-${width}x${height}.png`,
        options,
      );
    });
  }
}
breakpoints.map((breakpoint) => {
  testBreakpoint(breakpoint - 1);
  testBreakpoint(breakpoint);
});
// and again for light theme
