angular.module("app")
.service("cartService", function($http){
  this.fillCart = (id) =>{
    return $http.get(`/api/cart/${id}`)
  };
  this.getCart = () =>{
    return $http.get("/api/cart")
  }

})
