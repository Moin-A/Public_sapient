webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/util_filter.jsx":
/*!*******************************!*\
  !*** ./pages/util_filter.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction filter(array, options) {\n  if (typeof array === \"undefined\") array = [];\n  if (typeof options === \"undefined\") options = {};\n  var _options = options,\n      textProperty = _options.textProperty,\n      valueProperty = _options.valueProperty;\n  var newarray = array.filter(function (item) {\n    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, textProperty) === valueProperty;\n  });\n  return newarray;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (filter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXRpbF9maWx0ZXIuanN4P2QwNjUiXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXkiLCJvcHRpb25zIiwidGV4dFByb3BlcnR5IiwidmFsdWVQcm9wZXJ0eSIsIm5ld2FycmF5IiwiaXRlbSIsIl8iLCJnZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM5QixNQUFJLE9BQU9ELEtBQVAsS0FBaUIsV0FBckIsRUFBa0NBLEtBQUssR0FBRyxFQUFSO0FBQ2xDLE1BQUksT0FBT0MsT0FBUCxLQUFtQixXQUF2QixFQUFvQ0EsT0FBTyxHQUFHLEVBQVY7QUFGTixpQkFHVUEsT0FIVjtBQUFBLE1BR3RCQyxZQUhzQixZQUd0QkEsWUFIc0I7QUFBQSxNQUdSQyxhQUhRLFlBR1JBLGFBSFE7QUFLOUIsTUFBSUMsUUFBUSxHQUFHSixLQUFLLENBQUNELE1BQU4sQ0FDYixVQUFDTSxJQUFEO0FBQUEsV0FBVUMsNkNBQUMsQ0FBQ0MsR0FBRixDQUFNRixJQUFOLEVBQVlILFlBQVosTUFBOEJDLGFBQXhDO0FBQUEsR0FEYSxDQUFmO0FBSUEsU0FBT0MsUUFBUDtBQUNEOztBQUVjTCxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3V0aWxfZmlsdGVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgYXJyYXkgPT09IFwidW5kZWZpbmVkXCIpIGFycmF5ID0gW107XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucyA9IHt9O1xuICBjb25zdCB7IHRleHRQcm9wZXJ0eSwgdmFsdWVQcm9wZXJ0eSB9ID0gb3B0aW9ucztcblxuICBsZXQgbmV3YXJyYXkgPSBhcnJheS5maWx0ZXIoXG4gICAgKGl0ZW0pID0+IF8uZ2V0KGl0ZW0sIHRleHRQcm9wZXJ0eSkgPT09IHZhbHVlUHJvcGVydHlcbiAgKTtcblxuICByZXR1cm4gbmV3YXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/util_filter.jsx\n");

/***/ })

})