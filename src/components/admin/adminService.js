export default [
  "$http",
  function($http) {
    this.submitNewProduct = productObj =>
      $http.post("/api/products", productObj);

    this.editProduct = productObj =>
      $http.put(`/api/products/${productObj.objId}`, productObj);

    this.deleteProduct = objId => $http.delete(`/api/products/${objId}`);

    this.addBlogPost = blogObj => $http.post("/api/blogs", blogObj);

    this.editBlogPost = blogObj =>
      $http.put(`/api/blogs/${blogObj.objId}`, blogObj);

    this.deleteBlog = objId => $http.delete(`/api/blogs/${objId}`);

    this.checkPass = (user, pass) =>
      $http.get(`/api/admin/?user=${user}&pass=${pass}`);
  }
];
