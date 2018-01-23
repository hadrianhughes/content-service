const getByField = require('../lib/getByField');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    resolve(q);
  })
};

describe('getByField function', () => {
  it('Should return a promise which resolves with an object', () => {
    expect(getByField(mockApi, 'type', 'field', 'value').resolves).toMatchSnapshot();
  });
});

