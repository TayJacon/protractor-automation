const Locators = require('../Common/locators');

class Login {

    constructor() {
        this.path = '/login';
        this.locator = new Locators();
    }

    doLogin(email, password) {
        this.locator.loginField.sendKeys(email);
        this.locator.passwordField.sendKeys(password);
        this.locator.loginButton.click();
    }
}
module.exports = Login;