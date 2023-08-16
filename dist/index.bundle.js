"use strict";
(self["webpackChunkDevelopment"] = self["webpackChunkDevelopment"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Box sizing rules and easier REM calculations */

html {
  box-sizing: border-box;
  font-size: 10px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* START OF STYLES */

/* ELEMENT STYLES */

body {
    font-size: 1.6rem;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

p {
    display: block;
}

/* UTILITY CLASSES */

.flex {
    display: flex;
}

.grid {
    display: grid;
}

.fixed {
    position: fixed;
}

.zi-10 {
    z-index: 10;
}

/* HEADER AND FOOTER */

#page-header,
#page-footer {
    background: slategrey;
    width: 100%;
}

#page-footer {
    bottom: 0;
    height: 10vh;
}

#page-header {
    top: 0;
    height: 15vh;
}

#header-tab-flex {
    align-items: end;
}

#header-tab-flex,
#colorscheme-switch-flex {
    justify-content: space-around;
    height: 100%;
}

#colorscheme-flex {
    padding-bottom: 1rem;
}

#tab-flex {
    gap: 1.5rem;
    width: 40%;
    justify-content: space-between;
}

.tab {
    background: hsl(0, 0%, 100%);
    scale: 1;
    transform: translateY(0);
    transition: background 300ms ease-in-out,
                transform 300ms ease-in-out,
                scale 300ms ease-in-out;

    height: 40px;
    width: 140px;
    padding-top: 0.5rem;
    text-align: center;
    border-radius: 2rem 0.5rem 0 0;
    cursor: pointer;
}

.tab:hover,
.tab:focus-within {
    scale: 1.1;
    background: hsl(0, 0%, 70%);
    transform: translateY(-2px);
}

#colorscheme-flex {
    flex-direction: column;
    padding-right: 1rem;
}

#recipe-search {
    padding-left: 1.5rem;
    border-radius: 9999px;
}

#welcome-page,
#menu-page,
#contact-page {
    position: relative;
    z-index: 0;
    top: 0;
    opacity: 1;
    margin-top: 15vh;
    height: 75vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 350ms ease-in-out,
                top 300ms ease-in-out;
}

#welcome-page.hide-bottom,
#menu-page.hide-bottom, 
#contact-page.hide-bottom {
    top: 150%;
    opacity: 0;
}

#welcome-page.hide-top,
#menu-page.hide-top, 
#contact-page.hide-top {
    top: -50%;
    opacity: 0;
}

#menu-content {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
    gap: 1rem;
    opacity: 1;
    transition: opacity 300ms ease-in-out;
}

#menu-content.disappear {
    opacity: 0;
}

.menu-card {
    opacity: 1;
    padding: 1rem;
    gap: 1rem;
    border: 1px solid black;
    border-radius: 2rem 0.5rem 2rem 0.5rem;
    cursor: pointer;
    transition: opacity 300ms ease-in-out;
}

.menu-card.disappaear {
    opacity: 0;
}

#menu-title {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
}

#menu-title.disappear {
    opacity: 0;
}

.menu-card.expanded {
    position: absolute;
    top: 2vh;
    left: 15vw;
    height: 70vh;
    width: 70vw;
}

.menu-card-title {
    flex-basis: 1;
}

.menu-description {
    flex-basis: 3;
}

#contact-card {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(6, 1fr);
    padding: 1rem;
}

#contact-card > h2 {
    grid-column: 1 / 7;
    text-align: center;
    margin-bottom: 1rem;
}

#contact-card > h3 {
    text-align: right;
    grid-column: 1 / 3;
}

