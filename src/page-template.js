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

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./Assets/styles.css">

    <title>My Team</title>
</head>

<body>
    <div class="container-fluid">
        <div class = "row">
            <div class="col-12 jumbotron mb-3">
            </div>
        </div>
    </div>
</body>
    `
}