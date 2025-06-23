/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_inputValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/inputValidation */ \"./src/modules/inputValidation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('2 july 2025');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_inputValidation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n//# sourceURL=webpack://less18/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total');\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5;\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n\r\n        total.textContent = totalValue;\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc()\r\n        }\r\n\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://less18/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({ timing, draw, duration }) {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://less18/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/inputValidation.js":
/*!****************************************!*\
  !*** ./src/modules/inputValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inputValidation = () => {\r\n    // проверка на ввод кириллицы в инпуты с type='text' и с плейсхолдером 'ваше сообщение'\r\n    document.querySelectorAll('input[type=\"text\"][placeholder=\"Ваше сообщение\"]').forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.trim().replace(/[^А-Яа-яЁё\\s-]/g, '');\r\n        });\r\n    });\r\n\r\n    // проверка на ввод только латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '\r\n    document.querySelectorAll('input[type=\"email\"]').forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.trim().replace(/[^a-zA-Z0-9@._\\-!~*']/g, '');\r\n        });\r\n    });\r\n\r\n    // проверка на ввод только цифр, круглых скобок и дефис\r\n    document.querySelectorAll('input[type=\"tel\"]').forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.trim().replace(/[^0-9()\\-\\s]/g, '');\r\n        });\r\n    });\r\n\r\n    // проверка на ввод только цифр\r\n    document.querySelectorAll('input.calc-item').forEach(input => {\r\n        input.addEventListener('keydown', (e) => {\r\n            const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];\r\n            if (!e.key.match(/^\\d$/) && !allowedKeys.includes(e.key)) {\r\n                e.preventDefault();\r\n            }\r\n        });\r\n\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(/\\D/g, '');\r\n        });\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputValidation);\n\n//# sourceURL=webpack://less18/./src/modules/inputValidation.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n\r\n    const toggleMenu = (e) => {\r\n        // клик по кнопке \"меню\"\r\n        if (e.target === menuBtn || menuBtn.contains(e.target)) {\r\n            menu.classList.toggle('active-menu');\r\n            return;\r\n        }\r\n\r\n        // клик по пунктам в меню\r\n        if (e.target.closest('ul > li > a')) {\r\n            menu.classList.remove('active-menu');\r\n            return;\r\n        }\r\n\r\n        // клик по крестику в меню\r\n        if (e.target.closest('.close-btn')) {\r\n            menu.classList.remove('active-menu');\r\n            return;\r\n        }\r\n\r\n        // клик вне меню\r\n        if (!menu.contains(e.target)) {\r\n            menu.classList.remove('active-menu')\r\n        }\r\n    }\r\n\r\n    document.addEventListener('click', toggleMenu);\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://less18/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            showModal();\r\n        })\r\n    })\r\n\r\n    function showModal() {\r\n        modal.style.display = 'block';\r\n        modal.style.opacity = 0;\r\n\r\n        // мобильное устройство без анимации\r\n        if (window.innerWidth < 768) return;\r\n\r\n        // анимация появления модального окна\r\n        setTimeout(() => {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    modal.style.opacity = progress;\r\n                }\r\n            });\r\n        }, 700);\r\n    }\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.opacity = 0;\r\n            modal.style.display = 'none';\r\n        };\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://less18/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content');\r\n    const slides = document.querySelectorAll('.portfolio-item');\r\n    let dots = document.querySelectorAll('.dot');\r\n    const dotsWrapper = document.querySelector('.portfolio-dots');\r\n\r\n    const timeInterval = 2000;\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    // Функция для создания точек под количество слайдов\r\n    const generateDots = () => {\r\n        dotsWrapper.innerHTML = '';\r\n        slides.forEach((_, index) => {\r\n            const dot = document.createElement('li');\r\n            dot.className = 'dot';\r\n            if (index === 0) {\r\n                dot.classList.add('dot-active');\r\n            }\r\n            dotsWrapper.appendChild(dot);\r\n        });\r\n        dots = document.querySelectorAll('.dot');\r\n    };\r\n\r\n    generateDots(); // Вызов генерации точек\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    }\r\n\r\n    // Автоматическая смена слайдов\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n        currentSlide++;\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    }\r\n\r\n    // Запуск автоперелистывания\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    // Остановка автоперелистывания\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    }\r\n\r\n    // Обработка кликов по кнопкам и точкам\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return;\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.matches('.dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    })\r\n\r\n    // При наведении мыши — остановка автоперелистывания\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval);\r\n        }\r\n    }, true)\r\n\r\n    startSlide(timeInterval);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://less18/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            })\r\n        }\r\n\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://less18/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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