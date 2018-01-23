require('dotenv').config();
const express = require('express');
const app = express();

const { log } = require('./lib');
const routes = require('./routes');

const { PORT } = process.env;

app.use(routes);

app.listen(PORT, err => {
  if (err) throw err;

  log.info({ port: PORT }, 'Started listening for requests');
});
