(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_traffic_light_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/traffic-light.js */ "./assets/js/traffic-light.js");
/* harmony import */ var _js_traffic_light_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_traffic_light_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/navbar.js */ "./assets/js/navbar.js");
/* harmony import */ var _js_navbar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_navbar_js__WEBPACK_IMPORTED_MODULE_2__);
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */



console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/js/navbar.js":
/*!*****************************!*\
  !*** ./assets/js/navbar.js ***!
  \*****************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.navbar-burger');
  var menuResponsive = document.querySelector('.navbar-menu-responsive');
  if (burger && menuResponsive) {
    burger.addEventListener('click', function () {
      menuResponsive.classList.toggle('navbar-open');
      burger.classList.toggle('active');
    });
  }
});

/***/ }),

/***/ "./assets/js/traffic-light.js":
/*!************************************!*\
  !*** ./assets/js/traffic-light.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// gestion des feux tricolore 

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.traffic-light').forEach(function (trafficLight) {
    var lights = trafficLight.querySelectorAll('.light');
    var durations = [3000, 2000, 5000];
    //                    rouge, orange, vert
    var current = 0;
    function switchLight() {
      lights.forEach(function (l, i) {
        return l.classList.toggle('active', i === current);
      });
      var delay = durations[current];
      current = (current + 1) % lights.length;
      setTimeout(switchLight, delay);
    }
    switchLight();
  });
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-b188a0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ0k7QUFDUDtBQUN4QkEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQzs7Ozs7Ozs7OztBQ1Y3RUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3hELElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDdkQsSUFBTUMsY0FBYyxHQUFHSixRQUFRLENBQUNHLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztFQUV4RSxJQUFJRCxNQUFNLElBQUlFLGNBQWMsRUFBRTtJQUM1QkYsTUFBTSxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUMzQ0csY0FBYyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDOUNKLE1BQU0sQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRjs7QUFFQU4sUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xERCxRQUFRLENBQUNPLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxZQUFZLEVBQUk7SUFDbEUsSUFBTUMsTUFBTSxHQUFHRCxZQUFZLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUN0RCxJQUFNSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN4QztJQUNJLElBQUlDLE9BQU8sR0FBRyxDQUFDO0lBRWYsU0FBU0MsV0FBV0EsQ0FBQSxFQUFHO01BQ3JCSCxNQUFNLENBQUNGLE9BQU8sQ0FBQyxVQUFDTSxDQUFDLEVBQUVDLENBQUM7UUFBQSxPQUFLRCxDQUFDLENBQUNULFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRVMsQ0FBQyxLQUFLSCxPQUFPLENBQUM7TUFBQSxFQUFDO01BQ3JFLElBQU1JLEtBQUssR0FBR0wsU0FBUyxDQUFDQyxPQUFPLENBQUM7TUFDaENBLE9BQU8sR0FBRyxDQUFDQSxPQUFPLEdBQUcsQ0FBQyxJQUFJRixNQUFNLENBQUNPLE1BQU07TUFDdkNDLFVBQVUsQ0FBQ0wsV0FBVyxFQUFFRyxLQUFLLENBQUM7SUFDaEM7SUFFQUgsV0FBVyxDQUFDLENBQUM7RUFDZixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDbEJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90cmFmZmljLWxpZ2h0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9qcy90cmFmZmljLWxpZ2h0LmpzJztcbmltcG9ydCAnLi9qcy9uYXZiYXIuanMnO1xuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1idXJnZXInKTtcclxuICBjb25zdCBtZW51UmVzcG9uc2l2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbWVudS1yZXNwb25zaXZlJyk7XHJcblxyXG4gIGlmIChidXJnZXIgJiYgbWVudVJlc3BvbnNpdmUpIHtcclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWVudVJlc3BvbnNpdmUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLW9wZW4nKTtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTsiLCIvLyBnZXN0aW9uIGRlcyBmZXV4IHRyaWNvbG9yZSBcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYWZmaWMtbGlnaHQnKS5mb3JFYWNoKHRyYWZmaWNMaWdodCA9PiB7XHJcbiAgICBjb25zdCBsaWdodHMgPSB0cmFmZmljTGlnaHQucXVlcnlTZWxlY3RvckFsbCgnLmxpZ2h0Jyk7XHJcbiAgICBjb25zdCBkdXJhdGlvbnMgPSBbMzAwMCwgMjAwMCwgNTAwMF07XHJcbi8vICAgICAgICAgICAgICAgICAgICByb3VnZSwgb3JhbmdlLCB2ZXJ0XHJcbiAgICBsZXQgY3VycmVudCA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoTGlnaHQoKSB7XHJcbiAgICAgIGxpZ2h0cy5mb3JFYWNoKChsLCBpKSA9PiBsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGkgPT09IGN1cnJlbnQpKTtcclxuICAgICAgY29uc3QgZGVsYXkgPSBkdXJhdGlvbnNbY3VycmVudF07XHJcbiAgICAgIGN1cnJlbnQgPSAoY3VycmVudCArIDEpICUgbGlnaHRzLmxlbmd0aDtcclxuICAgICAgc2V0VGltZW91dChzd2l0Y2hMaWdodCwgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaExpZ2h0KCk7XHJcbiAgfSk7XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnVyZ2VyIiwicXVlcnlTZWxlY3RvciIsIm1lbnVSZXNwb25zaXZlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0cmFmZmljTGlnaHQiLCJsaWdodHMiLCJkdXJhdGlvbnMiLCJjdXJyZW50Iiwic3dpdGNoTGlnaHQiLCJsIiwiaSIsImRlbGF5IiwibGVuZ3RoIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=