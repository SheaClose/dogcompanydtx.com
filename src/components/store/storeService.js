app.service('storeService', [
  '$http',
  function storeService($http) {
    this.products = [];
    this.getAllProducts = () => {
      return $http.get('/api/products').then(response => {
        this.products = response.data;
        return response;
      });
    };
    this.addToCart = (title, size, bundle) => {
      return $http.post('/api/cart', { title, size, bundle });
    };
  }
]); // export default storeService;
