const cartCtrl = require("./cartCtrl.js")
// const requireAuth = function(req, res, next) {
//   if (req.user) {
//     return next();
//   }
//   return res.json(req.sessionID)
// }
module.exports = app =>{
    app.post("/api/cart", cartCtrl.addToCart);
    app.get("/api/cart/", cartCtrl.getCart);
    app.get("/api/cart/:id", cartCtrl.fillCart);
    app.put("/api/cart/deleteItem/:id", cartCtrl.deleteItem);
}
