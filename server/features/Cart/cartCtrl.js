const Cart = require("./Cart.js")
      , Product = require("../Product/Product.js")
      , request = require("request")
      , User = require("../User/User.js")

module.exports = {
  addToCart: (req, res) => {
    User.find({_id: req.sessionID}, (err, suc) => {
      if (err){
        new User({sessionID: req.sessionID}).save((err, suc) =>{
          if (err){ return res.status(500).json(err)}
          else{
            return res.status(200).json(suc)
          }
        })
      }
      else {
        return res.status(200).json(suc)
      }
    })
  }
  // , authenticate: (req, res) => {
  //   window.location = "http://localhost:4000/auth/facebook";
  // }
}
