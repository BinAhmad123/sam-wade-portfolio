/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/AppContextFolder/AppContext.tsx":
/*!****************************************************!*\
  !*** ./components/AppContextFolder/AppContext.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLDJCQUFhRCxvREFBYUEsQ0FBQztBQUVqQyxpRUFBZUMsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnNpdGUvLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dC50c3g/ZWRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJBcHBDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppContextFolder/AppContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\n/* harmony import */ var _components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppContextFolder/AppContext */ \"./components/AppContextFolder/AppContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__]);\n_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const timerCookie = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const windowSizeTrackerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const mousePositionRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const [sharedState, setSharedState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        portfolio: {\n            NavBar: {\n                IntervalEvent: null,\n                scrolling: null,\n                scrollSizeY: null\n            },\n            Scrolling: {\n                IntervalEvent: null\n            }\n        },\n        userdata: {\n            timerCookieRef: timerCookie,\n            windowSizeTracker: windowSizeTrackerRef,\n            mousePositionTracker: mousePositionRef\n        },\n        typing: {\n            keyboardEvent: null,\n            eventInputLostFocus: null\n        },\n        finishedLoading: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            sharedState,\n            setSharedState\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\Work-a\\\\pro\\\\sam-wade-portfolio-main\\\\pages\\\\_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__.Analytics, {}, void 0, false, {\n                fileName: \"E:\\\\Work-a\\\\pro\\\\sam-wade-portfolio-main\\\\pages\\\\_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Work-a\\\\pro\\\\sam-wade-portfolio-main\\\\pages\\\\_app.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3FCO0FBQ2U7QUFDMUI7QUFFekMsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxjQUFjTCw2Q0FBTUEsQ0FBQztJQUMzQixNQUFNTSx1QkFBdUJOLDZDQUFNQSxDQUFDO0lBQ3BDLE1BQU1PLG1CQUFtQlAsNkNBQU1BLENBQUM7SUFDaEMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO1FBQzdDUyxXQUFXO1lBQ1RDLFFBQVE7Z0JBQ05DLGVBQWU7Z0JBQ2ZDLFdBQVc7Z0JBQ1hDLGFBQWE7WUFDZjtZQUNBQyxXQUFVO2dCQUNSSCxlQUFjO1lBQ2hCO1FBQ0Y7UUFDQUksVUFBVTtZQUNSQyxnQkFBZ0JaO1lBQ2hCYSxtQkFBbUJaO1lBQ25CYSxzQkFBc0JaO1FBQ3hCO1FBQ0FhLFFBQVE7WUFDTkMsZUFBZTtZQUNmQyxxQkFBcUI7UUFDdkI7UUFDQUMsaUJBQWlCO0lBQ25CO0lBQ0EscUJBQ0UsOERBQUN4Qix3RkFBbUI7UUFBQzBCLE9BQU87WUFBRWpCO1lBQWFDO1FBQWU7OzBCQUN4RCw4REFBQ047Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ04sOERBQVNBOzs7Ozs7Ozs7OztBQUdoQjtBQUVBLGlFQUFlSSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBBbmFseXRpY3MgfSBmcm9tICdAdmVyY2VsL2FuYWx5dGljcy9yZWFjdCc7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBDb250ZXh0Rm9sZGVyL0FwcENvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHRpbWVyQ29va2llID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3aW5kb3dTaXplVHJhY2tlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbW91c2VQb3NpdGlvblJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3NoYXJlZFN0YXRlLCBzZXRTaGFyZWRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgcG9ydGZvbGlvOiB7XG4gICAgICBOYXZCYXI6IHtcbiAgICAgICAgSW50ZXJ2YWxFdmVudDogbnVsbCxcbiAgICAgICAgc2Nyb2xsaW5nOiBudWxsLFxuICAgICAgICBzY3JvbGxTaXplWTogbnVsbCxcbiAgICAgIH0sXG4gICAgICBTY3JvbGxpbmc6e1xuICAgICAgICBJbnRlcnZhbEV2ZW50Om51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZXJkYXRhOiB7XG4gICAgICB0aW1lckNvb2tpZVJlZjogdGltZXJDb29raWUsXG4gICAgICB3aW5kb3dTaXplVHJhY2tlcjogd2luZG93U2l6ZVRyYWNrZXJSZWYsXG4gICAgICBtb3VzZVBvc2l0aW9uVHJhY2tlcjogbW91c2VQb3NpdGlvblJlZixcbiAgICB9LFxuICAgIHR5cGluZzoge1xuICAgICAga2V5Ym9hcmRFdmVudDogbnVsbCxcbiAgICAgIGV2ZW50SW5wdXRMb3N0Rm9jdXM6IG51bGwsXG4gICAgfSxcbiAgICBmaW5pc2hlZExvYWRpbmc6IGZhbHNlLFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzaGFyZWRTdGF0ZSwgc2V0U2hhcmVkU3RhdGUgfX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8QW5hbHl0aWNzIC8+XG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBbmFseXRpY3MiLCJBcHBDb250ZXh0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpbWVyQ29va2llIiwid2luZG93U2l6ZVRyYWNrZXJSZWYiLCJtb3VzZVBvc2l0aW9uUmVmIiwic2hhcmVkU3RhdGUiLCJzZXRTaGFyZWRTdGF0ZSIsInBvcnRmb2xpbyIsIk5hdkJhciIsIkludGVydmFsRXZlbnQiLCJzY3JvbGxpbmciLCJzY3JvbGxTaXplWSIsIlNjcm9sbGluZyIsInVzZXJkYXRhIiwidGltZXJDb29raWVSZWYiLCJ3aW5kb3dTaXplVHJhY2tlciIsIm1vdXNlUG9zaXRpb25UcmFja2VyIiwidHlwaW5nIiwia2V5Ym9hcmRFdmVudCIsImV2ZW50SW5wdXRMb3N0Rm9jdXMiLCJmaW5pc2hlZExvYWRpbmciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();