// Config file for Protractor

exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    // specs: ['specs/*_spec.js'],
    suites: {
        calculator: 'specs/ng-calc_spec.js',
        mark7: 'specs/mark7'
    },
    // When using this is not possible use angular (ng-calc_spec.js)
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },
    capabilities: {
        'browserName': 'chrome'
    }
}