import $ from "jquery";
window.jQuery = $;

import jasmineRequire from "jasmine-core/lib/jasmine-core/jasmine.js";
window.jasmineRequire = jasmineRequire;
import "jasmine-core/lib/jasmine-core/jasmine-html.js";
import "jasmine-core/lib/jasmine-core/jasmine.css";
import "jasmine-core/lib/jasmine-core/boot.js";

import angular from "angular";
import "angular-mocks";

import "./styles/style.scss";
import "./app.module";

(function bootstrap() {
  if (window.jasmineRef) {
    location.reload();
    return;
  }

  window.onload(new Event("anything"));
  window.jasmineRef = jasmine.getEnv();
})();

const appDiv: HTMLElement = document.getElementById("app");

$(document).ready(function() {
  angular.bootstrap(appDiv, ["testApp"]);
});
