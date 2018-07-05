"use strict";

const cartCtrl = require("./cartCtrl.js");

module.exports = app => {
  app.post("/api/cart", cartCtrl.addToCart);
  app.get("/api/cart/", cartCtrl.getCart);
  app.get("/api/cart/:id", cartCtrl.fillCart);
  app.put("/api/cart/deleteItem/:id", cartCtrl.deleteItem);
};
