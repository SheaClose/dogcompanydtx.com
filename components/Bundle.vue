<template>
  <div class="col s12 m12 l4  product-page-text">
    <div class="">
      <div style="padding-top: 10px;">
        <u>Product</u>: {{updatedProduct.title}}
      </div>
      <div style="padding-top: 10px;">
        <u>Description</u>: {{updatedProduct.description}}
      </div>
      <div style="padding-top: 10px;">
        <u>Color</u>: {{updatedProduct.color}}
      </div>
      <div style="padding-top: 10px;">
        <u>Price</u>: ${{updatedProduct.price}}
      </div>
    </div>
    <div style="min-height:45px;" class="input-field">
      <v-select v-show="updatedProduct.albums" v-model="selectedAlbum" :items="updatedProduct.albums" color="grey" single-line label="--- Select an Album ---"></v-select>
    </div>
    <div class="input-field" style="min-height:45px;">
      <v-select color="grey" single-line label="--- Select a Shirt Design ---" v-model="selectedDesign" v-show="updatedProduct.designs" :items="updatedProduct.designs">
      </v-select>
    </div>
    <div class="input-field" style="min-height:45px;">
      <v-select color="grey" single-line label="--- Select a Shirt Size ---" v-model="selectedSize" v-show="selectedDesign" :items="updatedProduct.sizes">
      </v-select>
    </div>
    <div style="padding-top: 10px; display:flex; justify-content:center;">
      <button @click="sendToParent" type="button" class="btn" name="button">Add to Cart</button>
    </div>
  </div>

</template>

<script>
export default {
  props:["product", "add", "sizes"],
  data(){
    return {
      selectedDesign: '',
      selectedAlbum:'',
      selectedSize:''
    }
  },
  mounted(){
    if (this.product.options.includes("albums")) {
      this.product.albums = [
        "Songs of Discontent - cd",
        "War Stories - Vinyl"
      ];
    }
  },
  methods:{
    sendToParent(){
      let bundle = {}
      this.selectedAlbum ? bundle.selectedAlbum = this.selectedAlbum : null
      this.selectedDesign ? bundle.selectedDesign = this.selectedDesign : null
      this.selectedSize ? bundle.selectedSize = this.selectedSize : null
      let noOptionsSelected = Object.values(bundle).filter(c=>c).length === 0

      if (this.selectedDesign && !this.selectedSize){
        return this.$store.commit('setAlert', {alertMsg:'Please select a size', alertColor: 'red'})
      } 
      else if (noOptionsSelected) {
        return this.$store.commit('setAlert', {alertMsg:'Please make a selection', alertColor: 'red'})
      }
      else {
        return this.$emit('added',{title: this.updatedProduct.title, bundle})
      }
    }
  },
  computed: {
    updatedProduct(){
      let newObj = Object.assign({}, this.product)
      const orderedSizes = [
        "small",
        "medium",
        "large",
        "xLarge",
        "xxLarge",
        "xxxLarge"
      ];
      const sizes = this.$store.state.allProducts
        .filter(c => c.title == this.selectedDesign)
        .filter(c => c.available)
        .map(c => c.size);
      if (this.product.options.includes("shirts")) {
        Object.assign(
          newObj, 
          {
            designs:this.$store.state.allProducts
            .filter(c => c.category == "apparel")
            .map(c => c.title)
            .filter((c, i, a) => a.indexOf(c) == i)
          }
        )
      }
      if (this.product.options.includes("albums")) {
        Object.assign(
          newObj,
          {albums:["Songs of Discontent - cd","War Stories - Vinyl"]}
        )
      }
      if (this.selectedDesign){
        Object.assign(
          newObj,
          {sizes: orderedSizes.filter(c => sizes.includes(c)) }
        )
      }
      return newObj;
    }
  }
}     
</script>
<style scoped>
  .btn {
    border: 1px solid white;
    font-weight: 700;
    border-radius: 2.5px;
    letter-spacing: 2.5px;
    padding: 2px 10px;
  }
</style>
