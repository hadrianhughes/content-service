const getByField = require('../lib/getByField');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    resolve(mockData);
  })
};

describe('getByField function', () => {
  it('Should return a promise which resolves with an object', () => {
    expect.assertions(1);
    getByField(mockApi, 'type', 'field', 'value').then(result => {
      expect(result).toBe(mockData);
    });
  });
});

