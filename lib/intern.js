const employee = require('./lib/employee,js');

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}
module.exports = intern;