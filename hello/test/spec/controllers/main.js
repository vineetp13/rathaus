'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('helloApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
  */
    it('should have no items in todos', function () {
        expect(scope.todos.length).toBe(3);
    })
});
