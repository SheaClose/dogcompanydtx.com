app.directive('merchDir', function merchDir() {
  return {
    templateUrl: './views/merchTmpl.html',
    scope: {
      add: '&',
      product: '=',
      sizes: '='
    }
  };
});
