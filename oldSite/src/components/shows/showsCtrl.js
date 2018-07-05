import $ from "jquery";

export default [
  "$scope",
  "$window",
  "showsService",
  function showsCtrl($scope, $window, showsService) {
    angular.element(document).ready(() => {
      var x;
      $(window).on("scroll", function() {
        var x = $(window).scrollTop();
        function retY() {
          var y = $(window).scrollTop() / $(window).height() * 1.25;
          if (y < 0.85) {
            return y;
          } else {
            return 0.85;
          }
        }
        $(".shows-page-container").css(
          "background-size",
          125 + parseInt(x / 6) + "vh"
        );
        $(".shows-page-content-container").css(
          "background-color",
          "rgba(0,0,0, " + retY() + ")"
        );
      });
    });
    showsService
      .getShows()
      .then(res => ($scope.shows = res.data.slice(1, 49).reverse()));
    $scope.goToThere = url => ($window.location.href = url);
  }
];
