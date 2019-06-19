import homeModule from "./home/homeModule";
import mediaModule from "./media/mediaModule";
import storeModule from "./store/storeModule";
function config(urlRouterProvider, stateProvider, locationProvider) {
  stateProvider
    .state("home", homeModule)
    .state("store", storeModule)
    .state("media", mediaModule);
  locationProvider.html5Mode(true);
  urlRouterProvider.otherwise("/");
}

export default [
  "$urlRouterProvider",
  "$stateProvider",
  "$locationProvider",
  config
];
