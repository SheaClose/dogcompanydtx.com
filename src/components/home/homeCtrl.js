angular.module("app")
.controller("homeCtrl", function($scope, homeService){
  function getBlogs() {
    homeService.getBlogs().then(function(response){
      $scope.blogs = response
      })
  }





  getBlogs()
})
