angular.module('start.controllers', [])

// Home controller
.controller('HomeCtrl', function($scope, Product, $ionicNavBarDelegate) {
  // slider images
  $scope.slides = [
    {
      url: 'img/slide_1.jpg'
    },
    {
      url: 'img/slide_2.jpg'
    },
    {
      url: 'img/slide_3.jpg'
    }
  ]
  // list products
  $scope.products = Product.all();
})