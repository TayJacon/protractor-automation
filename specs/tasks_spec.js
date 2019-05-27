//Using arrow function
const Locators = require('../Common/locators');
const LoginPage = require('../PageObject/login');
const TaskPage = require('../PageObject/task');

describe('Tasks', () =>{

    const loginPage = new LoginPage();
    const taskPage = new TaskPage();
    const locators = new Locators();

    var newTask = {name: 'Study node'};

    describe('When I login', () => {

        beforeAll(() => {
            const serviceDB = require('../mongo');
            serviceDB.deleteByName(newTask.name).then(res => console.log(res));

            loginPage.go();
            loginPage.doLogin('tj@test.com', '123456789')
            locators.newTaskButton.click();
        })

        it('Tasks with short name', () => {
            taskPage.addTask({name: 'Study'});

            expect(locators.alertInfo.getText()).toEqual('10 caracteres é o mínimo permitido.');
        })

        it('Tasks without name', () => {
            taskPage.addTask({ name: ''});

            expect(locators.alertWarn.getText()).toEqual('Nome é obrigatório.');
        })

        it('Add a task', () => {
            // task.name = 'Study node' + Math.random();
            taskPage.addTask(newTask);

            expect(taskPage.getItem(newTask.name).getText()).toContain("Em andamento");
        })
    })
})