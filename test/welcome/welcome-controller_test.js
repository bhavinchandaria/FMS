/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('welcomeCtrl', function () {
  var ctrl;

  beforeEach(module('welcome'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('welcomeCtrl');
  }));

  it('should have ctrlName as welcomeCtrl', function () {
    expect(ctrl.ctrlName).toEqual('welcomeCtrl');
  });

});
