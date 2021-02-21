import ng from "angular";

interface IDirectiveAttribute extends ng.IAttributes {
  aDirective: string;
}

function aDirective<T>($parse: ng.IParseService): ng.IDirective {
  return {
    restrict: "A",
    compile: (
      templateElement: ng.IAugmentedJQuery,
      templateAttributes: IDirectiveAttribute,
      transclude: ng.ITranscludeFunction
    ) => {
      const getExpression = $parse(templateAttributes.aDirective);
      return (
        scope: ng.IScope,
        instanceElement: ng.IAugmentedJQuery,
        instanceAttributes: IDirectiveAttribute,
        controller: ng.IController
      ) => {
        let expression: T;
        if (getExpression != angular.noop)
          expression = getExpression(scope) as T;

        scope.$watch(
          templateAttributes.aDirective,
          (newValue: T, oldValue: T) => {
            if (newValue !== oldValue) instanceElement.html(`${newValue}`);
          }
        );

        if (expression) instanceElement.html(`${expression}`);
      };
    }
  } as ng.IDirective;
}

aDirective.$inject = ["$parse"];

export default function registerDirectiveA(module: ng.IModule) {
  module.directive("aDirective", aDirective);
}
