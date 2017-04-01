/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em,  img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb,  i, dl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tbackground: transparent;\n}\nbody {\n\tline-height: 1;\n\tfont-family: \"Gotham Rounded Book\",\"HelveticaLight\", Helvetica, sans-serif;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\n/* remember to define focus styles! */\n:focus {\n\toutline: 0;\n}\n\n/* remember to highlight inserts somehow! */\nins {\n\ttext-decoration: none;\n}\ndel {\n\ttext-decoration: line-through;\n}\n\n/* tables still need 'cellspacing=\"0\"' in the markup */\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Resetting HTML5! */\nsection, article, aside, header, footer, nav, dialog, figure { display:block; }", "", {"version":3,"sources":["/./common/css/_reset.css"],"names":[],"mappings":"AAAA;;;;;;;;CAQC,UAAU;CACV,WAAW;CACX,UAAU;CACV,WAAW;CACX,gBAAgB;CAChB,yBAAyB;CACzB,wBAAwB;CACxB;AACD;CACC,eAAe;CACf,2EAA2E;CAC3E;AACD;CACC,iBAAiB;CACjB;AACD;CACC,aAAa;CACb;AACD;;CAEC,YAAY;CACZ,cAAc;CACd;;AAED,sCAAsC;AACtC;CACC,WAAW;CACX;;AAED,4CAA4C;AAC5C;CACC,sBAAsB;CACtB;AACD;CACC,8BAA8B;CAC9B;;AAED,uDAAuD;AACvD;CACC,0BAA0B;CAC1B,kBAAkB;CAClB;;AAED,sBAAsB;AACtB,+DAA+D,cAAc,EAAE","file":"_reset.css","sourcesContent":["html, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em,  img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb,  i, dl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tbackground: transparent;\n}\nbody {\n\tline-height: 1;\n\tfont-family: \"Gotham Rounded Book\",\"HelveticaLight\", Helvetica, sans-serif;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\n/* remember to define focus styles! */\n:focus {\n\toutline: 0;\n}\n\n/* remember to highlight inserts somehow! */\nins {\n\ttext-decoration: none;\n}\ndel {\n\ttext-decoration: line-through;\n}\n\n/* tables still need 'cellspacing=\"0\"' in the markup */\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Resetting HTML5! */\nsection, article, aside, header, footer, nav, dialog, figure { display:block; }"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
	
	var hasDocument = typeof document !== 'undefined'
	
	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}
	
	var listToStyles = __webpack_require__(8)
	
	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}
	
	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/
	
	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}
	
	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}
	
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
	
	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction
	
	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)
	
	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}
	
	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}
	
	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}
	
	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}
	
	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null
	
	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }
	
	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }
	
	  if (!hasSSR) {
	    update(obj)
	  }
	
	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}
	
	var replaceText = (function () {
	  var textStore = []
	
	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()
	
	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}
	
	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap
	
	  if (media) {
	    styleElement.setAttribute('media', media)
	  }
	
	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	addEventListener('DOMContentLoaded', function () {
		var opt = __webpack_require__(14);
	
		window.EVENT_HUB = new Vue();
		var app = new Vue(opt).$mount('#app');
		window.app = app;
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(15)
	
	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(17),
	  /* template */
	  __webpack_require__(55),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/melonzhang/Desktop/project/first-wide/src/index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8a593414", Component.options)
	  } else {
	    hotAPI.reload("data-v-8a593414", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(7)("6bc86298", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8a593414!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
	     var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8a593414!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	exports.i(__webpack_require__(6), "");
	
	// module
	exports.push([module.id, "\nhtml {\n\tbackground-color: #fff;\n}\nbody {\n\tposition: relative;\n}\nhtml,\nbody,\n.container,\n.header {\n\tmin-width: 980px;\n\tmax-width: 100%;\n\twidth: 100%;\n}\n\n\n", "", {"version":3,"sources":["/./src/index.vue?0c781b46"],"names":[],"mappings":";AAEA;CACA,uBAAA;CACA;AAEA;CACA,mBAAA;CACA;AAEA;;;;CAIA,iBAAA;CACA,gBAAA;CACA,YAAA;CACA","file":"index.vue","sourcesContent":["<style>\n\t@import \"../common/css/_reset.css\";\n\thtml {\n\t\tbackground-color: #fff;\n\t}\n\t\n\tbody {\n\t\tposition: relative;\n\t}\n\t\n\thtml,\n\tbody,\n\t.container,\n\t.header {\n\t\tmin-width: 980px;\n\t\tmax-width: 100%;\n\t\twidth: 100%;\n\t}\n\t\n\t\n</style>\n<template>\n\t<div class=\"container\" id=\"container\">\n\t\t<t-header></t-header>\n\t\t<t-main></t-main>\n\t\t\n\t</div>\n</template>\n\n<script>\n\timport header from '../components/header.vue'\r\n\timport main from '../components/main.vue'\n\tmodule.exports = {\n\t\tcomponents: {\n\t\t\t't-header': header,\r\n\t\t\t't-main': main\n\t\t},\n\t\tdata: {\n\n\t\t},\n\t\twatch: {\n\n\t\t},\n\t\tcomputed: {\n\n\t\t},\n\t\tmethods: {\n\n\t\t},\n\t\tcreated() {\n\t\t\t\n\t\t},\n\t\tmounted() {\n\t\t\t\n\t\t}\n\n\t}\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _header = __webpack_require__(18);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _main = __webpack_require__(24);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		components: {
			't-header': _header2.default,
			't-main': _main2.default
		},
		data: {},
		watch: {},
		computed: {},
		methods: {},
		created: function created() {},
		mounted: function mounted() {}
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(19)
	
	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(21),
	  /* template */
	  __webpack_require__(22),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/melonzhang/Desktop/project/first-wide/components/header.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a033db96", Component.options)
	  } else {
	    hotAPI.reload("data-v-a033db96", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(7)("1e694ee8", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a033db96!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue", function() {
	     var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a033db96!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.header {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 100px;\n\twidth: 100%;\n\tbackground: white;\n\tborder-bottom: solid 1px rgba( 0, 0, 0, .1);\n\tbox-shadow: 0 0 6px rgba( 0, 0, 0, .05);\n\tz-index: 999;\n}\n.header_logo__pic {\n\twidth: 124px;\n\tposition: absolute;\n\tleft: 20px;\n}\n.header_nav {\n\tposition: absolute;\n\ttop: 30px;\n\tright: 20px;\n}\n.header_li {\n\tdisplay: inline-block;\n}\n.header_ul {\n\tmargin: 16px 0;\n\tpadding-left: 40px;\n}\n.header_li a {\n\tfont-family: \"Gotham Rounded Book\", \"HelveticaLight\", Helvetica, sans-serif;\n\tfont-size: 18px;\n\ttext-transform: lowercase;\n\tcolor: #777;\n\ttext-decoration: none;\n\tmargin: 0 10px 0 10px;\n\tfont-weight: 100;\n}\n.header_li .header--active {\n\tcolor: #7bbab1;\n}\n", "", {"version":3,"sources":["/./components/header.vue?82993060"],"names":[],"mappings":";AACA;CACA,gBAAA;CACA,SAAA;CACA,UAAA;CACA,cAAA;CACA,YAAA;CACA,kBAAA;CACA,4CAAA;CACA,wCAAA;CACA,aAAA;CACA;AAEA;CACA,aAAA;CACA,mBAAA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,UAAA;CACA,YAAA;CACA;AAEA;CACA,sBAAA;CACA;AAEA;CACA,eAAA;CACA,mBAAA;CACA;AAEA;CACA,4EAAA;CACA,gBAAA;CACA,0BAAA;CACA,YAAA;CACA,sBAAA;CACA,sBAAA;CACA,iBAAA;CACA;AAEA;CACA,eAAA;CACA","file":"header.vue","sourcesContent":["<style>\n\t.header {\n\t\tposition: fixed;\n\t\ttop: 0px;\n\t\tleft: 0px;\n\t\theight: 100px;\n\t\twidth: 100%;\n\t\tbackground: white;\n\t\tborder-bottom: solid 1px rgba( 0, 0, 0, .1);\n\t\tbox-shadow: 0 0 6px rgba( 0, 0, 0, .05);\n\t\tz-index: 999;\n\t}\n\t\n\t.header_logo__pic {\n\t\twidth: 124px;\n\t\tposition: absolute;\n\t\tleft: 20px;\n\t}\n\t\n\t.header_nav {\n\t\tposition: absolute;\n\t\ttop: 30px;\n\t\tright: 20px;\n\t}\n\t\n\t.header_li {\n\t\tdisplay: inline-block;\n\t}\n\t\n\t.header_ul {\n\t\tmargin: 16px 0;\n\t\tpadding-left: 40px;\n\t}\n\t\n\t.header_li a {\n\t\tfont-family: \"Gotham Rounded Book\", \"HelveticaLight\", Helvetica, sans-serif;\n\t\tfont-size: 18px;\n\t\ttext-transform: lowercase;\n\t\tcolor: #777;\n\t\ttext-decoration: none;\n\t\tmargin: 0 10px 0 10px;\n\t\tfont-weight: 100;\n\t}\n\t\n\t.header_li .header--active {\n\t\tcolor: #7bbab1;\n\t}\n</style>\n<template>\n\t<div class=\"header\">\n\t\t<a class=\"header_logo\" href=\"javasript:\">\n\t\t\t<img src=\"../images/logo.jpg\" alt=\"\" class=\"header_logo__pic\" />\n\t\t</a>\n\n\t\t<div class=\"header_nav\">\n\t\t\t<ul class=\"header_ul\">\n\t\t\t\t<li class=\"header_li\">\n\t\t\t\t\t<a :class=\"{'header--active':this.item == 'about'}\" href=\"javascript:\" @click=\"headerCall('about')\">about</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"header_li\">\n\t\t\t\t\t<a :class=\"{'header--active':this.item == 'wecase'}\" href=\"javascript:\" @click=\"headerCall('wecase')\">case</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"header_li\">\n\t\t\t\t\t<a :class=\"{'header--active':this.item == 'clients'}\" href=\"javascript:\" @click=\"headerCall('clients')\">clients</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"header_li\">\n\t\t\t\t\t<a :class=\"{'header--active':this.item == 'contact'}\" href=\"javascript:\" @click=\"headerCall('contact')\">contact</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"header_li\">\n\t\t\t\t\t<a href=\"http://www.imi-spring.com/travel.html\">travel</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\n\tmodule.exports = {\n\t\tcomponents: {},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\titem: 'about'\n\t\t\t}\n\t\t},\n\t\twatch: {\n\n\t\t},\n\t\tcomputed: {\n\n\t\t},\n\t\tmethods: {\n\t\t\theaderCall(data) {\n\t\t\t\tthis.item = data\n\t\t\t\tEVENT_HUB.$emit('headerClick', data)\n\t\t\t}\n\t\t},\n\t\tcreated() {\n\n\t\t},\n\t\tmounted() {}\n\n\t}\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		components: {},
		data: function data() {
			return {
				item: 'about'
			};
		},
	
		watch: {},
		computed: {},
		methods: {
			headerCall: function headerCall(data) {
				this.item = data;
				EVENT_HUB.$emit('headerClick', data);
			}
		},
		created: function created() {},
		mounted: function mounted() {}
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "header_nav"
	  }, [_c('ul', {
	    staticClass: "header_ul"
	  }, [_c('li', {
	    staticClass: "header_li"
	  }, [_c('a', {
	    class: {
	      'header--active': this.item == 'about'
	    },
	    attrs: {
	      "href": "javascript:"
	    },
	    on: {
	      "click": function($event) {
	        _vm.headerCall('about')
	      }
	    }
	  }, [_vm._v("about")])]), _vm._v(" "), _c('li', {
	    staticClass: "header_li"
	  }, [_c('a', {
	    class: {
	      'header--active': this.item == 'wecase'
	    },
	    attrs: {
	      "href": "javascript:"
	    },
	    on: {
	      "click": function($event) {
	        _vm.headerCall('wecase')
	      }
	    }
	  }, [_vm._v("case")])]), _vm._v(" "), _c('li', {
	    staticClass: "header_li"
	  }, [_c('a', {
	    class: {
	      'header--active': this.item == 'clients'
	    },
	    attrs: {
	      "href": "javascript:"
	    },
	    on: {
	      "click": function($event) {
	        _vm.headerCall('clients')
	      }
	    }
	  }, [_vm._v("clients")])]), _vm._v(" "), _c('li', {
	    staticClass: "header_li"
	  }, [_c('a', {
	    class: {
	      'header--active': this.item == 'contact'
	    },
	    attrs: {
	      "href": "javascript:"
	    },
	    on: {
	      "click": function($event) {
	        _vm.headerCall('contact')
	      }
	    }
	  }, [_vm._v("contact")])]), _vm._v(" "), _vm._m(1)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "header_logo",
	    attrs: {
	      "href": "javasript:"
	    }
	  }, [_c('img', {
	    staticClass: "header_logo__pic",
	    attrs: {
	      "src": __webpack_require__(23),
	      "alt": ""
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "header_li"
	  }, [_c('a', {
	    attrs: {
	      "href": "http://www.imi-spring.com/travel.html"
	    }
	  }, [_vm._v("travel")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a033db96", module.exports)
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a367be79ec19e21e1b382ffe5cda166c.jpg";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(25)
	
	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(27),
	  /* template */
	  __webpack_require__(54),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/melonzhang/Desktop/project/first-wide/components/main.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a546361", Component.options)
	  } else {
	    hotAPI.reload("data-v-5a546361", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(7)("8f521aba", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5a546361!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue", function() {
	     var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5a546361!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.main{\n\tpadding-top: 100px;\n}\n", "", {"version":3,"sources":["/./components/main.vue?65b9248c"],"names":[],"mappings":";AACA;CACA,mBAAA;CACA","file":"main.vue","sourcesContent":["<style>\n\t.main{\n\t\tpadding-top: 100px;\n\t}\n</style>\n<template>\n\t<div class=\"main\">\n\t\t<t-about v-show=\"item == 'about'\"></t-about>\r\n\t\t<!--<t-about></t-about>-->\n\t\t<t-case v-show=\"item == 'wecase'\"></t-case>\r\n\t\t<t-clients v-show=\"item == 'clients'\"></t-clients>\r\n\t\t<t-contact v-show=\"item == 'contact'\"></t-contact>\n\t</div>\n</template>\n\n\n<script>\n\timport about from './about.vue'\r\n\timport wecase from './case.vue'\r\n\timport clients from './clients.vue'\r\n\timport contact from './contact.vue'\n\t\n\tmodule.exports = {\n\t\tcomponents: {\n\t\t\t't-about': about,\r\n\t\t\t't-case': wecase,\n\t\t\t't-clients': clients,\n\t\t\t't-contact': contact\n\t\t},\n\t\tdata(){\n\t\t\treturn {\n\t\t\t\titem: \"about\"\n\t\t\t}\n\t\t},\n\t\twatch: {\n\n\t\t},\n\t\tcomputed: {\n\n\t\t},\n\t\tmethods: {\n\t\t\t\n\t\t},\n\t\tcreated() {\n\t\t\tEVENT_HUB.$on('headerClick',(data)=>{\n\t\t\t\tthis.item = data\n\t\t\t})\n\t\t},\n\t\tmounted() {\n\n\t\t}\n\n\t}\n</script>\n\t\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _about = __webpack_require__(28);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _case = __webpack_require__(34);
	
	var _case2 = _interopRequireDefault(_case);
	
	var _clients = __webpack_require__(41);
	
	var _clients2 = _interopRequireDefault(_clients);
	
	var _contact = __webpack_require__(47);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		components: {
			't-about': _about2.default,
			't-case': _case2.default,
			't-clients': _clients2.default,
			't-contact': _contact2.default
		},
		data: function data() {
			return {
				item: "about"
			};
		},
	
		watch: {},
		computed: {},
		methods: {},
		created: function created() {
			var _this = this;
	
			EVENT_HUB.$on('headerClick', function (data) {
				_this.item = data;
			});
		},
		mounted: function mounted() {}
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(29)
	
	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(31),
	  /* template */
	  __webpack_require__(32),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/melonzhang/Desktop/project/first-wide/components/about.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9c15ebd6", Component.options)
	  } else {
	    hotAPI.reload("data-v-9c15ebd6", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(7)("b6ae67b6", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9c15ebd6!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about.vue", function() {
	     var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9c15ebd6!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mod_wrap {\n\tpadding: 100px 0;\n\twidth: 980px;\n\tmargin: 0 auto;\n}\n.about_logo {\n\tfloat: left;\n}\n.about_logo img {\n\theight: 34px;\n}\n.mod_tit {\n\tfont-size: 36px;\n\tcolor: rgb(133, 126, 124);\n\tmargin-bottom: 20px;\n}\n.mod_des {\n\tcolor: rgb(133, 126, 124);\n\tfont-size: 20px;\n\tline-height: 1.5;\n\tmargin-bottom: 100px;\n}\n.about_show {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmargin-bottom: 80px;\n}\n.about_show__left {\n\twidth: 420px;\n}\n.about_icon img {\n\theight: 40px;\n}\n.about_show__tit {\n\tfont-size: 32px;\n\tline-height: 1.3;\n\tmargin-bottom: 20px;\n}\n.about_show__tit--color {\n\tcolor: #dd846a;\n}\n.about_show__tit--colortwo {\n\tcolor: #d15f96;\n}\n.about_show__des {\n\tfont-size: 16px;\n\tmargin-bottom: 20px;\n\tline-height: 1.2;\n}\n.about_show__right {\n\twidth: 540px;\n\tmargin-left: 20px;\n}\n.about_show__row {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.about_pic {\n\tposition: relative;\n\twidth: 270px;\n\theight: 320px;\n\tbackground-size: cover;\n\tbackground-position: center;\n}\n.about_pic__wrap {\n\tposition: absolute;\n\twidth: 220px;\n\theight: 80px;\n\tleft: 50%;\n\tmargin-left: -110px;\n\tbottom: 20px;\n}\n.about_pic__mask {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\topacity: .8;\n\tbackground-color: #dd846a;\n}\n.about_pic__mask--col{\n\tbackground-color: #d15f96;\n}\n.about_pic__text {\n\tpadding-top: 5px;\n\tposition: relative;\n\tz-index: 10;\n\ttext-align: center;\n}\n.about_pic__text--top {\n}\n.about_pic__text--up{\n\tfont-size: 14px;\n}\n.about_show--two .about_pic__text{\n\tcolor: #fff;\n}\n", "", {"version":3,"sources":["/./components/about.vue?8d14a696"],"names":[],"mappings":";AACA;CACA,iBAAA;CACA,aAAA;CACA,eAAA;CACA;AAEA;CACA,YAAA;CACA;AAEA;CACA,aAAA;CACA;AAEA;CACA,gBAAA;CACA,0BAAA;CACA,oBAAA;CACA;AAEA;CACA,0BAAA;CACA,gBAAA;CACA,iBAAA;CACA,qBAAA;CACA;AAEA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,oBAAA;CACA;AAEA;CACA,aAAA;CACA;AAEA;CACA,aAAA;CACA;AAEA;CACA,gBAAA;CACA,iBAAA;CACA,oBAAA;CACA;AAEA;CACA,eAAA;CACA;AACA;CACA,eAAA;CACA;AACA;CACA,gBAAA;CACA,oBAAA;CACA,iBAAA;CACA;AAEA;CACA,aAAA;CACA,kBAAA;CACA;AAEA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,mBAAA;CACA,aAAA;CACA,cAAA;CACA,uBAAA;CACA,4BAAA;CACA;AAEA;CACA,mBAAA;CACA,aAAA;CACA,aAAA;CACA,UAAA;CACA,oBAAA;CACA,aAAA;CACA;AAEA;CACA,mBAAA;CACA,QAAA;CACA,SAAA;CACA,OAAA;CACA,UAAA;CACA,YAAA;CACA,0BAAA;CACA;AACA;CACA,0BAAA;CACA;AAEA;CACA,iBAAA;CACA,mBAAA;CACA,YAAA;CACA,mBAAA;CACA;AAEA;CAEA;AACA;CACA,gBAAA;CACA;AACA;CACA,YAAA;CACA","file":"about.vue","sourcesContent":["<style>\n\t.mod_wrap {\n\t\tpadding: 100px 0;\n\t\twidth: 980px;\n\t\tmargin: 0 auto;\n\t}\n\t\n\t.about_logo {\n\t\tfloat: left;\n\t}\n\t\n\t.about_logo img {\n\t\theight: 34px;\n\t}\n\t\n\t.mod_tit {\n\t\tfont-size: 36px;\n\t\tcolor: rgb(133, 126, 124);\n\t\tmargin-bottom: 20px;\n\t}\n\t\n\t.mod_des {\n\t\tcolor: rgb(133, 126, 124);\n\t\tfont-size: 20px;\n\t\tline-height: 1.5;\n\t\tmargin-bottom: 100px;\n\t}\n\t\n\t.about_show {\n\t\tdisplay: flex;\n\t\tmargin-bottom: 80px;\n\t}\n\t\n\t.about_show__left {\n\t\twidth: 420px;\n\t}\n\t\n\t.about_icon img {\n\t\theight: 40px;\n\t}\n\t\n\t.about_show__tit {\n\t\tfont-size: 32px;\n\t\tline-height: 1.3;\n\t\tmargin-bottom: 20px;\n\t}\n\t\n\t.about_show__tit--color {\n\t\tcolor: #dd846a;\n\t}\n\t.about_show__tit--colortwo {\n\t\tcolor: #d15f96;\n\t}\n\t.about_show__des {\n\t\tfont-size: 16px;\n\t\tmargin-bottom: 20px;\n\t\tline-height: 1.2;\n\t}\n\t\n\t.about_show__right {\n\t\twidth: 540px;\n\t\tmargin-left: 20px;\n\t}\n\t\n\t.about_show__row {\n\t\tdisplay: flex;\n\t}\n\t\n\t.about_pic {\n\t\tposition: relative;\n\t\twidth: 270px;\n\t\theight: 320px;\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t}\n\t\n\t.about_pic__wrap {\n\t\tposition: absolute;\n\t\twidth: 220px;\n\t\theight: 80px;\n\t\tleft: 50%;\n\t\tmargin-left: -110px;\n\t\tbottom: 20px;\n\t}\n\t\n\t.about_pic__mask {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\topacity: .8;\n\t\tbackground-color: #dd846a;\n\t}\n\t.about_pic__mask--col{\n\t\tbackground-color: #d15f96;\n\t}\n\t\n\t.about_pic__text {\n\t\tpadding-top: 5px;\n\t\tposition: relative;\n\t\tz-index: 10;\n\t\ttext-align: center;\n\t}\n\t\n\t.about_pic__text--top {\n\t\t\n\t}\n\t.about_pic__text--up{\n\t\tfont-size: 14px;\n\t}\n\t.about_show--two .about_pic__text{\n\t\tcolor: #fff;\n\t}\n</style>\n<template>\n\t<div class=\"mod_wrap\">\n\t\t<div class=\"about_logo\">\n\t\t\t<img src=\"../images/us.png\" alt=\"\" />\n\t\t</div>\n\t\t<div class=\"mod_tit\">/ About Us</div>\n\t\t<div class=\"mod_des\">\n\t\t\tA multi-solution agency, joined together with two brands: iMi and Spring, with the primary goal on creating the bespoke solutions that for your targeting audiences. The sky is never the limit, we understand the requirements from your targeted audiences, create the solution that cater to your needs. Through sales outreach programs, performance improvements, incentive program, travel and live events. No matter whether it is your consumer or key accounts you trying to impress, or your dealers distributor or your elite sales team you trying to engage up to another level, we will keep it humming.\n\t\t</div>\n\t\t\n\t\t<!--show one-->\n\t\t<div class=\"about_show\">\n\t\t\t<div class=\"about_show__left\">\n\t\t\t\t<!--<div class=\"about_icon\">\r\n\t\t\t\t\t<img src=\"../images/logo.jpg\" />\r\n\t\t\t\t</div>-->\n\t\t\t\t<div class=\"about_show__tit\">The Bespoke<br /><span class=\"about_show__tit--color\">ENGAGEMENT</span><br />Solution </div>\n\t\t\t\t<p class=\"about_show__des\">You have so many audiences that you want to inspire, to engage, to get them in the loop. Your employees, your customers, your channel distributors, and further the massive market audiences out there. But how to turn around the theory and the your blueprint into something that is practicable and visible, is our expertise.\n\t\t\t\t</p>\n\t\t\t\t<p class=\"about_show__des\">Our solutions can be everywhere without your noticing them, but that is how wonder of engagement is working. We look into people’s daily consuming / behaving habits, how people browse the internet, how people like / dislike about social network, how people fill up their grocery bags when shopping…\n\t\t\t\t</p>\n\t\t\t\t<p class=\"about_show__des\">The great solutions always come from a solid foundation of people’s daily life.</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"about_show__right\">\n\t\t\t\t<div class=\"about_show__row\">\n\t\t\t\t\t<div class=\"about_pic\" style=\"background-image: url(../images/pic1.png);\">\n\t\t\t\t\t\t<div class=\"about_pic__wrap\">\n\t\t\t\t\t\t\t<div class=\"about_pic__mask\"></div>\n\t\t\t\t\t\t\t<div class=\"about_pic__text\">\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--top\">Training Facilitation</div>\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--up\">Delivering your messages, your brand essentials, your product advantages in the right format, to the right people in the right way</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"about_pic\" style=\"background-image: url(../images/pic2.png);\">\n\t\t\t\t\t\t<div class=\"about_pic__wrap\">\n\t\t\t\t\t\t\t<div class=\"about_pic__mask\"></div>\n\t\t\t\t\t\t\t<div class=\"about_pic__text\">\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--top\">Customer Engagement</div>\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--up\">Customer loyalty comes with insightful   solutions with clear measurements and  yet all ties up to a digital way today</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"about_show__row\">\n\t\t\t\t\t<div class=\"about_pic\" style=\"background-image: url(../images/pic3.png);\">\n\t\t\t\t\t\t<div class=\"about_pic__wrap\">\n\t\t\t\t\t\t\t<div class=\"about_pic__mask\"></div>\n\t\t\t\t\t\t\t<div class=\"about_pic__text\">\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--top\">Service Enhancement</div>\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--up\">Everyone says customer excellence is critical but what to do to make it more        insightful and self-motived in China?</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"about_pic\" style=\"background-image: url(../images/pic4.png);\">\n\t\t\t\t\t\t<div class=\"about_pic__wrap\">\n\t\t\t\t\t\t\t<div class=\"about_pic__mask\"></div>\n\t\t\t\t\t\t\t<div class=\"about_pic__text\">\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--top\">Team Engagement</div>\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--up\">Enable your employees into a true united team that always targeting for better results.</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t\n\t\t<!--show two-->\n\t\t<div class=\"about_show about_show--two\">\n\t\t\t<div class=\"about_show__left\">\n\t\t\t\t<!--<div class=\"about_icon\">\r\n\t\t\t\t\t<img src=\"../images/imi.png\" />\r\n\t\t\t\t</div>-->\n\t\t\t\t<div class=\"about_show__tit\">The Bespoke<br /><span class=\"about_show__tit--colortwo\">EVENT &amp; TRAVEL</span><br />Experience</div>\n\t\t\t\t<p class=\"about_show__des\">We simply don’t like the term of ‘Event’, as we believe deep-in, that putting your audience into a place with food &amp; beverage is NOT what is defined us. It is the messaging we will create together with you, and the methods, the adaptions we make that key messaging cross through the entire way.\n\t\t\t\t</p>\n\t\t\t\t<p class=\"about_show__des\">That is why we re-define ourselves as COMMUNICATION, as by the end of the day, event serves the best way to deliver your message to your target audiences.\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"about_show__right\">\n\t\t\t\t<div class=\"about_show__row\">\n\t\t\t\t\t<div class=\"about_pic\" style=\"background-image: url(../images/pic5.png);\">\n\t\t\t\t\t\t<div class=\"about_pic__wrap\">\n\t\t\t\t\t\t\t<div class=\"about_pic__mask about_pic__mask--col\"></div>\n\t\t\t\t\t\t\t<div class=\"about_pic__text\">\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--top\">Training Facilitation</div>\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--up\">Delivering your messages, your brand essentials, your product advantages in the right format, to the right people in the right way</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"about_pic\" style=\"background-image: url(../images/pic6.png);\">\n\t\t\t\t\t\t<div class=\"about_pic__wrap\">\n\t\t\t\t\t\t\t<div class=\"about_pic__mask about_pic__mask--col\"></div>\n\t\t\t\t\t\t\t<div class=\"about_pic__text\">\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--top\">Customer Engagement</div>\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--up\">Customer loyalty comes with insightful   solutions with clear measurements and  yet all ties up to a digital way today</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"about_show__row\">\n\t\t\t\t\t<div class=\"about_pic\" style=\"background-image: url(../images/pic7.png);\">\n\t\t\t\t\t\t<div class=\"about_pic__wrap\">\n\t\t\t\t\t\t\t<div class=\"about_pic__mask about_pic__mask--col\"></div>\n\t\t\t\t\t\t\t<div class=\"about_pic__text\">\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--top\">Service Enhancement</div>\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--up\">Everyone says customer excellence is critical but what to do to make it more        insightful and self-motived in China?</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"about_pic\" style=\"background-image: url(../images/pic8.png);\">\n\t\t\t\t\t\t<div class=\"about_pic__wrap\">\n\t\t\t\t\t\t\t<div class=\"about_pic__mask about_pic__mask--col\"></div>\n\t\t\t\t\t\t\t<div class=\"about_pic__text\">\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--top\">Team Engagement</div>\n\t\t\t\t\t\t\t\t<div class=\"about_pic__text--up\">Enable your employees into a true united team that always targeting for better results.</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</template>\n\n<script>\n\tmodule.exports = {\n\t\tcomponents: {},\n\t\tdata() {\n\t\t\treturn {\n\n\t\t\t}\n\t\t},\n\t\twatch: {\n\n\t\t},\n\t\tcomputed: {\n\n\t\t},\n\t\tmethods: {\n\n\t\t},\n\t\tcreated() {\n\n\t\t},\n\t\tmounted() {\n\n\t\t}\n\n\t}\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		components: {},
		data: function data() {
			return {};
		},
	
		watch: {},
		computed: {},
		methods: {},
		created: function created() {},
		mounted: function mounted() {}
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mod_wrap"
	  }, [_c('div', {
	    staticClass: "about_logo"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(33),
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "mod_tit"
	  }, [_vm._v("/ About Us")]), _vm._v(" "), _c('div', {
	    staticClass: "mod_des"
	  }, [_vm._v("\n\t\tA multi-solution agency, joined together with two brands: iMi and Spring, with the primary goal on creating the bespoke solutions that for your targeting audiences. The sky is never the limit, we understand the requirements from your targeted audiences, create the solution that cater to your needs. Through sales outreach programs, performance improvements, incentive program, travel and live events. No matter whether it is your consumer or key accounts you trying to impress, or your dealers distributor or your elite sales team you trying to engage up to another level, we will keep it humming.\n\t")]), _vm._v(" "), _c('div', {
	    staticClass: "about_show"
	  }, [_c('div', {
	    staticClass: "about_show__left"
	  }, [_c('div', {
	    staticClass: "about_show__tit"
	  }, [_vm._v("The Bespoke"), _c('br'), _c('span', {
	    staticClass: "about_show__tit--color"
	  }, [_vm._v("ENGAGEMENT")]), _c('br'), _vm._v("Solution ")]), _vm._v(" "), _c('p', {
	    staticClass: "about_show__des"
	  }, [_vm._v("You have so many audiences that you want to inspire, to engage, to get them in the loop. Your employees, your customers, your channel distributors, and further the massive market audiences out there. But how to turn around the theory and the your blueprint into something that is practicable and visible, is our expertise.\n\t\t\t")]), _vm._v(" "), _c('p', {
	    staticClass: "about_show__des"
	  }, [_vm._v("Our solutions can be everywhere without your noticing them, but that is how wonder of engagement is working. We look into people’s daily consuming / behaving habits, how people browse the internet, how people like / dislike about social network, how people fill up their grocery bags when shopping…\n\t\t\t")]), _vm._v(" "), _c('p', {
	    staticClass: "about_show__des"
	  }, [_vm._v("The great solutions always come from a solid foundation of people’s daily life.")])]), _vm._v(" "), _c('div', {
	    staticClass: "about_show__right"
	  }, [_c('div', {
	    staticClass: "about_show__row"
	  }, [_c('div', {
	    staticClass: "about_pic",
	    staticStyle: {
	      "background-image": "url(../images/pic1.png)"
	    }
	  }, [_c('div', {
	    staticClass: "about_pic__wrap"
	  }, [_c('div', {
	    staticClass: "about_pic__mask"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text"
	  }, [_c('div', {
	    staticClass: "about_pic__text--top"
	  }, [_vm._v("Training Facilitation")]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text--up"
	  }, [_vm._v("Delivering your messages, your brand essentials, your product advantages in the right format, to the right people in the right way")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic",
	    staticStyle: {
	      "background-image": "url(../images/pic2.png)"
	    }
	  }, [_c('div', {
	    staticClass: "about_pic__wrap"
	  }, [_c('div', {
	    staticClass: "about_pic__mask"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text"
	  }, [_c('div', {
	    staticClass: "about_pic__text--top"
	  }, [_vm._v("Customer Engagement")]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text--up"
	  }, [_vm._v("Customer loyalty comes with insightful   solutions with clear measurements and  yet all ties up to a digital way today")])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "about_show__row"
	  }, [_c('div', {
	    staticClass: "about_pic",
	    staticStyle: {
	      "background-image": "url(../images/pic3.png)"
	    }
	  }, [_c('div', {
	    staticClass: "about_pic__wrap"
	  }, [_c('div', {
	    staticClass: "about_pic__mask"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text"
	  }, [_c('div', {
	    staticClass: "about_pic__text--top"
	  }, [_vm._v("Service Enhancement")]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text--up"
	  }, [_vm._v("Everyone says customer excellence is critical but what to do to make it more        insightful and self-motived in China?")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic",
	    staticStyle: {
	      "background-image": "url(../images/pic4.png)"
	    }
	  }, [_c('div', {
	    staticClass: "about_pic__wrap"
	  }, [_c('div', {
	    staticClass: "about_pic__mask"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text"
	  }, [_c('div', {
	    staticClass: "about_pic__text--top"
	  }, [_vm._v("Team Engagement")]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text--up"
	  }, [_vm._v("Enable your employees into a true united team that always targeting for better results.")])])])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "about_show about_show--two"
	  }, [_c('div', {
	    staticClass: "about_show__left"
	  }, [_c('div', {
	    staticClass: "about_show__tit"
	  }, [_vm._v("The Bespoke"), _c('br'), _c('span', {
	    staticClass: "about_show__tit--colortwo"
	  }, [_vm._v("EVENT & TRAVEL")]), _c('br'), _vm._v("Experience")]), _vm._v(" "), _c('p', {
	    staticClass: "about_show__des"
	  }, [_vm._v("We simply don’t like the term of ‘Event’, as we believe deep-in, that putting your audience into a place with food & beverage is NOT what is defined us. It is the messaging we will create together with you, and the methods, the adaptions we make that key messaging cross through the entire way.\n\t\t\t")]), _vm._v(" "), _c('p', {
	    staticClass: "about_show__des"
	  }, [_vm._v("That is why we re-define ourselves as COMMUNICATION, as by the end of the day, event serves the best way to deliver your message to your target audiences.\n\t\t\t")])]), _vm._v(" "), _c('div', {
	    staticClass: "about_show__right"
	  }, [_c('div', {
	    staticClass: "about_show__row"
	  }, [_c('div', {
	    staticClass: "about_pic",
	    staticStyle: {
	      "background-image": "url(../images/pic5.png)"
	    }
	  }, [_c('div', {
	    staticClass: "about_pic__wrap"
	  }, [_c('div', {
	    staticClass: "about_pic__mask about_pic__mask--col"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text"
	  }, [_c('div', {
	    staticClass: "about_pic__text--top"
	  }, [_vm._v("Training Facilitation")]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text--up"
	  }, [_vm._v("Delivering your messages, your brand essentials, your product advantages in the right format, to the right people in the right way")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic",
	    staticStyle: {
	      "background-image": "url(../images/pic6.png)"
	    }
	  }, [_c('div', {
	    staticClass: "about_pic__wrap"
	  }, [_c('div', {
	    staticClass: "about_pic__mask about_pic__mask--col"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text"
	  }, [_c('div', {
	    staticClass: "about_pic__text--top"
	  }, [_vm._v("Customer Engagement")]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text--up"
	  }, [_vm._v("Customer loyalty comes with insightful   solutions with clear measurements and  yet all ties up to a digital way today")])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "about_show__row"
	  }, [_c('div', {
	    staticClass: "about_pic",
	    staticStyle: {
	      "background-image": "url(../images/pic7.png)"
	    }
	  }, [_c('div', {
	    staticClass: "about_pic__wrap"
	  }, [_c('div', {
	    staticClass: "about_pic__mask about_pic__mask--col"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text"
	  }, [_c('div', {
	    staticClass: "about_pic__text--top"
	  }, [_vm._v("Service Enhancement")]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text--up"
	  }, [_vm._v("Everyone says customer excellence is critical but what to do to make it more        insightful and self-motived in China?")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic",
	    staticStyle: {
	      "background-image": "url(../images/pic8.png)"
	    }
	  }, [_c('div', {
	    staticClass: "about_pic__wrap"
	  }, [_c('div', {
	    staticClass: "about_pic__mask about_pic__mask--col"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text"
	  }, [_c('div', {
	    staticClass: "about_pic__text--top"
	  }, [_vm._v("Team Engagement")]), _vm._v(" "), _c('div', {
	    staticClass: "about_pic__text--up"
	  }, [_vm._v("Enable your employees into a true united team that always targeting for better results.")])])])])])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9c15ebd6", module.exports)
	  }
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAC2CAMAAACWPFN7AAAA4VBMVEUAAADSXkn0eVzrbFD1eFrwclndZE70eVzyc1j0elz1elv0elz1fF32fV32eVr0elz0elz1e1z1elz1e130elz0elv4fV30elzyeVvzd1v2e1z1e1z1elz0e1z1e131e1z1e130elz1elz0elv2fF31elz1elz3fFz0elzzelv0el31e1zzelv1fF33fF31elz1e1zzelz2e132fF31fF33fV30elz0elz2e131e1z2e130elz0elz2e1z1elz0elz1e133e130elz0e1z2fF30elz0elz2e1z0elz0elz0elwdHMP/AAAASnRSTlMAA/wHDwwF+QrwGOYbOBX26mHhb9zQI9cgEj88x45qgIiwJ+1LxJUtwN94MPQ0KrRm8k9XRx6kuFOEWtOpfPigc/LLrEO9mV2dkT9GQFIAABcfSURBVHja7V3neqpYFBXpVZqggCioaOy9G3vL+z/QHMxVrJEYMrmZb9af+eHc4OKcs88ua29D/+N//I//8T+CAuQi9N8CxCgKw8Gh/xQgpZiLMb+QFIxylRyF3PzmGJtpNHu5dhz7XXsQonKNTmegt299bWK6tnjRkZYcEvpNgNr6ptudNllwdi5tAoQmF3mcXKQ2ZTuO/KJdCOsFR+TVqOUkbQo950QwFp0Oh2l53l0IjUro14DIOFb97e1NNCytQsGna4XFlezbHvhMTE2XKPFbzDvRtLIR8L1JcbjrN3NtzPsIKS6j76TCr2TeSggZBvkdrNDaXMX3XxynVafHEt5HXKOmvv1BOFIfVhPFX2LeUXMoAlIuZvxCalDocTGYwVR+OyIsGp1MmUJ/Ay1kjIeP37vEZ2sN7vCR3d/Sbx7COCkb014FC/3tgOLJt1PIY6F9MAeV3Yg/+zA8ExMmi8B+fEYYhrEfog9xduLtFOluR6Pi7x8WrXn97QyuvRg3NCL0ABjVLmvlivIzrLCKvn47R10oKu9LpQ/J8NsVDGccf3hQc7o5rvVaROgnAOe0S1KRZE/DXL5oS53dIDW0tqzN3Vt5GFEqrN4SzN22bw7Q0E8AZjPbt3Pg+UWf2G/MDf12A3idXvdb98wOw453+aFK02l+PtpxoZ8AIDV5O0d4mHWAWYeYYo1+u4mStW0S8K1lIphcxhnJ5Mwl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"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(35)
	
	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(38),
	  /* template */
	  __webpack_require__(39),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/melonzhang/Desktop/project/first-wide/components/case.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] case.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5c1a4558", Component.options)
	  } else {
	    hotAPI.reload("data-v-5c1a4558", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(7)("8d3e74e6", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5c1a4558!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./case.vue", function() {
	     var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5c1a4558!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./case.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.case_wrap {\n\theight: 80px;\n\tmargin-bottom: 20px;\n}\n.case_header {\n\theight: 80px;\n\twidth: 130px;\n\tbackground-color: rgb(209, 94, 149);\n\tfont-size: 30px;\n\tcolor: #fff;\n\tline-height: 1.2;\n\tpadding-left: 10px;\n\tmargin-right: 500px;\n\tfloat: left;\n}\n.case_header--right {\n\tfloat: right;\n}\n.case_header--right img {\n\theight: 70px;\n}\n.case_title {\n\tfont-size: 26px;\n\tmargin-bottom: 10px;\n}\n.case_title span {\n\tdisplay: inline-block;\n}\n.case_content {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmargin-bottom: 80px;\n}\n.case_content--left {\n\twidth: 380px;\n\tmargin-right: 20px;\n}\n.case_content--right {\n\twidth: 580px;\n}\n.case_con__tit {\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-bottom: 30px;\n}\n.case_con__des {\n\tfont-size: 16px;\n\tmargin-bottom: 30px;\n\t/*color: #aaa;*/\n\tmargin-bottom: 25px;\n}\n.case_ul__tit {\n\tmargin-bottom: 5px;\n}\n.case_ul {\n\tfont-size: 14px;\n\tmargin-bottom: 30px;\n}\n.case_ul li:before {\n\tcontent: '';\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tbackground-image: url(" + __webpack_require__(37) + ");\n\tbackground-size: contain;\n\theight: 12px;\n\twidth: 12px;\n\tmargin-right: 4px;\n}\n.case_ul li {\n\tline-height: 1.2;\n\tmargin-bottom: 10px;\n}\n.case_content__wrap {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n.case_content__pic {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\theight: 260px;\n\tmargin: 1px;\n\tbackground-size: cover;\n\tbackground-position: center;\n}\n", "", {"version":3,"sources":["/./components/case.vue?c8853b0a"],"names":[],"mappings":";AACA;CACA,aAAA;CACA,oBAAA;CACA;AAEA;CACA,aAAA;CACA,aAAA;CACA,oCAAA;CACA,gBAAA;CACA,YAAA;CACA,iBAAA;CACA,mBAAA;CACA,oBAAA;CACA,YAAA;CACA;AAEA;CACA,aAAA;CACA;AAEA;CACA,aAAA;CACA;AAEA;CACA,gBAAA;CACA,oBAAA;CACA;AAEA;CACA,sBAAA;CACA;AAEA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,oBAAA;CACA;AAEA;CACA,aAAA;CACA,mBAAA;CACA;AAEA;CACA,aAAA;CACA;AAEA;CACA,kBAAA;CACA,gBAAA;CACA,oBAAA;CACA;AAEA;CACA,gBAAA;CACA,oBAAA;CACA,gBAAA;CACA,oBAAA;CACA;AAEA;CACA,mBAAA;CACA;AAEA;CACA,gBAAA;CACA,oBAAA;CACA;AAEA;CACA,YAAA;CACA,sBAAA;CACA,uBAAA;CACA,gDAAA;CACA,yBAAA;CACA,aAAA;CACA,YAAA;CACA,kBAAA;CACA;AAEA;CACA,iBAAA;CACA,oBAAA;CACA;AAEA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,oBAAA;KAAA,YAAA;SAAA,QAAA;CACA,cAAA;CACA,YAAA;CACA,uBAAA;CACA,4BAAA;CACA","file":"case.vue","sourcesContent":["<style>\n\t.case_wrap {\n\t\theight: 80px;\n\t\tmargin-bottom: 20px;\n\t}\n\t\n\t.case_header {\n\t\theight: 80px;\n\t\twidth: 130px;\n\t\tbackground-color: rgb(209, 94, 149);\n\t\tfont-size: 30px;\n\t\tcolor: #fff;\n\t\tline-height: 1.2;\n\t\tpadding-left: 10px;\n\t\tmargin-right: 500px;\n\t\tfloat: left;\n\t}\n\t\n\t.case_header--right {\n\t\tfloat: right;\n\t}\n\t\n\t.case_header--right img {\n\t\theight: 70px;\n\t}\n\t\n\t.case_title {\n\t\tfont-size: 26px;\n\t\tmargin-bottom: 10px;\n\t}\n\t\n\t.case_title span {\n\t\tdisplay: inline-block;\n\t}\n\t\n\t.case_content {\n\t\tdisplay: flex;\n\t\tmargin-bottom: 80px;\n\t}\n\t\n\t.case_content--left {\n\t\twidth: 380px;\n\t\tmargin-right: 20px;\n\t}\n\t\n\t.case_content--right {\n\t\twidth: 580px;\n\t}\n\t\n\t.case_con__tit {\n\t\tfont-weight: bold;\n\t\tfont-size: 15px;\n\t\tmargin-bottom: 30px;\n\t}\n\t\n\t.case_con__des {\n\t\tfont-size: 16px;\n\t\tmargin-bottom: 30px;\n\t\t/*color: #aaa;*/\n\t\tmargin-bottom: 25px;\n\t}\n\t\n\t.case_ul__tit {\n\t\tmargin-bottom: 5px;\n\t}\n\t\n\t.case_ul {\n\t\tfont-size: 14px;\n\t\tmargin-bottom: 30px;\n\t}\n\t\n\t.case_ul li:before {\n\t\tcontent: '';\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t\tbackground-image: url(../images/point.png);\n\t\tbackground-size: contain;\n\t\theight: 12px;\n\t\twidth: 12px;\n\t\tmargin-right: 4px;\n\t}\n\t\n\t.case_ul li {\n\t\tline-height: 1.2;\n\t\tmargin-bottom: 10px;\n\t}\n\t\n\t.case_content__wrap {\n\t\tdisplay: flex;\n\t}\n\t\n\t.case_content__pic {\n\t\tflex: 1;\n\t\theight: 260px;\n\t\tmargin: 1px;\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t}\n</style>\n<template>\n\t<div class=\"mod_wrap\">\n\t\t<div class=\"mod_tit\">What We Did / Cases</div>\n\t\t<div class=\"mod_des\">\n\t\t\tWe take our client as our core and heart as we deeply understand at the end of day, it is all about customer services on what we do. We are very blessed to have some of the best accounts in the world that gives out the support we could.\n\t\t</div>\n\n\t\t<!--case show-->\n\t\t<div class=\"case\" v-for=\"val in content\">\n\t\t\t<!--header-->\n\t\t\t<!--<div class=\"case_wrap\">\r\n\t\t\t\t<div class=\"case_header\">\r\n\t\t\t\t\tCase<br />Show\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"case_header--right\">\r\n\t\t\t\t\t<img src=\"../images/minilogo.png\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>-->\n\n\t\t\t<!--data-->\n\t\t\t<div class=\"case_title\"><span :style=\"{color: val.tit.color,backgroundColor: val.tit.bgcolor}\">\"{{val.tit.value}}\"</span></div>\n\t\t\t<div class=\"case_content\">\n\t\t\t\t<div class=\"case_content--left\">\n\t\t\t\t\t<div class=\"case_con__tit\">{{val.des}}</div>\n\t\t\t\t\t<div class=\"case_con__des\" v-if=\"val.contit\">{{val.contit}}</div>\n\t\t\t\t\t<div class=\"case_ul\" v-for=\"obj in val.list\">\n\t\t\t\t\t\t<div class=\"case_ul__tit\">{{obj.header}}</div>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li v-for=\"item in obj.item\">{{item}}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"case_content--right\" v-if=\"val.pic.length\">\n\t\t\t\t\t<div class=\"case_content__wrap\">\n\t\t\t\t\t\t<div class=\"case_content__pic\" :style=\"{backgroundImage: 'url('+ val.pic[0] +')'}\"></div>\n\t\t\t\t\t\t<div class=\"case_content__pic\" :style=\"{backgroundImage: 'url('+ val.pic[1] +')'}\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"case_content__wrap\">\n\t\t\t\t\t\t<div class=\"case_content__pic\" :style=\"{backgroundImage: 'url('+ val.pic[2] +')'}\"></div>\n\t\t\t\t\t\t<div class=\"case_content__pic\" :style=\"{backgroundImage: 'url('+ val.pic[3] +')'}\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</template>\n\n<script>\n\tmodule.exports = {\n\t\tcomponents: {\n\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tcontent: [{\n\t\t\t\t\t\ttit: {\n\t\t\t\t\t\t\tvalue: 'EXPLORE INFINITY BEAUTY',\n\t\t\t\t\t\t\tcolor: '#fff',\n\t\t\t\t\t\t\tbgcolor: '#d400fa'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdes: 'Marie Dalgar Art Festival Shanghai',\n\t\t\t\t\t\tlist: [{\n\t\t\t\t\t\t\theader: 'CHANLLENGES',\n\t\t\t\t\t\t\titem: ['Being a pioneer brand in beauty industry in China, transforming itself from made in China to create in China, and even more importantly CREATE FOR CHINA, Marie Dalgar needs a say to set-up its own position in this extremely competitive market sector.', 'Make it ENCHANTING !']\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\theader: 'WHAT WE DID',\n\t\t\t\t\t\t\titem: ['Build a PALACE that was inspired by colors – a palace of color that creating an enchanting exotic world', 'A virtual world filled with multi-ways to interactive, to have fun, and most importantly to integrate with guests  from the minute walk-in, till exit. Make them feel they passing through a journey', 'Inspirational set-up, to form up a story that smartly transformed in Marie Dalgar’ s brand messages in a more vivid and easy way.']\n\t\t\t\t\t\t}],\n\t\t\t\t\t\tpic: ['../images/pic45.jpeg', '../images/pic46.jpeg', '../images/pic47.jpeg', '../images/pic48.jpeg']\n\t\t\t\t\t}, {\n\t\t\t\t\t\ttit: {\n\t\t\t\t\t\t\tvalue: 'SET UP THE RIGHT WAY',\n\t\t\t\t\t\t\tcolor: '#fff',\n\t\t\t\t\t\t\tbgcolor: '#7f7f7f'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdes: 'The Lincoln Way  ',\n\t\t\t\t\t\tlist: [{\n\t\t\t\t\t\t\theader: 'CHANLLENGES ',\n\t\t\t\t\t\t\titem: ['Continental is the flagship car for Lincoln that is designed for such specific crowd that all the sales need to master the small differences that makes big impact', 'How to enhance the Lincoln way through out the entire training that demonstrate the lifestyle Lincoln is all about', 'Make it EDUCATIONAL !']\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\theader: 'WHAT WE DID',\n\t\t\t\t\t\t\titem: ['Designed the test drive program to highlight out this newly launched car’s key features through dynamic driving experiences, and detailed branding lifestyle build-up’s.', 'Venue sourcing in beautiful She Shan region including a nice route for scenic drive', 'Tent production makes it functional including both the overall structure, exterior and interior décor', 'Site hospitality program including coffee / tea for whole day, tea break session, and lunch box.', 'On-site staff support for 11 days in a row to ensure a smooth operations and deliveries for over 300']\n\t\t\t\t\t\t}],\n\t\t\t\t\t\tpic: ['../images/pic9.png', '../images/pic10.png', '../images/pic11.png', '../images/pic12.png']\n\t\t\t\t\t}, {\n\t\t\t\t\t\ttit: {\n\t\t\t\t\t\t\tvalue: '“CONNECTION THAT MATTERS”',\n\t\t\t\t\t\t\tcolor: '#fff',\n\t\t\t\t\t\t\tbgcolor: '#7f7f1e'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdes: 'Luxury brand Customer Engagement',\n\t\t\t\t\t\tlist: [{\n\t\t\t\t\t\t\theader: 'CHANLLENGES',\n\t\t\t\t\t\t\titem: ['This luxury cellphone brand needs a stronger ties to its VIP customers that they are seeking for – more than cellphone', 'Something that have a close to their fundamental needs, and can inspire their appreciation of being their customers, and something that can be associated to their customer profile and their needs.', 'Make it CONNECTED !']\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\theader: 'WHAT WE DID',\n\t\t\t\t\t\t\titem: ['A rare opportunity with very exclusive chance to sit-down with ETON Windsor School admission director Mr. Charles Milnes', 'Revealing the credentials and the admission requirement trends by ETON by Mr. Milnes in person', 'Venue sourcing at Beijing Peninsula private restaurant with the right décor to fit the branding image', 'With only 30 seats available with RSVP\\'d customer over 180.']\n\t\t\t\t\t\t}],\n\t\t\t\t\t\tpic: ['../images/pic13.png', '../images/pic14.png', '../images/pic15.png', '../images/pic16.png']\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\ttit: {\n\t\t\t\t\t\t\tvalue: '“Green Power United”',\n\t\t\t\t\t\t\tcolor: '#63af57',\n\t\t\t\t\t\t\tbgcolor: '#ffff3c'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdes: 'Bring Solar Power Alive !',\n\t\t\t\t\t\tlist: [{\n\t\t\t\t\t\t\theader: 'CHANLLENGES',\n\t\t\t\t\t\t\titem: ['GREEN energies can be such a boring concepts that news talk about daily but people rarely feels connect to.', 'A green energy cooperation finds us to come up with a solution that can easily integrate their concept to be easy approach to everyone', 'Make it RELATED !']\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\theader: 'WHAT WE DID',\n\t\t\t\t\t\t\titem: ['Created the superhero stories together with unique characters that each one of them tied up to the group’s business units', 'Customer designed and character set-up', 'Launch in China at leading solar energy show ground, with breaking through visitor attention that day', 'Daily performance combined with martial arts performance, attracted daily more than 1,500 visitors / pro-channel partners on the show']\n\t\t\t\t\t\t}],\n\t\t\t\t\t\tpic: ['../images/pic17.png', '../images/pic18.png', '../images/pic19.png', '../images/pic20.png']\n\t\t\t\t\t},\n//\t\t\t\t\t{\r\n//\t\t\t\t\t\ttit: {\r\n//\t\t\t\t\t\t\tvalue: '“ONE RECEPTION AT TWO CONTINENTS”',\r\n//\t\t\t\t\t\t\tcolor: '#811e1d',\r\n//\t\t\t\t\t\t\tbgcolor: '#ffff3c'\r\n//\t\t\t\t\t\t},\r\n//\t\t\t\t\t\tdes: 'Gala Awards Dinner',\r\n//\t\t\t\t\t\tcontit: 'Created the best-of-the-best incentive program for one of the leading automobile brand in Asia Pacific dealers in Istanbul with the Gala Dinner highlights',\r\n//\t\t\t\t\t\tlist: [{\r\n//\t\t\t\t\t\t\theader: 'PROGRAM HIGHLIGHTS',\r\n//\t\t\t\t\t\t\titem: ['One night across TWO continents with the sunset reception over Asia with beautiful ocean view', 'Then crossing with exclusive hire boat from Asia to Europe', 'Exclusive hire dinner at Europe side at the Cirgan Palace – the former Sultan royal palace']\r\n//\t\t\t\t\t\t}],\r\n//\t\t\t\t\t\tpic: ['../images/pic21.png', '../images/pic22.png', '../images/pic23.png', '../images/pic24.png']\r\n//\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\ttit: {\n\t\t\t\t\t\t\tvalue: '“WONDERFUL REUION WITH A LEGACY LEFT”',\n\t\t\t\t\t\t\tcolor: '#fff',\n\t\t\t\t\t\t\tbgcolor: '#d9795e'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdes: 'Hong Kong University IMBA Alumni Reunion',\n\t\t\t\t\t\tlist: [{\n\t\t\t\t\t\t\theader: 'CHANLLENGES',\n\t\t\t\t\t\t\titem: ['Grouping 50 elites from varied industries for a good calling', 'Quality program that can attract everyone’s interests that eventually drives for more attendance', 'Make it LEGENDARY !']\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\theader: 'WHAT WE DID',\n\t\t\t\t\t\t\titem: ['Attracted almost 100% RSVP ratio as all people joined! Even together  with family members', '4-night program at Siem Reap from touch-down till take-off', 'Creative itinerary planning including picnic lunch along Royal Pond', 'Final gala night in private residence to set the celebration alive', 'CSR elements including house building project for local poor family.']\n\t\t\t\t\t\t}],\n\t\t\t\t\t\tpic: ['../images/pic25.png', '../images/pic26.png', '../images/pic27.png', '../images/pic28.png']\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\ttit: {\n\t\t\t\t\t\t\tvalue: '“ALL OVER THE MAP”',\n\t\t\t\t\t\t\tcolor: '#fff',\n\t\t\t\t\t\t\tbgcolor: '#487f1e'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdes: 'Secret Customer Visits for a national bank   ',\n\t\t\t\t\t\tlist: [{\n\t\t\t\t\t\t\theader: 'CHANLLENGES',\n\t\t\t\t\t\t\titem: ['Coverage – this local bank has one of its largest national branch network in China covering 316 city-level branches across 58 cities', 'A massive secret customer visit across a year to cover the customer service, brand operation standards and customer complain solving issues', 'Make it NATIONAL !']\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\theader: 'WHAT WE DID',\n\t\t\t\t\t\t\titem: ['A whole year secret customer visit plan that covers all 33 provinces / municipal cities including Tibet, Xinjiang, Hong Kong and Macau.', 'Crossing 58 cities within one year with sustainable visiting / reporting plans ', 'Hiring / selecting / training 120 candidates became fully qualified as secret customers.', 'Created 30 varied levels of customer complains that require branch follow-up’s that we built a comprehensive customer service investigate tree', 'A cloud base video / photo storage basis for all the visit reports including 368 video clippings and more than 50GB photos for post- review']\n\t\t\t\t\t\t}],\n\t\t\t\t\t\tpic: ['../images/pic29.png', '../images/pic30.png', '../images/pic31.png', '../images/pic32.png']\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\ttit: {\n\t\t\t\t\t\t\tvalue: '“PARTNERSHIP JOINED”',\n\t\t\t\t\t\t\tcolor: '#fff',\n\t\t\t\t\t\t\tbgcolor: '#7f7f1e'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdes: 'CapitaLand X Ascott Tujia Somerset Brand Launch ',\n\t\t\t\t\t\tlist: [{\n\t\t\t\t\t\t\theader: '',\n\t\t\t\t\t\t\titem: ['A young dynamic new residence brand launch targeting for Online Z Generation', 'Creative method to launch the registration process to attract people’s attention to ‘FORM-UP’ the new brand together ', 'Fun way ‘Door Opening’ ceremony to launch the brand', 'A memory take-away by poster card (as staying coupon) post the event']\n\t\t\t\t\t\t}],\n\t\t\t\t\t\tpic: ['../images/pic33.png', '../images/pic34.png', '../images/pic35.png', '../images/pic36.png']\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\ttit: {\n\t\t\t\t\t\t\tvalue: '“Knowledge Better Experienced”',\n\t\t\t\t\t\t\tcolor: '#fff',\n\t\t\t\t\t\t\tbgcolor: '#0000fb'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdes: 'Ford Everest None-Technical Training Enhancement ',\n\t\t\t\t\t\tlist: [{\n\t\t\t\t\t\t\theader: 'CHANLLENGES',\n\t\t\t\t\t\t\titem: ['Switching the sales network from JIANGLING Ford to Chang An Ford, after a under-expected year of sales among strong competing marketing sector', 'Ford calls out for a stronger voice of confidence and a clearer vision understanding Everest’s great adventure features', 'Make it EXCITING !']\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\theader: 'WHAT WE DID',\n\t\t\t\t\t\t\titem: ['Added in a half day alive experience program that fully highlights out Ford features', 'Sourced a perfect venue that provides a perfect PLAYGROUND for Everest', 'Designed a drive program that shows SAND, WATER, MUD, and Off-Road barriers to alive, all SORTS of FUN for dealers to try out', 'Facilitated all above driving program with national professional SUV expertise to approve / to solve all the questions dealers have']\n\t\t\t\t\t\t}],\n\t\t\t\t\t\tpic: ['../images/pic37.png', '../images/pic38.png', '../images/pic39.png', '../images/pic40.png']\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\ttit: {\n\t\t\t\t\t\t\tvalue: '“A DREAM NIGHT”',\n\t\t\t\t\t\t\tcolor: '#3965bd',\n\t\t\t\t\t\t\tbgcolor: '#d70101'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdes:'Gala Dinner with Chartered Palace Versailles ',\n\t\t\t\t\t\tcontit: 'When this client chose a destination of Paris for its national top sales incentive, a place almost all of its sales have been already. The client gave a challenge to make everyone a big surprise moment when walk-in for the gala and iMi-Spring just had the perfect solution for it.',\n\t\t\t\t\t\tlist: [{\n\t\t\t\t\t\t\theader: '',\n\t\t\t\t\t\t\titem: ['Exclusive hire for the Palace of Versailles, stepping from the Golden Gate to the whole palace.', 'A golden themed gala dinner inside the Napoleon Hall for 500 pax including all catering services', 'Tailor-made touring of the Palace of Versailles with including the each hall installed with a live performance / band to re-alive the golden era for France']\n\t\t\t\t\t\t}],\n\t\t\t\t\t\tpic: ['../images/pic41.png', '../images/pic42.png', '../images/pic43.png', '../images/pic44.png']\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\twatch: {\n\n\t\t},\n\t\tcomputed: {\n\n\t\t},\n\t\tmethods: {\n\n\t\t},\n\t\tcreated() {\n\n\t\t},\n\t\tmounted() {\n\n\t\t}\n\n\t}\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		components: {},
		data: function data() {
			return {
				content: [{
					tit: {
						value: 'EXPLORE INFINITY BEAUTY',
						color: '#fff',
						bgcolor: '#d400fa'
					},
					des: 'Marie Dalgar Art Festival Shanghai',
					list: [{
						header: 'CHANLLENGES',
						item: ['Being a pioneer brand in beauty industry in China, transforming itself from made in China to create in China, and even more importantly CREATE FOR CHINA, Marie Dalgar needs a say to set-up its own position in this extremely competitive market sector.', 'Make it ENCHANTING !']
					}, {
						header: 'WHAT WE DID',
						item: ['Build a PALACE that was inspired by colors – a palace of color that creating an enchanting exotic world', 'A virtual world filled with multi-ways to interactive, to have fun, and most importantly to integrate with guests  from the minute walk-in, till exit. Make them feel they passing through a journey', 'Inspirational set-up, to form up a story that smartly transformed in Marie Dalgar’ s brand messages in a more vivid and easy way.']
					}],
					pic: ['../images/pic45.jpeg', '../images/pic46.jpeg', '../images/pic47.jpeg', '../images/pic48.jpeg']
				}, {
					tit: {
						value: 'SET UP THE RIGHT WAY',
						color: '#fff',
						bgcolor: '#7f7f7f'
					},
					des: 'The Lincoln Way  ',
					list: [{
						header: 'CHANLLENGES ',
						item: ['Continental is the flagship car for Lincoln that is designed for such specific crowd that all the sales need to master the small differences that makes big impact', 'How to enhance the Lincoln way through out the entire training that demonstrate the lifestyle Lincoln is all about', 'Make it EDUCATIONAL !']
					}, {
						header: 'WHAT WE DID',
						item: ['Designed the test drive program to highlight out this newly launched car’s key features through dynamic driving experiences, and detailed branding lifestyle build-up’s.', 'Venue sourcing in beautiful She Shan region including a nice route for scenic drive', 'Tent production makes it functional including both the overall structure, exterior and interior décor', 'Site hospitality program including coffee / tea for whole day, tea break session, and lunch box.', 'On-site staff support for 11 days in a row to ensure a smooth operations and deliveries for over 300']
					}],
					pic: ['../images/pic9.png', '../images/pic10.png', '../images/pic11.png', '../images/pic12.png']
				}, {
					tit: {
						value: '“CONNECTION THAT MATTERS”',
						color: '#fff',
						bgcolor: '#7f7f1e'
					},
					des: 'Luxury brand Customer Engagement',
					list: [{
						header: 'CHANLLENGES',
						item: ['This luxury cellphone brand needs a stronger ties to its VIP customers that they are seeking for – more than cellphone', 'Something that have a close to their fundamental needs, and can inspire their appreciation of being their customers, and something that can be associated to their customer profile and their needs.', 'Make it CONNECTED !']
					}, {
						header: 'WHAT WE DID',
						item: ['A rare opportunity with very exclusive chance to sit-down with ETON Windsor School admission director Mr. Charles Milnes', 'Revealing the credentials and the admission requirement trends by ETON by Mr. Milnes in person', 'Venue sourcing at Beijing Peninsula private restaurant with the right décor to fit the branding image', 'With only 30 seats available with RSVP\'d customer over 180.']
					}],
					pic: ['../images/pic13.png', '../images/pic14.png', '../images/pic15.png', '../images/pic16.png']
				}, {
					tit: {
						value: '“Green Power United”',
						color: '#63af57',
						bgcolor: '#ffff3c'
					},
					des: 'Bring Solar Power Alive !',
					list: [{
						header: 'CHANLLENGES',
						item: ['GREEN energies can be such a boring concepts that news talk about daily but people rarely feels connect to.', 'A green energy cooperation finds us to come up with a solution that can easily integrate their concept to be easy approach to everyone', 'Make it RELATED !']
					}, {
						header: 'WHAT WE DID',
						item: ['Created the superhero stories together with unique characters that each one of them tied up to the group’s business units', 'Customer designed and character set-up', 'Launch in China at leading solar energy show ground, with breaking through visitor attention that day', 'Daily performance combined with martial arts performance, attracted daily more than 1,500 visitors / pro-channel partners on the show']
					}],
					pic: ['../images/pic17.png', '../images/pic18.png', '../images/pic19.png', '../images/pic20.png']
				},
				//					{
				//						tit: {
				//							value: '“ONE RECEPTION AT TWO CONTINENTS”',
				//							color: '#811e1d',
				//							bgcolor: '#ffff3c'
				//						},
				//						des: 'Gala Awards Dinner',
				//						contit: 'Created the best-of-the-best incentive program for one of the leading automobile brand in Asia Pacific dealers in Istanbul with the Gala Dinner highlights',
				//						list: [{
				//							header: 'PROGRAM HIGHLIGHTS',
				//							item: ['One night across TWO continents with the sunset reception over Asia with beautiful ocean view', 'Then crossing with exclusive hire boat from Asia to Europe', 'Exclusive hire dinner at Europe side at the Cirgan Palace – the former Sultan royal palace']
				//						}],
				//						pic: ['../images/pic21.png', '../images/pic22.png', '../images/pic23.png', '../images/pic24.png']
				//					},
				{
					tit: {
						value: '“WONDERFUL REUION WITH A LEGACY LEFT”',
						color: '#fff',
						bgcolor: '#d9795e'
					},
					des: 'Hong Kong University IMBA Alumni Reunion',
					list: [{
						header: 'CHANLLENGES',
						item: ['Grouping 50 elites from varied industries for a good calling', 'Quality program that can attract everyone’s interests that eventually drives for more attendance', 'Make it LEGENDARY !']
					}, {
						header: 'WHAT WE DID',
						item: ['Attracted almost 100% RSVP ratio as all people joined! Even together  with family members', '4-night program at Siem Reap from touch-down till take-off', 'Creative itinerary planning including picnic lunch along Royal Pond', 'Final gala night in private residence to set the celebration alive', 'CSR elements including house building project for local poor family.']
					}],
					pic: ['../images/pic25.png', '../images/pic26.png', '../images/pic27.png', '../images/pic28.png']
				}, {
					tit: {
						value: '“ALL OVER THE MAP”',
						color: '#fff',
						bgcolor: '#487f1e'
					},
					des: 'Secret Customer Visits for a national bank   ',
					list: [{
						header: 'CHANLLENGES',
						item: ['Coverage – this local bank has one of its largest national branch network in China covering 316 city-level branches across 58 cities', 'A massive secret customer visit across a year to cover the customer service, brand operation standards and customer complain solving issues', 'Make it NATIONAL !']
					}, {
						header: 'WHAT WE DID',
						item: ['A whole year secret customer visit plan that covers all 33 provinces / municipal cities including Tibet, Xinjiang, Hong Kong and Macau.', 'Crossing 58 cities within one year with sustainable visiting / reporting plans ', 'Hiring / selecting / training 120 candidates became fully qualified as secret customers.', 'Created 30 varied levels of customer complains that require branch follow-up’s that we built a comprehensive customer service investigate tree', 'A cloud base video / photo storage basis for all the visit reports including 368 video clippings and more than 50GB photos for post- review']
					}],
					pic: ['../images/pic29.png', '../images/pic30.png', '../images/pic31.png', '../images/pic32.png']
				}, {
					tit: {
						value: '“PARTNERSHIP JOINED”',
						color: '#fff',
						bgcolor: '#7f7f1e'
					},
					des: 'CapitaLand X Ascott Tujia Somerset Brand Launch ',
					list: [{
						header: '',
						item: ['A young dynamic new residence brand launch targeting for Online Z Generation', 'Creative method to launch the registration process to attract people’s attention to ‘FORM-UP’ the new brand together ', 'Fun way ‘Door Opening’ ceremony to launch the brand', 'A memory take-away by poster card (as staying coupon) post the event']
					}],
					pic: ['../images/pic33.png', '../images/pic34.png', '../images/pic35.png', '../images/pic36.png']
				}, {
					tit: {
						value: '“Knowledge Better Experienced”',
						color: '#fff',
						bgcolor: '#0000fb'
					},
					des: 'Ford Everest None-Technical Training Enhancement ',
					list: [{
						header: 'CHANLLENGES',
						item: ['Switching the sales network from JIANGLING Ford to Chang An Ford, after a under-expected year of sales among strong competing marketing sector', 'Ford calls out for a stronger voice of confidence and a clearer vision understanding Everest’s great adventure features', 'Make it EXCITING !']
					}, {
						header: 'WHAT WE DID',
						item: ['Added in a half day alive experience program that fully highlights out Ford features', 'Sourced a perfect venue that provides a perfect PLAYGROUND for Everest', 'Designed a drive program that shows SAND, WATER, MUD, and Off-Road barriers to alive, all SORTS of FUN for dealers to try out', 'Facilitated all above driving program with national professional SUV expertise to approve / to solve all the questions dealers have']
					}],
					pic: ['../images/pic37.png', '../images/pic38.png', '../images/pic39.png', '../images/pic40.png']
				}, {
					tit: {
						value: '“A DREAM NIGHT”',
						color: '#3965bd',
						bgcolor: '#d70101'
					},
					des: 'Gala Dinner with Chartered Palace Versailles ',
					contit: 'When this client chose a destination of Paris for its national top sales incentive, a place almost all of its sales have been already. The client gave a challenge to make everyone a big surprise moment when walk-in for the gala and iMi-Spring just had the perfect solution for it.',
					list: [{
						header: '',
						item: ['Exclusive hire for the Palace of Versailles, stepping from the Golden Gate to the whole palace.', 'A golden themed gala dinner inside the Napoleon Hall for 500 pax including all catering services', 'Tailor-made touring of the Palace of Versailles with including the each hall installed with a live performance / band to re-alive the golden era for France']
					}],
					pic: ['../images/pic41.png', '../images/pic42.png', '../images/pic43.png', '../images/pic44.png']
				}]
			};
		},
	
		watch: {},
		computed: {},
		methods: {},
		created: function created() {},
		mounted: function mounted() {}
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mod_wrap"
	  }, [_c('div', {
	    staticClass: "mod_tit"
	  }, [_vm._v("What We Did / Cases")]), _vm._v(" "), _c('div', {
	    staticClass: "mod_des"
	  }, [_vm._v("\n\t\tWe take our client as our core and heart as we deeply understand at the end of day, it is all about customer services on what we do. We are very blessed to have some of the best accounts in the world that gives out the support we could.\n\t")]), _vm._v(" "), _vm._l((_vm.content), function(val) {
	    return _c('div', {
	      staticClass: "case"
	    }, [_c('div', {
	      staticClass: "case_title"
	    }, [_c('span', {
	      style: ({
	        color: val.tit.color,
	        backgroundColor: val.tit.bgcolor
	      })
	    }, [_vm._v("\"" + _vm._s(val.tit.value) + "\"")])]), _vm._v(" "), _c('div', {
	      staticClass: "case_content"
	    }, [_c('div', {
	      staticClass: "case_content--left"
	    }, [_c('div', {
	      staticClass: "case_con__tit"
	    }, [_vm._v(_vm._s(val.des))]), _vm._v(" "), (val.contit) ? _c('div', {
	      staticClass: "case_con__des"
	    }, [_vm._v(_vm._s(val.contit))]) : _vm._e(), _vm._v(" "), _vm._l((val.list), function(obj) {
	      return _c('div', {
	        staticClass: "case_ul"
	      }, [_c('div', {
	        staticClass: "case_ul__tit"
	      }, [_vm._v(_vm._s(obj.header))]), _vm._v(" "), _c('ul', _vm._l((obj.item), function(item) {
	        return _c('li', [_vm._v(_vm._s(item))])
	      }))])
	    })], 2), _vm._v(" "), (val.pic.length) ? _c('div', {
	      staticClass: "case_content--right"
	    }, [_c('div', {
	      staticClass: "case_content__wrap"
	    }, [_c('div', {
	      staticClass: "case_content__pic",
	      style: ({
	        backgroundImage: 'url(' + val.pic[0] + ')'
	      })
	    }), _vm._v(" "), _c('div', {
	      staticClass: "case_content__pic",
	      style: ({
	        backgroundImage: 'url(' + val.pic[1] + ')'
	      })
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "case_content__wrap"
	    }, [_c('div', {
	      staticClass: "case_content__pic",
	      style: ({
	        backgroundImage: 'url(' + val.pic[2] + ')'
	      })
	    }), _vm._v(" "), _c('div', {
	      staticClass: "case_content__pic",
	      style: ({
	        backgroundImage: 'url(' + val.pic[3] + ')'
	      })
	    })])]) : _vm._e()])])
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5c1a4558", module.exports)
	  }
	}

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(42)
	
	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(44),
	  /* template */
	  __webpack_require__(45),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/melonzhang/Desktop/project/first-wide/components/clients.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] clients.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-00ce49e0", Component.options)
	  } else {
	    hotAPI.reload("data-v-00ce49e0", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(7)("28fc4002", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-00ce49e0!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./clients.vue", function() {
	     var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-00ce49e0!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./clients.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.clients_img{width: 100%;\n}\n.clients_container .mod_des{\n\tmargin-bottom: 0;\n}\n", "", {"version":3,"sources":["/./components/clients.vue?551c259c"],"names":[],"mappings":";AACA,aAAA,YAAA;CAAA;AACA;CACA,iBAAA;CACA","file":"clients.vue","sourcesContent":["<style>\n\t.clients_img{width: 100%;}\n\t.clients_container .mod_des{\n\t\tmargin-bottom: 0;\n\t}\n</style>\n<template>\n\t<div class=\"mod_wrap clients_container\">\n\t\t<div class=\"about_logo\">\n\t\t\t<img src=\"../images/us.png\" alt=\"\" />\n\t\t</div>\n\t\t<div class=\"mod_tit\">Our Accounts</div>\n\t\t<div class=\"mod_des\">\n\t\t\tWe have been blessed to be able to maintain these key accounts for us but we never been satisfied with what we have achieved Striking for better performance both for current accounts or any potential clients that seeking for the same.\n\t\t</div>\n\t\t\n\t\t<!--clients show-->\n\t\t<div class=\"clients\">\n\t\t\t<!--header-->\n\t\t\t<!--<div class=\"case_wrap\">\r\n\t\t\t\t<div class=\"case_header\">\r\n\t\t\t\t\tOur<br />Clients\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"case_header--right\">\r\n\t\t\t\t\t<img src=\"../images/minilogo.png\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>-->\n\t\t\t\n\t\t\t<div class=\"clients_wrap\">\n\t\t\t\t<img class=\"clients_img\" src=\"../images/clients.png\"/>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\n\t</div>\n</template>\n\n<script>\n\tmodule.exports = {\n\t\tcomponents: {},\n\t\tdata() {\n\t\t\treturn {\n\n\t\t\t}\n\t\t},\n\t\twatch: {\n\n\t\t},\n\t\tcomputed: {\n\n\t\t},\n\t\tmethods: {\n\n\t\t},\n\t\tcreated() {\n\n\t\t},\n\t\tmounted() {\n\n\t\t}\n\n\t}\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		components: {},
		data: function data() {
			return {};
		},
	
		watch: {},
		computed: {},
		methods: {},
		created: function created() {},
		mounted: function mounted() {}
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mod_wrap clients_container"
	  }, [_c('div', {
	    staticClass: "about_logo"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(33),
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "mod_tit"
	  }, [_vm._v("Our Accounts")]), _vm._v(" "), _c('div', {
	    staticClass: "mod_des"
	  }, [_vm._v("\n\t\tWe have been blessed to be able to maintain these key accounts for us but we never been satisfied with what we have achieved Striking for better performance both for current accounts or any potential clients that seeking for the same.\n\t")]), _vm._v(" "), _c('div', {
	    staticClass: "clients"
	  }, [_c('div', {
	    staticClass: "clients_wrap"
	  }, [_c('img', {
	    staticClass: "clients_img",
	    attrs: {
	      "src": __webpack_require__(46)
	    }
	  })])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-00ce49e0", module.exports)
	  }
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bc5c172fa321dbdd346ec0d264d300e4.png";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(48)
	
	var Component = __webpack_require__(9)(
	  /* script */
	  __webpack_require__(50),
	  /* template */
	  __webpack_require__(51),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/melonzhang/Desktop/project/first-wide/components/contact.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] contact.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0b57ad28", Component.options)
	  } else {
	    hotAPI.reload("data-v-0b57ad28", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(7)("42a6805c", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0b57ad28!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contact.vue", function() {
	     var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0b57ad28!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contact.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.contact_wrap {\n\twidth: 100%;\n\tposition: relative;\n}\n.contact_bg {\n\twidth: 100%;\n}\n.contact_logo {\n\tposition: absolute;\n\twidth: 246px;\n\theight: 70px;\n\tright: 20px;\n\ttop: 50%;\n\tmargin-top: -123px;\n}\n.contact_logo img {\n\twidth: 100%;\n}\n.contact_text {\n\ttext-align: right;\n\tpadding: 5px;\n\tposition: absolute;\n\twidth: 246px;\n\tright: 20px;\n\ttop: 50%;\n\tmargin-top: -40px;\n\tborder: 2px solid #fff;\n}\n.contact_text span{\n\tcolor: #D15F96;\n}\n", "", {"version":3,"sources":["/./components/contact.vue?62fa57e3"],"names":[],"mappings":";AACA;CACA,YAAA;CACA,mBAAA;CACA;AAEA;CACA,YAAA;CACA;AAEA;CACA,mBAAA;CACA,aAAA;CACA,aAAA;CACA,YAAA;CACA,SAAA;CACA,mBAAA;CACA;AAEA;CACA,YAAA;CACA;AAEA;CACA,kBAAA;CACA,aAAA;CACA,mBAAA;CACA,aAAA;CACA,YAAA;CACA,SAAA;CACA,kBAAA;CACA,uBAAA;CACA;AACA;CACA,eAAA;CACA","file":"contact.vue","sourcesContent":["<style>\n\t.contact_wrap {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t}\n\t\n\t.contact_bg {\n\t\twidth: 100%;\n\t}\n\t\n\t.contact_logo {\n\t\tposition: absolute;\n\t\twidth: 246px;\n\t\theight: 70px;\n\t\tright: 20px;\n\t\ttop: 50%;\n\t\tmargin-top: -123px;\n\t}\n\t\n\t.contact_logo img {\n\t\twidth: 100%;\n\t}\n\t\n\t.contact_text {\n\t\ttext-align: right;\n\t\tpadding: 5px;\n\t\tposition: absolute;\n\t\twidth: 246px;\n\t\tright: 20px;\n\t\ttop: 50%;\n\t\tmargin-top: -40px;\n\t\tborder: 2px solid #fff;\n\t}\n\t.contact_text span{\n\t\tcolor: #D15F96;\n\t}\n</style>\n<template>\n\t<div class=\"contact_wrap\">\n\t\t<img class=\"contact_bg\" src=\"../images/contact_bg.jpg\" />\n\n\t\t<div class=\"contact_logo\">\n\t\t\t<img src=\"../images/minilogo2.png\" />\n\t\t</div>\n\n\t\t<div class=\"contact_text\">\n\t\t\t<span>Your Bespoke Program</span><br /><br />\n\t\t\tiMi-Spring Partners<br />\n\t\t\tSuite 202, HuaiZhong Mansion<br />\n\t\t\t1162 Middle Huaihai Road<br />\n\t\t\tShanghai, China<br />\n\t\t\t<span>T</span>. +86 21 6473 0600<br />\n\t\t\t<!--<span>C</span>. + 86 177 2147 0932<br />-->\n\t\t\t<span>E</span>. <a href=\"mailto:inquiry@imi-spring.com\">inquiry@imi-spring.com</a>\n\n\t\t</div>\n\n\t</div>\n</template>\n\n<script>\n\tmodule.exports = {\n\t\tcomponents: {},\n\t\tdata() {\n\t\t\treturn {\n\n\t\t\t}\n\t\t},\n\t\twatch: {\n\n\t\t},\n\t\tcomputed: {\n\n\t\t},\n\t\tmethods: {\n\n\t\t},\n\t\tcreated() {\n\n\t\t},\n\t\tmounted() {\n\n\t\t}\n\n\t}\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		components: {},
		data: function data() {
			return {};
		},
	
		watch: {},
		computed: {},
		methods: {},
		created: function created() {},
		mounted: function mounted() {}
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "contact_wrap"
	  }, [_c('img', {
	    staticClass: "contact_bg",
	    attrs: {
	      "src": __webpack_require__(52)
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "contact_logo"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(53)
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "contact_text"
	  }, [_c('span', [_vm._v("Your Bespoke Program")]), _c('br'), _c('br'), _vm._v("\n\t\tiMi-Spring Partners"), _c('br'), _vm._v("\n\t\tSuite 202, HuaiZhong Mansion"), _c('br'), _vm._v("\n\t\t1162 Middle Huaihai Road"), _c('br'), _vm._v("\n\t\tShanghai, China"), _c('br'), _vm._v(" "), _c('span', [_vm._v("T")]), _vm._v(". +86 21 6473 0600"), _c('br'), _vm._v(" "), _c('span', [_vm._v("E")]), _vm._v(". "), _c('a', {
	    attrs: {
	      "href": "mailto:inquiry@imi-spring.com"
	    }
	  }, [_vm._v("inquiry@imi-spring.com")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0b57ad28", module.exports)
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "38de1ce20bcab66d85f8f0b7a5fa0b78.jpg";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2ecdfdb6f6eceb6d07987124f8898f16.png";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "main"
	  }, [_c('t-about', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.item == 'about'),
	      expression: "item == 'about'"
	    }]
	  }), _vm._v(" "), _c('t-case', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.item == 'wecase'),
	      expression: "item == 'wecase'"
	    }]
	  }), _vm._v(" "), _c('t-clients', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.item == 'clients'),
	      expression: "item == 'clients'"
	    }]
	  }), _vm._v(" "), _c('t-contact', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.item == 'contact'),
	      expression: "item == 'contact'"
	    }]
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5a546361", module.exports)
	  }
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container",
	    attrs: {
	      "id": "container"
	    }
	  }, [_c('t-header'), _vm._v(" "), _c('t-main')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-8a593414", module.exports)
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map