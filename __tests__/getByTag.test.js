const getByTag = require('../lib/getByTag');

jest.mock('../__mocks__/prismic-javascript.js');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: q => new Promise ((resolve, reject) => {
    resolve(q);
  })
};

describe('getByTag function', () => {
  it('Should return a promise which resolves with an object when passed an array of 1 item', () => {
    expect(getByTag(mockApi, ['foo']).resolves).toMatchSnapshot();
  });

  it('Should return a promise which resolves with an object when passed an array of multiple items', () => {
    expect(getByTag(mockApi, ['foo', 'bar']).resolves).toMatchSnapshot();
  });

  it('Should return a promise which resolves with an object when passed a type with the tags', () => {
    expect(getByTag(mockApi, ['foo'], 'bar').resolves).toMatchSnapshot();
  });
});
