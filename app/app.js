/**
 * Created by Radiobeat33 on 2/11/16.
 */
(function(){

    'use strict';

    angular.module('app', ['ngRoute'])
           .config(config);

    function config($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'sampleView.html',
                controller: 'sampleViewController'
            });
    }

})();