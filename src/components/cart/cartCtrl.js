import $ from "jquery";

(function($) {
  $.fn.leanModal = function(options) {
    if ($(".modal").length > 0) {
      $(".modal").modal(options);
    }
  };

  $.fn.openModal = function(options) {
    $(this).modal(options);
    $(this).modal("open");
  };

  $.fn.closeModal = function() {
    $(this).modal("close");
  };
})(jQuery);

export default [
  "$scope",
  "cartService",
  "storeService",
  "$state",
  "$sce",
  function cartCtrl($scope, cartService, storeService, $state, $sce) {
    $scope.increaseQuantity = id => {
      $scope.cart.forEach((cv, i, arr) => {
        if (cv.product._id === id) {
          cv.quantity += 1;
          cv.total = cv.quantity * cv.product.price;
        }
      });
      $scope.total = getOrderTotal();
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
      $scope.total = getOrderTotal();
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

    function getCart() {
      cartService.getCart().then(function(response) {
        response.data.forEach(function(cv, i, arr) {
          $scope.user = cv;
          fillCart($scope.user._id);
        });
      });
    }
  }
];
