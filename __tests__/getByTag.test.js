const getByTag = require('../lib/getByTag');

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
  it('Should return a promise which resolves with an object when passed an array of 1 item', () => {
    getByTag(mockApi, ['foo']).then(obj => {
      expect(typeof obj).toBe('object');
    })
  });

  it('Should return a promise which resolves with an object when passed an array of multiple items', () => {
    getByTag(mockApi, ['foo', 'bar']).then(obj => {
      expect(typeof obj).toBe('object');
    })
  });
});
