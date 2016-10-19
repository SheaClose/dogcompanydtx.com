const mongoose = require("mongoose");

const Cart = new mongoose.Schema({

  products : [{product:{type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true}, quantity: {type: Number, default: 1}}]

})

module.exports = Cart;
