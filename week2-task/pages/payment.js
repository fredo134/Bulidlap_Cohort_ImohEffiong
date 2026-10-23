const { expect } = require('@playwright/test');

exports.PaymentPage = class PaymentPage {
  constructor(page) {
    this.page = page;
    this.cardNumberInput = page.locator('input[name="card_number"]');
    this.payButton = page.getByRole('button', { name: 'Pay and Confirm Order' });
  }

  async clickPayAndConfirm() {
    await this.payButton.click();
  }

  async expectCardNumberToBeInvalid() {
    await expect(this.cardNumberInput).toHaveJSProperty('validity.valueMissing', true);
  }
};