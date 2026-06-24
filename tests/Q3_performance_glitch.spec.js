const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { InventoryPage } = require('../pages/inventory.page');
const { CartPage } = require('../pages/cart.page');

test('Q3: Performance glitch user login, sorting and logout verification', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.login('performance_glitch_user', 'secret_sauce');

  await inventoryPage.sortProductByZA();

  await inventoryPage.inventoryItems.nth(0).getByRole('button', { name: 'Add to cart' }).click();

  await expect(inventoryPage.cartBadge).toHaveText('1');

  await inventoryPage.cartLink.click();

  const actualProductNames = await cartPage.getCartItemNames();
  const expectedProductName = ['Test.allTheThings() T-Shirt (Red)'];
  expect(actualProductNames).toEqual(expectedProductName);

  await inventoryPage.logout();

  await expect(loginPage.loginButton).toBeVisible();
});
