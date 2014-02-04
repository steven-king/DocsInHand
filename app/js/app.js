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
      when('/films', {
        templateUrl: 'partials/film-list.html',
        controller: 'FilmListCtrl'
      }).
      when('/films/:film', {
        templateUrl: 'partials/film-detail.html',
        controller: 'FilmDetailCtrl'
      }).
      otherwise({
        redirectTo: '/films'
      });
  }]);
