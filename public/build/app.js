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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ0k7QUFDUDtBQUN4QkEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQzs7Ozs7Ozs7OztBQ1Y3RUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3hELElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDdkQsSUFBTUMsY0FBYyxHQUFHSixRQUFRLENBQUNHLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztFQUV4RSxJQUFJRCxNQUFNLElBQUlFLGNBQWMsRUFBRTtJQUM1QkYsTUFBTSxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUMzQ0csY0FBYyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDOUNKLE1BQU0sQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRjs7QUFFQU4sUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xERCxRQUFRLENBQUNPLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxZQUFZLEVBQUk7SUFDbEUsSUFBTUMsTUFBTSxHQUFHRCxZQUFZLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUN0RCxJQUFNSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN4QztJQUNJLElBQUlDLE9BQU8sR0FBRyxDQUFDO0lBRWYsU0FBU0MsV0FBV0EsQ0FBQSxFQUFHO01BQ3JCSCxNQUFNLENBQUNGLE9BQU8sQ0FBQyxVQUFDTSxDQUFDLEVBQUVDLENBQUM7UUFBQSxPQUFLRCxDQUFDLENBQUNULFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRVMsQ0FBQyxLQUFLSCxPQUFPLENBQUM7TUFBQSxFQUFDO01BQ3JFLElBQU1JLEtBQUssR0FBR0wsU0FBUyxDQUFDQyxPQUFPLENBQUM7TUFDaENBLE9BQU8sR0FBRyxDQUFDQSxPQUFPLEdBQUcsQ0FBQyxJQUFJRixNQUFNLENBQUNPLE1BQU07TUFDdkNDLFVBQVUsQ0FBQ0wsV0FBVyxFQUFFRyxLQUFLLENBQUM7SUFDaEM7SUFFQUgsV0FBVyxDQUFDLENBQUM7RUFDZixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDbEJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90cmFmZmljLWxpZ2h0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vanMvdHJhZmZpYy1saWdodC5qcyc7XG5pbXBvcnQgJy4vanMvbmF2YmFyLmpzJztcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItYnVyZ2VyJyk7XHJcbiAgY29uc3QgbWVudVJlc3BvbnNpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLW1lbnUtcmVzcG9uc2l2ZScpO1xyXG5cclxuICBpZiAoYnVyZ2VyICYmIG1lbnVSZXNwb25zaXZlKSB7XHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1lbnVSZXNwb25zaXZlLmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci1vcGVuJyk7XHJcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7IiwiLy8gZ2VzdGlvbiBkZXMgZmV1eCB0cmljb2xvcmUgXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFmZmljLWxpZ2h0JykuZm9yRWFjaCh0cmFmZmljTGlnaHQgPT4ge1xyXG4gICAgY29uc3QgbGlnaHRzID0gdHJhZmZpY0xpZ2h0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWdodCcpO1xyXG4gICAgY29uc3QgZHVyYXRpb25zID0gWzMwMDAsIDIwMDAsIDUwMDBdO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgcm91Z2UsIG9yYW5nZSwgdmVydFxyXG4gICAgbGV0IGN1cnJlbnQgPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaExpZ2h0KCkge1xyXG4gICAgICBsaWdodHMuZm9yRWFjaCgobCwgaSkgPT4gbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBpID09PSBjdXJyZW50KSk7XHJcbiAgICAgIGNvbnN0IGRlbGF5ID0gZHVyYXRpb25zW2N1cnJlbnRdO1xyXG4gICAgICBjdXJyZW50ID0gKGN1cnJlbnQgKyAxKSAlIGxpZ2h0cy5sZW5ndGg7XHJcbiAgICAgIHNldFRpbWVvdXQoc3dpdGNoTGlnaHQsIGRlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hMaWdodCgpO1xyXG4gIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1cmdlciIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51UmVzcG9uc2l2ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidHJhZmZpY0xpZ2h0IiwibGlnaHRzIiwiZHVyYXRpb25zIiwiY3VycmVudCIsInN3aXRjaExpZ2h0IiwibCIsImkiLCJkZWxheSIsImxlbmd0aCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9