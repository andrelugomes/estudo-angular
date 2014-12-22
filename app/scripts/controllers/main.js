'use strict';

/**
 * @ngdoc function
 * @name estudoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the estudoAngularApp
 */
angular.module('estudoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
