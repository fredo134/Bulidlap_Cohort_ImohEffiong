exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator("input[data-qa='login-email']");
    this.passwordInput = page.locator("input[data-qa='login-password']");
    this.loginBtn = page.locator("button[data-qa='login-button']");
    this.loggedUserName = page.locator("a:has-text('Logged in as')");
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/login', { waitUntil: 'domcontentloaded' });
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
};