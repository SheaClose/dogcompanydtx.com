import $ from "jquery";

export default [
  "$scope",
  "$state",
  "storeService",
  function($scope, $state, storeService) {
    $scope.nonUSAddress = false;

    angular.element(document).ready(() => {
      var win = $(window);
      var x;
      win.on("scroll", function() {
        var x = win.scrollTop();
        $(".Store-page-container").css(
          "background-size",
          125 + parseInt(x / 6) + "vh"
        );
        $(".Store-page-content-container").css(
          "background-color",
          "rgba(0,0,0, " + retY(win) + ")"
        );
      });
    });

    storeService.getAllProducts().then(response => {
      let products = response.data
        .reduce(
          (acc, cur) => (!acc.includes(cur.title) ? [...acc, cur.title] : acc),
          []
        )
        .map(c => {
          var avail = response.data.find(
            product => c == product.title && product.available
          );
          return avail ? avail : null;
        })
        .filter(Boolean);

      let apparel = products.filter(c => c.category == "apparel");
      let merch = products.filter(c => c.category == "merch");
      let bundle = products.filter(c => c.category == "bundle");
      $scope.products = [...apparel, ...merch, ...bundle];
    });

    $scope.goTo = id => $state.go("product", { id: id });

    if (window.currentUserOrderInformation) {
      if (window.currentUserOrderInformation.user.nonUSAddress) {
        $scope.nonUSAddress = true;
      }
      $scope.currentUserOrderInformation = window.currentUserOrderInformation;
      $("#modal1").openModal();
      window.currentUserOrderInformation = null;
    }
  }
];

function retY(win) {
  var y = win.scrollTop() / win.height();
  if (y < 0.85) {
    return y;
  } else {
    return 0.85;
  }
}
