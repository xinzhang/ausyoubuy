
angular.module('starter.controllers', [])

// Category controller

// Product detail controller
.controller('DetailCtrl', function($scope, Product) {
    $scope.product = Product.get(1);

    // generate array from number
    $scope.range = function(n) {
        return new Array(n);
    };
})