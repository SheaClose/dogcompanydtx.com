app.controller('productCtrl', [
  '$scope',
  '$state',
  'storeService',
  function productCtrl($scope, $state, storeService) {
    angular.element(document).ready(() => {
      $('.carousel').carousel();
      $('select').material_select();
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

    $scope.toggle = false;

    $scope.img2Toggle = false;

    $scope.sizes = {
      small: false,
      medium: false,
      large: false,
      xLarge: false,
      xxLarge: false,
      xxxLarge: false
    };

    storeService.getAllProducts().then(response => {
      let product = response.data;
      product.forEach((cv, i, a) => {
        if (cv.title === $state.params.id) {
          for (var key in $scope.sizes) {
            var num = 0;
            if (key === cv.size) {
              $scope.sizes[key] = cv.available;
            }
          }
          $scope.product = {
            _id: cv._id,
            category: cv.category,
            color: cv.color,
            description: cv.description,
            imgUrl: cv.imgUrl,
            price: cv.price,
            title: cv.title,
            options: cv.options
          };
          if (cv.imgUrl2) {
            $scope.product.imgUrl2 = cv.imgUrl2;
            $scope.img2Toggle = true;
          }
          if (cv.imgUrl3) {
            $scope.product.imgUrl3 = cv.imgUrl3;
          }
          if (cv.category !== 'merch') {
            $scope.product.size = cv.size;
          }
          if (cv.category == 'merch') {
            $scope.toggle = true;
          }
        }
      });
    });
    $scope.addToCart = (title, size, bundle) => {
      storeService.addToCart(title, size || 'small', bundle).then(response => {
        $scope.user = response.data;
      });
    };
  }
]); // export default productCtrl;
