function homeCtrl ($scope, homeService){
  const getBlogs = () => {
    homeService.getBlogs().then(function(response){
      $scope.blogs = response
      })
  }
  // $scope.loadImage = (image) => {
  //   return require(`../../../public/Assets/photos/${image}`);
  // };
  getBlogs()
}
export default homeCtrl;
