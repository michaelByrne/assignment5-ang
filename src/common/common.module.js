(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://tranquil-fjord-44697.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
