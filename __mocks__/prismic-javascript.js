const apiData = require('../__mock-data__/getApi.json');

const getApi = endpoint => new Promise ((resolve, reject) => {
  resolve(apiData);
});

module.exports = {
  getApi
};