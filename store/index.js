import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: {
      products: [],
      allProducts: [],
      alert: false,
      alertMsg: "",
      alertColor: "",
      user: {}
    },
    mutations: {
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
      setUser(state, user) {
        Object.assign(state, { user });
      }
    },
    actions: {
      async nuxtServerInit({ commit }, { $axios }) {
        let { data } = await $axios.get("/api/products");
        let products = data
          .reduce(
            (acc, cur) =>
              !acc.includes(cur.title) ? [...acc, cur.title] : acc,
            []
          )
          .map(c => {
            var avail = data.find(
              product => c == product.title && product.available
            );
            return avail ? avail : null;
          })
          .filter(c => c);
        let apparel = products.filter(c => c.category == "apparel");
        let merch = products.filter(c => c.category == "merch");
        let bundle = products.filter(c => c.category == "bundle");
        let sortedProducts = [...apparel, ...merch, ...bundle];
        commit("setProducts", sortedProducts);
        commit("setAllProducts", data);
      }
    }
  });
