const baseclass= require('./baseclass.js');

class Login extends baseclass{
    constructor(page){
        super(page);
        this.userName=page.locator('[name="uid"]');
        this.password= page.locator('[name="password"]');
        this.loginButton=page.locator('[name="btnLogin"]');
    }
    async login(userName,password){
        await this.enterText(this.userName,userName);
        await this.enterText(this.password,password);
        await this.clickOnButton(this.loginButton);
    }
}
module.exports=Login;