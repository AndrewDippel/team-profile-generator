const jest = require('jest');
const Employee = require('../lib/employee.js');


describe('getName', () => {
    it('return employees name for each sub class of employee', () => {
        const employee = new Employee('Andrew', 004, 'Andrew@gmail.com')
        expect(employee.getName()).toEqual('Andrew')
    })
})
describe('getId', () => {
    it('return employees id number', () => {
        const employee = new Employee('Andrew', 004, 'Andrew@gmail.com')
        expect(employee.getId()).toEqual(004)
    })
})

describe('getEmail', () => {
    it('return employees email as a sting', () => {
        const employee = new Employee('Andrew', 004, 'Andrew@gmail.com')
        expect(employee.getEmail()).toEqual('Andrew@gmail.com')
    })
})