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
    .module('allUsers')
    .controller('allusersCtrl', alluserCtrl);

  function alluserCtrl() {
    var wm = this;
    wm.ctrlName = 'allusersCtrl';
  }

})();
