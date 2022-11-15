/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 370:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/audioFalse.mp3";

/***/ }),

/***/ 744:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/audioTrue.mp3";

/***/ }),

/***/ 479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/audioVictory.mp3";

/***/ }),

/***/ 981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/android-icon-192x192.png";

/***/ }),

/***/ 407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-114x114.png";

/***/ }),

/***/ 926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-120x120.png";

/***/ }),

/***/ 637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-144x144.png";

/***/ }),

/***/ 864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-152x152.png";

/***/ }),

/***/ 866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-180x180.png";

/***/ }),

/***/ 91:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-57x57.png";

/***/ }),

/***/ 793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-60x60.png";

/***/ }),

/***/ 310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-72x72.png";

/***/ }),

/***/ 183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-76x76.png";

/***/ }),

/***/ 606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/favicon-16x16.png";

/***/ }),

/***/ 844:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/favicon-32x32.png";

/***/ }),

/***/ 357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/favicon-96x96.png";

/***/ }),

/***/ 264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/manifest.json";

/***/ }),

/***/ 235:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/ms-icon-144x144.png";

/***/ }),

/***/ 114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/iconmonstr-github-1.svg";

/***/ }),

/***/ 389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/mute.svg";

/***/ }),

/***/ 781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/pause.svg";

/***/ }),

/***/ 614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/rs_school_js.svg";

/***/ }),

/***/ 534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/start.svg";

/***/ }),

/***/ 109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/volume.svg";

/***/ }),

