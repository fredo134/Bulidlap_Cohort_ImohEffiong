exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#search_product');
    this.searchBtn = page.locator('#submit_search');
    this.searchedProductsHeading = page.locator('.title.text-center', { hasText: 'Searched Products' });
    this.productItems = page.locator('.features_items .productinfo');
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/products', { waitUntil: 'domcontentloaded' });
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchBtn.click();
  }
};