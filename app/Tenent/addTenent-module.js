(function () {
  'use strict';

  /* @ngdoc object
   * @name addTenent
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('addTenent', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('FMS.addTenent', {
      url: '/addTenent',
      views: {
        '@': {
          templateUrl: 'Tenent/addTenent.tpl.html'
        }
      }
    });
  }
})();
