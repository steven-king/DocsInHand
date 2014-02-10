'use strict';

/* Controllers */

var docsHandControllers = angular.module('docsHandControllers', []);

docsHandControllers.controller('FilmListCtrl', ['$scope', 'Film',
  function($scope, Film) {
    $scope.films = Film.query();
    //$scope.orderProp = 'age';
    //Use $watch based on a DOM event $watchCollection(obj, listener)
    
    $scope.currentPage = 0;
    //Need to allow Cordova to set the current page 
    $scope.pageSize = 1;
  }]);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
docsHandControllers.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

docsHandControllers.controller('FilmDetailCtrl', ['$scope', '$routeParams', 'Film',
  function($scope, $routeParams, Film) {
    $scope.films = Film.get({filmId: $routeParams.filmId}, function(film) {
      $scope.mainImageUrl = film.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

docsHandControllers.controller('TwitterCtrl', function($scope) {
		$scope.message = 'Look! I am showing some twitter data.';
	});
docsHandControllers.controller('FacebookCtrl', function($scope) {
		$scope.message = 'Look! I am showing some facebook data.';
	});
docsHandControllers.controller('VimeoCtrl', function($scope) {
		$scope.message = 'Look! I am showing some twitter data.';
	});
docsHandControllers.controller('CheckCtrl', function($scope) {
		$scope.message = 'Look! I am showing some fantastically dynamic data for the check page.';
	});
docsHandControllers.controller('FilmSelectCtrl', function($scope) {
		$scope.message = 'Film select page.';
	});
docsHandControllers.controller('AboutCtrl', function($scope) {
		$scope.message = 'About.';
	});
docsHandControllers.controller('HelpCtrl', function($scope) {
		$scope.message = 'Help page.';
	});