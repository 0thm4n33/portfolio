"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/works/speedyDrive",{

/***/ "./pages/works/speedyDrive.js":
/*!************************************!*\
  !*** ./pages/works/speedyDrive.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeedyDrive; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layouts_workTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layouts/workTemplate */ \"./components/layouts/workTemplate.js\");\n/* harmony import */ var _lib_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/data.json */ \"./lib/data.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SpeedyDrive() {\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().asPath;\n    var pathWork = asPath.split(\"/\")[2];\n    var work = _lib_data_json__WEBPACK_IMPORTED_MODULE_4__.works.find(function(w) {\n        return w.id === pathWork;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_workTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: work.title,\n        description: work.description,\n        year: work.year\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\speedyDrive.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n};\n_s(SpeedyDrive, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SpeedyDrive;\nvar _c;\n$RefreshReg$(_c, \"SpeedyDrive\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy9zcGVlZHlEcml2ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDZDtBQUN1QztBQUMzQjtBQUV2QixTQUFTSSxXQUFXLEdBQUU7O0lBQ2pDLElBQU0sTUFBUSxHQUFLSixzREFBUyxFQUFFLENBQXRCSyxNQUFNO0lBQ2QsSUFBTUMsUUFBUSxHQUFHRCxNQUFNLENBQUNFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsSUFBTUMsSUFBSSxHQUFHTCxzREFBZSxDQUFFUSxTQUFBQSxDQUFDO2VBQUlBLENBQUMsQ0FBQ0MsRUFBRSxLQUFLTixRQUFRO0tBQUEsQ0FBQztJQUNyRCxxQkFDSSw4REFBQ0osd0VBQVk7UUFDVFcsS0FBSyxFQUFFTCxJQUFJLENBQUNLLEtBQUs7UUFDakJDLFdBQVcsRUFBRU4sSUFBSSxDQUFDTSxXQUFXO1FBQzdCQyxJQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFBSTs7Ozs7WUFDakIsQ0FDTDtDQUNKO0dBWHVCWCxXQUFXOztRQUNaSixrREFBUzs7O0FBRFJJLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29ya3Mvc3BlZWR5RHJpdmUuanM/MjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV29ya1RlbXBsYXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvd29ya1RlbXBsYXRlXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2xpYi9kYXRhLmpzb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVlZHlEcml2ZSgpe1xyXG4gICAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcGF0aFdvcmsgPSBhc1BhdGguc3BsaXQoJy8nKVsyXTtcclxuICAgIGNvbnN0IHdvcmsgPSBkYXRhLndvcmtzLmZpbmQoIHcgPT4gdy5pZCA9PT0gcGF0aFdvcmspO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxXb3JrVGVtcGxhdGUgXHJcbiAgICAgICAgICAgIHRpdGxlPXt3b3JrLnRpdGxlfSBcclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3dvcmsuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIHllYXI9e3dvcmsueWVhcn1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiV29ya1RlbXBsYXRlIiwiZGF0YSIsIlNwZWVkeURyaXZlIiwiYXNQYXRoIiwicGF0aFdvcmsiLCJzcGxpdCIsIndvcmsiLCJ3b3JrcyIsImZpbmQiLCJ3IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwieWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/works/speedyDrive.js\n"));

/***/ })

});