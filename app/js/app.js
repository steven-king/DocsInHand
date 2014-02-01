'use strict';

/* App Module */

var docsHandApp = angular.module('docsHandApp', [
  'ngRoute',
  'docsHandAnimations',

  'docsHandControllers',
  'docsHandServices'
  //'docsHandFilters',
  
]);

docsHandApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
