(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);






function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false,
      coba: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])("pos1", {
    pendaftaran: function pendaftaran(state) {
      return state.pendaftaran;
    },
    identifikasi: function identifikasi(state) {
      return state.identifikasi;
    },
    dimensi: function dimensi(state) {
      return state.dimensi;
    },
    depan: function depan(state) {
      return state.depan;
    },
    kanan: function kanan(state) {
      return state.kanan;
    },
    kiri: function kiri(state) {
      return state.kiri;
    },
    belakang: function belakang(state) {
      return state.belakang;
    },
    dalam: function dalam(state) {
      return state.dalam;
    },
    bawah: function bawah(state) {
      return state.bawah;
    },
    laikjalan: function laikjalan(state) {
      return state.laikjalan;
    },
    catatan: function catatan(state) {
      return state.catatan;
    },
    alasan: function alasan(state) {
      return state.alasan;
    },
    identitaskendaraan: function identitaskendaraan(state) {
      return state.identitaskendaraan;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapMutations"])("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapActions"])("pos1", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 1;
      this.catatan.status = 1;
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
      if (this.laikjalan.alatuji_kedalamanalurban < 1) {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.catatan.pos = 1;
        this.catatan.status = 1;
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      }
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    bancheck: function bancheck() {
      console.log(this.laikjalan.alatuji_kedalamanalurban);
      var alatuji_kedalamanalurban = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.alatuji_kedalamanalurban);
      if (!alatuji_kedalamanalurban) {
        this.laikjalan.status_alurban = '0';
        this.hasilujilajur();
        return;
      }

      // if (this.laikjalan.alatuji_kedalamanalurban < 0) {
      //   this.laikjalan.alatuji_kedalamanalurban = 0;
      // }

      if (alatuji_kedalamanalurban >= 1) this.hasilujilajur();

      // else if (this.laikjalan.alatuji_kedalamanalurban < 1 && this.laikjalan.alatuji_kedalamanalurban.length > 0) {
      //   this.laikjalan.status_alurban = '0';
      //   this.hasilujilajur();
      // } else {
      //   this.laikjalan.status_alurban = '1';
      //   this.hasilujilajur();
      // }
    },
    hasilujilajur: function hasilujilajur() {
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
  },
  created: function created() {
    this.CLEAR_CATATAN();
    this.bancheck();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false,
      coba: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos1", {
    identifikasi: function identifikasi(state) {
      return state.identifikasi;
    },
    dimensi: function dimensi(state) {
      return state.dimensi;
    },
    depan: function depan(state) {
      return state.depan;
    },
    kanan: function kanan(state) {
      return state.kanan;
    },
    kiri: function kiri(state) {
      return state.kiri;
    },
    belakang: function belakang(state) {
      return state.belakang;
    },
    dalam: function dalam(state) {
      return state.dalam;
    },
    bawah: function bawah(state) {
      return state.bawah;
    },
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos1", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 1;
      this.catatan.status = 1;
      this.getAlasan();
      this.getCatatan(this.$route.params.id);
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    hasilujiTeknis: function hasilujiTeknis(name, hasil) {
      this.CHECK_HASILUJI();
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
  },
  created: function created() {
    this.CLEAR_CATATAN();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false,
      coba: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos1", {
    identifikasi: function identifikasi(state) {
      return state.identifikasi;
    },
    dimensi: function dimensi(state) {
      return state.dimensi;
    },
    depan: function depan(state) {
      return state.depan;
    },
    kanan: function kanan(state) {
      return state.kanan;
    },
    kiri: function kiri(state) {
      return state.kiri;
    },
    belakang: function belakang(state) {
      return state.belakang;
    },
    dalam: function dalam(state) {
      return state.dalam;
    },
    bawah: function bawah(state) {
      return state.bawah;
    },
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos1", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 1;
      this.catatan.status = 1;
      this.getAlasan();
      this.getCatatan(this.$route.params.id);
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    hasilujiTeknis: function hasilujiTeknis(name, hasil) {
      this.CHECK_HASILUJI();
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
  },
  created: function created() {
    this.CLEAR_CATATAN();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false,
      coba: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos1", {
    identifikasi: function identifikasi(state) {
      return state.identifikasi;
    },
    dimensi: function dimensi(state) {
      return state.dimensi;
    },
    depan: function depan(state) {
      return state.depan;
    },
    kanan: function kanan(state) {
      return state.kanan;
    },
    kiri: function kiri(state) {
      return state.kiri;
    },
    belakang: function belakang(state) {
      return state.belakang;
    },
    dalam: function dalam(state) {
      return state.dalam;
    },
    bawah: function bawah(state) {
      return state.bawah;
    },
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos1", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 1;
      this.catatan.status = 1;
      this.getAlasan();
      this.getCatatan(this.$route.params.id);
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    hasilujiTeknis: function hasilujiTeknis(name, hasil) {
      this.CHECK_HASILUJI();
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
  },
  created: function created() {
    this.CLEAR_CATATAN();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);






function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      options: [{
        value: "1",
        text: "Sesuai"
      }, {
        value: "0",
        text: "Tidak Sesuai"
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])("pos1", {
    identifikasi: function identifikasi(state) {
      return state.identifikasi;
    },
    dimensi: function dimensi(state) {
      return state.dimensi;
    },
    depan: function depan(state) {
      return state.depan;
    },
    kanan: function kanan(state) {
      return state.kanan;
    },
    kiri: function kiri(state) {
      return state.kiri;
    },
    belakang: function belakang(state) {
      return state.belakang;
    },
    dalam: function dalam(state) {
      return state.dalam;
    },
    bawah: function bawah(state) {
      return state.bawah;
    },
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapMutations"])("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapActions"])("pos1", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 1;
      this.catatan.status = 1;
      this.getAlasan();
      this.getCatatan(this.$route.params.id);
      this.$refs["my-modal"].show();
    },
    hideModal: function hideModal() {
      this.$refs["my-modal"].hide();
    },
    lain: function lain() {
      if (this.catatan.rekomendasi == "Lain-lain") {
        this.lainlain = true;
      } else {
        this.lainlain = false;
      }
    },
    check: function check(nama, hasil) {
      if (this.laikjalan.alatuji_kedalamanalurban < 1) {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.catatan.pos = 1;
        this.catatan.status = 1;
        this.getCatatan(this.$route.params.id);
        this.$refs["my-modal"].show();
      }
    },
    setMST: function setMST() {
      if (this.identitaskendaraan.jaraksumbu2_3 > 0 || this.identitaskendaraan.jaraksumbu3_4 > 0) {
        this.identitaskendaraan.mst = Math.ceil(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.beratsumbu2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.dayaangkutbarang * (this.identitaskendaraan.q / (2 * this.identitaskendaraan.a))));
      } else if (this.identitaskendaraan.jaraksumbu1_2 > 0) {
        this.identitaskendaraan.mst = Math.ceil(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.beratsumbu2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.dayaangkutbarang * (this.identitaskendaraan.q / this.identitaskendaraan.a)));
      }
      var ambangbatasdepan = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.a) * 0.475;
      var ambangbatasbelakang = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.a) * 0.725;
      var statusFOH = 1;
      var statusROH = 1;
      if (this.identitaskendaraan.julurbelakang >= ambangbatasbelakang) {
        this.dimensi.julurbelakang = 0;
        statusROH = 0;
      }
      if (this.identitaskendaraan.julurdepan >= ambangbatasdepan) {
        this.dimensi.julurdepan = 0;
        statusFOH = 0;
      }
      if (statusFOH == 0 && statusROH == 0) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
          position: "center",
          icon: "warning",
          title: "Julur depan tidak lebih dari " + ambangbatasdepan.toFixed(2) + " mm & " + "Julur Belakang tidak lebih dari " + ambangbatasbelakang.toFixed(2) + " mm",
          showConfirmButton: false,
          timer: 1500
        });
      } else if (statusFOH == 0) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
          position: "center",
          icon: "warning",
          title: "Julur depan tidak lebih dari " + ambangbatasdepan.toFixed(2) + " mm",
          showConfirmButton: false,
          timer: 1500
        });
      } else if (statusROH == 0) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
          position: "center",
          icon: "warning",
          title: "Julur belakang tidak lebih dari " + ambangbatasbelakang.toFixed(2) + " mm",
          showConfirmButton: false,
          timer: 1500
        });
      }
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    checkPanjangknedaraan: function checkPanjangknedaraan() {
      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.panjangkendaraan) > 18000) {
        this.dimensi.panjangkendaraan = 0;
        this.dimensi.nilai_panjangkendaraan = Math.abs(this.identitaskendaraan.panjangkendaraan - 18000);
      } else {
        this.dimensi.panjangkendaraan = 1;
        this.dimensi.nilai_panjangkendaraan = 0;
      }
      this.hasilujidimensi();
    },
    checkLebarkendaraan: function checkLebarkendaraan() {
      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.lebarkendaraan) > 2550) {
        this.dimensi.lebarkendaraan = 0;
        this.dimensi.nilai_lebarkendaraan = Math.abs(this.identitaskendaraan.lebarkendaraan - 2550);
      } else {
        this.dimensi.lebarkendaraan = 1;
        this.dimensi.nilai_lebarkendaraan = 0;
      }
      this.hasilujidimensi();
    },
    checkTinggikendaraan: function checkTinggikendaraan() {
      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.tinggikendaraan) > 4200) {
        if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.tinggikendaraan) > _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.lebarkendaraan * 1.7)) {
          this.dimensi.tinggikendaraan = 0;
          this.dimensi.nilai_tinggikendaraan = Math.abs(this.identitaskendaraan.tinggikendaraan - this.identitaskendaraan.lebarkendaraan * 1.7);
        }
      } else {
        this.dimensi.tinggikendaraan = 1;
        this.dimensi.nilai_tinggikendaraan = 0;
      }
      this.hasilujidimensi();
    },
    checkPanjangBakTangki: function checkPanjangBakTangki() {
      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.panjangbakatautangki) > _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.panjangkendaraan)) {
        this.dimensi.panjangbakatautangki = 0;
        this.dimensi.nilai_panjangbakatautangki = Math.abs(this.identitaskendaraan.panjangbakatautangki - this.identitaskendaraan.panjangkendaraan);
      } else {
        this.dimensi.panjangbakatautangki = 1;
        this.dimensi.nilai_panjangbakatautangki = 0;
      }
      this.hasilujidimensi();
    },
    checkLebarBakTangki: function checkLebarBakTangki() {
      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.lebarbakatautangki) > _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.lebarkendaraan)) {
        this.dimensi.lebarbakatautangki = 0;
        this.dimensi.nilai_lebarbakatautangki = Math.abs(this.identitaskendaraan.lebarbakatautangki - this.identitaskendaraan.lebarkendaraan);
      } else {
        this.dimensi.lebarbakatautangki = 1;
        this.dimensi.nilai_lebarbakatautangki = 1;
      }
      this.hasilujidimensi();
    },
    checkTinggiBakTangki: function checkTinggiBakTangki() {
      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.tinggibakatautangki) > _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.tinggikendaraan)) {
        this.dimensi.tinggibakatautangki = 0;
        this.dimensi.nilai_tinggibakatautangki = Math.abs(this.identitaskendaraan.tinggibakatautangki - this.identitaskendaraan.tinggikendaraan);
      } else {
        this.dimensi.tinggibakatautangki = 1;
        this.dimensi.nilai_tinggibakatautangki = 0;
      }
      this.hasilujidimensi();
    },
    checkJulurDepan: function checkJulurDepan() {
      var ambangbatas = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.a) * 0.475;
      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.julurdepan) >= ambangbatas) {
        this.dimensi.julurdepan = 0;
        this.dimensi.nilai_julurdepan = Math.abs(ambangbatas.toFixed(2) - this.identitaskendaraan.julurdepan);
      } else {
        this.dimensi.julurdepan = 1;
        this.dimensi.nilai_julurdepan = 0;
      }
      this.hasilujidimensi();
    },
    checkJulurBelakang: function checkJulurBelakang() {
      var ambangbatas = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.identitaskendaraan.a) * 0.725;
      if (this.identitaskendaraan.julurbelakang >= ambangbatas) {
        i.julurbelakang = 0;
        this.dimensi.nilai_julurdepan = Math.abs(ambangbatas.toFixed(2) - this.identitaskendaraan.julurbelakang);
      } else {
        this.dimensi.julurbelakang = 1;
        this.dimensi.nilai_julurdepan = 0;
      }
      this.hasilujidimensi();
    },
    hasilujidimensi: function hasilujidimensi() {
      this.CHECK_HASILUJI();
    },
    handleFocus: function handleFocus(field) {
      if (this.identitaskendaraan[field] === 0 || this.identitaskendaraan[field] === "0") {
        this.identitaskendaraan[field] = '';
      }
    }
  }),
  watch: {},
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
  },
  created: function created() {
    this.CLEAR_CATATAN();
    this.hasilujidimensi();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false,
      jenisrumahrumah: ["Besi Plat", "Besi Kayu", "Bordes", "Alumunium", "Pagar Besi", "Pagar Stenlis"],
      coba: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos1", {
    identifikasi: function identifikasi(state) {
      return state.identifikasi;
    },
    dimensi: function dimensi(state) {
      return state.dimensi;
    },
    depan: function depan(state) {
      return state.depan;
    },
    kanan: function kanan(state) {
      return state.kanan;
    },
    kiri: function kiri(state) {
      return state.kiri;
    },
    belakang: function belakang(state) {
      return state.belakang;
    },
    dalam: function dalam(state) {
      return state.dalam;
    },
    bawah: function bawah(state) {
      return state.bawah;
    },
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos1", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 1;
      this.catatan.status = 1;
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
      if (this.pengujian.alatuji_kedalamanalurban < 1) {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.catatan.pos = 1;
        this.catatan.status = 1;
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      }
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    hasilujiidentifikasi: function hasilujiidentifikasi(name, hasil) {
      this.CHECK_HASILUJI();
    }
  }),
  watch: {},
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
  },
  created: function created() {
    this.CLEAR_CATATAN();
    this.hasilujiidentifikasi();
    this.pendaftaran.pos1 = '1';
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false,
      coba: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos1", {
    identifikasi: function identifikasi(state) {
      return state.identifikasi;
    },
    dimensi: function dimensi(state) {
      return state.dimensi;
    },
    depan: function depan(state) {
      return state.depan;
    },
    kanan: function kanan(state) {
      return state.kanan;
    },
    kiri: function kiri(state) {
      return state.kiri;
    },
    belakang: function belakang(state) {
      return state.belakang;
    },
    dalam: function dalam(state) {
      return state.dalam;
    },
    bawah: function bawah(state) {
      return state.bawah;
    },
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos1", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 1;
      this.catatan.status = 1;
      this.getAlasan();
      this.getCatatan(this.$route.params.id);
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    hasilujiTeknis: function hasilujiTeknis(name, hasil) {
      this.CHECK_HASILUJI();
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
  },
  created: function created() {
    this.CLEAR_CATATAN();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false,
      coba: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos1", {
    identifikasi: function identifikasi(state) {
      return state.identifikasi;
    },
    dimensi: function dimensi(state) {
      return state.dimensi;
    },
    depan: function depan(state) {
      return state.depan;
    },
    kanan: function kanan(state) {
      return state.kanan;
    },
    kiri: function kiri(state) {
      return state.kiri;
    },
    belakang: function belakang(state) {
      return state.belakang;
    },
    dalam: function dalam(state) {
      return state.dalam;
    },
    bawah: function bawah(state) {
      return state.bawah;
    },
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos1", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 1;
      this.catatan.status = 1;
      this.getAlasan();
      this.getCatatan(this.$route.params.id);
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    hasilujiTeknis: function hasilujiTeknis(name, hasil) {
      this.CHECK_HASILUJI();
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
  },
  created: function created() {
    this.CLEAR_CATATAN();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos1/Pengujian.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos1/Pengujian.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************/
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
/* harmony import */ var _formPengujian_FormIdentifikasi_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../formPengujian/FormIdentifikasi.vue */ "./resources/js/view/pages/formPengujian/FormIdentifikasi.vue");
/* harmony import */ var _formPengujian_FormDimensi_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formPengujian/FormDimensi.vue */ "./resources/js/view/pages/formPengujian/FormDimensi.vue");
/* harmony import */ var _formPengujian_FormDepan_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../formPengujian/FormDepan.vue */ "./resources/js/view/pages/formPengujian/FormDepan.vue");
/* harmony import */ var _formPengujian_FormKanan_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../formPengujian/FormKanan.vue */ "./resources/js/view/pages/formPengujian/FormKanan.vue");
/* harmony import */ var _formPengujian_FormBelakang_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../formPengujian/FormBelakang.vue */ "./resources/js/view/pages/formPengujian/FormBelakang.vue");
/* harmony import */ var _formPengujian_FormKiri_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../formPengujian/FormKiri.vue */ "./resources/js/view/pages/formPengujian/FormKiri.vue");
/* harmony import */ var _formPengujian_FormDalam_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../formPengujian/FormDalam.vue */ "./resources/js/view/pages/formPengujian/FormDalam.vue");
/* harmony import */ var _formPengujian_FormBan_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../formPengujian/FormBan.vue */ "./resources/js/view/pages/formPengujian/FormBan.vue");





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }











