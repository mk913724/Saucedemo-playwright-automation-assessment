class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorContainer = page.locator('h3[data-test="error"]');
  }

  async login(username, password) {
    await this.page.goto('https://www.saucedemo.com/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
