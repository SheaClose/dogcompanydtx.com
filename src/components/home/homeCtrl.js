function homeCtrl($scope, homeService) {
  const getBlogs = () => {
    homeService.getBlogs().then(function(response) {
      $scope.blogs = response;
    });
  };
  getBlogs();
}
export default homeCtrl;
