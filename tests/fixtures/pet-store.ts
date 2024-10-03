import { test as base } from '@playwright/test';
import { ProductPage } from '../pages/product-page';

type PetStoreFixtures = {

  productPage: ProductPage;

};

export const test = base.extend<PetStoreFixtures>({

  productPage: async ({ page }, use) => {
    await use(new ProductPage( page ));
  },

});

export { expect } from '@playwright/test';

