//import {test,expect} from '@playwright/test';
const {test,expect} = require('@playwright/test');
test('Verify login', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const url=  page.url();
    console.log("Url is "+url);

    const title=  await page.title();
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
//upload single File
const upload = page.waitForEvent('filechooser');
await page.locator('#singleFileInput').click();
const uploadFile = await upload;
await uploadFile.setFiles('C:/Users/veeravenkatal.pandr/OneDrive - HCL TECHNOLOGIES LIMITED/Desktop/UploadFileSample.png');
await page.getByText("Upload Single File").click();

//webtable
const row= await page.locator('//table[@name="BookTable"]/tbody/tr');
const rows= await row.count();
console.log('Total rows are '+ rows);

const ebookName= 'Learn Java';
const eAuthor= 'Mukesh';
const eprice= '500';

for(let i=1; i<rows;i++){
  const bookName= await row.nth(i).locator('td').nth(0).innerText();
  //console.log("Book Name "+bookName);
  if(bookName===ebookName){
 const author = await row.nth(i).locator('td').nth(1).innerText();
 const price = await row.nth(i).locator('td').nth(3).innerText();

 console.log("Book Name "+bookName);
 console.log("Author Name "+author);
 console.log("Price "+price);

 await expect(author).toBe(eAuthor);
 await expect(price).toBe(eprice);
}
}
//second and direct way to assert in a row using has
const bName= page.locator('//table[@name="BookTable"]/tbody/tr',
{has: page.locator('td',{hasText:'Master In JS'}) });
console.log('------- '+bName);
await expect(bName.locator('td').nth(1)).toHaveText('Amit');
await expect(bName.locator('td').nth(3)).toHaveText('1000');

await page.waitForTimeout(3000);

await page.close();
});
