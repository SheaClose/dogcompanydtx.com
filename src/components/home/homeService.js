app.service("homeService", [
  "$http",
  function homeService($http) {
    this.getBlogs = () =>
      $http
        .get("/api/blogs")
        .then(res => res.data.sort((a, b) => a.date < b.date));
  }
]);
