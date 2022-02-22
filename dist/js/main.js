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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dateRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dateRender */ \"./modules/dateRender.js\");\n\r\n\r\n(0,_modules_dateRender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/dateRender.js":
/*!*******************************!*\
  !*** ./modules/dateRender.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dateRender = () => {\r\n \r\nconst title = document.getElementById('title'),\r\n  titleTime = document.getElementById('title-time'),\r\n  titleNewYear = document.getElementById('title-newyear'),\r\n  week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],\r\n  date = new Date();\r\n\r\n  const declinationFunc = function declinationFunc(n, textForms) {\r\n    if (n > 5 && n < 12) return textForms[0];\r\n    if (n >= 12 && n < 17) return textForms[1];\r\n    if (n >= 17 && n < 20) return textForms[2];\r\n    if (n >= 20 && n <= 23) return textForms[3];\r\n    if (0 <= n && n <= 5) return textForms[3];\r\n  }\r\n\r\n  const declinationDayText = function declinationFunc(n, textForms) {\r\n\r\n    n = Math.abs(n) % 100;\r\n    let n1 = n % 10;\r\n    if (n > 10 && n < 20) return textForms[2];\r\n    if (n1 > 1 && n1 < 5) return textForms[1];\r\n    if (n1 == 1) return textForms[0];\r\n    return textForms[2];\r\n\r\n  }\r\n\r\n  const returnDay = () => {\r\n    const time = new Date().toLocaleTimeString();\r\n    \r\n    return {time}\r\n  }\r\n\r\n  const newYear = (deadline) => {\r\n    \r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timerRemaining = (dateStop - dateNow) / 1000;\r\n\r\n    let days = Math.floor(timerRemaining / 60 / 60 / 24);\r\n\r\n    return days\r\n\r\n  }\r\n\r\n  const renderTimer = () => {\r\n    const t = returnDay();\r\n    const newYearDeadLine = newYear(\"31 december 2022\");\r\n    const dayString = declinationDayText(newYearDeadLine, ['день', 'дня', 'дней']);\r\n    const greeting = declinationFunc(date.getHours(), ['Доброе Утро', 'Добрый день', 'Добрый Вечер', 'Доброй ночи']);\r\n  \r\n    \r\n    title.textContent = `${greeting},  сегодня ${week[date.getMonth()] }`\r\n    titleTime.textContent =  `Текущее время: ${t.time}`;\r\n    titleNewYear.textContent =  `До нового года осталось ${newYearDeadLine} ${dayString}`;\r\n\r\n\r\n  }\r\n\r\n  \r\n  setInterval(renderTimer, 1000);\r\n\r\n  \r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dateRender);\n\n//# sourceURL=webpack:///./modules/dateRender.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;