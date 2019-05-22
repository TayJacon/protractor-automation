var Locators = require('../Common/locators');

describe('Login', function() {
    var locator = new Locators;

    it('Invalid password', function(){
        browser.get('https://mark7.herokuapp.com/login');
        locator.loginField;
        
    })
})