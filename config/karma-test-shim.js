Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('reflect-metadata');

require('zone.js');

var appContext = require.context('../src/app', true, /\.spec\.js/);

appContext.keys().forEach(appContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());