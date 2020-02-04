angular.module('app').service('cartService', [
  '$http',
  function cartService($http) {
    this.getCart = () => {
      return $http.get('/api/cart');
    };
    this.removeFromCart = (prodId, userId) => {
      return $http.put(`/api/cart/deleteItem/${userId}`, { id: prodId });
    };
    this.submitOrder = order => {
      return $http.post(`/api/order`, order);
    };
    this.deleteUser = () => {
      return $http.delete('/api/User');
    };
  }
]);
