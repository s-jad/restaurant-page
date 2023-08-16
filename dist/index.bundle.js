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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ShadowsIntoLight-Regular.ttf */ "./src/assets/ShadowsIntoLight-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
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

:root {
    --dark-blue: hsl(208, 95%, 8%);
    --mid-blue: hsl(214, 97%, 13%);
    --mid-purple: hsl(344, 35%, 34%);
    --light-yellow: hsl(47, 77%, 92%);
    --mid-orange: hsl(10, 65%, 34%);
}

@font-face {
  font-family: 'ShadowsIntoLight-Regular';
  src: url('./assets/ShadowsIntoLight-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

/* ELEMENT STYLES */

body {
    color: var(--light-yellow);
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

h1 {
    font-family: "ShadowsIntoLight-Regular";
    font-size: clamp(30px, 3.6rem, 40px);
}

h2 {
    font-family: "ShadowsIntoLight-Regular";
    font-size: clamp(24px, 3rem, 34px);
}

h3 {
    font-family: "ShadowsIntoLight-Regular";
    font-size: clamp(22px, 2.6rem, 30px);
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
    font-size: clamp(18px, 2rem, 22px);
    font-weight: 600;
    background: var(--dark-blue);
    width: 100%;
}

#page-footer {
    align-items: center;
    justify-content: center;
    bottom: 0;
    height: 5vh;
    color: var(--light-yellow);;
}

#page-header {
    top: 0;
    height: 10vh;
}

#header-flex {
    padding: 0 1rem;
    align-items: end;
}

#header-flex,
#icon-flex {
    justify-content: space-between;
    height: 100%;
}

#icon-flex {
    padding-bottom: 1rem;
    align-items: end; 
    gap: 1rem;
}

.social-media-icon {
    height: 30px;
    width: 30px;
    filter: invert(90%);
}

#tab-flex {
    gap: 1.5rem;
    width: 40%;
    justify-content: space-between;
}

.tab {
    background: var(--mid-orange);
    scale: 1;
    transform: translateY(0);
    transition: color 300ms ease-in-out,
                background 300ms ease-in-out,
                transform 300ms ease-in-out,
                scale 300ms ease-in-out;

    height: 40px;
    width: 140px;
    padding-top: 0.5rem;
    text-align: center;
    border-radius: 2rem 0.5rem 0 0;
    cursor: pointer;

    font-size: clamp(18px, 2.6rem, 30px);
    font-family: "ShadowsIntoLight-Regular";
}

.tab:hover,
.tab:focus-within {
    scale: 1.1;
    background: var(--light-yellow);
    color: var(--dark-blue);
    transform: translateY(-2px);
}

#colorscheme-flex {
    flex-direction: column;
    padding-right: 1rem;
}

/* Page Content */

#page-content {
    height: 100vh;
    width: 100vw;
}

#welcome-image {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    min-width: 1000px;
    height: auto;
}

#image-filter {
    height: 100vh;
    width: 100vw;
    background: radial-gradient(ellipse at center, hsla(208, 95%, 8%, 0.7) 10%, transparent);
}

#welcome-page,
#menu-page,
#contact-page {
    position: relative;
    z-index: 0;
    top: 0;
    opacity: 1;
    min-height: 100vh;
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

#welcome-text-container {
    height: 30vh;
    transform: translateY(-15vh);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#welcome-title {
    font-size: clamp(50px, 5.6rem, 60px);
}

#welcome-text {
    font-size: clamp(30px, 3.6rem, 40px);
}

#welcome-title,
#welcome-text {
    color: var(--light-yellow);
    font-family: "ShadowsIntoLight-Regular";
}

/* MENU PAGE */

#menu-page {
    height: 75vh;
}

#menu-content {
    height: auto;
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
    padding: 1rem;
    gap: 1rem;
    border: 1px solid var(--light-yellow);
    box-shadow: 0 2px 5px var(--dark-blue),
                inset 0 0 2px var(--light-yellow);
    border-radius: 2rem 0.5rem 2rem 0.5rem;
    background: hsla(208, 95%, 8%, 0.8);
    scale: 1;
    opacity: 1;
    cursor: pointer;
    transition: scale 300ms ease-in-out,
                background 300ms ease-in-out,
                opacity 300ms ease-in-out;
}

.menu-card:hover,
.menu-card:focus-within {
    scale: 1.02;
    background: hsla(208, 65%, 18%, 0.8);
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 1rem;
    align-items: center;
    justify-content: center;
    top: 17.5vh;
    left: 15vw;
    height: 70vh;
    width: 70vw;
}

.menu-card.expanded > .menu-card-title {
    grid-column: 1 / 6;
    text-align: center;
}

.menu-card.expanded > .menu-description {
    grid-column: 1 / 6;
}

.menu-card.expanded > img {
    grid-column: 3 / 6;
}

.menu-card-title {
    min-width: 100px;
}

#meal-info {
    gap: 1rem;
    height: 100%;
}

@media (max-width: 820px) {
    .menu-card {
        flex-direction: column;
    }
}

/* CONTACT PAGE */

#contact-card {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(6, 1fr);
    padding: 1rem 2rem;
    background: hsla(208, 95%, 8%, 0.8);
    border: 1px solid var(--light-yellow);
    border-radius: 2rem 0.5rem 2rem 0.5rem;
    box-shadow: 0 2px 5px var(--dark-blue),
                inset 0 0 2px var(--light-yellow);
}

#contact-card > h2 {
    grid-column: 1 / 7;
    text-align: center;
    margin-bottom: 1rem;
}

#contact-card > h3 {
    position: relative;
    text-align: right;
    grid-column: 1 / 3;
}

