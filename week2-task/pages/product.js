exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsLink = page.getByRole('link', { name: ' Products' });
    this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
    this.searchBtn = page.locator('#submit_search');
  }

  async navigateToProducts() {
    await this.productsLink.click();
  }

  // Generic method to filter by clicking a brand name in the sidebar
  async selectBrand(brandName) {
    await this.page.getByRole('link', { name: brandName }).click();
  }

  // Generic method to search for any product or brand name via search bar
  async searchProduct(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchBtn.click();
  }
};