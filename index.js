const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const team = [];

function init() {//function to initialize project
    addManager();
}
//function to display option or adding intern, engineer or finish building your team
function options() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addWorker',
            message: 'please select one of the following',
            choices: ['Add Engineer', 'Add Intern', 'No more members to be added at this time.']
        }
    ])
        .then(position => {
            switch (position.addWorker) {
                case 'Add Engineer':
                    return addEngineer();
                case 'Add Intern':
                    return addIntern()
                case 'No more members to be added at this time.':
                    return buildTeam()
            }
        })

}
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the project managers name',
            validate: name => {
                if (name) {
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
            name: 'id',
            message: 'Enter the project managers Id',
            validate: id => {
                if (id) {
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
            name: 'email',
            message: 'Enter the project managers email',
            validate: email => {
                if (email) {
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
            name: 'officeNumber',
            message: 'Enter the project managers officeNumber',
            validate: officeNumber => {
                if (officeNumber) {
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
            const teamManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(teamManager);
            console.log(teamManager);
            console.log(team);
            options();
        })


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
            const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            team.push(newEngineer);
            console.log(newEngineer);
            console.log(team);
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
            const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            team.push(newIntern);
            console.log(newIntern);
            console.log(team);
            options();
        });
}


function buildTeam() {
    // const generate = render(team)
    console.log(team);
    console.log(generatePage(team));
    fs.writeFile('./dist/team.html', generatePage(team), function () {
        console.log('your team is being generated!')
    })
}


init()