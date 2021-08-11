'use strict';

angular.module('wingsUiAppModule').config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {  

    $routeProvider.when('/ajs', {
      template:"<test></test>"
    })
    .otherwise({template : ''});
     
  }]);