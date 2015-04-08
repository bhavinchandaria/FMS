(function () {
  'use strict';

  /* @ngdoc object
   * @name allUsers
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('allUsers', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('FMS.allUsers', {
        url: '/allUsers',
        views: {
          '@': {
            templateUrl: 'Users/allUsers.tpl.html',
            controller: 'allusersCtrl',
            controllerAs: 'allusers'
          }
        }
      });
  }
})();
