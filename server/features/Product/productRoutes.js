const productCtrl = require("./productCtrl.js")
module.exports = app =>{
  app.get("/api/products", productCtrl.getProducts);
  app.post("/api/products", productCtrl.postProduct);
  app.put("/api/products/:id", productCtrl.editProduct);
  app.delete("/api/products/:id", productCtrl.deleteProduct);
}
