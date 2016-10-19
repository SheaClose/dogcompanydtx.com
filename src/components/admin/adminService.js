angular.module("app")
.service("adminService", function($http){
  this.submitNewProduct = (productObj) => {
  return $http.post("/api/products", productObj)
  };
  this.editProduct = productObj => {
    return $http.put(`/api/products/${productObj.objId}`, productObj)
  };
  this.deleteProduct = objId => {
    return $http.delete(`/api/products/${objId}`)
  }
  this.addBlogPost = (blogObj) => {
    return $http.post("/api/blogs", blogObj)
  };
  this.editBlogPost = (blogObj) => {
    return $http.put(`/api/blogs/${blogObj.objId}`, blogObj)
  };
  this.deleteBlog = (objId) => {
    return $http.delete(`/api/blogs/${objId}`)
  }
})
