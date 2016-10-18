angular.module("app")
.controller("productCtrl", function($scope, $state, storeService){
  const getAllProducts = () => {
    storeService.getAllProducts().then((response) => {
      let product = response.data;
      // $scope.products = [];
      product.forEach((cv, i, a)=>{
        if (cv._id === $state.params.id) {
          // console.log(cv);
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
          console.log($scope.product);
          // $scope.products.push(cv)
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
