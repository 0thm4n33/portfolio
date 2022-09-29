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

/***/ "./components/layouts/workTemplate.js":
/*!********************************************!*\
  !*** ./components/layouts/workTemplate.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorkTemplate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info */ \"./components/info.js\");\n/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../section */ \"./components/section.js\");\n/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../work */ \"./components/work.js\");\n\n\n\n\n\n\n\n\nfunction WorkTemplate(param) {\n    var work = param.work;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        mt: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_work__WEBPACK_IMPORTED_MODULE_5__.Title, {\n                title: work.title,\n                year: work.year\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paragraph__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: work.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.List, {\n                children: [\n                    [\n                        \"Plateform\",\n                        \"Github\",\n                        \"Website\"\n                    ].map(function(entry) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_work__WEBPACK_IMPORTED_MODULE_5__.Meta, {\n                                    children: entry\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 25\n                                }, _this),\n                                entry === \"Plateform\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_info__WEBPACK_IMPORTED_MODULE_2__.Info, {\n                                    children: work[entry.toLowerCase()]\n                                }, entry, false, {\n                                    fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 33\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                                    href: work[entry.toLowerCase()],\n                                    children: [\n                                        work[entry.toLowerCase()],\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.ExternalLinkIcon, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 65\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, entry, true, {\n                            fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ListItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_work__WEBPACK_IMPORTED_MODULE_5__.Meta, {\n                                children: \"Stack\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this),\n                            work.stack.map(function(s, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_info__WEBPACK_IMPORTED_MODULE_2__.Info, {\n                                    children: \"\".concat(s, \" \").concat(index === work.stack.length - 1 ? \".\" : \",\")\n                                }, s, false, {\n                                    fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                mt: 3,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    delay: 0.2,\n                    children: work.images.map(function(image) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_work__WEBPACK_IMPORTED_MODULE_5__.WorkImage, {\n                            alt: work.title,\n                            src: __webpack_require__(\"./public/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(work.id, \"/\").concat(image))\n                        }, work.title, false, {\n                            fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\othma\\\\Desktop\\\\Projets\\\\Othmane-portfolio\\\\components\\\\layouts\\\\workTemplate.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n};\n_c = WorkTemplate;\nvar _c;\n$RefreshReg$(_c, \"WorkTemplate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvd29ya1RlbXBsYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBb0Q7QUFDb0I7QUFDOUM7QUFDSztBQUNNO0FBQ0o7QUFDZ0I7QUFFbEMsU0FBU2EsWUFBWSxDQUFDLEtBQU0sRUFBQztRQUFQLElBQUssR0FBTCxLQUFNLENBQUxDLElBQUk7O0lBQ3RDLHFCQUNJLDhEQUFDWix1REFBUztRQUFDYSxFQUFFLEVBQUUsQ0FBQzs7MEJBQ1osOERBQUNKLHdDQUFLO2dCQUFDSyxLQUFLLEVBQUVGLElBQUksQ0FBQ0UsS0FBSztnQkFBRUMsSUFBSSxFQUFFSCxJQUFJLENBQUNHLElBQUk7Ozs7O29CQUFJOzBCQUM3Qyw4REFBQ1Qsa0RBQVM7MEJBQUVNLElBQUksQ0FBQ0ksV0FBVzs7Ozs7b0JBQWE7MEJBQ3pDLDhEQUFDZCxrREFBSTs7b0JBQ0E7d0JBQUMsV0FBVzt3QkFBQyxRQUFRO3dCQUFDLFNBQVM7cUJBQUMsQ0FBQ2UsR0FBRyxDQUFDQyxTQUFBQSxLQUFLOzZDQUN2Qyw4REFBQ2Ysc0RBQVE7OzhDQUNMLDhEQUFDSyx1Q0FBSTs4Q0FBRVUsS0FBSzs7Ozs7eUNBQVE7Z0NBRWhCQSxLQUFLLEtBQUssV0FBVyxpQkFDakIsOERBQUNiLHVDQUFJOzhDQUNBTyxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsV0FBVyxFQUFFLENBQUM7bUNBRG5CRCxLQUFLOzs7O3lDQUVULGlCQUNQLDhEQUFDakIsa0RBQUk7b0NBQUNtQixJQUFJLEVBQUVSLElBQUksQ0FBQ00sS0FBSyxDQUFDQyxXQUFXLEVBQUUsQ0FBQzs7d0NBQ2hDUCxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsV0FBVyxFQUFFLENBQUM7d0NBQUMsR0FBQztzREFBQSw4REFBQ3JCLDhEQUFnQjs7OztpREFBRzs7Ozs7O3lDQUM3Qzs7MkJBVEpvQixLQUFLOzs7O2lDQVdUO3FCQUNkLENBQUM7a0NBQ0YsOERBQUNmLHNEQUFROzswQ0FDTCw4REFBQ0ssdUNBQUk7MENBQUMsT0FBSzs7Ozs7b0NBQU87NEJBQ2pCSSxJQUFJLENBQUNTLEtBQUssQ0FBQ0osR0FBRyxDQUFDLFNBQUNLLENBQUMsRUFBQ0MsS0FBSztxREFDcEIsOERBQUNsQix1Q0FBSTs4Q0FDQSxFQUFDLENBQU9rQixNQUEyQyxDQUFoREQsQ0FBQyxFQUFDLEdBQUMsQ0FBOEMsUUFBNUNDLEtBQUssS0FBS1gsSUFBSSxDQUFDUyxLQUFLLENBQUNHLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBRTttQ0FEL0NGLENBQUM7Ozs7eUNBRUw7NkJBQ1YsQ0FBQzs7Ozs7OzRCQUNLOzs7Ozs7b0JBQ1I7MEJBQ1AsOERBQUN2QixpREFBRztnQkFBQ2MsRUFBRSxFQUFFLENBQUM7MEJBQ04sNEVBQUNOLGdEQUFPO29CQUFDa0IsS0FBSyxFQUFFLEdBQUc7OEJBQ2JiLElBQUksQ0FBQ2MsTUFBTSxDQUFDVCxHQUFHLENBQUNVLFNBQUFBLEtBQUs7NkNBQ25CLDhEQUFDakIsNENBQVM7NEJBRU5rQixHQUFHLEVBQUVoQixJQUFJLENBQUNFLEtBQUs7NEJBQ2ZlLEdBQUcsRUFBRUMsaUVBQVEsSUFBcUIsQ0FBYUgsTUFBSyxDQUFoQmYsSUFBSSxDQUFDbUIsRUFBRSxFQUFDLEdBQUMsQ0FBUSxRQUFOSixLQUFLLENBQUUsQ0FBQzsyQkFGbERmLElBQUksQ0FBQ0UsS0FBSzs7OztpQ0FHakI7cUJBQ0osQ0FBQzs7Ozs7d0JBQ0c7Ozs7O29CQUNSOzs7Ozs7WUFDRSxDQUNmO0NBQ0o7QUExQ3VCSCxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy93b3JrVGVtcGxhdGUuanM/MDQ4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRlcm5hbExpbmtJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIExpbmssIExpc3QsIExpc3RJdGVtIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJbmZvIH0gZnJvbSBcIi4uL2luZm9cIjtcclxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi4vcGFyYWdyYXBoXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uXCI7XHJcbmltcG9ydCB7IE1ldGEsIFRpdGxlLCBXb3JrSW1hZ2UgfSBmcm9tIFwiLi4vd29ya1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya1RlbXBsYXRlKHt3b3JrfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lciBtdD17Mn0+XHJcbiAgICAgICAgICAgIDxUaXRsZSB0aXRsZT17d29yay50aXRsZX0geWVhcj17d29yay55ZWFyfSAvPlxyXG4gICAgICAgICAgICA8UGFyYWdyYXBoPnt3b3JrLmRlc2NyaXB0aW9ufTwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtbJ1BsYXRlZm9ybScsJ0dpdGh1YicsJ1dlYnNpdGUnXS5tYXAoZW50cnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2VudHJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGE+e2VudHJ5fTwvTWV0YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPT09IFwiUGxhdGVmb3JtXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvIGtleT17ZW50cnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya1tlbnRyeS50b0xvd2VyQ2FzZSgpXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZm8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt3b3JrW2VudHJ5LnRvTG93ZXJDYXNlKCldfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtbZW50cnkudG9Mb3dlckNhc2UoKV19IDxFeHRlcm5hbExpbmtJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXRhPlN0YWNrPC9NZXRhPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3JrLnN0YWNrLm1hcCgocyxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5mbyBrZXk9e3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3N9ICR7aW5kZXggPT09IHdvcmsuc3RhY2subGVuZ3RoIC0gMSA/ICcuJyA6ICcsJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gZGVsYXk9ezAuMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHt3b3JrLmltYWdlcy5tYXAoaW1hZ2UgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrSW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3dvcmsudGl0bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt3b3JrLnRpdGxlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShgLi4vLi4vcHVibGljL2ltYWdlcy8ke3dvcmsuaWR9LyR7aW1hZ2V9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJFeHRlcm5hbExpbmtJY29uIiwiQm94IiwiQ29udGFpbmVyIiwiTGluayIsIkxpc3QiLCJMaXN0SXRlbSIsIlJlYWN0IiwiSW5mbyIsIlBhcmFncmFwaCIsIlNlY3Rpb24iLCJNZXRhIiwiVGl0bGUiLCJXb3JrSW1hZ2UiLCJXb3JrVGVtcGxhdGUiLCJ3b3JrIiwibXQiLCJ0aXRsZSIsInllYXIiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImVudHJ5IiwidG9Mb3dlckNhc2UiLCJocmVmIiwic3RhY2siLCJzIiwiaW5kZXgiLCJsZW5ndGgiLCJkZWxheSIsImltYWdlcyIsImltYWdlIiwiYWx0Iiwic3JjIiwicmVxdWlyZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/workTemplate.js\n"));

/***/ })

});