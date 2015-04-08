(function () {
  'use strict';

  /* @ngdoc object
   * @name spaceStructure
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('spacestructure', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('FMS.spacestructure', {
        url: '/spacestructure',
        views: {
          '@': {
            templateUrl: 'Space Inventory/spaceStructure.tpl.html'
          }
        }
      });
  }
})();
