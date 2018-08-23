"use strict";

const Product = require("./Product.js");

module.exports = {
  getProducts: (req, res) => {
    Product.find({}, (err, suc) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.status(200).json(suc.filter(c => c.available));
      }
    });
  },
  postProduct: (req, res) => {
    new Product(req.body).save((err, suc) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.status(200).json(suc);
      }
    });
  },
  editProduct: (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, suc) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.status(200).json(suc);
      }
    });
  },
  deleteProduct: (req, res) => {
    Product.findByIdAndRemove({ _id: req.params.id }, (err, suc) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.status(200).json(suc);
      }
    });
  }
};
