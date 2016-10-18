angular.module("app")
.controller("productCtrl", function($scope, $state, storeService){
  const getAllProducts = () => {
    storeService.getAllProducts().then((response) => {
      let product = response.data;
      $scope.products = [];
      product.forEach((cv, i, a)=>{
        if (cv._id === $state.params.id) {
          $scope.products.push(cv)
        }
      })
    })
  };
  $scope.addToCart = (title, size) =>{
    storeService.addToCart(title, size).then((response)=>{
      console.log(response);
    })
  }
getAllProducts();
})
