import ng from "angular";
import "./a.style";

export class AComponentController implements ng.IController {
  public input: string = "hi there!";

  public static $inject: string[] = [];

  constructor() {}

  public $onInit(): void {}
}

export const aComponentName = "aComponent";

export default function registerComponent(module: ng.IModule) {
  module.component(aComponentName, {
    template: require<string>("./a.template.html"), //import template from "./a.template.html";
    controller: AComponentController,
    controllerAs: "vm"
  });
}
