const engineer = require("../lib/engineer");

const genManager = function (manager) {
    return
    `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="name">${manager.name}</h2>
                <h3><i class="bi bi-briefcase-fill">Manager</i></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const genEndineer = function (engineer) {
    return
    `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="name">${engineer.name}</h2>
                <h3><i class="bi bi-tools">Engineer</i></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `;
}

const genIntern = function (intern) {
    return
    `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="name">${intern.name}</h2>
                <h3><i class="bi bi-mortarboard-fill">Intern</i></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="github">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}
generateHtml = (data) => {
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const position = employee.addWorker();

        if (position === Manager) {
            const managerCrd = genManager(employee);
            cardArray.push(managerCrd);
        }
        if (position === Engineer) {
            const engineerCrd = genEndineer(employee);
            cardArray.push(engineerCrd);
        }
        if (position === Intern) {
            const internCrd = genIntern(employee);
            cardArray.push(internCrd);
        }
    }
    const employeeCards = cardArray.join('')
    const generateTeam = generatePage(employeeCards);
    return generateTeam;
}

const generatePage = function () {
    return
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <header>
        <nav class="navbar">
        <span class="navbar-brand mb-0 h1">Team Profile</span>
        </nav>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center"
            ${employeecards}

            </div>
        </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>
    `;
}

module.exports = generateHtml;