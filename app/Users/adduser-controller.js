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
    .module('addUser')
    .controller('adduserCtrl', adduserCtrl);

  function adduserCtrl() {
    var wm = this;
    wm.ctrlName = 'adduserCtrl';
  }

})();
