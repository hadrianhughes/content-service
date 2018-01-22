const express = require('express');
const router = express.Router();

const log = require('./lib/logger');

const initApi = require('./lib/initApi');
const getAll = require('./lib/getAll');

router.get('/all', (req, res) => {
  initApi()
  .then(api => getAll(api))
  .then(data => {
    res.status(200);
    res.send(data);
    log.info({ route: 'all', status: 200 }, 'Responded with 200');
  })
  .catch(err => {
    log.error({ err: err });
  });
});

router.get('/id/:id', (req, res) => {
  res.status(200);
  res.end();
  log.info({ route: 'id', status: 200, params: req.params }, 'Responded with 200');
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
