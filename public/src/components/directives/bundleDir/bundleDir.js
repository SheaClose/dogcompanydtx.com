export default function bundleDir(storeService) {
  return {
    templateUrl: './src/components/directives/bundleDir/bundleTmpl.html',
    scope: {
      add: '&',
      product: '=',
      sizes: '='
    },
    controller: function($scope) {
      if ($scope.product.options.includes('shirts')) {
        $scope.product.designs = storeService.products
          .filter(c => c.category == 'apparel')
          .map(c => c.title)
          .filter((c, i, a) => a.indexOf(c) == i);
      }
      if ($scope.product.options.includes('albums')) {
        $scope.product.albums = storeService.products
          .filter(c => c.category == 'merch')
          .filter(c => c.description.includes('tracks'))
          .map(c => c.title);
      }
      $scope.$watch('selectedDesign', function() {
        $scope.product.sizes = storeService.products
          .filter(c => c.title == $scope.selectedDesign)
          .filter(c => c.available)
          .map(c => c.size);
      });
    }
  };
}
