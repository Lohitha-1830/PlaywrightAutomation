import { test, expect } from '@playwright/test';

test('Verify alerts functionality', async ({ page }) => {
    await page.video();
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.once('dialog', dialog => {
      const msg= dialog.message();
      console.log('Message is '+msg);
       expect(dialog.message()).toContain('I am an alert box!');
        dialog.accept()
    } );
    
    await page.locator('//button[@id="alertBtn" and @onclick="myFunctionAlert()"]').click();
    await page.setDefaultTimeout(3000);
    

    page.once('dialog', async dialog =>{
        expect(dialog.message()).toContain('Press a button!');
     dialog.accept(); 
     const msg= await page.locator('//p[@id="demo"]').innerText();
     console.log(" alert message is "+msg);

    });
    await page.locator('//button[@id="confirmBtn" and @onclick="myFunctionConfirm()"]').click();

    page.once('dialog', async dialog =>{
        const msg= dialog.message();
        console.log(msg);
        const name='Lohi';
     dialog.accept(name);
     
     await expect(page.locator(`//p[@id="demo"][contains(text(),'Hello ${name}! How are you today?')]`)).toContainText(`Hello ${name}! How are you today?`);
    });
    await page.locator('//button[@id="promptBtn" and @onclick="myFunctionPrompt()"]').click();

    await page.close();
});