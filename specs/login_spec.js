const Locators = require('../Common/locators');

describe('Login', function() {
    const locator = new Locators;

    beforeEach(function() {
        browser.get('https://mark7-sandbox.herokuapp.com/login');
    })

    it('Invalid password', function(){
        locator.loginField.sendKeys('me@papito.io');
        locator.passwordField.sendKeys('123abc');
        locator.loginButton.click();

        expect(locator.alertLogin.getText()).toEqual('Senha inválida.');
    })

    it('User not registered', function(){
        locator.loginField.sendKeys('404@papito.io');
        locator.passwordField.sendKeys('123abc');
        locator.loginButton.click();

        expect(locator.alertLogin.getText()).toEqual('Usuário não cadastrado.');
    })

    it('Email message validation', function(){
        locator.passwordField.sendKeys('123abc');
        locator.loginButton.click();

        expect(locator.alertLogin.getText()).toEqual('Email incorreto ou ausente.');
    })

    it('Pasword message validation', function(){
        locator.loginField.sendKeys('me@papito.io');
        locator.loginButton.click();

        expect(locator.alertLogin.getText()).toEqual('Senha ausente.');
    })

    it('Password size message validation', function(){
        locator.loginField.sendKeys('me@papito.io');
        locator.passwordField.sendKeys('123');
        locator.loginButton.click();

        expect(locator.alertLogin.getText()).toEqual('Senha deve ter no mínimo 6 caracteres.');
    })
})