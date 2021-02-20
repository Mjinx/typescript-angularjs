import "./styles/style.scss";
import "./app.module";

import angular from "angular";

const appDiv: HTMLElement = document.getElementById("app");

angular.element(document).ready(function() {
  angular.bootstrap(appDiv, ["testApp"]);
});
