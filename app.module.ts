import angular from "angular";
import "@uirouter/angularjs";

import aModuleName from "./aModule";
import appConfig from "./app.config";

const app = angular.module("testApp", ["ui.router", aModuleName]);

appConfig(app);
