import { test, expect } from '@playwright/test';
const { SignupPage } = require('../pages/signup');

test('TC-02: Verify registration fails with already registered email (POM)', async ({ page }) => {
  const signupPage = new SignupPage(page);

  // Test Data
  const name = 'ImohQA tester';
  const email = 'imoh1test@gmail.com';

  // 1. Navigate to the login/signup page using POM
  await signupPage.navigate();

  // 2. Attempt signup with the existing email using POM method
  await signupPage.attemptExistingEmailSignup(name, email);

  // 3. Assert that the duplicate email error message is visible
  await expect(signupPage.existingEmailError).toBeVisible();
});