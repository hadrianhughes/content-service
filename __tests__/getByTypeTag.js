const getByTypeTag = require('../lib/getByTypeTag');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    q.then(p => {
      resolve(p);
    })
  })
};

describe('getByTypeTag function', () => {
  it('Should return a promise which resolves with an object when passed an array of one item', () => {
    getByTypeTag(mockApi, 'type', ['foo']).then(obj => {
      expect(typeof obj).toBe('object');
    });
  });

  it('Should return a promise which resolves with an object when passed an array of multiple items', () => {
    getByTypeTag(mockApi, 'type', ['foo', 'bar']).then(obj => {
      expect(typeof obj).toBe('object');
    });
  });
});
