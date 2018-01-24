const initApi = require('../lib/initApi');
const getApiData = require('../__mock-data__/getApi.json');

jest.mock('../__mocks__/prismic-javascript');

describe('initApi function', () => {
  it('Should return a promise which resolves with an object', () => {
    expect.assertions(1);
    initApi().then(result => {
      expect(result).toBe(getApiData);
    });
  });
});
