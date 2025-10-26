(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Form.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/verif/Form.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale */ "./node_modules/vuejs-datepicker/dist/locale/index.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_1__["id"],
      sktl: "2"
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])("verif", {
    pengujian: function pengujian(state) {
      return state.pengujian;
    },
    identitaskendaraan: function identitaskendaraan(state) {
      return state.identitaskendaraan;
    },
    kuotas: function kuotas(state) {
      return state.kuota;
    },
    catatanpos: function catatanpos(state) {
      return state.catatanpos;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(["currentUserPersonalInfo"])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])("verif", ["CLEAR_FORM"])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])("verif", ["submitVerif", "getKuota", "getCatatanPos"])), {}, {
    submit: function submit() {
      var _this = this;
      this.submitVerif(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        _this.$router.push({
          name: "verif.data"
        });
      });
    },
    printsktl: function printsktl(id) {
      if (this.sktl == 0) {
        window.open("/cetak/" + this.$route.params.id + "/sktl", "_blank");
      } else {
        window.open("/cetak/" + this.$route.params.id + "/lhp", "_blank");
      }
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  },
  created: function created() {
    this.CLEAR_FORM();
    this.getKuota();
    this.getCatatanPos(this.$route.params.id);
  },
  components: {
    datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Pengujian.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/verif/Pengujian.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/view/pages/verif/Form.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      image: "no image.jpg",
      sktl: 0,
      timestamp: Date.now(),
      size: {
        width: 200,
        height: 200
      }
    };
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__["SET_BREADCRUMB"], [{
      title: "Verifikator"
    }, {
      title: "Pengujian"
    }]);
  },
  created: function created() {
    var _this = this;
    this.getIdentitaskendaraan(this.$route.params.id).then(function () {
      _this.editVerif(_this.$route.params.id).then(function () {
        _this.getKuota();
      });
    });
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("verif", ["submitVerif", "getIdentitaskendaraan", "editVerif", "ulangiFoto", "getKuota"])), {}, {
    submit: function submit() {
      var _this2 = this;
      this.submitVerif(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        _this2.$router.push({
          name: "verif.data"
        });
      });
    },
    showModalVerif: function showModalVerif() {
      if (this.pengujian.verif == 0) {
        this.$refs['modal-scrollable'].show();
      } else {
        this.submit();
      }
    },
    print: function print(id) {
      var _this3 = this;
      this.submitVerif(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        if (_this3.sktl == 0) {
          window.open("/cetak/" + _this3.$route.params.id + "/sktl", "_blank");
        } else if (_this3.sktl == 1) {
          window.open("/cetak/" + _this3.$route.params.id + "/lhp", "_blank");
        } else if (_this3.sktl == 2) {
          window.open("/cetak/" + _this3.$route.params.id + "/penolakan", "_blank");
        }
        _this3.$router.push({
          name: "verif.data"
        });
      });
    },
    uploadfoto: function uploadfoto() {
      window.open("/upload/" + this.$route.params.id + "/fotokendaraan", "_blank");
    },
    ulangiFotoKendaraan: function ulangiFotoKendaraan() {
      this.ulangiFoto(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: "",
          text: "Data Kendaraan Sudah kembali ke Pos Foto",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  }),
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])({
    identitaskendaraan: function identitaskendaraan(state) {
      return state.verif.identitaskendaraan;
    },
    kuotas: function kuotas(state) {
      return state.verif.kuota;
    },
    pengujian: function pengujian(state) {
      return state.verif.pengujian;
    }
  })),
  components: {
    "verif-form": _Form_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Form.vue?vue&type=template&id=73a5094c":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/verif/Form.vue?vue&type=template&id=73a5094c ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  }, [_c('label', [_vm._v("Uji Visual, Dimensi, Bagian Bawah dan Ban")]), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos1,
      expression: "pengujian.pos1"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos1, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos1", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Lulus\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos1,
      expression: "pengujian.pos1"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos1, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos1", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Tidak Lulus\n                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "to": {
        name: 'pos1.pengujian'
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Revisi\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Hasil Uji")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.hasilujipos1,
      expression: "pengujian.hasilujipos1"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.pengujian.hasilujipos1
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "hasilujipos1", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatanpos.pos1,
      expression: "catatanpos.pos1"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.catatanpos.pos1
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatanpos, "pos1", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kebisingan")]), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos2,
      expression: "pengujian.pos2"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos2, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos2", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Lulus\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos2,
      expression: "pengujian.pos2"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos2, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos2", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Tidak Lulus\n                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "to": {
        name: 'pos2.pengujian'
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Revisi\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Hasil Uji")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.hasilujipos2,
      expression: "pengujian.hasilujipos2"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.pengujian.hasilujipos2
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "hasilujipos2", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatanpos.pos2,
      expression: "catatanpos.pos2"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.catatanpos.pos2
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatanpos, "pos2", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Emisi")]), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos3,
      expression: "pengujian.pos3"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos3, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos3", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Lulus\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos3,
      expression: "pengujian.pos3"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos3, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos3", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Tidak Lulus\n                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "to": {
        name: 'pos3.pengujian'
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Revisi\n                ")])], 1), _vm._v(" "), _vm.errors.pos3 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v("\n                " + _vm._s(_vm.errors.pos3[0]) + "\n            ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Hasil Uji")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.hasilujipos3,
      expression: "pengujian.hasilujipos3"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.pengujian.hasilujipos3
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "hasilujipos3", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatanpos.pos3,
      expression: "catatanpos.pos3"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.catatanpos.pos3
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatanpos, "pos3", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Lampu")]), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos4,
      expression: "pengujian.pos4"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos4, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos4", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Lulus\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos4,
      expression: "pengujian.pos4"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos4, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos4", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Tidak Lulus\n                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "to": {
        name: 'pos4.pengujian'
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Revisi\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Hasil Uji")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.hasilujipos4,
      expression: "pengujian.hasilujipos4"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.pengujian.hasilujipos4
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "hasilujipos4", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatanpos.pos4,
      expression: "catatanpos.pos4"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.catatanpos.pos4
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatanpos, "pos4", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Sideslip")]), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos5,
      expression: "pengujian.pos5"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos5, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos5", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Lulus\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos5,
      expression: "pengujian.pos5"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos5, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos5", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Tidak Lulus\n                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "to": {
        name: 'pos5.pengujian'
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Revisi\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Hasil Uji")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.hasilujipos5,
      expression: "pengujian.hasilujipos5"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.pengujian.hasilujipos5
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "hasilujipos5", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatanpos.pos5,
      expression: "catatanpos.pos5"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.catatanpos.pos5
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatanpos, "pos5", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Timbangan")]), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos6,
      expression: "pengujian.pos6"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos6, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos6", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Lulus\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos6,
      expression: "pengujian.pos6"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos6, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos6", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Tidak Lulus\n                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "to": {
        name: 'pos6.pengujian'
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Revisi\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Hasil Uji")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.hasilujipos6,
      expression: "pengujian.hasilujipos6"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.pengujian.hasilujipos6
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "hasilujipos6", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatanpos.pos6,
      expression: "catatanpos.pos6"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.catatanpos.pos6
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatanpos, "pos6", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Rem")]), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos7,
      expression: "pengujian.pos7"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos7, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos7", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Lulus\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos7,
      expression: "pengujian.pos7"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos7, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos7", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Tidak Lulus\n                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "to": {
        name: 'pos7.pengujian'
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Revisi\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Hasil Uji")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.hasilujipos7,
      expression: "pengujian.hasilujipos7"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.pengujian.hasilujipos7
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "hasilujipos7", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatanpos.pos7,
      expression: "catatanpos.pos7"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.catatanpos.pos7
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatanpos, "pos7", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Speedometer")]), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos8,
      expression: "pengujian.pos8"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos8, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos8", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Lulus\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.pos8,
      expression: "pengujian.pos8"
    }],
    attrs: {
      "type": "radio",
      "disabled": "disabled",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.pos8, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "pos8", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Tidak Lulus\n                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "to": {
        name: 'pos8.pengujian'
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Revisi\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Hasil Uji")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.hasilujipos8,
      expression: "pengujian.hasilujipos8"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.pengujian.hasilujipos8
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "hasilujipos8", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatanpos.pos8,
      expression: "catatanpos.pos8"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm.catatanpos.pos8
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatanpos, "pos8", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.jenis_cetak,
      expression: "pengujian.jenis_cetak"
    }],
    attrs: {
      "type": "radio",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.jenis_cetak, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "jenis_cetak", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                Full Cycle\n            ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.jenis_cetak,
      expression: "pengujian.jenis_cetak"
    }],
    attrs: {
      "type": "radio",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.jenis_cetak, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "jenis_cetak", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                Non Full Cycle\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.verif,
      expression: "pengujian.verif"
    }],
    attrs: {
      "type": "radio",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.verif, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "verif", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Lulus\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.verif,
      expression: "pengujian.verif"
    }],
    attrs: {
      "type": "radio",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.pengujian.verif, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.pengujian, "verif", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    Tidak Lulus\n                ")])]), _vm._v(" "), _vm.errors.verif ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v("\n                " + _vm._s(_vm.errors.verif[0]) + "\n            ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.catatanverif,
      expression: "pengujian.catatanverif"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3"
    },
    domProps: {
      "value": _vm.pengujian.catatanverif
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "catatanverif", $event.target.value);
      }
    }
  })])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-12"
  }, [_c('hr')]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', [_c('b', [_vm._v("Jenis Cetak Blue")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', [_c('b', [_vm._v("Hasil Keseluruhan")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Pengujian.vue?vue&type=template&id=477137cd":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/verif/Pengujian.vue?vue&type=template&id=477137cd ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card card-custom card-sticky",
    attrs: {
      "id": "kt_page_sticky_card"
    }
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-toolbar"
  }, [_c('router-link', {
    staticClass: "btn btn-sm btn-light-success",
    attrs: {
      "to": {
        name: 'datakendaraan.edit',
        params: {
          id: _vm.identitaskendaraan.uuid
        }
      }
    }
  }, [_vm._v("Datakendaraan\n            ")]), _vm._v(" "), _c('b-button', {
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
    staticClass: "btn btn-primary btn-sm",
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.showModalVerif.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save"
  }), _vm._v(" Save\n            ")])], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "visible": "",
      "id": "collapse-3"
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
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
      "name": "width",
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
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("No Kendaraan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.noregistrasikendaraan,
      expression: "identitaskendaraan.noregistrasikendaraan\n                                "
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "width",
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
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jenis Pendaftaran")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.keterangan,
      expression: "identitaskendaraan.keterangan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "width",
      "readonly": ""
    },
    domProps: {
      "value": _vm.identitaskendaraan.keterangan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "keterangan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("No Rangka")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.norangka,
      expression: "identitaskendaraan.norangka"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "width",
      "readonly": ""
    },
    domProps: {
      "value": _vm.identitaskendaraan.norangka
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "norangka", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("No Mesin")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.nomesin,
      expression: "identitaskendaraan.nomesin"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "width",
      "readonly": ""
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" JBB ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jbb,
      expression: "identitaskendaraan.jbb"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "length",
      "readonly": "",
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
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Merek")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.merek,
      expression: "identitaskendaraan.merek"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "width",
      "readonly": "",
      "placeholder": "merek"
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
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tipe")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.tipe,
      expression: "identitaskendaraan.tipe"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "width",
      "readonly": "",
      "placeholder": "tipe"
    },
    domProps: {
      "value": _vm.identitaskendaraan.tipe
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "tipe", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" Jenis ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jenis,
      expression: "identitaskendaraan.jenis"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "width",
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
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" Peruntukan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.peruntukan,
      expression: "identitaskendaraan.peruntukan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "length",
      "readonly": "",
      "placeholder": "Peruntukan"
    },
    domProps: {
      "value": _vm.identitaskendaraan.peruntukan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "peruntukan", $event.target.value);
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('h2', [_vm._v("Foto Kendaraan Belum Verif")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c('img', _vm._b({
    attrs: {
      "src": '/tmp_images/' + _vm.identitaskendaraan.nouji + '-tampakdepan.jpg?r=' + _vm.timestamp
    }
  }, 'img', _vm.size, false)), _vm._v(" "), _c('p', [_vm._v("Tampak Depan")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c('img', _vm._b({
    attrs: {
      "src": '/tmp_images/' + _vm.identitaskendaraan.nouji + '-tampakbelakang.jpg?r=' + _vm.timestamp
    }
  }, 'img', _vm.size, false)), _vm._v(" "), _c('p', [_vm._v("Tampak Belakang")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c('img', _vm._b({
    attrs: {
      "src": '/tmp_images/' + _vm.identitaskendaraan.nouji + '-tampakkanan.jpg?r=' + _vm.timestamp
    }
  }, 'img', _vm.size, false)), _vm._v(" "), _c('p', [_vm._v("Tampak Kanan")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c('img', _vm._b({
    attrs: {
      "src": '/tmp_images/' + _vm.identitaskendaraan.nouji + '-tampakkiri.jpg?r=' + _vm.timestamp
    }
  }, 'img', _vm.size, false)), _vm._v(" "), _c('p', [_vm._v("Tampak Kiri")])])]), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('h2', [_vm._v("Foto Kendaraan Verif")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c('img', _vm._b({
    attrs: {
      "src": '/normal_images/' + _vm.identitaskendaraan.nouji + '-tampakdepan.jpg?r=' + _vm.timestamp
    }
  }, 'img', _vm.size, false)), _vm._v(" "), _c('p', [_vm._v("Tampak Depan")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c('img', _vm._b({
    attrs: {
      "src": '/normal_images/' + _vm.identitaskendaraan.nouji + '-tampakbelakang.jpg?r=' + _vm.timestamp
    }
  }, 'img', _vm.size, false)), _vm._v(" "), _c('p', [_vm._v("Tampak Belakang")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c('img', _vm._b({
    attrs: {
      "src": '/normal_images/' + _vm.identitaskendaraan.nouji + '-tampakkanan.jpg?r=' + _vm.timestamp
    }
  }, 'img', _vm.size, false)), _vm._v(" "), _c('p', [_vm._v("Tampak Kanan")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c('img', _vm._b({
    attrs: {
      "src": '/normal_images/' + _vm.identitaskendaraan.nouji + '-tampakkiri.jpg?r=' + _vm.timestamp
    }
  }, 'img', _vm.size, false)), _vm._v(" "), _c('p', [_vm._v("Tampak Kiri")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 col-sm-12 text-center"
  }, [_c('a', {
    staticClass: "btn btn-sm btn-primary",
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.uploadfoto.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Upload Foto\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-warning",
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.ulangiFotoKendaraan.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Ulangi Foto\n                    ")])])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('verif-form')], 1), _vm._v(" "), _c('b-modal', {
    ref: "modal-scrollable",
    attrs: {
      "id": "modal-scrollable",
      "ok-only": ""
    },
    on: {
      "ok": _vm.print
    }
  }, [_c('div', {
    staticClass: "form-group row",
    staticStyle: {
      "margin-left": "25%",
      "margin-right": "25%"
    }
  }, [_c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sktl,
      expression: "sktl"
    }],
    attrs: {
      "type": "radio",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.sktl, "1")
    },
    on: {
      "change": function change($event) {
        _vm.sktl = "1";
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    CETAK LHP\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sktl,
      expression: "sktl"
    }],
    attrs: {
      "type": "radio",
      "value": "2"
    },
    domProps: {
      "checked": _vm._q(_vm.sktl, "2")
    },
    on: {
      "change": function change($event) {
        _vm.sktl = "2";
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    CETAK PENOLAKAN\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sktl,
      expression: "sktl"
    }],
    attrs: {
      "type": "radio",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.sktl, "0")
    },
    on: {
      "change": function change($event) {
        _vm.sktl = "0";
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                    TUNDA\n                ")])])]), _vm._v(" "), _vm.sktl == 0 ? _c('div', {
    staticClass: "form-group row",
    staticStyle: {
      "margin-left": "25%",
      "margin-right": "25%"
    }
  }, [_c('label', [_vm._v("Cetak SKTL")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.tglujiulang,
      expression: "pengujian.tglujiulang"
    }],
    staticClass: "form-control",
    staticStyle: {
      "width": "100%"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.pengujian, "tglujiulang", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.kuotas, function (kuota) {
    return _c('option', {
      key: kuota.id,
      domProps: {
        "value": kuota.tanggal
      }
    }, [_vm._v("\n                    " + _vm._s(kuota.tanggal) + "\n                ")]);
  }), 0)]) : _vm._e()])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-title"
  }, [_c('h3', {
    staticClass: "card-label"
  }, [_vm._v("Kendaraan")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/view/pages/verif/Form.vue":
/*!************************************************!*\
  !*** ./resources/js/view/pages/verif/Form.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_73a5094c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=73a5094c */ "./resources/js/view/pages/verif/Form.vue?vue&type=template&id=73a5094c");
/* harmony import */ var _Form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js */ "./resources/js/view/pages/verif/Form.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_73a5094c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_73a5094c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/verif/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/verif/Form.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/view/pages/verif/Form.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Form.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/verif/Form.vue?vue&type=template&id=73a5094c":
/*!******************************************************************************!*\
  !*** ./resources/js/view/pages/verif/Form.vue?vue&type=template&id=73a5094c ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_73a5094c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=73a5094c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Form.vue?vue&type=template&id=73a5094c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_73a5094c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_73a5094c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/verif/Pengujian.vue":
/*!*****************************************************!*\
  !*** ./resources/js/view/pages/verif/Pengujian.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pengujian_vue_vue_type_template_id_477137cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=template&id=477137cd */ "./resources/js/view/pages/verif/Pengujian.vue?vue&type=template&id=477137cd");
/* harmony import */ var _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=script&lang=js */ "./resources/js/view/pages/verif/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pengujian_vue_vue_type_template_id_477137cd__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pengujian_vue_vue_type_template_id_477137cd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/verif/Pengujian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/verif/Pengujian.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/view/pages/verif/Pengujian.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/verif/Pengujian.vue?vue&type=template&id=477137cd":
/*!***********************************************************************************!*\
  !*** ./resources/js/view/pages/verif/Pengujian.vue?vue&type=template&id=477137cd ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_477137cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=template&id=477137cd */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Pengujian.vue?vue&type=template&id=477137cd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_477137cd__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_477137cd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);