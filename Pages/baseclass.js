class baseclass{
    constructor(page){
        this.page=page;
    }
    async enterText(locator,text){
        await locator.fill(text);
    }
    async navigate(url){
        await this.page.goto(url);
    }
    async clickOnButton(locator){
        await locator.click();
    }
    async getText(locator){
        return await locator.textContent();
    }
    async timeout(time){
        await this.page.waitForTimeout(time);
    }
    async closeBrowser(){
        await this.page.close();
    }
}
module.exports= baseclass;