<template>
  <div class="col s12 m12 l4  product-page-text">
    <div style="padding-top: 10px; white-space: pre-line;">
      <u>Product</u>: {{product.title}}</div>
    <div style="padding-top: 10px; white-space: pre-line;">
      <u>Description</u>:
      <span v-html="product.description" />
    </div>
    <div style="padding-top: 10px; white-space: pre-line;">
      <u>Price</u>: ${{product.price}}</div>
    <div style="padding-top: 10px;">
      <button @click="$emit('added',{title: product.title, bundle: true})" type="button" class="btn" name="button">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
   props:["product", "add", "sizes"]
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
