'use strict';

const express = require('express'),
  { json } = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  serverConfig = require('./serverConfig.js'),
  port = serverConfig.port,
  app = express(),
  mongoUri = serverConfig.mongoUri,
  masterRoutes = require('./masterRoutes.js'),
  session = require('express-session'),
  axios = require('axios');
require('dotenv').config();

app.use(json());
app.use(cors());
app.use(
  session({
    secret: serverConfig.secret,
    resave: true,
    saveUninitialized: true
  })
);
mongoose.connect(mongoUri, { useMongoClient: true });

masterRoutes(app);

app.use('/', express.static(__dirname + '/public'));
app.listen(port, () => {
  console.log(`This is Dr. Crane... I'm listening. Port:${port}`);
});
