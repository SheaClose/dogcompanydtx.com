const Cart = require("./Cart.js")
      , Product = require("../Product/Product.js")
module.exports = {
  addToCart: (req, res) => {
    Product.find(req.body, (err,suc)=>{
      if (err){ return res.status(500).json(err)}
      else {
        res.status(200).json(suc)
        // new Cart({$push: {products: suc}}).save((err, suc) => {
        //   if (err){ return res.status(500).json(err)}
        //   else {
        //     return res.status(200).json(suc)
        //   }
        // })
      }
    })
  }
}
