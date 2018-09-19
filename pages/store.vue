<template>
  <div class="Store-page-container" :style="{
      backgroundSize:`${125 + (+scroll / 4)}vh`
    }">
    <NavBar></NavBar>
    <div class="Store-page-content-container" :style="{backgroundColor: `rgba(0,0,0,${this.location})`}">
      <div class="container">
        <div class="row">
          <div @click="goTo(product.title)" :key="product._id" v-for="product in products" class="col s12 m12 l4 center product-repeat pointer prodrow">
            <img class="product-img" :src="product.imgUrl" :alt="product.title" />
            <ul class="product-text">
              <li>{{product.title}}</li>
              <li>${{product.price}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="showModal" @close="modalClose">
      <slot slot="body" id="modal1" class="modal modal-fixed-footer grey darken-4">
        <div class="modal-content grey darken-2">
          <h4>Order Complete!</h4>
          <p>Thank you for placing an order with Dog Company. We have now received your order. Due to frequently changing availability of inventory, we must first verify we can fulfill your order. Please allow us a day or two to check inventory and we will contact you with confirmation and a payment request.</p>
          <p>
            You should recieve an e-mail shortly. Please hold on to this as confirmation of your order until you have received and are happy with your order. Should a problem arise, the Order Number will greatly assist us in locating your order.</p>
          <hr>

          <div>
            <span v-if="currentUserOrderInformation.total">
              Order Total (before shipping): ${{currentUserOrderInformation.total}}
            </span>
            <br>
            <span v-if="currentUserOrderInformation.date">
              Order Date: {{currentUserOrderInformation.date | formatDate}}
            </span>
            <div>
              <h5>Order:</h5>
            </div>
            <hr>
            <div>
              <ul :key="i" v-for="(cartItem, i) in currentUserOrderInformation.cart">
                <li>Product: {{cartItem.product.title}}</li>
                <li>Quantity: {{cartItem.quantity}}</li>
                <li v-if="!cartItem.product.category !== 'apparel'">Size: {{cartItem.product.size}}</li>
                <li v-if="!cartItem.product.category !== 'apparel'">Color: {{cartItem.product.color}}</li>
                <li style="border-bottom: 1px solid black;">Unit Price: ${{cartItem.product.price}}</li>
              </ul>
            </div>
            <div>
              <ul>
                <h5>Confirm User Data:</h5>
                <hr>
                <span>Name: {{currentUserOrderInformation.user.last_name}}, {{currentUserOrderInformation.user.first_name}}</span>
                <span v-if="currentUserOrderInformation.user.nonUSAddress">Adress: {{currentUserOrderInformation.user.nonUSAddress}}</span>
                <span v-else>Adress: {{currentUserOrderInformation.user.street}}, {{currentUserOrderInformation.user.city}}, {{currentUserOrderInformation.user.state}} {{currentUserOrderInformation.user.zipcode}}
                </span>
                <span>Email: {{currentUserOrderInformation.user.email}}</span>
              </ul>
            </div>
          </div>
          <div style="display:flex; justify-content: flex-end;" class="modal-footer">
            <v-btn color="primary" id="dismiss" @click="modalClose">Dismiss</v-btn>
          </div>
        </div>
      </slot>
    </Modal>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Modal from '@/components/Modal';
import scroll from '@/mixins/scroll'
export default {
  components:{
    NavBar,
    Modal
  },
  mixins:[scroll],
  data(){
    return {
      products: this.$store.state.products,
      showModal: false,
      currentUserOrderInformation: null
    }
  },
  mounted(){
    if(this.$store.state.order){
      this.currentUserOrderInformation = this.$store.state.order
      this.showModal = true;
    }
    window.addEventListener('keydown', this.keyDownHandler)
  },
  beforeDestroy(){
    window.removeEventListener('keydown', this.keyDownHandler)
  },
  methods:{
    keyDownHandler({key}){
      if (key==="Escape") this.modalClose()
    },
    goTo(path){
      this.$router.history.push(`/product/${path}`)
    },
    modalClose(){
      this.$store.commit('deleteOrder')
      this.showModal = false;
    }
  }
}
</script>

<style>
  div[class*="content-container"] .container {
    width: 70%;
    margin: auto;
  }

  .modal-content {
    width: 90%;
    max-height: 90vh;
    margin: auto;
    padding: 20px;
    overflow-x: auto;
  }
  .Store-page-container {
    background: black;
    background-attachment: fixed;
    background-position: center center;
    background-size: 125vh;
    -o-object-fit: fill;
    object-fit: fill;
    -o-object-position: center;
    object-position: center;
  }
  .Store-page-content-container > .container {
    padding-top: 10vh;
  }

  @media only screen and (min-width: 960px) {
    .Store-page-container {
      min-height: 99vh;
      background: -webkit-radial-gradient(
          center,
          ellipse,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 70%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/PastorJoe.jpg")
          no-repeat fixed;
      background: radial-gradient(
          ellipse at center,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 70%
        ),
        url("https://s3-us-west-2.amazonaws.com/dogcompany/PastorJoe.jpg")
          no-repeat fixed;
      background-attachment: fixed;
      background-position: center center;
      background-size: 125vh;
      -o-object-fit: fill;
      object-fit: fill;
      -o-object-position: center;
      object-position: center;
    }
  }

  .Store-page-content-container {
    min-height: 100vh;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .product-repeat {
    margin-top: 20px;
  }

  .product-img {
    height: 35vh;
    max-width: 100%;
    transition: transform 250ms ease-out;
  }

  .product-img:hover {
    transform: scale(1.05);
  }

  .product-text {
    font-size: 2.05vh;
  }

  .product-page {
    height: 80vh;
    font-size: 1.5em;
  }

  .product-page-img {
    height: 80vh;
  }
</style>
