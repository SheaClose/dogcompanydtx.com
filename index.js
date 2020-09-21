'use strict';

require('dotenv').config();
const express = require('express'),
  { json } = require('body-parser'),
  cors = require('cors'),
  port = 3000,
  app = express(),
  massive = require('massive'),
  masterRoutes = require('./masterRoutes.js'),
  path = require('path'),
  session = require('express-session');

app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
massive({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
})
  .then((dbInstance) => {
    app.set('db', dbInstance);
  })
  .catch((err) => console.warn(err));
masterRoutes(app);

app.use('/', express.static(path.join(__dirname + '/src')));
app.listen(port, () => {
  console.info(`This is Dr. Crane... I'm listening. Port:${port}`);
});
