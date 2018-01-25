const getAll = require('../lib/getAll');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  query: string => new Promise ((resolve, reject) => {
    resolve(mockData);
  })
}

describe('getAll function', () => {
  it('Should return a promise which resolves with an object', () => {
    expect.assertions(1);
    getAll(mockApi).then(result => {
      expect(result).toBe(mockData);
    });
  });
});
