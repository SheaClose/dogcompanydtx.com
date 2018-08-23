export default function merchDir() {
  return {
    templateUrl: "./views/merchTmpl.html",
    scope: {
      add: "&",
      product: "=",
      sizes: "="
    },
    controller: [
      "$scope",
      "$sce",
      function($scope, $sce) {
        $scope.product_description = $sce.trustAsHtml(
          $scope.product.description
        );
      }
    ]
  };
}
