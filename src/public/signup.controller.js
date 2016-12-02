(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService','$scope','UserService'];
    function SignUpController(MenuService,$scope,UserService) {
        var signUp = this;
        signUp.success = false;
        signUp.username = "";
        signUp.favorite = "";
        signUp.error = false;
        signUp.submit = function(){
            try{
                signUp.item = MenuService.getMenuItem(signUp.favorite);
                signUp.item.then(function(response){
                    console.log(response);
                    signUp.success = true;
                    signUp.error = false;
                    UserService.setUser(signUp.username,response);

                }).catch(function(e){
                    console.log("caught");
                    signUp.error = true;
                    signUp.success = false;
                });
            }
            catch(err){
                console.log("item looking errpr   " + err);
                signUp.error = true;
            }
        }
    }


})();
