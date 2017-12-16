app.controller("cartCtrl", [
  "$scope",
  "cartService",
  "storeService",
  "$state",
  function cartCtrl($scope, cartService, storeService, $state) {
    angular.element(document).ready(() => {
      var x;
      $(window).on("scroll", function() {
        var x = $(window).scrollTop();
        function retY() {
          var y = $(window).scrollTop() / $(window).height();
          if (y < 0.85) {
            return y;
          } else {
            return 0.85;
          }
        }
        $(".Store-page-container").css(
          "background-size",
          125 + parseInt(x / 3) + "vh"
        );
        $(".Store-page-content-container").css(
          "background-color",
          "rgba(0,0,0, " + retY() + ")"
        );
      });
      $(".modal-trigger").leanModal();
    });
    $scope.reviewProduct = function(product) {
      let selectedItem = storeService.products.find(
        cur => cur._id == product._id
      );
      $state.go("product", { id: selectedItem.title });
    };
    const fillCart = id => {
      cartService.fillCart(id).then(function(response) {
        $scope.cart = response.data.cart.map(cv => {
          return {
            product: cv.product,
            quantity: cv.quantity,
            total: cv.quantity * cv.product.price
          };
        });
        getOrderTotal();
      });
    };
    const getCart = () => {
      cartService.getCart().then(function(response) {
        response.data.forEach(function(cv, i, arr) {
          $scope.user = cv;
          fillCart($scope.user._id);
        });
      });
    };
    $scope.increaseQuantity = id => {
      $scope.cart.forEach((cv, i, arr) => {
        if (cv.product._id === id) {
          cv.quantity += 1;
          cv.total = cv.quantity * cv.product.price;
        }
      });
      getOrderTotal();
    };
    $scope.decreaseQuantity = id => {
      $scope.cart.forEach((cv, i, arr) => {
        if (cv.product._id === id) {
          if (cv.quantity > 1) {
            cv.quantity -= 1;
            cv.total = cv.quantity * cv.product.price;
          }
        }
      });
      getOrderTotal();
    };
    const getOrderTotal = () => {
      $scope.total = 0;
      $scope.cart.forEach((cv, i, arr) => {
        $scope.total += cv.total;
      });
    };
    $scope.removeFromCart = prodId => {
      cartService.removeFromCart(prodId, $scope.user._id).then(response => {
        getCart();
      });
    };

    $scope.submitOrder = () => {
      let userInfo;
      if (!$scope.foreignAddress) {
        if (
          !$scope.first_name ||
          !$scope.last_name ||
          !$scope.email ||
          !$scope.street ||
          !$scope.city ||
          !$scope.state ||
          !$scope.zipcode
        ) {
          alert(
            `Please ensure all fields are complete. We can not complete your order without this information.

If you are having trouble completing an order, Please contact us at DogCompanyDtx@gmail.com`
          );
          return;
        }
        userInfo = {
          first_name: $scope.first_name,
          last_name: $scope.last_name,
          email: $scope.email,
          street: $scope.street,
          city: $scope.city,
          state: $scope.state,
          zipcode: $scope.zipcode
        };
      } else {
        if (!$scope.nonUsAddress) {
          alert(
            `Please ensure all fields are complete. We can not complete your order without this information.
If you are having trouble completing an order, Please contact us at DogCompanyDtx@gmail.com`
          );
          return;
        } else {
          userInfo = {
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            email: $scope.email,
            nonUSAddress: $scope.nonUsAddress
          };
        }
      }
      const order = {
        cart: $scope.cart,
        total: $scope.total,
        user: userInfo
      };
      cartService.submitOrder(order).then(response => {
        window.currentUserOrderInformation = response.data;
        cartService.deleteUser().then(response => {
          $state.go("store");
        });
      });
    };

    getCart();
  }
]);
