exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.proceedToCheckoutBtn = page.getByText('Proceed To Checkout');
    this.placeOrderBtn = page.getByRole('link', { name: 'Place Order' });
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }
};