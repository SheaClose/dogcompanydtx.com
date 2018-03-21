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
        $(".about-page-container").css(
          "background-size",
          70 + parseInt(x / 6) + "vh"
        );
        $(".about-page-content-container").css(
          "background-color",
          "rgba(0,0,0, " + retY() + ")"
        );
      });
      var items = document.querySelectorAll(".timeline li");
      function isElementInViewport(el) {
        var { top, left, bottom, right } = el.getBoundingClientRect();
        return (
          top >= 0 &&
          left >= 0 &&
          bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      function callbackFunc() {
        items.forEach(cur => {
          if (isElementInViewport(cur)) {
            cur.classList.add("in-view");
          } else {
            cur.classList.remove("in-view");
          }
        });
      }
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
    });
  }
];
