const apiData = require('../__mock-data__/getApi.json');
const mockData = require('../__mock-data__/doc.json');

const getApi = endpoint => new Promise ((resolve, reject) => {
  resolve(apiData);
});

const Predicates = {
  at: (field, value) => new Promise ((resolve, reject) => {
    resolve(mockData);
  }),
  any: (field, value) => new Promise ((resolve, reject) => {
    resolve(mockData);
  }),
  year: (field, value) => new Promise ((resolve, reject) => {
    resolve(mockData);
  }),
  month: (field, value) => new Promise ((resolve, reject) => {
    resolve(mockData);
  }),
  dayOfMonth: (field, value) => new Promise ((resolve, reject) => {
    resolve(mockData);
  }),
}

module.exports = {
  getApi,
  Predicates
};
