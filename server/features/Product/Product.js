const mongoose = require("mongoose")

const Product = new mongoose.Schema({
  title: {type: String, required: true}
  , description: {type: String}
  , price: {type: Number, required: true}
  , category: String
  , color: String
  , imgUrl: String
  , url: String
  , size: {type: String, enum: ["small", "medium", "large", "x-large", "xx-large", "xxx-large"]}
})

module.exports = mongoose.model("Product", Product)
