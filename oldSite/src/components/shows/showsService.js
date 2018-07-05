export default [
  "$http",
  function showsService($http) {
    this.getShows = () => $http.get("/api/shows");
  }
];
