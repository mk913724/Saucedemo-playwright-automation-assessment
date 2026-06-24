class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    
    // Selectors for logout
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
  }

  async addFirstThreeItemsToCart() {
    for (let i = 0; i < 3; i++) {
      await this.inventoryItems.nth(i).getByRole('button', { name: 'Add to cart' }).click();
    }
  }

  async sortProductByZA() {
    await this.sortDropdown.selectOption('za');
  }

  // FIX: Added the explicit logout action method
  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}

module.exports = { InventoryPage };
