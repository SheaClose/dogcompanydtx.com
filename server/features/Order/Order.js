"use strict";

const mongoose = require("mongoose");

const Order = new mongoose.Schema({
  cart: { type: Array, required: true },
  total: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.Mixed },
  date: { type: Date, default: new Date() }
});
module.exports = mongoose.model("Order", Order);
