angular.module("app")
.controller("adminCtrl", function($scope, adminService){
  $scope.submitNewProduct = () => {
    if ($scope.title === undefined || $scope.price === undefined){
      return alert("Please ensure the title and price fields are complete")
    }
    const product = {
      title:  $scope.title
    , description: $scope.description
    , price: $scope.price
    , category: $scope.category
    , color: $scope.color
    , imgUrl: $scope.imgUrl
    , url: $scope.url
    , size: $scope.size
    };
    adminService.submitNewProduct(product).then(function(response){
        console.log(response);
    })
  }
  $scope.editProduct = () => {
      const product = {
        objId: $scope.objId
      };
      if ($scope.title){ product.title = $scope.title};
      if ($scope.description){ product.description = $scope.description};
      if ($scope.price){ product.price = $scope.price};
      if ($scope.category){ product.category = $scope.category};
      if ($scope.color){ product.color = $scope.color};
      if ($scope.imgUrl){ product.imgUrl = $scope.imgUrl};
      if ($scope.url){ product.url = $scope.url};
      if ($scope.size){ product.size = $scope.size};

    adminService.editProduct(product).then(response => {
      console.log(response);
      if (response.status == 200){$scope.title = ""
      $scope.description = ""
      $scope.price = ""
      $scope.category = ""
      $scope.color = ""
      $scope.imgUrl = ""
      $scope.url = ""
      $scope.size = ""
      $scope.objId = ""
    }
    })
  };
  $scope.deleteProduct = (objId) => {
    adminService.deleteProduct(objId).then((response)=>{
      console.log(response);
      if (response.status == 200){
        $scope.objId = ""
      }
    })
  };
  $scope.addBlogPost = (bdy, ttl, img) => {
    const blogObj = {
      title: ttl
      , body: bdy
      , imgUrl: img
    }
    adminService.addBlogPost(blogObj).then((response)=>{
      console.log(response);
      if (response.status == 200){
        $scope.body = "";
        $scope.title = "";
        $scope.imgUrl = "";
      }
    })
  }
  $scope.editBlogPost = (id, bdy, ttl) => {
    blogObj = {
      title: ttl
      , body: bdy
      , objId: id
      }
      adminService.editBlogPost(blogObj).then((response) => {
        console.log(response);
        if (response.status == 200){
          $scope.body = "";
          $scope.title = "";
          $scope.objId = "";
        }
      })
    };
    $scope.deleteBlog = (objId) =>{
      adminService.deleteBlog(objId).then((response) => {
        console.log(response);
        $scope.objId = "";
      })
    }

})
