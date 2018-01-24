const getByUID = require('../lib/getByUID');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  getByUID: string => new Promise ((resolve, reject) => {
    resolve(mockData);
  })
};

describe('getByUID function', () => {
  it('Should return a promise which resolves with an object', () => {
    expect.assertions(1);
    getByUID(mockApi, 'foo').then(result => {
      expect(result).toBe(mockData);
    });
  });
});
