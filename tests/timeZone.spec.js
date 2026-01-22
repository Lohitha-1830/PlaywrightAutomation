import { test, expect } from '@playwright/test';
//const { test, expect } = require('@playwright/test');


test("test timezone based app", async ({ browser }) => {

  const context = await browser.newContext({
    locale: 'hi-IN',
    timezoneId: 'Asia/Kolkata',
  });
  const page = await context.newPage();

    await page.goto('https://www.amazon.in/');

    await expect(page.locator('//span[@class="icp-nav-flag icp-nav-flag-in icp-nav-flag-lop"]')).toBeVisible();
    await page.screenshot({ path: './test-results/screenshot.png', fullPage: true });

    await context.close();
});