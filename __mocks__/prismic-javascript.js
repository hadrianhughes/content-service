const apiData = require('../__mock-data__/getApi.json');
const mockData = require('../__mock-data__/doc.json');

const getApi = endpoint => new Promise ((resolve, reject) => {
  resolve(apiData);
});

const Predicates = {
  at: () => {},
  any: () => {},
  year: () => {},
  month: () => {},
  dayOfMonth: () => {},
}

module.exports = {
  getApi,
  Predicates
};
