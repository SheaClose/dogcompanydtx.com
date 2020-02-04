angular.module('app').directive('merchDir', function merchDir() {
  return {
    templateUrl: './components/directives/merchDir/merchTmpl.html',
    scope: {
      add: '&',
      product: '=',
      sizes: '='
    },
    controller: [
      '$scope',
      '$sce',
      function($scope, $sce) {
        $scope.product_description = $sce.trustAsHtml(
          $scope.product.description
        );
      }
    ]
  };
});
