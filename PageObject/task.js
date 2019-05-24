const Locators = require('../Common/locators');

class TaskPage {
    constructor() {
        this.locator = new Locators();
        this.path = '/tasks'
        this.EC = protractor.ExpectedConditions;
    }

    addTask(task){
        this.locator.inputName.clear();
        this.locator.inputName.sendKeys(task.name);
        this.locator.addButton.click();
    }

    getItem(item){
        browser.wait(this.EC.presenceOf($('#task-board')), 3000);
        return element(by.cssContainingText('tr', item));
    }
}
module.exports = TaskPage;