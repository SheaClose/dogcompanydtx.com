<template>
  <div class="Store-page-container">
    <NavBar></NavBar>
    <div class="Store-page-content-container">
      <div class="container">
        <div class="blue-grey lighten-1  cart-title">
          <center>
            <h2 class="cartHeader">Your Cart</h2>
          </center>
        </div>
        <div class="cart-container">
          <v-layout
            row
            wrap
          >
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              Image:
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              Title:
            </v-flex>
            <v-flex
              xs3
              sm3
              md3
              lg3
            >
              Description:
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              Price:
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              Size:
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              Total:
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              Quantity:
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              Remove:
            </v-flex>
          </v-layout>
          <hr>
          <v-layout
            row
            wrap
            class="product-row"
            :key="i"
            v-for="(product,i) in cart"
          >
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              <img
                alt="product image"
                class="product-image"
                :src="product.product.imgUrl"
              />
            </v-flex>
            <v-flex
              class="product_title"
              xs3
              sm1
              md1
              lg1
            >
              <div
                @click="reviewProduct(product.product)"
                class=""
              >{{product.product.title}}</div>
            </v-flex>
            <v-flex
              xs3
              sm3
              md3
              lg3
              class="desc"
            >
              <div v-html="product.product.description">{{product.product.description}}</div>
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              <div>${{product.product.price}}</div>
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              <div>{{product.product.size}}</div>
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              <div>${{product.total}}</div>
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              <div class="center">
                <i
                  @click="increaseQuantity(product.product._id)"
                  class="material-icons pointer"
                >add</i>
                {{product.quantity}}
                <i
                  @click="decreaseQuantity(product.product._id)"
                  class="material-icons pointer"
                >remove</i>
              </div>
            </v-flex>
            <v-flex
              xs3
              sm1
              md1
              lg1
            >
              <i
                @click="removeFromCart(product.product._id)"
                class="material-icons pointer"
              >delete</i>
            </v-flex>
          </v-layout>
        </div>
        <div class="right-align">
          <div v-if="discountAmount">Discount Amount: ${{ discountAmount }}</div>
          Total: ${{orderTotal}}
          <v-layout
            row
            wrap
          >
            <v-flex
              offset-xs8
              xs4
            >
              <input
                class="discount"
                placeholder="Discount Code"
                v-model="discountCode"
              />
            </v-flex>
          </v-layout>
        </div>

        <!-- Modal Trigger -->
        <Modal
          v-if="showModal"
          @close="showModal = false"
        >
          <slot
            slot="body"
            id="modal1"
            class="modal modal-fixed-footer grey darken-4"
          >
            <div class="modal-content grey darken-2">
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s6">
                      <input
                        autoFocus
                        v-model="first_name"
                        id="first_name"
                        type="text"
                        class="validate"
                        placeholder="First Name"
                      >
                    </div>
                    <div class="input-field col s6">
                      <input
                        v-model="last_name"
                        id="last_name"
                        type="text"
                        class="validate"
                        placeholder="Last Name"
                      >
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        v-model="email"
                        id="email"
                        type="email"
                        class="validate"
                        placeholder="Email"
                      >
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        type="checkbox"
                        id="foreignAddress"
                        v-model="foreignAddress"
                      />
                      <label
                        id="foreignAddress"
                        for="foreignAddress"
                      >Address not located in the United States?</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        type="text"
                        v-show="foreignAddress"
                        v-model="nonUsAddress"
                        id="nonUsAddress"
                        placeholder="Input Non-United States Address"
                      >
                    </div>
                  </div>
                  <div
                    class="row"
                    v-show="!foreignAddress"
                  >
                    <div class="input-field col s6">
                      <input
                        v-model="street"
                        id="street"
                        type="text"
                        class="validate"
                        placeholder="Street"
                      >
                    </div>
                    <div class="input-field col s6">
                      <input
                        v-model="city"
                        id="city"
                        type="text"
                        class="validate"
                        placeholder="City"
                      >
                    </div>
                  </div>
                  <div
                    class="row"
                    v-show="!foreignAddress"
                  >
                    <div class="input-field col s6">
                      <input
                        v-model="state"
                        id="state"
                        type="text"
                        class="validate"
                        placeholder="State"
                      >
                    </div>
                    <div class="input-field col s6">
                      <input
                        v-model="zipcode"
                        id="zipcode"
                        type="text"
                        class="validate"
                        placeholder="Zip Code"
                      >
                    </div>
                  </div>
                </form>
              </div>
              <div>

                <v-btn
                  @click="showModal = false"
                  color="error"
                >cancel
                </v-btn>
                <v-btn
                  @click="submitOrder"
                  color="primary"
                >Submit Order
                </v-btn>
              </div>
            </div>
          </slot>
        </Modal>

        <a
          class="waves-effect waves-light btn modal-trigger blue-grey lighten-1 right"
          @click="triggerModal"
        >Check Out</a>
        <!-- Modal1 -->
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import Modal from "@/components/Modal";

