module.exports = api => new Promise (resolve => {
  api.query('')
  .then(data => {
    resolve(data);
  });
})
