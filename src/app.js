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
  .state("cart", {
    url: "/cart"
    , controller: "cartCtrl"
    , templateUrl: "../src/components/cart/cartTmpl.html"
  })
})
.directive("navBar", function() {
  return {
    templateUrl: "../src/components/navbar/navbar.html"
    , scope: {
      user: "="
    }
    , controller: function($http, $scope){
      const getCart = () => {
        return $http.get("/api/cart").then((response)=>{
          response.data.forEach((cv, i , arr)=>{
            $scope.user = cv
          })
          // console.log($scope.user);
        })
      }
      getCart();
    }
  }
})
