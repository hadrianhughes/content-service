const initApi = require('../lib/initApi');

jest.mock('../__mocks__/prismic-javascript');

describe('initApi function', () => {
  it('Should return a promise which resolves with an object', () => {
    initApi().then(result => {
      expect(typeof result).toBe('object');
    });
  });
});
