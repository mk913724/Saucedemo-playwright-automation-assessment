const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { InventoryPage } = require('../pages/inventory.page');
const { CartPage } = require('../pages/cart.page');
// FIX 1: Import the CheckoutPage class
const { CheckoutPage } = require('../pages/checkout.page'); 

test('Q2: Standard user login and cart verification', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  // FIX 2: Instantiate the checkoutPage object
  const checkoutPage = new CheckoutPage(page);

  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addFirstThreeItemsToCart();

  await inventoryPage.cartLink.click();

  const actualProductNames = await cartPage.getCartItemNames();

  const expectedProductNames = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt'
  ];

  expect(actualProductNames).toEqual(expectedProductNames);
  await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
  await checkoutPage.finishCheckout();

  await expect(checkoutPage.completeHeader).toBeVisible();
  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');

  await checkoutPage.logout();

  await expect(loginPage.loginButton).toBeVisible();
});
