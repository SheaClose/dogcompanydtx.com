angular.module("app")
.controller("storeCtrl", function($scope, $stateParams, $state, storeService){
  const getAllProducts = () => {
    storeService.getAllProducts().then((response) => {
      let product = response.data;
      // console.log(product);
      $scope.products = [];
      product.forEach((cv, i, a)=>{
        if (cv.size === "small") {
          $scope.products.push(cv)
        }
      })
    })
  };
  $scope.goTo = (id) => {
    $state.go('product', {'id': id});
  }

getAllProducts();



})
