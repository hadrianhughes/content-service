const Prismic = require('prismic-javascript');

module.exports = (api, type, tags) => api.query([
  Prismic.Predicates.at('document.type', type),
  tags.length > 1 ? (
    Prismic.Predicates.any('document.tags', tags)
  ) : (
    Prismic.Predicates.at('document.tags', tags)
  )
]);
