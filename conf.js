// Config file for Protractor

exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    specs: ['specs/*_spec.js'],
    // When using this is not possible use angular (ng-calc_spec.js)
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },
    capabilities: {
        'browserName': 'chrome'
    }
}