import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: {
      products: [],
      allProducts: [],
      alert: false
    },
    mutations: {
      setAlert(state) {
        state.alert = true;
        setTimeout(() => {
          state.alert = false;
        }, 2000);
      },
      setProducts(state, products) {
        state.products = products;
      },
      setAllProducts(state, products) {
        state.allProducts = products;
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
