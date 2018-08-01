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

angular.module("app", ["ui.router"]);
angular
  .module("app")
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

let rickroll = `We're no strangers to love
  You know the rules and so do I
  A full commitment's what I'm thinking of
  You wouldn't get this from any other guy
  
  I just wanna tell you how I'm feeling
  Gotta make you understand

  Never gonna give you up
  Never gonna let you down
  Never gonna run around and desert you
  Never gonna make you cry
  Never gonna say goodbye
  Never gonna tell a lie and hurt you
  
  We've known each other for so long
  Your heart's been aching but you're too shy to say it
  Inside we both know what's been going on
  We know the game and we're gonna play it
  
  And if you ask me how I'm feeling
  Don't tell me you're too blind to see
  
  Never gonna give you up
  Never gonna let you down
  Never gonna run around and desert you
  Never gonna make you cry
  Never gonna say goodbye
  Never gonna tell a lie and hurt you
  Never gonna give you up
  Never gonna let you down
  Never gonna run around and desert you
  Never gonna make you cry
  Never gonna say goodbye
  Never gonna tell a lie and hurt you
  Never gonna give, never gonna give
  (Give you up)
  (Ooh) Never gonna give, never gonna give
  (Give you up)
  
  We've known each other for so long
  Your heart's been aching but you're too shy to say it
  Inside we both know what's been going on
  We know the game and we're gonna play it
  
  I just wanna tell you how I'm feeling
  Gotta make you understand
  
  Never gonna give you up
  Never gonna let you down
  Never gonna run around and desert you
  Never gonna make you cry
  Never gonna say goodbye
  Never gonna tell a lie and hurt you
  Never gonna give you up
  Never gonna let you down
  Never gonna run around and desert you
  Never gonna make you cry
  Never gonna say goodbye
  Never gonna tell a lie and hurt you
  Never gonna give you up
  Never gonna let you down
  Never gonna run around and desert you
  Never gonna make you cry
  `.split(" ");

if (typeof console._commandLineAPI !== "undefined") {
  console.API = console._commandLineAPI; //chrome
} else if (typeof console._inspectorCommandLineAPI !== "undefined") {
  console.API = console._inspectorCommandLineAPI; //Safari
} else if (typeof console.clear !== "undefined") {
  console.API = console;
}

for (let i = 0; i < rickroll.length; i++) {
  setTimeout(() => {
    console.API.clear();
    console.log(rickroll.slice(0, i).join(" "));
  }, i * 200);
}
