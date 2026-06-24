const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('Q1: Verification of locked out error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(loginPage.errorContainer).toBeVisible();
  await expect(loginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});
