//import {test,expect} from '@playwright/test';
const {test,expect} = require('@playwright/test');
test('Verify login', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const url=  page.url();
    console.log("Url is "+url);

    const title=  page.title();
    console.log("title is "+title);

   await expect(page).toHaveTitle("Automation Testing Practice");
   await page.locator('//input[@id="name"]').fill("john");
   await page.getByPlaceholder("Enter EMail").fill("john@mail.com");
   await page.locator("#phone").fill('1234567890');
   await page.locator('//label[contains(text(),"Address:")]').fill("Street one");
  //await page.waitForTimeout(3000);
   
   await page.locator('//input[@class="form-check-input" and @id="female"]').check();
   await page.locator('//input[@class="form-check-input" and @id="monday"]').check();
  //await page.waitForTimeout(3000);

  await page.selectOption('#country', 'australia');
  
  await page.selectOption('#colors', {label:'Red'});
  await page.selectOption('#animals', {index:5});


//date picker1
await page.locator('//p[contains(text(),"Date Picker 1")]/input').click();
let day= "15/01/2026";
const date= day.split("/")[0];
await page.locator(`//a[@class="ui-state-default" and text()=${date} ]`).click();

//date picker2
await page.locator('//p[contains(text(),"Date Picker 2")]/input').click();
await page.selectOption('.ui-datepicker-month', {label: 'Feb'});
await page.selectOption('.ui-datepicker-year', '2025');
let day2= "15/02/2025";
const date2= day.split("/")[0];
await page.locator(`//a[@class="ui-state-default" and text()=${date2} ]`).click();

//date picker3
await expect(page.locator('#start-date')).toBeEnabled();
await page.getByPlaceholder("Start Date").fill("2026-01-15");
await page.locator('#end-date').fill("2026-02-15");

await page.locator('//button[@class="submit-btn" and text()="Submit"]').click();
await expect(page.locator('//div[contains(text(),"You selected a range of 31 days.")]')).toContainText("You selected a range of 31 days.");

await page.getByText("Upload Single File").click();
//await expect(page.locator('#singleFileStatus')).toContainText("No file selected.");
await expect(page.getByText("No file selected.")).toBeVisible();
await page.waitForTimeout(3000);

await page.close();
});
