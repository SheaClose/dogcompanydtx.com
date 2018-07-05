"use strict";

const mongoose = require("mongoose"),
  Cart = require("../Cart/Cart.js");
const User = new mongoose.Schema({
  sessionID: { type: String, required: true },
  cart: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, default: 1 }
    }
  ],
  orders: []
});

module.exports = mongoose.model("User", User);
