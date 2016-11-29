const express = require("express")
      , {json} = require("body-parser")
      , cors = require("cors")
      , mongoose = require("mongoose")
      , serverConfig = require("./serverConfig.js")
      , port = serverConfig.port
      , app = express()
      , mongoUri = serverConfig.mongoUri
      , masterRoutes = require("./masterRoutes.js")
      , session = require('express-session')

app.use(session({secret: serverConfig.secret}));
app.use("/", express.static(__dirname));
mongoose.connect(mongoUri);
app.use(json());
app.use(cors());
masterRoutes(app);
app.listen(port, () => {console.log(`This is Dr. Crane... I'm listening. Port:${port}`)})
