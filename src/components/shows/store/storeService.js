angular.module("app")
.service("storeService", function($http){
  this.getProducts = () =>{
    console.log("StoreService / getProducts");
    return $http.get("/api/products").then((response)=>{
      console.log("storeService / getProducts.then");
      return response;
    })
  }
})
