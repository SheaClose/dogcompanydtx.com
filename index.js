const express = require("express")
      , {json} = require("body-parser")
      , cors = require("cors")
      , mongoose = require("mongoose")
      , serverConfig = require("./serverConfig.js")
      , port = serverConfig.port
      , app = express()
      , mongoUri = "mongodb://localhost/dogCompanyEcommerce"
      , masterRoutes = require("./masterRoutes.js")


app.use("/", express.static(__dirname));
mongoose.connect(mongoUri);
app.use(json());
app.use(cors());
masterRoutes(app);



app.listen(port, () => {console.log(`This is Dr. Crane... I'm listening. Port:${port}`)})
