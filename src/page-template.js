function generateMemberHtml(member) {
    console.log(member)
    if (member.getRole() === 'Manager') {
        return `<div class="col-4 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="name">${member.name}</h2>
                            <h3><i class="bi bi-briefcase-fill">Manager</i></h3>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${member.id}</p>
                            <p class="email">Email: <a href="mailto:${member.email}">${member.email}</a></p>
                            <p class="officeNumber">Office Number: ${member.officeNumber}</p>
                        </div>
                    </div>
                </div>`;
    }
    if (member.getRole() === 'Engineer') {
        return `<div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="name">${member.name}</h2>
                <h3><i class="bi bi-tools">Engineer</i></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${member.id}</p>
                <p class="email">Email: <a href="mailto:${member.email}">${member.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></p>
                </div>
            </div>
        </div>`;
    }
    if (member.getRole() === 'Intern') {
        return `<div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="name">${member.name}</h2>
                <h3><i class="bi bi-mortarboard-fill">Intern</i></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${member.id}</p>
                <p class="email">Email: <a href="mailto:${member.email}">${member.email}</a></p>
                <p class="github">School: ${member.school}</p>
                </div>
            </div>
        </div>`;
    }
}

const generatePage = function (team) {
    console.log(team)
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
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
            <div class="row justify-content-center">
            ${team.map(member => {
        return generateMemberHtml(member)
    })}
            </div>
        </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>`;
}

module.exports = generatePage;