function home(scope) {
  Object.assign(scope, {
    test: "Home is working"
  });
}

export default ["$scope", home];
