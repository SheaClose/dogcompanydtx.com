angular.module("app")
.service("storeService", function($http){
  this.getProducts = () =>{
    return $http.get("/api/products").then((response)=>{
      return response;
    })
  }
})
