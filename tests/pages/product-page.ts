import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly reptileSection: Locator;
  readonly iguana: Locator;



  constructor(page: Page) {
    this.page = page;
    this.reptileSection  = page.locator('#SidebarContent').getByRole('link').nth(3);
    //const iguana = page.locator('[text="RP-LI-02"]');
    this.iguana = page.getByRole('link', { name: 'RP-LI-02' });
  
}

  async gotoUrl() {
    await this.page.goto('https://petstore.octoperf.com/actions/Catalog.action');;
  }

  async addIquanaToCart() {
    const iguanaSection =  this.page.getByRole('link', { name: 'RP-LI-02' });
    await iguanaSection.click();
    await this.page.getByRole('link', { name: 'RP-LI-02' }).click();
    await this.page.getByRole('link', { name: 'Add to Cart' }).click();
    await this.page.getByRole('link', { name: 'Proceed to Checkout' }).click();

  }

}

