// Config file for Protractor

exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    // specs: ['specs/*_spec.js'],
    suites: {
        calculator: 'specs/ng-calc_spec.js',
        mark7: 'specs/login_spec.js'
    },
    baseUrl: 'https://mark7-sandbox.herokuapp.com',
    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(5000);
    },
    capabilities: {
        'browserName': 'chrome'
    }
}