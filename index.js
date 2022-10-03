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

]