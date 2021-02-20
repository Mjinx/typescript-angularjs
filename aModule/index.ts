import angular from "angular";

import registerComonentA from "./a.component";
import registerDirectiveA from "./a.directive";

const aModule = angular.module("a", []);

registerComonentA(aModule);
registerDirectiveA(aModule);

export default aModule.name;
