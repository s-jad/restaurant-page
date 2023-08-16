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
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
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
    max-width: 300px;
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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Box sizing rules and easier REM calculations */\n\nhtml {\n  box-sizing: border-box;\n  font-size: 10px;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* START OF STYLES */\n\n:root {\n    --dark-blue: hsl(208, 95%, 8%);\n    --mid-blue: hsl(214, 97%, 13%);\n    --mid-purple: hsl(344, 35%, 34%);\n    --light-yellow: hsl(47, 77%, 92%);\n    --mid-orange: hsl(10, 65%, 34%);\n}\n\n@font-face {\n  font-family: 'ShadowsIntoLight-Regular';\n  src: url('./assets/ShadowsIntoLight-Regular.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n\n}\n\n/* ELEMENT STYLES */\n\nbody {\n    color: var(--light-yellow);\n    font-size: 1.6rem;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\np {\n    display: block;\n}\n\nh1 {\n    font-family: \"ShadowsIntoLight-Regular\";\n    font-size: clamp(30px, 3.6rem, 40px);\n}\n\nh2 {\n    font-family: \"ShadowsIntoLight-Regular\";\n    font-size: clamp(24px, 3rem, 34px);\n}\n\nh3 {\n    font-family: \"ShadowsIntoLight-Regular\";\n    font-size: clamp(22px, 2.6rem, 30px);\n}\n/* UTILITY CLASSES */\n\n.flex {\n    display: flex;\n}\n\n.grid {\n    display: grid;\n}\n\n.fixed {\n    position: fixed;\n}\n\n.zi-10 {\n    z-index: 10;\n}\n\n/* HEADER AND FOOTER */\n\n#page-header,\n#page-footer {\n    font-size: clamp(18px, 2rem, 22px);\n    font-weight: 600;\n    background: var(--dark-blue);\n    width: 100%;\n}\n\n#page-footer {\n    align-items: center;\n    justify-content: center;\n    bottom: 0;\n    height: 5vh;\n    color: var(--light-yellow);;\n}\n\n#page-header {\n    top: 0;\n    height: 10vh;\n}\n\n#header-flex {\n    padding: 0 1rem;\n    align-items: end;\n}\n\n#header-flex,\n#icon-flex {\n    justify-content: space-between;\n    height: 100%;\n}\n\n#icon-flex {\n    padding-bottom: 1rem;\n    align-items: end; \n    gap: 1rem;\n}\n\n.social-media-icon {\n    height: 30px;\n    width: 30px;\n    filter: invert(90%);\n}\n\n#tab-flex {\n    gap: 1.5rem;\n    width: 40%;\n    justify-content: space-between;\n}\n\n.tab {\n    background: var(--mid-orange);\n    scale: 1;\n    transform: translateY(0);\n    transition: color 300ms ease-in-out,\n                background 300ms ease-in-out,\n                transform 300ms ease-in-out,\n                scale 300ms ease-in-out;\n\n    height: 40px;\n    width: 140px;\n    padding-top: 0.5rem;\n    text-align: center;\n    border-radius: 2rem 0.5rem 0 0;\n    cursor: pointer;\n\n    font-size: clamp(18px, 2.6rem, 30px);\n    font-family: \"ShadowsIntoLight-Regular\";\n}\n\n.tab:hover,\n.tab:focus-within {\n    scale: 1.1;\n    background: var(--light-yellow);\n    color: var(--dark-blue);\n    transform: translateY(-2px);\n}\n\n#colorscheme-flex {\n    flex-direction: column;\n    padding-right: 1rem;\n}\n\n/* Page Content */\n\n#page-content {\n    height: 100vh;\n    width: 100vw;\n}\n\n#welcome-image {\n    position: absolute;\n    top: 0;\n    z-index: -1;\n    width: 100%;\n    height: auto;\n}\n\n#image-filter {\n    height: 100vh;\n    width: 100vw;\n    background: radial-gradient(ellipse at center, hsla(208, 95%, 8%, 0.7) 10%, transparent);\n}\n\n#welcome-page,\n#menu-page,\n#contact-page {\n    position: relative;\n    z-index: 0;\n    top: 0;\n    opacity: 1;\n    min-height: 100vh;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    transition: opacity 350ms ease-in-out,\n                top 300ms ease-in-out;\n}\n\n#welcome-page.hide-bottom,\n#menu-page.hide-bottom, \n#contact-page.hide-bottom {\n    top: 150%;\n    opacity: 0;\n}\n\n#welcome-page.hide-top,\n#menu-page.hide-top, \n#contact-page.hide-top {\n    top: -50%;\n    opacity: 0;\n}\n\n#welcome-text-container {\n    height: 30vh;\n    transform: translateY(-15vh);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#welcome-title {\n    font-size: clamp(50px, 5.6rem, 60px);\n}\n\n#welcome-text {\n    font-size: clamp(30px, 3.6rem, 40px);\n}\n\n#welcome-title,\n#welcome-text {\n    color: var(--light-yellow);\n    font-family: \"ShadowsIntoLight-Regular\";\n}\n\n/* MENU PAGE */\n\n#menu-page {\n    height: 75vh;\n}\n\n#menu-content {\n    height: auto;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 1rem;\n    gap: 1rem;\n    opacity: 1;\n    transition: opacity 300ms ease-in-out;\n}\n\n#menu-content.disappear {\n    opacity: 0;\n}\n\n.menu-card {\n    padding: 1rem;\n    gap: 1rem;\n    border: 1px solid var(--light-yellow);\n    box-shadow: 0 2px 5px var(--dark-blue),\n                inset 0 0 2px var(--light-yellow);\n    border-radius: 2rem 0.5rem 2rem 0.5rem;\n    background: hsla(208, 95%, 8%, 0.8);\n    scale: 1;\n    opacity: 1;\n    cursor: pointer;\n    transition: scale 300ms ease-in-out,\n                background 300ms ease-in-out,\n                opacity 300ms ease-in-out;\n}\n\n.menu-card:hover,\n.menu-card:focus-within {\n    scale: 1.02;\n    background: hsla(208, 65%, 18%, 0.8);\n}\n\n.menu-card.disappaear {\n    opacity: 0;\n}\n\n#menu-title {\n    opacity: 1;\n    transition: opacity 300ms ease-in-out;\n}\n\n#menu-title.disappear {\n    opacity: 0;\n}\n\n.menu-card.expanded {\n    position: absolute;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    padding: 1rem;\n    align-items: center;\n    justify-content: center;\n    top: 17.5vh;\n    left: 15vw;\n    height: 70vh;\n    width: 70vw;\n}\n\n.menu-card.expanded > .menu-card-title {\n    grid-column: 1 / 6;\n    text-align: center;\n}\n\n.menu-card.expanded > .menu-description {\n    grid-column: 1 / 6;\n}\n\n.menu-card.expanded > img {\n    grid-column: 3 / 6;\n    max-width: 300px;\n}\n\n.menu-card-title {\n    min-width: 100px;\n}\n\n#meal-info {\n    gap: 1rem;\n    height: 100%;\n}\n\n@media (max-width: 820px) {\n    .menu-card {\n        flex-direction: column;\n    }\n}\n\n/* CONTACT PAGE */\n\n#contact-card {\n    display: grid;\n    gap: 0.5rem;\n    grid-template-columns: repeat(6, 1fr);\n    padding: 1rem 2rem;\n    background: hsla(208, 95%, 8%, 0.8);\n    border: 1px solid var(--light-yellow);\n    border-radius: 2rem 0.5rem 2rem 0.5rem;\n    box-shadow: 0 2px 5px var(--dark-blue),\n                inset 0 0 2px var(--light-yellow);\n}\n\n#contact-card > h2 {\n    grid-column: 1 / 7;\n    text-align: center;\n    margin-bottom: 1rem;\n}\n\n#contact-card > h3 {\n    position: relative;\n    text-align: right;\n    grid-column: 1 / 3;\n}\n\n#contact-card > p {\n    margin-top: 0.7rem;\n    height: fit-content;\n    line-height: 1.8;\n    grid-column: 4 / 7;\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHdGQUF3RixNQUFNLFlBQVksV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLFlBQVksZUFBZSxVQUFVLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxPQUFPLFlBQVksU0FBUyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsUUFBUSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxPQUFPLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLE1B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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1COztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9EZXZlbG9wbWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL2hlYWRlci1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRGV2ZWxvcG1lbnQvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL3dlbGNvbWUtcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvU2hhZG93c0ludG9MaWdodC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQm94IHNpemluZyBydWxlcyBhbmQgZWFzaWVyIFJFTSBjYWxjdWxhdGlvbnMgKi9cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWxbcm9sZT0nbGlzdCddLFxub2xbcm9sZT0nbGlzdCddIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cbmE6bm90KFtjbGFzc10pIHtcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xufVxuXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXG5pbWcsXG5waWN0dXJlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xuICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xuICB9XG5cbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogU1RBUlQgT0YgU1RZTEVTICovXG5cbjpyb290IHtcbiAgICAtLWRhcmstYmx1ZTogaHNsKDIwOCwgOTUlLCA4JSk7XG4gICAgLS1taWQtYmx1ZTogaHNsKDIxNCwgOTclLCAxMyUpO1xuICAgIC0tbWlkLXB1cnBsZTogaHNsKDM0NCwgMzUlLCAzNCUpO1xuICAgIC0tbGlnaHQteWVsbG93OiBoc2woNDcsIDc3JSwgOTIlKTtcbiAgICAtLW1pZC1vcmFuZ2U6IGhzbCgxMCwgNjUlLCAzNCUpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXInO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxufVxuXG4vKiBFTEVNRU5UIFNUWUxFUyAqL1xuXG5ib2R5IHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxucCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcIjtcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDMuNnJlbSwgNDBweCk7XG59XG5cbmgyIHtcbiAgICBmb250LWZhbWlseTogXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcIjtcbiAgICBmb250LXNpemU6IGNsYW1wKDI0cHgsIDNyZW0sIDM0cHgpO1xufVxuXG5oMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiU2hhZG93c0ludG9MaWdodC1SZWd1bGFyXCI7XG4gICAgZm9udC1zaXplOiBjbGFtcCgyMnB4LCAyLjZyZW0sIDMwcHgpO1xufVxuLyogVVRJTElUWSBDTEFTU0VTICovXG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmZpeGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi56aS0xMCB7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi8qIEhFQURFUiBBTkQgRk9PVEVSICovXG5cbiNwYWdlLWhlYWRlcixcbiNwYWdlLWZvb3RlciB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCAycmVtLCAyMnB4KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNwYWdlLWZvb3RlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7O1xufVxuXG4jcGFnZS1oZWFkZXIge1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwdmg7XG59XG5cbiNoZWFkZXItZmxleCB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbiNoZWFkZXItZmxleCxcbiNpY29uLWZsZXgge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNpY29uLWZsZXgge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7IFxuICAgIGdhcDogMXJlbTtcbn1cblxuLnNvY2lhbC1tZWRpYS1pY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoOTAlKTtcbn1cblxuI3RhYi1mbGV4IHtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRhYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWlkLW9yYW5nZSk7XG4gICAgc2NhbGU6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgMzAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgIHNjYWxlIDMwMG1zIGVhc2UtaW4tb3V0O1xuXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDAuNXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCAyLjZyZW0sIDMwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiBcIlNoYWRvd3NJbnRvTGlnaHQtUmVndWxhclwiO1xufVxuXG4udGFiOmhvdmVyLFxuLnRhYjpmb2N1cy13aXRoaW4ge1xuICAgIHNjYWxlOiAxLjE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQteWVsbG93KTtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbiNjb2xvcnNjaGVtZS1mbGV4IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi8qIFBhZ2UgQ29udGVudCAqL1xuXG4jcGFnZS1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuI3dlbGNvbWUtaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jaW1hZ2UtZmlsdGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIGhzbGEoMjA4LCA5NSUsIDglLCAwLjcpIDEwJSwgdHJhbnNwYXJlbnQpO1xufVxuXG4jd2VsY29tZS1wYWdlLFxuI21lbnUtcGFnZSxcbiNjb250YWN0LXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDM1MG1zIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgIHRvcCAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuI3dlbGNvbWUtcGFnZS5oaWRlLWJvdHRvbSxcbiNtZW51LXBhZ2UuaGlkZS1ib3R0b20sIFxuI2NvbnRhY3QtcGFnZS5oaWRlLWJvdHRvbSB7XG4gICAgdG9wOiAxNTAlO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbiN3ZWxjb21lLXBhZ2UuaGlkZS10b3AsXG4jbWVudS1wYWdlLmhpZGUtdG9wLCBcbiNjb250YWN0LXBhZ2UuaGlkZS10b3Age1xuICAgIHRvcDogLTUwJTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4jd2VsY29tZS10ZXh0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTV2aCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiN3ZWxjb21lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDUwcHgsIDUuNnJlbSwgNjBweCk7XG59XG5cbiN3ZWxjb21lLXRleHQge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMzBweCwgMy42cmVtLCA0MHB4KTtcbn1cblxuI3dlbGNvbWUtdGl0bGUsXG4jd2VsY29tZS10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcbiAgICBmb250LWZhbWlseTogXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcIjtcbn1cblxuLyogTUVOVSBQQUdFICovXG5cbiNtZW51LXBhZ2Uge1xuICAgIGhlaWdodDogNzV2aDtcbn1cblxuI21lbnUtY29udGVudCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jbWVudS1jb250ZW50LmRpc2FwcGVhciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLm1lbnUtY2FyZCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQteWVsbG93KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggdmFyKC0tZGFyay1ibHVlKSxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAgMnB4IHZhcigtLWxpZ2h0LXllbGxvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAwLjVyZW0gMnJlbSAwLjVyZW07XG4gICAgYmFja2dyb3VuZDogaHNsYSgyMDgsIDk1JSwgOCUsIDAuOCk7XG4gICAgc2NhbGU6IDE7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMzAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAzMDBtcyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS1jYXJkOmhvdmVyLFxuLm1lbnUtY2FyZDpmb2N1cy13aXRoaW4ge1xuICAgIHNjYWxlOiAxLjAyO1xuICAgIGJhY2tncm91bmQ6IGhzbGEoMjA4LCA2NSUsIDE4JSwgMC44KTtcbn1cblxuLm1lbnUtY2FyZC5kaXNhcHBhZWFyIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4jbWVudS10aXRsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jbWVudS10aXRsZS5kaXNhcHBlYXIge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5tZW51LWNhcmQuZXhwYW5kZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRvcDogMTcuNXZoO1xuICAgIGxlZnQ6IDE1dnc7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIHdpZHRoOiA3MHZ3O1xufVxuXG4ubWVudS1jYXJkLmV4cGFuZGVkID4gLm1lbnUtY2FyZC10aXRsZSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lbnUtY2FyZC5leHBhbmRlZCA+IC5tZW51LWRlc2NyaXB0aW9uIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XG59XG5cbi5tZW51LWNhcmQuZXhwYW5kZWQgPiBpbWcge1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNjtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4ubWVudS1jYXJkLXRpdGxlIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4jbWVhbC1pbmZvIHtcbiAgICBnYXA6IDFyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICAubWVudS1jYXJkIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi8qIENPTlRBQ1QgUEFHRSAqL1xuXG4jY29udGFjdC1jYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC41cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIGJhY2tncm91bmQ6IGhzbGEoMjA4LCA5NSUsIDglLCAwLjgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXllbGxvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAwLjVyZW0gMnJlbSAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHZhcigtLWRhcmstYmx1ZSksXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwIDJweCB2YXIoLS1saWdodC15ZWxsb3cpO1xufVxuXG4jY29udGFjdC1jYXJkID4gaDIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI2NvbnRhY3QtY2FyZCA+IGgzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufVxuXG4jY29udGFjdC1jYXJkID4gcCB7XG4gICAgbWFyZ2luLXRvcDogMC43cmVtO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICBncmlkLWNvbHVtbjogNCAvIDc7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpREFBaUQ7O0FBRWpEO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7QUFDMUI7Ozs7Ozs7Ozs7RUFVRSxTQUFTO0FBQ1g7O0FBRUEsMkdBQTJHO0FBQzNHOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUEsZ0dBQWdHO0FBQ2hHO0VBQ0U7R0FDQyxxQkFBcUI7RUFDdEI7O0VBRUE7OztJQUdFLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLGdDQUFnQztFQUNsQztBQUNGOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsK0JBQStCO0FBQ25DOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLCtEQUFvRTtFQUNwRSxnQkFBZ0I7RUFDaEIsa0JBQWtCOztBQUVwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxvQ0FBb0M7QUFDeEM7QUFDQSxvQkFBb0I7O0FBRXBCO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLHNCQUFzQjs7QUFFdEI7O0lBRUksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLE1BQU07SUFDTixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixRQUFRO0lBQ1Isd0JBQXdCO0lBQ3hCOzs7dUNBR21DOztJQUVuQyxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGVBQWU7O0lBRWYsb0NBQW9DO0lBQ3BDLHVDQUF1QztBQUMzQzs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix3RkFBd0Y7QUFDNUY7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkI7cUNBQ2lDO0FBQ3JDOztBQUVBOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLDBCQUEwQjtJQUMxQix1Q0FBdUM7QUFDM0M7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDO2lEQUM2QztJQUM3QyxzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLFFBQVE7SUFDUixVQUFVO0lBQ1YsZUFBZTtJQUNmOzt5Q0FFcUM7QUFDekM7O0FBRUE7O0lBRUksV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxxQ0FBcUM7SUFDckMsc0NBQXNDO0lBQ3RDO2lEQUM2QztBQUNqRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQm94IHNpemluZyBydWxlcyBhbmQgZWFzaWVyIFJFTSBjYWxjdWxhdGlvbnMgKi9cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9J2xpc3QnXSxcXG5vbFtyb2xlPSdsaXN0J10ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLyogU1RBUlQgT0YgU1RZTEVTICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLWRhcmstYmx1ZTogaHNsKDIwOCwgOTUlLCA4JSk7XFxuICAgIC0tbWlkLWJsdWU6IGhzbCgyMTQsIDk3JSwgMTMlKTtcXG4gICAgLS1taWQtcHVycGxlOiBoc2woMzQ0LCAzNSUsIDM0JSk7XFxuICAgIC0tbGlnaHQteWVsbG93OiBoc2woNDcsIDc3JSwgOTIlKTtcXG4gICAgLS1taWQtb3JhbmdlOiBoc2woMTAsIDY1JSwgMzQlKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NoYWRvd3NJbnRvTGlnaHQtUmVndWxhcic7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvU2hhZG93c0ludG9MaWdodC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuXFxufVxcblxcbi8qIEVMRU1FTlQgU1RZTEVTICovXFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5wIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcXFwiO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDMuNnJlbSwgNDBweCk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcXFwiO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDI0cHgsIDNyZW0sIDM0cHgpO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2hhZG93c0ludG9MaWdodC1SZWd1bGFyXFxcIjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyMnB4LCAyLjZyZW0sIDMwcHgpO1xcbn1cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZpeGVkIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uemktMTAge1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyogSEVBREVSIEFORCBGT09URVIgKi9cXG5cXG4jcGFnZS1oZWFkZXIsXFxuI3BhZ2UtZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCAycmVtLCAyMnB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3R0b206IDA7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTs7XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jaGVhZGVyLWZsZXgge1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbiNoZWFkZXItZmxleCxcXG4jaWNvbi1mbGV4IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNpY29uLWZsZXgge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDsgXFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYS1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTAlKTtcXG59XFxuXFxuI3RhYi1mbGV4IHtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1pZC1vcmFuZ2UpO1xcbiAgICBzY2FsZTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAzMDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICBzY2FsZSAzMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAwLjVyZW0gMCAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMThweCwgMi42cmVtLCAzMHB4KTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaGFkb3dzSW50b0xpZ2h0LVJlZ3VsYXJcXFwiO1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi50YWI6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQteWVsbG93KTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuXFxuI2NvbG9yc2NoZW1lLWZsZXgge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4vKiBQYWdlIENvbnRlbnQgKi9cXG5cXG4jcGFnZS1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jd2VsY29tZS1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuI2ltYWdlLWZpbHRlciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCBoc2xhKDIwOCwgOTUlLCA4JSwgMC43KSAxMCUsIHRyYW5zcGFyZW50KTtcXG59XFxuXFxuI3dlbGNvbWUtcGFnZSxcXG4jbWVudS1wYWdlLFxcbiNjb250YWN0LXBhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDM1MG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICB0b3AgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiN3ZWxjb21lLXBhZ2UuaGlkZS1ib3R0b20sXFxuI21lbnUtcGFnZS5oaWRlLWJvdHRvbSwgXFxuI2NvbnRhY3QtcGFnZS5oaWRlLWJvdHRvbSB7XFxuICAgIHRvcDogMTUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuI3dlbGNvbWUtcGFnZS5oaWRlLXRvcCxcXG4jbWVudS1wYWdlLmhpZGUtdG9wLCBcXG4jY29udGFjdC1wYWdlLmhpZGUtdG9wIHtcXG4gICAgdG9wOiAtNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jd2VsY29tZS10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXZoKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jd2VsY29tZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgNS42cmVtLCA2MHB4KTtcXG59XFxuXFxuI3dlbGNvbWUtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMzBweCwgMy42cmVtLCA0MHB4KTtcXG59XFxuXFxuI3dlbGNvbWUtdGl0bGUsXFxuI3dlbGNvbWUtdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNoYWRvd3NJbnRvTGlnaHQtUmVndWxhclxcXCI7XFxufVxcblxcbi8qIE1FTlUgUEFHRSAqL1xcblxcbiNtZW51LXBhZ2Uge1xcbiAgICBoZWlnaHQ6IDc1dmg7XFxufVxcblxcbiNtZW51LWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI21lbnUtY29udGVudC5kaXNhcHBlYXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubWVudS1jYXJkIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggdmFyKC0tZGFyay1ibHVlKSxcXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwIDJweCB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDAuNXJlbSAycmVtIDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogaHNsYSgyMDgsIDk1JSwgOCUsIDAuOCk7XFxuICAgIHNjYWxlOiAxO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHNjYWxlIDMwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kIDMwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1jYXJkOmhvdmVyLFxcbi5tZW51LWNhcmQ6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2NhbGU6IDEuMDI7XFxuICAgIGJhY2tncm91bmQ6IGhzbGEoMjA4LCA2NSUsIDE4JSwgMC44KTtcXG59XFxuXFxuLm1lbnUtY2FyZC5kaXNhcHBhZWFyIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuI21lbnUtdGl0bGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbWVudS10aXRsZS5kaXNhcHBlYXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubWVudS1jYXJkLmV4cGFuZGVkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdG9wOiAxNy41dmg7XFxuICAgIGxlZnQ6IDE1dnc7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgd2lkdGg6IDcwdnc7XFxufVxcblxcbi5tZW51LWNhcmQuZXhwYW5kZWQgPiAubWVudS1jYXJkLXRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWNhcmQuZXhwYW5kZWQgPiAubWVudS1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG59XFxuXFxuLm1lbnUtY2FyZC5leHBhbmRlZCA+IGltZyB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNjtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLm1lbnUtY2FyZC10aXRsZSB7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxufVxcblxcbiNtZWFsLWluZm8ge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxuICAgIC5tZW51LWNhcmQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cXG4vKiBDT05UQUNUIFBBR0UgKi9cXG5cXG4jY29udGFjdC1jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZDogaHNsYSgyMDgsIDk1JSwgOCUsIDAuOCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXllbGxvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMC41cmVtIDJyZW0gMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggdmFyKC0tZGFyay1ibHVlKSxcXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwIDJweCB2YXIoLS1saWdodC15ZWxsb3cpO1xcbn1cXG5cXG4jY29udGFjdC1jYXJkID4gaDIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI2NvbnRhY3QtY2FyZCA+IGgzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4jY29udGFjdC1jYXJkID4gcCB7XFxuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA3O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3QtcGFnZVwiO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuXG4gICAgY29udGFjdC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWN0LWNhcmRcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgIDxoMj5Db250YWN0IFVzPC9oMj5cbiAgICAgICAgICAgIDxoMz5QaG9uZTo8L2gzPlxuICAgICAgICAgICAgPHAgaWQ9XCJyZXN0YXVyYW50LWNvbnRhY3QtcGhvbmVcIj4wMDAtMDAwMC0wMDAwPC9wPjxicj5cbiAgICAgICAgICAgIDxoMz5FbWFpbDo8L2gzPlxuICAgICAgICAgICAgPHAgaWQ9XCJyZXN0YXVyYW50LWNvbnRhY3QtZW1haWxcIj50aGlzQHJlc3RhdXJhbnQuY29tPC9wPjxicj5cbiAgICAgICAgICAgIDxoMz5BZGRyZXNzOjwvaDM+XG4gICAgICAgICAgICA8cCBpZD1cInJlc3RhdXJhbnQtY29udGFjdC1hZGRyZXNzXCI+MTIgQXN0cmVldDxicj4gU29tZVBhcnRPZlRvd248YnI+IEJpZ1xuICAgICAgICAgICAgQ2l0eTxicj4gMTE1LTQ0MzI8YnI+IEVhcnRoPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFnZUhlYWRlcigpIHtcbiAgICBjb25zdCB3ZWxjb21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICB3ZWxjb21lSGVhZGVyLmlkID0gXCJwYWdlLWhlYWRlclwiO1xuICAgIHdlbGNvbWVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbiAgICB3ZWxjb21lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3ppLTEwJyk7XG5cbiAgICB3ZWxjb21lSGVhZGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItZmxleFwiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWItZmxleFwiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2VsY29tZS10YWJcIiBjbGFzcz1cInRhYlwiPldlbGNvbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnUtdGFiXCIgY2xhc3M9XCJ0YWJcIj5NZW51PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWN0LXRhYlwiIGNsYXNzPVwidGFiXCI+Q29udGFjdDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImljb24tZmxleFwiIGNsYXNzPVwiZmxleFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAvLyBJbXBvcnQgaWNvbiBzdmdzIGFuZCBhcHBlbmQgdGhlbSB0byBpY29uRmxleFxuICAgIGNvbnN0IGljb25GbGV4ID0gd2VsY29tZUhlYWRlci5xdWVyeVNlbGVjdG9yKFwiI2ljb24tZmxleFwiKTtcblxuICAgIGNvbnN0IGZhY2Vib29rSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGZhY2Vib29rSWNvbi5zcmMgPSBcIi4vYXNzZXRzL2ZhY2Vib29rLnN2Z1wiO1xuICAgIGZhY2Vib29rSWNvbi5jbGFzc0xpc3QuYWRkKCdzb2NpYWwtbWVkaWEtaWNvbicpO1xuXG4gICAgY29uc3QgdHdpdHRlckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0d2l0dGVySWNvbi5zcmMgPSBcIi4vYXNzZXRzL3R3aXR0ZXIuc3ZnXCI7XG4gICAgdHdpdHRlckljb24uY2xhc3NMaXN0LmFkZCgnc29jaWFsLW1lZGlhLWljb24nKTtcblxuICAgIGNvbnN0IHdoYXRzYXBwSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHdoYXRzYXBwSWNvbi5zcmMgPSBcIi4vYXNzZXRzL3doYXRzYXBwLnN2Z1wiO1xuICAgIHdoYXRzYXBwSWNvbi5jbGFzc0xpc3QuYWRkKCdzb2NpYWwtbWVkaWEtaWNvbicpO1xuXG4gICAgaWNvbkZsZXguYXBwZW5kQ2hpbGQoZmFjZWJvb2tJY29uKTtcbiAgICBpY29uRmxleC5hcHBlbmRDaGlsZCh0d2l0dGVySWNvbik7XG4gICAgaWNvbkZsZXguYXBwZW5kQ2hpbGQod2hhdHNhcHBJY29uKTtcblxuICAgIHJldHVybiB3ZWxjb21lSGVhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgIGZvb3Rlci5pZCA9IFwicGFnZS1mb290ZXJcIjtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuXG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgLSBBIENoZWY8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBpZD1cImZvb3Rlci1saW5rcy1mbGV4XCIgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaWNvblwiPjxhIGhyZWY9XCIjXCI+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaWNvblwiPjxhIGhyZWY9XCIjXCI+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaWNvblwiPjxhIGhyZWY9XCIjXCI+PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgIGA7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFBhZ2VMb2FkLCB7IHdlbGNvbWVQYWdlQ29udGVudCB9IGZyb20gXCIuL3dlbGNvbWUtcGFnZS5qc1wiO1xuaW1wb3J0IE1lbnVQYWdlIGZyb20gXCIuL21lbnUtcGFnZS5qc1wiO1xuaW1wb3J0IENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3QtcGFnZVwiO1xuaW1wb3J0IHsgcGFnZUhlYWRlciwgcGFnZUZvb3RlciB9IGZyb20gXCIuL2hlYWRlci1mb290ZXIuanNcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChQYWdlTG9hZCgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUZvb3RlcigpKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZS1maWx0ZXInKTtcbmNvbnN0IHRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKSk7XG5cbi8vIFRBQiBFVkVOVCBMSVNURU5FUlMgXG5cbnRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRhYik7XG59KTtcblxuZnVuY3Rpb24gaGFuZGxlVGFiKGV2KSB7XG4gICAgY29uc3QgdG9SZW1vdmUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCQ9XCItcGFnZVwiXScpWzBdO1xuXG4gICAgaWYgKGV2LnRhcmdldC5pZCA9PT0gXCJ3ZWxjb21lLXRhYlwiKSB7XG4gICAgICAgIGNvbnN0IHRvQWRkID0gd2VsY29tZVBhZ2VDb250ZW50KCk7XG4gICAgICAgIHRvUmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJoaWRlLXRvcFwiKTtcbiAgICAgICAgdG9BZGQuY2xhc3NMaXN0LmFkZChcImhpZGUtYm90dG9tXCIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvQWRkKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRvQWRkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJvdHRvbVwiKTtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodG9SZW1vdmUpO1xuICAgICAgICB9LCAzMTApO1xuICAgIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmlkID09PSBcIm1lbnUtdGFiXCIpIHtcbiAgICAgICAgY29uc3QgdG9BZGQgPSBNZW51UGFnZSgpO1xuXG4gICAgICAgIHRvUmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJoaWRlLXRvcFwiKTtcbiAgICAgICAgdG9BZGQuY2xhc3NMaXN0LmFkZChcImhpZGUtYm90dG9tXCIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvQWRkKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRvQWRkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJvdHRvbVwiKTtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodG9SZW1vdmUpO1xuICAgICAgICB9LCAzMTApO1xuICAgIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmlkID09PSBcImNvbnRhY3QtdGFiXCIpIHtcbiAgICAgICAgY29uc3QgdG9BZGQgPSBDb250YWN0UGFnZSgpO1xuXG4gICAgICAgIHRvUmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJoaWRlLXRvcFwiKTtcbiAgICAgICAgdG9BZGQuY2xhc3NMaXN0LmFkZChcImhpZGUtYm90dG9tXCIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvQWRkKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRvQWRkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJvdHRvbVwiKTtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodG9SZW1vdmUpO1xuICAgICAgICB9LCAzMTApO1xuICAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51UGFnZSgpIHtcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbWVudVBhZ2UuaWQgPSBcIm1lbnUtcGFnZVwiO1xuICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcblxuICAgIG1lbnVQYWdlLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxIGlkPVwibWVudS10aXRsZVwiPk1lbnU8L2gxPlxuICAgICAgICA8ZGl2IGlkPVwibWVudS1jb250ZW50XCIgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidGFwYXMtY2FyZFwiIGNsYXNzPVwibWVudS1jYXJkIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtZW51LWNhcmQtdGl0bGVcIj5UYXBhczwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtZW51LWRlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmlzaSBsYWJvcnVtIG1pbmltYSBkaWN0YSwgcGVyc3BpY2lhdGlzIGRvbG9yaWJ1cyBpbiBmYWNpbGlzIG1pbnVzIGV4IHZvbHVwdGF0ZW0gZGlzdGluY3Rpby48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWJ1dHRvbnMgZmxleFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFlbGEtY2FyZFwiIGNsYXNzPVwibWVudS1jYXJkIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtZW51LWNhcmQtdGl0bGVcIj5QYWVsYTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtZW51LWRlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3JlbSBleGNlcHR1cmkgdW5kZSBub3N0cnVtIGFuaW1pIG1vbGVzdGlhZSBtb2RpIGl0YXF1ZSB2ZWxpdC4gSW4sIGFyY2hpdGVjdG8gb2JjYWVjYXRpPzwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItYnV0dG9ucyBmbGV4XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJoYW0tc2FuZHdpY2gtY2FyZFwiIGNsYXNzPVwibWVudS1jYXJkIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtZW51LWNhcmQtdGl0bGVcIj5IYW0gU2FuZHdpY2g8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWVudS1kZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBEaXN0aW5jdGlvLCByZXByZWhlbmRlcml0IHRlbmV0dXIgcXVhcyBtYWlvcmVzIHJlcGVsbGVuZHVzIGN1bSBwbGFjZWF0IGV4ZXJjaXRhdGlvbmVtIGFzc3VtZW5kYSBkZXNlcnVudCBlaXVzPzwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItYnV0dG9ucyBmbGV4XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbC1idXJnZXItY2FyZFwiIGNsYXNzPVwibWVudS1jYXJkIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtZW51LWNhcmQtdGl0bGVcIj5FTCBCdXJnZXI8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWVudS1kZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBEaXN0aW5jdGlvLCByZXByZWhlbmRlcml0IHRlbmV0dXIgcXVhcyBtYWlvcmVzIHJlcGVsbGVuZHVzIGN1bSBwbGFjZWF0IGV4ZXJjaXRhdGlvbmVtIGFzc3VtZW5kYSBkZXNlcnVudCBlaXVzPzwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItYnV0dG9ucyBmbGV4XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgYDtcblxuICAgIGNvbnN0IGNhcmRzID0gQXJyYXkuZnJvbShtZW51UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXJkJykpO1xuXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2FyZEV2ZW50cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudVBhZ2U7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEltYWdlKGNhcmQpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaWYgKGNhcmQuaWQgPT09IFwiZWwtYnVyZ2VyLWNhcmRcIikge1xuICAgICAgICBpbWFnZS5zcmMgPSBcImFzc2V0cy9idXJnZXIuanBnXCI7XG4gICAgfSBlbHNlIGlmIChjYXJkLmlkID09PSBcInRhcGFzLWNhcmRcIikge1xuICAgICAgICBpbWFnZS5zcmMgPSBcImFzc2V0cy90YXBhcy5qcGdcIjtcbiAgICB9IGVsc2UgaWYgKGNhcmQuaWQgPT09IFwicGFlbGEtY2FyZFwiKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IFwiYXNzZXRzL3BhZWxhLmpwZ1wiO1xuICAgIH0gZWxzZSBpZiAoY2FyZC5pZCA9PT0gXCJoYW0tc2FuZHdpY2gtY2FyZFwiKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IFwiYXNzZXRzL3NhbmR3aWNoLmpwZ1wiO1xuICAgIH1cblxuICAgIGltYWdlLnN0eWxlLndpZHRoID0gXCI0MHZ3XCI7XG4gICAgaW1hZ2Uuc3R5bGUubWluV2lkdGggPSBcIjIwMHB4XCI7XG4gICAgaW1hZ2Uuc3R5bGUubWF4V2lkdGggPSBcIjQ1MHB4XCI7XG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG5cbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGdldEluZm8oY2FyZCkge1xuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGFsbGVyZ2VucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGlmIChjYXJkLmlkID09PSBcImVsLWJ1cmdlci1jYXJkXCIpIHtcbiAgICAgICAgcHJpY2UuaW5uZXJUZXh0ID0gXCIxNOKCrFwiO1xuICAgICAgICBhbGxlcmdlbnMuaW5uZXJUZXh0ID0gXCJNaWxrIHByb2R1Y3RzLCBHbHV0ZW5cIjtcbiAgICB9IGVsc2UgaWYgKGNhcmQuaWQgPT09IFwidGFwYXMtY2FyZFwiKSB7XG4gICAgICAgIHByaWNlLmlubmVyVGV4dCA9IFwiM+KCrCBwZXIgZGlzaFwiO1xuICAgICAgICBhbGxlcmdlbnMuaW5uZXJUZXh0ID0gXCJTaGVsbGZpc2gsIGZpc2hcIjtcbiAgICB9IGVsc2UgaWYgKGNhcmQuaWQgPT09IFwicGFlbGEtY2FyZFwiKSB7XG4gICAgICAgIHByaWNlLmlubmVyVGV4dCA9IFwiMTLigqxcIjtcbiAgICAgICAgYWxsZXJnZW5zLmlubmVyVGV4dCA9IFwiU2hlbGxmaXNoLCBmaXNoXCI7XG4gICAgfSBlbHNlIGlmIChjYXJkLmlkID09PSBcImhhbS1zYW5kd2ljaC1jYXJkXCIpIHtcbiAgICAgICAgcHJpY2UuaW5uZXJUZXh0ID0gXCI44oKsXCI7XG4gICAgICAgIGFsbGVyZ2Vucy5pbm5lclRleHQgPSBcIlBvcmssIEdsdXRlblwiO1xuICAgIH1cblxuICAgIHJldHVybiB7IHByaWNlLCBhbGxlcmdlbnMgfTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kQ2FyZChjYXJkKSB7XG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1wYWdlJyk7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb250ZW50Jyk7XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtdGl0bGUnKTtcblxuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FwcGVhcicpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaXNhcHBlYXInKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcbiAgICBpbmZvLmlkID0gXCJtZWFsLWluZm9cIjtcbiAgICBpbmZvLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIGluZm8uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMSAvIDNcIjtcblxuICAgIGNvbnN0IHByaWNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByaWNlVGl0bGUuaW5uZXJUZXh0ID0gXCJQcmljZTpcIjtcbiAgICBjb25zdCBhbGxlcmdlbnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYWxsZXJnZW5zVGl0bGUuaW5uZXJUZXh0ID0gXCJBbGxlcmdlbnM6XCI7XG4gICAgY29uc3QgeyBwcmljZSwgYWxsZXJnZW5zIH0gPSBnZXRJbmZvKGNhcmQpO1xuXG4gICAgaW5mby5hcHBlbmRDaGlsZChwcmljZVRpdGxlKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGFsbGVyZ2Vuc1RpdGxlKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGFsbGVyZ2Vucyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHNlbGVjdEltYWdlKGNhcmQpKTtcbiAgICAgICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gc2hyaW5rQ2FyZChjYXJkKSB7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2UtZmlsdGVyJyk7XG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1wYWdlJyk7XG5cbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FwcGVhcicpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBhZ2VDb250ZW50LnJlbW92ZUNoaWxkKG1lbnVQYWdlKTtcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoTWVudVBhZ2UoKSk7XG4gICAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2FyZEV2ZW50cyhldikge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KCcubWVudS1jYXJkJyk7XG5cbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgICBzaHJpbmtDYXJkKHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGNhcmRzID0gQXJyYXkuZnJvbShwYWdlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXJkJykpO1xuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgaWYgKGNhcmQuaWQgIT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZGlzYXBwZWFyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGV4cGFuZENhcmQodGFyZ2V0KTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlTG9hZCgpIHtcbiAgICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VGaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lLmlkID0gXCJwYWdlLWNvbnRlbnRcIjtcblxuICAgIGNvbnN0IHdlbGNvbWVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHdlbGNvbWVJbWFnZS5zcmMgPSBcIi4vYXNzZXRzL3dlbGNvbWUtaW1hZ2UuanBnXCI7XG4gICAgd2VsY29tZUltYWdlLmlkID0gXCJ3ZWxjb21lLWltYWdlXCI7XG4gICAgd2VsY29tZS5hcHBlbmRDaGlsZCh3ZWxjb21lSW1hZ2UpO1xuXG4gICAgaW1hZ2VGaWx0ZXIuaWQgPSBcImltYWdlLWZpbHRlclwiO1xuICAgIHdlbGNvbWUuYXBwZW5kQ2hpbGQoaW1hZ2VGaWx0ZXIpO1xuICAgIGltYWdlRmlsdGVyLmFwcGVuZENoaWxkKHdlbGNvbWVQYWdlQ29udGVudCgpKTtcbiAgICByZXR1cm4gd2VsY29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlbGNvbWVQYWdlQ29udGVudCgpIHtcbiAgICBjb25zdCB3ZWxjb21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgd2VsY29tZUNvbnRlbnQuaWQgPSBcIndlbGNvbWUtcGFnZVwiO1xuXG4gICAgd2VsY29tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgIHdlbGNvbWVDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBpZD1cIndlbGNvbWUtdGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBpZD1cIndlbGNvbWUtdGl0bGVcIj5FbCBGb29kaWVzPC9oMT5cbiAgICAgICAgICAgIDxwIGlkPVwid2VsY29tZS10ZXh0XCI+U3BhbmlzaCBmb29kLCBmb3IgZm9vZGllcy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgcmV0dXJuIHdlbGNvbWVDb250ZW50O1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=