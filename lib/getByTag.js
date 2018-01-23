const Prismic = require('prismic-javascript');

module.exports = (api, tags) => api.query(tags.length > 1 ? (
  Prismic.Predicates.any('document.tags', tags)
 ) : (
  Prismic.Predicates.at('document.tags', tags)
 ));
