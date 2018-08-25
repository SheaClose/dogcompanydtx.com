require("dotenv").config();
const express = require("express"),
  { json } = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  serverConfig = require("../serverConfig.js"),
  port = process.env.PORT,
  app = express(),
  mongoUri = serverConfig.mongoUri,
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
    secret: serverConfig.secret,
    resave: true,
    saveUninitialized: true
  })
);
// app.use("/", express.static(__dirname + "/public"));
mongoose.connect(
  mongoUri,
  { useMongoClient: true }
);
app.use(json());
app.use(cors());

masterRoutes(app);

app.use(nuxt.render);

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

app.listen(port, () => {
  console.log(`This is Dr. Crane... I'm listening. Port:${port}`);
});
