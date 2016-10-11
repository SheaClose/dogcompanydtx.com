angular.module("app")
.controller("adminCtrl", function($scope){
  $scope.submitNewProduct = () => {
    const product = {
      title:  $scope.title
    , description: $scope.description
    , price: $scope.price
    , category: $scope.category
    , color: $scope.color
    , imgUrl: $scope.imgUrl
    , url: $scope.url
    , size: $scope.size
    };
  }
})
