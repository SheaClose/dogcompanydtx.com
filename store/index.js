import Vue from "vue";
import Vuex from "vuex";
import products from "./products.json";
import blogs from "./blogs.json";
import media from "./media.json";
Vue.use(Vuex);

export default () => {
  const localStorage = global.localStorage;
  const cart = getItem("cart") || [];
  return new Vuex.Store({
    state: {
      products,
      blogs,
      cart,
      allProducts: [],
      alert: false,
      alertMsg: "",
      alertColor: "",
      order: null,
      media
    },
    mutations: {
      deleteOrder(state) {
        Object.assign(state, { order: null });
      },
      completeOrder(state, order) {
        Object.assign(state, { order });
      },
      setAlert(state, { alertMsg, alertColor }) {
        Object.assign(state, { alert: true, alertMsg, alertColor });
        setTimeout(() => {
          Object.assign(state, { alert: false, alertMsg: "", alertColor: "" });
        }, 2000);
      },
      setProducts(state, products) {
        Object.assign(state, { products });
      },
      setAllProducts(state, allProducts) {
        Object.assign(state, { allProducts });
      },
      setCart(state, cart) {
        setItem("cart", cart);
        Object.assign(state, { cart });
      }
    },
    actions: {
      addToCart({ state, commit }, { title, size, bundle }) {
        const { products, cart } = state;
        const _cart = cart ? cart : [];
        if (bundle) {
          var { selectedAlbum, selectedDesign, selectedSize } = bundle;
        }
        const product = products.find(_prod => {
          return _prod.title === title && _prod.size === size;
        });
        if (bundle) {
          product.description = `${selectedAlbum ? selectedAlbum : ""} ${
            selectedSize ? selectedSize : ""
          } ${selectedDesign ? selectedDesign : ""}`.trim();
          if (selectedSize) {
            product.size = selectedSize;
          }
        }
        for (var i = 0; i < _cart.length; i++) {
          if (_cart[i].product._id == product._id) {
            _cart[i].quantity += 1;
            return commit("setCart", _cart);
          }
        }
        _cart.push({ product, quantity: 1 });
        commit("setCart", _cart);
      },
      setCart({ state, commit }) {
        console.log("setCart: ");
        return commit("setCart", getItem("cart"));
      }
    }
  });

  function setItem(label, item) {
    if (!localStorage) return;
    return localStorage.setItem(label, JSON.stringify(item));
  }
  function getItem(label) {
    if (!localStorage) return;
    return JSON.parse(localStorage.getItem(label));
  }
};
