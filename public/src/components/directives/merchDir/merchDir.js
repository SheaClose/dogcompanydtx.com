export default function merchDir() {
  return {
    template: templ,
    scope: {
      add: '&',
      product: '=',
      sizes: '='
    }
  };
}

const templ = `<div class="col s12 m12 l4  product-page-text">
    <div style="padding-top: 10px; white-space: pre-line;">  <u>Product</u>:             {{product.title}}</div>
    <div style="padding-top: 10px; white-space: pre-line;">  <u>Description</u>:             {{product.description}}</div>
    <div style="padding-top: 10px; white-space: pre-line;">  <u>Price</u>:             \${{product.price}}</div>
    <div style="padding-top: 10px;">
      <button ng-click="add({title: product.title, size: size})" type="button" class="button black"  name="button" onclick="Materialize.toast('Item added to cart', 2000, 'teal rounded')">Add to Cart</button>
    </div>
</div>
`;
