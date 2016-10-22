angular.module("app")
.controller("productCtrl", function($scope, $state, storeService){
  $scope.toggle = false
  $scope.img2Toggle = false;
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
          if (cv.imgUrl2){
            $scope.product.imgUrl2 =  cv.imgUrl2
            $scope.img2Toggle = true;
          }
          if (cv.imgUrl3) {
            $scope.product.imgUrl3 = cv.imgUrl3
          }
          if (cv.category !== "merch"){
            $scope.product.size = cv.size;
          }
          if (cv.category == "merch"){
            $scope.toggle = true;
          }
        }
      })
    })
  };
  $scope.addToCart = (title, size) =>{
    if (!size) {
      size = "small"
    }
    storeService.addToCart(title, size).then((response)=>{
      $scope.user = response.data
    })
  }
getAllProducts();
})
