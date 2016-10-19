const Cart = require("./Cart.js")
      , Product = require("../Product/Product.js")
      , request = require("request")
      , User = require("../User/User.js")

module.exports = {
  addToCart: (req, res) => {
    let prodObj = {};
    const product = req.body
    Product.find({title: product.title, size: product.size}, (err, prod)=>{
      if (err){
        return res.status(500).json(err)}
      else {
        prod.forEach((cv, i , arr)=>{prodObj = cv})
        User.findOne({sessionID: req.sessionID}, (err, foundUser) => {
          if (!foundUser){
            new User({sessionID: req.sessionID, cart:{product: prodObj._id }}).save((req, newUser) => {
              if (err) {
                return res.status(500).json(err);
              }
              else {
                return res.status(200).json(newUser);
              }
            })
          }
          else {
            for (var i = 0; i < foundUser.cart.length; i++) {
              if (foundUser.cart[i].product.toString() == prodObj._id.toString()) {
                foundUser.cart[i].quantity += 1;
                foundUser.save();
                return res.status(200).json(foundUser);
              }
            }
            foundUser.cart.push({product: prodObj._id});
            foundUser.save();
            return res.status(200).json(foundUser);
          }
        })
      }
    })
  }
}
