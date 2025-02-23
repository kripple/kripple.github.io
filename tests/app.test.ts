/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

import { screens } from './screens';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Kelly Ripple/);
});

// TODO: break into reasonable sections for screenshots
screens.map((screen) => {
  const name = `app-${screen.width}px`;
  const options = {
    animations: 'disabled',
    fullPage: true,
    threshold: 0,
  } as const;

  test.skip(`${name} [dark]`, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: screen.width, height: screen.height });
    await expect(page).toHaveScreenshot(`${name}-dark.png`, options);
  });

  test.skip(`${name} [light]`, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: screen.width, height: screen.height });
    await page.getByTestId('theme-toggle').click();
    await page.mouse.move(0, 0);
    await expect(page).toHaveScreenshot(`${name}-light.png`, options);
  });
});
