const mongoose = require("mongoose");

const Cart = new mongoose.Schema({

  products : [String]
  , quantity: {type: Number, default: 1}
})

module.exports = mongoose.model("Cart", Cart);
