const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');

test('TC-03: Valid User Authentication / Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate directly to the login page
  await loginPage.navigate();

  // Use your created account credentials
  const testEmail = 'imoh1test@gmail.com';
  const password = 'Password123';

  // Perform login
  await loginPage.login(testEmail, password);

  // Verify that login was successful and the username indicator is visible
  await expect(loginPage.loggedUserName).toBeVisible();
});