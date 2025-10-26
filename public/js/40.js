(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/antrian/Table.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/antrian/Table.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-qrcode-reader */ "./node_modules/vue-qrcode-reader/dist/VueQrcodeReader.common.js");
/* harmony import */ var vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getAntrians();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    this.tgl = today;
  },
  data: function data() {
    return {
      // users: {}
      search: "",
      tgl: "",
      idbilling: "",
      result: '',
      error: ''
    };
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__["SET_BREADCRUMB"], [{
      title: "Antrian"
    }, {
      title: "Data"
    }]);
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["antrian"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("antrian", {
    identitaskendaraan: function identitaskendaraan(state) {
      return state.identitaskendaraan;
    },
    kodewilayahs: function kodewilayahs(state) {
      return state.kodewilayahs;
    }
  })), {}, {
    page: {
      get: function get() {
        return this.$store.state.antrian.page;
      },
      set: function set(val) {
        this.$store.commit("antrian/SET_PAGE", val);
      }
    }
  }),
  watch: {
    page: function page() {
      this.getAntrians();
    },
    search: function search() {
      this.getAntrians(this.search);
    },
    tgl: function tgl() {
      this.$store.commit("antrian/SET_TGL", this.customFormatter(this.tgl));
      this.getAntrians(this.search);
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("antrian", ["getAntrians", "getBilling", "getPendaftaran", "getKodewilayahs", "updateAntrian", "setAntrian"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("antrian", ["CLEAR_FORM"])), {}, {
    deleteAntrian: function deleteAntrian(id) {},
    customFormatter: function customFormatter(today) {
      return today;
    },
    print: function print(id) {
      window.open('/cetak/' + id + '/permohonan', "_blank");
    },
    reload: function reload() {
      this.getAntrians(this.search);
    },
    edit: function edit(id) {
      this.getKodewilayahs();
      this.getPendaftaran(id);
    },
    updateData: function updateData() {
      var _this = this;
      this.updateAntrian(this.identitaskendaraan.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: "",
          text: "Berhasil Update",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        _this.reload();
      });
    },
    caridata: function caridata() {
      var _this2 = this;
      this.getBilling(this.idbilling).then(function () {
        if (_this2.antrian.pendaftaran.pendaftaran_id.length == 0) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "barcode id tidak ditemukan",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
          });
        } else if (_this2.antrian.pendaftaran.status == 0) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "masih menunggu pembayaran",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
          });
        } else if (_this2.antrian.pendaftaran.tglpendaftaran != _this2.antrian.pendaftaran.tglbayar) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "kendaraan tidak terjadwal hari ini",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
          });
        } else if (_this2.antrian.pendaftaran.datastatus == false) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "Daat Belum Lengkap",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
          });
          _this2.$router.push({
            name: "pendaftaran.edit",
            params: {
              id: _this2.antrian.pendaftaran.pendaftaran_id
            }
          });
        } else if (_this2.antrian.pendaftaran.status == 1) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "barcode id ditemukan",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
          _this2.setAntrian(_this2.antrian.pendaftaran.pendaftaran_id);
        }
        _this2.idbilling = "";
        _this2.CLEAR_FORM();
      });
    },
    onDecode: function onDecode(result) {
      var _this3 = this;
      console.log(result);
      this.idbilling = result;
      this.getBilling(result).then(function () {
        if (_this3.antrian.pendaftaran.pendaftaran_id.length == 0) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "barcode id tidak ditemukan",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
          });
        } else if (_this3.antrian.pendaftaran.status == 0) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "masih menunggu pembayaran",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
          });
        } else if (_this3.antrian.pendaftaran.tglpendaftaran != _this3.antrian.pendaftaran.tglbayar) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "kendaraan tidak terjadwal hari ini",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
          });
        } else if (_this3.antrian.pendaftaran.datastatus == false) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "Daat Belum Lengkap",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500
          });
          _this3.$router.push({
            name: "pendaftaran.edit",
            params: {
              id: _this3.antrian.pendaftaran.pendaftaran_id
            }
          });
        } else if (_this3.antrian.pendaftaran.status == 1) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "barcode id ditemukan",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
          _this3.setAntrian(_this3.antrian.pendaftaran.pendaftaran_id);
        }
        _this3.idbilling = "";
        _this3.CLEAR_FORM();
      });
    },
    onInit: function onInit(promise) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return promise;
            case 3:
              _context.next = 8;
              break;
            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              if (_context.t0.name === 'NotAllowedError') {
                _this4.error = "ERROR: you need to grant camera access permission";
              } else if (_context.t0.name === 'NotFoundError') {
                _this4.error = "ERROR: no camera on this device";
              } else if (_context.t0.name === 'NotSupportedError') {
                _this4.error = "ERROR: secure context required (HTTPS, localhost)";
              } else if (_context.t0.name === 'NotReadableError') {
                _this4.error = "ERROR: is the camera already in use?";
              } else if (_context.t0.name === 'OverconstrainedError') {
                _this4.error = "ERROR: installed cameras are not suitable";
              } else if (_context.t0.name === 'StreamApiNotSupportedError') {
                _this4.error = "ERROR: Stream API is not supported in this browser";
              } else if (_context.t0.name === 'InsecureContextError') {
                _this4.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
              } else {
                _this4.error = "ERROR: Camera error (".concat(_context.t0.name, ")");
              }
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 5]]);
      }))();
    }
  }),
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a,
    QrcodeStream: vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_2__["QrcodeStream"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/antrian/Table.vue?vue&type=template&id=073cde33":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/antrian/Table.vue?vue&type=template&id=073cde33 ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card card-custom"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-toolbar"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-5"
  }, [_c('b-form-datepicker', {
    attrs: {
      "id": "example-datepicker",
      "locale": "id"
    },
    model: {
      value: _vm.tgl,
      callback: function callback($$v) {
        _vm.tgl = $$v;
      },
      expression: "tgl"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "serach"
    },
    domProps: {
      "value": _vm.search
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-1"
  }, [_c('button', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.modal-scrollable",
      modifiers: {
        "modal-scrollable": true
      }
    }],
    staticClass: "btn btn-sm btn-icon btn-light-danger mr-2",
    attrs: {
      "data-toggle": "tooltip",
      "title": "Scan with Camera",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "flaticon2-photo-camera"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-1"
  }, [_c('button', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.modal-scrollable2",
      modifiers: {
        "modal-scrollable2": true
      }
    }],
    staticClass: "btn btn-sm btn-icon btn-light-danger mr-2",
    attrs: {
      "data-toggle": "tooltip",
      "title": "Scan with Scanner",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "flaticon2-copy"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-1"
  }, [_c('a', {
    staticClass: "btn btn-sm btn-icon btn-light-info mr-2",
    attrs: {
      "title": "reload data"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.reload.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-reload"
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row table-responsive"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('table', {
    staticClass: "table"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l(_vm.antrian.antrians.data, function (antrian, index) {
    return _c('tr', {
      key: antrian.id
    }, [_c('td', [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(antrian.keterangan))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(antrian.nouji))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(antrian.noregistrasikendaraan))]), _vm._v(" "), _c('td', [_c('a', {
      directives: [{
        name: "b-modal",
        rawName: "v-b-modal.modal-scrollable3",
        modifiers: {
          "modal-scrollable3": true
        }
      }],
      attrs: {
        "href": "javascript:void(0)"
      },
      on: {
        "click": function click($event) {
          return _vm.edit(antrian.id);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-edit text-success"
    })]), _vm._v("/\n                        "), _c('a', {
      attrs: {
        "href": "javascript:void(0)"
      },
      on: {
        "click": function click($event) {
          return _vm.print(antrian.id);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-print text-info"
    })])])]);
  }), 0)])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "pull-right"
  }, [_c('div', {
    staticClass: "overflow-auto"
  }, [_vm.antrian.antrians.data && _vm.antrian.antrians.data.length > 0 ? _c('b-pagination', {
    attrs: {
      "total-rows": _vm.antrian.antrians.total,
      "per-page": _vm.antrian.antrians.per_page,
      "aria-controls": "antrians"
    },
    model: {
      value: _vm.page,
      callback: function callback($$v) {
        _vm.page = $$v;
      },
      expression: "page"
    }
  }) : _vm._e()], 1)])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "modal-scrollable",
      "scrollable": "",
      "ok-only": ""
    }
  }, [_c('p', {
    staticClass: "error"
  }, [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c('qrcode-stream', {
    on: {
      "decode": _vm.onDecode,
      "init": _vm.onInit
    }
  })], 1), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "modal-scrollable2",
      "scrollable": "",
      "ok-only": ""
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.idbilling,
      expression: "idbilling"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "width",
      "placeholder": "Scan"
    },
    domProps: {
      "value": _vm.idbilling
    },
    on: {
      "change": function change($event) {
        return _vm.caridata();
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.idbilling = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "modal-scrollable3"
    },
    on: {
      "ok": _vm.updateData
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tanggal Pendaftaran")]), _vm._v(" "), _c('b-form-datepicker', {
    attrs: {
      "id": "example-datepicker",
      "locale": "id"
    },
    model: {
      value: _vm.identitaskendaraan.tglpendaftaran,
      callback: function callback($$v) {
        _vm.$set(_vm.identitaskendaraan, "tglpendaftaran", $$v);
      },
      expression: "identitaskendaraan.tglpendaftaran"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jenis Pendaftaran")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.kodepenerbitans_id,
      expression: "identitaskendaraan.kodepenerbitans_id"
    }],
    staticClass: "form-control",
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.identitaskendaraan, "kodepenerbitans_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected",
      "value": "1"
    }
  }, [_vm._v("Daftar Baru")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Perpanjangan")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Rusak")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("Hilang")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("Numpang Uji Masuk")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "9"
    }
  }, [_vm._v("Numpang Uji Keluar")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("Mutasi Masuk")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("Mutasi Keluar")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("Uji Ulang")])])]), _vm._v(" "), _vm.identitaskendaraan.kodepenerbitans_id == 2 ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" No Uji")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.nouji,
      expression: "identitaskendaraan.nouji"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": "No Uji"
    },
    domProps: {
      "value": _vm.identitaskendaraan.nouji
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "nouji", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.kodepenerbitans_id == 5 || _vm.identitaskendaraan.kodepenerbitans_id == 6 ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Daerah Asal")]), _vm._v(" "), _c('vSelect', {
    attrs: {
      "label": "area_name",
      "options": _vm.kodewilayahs
    },
    model: {
      value: _vm.identitaskendaraan.kodewilayah,
      callback: function callback($$v) {
        _vm.$set(_vm.identitaskendaraan, "kodewilayah", $$v);
      },
      expression: "identitaskendaraan.kodewilayah"
    }
  })], 1) : _vm._e()])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-title"
  }, [_c('span', {
    staticClass: "card-icon"
  }, [_c('i', {
    staticClass: "flaticon2-lorry text-primary"
  })]), _vm._v(" "), _c('h3', {
    staticClass: "card-label"
  }, [_vm._v("Antrian")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("No.")]), _vm._v(" "), _c('th', [_vm._v("Jenis Pendaftaran")]), _vm._v(" "), _c('th', [_vm._v("No Uji")]), _vm._v(" "), _c('th', [_vm._v("No Kendaraan")]), _vm._v(" "), _c('th', [_vm._v("Modify")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/antrian/Table.vue":
/*!***************************************************!*\
  !*** ./resources/js/view/pages/antrian/Table.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_073cde33__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=073cde33 */ "./resources/js/view/pages/antrian/Table.vue?vue&type=template&id=073cde33");
/* harmony import */ var _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js */ "./resources/js/view/pages/antrian/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_073cde33__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_073cde33__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/antrian/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/antrian/Table.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/view/pages/antrian/Table.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/antrian/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/antrian/Table.vue?vue&type=template&id=073cde33":
/*!*********************************************************************************!*\
  !*** ./resources/js/view/pages/antrian/Table.vue?vue&type=template&id=073cde33 ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_073cde33__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=073cde33 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/antrian/Table.vue?vue&type=template&id=073cde33");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_073cde33__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_073cde33__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);