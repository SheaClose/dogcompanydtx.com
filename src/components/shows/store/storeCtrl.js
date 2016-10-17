angular.module("app")
.controller("storeCtrl", function($scope, storeService){
  $scope.show = false;
  const getProducts = () => {
    console.log("StoreCtrl.js / getProducts");
    storeService.getProducts().then((response) => {
      console.log("storeCtrl / returned response from service.");
      $scope.show = true;
      $scope.products = response.data
    })
  }
  getProducts();
})
