const getByType = require('../lib/getByType');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    resolve(q);
  })
};

describe('getByType function', () => {
  it('Should return a promise which resolves with an object', () => {
    expect(getByType(mockApi, 'foo').resolves).toMatchSnapshot();
  });
});
