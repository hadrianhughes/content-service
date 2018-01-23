const Prismic = require('prismic-javascript');

module.exports = (api, tags, type) => api.query([
  type ? Prismic.Predicates.at('document.type', type) : null,
  tags.length > 1 ? (
    Prismic.Predicates.any('document.tags', tags)
  ) : (
    Prismic.Predicates.at('document.tags', tags)
 )
]);
