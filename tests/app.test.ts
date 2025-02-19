/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

import { menuIsHidden, menuIsVisible } from './screens';

menuIsHidden.map((screen) => {
  test(`menu button is hidden - ${screen.width}x${screen.height}`, async ({
    page,
  }) => {
    await page.goto('/');
    await page.setViewportSize(screen);

    // menu is visible by default for larger screen
    const menu = page.getByTestId('menu');
    await expect(menu).toBeVisible();

    // menu button is hidden by default for larger screen
    await expect(page.getByTestId('menu-toggle')).toBeHidden();
  });
});

menuIsVisible.map((screen) => {
  test(`menu button is clickable - ${screen.width}x${screen.height}`, async ({
    page,
  }) => {
    await page.goto('/');
    await page.setViewportSize(screen);

    // menu is hidden by default for smaller screens
    const menu = page.getByTestId('menu');
    await expect(menu).toBeHidden();

    await page.getByTestId('menu-toggle').click();
    await expect(menu).toBeVisible();
  });
});
