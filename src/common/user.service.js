(function () {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);


   UserService.$inject = [];
    function UserService() {
        var service = this;
        service.user = null;
        
        function User(username,item){
            this.username = username;
            this.item = item;
        }
        
        service.currUser = new User();

        service.setUser = function (userName,item) {
            service.currUser.username = userName;
            service.currUser.item = item;
            console.log(service.currUser.item);
        };
        service.getUser = function(){
            console.log(service.currUser);
            return service.currUser;
        }
    }


})();
