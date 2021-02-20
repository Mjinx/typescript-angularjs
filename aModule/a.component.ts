import ng from "angular";
import "./a.style.scss";

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
    //templateUrl: "./aModule/a.template.html", //NOPE
    template: require<string>("./a.template.html"), //or import template from "./a.template.html";
    controller: AComponentController,
    controllerAs: "vm"
  });
}
