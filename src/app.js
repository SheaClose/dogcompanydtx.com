angular.module('app', ['ui.router']).config([
  '$stateProvider',
  '$urlRouterProvider',
  '$compileProvider',
  function($stateProvider, $urlRouterProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './components/home/homeTmpl.html',
        controller: 'homeCtrl'
      })
      .state('store', {
        url: '/store',
        templateUrl: './components/store/storeTmpl.html',
        controller: 'storeCtrl'
      })
      .state('product', {
        url: '/product/:id',
        templateUrl: './components/store/productTmpl.html',
        controller: 'productCtrl'
      })
      .state('shows', {
        url: '/shows',
        templateUrl: './components/shows/showsTmpl.html',
        controller: 'showsCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: './components/about/aboutTmpl.html',
        controller: 'aboutCtrl'
      })
      .state('media', {
        url: '/media',
        templateUrl: './components/media/mediaTmpl.html',
        controller: 'mediaCtrl'
      })
      .state('cart', {
        url: '/cart',
        controller: 'cartCtrl',
        templateUrl: './components/cart/cartTmpl.html'
      });
  }
]);
