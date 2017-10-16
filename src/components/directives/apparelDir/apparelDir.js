app.directive('apparelDir', function apparelDir() {
  return {
    templateUrl: './views/apparelTmpl.html',
    scope: {
      add: '&',
      product: '=',
      sizes: '='
    }
  };
});
