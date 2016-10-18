angular.module("app")
.controller("productCtrl", function($scope, $state, storeService){
  $scope.toggle = false
  const getAllProducts = () => {
    storeService.getAllProducts().then((response) => {
      let product = response.data;
      product.forEach((cv, i, a)=>{
        if (cv._id === $state.params.id) {
          $scope.product = {
            _id: cv._id
            , category: cv.category
            , color: cv.color
            , description: cv.description
            , imgUrl: cv.imgUrl
            , price: cv.price
            , title: cv.title
          }
          if (cv.category !== "merch"){
            $scope.product.size = cv.size;
          }
          if (cv.category == "merch"){
            $scope.toggle = true;
          }
          // console.log($scope.product);
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
