require("dotenv").config();
const express = require("express"),
  { json } = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  { admin, pass, secret, mongoUri, mongo: { user, port: mongoPort, host, db } } = require("./serverConfig.js"),
  port = process.env.PORT,
  app = express(),
  masterRoutes = require("./masterRoutes.js"),
  session = require("express-session"),
  { Nuxt, Builder } = require("nuxt");

let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

const nuxt = new Nuxt(config);

if (config.dev) {
  const builder = new Builder(nuxt);
  (async () => await builder.build())();
}
app.use(
  session({
    secret: secret,
    resave: true,
    saveUninitialized: true,
    store: new (require('express-sessions'))({
      storage: 'mongodb',
      instance: mongoose,
      host,
      port: mongoPort
    })
  })
);
app.use("/", express.static(__dirname + "/public"));
mongoose.connect(
  mongoUri,
  { useMongoClient: true },
  () => console.log("Connected to mongo database.")
);
app.use(json());
app.use(cors());

masterRoutes(app);

app.use(nuxt.render);

app.get(`/api/admin`, function (req, res) {
  if (
    req.query.user !== admin ||
    req.query.pass !== pass
  ) {
    return res.status(200).json("false");
  } else {
    return res.status(200).json("true");
  }
});

app.listen(port, () => {
  console.log(`This is Dr. Crane... I'm listening. Port:${port}`);
});
