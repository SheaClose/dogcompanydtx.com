<template>
  <div class="Store-page-container" :style="{
      backgroundSize:`${125 + (+scroll / 4)}vh`
    }">
    <div class="Store-page-content-container" :style="{backgroundColor: `rgba(0,0,0,${this.location})`}">
      <div class="container">
        <NavBar></NavBar>
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
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import scroll from '@/mixins/scroll'
export default {
  components:{
    NavBar
  },
  mixins:[scroll],
  data(){
    return {
      products: this.$store.state.products
    }
  },
  methods:{
    goTo(path){
      this.$router.history.push(`/product/${path}`)
    }
  }
}
</script>

