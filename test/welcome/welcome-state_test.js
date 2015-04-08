/*global describe, inject*/
'use strict';

describe('FMS.welcome', function () {
  var $rootScope, $state, $injector, state = 'FMS.welcome';

  inject(function ($rS, $st, $injt, $templateCache) {
    $rootScope = $rS;
    $state = $st;
    $injector = $injt;

    $templateCache.put('welcome.tpl.html', '');
  });
});
