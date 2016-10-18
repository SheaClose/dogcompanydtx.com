const mongoose = require("mongoose")
      , Cart = require("../Cart/Cart.js")
const User = new mongoose.Schema({
    sessionID: {type: String, required: true}
  , cart     : [Cart]
  , orders   : []

})

module.exports = mongoose.model('User', User)
