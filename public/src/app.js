angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
    url: "/"
    , templateUrl: "./views/homeTmpl.html"
  })
  .state("store", {
    url: "/store"
    , templateUrl: "./views/storeTmpl.html"
  })
  .state("shows", {
    url: "/shows"
    , templateUrl: "./views/showsTmpl.html"
  })
})
