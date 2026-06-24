const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  /* প্যারালাল রান বন্ধ করে সিরিয়ালি ১টি ওয়ার্কার দিয়ে রান করানো */
  fullyParallel: false,
  workers: 1,
  retries: 0,
  /* পারফরম্যান্স গ্লিচ ইউজারের জন্য টাইম-আউট বাড়িয়ে ৪৫ সেকেন্ড করা হলো */
  timeout: 45000,
  
  reporter: [
    ['html'],
    ['allure-playwright']
  ],
  
  use: {
    headless: false,
    testIdAttribute: 'data-test',
    screenshot: 'only-on-failure',
  },

  /* শুধুমাত্র ক্রোমিয়াম (Chrome) প্রজেক্টটি অন রাখা হলো বাকিগুলো বন্ধ */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
