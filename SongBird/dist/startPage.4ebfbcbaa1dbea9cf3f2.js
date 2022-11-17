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

/***/ "./modules/rules.js":
/*!**************************!*\
  !*** ./modules/rules.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction showRules() {\n  var rulesBtn = document.querySelector('.header__button-rules'),\n    window = document.querySelector('.rules'),\n    closeBtn = document.querySelector('.rules__window-close');\n  rulesBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    window.style.display = 'block';\n    window.classList.add('FadeIn');\n  });\n  window.addEventListener('click', function (e) {\n    if (e.target && (e.target === window || e.target === closeBtn)) {\n      window.style.display = 'none';\n      window.classList.remove('FadeIn');\n    }\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showRules);\n\n//# sourceURL=webpack:///./modules/rules.js?");

/***/ }),

/***/ "./startPage.js":
/*!**********************!*\
  !*** ./startPage.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _scss_indexStyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/indexStyle.scss */ \"./scss/indexStyle.scss\");\n/* harmony import */ var _modules_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/rules */ \"./modules/rules.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_rules__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./startPage.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-57x57.png */ \"./assets/favicons/apple-icon-57x57.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-60x60.png */ \"./assets/favicons/apple-icon-60x60.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-72x72.png */ \"./assets/favicons/apple-icon-72x72.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-76x76.png */ \"./assets/favicons/apple-icon-76x76.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-114x114.png */ \"./assets/favicons/apple-icon-114x114.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-120x120.png */ \"./assets/favicons/apple-icon-120x120.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-144x144.png */ \"./assets/favicons/apple-icon-144x144.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-152x152.png */ \"./assets/favicons/apple-icon-152x152.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-180x180.png */ \"./assets/favicons/apple-icon-180x180.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/android-icon-192x192.png */ \"./assets/favicons/android-icon-192x192.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/favicon-32x32.png */ \"./assets/favicons/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/favicon-96x96.png */ \"./assets/favicons/favicon-96x96.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/favicon-16x16.png */ \"./assets/favicons/favicon-16x16.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/manifest.json */ \"./assets/favicons/manifest.json\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/ms-icon-144x144.png */ \"./assets/favicons/ms-icon-144x144.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/video/intro-short.mp4 */ \"./assets/video/intro-short.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/iconmonstr-github-1.svg */ \"./assets/icons/iconmonstr-github-1.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/rs_school_js.svg */ \"./assets/icons/rs_school_js.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <title>SongBird</title>\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"57x57\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"60x60\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"72x72\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"76x76\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"114x114\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"120x120\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"144x144\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"152x152\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"192x192\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"96x96\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\">\\r\\n  <link rel=\\\"manifest\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\">\\r\\n  <meta name=\\\"msapplication-TileColor\\\" content=\\\"#ffffff\\\">\\r\\n  <meta name=\\\"msapplication-TileImage\\\" content=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\">\\r\\n  <meta name=\\\"theme-color\\\" content=\\\"#ffffff\\\">\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <header class=\\\"header\\\">\\r\\n    <div class=\\\"container\\\">\\r\\n      <div class=\\\"header__wrapper\\\">\\r\\n        <h1 class=\\\"header__logo\\\">Songs<span>Bird</span></h1>\\r\\n        <div class=\\\"header__row\\\">\\r\\n          <a href=\\\"gamePage.html\\\" class=\\\"header__button\\\">Начать викторину</a>\\r\\n          <a href=\\\"gallery.html\\\" class=\\\"header__button\\\">Галлерея</a>\\r\\n        </div>\\r\\n      </div>\\r\\n      <a href=\\\"#\\\" class=\\\"header__button-rules\\\">?</a>\\r\\n    </div>\\r\\n  </header>\\r\\n\\r\\n  <video class=\\\"video\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" autoplay muted loop=\\\"loop\\\">\\r\\n  </video>\\r\\n\\r\\n  <section class=\\\"rules\\\">\\r\\n    <div class=\\\"rules__window\\\">\\r\\n      <span class=\\\"rules__window-close\\\">✖</span>\\r\\n      <div class=\\\"rules__window-text\\\">\\r\\n        <p>Правила игры:</p>\\r\\n        <p>Задача игры состоит в отгадывании птиц по их пению. Каждый новый уровень дает игроку 5 баллов.</p>\\r\\n        <p>За каждый неправильный ответ отнимается 1 бал. </p>\\r\\n        <p>Максимальное количество балов - 30</p>\\r\\n      </div>\\r\\n    </div>\\r\\n  </section>\\r\\n\\r\\n  <footer class=\\\"footer\\\">\\r\\n    <div class=\\\"container\\\">\\r\\n      <div class=\\\"footer__row\\\">\\r\\n        <a class=\\\"footer__github\\\" href=\\\"https://github.com/EugeneBurkovskiy\\\"><img\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"GitHub\\\"></a>\\r\\n        <span class=\\\"footer__year\\\">2022</span>\\r\\n        <a href=\\\"https://rs.school/\\\" class=\\\"footer__img\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" alt=\\\"RS School\\\">\\r\\n        </a>\\r\\n      </div>\\r\\n    </div>\\r\\n  </footer>\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./scss/indexStyle.scss":
