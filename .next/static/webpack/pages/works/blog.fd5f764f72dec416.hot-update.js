"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/works/blog",{

/***/ "./pages/works/blog.js":
/*!*****************************!*\
  !*** ./pages/works/blog.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogWork; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/info */ \"./components/info.js\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var _components_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/work */ \"./components/work.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.esm.js\");\n/* harmony import */ var _lib_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/data.json */ \"./lib/data.json\");\n\n\n\n\n\n\n\nfunction BlogWork() {\n    var _this = this;\n    var blog = _lib_data_json__WEBPACK_IMPORTED_MODULE_4__.works.find(function(w) {\n        return w.id === \"blog\";\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        mt: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_work__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                title: blog.title,\n                year: blog.year\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                lineNumber: 11,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_paragraph__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: blog.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                lineNumber: 12,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.List, {\n                mt: 3,\n                ml: 5,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_work__WEBPACK_IMPORTED_MODULE_3__.Meta, {\n                                children: \"Platform\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                                lineNumber: 17,\n                                columnNumber: 21\n                            }, this),\n                            blog.plateform.map(function(p) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info__WEBPACK_IMPORTED_MODULE_1__.Info, {\n                                    children: p\n                                }, p, false, {\n                                    fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 25\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_work__WEBPACK_IMPORTED_MODULE_3__.Meta, {\n                                children: \"Stack\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, this),\n                            blog.stack.map(function(s) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_info__WEBPACK_IMPORTED_MODULE_1__.Info, {\n                                    children: s\n                                }, s, false, {\n                                    fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_work__WEBPACK_IMPORTED_MODULE_3__.Meta, {\n                                children: \"Github\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                href: blog.github,\n                                children: [\n                                    blog.github,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.ExternalLinkIcon, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 39\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                lineNumber: 15,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                mt: 3,\n                children: blog.images.map(function(imageUrl, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_work__WEBPACK_IMPORTED_MODULE_3__.WorkImage, {\n                        alt: \"preview_\".concat(index),\n                        src: __webpack_require__(\"./public/images/blog sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(imageUrl))\n                    }, \"\".concat(blog.title, \"_\").concat(index), false, {\n                        fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n                lineNumber: 35,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\pages\\\\works\\\\blog.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n};\n_c = BlogWork;\nvar _c;\n$RefreshReg$(_c, \"BlogWork\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQW9GO0FBQ3ZDO0FBQ007QUFDWTtBQUNiO0FBQ1g7QUFDeEIsU0FBU2MsUUFBUSxHQUFFOztJQUM5QixJQUFNQyxJQUFJLEdBQUdGLHNEQUFlLENBQUNLLFNBQUFBLENBQUM7ZUFBSUEsQ0FBQyxDQUFDQyxFQUFFLEtBQUssTUFBTTtLQUFBLENBQUM7SUFDbEQscUJBQ0ksOERBQUNuQix1REFBUztRQUFDb0IsRUFBRSxFQUFFLENBQUM7OzBCQUNiLDhEQUFDVixtREFBSztnQkFBQ1csS0FBSyxFQUFFTixJQUFJLENBQUNNLEtBQUs7Z0JBQUVDLElBQUksRUFBRVAsSUFBSSxDQUFDTyxJQUFJOzs7OztvQkFBSTswQkFDN0MsOERBQUNkLDZEQUFTOzBCQUNKTyxJQUFJLENBQUNRLFdBQVc7Ozs7O29CQUNWOzBCQUNaLDhEQUFDbkIsa0RBQUk7Z0JBQUNnQixFQUFFLEVBQUUsQ0FBQztnQkFBRUksRUFBRSxFQUFFLENBQUM7O2tDQUNiLDhEQUFDbkIsc0RBQVE7OzBDQUNMLDhEQUFDSSxrREFBSTswQ0FBQyxVQUFROzs7OztvQ0FBTzs0QkFDcEJNLElBQUksQ0FBQ1UsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsQ0FBQztxREFDbEIsOERBQUNwQixrREFBSTs4Q0FBVW9CLENBQUM7bUNBQUxBLENBQUM7Ozs7eUNBQVk7NkJBQzNCLENBQUM7Ozs7Ozs0QkFDSztrQ0FDWCw4REFBQ3RCLHNEQUFROzswQ0FDTCw4REFBQ0ksa0RBQUk7MENBQUMsT0FBSzs7Ozs7b0NBQU87NEJBQ2pCTSxJQUFJLENBQUNhLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRyxTQUFBQSxDQUFDO3FEQUNiLDhEQUFDdEIsa0RBQUk7OENBQVVzQixDQUFDO21DQUFMQSxDQUFDOzs7O3lDQUFZOzZCQUMzQixDQUFDOzs7Ozs7NEJBQ0s7a0NBQ1gsOERBQUN4QixzREFBUTs7MENBQ0wsOERBQUNJLGtEQUFJOzBDQUFDLFFBQU07Ozs7O29DQUFPOzBDQUNuQiw4REFBQ0gsa0RBQUk7Z0NBQUN3QixJQUFJLEVBQUVmLElBQUksQ0FBQ2dCLE1BQU07O29DQUNsQmhCLElBQUksQ0FBQ2dCLE1BQU07b0NBQUMsR0FBQztrREFBQSw4REFBQ25CLDhEQUFnQjs7Ozs0Q0FBRTs7Ozs7O29DQUM5Qjs7Ozs7OzRCQUNBOzs7Ozs7b0JBQ1Q7MEJBQ1AsOERBQUNYLGlEQUFHO2dCQUFDbUIsRUFBRSxFQUFFLENBQUM7MEJBQ1JMLElBQUksQ0FBQ2lCLE1BQU0sQ0FBQ04sR0FBRyxDQUFDLFNBQUNPLFFBQVEsRUFBQ0MsS0FBSzt5Q0FDeEIsOERBQUN2Qix1REFBUzt3QkFFTndCLEdBQUcsRUFBRSxVQUFTLENBQVEsT0FBTkQsS0FBSyxDQUFFO3dCQUN2QkUsR0FBRyxFQUFFQyxzRUFBUSxJQUEwQixDQUFXLE9BQVRKLFFBQVEsQ0FBRSxDQUFDO3VCQUYvQyxFQUFDLENBQWdCQyxNQUFLLENBQW5CbkIsSUFBSSxDQUFDTSxLQUFLLEVBQUMsR0FBQyxDQUFRLFFBQU5hLEtBQUssQ0FBRTs7Ozs2QkFHL0I7aUJBQ1QsQ0FBQzs7Ozs7b0JBQ0c7Ozs7OztZQUNHLENBQ2Y7Q0FDSjtBQXZDdUJwQixLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dvcmtzL2Jsb2cuanM/MDY5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lciwgQm94LEhlYWRpbmcsQmFkZ2UsIExpc3QsIExpc3RJdGVtLCBMaW5rfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgSW5mbyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5mbyc7XHJcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnO1xyXG5pbXBvcnQgeyBNZXRhLCBUaXRsZSwgV29ya0ltYWdlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy93b3JrJztcclxuaW1wb3J0IHtFeHRlcm5hbExpbmtJY29ufSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vbGliL2RhdGEuanNvbic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dXb3JrKCl7XHJcbiAgICBjb25zdCBibG9nID0gZGF0YS53b3Jrcy5maW5kKHcgPT4gdy5pZCA9PT0gJ2Jsb2cnKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyIG10PXsyfT5cclxuICAgICAgICAgICA8VGl0bGUgdGl0bGU9e2Jsb2cudGl0bGV9IHllYXI9e2Jsb2cueWVhcn0gLz5cclxuICAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgICAge2Jsb2cuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgPExpc3QgbXQ9ezN9IG1sPXs1fT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWV0YT5QbGF0Zm9ybTwvTWV0YT5cclxuICAgICAgICAgICAgICAgICAgICB7YmxvZy5wbGF0ZWZvcm0ubWFwKChwKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5mbyBrZXk9e3B9PntwfTwvSW5mbz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1ldGE+U3RhY2s8L01ldGE+XHJcbiAgICAgICAgICAgICAgICAgICAge2Jsb2cuc3RhY2subWFwKHM9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZm8ga2V5PXtzfT57c308L0luZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXRhPkdpdGh1YjwvTWV0YT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtibG9nLmdpdGh1Yn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nLmdpdGh1Yn0gPEV4dGVybmFsTGlua0ljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgIDxCb3ggbXQ9ezN9PlxyXG4gICAgICAgICAgICB7YmxvZy5pbWFnZXMubWFwKChpbWFnZVVybCxpbmRleCkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPFdvcmtJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtibG9nLnRpdGxlfV8ke2luZGV4fWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BwcmV2aWV3XyR7aW5kZXh9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShgLi4vLi4vcHVibGljL2ltYWdlcy9ibG9nLyR7aW1hZ2VVcmx9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiQm94IiwiSGVhZGluZyIsIkJhZGdlIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGluayIsIkluZm8iLCJQYXJhZ3JhcGgiLCJNZXRhIiwiVGl0bGUiLCJXb3JrSW1hZ2UiLCJFeHRlcm5hbExpbmtJY29uIiwiZGF0YSIsIkJsb2dXb3JrIiwiYmxvZyIsIndvcmtzIiwiZmluZCIsInciLCJpZCIsIm10IiwidGl0bGUiLCJ5ZWFyIiwiZGVzY3JpcHRpb24iLCJtbCIsInBsYXRlZm9ybSIsIm1hcCIsInAiLCJzdGFjayIsInMiLCJocmVmIiwiZ2l0aHViIiwiaW1hZ2VzIiwiaW1hZ2VVcmwiLCJpbmRleCIsImFsdCIsInNyYyIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/works/blog.js\n"));

/***/ })

});