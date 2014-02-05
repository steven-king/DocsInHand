'use strict';

/* Services */

var docsHandServices = angular.module('docsHandServices', ['ngResource']);

docsHandServices.factory('Film', ['$resource',
  function($resource){
    //make sure film id is getting right thing
    return $resource('films/:filmId.json', {}, {
      query: {method:'GET', params:{filmId:'films'}, isArray:true}
    });
  }]);
