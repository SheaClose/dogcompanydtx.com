angular.module("app")
.controller("showsCtrl", function ($scope, $window, showsService){
  const getShows = () => {
    showsService.getShows().then((response)=> {
      let showlist = response.data.slice(1, 49)
      $scope.shows = showlist.reverse();
    })
  };
  $scope.goToThere = (url) => {
    $window.location.href = url
  };
  getShows()
});