/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      image: "no image.jpg",
      size: {
        width: 200,
        height: 200
      }
    };
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["SET_BREADCRUMB"], [{
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])("pos1", ["submitPos", "getIdentitaskendaraan", "editPos", "CLEAR_FORM"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapMutations"])("pos1", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), {}, {
    submit: function submit() {
      this.submitPos(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    close: function close() {
      this.$router.go(-1);
    },
    back: function back() {
      this.$router.push({
        name: "pos1.pengujian",
        params: {
          id: this.$route.params.id
        }
      });
    },
    next: function next() {
      this.$router.push({
        name: "pos2.pengujian",
        params: {
          id: this.$route.params.id
        }
      });
    },
    uploadfoto: function uploadfoto() {
      window.open("/upload/" + this.$route.params.id + "/fotokendaraan", "_blank");
    },
    hasiluji: function hasiluji() {
      this.CHECK_HASILUJI();
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])({
    identitaskendaraan: function identitaskendaraan(state) {
      return state.pos1.identitaskendaraan;
    },
    pengujian: function pengujian(state) {
      return state.pos1.pengujian;
    },
    pendaftaran: function pendaftaran(state) {
      return state.pos1.pendaftaran;
    },
    identifikasi: function identifikasi(state) {
      return state.pos1.identifikasi;
    },
    dimensi: function dimensi(state) {
      return state.pos1.dimensi;
    },
    depan: function depan(state) {
      return state.pos1.depan;
    },
    kanan: function kanan(state) {
      return state.pos1.kanan;
    },
    kiri: function kiri(state) {
      return state.pos1.kiri;
    },
    belakang: function belakang(state) {
      return state.pos1.belakang;
    },
    dalam: function dalam(state) {
      return state.pos1.dalam;
    },
    laikjalan: function laikjalan(state) {
      return state.pos1.laikjalan;
    },
    status_lulusuji: function status_lulusuji(state) {
      return state.pos1.status_lulusuji;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(["currentUserPersonalInfo"])),
  components: {
    "identfikasi-form": _formPengujian_FormIdentifikasi_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    "dimensi-form": _formPengujian_FormDimensi_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    "depan-form": _formPengujian_FormDepan_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    "kanan-form": _formPengujian_FormKanan_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    "belakang-form": _formPengujian_FormBelakang_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    "kiri-form": _formPengujian_FormKiri_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    "dalam-form": _formPengujian_FormDalam_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    "ban-form": _formPengujian_FormBan_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=template&id=cfb365d8":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=template&id=cfb365d8 ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-12 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_kedalamanalurban,
      expression: "laikjalan.alatuji_kedalamanalurban"
    }],
    ref: "alatuji_kedalamanalurban",
    staticClass: "form-control",
    attrs: {
      type: "number",
      step: "0.1",
      min: "0",
      max: "500"
    },
    domProps: {
      value: _vm.laikjalan.alatuji_kedalamanalurban
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("alatuji_kedalamanalurban");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_kedalamanalurban", $event.target.value);
      }, _vm.bancheck]
    }
  }), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.status_alurban,
      expression: "laikjalan.status_alurban"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.laikjalan.status_alurban, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.laikjalan, "status_alurban", "1");
      }, _vm.hasilujilajur]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.status_alurban,
      expression: "laikjalan.status_alurban"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.laikjalan.status_alurban, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.laikjalan, "status_alurban", "0");
      }, _vm.hasilujilajur]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.laikjalan.status_alurban == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kedalaman alur ban", _vm.laikjalan.alatuji_kedalamanalurban);
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: "Alasan Penolakan"
    },
    on: {
      ok: _vm.submit
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
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
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.catatan.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-12 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, _vm._l(_vm.alasan, function (item) {
    return _c("label", {
      key: item.id,
      staticClass: "checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.catatan.alasan,
        expression: "catatan.alasan"
      }],
      attrs: {
        type: "checkbox",
        id: item.id
      },
      domProps: {
        value: item.alasanpenolakan,
        checked: Array.isArray(_vm.catatan.alasan) ? _vm._i(_vm.catatan.alasan, item.alasanpenolakan) > -1 : _vm.catatan.alasan
      },
      on: {
        change: function change($event) {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n            " + _vm._s(item.alasanpenolakan) + "\n          ")]);
  }), 0)])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-3 col-sm-12 col-form-label"
  }, [_c("label", [_c("b", [_vm._v("Kedalaman Alur Ban : ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=template&id=f00e085c":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=template&id=f00e085c ***!
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
  return _c("div", [_c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("APCT")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.apctbelakang,
      expression: "belakang.apctbelakang"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.apctbelakang, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "apctbelakang", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.apctbelakang,
      expression: "belakang.apctbelakang"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.apctbelakang, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "apctbelakang", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("APCT Bagian Belakang", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.apctbelakang == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("APCT Bagian Belakang", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Tanda Batas Belakang")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lampuposisibelakang,
      expression: "belakang.lampuposisibelakang"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lampuposisibelakang, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lampuposisibelakang", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lampuposisibelakang,
      expression: "belakang.lampuposisibelakang"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lampuposisibelakang, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lampuposisibelakang", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Tanda Batas Belakang", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.lampuposisibelakang == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Tanda Batas Belakang", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Penunjuk Arah")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lampupenunjukarah,
      expression: "belakang.lampupenunjukarah"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lampupenunjukarah, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lampupenunjukarah", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lampupenunjukarah,
      expression: "belakang.lampupenunjukarah"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lampupenunjukarah, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lampupenunjukarah", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Penunjuk Arah Belakang", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.lampupenunjukarah == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Penunjuk Arah Belakang", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Rem")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lampurem,
      expression: "belakang.lampurem"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lampurem, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lampurem", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lampurem,
      expression: "belakang.lampurem"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lampurem, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lampurem", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Rem", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.lampurem == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Rem", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Mundur")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lampumundur,
      expression: "belakang.lampumundur"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lampumundur, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lampumundur", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lampumundur,
      expression: "belakang.lampumundur"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lampumundur, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lampumundur", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Mundur", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.lampumundur == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Mundur", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu TNKB")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lamputnkb,
      expression: "belakang.lamputnkb"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lamputnkb, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lamputnkb", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lamputnkb,
      expression: "belakang.lamputnkb"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lamputnkb, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lamputnkb", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu TNKB", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.lamputnkb == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu TNKB", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Tanda Batas")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lamputandabatas,
      expression: "belakang.lamputandabatas"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lamputandabatas, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lamputandabatas", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.lamputandabatas,
      expression: "belakang.lamputandabatas"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.lamputandabatas, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "lamputandabatas", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Tanda Batas Belakang", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.lamputandabatas == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Tanda Batas Belakang", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kondisi Roda Cadangan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.kondisirodacadangan,
      expression: "belakang.kondisirodacadangan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.kondisirodacadangan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "kondisirodacadangan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.kondisirodacadangan,
      expression: "belakang.kondisirodacadangan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.kondisirodacadangan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "kondisirodacadangan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kondisi Roda Cadangan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.kondisirodacadangan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kondisi Roda Cadangan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Spakbor")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.spakbor,
      expression: "belakang.spakbor"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.spakbor, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "spakbor", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.spakbor,
      expression: "belakang.spakbor"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.spakbor, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "spakbor", "0");
      }, function ($event) {
        return _vm.hasilujiTeknisshowModal("Spakbor", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.spakbor == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Spakbor", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Sistem Pembuangan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.sistempembuangan,
      expression: "belakang.sistempembuangan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.sistempembuangan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "sistempembuangan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.belakang.sistempembuangan,
      expression: "belakang.sistempembuangan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.belakang.sistempembuangan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.belakang, "sistempembuangan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Sistem Pembuangan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.belakang.sistempembuangan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Sistem Pembuangan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: "Alasan Penolakan"
    },
    on: {
      ok: _vm.submit
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
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
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.catatan.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-12 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, _vm._l(_vm.alasan, function (item) {
    return _c("label", {
      key: item.id,
      staticClass: "checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.catatan.alasan,
        expression: "catatan.alasan"
      }],
      attrs: {
        type: "checkbox",
        id: item.id
      },
      domProps: {
        value: item.alasanpenolakan,
        checked: Array.isArray(_vm.catatan.alasan) ? _vm._i(_vm.catatan.alasan, item.alasanpenolakan) > -1 : _vm.catatan.alasan
      },
      on: {
        change: function change($event) {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                  " + _vm._s(item.alasanpenolakan) + "\n              ")]);
  }), 0)])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=template&id=3cec1bc0":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=template&id=3cec1bc0 ***!
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
  return _c("div", [_c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Ruang Kemudi")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.ruangkemudi,
      expression: "dalam.ruangkemudi"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.ruangkemudi, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "ruangkemudi", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.ruangkemudi,
      expression: "dalam.ruangkemudi"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.ruangkemudi, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "ruangkemudi", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Ruang Kemudi", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.ruangkemudi == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Ruang Kemudi", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Tempat Duduk")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.tempatduduk,
      expression: "dalam.tempatduduk"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.tempatduduk, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "tempatduduk", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.tempatduduk,
      expression: "dalam.tempatduduk"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.tempatduduk, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "tempatduduk", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Tempat Duduk", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.tempatduduk == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Tempat Duduk", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.dashboard,
      expression: "dalam.dashboard"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.dashboard, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "dashboard", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.dashboard,
      expression: "dalam.dashboard"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.dashboard, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "dashboard", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Dashboard", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.dashboard == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Dashboard", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Speedometer")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.speedometer,
      expression: "dalam.speedometer"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.speedometer, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "speedometer", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.speedometer,
      expression: "dalam.speedometer"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.speedometer, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "speedometer", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Speedometer", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.speedometer == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Speedometer", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Instrumen Panel")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.instrumenpanel,
      expression: "dalam.instrumenpanel"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.instrumenpanel, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "instrumenpanel", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.instrumenpanel,
      expression: "dalam.instrumenpanel"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.instrumenpanel, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "instrumenpanel", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Instrumen Panel", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.instrumenpanel == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Instrumen Panel", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Alat Control Lampu")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.alatcontrollampu,
      expression: "dalam.alatcontrollampu"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.alatcontrollampu, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "alatcontrollampu", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.alatcontrollampu,
      expression: "dalam.alatcontrollampu"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.alatcontrollampu, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "alatcontrollampu", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Alat Control Lampu", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.alatcontrollampu == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Alat Control Lampu", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Tabir Matahari")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.tabirmatahari,
      expression: "dalam.tabirmatahari"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.tabirmatahari, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "tabirmatahari", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.tabirmatahari,
      expression: "dalam.tabirmatahari"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.tabirmatahari, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "tabirmatahari", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Tabir Matahari", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.tabirmatahari == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Tabir Matahari", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Pandangan Kedepan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.pandangankedepan,
      expression: "dalam.pandangankedepan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.pandangankedepan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "pandangankedepan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.pandangankedepan,
      expression: "dalam.pandangankedepan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.pandangankedepan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "pandangankedepan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Pandangan Kedepan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.pandangankedepan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Pandangan Kedepan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Roda Kemudi")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.rodakemudi,
      expression: "dalam.rodakemudi"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.rodakemudi, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "rodakemudi", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.rodakemudi,
      expression: "dalam.rodakemudi"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.rodakemudi, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "rodakemudi", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Roda Kemudi", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.rodakemudi == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Roda Kemudi", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Batang Kemudi")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.batangkemudi,
      expression: "dalam.batangkemudi"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.batangkemudi, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "batangkemudi", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.batangkemudi,
      expression: "dalam.batangkemudi"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.batangkemudi, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "batangkemudi", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Batang Kemudi", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.batangkemudi == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Batang Kemudi", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Sabuk Keselamatan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.sabukkeselamatan,
      expression: "dalam.sabukkeselamatan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.sabukkeselamatan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "sabukkeselamatan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.sabukkeselamatan,
      expression: "dalam.sabukkeselamatan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.sabukkeselamatan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "sabukkeselamatan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Sabuk Keselamatan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.sabukkeselamatan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Sabuk Keselamatan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Perlengkapan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.perlengkapan,
      expression: "dalam.perlengkapan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.perlengkapan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "perlengkapan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.perlengkapan,
      expression: "dalam.perlengkapan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.perlengkapan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "perlengkapan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Perlengkapan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.perlengkapan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Perlengkapan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Rem Parkir")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.remparkir,
      expression: "dalam.remparkir"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.remparkir, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "remparkir", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.remparkir,
      expression: "dalam.remparkir"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.remparkir, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "remparkir", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Rem Parkir", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.remparkir == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Rem Parkir", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Pedal Rem Kaki")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.pedalremkaki,
      expression: "dalam.pedalremkaki"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.pedalremkaki, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "pedalremkaki", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.pedalremkaki,
      expression: "dalam.pedalremkaki"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.pedalremkaki, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "pedalremkaki", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Pedal Rem Kaki", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.pedalremkaki == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Pedal Rem Kaki", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Rem Gas Buang")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.remgasbuang,
      expression: "dalam.remgasbuang"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.remgasbuang, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "remgasbuang", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.remgasbuang,
      expression: "dalam.remgasbuang"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.remgasbuang, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "remgasbuang", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Rem Gas Buang", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.remgasbuang == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Rem Gas Buang", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Sistem Hampa/Booster")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.sistemhampa,
      expression: "dalam.sistemhampa"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.sistemhampa, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "sistemhampa", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dalam.sistemhampa,
      expression: "dalam.sistemhampa"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dalam.sistemhampa, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dalam, "sistemhampa", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Sistem Hampa", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.dalam.sistemhampa == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Sistem Hampa", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: "Alasan Penolakan"
    },
    on: {
      ok: _vm.submit
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
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
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.catatan.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-12 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, _vm._l(_vm.alasan, function (item) {
    return _c("label", {
      key: item.id,
      staticClass: "checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.catatan.alasan,
        expression: "catatan.alasan"
      }],
      attrs: {
        type: "checkbox",
        id: item.id
      },
      domProps: {
        value: item.alasanpenolakan,
        checked: Array.isArray(_vm.catatan.alasan) ? _vm._i(_vm.catatan.alasan, item.alasanpenolakan) > -1 : _vm.catatan.alasan
      },
      on: {
        change: function change($event) {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                  " + _vm._s(item.alasanpenolakan) + "\n              ")]);
  }), 0)])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=template&id=9fd0587e":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=template&id=9fd0587e ***!
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
  return _c("div", [_c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kaca Depan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.kacadepan,
      expression: "depan.kacadepan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.kacadepan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "kacadepan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.kacadepan,
      expression: "depan.kacadepan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.kacadepan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "kacadepan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kaca Depan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.kacadepan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kaca Depan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Penyemprot Air")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.penyemprotair,
      expression: "depan.penyemprotair"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.penyemprotair, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "penyemprotair", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.penyemprotair,
      expression: "depan.penyemprotair"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.penyemprotair, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "penyemprotair", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Penyemprot Air", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.penyemprotair == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Penyemprot Air", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Penghapus Kaca")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.penghapuskaca,
      expression: "depan.penghapuskaca"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.penghapuskaca, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "penghapuskaca", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.penghapuskaca,
      expression: "depan.penghapuskaca"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.penghapuskaca, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "penghapuskaca", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Penghapus Kaca", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.penghapuskaca == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Penghapus Kaca", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Bodi Depan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.bodidepan,
      expression: "depan.bodidepan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.bodidepan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "bodidepan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.bodidepan,
      expression: "depan.bodidepan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.bodidepan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "bodidepan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Bodi Depan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.bodidepan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Bodi Depan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Tanda Batas")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lamputandabatas,
      expression: "depan.lamputandabatas"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lamputandabatas, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lamputandabatas", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lamputandabatas,
      expression: "depan.lamputandabatas"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lamputandabatas, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lamputandabatas", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Tanda Batas Depan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.lamputandabatas == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Tanda Batas Depan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Utama Dekat")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampuutamadekat,
      expression: "depan.lampuutamadekat"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampuutamadekat, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampuutamadekat", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampuutamadekat,
      expression: "depan.lampuutamadekat"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampuutamadekat, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampuutamadekat", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Utama Dekat", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.lampuutamadekat == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Utama Dekat", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Utama Jauh")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampuutamajauh,
      expression: "depan.lampuutamajauh"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampuutamajauh, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampuutamajauh", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampuutamajauh,
      expression: "depan.lampuutamajauh"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampuutamajauh, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampuutamajauh", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Utama Jauh", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.lampuutamajauh == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Utama Jauh", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Penunjuk Arah")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampupenunjukarah,
      expression: "depan.lampupenunjukarah"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampupenunjukarah, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampupenunjukarah", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampupenunjukarah,
      expression: "depan.lampupenunjukarah"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampupenunjukarah, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampupenunjukarah", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Penunjuk Arah Depan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.lampupenunjukarah == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Penunjuk Arah Depan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Posisi Depan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampuposisidepan,
      expression: "depan.lampuposisidepan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampuposisidepan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampuposisidepan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampuposisidepan,
      expression: "depan.lampuposisidepan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampuposisidepan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampuposisidepan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Posisi Depan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.lampuposisidepan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Posisi Depan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Kabut")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampukabut,
      expression: "depan.lampukabut"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampukabut, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampukabut", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.depan.lampukabut,
      expression: "depan.lampukabut"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.depan.lampukabut, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.depan, "lampukabut", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Kabut", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.depan.lampukabut == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Kabut", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: "Alasan Penolakan"
    },
    on: {
      ok: _vm.submit
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
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
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.catatan.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-12 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, _vm._l(_vm.alasan, function (item) {
    return _c("label", {
      key: item.id,
      staticClass: "checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.catatan.alasan,
        expression: "catatan.alasan"
      }],
      attrs: {
        type: "checkbox",
        id: item.id
      },
      domProps: {
        value: item.alasanpenolakan,
        checked: Array.isArray(_vm.catatan.alasan) ? _vm._i(_vm.catatan.alasan, item.alasanpenolakan) > -1 : _vm.catatan.alasan
      },
      on: {
        change: function change($event) {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                  " + _vm._s(item.alasanpenolakan) + "\n              ")]);
  }), 0)])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=template&id=32364bcc":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=template&id=32364bcc ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-lg-2 col-md-4 col-sm-6 col-form-label"
  }, [_vm._v("Wheel Base(a)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.a,
      expression: "identitaskendaraan.a"
    }],
    ref: "a",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.a
    },
    on: {
      change: _vm.setMST,
      focus: function focus($event) {
        return _vm.handleFocus("a");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "a", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.a,
      expression: "dimensi.a"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.a, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "a", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.a,
      expression: "dimensi.a"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.a, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "a", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-2 col-md-4 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.a,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "a", $$v);
      },
      expression: "dimensi.a"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-2 col-md-4 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_a,
      expression: "dimensi.nilai_a"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_a
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_a", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Julur Depan(FOH)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.julurdepan,
      expression: "identitaskendaraan.julurdepan"
    }],
    ref: "julurdepan",
    staticClass: "form-control",
    style: _vm.dimensi.julurdepan == 0 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.julurdepan
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("julurdepan");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "julurdepan", $event.target.value);
      }, _vm.checkJulurDepan]
    }
  }), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.julurdepan,
      expression: "dimensi.julurdepan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.julurdepan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "julurdepan", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.julurdepan,
      expression: "dimensi.julurdepan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.julurdepan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "julurdepan", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.julurdepan,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "julurdepan", $$v);
      },
      expression: "dimensi.julurdepan"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_julurdepan,
      expression: "dimensi.nilai_julurdepan"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_julurdepan
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_julurdepan", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.errors.julurdepan ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v("\n      " + _vm._s(_vm.errors.julurdepan[0]) + "\n    ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Titip Berat Pengemudi(p)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.p,
      expression: "identitaskendaraan.p"
    }],
    ref: "p",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.p
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("p");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "p", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.p,
      expression: "dimensi.p"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.p, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "p", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.p,
      expression: "dimensi.p"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.p, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "p", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.p,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "p", $$v);
      },
      expression: "dimensi.p"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_p,
      expression: "dimensi.nilai_p"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_p
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_p", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.errors.p ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.p[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Tinggi Kendaraan")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.tinggikendaraan,
      expression: "identitaskendaraan.tinggikendaraan"
    }],
    ref: "tinggikendaraan",
    staticClass: "form-control",
    style: _vm.dimensi.tinggikendaraan == 0 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.tinggikendaraan
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("tinggikendaraan");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "tinggikendaraan", $event.target.value);
      }, _vm.checkTinggikendaraan]
    }
  }), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggikendaraan,
      expression: "dimensi.tinggikendaraan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggikendaraan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggikendaraan", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggikendaraan,
      expression: "dimensi.tinggikendaraan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggikendaraan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggikendaraan", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.tinggikendaraan,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "tinggikendaraan", $$v);
      },
      expression: "dimensi.tinggikendaraan"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_tinggikendaraan,
      expression: "dimensi.nilai_tinggikendaraan"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_tinggikendaraan
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_tinggikendaraan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu I-II")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu1_2,
      expression: "identitaskendaraan.jaraksumbu1_2"
    }],
    ref: "jaraksumbu1_2",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu1_2
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu1_2");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu1_2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu1_2,
      expression: "dimensi.jaraksumbu1_2"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu1_2, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu1_2", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu1_2,
      expression: "dimensi.jaraksumbu1_2"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu1_2, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu1_2", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu1_2,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu1_2", $$v);
      },
      expression: "dimensi.jaraksumbu1_2"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu1_2,
      expression: "dimensi.nilai_jaraksumbu1_2"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu1_2
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu1_2", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu II-III")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu2_3,
      expression: "identitaskendaraan.jaraksumbu2_3"
    }],
    ref: "jaraksumbu2_3",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu2_3
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu2_3");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu2_3", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(6)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu2_3,
      expression: "dimensi.jaraksumbu2_3"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu2_3, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu2_3", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu2_3,
      expression: "dimensi.jaraksumbu2_3"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu2_3, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu2_3", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu2_3,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu2_3", $$v);
      },
      expression: "dimensi.jaraksumbu2_3"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu2_3,
      expression: "dimensi.nilai_jaraksumbu2_3"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu2_3
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu2_3", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu III-IV")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu3_4,
      expression: "identitaskendaraan.jaraksumbu3_4"
    }],
    ref: "jaraksumbu3_4",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu3_4
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu3_4");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu3_4", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(7)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu3_4,
      expression: "dimensi.jaraksumbu3_4"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu3_4, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu3_4", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu3_4,
      expression: "dimensi.jaraksumbu3_4"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu3_4, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu3_4", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu3_4,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu3_4", $$v);
      },
      expression: "dimensi.jaraksumbu3_4"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu3_4,
      expression: "dimensi.nilai_jaraksumbu3_4"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu3_4
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu3_4", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu > 4 ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu IV-V")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu4_5,
      expression: "identitaskendaraan.jaraksumbu4_5"
    }],
    ref: "jaraksumbu4_5",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu4_5
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu4_5");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu4_5", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(8)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu4_5,
      expression: "dimensi.jaraksumbu4_5"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu4_5, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu4_5", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu4_5,
      expression: "dimensi.jaraksumbu4_5"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu4_5, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu4_5", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu4_5,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu4_5", $$v);
      },
      expression: "dimensi.jaraksumbu4_5"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu4_5,
      expression: "dimensi.nilai_jaraksumbu4_5"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu4_5
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu4_5", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu > 5 ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu V-VI")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu5_6,
      expression: "identitaskendaraan.jaraksumbu5_6"
    }],
    ref: "jaraksumbu5_6",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu5_6
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu5_6");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu5_6", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(9)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu5_6,
      expression: "dimensi.jaraksumbu5_6"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu5_6, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu5_6", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu5_6,
      expression: "dimensi.jaraksumbu5_6"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu5_6, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu5_6", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu5_6,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu5_6", $$v);
      },
      expression: "dimensi.jaraksumbu5_6"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu5_6,
      expression: "dimensi.nilai_jaraksumbu5_6"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu5_6
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu5_6", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu > 6 ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu VI-VII")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu6_7,
      expression: "identitaskendaraan.jaraksumbu6_7"
    }],
    ref: "jaraksumbu6_7",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu6_7
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu6_7");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu6_7", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(10)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu6_7,
      expression: "dimensi.jaraksumbu6_7"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu6_7, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu6_7", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu6_7,
      expression: "dimensi.jaraksumbu6_7"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu6_7, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu6_7", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu6_7,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu6_7", $$v);
      },
      expression: "dimensi.jaraksumbu6_7"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu6_7,
      expression: "dimensi.nilai_jaraksumbu6_7"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu6_7
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu6_7", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu > 7 ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu VII-VIII")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu7_8,
      expression: "identitaskendaraan.jaraksumbu7_8"
    }],
    ref: "jaraksumbu7_8",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu7_8
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu7_8");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu7_8", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(11)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu7_8,
      expression: "dimensi.jaraksumbu7_8"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu7_8, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu7_8", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu7_8,
      expression: "dimensi.jaraksumbu7_8"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu7_8, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu7_8", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu7_8,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu7_8", $$v);
      },
      expression: "dimensi.jaraksumbu7_8"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu7_8,
      expression: "dimensi.nilai_jaraksumbu7_8"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu7_8
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu7_8", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu > 8 ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu VIII-IX")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu8_9,
      expression: "identitaskendaraan.jaraksumbu8_9"
    }],
    ref: "jaraksumbu8_9",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu8_9
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu8_9");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu8_9", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(12)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu8_9,
      expression: "dimensi.jaraksumbu8_9"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu8_9, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu8_9", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu8_9,
      expression: "dimensi.jaraksumbu8_9"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu8_9, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu8_9", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu8_9,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu8_9", $$v);
      },
      expression: "dimensi.jaraksumbu8_9"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu8_9,
      expression: "dimensi.nilai_jaraksumbu8_9"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu8_9
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu8_9", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu > 9 ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu IX-X")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu9_10,
      expression: "identitaskendaraan.jaraksumbu9_10"
    }],
    ref: "jaraksumbu9_10",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu9_10
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu9_10");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu9_10", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(13)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu9_10,
      expression: "dimensi.jaraksumbu9_10"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu9_10, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu9_10", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu9_10,
      expression: "dimensi.jaraksumbu9_10"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu9_10, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu9_10", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu9_10,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu9_10", $$v);
      },
      expression: "dimensi.jaraksumbu9_10"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu9_10,
      expression: "dimensi.nilai_jaraksumbu9_10"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu9_10
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu9_10", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu > 10 ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu X-XI")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu10_11,
      expression: "identitaskendaraan.jaraksumbu10_11"
    }],
    ref: "jaraksumbu10_11",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu10_11
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu10_11");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu10_11", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(14)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu10_11,
      expression: "dimensi.jaraksumbu10_11"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu10_11, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu10_11", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu10_11,
      expression: "dimensi.jaraksumbu10_11"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu10_11, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu10_11", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu10_11,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu10_11", $$v);
      },
      expression: "dimensi.jaraksumbu10_11"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu10_11,
      expression: "dimensi.nilai_jaraksumbu10_11"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu10_11
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu10_11", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu > 11 ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu XI-XII")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraksumbu11_12,
      expression: "identitaskendaraan.jaraksumbu11_12"
    }],
    ref: "jaraksumbu11_12",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraksumbu11_12
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraksumbu11_12");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraksumbu11_12", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(15)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu11_12,
      expression: "dimensi.jaraksumbu11_12"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu11_12, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu11_12", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraksumbu11_12,
      expression: "dimensi.jaraksumbu11_12"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraksumbu11_12, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraksumbu11_12", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraksumbu11_12,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraksumbu11_12", $$v);
      },
      expression: "dimensi.jaraksumbu11_12"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraksumbu11_12,
      expression: "dimensi.nilai_jaraksumbu11_12"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraksumbu11_12
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraksumbu11_12", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Panjang Bak Muatan")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.panjangbakatautangki,
      expression: "identitaskendaraan.panjangbakatautangki"
    }],
    ref: "panjangbakatautangki",
    staticClass: "form-control",
    style: _vm.dimensi.panjangbakatautangki == 0 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.panjangbakatautangki
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("panjangbakatautangki");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "panjangbakatautangki", $event.target.value);
      }, _vm.checkPanjangBakTangki]
    }
  }), _vm._v(" "), _vm._m(16)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.panjangbakatautangki,
      expression: "dimensi.panjangbakatautangki"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.panjangbakatautangki, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "panjangbakatautangki", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.panjangbakatautangki,
      expression: "dimensi.panjangbakatautangki"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.panjangbakatautangki, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "panjangbakatautangki", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.panjangbakatautangki,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "panjangbakatautangki", $$v);
      },
      expression: "dimensi.panjangbakatautangki"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_panjangbakatautangki,
      expression: "dimensi.nilai_panjangbakatautangki"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_panjangbakatautangki
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_panjangbakatautangki", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Titik Berat Muatan(q)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.q,
      expression: "identitaskendaraan.q"
    }],
    ref: "q",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.q
    },
    on: {
      change: _vm.setMST,
      focus: function focus($event) {
        return _vm.handleFocus("q");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "q", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(17)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.q,
      expression: "dimensi.q"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.q, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "q", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.q,
      expression: "dimensi.q"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.q, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "q", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.q,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "q", $$v);
      },
      expression: "dimensi.q"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_q,
      expression: "dimensi.nilai_q"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_q
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_q", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("tempelan") || _vm.identitaskendaraan.jenis.includes("kereta tempelan tangki") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Titik Tumpu Tempelan(r)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.r,
      expression: "identitaskendaraan.r"
    }],
    ref: "r",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.r
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("r");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "r", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(18)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.r,
      expression: "dimensi.r"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.r, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "r", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.r,
      expression: "dimensi.r"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.r, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "r", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.r,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "r", $$v);
      },
      expression: "dimensi.r"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_r,
      expression: "dimensi.nilai_r"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_r
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_r", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("tempelan") || _vm.identitaskendaraan.jenis.includes("kereta tempelan tangki") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak Sumbu Tempelan(b)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.b,
      expression: "identitaskendaraan.b"
    }],
    ref: "b",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.b
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("b");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "b", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(19)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.b,
      expression: "dimensi.b"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.b, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "b", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.b,
      expression: "dimensi.b"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.b, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "b", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.b,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "b", $$v);
      },
      expression: "dimensi.b"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_b,
      expression: "dimensi.nilai_b"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_b
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_b", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Rear Overhang(ROH)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.julurbelakang,
      expression: "identitaskendaraan.julurbelakang"
    }],
    ref: "julurbelakang",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.julurbelakang
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("julurbelakang");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "julurbelakang", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(20)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.julurbelakang,
      expression: "dimensi.julurbelakang"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.julurbelakang, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "julurbelakang", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.julurbelakang,
      expression: "dimensi.julurbelakang"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.julurbelakang, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "julurbelakang", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.julurbelakang,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "julurbelakang", $$v);
      },
      expression: "dimensi.julurbelakang"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_julurbelakang,
      expression: "dimensi.nilai_julurbelakang"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_julurbelakang
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_julurbelakang", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Panjang Kendaraan")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.panjangkendaraan,
      expression: "identitaskendaraan.panjangkendaraan"
    }],
    ref: "panjangkendaraan",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.panjangkendaraan
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("panjangkendaraan");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "panjangkendaraan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(21)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.panjangkendaraan,
      expression: "dimensi.panjangkendaraan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.panjangkendaraan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "panjangkendaraan", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.panjangkendaraan,
      expression: "dimensi.panjangkendaraan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.panjangkendaraan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "panjangkendaraan", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.panjangkendaraan,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "panjangkendaraan", $$v);
      },
      expression: "dimensi.panjangkendaraan"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_panjangkendaraan,
      expression: "dimensi.nilai_panjangkendaraan"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_panjangkendaraan
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_panjangkendaraan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Lebar Kendaraan")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.lebarkendaraan,
      expression: "identitaskendaraan.lebarkendaraan"
    }],
    ref: "lebarkendaraan",
    staticClass: "form-control",
    style: _vm.identitaskendaraan.lebarkendaraan > 2550 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.lebarkendaraan
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("lebarkendaraan");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "lebarkendaraan", $event.target.value);
      }, _vm.checkLebarkendaraan]
    }
  }), _vm._v(" "), _vm._m(22)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarkendaraan,
      expression: "dimensi.lebarkendaraan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarkendaraan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarkendaraan", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarkendaraan,
      expression: "dimensi.lebarkendaraan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarkendaraan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarkendaraan", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.lebarkendaraan,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "lebarkendaraan", $$v);
      },
      expression: "dimensi.lebarkendaraan"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_lebarkendaraan,
      expression: "dimensi.nilai_lebarkendaraan"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_lebarkendaraan
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_lebarkendaraan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Lebar Bak Muatan")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.lebarbakatautangki,
      expression: "identitaskendaraan.lebarbakatautangki"
    }],
    ref: "lebarbakatautangki",
    staticClass: "form-control",
    style: _vm.dimensi.lebarbakatautangki == 0 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.lebarbakatautangki
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("lebarbakatautangki");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "lebarbakatautangki", $event.target.value);
      }, _vm.checkLebarBakTangki]
    }
  }), _vm._v(" "), _vm._m(23)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarbakatautangki,
      expression: "dimensi.lebarbakatautangki"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarbakatautangki, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarbakatautangki", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarbakatautangki,
      expression: "dimensi.lebarbakatautangki"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarbakatautangki, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarbakatautangki", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.lebarbakatautangki,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "lebarbakatautangki", $$v);
      },
      expression: "dimensi.lebarbakatautangki"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_lebarbakatautangki,
      expression: "dimensi.nilai_lebarbakatautangki"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_lebarbakatautangki
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_lebarbakatautangki", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Tinggi Bak Muatan")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.tinggibakatautangki,
      expression: "identitaskendaraan.tinggibakatautangki"
    }],
    ref: "tinggibakatautangki",
    staticClass: "form-control",
    style: _vm.dimensi.tinggibakatautangki == 0 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.tinggibakatautangki
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("tinggibakatautangki");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "tinggibakatautangki", $event.target.value);
      }, _vm.checkTinggiBakTangki]
    }
  }), _vm._v(" "), _vm._m(24)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggibakatautangki,
      expression: "dimensi.tinggibakatautangki"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggibakatautangki, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggibakatautangki", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggibakatautangki,
      expression: "dimensi.tinggibakatautangki"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggibakatautangki, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggibakatautangki", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.tinggibakatautangki,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "tinggibakatautangki", $$v);
      },
      expression: "dimensi.tinggibakatautangki"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_tinggibakatautangki,
      expression: "dimensi.nilai_tinggibakatautangki"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_tinggibakatautangki
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_tinggibakatautangki", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("Tangki") || _vm.identitaskendaraan.jenis.includes("Tempelan tangki") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak antara dinding terluar bagian belakang kabin dengan\n      dinding tangki bagian depan")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jarakantaradindingterluar,
      expression: "identitaskendaraan.jarakantaradindingterluar"
    }],
    ref: "jarakantaradindingterluar",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jarakantaradindingterluar
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jarakantaradindingterluar");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jarakantaradindingterluar", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(25)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jarakantaradindingterluar,
      expression: "dimensi.jarakantaradindingterluar"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jarakantaradindingterluar, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jarakantaradindingterluar", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jarakantaradindingterluar,
      expression: "dimensi.jarakantaradindingterluar"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jarakantaradindingterluar, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jarakantaradindingterluar", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jarakantaradindingterluar,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jarakantaradindingterluar", $$v);
      },
      expression: "dimensi.jarakantaradindingterluar"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jarakantaradindingterluar,
      expression: "dimensi.nilai_jarakantaradindingterluar"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jarakantaradindingterluar
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jarakantaradindingterluar", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Ground Clearence(GC)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.groundclearance,
      expression: "identitaskendaraan.groundclearance"
    }],
    ref: "groundclearance",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.groundclearance
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("groundclearance");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "groundclearance", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(26)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.groundclearance,
      expression: "dimensi.groundclearance"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.groundclearance, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "groundclearance", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.groundclearance,
      expression: "dimensi.groundclearance"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.groundclearance, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "groundclearance", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.groundclearance,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "groundclearance", $$v);
      },
      expression: "dimensi.groundclearance"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_groundclearance,
      expression: "dimensi.nilai_groundclearance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_groundclearance
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_groundclearance", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Lebar Pintu")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.lebarpintu,
      expression: "identitaskendaraan.lebarpintu"
    }],
    ref: "lebarpintu",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.lebarpintu
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("lebarpintu");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "lebarpintu", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(27)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarpintu,
      expression: "dimensi.lebarpintu"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarpintu, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarpintu", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarpintu,
      expression: "dimensi.lebarpintu"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarpintu, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarpintu", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.lebarpintu,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "lebarpintu", $$v);
      },
      expression: "dimensi.lebarpintu"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_lebarpintu,
      expression: "dimensi.nilai_lebarpintu"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_lebarpintu
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_lebarpintu", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Tinggi Pintu")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.tinggipintu,
      expression: "identitaskendaraan.tinggipintu"
    }],
    ref: "tinggipintu",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.tinggipintu
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("tinggipintu");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "tinggipintu", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(28)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggipintu,
      expression: "dimensi.tinggipintu"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggipintu, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggipintu", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggipintu,
      expression: "dimensi.tinggipintu"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggipintu, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggipintu", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.tinggipintu,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "tinggipintu", $$v);
      },
      expression: "dimensi.tinggipintu"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_tinggipintu,
      expression: "dimensi.nilai_tinggipintu"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_tinggipintu
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_tinggipintu", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Tinggi Anak Tangga")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.tinggianaktangga,
      expression: "identitaskendaraan.tinggianaktangga"
    }],
    ref: "tinggianaktangga",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.tinggianaktangga
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("tinggianaktangga");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "tinggianaktangga", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(29)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggianaktangga,
      expression: "dimensi.tinggianaktangga"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggianaktangga, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggianaktangga", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggianaktangga,
      expression: "dimensi.tinggianaktangga"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggianaktangga, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggianaktangga", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.tinggianaktangga,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "tinggianaktangga", $$v);
      },
      expression: "dimensi.tinggianaktangga"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_tinggianaktangga,
      expression: "dimensi.nilai_tinggianaktangga"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_tinggianaktangga
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_tinggianaktangga", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Lebar Anak Tangga")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.lebaranaktangga,
      expression: "identitaskendaraan.lebaranaktangga"
    }],
    ref: "lebaranaktangga",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.lebaranaktangga
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("lebaranaktangga");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "lebaranaktangga", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(30)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebaranaktangga,
      expression: "dimensi.lebaranaktangga"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebaranaktangga, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebaranaktangga", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebaranaktangga,
      expression: "dimensi.lebaranaktangga"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebaranaktangga, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebaranaktangga", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.lebaranaktangga,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "lebaranaktangga", $$v);
      },
      expression: "dimensi.lebaranaktangga"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_lebaranaktangga,
      expression: "dimensi.nilai_lebaranaktangga"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_lebaranaktangga
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_lebaranaktangga", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Lebar Lorong")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.lebarlorong,
      expression: "identitaskendaraan.lebarlorong"
    }],
    ref: "lebarlorong",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.lebarlorong
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("lebarlorong");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "lebarlorong", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(31)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarlorong,
      expression: "dimensi.lebarlorong"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarlorong, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarlorong", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarlorong,
      expression: "dimensi.lebarlorong"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarlorong, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarlorong", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.lebarlorong,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "lebarlorong", $$v);
      },
      expression: "dimensi.lebarlorong"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_lebarlorong,
      expression: "dimensi.nilai_lebarlorong"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_lebarlorong
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_lebarlorong", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Tinggi tempat Berdiri")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.tinggitempatberdiri,
      expression: "identitaskendaraan.tinggitempatberdiri"
    }],
    ref: "tinggitempatberdiri",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.tinggitempatberdiri
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("tinggitempatberdiri");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "tinggitempatberdiri", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(32)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggitempatberdiri,
      expression: "dimensi.tinggitempatberdiri"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggitempatberdiri, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggitempatberdiri", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.tinggitempatberdiri,
      expression: "dimensi.tinggitempatberdiri"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.tinggitempatberdiri, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "tinggitempatberdiri", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.tinggitempatberdiri,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "tinggitempatberdiri", $$v);
      },
      expression: "dimensi.tinggitempatberdiri"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_tinggitempatberdiri,
      expression: "dimensi.nilai_tinggitempatberdiri"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_tinggitempatberdiri
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_tinggitempatberdiri", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") || _vm.identitaskendaraan.jenis.includes("SEDAN") || _vm.identitaskendaraan.jenis.includes("TAXI KOTA") || _vm.identitaskendaraan.jenis.includes("MOBIL PENUMPANG") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Lebar tempat Duduk")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.lebartempatduduk,
      expression: "identitaskendaraan.lebartempatduduk"
    }],
    ref: "lebartempatduduk",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.lebartempatduduk
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("lebartempatduduk");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "lebartempatduduk", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(33)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebartempatduduk,
      expression: "dimensi.lebartempatduduk"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebartempatduduk, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebartempatduduk", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebartempatduduk,
      expression: "dimensi.lebartempatduduk"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebartempatduduk, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebartempatduduk", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.lebartempatduduk,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "lebartempatduduk", $$v);
      },
      expression: "dimensi.lebartempatduduk"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_lebartempatduduk,
      expression: "dimensi.nilai_lebartempatduduk"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_lebartempatduduk
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_lebartempatduduk", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") || _vm.identitaskendaraan.jenis.includes("SEDAN") || _vm.identitaskendaraan.jenis.includes("TAXI KOTA") || _vm.identitaskendaraan.jenis.includes("MOBIL PENUMPANG") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak tempat Duduk")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jaraktempatduduk,
      expression: "identitaskendaraan.jaraktempatduduk"
    }],
    ref: "jaraktempatduduk",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jaraktempatduduk
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jaraktempatduduk");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jaraktempatduduk", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(34)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraktempatduduk,
      expression: "dimensi.jaraktempatduduk"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraktempatduduk, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraktempatduduk", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jaraktempatduduk,
      expression: "dimensi.jaraktempatduduk"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jaraktempatduduk, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jaraktempatduduk", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jaraktempatduduk,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jaraktempatduduk", $$v);
      },
      expression: "dimensi.jaraktempatduduk"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jaraktempatduduk,
      expression: "dimensi.nilai_jaraktempatduduk"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jaraktempatduduk
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jaraktempatduduk", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Lebar Pintu Darurat")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.lebarpintudarurat,
      expression: "identitaskendaraan.lebarpintudarurat"
    }],
    ref: "lebarpintudarurat",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.lebarpintudarurat
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("lebarpintudarurat");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "lebarpintudarurat", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(35)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarpintudarurat,
      expression: "dimensi.lebarpintudarurat"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarpintudarurat, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarpintudarurat", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarpintudarurat,
      expression: "dimensi.lebarpintudarurat"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarpintudarurat, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarpintudarurat", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.lebarpintudarurat,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "lebarpintudarurat", $$v);
      },
      expression: "dimensi.lebarpintudarurat"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_lebarpintudarurat,
      expression: "dimensi.nilai_lebarpintudarurat"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_lebarpintudarurat
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_lebarpintudarurat", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Panjang Akses Keluar Berupa Jendela")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.panjangakseskeluar,
      expression: "identitaskendaraan.panjangakseskeluar"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.panjangakseskeluar
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("panjangakseskeluar");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "panjangakseskeluar", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(36)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.panjangakseskeluar,
      expression: "dimensi.panjangakseskeluar"
    }],
    ref: "panjangakseskeluar",
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.panjangakseskeluar, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "panjangakseskeluar", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.panjangakseskeluar,
      expression: "dimensi.panjangakseskeluar"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.panjangakseskeluar, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "panjangakseskeluar", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.panjangakseskeluar,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "panjangakseskeluar", $$v);
      },
      expression: "dimensi.panjangakseskeluar"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_panjangakseskeluar,
      expression: "dimensi.nilai_panjangakseskeluar"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_panjangakseskeluar
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_panjangakseskeluar", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("BUS") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Lebar Akses Keluar Berupa Jendela")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.lebarakseskeluar,
      expression: "identitaskendaraan.lebarakseskeluar"
    }],
    ref: "lebarakseskeluar",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.lebarakseskeluar
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("lebarakseskeluar");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "lebarakseskeluar", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(37)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarakseskeluar,
      expression: "dimensi.lebarakseskeluar"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarakseskeluar, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarakseskeluar", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.lebarakseskeluar,
      expression: "dimensi.lebarakseskeluar"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.lebarakseskeluar, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "lebarakseskeluar", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.lebarakseskeluar,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "lebarakseskeluar", $$v);
      },
      expression: "dimensi.lebarakseskeluar"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_lebarakseskeluar,
      expression: "dimensi.nilai_lebarakseskeluar"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_lebarakseskeluar
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_lebarakseskeluar", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("Tangki") || _vm.identitaskendaraan.jenis.includes("Tempelan tangki") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jarak antar bumper belakang dengan bagian belakang\n      tangki")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jarakantarbumper,
      expression: "identitaskendaraan.jarakantarbumper"
    }],
    ref: "jarakantarbumper",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jarakantarbumper
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("jarakantarbumper");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jarakantarbumper", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(38)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jarakantarbumper,
      expression: "dimensi.jarakantarbumper"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jarakantarbumper, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jarakantarbumper", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jarakantarbumper,
      expression: "dimensi.jarakantarbumper"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jarakantarbumper, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jarakantarbumper", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jarakantarbumper,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jarakantarbumper", $$v);
      },
      expression: "dimensi.jarakantarbumper"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_jarakantarbumper,
      expression: "dimensi.nilai_jarakantarbumper"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_jarakantarbumper
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_jarakantarbumper", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("Tangki") || _vm.identitaskendaraan.jenis.includes("Tempelan tangki") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Volume")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.volume,
      expression: "identitaskendaraan.volume"
    }],
    ref: "volume",
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.volume
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("volume");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "volume", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(39)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.volume,
      expression: "dimensi.volume"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.volume, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "volume", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.volume,
      expression: "dimensi.volume"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.volume, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "volume", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.volume,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "volume", $$v);
      },
      expression: "dimensi.volume"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.nilai_volume,
      expression: "dimensi.nilai_volume"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "mm"
    },
    domProps: {
      value: _vm.dimensi.nilai_volume
    },
    on: {
      change: _vm.hasilujidimensi,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dimensi, "nilai_volume", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("Tangki") || _vm.identitaskendaraan.jenis.includes("Tempelan tangki") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Jenis Muatan")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jenismuatan,
      expression: "identitaskendaraan.jenismuatan"
    }],
    ref: "jenismuatan",
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.jenismuatan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jenismuatan", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jenismuatan,
      expression: "dimensi.jenismuatan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jenismuatan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jenismuatan", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.jenismuatan,
      expression: "dimensi.jenismuatan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.jenismuatan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "jenismuatan", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.jenismuatan,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "jenismuatan", $$v);
      },
      expression: "dimensi.jenismuatan"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  })]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jenis.includes("Tangki") || _vm.identitaskendaraan.jenis.includes("Tempelan tangki") ? _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_vm._v("Berat Jenis Muatan")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratjenismuatan,
      expression: "identitaskendaraan.beratjenismuatan"
    }],
    ref: "beratjenismuatan",
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Ukuran "
    },
    domProps: {
      value: _vm.identitaskendaraan.beratjenismuatan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratjenismuatan", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.beratjenismuatan,
      expression: "dimensi.beratjenismuatan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.beratjenismuatan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "beratjenismuatan", "1");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dimensi.beratjenismuatan,
      expression: "dimensi.beratjenismuatan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.dimensi.beratjenismuatan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.dimensi, "beratjenismuatan", "0");
      }, _vm.hasilujidimensi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n          Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.options,
      size: "sm"
    },
    on: {
      change: _vm.hasilujidimensi
    },
    model: {
      value: _vm.dimensi.beratjenismuatan,
      callback: function callback($$v) {
        _vm.$set(_vm.dimensi, "beratjenismuatan", $$v);
      },
      expression: "dimensi.beratjenismuatan"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  })]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      padding: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("label", [_vm._v("Ukuran")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-6 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("label", [_vm._v("Lulus")])]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("label", [_vm._v("Tidak Lulus")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("label", [_vm._v("Alasan Penolakan")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-6 col-form-label"
  }, [_c("label", [_vm._v("Kelebihan/Kekurangan")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("mm")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=template&id=42972a73":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=template&id=42972a73 ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Nomor TNKB")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.notnkb,
      expression: "identifikasi.notnkb"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.notnkb, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "notnkb", "1");
      }, _vm.hasilujiidentifikasi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.notnkb,
      expression: "identifikasi.notnkb"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.notnkb, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "notnkb", "0");
      }, function ($event) {
        return _vm.hasilujiidentifikasi("Nomor TNKB", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.identifikasi.notnkb == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Nomor TNKB", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])]), _vm._v(" "), _vm.errors.notnkb ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.notnkb[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Nomor Uji")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.nouji,
      expression: "identifikasi.nouji"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.nouji, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "nouji", "1");
      }, _vm.hasilujiidentifikasi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.nouji,
      expression: "identifikasi.nouji"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.nouji, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "nouji", "0");
      }, function ($event) {
        return _vm.hasilujiidentifikasi("Nomor Uji", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.identifikasi.nouji == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Nomor Uji", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])]), _vm._v(" "), _vm.errors.nouji ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nouji[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Nomor Rangka")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.norangkalandasan,
      expression: "identifikasi.norangkalandasan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.norangkalandasan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "norangkalandasan", "1");
      }, _vm.hasilujiidentifikasi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.norangkalandasan,
      expression: "identifikasi.norangkalandasan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.norangkalandasan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "norangkalandasan", "0");
      }, function ($event) {
        return _vm.hasilujiidentifikasi("Nomor Rangka Landasan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.identifikasi.norangkalandasan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Nomor Rangka Landasan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])]), _vm._v(" "), _vm.errors.norangkalandasan ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.norangkalandasan[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Nomor Mesin")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.nomotorpenggerak,
      expression: "identifikasi.nomotorpenggerak"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.nomotorpenggerak, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "nomotorpenggerak", "1");
      }, _vm.hasilujiidentifikasi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.nomotorpenggerak,
      expression: "identifikasi.nomotorpenggerak"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.nomotorpenggerak, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "nomotorpenggerak", "0");
      }, function ($event) {
        return _vm.hasilujiidentifikasi("Nomor Motor Penggerak", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.identifikasi.nomotorpenggerak == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Nomor Motor Penggerak", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])]), _vm._v(" "), _vm.errors.nomotorpenggerak ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nomotorpenggerak[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Ukuran Ban")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.ukuranban,
      expression: "identifikasi.ukuranban"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.ukuranban, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "ukuranban", "1");
      }, _vm.hasilujiidentifikasi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.ukuranban,
      expression: "identifikasi.ukuranban"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.ukuranban, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "ukuranban", "0");
      }, function ($event) {
        return _vm.hasilujiidentifikasi("Ukuran Ban", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.identifikasi.ukuranban == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Ukuran Ban", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])]), _vm._v(" "), _vm.errors.ukuranban ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.ukuranban[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Bahan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.bahan,
      expression: "identifikasi.bahan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.bahan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "bahan", "1");
      }, _vm.hasilujiidentifikasi]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.bahan,
      expression: "identifikasi.bahan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.identifikasi.bahan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.identifikasi, "bahan", "0");
      }, function ($event) {
        return _vm.hasilujiidentifikasi("Bahan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.identifikasi.bahan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Bahan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])]), _vm._v(" "), _vm.errors.bahan ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.bahan[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Bahan")]), _vm._v(" "), _c("div", {
    staticClass: "col-9 col-form-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identifikasi.jenisrumah,
      expression: "identifikasi.jenisrumah"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      name: "jenisrumah",
      list: "jenisrumahrumah",
      multiple: ""
    },
    domProps: {
      value: _vm.identifikasi.jenisrumah
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identifikasi, "jenisrumah", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("datalist", {
    attrs: {
      id: "jenisrumahrumah"
    }
  }, _vm._l(_vm.jenisrumahrumah, function (jenisrumahrumah) {
    return _c("option", {
      domProps: {
        value: jenisrumahrumah
      }
    }, [_vm._v(_vm._s(jenisrumahrumah))]);
  }), 0)])]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: "Alasan Penolakan"
    },
    on: {
      ok: _vm.submit
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
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
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.catatan.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-12 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, _vm._l(_vm.alasan, function (item) {
    return _c("label", {
      key: item.id,
      staticClass: "checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.catatan.alasan,
        expression: "catatan.alasan"
      }],
      attrs: {
        type: "checkbox",
        id: item.id
      },
      domProps: {
        value: item.alasanpenolakan,
        checked: Array.isArray(_vm.catatan.alasan) ? _vm._i(_vm.catatan.alasan, item.alasanpenolakan) > -1 : _vm.catatan.alasan
      },
      on: {
        change: function change($event) {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                  " + _vm._s(item.alasanpenolakan) + "\n              ")]);
  }), 0)])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=template&id=96b49a6c":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=template&id=96b49a6c ***!
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
  return _c("div", [_c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kaca Samping Kanan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kacasampingkanan,
      expression: "kanan.kacasampingkanan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kacasampingkanan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kacasampingkanan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kacasampingkanan,
      expression: "kanan.kacasampingkanan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kacasampingkanan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kacasampingkanan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kaca Samping Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.kacasampingkanan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kaca Samping Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kaca Spion Kanan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kacaspion,
      expression: "kanan.kacaspion"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kacaspion, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kacaspion", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kacaspion,
      expression: "kanan.kacaspion"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kacaspion, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kacaspion", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kaca Spion Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.kacaspion == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kaca Spion Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Pintu Samping Kanan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.pintusampingkanan,
      expression: "kanan.pintusampingkanan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.pintusampingkanan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "pintusampingkanan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.pintusampingkanan,
      expression: "kanan.pintusampingkanan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.pintusampingkanan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "pintusampingkanan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Pintu Samping Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.pintusampingkanan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Pintu Samping Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Bodi Kanan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.bodikanan,
      expression: "kanan.bodikanan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.bodikanan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "bodikanan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.bodikanan,
      expression: "kanan.bodikanan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.bodikanan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "bodikanan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Bodi Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.bodikanan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Bodi Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("APCT Kanan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.apctkanan,
      expression: "kanan.apctkanan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.apctkanan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "apctkanan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.apctkanan,
      expression: "kanan.apctkanan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.apctkanan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "apctkanan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("APCT Bagian Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.apctkanan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("APCT Bagian Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kompresor Udara")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kompresorudara,
      expression: "kanan.kompresorudara"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kompresorudara, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kompresorudara", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kompresorudara,
      expression: "kanan.kompresorudara"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kompresorudara, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kompresorudara", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kompresor Udara Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.kompresorudara == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kompresor Udara Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Baut dan Mur Roda")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.bautdanmurroda,
      expression: "kanan.bautdanmurroda"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.bautdanmurroda, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "bautdanmurroda", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.bautdanmurroda,
      expression: "kanan.bautdanmurroda"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.bautdanmurroda, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "bautdanmurroda", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Baut dan Mur Roda Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.bautdanmurroda == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Baut dan Mur Roda Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kondisi dan Ukuran Ban")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kondisidanukuranban,
      expression: "kanan.kondisidanukuranban"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kondisidanukuranban, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kondisidanukuranban", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kondisidanukuranban,
      expression: "kanan.kondisidanukuranban"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kondisidanukuranban, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kondisidanukuranban", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kondisi dan Ukuran Ban Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.kondisidanukuranban == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kondisi dan Ukuran Ban Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Perisai Kolong")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.perisaikolong,
      expression: "kanan.perisaikolong"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.perisaikolong, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "perisaikolong", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.perisaikolong,
      expression: "kanan.perisaikolong"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.perisaikolong, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "perisaikolong", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Perisai Kolong Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.perisaikolong == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Perisai Kolong Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Tutup Tangki")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.tutuptangki,
      expression: "kanan.tutuptangki"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.tutuptangki, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "tutuptangki", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.tutuptangki,
      expression: "kanan.tutuptangki"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.tutuptangki, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "tutuptangki", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Tutup Tangki Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.tutuptangki == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Tutup Tangki Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Tanda Batas Samping")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.lamputandabatassamping,
      expression: "kanan.lamputandabatassamping"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.lamputandabatassamping, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "lamputandabatassamping", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.lamputandabatassamping,
      expression: "kanan.lamputandabatassamping"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.lamputandabatassamping, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "lamputandabatassamping", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Tanda Batas Samping Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.lamputandabatassamping == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Tanda Batas Samping Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("APAR")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.apar,
      expression: "kanan.apar"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.apar, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "apar", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.apar,
      expression: "kanan.apar"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.apar, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "apar", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Apar", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.apar == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Apar", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Roda Kelima")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.rodakelima,
      expression: "kanan.rodakelima"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.rodakelima, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "rodakelima", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.rodakelima,
      expression: "kanan.rodakelima"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.rodakelima, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "rodakelima", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Roda Kelima Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.rodakelima == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Roda Kelima Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kaki Penompang Tempelan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kakipenompangtempelan,
      expression: "kanan.kakipenompangtempelan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kakipenompangtempelan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kakipenompangtempelan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.kakipenompangtempelan,
      expression: "kanan.kakipenompangtempelan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.kakipenompangtempelan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "kakipenompangtempelan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknisshowModal("Kaki Penompang Tempelan Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.kakipenompangtempelan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kaki Penompang Tempelan Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Alat Perangkai Tempelan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.alatperangkaitempelan,
      expression: "kanan.alatperangkaitempelan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.alatperangkaitempelan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "alatperangkaitempelan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kanan.alatperangkaitempelan,
      expression: "kanan.alatperangkaitempelan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kanan.alatperangkaitempelan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kanan, "alatperangkaitempelan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Alat Perangkai Tempelan Kanan", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kanan.alatperangkaitempelan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Alat Perangkai Tempelan Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: "Alasan Penolakan"
    },
    on: {
      ok: _vm.submit
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
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
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.catatan.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-12 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, _vm._l(_vm.alasan, function (item) {
    return _c("label", {
      key: item.id,
      staticClass: "checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.catatan.alasan,
        expression: "catatan.alasan"
      }],
      attrs: {
        type: "checkbox",
        id: item.id
      },
      domProps: {
        value: item.alasanpenolakan,
        checked: Array.isArray(_vm.catatan.alasan) ? _vm._i(_vm.catatan.alasan, item.alasanpenolakan) > -1 : _vm.catatan.alasan
      },
      on: {
        change: function change($event) {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                  " + _vm._s(item.alasanpenolakan) + "\n              ")]);
  }), 0)])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=template&id=769c4840":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=template&id=769c4840 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kaca Samping Kiri")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kacasampingkiri,
      expression: "kiri.kacasampingkiri"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kacasampingkiri, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kacasampingkiri", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kacasampingkiri,
      expression: "kiri.kacasampingkiri"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kacasampingkiri, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kacasampingkiri", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kaca Samping Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.kacasampingkiri == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kaca Samping Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kaca Spion Kiri")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kacaspionkiri,
      expression: "kiri.kacaspionkiri"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kacaspionkiri, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kacaspionkiri", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kacaspionkiri,
      expression: "kiri.kacaspionkiri"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kacaspionkiri, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kacaspionkiri", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kaca Spion Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.kacaspionkiri == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kaca Spion Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Pintu Samping Kiri")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.pintusampingkiri,
      expression: "kiri.pintusampingkiri"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.pintusampingkiri, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "pintusampingkiri", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.pintusampingkiri,
      expression: "kiri.pintusampingkiri"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.pintusampingkiri, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "pintusampingkiri", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Pintu Samping Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.pintusampingkiri == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Pintu Samping Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Bodi Kiri")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.bodikiri,
      expression: "kiri.bodikiri"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.bodikiri, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "bodikiri", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.bodikiri,
      expression: "kiri.bodikiri"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.bodikiri, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "bodikiri", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Bodi Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.bodikiri == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Bodi Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("APCT Kiri")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.apctkiri,
      expression: "kiri.apctkiri"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.apctkiri, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "apctkiri", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.apctkiri,
      expression: "kiri.apctkiri"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.apctkiri, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "apctkiri", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("APCT Bagian Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.apctkiri == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("APCT Bagian Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kompresor Udara")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kompresorudara,
      expression: "kiri.kompresorudara"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kompresorudara, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kompresorudara", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kompresorudara,
      expression: "kiri.kompresorudara"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kompresorudara, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kompresorudara", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kompresor Udara Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.kompresorudara == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kompresor Udara Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Baut dan Mur Roda")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.bautdanmurroda,
      expression: "kiri.bautdanmurroda"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.bautdanmurroda, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "bautdanmurroda", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.bautdanmurroda,
      expression: "kiri.bautdanmurroda"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.bautdanmurroda, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "bautdanmurroda", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Baut dan Mur Roda Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.bautdanmurroda == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Baut dan Mur Roda Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kondisi dan Ukuran Ban")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kondisidanukuranban,
      expression: "kiri.kondisidanukuranban"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kondisidanukuranban, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kondisidanukuranban", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kondisidanukuranban,
      expression: "kiri.kondisidanukuranban"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kondisidanukuranban, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kondisidanukuranban", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kondisi dan Ukuran Ban Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.kondisidanukuranban == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kondisi dan Ukuran Ban Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Perisai Kolong")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.perisaikolong,
      expression: "kiri.perisaikolong"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.perisaikolong, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "perisaikolong", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.perisaikolong,
      expression: "kiri.perisaikolong"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.perisaikolong, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "perisaikolong", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Perisai Kolong Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.perisaikolong == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Perisai Kolong Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Tutup Tangki")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.tutuptangki,
      expression: "kiri.tutuptangki"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.tutuptangki, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "tutuptangki", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.tutuptangki,
      expression: "kiri.tutuptangki"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.tutuptangki, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "tutuptangki", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Tutup Tangki Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.tutuptangki == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Tutup Tangki Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Lampu Tanda Batas Samping")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.lamputandabatassamping,
      expression: "kiri.lamputandabatassamping"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.lamputandabatassamping, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "lamputandabatassamping", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.lamputandabatassamping,
      expression: "kiri.lamputandabatassamping"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.lamputandabatassamping, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "lamputandabatassamping", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Lampu Tanda Batas Samping Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.lamputandabatassamping == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Lampu Tanda Batas Samping Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Roda Kelima")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.rodakelima,
      expression: "kiri.rodakelima"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.rodakelima, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "rodakelima", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.rodakelima,
      expression: "kiri.rodakelima"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.rodakelima, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "rodakelima", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Roda Kelima Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.rodakelima == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Roda Kelima Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Kaki Penompang Tempelan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kakipenompangtempelan,
      expression: "kiri.kakipenompangtempelan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kakipenompangtempelan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kakipenompangtempelan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.kakipenompangtempelan,
      expression: "kiri.kakipenompangtempelan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.kakipenompangtempelan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "kakipenompangtempelan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Kaki Penompang Tempelan Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.kakipenompangtempelan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kaki Penompang Tempelan Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Alat Perangkai Tempelan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.alatperangkaitempelan,
      expression: "kiri.alatperangkaitempelan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.alatperangkaitempelan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "alatperangkaitempelan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Ya\n        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.kiri.alatperangkaitempelan,
      expression: "kiri.alatperangkaitempelan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.kiri.alatperangkaitempelan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.kiri, "alatperangkaitempelan", "0");
      }, function ($event) {
        return _vm.hasilujiTeknis("Alat Perangkai Tempelan Kiri", "-");
      }]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n            Tidak\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.kiri.alatperangkaitempelan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Alat Perangkai Tempelan Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: "Alasan Penolakan"
    },
    on: {
      ok: _vm.submit
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
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
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.catatan.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "nama", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nama ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nama[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-12 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, _vm._l(_vm.alasan, function (item) {
    return _c("label", {
      key: item.id,
      staticClass: "checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.catatan.alasan,
        expression: "catatan.alasan"
      }],
      attrs: {
        type: "checkbox",
        id: item.id
      },
      domProps: {
        value: item.alasanpenolakan,
        checked: Array.isArray(_vm.catatan.alasan) ? _vm._i(_vm.catatan.alasan, item.alasanpenolakan) > -1 : _vm.catatan.alasan
      },
      on: {
        change: function change($event) {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                  " + _vm._s(item.alasanpenolakan) + "\n              ")]);
  }), 0)])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos1/Pengujian.vue?vue&type=template&id=99d06430":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos1/Pengujian.vue?vue&type=template&id=99d06430 ***!
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
  return _c("div", {
    staticClass: "card card-custom",
    attrs: {
      id: "kt_card_3"
    }
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-3",
      modifiers: {
        "collapse-3": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-info btn-sm mr-1",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.back.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  }), _vm._v(" Prev\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-warning btn-sm mr-1",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.next.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-right"
  }), _vm._v(" Next\n            ")])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      visible: "",
      id: "collapse-3"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-2 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(" No Uji")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.nouji,
      expression: "identitaskendaraan.nouji"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "nouji",
      readonly: "",
      placeholder: "No Uji"
    },
    domProps: {
      value: _vm.identitaskendaraan.nouji
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "nouji", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-2 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("No Kendaraan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.noregistrasikendaraan,
      expression: "identitaskendaraan.noregistrasikendaraan\n                                "
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "nokend",
      readonly: "",
      placeholder: " No Kendaraan"
    },
    domProps: {
      value: _vm.identitaskendaraan.noregistrasikendaraan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "noregistrasikendaraan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Nama")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.nama,
      expression: "identitaskendaraan.nama"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "nama",
      readonly: "",
      placeholder: "nama"
    },
    domProps: {
      value: _vm.identitaskendaraan.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "nama", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-2 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Th. Pembuatan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.thpembuatan,
      expression: "identitaskendaraan.thpembuatan"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "number",
      name: "thpembuatan",
      placeholder: "Tahun Pembuatan"
    },
    domProps: {
      value: _vm.identitaskendaraan.thpembuatan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "thpembuatan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("JBB")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jbb,
      expression: "identitaskendaraan.jbb"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "number",
      name: "jbb",
      readonly: "",
      placeholder: "JBB"
    },
    domProps: {
      value: _vm.identitaskendaraan.jbb
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jbb", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Merek")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.merek,
      expression: "identitaskendaraan.merek"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "merek",
      readonly: "",
      placeholder: "Jenis"
    },
    domProps: {
      value: _vm.identitaskendaraan.merek
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "merek", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Jenis")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jenis,
      expression: "identitaskendaraan.jenis"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "jenis",
      readonly: "",
      placeholder: "Jenis"
    },
    domProps: {
      value: _vm.identitaskendaraan.jenis
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jenis", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("No Mesin")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.nomesin,
      expression: "identitaskendaraan.nomesin"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "nomesin",
      placeholder: "No Mesin"
    },
    domProps: {
      value: _vm.identitaskendaraan.nomesin
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "nomesin", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.ukuranban ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.ukuranban[0]) + "\n                        ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("No Rangka")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.norangka,
      expression: "identitaskendaraan.norangka"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "nomesin",
      placeholder: "No Rangka"
    },
    domProps: {
      value: _vm.identitaskendaraan.norangka
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "norangka", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.norangka ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.norangka[0]) + "\n                        ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Ukuran Ban")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.ukuranban,
      expression: "identitaskendaraan.ukuranban"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "ukuranban",
      placeholder: "Ukuran Ban"
    },
    domProps: {
      value: _vm.identitaskendaraan.ukuranban
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "ukuranban", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.ukuranban ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.ukuranban[0]) + "\n                        ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Bahan Bakar")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.bahanbakar,
      expression: "identitaskendaraan.bahanbakar"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "rumahrumah",
      placeholder: "Bahan Bakar"
    },
    domProps: {
      value: _vm.identitaskendaraan.bahanbakar
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "bahanbakar", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.bahanbakar ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.bahanbakar[0]) + "\n                        ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Tempat Duduk")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.dayaangkutorang,
      expression: "identitaskendaraan.dayaangkutorang"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "dayaangkutorang",
      placeholder: "Tempat Duduk"
    },
    domProps: {
      value: _vm.identitaskendaraan.dayaangkutorang
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "dayaangkutorang", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.dayaangkutorang ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.dayaangkutorang[0]) + "\n                        ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 text-center"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Warna")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.warna,
      expression: "identitaskendaraan.warna"
    }],
    staticClass: "form-control form-control-lg text-center",
    attrs: {
      type: "text",
      name: "warna",
      placeholder: "Warna"
    },
    domProps: {
      value: _vm.identitaskendaraan.warna
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "warna", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.warna ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.warna[0]) + "\n                        ")]) : _vm._e()])])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.identifikasi.notnkb == "0" || _vm.identifikasi.nouji == "0" || _vm.identifikasi.norangkalandasan == "0" || _vm.identifikasi.nomotorpenggerak == "0" ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Identifikasi Kendaraan\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-identifikasi",
      modifiers: {
        "collapse-identifikasi": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-identifikasi"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("identfikasi-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.dimensi.panjangkendaraan == "0" || _vm.dimensi.lebarkendaraan == "0" || _vm.dimensi.tinggikendaraan == "0" || _vm.dimensi.panjangbakatautangki == "0" || _vm.dimensi.tinggibakatautangki == "0" || _vm.dimensi.julurdepan == "0" || _vm.dimensi.julurbelakang == "0" || _vm.dimensi.p == "0" || _vm.dimensi.a == "0" || _vm.dimensi.jaraksumbu1_2 == "0" || _vm.dimensi.jaraksumbu2_3 == "0" || _vm.dimensi.jaraksumbu3_4 == "0" || _vm.dimensi.q == "0" || _vm.dimensi.r == "0" || _vm.dimensi.b == "0" || _vm.dimensi.jarakantaradindingterluar == "0" || _vm.dimensi.groundclearance == "0" || _vm.dimensi.lebarpintu == "0" || _vm.dimensi.tinggipintu == "0" || _vm.dimensi.tinggianaktangga == "0" || _vm.dimensi.lebaranaktangga == "0" || _vm.dimensi.lebarlorong == "0" || _vm.dimensi.tinggitempatberdiri == "0" || _vm.dimensi.lebartempatduduk == "0" || _vm.dimensi.jaraktempatduduk == "0" || _vm.dimensi.lebarpintudarurat == "0" || _vm.dimensi.panjangakseskeluar == "0" || _vm.dimensi.lebarakseskeluar == "0" || _vm.dimensi.jarakantarbumper == "0" ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Dimensi Kendaraan\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-dimensi",
      modifiers: {
        "collapse-dimensi": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-dimensi"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("dimensi-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.depan.kacadepan == "0" || _vm.depan.penyemprotair == "0" || _vm.depan.penghapuskaca == "0" || _vm.depan.bodidepan == "0" || _vm.depan.lamputandabatas == "0" || _vm.depan.lampuutamadekat == "0" || _vm.depan.lampuutamajauh == "0" || _vm.depan.lampupenunjukarah == "0" || _vm.depan.lampuposisidepan == "0" || _vm.depan.lampukabut == "0" || _vm.depan.kondisitempatnkbdepan == "0" ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Bagian Depan Kendaraan\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-depan",
      modifiers: {
        "collapse-depan": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-depan"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("depan-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.kanan.kacasampingkanan == "0" || _vm.kanan.kacaspion == "0" || _vm.kanan.pintusampingkanan == "0" || _vm.kanan.bodikanan == "0" || _vm.kanan.apctkanan == "0" || _vm.kanan.kompresorudara == "0" || _vm.kanan.bautdanmurroda == "0" || _vm.kanan.kondisidanukuranban == "0" || _vm.kanan.perisaikolong == "0" || _vm.kanan.tutuptangki == "0" || _vm.kanan.jaraksumbu2_3 == "0" || _vm.kanan.jaraksumbu3_4 == "0" || _vm.kanan.q == "0" || _vm.kanan.r == "0" || _vm.kanan.lamputandabatassamping == "0" || _vm.kanan.apar == "0" || _vm.kanan.rodakelima == "0" || _vm.kanan.kakipenompangtempelan == "0" || _vm.kanan.alatperangkaitempelan == "0" ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Bagian Samping Kanan Kendaraan\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-kanan",
      modifiers: {
        "collapse-kanan": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-kanan"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("kanan-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.belakang.apctbelakang == "0" || _vm.belakang.lampuposisibelakang == "0" || _vm.belakang.lampupenunjukarah == "0" || _vm.belakang.lampurem == "0" || _vm.belakang.lampumundur == "0" || _vm.belakang.lamputnkb == "0" || _vm.belakang.kondisitempatpemasangantnkb == "0" || _vm.belakang.lamputandabatas == "0" || _vm.belakang.kondisirodacadangan == "0" || _vm.belakang.spakbor == "0" || _vm.belakang.sistempembuangan == "0" ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Bagian Belakang Kendaraan\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-belakang",
      modifiers: {
        "collapse-belakang": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-belakang"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("belakang-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.kiri.kacasampingkiri == "0" || _vm.kiri.kacaspionkiri == "0" || _vm.kiri.kacaspionkiri == "0" || _vm.kiri.bodikiri == "0" || _vm.kiri.apctkiri == "0" || _vm.kiri.kompresorudara == "0" || _vm.kiri.bautdanmurroda == "0" || _vm.kiri.kondisidanukuranban == "0" || _vm.kiri.perisaikolong == "0" || _vm.kiri.tutuptangki == "0" || _vm.kiri.lamputandabatassamping == "0" || _vm.kiri.rodakelima == "0" || _vm.kiri.kakipenompangtempelan == "0" || _vm.kiri.alatperangkaitempelan == "0" ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Bagian Samping Kiri Kendaraan\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-kiri",
      modifiers: {
        "collapse-kiri": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-kiri"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("kiri-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.dalam.ruangkemudi == "0" || _vm.dalam.tempatduduk == "0" || _vm.dalam.dashboard == "0" || _vm.dalam.speedometer == "0" || _vm.dalam.instrumenpanel == "0" || _vm.dalam.alatcontrollampu == "0" || _vm.dalam.tabirmatahari == "0" || _vm.dalam.pandangankedepan == "0" || _vm.dalam.rodakemudi == "0" || _vm.dalam.batangkemudi == "0" || _vm.dalam.sabukkeselamatan == "0" || _vm.dalam.perlengkapan == "0" || _vm.dalam.remparkir == "0" || _vm.dalam.pedalremkaki == "0" || _vm.dalam.remgasbuang == "0" || _vm.dalam.sistemhampa == "0" ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Bagian Dalam Kendaraan\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-dalam",
      modifiers: {
        "collapse-dalam": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-dalam"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("dalam-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.laikjalan.alatuji_kedalamanalurban < 1 ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Ban\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-ban",
      modifiers: {
        "collapse-ban": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-ban"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("ban-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.status_lulusuji,
      expression: "status_lulusuji"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.status_lulusuji, "1")
    },
    on: {
      change: function change($event) {
        _vm.status_lulusuji = "1";
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                            Ya\n                        ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.status_lulusuji,
      expression: "status_lulusuji"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.status_lulusuji, "0")
    },
    on: {
      change: function change($event) {
        _vm.status_lulusuji = "0";
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                            Tidak\n                        ")])]), _vm._v(" "), _vm.errors.pos1 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.pos1[0]) + "\n                    ")]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    staticStyle: {
      width: "100%"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-save"
  }), _vm._v(" Save\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("button", {
    staticClass: "btn btn-warning",
    staticStyle: {
      width: "100%"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.close.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-close"
  }), _vm._v(" Close\n                ")])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label"
  }, [_vm._v("Pemereriksaan Uji Visual Kendaraan & Ban")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12"
  }, [_c("h3", [_vm._v("HASIL PENGUJIAN")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormBan.vue":
/*!***********************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormBan.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormBan_vue_vue_type_template_id_cfb365d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormBan.vue?vue&type=template&id=cfb365d8 */ "./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=template&id=cfb365d8");
/* harmony import */ var _FormBan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormBan.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormBan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormBan_vue_vue_type_template_id_cfb365d8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormBan_vue_vue_type_template_id_cfb365d8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormBan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormBan.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=template&id=cfb365d8":
/*!*****************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=template&id=cfb365d8 ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBan_vue_vue_type_template_id_cfb365d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormBan.vue?vue&type=template&id=cfb365d8 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBan.vue?vue&type=template&id=cfb365d8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBan_vue_vue_type_template_id_cfb365d8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBan_vue_vue_type_template_id_cfb365d8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormBelakang.vue":
/*!****************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormBelakang.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormBelakang_vue_vue_type_template_id_f00e085c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormBelakang.vue?vue&type=template&id=f00e085c */ "./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=template&id=f00e085c");
/* harmony import */ var _FormBelakang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormBelakang.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormBelakang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormBelakang_vue_vue_type_template_id_f00e085c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormBelakang_vue_vue_type_template_id_f00e085c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormBelakang.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBelakang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormBelakang.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBelakang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=template&id=f00e085c":
/*!**********************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=template&id=f00e085c ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBelakang_vue_vue_type_template_id_f00e085c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormBelakang.vue?vue&type=template&id=f00e085c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBelakang.vue?vue&type=template&id=f00e085c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBelakang_vue_vue_type_template_id_f00e085c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBelakang_vue_vue_type_template_id_f00e085c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormDalam.vue":
/*!*************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormDalam.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormDalam_vue_vue_type_template_id_3cec1bc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormDalam.vue?vue&type=template&id=3cec1bc0 */ "./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=template&id=3cec1bc0");
/* harmony import */ var _FormDalam_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormDalam.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormDalam_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormDalam_vue_vue_type_template_id_3cec1bc0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormDalam_vue_vue_type_template_id_3cec1bc0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormDalam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDalam_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormDalam.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDalam_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=template&id=3cec1bc0":
/*!*******************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=template&id=3cec1bc0 ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDalam_vue_vue_type_template_id_3cec1bc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormDalam.vue?vue&type=template&id=3cec1bc0 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDalam.vue?vue&type=template&id=3cec1bc0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDalam_vue_vue_type_template_id_3cec1bc0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDalam_vue_vue_type_template_id_3cec1bc0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormDepan.vue":
/*!*************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormDepan.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormDepan_vue_vue_type_template_id_9fd0587e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormDepan.vue?vue&type=template&id=9fd0587e */ "./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=template&id=9fd0587e");
/* harmony import */ var _FormDepan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormDepan.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormDepan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormDepan_vue_vue_type_template_id_9fd0587e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormDepan_vue_vue_type_template_id_9fd0587e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormDepan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDepan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormDepan.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDepan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=template&id=9fd0587e":
/*!*******************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=template&id=9fd0587e ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDepan_vue_vue_type_template_id_9fd0587e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormDepan.vue?vue&type=template&id=9fd0587e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDepan.vue?vue&type=template&id=9fd0587e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDepan_vue_vue_type_template_id_9fd0587e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDepan_vue_vue_type_template_id_9fd0587e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormDimensi.vue":
/*!***************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormDimensi.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormDimensi_vue_vue_type_template_id_32364bcc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormDimensi.vue?vue&type=template&id=32364bcc */ "./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=template&id=32364bcc");
/* harmony import */ var _FormDimensi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormDimensi.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormDimensi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormDimensi_vue_vue_type_template_id_32364bcc__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormDimensi_vue_vue_type_template_id_32364bcc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormDimensi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDimensi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormDimensi.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDimensi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=template&id=32364bcc":
/*!*********************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=template&id=32364bcc ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDimensi_vue_vue_type_template_id_32364bcc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormDimensi.vue?vue&type=template&id=32364bcc */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormDimensi.vue?vue&type=template&id=32364bcc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDimensi_vue_vue_type_template_id_32364bcc__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDimensi_vue_vue_type_template_id_32364bcc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormIdentifikasi.vue":
/*!********************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormIdentifikasi.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormIdentifikasi_vue_vue_type_template_id_42972a73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormIdentifikasi.vue?vue&type=template&id=42972a73 */ "./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=template&id=42972a73");
/* harmony import */ var _FormIdentifikasi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormIdentifikasi.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormIdentifikasi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormIdentifikasi_vue_vue_type_template_id_42972a73__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormIdentifikasi_vue_vue_type_template_id_42972a73__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormIdentifikasi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentifikasi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormIdentifikasi.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentifikasi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=template&id=42972a73":
/*!**************************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=template&id=42972a73 ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentifikasi_vue_vue_type_template_id_42972a73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormIdentifikasi.vue?vue&type=template&id=42972a73 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormIdentifikasi.vue?vue&type=template&id=42972a73");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentifikasi_vue_vue_type_template_id_42972a73__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormIdentifikasi_vue_vue_type_template_id_42972a73__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormKanan.vue":
/*!*************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormKanan.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormKanan_vue_vue_type_template_id_96b49a6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormKanan.vue?vue&type=template&id=96b49a6c */ "./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=template&id=96b49a6c");
/* harmony import */ var _FormKanan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormKanan.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormKanan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormKanan_vue_vue_type_template_id_96b49a6c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormKanan_vue_vue_type_template_id_96b49a6c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormKanan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKanan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormKanan.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKanan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=template&id=96b49a6c":
/*!*******************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=template&id=96b49a6c ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKanan_vue_vue_type_template_id_96b49a6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormKanan.vue?vue&type=template&id=96b49a6c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKanan.vue?vue&type=template&id=96b49a6c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKanan_vue_vue_type_template_id_96b49a6c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKanan_vue_vue_type_template_id_96b49a6c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormKiri.vue":
/*!************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormKiri.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormKiri_vue_vue_type_template_id_769c4840__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormKiri.vue?vue&type=template&id=769c4840 */ "./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=template&id=769c4840");
/* harmony import */ var _FormKiri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormKiri.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormKiri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormKiri_vue_vue_type_template_id_769c4840__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormKiri_vue_vue_type_template_id_769c4840__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormKiri.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKiri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormKiri.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKiri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=template&id=769c4840":
/*!******************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=template&id=769c4840 ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKiri_vue_vue_type_template_id_769c4840__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormKiri.vue?vue&type=template&id=769c4840 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKiri.vue?vue&type=template&id=769c4840");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKiri_vue_vue_type_template_id_769c4840__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKiri_vue_vue_type_template_id_769c4840__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/pos1/Pengujian.vue":
/*!****************************************************!*\
  !*** ./resources/js/view/pages/pos1/Pengujian.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pengujian_vue_vue_type_template_id_99d06430__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=template&id=99d06430 */ "./resources/js/view/pages/pos1/Pengujian.vue?vue&type=template&id=99d06430");
/* harmony import */ var _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=script&lang=js */ "./resources/js/view/pages/pos1/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pengujian_vue_vue_type_template_id_99d06430__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pengujian_vue_vue_type_template_id_99d06430__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/pos1/Pengujian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/pos1/Pengujian.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/view/pages/pos1/Pengujian.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos1/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/pos1/Pengujian.vue?vue&type=template&id=99d06430":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/pages/pos1/Pengujian.vue?vue&type=template&id=99d06430 ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_99d06430__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=template&id=99d06430 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos1/Pengujian.vue?vue&type=template&id=99d06430");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_99d06430__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_99d06430__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);