/* 
 * A list of locators that can be use on project
 */

var Locators = function () {
    this.first = element(by.model('first'))
    this.second = element(by.model('second'))
    this.calcButton = element(by.id('gobutton'))
    this.lastBinding = element(by.binding('latest'))
    this.allResults = element.all(by.repeater('result in memory').column('result.value'))
};
module.exports = Locators;