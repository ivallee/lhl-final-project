require('dotenv').config();
const EXPRESS_PORT = process.env.EXPRESS_PORT || 8080,
  HOST = process.env.HOST || '0.0.0.0',
  ENV = process.env.ENV || 'development';

const express = require('express'),
  bodyParser = require('body-parser'),
  cookieSession = require('cookie-session'),
  knexLogger = require('knex-logger'),
  knexConfig = require('./knexfile'),
  knex = require('knex')(knexConfig[ENV]),
  db = require('./lib/data-helpers')(knex);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ name: process.env.SESSION_NAME, secret: process.env.SESSION_KEY }));
app.use(knexLogger(knex));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/filters', require('./routes/filters')(db));
app.use('/api/users', require('./routes/users')(db));
app.use('/api/recipes', require('./routes/recipes'));

app.use(require('./routes/error-handler.js'));

app.listen(EXPRESS_PORT, () => {
  console.log(`Express running at http://${HOST}:${EXPRESS_PORT}`);
});
