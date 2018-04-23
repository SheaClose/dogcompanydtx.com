"use strict";

const express = require("express"),
  { json } = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  serverConfig = require("./serverConfig.js"),
  port = serverConfig.port,
  app = express(),
  mongoUri = serverConfig.mongoUri,
  masterRoutes = require("./masterRoutes.js"),
  session = require("express-session"),
  axios = require("axios");
require("dotenv").config();

app.use(
  session({
    secret: serverConfig.secret,
    resave: true,
    saveUninitialized: true
  })
);
app.use("/", express.static(__dirname + "/public"));
mongoose.connect(mongoUri, { useMongoClient: true });

app.use(json());
app.use(cors());
masterRoutes(app);
app.get(`/api/admin`, function(req, res) {
  if (
    req.query.user !== serverConfig.admin ||
    req.query.pass !== serverConfig.pass
  ) {
    return res.status(200).json("false");
  } else {
    return res.status(200).json("true");
  }
});
app.post("/api/proxyServer", function(req, res) {
  axios
    .get(req.body.base_url + req.body.query_string, {
      headers: {
        Authorization: req.body.access_token
      }
    })
    .then(function(response) {
      return res.send(response.data);
    })
    .catch(err => {
      return res.send(err);
    });
});
app.put("/api/proxyServer", (req, res) => {
  axios
    .get(req.body.base_url)
    .then(response => {
      return res.json(response.data);
    })
    .catch(err => {
      return res.json(err);
    });
});
app.listen(port, () => {
  console.log(`This is Dr. Crane... I'm listening. Port:${port}`);
});
