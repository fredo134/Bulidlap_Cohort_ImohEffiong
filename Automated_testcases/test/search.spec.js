const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/product');

test('TC-05: Product Search Functionality', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  // Step 1: Navigate directly to the products page
  await productsPage.navigate();

  // Step 2: Search for a valid product keyword
  await productsPage.searchProduct('Top');

  // Step 3: Verify the "Searched Products" heading is displayed
  await expect(productsPage.searchedProductsHeading).toBeVisible();

  // Step 4: Verify that at least one search result product item appears
  await expect(productsPage.productItems.first()).toBeVisible();
});