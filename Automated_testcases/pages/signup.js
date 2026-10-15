exports.SignupPage = class SignupPage {
  constructor(page) {
    this.page = page;
    this.signupLoginBtn = page.locator("a[href='/login']");
    this.nameInput = page.locator("input[data-qa='signup-name']");
    this.emailInput = page.locator("input[data-qa='signup-email']");
    this.signupBtn = page.locator("button[data-qa='signup-button']");
    
    // Account details form locators
    this.titleRadio = page.locator("#id_gender1"); // Mr.
    this.passwordInput = page.locator("#password");
    this.daysSelect = page.locator("#days");
    this.monthsSelect = page.locator("#months");
    this.yearsSelect = page.locator("#years");
    this.firstNameInput = page.locator("#first_name");
    this.lastNameInput = page.locator("#last_name");
    this.address1Input = page.locator("#address1");
    this.countrySelect = page.locator("#country");
    this.stateInput = page.locator("#state");
    this.cityInput = page.locator("#city");
    this.zipcodeInput = page.locator("#zipcode");
    this.mobileInput = page.locator("#mobile_number");
    this.createAccountBtn = page.locator("button[data-qa='create-account']");
    
    // Success confirmation
    this.successMessage = page.locator("b:has-text('Account Created!')");
  }

  async navigate() {
    // Using domcontentloaded prevents timeouts caused by slow background third-party scripts/ads
    await this.page.goto('https://automationexercise.com', { waitUntil: 'domcontentloaded' });
  }

  async startSignup(name, email) {
    await this.signupLoginBtn.click();
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupBtn.click();
  }

  async fillAccountDetails(password) {
    await this.titleRadio.click();
    await this.passwordInput.fill(password);
    await this.daysSelect.selectOption('15');
    await this.monthsSelect.selectOption('June');
    await this.yearsSelect.selectOption('1995');
    
    await this.firstNameInput.fill('John');
    await this.lastNameInput.fill('Doe');
    await this.address1Input.fill('123 QA Street');
    await this.countrySelect.selectOption('United States');
    await this.stateInput.fill('California');
    await this.cityInput.fill('San Francisco');
    await this.zipcodeInput.fill('94107');
    await this.mobileInput.fill('1234567890');
    
    await this.createAccountBtn.click();
  }
};