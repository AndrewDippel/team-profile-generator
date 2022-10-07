const fs = require('fs');
const jest = require('jest')
const path = require('path');
const inquirer = require('inquirer');
const render = require('./src/page-template');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const employee = require('./lib/employee');

function init() {
    addManager();
    options();
}
class options {
    constructor() {
        this.employeeTeam = [];
    }
    returns

    getEmployeeTeam() {
        return this.employeeTeam;
    }
    workerSelector() {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'addworker',
                message: 'please select one of the following',
                choices: ['Add Engineer', 'Add Intern', 'No more members to be added at this time.']
            }
        ])
        if (Response === 'Add Engineer') { addEngineer() };
        if (Response === 'Add Intern') { addIntern() };
        if (Response === 'No more members to be added at this time.') { generateFile() };
    }
}
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter the project managers name',
            validate: nameInfo => {
                if (nameInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a name');
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the project managers Id',
            validate: idInfo => {
                if (idInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a valid id');
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter the project managers email',
            validate: emailInfo => {
                if (emailInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a email');
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter the project managers officeNumber',
            validate: officeNumberInfo => {
                if (officeNumberInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a officeNumber');
                }
            }
        },
    ])
        .then((answers) => {
            const teamManager = new Manager(`${answers.managerName}, ${answers.managerId}, ${answers.Email}, ${answers.managerOfficeNumber}`);
            console.log(teamManager);
            employeeTeam.push(teamManager);
        });


}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Enter the engineers name',
            validate: nameInfo => {
                if (nameInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a name');
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter the engineers Id',
            validate: idInfo => {
                if (idInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a valid id');
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter the engineers email',
            validate: emailInfo => {
                if (emailInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a email');
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'enter the engineers github',
            validate: githubInfo => {
                if (githubInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a github username');
                }
            }
        },
    ])
        .then((answers) => {
            const newEngineer = new Engineer(`${answers.engineerName}, ${answers.engineerId}, ${answers.engineerEmail}, ${answers.engineerGithub}`);
            employeeTeam.push(newengineer);
            options();
        });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Enter the intern name',
            validate: nameInfo => {
                if (nameInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a name');
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Enter the intern Id',
            validate: idInfo => {
                if (idInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a valid id');
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter the intern email',
            validate: emailInfo => {
                if (emailInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter a email');
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'enter the intern previous school',
            validate: schoolInfo => {
                if (schoolInfo) {
                    return true;
                }
                else {
                    return false;
                    console.log('Please enter interns previous school');
                }
            }
        },
    ])
        .then((answers) => {
            const newIntern = new Intern(`${answers.internName}, ${answers.internId}, ${answers.internEmail}, ${answers.internSchool}`);
            employeeTeam.push(newintern);
            options();
        });
}
function generateFile() {
    fs.writeFile('team-viewer.html', 'utf8', (error, data) =>
        error ? console.error(error) : console.log(data));
}

init()