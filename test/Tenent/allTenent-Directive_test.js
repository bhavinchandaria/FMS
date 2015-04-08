/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('gridview', function () {
  beforeEach(module('allTenent'));
    var directive, scope, $compile, $rootScope;;
  	beforeEach(inject(function (_$rootScope_, $compile_, $injector, $directive) {
  		scope = _$rootScope_;
  		$compile = _$compile_;
  		directive= $directive('gridview');
  		$httpBackend = $injector.get('$httpBackend');
  		console.log($httpBackend);
  		$httpBackend.whenGET('Tenent/allTenent.tpl.html').passThrough();
  	}));
  	var element;
  		beforeEach(function () {
  			element = $compile('<gridview></gridview>')(scope);
  			angular.element(document.body).append(element);
  		});
  		/*it('should return with proper content', function () {
  			expect(directive).toEqual('gridview');
  		});*/
});