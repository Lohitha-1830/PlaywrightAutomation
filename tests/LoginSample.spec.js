import{test,expect} from '@playwright/test';

test("test login functionality", async({browser})=>{

    // const browser= await chromium.launch({
    //     headless:false
    // });
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://admin-demo.nopcommerce.com');
    await page.locator('input[name="Email"]').clear()
    await page.locator('input[name="Email"]').fill('admin@yourstore.com');
    await page.locator('#Password').clear()
    await page.locator('#Password').fill('admin');
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(5000);
    const nextpage = await context.newPage();
    await nextpage.goto('https://admin-demo.nopcommerce.com',{timeout:3000});
    
    const context1= await browser.newContext();
    const page1= await context1.newPage();
    await page1.goto('https://admin-demo.nopcommerce.com',{timeout:3000});
   //  await page.waitForTimeout(5000);
   await page1.screenshot({path:'./test-results/screenshot.png',fullPage:true});
   
})