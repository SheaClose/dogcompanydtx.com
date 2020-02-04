angular.module('app').service('showsService', [
  '$http',
  function showsService($http) {
    this.getShows = () => $http.get('/api/shows');
  }
]);
