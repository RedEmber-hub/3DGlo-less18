/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_priceCalculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/priceCalculator */ \"./src/modules/priceCalculator.js\");\n/* harmony import */ var _modules_priceCalculator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_priceCalculator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_inputValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/inputValidation */ \"./src/modules/inputValidation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('2 july 2025');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n_modules_priceCalculator__WEBPACK_IMPORTED_MODULE_3___default()();\r\n(0,_modules_inputValidation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://less18/./src/index.js?");

/***/ }),

/***/ "./src/modules/inputValidation.js":
/*!****************************************!*\
  !*** ./src/modules/inputValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inputValidation = () => {\r\n    // проверка на ввод кириллицы в инпуты с type='text' и с плейсхолдером 'ваше сообщение'\r\n    document.querySelectorAll('input[type=\"text\"][placeholder=\"Ваше сообщение\"]').forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.trim().replace(/[^А-Яа-яЁё\\s-]/g, '');\r\n        });\r\n    });\r\n\r\n    // проверка на ввод только латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '\r\n    document.querySelectorAll('input[type=\"email\"]').forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.trim().replace(/[^a-zA-Z0-9@._\\-!~*']/g, '');\r\n        });\r\n    });\r\n\r\n    // проверка на ввод только цифр, круглых скобок и дефис\r\n    document.querySelectorAll('input[type=\"tel\"]').forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.trim().replace(/[^0-9()\\-\\s]/g, '');\r\n        });\r\n    });\r\n\r\n    // проверка на ввод только цифр\r\n    document.querySelectorAll('input.calc-item').forEach(input => {\r\n        input.addEventListener('keydown', (e) => {\r\n            const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];\r\n            if (!e.key.match(/^\\d$/) && !allowedKeys.includes(e.key)) {\r\n                e.preventDefault();\r\n            }\r\n        });\r\n\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(/\\D/g, '');\r\n        });\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputValidation);\n\n//# sourceURL=webpack://less18/./src/modules/inputValidation.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtn.addEventListener('click', () => {\r\n        handleMenu();\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        handleMenu();\r\n    })\r\n\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://less18/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            showModal();\r\n        })\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none';\r\n    })\r\n\r\n    function showModal() {\r\n        modal.style.display = 'block';\r\n        let opacity = 0;\r\n\r\n        // мобильное устройство без анимации\r\n        if (window.innerWidth < 768) {\r\n            modal.style.display = 'block';\r\n            return;\r\n        }\r\n\r\n        function fadeIn() {\r\n            opacity += 0.05;\r\n            modal.style.opacity = opacity;\r\n            if (opacity < 1) requestAnimationFrame(fadeIn);\r\n        }\r\n\r\n        requestAnimationFrame(fadeIn);\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://less18/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/priceCalculator.js":
/*!****************************************!*\
  !*** ./src/modules/priceCalculator.js ***!
  \****************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://less18/./src/modules/priceCalculator.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        // let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor(timeRemaining / 60 / 60) //% 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {\r\n            timeRemaining,\r\n            hours, minutes, seconds\r\n        }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(setIntervalTimer);\r\n\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n        } else {\r\n            timerHours.textContent = String(getTime.hours).padStart(2, '0');\r\n            timerMinutes.textContent = String(getTime.minutes).padStart(2, '0');\r\n            timerSeconds.textContent = String(getTime.seconds).padStart(2, '0');\r\n        }\r\n    }\r\n\r\n    const setIntervalTimer = setInterval(updateClock, 1000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://less18/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;