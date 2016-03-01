/**
 * Created by Radiobeat33 on 2/11/16.
 */
describe('sampleViewController', function(){

    var scope, controller;

    beforeEach(function(){
        module('app');
        inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            controller = $controller('sampleViewController', { $scope: scope });
        })
    });

    describe('initialization', function(){
        it('should read the testScope as hello',  function(){
            expect(scope.testScope).toEqual('hello');
        })
    });

    describe('multiplication test', function(){
        it('should return the correct product',  function(){
            scope.currentNum = 5;
            scope.multiplier5(scope.currentNum);
            expect(scope.currentResult).toEqual(25);
            expect(scope.currentResult).not.toBe(null);
        })
    });

    describe('multiplication test with incorrect value type', function(){
        it('should return nothing',  function(){
            scope.currentNum = 'A';
            scope.multiplier5(scope.currentNum);
            expect(scope.currentResult).toBeFalsy();
            expect(scope.currentResult).not.toBe(null);
        })
    });

    describe('multiplication test with no value', function(){
        it('should also return nothing',  function(){
            scope.currentNum = '';
            scope.multiplier5(scope.currentNum);
            expect(scope.currentResult).toBeFalsy();
            expect(scope.currentResult).not.toBe(null);
        })
    });

    describe('multiplication test with 0 as the number', function(){
        it('should return 0',  function(){
            scope.currentNum = 0;
            scope.multiplier5(scope.currentNum);
            expect(scope.currentResult).toEqual(0);
            expect(scope.currentResult).not.toBe(null);
        })
    });

});


