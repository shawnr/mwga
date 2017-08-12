'use strict';

/**
 * @ngdoc function
 * @name mwgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mwgaApp
 */
angular.module('mwgaApp')
  .controller('MainCtrl', function ($scope, current, forecast) {
    $scope.showCurrent = false;
    $scope.showForecast = false;
    $scope.showSearch = true;
    $scope.current = current.query();
    $scope.forecast = forecast.query();

    $scope.openCurrent = function(){
        $scope.showSearch = false;
        $scope.showForecast = false;
        $scope.showCurrent = true;

    }
    $scope.openForecast = function(){
        $scope.showSearch = false;
        $scope.showCurrent = false;
        $scope.showForecast = true;
    }
    $scope.openSearch = function(){
        $scope.showSearch = true;
        $scope.showCurrent = false;
        $scope.showForecast = false;
    }
  });
