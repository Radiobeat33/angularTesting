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
    })

});
