app.service('homeService', [
  '$http',
  function homeService($http) {
    this.getBlogs = () => {
      return $http.get('/api/blogs').then(function(response) {
        response.data.sort((a, b) => a.date < b.date);
        const blogs = [];
        response.data.forEach((cv, i, arr) => {
          blogs.push(arr[i]);
        });
        return blogs;
      });
    };
  }
]);
// aexport default homeService;
