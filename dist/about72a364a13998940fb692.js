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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-project/./src/css/main.css?");

/***/ }),

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n\n\n\n\n\n\nconst queryString = window.location.search\nconst urlParams = new URLSearchParams(queryString)\nconst country = urlParams.get('country')\nconst countryAPI = `https://restcountries.com/v3.1/${country}`\n\n;(0,_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(countryAPI).then((data)=> {\n    ;(0,_updateUI__WEBPACK_IMPORTED_MODULE_3__.createCountryInfo)(data[0])\n}).catch((err)=> {\n    alert(err.message)\n})\n\n//# sourceURL=webpack://webpack-project/./src/js/about.js?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loaderEl = document.querySelector('.loader')\n\nconst loaderToggle = (isLoader)=> {\n    if(isLoader) {\n        loaderEl.classList.remove('hidden')\n    }else {\n        loaderEl.classList.add('hidden')\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderToggle);\n\n//# sourceURL=webpack://webpack-project/./src/js/loader.js?");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ (() => {

eval("const modeBtn = document.querySelector('.header__dark-mode')\nconst body = document.querySelector('body')\nconst modeLocal = localStorage.getItem('mode') ? localStorage.getItem('mode') : null\n\n\nmodeBtn.addEventListener('click', ()=> {\n    body.classList.toggle('dark-mode')\n    modeLocal ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark-mode')\n})\n\nif(modeLocal) {\n    body.classList.add('dark-mode')\n}\n\n//# sourceURL=webpack://webpack-project/./src/js/mode.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\nconst request = async (API)=> {\n    (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true)\n    const res = await fetch(API)\n    if(!res.ok) {\n        (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false)\n        throw new Error(\"Something went WRONG !\")\n    }\n    const datas = await res.json()\n    ;(0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false)\n    return datas\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n//# sourceURL=webpack://webpack-project/./src/js/request.js?");

/***/ }),

/***/ "./src/js/updateUI.js":
/*!****************************!*\
  !*** ./src/js/updateUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCountries: () => (/* binding */ createCountries),\n/* harmony export */   createCountryInfo: () => (/* binding */ createCountryInfo)\n/* harmony export */ });\nconst cardsEl = document.querySelector('.cards')\n\nconst createCountries = (countries)=> {\n    cardsEl.innerHTML = ''\n    countries.forEach((country)=> {\n        const commonName = country.name.common\n        const population = country.population\n        const region = country.region\n        const capital = country.capital ? country.capital[0] : \"No capital\"\n        const flag = country.flags.svg\n\n        // li\n        const li = document.createElement('li')\n        li.classList.add('cards__item')\n\n        li.innerHTML = `\n            <a href=\"./about.html?country=/name/${commonName}\">\n                <img src=${flag} alt=\"germany-flag\" width=\"267\" height=\"160\">\n                <div class=\"cards__item-inner\">\n                    <h3 class=\"cards__title\">${commonName}</h3>\n                    <p class=\"population\">Population: <span>${population}</span></p>\n                    <p class=\"region\">Region: <span>${region}</span></p>\n                    <p class=\"capital\">Capital: <span>${capital}</span></p>\n                </div>\n            </a>\n        `\n        cardsEl.appendChild(li)\n\n    })\n}\n\n// About UI\n\nconst countryInfoEl = document.querySelector('.country-info')\n\nconst createCountryInfo = (country)=> {\n    const {population, borders, capital, flags, name, region, tld, currencies, languages, subregion} = country\n\n    const nativeName = Object.values(name.nativeName)[0].official\n    const currency = Object.values(currencies)[0].name\n    const language = Object.values(languages)\n\n    countryInfoEl.innerHTML = `\n\n            <img class=\"country-info__img\" src=${flags.svg} alt=\"germany-flag\" width=\"560\" height=\"400\"/>\n            <div class=\"country-info__content\">\n                <h2>${name.common}</h2>\n                <ul class=\"country-info__list\">\n                    <li class=\"country-info__item\">\n                        <p class=\"name\">\n                        Native Name: \n                        <span>${nativeName}</span>\n                        </p>\n                        <p class=\"population\">\n                        Population:\n                        <span>${population}</span>\n                        </p>\n                        <p class=\"region\">\n                        Region:\n                        <span>${region}</span>\n                        </p>\n                        <p class=\"sub-region\">\n                        Sub Region:\n                        <span>${subregion}</span>\n                        </p>\n                        <p class=\"capital\">\n                        Capital:\n                        <span>${capital}</span>\n                        </p>\n                    </li>\n                    <li class=\"country-info__item\">\n                        <p class=\"name\">\n                        Top Level Domain:\n                        <span>${tld}</span>\n                        </p>\n                        <p class=\"population\">\n                        Currencies:\n                        <span>${currency}</span>\n                        </p>\n                        <p class=\"region\">\n                        Languages:\n                        <span>${language}</span>\n                        </p>\n                    </li>\n                </ul>\n\n                <div class=\"country-info__borders\">\n                    <h3>Border Countries:</h3>\n                    ${borders ? borders.map((border)=> {\n                        return `\n                            <a href=\"./about.html?country=/alpha/${border}\">${border}</a>\n                        `\n                    }) : \"No borders\"}\n                </div>\n            </div>\n            \n    `\n}\n\n\n/*\n\n            \n          */\n\n//# sourceURL=webpack://webpack-project/./src/js/updateUI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/about.js");
/******/ 	
/******/ })()
;