import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
  await page.getByRole('link', { name: 'Sign In' }).click();
  //locator('#stripes--1523722519')
  await page.locator('input[name="username"]').fill('mando9');
  await page.locator('input[name="password"]').fill('jtpetstore');
  await page.getByRole('button', { name: 'Login' }).click();

  // mando7
  // jtpetstore
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});
