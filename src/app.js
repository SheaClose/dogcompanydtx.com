angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
    url: "/"
    , templateUrl: "../src/components/home/homeTmpl.html"
  })
  .state("store", {
    url: "/store"
    , templateUrl: "../src/components/store/storeTmpl.html"
  })
  .state("shows", {
    url: "/shows"
    , templateUrl: "../src/components/shows/showsTmpl.html"
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
