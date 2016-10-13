const cartRoutes= require("./server/features/Cart/cartRoutes.js")
      , orderRoutes = require("./server/features/Order/orderRoutes.js")
      , productRoutes = require("./server/features/Product/productRoutes.js")
      , userRoutes = require("./server/features/User/userRoutes.js")
      , blogRoutes = require("./server/features/blog/blogRoutes.js")
      , showRoutes = require("./server/features/showRoutes/showRoutes.js")

module.exports = app => {
  cartRoutes(app);
  orderRoutes(app);
  productRoutes(app);
  userRoutes(app);
  blogRoutes(app);
  showRoutes(app);
}
