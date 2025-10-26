(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/js/components/util */ "./resources/js/assets/js/components/util.js");
/* harmony import */ var _assets_js_components_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/js/components/wizard */ "./resources/js/assets/js/components/wizard.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuejs-datepicker/dist/locale */ "./node_modules/vuejs-datepicker/dist/locale/index.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_6__["id"],
      disabled1: 1,
      disabled2: 1
    };
  },
  name: "Wizard-1",
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__["SET_BREADCRUMB"], [{
      title: "Pendaftaran"
    }, {
      title: "Add"
    }]);

    // Initialize form wizard
    var wizard = new _assets_js_components_wizard__WEBPACK_IMPORTED_MODULE_2__["default"]("kt_wizard_v1", {
      startStep: 1,
      // initial active step number
      clickableSteps: true // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function /*wizardObj*/
    () {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function /*wizardObj*/
    () {
      setTimeout(function () {
        _assets_js_components_util__WEBPACK_IMPORTED_MODULE_1__["default"].scrollTop();
      }, 500);
    });
  },
  created: function created() {
    this.CLEAR_FORM();
    this.getKodewilayahs();
    this.getMereks();
    this.getTipes();
    this.getJeniskendaraan();
    this.getKotas();
    if (this.$route.name == 'datapengujian.edit') {
      this.editDatapengujian(this.$route.params.id);
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])("datapengujian", ["CLEAR_FORM"])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])("datapengujian", ["updateDatapengujian", "getKodewilayahs", "getMereks", "getTipes", "getJeniskendaraan", "editDatapengujian", "getKecamatans", "getKelurahans", "getKotas"])), {}, {
    submit: function submit() {
      var _this = this;
      this.updateDatapengujian(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
          icon: 'success',
          title: 'Saved',
          showConfirmButton: false,
          timer: 1500
        });
        _this.$router.push({
          name: "datapengujian.data"
        });
      });
    },
    setKota: function setKota(value) {
      this.identitaskendaraan.kota = value.nama;
      this.getKecamatans(value.nama);
      this.disabled1 = 0;
    },
    setKecamatan: function setKecamatan(value) {
      this.identitaskendaraan.kecamatan = value.nama;
      this.getKelurahans(value.nama);
      this.disabled2 = 0;
    },
    setKelurahan: function setKelurahan(value) {
      this.identitaskendaraan.kelurahan = value.nama;
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])("datapengujian", {
    datapengujian: function datapengujian(state) {
      return state.datapengujian;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])("datapengujian", {
    kodewilayahs: function kodewilayahs(state) {
      return state.kodewilayahs;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])("datapengujian", {
    mereks: function mereks(state) {
      return state.mereks;
    },
    tipes: function tipes(state) {
      return state.tipes;
    },
    jeniskendaraan: function jeniskendaraan(state) {
      return state.jeniskendaraan;
    },
    kotas: function kotas(state) {
      return state.kotas;
    },
    kecamatans: function kecamatans(state) {
      return state.kecamatans;
    },
    kelurahans: function kelurahans(state) {
      return state.kelurahans;
    }
  })),
  components: {
    datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_5__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_7___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=template&id=037c5192":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=template&id=037c5192 ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card-body p-0"
  }, [_c('div', {
    staticClass: "wizard wizard-1",
    attrs: {
      "id": "kt_wizard_v1",
      "data-wizard-state": "step-first",
      "data-wizard-clickable": "true"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row justify-content-center my-10 px-8 my-lg-15 px-lg-10"
  }, [_c('div', {
    staticClass: "col-sm-12 col-xsm-7"
  }, [_c('form', {
    staticClass: "form",
    attrs: {
      "id": "kt_form"
    }
  }, [_c('div', {
    staticClass: "pb-5",
    attrs: {
      "data-wizard-type": "step-content",
      "data-wizard-state": "current"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tanggal Uji")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "value": _vm.datapengujian.tgluji,
      "language": _vm.id
    },
    model: {
      value: _vm.datapengujian.tgluji,
      callback: function callback($$v) {
        _vm.$set(_vm.datapengujian, "tgluji", $$v);
      },
      expression: "datapengujian.tgluji"
    }
  }), _vm._v(" "), _vm.errors.tgluji ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.tgluji[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tanggal Masa Belaku Uji")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "value": _vm.datapengujian.masaberlakuuji,
      "language": _vm.id
    },
    model: {
      value: _vm.datapengujian.masaberlakuuji,
      callback: function callback($$v) {
        _vm.$set(_vm.datapengujian, "masaberlakuuji", $$v);
      },
      expression: "datapengujian.masaberlakuuji"
    }
  }), _vm._v(" "), _vm.errors.masaberlakuuji ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.masaberlakuuji[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jenis Penerbitan")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.statuspenerbitan,
      expression: "datapengujian.statuspenerbitan"
    }],
    staticClass: "form-control",
    attrs: {
      "disabeld": ""
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.datapengujian, "statuspenerbitan", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      "value": "6"
    }
  }, [_vm._v("Mutasi Masuk")])]), _vm._v(" "), _vm.errors.statuspenerbitan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.statuspenerbitan[0]))]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "pb-5",
    attrs: {
      "data-wizard-type": "step-content"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" No Uji")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.nouji,
      expression: "datapengujian.nouji"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": "No Uji"
    },
    domProps: {
      "value": _vm.datapengujian.nouji
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "nouji", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nouji ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nouji[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("No Kendaraan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.noregistrasikendaraan,
      expression: "datapengujian.noregistrasikendaraan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": " No Kendaraan"
    },
    domProps: {
      "value": _vm.datapengujian.noregistrasikendaraan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "noregistrasikendaraan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.noregistrasikendaraan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.noregistrasikendaraan[0]))]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" Nama")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.nama,
      expression: "datapengujian.nama"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": " nama"
    },
    domProps: {
      "value": _vm.datapengujian.nama
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" No Identitas")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.noidentitaspemilik,
      expression: "datapengujian.noidentitaspemilik"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": " No Identitas"
    },
    domProps: {
      "value": _vm.datapengujian.noidentitaspemilik
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "noidentitaspemilik", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.noidentitaspemilik ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.noidentitaspemilik[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" Alamat")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alamat,
      expression: "datapengujian.alamat"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": " Alamat"
    },
    domProps: {
      "value": _vm.datapengujian.alamat
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alamat", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alamat ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alamat[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kabupaten")]), _vm._v(" "), _c('vSelect', {
    attrs: {
      "label": "nama",
      "options": _vm.kotas
    },
    on: {
      "input": _vm.setKota
    },
    model: {
      value: _vm.datapengujian.kota,
      callback: function callback($$v) {
        _vm.$set(_vm.datapengujian, "kota", $$v);
      },
      expression: "datapengujian.kota"
    }
  }), _vm._v(" "), _vm.errors.kota ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.kota[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kecamatan")]), _vm._v(" "), _c('vSelect', {
    attrs: {
      "label": "nama",
      "options": _vm.kecamatans,
      "disabled": _vm.disabled1 == 1
    },
    on: {
      "input": _vm.setKecamatan
    },
    model: {
      value: _vm.datapengujian.kecamatan,
      callback: function callback($$v) {
        _vm.$set(_vm.datapengujian, "kecamatan", $$v);
      },
      expression: "datapengujian.kecamatan"
    }
  }), _vm._v(" "), _vm.errors.kecamatan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.kecamatan[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kelurahan")]), _vm._v(" "), _c('vSelect', {
    attrs: {
      "label": "nama",
      "options": _vm.kelurahans,
      "disabled": _vm.disabled2 == 1
    },
    on: {
      "input": _vm.setKelurahan
    },
    model: {
      value: _vm.datapengujian.kelurahan,
      callback: function callback($$v) {
        _vm.$set(_vm.datapengujian, "kelurahan", $$v);
      },
      expression: "datapengujian.kelurahan"
    }
  }), _vm._v(" "), _vm.errors.Kelurahan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.Kelurahan[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("No SRUT")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.nosertifikatreg,
      expression: "datapengujian.nosertifikatreg"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": " No SRUT"
    },
    domProps: {
      "value": _vm.datapengujian.nosertifikatreg
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "nosertifikatreg", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nosertifikatreg ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nosertifikatreg[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tgl SRUT")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "value": _vm.datapengujian.tglsertifikatreg,
      "language": _vm.id
    },
    model: {
      value: _vm.datapengujian.tglsertifikatreg,
      callback: function callback($$v) {
        _vm.$set(_vm.datapengujian, "tglsertifikatreg", $$v);
      },
      expression: "datapengujian.tglsertifikatreg"
    }
  }), _vm._v(" "), _vm.errors.tglsertifikatreg ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.tglsertifikatreg[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tahun Pembuatan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.thpembuatan,
      expression: "datapengujian.thpembuatan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Tahun Pembuatan"
    },
    domProps: {
      "value": _vm.datapengujian.thpembuatan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "thpembuatan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.thpembuatan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.thpembuatan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Merek")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.merek,
      expression: "datapengujian.merek"
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
        _vm.$set(_vm.datapengujian, "merek", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.mereks, function (merek) {
    return _c('option', {
      key: merek.id,
      domProps: {
        "value": merek.merek
      }
    }, [_vm._v(_vm._s(merek.merek))]);
  }), 0), _vm._v(" "), _vm.errors.merek ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.merek[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tipe")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.tipe,
      expression: "datapengujian.tipe"
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
        _vm.$set(_vm.datapengujian, "tipe", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.tipes, function (tipe) {
    return _c('option', {
      key: tipe.id,
      domProps: {
        "value": tipe.tipe
      }
    }, [_vm._v(_vm._s(tipe.tipe))]);
  }), 0), _vm._v(" "), _vm.errors.tipe ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.tipe[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jenis")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.jenis,
      expression: "datapengujian.jenis"
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
        _vm.$set(_vm.datapengujian, "jenis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', [_vm._v("Mobil Penumpang Sedan")]), _vm._v(" "), _c('option', [_vm._v("Mobil Penumpang Bukan Sedan")]), _vm._v(" "), _c('option', [_vm._v("Mobil Bus Kecil")]), _vm._v(" "), _c('option', [_vm._v("Mobil Bus Sedang")]), _vm._v(" "), _c('option', [_vm._v("Mobil Bus Besar")]), _vm._v(" "), _c('option', [_vm._v("Mobil Bus Maxi")]), _vm._v(" "), _c('option', [_vm._v("Mobil Bus Gandeng")]), _vm._v(" "), _c('option', [_vm._v("Mobil Bus Tempel")]), _vm._v(" "), _c('option', [_vm._v("Mobil Bus Tingkat")]), _vm._v(" "), _c('option', [_vm._v("Mobil Barang Bak Terbuka")]), _vm._v(" "), _c('option', [_vm._v("Mobil Barang Bak Tertutup")]), _vm._v(" "), _c('option', [_vm._v("Mobil Tangki")]), _vm._v(" "), _c('option', [_vm._v("Mobil Penarik")]), _vm._v(" "), _c('option', [_vm._v("Kereta Gandeng Bak Terbuka")]), _vm._v(" "), _c('option', [_vm._v("Kereta Gandeng Bak Tertutup")]), _vm._v(" "), _c('option', [_vm._v("Kereta Gandeng Tangki")]), _vm._v(" "), _c('option', [_vm._v("Kereta Tempelan Bak Terbuka")]), _vm._v(" "), _c('option', [_vm._v("Kereta Tempelan Bak Tertutup")]), _vm._v(" "), _c('option', [_vm._v("Kereta Tempelan Tangki")]), _vm._v(" "), _c('option', [_vm._v("Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Terbuka")]), _vm._v(" "), _c('option', [_vm._v("Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Tertutup")]), _vm._v(" "), _c('option', [_vm._v("Kendaraan Bermotor Roda Tiga Angkutan Penumpang")]), _vm._v(" "), _c('option', [_vm._v("Kendaraan Bermotor Roda Tiga Angkutan Barang Tangki")]), _vm._v(" "), _c('option', [_vm._v("Kendaraan Khusus")])]), _vm._v(" "), _vm.errors.jenis ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jenis[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Model")]), _vm._v(" "), _c('vSelect', {
    attrs: {
      "label": "jenis",
      "options": _vm.jeniskendaraan
    },
    model: {
      value: _vm.datapengujian.model,
      callback: function callback($$v) {
        _vm.$set(_vm.datapengujian, "model", $$v);
      },
      expression: "datapengujian.model"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Isi Silinder")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.isisilinder,
      expression: "datapengujian.isisilinder"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": " Isi Silinder"
    },
    domProps: {
      "value": _vm.datapengujian.isisilinder
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "isisilinder", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.isisilinder ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.isisilinder[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Daya Motor Penggerak")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.dayamotorpenggerak,
      expression: "datapengujian.dayamotorpenggerak"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": " Daya Motor Penggerak"
    },
    domProps: {
      "value": _vm.datapengujian.dayamotorpenggerak
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "dayamotorpenggerak", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.dayamotorpenggerak ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.dayamotorpenggerak[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Nomer Mesin")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.nomesin,
      expression: "datapengujian.nomesin"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text",
      "placeholder": "Nomer Mesin"
    },
    domProps: {
      "value": _vm.datapengujian.nomesin
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "nomesin", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nomesin ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nomesin[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Nomer Rangka")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.norangka,
      expression: "datapengujian.norangka"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text",
      "placeholder": "Nomer Rangka"
    },
    domProps: {
      "value": _vm.datapengujian.norangka
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "norangka", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.norangka ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.norangka[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Bahan Bakar")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.bahanbakar,
      expression: "datapengujian.bahanbakar"
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
        _vm.$set(_vm.datapengujian, "bahanbakar", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected"
    }
  }, [_vm._v("BENSIN")]), _vm._v(" "), _c('option', [_vm._v("SOLAR")]), _vm._v(" "), _c('option', [_vm._v("GAS")])]), _vm._v(" "), _vm.errors.bahanbakar ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.bahanbakar[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Penggunaan")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.peruntukan,
      expression: "datapengujian.peruntukan"
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
        _vm.$set(_vm.datapengujian, "peruntukan", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "UMUM",
      "selected": "selected"
    }
  }, [_vm._v("UMUM")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TIDAK UMUM"
    }
  }, [_vm._v("TIDAK UMUM")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PEMERINTAH"
    }
  }, [_vm._v("PEMERINTAH")])]), _vm._v(" "), _vm.errors.peruntukan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.peruntukan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Warna")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.warna,
      expression: "datapengujian.warna"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text",
      "name": "width",
      "placeholder": "Warna"
    },
    domProps: {
      "value": _vm.datapengujian.warna
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "warna", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.warna ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.warna[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Daerah Tujuan")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.kodewilayah,
      expression: "datapengujian.kodewilayah"
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
        _vm.$set(_vm.datapengujian, "kodewilayah", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.kodewilayahs, function (kodewilayah) {
    return _c('option', {
      key: kodewilayah.kodewilayah,
      domProps: {
        "value": kodewilayah.kodewilayah
      }
    }, [_vm._v(_vm._s(kodewilayah.area_name))]);
  }), 0), _vm._v(" "), _vm.errors.kodewilayah ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.kodewilayah[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Daerah Asal")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.kodewilayahasal,
      expression: "datapengujian.kodewilayahasal"
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
        _vm.$set(_vm.datapengujian, "kodewilayahasal", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.kodewilayahs, function (kodewilayah) {
    return _c('option', {
      key: kodewilayah.kodewilayah,
      domProps: {
        "value": kodewilayah.kodewilayah
      }
    }, [_vm._v(_vm._s(kodewilayah.area_name))]);
  }), 0), _vm._v(" "), _vm.errors.kodewilayah ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.kodewilayah[0]))]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "pb-5",
    attrs: {
      "data-wizard-type": "step-content"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("JBB (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.jbb,
      expression: "datapengujian.jbb"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "JBB"
    },
    domProps: {
      "value": _vm.datapengujian.jbb
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "jbb", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jbb ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jbb[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("JBKB (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.jbkb,
      expression: "datapengujian.jbkb"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "JBKB (Kg)"
    },
    domProps: {
      "value": _vm.datapengujian.jbkb
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "jbkb", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jbkb ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jbkb[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("JBI (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.jbi,
      expression: "datapengujian.jbi"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "JBI (Kg)"
    },
    domProps: {
      "value": _vm.datapengujian.jbi
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "jbi", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jbi ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jbi[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("JBKI (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.jbki,
      expression: "datapengujian.jbki"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "JBKI (Kg)"
    },
    domProps: {
      "value": _vm.datapengujian.jbki
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "jbki", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jbki ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jbki[0]))]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("MST (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.mst,
      expression: "datapengujian.mst"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "MST"
    },
    domProps: {
      "value": _vm.datapengujian.mst
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "mst", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.mst ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.mst[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kelas Jalan Terendah")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.kelasjalanterendah,
      expression: "datapengujian.kelasjalanterendah"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "height",
      "placeholder": "Kelas Jalan Ternendah"
    },
    domProps: {
      "value": _vm.datapengujian.kelasjalanterendah
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "kelasjalanterendah", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.kelasjalanterendah ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.kelasjalanterendah[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Konfigurasi Sumbu Roda")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.konfigurasisumburoda,
      expression: "datapengujian.konfigurasisumburoda"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": "Konfigurasi Sumbu Roda"
    },
    domProps: {
      "value": _vm.datapengujian.konfigurasisumburoda
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "konfigurasisumburoda", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.konfigurasisumburoda ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.konfigurasisumburoda[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Ukuran Ban")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.ukuranban,
      expression: "datapengujian.ukuranban"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": "Ukuran Ban"
    },
    domProps: {
      "value": _vm.datapengujian.ukuranban
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "ukuranban", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.ukuranban ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.ukuranban[0]))]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu I-II (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.jaraksumbu1_2,
      expression: "datapengujian.jaraksumbu1_2"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Jarak Sumbu I-II (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.jaraksumbu1_2
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "jaraksumbu1_2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jaraksumbu1_2 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jaraksumbu1_2[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu II-III (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.jaraksumbu2_3,
      expression: "datapengujian.jaraksumbu2_3"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Jarak Sumbu II-III (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.jaraksumbu2_3
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "jaraksumbu2_3", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jaraksumbu2_3 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jaraksumbu2_3[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu III-IV (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.jaraksumbu3_4,
      expression: "datapengujian.jaraksumbu3_4"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Jarak Sumbu III-IV (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.jaraksumbu3_4
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "jaraksumbu3_4", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jaraksumbu3_4 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jaraksumbu3_4[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("P (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.p,
      expression: "datapengujian.p"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "P (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.p
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "p", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.p ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.p[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Q(mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.q,
      expression: "datapengujian.q"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Q (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.q
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "q", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.q ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.q[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("R(mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.r,
      expression: "datapengujian.r"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "R (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.r
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "r", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.r ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.r[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("A (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.a,
      expression: "datapengujian.a"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "A (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.a
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "a", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.r ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.r[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("B (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.b,
      expression: "datapengujian.b"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "B (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.b
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "b", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.r ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.r[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Ground Clearance (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.groundclearance,
      expression: "datapengujian.groundclearance"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Ground Clearance (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.groundclearance
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "groundclearance", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.groundclearance ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.groundclearance[0]))]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Daya Angkut Orang (orang)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.dayaangkutorang,
      expression: "datapengujian.dayaangkutorang"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Daya Angkut Orang (mm)"
    },
    domProps: {
      "value": _vm.datapengujian.dayaangkutorang
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "dayaangkutorang", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.dayaangkutorang ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.dayaangkutorang[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Daya Angkut Barang (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.dayaangkutbarang,
      expression: "datapengujian.dayaangkutbarang"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Daya Angkut Barang"
    },
    domProps: {
      "value": _vm.datapengujian.dayaangkutbarang
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "dayaangkutbarang", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.dayaangkutbarang ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.dayaangkutbarang[0]))]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Panjang Kendaraan (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.panjangkendaraan,
      expression: "datapengujian.panjangkendaraan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Panjang Kendaraan"
    },
    domProps: {
      "value": _vm.datapengujian.panjangkendaraan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "panjangkendaraan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.panjangkendaraan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.panjangkendaraan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Lebar Kendaraan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.lebarkendaraan,
      expression: "datapengujian.lebarkendaraan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Lebar Kendaraan"
    },
    domProps: {
      "value": _vm.datapengujian.lebarkendaraan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "lebarkendaraan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.lebarkendaraan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.lebarkendaraan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tinggi Kendaraan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.tinggikendaraan,
      expression: "datapengujian.tinggikendaraan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Tinggi Kendaraan"
    },
    domProps: {
      "value": _vm.datapengujian.tinggikendaraan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "tinggikendaraan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.tinggikendaraan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.tinggikendaraan[0]))]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Panjang Bak atau Tangki Muatan (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.panjangbakatautangki,
      expression: "datapengujian.panjangbakatautangki"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Panjang Bak atau Tangki Muatan"
    },
    domProps: {
      "value": _vm.datapengujian.panjangbakatautangki
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "panjangbakatautangki", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.panjangbakatautangki ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.panjangbakatautangki[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Lebar Bak atau Tangki Muatan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.lebarbakatautangki,
      expression: "datapengujian.lebarbakatautangki"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Lebar Bak atau Tangki Muatan"
    },
    domProps: {
      "value": _vm.datapengujian.lebarbakatautangki
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "lebarbakatautangki", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.lebarbakatautangki ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.lebarbakatautangki[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tinggi Bak atau Tangki Muatan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.tinggibakatautangki,
      expression: "datapengujian.tinggibakatautangki"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Tinggi Bak atau Tangki Muatan"
    },
    domProps: {
      "value": _vm.datapengujian.tinggibakatautangki
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "tinggibakatautangki", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.tinggibakatautangki ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.tinggibakatautangki[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Julur Depan(mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.julurdepan,
      expression: "datapengujian.julurdepan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "name": "width"
    },
    domProps: {
      "value": _vm.datapengujian.julurdepan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "julurdepan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.julurdepan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.julurdepan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Julur Belakang(mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.julurbelakang,
      expression: "datapengujian.julurbelakang"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": _vm.datapengujian.julurbelakang
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "julurbelakang", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.julurbelakang ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.julurbelakang[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 1(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.beratsumbu1,
      expression: "datapengujian.beratsumbu1"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": _vm.datapengujian.beratsumbu1
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "beratsumbu1", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu1 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu1[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 2(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.beratsumbu2,
      expression: "datapengujian.beratsumbu2"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": _vm.datapengujian.beratsumbu2
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "beratsumbu2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu2 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu2[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 3(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.beratsumbu3,
      expression: "datapengujian.beratsumbu3"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": _vm.datapengujian.beratsumbu3
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "beratsumbu3", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu3 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu3[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 4(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.beratsumbu4,
      expression: "datapengujian.beratsumbu4"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": _vm.datapengujian.beratsumbu4
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "beratsumbu4", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu4 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu4[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Kosong(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.beratkosong,
      expression: "datapengujian.beratkosong"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratkosong"
    },
    domProps: {
      "value": _vm.datapengujian.beratkosong
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "beratkosong", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratkosong ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratkosong[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jenis Rumah-rumah")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.bahan,
      expression: "datapengujian.bahan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "text",
      "name": "bahan"
    },
    domProps: {
      "value": _vm.datapengujian.bahan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "bahan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.bahan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.bahan[0]))]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "pb-5",
    attrs: {
      "data-wizard-type": "step-content"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Rem Utama (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_remutamatotalgayapengereman,
      expression: "datapengujian.alatuji_remutamatotalgayapengereman"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Utama"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_remutamatotalgayapengereman
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_remutamatotalgayapengereman", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_remutamatotalgayapengereman ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_remutamatotalgayapengereman[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Selilih Gaya Pengereman Roda Kiri dan Kanan S1 (%)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan1,
      expression: "datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan1"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Utama"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan1
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_remutamaselisihgayapengeremanrodakirikanan1", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan1 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan1[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Selilih Gaya Pengereman Roda Kiri dan Kanan S2 (%)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan2,
      expression: "datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan2"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Utama"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan2
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_remutamaselisihgayapengeremanrodakirikanan2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan2 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan2[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Selilih Gaya Pengereman Roda Kiri dan Kanan S3 (%)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan3,
      expression: "datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan3"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Utama"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan3
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_remutamaselisihgayapengeremanrodakirikanan3", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan3 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan3[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Selilih Gaya Pengereman Roda Kiri dan Kanan S4 (%)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan4,
      expression: "datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan4"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Utama"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan4
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_remutamaselisihgayapengeremanrodakirikanan4", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan4 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan4[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kekuatan Pancar Lampu Utama Kanan (cd)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_lampuutamakekuatanpancarlampukiri,
      expression: "datapengujian.alatuji_lampuutamakekuatanpancarlampukiri"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Utama"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_lampuutamakekuatanpancarlampukiri
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_lampuutamakekuatanpancarlampukiri", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_lampuutamakekuatanpancarlampukiri ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_lampuutamakekuatanpancarlampukiri[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kekuatan Pancar Lampu Utama Kiri (cd)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_lampuutamakekuatanpancarlampukiri,
      expression: "datapengujian.alatuji_lampuutamakekuatanpancarlampukiri"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Utama"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_lampuutamakekuatanpancarlampukiri
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_lampuutamakekuatanpancarlampukiri", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_lampuutamakekuatanpancarlampukiri ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_lampuutamakekuatanpancarlampukiri[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Penyimpangan Lampu ke Kanan (degree/menit)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_lampuutamapenyimpanganlampukanan,
      expression: "datapengujian.alatuji_lampuutamapenyimpanganlampukanan"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Utama"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_lampuutamapenyimpanganlampukanan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_lampuutamapenyimpanganlampukanan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_lampuutamapenyimpanganlampukanan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_lampuutamapenyimpanganlampukanan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Penyimpangan Lampu ke Kiri (degree/menit)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_lampuutamapenyimpanganlampukiri,
      expression: "datapengujian.alatuji_lampuutamapenyimpanganlampukiri"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Utama"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_lampuutamapenyimpanganlampukiri
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_lampuutamapenyimpanganlampukiri", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_lampuutamapenyimpanganlampukiri ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_lampuutamapenyimpanganlampukiri[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("EMISI GAS BUANG ASAP (HSU)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_emisiasapbahanbakarsolar,
      expression: "datapengujian.alatuji_emisiasapbahanbakarsolar"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "EMISI GAS BUANG ASAP"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_emisiasapbahanbakarsolar
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_emisiasapbahanbakarsolar", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_emisiasapbahanbakarsolar ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_emisiasapbahanbakarsolar[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("EMISI GAS BUANG CO (%)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_emisicobahanbakarbensin,
      expression: "datapengujian.alatuji_emisicobahanbakarbensin"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "EMISI GAS BUANG CO"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_emisicobahanbakarbensin
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_emisicobahanbakarbensin", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_emisicobahanbakarbensin ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_emisicobahanbakarbensin[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("EMISI GAS BUANG HC (%)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.alatuji_emisihcbahanbakarbensin,
      expression: "datapengujian.alatuji_emisihcbahanbakarbensin"
    }],
    staticClass: "form-control form-control-solid form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "EMISI GAS BUANG HC"
    },
    domProps: {
      "value": _vm.datapengujian.alatuji_emisihcbahanbakarbensin
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datapengujian, "alatuji_emisihcbahanbakarbensin", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_emisihcbahanbakarbensin ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_emisihcbahanbakarbensin[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "penguji"
    }
  }, [_vm._v("Nama Verifikator")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datapengujian.idpetugasuji,
      expression: "datapengujian.idpetugasuji"
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
        _vm.$set(_vm.datapengujian, "idpetugasuji", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected",
      "value": "121"
    }
  }, [_vm._v("JUNAEDHI, A.Ma.PKB, SE, MM")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "122"
    }
  }, [_vm._v("DENIS SARTONO, A.Ma. PKB")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "123"
    }
  }, [_vm._v("SURAMIN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "367"
    }
  }, [_vm._v("SUNARDI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "913"
    }
  }, [_vm._v("WIDHI EKA OKTAVIANTO, A.Ma PKB., ST")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1284"
    }
  }, [_vm._v("TRI SUKARNO,A.Md.PKB")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between border-top pt-10"
  }, [_vm._m(1), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "btn btn-success font-weight-bold text-uppercase px-9 py-4",
    attrs: {
      "data-wizard-type": "action-submit"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n                  Submit\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary font-weight-bold text-uppercase px-9 py-4",
    attrs: {
      "data-wizard-type": "action-next"
    }
  }, [_vm._v("\n                  Next Step\n                ")])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wizard-nav border-bottom"
  }, [_c('div', {
    staticClass: "wizard-steps p-8 p-lg-10"
  }, [_c('div', {
    staticClass: "wizard-step",
    attrs: {
      "data-wizard-type": "step",
      "data-wizard-state": "current"
    }
  }, [_c('div', {
    staticClass: "wizard-label"
  }, [_c('i', {
    staticClass: "wizard-icon flaticon-list"
  }), _vm._v(" "), _c('h3', {
    staticClass: "wizard-title"
  }, [_vm._v("1. Pendaftaran")])]), _vm._v(" "), _c('i', {
    staticClass: "wizard-arrow flaticon2-next"
  })]), _vm._v(" "), _c('div', {
    staticClass: "wizard-step",
    attrs: {
      "data-wizard-type": "step"
    }
  }, [_c('div', {
    staticClass: "wizard-label"
  }, [_c('i', {
    staticClass: "wizard-icon flaticon2-user"
  }), _vm._v(" "), _c('h3', {
    staticClass: "wizard-title"
  }, [_vm._v("2. Identitas")])]), _vm._v(" "), _c('i', {
    staticClass: "wizard-arrow flaticon2-next"
  })]), _vm._v(" "), _c('div', {
    staticClass: "wizard-step",
    attrs: {
      "data-wizard-type": "step"
    }
  }, [_c('div', {
    staticClass: "wizard-label"
  }, [_c('i', {
    staticClass: "wizard-icon flaticon2-lorry"
  }), _vm._v(" "), _c('h3', {
    staticClass: "wizard-title"
  }, [_vm._v("3. Data Kendaraan")])]), _vm._v(" "), _c('i', {
    staticClass: "wizard-arrow flaticon2-next"
  })]), _vm._v(" "), _c('div', {
    staticClass: "wizard-step",
    attrs: {
      "data-wizard-type": "step"
    }
  }, [_c('div', {
    staticClass: "wizard-label"
  }, [_c('i', {
    staticClass: "wizard-icon flaticon2-website"
  }), _vm._v(" "), _c('h3', {
    staticClass: "wizard-title"
  }, [_vm._v("4. Pengujian")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mr-2"
  }, [_c('button', {
    staticClass: "btn btn-light-primary font-weight-bold text-uppercase px-9 py-4",
    attrs: {
      "data-wizard-type": "action-prev"
    }
  }, [_vm._v("\n                  Previous\n                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wizard.wizard-1 .wizard-nav .wizard-steps {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n  margin-left: 3.5rem;\n  margin-right: 3.5rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n  color: #B5B5C3;\n  font-size: 3.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #B5B5C3;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n  color: #7E8299;\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin-top: 0.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n  color: #7E8299;\n  font-size: 1.25rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n  display: none;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon {\n  color: #3699FF;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon svg g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #3699FF;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-icon svg:hover g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-icon svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-label .wizard-title, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-label .wizard-title {\n  color: #3699FF;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow, .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow {\n  color: #3699FF;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow svg g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow svg g [fill] {\n  transition: fill 0.3s ease;\n  fill: #3699FF;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=done] .wizard-arrow svg:hover g [fill], .wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step[data-wizard-state=current] .wizard-arrow svg:hover g [fill] {\n  transition: fill 0.3s ease;\n}\n@media (min-width: 768px) and (max-width: 1199.98px) {\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n    font-size: 3.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-title {\n    margin-top: 0.75rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n    font-size: 1.1rem;\n}\n}\n@media (max-width: 767.98px) {\n.wizard.wizard-1 .wizard-nav .wizard-steps {\n    flex-direction: column;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label {\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    margin-left: 0;\n    margin-right: 0;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-label .wizard-icon {\n    font-size: 1.5rem;\n    margin-right: 1.25rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow {\n    font-size: 1rem;\n}\n.wizard.wizard-1 .wizard-nav .wizard-steps .wizard-step .wizard-arrow.last {\n    display: block;\n}\n}\n.image-input {\n  position: relative;\n  display: inline-block;\n  border-radius: 0.42rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.image-input .image-input-wrapper {\n  width: 120px;\n  height: 120px;\n  border-radius: 0.42rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.image-input [data-action=change] {\n  cursor: pointer;\n  position: absolute;\n  right: -10px;\n  top: -10px;\n}\n.image-input [data-action=change] input {\n  width: 0 !important;\n  height: 0 !important;\n  overflow: hidden;\n  opacity: 0;\n}\n.image-input [data-action=cancel],\n.image-input [data-action=remove] {\n  position: absolute;\n  right: -10px;\n  bottom: -5px;\n}\n.image-input [data-action=cancel] {\n  display: none;\n}\n.image-input.image-input-changed [data-action=cancel] {\n  display: flex;\n}\n.image-input.image-input-changed [data-action=remove] {\n  display: none;\n}\n.image-input.image-input-empty [data-action=remove],\n.image-input.image-input-empty [data-action=cancel] {\n  display: none;\n}\n.image-input.image-input-circle {\n  border-radius: 50%;\n}\n.image-input.image-input-circle .image-input-wrapper {\n  border-radius: 50%;\n}\n.image-input.image-input-circle [data-action=change] {\n  right: 5px;\n  top: 5px;\n}\n.image-input.image-input-circle [data-action=cancel],\n.image-input.image-input-circle [data-action=remove] {\n  right: 5px;\n  bottom: 5px;\n}\n.image-input.image-input-outline .image-input-wrapper {\n  border: 3px solid #ffffff;\n  box-shadow: 0 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.075);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/view/pages/datapengujian/Edit.vue":
/*!********************************************************!*\
  !*** ./resources/js/view/pages/datapengujian/Edit.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_037c5192__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=037c5192 */ "./resources/js/view/pages/datapengujian/Edit.vue?vue&type=template&id=037c5192");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/view/pages/datapengujian/Edit.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_037c5192_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss */ "./resources/js/view/pages/datapengujian/Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_037c5192__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_037c5192__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/datapengujian/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/datapengujian/Edit.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/view/pages/datapengujian/Edit.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/datapengujian/Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/view/pages/datapengujian/Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_037c5192_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=style&index=0&id=037c5192&lang=scss");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_037c5192_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_037c5192_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_037c5192_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_037c5192_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/view/pages/datapengujian/Edit.vue?vue&type=template&id=037c5192":
/*!**************************************************************************************!*\
  !*** ./resources/js/view/pages/datapengujian/Edit.vue?vue&type=template&id=037c5192 ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_037c5192__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=037c5192 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datapengujian/Edit.vue?vue&type=template&id=037c5192");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_037c5192__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_037c5192__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);