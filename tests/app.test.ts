import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Kelly Ripple/);
});

// test has theme toggle
// take full-page screenshots for all standard screens?
