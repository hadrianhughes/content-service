const getByField = require('../lib/getByField');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    q.then(p => {
      resolve(p);
    })
  })
};

describe('getByTag function', () => {
  it('Should return a promise which resolves with an object', () => {
    getByField(mockApi, 'type', 'field', 'value').then(obj => {
      expect(typeof obj).toBe('object');
    })
  });
});

