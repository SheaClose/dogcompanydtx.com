const configArr = [
  "$stateProvider",
  "$urlRouterProvider",
  "$compileProvider",
  function($stateProvider, $urlRouterProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./views/homeTmpl.html",
        controller: "homeCtrl"
      })
      .state("store", {
        url: "/store",
        templateUrl: "./views/storeTmpl.html",
        controller: "storeCtrl"
      })
      .state("product", {
        url: "/product/:id",
        templateUrl: "./views/productTmpl.html",
        controller: "productCtrl"
      })
      .state("shows", {
        url: "/shows",
        templateUrl: "./views/showsTmpl.html",
        controller: "showsCtrl"
      })
      .state("about", {
        url: "/about",
        templateUrl: "./views/aboutTmpl.html",
        controller: "aboutCtrl"
      })
      .state("media", {
        url: "/media",
        templateUrl: "./views/mediaTmpl.html",
        controller: "mediaCtrl"
      })
      .state("admin", {
        url: "/admin/:adminId/:pass",
        controller: "adminCtrl",
        templateUrl: "./views/adminTmpl.html",
        resolve: {
          admin: [
            "$stateParams",
            "adminService",
            "$state",
            function($stateParams, adminService, $state) {
              if (!$stateParams.adminId || !$stateParams.pass) {
                $state.go("/");
              } else {
                return adminService
                  .checkPass($stateParams.adminId, $stateParams.pass)
                  .then(res => res.data !== "false");
              }
            }
          ]
        }
      })
      .state("cart", {
        url: "/cart",
        controller: "cartCtrl",
        templateUrl: "./views/cartTmpl.html"
      });
  }
];

export default configArr;
