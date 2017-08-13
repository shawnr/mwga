'use strict';

/**
 * @ngdoc function
 * @name mwgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mwgaApp
 */
angular.module('mwgaApp')
  .controller('MainCtrl', function ($scope, current, forecast, citycheck) {
    $scope.showCurrent = false;
    $scope.showForecast = false;
    $scope.showInvalidCity = false;
    $scope.dataLoading = false;
    $scope.showSearch = true;
    $scope.current = current.query();
    $scope.forecast = forecast.query();

    $scope.openCurrent = function(){
        $scope.dataLoading = true;
        $scope.cityCheck = citycheck.query({location: $scope.city});

        $scope.cityCheck.$promise.then(function(data){
            if (data.sys.country==='US'){
                console.log('City is in the USA.');
                $scope.showSearch = false;
                $scope.showForecast = false;
                $scope.showCurrent = true;
                $scope.showInvalidCity = false;
            } else {
                $scope.showInvalidCity = true;
                console.log('City is invalid. Not in the USA.');
            }
        });

    }
    $scope.openForecast = function(){
        $scope.showSearch = false;
        $scope.showCurrent = false;
        $scope.showForecast = true;
        $scope.showInvalidCity = false;
    }
    $scope.openSearch = function(){
        $scope.showSearch = true;
        $scope.showCurrent = false;
        $scope.showForecast = false;
        $scope.showInvalidCity = false;
    }
  });
