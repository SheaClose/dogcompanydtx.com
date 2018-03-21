export default function() {
  return {
    templateUrl: "./views/navbar.html",
    scope: {
      user: "="
    },
    controller: [
      "$http",
      "$scope",
      function($http, $scope) {
        $http.get("/api/cart").then(response => {
          $scope.user = response.data.pop();
        });
      }
    ]
  };
}
