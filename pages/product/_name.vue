<template>
  <div class="Store-page-container">
    <NavBar></NavBar>
    <div class="Store-page-content-container">
      <div class="container">
        <div class="row">
          <div class="product-page">
            <div class="col s12 m12 l8 center">
              <img class="responsive-img" id="prod_img" :src="product.imgUrl" alt="Image of merchandise" />
              <div v-if="img2Toggle">
                <div class="row">
                  <img v-if="product.imgUrl2" alt="optional additional images" class="col s12 m12 l12 responsive-img" :src="product.imgUrl2">
                  <img v-if="product.imgUrl3" alt="optional additional images" class="col s12 m12 l12 responsive-img" :src="product.imgUrl3">
                </div>
              </div>
            </div>
            <Apparel v-if="product.category == 'apparel'" :product="product" @added="addToCart" :sizes="sizes">
            </Apparel>
            <Merch v-if="product.category == 'merch'" :product="product" @added="addToCart" :sizes="sizes">
            </Merch>
            <Bundle v-if="product.category == 'bundle'" :product="product" @added="addToCart" :sizes="sizes">
            </Bundle>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Merch from '@/components/Merch'
import Bundle from '@/components/Bundle'
import Apparel from '@/components/Apparel'

export default {
  components: {
    NavBar,
    Merch,
    Bundle,
    Apparel
  },
  data(){
    let {name} = this.$route.params
    let img2Toggle = false
    let sizes = {
      small: false,
      medium: false,
      large: false,
      xLarge: false,
      xxLarge: false,
      xxxLarge: false
    }
    let [product] = this.$store.state.allProducts.filter(c=>{
      let match = c.title == name
      if (match){
        sizes[c.size] = c.available;
        img2Toggle = !!c.imgUrl2
        return match
      }
    });
    return {
      alert: false,
      product: product || {},
      sizes,
      img2Toggle
    }
  },
  methods:{
    async addToCart({title, size, bundle}){
      if (!size && !bundle){
          /** size wasn't selected, throw error */
          return this.$store.commit('setAlert', {alertMsg:'Please select a size', alertColor: 'red'})
      }
        let {data} = await this.$axios.post("/api/cart", { title, size: size || 'small', bundle })
        this.$store.commit('setAlert', {alertMsg:'Item added to cart', alertColor: 'primary'});
        this.$store.commit('setUser', data);
        this.$router.history.push('/store')
    }
  }
}
</script>

<style>
  .Store-page-content-container > .container {
    padding-top: 10vh;
  }
  @media (max-width: 960px) {
    #prod_img {
      width: 80%;
    }
  }
</style>
