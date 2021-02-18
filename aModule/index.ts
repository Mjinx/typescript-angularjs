import angular from "angular";

import registerComonentA from "./a.component";
import registerDirectiveA from "./a.directive";

const a = angular.module("a", []);

registerComonentA(a);
registerDirectiveA(a);
export default a.name;
