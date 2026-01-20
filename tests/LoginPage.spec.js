const {test,expect,chromium} = require('@playwright/test') ;
const Login = require('../Pages/Login.js');
const testData = require('../testdata/testData.json');
//const baseclass = require('./Pages/baseclass.js');
test("Verify login", async()=>{
   
const browser=await chromium.launch({
    headless:false
});
const context = await browser.newContext();
const page= await context.newPage();
const loginPage = new Login(page);
await loginPage.navigate('https://demo.guru99.com/V4/');
//await loginPage.login('demo','demo123');

await loginPage.login(testData.validUser.username,testData.validUser.password);
await loginPage.closeBrowser();

});