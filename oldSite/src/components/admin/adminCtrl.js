import $ from "jquery";

export default [
  "$scope",
  "adminService",
  "admin",
  function($scope, adminService, admin) {
    $scope.userIsAdmin = admin;
    angular.element(document).ready(() => {
      $(document).ready(function() {
        $(".collapsible").collapsible({ accordion: false });
      });
    });
    $scope.submitNewProduct = () => {
      !$scope.title || !$scope.price
        ? alert("Please ensure the title and price fields are complete")
        : null;
      const product = ({
        title,
        description,
        price,
        category,
        color,
        imgUrl,
        url,
        size
      } = $scope);
      adminService.submitNewProduct(product).then(() => {
        $scope.title = "";
        $scope.description = "";
        $scope.price = "";
        $scope.category = "";
        $scope.color = "";
        $scope.imgUrl = "";
        $scope.url = "";
        $scope.size = "";
      });
    };
    $scope.editProduct = () => {
      let {
        objId,
        title,
        description,
        price,
        category,
        color,
        imgUrl,
        url,
        size
      } = $scope;
      const product = { objId };
      title ? (product.title = title) : null;
      description ? (product.description = description) : null;
      price ? (product.price = price) : null;
      category ? (product.category = category) : null;
      color ? (product.color = color) : null;
      imgUrl ? (product.imgUrl = imgUrl) : null;
      url ? (product.url = url) : null;
      size ? (product.size = size) : null;

      adminService.editProduct(product).then(response => {
        if (response.status == 200) {
          $scope.title = "";
          $scope.description = "";
          $scope.price = "";
          $scope.category = "";
          $scope.color = "";
          $scope.imgUrl = "";
          $scope.url = "";
          $scope.size = "";
          $scope.objId = "";
        }
      });
    };
    $scope.deleteProduct = objId => {
      adminService.deleteProduct(objId).then(response => {
        if (response.status == 200) {
          $scope.objId = "";
        }
      });
    };
    $scope.addBlogPost = (body, title, imgUrl) => {
      const blogObj = { title, body, imgUrl };
      adminService.addBlogPost(blogObj).then(response => {
        if (response.status == 200) {
          $scope.body = "";
          $scope.title = "";
          $scope.imgUrl = "";
        }
      });
    };
    $scope.editBlogPost = (objId, body, title) => {
      blogObj = { title, body, objId };
      adminService.editBlogPost(blogObj).then(response => {
        if (response.status == 200) {
          $scope.body = "";
          $scope.title = "";
          $scope.objId = "";
        }
      });
    };
    $scope.deleteBlog = objId => {
      adminService.deleteBlog(objId).then(response => ($scope.objId = ""));
    };
  }
];
