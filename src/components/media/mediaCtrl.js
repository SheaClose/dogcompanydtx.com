import $ from "jquery";

export default [
  "$scope",
  function($scope) {
    angular.element(document).ready(() => {
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
        $(".media-page-container").css(
          "background-size",
          80 + parseInt(x / 6) + "vw"
        );
        $(".media-page-content-container").css(
          "background-color",
          "rgba(0,0,0, " + retY() + ")"
        );
      });
    });
  }
];
