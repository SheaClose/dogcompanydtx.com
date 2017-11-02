"use strict";

const Cart = require("./Cart.js"),
  Product = require("../Product/Product.js"),
  request = require("request"),
  User = require("../User/User.js");

module.exports = {
  addToCart: (req, res) => {
    let product = {};
    const { title, size, bundle } = req.body;
    if (bundle) {
      var { selectedAlbum, selectedDesign, selectedSize } = bundle;
    }
    Product.find({ title, size }, (err, prod) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        product = prod.pop();
        if (bundle) {
          product.description = `${selectedAlbum
            ? selectedAlbum
            : ""} ${selectedSize ? selectedSize : ""} ${selectedDesign
            ? selectedDesign
            : ""}`.trim();
          if (selectedSize) {
            product.size = selectedSize;
          }
        }
        User.findOne({ sessionID: req.sessionID }, (err, foundUser) => {
          if (!foundUser) {
            // console.log(product);
            new User({
              sessionID: req.sessionID,
              cart: { product }
            }).save((err, newUser) => {
              if (err) {
                return res.status(500).json(err);
              } else {
                return res.status(200).json(newUser);
              }
            });
          } else {
            for (var i = 0; i < foundUser.cart.length; i++) {
              if (
                foundUser.cart[i].product._id.toString() ==
                product._id.toString()
              ) {
                foundUser.cart[i].quantity += 1;
                foundUser.save();
                return res.status(200).json(foundUser);
              }
            }
            foundUser.cart.push({ product });
            foundUser.save();
            return res.status(200).json(foundUser);
          }
        });
      }
    });
  },
  getCart: (req, res) => {
    User.find({ sessionID: req.sessionID }, (err, user) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.status(200).json(user);
      }
    });
  },
  fillCart: (req, res) => {
    User.findById({ _id: req.params.id })
      .populate("cart.product")
      .exec(function(err, suc) {
        var user = suc;
        if (err) {
          res.json(err);
        } else {
          return res.status(200).json(user);
        }
      });
  },
  deleteItem: (req, res) => {
    User.findById({ _id: req.params.id }, (err, user) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        user.cart.forEach((cv, i, arr) => {
          if (cv.product._id == req.body._id) {
            user.cart.splice(i, 1);
          }
        });
        user.save();
        return res.status(200).json(user);
      }
    });
  }
};
