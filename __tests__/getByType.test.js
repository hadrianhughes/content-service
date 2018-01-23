const getByType = require('../lib/getByType');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    q.then(p => {
      resolve(p);
    })
  })
};

describe('getByType function', () => {
  it('Should return a promise which resolves with an object', () => {
    getByType(mockApi, 'foo').then(obj => {
      expect(typeof obj).toBe('object');
    })
  });
});
