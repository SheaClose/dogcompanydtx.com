const Cart = require("./Cart.js")
      , Product = require("../Product/Product.js")
      , request = require("request")
      , User = require("../User/User.js")

module.exports = {
  addToCart: (req, res) => {
    let prodObj = {};
    const product = req.body
		console.log(product);
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
  , getCart: (req, res) => {
    User.find({sessionID: req.sessionID}, (err, user)=>{
      if (err){return res.status(500).json(err)}
      else{
        return res.status(200).json(user)
      }
    })
  }
  , fillCart: (req, res) => {
    User.findById({_id: req.params.id})
        .populate("cart.product")
        .exec(function(err, suc){
          var user = suc;
          if (err){
            res.json(err)
          }
      else{
        return res.status(200).json(user)
      }
    })
  }
  , deleteItem: (req, res) => {
    User.findById({_id: req.params.id}, (err, user)=>{
      if (err){ return res.status(500).json(err)}
      else{
        user.cart.forEach((cv, i, arr)=>{
          if (cv.product.toString() === req.body._id.toString() ){
            user.cart.splice(i, 1)
          }
        })
        user.save();
        return res.status(200).json(user)
      }
    })
  }
}
