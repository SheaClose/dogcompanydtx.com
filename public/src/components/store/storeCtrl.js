function storeCtrl($scope, $stateParams, $state, storeService) {
  $scope.nonUSAddress = false;
  const getAllProducts = () => {
    storeService.getAllProducts().then(response => {
      let products = response.data.filter(cv => cv.size === 'small');
      let apparel = products.filter(c => c.category == 'apparel');
      let merch = products.filter(c => c.category == 'merch');
      let bundle = products.filter(c => c.category == 'bundle');
      $scope.products = [...apparel, ...merch, ...bundle];
    });
  };
  $scope.goTo = id => {
    $state.go('product', { id: id });
  };
  getAllProducts();
  if (window.currentUserOrderInformation) {
    if (window.currentUserOrderInformation.user.nonUSAddress) {
      $scope.nonUSAddress = true;
    }
    $scope.currentUserOrderInformation = window.currentUserOrderInformation;
    $('#modal1').openModal();
    window.currentUserOrderInformation = null;
  }
}
export default storeCtrl;
