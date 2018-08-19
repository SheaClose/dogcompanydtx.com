"use strict";

const mongoose = require("mongoose");

const Blog = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  imgUrl: { type: String },
  date: { type: Date, default: new Date() }
}, { usePushEach: true });
module.exports = mongoose.model("Blog", Blog);
