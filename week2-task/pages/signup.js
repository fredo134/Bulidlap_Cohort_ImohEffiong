exports.SignupPage = class SignupPage {
  constructor(page) {
    this.page = page;
    this.signupLoginBtn = page.locator("a[href='/login']");
    this.nameInput = page.locator("input[data-qa='signup-name']");
    this.emailInput = page.locator("input[data-qa='signup-email']");
    this.signupBtn = page.locator("button[data-qa='signup-button']");
    
    
    this.existingEmailError = page.locator("text=Email Address already exist!");
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/login', { waitUntil: 'domcontentloaded' });
  }

  async attemptExistingEmailSignup(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupBtn.click();
  }
};