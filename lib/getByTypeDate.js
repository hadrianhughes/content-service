const Prismic = require('prismic-javascript');

module.exports = (api, type, year, month, day) => api.query([
  Prismic.Predicates.at('document.type', type),
  Prismic.Predicates.year('document.first_publication_date', year),
  month ? Prismic.Predicates.month('document.first_publication_date', month) : null,
  day ? Prismic.Predicates.dayOfMonth('document.first_publication_date', day) : null
]);
