/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

/**
 * WARNING
 * Browser rendering can vary based on the host OS, version, settings, hardware,
 * power source (battery vs. power adapter), headless mode, and other factors.
 * For consistent screenshots, run tests in the same environment where the
 * baseline screenshots were generated.
 */

test('menu toggle - off, theme toggle - on', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 600, height: 600 });

  const toggle = page.getByTestId('menu-toggle');
  await expect(toggle).toHaveScreenshot('menu-toggle-off-dark.png', {
    animations: 'disabled',
  });
});

test('menu toggle - on, theme toggle - on', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 600, height: 600 });

  await page.getByTestId('menu-toggle').click();
  await page.mouse.move(0, 0);

  // wait for transform transition
  await page.waitForTimeout(500);

  await expect(page.getByTestId('menu-toggle')).toHaveScreenshot(
    'menu-toggle-on-dark.png',
    {
      animations: 'disabled',
    },
  );
});

test('menu toggle - off, theme-toggle - off', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 600, height: 600 });

  const toggle = page.getByTestId('menu-toggle');
  await page.getByTestId('theme-toggle').click();

  await expect(toggle).toHaveScreenshot('menu-toggle-off-light.png', {
    animations: 'disabled',
  });
});

test('menu toggle - on, theme-toggle - off', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 600, height: 600 });

  await page.getByTestId('menu-toggle').click();
  await page.getByTestId('theme-toggle').click();

  // wait for transform transition
  await page.waitForTimeout(500);

  await expect(page.getByTestId('menu-toggle')).toHaveScreenshot(
    'menu-toggle-on-light.png',
    {
      animations: 'disabled',
    },
  );
});

test('theme toggle - on', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 600, height: 600 });

  const toggle = page.getByTestId('theme-toggle');
  await expect(toggle).toHaveScreenshot('theme-toggle-on.png', {
    animations: 'disabled',
  });
});

test('theme toggle - off', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 600, height: 600 });

  await page.getByTestId('theme-toggle').click();
  await page.mouse.move(0, 0);

  // wait for transform transition
  await page.waitForTimeout(500);

  await expect(page.getByTestId('theme-toggle')).toHaveScreenshot(
    'theme-toggle-off.png',
    {
      animations: 'disabled',
    },
  );
});
