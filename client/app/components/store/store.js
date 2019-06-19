function store($scope) {
  Object.assign($scope, {
    test: "store is working"
  });
}

export default ["$scope", store];
