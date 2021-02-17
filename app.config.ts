import {
  StateProvider,
  UrlRouterProvider,
  Ng1StateDeclaration
} from "@uirouter/angularjs";

import { aComponentName } from "./a/a.component";

export const routes: { [key: string]: string } = {
  root: "hello"
};

export default function AppConfig(module: ng.IModule) {
  "ngInject";
  module.config([
    "$stateProvider",
    "$urlRouterProvider",
    ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {
      const states: Ng1StateDeclaration[] = [
        {
          name: routes.root,
          url: "/",
          component: aComponentName
        }
      ];

      states.forEach(s => $stateProvider.state(s));

      $urlRouterProvider.otherwise("/");
    }
  ]);
}
