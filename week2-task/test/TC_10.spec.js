import { test, expect } from '@playwright/test';
const { ProductsPage } = require('../pages/product.js'); // Relative to tests/test folder

test('TC-10: Verify brand navigation filter (Polo)', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  // 1. Log in
  await page.goto('https://automationexercise.com/login');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('imoh12test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 2. Navigate to Products page using POM
  await productsPage.navigateToProducts();

  // 3. Filter by Brand 
  await productsPage.selectBrand('Polo');

  // 4. Assertion
  await expect(page.getByRole('heading', { name: 'Brand - Polo Products' })).toBeVisible();
});