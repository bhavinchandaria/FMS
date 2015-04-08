(function () {
  'use strict';

  /* @ngdoc object
   * @name myNewApp
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('myNewApp', [
      'ngAria',
      'ui.router',
      'mgcrea.ngStrap',
      'home',
      'welcome',
      'dashboard',
      'quicklinks',
      'spacestructure',
      'addTenent',
      'allTenent',
      'allUsers',
      'addUser'
    ])
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/FMS/dashboard');
    $stateProvider
    .state('FMS', {
      url: '/FMS',
      views: {
        'header@': {
          templateUrl: 'header/header.tpl.html'
        },
        'sidebar@': {
          templateUrl: 'sidebar/sidebar.tpl.html'
        }/*,
        '@': {
          templateUrl: 'dashboard/dashboard.tpl.html'
        }*/
      }/*,
      controller: function ($state) {
        $state.go('dashboard');
      }*/
    });
  }

})();
