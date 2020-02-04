angular.module('app').controller('productCtrl', [
  '$scope',
  '$state',
  'storeService',
  function productCtrl($scope, $state, storeService) {
    angular.element(document).ready(() => {
      var x;
      $(window).on('scroll', function() {
        var x = $(window).scrollTop();
        function retY() {
          var y = $(window).scrollTop() / $(window).height();
          if (y < 0.85) {
            return y;
          } else {
            return 0.85;
          }
        }
        $('.Store-page-container').css(
          'background-size',
          125 + parseInt(x / 3) + 'vh'
        );
        $('.Store-page-content-container').css(
          'background-color',
          'rgba(0,0,0, ' + retY() + ')'
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
            id,
            color,
            description,
            imgurl,
            price,
            options,
            imgurl2,
            imgurl3,
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
              id,
              category,
              color,
              description,
              imgurl,
              price,
              title,
              options
            };
            if (imgurl2) {
              $scope.product.imgurl2 = imgurl2;
              $scope.img2Toggle = true;
            }
            if (imgurl3) {
              $scope.product.imgurl3 = imgurl3;
            }
            if (category !== 'merch') {
              $scope.product.size = size;
            }
            if (category == 'merch') {
              $scope.toggle = true;
            }
          }
        }
      );
    });
    $scope.addToCart = (title, size, bundle) => {
      M.toast({
        displayLength: 2000,
        html: `${title} added to cart`,
        classes: 'green darken-4 rounded'
      });
      storeService.addToCart(title, size || 'small', bundle).then(response => {
        $scope.user = response.data;
        // $state.go('store');
      });
    };
  }
]);
