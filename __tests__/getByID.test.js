const getByID = require('../lib/getByID');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  getByID: string => new Promise ((resolve, reject) => {
    resolve(mockData);
  })
};

describe('getByID function', () => {
  it('Should return a promise which resolves with an object', () => {
    getByID(mockApi, 'foo').then(obj => {
      expect(typeof obj).toBe('object');
    })
  });
});
