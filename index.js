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
      , passport = require("passport")
      , FacebookStrategy = require("passport-facebook").Strategy


app.use(session({secret: serverConfig.secret}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use("/", express.static(__dirname));
mongoose.connect(mongoUri);
app.use(json());
app.use(cors());
masterRoutes(app);
// passport.use(new FacebookStrategy({
//   clientID: serverConfig.clientID,
//   clientSecret: serverConfig.clientSecret,
//   callbackURL: serverConfig.callbackURL
// }, function(token, refreshToken, profile, done) {
//   return done(null, profile);
// }));

// app.get("/auth/facebook", passport.authenticate("facebook"));
// app.get("/auth/facebook/callback", passport.authenticate("facebook", {
//   successRedirect: "/me",
//   failureRedirect: "/login"
// }));
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });
// app.get("/me", function (req, res){
//   res.send(req.user)
// })


app.listen(port, () => {console.log(`This is Dr. Crane... I'm listening. Port:${port}`)})
