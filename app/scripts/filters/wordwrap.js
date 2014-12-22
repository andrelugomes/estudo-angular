'use strict';

/**
 * @ngdoc filter
 * @name estudoAngularApp.filter:wordwrap
 * @function
 * @description
 * # wordwrap
 * Filter in the estudoAngularApp.
 */
angular.module('estudoAngularApp')
  .filter('wordwrap', function () {
   return function (value, maxLetter) {
      if(value === null || maxLetter === null){
           return null;
      }


      var valueArray = value.split(' ');
      var valueTmp = '';

      for(var i = 0; i < valueArray.length; i++){
        if(valueArray[i].length >= maxLetter){
            valueTmp += valueArray[i].substring(0, maxLetter) + '... ';
        }else{
            valueTmp += valueArray[i] + ' ';
        }
      }
      return valueTmp;
  };
});
