import { test, expect } from '@playwright/test';
const { CartPage } = require('../pages/cart');
const { PaymentPage } = require('../pages/payment');

test('TC-21: Verify payment fails with empty card fields using POM', async ({ page }) => {
  const cartPage = new CartPage(page);
  const paymentPage = new PaymentPage(page);

  // 1. Log in to the application
  await page.goto('https://automationexercise.com/login');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('imoh12test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 2. Navigate to Cart page
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page.getByRole('cell', { name: 'Total' })).toBeVisible();

  // 3. Proceed to Checkout using POM
  await cartPage.proceedToCheckout();

  // 4. Scroll down and click Place Order
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await cartPage.placeOrder();

  // 5. Verify we are on the Payment page and attempt to pay with empty fields
  await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
  await paymentPage.clickPayAndConfirm();
});