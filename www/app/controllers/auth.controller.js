/**
 * @author: Duy Thanh DAO
 * @email: success.ddt@gmail.com
 */
angular.module('starter.controllers', [])

// Authentication controller
// Put your login, register functions here
.controller('AuthCtrl', '', function ($scope, $ionicHistory, authService) {
    // hide back butotn in next view
    $ionicHistory.nextViewOptions({
        disableBack: true
    });

    this.vm = this;
    this.vm.email = "";
    this.vm.yourname = "";
    this.vm.password = "";
    
    var register = function(){
        


    };
});
