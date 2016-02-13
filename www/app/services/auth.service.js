(function () {
    'use restrict';

    angular.module('app').factory('AuthService', AuthenticationService);
 
    AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService'];

    function AuthenticationService($http, $cookieStore, $rootScope, $timeout, UserService) {
        var service = {};
        var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");

        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;
 
        return service;
        
        function Register(_useremail, _pasword) {
            ref.createUser({
                email: _useremail,
                password: _password
            }, function (error, userData) {
                if (error) {
                    switch (error.code) {
                        case "EMAIL_TAKEN":
                            console.log("The new user account cannot be created because the email is already in use.");
                            break;
                        case "INVALID_EMAIL":
                            console.log("The specified email is not a valid email.");
                            break;
                        default:
                            console.log("Error creating user:", error);
                    }
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });
        }

        function Login(_useremailname, _password) {
             
            ref.authWithPassword({
                "email": _useremail,
                "password": _password
            }, function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });            
        }

    }
 

})();