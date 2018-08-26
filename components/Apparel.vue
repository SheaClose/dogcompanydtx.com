<template>
  <div class="col s12 m12 l4  product-page-text">
    <div style="padding-top: 10px; white-space: pre-line;">
      <u>Product</u>: {{product.title}}</div>
    <div style="padding-top: 10px; white-space: pre-line;">
      <u>Description</u>: {{product.description}}</div>
    <div style="padding-top: 10px; white-space: pre-line;">
      <u>Color</u>: {{product.color}}</div>
    <div style="padding-top: 10px; white-space: pre-line;">
      <u>Price</u>: ${{product.price}}</div>
    <div style="padding-top: 10px; white-space: pre-line;">
      <u>Size</u>:
    </div>
    <div style="padding-top: 10px;">
      <v-select v-model="size" :items="sizeList" color="grey" single-line label="--- Select a Shirt Size ---"></v-select>
    </div>
    <div style="padding-top: 10px;">
      <button @click="$emit('added',{title: product.title, size: size})" type="button" class="btn" name="button">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props:["product", "add", "sizes"],
  data(){
    return {
      size: '',
      sizeList: Object.keys(this.sizes).filter(c=>this.sizes[c])
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
