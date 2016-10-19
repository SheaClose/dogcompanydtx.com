angular.module("app")
.controller("cartCtrl", function($scope, cartService){
  function fillCart(id){
    // console.log("angCartCtl/4");
    cartService.fillCart(id).then(function(response){
      // console.log(response.data.cart);
      $scope.cart = []
      response.data.cart.forEach((cv, i, arr)=>{
        let cartObj = {
          product: cv.product
          , quantity: cv.quantity
        }
        $scope.cart.push(cartObj)
      })
      console.log($scope.cart);
    })
  }
  function getCart(){
    // console.log("cartCtrl/getCart");
    cartService.getCart().then(function(response){
      response.data.forEach(function(cv, i , arr){
        $scope.user = cv
        fillCart($scope.user._id);
      })
      // console.log($scope.user);
    })
  }
  increaseQuantity = () => {
    $product.quantity += 1
  }

  getCart();
})
