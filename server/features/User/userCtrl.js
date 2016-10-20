const User = require("./User.js")

module.exports= {
  deleteUser: (req, res) => {
    console.log(req.sessionID);
    User.find({sessionID: req.sessionID}).remove().exec((err, suc) =>{
      if (err) { return res.status(500).json(err)}
      else {
        return res.status(200).json(suc)
      }
    })
  }
}
