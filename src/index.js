// const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { Router } = express;
const routes = require('./routes');
const { PORT } = require('./config');

const app = express();

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

app.use(routes(Router()));

app.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));

module.exports = app;
