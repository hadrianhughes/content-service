const getByDate = require('../lib/getByDate');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    resolve(mockData);
  })
};

describe('getByTag function', () => {
  it('Should return a promise which resolves with an object when passed a year', () => {
    expect(getByDate(mockApi, 2000).resolves).toMatchSnapshot();
  });

  it('Should return a promise which resolves with an object when passed a year and month', () => {
    expect(getByDate(mockApi, 2000, 'January').resolves).toMatchSnapshot();
  });

  it('Should return a promise which resolves with an object when passed a year, month and day', () => {
    expect(getByDate(mockApi, 2000, 'January', 1).resolves).toMatchSnapshot();
  });

  it('Should return a promise which resolves with an object when passed a type with the date', () => {
    expect(getByDate(mockApi, 2000, 'January', 1, 'foo').resolves).toMatchSnapshot();
  });
});
