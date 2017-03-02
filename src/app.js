// import $ from "jquery";
// import materialize from "materialize-css";
import angular from "angular";
import uiRouter from "angular-ui-router";

// import jquery from "../jquery.js"

import adminCtrl from "./components/admin/adminCtrl.js";
import cartCtrl from "./components/cart/cartCtrl.js";
import homeCtrl from "./components/home/homeCtrl.js";
import showsCtrl from "./components/shows/homeCtrl.js";
import productCtrl from "./components/store/productCtrl.js";
import storeCtrl from "./components/store/storeCtrl.js";

import adminService from "./components/admin/adminService.js";
import cartService from "./components/cart/cartService.js";
import homeService from "./components/home/homeService.js";
import showsService from "./components/shows/homeService.js";
import storeService from "./components/store/storeService.js";

import adminTmpl from "./components/admin/adminTmpl.html";
import aboutTmpl from "./components/about/aboutTmpl.html";
import cartTmpl from "./components/cart/cartTmpl.html";
import homeTmpl from "./components/home/homeTmpl.html";
import mediaTmpl from "./components/media/mediaTmpl.html";
import navbarTmpl from "./components/navbar/navbar.html";
import showsTmpl from "./components/shows/showsTmpl.html";
import storeTmpl from "./components/store/storeTmpl.html";
import productTmpl from "./components/store/productTmpl.html";

// import myStyles from "../public/styleSheet/myStyles.css"


angular.module("app", ["ui.router"])
.service("adminService", adminService)
.service("cartService", cartService)
.service("homeService", homeService)
.service("showsService", showsService)
.service("storeService", storeService)
.controller("adminCtrl", adminCtrl)
.controller("cartCtrl", cartCtrl)
.controller("homeCtrl", homeCtrl)
.controller("showsCtrl", showsCtrl)
.controller("productCtrl", productCtrl)
.controller("storeCtrl", storeCtrl)
.config(function($stateProvider, $urlRouterProvider, $compileProvider){
  $compileProvider.debugInfoEnabled(false);
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
    url: "/"
    , template: homeTmpl
    , controller: homeCtrl
  })
  .state("store", {
    url: "/store"
    , template: storeTmpl
    , controller: storeCtrl
  })
  .state('product', {
  url: "/product/:id"
  , template: productTmpl
  , controller: productCtrl

})
  .state("shows", {
    url: "/shows"
    , template: showsTmpl
    , controller: showsCtrl
  })
  .state("about", {
    url: "/about"
    , template: aboutTmpl
  })
  .state("media", {
    url: "/media"
    , template: mediaTmpl
  })
  .state("admin", {
		//url: "/map/:lat/:lng"
    url: "/admin/:adminId/:pass"
    , controller: adminCtrl
    , template: adminTmpl
  })
  .state("cart", {
    url: "/cart"
    , controller: cartCtrl
    , template: cartTmpl
  })
})
.directive("navBar", function() {
  return {
    template: navbarTmpl
    , scope: {
      user: "="
    }
    , controller: function($http, $scope){
      const getCart = () => {
        return $http.get("/api/cart").then((response)=>{
          response.data.forEach((cv, i , arr)=>{
            $scope.user = cv
          })
        })
      }
      getCart();
    }
  }
})
