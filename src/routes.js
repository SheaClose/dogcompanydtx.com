import homeModule from "./views/home/homeModule";
import mediaModule from "./views/media/mediaModule";
import storeModule from "./views/store/storeModule";
import showsModule from "./views/shows/showsModule";

function config(urlRouterProvider, stateProvider, locationProvider) {
  stateProvider
    .state("home", homeModule)
    .state("store", storeModule)
    .state("media", mediaModule)
    .state("shows", showsModule);
  locationProvider.html5Mode(true);
  urlRouterProvider.otherwise("/");
}

export default [
  "$urlRouterProvider",
  "$stateProvider",
  "$locationProvider",
  config
];
