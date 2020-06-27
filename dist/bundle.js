/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//auto video play script\n\n$(function () {\n    // Auto play modal video\n    $(\".video\").click(function () {\n        var theModal = $(this).data(\"target\"),\n            videoSRC = $(this).attr(\"data-video\"),\n            videoSRCauto = videoSRC + \"?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1\";\n        $(theModal + ' iframe').attr('src', videoSRCauto);\n        $(theModal + ' button.close').click(function () {\n            $(theModal + ' iframe').attr('src', videoSRC);\n        });\n    });\n});\n\n\n//lightbox\n\n$(document).on('click', '[data-toggle=\"lightbox\"]', function (event) {\n    event.preventDefault();\n    $(this).ekkoLightbox();\n});\n\n\n//slick slider\n\n$('.slider').slick({\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2F1dG8gdmlkZW8gcGxheSBzY3JpcHRcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgLy8gQXV0byBwbGF5IG1vZGFsIHZpZGVvXG4gICAgJChcIi52aWRlb1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aGVNb2RhbCA9ICQodGhpcykuZGF0YShcInRhcmdldFwiKSxcbiAgICAgICAgICAgIHZpZGVvU1JDID0gJCh0aGlzKS5hdHRyKFwiZGF0YS12aWRlb1wiKSxcbiAgICAgICAgICAgIHZpZGVvU1JDYXV0byA9IHZpZGVvU1JDICsgXCI/bW9kZXN0YnJhbmRpbmc9MSZyZWw9MCZjb250cm9scz0wJnNob3dpbmZvPTAmaHRtbDU9MSZhdXRvcGxheT0xXCI7XG4gICAgICAgICQodGhlTW9kYWwgKyAnIGlmcmFtZScpLmF0dHIoJ3NyYycsIHZpZGVvU1JDYXV0byk7XG4gICAgICAgICQodGhlTW9kYWwgKyAnIGJ1dHRvbi5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhlTW9kYWwgKyAnIGlmcmFtZScpLmF0dHIoJ3NyYycsIHZpZGVvU1JDKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG4vL2xpZ2h0Ym94XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJsaWdodGJveFwiXScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCh0aGlzKS5la2tvTGlnaHRib3goKTtcbn0pO1xuXG5cbi8vc2xpY2sgc2xpZGVyXG5cbiQoJy5zbGlkZXInKS5zbGljayh7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDFcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });