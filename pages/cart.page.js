class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
  }

  async getCartItemNames() {
    return await this.cartItems.locator('.inventory_item_name').allTextContents();
  }
}

module.exports = { CartPage };
