import $ from "jquery";

export default [
  "$scope",
  "$state",
  "storeService",
  function productCtrl($scope, $state, storeService) {
    angular.element(document).ready(() => {
      $(".carousel").carousel();
      $("select").material_select();
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
    });

    $scope.sizes = {
      small: false,
      medium: false,
      large: false,
      xLarge: false,
      xxLarge: false,
      xxxLarge: false
    };

    storeService.getAllProducts().then(response => {
      response.data.forEach(
        (
          {
            title,
            available,
            _id,
            color,
            description,
            imgUrl,
            price,
            options,
            imgUrl2,
            imgUrl3,
            size,
            category
          },
          i,
          a
        ) => {
          if (title === $state.params.id) {
            for (var key in $scope.sizes) {
              var num = 0;
              if (key === size) {
                $scope.sizes[key] = available;
              }
            }
            $scope.product = {
              _id,
              category,
              color,
              description,
              imgUrl,
              price,
              title,
              options
            };
            if (imgUrl2) {
              $scope.product.imgUrl2 = imgUrl2;
              $scope.img2Toggle = true;
            }
            if (imgUrl3) {
              $scope.product.imgUrl3 = imgUrl3;
            }
            if (category !== "merch") {
              $scope.product.size = size;
            }
            if (category == "merch") {
              $scope.toggle = true;
            }
          }
        }
      );
    });
    $scope.addToCart = (title, size, bundle) => {
      storeService.addToCart(title, size || "small", bundle).then(response => {
        $scope.user = response.data;
        $state.go("store");
      });
    };
  }
];