#contact-card > p {
    line-height: 1.8;
    grid-column: 4 / 7;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,iDAAiD;;AAEjD;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;GACC,qBAAqB;EACtB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;;AAEA,oBAAoB;;AAEpB,mBAAmB;;AAEnB;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA,oBAAoB;;AAEpB;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA,sBAAsB;;AAEtB;;IAEI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,MAAM;IACN,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;IAC5B,QAAQ;IACR,wBAAwB;IACxB;;uCAEmC;;IAEnC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;;IAEI,UAAU;IACV,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;;;IAGI,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB;qCACiC;AACrC;;AAEA;;;IAGI,SAAS;IACT,UAAU;AACd;;AAEA;;;IAGI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,SAAS;IACT,UAAU;IACV,qCAAqC;AACzC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,sCAAsC;IACtC,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,qCAAqC;AACzC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,qCAAqC;IACrC,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB","sourcesContent":["/* Box sizing rules and easier REM calculations */\n\nhtml {\n  box-sizing: border-box;\n  font-size: 10px;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* START OF STYLES */\n\n/* ELEMENT STYLES */\n\nbody {\n    font-size: 1.6rem;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\np {\n    display: block;\n}\n\n/* UTILITY CLASSES */\n\n.flex {\n    display: flex;\n}\n\n.grid {\n    display: grid;\n}\n\n.fixed {\n    position: fixed;\n}\n\n.zi-10 {\n    z-index: 10;\n}\n\n/* HEADER AND FOOTER */\n\n#page-header,\n#page-footer {\n    background: slategrey;\n    width: 100%;\n}\n\n#page-footer {\n    bottom: 0;\n    height: 10vh;\n}\n\n#page-header {\n    top: 0;\n    height: 15vh;\n}\n\n#header-tab-flex {\n    align-items: end;\n}\n\n#header-tab-flex,\n#colorscheme-switch-flex {\n    justify-content: space-around;\n    height: 100%;\n}\n\n#colorscheme-flex {\n    padding-bottom: 1rem;\n}\n\n#tab-flex {\n    gap: 1.5rem;\n    width: 40%;\n    justify-content: space-between;\n}\n\n.tab {\n    background: hsl(0, 0%, 100%);\n    scale: 1;\n    transform: translateY(0);\n    transition: background 300ms ease-in-out,\n                transform 300ms ease-in-out,\n                scale 300ms ease-in-out;\n\n    height: 40px;\n    width: 140px;\n    padding-top: 0.5rem;\n    text-align: center;\n    border-radius: 2rem 0.5rem 0 0;\n    cursor: pointer;\n}\n\n.tab:hover,\n.tab:focus-within {\n    scale: 1.1;\n    background: hsl(0, 0%, 70%);\n    transform: translateY(-2px);\n}\n\n#colorscheme-flex {\n    flex-direction: column;\n    padding-right: 1rem;\n}\n\n#recipe-search {\n    padding-left: 1.5rem;\n    border-radius: 9999px;\n}\n\n#welcome-page,\n#menu-page,\n#contact-page {\n    position: relative;\n    z-index: 0;\n    top: 0;\n    opacity: 1;\n    margin-top: 15vh;\n    height: 75vh;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    transition: opacity 350ms ease-in-out,\n                top 300ms ease-in-out;\n}\n\n#welcome-page.hide-bottom,\n#menu-page.hide-bottom, \n#contact-page.hide-bottom {\n    top: 150%;\n    opacity: 0;\n}\n\n#welcome-page.hide-top,\n#menu-page.hide-top, \n#contact-page.hide-top {\n    top: -50%;\n    opacity: 0;\n}\n\n#menu-content {\n    grid-template-columns: repeat(2, 1fr);\n    padding: 1rem;\n    gap: 1rem;\n    opacity: 1;\n    transition: opacity 300ms ease-in-out;\n}\n\n#menu-content.disappear {\n    opacity: 0;\n}\n\n.menu-card {\n    opacity: 1;\n    padding: 1rem;\n    gap: 1rem;\n    border: 1px solid black;\n    border-radius: 2rem 0.5rem 2rem 0.5rem;\n    cursor: pointer;\n    transition: opacity 300ms ease-in-out;\n}\n\n.menu-card.disappaear {\n    opacity: 0;\n}\n\n#menu-title {\n    opacity: 1;\n    transition: opacity 300ms ease-in-out;\n}\n\n#menu-title.disappear {\n    opacity: 0;\n}\n\n.menu-card.expanded {\n    position: absolute;\n    top: 2vh;\n    left: 15vw;\n    height: 70vh;\n    width: 70vw;\n}\n\n.menu-card-title {\n    flex-basis: 1;\n}\n\n.menu-description {\n    flex-basis: 3;\n}\n\n#contact-card {\n    display: grid;\n    gap: 0.5rem;\n    grid-template-columns: repeat(6, 1fr);\n    padding: 1rem;\n}\n\n#contact-card > h2 {\n    grid-column: 1 / 7;\n    text-align: center;\n    margin-bottom: 1rem;\n}\n\n#contact-card > h3 {\n    text-align: right;\n    grid-column: 1 / 3;\n}\n\n#contact-card > p {\n    line-height: 1.8;\n    grid-column: 4 / 7;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactPage)
/* harmony export */ });
function ContactPage() {
    const contact = document.createElement('div');

    contact.id = "contact-page";
    contact.classList.add('flex');

    contact.innerHTML = `
        <div id="contact-card" class="flex">
            <h2>Contact Us</h2>
            <h3>Phone:</h3>
            <p id="restaurant-contact-phone">000-0000-0000</p><br>
            <h3>Email:</h3>
            <p id="restaurant-contact-email">this@restaurant.com</p><br>
            <h3>Address:</h3>
            <p id="restaurant-contact-address">12 Astreet<br> SomePartOfTown<br> Big
            City<br> 115-4432<br> Earth</p>
        </div>
    `;

    return contact;
}


/***/ }),

/***/ "./src/header-footer.js":
/*!******************************!*\
  !*** ./src/header-footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageFooter: () => (/* binding */ pageFooter),
/* harmony export */   pageHeader: () => (/* binding */ pageHeader)
/* harmony export */ });
function pageHeader() {
    const welcomeHeader = document.createElement('header');

    welcomeHeader.id = "page-header";
    welcomeHeader.classList.add('fixed');
    welcomeHeader.classList.add('zi-10');

    welcomeHeader.innerHTML = `
            <div id="header-tab-flex" class="flex">
                <div id="tab-flex" class="flex">
                    <div id="welcome-tab" class="tab">Welcome</div>
                    <div id="menu-tab" class="tab">Menu</div>
                    <div id="contact-tab" class="tab">Contact</div>
                </div>

                <div id="colorscheme-flex" class="flex">
                    <label for="colorscheme-switch">Colorscheme</label>
                    <div id="colorscheme-switch-flex" class="flex">
                        <input id="dark-scheme" name="colorscheme-switch" type="radio">
                        <input id="light-scheme" name="colorscheme-switch" type="radio">
                    </div>
            </div>
        `;

    return welcomeHeader;
}

