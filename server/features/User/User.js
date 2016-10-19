const mongoose = require("mongoose")
      , Cart = require("../Cart/Cart.js")
const User = new mongoose.Schema({
    sessionID: {type: String, required: true}
  , cart     : [
    {product:{type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true}
    , quantity: {type: Number, default: 1}
  }]
  // , orders   : []

})

module.exports = mongoose.model('User', User)
