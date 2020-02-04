angular.module('app').directive('apparelDir', function apparelDir() {
  return {
    templateUrl: './components/directives/apparelDir/apparelTmpl.html',
    scope: {
      add: '&',
      product: '=',
      sizes: '='
    }
  };
});
