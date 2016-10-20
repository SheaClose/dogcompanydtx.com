const userCtrl = require("./userCtrl.js")
module.exports = app =>{
  app.delete("/api/User", userCtrl.deleteUser)
}