/***/ 771:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/incognito.png";

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
/******/ 			179: 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ../node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(370);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./gamePage.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(91), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(793), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(310), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(183), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(407), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(926), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(637), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(864), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(866), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(981), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(844), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(357), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(606), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(264), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(235), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(771), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(534), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(781), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(109), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(389), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(744), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(294), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(479), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(114), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(614), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = getUrl_default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = getUrl_default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = getUrl_default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = getUrl_default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = getUrl_default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = getUrl_default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = getUrl_default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = getUrl_default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = getUrl_default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = getUrl_default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = getUrl_default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = getUrl_default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = getUrl_default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = getUrl_default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = getUrl_default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = getUrl_default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = getUrl_default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = getUrl_default()(___HTML_LOADER_IMPORT_24___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>SongBird</title> <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"> <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"> <meta name=\"msapplication-TileColor\" content=\"#ffffff\"> <meta name=\"msapplication-TileImage\" content=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"> <meta name=\"theme-color\" content=\"#ffffff\"> </head> <body> <header class=\"header\"> <div class=\"container\"> <div class=\"header__wrapper\"> <h1 class=\"header__logo\">Songs<span>Bird</span></h1> <div class=\"header__row\"> <a href=\"index.html\" class=\"header__button\">⇦ На главную</a> <a class=\"header__button\">Галлерея ⇨</a> </div> </div> </div> </header> <article class=\"game\"> <div class=\"container\"> <h3 class=\"game__logo\">Game Mode</h3> <ul class=\"game__mode\"> <li class=\"game__button\" value=\"1\">Разминка</li> <li class=\"game__button\" value=\"2\">Воробьиные</li> <li class=\"game__button\" value=\"3\">Лесные птицы</li> <li class=\"game__button\" value=\"4\">Певчие птицы</li> <li class=\"game__button\" value=\"5\">Хищные птицы</li> <li class=\"game__button\" value=\"6\">Морские птицы</li> </ul> <ul class=\"game__status\"> <li class=\"game__status-lvl\">Уровень: 1</li> <li class=\"game__status-score\">Очки: 0</li> </ul> <div class=\"game__wrapper\"> <div class=\"game__blocking\"> <p>⇧⇧⇧</p> Please choose a game mode </div> <div class=\"game__question\"> <div class=\"game__question-img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"incognito\"></div> <div class=\"game__question-info\"> <div class=\"game__question-name\">***</div> <hr class=\"game__question-divider\"> <div class=\"player\" id=\"question-player\"> <audio class=\"game__question-audio\" id=\"question-audio\" src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\"></audio> <input class=\"player__duration\" id=\"question-player-duration\" type=\"range\" min=\"0\" max=\"100\" value=\"0\"> <div class=\"player__time\"> <span class=\"player__time-current\" id=\"question-time-current\">00:00</span> <span class=\"player__time-total\" id=\"question-time-total\">00:00</span> </div> <div class=\"player__start\" id=\"question-player-start\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"start\"> </div> <div class=\"player__pause\" id=\"question-player-pause\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"pause\"> </div> <img class=\"player__volume-true\" id=\"question-volume-true\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"volume\"> <img class=\"player__volume-false\" id=\"question-volume-false\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"mute\"> <input class=\"player__volume\" id=\"question-player-volume\" type=\"range\" min=\"0\" max=\"100\" value=\"50\"> </div> </div> </div> <ul class=\"game__answer\"> <li class=\"game__answer-item\">Орел</li> <li class=\"game__answer-item\">Коршун</li> <li class=\"game__answer-item\">Лунь</li> <li class=\"game__answer-item\">Сокол</li> <li class=\"game__answer-item\">Ястреб</li> <li class=\"game__answer-item\">Флиин</li> </ul> <audio class=\"game__ansnwer-true\" src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\"></audio> <audio class=\"game__ansnwer-false\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\"></audio> <audio class=\"game__ansnwer-victory\" src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\"></audio> <div class=\"game__about\"> <div class=\"game__about-block\">Послушайте аудио и выберите птицу</div> <div class=\"game__about-wrapper\"> <div class=\"game__about-img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"incognito\"></div> <div class=\"game__about-info\"> <div class=\"game__about-name\">???</div> <hr class=\"game__about-divider\"> <div class=\"game__about-subname\">???</div> <hr class=\"game__about-divider\"> <div class=\"player\" id=\"answer-player\"> <audio class=\"game__question-audio\" id=\"answer-audio\" src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\"></audio> <input class=\"player__duration\" id=\"answer-player-duration\" type=\"range\" min=\"0\" max=\"100\" value=\"0\"> <div class=\"player__time\"> <span class=\"player__time-current\" id=\"answer-time-current\">00:00</span> <span class=\"player__time-total\" id=\"answer-time-total\">00:00</span> </div> <img class=\"player__volume-true\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"volume\"> <img class=\"player__volume-false\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"mute\"> <input class=\"player__volume\" id=\"answer-player-volume\" type=\"range\" min=\"0\" max=\"100\" value=\"50\"> </div> </div> <div class=\"game__about-descr\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem laborum ex vero neque officiis veniam voluptate tempore omnis? Nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eius repudiandae obcaecati excepturi hic qui sapiente deleniti non deserunt error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, mollitia? </div> </div> </div> <div class=\"game__next\"><a href=\"#\">Next</a></div> </div> </div> </article> <footer class=\"footer\"> <div class=\"container\"> <div class=\"footer__row\"> <a class=\"footer__github\" href=\"https://github.com/EugeneBurkovskiy\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"GitHub\"></a> <span class=\"footer__year\">2022</span> <a href=\"https://rs.school/\" class=\"footer__img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"RS School\"> </a> </div> </div> </footer> <section class=\"result-popup\"> <div class=\"result-popup__window\"> <div class=\"result-popup__score\">Ваш результат:</div> <div class=\"result-popup__buttons\"> <a href=\"gamePage.html\" class=\"result-popup__button button\">Еще раз</a> <a href=\"results.html\" class=\"result-popup__button button\">Статистика</a> </div> </div> </section> </body> </html>";
// Exports
/* harmony default export */ const gamePage = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./modules/birds.js
var birdsData = [[{
  id: 1,
  name: 'Ворон',
  species: 'Corvus corax',
  description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
  image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
}, {
  id: 2,
  name: 'Журавль',
  species: 'Grus grus',
  description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
  image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
}, {
  id: 3,
  name: 'Ласточка',
  species: 'Delichon urbicum',
  description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
  image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
}, {
  id: 4,
  name: 'Козодой',
  species: 'Caprimulgus europaeus',
  description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
  image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
}, {
  id: 5,
  name: 'Кукушка',
  species: 'Cuculus canorus',
  description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
  image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
}, {
  id: 6,
  name: 'Синица',
  species: 'Parus major',
  description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
  image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
}], [{
  id: 1,
  name: 'Воробей',
  species: 'Passer domesticus',
  description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
  image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
}, {
  id: 2,
  name: 'Грач',
  species: 'Corvus frugilegus',
  description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
  image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
}, {
  id: 3,
  name: 'Галка',
  species: 'Coloeus monedula',
  description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
  image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
}, {
  id: 4,
  name: 'Певчий дрозд',
  species: 'Turdus philomelos',
  description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
  image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
}, {
  id: 5,
  name: 'Сорока',
  species: 'Pica pica',
  description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
  image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
}, {
  id: 6,
  name: 'Сойка',
  species: 'Garrulus glandarius',
  description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
  image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
}], [{
  id: 1,
  name: 'Зяблик',
  species: 'Fringilla coelebs',
  description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
  image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
}, {
  id: 2,
  name: 'Клёст',
  species: 'Loxia curvirostra',
  description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
  image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
}, {
  id: 3,
  name: 'Горлица',
  species: 'Streptopelia turtur',
  description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
  image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
}, {
  id: 4,
  name: 'Дятел',
  species: 'Dendrocopos major',
  description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
  image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
}, {
  id: 5,
  name: 'Удод',
  species: 'Upupa epops',
  description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
  image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
}, {
  id: 6,
  name: 'Стриж',
  species: 'Apus apus',
  description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
  image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
}], [{
  id: 1,
  name: 'Жаворонок',
  species: 'Alauda arvensis',
  description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
  image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
}, {
  id: 2,
  name: 'Соловей',
  species: 'Luscinia luscinia',
  description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
  image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
}, {
  id: 3,
  name: 'Скворец',
  species: 'Sturnus vulgaris',
  description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
  image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
}, {
  id: 4,
  name: 'Иволга',
  species: 'Oriolus oriolus',
  description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
  image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
}, {
  id: 5,
  name: 'Свиристель',
  species: 'Bombycilla garrulus',
  description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
  image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
}, {
  id: 6,
  name: 'Щегол',
  species: 'Carduelis carduelis',
  description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
  image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
}], [{
  id: 1,
  name: 'Орёл',
  species: 'Aquila nipalensis',
  description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
  image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
}, {
  id: 2,
  name: 'Коршун',
  species: 'Milvus migrans',
  description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
  image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
}, {
  id: 3,
  name: 'Лунь',
  species: 'Circus cyaneus',
  description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
  image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
}, {
  id: 4,
  name: 'Сокол',
  species: 'Falco peregrinus',
  description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
  image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
}, {
  id: 5,
  name: 'Ястреб',
  species: 'Accipiter gentilis',
  description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
  image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
}, {
  id: 6,
  name: 'Филин',
  species: 'Bubo bubo',
  description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
  image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
}], [{
  id: 1,
  name: 'Альбатрос',
  species: 'Diomedea exulans',
  description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
  image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
}, {
  id: 2,
  name: 'Олуша',
  species: 'Sula nebouxii',
  description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
  image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
}, {
  id: 3,
  name: 'Буревестник',
  species: 'Puffinus griseus',
  description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
  image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
}, {
  id: 4,
  name: 'Пеликан',
  species: 'Pelecanus',
  description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
  image: 'https://pofoto.club/uploads/posts/2021-12/1640742442_1-pofoto-club-p-pelikan-ptitsa-foto-3.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
}, {
  id: 5,
  name: 'Пингвин',
  species: 'Aptenodytes forsteri',
  description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
  image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
}, {
  id: 6,
  name: 'Чайка',
  species: 'Larus argentatus',
  description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
  image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
}]];
/* harmony default export */ const birds = (birdsData);
;// CONCATENATED MODULE: ./modules/audio.js
function customAudio(audioSelector, startSelector, pauseSelector, volumeSelector, progressSelector, currentTime, totalTime, volumeTrue, volumeFalse) {
  var audio = document.querySelector(audioSelector),
    startBtn = document.querySelector(startSelector),
    pauseBtn = document.querySelector(pauseSelector),
    volumeBar = document.querySelector(volumeSelector),
    progressBar = document.querySelector(progressSelector),
    currentTimeText = document.querySelector(currentTime),
    totalTimeText = document.querySelector(totalTime),
    audioIconTrue = document.querySelector(volumeTrue),
    audioIconFalse = document.querySelector(volumeFalse);
  pauseBtn.style.display = 'none';
  startBtn.style.display = 'block';
  audio.ontimeupdate = progress;
  startBtn.addEventListener('click', function () {
    audio.play();
    timeConverter(audio.duration, totalTimeText);
    pauseBtn.style.display = 'block';
    startBtn.style.display = 'none';
  });
  pauseBtn.addEventListener('click', function () {
    audio.pause();
    pauseBtn.style.display = 'none';
    startBtn.style.display = 'block';
  });
  volumeBar.addEventListener('input', function () {
    var volumeStatus = volumeBar.value;
    audio.volume = volumeStatus / volumeBar.max;
    if (volumeBar.value < 1) {
      audioIconTrue.style.display = 'none';
      audioIconFalse.style.display = 'block';
    } else {
      audioIconFalse.style.display = 'none';
      audioIconTrue.style.display = 'block';
    }
  });
  progressBar.addEventListener('input', function () {
    audio.currentTime = progressBar.value * audio.duration / progressBar.max;
  });
  function progress() {
    progressBar.value = progressBar.max * audio.currentTime / audio.duration;
    timeConverter(audio.currentTime, currentTimeText);
    if (audio.currentTime === audio.duration) {
      pauseBtn.style.display = 'none';
      startBtn.style.display = 'block';
    }
  }
  function timeConverter(time, cell) {
    cell.textContent = '';
    var seconds = Math.floor(time % 60),
      minutes = Math.floor(time / 60 % 60);
    var timeArr = [minutes, seconds];
    timeArr = timeArr.map(function (item) {
      if (item < 10) {
        item = '0' + item;
      } else if (item === 0) {
        item = '00';
      }
      return item;
    });
    cell.textContent = timeArr[0] + ':' + timeArr[1];
  }
}
/* harmony default export */ const audio = (customAudio);
;// CONCATENATED MODULE: ./modules/generateGame.js


var gameOptions = {
  'score': 5,
  'level': 1,
  'gameMode': 1,
  'dataArr': [],
  'secretBird': {},
  'answerStatus': false
};
function generateGame() {
  var answerBlock = document.querySelector('.game__answer'),
    qustionAudio = document.querySelector('.game__question-audio'),
    aboutBlock = document.querySelector('.game__about-block'),
    nextButton = document.querySelector('.game__next>a'),
    questionImg = document.querySelector('.game__question-img > img'),
    questionName = document.querySelector('.game__question-name'),
    lvlNumber = document.querySelector('.game__status-lvl'),
    gameScore = document.querySelector('.game__status-score');
  questionImg.src = 'assets/img/incognito.png';
  questionName.textContent = '***';
  lvlNumber.textContent = "\u0423\u0440\u043E\u0432\u0435\u043D\u044C: ".concat(gameOptions.level);
  gameScore.textContent = "\u041E\u0447\u043A\u0438: ".concat(gameOptions.score - 5);
  aboutBlock.style.top = '0';
  if (gameOptions.dataArr.length === 1) {
    nextButton.textContent = 'Finish';
  }
  nextButton.style.cssText = '';
  answerBlock.innerHTML = '';
  birds[gameOptions.gameMode - 1].forEach(function (item) {
    var answerBtn = document.createElement('li');
    answerBtn.classList.add('game__answer-item');
    answerBtn.innerHTML = "".concat(item.name);
    answerBlock.append(answerBtn);
  });
  gameOptions.secretBird = gameOptions.dataArr.splice(Math.floor(Math.random() * gameOptions.dataArr.length), 1)[0];
  qustionAudio.src = gameOptions.secretBird.audio;
  audio('#question-audio', '#question-player-start', '#question-player-pause', '#question-player-volume', '#question-player-duration', '#question-time-current', '#question-time-total', '#question-volume-true', '#question-volume-false');
}
/* harmony default export */ const modules_generateGame = (generateGame);

;// CONCATENATED MODULE: ./modules/chooseMode.js



function chooseMode() {
  var gameModeRow = document.querySelector('.game__mode'),
    btns = document.querySelectorAll('.game__button'),
    blockWindow = document.querySelector('.game__blocking');
  gameModeRow.addEventListener('click', function (e) {
    if (e.target && e.target.value) {
      btns.forEach(function (btn) {
        btn.style.cssText = "";
        btn.style.pointerEvents = '';
      });
      e.target.style.cssText = "border: 3px solid white; background-color: #165c52";
      e.target.style.pointerEvents = 'none';
      blockWindow.style.top = '-100%';
      gameOptions.gameMode = e.target.value;
      gameOptions.level = 1;
      gameOptions.score = 5;
      gameOptions.dataArr = birds[gameOptions.gameMode - 1].slice(0);
      modules_generateGame();
    }
  });
}
/* harmony default export */ const modules_chooseMode = (chooseMode);
;// CONCATENATED MODULE: ./modules/checkAnswer.js

function checkAnswer(answer) {
  var score = document.querySelector('.game__status-score'),
    questionImg = document.querySelector('.game__question-img > img'),
    questionName = document.querySelector('.game__question-name'),
    nextButton = document.querySelector('.game__next>a'),
    audioPauseBtn = document.querySelectorAll('.player__pause'),
    audioAnswerTrue = document.querySelector('.game__ansnwer-true'),
    audioAnswerFalse = document.querySelector('.game__ansnwer-false');
  if (window.getComputedStyle(nextButton).pointerEvents === 'none') {
    gameOptions.answerStatus = false;
  }
  if (!gameOptions.answerStatus) {
    if (answer.textContent === gameOptions.secretBird.name) {
      answer.classList.add('game__answer-item_true');
      score.textContent = "\u041E\u0447\u043A\u0438: ".concat(gameOptions.score);
      questionImg.src = gameOptions.secretBird.image;
      questionName.textContent = gameOptions.secretBird.name;
      nextButton.style.cssText = 'pointer-events: auto; background-color: #2baa27;';
      gameOptions.answerStatus = true;
      audioPauseBtn.forEach(function (item) {
        item.click();
      });
      audioAnswerTrue.play();
    } else {
      answer.classList.add('game__answer-item_false');
      audioAnswerFalse.play();
      gameOptions.score--;
    }
  }
}
/* harmony default export */ const modules_checkAnswer = (checkAnswer);
;// CONCATENATED MODULE: ./modules/chooseAnswer.js




function chooseAnswer() {
  var answerRow = document.querySelector('.game__answer'),
    aboutSection = document.querySelector('.game__about-wrapper'),
    aboutBlock = document.querySelector('.game__about-block');
  answerRow.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('game__answer-item')) {
      aboutBlock.style.top = '-100%';
      birds[gameOptions.gameMode - 1].forEach(function (bird) {
        if (bird.name === e.target.textContent) {
          aboutSection.innerHTML = "\n        <div class=\"game__about-img\"><img src=".concat(bird.image, " alt=\"incognito\"></div>\n            <div class=\"game__about-info\">\n              <div class=\"game__about-name\">").concat(bird.name, "</div>\n              <hr class=\"game__about-divider\">\n              <div class=\"game__about-subname\">").concat(bird.species, "</div>\n              <hr class=\"game__about-divider\">\n                <div class=\"player\" id=\"answer-player\">\n                <audio class=\"game__question-audio\" id=\"answer-audio\" src = ").concat(bird.audio, "></audio>\n                <input class=\"player__duration\" id=\"answer-player-duration\" type=\"range\" min=0 max=100 value=\"0\">\n                <div class=\"player__time\">\n                  <span class=\"player__time-current\" id=\"answer-time-current\">00:00</span>\n                  <span class=\"player__time-total\" id=\"answer-time-total\">00:00</span>\n                </div>\n                <div class=\"player__start\" id=\"answer-player-start\"><img class=\"player__controls-img\"\n                    src=\"assets/img/start.svg\" alt=\"start\">\n                </div>\n                <div class=\"player__pause\" id=\"answer-player-pause\"><img class=\"player__controls-img\"\n                    src=\"assets/img/pause.svg\" alt=\"pause\">\n                </div>\n                <img class=\"player__volume-true\" id=\"answer-volume-true\" src=\"assets/img/volume.svg\" alt=\"volume\">\n                <img class=\"player__volume-false\" id=\"answer-volume-false\" src=\"assets/img/mute.svg\" alt=\"mute\">\n                <input class=\"player__volume\" id=\"answer-player-volume\" type=\"range\" min=0 max=100 value=\"50\">\n              </div>\n            </div>\n            </div>\n            <div class=\"game__about-descr\">").concat(bird.description, "\n            </div>\n        ");
        }
      });
      audio('#answer-audio', '#answer-player-start', '#answer-player-pause', '#answer-player-volume', '#answer-player-duration', '#answer-time-current', '#answer-time-total', '#answer-volume-true', '#answer-volume-false');
      modules_checkAnswer(e.target);
    }
  });
}
/* harmony default export */ const modules_chooseAnswer = (chooseAnswer);
;// CONCATENATED MODULE: ./modules/popup.js

