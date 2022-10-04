const employee = require('./lib/employee,js');

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}
module.exports = engineer;