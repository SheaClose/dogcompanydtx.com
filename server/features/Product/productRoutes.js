'use strict';

const productCtrl = require('./productCtrl.js');
module.exports = app => {
  app.get('/api/products', productCtrl.getProducts);
};
