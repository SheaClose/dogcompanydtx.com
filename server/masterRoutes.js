const cartRoutes = require("./features/Cart/cartRoutes.js"),
  orderRoutes = require("./features/Order/orderRoutes.js"),
  productRoutes = require("./features/Product/productRoutes.js"),
  userRoutes = require("./features/User/userRoutes.js"),
  blogRoutes = require("./features/Blog/blogRoutes.js"),
  showRoutes = require("./features/showRoutes/showRoutes.js");

module.exports = app => {
  cartRoutes(app);
  orderRoutes(app);
  productRoutes(app);
  userRoutes(app);
  blogRoutes(app);
  showRoutes(app);
};
