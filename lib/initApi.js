const Prismic = require('prismic-javascript');

const { API_ENDPOINT } = process.env;

module.exports = () => Prismic.getApi(API_ENDPOINT);
