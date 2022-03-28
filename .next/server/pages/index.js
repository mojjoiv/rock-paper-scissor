module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.tsx":
/*!*******************************!*\
  !*** ./components/Button.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Play.module.css */ "./styles/Play.module.css");
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Downloads\\resultier-nextjs-react-test\\rock-paper-scissor-lizard-spock\\components\\Button.tsx";




const Button = ({
  classN,
  children,
  lid,
  onClicK = () => {}
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    onClick: () => onClicK(),
    layoutId: lid,
    className: classN,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inside,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ "./styles/Header.module.css");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\User\\Downloads\\resultier-nextjs-react-test\\rock-paper-scissor-lizard-spock\\components\\Header.tsx";



const Header = ({
  advanced,
  score
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimateSharedLayout"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
      className: advanced ? _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.advancedTitle : _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      layout: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Rock"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Paper"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Scissors"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), advanced && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Lizard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Spock"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.score,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Score"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: score
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/Play.tsx":
/*!*****************************!*\
  !*** ./components/Play.tsx ***!
  \*****************************/
/*! exports provided: Play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Play", function() { return Play; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Play.module.css */ "./styles/Play.module.css");
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PlayButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayButtons */ "./components/PlayButtons.tsx");

var _jsxFileName = "C:\\Users\\User\\Downloads\\resultier-nextjs-react-test\\rock-paper-scissor-lizard-spock\\components\\Play.tsx";




const Play = ({
  advanced,
  setselected
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    className: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [advanced ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/bg-pentagon.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/bg-triangle.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PlayButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onCLick: value => setselected(value),
      advanced: advanced
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/PlayButtons.tsx":
/*!************************************!*\
  !*** ./components/PlayButtons.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Play.module.css */ "./styles/Play.module.css");
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");

var _jsxFileName = "C:\\Users\\User\\Downloads\\resultier-nextjs-react-test\\rock-paper-scissor-lizard-spock\\components\\PlayButtons.tsx";





const PlayButtons = ({
  advanced,
  onCLick
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimateSharedLayout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
      className: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.playbuttons,
      children: advanced ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.threegrid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClicK: () => onCLick(0),
          classN: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.scissor,
          lid: "scissor",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icon-scissor.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClicK: () => onCLick(3),
          classN: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.spock,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icon-spock.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClicK: () => onCLick(1),
          classN: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.paper,
          lid: "paper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icon-paper.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClicK: () => onCLick(4),
          classN: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.lizard,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icon-lizard.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClicK: () => onCLick(2),
          classN: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.rock,
          lid: "rock",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icon-rock.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.twogrid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClicK: () => onCLick(0),
          classN: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sci2,
          lid: "sci",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icon-scissor.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClicK: () => onCLick(1),
          classN: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.paper2,
          lid: "paper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icon-paper.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClicK: () => onCLick(2),
          classN: _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.rock2,
          lid: "rock",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icon-rock.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PlayButtons);

/***/ }),

/***/ "./components/Results.tsx":
/*!********************************!*\
  !*** ./components/Results.tsx ***!
  \********************************/
/*! exports provided: Results */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Results", function() { return Results; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_randomInt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/randomInt */ "./shared/randomInt.ts");
/* harmony import */ var _shared_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/rules */ "./shared/rules.ts");
/* harmony import */ var _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Results.module.css */ "./styles/Results.module.css");
/* harmony import */ var _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Play.module.css */ "./styles/Play.module.css");
/* harmony import */ var _styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");

var _jsxFileName = "C:\\Users\\User\\Downloads\\resultier-nextjs-react-test\\rock-paper-scissor-lizard-spock\\components\\Results.tsx";







