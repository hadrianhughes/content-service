const getByDate = require('../lib/getByDate');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    resolve(mockData);
  })
};

describe('getByDate function', () => {
  it('Should return a promise which resolves with an object when passed a year', () => {
    expect.assertions(1);
    getByDate(mockApi, 2000).then(result => {
      expect(result).toBe(mockData);
    });
  });

  it('Should return a promise which resolves with an object when passed a year and month', () => {
    expect.assertions(1);
    getByDate(mockApi, 2000, 'January').then(result => {
      expect(result).toBe(mockData);
    });
  });

  it('Should return a promise which resolves with an object when passed a year, month and day', () => {
    expect.assertions(1);
    getByDate(mockApi, 2000, 'January').then(result => {
      expect(result).toBe(mockData);
    });
  });

  it('Should return a promise which resolves with an object when passed a type with the date', () => {
    expect.assertions(1);
    getByDate(mockApi, 2000, 'January', 1, 'foo').then(result => {
      expect(result).toBe(mockData);
    });
  });
});
