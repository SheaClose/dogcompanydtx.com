app.controller('storeCtrl', [
  '$scope',
  '$state',
  'storeService',
  function($scope, $state, storeService) {
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
          125 + parseInt(x / 6) + 'vh'
        );
        $('.Store-page-content-container').css(
          'background-color',
          'rgba(0,0,0, ' + retY() + ')'
        );
      });
    });
    $scope.nonUSAddress = false;
    const getAllProducts = () => {
      storeService.getAllProducts().then(response => {
        let products = response.data
          .reduce(
            (acc, cur) =>
              !acc.includes(cur.title) ? [...acc, cur.title] : acc,
            []
          )
          .map(c => {
            var avail = response.data.find(
              product => c == product.title && product.available
            );
            return avail ? avail : null;
          })
          .filter(Boolean);

        let apparel = products.filter(c => c.category == 'apparel');
        let merch = products.filter(c => c.category == 'merch');
        let bundle = products.filter(c => c.category == 'bundle');
        $scope.products = [...apparel, ...merch, ...bundle];
      });
    };
    $scope.goTo = id => {
      $state.go('product', { id: id });
    };
    getAllProducts();
    if (window.currentUserOrderInformation) {
      if (window.currentUserOrderInformation.user.nonUSAddress) {
        $scope.nonUSAddress = true;
      }
      $scope.currentUserOrderInformation = window.currentUserOrderInformation;
      $('#modal1').openModal();
      window.currentUserOrderInformation = null;
    }
  }
]); // export default storeCtrl;
