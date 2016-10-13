angular.module("app")
.service("showsService", function($http){
  this.getShows = () => {
    return $http.get("/api/shows")
  }
})