const Results = ({
  selected,
  setselected,
  setscore,
  advanced
}) => {
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: house,
    1: setHouse
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const randomNum = Object(_shared_randomInt__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(advanced ? 5 : 3);
    const userSelected = _shared_rules__WEBPACK_IMPORTED_MODULE_4__["GameRules"][selected].value;
    setTimeout(() => {
      setShow(true);
      setHouse(_shared_rules__WEBPACK_IMPORTED_MODULE_4__["GameRules"][randomNum].value);

      if (_shared_rules__WEBPACK_IMPORTED_MODULE_4__["GameRules"][randomNum].beats.includes(userSelected)) {
        setResult("Lose");
        setscore(score => score - 1);
      } else {
        if (_shared_rules__WEBPACK_IMPORTED_MODULE_4__["GameRules"][randomNum].value === userSelected) {
          setResult("Tie");
        } else {
          setResult("win");
          setscore(score => score + 1);
        }
      }
    }, 2000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: show ? _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.results : _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.pending,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.pick,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "You Picked"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
        className: result === "win" ? _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.win : _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.house,
        initial: {
          y: 20
        },
        animate: {
          y: 0,
          transition: {
            loop: 3
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          classN: `${_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default.a[_shared_rules__WEBPACK_IMPORTED_MODULE_4__["GameRules"][selected].value]} ${_styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.btn}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: `/icon-${_shared_rules__WEBPACK_IMPORTED_MODULE_4__["GameRules"][selected].value}.svg`,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.pick,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "House Picked"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
        className: result === "Lose" ? _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.win : _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.house,
        initial: {
          y: 20
        },
        animate: {
          y: 0,
          transition: {
            loop: 3
          }
        },
        children: house && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          classN: `${_styles_Play_module_css__WEBPACK_IMPORTED_MODULE_6___default.a[house]} ${_styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.btn}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: `/icon-${house}.svg`,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.result,
      children: show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
        initial: {
          scaleX: 0
        },
        animate: {
          scaleX: 1
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["You ", result]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Results_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.playBtn,
          onClick: () => {
            setselected(-1);
            setResult("");
          },
          children: "Play again"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Rules.tsx":
/*!******************************!*\
  !*** ./components/Rules.tsx ***!
  \******************************/
/*! exports provided: Rules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rules", function() { return Rules; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Rules_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Rules.module.css */ "./styles/Rules.module.css");
/* harmony import */ var _styles_Rules_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Rules_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Downloads\\resultier-nextjs-react-test\\rock-paper-scissor-lizard-spock\\components\\Rules.tsx";



const Rules = ({
  open,
  advanced,
  setopen
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    children: open && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
      initial: {
        opacity: 0,
        borderRadius: "50%"
      },
      animate: {
        opacity: 1,
        borderRadius: "0%"
      },
      exit: {
        opacity: 0
      },
      className: _styles_Rules_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.rules,
      onClick: () => setopen(),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Rules_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Rules"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          height: "100",
          width: "100",
          src: "/icon-close.svg",
          alt: "close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Rules_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,
        children: advanced ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/image-rules-bonus.svg",
          alt: "rules for advanced"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/image-rules.svg",
          alt: "rules for normal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Play__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Play */ "./components/Play.tsx");
/* harmony import */ var _components_Rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Rules */ "./components/Rules.tsx");
/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Results */ "./components/Results.tsx");

var _jsxFileName = "C:\\Users\\User\\Downloads\\resultier-nextjs-react-test\\rock-paper-scissor-lizard-spock\\pages\\index.tsx";






function Home() {
  const {
    0: advancedMode,
    1: setAdvancedMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(-1);
  const {
    0: score,
    1: setScore
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);

  function changeMode(event) {
    event.preventDefault();
    setAdvancedMode(!advancedMode);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "ROCK PAPER SCISSORS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      advanced: advancedMode,
      score: score
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: changeMode,
        className: "modes",
        children: [advancedMode ? "Normal" : "Advanced", " Mode"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), selected >= 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Results__WEBPACK_IMPORTED_MODULE_6__["Results"], {
      advanced: advancedMode,
      selected: selected,
      setselected: value => setSelected(value),
      setscore: setScore
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Play__WEBPACK_IMPORTED_MODULE_4__["Play"], {
      setselected: value => setSelected(value),
      advanced: advancedMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Rules__WEBPACK_IMPORTED_MODULE_5__["Rules"], {
      open: open,
      advanced: advancedMode,
      setopen: () => setOpen(!open)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./shared/randomInt.ts":
/*!*****************************!*\
  !*** ./shared/randomInt.ts ***!
  \*****************************/
/*! exports provided: randomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
const randomInt = function (n) {
  return Math.floor(Math.random() * n);
};

/***/ }),

/***/ "./shared/rules.ts":
/*!*************************!*\
  !*** ./shared/rules.ts ***!
  \*************************/
/*! exports provided: GameRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRules", function() { return GameRules; });
const GameRules = [{
  value: "scissor",
  beats: ["paper", "lizard"]
}, {
  value: "paper",
  beats: ["rock", "spock"]
}, {
  value: "rock",
  beats: ["scissor", "lizard"]
}, {
  value: "spock",
  beats: ["scissor", "rock"]
}, {
  value: "lizard",
  beats: ["spock", "paper"]
}];

/***/ }),

/***/ "./styles/Header.module.css":
/*!**********************************!*\
  !*** ./styles/Header.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__182Qc",
	"title": "Header_title__1vi4d",
	"advancedTitle": "Header_advancedTitle__1Wo9B",
	"score": "Header_score__r30aQ"
};


/***/ }),

/***/ "./styles/Play.module.css":
/*!********************************!*\
  !*** ./styles/Play.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Play_container__12KeM",
	"playbuttons": "Play_playbuttons__linVC",
	"threegrid": "Play_threegrid__R_J9h",
	"twogrid": "Play_twogrid__1FOH3",
	"scissor": "Play_scissor__ph_Pk",
	"sci2": "Play_sci2__GR3kV",
	"rock2": "Play_rock2__1sqUU",
	"rock": "Play_rock__3OBtA",
	"paper2": "Play_paper2__1gOaC",
	"paper": "Play_paper__2rMin",
	"lizard": "Play_lizard__2z4mb",
	"spock": "Play_spock__3lqqY",
	"inside": "Play_inside__3NBqx"
};


/***/ }),

/***/ "./styles/Results.module.css":
/*!***********************************!*\
  !*** ./styles/Results.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"results": "Results_results__2eRkP",
	"pending": "Results_pending__3mH2U",
	"pick": "Results_pick__V-Xxy",
	"house": "Results_house__3I8ql",
	"result": "Results_result__y3DW4",
	"win": "Results_win__3HO3j",
	"anim": "Results_anim__2G2CH",
	"anim2": "Results_anim2__2GFNz",
	"playBtn": "Results_playBtn__1aosU",
	"btn": "Results_btn__RQjyi"
};


/***/ }),

/***/ "./styles/Rules.module.css":
/*!*********************************!*\
  !*** ./styles/Rules.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"rules": "Rules_rules__1DVyu",
	"title": "Rules_title__1Jgwt",
	"image": "Rules_image__2vutS"
};


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BsYXkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGxheUJ1dHRvbnMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVzdWx0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SdWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NoYXJlZC9yYW5kb21JbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3J1bGVzLnRzIiwid2VicGFjazovLy8uL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9SZXN1bHRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1J1bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwiY2xhc3NOIiwiY2hpbGRyZW4iLCJsaWQiLCJvbkNsaWNLIiwic3R5bGVzIiwiaW5zaWRlIiwiSGVhZGVyIiwiYWR2YW5jZWQiLCJzY29yZSIsImhlYWRlciIsImFkdmFuY2VkVGl0bGUiLCJ0aXRsZSIsIlBsYXkiLCJzZXRzZWxlY3RlZCIsInNjYWxlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNvbnRhaW5lciIsInZhbHVlIiwiUGxheUJ1dHRvbnMiLCJvbkNMaWNrIiwicGxheWJ1dHRvbnMiLCJ0aHJlZWdyaWQiLCJzY2lzc29yIiwic3BvY2siLCJwYXBlciIsImxpemFyZCIsInJvY2siLCJ0d29ncmlkIiwic2NpMiIsInBhcGVyMiIsInJvY2syIiwiUmVzdWx0cyIsInNlbGVjdGVkIiwic2V0c2NvcmUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJ1c2VTdGF0ZSIsImhvdXNlIiwic2V0SG91c2UiLCJzaG93Iiwic2V0U2hvdyIsInVzZUVmZmVjdCIsInJhbmRvbU51bSIsInJhbmRvbUludCIsInVzZXJTZWxlY3RlZCIsIkdhbWVSdWxlcyIsInNldFRpbWVvdXQiLCJiZWF0cyIsImluY2x1ZGVzIiwicmVzdWx0cyIsInBlbmRpbmciLCJwaWNrIiwid2luIiwieSIsImxvb3AiLCJzdHlsZXMyIiwiYnRuIiwic2NhbGVYIiwicGxheUJ0biIsIlJ1bGVzIiwib3BlbiIsInNldG9wZW4iLCJib3JkZXJSYWRpdXMiLCJydWxlcyIsImltYWdlIiwiSG9tZSIsImFkdmFuY2VkTW9kZSIsInNldEFkdmFuY2VkTW9kZSIsInNldE9wZW4iLCJzZXRTZWxlY3RlZCIsInNldFNjb3JlIiwiY2hhbmdlTW9kZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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LE1BQUQsRUFBUyxPQUFUO0FBRlQsQ0FOdUIsRUFVdkI7QUFDRTlCLE9BQUssRUFBRSxNQURUO0FBRUU4QixPQUFLLEVBQUUsQ0FBQyxTQUFELEVBQVksUUFBWjtBQUZULENBVnVCLEVBY3ZCO0FBQ0U5QixPQUFLLEVBQUUsT0FEVDtBQUVFOEIsT0FBSyxFQUFFLENBQUMsU0FBRCxFQUFZLE1BQVo7QUFGVCxDQWR1QixFQWtCdkI7QUFDRTlCLE9BQUssRUFBRSxRQURUO0FBRUU4QixPQUFLLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVjtBQUZULENBbEJ1QixDQUFsQixDOzs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcblxyXG50eXBlIEJ1dHRvblByb3BzID0ge1xyXG4gIGNsYXNzTjogc3RyaW5nO1xyXG4gIGxpZD86IHN0cmluZztcclxuICBvbkNsaWNLPzogKCkgPT4ge307XHJcbn07XHJcblxyXG5jb25zdCBCdXR0b246IEZ1bmN0aW9uQ29tcG9uZW50PEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgY2xhc3NOLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGxpZCxcclxuICBvbkNsaWNLID0gKCkgPT4ge30sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXYgb25DbGljaz17KCkgPT4gb25DbGljSygpfSBsYXlvdXRJZD17bGlkfSBjbGFzc05hbWU9e2NsYXNzTn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5zaWRlfT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHsgQW5pbWF0ZVNoYXJlZExheW91dCwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzc1wiO1xyXG5cclxudHlwZSBIZWFkZXJQcm9wcyA9IHtcclxuICBhZHZhbmNlZDogYm9vbGVhbjtcclxuICBzY29yZT86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXI6IEZ1bmN0aW9uQ29tcG9uZW50PEhlYWRlclByb3BzPiA9ICh7IGFkdmFuY2VkLCBzY29yZSB9KSA9PiAoXHJcbiAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXthZHZhbmNlZCA/IHN0eWxlcy5hZHZhbmNlZFRpdGxlIDogc3R5bGVzLnRpdGxlfVxyXG4gICAgICAgIGxheW91dFxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdj5Sb2NrPC9kaXY+XHJcbiAgICAgICAgPGRpdj5QYXBlcjwvZGl2PlxyXG4gICAgICAgIDxkaXY+U2Npc3NvcnM8L2Rpdj5cclxuICAgICAgICB7YWR2YW5jZWQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5MaXphcmQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5TcG9jazwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjb3JlfT5cclxuICAgICAgICA8aDQ+U2NvcmU8L2g0PlxyXG4gICAgICAgIDxoMT57c2NvcmV9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbik7XHJcbiIsImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBQbGF5QnV0dG9ucyBmcm9tIFwiLi9QbGF5QnV0dG9uc1wiO1xyXG5cclxudHlwZSBQbGF5UHJvcHMgPSB7XHJcbiAgYWR2YW5jZWQ6IGJvb2xlYW47XHJcbiAgc2V0c2VsZWN0ZWQ/OiBhbnk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGxheTogRnVuY3Rpb25Db21wb25lbnQ8UGxheVByb3BzPiA9ICh7XHJcbiAgYWR2YW5jZWQsXHJcbiAgc2V0c2VsZWN0ZWQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBzY2FsZTogMCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19XHJcbiAgICAgIGV4aXQ9e3tcclxuICAgICAgICBzY2FsZTogMCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMiB9LFxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICA+XHJcbiAgICAgIHthZHZhbmNlZCA/IChcclxuICAgICAgICA8aW1nIHNyYz1cIi9iZy1wZW50YWdvbi5zdmdcIiAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2JnLXRyaWFuZ2xlLnN2Z1wiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxQbGF5QnV0dG9uc1xyXG4gICAgICAgIG9uQ0xpY2s9eyh2YWx1ZSkgPT4gc2V0c2VsZWN0ZWQodmFsdWUpfVxyXG4gICAgICAgIGFkdmFuY2VkPXthZHZhbmNlZH1cclxuICAgICAgLz5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0LCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1BsYXkubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5cclxudHlwZSBQbGF5QnV0dG9uUHJvcHMgPSB7XHJcbiAgYWR2YW5jZWQ6IGJvb2xlYW47XHJcbiAgb25DTGljazogYW55O1xyXG59O1xyXG5cclxuY29uc3QgUGxheUJ1dHRvbnM6IEZ1bmN0aW9uQ29tcG9uZW50PFBsYXlCdXR0b25Qcm9wcz4gPSAoe1xyXG4gIGFkdmFuY2VkLFxyXG4gIG9uQ0xpY2ssXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXlidXR0b25zfT5cclxuICAgICAgICB7YWR2YW5jZWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRocmVlZ3JpZH0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNLPXsoKSA9PiBvbkNMaWNrKDApfVxyXG4gICAgICAgICAgICAgIGNsYXNzTj17c3R5bGVzLnNjaXNzb3J9XHJcbiAgICAgICAgICAgICAgbGlkPVwic2Npc3NvclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29uLXNjaXNzb3Iuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljSz17KCkgPT4gb25DTGljaygzKX0gY2xhc3NOPXtzdHlsZXMuc3BvY2t9PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29uLXNwb2NrLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljSz17KCkgPT4gb25DTGljaygxKX1cclxuICAgICAgICAgICAgICBjbGFzc049e3N0eWxlcy5wYXBlcn1cclxuICAgICAgICAgICAgICBsaWQ9XCJwYXBlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29uLXBhcGVyLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY0s9eygpID0+IG9uQ0xpY2soNCl9IGNsYXNzTj17c3R5bGVzLmxpemFyZH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbi1saXphcmQuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljSz17KCkgPT4gb25DTGljaygyKX0gY2xhc3NOPXtzdHlsZXMucm9ja30gbGlkPVwicm9ja1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb24tcm9jay5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR3b2dyaWR9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY0s9eygpID0+IG9uQ0xpY2soMCl9IGNsYXNzTj17c3R5bGVzLnNjaTJ9IGxpZD1cInNjaVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb24tc2Npc3Nvci5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY0s9eygpID0+IG9uQ0xpY2soMSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOPXtzdHlsZXMucGFwZXIyfVxyXG4gICAgICAgICAgICAgIGxpZD1cInBhcGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb24tcGFwZXIuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljSz17KCkgPT4gb25DTGljaygyKX0gY2xhc3NOPXtzdHlsZXMucm9jazJ9IGxpZD1cInJvY2tcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29uLXJvY2suc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlCdXR0b25zO1xyXG4iLCJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4uL3NoYXJlZC9yYW5kb21JbnRcIjtcclxuaW1wb3J0IHsgR2FtZVJ1bGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9ydWxlc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUmVzdWx0cy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBzdHlsZXMyIGZyb20gXCIuLi9zdHlsZXMvUGxheS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcblxyXG50eXBlIFJlc3VsdHNQcm9wcyA9IHtcclxuICBzZWxlY3RlZDogbnVtYmVyO1xyXG4gIGFkdmFuY2VkOiBib29sZWFuO1xyXG4gIHNldHNlbGVjdGVkOiBhbnk7XHJcbiAgc2V0c2NvcmU6IGFueTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHRzOiBGdW5jdGlvbkNvbXBvbmVudDxSZXN1bHRzUHJvcHM+ID0gKHtcclxuICBzZWxlY3RlZCxcclxuICBzZXRzZWxlY3RlZCxcclxuICBzZXRzY29yZSxcclxuICBhZHZhbmNlZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaG91c2UsIHNldEhvdXNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tTnVtID0gcmFuZG9tSW50KGFkdmFuY2VkID8gNSA6IDMpO1xyXG4gICAgY29uc3QgdXNlclNlbGVjdGVkID0gR2FtZVJ1bGVzW3NlbGVjdGVkXS52YWx1ZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgc2V0SG91c2UoR2FtZVJ1bGVzW3JhbmRvbU51bV0udmFsdWUpO1xyXG4gICAgICBpZiAoR2FtZVJ1bGVzW3JhbmRvbU51bV0uYmVhdHMuaW5jbHVkZXModXNlclNlbGVjdGVkKSkge1xyXG4gICAgICAgIHNldFJlc3VsdChcIkxvc2VcIik7XHJcbiAgICAgICAgc2V0c2NvcmUoKHNjb3JlKSA9PiBzY29yZSAtIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChHYW1lUnVsZXNbcmFuZG9tTnVtXS52YWx1ZSA9PT0gdXNlclNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBzZXRSZXN1bHQoXCJUaWVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFJlc3VsdChcIndpblwiKTtcclxuICAgICAgICAgIHNldHNjb3JlKChzY29yZSkgPT4gc2NvcmUgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDIwMDApO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Nob3cgPyBzdHlsZXMucmVzdWx0cyA6IHN0eWxlcy5wZW5kaW5nfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWNrfT5cclxuICAgICAgICA8aDM+WW91IFBpY2tlZDwvaDM+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17cmVzdWx0ID09PSBcIndpblwiID8gc3R5bGVzLndpbiA6IHN0eWxlcy5ob3VzZX1cclxuICAgICAgICAgIGluaXRpYWw9e3sgeTogMjAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgdHJhbnNpdGlvbjogeyBsb29wOiAzIH0gfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTj17YCR7c3R5bGVzMltHYW1lUnVsZXNbc2VsZWN0ZWRdLnZhbHVlXX0gJHtzdHlsZXMuYnRufWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgL2ljb24tJHtHYW1lUnVsZXNbc2VsZWN0ZWRdLnZhbHVlfS5zdmdgfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGlja30+XHJcbiAgICAgICAgPGgzPkhvdXNlIFBpY2tlZDwvaDM+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17cmVzdWx0ID09PSBcIkxvc2VcIiA/IHN0eWxlcy53aW4gOiBzdHlsZXMuaG91c2V9XHJcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDIwIH19XHJcbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIHRyYW5zaXRpb246IHsgbG9vcDogMyB9IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2hvdXNlICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc049e2Ake3N0eWxlczJbaG91c2VdfSAke3N0eWxlcy5idG59YH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2AvaWNvbi0ke2hvdXNlfS5zdmdgfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PlxyXG4gICAgICAgIHtzaG93ICYmIChcclxuICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9e3sgc2NhbGVYOiAwIH19IGFuaW1hdGU9e3sgc2NhbGVYOiAxIH19PlxyXG4gICAgICAgICAgICA8aDI+WW91IHtyZXN1bHR9PC9oMj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdG59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0c2VsZWN0ZWQoLTEpO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KFwiXCIpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQbGF5IGFnYWluXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1J1bGVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbnR5cGUgUnVsZXNQcm9wcyA9IHtcclxuICBhZHZhbmNlZDogYm9vbGVhbjtcclxuICBzZXRvcGVuPzogYW55O1xyXG4gIG9wZW4/OiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJ1bGVzOiBGdW5jdGlvbkNvbXBvbmVudDxSdWxlc1Byb3BzPiA9ICh7XHJcbiAgb3BlbixcclxuICBhZHZhbmNlZCxcclxuICBzZXRvcGVuLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIHtvcGVuICYmIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgYm9yZGVyUmFkaXVzOiBcIjAlXCIgfX1cclxuICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucnVsZXN9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRvcGVuKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIDxoMT5SdWxlczwvaDE+XHJcbiAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiBzcmM9XCIvaWNvbi1jbG9zZS5zdmdcIiBhbHQ9XCJjbG9zZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICB7YWR2YW5jZWQgPyAoXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2UtcnVsZXMtYm9udXMuc3ZnXCIgYWx0PVwicnVsZXMgZm9yIGFkdmFuY2VkXCIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZS1ydWxlcy5zdmdcIiBhbHQ9XCJydWxlcyBmb3Igbm9ybWFsXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgKX1cclxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCB7IFBsYXkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QbGF5XCI7XHJcbmltcG9ydCB7IFJ1bGVzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUnVsZXNcIjtcclxuaW1wb3J0IHsgUmVzdWx0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Jlc3VsdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2FkdmFuY2VkTW9kZSwgc2V0QWR2YW5jZWRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlTW9kZShldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEFkdmFuY2VkTW9kZSghYWR2YW5jZWRNb2RlKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5ST0NLIFBBUEVSIFNDSVNTT1JTPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciBhZHZhbmNlZD17YWR2YW5jZWRNb2RlfSBzY29yZT17c2NvcmV9IC8+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtjaGFuZ2VNb2RlfSBjbGFzc05hbWU9XCJtb2Rlc1wiPlxyXG4gICAgICAgICAge2FkdmFuY2VkTW9kZSA/IFwiTm9ybWFsXCIgOiBcIkFkdmFuY2VkXCJ9IE1vZGVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICB7c2VsZWN0ZWQgPj0gMCA/IChcclxuICAgICAgICA8UmVzdWx0c1xyXG4gICAgICAgICAgYWR2YW5jZWQ9e2FkdmFuY2VkTW9kZX1cclxuICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgIHNldHNlbGVjdGVkPXsodmFsdWUpID0+IHNldFNlbGVjdGVkKHZhbHVlKX1cclxuICAgICAgICAgIHNldHNjb3JlPXtzZXRTY29yZX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxQbGF5XHJcbiAgICAgICAgICBzZXRzZWxlY3RlZD17KHZhbHVlKSA9PiBzZXRTZWxlY3RlZCh2YWx1ZSl9XHJcbiAgICAgICAgICBhZHZhbmNlZD17YWR2YW5jZWRNb2RlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8UnVsZXNcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIGFkdmFuY2VkPXthZHZhbmNlZE1vZGV9XHJcbiAgICAgICAgc2V0b3Blbj17KCkgPT4gc2V0T3Blbighb3Blbil9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCByYW5kb21JbnQgPSBmdW5jdGlvbiAobjogbnVtYmVyKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBHYW1lUnVsZXMgPSBbXHJcbiAge1xyXG4gICAgdmFsdWU6IFwic2Npc3NvclwiLFxyXG4gICAgYmVhdHM6IFtcInBhcGVyXCIsIFwibGl6YXJkXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHZhbHVlOiBcInBhcGVyXCIsXHJcbiAgICBiZWF0czogW1wicm9ja1wiLCBcInNwb2NrXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IFwicm9ja1wiLFxyXG4gICAgYmVhdHM6IFtcInNjaXNzb3JcIiwgXCJsaXphcmRcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogXCJzcG9ja1wiLFxyXG4gICAgYmVhdHM6IFtcInNjaXNzb3JcIiwgXCJyb2NrXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IFwibGl6YXJkXCIsXHJcbiAgICBiZWF0czogW1wic3BvY2tcIiwgXCJwYXBlclwiXSxcclxuICB9LFxyXG5dO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18xODJRY1wiLFxuXHRcInRpdGxlXCI6IFwiSGVhZGVyX3RpdGxlX18xdmk0ZFwiLFxuXHRcImFkdmFuY2VkVGl0bGVcIjogXCJIZWFkZXJfYWR2YW5jZWRUaXRsZV9fMVdvOUJcIixcblx0XCJzY29yZVwiOiBcIkhlYWRlcl9zY29yZV9fcjMwYVFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBsYXlfY29udGFpbmVyX18xMktlTVwiLFxuXHRcInBsYXlidXR0b25zXCI6IFwiUGxheV9wbGF5YnV0dG9uc19fbGluVkNcIixcblx0XCJ0aHJlZWdyaWRcIjogXCJQbGF5X3RocmVlZ3JpZF9fUl9KOWhcIixcblx0XCJ0d29ncmlkXCI6IFwiUGxheV90d29ncmlkX18xRk9IM1wiLFxuXHRcInNjaXNzb3JcIjogXCJQbGF5X3NjaXNzb3JfX3BoX1BrXCIsXG5cdFwic2NpMlwiOiBcIlBsYXlfc2NpMl9fR1Iza1ZcIixcblx0XCJyb2NrMlwiOiBcIlBsYXlfcm9jazJfXzFzcVVVXCIsXG5cdFwicm9ja1wiOiBcIlBsYXlfcm9ja19fM09CdEFcIixcblx0XCJwYXBlcjJcIjogXCJQbGF5X3BhcGVyMl9fMWdPYUNcIixcblx0XCJwYXBlclwiOiBcIlBsYXlfcGFwZXJfXzJyTWluXCIsXG5cdFwibGl6YXJkXCI6IFwiUGxheV9saXphcmRfXzJ6NG1iXCIsXG5cdFwic3BvY2tcIjogXCJQbGF5X3Nwb2NrX18zbHFxWVwiLFxuXHRcImluc2lkZVwiOiBcIlBsYXlfaW5zaWRlX18zTkJxeFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmVzdWx0c1wiOiBcIlJlc3VsdHNfcmVzdWx0c19fMmVSa1BcIixcblx0XCJwZW5kaW5nXCI6IFwiUmVzdWx0c19wZW5kaW5nX18zbUgyVVwiLFxuXHRcInBpY2tcIjogXCJSZXN1bHRzX3BpY2tfX1YtWHh5XCIsXG5cdFwiaG91c2VcIjogXCJSZXN1bHRzX2hvdXNlX18zSThxbFwiLFxuXHRcInJlc3VsdFwiOiBcIlJlc3VsdHNfcmVzdWx0X195M0RXNFwiLFxuXHRcIndpblwiOiBcIlJlc3VsdHNfd2luX18zSE8zalwiLFxuXHRcImFuaW1cIjogXCJSZXN1bHRzX2FuaW1fXzJHMkNIXCIsXG5cdFwiYW5pbTJcIjogXCJSZXN1bHRzX2FuaW0yX18yR0ZOelwiLFxuXHRcInBsYXlCdG5cIjogXCJSZXN1bHRzX3BsYXlCdG5fXzFhb3NVXCIsXG5cdFwiYnRuXCI6IFwiUmVzdWx0c19idG5fX1JRanlpXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJydWxlc1wiOiBcIlJ1bGVzX3J1bGVzX18xRFZ5dVwiLFxuXHRcInRpdGxlXCI6IFwiUnVsZXNfdGl0bGVfXzFKZ3d0XCIsXG5cdFwiaW1hZ2VcIjogXCJSdWxlc19pbWFnZV9fMnZ1dFNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9