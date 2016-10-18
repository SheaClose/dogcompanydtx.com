angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider, $compileProvider){
  $compileProvider.debugInfoEnabled(false);
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
    url: "/"
    , templateUrl: "../src/components/home/homeTmpl.html"
    , controller: "homeCtrl"
  })
  .state("store", {
    url: "/store"
    , templateUrl: "../src/components/store/storeTmpl.html"
    , controller: "storeCtrl"
  })
  .state('product', {
  url: "/product"
  , templateUrl: "../src/components/store/productTmpl.html"
  , controller: "productCtrl"
  , params: {
    'id': '',
  }
})
  .state("shows", {
    url: "/shows"
    , templateUrl: "../src/components/shows/showsTmpl.html"
    , controller: "showsCtrl"
  })
  .state("about", {
    url: "/about"
    , templateUrl: "../src/components/about/aboutTmpl.html"
  })
  .state("media", {
    url: "/media"
    , templateUrl: "../src/components/media/mediaTmpl.html"
  })
  .state("admin", {
    url: "/admin"
    , controller: "adminCtrl"
    , templateUrl: "../src/components/admin/adminTmpl.html"
  })
})
.directive("navBar", function() {
  return {
    templateUrl: "../src/components/navbar/navbar.html"
  }
})