#contact-card > p {
    margin-top: 0.7rem;
    height: fit-content;
    line-height: 1.8;
    grid-column: 4 / 7;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Box sizing rules and easier REM calculations */\n\nhtml {\n  box-sizing: border-box;\n  font-size: 10px;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* START OF STYLES */\n\n:root {\n    --dark-blue: hsl(208, 95%, 8%);\n    --mid-blue: hsl(214, 97%, 13%);\n    --mid-purple: hsl(344, 35%, 34%);\n    --light-yellow: hsl(47, 77%, 92%);\n    --mid-orange: hsl(10, 65%, 34%);\n}\n\n@font-face {\n  font-family: 'ShadowsIntoLight-Regular';\n  src: url('./assets/ShadowsIntoLight-Regular.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n/* ELEMENT STYLES */\n\nbody {\n    color: var(--light-yellow);\n    font-size: 1.6rem;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\np {\n    display: block;\n}\n\nh1 {\n    font-family: \"ShadowsIntoLight-Regular\";\n    font-size: clamp(30px, 3.6rem, 40px);\n}\n\nh2 {\n    font-family: \"ShadowsIntoLight-Regular\";\n    font-size: clamp(24px, 3rem, 34px);\n}\n\nh3 {\n    font-family: \"ShadowsIntoLight-Regular\";\n    font-size: clamp(22px, 2.6rem, 30px);\n}\n/* UTILITY CLASSES */\n\n.flex {\n    display: flex;\n}\n\n.grid {\n    display: grid;\n}\n\n.fixed {\n    position: fixed;\n}\n\n.zi-10 {\n    z-index: 10;\n}\n\n/* HEADER AND FOOTER */\n\n#page-header,\n#page-footer {\n    font-size: clamp(18px, 2rem, 22px);\n    font-weight: 600;\n    background: var(--dark-blue);\n    width: 100%;\n}\n\n#page-footer {\n    align-items: center;\n    justify-content: center;\n    bottom: 0;\n    height: 5vh;\n    color: var(--light-yellow);;\n}\n\n#page-header {\n    top: 0;\n    height: 10vh;\n}\n\n#header-flex {\n    padding: 0 1rem;\n    align-items: end;\n}\n\n#header-flex,\n#icon-flex {\n    justify-content: space-between;\n    height: 100%;\n}\n\n#icon-flex {\n    padding-bottom: 1rem;\n    align-items: end; \n    gap: 1rem;\n}\n\n.social-media-icon {\n    height: 30px;\n    width: 30px;\n    filter: invert(90%);\n}\n\n#tab-flex {\n    gap: 1.5rem;\n    width: 40%;\n    justify-content: space-between;\n}\n\n.tab {\n    background: var(--mid-orange);\n    scale: 1;\n    transform: translateY(0);\n    transition: color 300ms ease-in-out,\n                background 300ms ease-in-out,\n                transform 300ms ease-in-out,\n                scale 300ms ease-in-out;\n\n    height: 40px;\n    width: 140px;\n    padding-top: 0.5rem;\n    text-align: center;\n    border-radius: 2rem 0.5rem 0 0;\n    cursor: pointer;\n\n    font-size: clamp(18px, 2.6rem, 30px);\n    font-family: \"ShadowsIntoLight-Regular\";\n}\n\n.tab:hover,\n.tab:focus-within {\n    scale: 1.1;\n    background: var(--light-yellow);\n    color: var(--dark-blue);\n    transform: translateY(-2px);\n}\n\n#colorscheme-flex {\n    flex-direction: column;\n    padding-right: 1rem;\n}\n\n/* Page Content */\n\n#page-content {\n    height: 100vh;\n    width: 100vw;\n}\n\n#welcome-image {\n    position: absolute;\n    top: 0;\n    z-index: -1;\n    width: 100%;\n    min-width: 1000px;\n    height: auto;\n}\n\n#image-filter {\n    height: 100vh;\n    width: 100vw;\n    background: radial-gradient(ellipse at center, hsla(208, 95%, 8%, 0.7) 10%, transparent);\n}\n\n#welcome-page,\n#menu-page,\n#contact-page {\n    position: relative;\n    z-index: 0;\n    top: 0;\n    opacity: 1;\n    min-height: 100vh;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    transition: opacity 350ms ease-in-out,\n                top 300ms ease-in-out;\n}\n\n#welcome-page.hide-bottom,\n#menu-page.hide-bottom, \n#contact-page.hide-bottom {\n    top: 150%;\n    opacity: 0;\n}\n\n#welcome-page.hide-top,\n#menu-page.hide-top, \n#contact-page.hide-top {\n    top: -50%;\n    opacity: 0;\n}\n\n#welcome-text-container {\n    height: 30vh;\n    transform: translateY(-15vh);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#welcome-title {\n    font-size: clamp(50px, 5.6rem, 60px);\n}\n\n#welcome-text {\n    font-size: clamp(30px, 3.6rem, 40px);\n}\n\n#welcome-title,\n#welcome-text {\n    color: var(--light-yellow);\n    font-family: \"ShadowsIntoLight-Regular\";\n}\n\n/* MENU PAGE */\n\n#menu-page {\n    height: 75vh;\n}\n\n#menu-content {\n    height: auto;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 1rem;\n    gap: 1rem;\n    opacity: 1;\n    transition: opacity 300ms ease-in-out;\n}\n\n#menu-content.disappear {\n    opacity: 0;\n}\n\n.menu-card {\n    padding: 1rem;\n    gap: 1rem;\n    border: 1px solid var(--light-yellow);\n    box-shadow: 0 2px 5px var(--dark-blue),\n                inset 0 0 2px var(--light-yellow);\n    border-radius: 2rem 0.5rem 2rem 0.5rem;\n    background: hsla(208, 95%, 8%, 0.8);\n    scale: 1;\n    opacity: 1;\n    cursor: pointer;\n    transition: scale 300ms ease-in-out,\n                background 300ms ease-in-out,\n                opacity 300ms ease-in-out;\n}\n\n.menu-card:hover,\n.menu-card:focus-within {\n    scale: 1.02;\n    background: hsla(208, 65%, 18%, 0.8);\n}\n\n.menu-card.disappaear {\n    opacity: 0;\n}\n\n#menu-title {\n    opacity: 1;\n    transition: opacity 300ms ease-in-out;\n}\n\n#menu-title.disappear {\n    opacity: 0;\n}\n\n.menu-card.expanded {\n    position: absolute;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    padding: 1rem;\n    align-items: center;\n    justify-content: center;\n    top: 17.5vh;\n    left: 15vw;\n    height: 70vh;\n    width: 70vw;\n}\n\n.menu-card.expanded > .menu-card-title {\n    grid-column: 1 / 6;\n    text-align: center;\n}\n\n.menu-card.expanded > .menu-description {\n    grid-column: 1 / 6;\n}\n\n.menu-card.expanded > img {\n    grid-column: 3 / 6;\n}\n\n.menu-card-title {\n    min-width: 100px;\n}\n\n#meal-info {\n    gap: 1rem;\n    height: 100%;\n}\n\n@media (max-width: 820px) {\n    .menu-card {\n        flex-direction: column;\n    }\n}\n\n/* CONTACT PAGE */\n\n#contact-card {\n    display: grid;\n    gap: 0.5rem;\n    grid-template-columns: repeat(6, 1fr);\n    padding: 1rem 2rem;\n    background: hsla(208, 95%, 8%, 0.8);\n    border: 1px solid var(--light-yellow);\n    border-radius: 2rem 0.5rem 2rem 0.5rem;\n    box-shadow: 0 2px 5px var(--dark-blue),\n                inset 0 0 2px var(--light-yellow);\n}\n\n#contact-card > h2 {\n    grid-column: 1 / 7;\n    text-align: center;\n    margin-bottom: 1rem;\n}\n\n#contact-card > h3 {\n    position: relative;\n    text-align: right;\n    grid-column: 1 / 3;\n}\n\n#contact-card > p {\n    margin-top: 0.7rem;\n    height: fit-content;\n    line-height: 1.8;\n    grid-column: 4 / 7;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
            <div id="header-flex" class="flex">
                <div id="tab-flex" class="flex">
                    <div id="welcome-tab" class="tab">Welcome</div>
                    <div id="menu-tab" class="tab">Menu</div>
                    <div id="contact-tab" class="tab">Contact</div>
                </div>

                <div id="icon-flex" class="flex"></div>
            </div>
        `;

    // Import icon svgs and append them to iconFlex
    const iconFlex = welcomeHeader.querySelector("#icon-flex");

    const facebookIcon = new Image();
    facebookIcon.src = "./assets/facebook.svg";
    facebookIcon.classList.add('social-media-icon');

    const twitterIcon = new Image();
    twitterIcon.src = "./assets/twitter.svg";
    twitterIcon.classList.add('social-media-icon');

    const whatsappIcon = new Image();
    whatsappIcon.src = "./assets/whatsapp.svg";
    whatsappIcon.classList.add('social-media-icon');

    iconFlex.appendChild(facebookIcon);
    iconFlex.appendChild(twitterIcon);
    iconFlex.appendChild(whatsappIcon);

    return welcomeHeader;
}

function pageFooter() {
    const footer = document.createElement('footer');

    footer.id = "page-footer";
    footer.classList.add('fixed');
    footer.classList.add('flex');

    footer.innerHTML = `
            <div id="copyright">Copyright - A Chef</div>
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

const content = document.getElementById('image-filter');
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
    const menuPage = document.createElement('div');

    menuPage.id = "menu-page";
    menuPage.classList.add('flex');

    menuPage.innerHTML = `
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

    const cards = Array.from(menuPage.querySelectorAll('.menu-card'));

    cards.forEach(card => {
        card.addEventListener("click", handleCardEvents);
    });

    return menuPage;
}

function selectImage(card) {
    const image = new Image();

    if (card.id === "el-burger-card") {
        image.src = "assets/burger.jpg";
    } else if (card.id === "tapas-card") {
        image.src = "assets/tapas.jpg";
    } else if (card.id === "paela-card") {
        image.src = "assets/paela.jpg";
    } else if (card.id === "ham-sandwich-card") {
        image.src = "assets/sandwich.jpg";
    }

    image.style.width = "40vw";
    image.style.minWidth = "200px";
    image.style.maxWidth = "450px";
    image.style.height = "auto";

    return image;
}

function getInfo(card) {
    const price = document.createElement('p');
    const allergens = document.createElement('p');

    if (card.id === "el-burger-card") {
        price.innerText = "14€";
        allergens.innerText = "Milk products, Gluten";
    } else if (card.id === "tapas-card") {
        price.innerText = "3€ per dish";
        allergens.innerText = "Shellfish, fish";
    } else if (card.id === "paela-card") {
        price.innerText = "12€";
        allergens.innerText = "Shellfish, fish";
    } else if (card.id === "ham-sandwich-card") {
        price.innerText = "8€";
        allergens.innerText = "Pork, Gluten";
    }

    return { price, allergens };
}

function expandCard(card) {
    const menuPage = document.getElementById('menu-page');
    const menuContent = document.getElementById('menu-content');
    const menuTitle = document.getElementById('menu-title');

    menuContent.classList.add('disappear');
    menuTitle.classList.add('disappear');

    const info = document.createElement('div');
    info.classList.add('flex');
    info.id = "meal-info";
    info.style.flexDirection = "column";
    info.style.gridColumn = "1 / 3";

    const priceTitle = document.createElement('h3');
    priceTitle.innerText = "Price:";
    const allergensTitle = document.createElement('h3');
    allergensTitle.innerText = "Allergens:";
    const { price, allergens } = getInfo(card);

    info.appendChild(priceTitle);
    info.appendChild(price);
    info.appendChild(allergensTitle);
    info.appendChild(allergens);

    setTimeout(() => {
        card.classList.add('expanded');
        card.appendChild(info);
        card.appendChild(selectImage(card));
        menuPage.appendChild(card);
    }, 500);
}

function shrinkCard(card) {
    const pageContent = document.getElementById('image-filter');
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
function PageLoad() {
    const welcome = document.createElement('div');
    const imageFilter = document.createElement('div');
    welcome.id = "page-content";

    const welcomeImage = new Image();
    welcomeImage.src = "./assets/welcome-image.jpg";
    welcomeImage.id = "welcome-image";
    welcome.appendChild(welcomeImage);

    imageFilter.id = "image-filter";
    welcome.appendChild(imageFilter);
    imageFilter.appendChild(welcomePageContent());
    return welcome;
}

function welcomePageContent() {
    const welcomeContent = document.createElement('div');

    welcomeContent.id = "welcome-page";

    welcomeContent.classList.add('flex');
    welcomeContent.innerHTML = `
        <div id="welcome-text-container">
            <h1 id="welcome-title">El Foodies</h1>
            <p id="welcome-text">Spanish food, for foodies.</p>
        </div>
        `;

    return welcomeContent;
}



/***/ }),

/***/ "./src/assets/ShadowsIntoLight-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/ShadowsIntoLight-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8c09384ff0643bf385d.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sd0ZBQXdGLE1BQU0sWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLE9BQU8sWUFBWSxlQUFlLFVBQVUsTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sVUFBVSxVQUFVLE9BQU8sWUFBWSxTQUFTLFVBQVUsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxRQUFRLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sT0FBTyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sT0FBTyxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xKZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL3NyYy9jb250YWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9zcmMvaGVhZGVyLWZvb3Rlci5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL3NyYy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9zcmMvd2VsY29tZS1wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9TaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCb3ggc2l6aW5nIHJ1bGVzIGFuZCBlYXNpZXIgUkVNIGNhbGN1bGF0aW9ucyAqL1xuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbnAsXG5maWd1cmUsXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXG51bFtyb2xlPSdsaXN0J10sXG5vbFtyb2xlPSdsaXN0J10ge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXG5odG1sOmZvY3VzLXdpdGhpbiB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cbmltZyxcbnBpY3R1cmUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICBodG1sOmZvY3VzLXdpdGhpbiB7XG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XG4gIH1cblxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiBTVEFSVCBPRiBTVFlMRVMgKi9cblxuOnJvb3Qge1xuICAgIC0tZGFyay1ibHVlOiBoc2woMjA4LCA5NSUsIDglKTtcbiAgICAtLW1pZC1ibHVlOiBoc2woMjE0LCA5NyUsIDEzJSk7XG4gICAgLS1taWQtcHVycGxlOiBoc2woMzQ0LCAzNSUsIDM0JSk7XG4gICAgLS1saWdodC15ZWxsb3c6IGhzbCg0NywgNzclLCA5MiUpO1xuICAgIC0tbWlkLW9yYW5nZTogaHNsKDEwLCA2NSUsIDM0JSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NoYWRvd3NJbnRvTGlnaHQtUmVndWxhcic7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4vKiBFTEVNRU5UIFNUWUxFUyAqL1xuXG5ib2R5IHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxucCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcIjtcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDMuNnJlbSwgNDBweCk7XG59XG5cbmgyIHtcbiAgICBmb250LWZhbWlseTogXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcIjtcbiAgICBmb250LXNpemU6IGNsYW1wKDI0cHgsIDNyZW0sIDM0cHgpO1xufVxuXG5oMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiU2hhZG93c0ludG9MaWdodC1SZWd1bGFyXCI7XG4gICAgZm9udC1zaXplOiBjbGFtcCgyMnB4LCAyLjZyZW0sIDMwcHgpO1xufVxuLyogVVRJTElUWSBDTEFTU0VTICovXG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmZpeGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi56aS0xMCB7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi8qIEhFQURFUiBBTkQgRk9PVEVSICovXG5cbiNwYWdlLWhlYWRlcixcbiNwYWdlLWZvb3RlciB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCAycmVtLCAyMnB4KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNwYWdlLWZvb3RlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7O1xufVxuXG4jcGFnZS1oZWFkZXIge1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwdmg7XG59XG5cbiNoZWFkZXItZmxleCB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbiNoZWFkZXItZmxleCxcbiNpY29uLWZsZXgge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNpY29uLWZsZXgge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7IFxuICAgIGdhcDogMXJlbTtcbn1cblxuLnNvY2lhbC1tZWRpYS1pY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoOTAlKTtcbn1cblxuI3RhYi1mbGV4IHtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRhYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWlkLW9yYW5nZSk7XG4gICAgc2NhbGU6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgMzAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgIHNjYWxlIDMwMG1zIGVhc2UtaW4tb3V0O1xuXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDAuNXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCAyLjZyZW0sIDMwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiBcIlNoYWRvd3NJbnRvTGlnaHQtUmVndWxhclwiO1xufVxuXG4udGFiOmhvdmVyLFxuLnRhYjpmb2N1cy13aXRoaW4ge1xuICAgIHNjYWxlOiAxLjE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQteWVsbG93KTtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbiNjb2xvcnNjaGVtZS1mbGV4IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi8qIFBhZ2UgQ29udGVudCAqL1xuXG4jcGFnZS1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuI3dlbGNvbWUtaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jaW1hZ2UtZmlsdGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIGhzbGEoMjA4LCA5NSUsIDglLCAwLjcpIDEwJSwgdHJhbnNwYXJlbnQpO1xufVxuXG4jd2VsY29tZS1wYWdlLFxuI21lbnUtcGFnZSxcbiNjb250YWN0LXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDM1MG1zIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgIHRvcCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuI3dlbGNvbWUtcGFnZS5oaWRlLWJvdHRvbSxcbiNtZW51LXBhZ2UuaGlkZS1ib3R0b20sIFxuI2NvbnRhY3QtcGFnZS5oaWRlLWJvdHRvbSB7XG4gICAgdG9wOiAxNTAlO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbiN3ZWxjb21lLXBhZ2UuaGlkZS10b3AsXG4jbWVudS1wYWdlLmhpZGUtdG9wLCBcbiNjb250YWN0LXBhZ2UuaGlkZS10b3Age1xuICAgIHRvcDogLTUwJTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4jd2VsY29tZS10ZXh0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTV2aCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiN3ZWxjb21lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDUwcHgsIDUuNnJlbSwgNjBweCk7XG59XG5cbiN3ZWxjb21lLXRleHQge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMzBweCwgMy42cmVtLCA0MHB4KTtcbn1cblxuI3dlbGNvbWUtdGl0bGUsXG4jd2VsY29tZS10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcbiAgICBmb250LWZhbWlseTogXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcIjtcbn1cblxuLyogTUVOVSBQQUdFICovXG5cbiNtZW51LXBhZ2Uge1xuICAgIGhlaWdodDogNzV2aDtcbn1cblxuI21lbnUtY29udGVudCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jbWVudS1jb250ZW50LmRpc2FwcGVhciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLm1lbnUtY2FyZCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQteWVsbG93KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggdmFyKC0tZGFyay1ibHVlKSxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAgMnB4IHZhcigtLWxpZ2h0LXllbGxvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAwLjVyZW0gMnJlbSAwLjVyZW07XG4gICAgYmFja2dyb3VuZDogaHNsYSgyMDgsIDk1JSwgOCUsIDAuOCk7XG4gICAgc2NhbGU6IDE7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMzAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAzMDBtcyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS1jYXJkOmhvdmVyLFxuLm1lbnUtY2FyZDpmb2N1cy13aXRoaW4ge1xuICAgIHNjYWxlOiAxLjAyO1xuICAgIGJhY2tncm91bmQ6IGhzbGEoMjA4LCA2NSUsIDE4JSwgMC44KTtcbn1cblxuLm1lbnUtY2FyZC5kaXNhcHBhZWFyIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4jbWVudS10aXRsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jbWVudS10aXRsZS5kaXNhcHBlYXIge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5tZW51LWNhcmQuZXhwYW5kZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRvcDogMTcuNXZoO1xuICAgIGxlZnQ6IDE1dnc7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIHdpZHRoOiA3MHZ3O1xufVxuXG4ubWVudS1jYXJkLmV4cGFuZGVkID4gLm1lbnUtY2FyZC10aXRsZSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lbnUtY2FyZC5leHBhbmRlZCA+IC5tZW51LWRlc2NyaXB0aW9uIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XG59XG5cbi5tZW51LWNhcmQuZXhwYW5kZWQgPiBpbWcge1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNjtcbn1cblxuLm1lbnUtY2FyZC10aXRsZSB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuI21lYWwtaW5mbyB7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gICAgLm1lbnUtY2FyZCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG4vKiBDT05UQUNUIFBBR0UgKi9cblxuI2NvbnRhY3QtY2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDIwOCwgOTUlLCA4JSwgMC44KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC15ZWxsb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMC41cmVtIDJyZW0gMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCB2YXIoLS1kYXJrLWJsdWUpLFxuICAgICAgICAgICAgICAgIGluc2V0IDAgMCAycHggdmFyKC0tbGlnaHQteWVsbG93KTtcbn1cblxuI2NvbnRhY3QtY2FyZCA+IGgyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNjb250YWN0LWNhcmQgPiBoMyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbn1cblxuI2NvbnRhY3QtY2FyZCA+IHAge1xuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgZ3JpZC1jb2x1bW46IDQgLyA3O1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaURBQWlEOztBQUVqRDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUEsMEJBQTBCO0FBQzFCOzs7Ozs7Ozs7O0VBVUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFF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a0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQm94IHNpemluZyBydWxlcyBhbmQgZWFzaWVyIFJFTSBjYWxjdWxhdGlvbnMgKi9cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9J2xpc3QnXSxcXG5vbFtyb2xlPSdsaXN0J10ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLyogU1RBUlQgT0YgU1RZTEVTICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLWRhcmstYmx1ZTogaHNsKDIwOCwgOTUlLCA4JSk7XFxuICAgIC0tbWlkLWJsdWU6IGhzbCgyMTQsIDk3JSwgMTMlKTtcXG4gICAgLS1taWQtcHVycGxlOiBoc2woMzQ0LCAzNSUsIDM0JSk7XFxuICAgIC0tbGlnaHQteWVsbG93OiBoc2woNDcsIDc3JSwgOTIlKTtcXG4gICAgLS1taWQtb3JhbmdlOiBoc2woMTAsIDY1JSwgMzQlKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NoYWRvd3NJbnRvTGlnaHQtUmVndWxhcic7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvU2hhZG93c0ludG9MaWdodC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIEVMRU1FTlQgU1RZTEVTICovXFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5wIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcXFwiO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDMuNnJlbSwgNDBweCk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcXFwiO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDI0cHgsIDNyZW0sIDM0cHgpO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2hhZG93c0ludG9MaWdodC1SZWd1bGFyXFxcIjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyMnB4LCAyLjZyZW0sIDMwcHgpO1xcbn1cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZpeGVkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uemktMTAge1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyogSEVBREVSIEFORCBGT09URVIgKi9cXG5cXG4jcGFnZS1oZWFkZXIsXFxuI3BhZ2UtZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCAycmVtLCAyMnB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3R0b206IDA7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTs7XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jaGVhZGVyLWZsZXgge1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbiNoZWFkZXItZmxleCxcXG4jaWNvbi1mbGV4IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNpY29uLWZsZXgge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDsgXFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYS1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTAlKTtcXG59XFxuXFxuI3RhYi1mbGV4IHtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1pZC1vcmFuZ2UpO1xcbiAgICBzY2FsZTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAzMDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICBzY2FsZSAzMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAwLjVyZW0gMCAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMThweCwgMi42cmVtLCAzMHB4KTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcXFwiO1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi50YWI6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuXFxuI2NvbG9yc2NoZW1lLWZsZXgge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4vKiBQYWdlIENvbnRlbnQgKi9cXG5cXG4jcGFnZS1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jd2VsY29tZS1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNpbWFnZS1maWx0ZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgaHNsYSgyMDgsIDk1JSwgOCUsIDAuNykgMTAlLCB0cmFuc3BhcmVudCk7XFxufVxcblxcbiN3ZWxjb21lLXBhZ2UsXFxuI21lbnUtcGFnZSxcXG4jY29udGFjdC1wYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzNTBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgdG9wIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jd2VsY29tZS1wYWdlLmhpZGUtYm90dG9tLFxcbiNtZW51LXBhZ2UuaGlkZS1ib3R0b20sIFxcbiNjb250YWN0LXBhZ2UuaGlkZS1ib3R0b20ge1xcbiAgICB0b3A6IDE1MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiN3ZWxjb21lLXBhZ2UuaGlkZS10b3AsXFxuI21lbnUtcGFnZS5oaWRlLXRvcCwgXFxuI2NvbnRhY3QtcGFnZS5oaWRlLXRvcCB7XFxuICAgIHRvcDogLTUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuI3dlbGNvbWUtdGV4dC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTV2aCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3dlbGNvbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDUwcHgsIDUuNnJlbSwgNjBweCk7XFxufVxcblxcbiN3ZWxjb21lLXRleHQge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDMuNnJlbSwgNDBweCk7XFxufVxcblxcbiN3ZWxjb21lLXRpdGxlLFxcbiN3ZWxjb21lLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcXFwiO1xcbn1cXG5cXG4vKiBNRU5VIFBBR0UgKi9cXG5cXG4jbWVudS1wYWdlIHtcXG4gICAgaGVpZ2h0OiA3NXZoO1xcbn1cXG5cXG4jbWVudS1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNtZW51LWNvbnRlbnQuZGlzYXBwZWFyIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQteWVsbG93KTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHZhcigtLWRhcmstYmx1ZSksXFxuICAgICAgICAgICAgICAgIGluc2V0IDAgMCAycHggdmFyKC0tbGlnaHQteWVsbG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAwLjVyZW0gMnJlbSAwLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IGhzbGEoMjA4LCA5NSUsIDglLCAwLjgpO1xcbiAgICBzY2FsZTogMTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAzMDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAzMDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1lbnUtY2FyZDpob3ZlcixcXG4ubWVudS1jYXJkOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjYWxlOiAxLjAyO1xcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDIwOCwgNjUlLCAxOCUsIDAuOCk7XFxufVxcblxcbi5tZW51LWNhcmQuZGlzYXBwYWVhciB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNtZW51LXRpdGxlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI21lbnUtdGl0bGUuZGlzYXBwZWFyIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1lbnUtY2FyZC5leHBhbmRlZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRvcDogMTcuNXZoO1xcbiAgICBsZWZ0OiAxNXZ3O1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbn1cXG5cXG4ubWVudS1jYXJkLmV4cGFuZGVkID4gLm1lbnUtY2FyZC10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1jYXJkLmV4cGFuZGVkID4gLm1lbnUtZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XFxufVxcblxcbi5tZW51LWNhcmQuZXhwYW5kZWQgPiBpbWcge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDY7XFxufVxcblxcbi5tZW51LWNhcmQtdGl0bGUge1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jbWVhbC1pbmZvIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcbiAgICAubWVudS1jYXJkIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXFxuLyogQ09OVEFDVCBQQUdFICovXFxuXFxuI2NvbnRhY3QtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGhzbGEoMjA4LCA5NSUsIDglLCAwLjgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDAuNXJlbSAycmVtIDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHZhcigtLWRhcmstYmx1ZSksXFxuICAgICAgICAgICAgICAgIGluc2V0IDAgMCAycHggdmFyKC0tbGlnaHQteWVsbG93KTtcXG59XFxuXFxuI2NvbnRhY3QtY2FyZCA+IGgyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNjb250YWN0LWNhcmQgPiBoMyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuI2NvbnRhY3QtY2FyZCA+IHAge1xcbiAgICBtYXJnaW4tdG9wOiAwLjdyZW07XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0LXBhZ2VcIjtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcblxuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGlkPVwiY29udGFjdC1jYXJkXCIgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICA8aDI+Q29udGFjdCBVczwvaDI+XG4gICAgICAgICAgICA8aDM+UGhvbmU6PC9oMz5cbiAgICAgICAgICAgIDxwIGlkPVwicmVzdGF1cmFudC1jb250YWN0LXBob25lXCI+MDAwLTAwMDAtMDAwMDwvcD48YnI+XG4gICAgICAgICAgICA8aDM+RW1haWw6PC9oMz5cbiAgICAgICAgICAgIDxwIGlkPVwicmVzdGF1cmFudC1jb250YWN0LWVtYWlsXCI+dGhpc0ByZXN0YXVyYW50LmNvbTwvcD48YnI+XG4gICAgICAgICAgICA8aDM+QWRkcmVzczo8L2gzPlxuICAgICAgICAgICAgPHAgaWQ9XCJyZXN0YXVyYW50LWNvbnRhY3QtYWRkcmVzc1wiPjEyIEFzdHJlZXQ8YnI+IFNvbWVQYXJ0T2ZUb3duPGJyPiBCaWdcbiAgICAgICAgICAgIENpdHk8YnI+IDExNS00NDMyPGJyPiBFYXJ0aDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhZ2VIZWFkZXIoKSB7XG4gICAgY29uc3Qgd2VsY29tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgd2VsY29tZUhlYWRlci5pZCA9IFwicGFnZS1oZWFkZXJcIjtcbiAgICB3ZWxjb21lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XG4gICAgd2VsY29tZUhlYWRlci5jbGFzc0xpc3QuYWRkKCd6aS0xMCcpO1xuXG4gICAgd2VsY29tZUhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLWZsZXhcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGFiLWZsZXhcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndlbGNvbWUtdGFiXCIgY2xhc3M9XCJ0YWJcIj5XZWxjb21lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51LXRhYlwiIGNsYXNzPVwidGFiXCI+TWVudTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdC10YWJcIiBjbGFzcz1cInRhYlwiPkNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpY29uLWZsZXhcIiBjbGFzcz1cImZsZXhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgLy8gSW1wb3J0IGljb24gc3ZncyBhbmQgYXBwZW5kIHRoZW0gdG8gaWNvbkZsZXhcbiAgICBjb25zdCBpY29uRmxleCA9IHdlbGNvbWVIZWFkZXIucXVlcnlTZWxlY3RvcihcIiNpY29uLWZsZXhcIik7XG5cbiAgICBjb25zdCBmYWNlYm9va0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBmYWNlYm9va0ljb24uc3JjID0gXCIuL2Fzc2V0cy9mYWNlYm9vay5zdmdcIjtcbiAgICBmYWNlYm9va0ljb24uY2xhc3NMaXN0LmFkZCgnc29jaWFsLW1lZGlhLWljb24nKTtcblxuICAgIGNvbnN0IHR3aXR0ZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgdHdpdHRlckljb24uc3JjID0gXCIuL2Fzc2V0cy90d2l0dGVyLnN2Z1wiO1xuICAgIHR3aXR0ZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3NvY2lhbC1tZWRpYS1pY29uJyk7XG5cbiAgICBjb25zdCB3aGF0c2FwcEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB3aGF0c2FwcEljb24uc3JjID0gXCIuL2Fzc2V0cy93aGF0c2FwcC5zdmdcIjtcbiAgICB3aGF0c2FwcEljb24uY2xhc3NMaXN0LmFkZCgnc29jaWFsLW1lZGlhLWljb24nKTtcblxuICAgIGljb25GbGV4LmFwcGVuZENoaWxkKGZhY2Vib29rSWNvbik7XG4gICAgaWNvbkZsZXguYXBwZW5kQ2hpbGQodHdpdHRlckljb24pO1xuICAgIGljb25GbGV4LmFwcGVuZENoaWxkKHdoYXRzYXBwSWNvbik7XG5cbiAgICByZXR1cm4gd2VsY29tZUhlYWRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuaWQgPSBcInBhZ2UtZm9vdGVyXCI7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcblxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0IC0gQSBDaGVmPC9kaXY+XG4gICAgICAgICAgICA8dWwgaWQ9XCJmb290ZXItbGlua3MtZmxleFwiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImljb25cIj48YSBocmVmPVwiI1wiPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImljb25cIj48YSBocmVmPVwiI1wiPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImljb25cIj48YSBocmVmPVwiI1wiPjwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICBgO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBQYWdlTG9hZCwgeyB3ZWxjb21lUGFnZUNvbnRlbnQgfSBmcm9tIFwiLi93ZWxjb21lLXBhZ2UuanNcIjtcbmltcG9ydCBNZW51UGFnZSBmcm9tIFwiLi9tZW51LXBhZ2UuanNcIjtcbmltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0LXBhZ2VcIjtcbmltcG9ydCB7IHBhZ2VIZWFkZXIsIHBhZ2VGb290ZXIgfSBmcm9tIFwiLi9oZWFkZXItZm9vdGVyLmpzXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoUGFnZUxvYWQoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VGb290ZXIoKSk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2UtZmlsdGVyJyk7XG5jb25zdCB0YWJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJykpO1xuXG4vLyBUQUIgRVZFTlQgTElTVEVORVJTIFxuXG50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUYWIpO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZVRhYihldikge1xuICAgIGNvbnN0IHRvUmVtb3ZlID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQkPVwiLXBhZ2VcIl0nKVswXTtcblxuICAgIGlmIChldi50YXJnZXQuaWQgPT09IFwid2VsY29tZS10YWJcIikge1xuICAgICAgICBjb25zdCB0b0FkZCA9IHdlbGNvbWVQYWdlQ29udGVudCgpO1xuICAgICAgICB0b1JlbW92ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZS10b3BcIik7XG4gICAgICAgIHRvQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWJvdHRvbVwiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b0FkZCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b0FkZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1ib3R0b21cIik7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHRvUmVtb3ZlKTtcbiAgICAgICAgfSwgMzEwKTtcbiAgICB9IGVsc2UgaWYgKGV2LnRhcmdldC5pZCA9PT0gXCJtZW51LXRhYlwiKSB7XG4gICAgICAgIGNvbnN0IHRvQWRkID0gTWVudVBhZ2UoKTtcblxuICAgICAgICB0b1JlbW92ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZS10b3BcIik7XG4gICAgICAgIHRvQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWJvdHRvbVwiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b0FkZCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b0FkZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1ib3R0b21cIik7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHRvUmVtb3ZlKTtcbiAgICAgICAgfSwgMzEwKTtcbiAgICB9IGVsc2UgaWYgKGV2LnRhcmdldC5pZCA9PT0gXCJjb250YWN0LXRhYlwiKSB7XG4gICAgICAgIGNvbnN0IHRvQWRkID0gQ29udGFjdFBhZ2UoKTtcblxuICAgICAgICB0b1JlbW92ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZS10b3BcIik7XG4gICAgICAgIHRvQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWJvdHRvbVwiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b0FkZCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b0FkZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1ib3R0b21cIik7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHRvUmVtb3ZlKTtcbiAgICAgICAgfSwgMzEwKTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1lbnVQYWdlLmlkID0gXCJtZW51LXBhZ2VcIjtcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XG5cbiAgICBtZW51UGFnZS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMSBpZD1cIm1lbnUtdGl0bGVcIj5NZW51PC9oMT5cbiAgICAgICAgPGRpdiBpZD1cIm1lbnUtY29udGVudFwiIGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInRhcGFzLWNhcmRcIiBjbGFzcz1cIm1lbnUtY2FyZCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWVudS1jYXJkLXRpdGxlXCI+VGFwYXM8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWVudS1kZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5pc2kgbGFib3J1bSBtaW5pbWEgZGljdGEsIHBlcnNwaWNpYXRpcyBkb2xvcmlidXMgaW4gZmFjaWxpcyBtaW51cyBleCB2b2x1cHRhdGVtIGRpc3RpbmN0aW8uPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1idXR0b25zIGZsZXhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZWxhLWNhcmRcIiBjbGFzcz1cIm1lbnUtY2FyZCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWVudS1jYXJkLXRpdGxlXCI+UGFlbGE8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWVudS1kZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yZW0gZXhjZXB0dXJpIHVuZGUgbm9zdHJ1bSBhbmltaSBtb2xlc3RpYWUgbW9kaSBpdGFxdWUgdmVsaXQuIEluLCBhcmNoaXRlY3RvIG9iY2FlY2F0aT88L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWJ1dHRvbnMgZmxleFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGFtLXNhbmR3aWNoLWNhcmRcIiBjbGFzcz1cIm1lbnUtY2FyZCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWVudS1jYXJkLXRpdGxlXCI+SGFtIFNhbmR3aWNoPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1lbnUtZGVzY3JpcHRpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gRGlzdGluY3RpbywgcmVwcmVoZW5kZXJpdCB0ZW5ldHVyIHF1YXMgbWFpb3JlcyByZXBlbGxlbmR1cyBjdW0gcGxhY2VhdCBleGVyY2l0YXRpb25lbSBhc3N1bWVuZGEgZGVzZXJ1bnQgZWl1cz88L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWJ1dHRvbnMgZmxleFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWwtYnVyZ2VyLWNhcmRcIiBjbGFzcz1cIm1lbnUtY2FyZCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWVudS1jYXJkLXRpdGxlXCI+RUwgQnVyZ2VyPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1lbnUtZGVzY3JpcHRpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gRGlzdGluY3RpbywgcmVwcmVoZW5kZXJpdCB0ZW5ldHVyIHF1YXMgbWFpb3JlcyByZXBlbGxlbmR1cyBjdW0gcGxhY2VhdCBleGVyY2l0YXRpb25lbSBhc3N1bWVuZGEgZGVzZXJ1bnQgZWl1cz88L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWJ1dHRvbnMgZmxleFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIGA7XG5cbiAgICBjb25zdCBjYXJkcyA9IEFycmF5LmZyb20obWVudVBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2FyZCcpKTtcblxuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhcmRFdmVudHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVQYWdlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RJbWFnZShjYXJkKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGlmIChjYXJkLmlkID09PSBcImVsLWJ1cmdlci1jYXJkXCIpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCJhc3NldHMvYnVyZ2VyLmpwZ1wiO1xuICAgIH0gZWxzZSBpZiAoY2FyZC5pZCA9PT0gXCJ0YXBhcy1jYXJkXCIpIHtcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCJhc3NldHMvdGFwYXMuanBnXCI7XG4gICAgfSBlbHNlIGlmIChjYXJkLmlkID09PSBcInBhZWxhLWNhcmRcIikge1xuICAgICAgICBpbWFnZS5zcmMgPSBcImFzc2V0cy9wYWVsYS5qcGdcIjtcbiAgICB9IGVsc2UgaWYgKGNhcmQuaWQgPT09IFwiaGFtLXNhbmR3aWNoLWNhcmRcIikge1xuICAgICAgICBpbWFnZS5zcmMgPSBcImFzc2V0cy9zYW5kd2ljaC5qcGdcIjtcbiAgICB9XG5cbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9IFwiNDB2d1wiO1xuICAgIGltYWdlLnN0eWxlLm1pbldpZHRoID0gXCIyMDBweFwiO1xuICAgIGltYWdlLnN0eWxlLm1heFdpZHRoID0gXCI0NTBweFwiO1xuICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuXG4gICAgcmV0dXJuIGltYWdlO1xufVxuXG5mdW5jdGlvbiBnZXRJbmZvKGNhcmQpIHtcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhbGxlcmdlbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBpZiAoY2FyZC5pZCA9PT0gXCJlbC1idXJnZXItY2FyZFwiKSB7XG4gICAgICAgIHByaWNlLmlubmVyVGV4dCA9IFwiMTTigqxcIjtcbiAgICAgICAgYWxsZXJnZW5zLmlubmVyVGV4dCA9IFwiTWlsayBwcm9kdWN0cywgR2x1dGVuXCI7XG4gICAgfSBlbHNlIGlmIChjYXJkLmlkID09PSBcInRhcGFzLWNhcmRcIikge1xuICAgICAgICBwcmljZS5pbm5lclRleHQgPSBcIjPigqwgcGVyIGRpc2hcIjtcbiAgICAgICAgYWxsZXJnZW5zLmlubmVyVGV4dCA9IFwiU2hlbGxmaXNoLCBmaXNoXCI7XG4gICAgfSBlbHNlIGlmIChjYXJkLmlkID09PSBcInBhZWxhLWNhcmRcIikge1xuICAgICAgICBwcmljZS5pbm5lclRleHQgPSBcIjEy4oKsXCI7XG4gICAgICAgIGFsbGVyZ2Vucy5pbm5lclRleHQgPSBcIlNoZWxsZmlzaCwgZmlzaFwiO1xuICAgIH0gZWxzZSBpZiAoY2FyZC5pZCA9PT0gXCJoYW0tc2FuZHdpY2gtY2FyZFwiKSB7XG4gICAgICAgIHByaWNlLmlubmVyVGV4dCA9IFwiOOKCrFwiO1xuICAgICAgICBhbGxlcmdlbnMuaW5uZXJUZXh0ID0gXCJQb3JrLCBHbHV0ZW5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcmljZSwgYWxsZXJnZW5zIH07XG59XG5cbmZ1bmN0aW9uIGV4cGFuZENhcmQoY2FyZCkge1xuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtcGFnZScpO1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY29udGVudCcpO1xuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRpdGxlJyk7XG5cbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdkaXNhcHBlYXInKTtcbiAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnZGlzYXBwZWFyJyk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XG4gICAgaW5mby5pZCA9IFwibWVhbC1pbmZvXCI7XG4gICAgaW5mby5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICBpbmZvLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEgLyAzXCI7XG5cbiAgICBjb25zdCBwcmljZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcmljZVRpdGxlLmlubmVyVGV4dCA9IFwiUHJpY2U6XCI7XG4gICAgY29uc3QgYWxsZXJnZW5zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFsbGVyZ2Vuc1RpdGxlLmlubmVyVGV4dCA9IFwiQWxsZXJnZW5zOlwiO1xuICAgIGNvbnN0IHsgcHJpY2UsIGFsbGVyZ2VucyB9ID0gZ2V0SW5mbyhjYXJkKTtcblxuICAgIGluZm8uYXBwZW5kQ2hpbGQocHJpY2VUaXRsZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChhbGxlcmdlbnNUaXRsZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChhbGxlcmdlbnMpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChzZWxlY3RJbWFnZShjYXJkKSk7XG4gICAgICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIHNocmlua0NhcmQoY2FyZCkge1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLWZpbHRlcicpO1xuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtcGFnZScpO1xuXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNhcHBlYXInKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwYWdlQ29udGVudC5yZW1vdmVDaGlsZChtZW51UGFnZSk7XG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKE1lbnVQYWdlKCkpO1xuICAgIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNhcmRFdmVudHMoZXYpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdCgnLm1lbnUtY2FyZCcpO1xuXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgc2hyaW5rQ2FyZCh0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudCcpO1xuICAgICAgICBjb25zdCBjYXJkcyA9IEFycmF5LmZyb20ocGFnZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2FyZCcpKTtcbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJkLmlkICE9PSB0YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FwcGVhcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBleHBhbmRDYXJkKHRhcmdldCk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUxvYWQoKSB7XG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlRmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZS5pZCA9IFwicGFnZS1jb250ZW50XCI7XG5cbiAgICBjb25zdCB3ZWxjb21lSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB3ZWxjb21lSW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy93ZWxjb21lLWltYWdlLmpwZ1wiO1xuICAgIHdlbGNvbWVJbWFnZS5pZCA9IFwid2VsY29tZS1pbWFnZVwiO1xuICAgIHdlbGNvbWUuYXBwZW5kQ2hpbGQod2VsY29tZUltYWdlKTtcblxuICAgIGltYWdlRmlsdGVyLmlkID0gXCJpbWFnZS1maWx0ZXJcIjtcbiAgICB3ZWxjb21lLmFwcGVuZENoaWxkKGltYWdlRmlsdGVyKTtcbiAgICBpbWFnZUZpbHRlci5hcHBlbmRDaGlsZCh3ZWxjb21lUGFnZUNvbnRlbnQoKSk7XG4gICAgcmV0dXJuIHdlbGNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWxjb21lUGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3Qgd2VsY29tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHdlbGNvbWVDb250ZW50LmlkID0gXCJ3ZWxjb21lLXBhZ2VcIjtcblxuICAgIHdlbGNvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcbiAgICB3ZWxjb21lQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJ3ZWxjb21lLXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgaWQ9XCJ3ZWxjb21lLXRpdGxlXCI+RWwgRm9vZGllczwvaDE+XG4gICAgICAgICAgICA8cCBpZD1cIndlbGNvbWUtdGV4dFwiPlNwYW5pc2ggZm9vZCwgZm9yIGZvb2RpZXMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgIHJldHVybiB3ZWxjb21lQ29udGVudDtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
