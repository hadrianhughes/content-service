const Prismic = require('prismic-javascript');

module.exports = (api, type) => api.query(
  Prismic.Predicates.at('document.type', type)
);
