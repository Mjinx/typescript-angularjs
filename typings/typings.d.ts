declare var require: {
  <T>(path: string): T;
};

interface Window {
  jasmineRequire: any;
  jasmineRef: any;
  jQuery: JQueryStatic;
}

declare module "jasmine-core/lib/jasmine-core/jasmine.js" {}
