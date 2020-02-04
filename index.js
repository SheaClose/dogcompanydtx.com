'use strict';

require('dotenv').config();
const express = require('express'),
  { json } = require('body-parser'),
  cors = require('cors'),
  serverConfig = require('./serverConfig.js'),
  port = serverConfig.port,
  app = express(),
  massive = require('massive'),
  masterRoutes = require('./masterRoutes.js'),
  path = require('path'),
  session = require('express-session');

app.use(json());
app.use(cors());
app.use(
  session({
    secret: serverConfig.secret,
    resave: true,
    saveUninitialized: true
  })
);
massive({
  host: '127.0.0.1',
  port: 5432,
  database: 'sheaclose'
})
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => console.warn(err));
masterRoutes(app);

app.use('/', express.static(path.join(__dirname + '/src')));
app.listen(port, () => {
  console.info(`This is Dr. Crane... I'm listening. Port:${port}`);
});
