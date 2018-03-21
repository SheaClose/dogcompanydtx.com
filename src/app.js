import angular from "angular";
import angularUiRouter from "angular-ui-router";
import Material from "materialize-css";

import config from "./config";

import Navbar from "./components/Navbar/Navbar";
import apparelDir from "./components/directives/apparelDir/apparelDir";
import bundleDir from "./components/directives/bundleDir/bundleDir";
import merchDir from "./components/directives/merchDir/merchDir";

import aboutCtrl from "./components/about/aboutCtrl";
import adminCtrl from "./components/admin/adminCtrl";
import cartCtrl from "./components/cart/cartCtrl";
import homeCtrl from "./components/home/homeCtrl";
import mediaCtrl from "./components/media/mediaCtrl";
import showsCtrl from "./components/shows/showsCtrl";
import productCtrl from "./components/store/productCtrl";
import storeCtrl from "./components/store/storeCtrl";

import cartService from "./components/cart/cartService";
import adminService from "./components/admin/adminService";
import homeService from "./components/home/homeService";
import showsService from "./components/shows/showsService";
import storeService from "./components/store/storeService";

angular
  .module("app", ["ui.router"])
  .config(config)
  .directive("navBar", Navbar)
  .directive("apparelDir", apparelDir)
  .directive("bundleDir", bundleDir)
  .directive("merchDir", merchDir)
  .controller("aboutCtrl", aboutCtrl)
  .controller("adminCtrl", adminCtrl)
  .controller("cartCtrl", cartCtrl)
  .controller("homeCtrl", homeCtrl)
  .controller("mediaCtrl", mediaCtrl)
  .controller("showsCtrl", showsCtrl)
  .controller("productCtrl", productCtrl)
  .controller("storeCtrl", storeCtrl)
  .service("adminService", adminService)
  .service("cartService", cartService)
  .service("homeService", homeService)
  .service("showsService", showsService)
  .service("storeService", storeService);
