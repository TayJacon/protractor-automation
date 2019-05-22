// Config file for Protractor

exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    specs: ['specs/*-spec.js'],
    capabilities: {
        'browserName': 'chrome'
    }
}