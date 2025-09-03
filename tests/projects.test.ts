/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

const options = {
  animations: 'disabled',
  threshold: 0.1,
} as const;

function testBreakpoint(width: number) {
  const name = `projects-${width}px`;
  const height = 1200 as const;

  test.skip(`${name} [dark]`, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({
      width,
      height,
    });
    await expect(page.locator('.projects-section')).toHaveScreenshot(
      `${name}-dark.png`,
      options,
    );
  });

  test.skip(`${name} [light]`, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width, height });
    await page.getByTestId('theme-toggle').click();
    await page.mouse.move(0, 0);
    await expect(page.locator('.projects-section')).toHaveScreenshot(
      `${name}-light.png`,
      options,
    );
  });
}

[300, 656, 960, 1200].map((breakpoint) => {
  testBreakpoint(breakpoint - 1);
  testBreakpoint(breakpoint);
});