/*!******************************!*\
  !*** ./scss/indexStyle.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/indexStyle.scss?");

/***/ }),

/***/ "./assets/favicons/android-icon-192x192.png":
/*!**************************************************!*\
  !*** ./assets/favicons/android-icon-192x192.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/android-icon-192x192.png\";\n\n//# sourceURL=webpack:///./assets/favicons/android-icon-192x192.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-114x114.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-114x114.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-114x114.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-114x114.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-120x120.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-120x120.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-120x120.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-120x120.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-144x144.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-144x144.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-144x144.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-144x144.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-152x152.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-152x152.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-152x152.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-152x152.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-180x180.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-180x180.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-180x180.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-180x180.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-57x57.png":
/*!**********************************************!*\
  !*** ./assets/favicons/apple-icon-57x57.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-57x57.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-57x57.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-60x60.png":
/*!**********************************************!*\
  !*** ./assets/favicons/apple-icon-60x60.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-60x60.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-60x60.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-72x72.png":
/*!**********************************************!*\
  !*** ./assets/favicons/apple-icon-72x72.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-72x72.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-72x72.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-76x76.png":
/*!**********************************************!*\
  !*** ./assets/favicons/apple-icon-76x76.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-76x76.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-76x76.png?");

/***/ }),

/***/ "./assets/favicons/favicon-16x16.png":
/*!*******************************************!*\
  !*** ./assets/favicons/favicon-16x16.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/favicon-16x16.png\";\n\n//# sourceURL=webpack:///./assets/favicons/favicon-16x16.png?");

/***/ }),

/***/ "./assets/favicons/favicon-32x32.png":
/*!*******************************************!*\
  !*** ./assets/favicons/favicon-32x32.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/favicon-32x32.png\";\n\n//# sourceURL=webpack:///./assets/favicons/favicon-32x32.png?");

/***/ }),

/***/ "./assets/favicons/favicon-96x96.png":
/*!*******************************************!*\
  !*** ./assets/favicons/favicon-96x96.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/favicon-96x96.png\";\n\n//# sourceURL=webpack:///./assets/favicons/favicon-96x96.png?");

/***/ }),

/***/ "./assets/favicons/manifest.json":
/*!***************************************!*\
  !*** ./assets/favicons/manifest.json ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/manifest.json\";\n\n//# sourceURL=webpack:///./assets/favicons/manifest.json?");

/***/ }),

/***/ "./assets/favicons/ms-icon-144x144.png":
/*!*********************************************!*\
  !*** ./assets/favicons/ms-icon-144x144.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/ms-icon-144x144.png\";\n\n//# sourceURL=webpack:///./assets/favicons/ms-icon-144x144.png?");

/***/ }),

/***/ "./assets/icons/iconmonstr-github-1.svg":
/*!**********************************************!*\
  !*** ./assets/icons/iconmonstr-github-1.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/iconmonstr-github-1.svg\";\n\n//# sourceURL=webpack:///./assets/icons/iconmonstr-github-1.svg?");

/***/ }),

/***/ "./assets/icons/rs_school_js.svg":
/*!***************************************!*\
  !*** ./assets/icons/rs_school_js.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/rs_school_js.svg\";\n\n//# sourceURL=webpack:///./assets/icons/rs_school_js.svg?");

/***/ }),

/***/ "./assets/video/intro-short.mp4":
/*!**************************************!*\
  !*** ./assets/video/intro-short.mp4 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/intro-short.mp4\";\n\n//# sourceURL=webpack:///./assets/video/intro-short.mp4?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"startPage": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./startPage.js");
/******/ 	
/******/ })()
;