const getAll = require('../lib/getAll');

const mockData = require('../__mock-data__/getAll.json');
const mockApi = {
  query: string => new Promise ((resolve, reject) => {
    resolve(mockData);
  })
}

describe('getAll function', () => {
  it('Should return a promise which resolves with an object', () => {
    getAll(mockApi).then(obj => {
      expect(typeof obj).toBe('object');
    });
  });

  it('Should throw an error with invalid api parameter', () => {
    const promise = getAll({});
    expect(promise).rejects.toThrow();
  });
});
