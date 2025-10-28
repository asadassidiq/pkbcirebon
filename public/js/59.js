(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["SET_BREADCRUMB"], [{
      title: "Verifikasi Kendaraan"
    }, {
      title: "Pendaftaran Online"
    }]);
  },
  created: function created() {
    this.editPendaftaranOnline(this.$route.params.id);
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])("pendaftaranonline", ["editPendaftaranOnline", "submitApprove"])), {}, {
    submit: function submit() {
      var _this = this;
      this.submitApprove().then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          icon: 'success',
          title: 'Saved',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(_this.uuid);
        _this.$router.push({
          name: "pendaftaran.edit",
          params: {
            id: _this.uuid
          }
        });
      });
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }),
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])({
    pendaftaranonline: function pendaftaranonline(state) {
      return state.pendaftaranonline.pendaftaranonline;
    },
    approve: function approve(state) {
      return state.pendaftaranonline.approve;
    },
    uuid: function uuid(state) {
      return state.pendaftaranonline.uuid;
    }
  })),
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=template&id=022bdb0e":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=template&id=022bdb0e ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card card-custom card-sticky",
    attrs: {
      id: "kt_page_sticky_card"
    }
  }, [_vm._m(0), _vm._v(" "), _c("b-collapse", {
    attrs: {
      visible: "",
      id: "collapse-3"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Tanggal Pendaftaran")]), _vm._v(" "), _c("b-form-datepicker", {
    attrs: {
      id: "tglpendaftaranonline",
      locale: "id",
      disabled: true
    },
    model: {
      value: _vm.approve.tglpendaftaran,
      callback: function callback($$v) {
        _vm.$set(_vm.approve, "tglpendaftaran", $$v);
      },
      expression: "approve.tglpendaftaran"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Jenis Pendaftaran")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.keterangan,
      expression: "approve.keterangan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "keterangan",
      readonly: ""
    },
    domProps: {
      value: _vm.approve.keterangan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "keterangan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Waktu")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.waktu,
      expression: "approve.waktu"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: true
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.approve, "waktu", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Pagi")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Siang")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(" No Uji")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.nouji,
      expression: "approve.nouji"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "nouji",
      readonly: "",
      placeholder: "No Uji"
    },
    domProps: {
      value: _vm.approve.nouji
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "nouji", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("No Kendaraan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.noregistrasikendaraan,
      expression: "approve.noregistrasikendaraan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "noregistrasikendaraan",
      readonly: "",
      placeholder: " No Kendaraan",
      disabled: true
    },
    domProps: {
      value: _vm.approve.noregistrasikendaraan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "noregistrasikendaraan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Nama Pemohon")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.namapemohon,
      expression: "approve.namapemohon"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "namapemohon",
      readonly: "",
      placeholder: "Nama Pemohon",
      disabled: true
    },
    domProps: {
      value: _vm.approve.namapemohon
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "namapemohon", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.approve.status_data == "1" ? _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Nama Pemilik")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.nama,
      expression: "approve.nama"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "nama",
      readonly: "",
      placeholder: "Nama",
      disabled: true
    },
    domProps: {
      value: _vm.approve.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "nama", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.approve.status_data == "1" ? _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Alamat")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.alamat,
      expression: "approve.alamat"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "alamat",
      readonly: "",
      placeholder: "Alamat",
      disabled: true
    },
    domProps: {
      value: _vm.approve.alamat
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "alamat", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("No Telp")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.notelp,
      expression: "approve.notelp"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "notelp",
      readonly: "",
      placeholder: "No Telp",
      disabled: true
    },
    domProps: {
      value: _vm.approve.notelp
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "notelp", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.approve.status_data == "1" ? _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Merek")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.merek,
      expression: "approve.merek"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "merek",
      readonly: ""
    },
    domProps: {
      value: _vm.approve.merek
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "merek", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.approve.status_data == "1" ? _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Tipe")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.tipe,
      expression: "approve.tipe"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "tipe",
      readonly: ""
    },
    domProps: {
      value: _vm.approve.tipe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "tipe", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.approve.status_data == "1" ? _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Jenis")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.jenis,
      expression: "approve.jenis"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "jenis",
      readonly: ""
    },
    domProps: {
      value: _vm.approve.jenis
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "jenis", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.approve.status_data == "1" ? _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Model")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.jenis,
      expression: "approve.jenis"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "subjenis",
      readonly: ""
    },
    domProps: {
      value: _vm.approve.jenis
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "jenis", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.approve.status_data == "1" ? _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("No Rangka")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.norangka,
      expression: "approve.norangka"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "norangka",
      readonly: ""
    },
    domProps: {
      value: _vm.approve.norangka
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "norangka", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.approve.status_data == "1" ? _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("No Mesin")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.nomesin,
      expression: "approve.nomesin"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "nomesin",
      readonly: ""
    },
    domProps: {
      value: _vm.approve.nomesin
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "nomesin", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.approve.status_data == "1" ? _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Tahun Pembuatan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.thpembuatan,
      expression: "approve.thpembuatan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "thpembuatan",
      readonly: ""
    },
    domProps: {
      value: _vm.approve.thpembuatan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.approve, "thpembuatan", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 text-center"
  }, [_vm.approve.status_data == "0" ? _c("h3", {
    staticClass: "text-danger"
  }, [_vm._v("Data Kendaraan Belum terdata di Database")]) : _vm._e(), _vm._v(" "), _vm.approve.status_data == "1" ? _c("h3", {
    staticClass: "text-success"
  }, [_vm._v("Data Kendaraan terdata di Database")]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "hr-with-text"
  }, [_c("span", [_vm._v("Verifikasi Kelengkapan Berkas")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.v_stnk,
      expression: "approve.v_stnk"
    }],
    attrs: {
      type: "checkbox",
      name: "v_stnk",
      "true-value": 1,
      "false-value": 0,
      disabled: true
    },
    domProps: {
      checked: Array.isArray(_vm.approve.v_stnk) ? _vm._i(_vm.approve.v_stnk, null) > -1 : _vm._q(_vm.approve.v_stnk, 1)
    },
    on: {
      change: function change($event) {
        var $$a = _vm.approve.v_stnk,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.approve, "v_stnk", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.approve, "v_stnk", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.approve, "v_stnk", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                            STNK asli dan masih berlaku\n                        ")])])]), _vm._v(" "), _vm.approve.keterangan == "Numpang Uji Keluar" || _vm.approve.keterangan == "Uji Berkala" || _vm.approve.keterangan == "Rusak" || _vm.approve.keterangan == "Mutasi Masuk" ? _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.v_smartcard,
      expression: "approve.v_smartcard"
    }],
    attrs: {
      type: "checkbox",
      name: "v_smartcard",
      "true-value": 1,
      "false-value": 0
    },
    domProps: {
      checked: Array.isArray(_vm.approve.v_smartcard) ? _vm._i(_vm.approve.v_smartcard, null) > -1 : _vm._q(_vm.approve.v_smartcard, 1)
    },
    on: {
      change: function change($event) {
        var $$a = _vm.approve.v_smartcard,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.approve, "v_smartcard", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.approve, "v_smartcard", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.approve, "v_smartcard", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                            Kartu Uji\n                        ")])])]) : _vm._e(), _vm._v(" "), _vm.approve.keterangan == "Uji Pertama" ? _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.v_srut,
      expression: "approve.v_srut"
    }],
    attrs: {
      type: "checkbox",
      name: "v_srut",
      "true-value": 1,
      "false-value": 0
    },
    domProps: {
      checked: Array.isArray(_vm.approve.v_srut) ? _vm._i(_vm.approve.v_srut, null) > -1 : _vm._q(_vm.approve.v_srut, 1)
    },
    on: {
      change: function change($event) {
        var $$a = _vm.approve.v_srut,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.approve, "v_srut", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.approve, "v_srut", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.approve, "v_srut", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                            SRUT\n                        ")])])]) : _vm._e(), _vm._v(" "), _vm.approve.keterangan == "Mutasi Masuk" ? _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.v_suratketerangan,
      expression: "approve.v_suratketerangan"
    }],
    attrs: {
      type: "checkbox",
      name: "v_riwayat",
      "true-value": 1,
      "false-value": 0
    },
    domProps: {
      checked: Array.isArray(_vm.approve.v_suratketerangan) ? _vm._i(_vm.approve.v_suratketerangan, null) > -1 : _vm._q(_vm.approve.v_suratketerangan, 1)
    },
    on: {
      change: function change($event) {
        var $$a = _vm.approve.v_suratketerangan,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.approve, "v_suratketerangan", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.approve, "v_suratketerangan", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.approve, "v_suratketerangan", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                            Surat keterangan / persetujuan mutasi dari daerah asal dan kelengkapannya\n                        ")])])]) : _vm._e(), _vm._v(" "), _vm.approve.keterangan == "Numpang Uji Masuk" ? _c("div", {
    staticClass: "col-4"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.approve.v_suratketerangan,
      expression: "approve.v_suratketerangan"
    }],
    attrs: {
      type: "checkbox",
      name: "v_riwayat",
      "true-value": 1,
      "false-value": 0
    },
    domProps: {
      checked: Array.isArray(_vm.approve.v_suratketerangan) ? _vm._i(_vm.approve.v_suratketerangan, null) > -1 : _vm._q(_vm.approve.v_suratketerangan, 1)
    },
    on: {
      change: function change($event) {
        var $$a = _vm.approve.v_suratketerangan,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.approve, "v_suratketerangan", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.approve, "v_suratketerangan", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.approve, "v_suratketerangan", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                            Surat keterangan / persetujuan Numpang uji dari daerah asal \n                        ")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 text-right"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-light-warning mr-2",
    on: {
      click: _vm.goBack
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-sm",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-save"
  }), _vm._v(" Submit\n                    ")])])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label"
  }, [_vm._v("Data Kendaraan")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/pendaftaranonline/Approving.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/view/pages/pendaftaranonline/Approving.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Approving_vue_vue_type_template_id_022bdb0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Approving.vue?vue&type=template&id=022bdb0e */ "./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=template&id=022bdb0e");
/* harmony import */ var _Approving_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Approving.vue?vue&type=script&lang=js */ "./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Approving_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Approving_vue_vue_type_template_id_022bdb0e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Approving_vue_vue_type_template_id_022bdb0e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/pendaftaranonline/Approving.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Approving_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Approving.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Approving_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=template&id=022bdb0e":
/*!***********************************************************************************************!*\
  !*** ./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=template&id=022bdb0e ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Approving_vue_vue_type_template_id_022bdb0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Approving.vue?vue&type=template&id=022bdb0e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pendaftaranonline/Approving.vue?vue&type=template&id=022bdb0e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Approving_vue_vue_type_template_id_022bdb0e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Approving_vue_vue_type_template_id_022bdb0e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);