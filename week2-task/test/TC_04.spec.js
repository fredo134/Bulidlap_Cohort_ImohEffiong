import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login');

test('TC-04: Verify login fails with incorrect password (POM)', async ({ page }) => {
  const loginPage = new LoginPage(page);


  const invalidEmail = 'imoh1test@gmail.com';
  const wrongPassword = 'WrongPassword123';


  await loginPage.navigate();


  await loginPage.login(invalidEmail, wrongPassword);




  await expect(loginPage.errorMessage).toBeVisible();
});