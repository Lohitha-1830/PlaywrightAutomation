const{test,expect} = require('@playwright/test');

test("Switch to new page", async({page})=>{

    page.goto('https://the-internet.herokuapp.com/windows');
    const newPage = page.waitForEvent('popup');
    await page.locator('//a[contains(text(),"Click Here")]').click();
    const page1= await newPage;
     await expect(page1.locator('//h3[contains(text(),"New Window")]')).toHaveText('New Window');
//close page1 and come back to parent window and assert title
    page1.close();
    await page.bringToFront();
    await expect(page).toHaveTitle('The Internet');
    // const title= await page.title();
    // expect(title).toContain('The Internet'); 


})