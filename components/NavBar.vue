<template>
  <div>
    <div class="">
      <div id='nav_bar' class="nav-bar">
        <nuxt-link to="/">Home</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/store">Store</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/shows">Shows</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/about">About</nuxt-link>
        <div class="card transparent">
          <a class="pointer">/</a>
        </div>
        <nuxt-link to="/media">Media</nuxt-link>
        <div v-if="user && user.cart && store" class="fixed-action-btn" style="bottom: 25px; right: 35px;">
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
  async mounted(){
    if (!Object.keys(this.$store.state.user).length){
      await this.$store.dispatch('getUser')
    }
  },
  computed:{
    alert(){
      return !!this.$store.state.alert;
    },
    user(){
      return this.$store.state.user
    },
    store(){
      return this.$route.name.toLowerCase().includes('store') || this.$route.name.toLowerCase().includes('product')
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
  .nav-bar a:link {
    color: white;
  }

  .nav-bar a:visited {
    color: white;
  }

  .nav-bar {
    background: transparent;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-between;
    font-family: "Black Ops One", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2em;
    margin: 1vh 0vh 5vh;
  }

  a {
    color: deepskyblue;
  }
  .nav-bar a {
    color: white;
  }

  .pointer {
    cursor: pointer;
  }

  .prodrow {
    max-height: 50vh;
  }

  .t_shirt_select {
    display: block;
    background-color: #444;
  }
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: static;
    left: 0;
    opacity: 1;
  }

  @viewport {
    width: device-width;
  }
  @media (max-width: 960px) {
    .alert {
      width: 50vw;
    }
    .fixed-action-btn {
      font-size: 2em;
    }
    .nav-bar {
      font-size: 14px;
    }
  }
</style>
