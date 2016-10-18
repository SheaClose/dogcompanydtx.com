const cartCtrl = require("./cartCtrl.js")
module.exports = app =>{
    app.post("/api/cart", cartCtrl.addToCart);
}
