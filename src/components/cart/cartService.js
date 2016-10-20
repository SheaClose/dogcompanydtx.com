angular.module("app")
.service("cartService", function($http){
  this.fillCart = (id) =>{
    return $http.get(`/api/cart/${id}`)
  };
  this.getCart = () =>{
    return $http.get("/api/cart")
  };
  this.removeFromCart = (prodId, userId) => {
    return $http.put(`/api/cart/deleteItem/${userId}`, {_id: prodId})
  };
  this.submitOrder = (order)=>{
    return $http.post(`/api/order`, order)
  };
  this.deleteUser = () => {
    return $http.delete("/api/User")
  }

})
