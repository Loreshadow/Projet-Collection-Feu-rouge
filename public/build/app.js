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
  var headerTop = document.getElementById('main-header');
  var headerBottom = document.getElementById('user-header');
  var navbarToggle = document.getElementById('navbar-toggle');
  var dropdownList = document.getElementById('navbar-dropdown-list');
  var mainLinks = document.getElementById('main-navbar-links');

  // gestion de l'effet pour la nav du haut 
  document.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
      headerTop.classList.add('navbar-scrolled');
      if (mainLinks) mainLinks.style.display = 'none';
      // on affiche plus la navv du bas au scroll (sinon c'est chiant a gérer)
      if (headerBottom && window.innerWidth > 700) {
        headerBottom.style.display = 'none';
      }
    } else {
      headerTop.classList.remove('navbar-scrolled');
      if (mainLinks && window.innerWidth > 900) mainLinks.style.display = '';
      if (dropdownList) dropdownList.classList.remove('open');
      if (navbarToggle) navbarToggle.classList.remove('active');
      // affiche la nav du bas si on monte sauf si c'est trop petit
      if (headerBottom && window.innerWidth > 700) {
        headerBottom.style.display = 'block';
      }
    }
  });

  // bon bah on ouvre ou on ferme le menu
  if (navbarToggle && dropdownList) {
    navbarToggle.addEventListener('click', function () {
      dropdownList.classList.toggle('open');
      navbarToggle.classList.toggle('active');
    });
  }

  // si on  clique pas sur la nav ou un des ses enfant on ferme le menu (C'est magique Harry !)
  document.addEventListener('click', function (e) {
    if (dropdownList && navbarToggle && !navbarToggle.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.classList.remove('open');
      navbarToggle.classList.remove('active');
    }
  });

  // responsive des navs
  function checkScreenSize() {
    if (window.innerWidth <= 700) {
      // et pouf la magie harry plus de nav du bas( sinon le zbeul ce sera harry)
      if (headerBottom) headerBottom.style.display = 'none';
    } else if (window.innerWidth <= 900) {
      // menu burger en haut et nav classic en bas
      if (mainLinks) mainLinks.style.display = 'none';
      if (!headerTop.classList.contains('navbar-scrolled')) {
        if (headerBottom) headerBottom.style.display = 'block';
      }
    } else {
      // nav de base et affichage de la nav du bas aussi
      if (!headerTop.classList.contains('navbar-scrolled')) {
        if (mainLinks) mainLinks.style.display = '';
        if (dropdownList) dropdownList.classList.remove('open');
        if (navbarToggle) navbarToggle.classList.remove('active');
        if (headerBottom) headerBottom.style.display = 'block';
      }
    }
  }

  // on check la taille de notre bel ecran
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFBQyxZQUFZLEVBQUk7SUFDbEUsSUFBTUMsTUFBTSxHQUFHRCxZQUFZLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUN0RCxJQUFNSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN4QztJQUNJLElBQUlDLE9BQU8sR0FBRyxDQUFDO0lBRWYsU0FBU0MsV0FBV0EsQ0FBQSxFQUFHO01BQ3JCSCxNQUFNLENBQUNGLE9BQU8sQ0FBQyxVQUFDTSxDQUFDLEVBQUVDLENBQUM7UUFBQSxPQUFLRCxDQUFDLENBQUNsQixTQUFTLENBQUNNLE1BQU0sQ0FBQyxRQUFRLEVBQUVhLENBQUMsS0FBS0gsT0FBTyxDQUFDO01BQUEsRUFBQztNQUNyRSxJQUFNSSxLQUFLLEdBQUdMLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDO01BQ2hDQSxPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxHQUFHLENBQUMsSUFBSUYsTUFBTSxDQUFDTyxNQUFNO01BQ3ZDQyxVQUFVLENBQUNMLFdBQVcsRUFBRUcsS0FBSyxDQUFDO0lBQ2hDO0lBRUFILFdBQVcsQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ2xCRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdHJhZmZpYy1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL2pzL3RyYWZmaWMtbGlnaHQuanMnO1xuaW1wb3J0ICcuL2pzL25hdmJhci5qcyc7XG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBoZWFkZXJUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1oZWFkZXInKTtcclxuICBjb25zdCBoZWFkZXJCb3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1oZWFkZXInKTtcclxuICBjb25zdCBuYXZiYXJUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyLXRvZ2dsZScpO1xyXG4gIGNvbnN0IGRyb3Bkb3duTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXItZHJvcGRvd24tbGlzdCcpO1xyXG4gIGNvbnN0IG1haW5MaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLW5hdmJhci1saW5rcycpO1xyXG5cclxuICAvLyBnZXN0aW9uIGRlIGwnZWZmZXQgcG91ciBsYSBuYXYgZHUgaGF1dCBcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgIGlmKHdpbmRvdy5zY3JvbGxZID4gMzApIHtcclxuICAgICAgaGVhZGVyVG9wLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1zY3JvbGxlZCcpO1xyXG4gICAgICBpZiAobWFpbkxpbmtzKSBtYWluTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgLy8gb24gYWZmaWNoZSBwbHVzIGxhIG5hdnYgZHUgYmFzIGF1IHNjcm9sbCAoc2lub24gYydlc3QgY2hpYW50IGEgZ8OpcmVyKVxyXG4gICAgICBpZiAoaGVhZGVyQm90dG9tICYmIHdpbmRvdy5pbm5lcldpZHRoID4gNzAwKSB7XHJcbiAgICAgICAgaGVhZGVyQm90dG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlclRvcC5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItc2Nyb2xsZWQnKTtcclxuICAgICAgaWYgKG1haW5MaW5rcyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMCkgbWFpbkxpbmtzLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgaWYgKGRyb3Bkb3duTGlzdCkgZHJvcGRvd25MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgaWYgKG5hdmJhclRvZ2dsZSkgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAvLyBhZmZpY2hlIGxhIG5hdiBkdSBiYXMgc2kgb24gbW9udGUgc2F1ZiBzaSBjJ2VzdCB0cm9wIHBldGl0XHJcbiAgICAgIGlmIChoZWFkZXJCb3R0b20gJiYgd2luZG93LmlubmVyV2lkdGggPiA3MDApIHtcclxuICAgICAgICBoZWFkZXJCb3R0b20uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gYm9uIGJhaCBvbiBvdXZyZSBvdSBvbiBmZXJtZSBsZSBtZW51XHJcbiAgaWYgKG5hdmJhclRvZ2dsZSAmJiBkcm9wZG93bkxpc3QpIHtcclxuICAgIG5hdmJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZHJvcGRvd25MaXN0LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgICAgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBzaSBvbiAgY2xpcXVlIHBhcyBzdXIgbGEgbmF2IG91IHVuIGRlcyBzZXMgZW5mYW50IG9uIGZlcm1lIGxlIG1lbnUgKEMnZXN0IG1hZ2lxdWUgSGFycnkgISlcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmIChcclxuICAgICAgZHJvcGRvd25MaXN0ICYmXHJcbiAgICAgIG5hdmJhclRvZ2dsZSAmJlxyXG4gICAgICAhbmF2YmFyVG9nZ2xlLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAhZHJvcGRvd25MaXN0LmNvbnRhaW5zKGUudGFyZ2V0KVxyXG4gICAgKSB7XHJcbiAgICAgIGRyb3Bkb3duTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgIG5hdmJhclRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gcmVzcG9uc2l2ZSBkZXMgbmF2c1xyXG4gIGZ1bmN0aW9uIGNoZWNrU2NyZWVuU2l6ZSgpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3MDApIHtcclxuICAgICAgLy8gZXQgcG91ZiBsYSBtYWdpZSBoYXJyeSBwbHVzIGRlIG5hdiBkdSBiYXMoIHNpbm9uIGxlIHpiZXVsIGNlIHNlcmEgaGFycnkpXHJcbiAgICAgIGlmIChoZWFkZXJCb3R0b20pIGhlYWRlckJvdHRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA5MDApIHtcclxuICAgICAgLy8gbWVudSBidXJnZXIgZW4gaGF1dCBldCBuYXYgY2xhc3NpYyBlbiBiYXNcclxuICAgICAgaWYgKG1haW5MaW5rcykgbWFpbkxpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmICghaGVhZGVyVG9wLmNsYXNzTGlzdC5jb250YWlucygnbmF2YmFyLXNjcm9sbGVkJykpIHtcclxuICAgICAgICBpZiAoaGVhZGVyQm90dG9tKSBoZWFkZXJCb3R0b20uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIG5hdiBkZSBiYXNlIGV0IGFmZmljaGFnZSBkZSBsYSBuYXYgZHUgYmFzIGF1c3NpXHJcbiAgICAgIGlmICghaGVhZGVyVG9wLmNsYXNzTGlzdC5jb250YWlucygnbmF2YmFyLXNjcm9sbGVkJykpIHtcclxuICAgICAgICBpZiAobWFpbkxpbmtzKSBtYWluTGlua3Muc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIGlmIChkcm9wZG93bkxpc3QpIGRyb3Bkb3duTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgaWYgKG5hdmJhclRvZ2dsZSkgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGlmIChoZWFkZXJCb3R0b20pIGhlYWRlckJvdHRvbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gb24gY2hlY2sgbGEgdGFpbGxlIGRlIG5vdHJlIGJlbCBlY3JhblxyXG4gIGNoZWNrU2NyZWVuU2l6ZSgpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGVja1NjcmVlblNpemUpO1xyXG59KTsiLCIvLyBnZXN0aW9uIGRlcyBmZXV4IHRyaWNvbG9yZSBcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYWZmaWMtbGlnaHQnKS5mb3JFYWNoKHRyYWZmaWNMaWdodCA9PiB7XHJcbiAgICBjb25zdCBsaWdodHMgPSB0cmFmZmljTGlnaHQucXVlcnlTZWxlY3RvckFsbCgnLmxpZ2h0Jyk7XHJcbiAgICBjb25zdCBkdXJhdGlvbnMgPSBbMzAwMCwgMjAwMCwgNTAwMF07XHJcbi8vICAgICAgICAgICAgICAgICAgICByb3VnZSwgb3JhbmdlLCB2ZXJ0XHJcbiAgICBsZXQgY3VycmVudCA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoTGlnaHQoKSB7XHJcbiAgICAgIGxpZ2h0cy5mb3JFYWNoKChsLCBpKSA9PiBsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGkgPT09IGN1cnJlbnQpKTtcclxuICAgICAgY29uc3QgZGVsYXkgPSBkdXJhdGlvbnNbY3VycmVudF07XHJcbiAgICAgIGN1cnJlbnQgPSAoY3VycmVudCArIDEpICUgbGlnaHRzLmxlbmd0aDtcclxuICAgICAgc2V0VGltZW91dChzd2l0Y2hMaWdodCwgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaExpZ2h0KCk7XHJcbiAgfSk7XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGVhZGVyVG9wIiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkZXJCb3R0b20iLCJuYXZiYXJUb2dnbGUiLCJkcm9wZG93bkxpc3QiLCJtYWluTGlua3MiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5IiwiaW5uZXJXaWR0aCIsInJlbW92ZSIsInRvZ2dsZSIsImUiLCJjb250YWlucyIsInRhcmdldCIsImNoZWNrU2NyZWVuU2l6ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidHJhZmZpY0xpZ2h0IiwibGlnaHRzIiwiZHVyYXRpb25zIiwiY3VycmVudCIsInN3aXRjaExpZ2h0IiwibCIsImkiLCJkZWxheSIsImxlbmd0aCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9