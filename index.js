const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const render = require('./src/page-template.js');
const manager = require('./lib/manager.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const employee = [];


console.log('Use `npm run reset` to reset the team')
const options = () => {
    return inquirer.createPromptModule([
        {
            type: 'list',
            name: 'addworker',
            message: 'please select one of the following',
            choices: ['Add Engineer', 'Add Intern', 'No more members to be added at this time.']
        }
    ])
}
function addMember() {
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
            validate: nameInfo => {
                if (idInfo) {
                    return false;
                    console.log('Please enter a valid id');
                }
            }
        },
        {
            type: 'input',
            name: 'manageremail',
            message: 'Enter the project managers email',
            validate: nameInfo => {
                if (emailInfo) {
                    return false;
                    console.log('Please enter a email');
                }
            }
        },

    ])
}


{
    type: 'input',
        name: 'officeNumber',
            message: 'enter office number',
    },
options()
]
const engineer = [
    {
        type: 'input',
        name: 'name',
        message: 'enter managers name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email',
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your github username',
    },
    options()
]
const intern = [
    {
        type: 'input',
        name: 'name',
        message: 'enter managers name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email',
    },
    {
        type: 'input',
        name: 'school',
        message: 'enter the name of the school you attended',
    },
    options()
]