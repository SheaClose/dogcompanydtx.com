function storeCtrl ($scope, $stateParams, $state, storeService){
  const getAllProducts = () => {
    storeService.getAllProducts().then((response) => {
      let product = response.data;
      $scope.products = [];
      product.forEach((cv, i, a)=>{
        if (cv.size === "small") {
          $scope.products.push(cv)
        }
      })
    })
  };
  $scope.goTo = (id) => {
    $state.go('product', {'id': id});
  }
  getAllProducts();
  if (window.currentUserOrderInformation) {
    $scope.currentUserOrderInformation = window.currentUserOrderInformation;
    $('#modal1').openModal();
    window.currentUserOrderInformation = null;
  }
}
export default storeCtrl;
