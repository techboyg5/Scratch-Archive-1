var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([[4],{

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n.index_app_3Qs6X {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\n", ""]);

// exports
exports.locals = {
	"app": "index_app_3Qs6X"
};

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(206);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(642);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _analytics = __webpack_require__(22);

var _analytics2 = _interopRequireDefault(_analytics);

var _gui = __webpack_require__(66);

var _gui2 = _interopRequireDefault(_gui);

var _index = __webpack_require__(207);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ("production" === 'production' && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    // Warn before navigating away
    window.onbeforeunload = function () {
        return true;
    };
}

// Register "base" page view
_analytics2.default.pageview('/');

var appTarget = document.createElement('div');
appTarget.className = _index2.default.app;
document.body.appendChild(appTarget);

_gui2.default.setAppElement(appTarget);

_reactDom2.default.render(_react2.default.createElement(_gui2.default, null), appTarget);

/***/ })

},[[643,0]]]);
//# sourceMappingURL=gui.js.map

}
/*
     FILE ARCHIVED ON 16:46:55 May 16, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:52:39 Nov 25, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  xauthn.identify: 100.858
  captures_list: 2788.872
  RedisCDXSource: 20.126
  exclusion.robots: 179.642
  esindex: 0.017
  CDXLines.iter: 21.449 (3)
  PetaboxLoader3.resolve: 1132.91 (3)
  LoadShardBlock: 2563.802 (3)
  PetaboxLoader3.datanode: 1505.184 (4)
  xauthn.chkprivs: 78.502
  exclusion.robots.policy: 179.627
  load_resource: 177.825
*/