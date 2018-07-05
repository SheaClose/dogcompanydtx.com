"use strict";

const mongoose = require("mongoose");

const Cart = new mongoose.Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, default: 1 }
    }
  ]
});

module.exports = Cart;
