// import $ from "jquery";
// import materialize from "materialize-css";
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// import jquery from "../jquery.js"

import adminCtrl from './components/admin/adminCtrl.js';
import cartCtrl from './components/cart/cartCtrl.js';
import homeCtrl from './components/home/homeCtrl.js';
import showsCtrl from './components/shows/homeCtrl.js';
import productCtrl from './components/store/productCtrl.js';
import storeCtrl from './components/store/storeCtrl.js';
import apparelDir from './components/directives/apparelDir/apparelDir.js';
import bundleDir from './components/directives/bundleDir/bundleDir.js';
import merchDir from './components/directives/merchDir/merchDir.js';

import adminService from './components/admin/adminService.js';
import cartService from './components/cart/cartService.js';
import homeService from './components/home/homeService.js';
import showsService from './components/shows/homeService.js';
import storeService from './components/store/storeService.js';

import adminTmpl from './components/admin/adminTmpl.html';
import aboutTmpl from './components/about/aboutTmpl.html';
import cartTmpl from './components/cart/cartTmpl.html';
import homeTmpl from './components/home/homeTmpl.html';
import mediaTmpl from './components/media/mediaTmpl.html';
import navbarTmpl from './components/navbar/navbar.html';
import showsTmpl from './components/shows/showsTmpl.html';
import storeTmpl from './components/store/storeTmpl.html';
import productTmpl from './components/store/productTmpl.html';

// import myStyles from "../public/styleSheet/myStyles.css"

angular
  .module('app', ['ui.router'])
  .service('adminService', ['$http', adminService])
  .service('cartService', ['$http', cartService])
  .service('homeService', ['$http', homeService])
  .service('showsService', ['$http', showsService])
  .service('storeService', ['$http', storeService])
  .controller('adminCtrl', [
    '$scope',
    'adminService',
    '$state',
    '$location',
    adminCtrl
  ])
  .controller('cartCtrl', ['$scope', '$window', 'cartService', cartCtrl])
  .controller('homeCtrl', ['$scope', 'homeService', homeCtrl])
  .controller('showsCtrl', ['$scope', '$window', 'showsService', showsCtrl])
  .controller('productCtrl', ['$scope', '$state', 'storeService', productCtrl])
  .controller('storeCtrl', [
    '$scope',
    '$stateParams',
    '$state',
    'storeService',
    storeCtrl
  ])
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
          template: homeTmpl,
          controller: homeCtrl
        })
        .state('store', {
          url: '/store',
          template: storeTmpl,
          controller: storeCtrl
        })
        .state('product', {
          url: '/product/:id',
          template: productTmpl,
          controller: productCtrl
        })
        .state('shows', {
          url: '/shows',
          template: showsTmpl,
          controller: showsCtrl
        })
        .state('about', {
          url: '/about',
          template: aboutTmpl
        })
        .state('media', {
          url: '/media',
          template: mediaTmpl
        })
        .state('admin', {
          //url: "/map/:lat/:lng"
          url: '/admin/:adminId/:pass',
          controller: adminCtrl,
          template: adminTmpl
        })
        .state('cart', {
          url: '/cart',
          controller: cartCtrl,
          template: cartTmpl
        });
    }
  ])
  .directive('apparelDir', apparelDir)
  .directive('bundleDir', ['storeService', bundleDir])
  .directive('merchDir', merchDir)
  .directive('navBar', function() {
    return {
      template: navbarTmpl,
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
