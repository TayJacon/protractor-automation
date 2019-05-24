//Using arrow function
const Locators = require('../Common/locators');
const LoginPage = require('../PageObject/login');
const TaskPage = require('../PageObject/task');

describe('Tasks', () =>{

    const loginPage = new LoginPage();
    const taskPage = new TaskPage();
    const locators = new Locators();

    var task = {name: null};

    describe('When I login', () => {

        beforeAll(() => {
            loginPage.go();
            loginPage.doLogin('tj@test.com', '123456789')
            locators.newTaskButton.click();
        })

        it('Tasks with short name', () => {
            task.name = 'Study';
            taskPage.addTask(task);

            expect(locators.alertInfo.getText()).toEqual('10 caracteres é o mínimo permitido.');
        })

        it('Tasks without name', () => {
            task.name = '';
            taskPage.addTask(task);

            expect(locators.alertWarn.getText()).toEqual('Nome é obrigatório.');
        })

        it('Add a task', () => {
            task.name = 'Study node' + Math.random();
            taskPage.addTask(task);

            expect(taskPage.getItem(task.name).getText()).toContain("Em andamento");
        })
    })
})