angular.module('app').directive('navBar', function() {
  return {
    templateUrl: './components/Navbar/navbar.html',
    scope: {
      user: '='
    },
    controller: [
      '$http',
      '$scope',
      function($http, $scope) {
        $http.get('/api/cart').then(response => {
          $scope.user = response.data;
        });
      }
    ]
  };
});
