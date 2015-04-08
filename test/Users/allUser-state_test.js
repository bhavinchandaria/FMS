/*global describe, beforeEach, expect, it, inject, allUsers, module*/
'use strict';

describe('FMS.allUsers'/*, function () {
  var $rootScope, $state, $injector, state = allUsers;
  beforeEach(module('allUsers'));
  beforeEach(inject(function (_$rootScope_, _$state_, _$injector_, _$templateCache_) {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('Users/allUsers.tpl.html').passThrough();
    _$templateCache_.put('allUsers.tpl.html');
  })*/);
  beforeEach(function (){
    browser().navigateTo('/');
  });
  it('should jump to the /dashboard path when / is accessed',function() {
    browser().navigateTo('#/FMS');
    expect(browser().location().path()).toBe("/dashboard")
  });
  /*it('should respond to URL', function () {
    expect($state.href(state).toEqual('#/FMS/allUsers'));
  });
  $state.go(state);
  $rootScope.$digest();
  expect($state.current.name).toBe('allUsers');
  it('It should transition to FMS.allUsers state', function () {
    state.expectTransitionTo('FMS.allUsers');
    state.ensureAllTransitionsHappened();
  });
});*/

