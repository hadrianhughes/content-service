const express = require('express');
const router = express.Router();

const log = require('./lib/logger');

const initApi = require('./lib/initApi');
const getAll = require('./lib/getAll');
const getByID = require('./lib/getByID');

router.get('/all', (req, res) => {
  initApi()
  .then(api => getAll(api))
  .then(data => {
    res.status(200);
    res.send(data);
    log.info({ route: 'all', status: 200 }, 'Responded with 200');
  })
  .catch(err => {
    res.status(500);
    res.end();
    log.error({ err });
  });
});

router.get('/id/*', (req, res) => {
  const params = req.params[0].split('/');
  initApi()
  .then(api => getByID(api, params))
  .then(data => {
    res.status(200);
    res.send(data);
    log.info({ route: 'id', status: 200, params }, 'Responded with 200');
  })
  .catch(err => {
    res.status(500);
    res.end();
    log.error({ err });
  });
});

router.get('/uid/:uid', (req, res) => {
  res.status(200);
  res.end();
  log.info({ route: 'uid', status: 200, params: req.params }, 'Responded with 200');
});

router.get('/tag/:tag', (req, res) => {
  res.status(200);
  res.end();
  log.info({ route: 'tag', status: 200, params: req.params }, 'Responded with 200');
});

router.get('/date/:year/:month?/:day?', (req, res) => {
  res.status(200);
  res.end();
  log.info({ route: 'date', status: 200, params: req.params }, 'Responded with 200');
});

router.get('/field/:field/:value', (req, res) => {
  res.status(200);
  res.end();
  log.info({ route: 'field', status: 200, params: req.params }, 'Responded with 200');
});

router.get('/type/:type', (req, res) => {
  res.status(200);
  res.end();
  log.info({ route: 'type', status: 200, params: req.params }, 'Responded with 200');
});

router.get('/type/:type/tag/:tag', (req, res) => {
  res.status(200);
  res.end();
  log.info({ route: 'type-tag', status: 200, params: req.params }, 'Responded with 200');
});

router.get('/type/:type/date/:year/:month?/:day?', (req, res) => {
  res.status(200);
  res.end();
  log.info({ route: 'type-date', status: 200, params: req.params }, 'Responded with 200');
});

module.exports = router;
