const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const render = require('./src/page-template.js');
const manager = require('./lib/manager.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const employee = require('./lib/employee.js');
const employeeTeam = [];

// function buildTeam() {
//     if (options.choice)
// }
const options = () => {
    return inquirer.createPromptModule([
        {
            type: 'list',
            name: 'addworker',
            message: 'please select one of the following',
            choices: ['Add Engineer', 'Add Intern', 'No more members to be added at this time.']
        }
    ])
    if (Response === 'Add Engineer') { addEngineer() };
    if (Response === 'Add Intern') { addIntern() };
    if (Response === 'No more members to be added at this time.') { };
}
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter the project managers name',
            validate: nameInfo => {
                if (nameInfo) {
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
                    return false;
                    console.log('Please enter a officeNumber');
                }
            }
        },
    ])
        .then(answers => {
            const manager = new manager(answrs.managerName, answers.managerId, answers.Email, answers.managerOfficeNumber);
            employeeTeam.push(manager);
            options();
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
                    return false;
                    console.log('Please enter a github username');
                }
            }
        },
    ])
        .then(answers => {
            const engineer = new engineer(answrs.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            employeeTeam.push(engineer);
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
                    return false;
                    console.log('Please enter interns previous school');
                }
            }
        },
    ])
        .then(answers => {
            const intern = new intern(answrs.internName, answers.internId, answers.internEmail, answers.internSchool);
            employeeTeam.push(intern);
            options();
        });
}
fs.writeFile('team-viewer.html', 'utf8', (error, data) =>
    error ? console.error(error) : console.log(data)