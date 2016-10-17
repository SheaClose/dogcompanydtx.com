angular.module("app")
.controller("storeCtrl", function($scope, storeService){
  const getProducts = () => {
    storeService.getProducts().then((response) => {
      $scope.products = response.data
    })
  }
  getProducts();
})
