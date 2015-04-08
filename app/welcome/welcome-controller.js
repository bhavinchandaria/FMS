(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('welcome')
    .controller('welcomeCtrl', welcomeCtrl);

  function welcomeCtrl() {
    var wm = this;
    wm.ctrlName = 'welcomeCtrl';
  }

})();
