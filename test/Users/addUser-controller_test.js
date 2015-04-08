/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('adduserCtrl', function () {
  var ctrl;

  beforeEach(module('addUser'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('adduserCtrl');
  }));

  it('should have ctrlName as adduserCtrl', function () {
    expect(ctrl.ctrlName).toEqual('adduserCtrl');
  });

});
