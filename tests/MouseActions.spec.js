const {test,expect} = require('@playwright/test') ;
const baseclass = require('../Pages/baseclass.js');

test("Verify mouse actions", async ({page})=>{
   const actn = new baseclass(page);
    actn.openUrl('https://testautomationpractice.blogspot.com/');

   await page.getByText('Point Me').hover();
   const ele =  page.locator('//a[contains(text(),"Mobiles")]');
   await expect(ele).toBeVisible();
   await ele.click();
   
   await page.getByText('Copy Text').dblclick();
   //const field2Text =  await page.locator('#field2').innerText();
   //await expect(field2Text).toContain("Hello World!");
   
   const drag = await page.getByText('Drag me to my target');
   const drop = await page.getByText('Drop here');
  // await page.dragAndDrop(drag,drop); -- accepts strings
  await drag.dragTo(drop);
   await expect(page.locator('//div[@id="droppable"]')).toHaveText('Dropped!');
//    await page.mouse.down();
//    await page.mouse.move(drag,drop);
//    await page.mouse.up();

  await page.getByPlaceholder('Select an item').click();
  
const item = page.getByText('Item 80');

await item.scrollIntoViewIfNeeded();
await item.click();
await page.screenshot({path:'./test-results/screenshot.png', fullPage:true});
   actn.closeBrowser();

})