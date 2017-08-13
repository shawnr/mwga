'use strict';

/**
 * @ngdoc function
 * @name mwgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mwgaApp
 */
angular.module('mwgaApp')
  .controller('MainCtrl', function ($scope, current, forecast, citycheck, $localStorage) {
    $scope.showCurrent = false;
    $scope.showForecast = false;
    $scope.showInvalidCity = false;
    $scope.dataLoading = false;
    $scope.showSearch = true;

    var now = Date.now();
    if ($localStorage.cacheTimestamp){
        var cacheTime = new Date($localStorage.cacheTimestamp);
        var nowTime = new Date(now);
        var timeDelta = Math.round((nowTime - cacheTime) / (60 * 1000));
        if (timeDelta > 10){
            console.log('Cache is expired. Refreshing.');
            $scope.current = current.query();
            $scope.current.$promise.then(function(data){
                $localStorage.currentCache = data;
            });
            $scope.forecast = forecast.query();
            $scope.forecast.$promise.then(function(data){
                $localStorage.forecastCache = data;
            })
            $localStorage.cacheTimestamp = now;
        } else {
            console.log('Cache is still fresh. Loading from local storage.');
            $scope.current = $localStorage.currentCache;
            $scope.forecast = $localStorage.forecastCache;
        }

    } else {
        console.log('Cache does not exist. Creating.');
        $scope.current = current.query();
        $scope.current.$promise.then(function(data){
            $localStorage.currentCache = data;
        });
        $scope.forecast = forecast.query();
        $scope.forecast.$promise.then(function(data){
            $localStorage.forecastCache = data;
        })
        $localStorage.cacheTimestamp = now;
    }

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
