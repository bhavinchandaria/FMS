(function () {
  'use strict';

  /* @ngdoc object
   * @name allTenent
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('allTenent', [
      'ui.router'
    ])
    .config(config)
    .directive('gridview', function () {
      return {
        restrict: 'E',
        templateUrl: 'Tenent/gridview_alltenant.html',
        controller: 'DisplayCtrl'
      };
    })
    .controller('DisplayCtrl', ['$scope', 'dataService', function($scope, dataService) {
      dataService.headerdata(function(colcoll) {
        $scope.colcoll = colcoll;
      });

      dataService.valueData(function(datacol) {
        $scope.datacol = datacol;
      });
    }])
    .factory('dataService', function($http) {
      return {
        headerdata: function(successcb) {
          $http.get('JSON/header.php').success(
            function(data, status, headers, config) {
              successcb(data);
            }).error(function(){
              alert('Header JSON File not Fetched');
            });
        },
        valueData: function(succ) {
          $http.get('JSON/values.json').success(
            function(data, status, headers, config) {
              succ(data);
            }).error(function(){
              alert('value JSON File not Fetched');
            });
        }
      };
    }); 
  function config($stateProvider) {
    $stateProvider
      .state('FMS.allTenent', {
      url: '/allTenent',
      views: {
        '@': {
          template: '<gridview></gridview>'
        }
      }
    });
  }
})();
