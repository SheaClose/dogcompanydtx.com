'use strict';

module.exports = {
  addToCart: async (req, res) => {
    const db = req.app.get('db');
    let product = {};
    const { title, size, bundle } = req.body;
    if (bundle) {
      var { selectedAlbum, selectedDesign, selectedSize } = bundle;
    }
    const [db_product] = await db.products.find({ title, size });
    if (bundle) {
      db_product.description = `${selectedAlbum ? selectedAlbum : ''} ${
        selectedSize ? selectedSize : ''
      } ${selectedDesign ? selectedDesign : ''}`.trim();
      if (selectedSize) {
        db_product.size = selectedSize;
      }
    }
    const cart = await db.cart.find({ session_id: req.sessionID });
    if (!cart.length) {
      // create new
      await db.cart.insert({
        quantity: 1,
        product: JSON.stringify(db_product),
        total: db_product.price,
        product_id: +db_product.id,
        session_id: req.sessionID
      });
      return res.status(200).json({
        cart: [db_product],
        sessionID: req.sessionID,
        id: req.sessionID
      });
    } else {
      let [_product] = await db.cart.find({
        session_id: req.sessionID,
        product_id: +db_product.id
      });
      if (_product) {
        const quantity = _product.quantity + 1;
        await db.cart.save({
          id: _product.id,
          quantity,
          total: quantity * db_product.price
        });
        let cart = await db.cart.find({ session_id: req.sessionID });
        return res.status(200).json({
          cart,
          sessionID: req.sessionID,
          id: req.sessionID
        });
      } else {
        await db.cart.insert({
          quantity: 1,
          product: JSON.stringify(db_product),
          total: db_product.price,
          product_id: db_product.id,
          session_id: req.sessionID
        });
        let cart = await db.cart.find({ session_id: req.sessionID });
        return res.status(200).json({
          cart,
          sessionID: req.sessionID,
          id: req.sessionID
        });
      }
    }
  },
  getCart: async (req, res) => {
    const db = req.app.get('db');
    let cart = await db.cart.find({ session_id: req.sessionID });
    return res
      .status(200)
      .json({ id: req.sessionID, cart: cart, sessionID: req.sessionID });
  },
  deleteItem: async (req, res) => {
    const db = req.app.get('db');
    await db.cart.destroy({ id: req.params.id });
    return res.status(200).json('');
  }
};
