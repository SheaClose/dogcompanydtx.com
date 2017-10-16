angular.module('app').controller('aboutCtrl', function($scope) {
  angular.element(document).ready(() => {
    var x;
    $(window).on('scroll', function() {
      var x = $(window).scrollTop();
      function retY() {
        var y = $(window).scrollTop() / $(window).height();
        if (y < 0.85) {
          return y;
        } else {
          return 0.85;
        }
      }
      $('.about-page-container').css(
        'background-size',
        70 + parseInt(x / 3) + 'vh'
      );
      $('.about-page-content-container').css(
        'background-color',
        'rgba(0,0,0, ' + retY() + ')'
      );
    });
    (function() {
      var items = document.querySelectorAll('.timeline li');
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add('in-view');
          } else {
            items[i].classList.remove('in-view');
          }
        }
      }
      window.addEventListener('load', callbackFunc);
      window.addEventListener('resize', callbackFunc);
      window.addEventListener('scroll', callbackFunc);
    })();
  });
});
