import $ from "jquery";

export default [
  "$scope",
  "homeService",
  function homeCtrl($scope, homeService) {
    angular.element(document).ready(() => {
      var x;
      $(window).on("scroll", function() {
        var x = $(window).scrollTop();
        function retY() {
          var y = $(window).scrollTop() / $(window).height();
          if (y < 0.85) {
            return y;
          } else {
            return 0.85;
          }
        }
        $(".Home-page-container").css(
          "background-size",
          125 + parseInt(x / 6) + "vh"
        );
        $(".home-page-content-container").css(
          "background-color",
          "rgba(0,0,0, " + retY() + ")"
        );
      });
    });
    homeService.getBlogs().then(response => ($scope.blogs = response));
  }
];
