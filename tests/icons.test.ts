/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

/**
 * WARNING
 * Browser rendering can vary based on the host OS, version, settings, hardware,
 * power source (battery vs. power adapter), headless mode, and other factors.
 * For consistent screenshots, run tests in the same environment where the
 * baseline screenshots were generated.
 */

const tests = {
  theme: ['light', 'dark'],
  selector: ['social-icons', 'theme-toggle', 'menu-toggle'],
  width: [1199, 1200],
} as const;
type TestCase<T extends keyof typeof tests> = Union<(typeof tests)[T]>;

const options = {
  animations: 'disabled',
  threshold: 0.2,
} as const;

function testCase({
  theme,
  selector,
  width,
}: {
  width: TestCase<'width'>;
  theme: TestCase<'theme'>;
  selector: TestCase<'selector'>;
}) {
  const name = `${selector}-${width}px-${theme}`;
  const height = 1200 as const;

  test(name, async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width, height });
    if (theme === 'light') {
      await page.getByTestId('theme-toggle').click();
      await page.mouse.move(0, 0);
    }

    await expect(page.locator(`.${selector}`)).toHaveScreenshot(
      `${name}.png`,
      options,
    );
  });

  // TODO: repeat for pseudo-classes :hover and for :focus-visible
}

tests.theme.map((theme) => {
  tests.selector.map((selector) => {
    tests.width.map((width) => {
      // testCase({ theme, selector, width });
      // console.log({ theme, selector, width });
    });
  });
});
