// Config file for Protractor

exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    // specs: ['specs/*_spec.js'],
    suites: {
        calculator: 'specs/ng-calc_spec.js',
        mark7: 'specs/login_spec.js',
        tasks: 'specs/tasks_spec.js',
    },
    baseUrl: 'https://mark7-sandbox.herokuapp.com',
    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(5000);

        var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new JasmineHtmlReporter({
            savePath: 'reports',
            screenShotsFolder: './shots',
            takeScreenShots: true,
            cleanDestination: false,
            fixedScreenShotName: true
        }));

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true
            },
            summary: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displaySuccessful: true,
                displayFailed: true,
                displayDuration: true
            },
            colors: {
                enabled: true
            }
        }));
    },
    capabilities: {
        'browserName': 'chrome'
    }
}