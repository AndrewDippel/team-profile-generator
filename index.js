const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');


const manager = [
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
        name: 'officeNumber',
        message: 'enter office number',
    },
    {
        type: 'list',
        name: 'newEmployee',
        message: 'please select from the following:',
        choices: ['add new Endineer', 'add new Intern', 'fnish building my team']
    },
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
    {
        type: 'list',
        name: 'newEmployee',
        message: 'please select from the following:',
        choices: ['add new Endineer', 'add new Intern', 'fnish building my team']
    },
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
    {
        type: 'list',
        name: 'newEmployee',
        message: 'please select from the following:',
        choices: ['add new Endineer', 'add new Intern', 'fnish building my team']
    },
]