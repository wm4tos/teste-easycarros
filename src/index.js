// const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const { Router } = express;
const routes = require('./routes');
const { PORT } = require('./config');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use(routes(Router()));

app.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));

module.exports = app;
