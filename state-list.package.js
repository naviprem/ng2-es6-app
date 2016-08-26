module.exports =
    /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId])
        /******/ 			return installedModules[moduleId].exports;

        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			exports: {},
            /******/ 			id: moduleId,
            /******/ 			loaded: false
            /******/ 		};

        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ 		// Flag the module as loaded
        /******/ 		module.loaded = true;

        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";

    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.StateListModule = undefined;

        var _core = __webpack_require__(1);

        var _common = __webpack_require__(2);

        var _stateListComponent = __webpack_require__(3);

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var StateListModule = exports.StateListModule = function StateListModule() {
            _classCallCheck(this, StateListModule);
        };

        StateListModule.annotations = [new _core.NgModule({
            imports: [_common.CommonModule],
            declarations: [_stateListComponent.StateListComponent],
            exports: [_stateListComponent.StateListComponent]
        })];

        /***/ },
    /* 1 */
    /***/ function(module, exports) {

        module.exports = require("@angular/core");

        /***/ },
    /* 2 */
    /***/ function(module, exports) {

        module.exports = require("@angular/common");

        /***/ },
    /* 3 */
    /***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.StateListComponent = undefined;

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        var _core = __webpack_require__(1);

        var _stateList = __webpack_require__(4);

        var _stateList2 = _interopRequireDefault(_stateList);

        var _stateList3 = __webpack_require__(5);

        var _stateList4 = _interopRequireDefault(_stateList3);

        var _stateListService = __webpack_require__(6);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var StateListComponent = exports.StateListComponent = function () {
            function StateListComponent(stateListService) {
                _classCallCheck(this, StateListComponent);

                this.stateListService = stateListService;
            }

            _createClass(StateListComponent, [{
                key: "ngOnInit",
                value: function ngOnInit() {
                    var that = this;
                    this.stateListService.getStatesSlowly().then(function (states) {
                        that.items = states;console.log(that.items);
                    }).catch(function (err) {
                        console.error("error", err);
                    });
                }

                //This add function is here to demonstrate Unit testing capabilities of this stack

            }, {
                key: "add",
                value: function add(a, b) {
                    return a + b;
                }
            }], [{
                key: "parameters",
                get: function get() {
                    return [[_stateListService.StateListService]];
                }
            }]);

            return StateListComponent;
        }();

        StateListComponent.annotations = [new _core.Component({
            selector: 'state-list',
            template: _stateList4.default,
            styles: [_stateList2.default],
            providers: [_stateListService.StateListService]
        })];

        /***/ },
    /* 4 */
    /***/ function(module, exports) {

        module.exports = "li {\n  list-style: none; }\n"

        /***/ },
    /* 5 */
    /***/ function(module, exports) {

        module.exports = "<li *ngFor=\"let item of items\">\n    <span class=\"badge\">{{item.abbreviation}}</span> {{item.name}}\n</li>";

        /***/ },
    /* 6 */
    /***/ function(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.StateListService = undefined;

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        var _core = __webpack_require__(1);

        var _lodash = __webpack_require__(7);

        var _lodash2 = _interopRequireDefault(_lodash);

        var _stateList = __webpack_require__(8);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var StateListService = exports.StateListService = function () {
            function StateListService() {
                _classCallCheck(this, StateListService);
            }

            _createClass(StateListService, [{
                key: "getStates",
                value: function getStates() {
                    return Promise.resolve(_stateList.STATES);
                }
            }, {
                key: "getStatesSlowly",
                value: function getStatesSlowly() {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(_stateList.STATES);
                        }, 2000);
                    });
                }
            }, {
                key: "getState",
                value: function getState(id) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            var state = _lodash2.default.find(_stateList.STATES, { 'abbreviation': id });
                            console.log(id, state);
                            resolve(state);
                        }, 2000);
                    });
                }
            }]);

            return StateListService;
        }();

        StateListService.annotations = [new _core.Injectable()];

        /***/ },
    /* 7 */
    /***/ function(module, exports) {

        module.exports = require("lodash");

        /***/ },
    /* 8 */
    /***/ function(module, exports) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var STATES = exports.STATES = [{
            "name": "Alabama",
            "abbreviation": "AL"
        }, {
            "name": "Alaska",
            "abbreviation": "AK"
        }, {
            "name": "American Samoa",
            "abbreviation": "AS"
        }, {
            "name": "Arizona",
            "abbreviation": "AZ"
        }, {
            "name": "Arkansas",
            "abbreviation": "AR"
        }, {
            "name": "California",
            "abbreviation": "CA"
        }, {
            "name": "Colorado",
            "abbreviation": "CO"
        }, {
            "name": "Connecticut",
            "abbreviation": "CT"
        }, {
            "name": "Delaware",
            "abbreviation": "DE"
        }, {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        }, {
            "name": "Micronesia",
            "abbreviation": "FM"
        }, {
            "name": "Florida",
            "abbreviation": "FL"
        }, {
            "name": "Georgia",
            "abbreviation": "GA"
        }, {
            "name": "Guam",
            "abbreviation": "GU"
        }, {
            "name": "Hawaii",
            "abbreviation": "HI"
        }, {
            "name": "Idaho",
            "abbreviation": "ID"
        }, {
            "name": "Illinois",
            "abbreviation": "IL"
        }, {
            "name": "Indiana",
            "abbreviation": "IN"
        }, {
            "name": "Iowa",
            "abbreviation": "IA"
        }, {
            "name": "Kansas",
            "abbreviation": "KS"
        }, {
            "name": "Kentucky",
            "abbreviation": "KY"
        }, {
            "name": "Louisiana",
            "abbreviation": "LA"
        }, {
            "name": "Maine",
            "abbreviation": "ME"
        }, {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        }, {
            "name": "Maryland",
            "abbreviation": "MD"
        }, {
            "name": "Massachusetts",
            "abbreviation": "MA"
        }, {
            "name": "Michigan",
            "abbreviation": "MI"
        }, {
            "name": "Minnesota",
            "abbreviation": "MN"
        }, {
            "name": "Mississippi",
            "abbreviation": "MS"
        }, {
            "name": "Missouri",
            "abbreviation": "MO"
        }, {
            "name": "Montana",
            "abbreviation": "MT"
        }, {
            "name": "Nebraska",
            "abbreviation": "NE"
        }, {
            "name": "Nevada",
            "abbreviation": "NV"
        }, {
            "name": "New Hampshire",
            "abbreviation": "NH"
        }, {
            "name": "New Jersey",
            "abbreviation": "NJ"
        }, {
            "name": "New Mexico",
            "abbreviation": "NM"
        }, {
            "name": "New York",
            "abbreviation": "NY"
        }, {
            "name": "North Carolina",
            "abbreviation": "NC"
        }, {
            "name": "North Dakota",
            "abbreviation": "ND"
        }, {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        }, {
            "name": "Ohio",
            "abbreviation": "OH"
        }, {
            "name": "Oklahoma",
            "abbreviation": "OK"
        }, {
            "name": "Oregon",
            "abbreviation": "OR"
        }, {
            "name": "Palau",
            "abbreviation": "PW"
        }, {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        }, {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        }, {
            "name": "Rhode Island",
            "abbreviation": "RI"
        }, {
            "name": "South Carolina",
            "abbreviation": "SC"
        }, {
            "name": "South Dakota",
            "abbreviation": "SD"
        }, {
            "name": "Tennessee",
            "abbreviation": "TN"
        }, {
            "name": "Texas",
            "abbreviation": "TX"
        }, {
            "name": "Utah",
            "abbreviation": "UT"
        }, {
            "name": "Vermont",
            "abbreviation": "VT"
        }, {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        }, {
            "name": "Virginia",
            "abbreviation": "VA"
        }, {
            "name": "Washington",
            "abbreviation": "WA"
        }, {
            "name": "West Virginia",
            "abbreviation": "WV"
        }, {
            "name": "Wisconsin",
            "abbreviation": "WI"
        }, {
            "name": "Wyoming",
            "abbreviation": "WY"
        }];

        /***/ }
    /******/ ]);