function pageFooter() {
    const footer = document.createElement('footer');

    footer.id = "page-footer";
    footer.classList.add('fixed');

    footer.innerHTML = `
            <div id="copywrite">Copywrite - A Chef</div>
            <ul id="footer-links-flex" class="flex">
                <li class="icon"><a href="#"></a></li>
                <li class="icon"><a href="#"></a></li>
                <li class="icon"><a href="#"></a></li>
            </ul>
    `;

    return footer;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _welcome_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-page.js */ "./src/welcome-page.js");
/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page.js */ "./src/menu-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _header_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-footer.js */ "./src/header-footer.js");






document.body.appendChild((0,_header_footer_js__WEBPACK_IMPORTED_MODULE_4__.pageHeader)());
document.body.appendChild((0,_welcome_page_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
document.body.appendChild((0,_header_footer_js__WEBPACK_IMPORTED_MODULE_4__.pageFooter)());

const content = document.getElementById('page-content');
const tabs = Array.from(document.querySelectorAll('.tab'));

// TAB EVENT LISTENERS 

tabs.forEach(tab => {
    tab.addEventListener('click', handleTab);
});

function handleTab(ev) {
    const toRemove = content.querySelectorAll('[id$="-page"]')[0];

    if (ev.target.id === "welcome-tab") {
        const toAdd = (0,_welcome_page_js__WEBPACK_IMPORTED_MODULE_1__.welcomePageContent)();
        toRemove.classList.add("hide-top");
        toAdd.classList.add("hide-bottom");
        content.appendChild(toAdd);

        setTimeout(() => {
            toAdd.classList.remove("hide-bottom");
            content.removeChild(toRemove);
        }, 310);
    } else if (ev.target.id === "menu-tab") {
        const toAdd = (0,_menu_page_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

        toRemove.classList.add("hide-top");
        toAdd.classList.add("hide-bottom");
        content.appendChild(toAdd);

        setTimeout(() => {
            toAdd.classList.remove("hide-bottom");
            content.removeChild(toRemove);
        }, 310);
    } else if (ev.target.id === "contact-tab") {
        const toAdd = (0,_contact_page__WEBPACK_IMPORTED_MODULE_3__["default"])();

        toRemove.classList.add("hide-top");
        toAdd.classList.add("hide-bottom");
        content.appendChild(toAdd);

        setTimeout(() => {
            toAdd.classList.remove("hide-bottom");
            content.removeChild(toRemove);
        }, 310);
    }
};


/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuPage)
/* harmony export */ });
function MenuPage() {
    const menuContent = document.createElement('div');

    menuContent.id = "menu-page";
    menuContent.classList.add('flex');

    menuContent.innerHTML = `
        <h1 id="menu-title">Menu</h1>
        <div id="menu-content" class="grid">
            <div id="tapas-card" class="menu-card flex">
                <h3 class="menu-card-title">Tapas</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum minima dicta, perspiciatis doloribus in facilis minus ex voluptatem distinctio.</p>
                <div class="order-buttons flex"></div>
            </div>
            <div id="paela-card" class="menu-card flex">
                <h3 class="menu-card-title">Paela</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi unde nostrum animi molestiae modi itaque velit. In, architecto obcaecati?</p>
                <div class="order-buttons flex"></div>
            </div>
            <div id="ham-sandwich-card" class="menu-card flex">
                <h3 class="menu-card-title">Ham Sandwich</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reprehenderit tenetur quas maiores repellendus cum placeat exercitationem assumenda deserunt eius?</p>
                <div class="order-buttons flex"></div>
            </div>
            <div id="el-burger-card" class="menu-card flex">
                <h3 class="menu-card-title">EL Burger</h3>
                <p class="menu-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reprehenderit tenetur quas maiores repellendus cum placeat exercitationem assumenda deserunt eius?</p>
                <div class="order-buttons flex"></div>
            </div>
        </div>

        `;

    const cards = Array.from(menuContent.querySelectorAll('.menu-card'));

    cards.forEach(card => {
        card.addEventListener("click", handleCardEvents);
    });

    return menuContent;
}

function selectImage(card) {
    const image = document.createElement('img');

    if (card.id === "el-burger-card") {
        image.src = "assets/burger.jpg";
    } else if (card.id === "tapas-card") {
        image.src = "assets/tapas.jpg";
    } else if (card.id === "paela-card") {
        image.src = "assets/paela.jpg";
    } else if (card.id === "ham-sandwich-card") {
        image.src = "assets/sandwich.jpg";
    }

    image.style.backgroundSize = "cover";
    image.style.backgroundRepeat = "no-repeat";


    return image;
}

function expandCard(card) {
    const menuPage = document.getElementById('menu-page');
    const menuContent = document.getElementById('menu-content');
    const menuTitle = document.getElementById('menu-title');

    menuContent.classList.add('disappear');
    menuTitle.classList.add('disappear');

    setTimeout(() => {
        card.classList.add('expanded');
        card.appendChild(selectImage(card));
        menuPage.appendChild(card);
    }, 500);
}

