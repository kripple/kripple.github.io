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
  const options = { animations: 'disabled', threshold: 0.1 } as const;

  test(`footer matches screenshot - ${width}x${height} [dark]`, async ({
    page,
  }) => {
    await page.goto('/');
    await page.setViewportSize({ width, height });
    await expect(page.locator('.footer')).toHaveScreenshot(
      `footer-${width}x${height}-dark.png`,
      options,
    );
  });

  test(`footer matches screenshot - ${width}x${height} [light]`, async ({
    page,
  }) => {
    await page.goto('/');
    await page.setViewportSize({ width, height });
    await page.getByTestId('theme-toggle').click();
    await page.mouse.move(0, 0);
    await expect(page.locator('.footer')).toHaveScreenshot(
      `footer-${width}x${height}-light.png`,
      options,
    );
  });
}
breakpoints.map((breakpoint) => {
  testBreakpoint(breakpoint - 1);
  testBreakpoint(breakpoint);
});
