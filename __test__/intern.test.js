const Intern = require('../lib/intern');

describe('getschool', () => {
    it('return interns previous school in a string', () => {
        const intern = new Intern('Andrew', '004', 'Andrew@gmail.com', 'MIT')
        expect(intern.getSchool()).toEqual('MIT');
    });
});

describe('getRole', () => {
    it('return interns position as intern', () => {
        const intern = new Intern('Andrew', '004', 'Andrew@gmail.com', 'MIT')
        expect(intern.getRole()).toEqual('Intern');
    });
});