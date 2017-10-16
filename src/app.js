var app = angular
  .module('app', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$compileProvider',
    function($stateProvider, $urlRouterProvider, $compileProvider) {
      $compileProvider.debugInfoEnabled(false);
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: './views/homeTmpl.html',
          controller: 'homeCtrl'
        })
        .state('store', {
          url: '/store',
          templateUrl: './views/storeTmpl.html',
          controller: 'storeCtrl'
        })
        .state('product', {
          url: '/product/:id',
          templateUrl: './views/productTmpl.html',
          controller: 'productCtrl'
        })
        .state('shows', {
          url: '/shows',
          templateUrl: './views/showsTmpl.html',
          controller: 'showsCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: './views/aboutTmpl.html',
          controller: 'aboutCtrl'
        })
        .state('media', {
          url: '/media',
          templateUrl: './views/mediaTmpl.html',
          controller: 'mediaCtrl'
        })
        .state('admin', {
          url: '/admin/:adminId/:pass',
          controller: 'adminCtrl',
          templateUrl: './views/adminTmpl.html'
        })
        .state('cart', {
          url: '/cart',
          controller: 'cartCtrl',
          templateUrl: './views/cartTmpl.html'
        });
    }
  ])
  .directive('navBar', function() {
    return {
      templateUrl: './views/navbar.html',
      scope: {
        user: '='
      },
      controller: [
        '$http',
        '$scope',
        function($http, $scope) {
          $http.get('/api/cart').then(response => {
            $scope.user = response.data.pop();
          });
        }
      ]
    };
  });
