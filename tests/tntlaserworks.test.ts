/* eslint-disable @typescript-eslint/no-restricted-imports */
import { expect, test } from '@playwright/test';

import { screens } from './screens';

const before = 'https://dylan-vigil-9tec.squarespace.com';
const url = 'https://www.tntlaserworks.com';
const pages = [
  { a: before, b: url, label: 'home' },
  { a: `${before}/about`, b: `${url}/about`, label: 'about' },
  { a: `${before}/contact`, b: `${url}/contact`, label: 'contact' },
  { a: `${before}/shipping-returns`, b: `${url}/faq`, label: 'faq' },
  {
    a: `${before}/privacy-policy`,
    b: `${url}/privacy-policy`,
    label: 'privacy-policy',
  },
  {
    a: `${before}/sage-stones-board-game/sage-stones`,
    b: `${url}/shop/p/sage-stones-dragon`,
    label: 'pdp-board',
  },
  {
    a: `${before}/sage-stones-board-game/sage-stones-scroll`,
    b: `${url}/shop/p/sage-stones-brown-scroll`,
    label: 'pdp-scroll',
  },
];

const options = { animations: 'disabled' } as const;
pages.map((pageData) => {
  screens.map((screen, index) => {
    const nameA = `page-${pageData.label}-screen-${index + 1}a-${screen.width}x${screen.height}`;
    const nameB = `page-${pageData.label}-screen-${index + 1}b-${screen.width}x${screen.height}`;

    test.skip(nameA, async ({ page }) => {
      await page.goto(pageData.a);
      await page.setViewportSize(screen);
      await expect(page).toHaveScreenshot(`${nameA}.png`, options);
    });

    test.skip(nameB, async ({ page }) => {
      await page.goto(pageData.b);
      await page.setViewportSize(screen);

      // deny cookies
      await page.getByRole('button', { name: 'No' }).click();

      await expect(page).toHaveScreenshot(`${nameB}.png`, options);
    });
  });
});
