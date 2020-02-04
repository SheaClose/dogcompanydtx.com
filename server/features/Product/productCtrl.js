'use strict';

module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get('db');
    return db.products
      .find()
      .then(products => {
        return res.status(200).json(products.filter(c => c.available));
      })
      .catch(err => {
        return res.status(500).json(err);
      });
  }
};
