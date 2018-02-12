const Prismic = require('prismic-javascript');

module.exports = (api, type, preview, pageSize, page = 1) => api.query(
  Prismic.Predicates.at('document.type', type),
  {
    orderings: '[document.first_publication_date desc]',
    pageSize,
    page,
    fetch: preview ? ['post.title', 'post.intro'] : undefined,
  }
);
