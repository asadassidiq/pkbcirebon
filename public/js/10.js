(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("pos3", {
    laikjalan: function laikjalan(state) {
      return state.laikjalan;
    },
    catatan: function catatan(state) {
      return state.catatan;
    },
    alasan: function alasan(state) {
      return state.alasan;
    },
    pendaftaran: function pendaftaran(state) {
      return state.pendaftaran;
    },
    identitaskendaraan: function identitaskendaraan(state) {
      return state.identitaskendaraan;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("pos3", ["CLEAR_FORM", "CLEAR_CATATAN", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("pos3", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 3;
      this.catatan.status = '1';
      this.getAlasan();
      this.getCatatan(this.$route.params.id);
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    lain: function lain() {
      if (this.catatan.rekomendasi == 'Lain-lain') {
        this.lainlain = true;
      } else {
        this.lainlain = false;
      }
    },
    check: function check(nama, hasil) {
      if (this.laikjalan.alatuji_lampuutamapenyimpanganlampukiri > 1.09 && nama == 'Arah Kiri') {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      } else if (this.laikjalan.alatuji_lampuutamapenyimpanganlampukanan > 0.34 && nama == 'Arah Kanan') {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      } else if (this.laikjalan.alatuji_lampuutamakekuatanpancarlampukanan < 12000 && nama == 'INTENSITAS KANAN') {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      } else if (this.laikjalan.alatuji_lampuutamakekuatanpancarlampukiri < 12000 && nama == 'INTENSITAS KIRI') {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      }
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          confirmButtonClass: "btn btn-secondary"
        });
      });
    },
    hasiluji: function hasiluji() {
      this.CHECK_HASILUJI();
    },
    handleFocus: function handleFocus(field) {
      if (this.laikjalan[field] === 0 || this.laikjalan[field] === "0") {
        this.laikjalan[field] = '';
      }
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
    this.CLEAR_FORM();
  },
  created: function created() {
    this.CLEAR_CATATAN();
    this.CLEAR_FORM();
    this.hasiluji();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("pos3", {
    catatan: function catatan(state) {
      return state.catatan;
    },
    pendaftaran: function pendaftaran(state) {
      return state.pendaftaran;
    },
    pengujian: function pengujian(state) {
      return state.pengujian;
    },
    laikjalan: function laikjalan(state) {
      return state.laikjalan;
    },
    alasan: function alasan(state) {
      return state.alasan;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("pos3", ["CLEAR_FORM", "CLEAR_CATATAN", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("pos3", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 3;
      this.catatan.status = '1';
      this.getAlasan();
      this.getCatatan(this.$route.params.id);
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    lain: function lain() {
      if (this.catatan.rekomendasi == 'Lain-lain') {
        this.lainlain = true;
      } else {
        this.lainlain = false;
      }
    },
    check: function check(nama, hasil) {
      if (this.laikjalan.alatuji_penunjukkecepatan < 36 || this.laikjalan.alatuji_penunjukkecepatan > 46) {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      }
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    handleFocus: function handleFocus(field) {
      if (this.laikjalan[field] === 0 || this.laikjalan[field] === "0") {
        this.laikjalan[field] = '';
      }
    },
    hasiluji: function hasiluji() {
      this.CHECK_HASILUJI();
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
    this.CLEAR_FORM();
  },
  created: function created() {
    this.CLEAR_CATATAN();
    this.CLEAR_FORM();
    this.hasiluji();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos3/Pengujian.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos3/Pengujian.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _formPengujian_FormLampu_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formPengujian/FormLampu.vue */ "./resources/js/view/pages/formPengujian/FormLampu.vue");
/* harmony import */ var _formPengujian_FormSideslip_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../formPengujian/FormSideslip.vue */ "./resources/js/view/pages/formPengujian/FormSideslip.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__["SET_BREADCRUMB"], [{
      title: "Pos"
    }, {
      title: "Pengujian"
    }]);
  },
  created: function created() {
    var _this = this;
    this.getIdentitaskendaraan(this.$route.params.id).then(function () {
      _this.editPos(_this.$route.params.id).then(function () {
        _this.hasiluji();
      });
    });
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("pos3", ["CLEAR_FORM", "CLEAR_CATATAN", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("pos3", ["submitPos", "getIdentitaskendaraan", "editPos", "CLEAR_FORM"])), {}, {
    submit: function submit() {
      this.submitPos(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    hasiluji: function hasiluji() {
      this.CHECK_HASILUJI();
    },
    close: function close() {
      this.$router.go(-1);
    },
    back: function back() {
      this.$router.push({
        name: "pos2.pengujian",
        params: {
          id: this.$route.params.id
        }
      });
    },
    next: function next() {
      this.$router.push({
        name: "pos4.pengujian",
        params: {
          id: this.$route.params.id
        }
      });
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])({
    identitaskendaraan: function identitaskendaraan(state) {
      return state.pos3.identitaskendaraan;
    },
    pendaftaran: function pendaftaran(state) {
      return state.pos3.pendaftaran;
    },
    laikjalan: function laikjalan(state) {
      return state.pos3.laikjalan;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["currentUserPersonalInfo"])),
  components: {
    "posLampu-form": _formPengujian_FormLampu_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    "posSideslip-form": _formPengujian_FormSideslip_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=template&id=2dff3c62":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=template&id=2dff3c62 ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Intensitas Kanan (cd)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_lampuutamakekuatanpancarlampukanan,
      expression: "laikjalan.alatuji_lampuutamakekuatanpancarlampukanan"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_lampuutamakekuatanpancarlampukanan < 12000 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;',
    attrs: {
      "type": "number",
      "name": "alatuji_lampuutamakekuatanpancarlampukanan",
      "placeholder": "Intensitas kanan"
    },
    domProps: {
      "value": _vm.laikjalan.alatuji_lampuutamakekuatanpancarlampukanan
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('alatuji_lampuutamakekuatanpancarlampukanan');
      },
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_lampuutamakekuatanpancarlampukanan", $event.target.value);
      }, _vm.hasiluji]
    }
  }), _vm._v(" "), _vm.errors.alatuji_lampuutamakekuatanpancarlampukanan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_lampuutamakekuatanpancarlampukanan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Intensitas Kiri (cd)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_lampuutamakekuatanpancarlampukiri,
      expression: "laikjalan.alatuji_lampuutamakekuatanpancarlampukiri"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_lampuutamakekuatanpancarlampukiri < 12000 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;',
    attrs: {
      "type": "number",
      "name": "alatuji_lampuutamakekuatanpancarlampukiri",
      "placeholder": "Intensitas Kiri"
    },
    domProps: {
      "value": _vm.laikjalan.alatuji_lampuutamakekuatanpancarlampukiri
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('alatuji_lampuutamakekuatanpancarlampukiri');
      },
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_lampuutamakekuatanpancarlampukiri", $event.target.value);
      }, _vm.hasiluji]
    }
  }), _vm._v(" "), _vm.errors.alatuji_lampuutamakekuatanpancarlampukiri ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_lampuutamakekuatanpancarlampukiri[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group",
    staticStyle: {
      "margin-top": "35px"
    }
  }, [_c('button', {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      "disabled": _vm.laikjalan.status_intensitaslampu == '1'
    },
    on: {
      "click": function click($event) {
        return _vm.showModal('Intensitas lampu', 'kanan : ' + _vm.laikjalan.alatuji_lampuutamakekuatanpancarlampukanan + 'cd, Kiri : ' + _vm.laikjalan.alatuji_lampuutamakekuatanpancarlampukiri + 'cd');
      }
    }
  }, [_c('i', {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Arah Kanan (degree/menit)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_lampuutamapenyimpanganlampukanan,
      expression: "laikjalan.alatuji_lampuutamapenyimpanganlampukanan"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_lampuutamapenyimpanganlampukanan > 0.34 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;',
    attrs: {
      "type": "number",
      "name": "alatuji_lampuutamapenyimpanganlampukanan",
      "placeholder": "Arah kanan",
      "step": "0.01"
    },
    domProps: {
      "value": _vm.laikjalan.alatuji_lampuutamapenyimpanganlampukanan
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('alatuji_lampuutamapenyimpanganlampukanan');
      },
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_lampuutamapenyimpanganlampukanan", $event.target.value);
      }, _vm.hasiluji]
    }
  }), _vm._v(" "), _vm.errors.alatuji_lampuutamapenyimpanganlampukanan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_lampuutamapenyimpanganlampukanan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Arah Kiri (degree/menit)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_lampuutamapenyimpanganlampukiri,
      expression: "laikjalan.alatuji_lampuutamapenyimpanganlampukiri"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_lampuutamapenyimpanganlampukiri > 1.09 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;',
    attrs: {
      "type": "number",
      "name": "alatuji_lampuutamapenyimpanganlampukiri",
      "placeholder": "Arah Kiri",
      "step": "0.01"
    },
    domProps: {
      "value": _vm.laikjalan.alatuji_lampuutamapenyimpanganlampukiri
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('alatuji_lampuutamapenyimpanganlampukiri');
      },
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_lampuutamapenyimpanganlampukiri", $event.target.value);
      }, _vm.hasiluji]
    }
  }), _vm._v(" "), _vm.errors.alatuji_lampuutamapenyimpanganlampukiri ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_lampuutamapenyimpanganlampukiri[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group",
    staticStyle: {
      "margin-top": "35px"
    }
  }, [_c('button', {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      "disabled": _vm.laikjalan.status_penyimpanganlampu == '1'
    },
    on: {
      "click": function click($event) {
        return _vm.showModal('Penyimpangan lampu', 'Kanan : ' + _vm.laikjalan.alatuji_lampuutamapenyimpanganlampukanan + ' degree, Kiri : ' + _vm.laikjalan.alatuji_lampuutamapenyimpanganlampukiri + ' degree');
      }
    }
  }, [_c('i', {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c('b-modal', {
    ref: "my-modal",
    attrs: {
      "title": "Catatan Penolakan"
    },
    on: {
      "ok": _vm.submit
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatan.nama,
      expression: "catatan.nama"
    }],
    staticClass: "form-control form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.catatan.nama
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-12 col-form-label"
  }, [_c('div', {
    staticClass: "checkbox-list"
  }, _vm._l(_vm.alasan, function (item) {
    return _c('label', {
      key: item.id,
      staticClass: "checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.catatan.alasan,
        expression: "catatan.alasan"
      }],
      attrs: {
        "type": "checkbox",
        "id": item.id
      },
      domProps: {
        "value": item.alasanpenolakan,
        "checked": Array.isArray(_vm.catatan.alasan) ? _vm._i(_vm.catatan.alasan, item.alasanpenolakan) > -1 : _vm.catatan.alasan
      },
      on: {
        "change": function change($event) {
          var $$a = _vm.catatan.alasan,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = item.alasanpenolakan,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.catatan, "alasan", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.catatan, "alasan", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.catatan, "alasan", $$c);
          }
        }
      }
    }), _vm._v(" "), _c('span'), _vm._v("\n                        " + _vm._s(item.alasanpenolakan) + "\n                    ")]);
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleSelect1"
    }
  }, [_vm._v("Rekomendasi Perbaikan "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatan.rekomendasi,
      expression: "catatan.rekomendasi"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "exampleSelect1"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.catatan, "rekomendasi", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.lain]
    }
  }, [_c('option', [_vm._v("Perbaikan")]), _vm._v(" "), _c('option', [_vm._v("Penggantian")]), _vm._v(" "), _c('option', [_vm._v("Penyetelan")]), _vm._v(" "), _c('option', [_vm._v("Lain-lain")])]), _vm._v(" "), _vm.lainlain ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatan.rekomendasi,
      expression: "catatan.rekomendasi"
    }],
    staticClass: "form-control form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.catatan.rekomendasi
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "rekomendasi", $event.target.value);
      }
    }
  }) : _vm._e()])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=template&id=ebfaff3c":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=template&id=ebfaff3c ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Side Slip (mm/m)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_kincuprodadepan,
      expression: "laikjalan.alatuji_kincuprodadepan"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_kincuprodadepan > 5 || _vm.laikjalan.alatuji_kincuprodadepan < -5 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;',
    attrs: {
      "type": "number",
      "name": "alatuji_kincuprodadepan"
    },
    domProps: {
      "value": _vm.laikjalan.alatuji_kincuprodadepan
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('alatuji_kincuprodadepan');
      },
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_kincuprodadepan", $event.target.value);
      }, _vm.hasiluji]
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-danger btn-sm",
    staticStyle: {
      "margin-top": "35px"
    },
    attrs: {
      "disabled": _vm.laikjalan.status_kincuprodadepan == '1'
    },
    on: {
      "click": function click($event) {
        return _vm.showModal('Kincup roda depan', _vm.laikjalan.alatuji_kincuprodadepan + ' MM/M');
      }
    }
  }, [_c('i', {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c('b-modal', {
    ref: "my-modal",
    attrs: {
      "title": "Catatan Penolakan"
    },
    on: {
      "ok": _vm.submit
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatan.nama,
      expression: "catatan.nama"
    }],
    staticClass: "form-control form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.catatan.nama
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-12 col-form-label"
  }, [_c('div', {
    staticClass: "checkbox-list"
  }, _vm._l(_vm.alasan, function (item) {
    return _c('label', {
      key: item.id,
      staticClass: "checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.catatan.alasan,
        expression: "catatan.alasan"
      }],
      attrs: {
        "type": "checkbox",
        "id": item.id
      },
      domProps: {
        "value": item.alasanpenolakan,
        "checked": Array.isArray(_vm.catatan.alasan) ? _vm._i(_vm.catatan.alasan, item.alasanpenolakan) > -1 : _vm.catatan.alasan
      },
      on: {
        "change": function change($event) {
          var $$a = _vm.catatan.alasan,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = item.alasanpenolakan,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.catatan, "alasan", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.catatan, "alasan", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.catatan, "alasan", $$c);
          }
        }
      }
    }), _vm._v(" "), _c('span'), _vm._v("\n                        " + _vm._s(item.alasanpenolakan) + "\n                    ")]);
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleSelect1"
    }
  }, [_vm._v("Rekomendasi Perbaikan "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatan.rekomendasi,
      expression: "catatan.rekomendasi"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "exampleSelect1"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.catatan, "rekomendasi", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.lain]
    }
  }, [_c('option', [_vm._v("Perbaikan")]), _vm._v(" "), _c('option', [_vm._v("Penggantian")]), _vm._v(" "), _c('option', [_vm._v("Penyetelan")]), _vm._v(" "), _c('option', [_vm._v("Lain-lain")])]), _vm._v(" "), _vm.lainlain ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatan.rekomendasi,
      expression: "catatan.rekomendasi"
    }],
    staticClass: "form-control form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.catatan.rekomendasi
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "rekomendasi", $event.target.value);
      }
    }
  }) : _vm._e()])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos3/Pengujian.vue?vue&type=template&id=66cea26a":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos3/Pengujian.vue?vue&type=template&id=66cea26a ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card card-custom",
    attrs: {
      "id": "kt_card_3"
    }
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-toolbar"
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-3",
      modifiers: {
        "collapse-3": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c('i', {
    staticClass: "ki ki-arrow-down icon-nm"
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-sm mr-1",
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.back.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-arrow-left"
  }), _vm._v(" Prev\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning btn-sm mr-1",
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.next.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-arrow-right"
  }), _vm._v(" Next\n            ")])], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "visible": "",
      "id": "collapse-3"
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-2 text-center"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" No Uji")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.nouji,
      expression: "identitaskendaraan.nouji"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      "type": "text",
      "name": "nouji",
      "readonly": "",
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2 text-center"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("No Kendaraan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.noregistrasikendaraan,
      expression: "identitaskendaraan.noregistrasikendaraan"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      "type": "text",
      "name": "nokend",
      "readonly": "",
      "placeholder": " No Kendaraan"
    },
    domProps: {
      "value": _vm.identitaskendaraan.noregistrasikendaraan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "noregistrasikendaraan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 text-center"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Nama")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.nama,
      expression: "identitaskendaraan.nama"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      "type": "text",
      "name": "nama",
      "readonly": "",
      "placeholder": "nama"
    },
    domProps: {
      "value": _vm.identitaskendaraan.nama
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "nama", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2 text-center"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Th. Pembuatan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.thpembuatan,
      expression: "identitaskendaraan.thpembuatan"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      "type": "number",
      "name": "thpembuatan",
      "placeholder": "Tahun Pembuatan"
    },
    domProps: {
      "value": _vm.identitaskendaraan.thpembuatan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "thpembuatan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 text-center"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Bahan Bakar")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.bahanbakar,
      expression: "identitaskendaraan.bahanbakar"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      "type": "text",
      "name": "bahanbakar",
      "readonly": "",
      "placeholder": "JBB"
    },
    domProps: {
      "value": _vm.identitaskendaraan.bahanbakar
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "bahanbakar", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3 text-center"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Merek")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.merek,
      expression: "identitaskendaraan.merek"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      "type": "text",
      "name": "merek",
      "readonly": "",
      "placeholder": "Jenis"
    },
    domProps: {
      "value": _vm.identitaskendaraan.merek
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "merek", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 text-center"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jenis")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jenis,
      expression: "identitaskendaraan.jenis"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      "type": "text",
      "name": "jenis",
      "readonly": "",
      "placeholder": "Jenis"
    },
    domProps: {
      "value": _vm.identitaskendaraan.jenis
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jenis", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 text-center"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("No Mesin")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.nomesin,
      expression: "identitaskendaraan.nomesin"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      "type": "text",
      "name": "nomesin",
      "placeholder": "No Mesin"
    },
    domProps: {
      "value": _vm.identitaskendaraan.nomesin
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "nomesin", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.ukuranban ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.ukuranban[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 text-center"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("JBB")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jbb,
      expression: "identitaskendaraan.jbb"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      "type": "text",
      "name": "jbb",
      "placeholder": "JBB"
    },
    domProps: {
      "value": _vm.identitaskendaraan.jbb
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jbb", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jbb ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jbb[0]))]) : _vm._e()])])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "card card-custom"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_c('h3', {
    staticClass: "card-label",
    style: _vm.laikjalan.status_intensitaslampu < 1 || _vm.laikjalan.status_penyimpanganlampu < 1 ? 'background-color: #DC143C;' : 'background-color: #FFFFFF;'
  }, [_vm._v("\n                        Lampu\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-toolbar"
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-emisi",
      modifiers: {
        "collapse-emisi": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c('i', {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "collapse-emisi",
      "visible": ""
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('posLampu-form')], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card card-custom"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_c('h3', {
    staticClass: "card-label",
    style: _vm.laikjalan.alatuji_kincuprodadepan > 5 || _vm.laikjalan.alatuji_kincuprodadepan < -5 ? 'background-color: #DC143C;' : 'background-color: #FFFFFF;'
  }, [_vm._v("\n                        Side Slip\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-toolbar"
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-emisi",
      modifiers: {
        "collapse-emisi": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c('i', {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "collapse-emisi",
      "visible": ""
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('posSideslip-form')], 1)])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('br'), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pendaftaran.pos3,
      expression: "pendaftaran.pos3"
    }],
    attrs: {
      "type": "radio",
      "disabled": "",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pendaftaran.pos3, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pendaftaran, "pos3", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                        Ya\n                    ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pendaftaran.pos3,
      expression: "pendaftaran.pos3"
    }],
    attrs: {
      "type": "radio",
      "disabled": "",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pendaftaran.pos3, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pendaftaran, "pos3", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                        Tidak\n                    ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    staticStyle: {
      "width": "100%"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save"
  }), _vm._v(" Save\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-warning",
    staticStyle: {
      "width": "100%"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.close.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-close"
  }), _vm._v(" Close\n                ")])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-title"
  }, [_c('h3', {
    staticClass: "card-label"
  }, [_vm._v("Kendaraan")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-12"
  }, [_c('h3', [_vm._v("HASIL PENGUJIAN")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormLampu.vue":
/*!*************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormLampu.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLampu_vue_vue_type_template_id_2dff3c62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLampu.vue?vue&type=template&id=2dff3c62 */ "./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=template&id=2dff3c62");
/* harmony import */ var _FormLampu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLampu.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLampu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLampu_vue_vue_type_template_id_2dff3c62__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLampu_vue_vue_type_template_id_2dff3c62__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormLampu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLampu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLampu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLampu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=template&id=2dff3c62":
/*!*******************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=template&id=2dff3c62 ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLampu_vue_vue_type_template_id_2dff3c62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLampu.vue?vue&type=template&id=2dff3c62 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormLampu.vue?vue&type=template&id=2dff3c62");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLampu_vue_vue_type_template_id_2dff3c62__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLampu_vue_vue_type_template_id_2dff3c62__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormSideslip.vue":
/*!****************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormSideslip.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSideslip_vue_vue_type_template_id_ebfaff3c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSideslip.vue?vue&type=template&id=ebfaff3c */ "./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=template&id=ebfaff3c");
/* harmony import */ var _FormSideslip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSideslip.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSideslip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSideslip_vue_vue_type_template_id_ebfaff3c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSideslip_vue_vue_type_template_id_ebfaff3c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormSideslip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSideslip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSideslip.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSideslip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=template&id=ebfaff3c":
/*!**********************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=template&id=ebfaff3c ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSideslip_vue_vue_type_template_id_ebfaff3c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSideslip.vue?vue&type=template&id=ebfaff3c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormSideslip.vue?vue&type=template&id=ebfaff3c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSideslip_vue_vue_type_template_id_ebfaff3c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSideslip_vue_vue_type_template_id_ebfaff3c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/pos3/Pengujian.vue":
/*!****************************************************!*\
  !*** ./resources/js/view/pages/pos3/Pengujian.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pengujian_vue_vue_type_template_id_66cea26a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=template&id=66cea26a */ "./resources/js/view/pages/pos3/Pengujian.vue?vue&type=template&id=66cea26a");
/* harmony import */ var _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=script&lang=js */ "./resources/js/view/pages/pos3/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pengujian_vue_vue_type_template_id_66cea26a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pengujian_vue_vue_type_template_id_66cea26a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/pos3/Pengujian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/pos3/Pengujian.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/view/pages/pos3/Pengujian.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos3/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/pos3/Pengujian.vue?vue&type=template&id=66cea26a":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/pages/pos3/Pengujian.vue?vue&type=template&id=66cea26a ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_66cea26a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=template&id=66cea26a */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos3/Pengujian.vue?vue&type=template&id=66cea26a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_66cea26a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_66cea26a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);