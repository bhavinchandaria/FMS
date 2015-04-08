(function () {
  'use strict';

  /* @ngdoc object
   * @name dashboard
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('dashboard', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('FMS.dashboard', {
        url: '/dashboard',
        views: {
          '@': {
            templateUrl: 'dashboard/dashboard.tpl.html'
          }
        }
      });
  }
})();
