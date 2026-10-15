
const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../pages/signup');

test('TC-01: User Registration', async ({ page }) => {
  const signupPage = new SignupPage(page);

  // Use your specified credentials
  const name = 'ImohQA tester';
  const email = 'imoh12test@gmail.com';
  const password = 'Password123';

  await signupPage.navigate();
  
  // Start signup with your specific name and email
  await signupPage.startSignup(name, email);
  
  // Fill the account details form with your password
  await signupPage.fillAccountDetails(password);

  // Verify that account creation was successful
  await expect(signupPage.successMessage).toBeVisible();
});