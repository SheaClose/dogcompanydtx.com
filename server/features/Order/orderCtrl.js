const Order = require("./Order.js")

module.exports = {
  submitOrder: (req, res) => {
    console.log(req.body);
    new Order(req.body).save((err, order)=>{
      if (err) {
        return res.status(500).json(err)
      }
      else {
        return res.status(200).json(order)
      }
    })
  }
}
