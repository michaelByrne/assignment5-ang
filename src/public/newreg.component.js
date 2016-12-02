(function () {
    "use strict";

    angular.module('public')
        .component('newReg', {
            templateUrl: 'src/public/new-reg.html',
            bindings: {
                username: '<',
                item: '<'
            },
            controller: NewRegController
        });



    function NewRegController() {
        var $ctrl = this;
    }

})();