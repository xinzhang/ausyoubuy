angular.module('start.controllers', [])

.controller('CategoryCtrl', function($scope, Product) {
    $scope.products = Product.all();
})
