/*global describe, inject*/
'use strict';

describe('FMS.addUser', function () {
  var $rootScope, $state, $injector, state = 'FMS.addUser';

  inject(function ($rS, $st, $injt, $templateCache) {
    $rootScope = $rS;
    $state = $st;
    $injector = $injt;

    $templateCache.put('addUser.tpl.html', '');
  });
});
