const mongoose = require("mongoose")

const Product = new mongoose.Schema({
  title: {type: String, trim: true, required: true}
  , description: {type: String, trim: true}
  , price: {type: Number, required: true}
  , category: {type: String, trim: true}
  , color: {type: String, trim: true}
  , imgUrl: {type: String, trim: true, default: "https://http.cat/404"}
  , url: {type: String, trim: true}
  , size: {type: String, enum: ["small", "medium", "large", "xLarge", "xxLarge", "xxxLarge"]}
	, available: {type: Boolean}
})

module.exports = mongoose.model("Product", Product)
