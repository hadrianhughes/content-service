const getByTag = require('../lib/getByTag');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    resolve(mockData);
  })
};

describe('getByTag function', () => {
  it('Should return a promise which resolves with an object when passed an array of 1 item', () => {
    expect.assertions(1);
    getByTag(mockApi, ['foo']).then(result => {
      expect(result).toBe(mockData);
    });
  });

  it('Should return a promise which resolves with an object when passed an array of multiple items', () => {
    expect.assertions(1);
    getByTag(mockApi, ['foo', 'bar']).then(result => {
      expect(result).toBe(mockData);
    });
  });

  it('Should return a promise which resolves with an object when passed a type with the tags', () => {
    expect.assertions(1);
    getByTag(mockApi, ['foo'], 'bar').then(result => {
      expect(result).toBe(mockData);
    });
  });
});
