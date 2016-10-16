angular.module("app")
.controller("storeCtrl", function($scope, storeService){
  $scope.show = false;
  const getProducts = () => {
    storeService.getProducts().then((response) => {
      $scope.show = true;
      console.log(response.data);
      $scope.products = response.data
    })
  }
  getProducts();
})
