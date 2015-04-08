/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('alluserCtrl', function () {
  var ctrl;

  beforeEach(module('allUsers'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('allusersCtrl');
  }));

  it('should have ctrlName as allusersCtrl', function () {
    expect(ctrl.ctrlName).toEqual('allusersCtrl');
  });

});
