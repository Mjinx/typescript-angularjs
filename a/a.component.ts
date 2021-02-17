import ng from "angular";
import "./a.style.scss";
import template from "./a.template.html";

class AComponentController implements ng.IController {
  public input: string;

  public static $inject: string[] = [];

  constructor() {
    console.log("a ctor");
  }
  public $onInit(): void {
    console.log("a $onInit");

    this.input = "hi there!";
  }
}

export const aComponentName = "aComponent";

export default function registerComponent(module: ng.IModule) {
  module.component(aComponentName, {
    //template: "<span>{{ vm.input | json}}</span>",
    //templateUrl: require('./a.component.html'),
    //templateUrl: "./a/a.template.html",
    template,
    controller: AComponentController,
    controllerAs: "vm"
  });
}
