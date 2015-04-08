(function () {
  'use strict';

  /* @ngdoc object
   * @name addUser
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('addUser', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('FMS.addUser', {
        url: '/addUser',
        views: {
          '@': {
            templateUrl: 'Users/addUser.tpl.html',
            controller: 'adduserCtrl',
            controllerAs: 'adduser'
          }
        }
      });
  }
})();
