function storeService($http) {
  this.products = [];
  this.getAllProducts = () => {
    return $http.get('/api/products').then(response => {
      this.products = response.data;
      return response;
    });
  };
  this.addToCart = (ttl, sz) => {
    return $http.post('/api/cart', { title: ttl, size: sz });
  };
}
export default storeService;
