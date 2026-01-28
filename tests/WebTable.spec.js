const {test,expect} = require('@playwright/test');

test("verify webtable data", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#");
    
    //  const bookRow= await page.locator('//table[@name="BookTable"]/tbody/tr', {has: page.locator('td', {hasText: 'Learn Selenium'})});
    //  await expect(bookRow.locator('td').nth(1)).toHaveText('Amit');
    //  await expect(bookRow.locator('td').nth(3)).toHaveText('300');

    const rows= page.locator('//table[@name="BookTable"]/tbody/tr');
    const rowCount= await rows.count();

    console.log("total number of rows ",rowCount);

    const ebookName= "Learn Selenium";
    const eauthor="Amit";
    const eprice="300";
   
    for(let i=1; i<rowCount;i++){
    
        const bookName=await rows.nth(i).locator('td').nth(0).innerText();

        if(bookName===ebookName){
            const author = await rows.nth(i).locator('td').nth(1).innerText();
            const price= await rows.nth(i).locator('td').nth(3).innerText();

            console.log(`Book name: ${bookName}`);
            console.log(`Author name: ${author}`);
            console.log(`Price: ${price}`);

            await expect(author).toBe(eauthor);
            await expect(price).toBe(eprice);
            break;
                    }
    }
    //await page.locator(`//table[@name="BookTable"]/tbody/tr/td[contains(text(),${bookName})]`);
 
    
})