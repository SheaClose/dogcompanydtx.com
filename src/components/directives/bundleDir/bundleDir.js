angular.module('app').directive('bundleDir', [
  'storeService',
  function bundleDir(storeService) {
    return {
      templateUrl: './components/directives/bundleDir/bundleTmpl.html',
      scope: {
        add: '&',
        product: '=',
        sizes: '='
      },
      controller: [
        '$scope',
        function($scope) {
          if ($scope.product.options.includes('shirts')) {
            $scope.product.designs = storeService.products
              .filter(c => c.category == 'apparel')
              .map(c => c.title)
              .filter((c, i, a) => a.indexOf(c) == i);
          }
          if ($scope.product.options.includes('albums')) {
            $scope.product.albums = [
              'Songs of Discontent - cd',
              'War Stories - Vinyl'
            ];
          }
          $scope.$watch('selectedDesign', function() {
            const orderedSizes = [
              'small',
              'medium',
              'large',
              'xLarge',
              'xxLarge',
              'xxxLarge'
            ];

            const sizes = storeService.products
              .filter(c => c.title == $scope.selectedDesign)
              .filter(c => c.available)
              .map(c => c.size);

            $scope.product.sizes = orderedSizes.filter(c => sizes.includes(c));
          });
        }
      ]
    };
  }
]);
