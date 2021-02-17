import angular from "angular";
import "@uirouter/angularjs";

import aName from "./a";
import appConfig from "./app.config";

const app = angular.module("testApp", ["ui.router", aName]);

appConfig(app);
