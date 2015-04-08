(function () {
  'use strict';

  /* @ngdoc object
   * @name quicklinks
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('quicklinks', [
      'ui.router'
    ])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('FMS.quicklinks', {
        url: '/quicklinks',
        views: {
          '@': {
            templateUrl: 'quicklinks/quicklinks.tpl.html'
          }
        }
      });
  }
})();
