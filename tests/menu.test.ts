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

const options = {
  animations: 'disabled',
  threshold: 0.05, 
} as const;

function testBreakpoint(width: number, lightTheme?: boolean) {
  if (width >= 1200) return;
  const height = 1200 as const;
  const theme = lightTheme === true ? 'light' : 'dark';

  test(`menu matches screenshot - ${width}px [${theme}]`, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width, height });

    if (lightTheme) {
      await page.getByTestId('theme-toggle').click();
      await page.mouse.move(0, 0);
    }

    // open the menu
    await page.getByTestId('menu-toggle').click();

    // wait for nav-container height transition
    await page.waitForTimeout(500);

    // measure menu size
    const header = (await page.locator('.header').boundingBox())?.height || 0;
    const nav =
      (await page.locator('.nav-container').boundingBox())?.height || 0;

    await expect(page).toHaveScreenshot(`menu-${width}px-${theme}.png`, {
      ...options,
      clip: { x: 0, y: header - 4, width, height: nav + 8 },
    });
  });
}

breakpoints.map((breakpoint) => {
  testBreakpoint(breakpoint - 1);
  testBreakpoint(breakpoint - 1, true);
  testBreakpoint(breakpoint);
  testBreakpoint(breakpoint, true);
});

test('nav links [dark]', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 1200, height: 1200 });
  await expect(page.locator('.nav-container')).toHaveScreenshot(
    'nav-links-dark.png',
    options,
  );
});

test('nav links [light]', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 1200, height: 1200 });
  await page.getByTestId('theme-toggle').click();
  await page.mouse.move(0, 0);
  await expect(page.locator('.nav-container')).toHaveScreenshot(
    'nav-links-light.png',
    options,
  );
});