function shrinkCard(card) {
    const pageContent = document.getElementById('page-content');
    const menuPage = document.getElementById('menu-page');

    card.classList.add('disappear');

    setTimeout(() => {
        pageContent.removeChild(menuPage);
        pageContent.appendChild(MenuPage());
    }, 500);
}

function handleCardEvents(ev) {
    const target = ev.target.closest('.menu-card');

    if (target.classList.contains('expanded')) {
        shrinkCard(target);
    } else {
        const pageContent = document.getElementById('page-content');
        const cards = Array.from(pageContent.querySelectorAll('.menu-card'));
        cards.forEach(card => {
            if (card.id !== target.id) {
                card.classList.add('disappear');
            }
        });
        setTimeout(() => {
            expandCard(target);
        }, 400);
    }
}


/***/ }),

/***/ "./src/welcome-page.js":
/*!*****************************!*\
  !*** ./src/welcome-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageLoad),
/* harmony export */   welcomePageContent: () => (/* binding */ welcomePageContent)
/* harmony export */ });
/* harmony import */ var _header_footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-footer.js */ "./src/header-footer.js");


function PageLoad() {
    const welcome = document.createElement('div');

    welcome.id = "page-content";

    welcome.appendChild(welcomePageContent());
    return welcome;
}

function welcomePageContent() {
    const welcomeContent = document.createElement('div');

    welcomeContent.id = "welcome-page";
    welcomeContent.classList.add('flex');

    welcomeContent.innerHTML = `
            <h1 id="welcome-title">El Foodies</h1>
            <p id="welcome-text">Spanish food, for foodies.</p>
        `;

    return welcomeContent;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyx3RkFBd0YsTUFBTSxZQUFZLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxZQUFZLGVBQWUsVUFBVSxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFVBQVUsT0FBTyxZQUFZLFNBQVMsVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLGFBQWEsY0FBYyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsT0FBTyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFFBQVEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sT0FBTyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLHNGQUFzRiwyQkFBMkIsb0JBQW9CLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLCtGQUErRixjQUFjLEdBQUcscUpBQXFKLHFCQUFxQixHQUFHLHFEQUFxRCw0QkFBNEIsR0FBRyx3Q0FBd0Msc0JBQXNCLGtDQUFrQyxxQkFBcUIsR0FBRyxpRkFBaUYsbUNBQW1DLEdBQUcsMERBQTBELG9CQUFvQixtQkFBbUIsR0FBRyxvRkFBb0Ysa0JBQWtCLEdBQUcsZ0pBQWdKLHVCQUF1QiwyQkFBMkIsS0FBSyxvQ0FBb0MsNENBQTRDLDhDQUE4Qyw2Q0FBNkMsdUNBQXVDLEtBQUssR0FBRywyREFBMkQsd0JBQXdCLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxPQUFPLDRCQUE0QixHQUFHLE9BQU8scUJBQXFCLEdBQUcsb0NBQW9DLG9CQUFvQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsWUFBWSxzQkFBc0IsR0FBRyxZQUFZLGtCQUFrQixHQUFHLDREQUE0RCw0QkFBNEIsa0JBQWtCLEdBQUcsa0JBQWtCLGdCQUFnQixtQkFBbUIsR0FBRyxrQkFBa0IsYUFBYSxtQkFBbUIsR0FBRyxzQkFBc0IsdUJBQXVCLEdBQUcsaURBQWlELG9DQUFvQyxtQkFBbUIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcsZUFBZSxrQkFBa0IsaUJBQWlCLHFDQUFxQyxHQUFHLFVBQVUsbUNBQW1DLGVBQWUsK0JBQStCLHVJQUF1SSxxQkFBcUIsbUJBQW1CLDBCQUEwQix5QkFBeUIscUNBQXFDLHNCQUFzQixHQUFHLG9DQUFvQyxpQkFBaUIsa0NBQWtDLGtDQUFrQyxHQUFHLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLEdBQUcsb0JBQW9CLDJCQUEyQiw0QkFBNEIsR0FBRyxnREFBZ0QseUJBQXlCLGlCQUFpQixhQUFhLGlCQUFpQix1QkFBdUIsbUJBQW1CLDZCQUE2QiwwQkFBMEIsOEJBQThCLG9GQUFvRixHQUFHLHFGQUFxRixnQkFBZ0IsaUJBQWlCLEdBQUcsNEVBQTRFLGdCQUFnQixpQkFBaUIsR0FBRyxtQkFBbUIsNENBQTRDLG9CQUFvQixnQkFBZ0IsaUJBQWlCLDRDQUE0QyxHQUFHLDZCQUE2QixpQkFBaUIsR0FBRyxnQkFBZ0IsaUJBQWlCLG9CQUFvQixnQkFBZ0IsOEJBQThCLDZDQUE2QyxzQkFBc0IsNENBQTRDLEdBQUcsMkJBQTJCLGlCQUFpQixHQUFHLGlCQUFpQixpQkFBaUIsNENBQTRDLEdBQUcsMkJBQTJCLGlCQUFpQixHQUFHLHlCQUF5Qix5QkFBeUIsZUFBZSxpQkFBaUIsbUJBQW1CLGtCQUFrQixHQUFHLHNCQUFzQixvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsbUJBQW1CLG9CQUFvQixrQkFBa0IsNENBQTRDLG9CQUFvQixHQUFHLHdCQUF3Qix5QkFBeUIseUJBQXlCLDBCQUEwQixHQUFHLHdCQUF3Qix3QkFBd0IseUJBQXlCLEdBQUcsdUJBQXVCLHVCQUF1Qix5QkFBeUIsR0FBRyx1QkFBdUI7QUFDaG1OO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDN1MxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQk87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDcUI7QUFDNEM7QUFDM0I7QUFDRztBQUNtQjs7QUFFNUQsMEJBQTBCLDZEQUFVO0FBQ3BDLDBCQUEwQiw0REFBUTtBQUNsQywwQkFBMEIsNkRBQVU7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixvRUFBa0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ04sc0JBQXNCLHlEQUFROztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTixzQkFBc0IseURBQVc7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRzJEOztBQUU1QztBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL3NyYy9oZWFkZXItZm9vdGVyLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL3NyYy93ZWxjb21lLXBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJveCBzaXppbmcgcnVsZXMgYW5kIGVhc2llciBSRU0gY2FsY3VsYXRpb25zICovXG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxucCxcbmZpZ3VyZSxcbmJsb2NrcXVvdGUsXG5kbCxcbmRkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cbnVsW3JvbGU9J2xpc3QnXSxcbm9sW3JvbGU9J2xpc3QnXSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cbmh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuXG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIFNUQVJUIE9GIFNUWUxFUyAqL1xuXG4vKiBFTEVNRU5UIFNUWUxFUyAqL1xuXG5ib2R5IHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxucCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5maXhlZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uemktMTAge1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4vKiBIRUFERVIgQU5EIEZPT1RFUiAqL1xuXG4jcGFnZS1oZWFkZXIsXG4jcGFnZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlZ3JleTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3BhZ2UtZm9vdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMHZoO1xufVxuXG4jcGFnZS1oZWFkZXIge1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG5cbiNoZWFkZXItdGFiLWZsZXgge1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbiNoZWFkZXItdGFiLWZsZXgsXG4jY29sb3JzY2hlbWUtc3dpdGNoLWZsZXgge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2NvbG9yc2NoZW1lLWZsZXgge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4jdGFiLWZsZXgge1xuICAgIGdhcDogMS41cmVtO1xuICAgIHdpZHRoOiA0MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFiIHtcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgIHNjYWxlOiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICBzY2FsZSAzMDBtcyBlYXNlLWluLW91dDtcblxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAwLjVyZW0gMCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYjpob3Zlcixcbi50YWI6Zm9jdXMtd2l0aGluIHtcbiAgICBzY2FsZTogMS4xO1xuICAgIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgNzAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbiNjb2xvcnNjaGVtZS1mbGV4IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbiNyZWNpcGUtc2VhcmNoIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG5cbiN3ZWxjb21lLXBhZ2UsXG4jbWVudS1wYWdlLFxuI2NvbnRhY3QtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICBoZWlnaHQ6IDc1dmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzUwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgdG9wIDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jd2VsY29tZS1wYWdlLmhpZGUtYm90dG9tLFxuI21lbnUtcGFnZS5oaWRlLWJvdHRvbSwgXG4jY29udGFjdC1wYWdlLmhpZGUtYm90dG9tIHtcbiAgICB0b3A6IDE1MCU7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuI3dlbGNvbWUtcGFnZS5oaWRlLXRvcCxcbiNtZW51LXBhZ2UuaGlkZS10b3AsIFxuI2NvbnRhY3QtcGFnZS5oaWRlLXRvcCB7XG4gICAgdG9wOiAtNTAlO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbiNtZW51LWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jbWVudS1jb250ZW50LmRpc2FwcGVhciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLm1lbnUtY2FyZCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGdhcDogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDAuNXJlbSAycmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnUtY2FyZC5kaXNhcHBhZWFyIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4jbWVudS10aXRsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jbWVudS10aXRsZS5kaXNhcHBlYXIge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5tZW51LWNhcmQuZXhwYW5kZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDJ2aDtcbiAgICBsZWZ0OiAxNXZ3O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICB3aWR0aDogNzB2dztcbn1cblxuLm1lbnUtY2FyZC10aXRsZSB7XG4gICAgZmxleC1iYXNpczogMTtcbn1cblxuLm1lbnUtZGVzY3JpcHRpb24ge1xuICAgIGZsZXgtYmFzaXM6IDM7XG59XG5cbiNjb250YWN0LWNhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4jY29udGFjdC1jYXJkID4gaDIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI2NvbnRhY3QtY2FyZCA+IGgzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG59XG5cbiNjb250YWN0LWNhcmQgPiBwIHtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNztcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6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QXFDO0lBQ3JDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJveCBzaXppbmcgcnVsZXMgYW5kIGVhc2llciBSRU0gY2FsY3VsYXRpb25zICovXFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPSdsaXN0J10sXFxub2xbcm9sZT0nbGlzdCddIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbi8qIFNUQVJUIE9GIFNUWUxFUyAqL1xcblxcbi8qIEVMRU1FTlQgU1RZTEVTICovXFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLmZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5maXhlZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLnppLTEwIHtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi8qIEhFQURFUiBBTkQgRk9PVEVSICovXFxuXFxuI3BhZ2UtaGVhZGVyLFxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6IHNsYXRlZ3JleTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIge1xcbiAgICB0b3A6IDA7XFxuICAgIGhlaWdodDogMTV2aDtcXG59XFxuXFxuI2hlYWRlci10YWItZmxleCB7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbiNoZWFkZXItdGFiLWZsZXgsXFxuI2NvbG9yc2NoZW1lLXN3aXRjaC1mbGV4IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbG9yc2NoZW1lLWZsZXgge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI3RhYi1mbGV4IHtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIHNjYWxlOiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMzAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgc2NhbGUgMzAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMC41cmVtIDAgMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi50YWI6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA3MCUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcblxcbiNjb2xvcnNjaGVtZS1mbGV4IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuI3JlY2lwZS1zZWFyY2gge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG5cXG4jd2VsY29tZS1wYWdlLFxcbiNtZW51LXBhZ2UsXFxuI2NvbnRhY3QtcGFnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xcbiAgICBoZWlnaHQ6IDc1dmg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDM1MG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICB0b3AgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiN3ZWxjb21lLXBhZ2UuaGlkZS1ib3R0b20sXFxuI21lbnUtcGFnZS5oaWRlLWJvdHRvbSwgXFxuI2NvbnRhY3QtcGFnZS5oaWRlLWJvdHRvbSB7XFxuICAgIHRvcDogMTUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuI3dlbGNvbWUtcGFnZS5oaWRlLXRvcCxcXG4jbWVudS1wYWdlLmhpZGUtdG9wLCBcXG4jY29udGFjdC1wYWdlLmhpZGUtdG9wIHtcXG4gICAgdG9wOiAtNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jbWVudS1jb250ZW50IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbWVudS1jb250ZW50LmRpc2FwcGVhciB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tZW51LWNhcmQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDAuNXJlbSAycmVtIDAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1jYXJkLmRpc2FwcGFlYXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jbWVudS10aXRsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNtZW51LXRpdGxlLmRpc2FwcGVhciB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tZW51LWNhcmQuZXhwYW5kZWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMnZoO1xcbiAgICBsZWZ0OiAxNXZ3O1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbn1cXG5cXG4ubWVudS1jYXJkLXRpdGxlIHtcXG4gICAgZmxleC1iYXNpczogMTtcXG59XFxuXFxuLm1lbnUtZGVzY3JpcHRpb24ge1xcbiAgICBmbGV4LWJhc2lzOiAzO1xcbn1cXG5cXG4jY29udGFjdC1jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNjb250YWN0LWNhcmQgPiBoMiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jY29udGFjdC1jYXJkID4gaDMge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4jY29udGFjdC1jYXJkID4gcCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3QtcGFnZVwiO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuXG4gICAgY29udGFjdC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWN0LWNhcmRcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgIDxoMj5Db250YWN0IFVzPC9oMj5cbiAgICAgICAgICAgIDxoMz5QaG9uZTo8L2gzPlxuICAgICAgICAgICAgPHAgaWQ9XCJyZXN0YXVyYW50LWNvbnRhY3QtcGhvbmVcIj4wMDAtMDAwMC0wMDAwPC9wPjxicj5cbiAgICAgICAgICAgIDxoMz5FbWFpbDo8L2gzPlxuICAgICAgICAgICAgPHAgaWQ9XCJyZXN0YXVyYW50LWNvbnRhY3QtZW1haWxcIj50aGlzQHJlc3RhdXJhbnQuY29tPC9wPjxicj5cbiAgICAgICAgICAgIDxoMz5BZGRyZXNzOjwvaDM+XG4gICAgICAgICAgICA8cCBpZD1cInJlc3RhdXJhbnQtY29udGFjdC1hZGRyZXNzXCI+MTIgQXN0cmVldDxicj4gU29tZVBhcnRPZlRvd248YnI+IEJpZ1xuICAgICAgICAgICAgQ2l0eTxicj4gMTE1LTQ0MzI8YnI+IEVhcnRoPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFnZUhlYWRlcigpIHtcbiAgICBjb25zdCB3ZWxjb21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICB3ZWxjb21lSGVhZGVyLmlkID0gXCJwYWdlLWhlYWRlclwiO1xuICAgIHdlbGNvbWVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbiAgICB3ZWxjb21lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3ppLTEwJyk7XG5cbiAgICB3ZWxjb21lSGVhZGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItdGFiLWZsZXhcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGFiLWZsZXhcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndlbGNvbWUtdGFiXCIgY2xhc3M9XCJ0YWJcIj5XZWxjb21lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51LXRhYlwiIGNsYXNzPVwidGFiXCI+TWVudTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdC10YWJcIiBjbGFzcz1cInRhYlwiPkNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xvcnNjaGVtZS1mbGV4XCIgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb2xvcnNjaGVtZS1zd2l0Y2hcIj5Db2xvcnNjaGVtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xvcnNjaGVtZS1zd2l0Y2gtZmxleFwiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZGFyay1zY2hlbWVcIiBuYW1lPVwiY29sb3JzY2hlbWUtc3dpdGNoXCIgdHlwZT1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsaWdodC1zY2hlbWVcIiBuYW1lPVwiY29sb3JzY2hlbWUtc3dpdGNoXCIgdHlwZT1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICByZXR1cm4gd2VsY29tZUhlYWRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuaWQgPSBcInBhZ2UtZm9vdGVyXCI7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XG5cbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvcHl3cml0ZVwiPkNvcHl3cml0ZSAtIEEgQ2hlZjwvZGl2PlxuICAgICAgICAgICAgPHVsIGlkPVwiZm9vdGVyLWxpbmtzLWZsZXhcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpY29uXCI+PGEgaHJlZj1cIiNcIj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpY29uXCI+PGEgaHJlZj1cIiNcIj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpY29uXCI+PGEgaHJlZj1cIiNcIj48L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgYDtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgUGFnZUxvYWQsIHsgd2VsY29tZVBhZ2VDb250ZW50IH0gZnJvbSBcIi4vd2VsY29tZS1wYWdlLmpzXCI7XG5pbXBvcnQgTWVudVBhZ2UgZnJvbSBcIi4vbWVudS1wYWdlLmpzXCI7XG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdC1wYWdlXCI7XG5pbXBvcnQgeyBwYWdlSGVhZGVyLCBwYWdlRm9vdGVyIH0gZnJvbSBcIi4vaGVhZGVyLWZvb3Rlci5qc1wiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFBhZ2VMb2FkKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlRm9vdGVyKCkpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudCcpO1xuY29uc3QgdGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpKTtcblxuLy8gVEFCIEVWRU5UIExJU1RFTkVSUyBcblxudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVGFiKTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVUYWIoZXYpIHtcbiAgICBjb25zdCB0b1JlbW92ZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkJD1cIi1wYWdlXCJdJylbMF07XG5cbiAgICBpZiAoZXYudGFyZ2V0LmlkID09PSBcIndlbGNvbWUtdGFiXCIpIHtcbiAgICAgICAgY29uc3QgdG9BZGQgPSB3ZWxjb21lUGFnZUNvbnRlbnQoKTtcbiAgICAgICAgdG9SZW1vdmUuY2xhc3NMaXN0LmFkZChcImhpZGUtdG9wXCIpO1xuICAgICAgICB0b0FkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZS1ib3R0b21cIik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9BZGQpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG9BZGQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtYm90dG9tXCIpO1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZCh0b1JlbW92ZSk7XG4gICAgICAgIH0sIDMxMCk7XG4gICAgfSBlbHNlIGlmIChldi50YXJnZXQuaWQgPT09IFwibWVudS10YWJcIikge1xuICAgICAgICBjb25zdCB0b0FkZCA9IE1lbnVQYWdlKCk7XG5cbiAgICAgICAgdG9SZW1vdmUuY2xhc3NMaXN0LmFkZChcImhpZGUtdG9wXCIpO1xuICAgICAgICB0b0FkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZS1ib3R0b21cIik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9BZGQpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG9BZGQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtYm90dG9tXCIpO1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZCh0b1JlbW92ZSk7XG4gICAgICAgIH0sIDMxMCk7XG4gICAgfSBlbHNlIGlmIChldi50YXJnZXQuaWQgPT09IFwiY29udGFjdC10YWJcIikge1xuICAgICAgICBjb25zdCB0b0FkZCA9IENvbnRhY3RQYWdlKCk7XG5cbiAgICAgICAgdG9SZW1vdmUuY2xhc3NMaXN0LmFkZChcImhpZGUtdG9wXCIpO1xuICAgICAgICB0b0FkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZS1ib3R0b21cIik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9BZGQpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG9BZGQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtYm90dG9tXCIpO1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZCh0b1JlbW92ZSk7XG4gICAgICAgIH0sIDMxMCk7XG4gICAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVQYWdlKCkge1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZW51Q29udGVudC5pZCA9IFwibWVudS1wYWdlXCI7XG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuXG4gICAgbWVudUNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDEgaWQ9XCJtZW51LXRpdGxlXCI+TWVudTwvaDE+XG4gICAgICAgIDxkaXYgaWQ9XCJtZW51LWNvbnRlbnRcIiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXBhcy1jYXJkXCIgY2xhc3M9XCJtZW51LWNhcmQgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1lbnUtY2FyZC10aXRsZVwiPlRhcGFzPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1lbnUtZGVzY3JpcHRpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOaXNpIGxhYm9ydW0gbWluaW1hIGRpY3RhLCBwZXJzcGljaWF0aXMgZG9sb3JpYnVzIGluIGZhY2lsaXMgbWludXMgZXggdm9sdXB0YXRlbSBkaXN0aW5jdGlvLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItYnV0dG9ucyBmbGV4XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWVsYS1jYXJkXCIgY2xhc3M9XCJtZW51LWNhcmQgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1lbnUtY2FyZC10aXRsZVwiPlBhZWxhPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1lbnUtZGVzY3JpcHRpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcmVtIGV4Y2VwdHVyaSB1bmRlIG5vc3RydW0gYW5pbWkgbW9sZXN0aWFlIG1vZGkgaXRhcXVlIHZlbGl0LiBJbiwgYXJjaGl0ZWN0byBvYmNhZWNhdGk/PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1idXR0b25zIGZsZXhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImhhbS1zYW5kd2ljaC1jYXJkXCIgY2xhc3M9XCJtZW51LWNhcmQgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1lbnUtY2FyZC10aXRsZVwiPkhhbSBTYW5kd2ljaDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtZW51LWRlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIERpc3RpbmN0aW8sIHJlcHJlaGVuZGVyaXQgdGVuZXR1ciBxdWFzIG1haW9yZXMgcmVwZWxsZW5kdXMgY3VtIHBsYWNlYXQgZXhlcmNpdGF0aW9uZW0gYXNzdW1lbmRhIGRlc2VydW50IGVpdXM/PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1idXR0b25zIGZsZXhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImVsLWJ1cmdlci1jYXJkXCIgY2xhc3M9XCJtZW51LWNhcmQgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1lbnUtY2FyZC10aXRsZVwiPkVMIEJ1cmdlcjwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtZW51LWRlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIERpc3RpbmN0aW8sIHJlcHJlaGVuZGVyaXQgdGVuZXR1ciBxdWFzIG1haW9yZXMgcmVwZWxsZW5kdXMgY3VtIHBsYWNlYXQgZXhlcmNpdGF0aW9uZW0gYXNzdW1lbmRhIGRlc2VydW50IGVpdXM/PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1idXR0b25zIGZsZXhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBgO1xuXG4gICAgY29uc3QgY2FyZHMgPSBBcnJheS5mcm9tKG1lbnVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhcmQnKSk7XG5cbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYXJkRXZlbnRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZW51Q29udGVudDtcbn1cblxuZnVuY3Rpb24gc2VsZWN0SW1hZ2UoY2FyZCkge1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBpZiAoY2FyZC5pZCA9PT0gXCJlbC1idXJnZXItY2FyZFwiKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IFwiYXNzZXRzL2J1cmdlci5qcGdcIjtcbiAgICB9IGVsc2UgaWYgKGNhcmQuaWQgPT09IFwidGFwYXMtY2FyZFwiKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IFwiYXNzZXRzL3RhcGFzLmpwZ1wiO1xuICAgIH0gZWxzZSBpZiAoY2FyZC5pZCA9PT0gXCJwYWVsYS1jYXJkXCIpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCJhc3NldHMvcGFlbGEuanBnXCI7XG4gICAgfSBlbHNlIGlmIChjYXJkLmlkID09PSBcImhhbS1zYW5kd2ljaC1jYXJkXCIpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCJhc3NldHMvc2FuZHdpY2guanBnXCI7XG4gICAgfVxuXG4gICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG5cblxuICAgIHJldHVybiBpbWFnZTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kQ2FyZChjYXJkKSB7XG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1wYWdlJyk7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb250ZW50Jyk7XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtdGl0bGUnKTtcblxuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FwcGVhcicpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaXNhcHBlYXInKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoc2VsZWN0SW1hZ2UoY2FyZCkpO1xuICAgICAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBzaHJpbmtDYXJkKGNhcmQpIHtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQnKTtcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXBhZ2UnKTtcblxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZGlzYXBwZWFyJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcGFnZUNvbnRlbnQucmVtb3ZlQ2hpbGQobWVudVBhZ2UpO1xuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChNZW51UGFnZSgpKTtcbiAgICB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDYXJkRXZlbnRzKGV2KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWNhcmQnKTtcblxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICAgIHNocmlua0NhcmQodGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgY2FyZHMgPSBBcnJheS5mcm9tKHBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhcmQnKSk7XG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICBpZiAoY2FyZC5pZCAhPT0gdGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNhcHBlYXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZXhwYW5kQ2FyZCh0YXJnZXQpO1xuICAgICAgICB9LCA0MDApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHBhZ2VIZWFkZXIsIHBhZ2VGb290ZXIgfSBmcm9tIFwiLi9oZWFkZXItZm9vdGVyLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUxvYWQoKSB7XG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgd2VsY29tZS5pZCA9IFwicGFnZS1jb250ZW50XCI7XG5cbiAgICB3ZWxjb21lLmFwcGVuZENoaWxkKHdlbGNvbWVQYWdlQ29udGVudCgpKTtcbiAgICByZXR1cm4gd2VsY29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlbGNvbWVQYWdlQ29udGVudCgpIHtcbiAgICBjb25zdCB3ZWxjb21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgd2VsY29tZUNvbnRlbnQuaWQgPSBcIndlbGNvbWUtcGFnZVwiO1xuICAgIHdlbGNvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcblxuICAgIHdlbGNvbWVDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMSBpZD1cIndlbGNvbWUtdGl0bGVcIj5FbCBGb29kaWVzPC9oMT5cbiAgICAgICAgICAgIDxwIGlkPVwid2VsY29tZS10ZXh0XCI+U3BhbmlzaCBmb29kLCBmb3IgZm9vZGllcy48L3A+XG4gICAgICAgIGA7XG5cbiAgICByZXR1cm4gd2VsY29tZUNvbnRlbnQ7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==