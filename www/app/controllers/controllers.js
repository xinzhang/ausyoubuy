/**
 * @author: Duy Thanh DAO
 * @email: success.ddt@gmail.com
 */
angular.module('starter.controllers', [])

// Category controller
.controller('CategoryCtrl', function($scope, Product) {
  $scope.products = Product.all();
})

// Product detail controller
.controller('DetailCtrl', function($scope, Product) {
  $scope.product = Product.get(1);

  // generate array from number
  $scope.range = function(n) {
    return new Array(n);
  };
})

// Cart controller
.controller('CartCtrl', function($scope) {})

// Checkout Controller, process checkout steps here
.controller('CheckoutCtrl', function($scope) {})

// Authentication controller
// Put your login, register functions here
.controller('AuthCtrl', function($scope, $ionicHistory) {
    // hide back butotn in next view
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
});
