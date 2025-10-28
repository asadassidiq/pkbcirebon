(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/reflect/construct.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of.js */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js");
var _Object$getPrototypeOf = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of.js */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js");
function _getPrototypeOf(t) {
  return module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf.bind() : function (t) {
    return t.__proto__ || _Object$getPrototypeOf(t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! core-js/library/fn/object/create.js */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js");
var _Object$defineProperty = __webpack_require__(/*! core-js/library/fn/object/define-property.js */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = _Object$create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), _Object$defineProperty(t, "prototype", {
    writable: !1
  }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js")["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of.js */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js");
function _setPrototypeOf(t, e) {
  return module.exports = _setPrototypeOf = _Object$setPrototypeOf ? _Object$setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/reflect/construct.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/reflect/construct.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.reflect.construct */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.reflect.construct.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Reflect.construct;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_bind.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_bind.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.reflect.construct.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.reflect.construct.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/vue-demi/lib/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/vue-demi/lib/index.mjs ***!
  \*********************************************/
/*! exports provided: createApp, Vue, Vue2, isVue2, isVue3, install, warn, EffectScope, computed, customRef, defineAsyncComponent, defineComponent, del, effectScope, getCurrentInstance, getCurrentScope, h, inject, isProxy, isReactive, isReadonly, isRef, isShallow, markRaw, mergeDefaults, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onScopeDispose, onServerPrefetch, onUnmounted, onUpdated, provide, proxyRefs, reactive, readonly, ref, set, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, useAttrs, useCssModule, useCssVars, useListeners, useSlots, version, watch, watchEffect, watchPostEffect, watchSyncEffect */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vue2", function() { return Vue2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVue2", function() { return isVue2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVue3", function() { return isVue3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectScope", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["EffectScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["computed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customRef", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["customRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["defineAsyncComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["defineComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "del", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["del"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectScope", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["effectScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentScope", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["isProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["isReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["isReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["isRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isShallow", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["isShallow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markRaw", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["markRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDefaults", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["mergeDefaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onActivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onBeforeMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onBeforeUnmount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onBeforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onDeactivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onErrorCaptured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onMounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTracked", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onRenderTracked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTriggered", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onRenderTriggered"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onScopeDispose", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onScopeDispose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onServerPrefetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["provide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["proxyRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["reactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["readonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["set"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["shallowReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["shallowReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowRef", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["shallowRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["toRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRef", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["toRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["toRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "triggerRef", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["triggerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unref", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["unref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAttrs", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["useAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCssModule", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["useCssModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCssVars", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["useCssVars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useListeners", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["useListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSlots", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["useSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchEffect", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["watchEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchPostEffect", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["watchPostEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSyncEffect", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["watchSyncEffect"]; });



var isVue2 = true
var isVue3 = false
var Vue2 = vue__WEBPACK_IMPORTED_MODULE_0__["default"]
var warn = vue__WEBPACK_IMPORTED_MODULE_0__["default"].util.warn

function install() {}

// createApp polyfill
function createApp(rootComponent, rootProps) {
  var vm
  var provide = {}
  var app = {
    config: vue__WEBPACK_IMPORTED_MODULE_0__["default"].config,
    use: vue__WEBPACK_IMPORTED_MODULE_0__["default"].use.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mixin: vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    component: vue__WEBPACK_IMPORTED_MODULE_0__["default"].component.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    provide: function (key, value) {
      provide[key] = value
      return this
    },
    directive: function (name, dir) {
      if (dir) {
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name, dir)
        return app
      } else {
        return vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name)
      }
    },
    mount: function (el, hydrating) {
      if (!vm) {
        vm = new vue__WEBPACK_IMPORTED_MODULE_0__["default"](Object.assign({ propsData: rootProps }, rootComponent, { provide: Object.assign(provide, rootComponent.provide) }))
        vm.$mount(el, hydrating)
        return vm
      } else {
        return vm
      }
    },
    unmount: function () {
      if (vm) {
        vm.$destroy()
        vm = undefined
      }
    },
  }
  return app
}





/***/ }),

/***/ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js ***!
  \*************************************************************/
/*! exports provided: VueRecaptcha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueRecaptcha", function() { return Recaptcha; });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");


function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var defer = function defer() {
  var state = false; // Resolved or not

  var callbacks = [];

  var resolve = function resolve() {
    if (state) {
      return;
    }

    state = true;

    for (var i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i]();
    }
  };

  var then = function then(cb) {
    if (!state) {
      callbacks.push(cb);
      return;
    }

    cb();
  };

  var deferred = {
    resolved: function resolved() {
      return state;
    },
    resolve: resolve,
    promise: {
      then: then
    }
  };
  return deferred;
};

var ownProp = Object.prototype.hasOwnProperty;
function createRecaptcha() {
  var deferred = defer();
  return {
    notify: function notify() {
      deferred.resolve();
    },
    wait: function wait() {
      return deferred.promise;
    },
    render: function render(ele, options, cb) {
      this.wait().then(function () {
        cb(window.grecaptcha.render(ele, options));
      });
    },
    reset: function reset(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.reset(widgetId);
      });
    },
    execute: function execute(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.execute(widgetId);
      });
    },
    checkRecaptchaLoad: function checkRecaptchaLoad() {
      if (ownProp.call(window, 'grecaptcha') && ownProp.call(window.grecaptcha, 'render')) {
        this.notify();
      }
    },
    assertLoaded: function assertLoaded() {
      if (!deferred.resolved()) {
        throw new Error('ReCAPTCHA has not been loaded');
      }
    }
  };
}
var recaptcha = createRecaptcha();

if (typeof window !== 'undefined') {
  window.vueRecaptchaApiLoaded = recaptcha.notify;
}

var Recaptcha = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  name: 'VueRecaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String
    },
    badge: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    tabindex: {
      type: String
    },
    loadRecaptchaScript: {
      type: Boolean,
      "default": true
    },
    recaptchaScriptId: {
      type: String,
      "default": '__RECAPTCHA_SCRIPT'
    },
    recaptchaHost: {
      type: String,
      "default": 'www.google.com'
    },
    language: {
      type: String,
      "default": ''
    }
  },
  emits: ['render', 'verify', 'expired', 'error'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var root = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    var widgetId = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);

    var emitVerify = function emitVerify(response) {
      emit('verify', response);
    };

    var emitExpired = function emitExpired() {
      emit('expired');
    };

    var emitError = function emitError() {
      emit('error');
    };

    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(function () {
      recaptcha.checkRecaptchaLoad();

      if (props.loadRecaptchaScript) {
        if (!document.getElementById(props.recaptchaScriptId)) {
          // Note: vueRecaptchaApiLoaded load callback name is per the latest documentation
          var script = document.createElement('script');
          script.id = props.recaptchaScriptId;
          script.src = "https://" + props.recaptchaHost + "/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=" + props.language;
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
        }
      }

      var opts = _extends({}, props, {
        callback: emitVerify,
        'expired-callback': emitExpired,
        'error-callback': emitError
      });

      var $root = root.value;
      var container = slots["default"] ? $root.children[0] : $root;
      recaptcha.render(container, opts, function (id) {
        widgetId.value = id;
        emit('render', id);
      });
    });
    return {
      root: root,
      widgetId: widgetId,
      reset: function reset() {
        recaptcha.reset(widgetId.value);
      },
      execute: function execute() {
        recaptcha.execute(widgetId.value);
      }
    };
  },
  render: function render() {
    var defaultSlot = this.$slots["default"];
    var defaultContent;

    if (typeof defaultSlot === 'function') {
      defaultContent = defaultSlot();
    } else {
      defaultContent = defaultSlot;
    }

    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
      ref: 'root'
    }, defaultContent);
  }
});




/***/ })

}]);