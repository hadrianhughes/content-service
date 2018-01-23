const getByID = require('../lib/getByID');

const mockData = require('../__mock-data__/doc.json');
const mockApi = {
  getByID: string => new Promise ((resolve, reject) => {
    resolve(mockData);
  }),
  getByIDs: arr => new Promise ((resolve, reject) => {
    resolve(mockData);
  })
}

describe('getByID function', () => {
  it('Should return a promise which resolves with an object when passed an array of one ID', () => {
    getByID(mockApi, ['foo']).then(obj => {
      expect(typeof obj).toBe('object');
    })
  });

  it('Should return a promise which resolves with an object when passed an array of multiple IDs', () => {
    getByID(mockApi, ['foo', 'bar']).then(obj => {
      expect(typeof obj).toBe('object');
    });
  });
});
