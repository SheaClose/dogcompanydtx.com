<template>
  <div>
    <div class="">
      <div id='nav_bar' class="nav-bar">
        <nuxt-link to="/">Home</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/Store">Store</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/Show">Show</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/About">About</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/Media">Media</nuxt-link>
        <div v-if="user.cart" class="fixed-action-btn" style="bottom: 25px; right: 35px;">
          <nuxt-link to="/cart">
            <span v-if="user.cart.length" class="btn-floating btn-large blue-grey lighten-1">
              <div style="font-size:.5em; color: black; position: absolute; width: 100%; top:-4px; right:0; " class="black-text floating">{{user.cart.length}}</div>
              <i style="font-size: 1.3em; position: relative;; z-index:-100" class="material-icons">shopping_cart</i>
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <v-alert type="info" class="alert" transition="scale-transition" :value="alert" :color="$store.state.alertColor">
      {{$store.state.alertMsg}}
    </v-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:{}
    }
  },
  async mounted(){
    let {data} = await this.$axios.get("/api/cart")
    let [user] = data;
    this.user = user ? user : {}
  },
  computed:{
    alert(){
      return !!this.$store.state.alert;
    }
  }
}
</script>


<style scoped>
  .success {
    background: rgba(82, 106, 83, 0.95);
  }
  .alert {
    z-index: 100;
    color: black;
    position: fixed;
    bottom: 0;
    right: 50vw;
    width: 25vw;
    transform: translate(50%);
    text-align: center;
    background: rgba(82, 106, 83, 0.95);
  }
  @media (max-width: 860px) {
    .alert {
      width: 50vw;
    }
  }
</style>
