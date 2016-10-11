/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var main = __webpack_require__(1);
	main();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function () {
	    function replace(titles) {
	        [].forEach.apply(titles, [function (el) {
	            var text = el.textContent.toLowerCase();
	            var replaceText = text.replace(/([a-z]+)( |$)/mg, function (s, m) {
	                return getMap(m);
	            });
	            if (text !== replaceText) {
	                el.textContent = replaceText;
	            }
	        }]);
	    }
	    var NIPONGO_MAP = __webpack_require__(2);
	    function getMap(text) {
	        return text;
	    }

	    var feedlyPage = document.querySelector("#feedlyPage");
	    var observer = new MutationObserver(function (mutations) {
	        mutations.forEach(function (mutation) {
	            if (mutation.type === "childList") {
	                var titles = feedlyPage.querySelectorAll(".title");
	                replace(titles);
	            }
	        });
	    });
	    var config = {
	        attributes: true,
	        childList: true,
	        characterData: true
	    };
	    observer.observe(feedlyPage, config);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"a": "あ",
		"i": "い",
		"u": "う",
		"e": "え",
		"o": "お",
		"ka": "か",
		"ki": "き",
		"ku": "く",
		"ke": "け",
		"ko": "こ",
		"sa": "さ",
		"si": "し",
		"shi": "し",
		"su": "す",
		"se": "せ",
		"so": "そ",
		"ta": "た",
		"ti": "ち",
		"chi": "ち",
		"tu": "つ",
		"tsu": "つ",
		"te": "て",
		"to": "と",
		"na": "な",
		"ni": "に",
		"nu": "ぬ",
		"ne": "ね",
		"no": "の",
		"ha": "は",
		"hi": "ひ",
		"hu": "ふ",
		"fu": "ふ",
		"he": "へ",
		"ho": "ほ",
		"ma": "ま",
		"mi": "み",
		"mu": "む",
		"me": "め",
		"mo": "も",
		"ya": "や",
		"yu": "ゆ",
		"yo": "よ",
		"ra": "ら",
		"ri": "り",
		"ru": "る",
		"re": "れ",
		"ro": "ろ",
		"wa": "わ",
		"wo": "を",
		"nn": "ん"
	};

/***/ }
/******/ ]);