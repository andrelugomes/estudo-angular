'use strict';

/**
 * @ngdoc function
 * @name estudoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the estudoAngularApp
 */
angular.module('estudoAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
