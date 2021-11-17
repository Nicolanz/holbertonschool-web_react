
const utils = require('./utils.js');

describe('getFullYear', () => {
    it('must return correct current year', () => {
        const today = new Date(); 
        expect(utils.getFullYear()).toBe(today.getFullYear());
    });
});

describe('getFooterCopy', () => {
    it('must return correct string on bool argument', () => {
        expect(utils.getFooterCopy(true)).toEqual('Holberton School');
        expect(utils.getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });
});

describe('getLatestNotification', () => {
    it('must return correct string', () => {
        expect(utils.getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
