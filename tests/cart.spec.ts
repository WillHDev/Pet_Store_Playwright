import { test, expect } from './fixtures/pet-store';

test('Login', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await page.locator('#SidebarContent').getByRole('link').nth(3).click();
    const iguana = page.getByRole('link', { name: 'RP-LI-02' });
    await iguana.click();
    await page.getByRole('link', { name: 'Add to Cart' }).click();
    await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
});




