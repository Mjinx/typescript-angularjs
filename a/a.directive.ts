import ng from "angular";

interface IDirectiveAttribute extends ng.IAttributes {
  aDirective: string;
}

const aDirective: ng.IDirectiveFactory<ng.IScope> = <T>(
  $parse: ng.IParseService
) => {
  return {
    restrict: "A",
    compile: (
      templateElement: ng.IAugmentedJQuery,
      templateAttributes: IDirectiveAttribute,
      transclude: ng.ITranscludeFunction
    ) => {
      const getExpression = $parse(templateAttributes.aDirective);
      return (
        scope: ng.IRepeatScope,
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
            if (newValue !== oldValue)
              instanceElement.html(`dir output: ${newValue}`);
          }
        );

        if (expression) instanceElement.html(`dir output: ${expression}`);
      };
    }
  } as ng.IDirective;
};

aDirective.$inject = ["$parse"];

export default function registerDirectiveA(module: ng.IModule) {
  module.directive("aDirective", aDirective);
}
