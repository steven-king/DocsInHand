'use strict';

/* Controllers */

var docsHandControllers = angular.module('docsHandControllers', []);

docsHandControllers.controller('FilmListCtrl', ['$scope', 'Film',
  function($scope, Film) {
    $scope.films = Film.query();
    //$scope.orderProp = 'age';
  }]);

docsHandControllers.controller('FilmDetailCtrl', ['$scope', '$routeParams', 'Film',
  function($scope, $routeParams, Film) {
    $scope.films = Film.get({filmId: $routeParams.filmId}, function(film) {
      $scope.mainImageUrl = film.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
