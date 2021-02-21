import { AComponentController } from "../aModule/a.component";

describe("aComponent", () => {
  let $compile: ng.ICompileService;
  let $rootScope: ng.IRootScopeService;
  let $componentController: ng.IComponentControllerService;

  // Load the myApp module
  beforeEach(() => angular.mock.module("a"));
  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(
    angular.mock.inject(function(
      _$compile_: ng.ICompileService,
      _$rootScope_: ng.IRootScopeService,
      _$componentController_: ng.IComponentControllerService
    ) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $componentController = _$componentController_;
    })
  );

  it("The main header in component should contain 'A Component'.", function() {
    var element = $compile("<a-component></a-component>")($rootScope);
    expect(angular.element("h1", element).html()).toBe("A Component");
  });

  it("The span using directive should contain the initial value dictated by the component.", function() {
    var element = $compile("<a-component></a-component>")($rootScope);

    var ctrl: AComponentController = $componentController("aComponent", null);

    $rootScope.$digest();

    expect(angular.element("[a-directive]", element).html()).toBe(ctrl.input);
  });
});