function popupClose() {
  document.querySelectorAll('.result-popup__button').forEach(function (item) {
    var popupWindow = document.querySelector('.result-popup');
    popupWindow.style.display = 'none';
  });
}
function popupOpen() {
  var popupWindow = document.querySelector('.result-popup'),
    popupScore = document.querySelector('.result-popup__score'),
    audioVictory = document.querySelector('.game__ansnwer-victory'),
    restartBtn = document.querySelector('.result-popup__button');
  popupWindow.style.display = 'flex';
  if (gameOptions.score === 30) {
    audioVictory.play();
    popupScore.textContent = "\u0412\u044B \u043D\u0430\u0431\u0440\u0430\u043B\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0447\u043A\u043E\u0432!";
    restartBtn.style.display = 'none';
  } else {
    popupScore.textContent = "\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(gameOptions.score, "/30");
  }
}

;// CONCATENATED MODULE: ./modules/next.js



function nextLvl() {
  var nextButton = document.querySelector('.game__next>a');
  nextButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (gameOptions.dataArr.length !== 0) {
      gameOptions.level++;
      gameOptions.score += 5;
      modules_generateGame();
    } else {
      popupOpen();
      saveToStorage();
    }
  });
  function saveToStorage() {
    var resultsArr = [];
    var resultItem = JSON.parse(localStorage.getItem('result'));
    console.log(resultItem);
    if (resultItem) {
      resultsArr = resultItem;
      resultsArr.push(gameOptions);
      resultsArr = resultsArr.sort(function (a, b) {
        return b.score - a.score;
      }).filter(function (item, i) {
        if (i < 10) {
          return item;
        }
      });
      localStorage.setItem('result', JSON.stringify(resultsArr));
    } else {
      resultsArr = [];
      resultsArr.push(gameOptions);
      localStorage.setItem('result', JSON.stringify(resultsArr));
    }
  }
}
/* harmony default export */ const next = (nextLvl);
;// CONCATENATED MODULE: ./index.js






window.addEventListener('DOMContentLoaded', function () {
  modules_chooseMode();
  modules_chooseAnswer();
  next();
  popupClose();
});
})();

/******/ })()
;