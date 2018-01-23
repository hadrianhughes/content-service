const getByDate = require('../lib/getByDate');

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
  it('Should return a promise which resolves with an object when passed a year', () => {
    getByDate(mockApi, 2000).then(obj => {
      expect(typeof obj).toBe('object');
    })
  });

  it('Should return a promise which resolves with an object when passed a year and month', () => {
    getByDate(mockApi, 2000, 'January').then(obj => {
      expect(typeof obj).toBe('object');
    })
  });

  it('Should return a promise which resolves with an object when passed a year, month and day', () => {
    getByDate(mockApi, 2000, 'January', 1).then(obj => {
      expect(typeof obj).toBe('object');
    })
  })
});
