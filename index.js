'use strict';
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express'),
  { json } = require('body-parser'),
  cors = require('cors'),
  port = process.env.PORT || 80,
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
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
})
  .then((dbInstance) => {
    app.set('db', dbInstance);
  })
  .catch((err) => console.warn(err));
masterRoutes(app);

app.use('/', express.static(path.join(__dirname + '/src')));
app.listen(port, () => {
  console.info(`Listening on Port:${port}`);
});
