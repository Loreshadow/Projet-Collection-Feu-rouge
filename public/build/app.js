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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFBQyxZQUFZLEVBQUk7SUFDbEUsSUFBTUMsTUFBTSxHQUFHRCxZQUFZLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUN0RCxJQUFNSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN4QztJQUNJLElBQUlDLE9BQU8sR0FBRyxDQUFDO0lBRWYsU0FBU0MsV0FBV0EsQ0FBQSxFQUFHO01BQ3JCSCxNQUFNLENBQUNGLE9BQU8sQ0FBQyxVQUFDTSxDQUFDLEVBQUVDLENBQUM7UUFBQSxPQUFLRCxDQUFDLENBQUNsQixTQUFTLENBQUNNLE1BQU0sQ0FBQyxRQUFRLEVBQUVhLENBQUMsS0FBS0gsT0FBTyxDQUFDO01BQUEsRUFBQztNQUNyRSxJQUFNSSxLQUFLLEdBQUdMLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDO01BQ2hDQSxPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxHQUFHLENBQUMsSUFBSUYsTUFBTSxDQUFDTyxNQUFNO01BQ3ZDQyxVQUFVLENBQUNMLFdBQVcsRUFBRUcsS0FBSyxDQUFDO0lBQ2hDO0lBRUFILFdBQVcsQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ2xCRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdHJhZmZpYy1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vanMvdHJhZmZpYy1saWdodC5qcyc7XG5pbXBvcnQgJy4vanMvbmF2YmFyLmpzJztcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGhlYWRlclRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWhlYWRlcicpO1xyXG4gIGNvbnN0IGhlYWRlckJvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWhlYWRlcicpO1xyXG4gIGNvbnN0IG5hdmJhclRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXItdG9nZ2xlJyk7XHJcbiAgY29uc3QgZHJvcGRvd25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhci1kcm9wZG93bi1saXN0Jyk7XHJcbiAgY29uc3QgbWFpbkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbmF2YmFyLWxpbmtzJyk7XHJcblxyXG4gIC8vIGdlc3Rpb24gZGUgbCdlZmZldCBwb3VyIGxhIG5hdiBkdSBoYXV0IFxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYod2luZG93LnNjcm9sbFkgPiAzMCkge1xyXG4gICAgICBoZWFkZXJUb3AuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLXNjcm9sbGVkJyk7XHJcbiAgICAgIGlmIChtYWluTGlua3MpIG1haW5MaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAvLyBvbiBhZmZpY2hlIHBsdXMgbGEgbmF2diBkdSBiYXMgYXUgc2Nyb2xsIChzaW5vbiBjJ2VzdCBjaGlhbnQgYSBnw6lyZXIpXHJcbiAgICAgIGlmIChoZWFkZXJCb3R0b20gJiYgd2luZG93LmlubmVyV2lkdGggPiA3MDApIHtcclxuICAgICAgICBoZWFkZXJCb3R0b20uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyVG9wLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1zY3JvbGxlZCcpO1xyXG4gICAgICBpZiAobWFpbkxpbmtzICYmIHdpbmRvdy5pbm5lcldpZHRoID4gOTAwKSBtYWluTGlua3Muc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICBpZiAoZHJvcGRvd25MaXN0KSBkcm9wZG93bkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICBpZiAobmF2YmFyVG9nZ2xlKSBuYXZiYXJUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIC8vIGFmZmljaGUgbGEgbmF2IGR1IGJhcyBzaSBvbiBtb250ZSBzYXVmIHNpIGMnZXN0IHRyb3AgcGV0aXRcclxuICAgICAgaWYgKGhlYWRlckJvdHRvbSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDcwMCkge1xyXG4gICAgICAgIGhlYWRlckJvdHRvbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBib24gYmFoIG9uIG91dnJlIG91IG9uIGZlcm1lIGxlIG1lbnVcclxuICBpZiAobmF2YmFyVG9nZ2xlICYmIGRyb3Bkb3duTGlzdCkge1xyXG4gICAgbmF2YmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkcm9wZG93bkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgICBuYXZiYXJUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHNpIG9uICBjbGlxdWUgcGFzIHN1ciBsYSBuYXYgb3UgdW4gZGVzIHNlcyBlbmZhbnQgb24gZmVybWUgbGUgbWVudSAoQydlc3QgbWFnaXF1ZSBIYXJyeSAhKVxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBkcm9wZG93bkxpc3QgJiZcclxuICAgICAgbmF2YmFyVG9nZ2xlICYmXHJcbiAgICAgICFuYXZiYXJUb2dnbGUuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICFkcm9wZG93bkxpc3QuY29udGFpbnMoZS50YXJnZXQpXHJcbiAgICApIHtcclxuICAgICAgZHJvcGRvd25MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyByZXNwb25zaXZlIGRlcyBuYXZzXHJcbiAgZnVuY3Rpb24gY2hlY2tTY3JlZW5TaXplKCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDcwMCkge1xyXG4gICAgICAvLyBldCBwb3VmIGxhIG1hZ2llIGhhcnJ5IHBsdXMgZGUgbmF2IGR1IGJhcyggc2lub24gbGUgemJldWwgY2Ugc2VyYSBoYXJyeSlcclxuICAgICAgaWYgKGhlYWRlckJvdHRvbSkgaGVhZGVyQm90dG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDkwMCkge1xyXG4gICAgICAvLyBtZW51IGJ1cmdlciBlbiBoYXV0IGV0IG5hdiBjbGFzc2ljIGVuIGJhc1xyXG4gICAgICBpZiAobWFpbkxpbmtzKSBtYWluTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYgKCFoZWFkZXJUb3AuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZiYXItc2Nyb2xsZWQnKSkge1xyXG4gICAgICAgIGlmIChoZWFkZXJCb3R0b20pIGhlYWRlckJvdHRvbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gbmF2IGRlIGJhc2UgZXQgYWZmaWNoYWdlIGRlIGxhIG5hdiBkdSBiYXMgYXVzc2lcclxuICAgICAgaWYgKCFoZWFkZXJUb3AuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZiYXItc2Nyb2xsZWQnKSkge1xyXG4gICAgICAgIGlmIChtYWluTGlua3MpIG1haW5MaW5rcy5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgaWYgKGRyb3Bkb3duTGlzdCkgZHJvcGRvd25MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICBpZiAobmF2YmFyVG9nZ2xlKSBuYXZiYXJUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGhlYWRlckJvdHRvbSkgaGVhZGVyQm90dG9tLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBvbiBjaGVjayBsYSB0YWlsbGUgZGUgbm90cmUgYmVsIGVjcmFuXHJcbiAgY2hlY2tTY3JlZW5TaXplKCk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrU2NyZWVuU2l6ZSk7XHJcbn0pOyIsIi8vIGdlc3Rpb24gZGVzIGZldXggdHJpY29sb3JlIFxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhZmZpYy1saWdodCcpLmZvckVhY2godHJhZmZpY0xpZ2h0ID0+IHtcclxuICAgIGNvbnN0IGxpZ2h0cyA9IHRyYWZmaWNMaWdodC5xdWVyeVNlbGVjdG9yQWxsKCcubGlnaHQnKTtcclxuICAgIGNvbnN0IGR1cmF0aW9ucyA9IFszMDAwLCAyMDAwLCA1MDAwXTtcclxuLy8gICAgICAgICAgICAgICAgICAgIHJvdWdlLCBvcmFuZ2UsIHZlcnRcclxuICAgIGxldCBjdXJyZW50ID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBzd2l0Y2hMaWdodCgpIHtcclxuICAgICAgbGlnaHRzLmZvckVhY2goKGwsIGkpID0+IGwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgaSA9PT0gY3VycmVudCkpO1xyXG4gICAgICBjb25zdCBkZWxheSA9IGR1cmF0aW9uc1tjdXJyZW50XTtcclxuICAgICAgY3VycmVudCA9IChjdXJyZW50ICsgMSkgJSBsaWdodHMubGVuZ3RoO1xyXG4gICAgICBzZXRUaW1lb3V0KHN3aXRjaExpZ2h0LCBkZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoTGlnaHQoKTtcclxuICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZWFkZXJUb3AiLCJnZXRFbGVtZW50QnlJZCIsImhlYWRlckJvdHRvbSIsIm5hdmJhclRvZ2dsZSIsImRyb3Bkb3duTGlzdCIsIm1haW5MaW5rcyIsIndpbmRvdyIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJpbm5lcldpZHRoIiwicmVtb3ZlIiwidG9nZ2xlIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2hlY2tTY3JlZW5TaXplIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0cmFmZmljTGlnaHQiLCJsaWdodHMiLCJkdXJhdGlvbnMiLCJjdXJyZW50Iiwic3dpdGNoTGlnaHQiLCJsIiwiaSIsImRlbGF5IiwibGVuZ3RoIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=