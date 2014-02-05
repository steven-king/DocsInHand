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
      when('/twitter', {
        templateUrl: 'partials/twitter.html',
        controller: 'TwitterCtrl'
      }).
      when('/facebook', {
        templateUrl: 'partials/facebook.html',
        controller: 'FacebookCtrl'
      }).
      when('/vimeo', {
        templateUrl: 'partials/vimeo.html',
        controller: 'VimeoCtrl'
      }).
      when('/check', {
        templateUrl: 'partials/check.html',
        controller: 'CheckCtrl'
      }).
      when('/filmSelect', {
        templateUrl: 'partials/filmSelect.html',
        controller: 'FilmSelectCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      when('/help', {
        templateUrl: 'partials/help.html',
        controller: 'HelpCtrl'
      }).
// Should consider setting film home to current URL so that it goes back to the most recent page - that or have help and about come up in modals
      otherwise({
        redirectTo: '/films'
      });
  }]);
