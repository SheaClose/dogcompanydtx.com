const productCtrl = require("./productCtrl.js")
module.exports = app =>{
  app.get("/api/products", function(req,res, next){
    console.log("app.get / /api/products");
    next();
  }, productCtrl.getProducts);
  app.post("/api/products", productCtrl.postProduct);
  app.put("/api/products/:id", productCtrl.editProduct);
  app.delete("/api/products/:id", productCtrl.deleteProduct);
}
