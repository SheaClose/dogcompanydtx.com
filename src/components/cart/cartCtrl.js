function cartCtrl ($scope, $window, cartService){
  const fillCart = (id) => {
    cartService.fillCart(id).then(function(response){
      $scope.cart = []
      response.data.cart.forEach((cv, i, arr)=>{
        let cartObj = {
          product: cv.product
          , quantity: cv.quantity
          , total: cv.quantity * cv.product.price
        }
        $scope.cart.push(cartObj)
      })
      getOrderTotal();
    })
  }
  const getCart = () =>{
    cartService.getCart().then(function(response){
      response.data.forEach(function(cv, i , arr){
        $scope.user = cv
        fillCart($scope.user._id);
      })
    })
  };
  $scope.increaseQuantity = (id) => {
    $scope.cart.forEach((cv, i, arr)=>{
      if (cv.product._id ===  id) {
        cv.quantity += 1;
        cv.total = cv.quantity * cv.product.price;
      }
    })
    getOrderTotal();
  };
  $scope.decreaseQuantity = (id) => {
    $scope.cart.forEach((cv, i, arr)=>{
      if (cv.product._id ===  id) {
        if (cv.quantity > 1) {
          cv.quantity -= 1;
          cv.total = cv.quantity * cv.product.price;

        }
      }
    })
    getOrderTotal();
  };
  const getOrderTotal = () => {
    $scope.total = 0
    $scope.cart.forEach((cv, i, arr) => {
      $scope.total += cv.total;
    })
  }
  $scope.removeFromCart = (prodId) => {
    cartService.removeFromCart(prodId, $scope.user._id).then((response)=>{
      getCart();
    })
  };
  $scope.submitOrder = () => {
     if ($scope.first_name === undefined || $scope.last_name === undefined || $scope.email === undefined || $scope.street === undefined || $scope.city === undefined || $scope.state === undefined || $scope.zipcode === undefined) {
       alert(`Please ensure all fields are complete. We can not complete your order without this information.

 If you are having trouble completing an order, Please contact us at DogCompanyDtx@gmail.com`);
       return;
     }
    const userInfo =  {
      first_name: $scope.first_name
      , last_name: $scope.last_name
      , email: $scope.email
      , street: $scope.street
      , city: $scope.city
      , state: $scope.state
      , zipcode: $scope.zipcode
    }
    const order = {
      cart: $scope.cart
      , total: $scope.total
      , user: userInfo
    };
    cartService.submitOrder(order).then((response)=>{
      window.currentUserOrderInformation = response.data
      cartService.deleteUser().then((response) => {
<<<<<<< HEAD
       $window.location.href = "http://107.170.40.18/#/store"
=======
        $window.location.href = "http://dogcompanydtx.com/#/store"
>>>>>>> 4c5e934759662db0a4ae4d8d4623bd024df6acb3
      })
    })
  }
  getCart();
}
export default cartCtrl;
