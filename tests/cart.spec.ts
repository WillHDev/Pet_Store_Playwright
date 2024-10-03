import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    
    //await page.locator('#SidebarContent').locator('[text="Reptiles"]').click();
    await page.locator('#SidebarContent').getByRole('link').nth(3).click();
    //const iguana = page.locator('[text="RP-LI-02"]');
    const iguana = page.getByRole('link', { name: 'RP-LI-02' });
    await iguana.click();
    //await page.locator('tr:has-text("Iguana")').locator('[text="Add to Cart"]').click();
    await page.getByRole('link', { name: 'Add to Cart' }).click();
    await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
});




