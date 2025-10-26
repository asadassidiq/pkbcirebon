(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=script&lang=js ***!
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
      lainlain: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos2", {
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos2", ["CLEAR_FORM", "CLEAR_CATATAN", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos2", ["submitCatatan", "getCatatan", "getAlasan", "SET_STATUS"])), {}, {
    showModal: function showModal(nama, hasil) {
      var _this = this;
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 2;
      this.catatan.status = '1';
      this.getAlasan();
      this.getCatatan(this.$route.params.id).then(function () {
        console.log(_this.catatan);
      });
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
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          confirmButtonClass: "btn btn-secondary"
        });
      });
    },
    hasilujiTeknis: function hasilujiTeknis() {
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
    this.hasilujiTeknis();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=script&lang=js ***!
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
      lainlain: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos2", {
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
    laikjalan: function laikjalan(state) {
      return state.laikjalan;
    },
    catatan: function catatan(state) {
      return state.catatan;
    },
    pendaftaran: function pendaftaran(state) {
      return state.pendaftaran;
    },
    identitaskendaraan: function identitaskendaraan(state) {
      return state.identitaskendaraan;
    },
    alasan: function alasan(state) {
      return state.alasan;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos2", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos2", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 2;
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
        this.catatan.rekomendasi = '';
      } else {
        this.lainlain = false;
      }
    },
    check: function check(nama, hasil) {
      if (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan < 2010 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 65 || this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 40 || this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan > 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 30 || this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan < 2010 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 65 || this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 40 || this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan > 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 35) {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.getAlasan();
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      } else if (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisicobahanbakarbensin > 4 || this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 1 || this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 0.5 || this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisicobahanbakarbensin > 4 || this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 1 || this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 0.5) {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.getAlasan();
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      } else if (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 1000 || this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 150 || this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 100 || this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 1100 || this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 200 || this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 150) {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.getAlasan();
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
    hasiluji: function hasiluji() {
      this.CHECK_HASILUJI();
    },
    isBarang: function isBarang(value) {
      return typeof value === 'string' && (value.startsWith("MOBIL BARANG") || value.startsWith("KERETA") || value.startsWith("MOBIL TANGKI") || value.startsWith("MOBIL PENARIK") || value.startsWith("KENDARAAN BERMOTOR RODA TIGA"));
    },
    isPenumpang: function isPenumpang(value) {
      return typeof value === 'string' && (value.startsWith("MOBIL PENUMPANG") || value.startsWith("MOBIL BUS") || value.startsWith("KENDARAAN KHUSUS"));
    },
    ambangBatas: function ambangBatas() {
      var ambang = '';
      if (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007) {
        ambang = 'Co : 4% & HC : 1000 Ppm';
      } else if (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018) {
        ambang = 'Co : 1% & HC : 150 Ppm';
      } else if (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018) {
        ambang = 'Co : 0.5% & HC : 100 Ppm';
      } else if (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007) {
        ambang = 'Co : 4% & HC : 1100 Ppm';
      } else if (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018) {
        ambang = 'Co : 1% & HC : 200 Ppm';
      } else if (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018) {
        ambang = 'Co : 0.5% & HC : 150 Ppm';
      } else if (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan < 2010) {
        ambang = '65% HSU';
      } else if (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021) {
        ambang = '40% HSU';
      } else if (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan > 2021) {
        ambang = '30% HSU';
      } else if (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan < 2010) {
        ambang = '65% HSU';
      } else if (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021) {
        ambang = '40% HSU';
      } else if (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan > 2021) {
        ambang = '34% HSU';
      }
      return ambang;
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
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos2", {
    laikjalan: function laikjalan(state) {
      return state.laikjalan;
    },
    catatan: function catatan(state) {
      return state.catatan;
    },
    pendaftaran: function pendaftaran(state) {
      return state.pendaftaran;
    },
    alasan: function alasan(state) {
      return state.alasan;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos2", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos2", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 2;
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
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos2/Pengujian.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos2/Pengujian.vue?vue&type=script&lang=js ***!
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
/* harmony import */ var _formPengujian_FormKebisingan_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../formPengujian/FormKebisingan.vue */ "./resources/js/view/pages/formPengujian/FormKebisingan.vue");
/* harmony import */ var _formPengujian_FormEmisi_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formPengujian/FormEmisi.vue */ "./resources/js/view/pages/formPengujian/FormEmisi.vue");
/* harmony import */ var _formPengujian_FormBawah_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../formPengujian/FormBawah.vue */ "./resources/js/view/pages/formPengujian/FormBawah.vue");





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapMutations"])("pos2", ["CLEAR_FORM", "CLEAR_CATATAN", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])("pos2", ["submitPos", "getIdentitaskendaraan", "editPos", "CLEAR_FORM"])), {}, {
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
    hasiluji: function hasiluji() {
      this.CHECK_HASILUJI();
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
        name: "pos3.pengujian",
        params: {
          id: this.$route.params.id
        }
      });
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])({
    identitaskendaraan: function identitaskendaraan(state) {
      return state.pos2.identitaskendaraan;
    },
    pendaftaran: function pendaftaran(state) {
      return state.pos2.pendaftaran;
    },
    laikjalan: function laikjalan(state) {
      return state.pos2.laikjalan;
    },
    bawah: function bawah(state) {
      return state.pos2.bawah;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(["currentUserPersonalInfo"])),
  components: {
    "pos-form": _formPengujian_FormKebisingan_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    "emisi-form": _formPengujian_FormEmisi_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    "bawah-form": _formPengujian_FormBawah_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=template&id=5a015404":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=template&id=5a015404 ***!
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
  }, [_vm._v("Sistem Kemudi")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistemkemudi,
      expression: "bawah.sistemkemudi"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistemkemudi, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistemkemudi", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Ya\n                ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistemkemudi,
      expression: "bawah.sistemkemudi"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistemkemudi, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistemkemudi", "0");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Tidak\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.bawah.sistemkemudi == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Sistem Kemudi", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Sistem Suspensi")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistemsuspensi,
      expression: "bawah.sistemsuspensi"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistemsuspensi, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistemsuspensi", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Ya\n                ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistemsuspensi,
      expression: "bawah.sistemsuspensi"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistemsuspensi, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistemsuspensi", "0");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Tidak\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.bawah.sistemsuspensi == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Sistem Suspensi", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Sistem Rem")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistemrem,
      expression: "bawah.sistemrem"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistemrem, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistemrem", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Ya\n                ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistemrem,
      expression: "bawah.sistemrem"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistemrem, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistemrem", "0");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Tidak\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.bawah.sistemrem == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Sistem Rem", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Sistem Roda")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistemroda,
      expression: "bawah.sistemroda"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistemroda, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistemroda", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Ya\n                ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistemroda,
      expression: "bawah.sistemroda"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistemroda, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistemroda", "0");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Tidak\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.bawah.sistemroda == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Sistem Roda", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Rangka Landasan")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.rangkalandasan,
      expression: "bawah.rangkalandasan"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.rangkalandasan, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "rangkalandasan", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Ya\n                ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.rangkalandasan,
      expression: "bawah.rangkalandasan"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.rangkalandasan, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "rangkalandasan", "0");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Tidak\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.bawah.rangkalandasan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Rangka Landasan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Sistem Penerus Daya")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistempenerusdaya,
      expression: "bawah.sistempenerusdaya"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistempenerusdaya, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistempenerusdaya", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Ya\n                ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.sistempenerusdaya,
      expression: "bawah.sistempenerusdaya"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.sistempenerusdaya, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "sistempenerusdaya", "0");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Tidak\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.bawah.sistempenerusdaya == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Sistem Penerus Daya", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row",
    staticStyle: {
      margin: "0px",
      "border-bottom": "1px solid"
    }
  }, [_c("label", {
    staticClass: "col-3 col-form-label"
  }, [_vm._v("Motor Penggerak")]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.motorpenggerak,
      expression: "bawah.motorpenggerak"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.motorpenggerak, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "motorpenggerak", "1");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Ya\n                ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bawah.motorpenggerak,
      expression: "bawah.motorpenggerak"
    }],
    attrs: {
      type: "radio",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.bawah.motorpenggerak, "0")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.bawah, "motorpenggerak", "0");
      }, _vm.hasilujiTeknis]
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Tidak\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.bawah.motorpenggerak == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Motor Penggerak", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c("b-modal", {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                        " + _vm._s(item.alasanpenolakan) + "\n                    ")]);
  }), 0)])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=template&id=2f8ad09c":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=template&id=2f8ad09c ***!
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
  return _c("div", {
    staticClass: "row"
  }, [_vm.identitaskendaraan.bahanbakar == "SOLAR" || _vm.identitaskendaraan.bahanbakar == "Solar" ? _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("EMISI GAS BUANG ASAP (HSU)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_emisiasapbahanbakarsolar,
      expression: "laikjalan.alatuji_emisiasapbahanbakarsolar"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.identitaskendaraan.jbb <= 3500 && _vm.identitaskendaraan.thpembuatan < 2010 && _vm.laikjalan.alatuji_emisiasapbahanbakarsolar > 65 || _vm.identitaskendaraan.jbb <= 3500 && _vm.identitaskendaraan.thpembuatan >= 2010 && _vm.identitaskendaraan.thpembuatan <= 2021 && _vm.laikjalan.alatuji_emisiasapbahanbakarsolar > 40 || _vm.identitaskendaraan.jbb <= 3500 && _vm.identitaskendaraan.thpembuatan > 2021 && _vm.laikjalan.alatuji_emisiasapbahanbakarsolar > 30 || _vm.identitaskendaraan.jbb > 3500 && _vm.identitaskendaraan.thpembuatan < 2010 && _vm.laikjalan.alatuji_emisiasapbahanbakarsolar > 65 || _vm.identitaskendaraan.jbb > 3500 && _vm.identitaskendaraan.thpembuatan >= 2010 && _vm.identitaskendaraan.thpembuatan <= 2021 && _vm.laikjalan.alatuji_emisiasapbahanbakarsolar > 40 || _vm.identitaskendaraan.jbb > 3500 && _vm.identitaskendaraan.thpembuatan > 2021 && _vm.laikjalan.alatuji_emisiasapbahanbakarsolar > 35 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      name: "alatuji_emisiasapbahanbakarsolar"
    },
    domProps: {
      value: _vm.laikjalan.alatuji_emisiasapbahanbakarsolar
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("alatuji_emisiasapbahanbakarsolar");
      },
      change: [function ($event) {
        _vm.check("Emisi Gas Buang Asap (Solar)", _vm.laikjalan.alatuji_emisiasapbahanbakarsolar + " HSU");
      }, _vm.hasiluji],
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_emisiasapbahanbakarsolar", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.bahanbakar == "BENSIN" || _vm.identitaskendaraan.bahanbakar == "Bensin" ? _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("EMISI GAS BUANG CO (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_emisicobahanbakarbensin,
      expression: "laikjalan.alatuji_emisicobahanbakarbensin"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.isPenumpang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan < 2007 && _vm.laikjalan.alatuji_emisicobahanbakarbensin > 4 || _vm.isPenumpang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan >= 2007 && _vm.identitaskendaraan.thpembuatan <= 2018 && _vm.laikjalan.alatuji_emisicobahanbakarbensin > 1 || _vm.isPenumpang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan > 2018 && _vm.laikjalan.alatuji_emisicobahanbakarbensin > 0.5 || _vm.isBarang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan < 2007 && _vm.laikjalan.alatuji_emisicobahanbakarbensin > 4 || _vm.isBarang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan >= 2007 && _vm.identitaskendaraan.thpembuatan <= 2018 && _vm.laikjalan.alatuji_emisicobahanbakarbensin > 1 || _vm.isBarang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan > 2018 && _vm.laikjalan.alatuji_emisicobahanbakarbensin > 0.5 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      name: "alatuji_emisicobahanbakarbensin"
    },
    domProps: {
      value: _vm.laikjalan.alatuji_emisicobahanbakarbensin
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("alatuji_emisicobahanbakarbensin");
      },
      change: [function ($event) {
        _vm.check("Emisi Gas Buang CO (Bensin)", _vm.laikjalan.alatuji_emisicobahanbakarbensin + " %");
      }, _vm.hasiluji],
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_emisicobahanbakarbensin", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.bahanbakar == "BENSIN" || _vm.identitaskendaraan.bahanbakar == "Bensin" ? _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("EMISI GAS BUANG HC (Ppm)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_emisihcbahanbakarbensin,
      expression: "laikjalan.alatuji_emisihcbahanbakarbensin"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.isPenumpang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan < 2007 && _vm.laikjalan.alatuji_emisihcbahanbakarbensin > 1000 || _vm.isPenumpang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan >= 2007 && _vm.identitaskendaraan.thpembuatan <= 2018 && _vm.laikjalan.alatuji_emisihcbahanbakarbensin > 150 || _vm.isPenumpang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan > 2018 && _vm.laikjalan.alatuji_emisihcbahanbakarbensin > 100 || _vm.isBarang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan < 2007 && _vm.laikjalan.alatuji_emisihcbahanbakarbensin > 1100 || _vm.isBarang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan >= 2007 && _vm.identitaskendaraan.thpembuatan <= 2018 && _vm.laikjalan.alatuji_emisihcbahanbakarbensin > 200 || _vm.isBarang(_vm.identitaskendaraan.jenis) && _vm.identitaskendaraan.thpembuatan > 2018 && _vm.laikjalan.alatuji_emisihcbahanbakarbensin > 150 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      name: "alatuji_emisihcbahanbakarbensin"
    },
    domProps: {
      value: _vm.laikjalan.alatuji_emisihcbahanbakarbensin
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("alatuji_emisihcbahanbakarbensin");
      },
      change: [function ($event) {
        _vm.check("Emisi Gas Buang HC (Bensin)", _vm.laikjalan.alatuji_emisihcbahanbakarbensin + " PPM");
      }, _vm.hasiluji],
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_emisihcbahanbakarbensin", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("b-modal", {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                        " + _vm._s(item.alasanpenolakan) + "\n                    ")]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: "exampleSelect1"
    }
  }, [_vm._v("Rekomendasi Perbaikan "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.catatan.rekomendasi,
      expression: "catatan.rekomendasi"
    }],
    staticClass: "form-control",
    attrs: {
      id: "exampleSelect1"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.catatan, "rekomendasi", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.lain]
    }
  }, [_c("option", [_vm._v("Perbaikan")]), _vm._v(" "), _c("option", [_vm._v("Penggantian")]), _vm._v(" "), _c("option", [_vm._v("Penyetelan")]), _vm._v(" "), _c("option", [_vm._v("Lain-lain")])]), _vm._v(" "), _vm.lainlain ? _c("input", {
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
      type: "text",
      placeholder: "Rekomendasi"
    },
    domProps: {
      value: _vm.catatan.rekomendasi
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catatan, "rekomendasi", $event.target.value);
      }
    }
  }) : _vm._e()])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=template&id=538ffae8":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=template&id=538ffae8 ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "col-6 col-form-label"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_tingkatkebisingan,
      expression: "laikjalan.alatuji_tingkatkebisingan"
    }],
    ref: "alatuji_tingkatkebisingan",
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_tingkatkebisingan"
    },
    domProps: {
      value: _vm.laikjalan.alatuji_tingkatkebisingan
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("alatuji_tingkatkebisingan");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_tingkatkebisingan", $event.target.value);
      }, _vm.hasilujilajur]
    }
  }), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "radio-inline"
  }, [_c("label", {
    staticClass: "radio radio-success"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.status_kebisingan,
      expression: "laikjalan.status_kebisingan"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.laikjalan.status_kebisingan, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.laikjalan, "status_kebisingan", "1");
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Ya\n                ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.status_kebisingan,
      expression: "laikjalan.status_kebisingan"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.laikjalan.status_kebisingan, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.laikjalan, "status_kebisingan", "0");
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                    Tidak\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.laikjalan.status_kebisingan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Kebisingan suara", _vm.laikjalan.alatuji_tingkatkebisingan + " Db");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n            ")])])]), _vm._v(" "), _c("b-modal", {
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                        " + _vm._s(item.alasanpenolakan) + "\n                    ")]);
  }), 0)])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("Db")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos2/Pengujian.vue?vue&type=template&id=0cf33829":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos2/Pengujian.vue?vue&type=template&id=0cf33829 ***!
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
      expression: "identitaskendaraan.noregistrasikendaraan"
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
      name: "bahanbakar",
      readonly: "",
      placeholder: "JBB"
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
  }, [_vm._v(_vm._s(_vm.errors.ukuranban[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
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
      type: "text",
      name: "jbb",
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
  }), _vm._v(" "), _vm.errors.jbb ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jbb[0]))]) : _vm._e()])])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.laikjalan.status_emisibensin < 1 || _vm.laikjalan.status_emisisolar < 1 ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Emisi\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-emisi",
      modifiers: {
        "collapse-emisi": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-emisi",
      visible: ""
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("emisi-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.bawah.rangkalandasan < 1 || _vm.bawah.motorpenggerak < 1 || _vm.bawah.sistempenerusdaya < 1 || _vm.bawah.sistemkemudi < 1 || _vm.bawah.sistemsuspensi < 1 || _vm.bawah.sistemroda < 1 || _vm.bawah.sistemrem < 1 ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Bagian Bawah\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-bawah",
      modifiers: {
        "collapse-bawah": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-bawah"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("bawah-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.laikjalan.status_kebisingan < 1 ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Kebisingan Suara\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-emisi",
      modifiers: {
        "collapse-emisi": true
      }
    }],
    staticClass: "btn btn-icon btn-circle btn-sm btn-light-primary mr-1"
  }, [_c("i", {
    staticClass: "ki ki-arrow-down icon-nm"
  })])], 1)]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "collapse-emisi",
      visible: ""
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("pos-form")], 1)])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
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
      value: _vm.pendaftaran.pos2,
      expression: "pendaftaran.pos2"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.pendaftaran.pos2, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.pendaftaran, "pos2", "1");
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                        Ya\n                    ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pendaftaran.pos2,
      expression: "pendaftaran.pos2"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.pendaftaran.pos2, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.pendaftaran, "pos2", "0");
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                        Tidak\n                    ")])])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Kendaraan")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12"
  }, [_c("h3", [_vm._v("HASIL PENGUJIAN")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormBawah.vue":
/*!*************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormBawah.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormBawah_vue_vue_type_template_id_5a015404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormBawah.vue?vue&type=template&id=5a015404 */ "./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=template&id=5a015404");
/* harmony import */ var _FormBawah_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormBawah.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormBawah_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormBawah_vue_vue_type_template_id_5a015404__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormBawah_vue_vue_type_template_id_5a015404__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormBawah.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBawah_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormBawah.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBawah_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=template&id=5a015404":
/*!*******************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=template&id=5a015404 ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBawah_vue_vue_type_template_id_5a015404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormBawah.vue?vue&type=template&id=5a015404 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormBawah.vue?vue&type=template&id=5a015404");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBawah_vue_vue_type_template_id_5a015404__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormBawah_vue_vue_type_template_id_5a015404__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormEmisi.vue":
/*!*************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormEmisi.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormEmisi_vue_vue_type_template_id_2f8ad09c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormEmisi.vue?vue&type=template&id=2f8ad09c */ "./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=template&id=2f8ad09c");
/* harmony import */ var _FormEmisi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormEmisi.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormEmisi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormEmisi_vue_vue_type_template_id_2f8ad09c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormEmisi_vue_vue_type_template_id_2f8ad09c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormEmisi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmisi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEmisi.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmisi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=template&id=2f8ad09c":
/*!*******************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=template&id=2f8ad09c ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmisi_vue_vue_type_template_id_2f8ad09c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEmisi.vue?vue&type=template&id=2f8ad09c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormEmisi.vue?vue&type=template&id=2f8ad09c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmisi_vue_vue_type_template_id_2f8ad09c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmisi_vue_vue_type_template_id_2f8ad09c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormKebisingan.vue":
/*!******************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormKebisingan.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormKebisingan_vue_vue_type_template_id_538ffae8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormKebisingan.vue?vue&type=template&id=538ffae8 */ "./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=template&id=538ffae8");
/* harmony import */ var _FormKebisingan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormKebisingan.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormKebisingan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormKebisingan_vue_vue_type_template_id_538ffae8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormKebisingan_vue_vue_type_template_id_538ffae8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormKebisingan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKebisingan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormKebisingan.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKebisingan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=template&id=538ffae8":
/*!************************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=template&id=538ffae8 ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKebisingan_vue_vue_type_template_id_538ffae8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormKebisingan.vue?vue&type=template&id=538ffae8 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormKebisingan.vue?vue&type=template&id=538ffae8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKebisingan_vue_vue_type_template_id_538ffae8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormKebisingan_vue_vue_type_template_id_538ffae8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/pos2/Pengujian.vue":
/*!****************************************************!*\
  !*** ./resources/js/view/pages/pos2/Pengujian.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pengujian_vue_vue_type_template_id_0cf33829__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=template&id=0cf33829 */ "./resources/js/view/pages/pos2/Pengujian.vue?vue&type=template&id=0cf33829");
/* harmony import */ var _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=script&lang=js */ "./resources/js/view/pages/pos2/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pengujian_vue_vue_type_template_id_0cf33829__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pengujian_vue_vue_type_template_id_0cf33829__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/pos2/Pengujian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/pos2/Pengujian.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/view/pages/pos2/Pengujian.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos2/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/pos2/Pengujian.vue?vue&type=template&id=0cf33829":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/pages/pos2/Pengujian.vue?vue&type=template&id=0cf33829 ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_0cf33829__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=template&id=0cf33829 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos2/Pengujian.vue?vue&type=template&id=0cf33829");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_0cf33829__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_0cf33829__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);