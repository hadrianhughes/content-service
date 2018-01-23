const Prismic = require('prismic-javascript');

module.exports = (api, type, field, value) => api.query(
  Prismic.Predicates.at(`my.${type}.${field}`, value)
);
