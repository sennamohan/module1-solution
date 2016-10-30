(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope) {
       $scope.checkLunch = function (item) {
           var checkItems = item;
           console.log(checkItems);
           if (checkItems === undefined || checkItems === '') {
               $scope.message = 'Please enter data first';
           } else {
               var items = splitString(checkItems, ',');
               if (items <= 3) {
                   $scope.message = 'Enjoy!';
               } else if (items > 3) {
                   $scope.message = 'Too Much!';
               }

           }

       };

       function splitString(strToSplit, seperator) {
           var arrayOfStrings = strToSplit.split(seperator);
           return arrayOfStrings.length;
       }
   }

})();