export default {
  components: {
    NavBar,
    Modal
  },
  data() {
    return {
      cart: [],
      discountAmount: 0,
      foreignAddress: false,
      first_name: "",
      last_name: "",
      email: "",
      nonUsAddress: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      showModal: false,
      discountCode: ""
    };
  },
  async mounted() {
    window.addEventListener("keydown", this.keyDownHandler);
    let { _id } = this.$store.state.user;

    if (!_id) {
      await this.$store.dispatch("getUser");
      _id = this.$store.state.user._id;
    }
    this.fillCart(_id);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.keyDownHandler);
  },
  methods: {
    keyDownHandler({ key }) {
      if (key === "Escape") this.showModal = false;
    },
    reviewProduct(product) {
      let selectedItem = this.$store.state.allProducts.find(
        ({ _id }) => _id == product._id
      );
      this.$router.history.push(`/product/${selectedItem.title}`);
    },
    async fillCart(id) {
      let {
        data: { cart }
      } = await this.$axios.get(`/api/cart/${id}`);
      this.cart = cart.map(cv => {
        return {
          product: cv.product,
          quantity: cv.quantity,
          total: cv.quantity * cv.product.price
        };
      });
    },
    async removeFromCart(_id) {
      let { data } = await this.$axios.put(
        `/api/cart/deleteItem/${this.$store.state.user._id}`,
        { _id }
      );
      if (!data.cart.length) this.$store.commit("setUser", data);
      this.fillCart(data._id);
    },
    increaseQuantity(id) {
      this.cart = this.cart.map(item => {
        if (item.product._id === id) {
          return Object.assign(item, {
            quantity: item.quantity + 1,
            total: (item.quantity + 1) * item.product.price
          });
        }
        return item;
      });
    },
    decreaseQuantity(id) {
      this.cart.forEach((item, i, arr) => {
        if (item.product._id === id) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.total = item.quantity * item.product.price;
          }
        }
      });
    },
    triggerModal() {
      this.showModal = true;
    },
    async submitOrder() {
      let userInfo;
      if (!this.foreignAddress) {
        if (
          !this.first_name ||
          !this.last_name ||
          !this.email ||
          !this.street ||
          !this.city ||
          !this.state ||
          !this.zipcode
        ) {
          alert(`Please ensure all fields are complete. We can not complete your order without this information.

If you are having trouble completing an order, Please contact us at DogCompanyDtx@gmail.com`);
          return;
        }
        userInfo = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          street: this.street,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode
        };
      } else {
        if (!this.nonUsAddress) {
          alert(
            `Please ensure all fields are complete. We can not complete your order without this information.
If you are having trouble completing an order, Please contact us at DogCompanyDtx@gmail.com`
          );
          return;
        } else {
          userInfo = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            nonUSAddress: this.nonUsAddress
          };
        }
      }
      const order = {
        cart: this.cart,
        total: this.orderTotal,
        user: userInfo
      };
      let { data } = await this.$axios.post(`/api/order`, order);
      this.$store.commit("completeOrder", data);
      await this.$axios.delete("/api/User");
      this.$router.push("store");
    }
  },
  computed: {
    orderTotal() {
      let actualTotal = this.cart.reduce((acc, { total }) => acc + total, 0);
      if (this.discountCode.match(/prb/gi)) {
        this.discountAmount = (actualTotal * 0.2).toFixed(2);
        return (actualTotal * 0.8).toFixed(2);
      } else {
        this.discountAmount = 0;
        return actualTotal.toFixed(2);
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.Store-page-content-container > .container {
  padding-top: 10vh;
}
.center {
  align-items: center;
}
.row {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.product-row {
  border-bottom: 1px solid white;
  padding: 10px 0;
}
.product-row,
.product-row * {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-row * {
  justify-content: center;
}
.product-image {
  width: 100%;
}
.product_title {
  cursor: pointer;
  text-decoration: underline;
}
@media (max-width: 960px) and (min-width: 600px) {
  .cart-container {
    width: 90%;
    margin: auto;
  }
}
.modal-content {
  width: 90%;
  margin: auto;
  padding: 20px;
}
.cartHeader {
  color: black;
  font-weight: bold;
  font-size: 3.5em;
}
.Store-page-content-container {
  background-color: rgba(0, 0, 0, 0.25);
}
i {
  cursor: pointer;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  direction: rtl;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  direction: rtl;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ but I'm not sure about working */
  direction: rtl;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  direction: rtl;
}
input.discount {
  text-align: right;
}
</style>
