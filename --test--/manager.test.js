const Manager = require('../lib/manager');
const jest = require('jest')

describe('getOfficeNumber', () => {
    it('return managers office number', () => {
        const manager = new Manager('Andrew', 004, 'Andrew@gmail.com', '123456')
        expect(manager.getOfficeNumber()).toEqual('123456');
    });
});

describe('getRole', () => {
    it('return managers role as manager', () => {
        const manager = new Manager('Andrew', 004, 'Andrew@gmail.com', '123456')
        expect(manager.getRole()).toEqual('Manager');
    });
});