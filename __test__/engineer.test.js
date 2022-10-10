const Engineer = require('../lib/engineer');

describe('getGithub', () => {
    it('return engineers github as a string', () => {
        const engineer = new Engineer('Andrew', '004', 'Andrew@gmail.com', 'AndrewGit')
        expect(engineer.getGithub()).toEqual('AndrewGit');
    });
});
describe('getRole', () => {
    it('return engineers role as engineer', () => {
        const engineer = new Engineer('Andrew', '004', 'Andrew@gmail.com', 'AndrewGit')
        expect(engineer.getRole()).toEqual('Engineer');
    });
});