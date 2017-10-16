app.service('showsService', [
  '$http',
  function showsService($http) {
    this.getShows = () => {
      return $http.get('/api/shows');
    };
  }
]); // export default showsService;
