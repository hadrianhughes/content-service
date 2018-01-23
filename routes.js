const express = require('express');
const router = express.Router();

const {
  initApi,
  getAll,
  getByID,
  getByUID,
  getByTag,
  getByDate,
  getByType,
  getByTypeTag,
  getByTypeDate,
  monthNumberToString,
  log,
  getByField,
} = require('./lib');

router.get('/all', async (req, res) => {
  try {
    const api = await initApi();
    const data = await getAll(api);

    res.status(200);
    res.send(data);
    log.info({ route: 'all', status: 200 }, 'Responded with 200');
  } catch (err) {
    res.status(500);
    res.end();
    log.error({ err });
  }
});

router.get('/id/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const api = await initApi();
    const data = await getByID(api, id);

    res.status(200);
    res.send(data);
    log.info({ route: 'id', status: 200, params }, 'Responded with 200');
  } catch (err) {
    res.status(500);
    res.end();
    log.error({ err });
  }
});

router.get('/uid/:type/:uid', async (req, res) => {
  const { type, uid } = req.params;

  try {
    const api = await initApi();
    const data = await getByUID(api, type, uid);

    res.status(200);
    res.send(data);
    log.info({ route: 'uid', status: 200, params: req.params }, 'Responded with 200');
  } catch (err) {
    res.status(500);
    res.end();
    log.error({ err });
  }
});

router.get('/tag/:tags*', async (req, res) => {
  const tags = req.params.tags.split('/');

  try {
    const api = await initApi();
    const data = await getByTag(api, tags);

    res.status(200);
    res.send(data);
    log.info({ route: 'tag', status: 200, params: req.params }, 'Responded with 200');
  } catch (err) {
    res.status(500);
    res.end();
    log.error({ err });
  }
});

router.get('/date/:year/:month?/:day?', async (req, res) => {
  const { year, month, day } = req.params;

  try {
    const api = await initApi();
    const data = await getByDate(api, year, monthNumberToString(month), day);

    res.status(200);
    res.send(data);
    log.info({ route: 'date', status: 200, params: req.params }, 'Responded with 200');
  } catch (err) {
    res.status(500);
    res.end();
    log.error({ err });
  }
});

router.get('/field/:type/:field/:value', async (req, res) => {
  const { type, field, value } = req.params;

  try {
    const api = await initApi();
    const data = await getByField(api, type, field, value);

    res.status(200);
    res.send(data);
    log.info({ route: 'field', status: 200, params: req.params }, 'Responded with 200');
  } catch (err) {
    res.status(500);
    res.end();
    log.error({ err });
  }
});

router.get('/type/:type', async (req, res) => {
  const { type } = req.params;

  try {
    const api = await initApi();
    const data = await getByType(api, type);

    res.status(200);
    res.send(data);
    log.info({ route: 'type', status: 200, params: req.params }, 'Responded with 200');
  } catch (err) {
    res.status(500);
    res.end();
    log.error({ err });
  }
});

router.get('/type/:type/tag/:tags*', async (req, res) => {
  const { type } = req.params;
  const tags = req.params.tags.split('/');

  try {
    const api = await initApi();
    const data = await getByTypeTag(api, type, tags);

    res.status(200);
    res.send(data);
    log.info({ route: 'type-tag', status: 200, params: req.params }, 'Responded with 200');
  } catch (err) {
    res.status(500);
    res.end();
    log.error({ err });
  }
});

router.get('/type/:type/date/:year/:month?/:day?', async (req, res) => {
  const { type, year, month, day } = req.params;

  try {
    const api = await initApi();
    const data = await getByTypeDate(api, type, year, monthNumberToString(month), day);

    res.status(200);
    res.send(data);
    log.info({ route: 'type-date', status: 200, params: req.params }, 'Responded with 200');
  } catch (err) {
    res.status(500);
    res.end();
    log.error({ err });
  }
});

module.exports = router;
