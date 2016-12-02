(function () {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath','$q'];
    function MenuService($http, ApiPath,$q) {
        var service = this;

        service.getCategories = function () {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
                return response.data;
            });
        };


        service.getMenuItems = function (category) {
            var config = {};
            if (category) {
                config.params = {'category': category};
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
                return response.data;
            });
        };

        service.getMenuItem = function (shortName) {
            var config = {};
            if (shortName) {
                console.log(shortName);
                config.params = {'short_name': shortName};
            }

            return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
                return response.data;
            }).catch(function(e){
                console.log("http error");
                return $q.reject();
            });
        };

    }


})();
