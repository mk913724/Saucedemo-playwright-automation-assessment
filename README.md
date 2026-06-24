# Saucedemo Playwright Automation Assessment

Automated UI testing framework for the SauceDemo application using Playwright, JavaScript, and the Page Object Model (POM) design pattern.

## Project Overview

This project was developed as an automation assessment to validate core user workflows on the SauceDemo website.

The framework is designed with:

- Playwright Test Runner
- JavaScript
- Page Object Model (POM)
- HTML Reporting
- GitHub Actions CI/CD
- GitHub Pages Report Publishing

## Test Scenarios

### Q1 - Locked Out User Validation

- Login with locked_out_user
- Verify the locked user error message is displayed

### Q2 - Standard User Purchase Flow

- Login with standard_user
- Add products to cart
- Verify cart contents
- Complete checkout process
- Verify successful order completion

### Q3 - Performance Glitch User Flow

- Login with performance_glitch_user
- Add products to cart
- Complete checkout process
- Verify application functionality under delayed response conditions

---

## Project Structure

```text
.
├── .github
│   └── workflows
│       └── playwright.yml
│
├── pages
│   ├── login.page.js
│   ├── inventory.page.js
│   ├── cart.page.js
│   └── checkout.page.js
│
├── tests
│   ├── Q1_locked_out_user.spec.js
│   ├── Q2_standard_user.spec.js
│   └── Q3_performance_glitch.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/mk913724/Saucedemo-playwright-automation-assessment.git
```

Move to project directory:

```bash
cd Saucedemo-playwright-automation-assessment
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/Q1_locked_out_user.spec.js
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

---

## Generate HTML Report

After execution:

```bash
npx playwright show-report
```

---

## CI/CD Pipeline

GitHub Actions automatically:

- Installs dependencies
- Installs Playwright browsers
- Executes test cases
- Generates HTML report
- Publishes report to GitHub Pages

---

## Live Report

GitHub Pages Report:

https://mk913724.github.io/Saucedemo-playwright-automation-assessment/

---

## GitHub Repository

Repository Link:

https://github.com/mk913724/Saucedemo-playwright-automation-assessment

---

## Technologies Used

- Playwright
- JavaScript
- Node.js
- GitHub Actions
- GitHub Pages
- Page Object Model (POM)

---

## Author

Moniruzzaman

Software Quality Assurance (SQA) Engineer

GitHub:
https://github.com/mk913724
