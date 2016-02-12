/**
 * Created by Radiobeat33 on 2/11/16.
 */
(function(){

    'use strict';

    angular.module('app')
           .controller('sampleViewController', sampleViewController);

    sampleViewController.$inject = ['$scope'];

    function sampleViewController($scope){
        $scope.testScope = 'hello';
        $scope.inputInfo = '';
        $scope.currentNum = '';
        $scope.currentResult = '';

        $scope.multiplier5 = function(num){
            if(angular.isNumber(num)){
                $scope.currentResult = num * 5;
            }
        };

    }

})();