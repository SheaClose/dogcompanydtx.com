"use strict";

const orderCtrl = require("./orderCtrl.js");
module.exports = app => {
  app.post("/api/order", orderCtrl.submitOrder);
};
