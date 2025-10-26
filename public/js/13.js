(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=script&lang=js ***!
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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);






function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lainlain: false,
      checkS1: true,
      checkS2: true,
      checkS3: true,
      checkS4: true,
      checkS5: true,
      checkS6: true
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])("pos4", {
    laikjalan: function laikjalan(state) {
      return state.laikjalan;
    },
    pengujian: function pengujian(state) {
      return state.pengujian;
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
    },
    urlApp: function urlApp(state) {
      return state.urlApp;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapMutations"])("pos4", ["CLEAR_FORM", "CLEAR_CATATAN", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapActions"])("pos4", ["submitCatatan", "getCatatan", "getAlasan", "getBrake", "submitBrake"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 4;
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
      if (this.laikjalan.alatuji_remparkirtangan < 12) {
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show();
      }
    },
    checkBeratSumbu: function checkBeratSumbu() {
      if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
        this.checkS1 = true;
        this.countEffS1();
      } else if (this.identitaskendaraan.beratsumbu1 > this.laikjalan.berats1) {
        var selisih = this.identitaskendaraan.beratsumbu1 - this.laikjalan.berats1;
        var validasi = this.identitaskendaraan.beratsumbu1 * 0.1;
        if (selisih < validasi) {
          this.checkS1 = false;
        } else if (selisih == validasi) {
          this.checkS1 = true;
        } else {
          this.checkS1 = true;
        }
        this.countEffS1();
      } else if (this.identitaskendaraan.beratsumbu1 < this.laikjalan.berats1) {
        var selisih = this.laikjalan.berats1 - this.identitaskendaraan.beratsumbu1;
        var validasi = this.identitaskendaraan.beratsumbu1 * 0.1;
        if (selisih < validasi) {
          this.checkS1 = false;
        } else if (selisih == validasi) {
          this.checkS1 = true;
        } else {
          this.checkS1 = true;
        }
        this.countEffS1();
      } else if (this.identitaskendaraan.beratsumbu1 === this.laikjalan.berats1) {
        this.checkS1 = true;
        this.countEffS1();
      } else {
        this.countEffS1();
        this.checkS1 = false;
      }
      if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
        this.checkS2 = true;
        this.countEffS2();
      } else if (this.identitaskendaraan.beratsumbu2 > this.laikjalan.berats2) {
        var selisih = this.identitaskendaraan.beratsumbu2 - this.laikjalan.berats2;
        var validasi = this.identitaskendaraan.beratsumbu2 * 0.1;
        if (selisih < validasi) {
          this.checkS2 = false;
        } else if (selisih == validasi) {
          this.checkS2 = true;
        } else {
          this.checkS2 = true;
        }
        this.countEffS2();
      } else if (this.identitaskendaraan.beratsumbu2 < this.laikjalan.berats2) {
        var selisih = this.laikjalan.berats2 - this.identitaskendaraan.beratsumbu2;
        var validasi = this.identitaskendaraan.beratsumbu2 * 0.1;
        if (selisih < validasi) {
          this.checkS2 = false;
        } else if (selisih == validasi) {
          this.checkS2 = true;
        } else {
          this.checkS2 = true;
        }
        this.countEffS2();
      } else if (this.identitaskendaraan.beratsumbu2 === this.laikjalan.berats2) {
        this.checkS2 = true;
        this.countEffS2();
      } else {
        this.checkS2 = false;
        this.countEffS2();
      }
      if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
        this.checkS3 = true;
        this.countEffS3();
      } else if (this.identitaskendaraan.beratsumbu3 > this.laikjalan.berats3) {
        var selisih = this.identitaskendaraan.beratsumbu3 - this.laikjalan.berats3;
        var validasi = this.identitaskendaraan.beratsumbu3 * 0.1;
        if (selisih < validasi) {
          this.checkS3 = false;
        } else if (selisih == validasi) {
          this.checkS3 = true;
        } else {
          this.checkS3 = true;
        }
        this.countEffS3();
      } else if (this.identitaskendaraan.beratsumbu3 < this.laikjalan.berats3) {
        var selisih = this.laikjalan.berats3 - this.identitaskendaraan.beratsumbu3;
        var validasi = this.identitaskendaraan.beratsumbu3 * 0.1;
        if (selisih < validasi) {
          this.checkS3 = false;
        } else if (selisih == validasi) {
          this.checkS3 = true;
        } else {
          this.checkS3 = true;
        }
        this.countEffS3();
      } else if (this.identitaskendaraan.beratsumbu3 === this.laikjalan.berats3) {
        this.checkS3 = true;
        this.countEffS3();
      } else {
        this.checkS3 = false;
        this.countEffS3();
      }
      if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
        this.checkS4 = true;
        this.countEffS4();
      } else if (this.identitaskendaraan.beratsumbu4 > this.laikjalan.berats4) {
        var selisih = this.identitaskendaraan.beratsumbu4 - this.laikjalan.berats4;
        var validasi = this.identitaskendaraan.beratsumbu4 * 0.1;
        if (selisih < validasi) {
          this.checkS4 = false;
        } else if (selisih == validasi) {
          this.checkS4 = true;
        } else {
          this.checkS4 = true;
        }
        this.countEffS4();
      } else if (this.identitaskendaraan.beratsumbu4 < this.laikjalan.berats4) {
        var selisih = this.laikjalan.berats4 - this.identitaskendaraan.beratsumbu4;
        var validasi = this.identitaskendaraan.beratsumbu4 * 0.1;
        if (selisih < validasi) {
          this.checkS4 = false;
        } else if (selisih == validasi) {
          this.checkS4 = true;
        } else {
          this.checkS4 = true;
        }
        this.countEffS4();
      } else if (this.identitaskendaraan.beratsumbu4 === this.laikjalan.berats4) {
        this.checkS4 = true;
        this.countEffS4();
      } else {
        this.checkS4 = false;
        this.countEffS4();
      }
      if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
        this.checkS5 = true;
        this.countEffS5();
      } else if (this.identitaskendaraan.beratsumbu5 > this.laikjalan.berats5) {
        var selisih = this.identitaskendaraan.beratsumbu5 - this.laikjalan.berats5;
        var validasi = this.identitaskendaraan.beratsumbu5 * 0.1;
        if (selisih < validasi) {
          this.checkS5 = false;
        } else if (selisih == validasi) {
          this.checkS5 = true;
        } else {
          this.checkS5 = true;
        }
        this.countEffS5();
      } else if (this.identitaskendaraan.beratsumbu5 < this.laikjalan.berats5) {
        var selisih = this.laikjalan.berats5 - this.identitaskendaraan.beratsumbu5;
        var validasi = this.identitaskendaraan.beratsumbu5 * 0.1;
        if (selisih < validasi) {
          this.checkS5 = false;
        } else if (selisih == validasi) {
          this.checkS5 = true;
        } else {
          this.checkS5 = true;
        }
        this.countEffS5();
      } else if (this.identitaskendaraan.beratsumbu5 === this.laikjalan.berats5) {
        this.checkS5 = true;
        this.countEffS5();
      } else {
        this.checkS5 = false;
        this.countEffS5();
      }
      if (this.identitaskendaraan.keterangan == 'Uji Pertama' || this.identitaskendaraan.keterangan == 'Mutasi Masuk' || this.identitaskendaraan.keterangan == 'Numpang Uji Masuk') {
        this.checkS6 = true;
        this.countEffS6();
      } else if (this.identitaskendaraan.beratsumbu6 > this.laikjalan.berats6) {
        var selisih = this.identitaskendaraan.beratsumbu6 - this.laikjalan.berats6;
        var validasi = this.identitaskendaraan.beratsumbu6 * 0.1;
        if (selisih < validasi) {
          this.checkS6 = false;
        } else if (selisih == validasi) {
          this.checkS6 = true;
        } else {
          this.checkS6 = true;
        }
        this.countEffS6();
      } else if (this.identitaskendaraan.beratsumbu6 < this.laikjalan.berats6) {
        var selisih = this.laikjalan.berats6 - this.identitaskendaraan.beratsumbu6;
        var validasi = this.identitaskendaraan.beratsumbu6 * 0.1;
        if (selisih < validasi) {
          this.checkS6 = false;
        } else if (selisih == validasi) {
          this.checkS6 = true;
        } else {
          this.checkS6 = true;
        }
        this.countEffS6();
      } else if (this.identitaskendaraan.beratsumbu6 === this.laikjalan.berats6) {
        this.checkS6 = true;
        this.countEffS6();
      } else {
        this.checkS6 = false;
        this.countEffS6();
      }
    },
    countEffS1: function countEffS1() {
      if (this.laikjalan.berats1 < 0 || this.laikjalan.berats1 === null) {
        this.laikjalan.berats1 = 0;
      }
      if (this.laikjalan.gayaremkiri1 < 0 || this.laikjalan.gayaremkiri1 === null) {
        this.laikjalan.gayaremkiri1 = 0;
      }
      if (this.laikjalan.gayaremkanan1 < 0 || this.laikjalan.gayaremkanan1 === null) {
        this.laikjalan.gayaremkanan1 = 0;
      }
      var kiri = 0;
      var kanan = 0;
      var total = 0;
      if (this.laikjalan.berats1 > 0) {
        kiri = this.laikjalan.gayaremkiri1;
        kanan = this.laikjalan.gayaremkanan1;
        total = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kiri) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kanan);
        this.pengujian.effsumbu1 = Math.ceil(total / this.laikjalan.berats1 * 100);
      }
      kiri = this.laikjalan.gayaremkiri1;
      kanan = this.laikjalan.gayaremkanan1;
      total = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kiri) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kanan);
      if (this.pengujian.effsumbu1 > 0) {
        this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan1 = Math.ceil(Math.abs(kiri - kanan) / this.laikjalan.berats1 * 100);
        this.totEffRem();
      }
      this.hasiluji();
    },
    countEffS2: function countEffS2() {
      if (this.laikjalan.berats2 < 0 || this.laikjalan.berats2 === null) {
        this.laikjalan.berats2 = 0;
      }
      if (this.laikjalan.gayaremkiri2 < 0 || this.laikjalan.gayaremkiri2 === null) {
        this.laikjalan.gayaremkiri2 = 0;
      }
      if (this.laikjalan.gayaremkanan2 < 0 || this.laikjalan.gayaremkanan2 === null) {
        this.laikjalan.gayaremkanan2 = 0;
      }
      var kiri = 0;
      var kanan = 0;
      var total = 0;
      if (this.laikjalan.berats2 > 0) {
        kiri = this.laikjalan.gayaremkiri2;
        kanan = this.laikjalan.gayaremkanan2;
        total = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kiri) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kanan);
        this.pengujian.effsumbu2 = Math.ceil(total / this.laikjalan.berats2 * 100);
        console.log(total + " /" + this.laikjalan.berats2);
      }
      if (this.pengujian.effsumbu2 > 0) {
        this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan2 = Math.ceil(Math.abs(kiri - kanan) / this.laikjalan.berats2 * 100);
        this.totEffRem();
      }
      this.hasiluji();
    },
    countEffS3: function countEffS3() {
      if (this.laikjalan.berats3 < 0 || this.laikjalan.berats3 === null) {
        this.laikjalan.berats3 = 0;
      }
      if (this.laikjalan.gayaremkiri3 < 0 || this.laikjalan.gayaremkiri3 === null) {
        this.laikjalan.gayaremkiri3 = 0;
      }
      if (this.laikjalan.gayaremkanan3 < 0 || this.laikjalan.gayaremkanan3 === null) {
        this.laikjalan.gayaremkanan3 = 0;
      }
      var kiri = 0;
      var kanan = 0;
      var total = 0;
      if (this.laikjalan.berats3 > 0) {
        kiri = this.laikjalan.gayaremkiri3;
        kanan = this.laikjalan.gayaremkanan3;
        total = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kiri) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kanan);
        this.pengujian.effsumbu3 = Math.ceil(total / this.laikjalan.berats3 * 100);
      }
      if (this.pengujian.effsumbu3 > 0) {
        this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan3 = Math.ceil(Math.abs(kiri - kanan) / this.laikjalan.berats3 * 100);
        this.totEffRem();
      }
      this.hasiluji();
    },
    countEffS4: function countEffS4() {
      if (this.laikjalan.berats4 < 0 || this.laikjalan.berats4 === null) {
        this.laikjalan.berats4 = 0;
      }
      "";
      if (this.laikjalan.gayaremkiri4 < 0 || this.laikjalan.gayaremkiri4 === null) {
        this.laikjalan.gayaremkiri4 = 0;
      }
      if (this.laikjalan.gayaremkanan4 < 0 || this.laikjalan.gayaremkanan4 === null) {
        this.laikjalan.gayaremkanan4 = 0;
      }
      var kiri = 0;
      var kanan = 0;
      var total = 0;
      if (this.laikjalan.berats4 > 0) {
        kiri = this.laikjalan.gayaremkiri4;
        kanan = this.laikjalan.gayaremkanan4;
        total = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kiri) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kanan);
        this.pengujian.effsumbu4 = Math.ceil(total / this.laikjalan.berats4 * 100);
      }
      if (this.pengujian.effsumbu4 > 0) {
        this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan4 = Math.ceil(Math.abs(kiri - kanan) / this.laikjalan.berats4 * 100);
        this.totEffRem();
      }
      this.hasiluji();
    },
    countEffS5: function countEffS5() {
      if (this.laikjalan.berats5 < 0 || this.laikjalan.berats5 === null) {
        this.laikjalan.berats5 = 0;
      }
      "";
      if (this.laikjalan.gayaremkiri5 < 0 || this.laikjalan.gayaremkiri5 === null) {
        this.laikjalan.gayaremkiri5 = 0;
      }
      if (this.laikjalan.gayaremkanan5 < 0 || this.laikjalan.gayaremkanan5 === null) {
        this.laikjalan.gayaremkanan5 = 0;
      }
      var kiri = 0;
      var kanan = 0;
      var total = 0;
      if (this.laikjalan.berats5 > 0) {
        kiri = this.laikjalan.gayaremkiri5;
        kanan = this.laikjalan.gayaremkanan5;
        total = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kiri) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kanan);
        this.pengujian.effsumbu5 = Math.ceil(total / this.laikjalan.berats5 * 100);
      }
      if (this.pengujian.effsumbu5 > 0) {
        this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan5 = Math.ceil(Math.abs(kiri - kanan) / this.laikjalan.berats5 * 100);
        this.totEffRem();
      }
      this.hasiluji();
    },
    countEffS6: function countEffS6() {
      if (this.laikjalan.berats6 < 0 || this.laikjalan.berats6 === null) {
        this.laikjalan.berats6 = 0;
      }
      "";
      if (this.laikjalan.gayaremkiri6 < 0 || this.laikjalan.gayaremkiri6 === null) {
        this.laikjalan.gayaremkiri6 = 0;
      }
      if (this.laikjalan.gayaremkanan6 < 0 || this.laikjalan.gayaremkanan6 === null) {
        this.laikjalan.gayaremkanan6 = 0;
      }
      var kiri = 0;
      var kanan = 0;
      var total = 0;
      if (this.laikjalan.berats6 > 0) {
        kiri = this.laikjalan.gayaremkiri6;
        kanan = this.laikjalan.gayaremkanan6;
        total = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kiri) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(kanan);
        this.pengujian.effsumbu6 = Math.ceil(total / this.laikjalan.berats6 * 100);
      }
      if (this.pengujian.effsumbu6 > 0) {
        this.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan6 = Math.ceil(Math.abs(kiri - kanan) / this.laikjalan.berats6 * 100);
        this.totEffRem();
      }
      this.hasiluji();
    },
    countEffParkir: function countEffParkir() {
      if (this.laikjalan.berats1 < 0 || this.laikjalan.berats1 === null) {
        this.laikjalan.berats1 = 0;
      }
      if (this.laikjalan.berats2 < 0 || this.laikjalan.berats2 === null) {
        this.laikjalan.berats2 = 0;
      }
      if (this.laikjalan.berats3 < 0 || this.laikjalan.berats3 === null) {
        this.laikjalan.berats3 = 0;
      }
      if (this.laikjalan.berats4 < 0 || this.laikjalan.berats4 === null) {
        this.laikjalan.berats4 = 0;
      }
      if (this.laikjalan.berats5 < 0 || this.laikjalan.berats5 === null) {
        this.laikjalan.berats5 = 0;
      }
      if (this.laikjalan.berats6 < 0 || this.laikjalan.berats6 === null) {
        this.laikjalan.berats6 = 0;
      }
      var totalBeratSumbu = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.berats1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.berats2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.berats3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.berats4) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.berats5) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.berats6);
      this.laikjalan.alatuji_remparkirtotalgayapengereman = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.alatuji_gayapengeremanparkirkiri) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.alatuji_gayapengeremanparkirkanan);
      this.laikjalan.alatuji_remparkirtangan = Math.ceil(this.laikjalan.alatuji_remparkirtotalgayapengereman / totalBeratSumbu * 100);
      this.hasiluji();
    },
    totEffRem: function totEffRem() {
      var i = 0;
      if (this.pengujian.effsumbu1 < 0 || this.pengujian.effsumbu1 === null) {
        this.pengujian.effsumbu1 = 0;
      }
      if (this.pengujian.effsumbu2 < 0 || this.pengujian.effsumbu2 === null) {
        this.pengujian.effsumbu2 = 0;
      }
      if (this.pengujian.effsumbu3 < 0 || this.pengujian.effsumbu3 === null) {
        this.pengujian.effsumbu3 = 0;
      }
      if (this.pengujian.effsumbu4 < 0 || this.pengujian.effsumbu4 === null) {
        this.pengujian.effsumbu4 = 0;
      }
      if (this.pengujian.effsumbu5 < 0 || this.pengujian.effsumbu5 === null) {
        this.pengujian.effsumbu5 = 0;
      }
      if (this.pengujian.effsumbu6 < 0 || this.pengujian.effsumbu6 === null) {
        this.pengujian.effsumbu6 = 0;
      }
      if (this.pengujian.effsumbu1 > 0) {
        i = 1;
      }
      if (this.pengujian.effsumbu2 > 0) {
        i = 2;
      }
      if (this.pengujian.effsumbu3 > 0) {
        i = 3;
      }
      if (this.pengujian.effsumbu4 > 0) {
        i = 4;
      }
      if (this.pengujian.effsumbu5 > 0) {
        i = 5;
      }
      if (this.pengujian.effsumbu6 > 0) {
        i = 6;
      }
      if (i == 1) {
        this.pengujian.totalgayarem = this.pengujian.effsumbu1;
        this.laikjalan.alatuji_remutamatotalgayapengereman = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan1);
      } else if (i == 2) {
        this.pengujian.totalgayarem = (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu2)) / i;
        this.laikjalan.alatuji_remutamatotalgayapengereman = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan2);
      } else if (i == 3) {
        this.pengujian.totalgayarem = (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu3)) / i;
        this.laikjalan.alatuji_remutamatotalgayapengereman = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan3);
      } else if (i == 4) {
        this.pengujian.totalgayarem = (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu4)) / i;
        this.laikjalan.alatuji_remutamatotalgayapengereman = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri4) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan4);
      } else if (i == 5) {
        this.pengujian.totalgayarem = (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu4) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu5)) / i;
        this.laikjalan.alatuji_remutamatotalgayapengereman = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri4) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan4) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri5) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan5);
      } else if (i == 4) {
        this.pengujian.totalgayarem = (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu4) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu5) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.pengujian.effsumbu6)) / i;
        this.laikjalan.alatuji_remutamatotalgayapengereman = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan2) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan3) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri4) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan4) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri5) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan5) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkiri6) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(this.laikjalan.gayaremkanan6);
      }
    },
    submit: function submit() {
      this.submitCatatan(this.$route.params.id).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
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
    },
    sendData: function sendData() {
      // const data = {
      //     noregistrasikendaraan: this.identitaskendaraan.noregistrasikendaraan,
      //     tipe: this.identitaskendaraan.tipe,
      //     thpembuatan: this.identitaskendaraan.thpembuatan,
      //     merek:this.identitaskendaraan.merek,
      //     beratkosong:this.identitaskendaraan.beratkosong,
      //     jenis:this.identitaskendaraan.jenis,
      // };
      // axios.post(this.urlApp+'vehicle',data)
      //     .then(response => {
      //         // console.log('Data kendaraan:', response.data);
      //     })
      //     .catch(error => {
      //         console.error('Terjadi kesalahan:', error);
      //     });
      this.submitBrake().then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
          title: "",
          text: "Success send Data",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    getData: function getData() {
      var _this = this;
      this.getBrake().then(function () {
        _this.totEffRem();
        _this.countEffParkir();
        _this.checkBeratSumbu();
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
          title: "",
          text: "Success Ambil Data",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_CATATAN();
    this.CLEAR_FORM();
  },
  created: function created() {
    var _this2 = this;
    this.CLEAR_CATATAN();
    this.CLEAR_FORM();
    setTimeout(function () {
      _this2.totEffRem();
      _this2.countEffParkir();
      _this2.checkBeratSumbu();
    }, 1000);
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("pos4", {
    catatan: function catatan(state) {
      return state.catatan;
    },
    alasan: function alasan(state) {
      return state.alasan;
    },
    pendaftaran: function pendaftaran(state) {
      return state.pendaftaran;
    },
    pengujian: function pengujian(state) {
      return state.pengujian;
    },
    laikjalan: function laikjalan(state) {
      return state.laikjalan;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("pos4", ["CLEAR_FORM", "CLEAR_CATATAN", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("pos4", ["submitCatatan", "getCatatan", "getAlasan"])), {}, {
    showModal: function showModal(nama, hasil) {
      this.CLEAR_CATATAN();
      this.catatan.nama = nama;
      this.catatan.hasiluji = hasil;
      this.catatan.pos = 4;
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
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos4/Pengujian.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos4/Pengujian.vue?vue&type=script&lang=js ***!
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
/* harmony import */ var _formPengujian_FormSpeedometer_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../formPengujian/FormSpeedometer.vue */ "./resources/js/view/pages/formPengujian/FormSpeedometer.vue");
/* harmony import */ var _formPengujian_FormRem_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formPengujian/FormRem.vue */ "./resources/js/view/pages/formPengujian/FormRem.vue");





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapMutations"])("pos4", ["CLEAR_FORM", "CLEAR_CATATAN", "CHECK_HASILUJI"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])("pos4", ["submitPos", "getIdentitaskendaraan", "editPos"])), {}, {
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
        name: "pos3.pengujian",
        params: {
          id: this.$route.params.id
        }
      });
    },
    next: function next() {
      this.$router.push({
        name: "verif.pengujian",
        params: {
          id: this.$route.params.id
        }
      });
    },
    uploadfoto: function uploadfoto() {
      window.open("/upload/" + this.$route.params.id + "/fotokendaraan", "_blank");
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])({
    identitaskendaraan: function identitaskendaraan(state) {
      return state.pos4.identitaskendaraan;
    },
    pendaftaran: function pendaftaran(state) {
      return state.pos4.pendaftaran;
    },
    laikjalan: function laikjalan(state) {
      return state.pos4.laikjalan;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(["currentUserPersonalInfo"])),
  components: {
    "posRem-form": _formPengujian_FormRem_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    "posSpeed-form": _formPengujian_FormSpeedometer_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=template&id=256167c2":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=template&id=256167c2 ***!
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
  return _c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.jumlah_sumbu,
      expression: "identitaskendaraan.jumlah_sumbu"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "2",
      name: "jumlah_sumbu",
      placeholder: "Jumlah Sumbu"
    },
    domProps: {
      value: _vm.identitaskendaraan.jumlah_sumbu
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "jumlah_sumbu", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 1 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu1,
      expression: "identitaskendaraan.beratsumbu1"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu1",
      placeholder: "berat sumbu 1",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu1
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu1", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu1 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu1[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 2 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu2,
      expression: "identitaskendaraan.beratsumbu2"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu2",
      placeholder: "berat sumbu 2",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu2
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu2 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu2[0]))]) : _vm._e()])]), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 3 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 3 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu3,
      expression: "identitaskendaraan.beratsumbu3"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu3",
      placeholder: "berat sumbu 3",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu3
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu3", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu3 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu3[0]))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 4 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 4 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu4,
      expression: "identitaskendaraan.beratsumbu4"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu4",
      placeholder: "berat sumbu 4",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu4
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu4", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 5 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 5 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu5,
      expression: "identitaskendaraan.beratsumbu5"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu5",
      placeholder: "berat sumbu 5",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu5
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu5", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 6 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 6 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu6,
      expression: "identitaskendaraan.beratsumbu6"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu6",
      placeholder: "berat sumbu 6",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu6
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu6", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 7 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 7 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu7,
      expression: "identitaskendaraan.beratsumbu7"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu7",
      placeholder: "berat sumbu 7",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu7
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu7", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 8 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 8 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu8,
      expression: "identitaskendaraan.beratsumbu8"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu4",
      placeholder: "berat sumbu 8",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu8
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu8", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 9 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 9 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu9,
      expression: "identitaskendaraan.beratsumbu9"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu4",
      placeholder: "berat sumbu 9",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu9
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu9", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 10 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 10 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu10,
      expression: "identitaskendaraan.beratsumbu10"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu10",
      placeholder: "berat sumbu 10",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu10
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu10", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 11 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 11 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu11,
      expression: "identitaskendaraan.beratsumbu11"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu11",
      placeholder: "berat sumbu 11",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu11
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu11", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 12 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 12 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.beratsumbu12,
      expression: "identitaskendaraan.beratsumbu12"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "beratsumbu12",
      placeholder: "berat sumbu 12",
      readonly: ""
    },
    domProps: {
      value: _vm.identitaskendaraan.beratsumbu12
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.identitaskendaraan, "beratsumbu12", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 1 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats1,
      expression: "laikjalan.berats1"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS1 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats1",
      placeholder: "berat sumbu 1"
    },
    domProps: {
      value: _vm.laikjalan.berats1
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats1");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats1", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  }), _vm._v(" "), _vm.errors.beratsumbu1 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu1[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 2 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats2,
      expression: "laikjalan.berats2"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS2 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats2",
      placeholder: "berat sumbu 2"
    },
    domProps: {
      value: _vm.laikjalan.berats2
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats2");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats2", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  }), _vm._v(" "), _vm.errors.beratsumbu2 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu2[0]))]) : _vm._e()])]), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 3 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 3 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats3,
      expression: "laikjalan.berats3"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS3 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats3",
      placeholder: "berat sumbu 3"
    },
    domProps: {
      value: _vm.laikjalan.berats3
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats3");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats3", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  }), _vm._v(" "), _vm.errors.beratsumbu3 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu3[0]))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 4 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 4 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats4,
      expression: "laikjalan.berats4"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS4 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats4",
      placeholder: "berat sumbu 4"
    },
    domProps: {
      value: _vm.laikjalan.berats4
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats4");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats4", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 5 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 5 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats5,
      expression: "laikjalan.berats5"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS5 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats5",
      placeholder: "berat sumbu 5"
    },
    domProps: {
      value: _vm.laikjalan.berats5
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats6");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats5", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 6 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 6 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats6,
      expression: "laikjalan.berats6"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS6 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats6",
      placeholder: "berat sumbu 6"
    },
    domProps: {
      value: _vm.laikjalan.berats6
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats6");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats6", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 7 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 7 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats7,
      expression: "laikjalan.berats7"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS7 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats7",
      placeholder: "berat sumbu 7"
    },
    domProps: {
      value: _vm.laikjalan.berats7
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats7");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats7", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 8 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 8 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats8,
      expression: "laikjalan.berats8"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS8 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats8",
      placeholder: "berat sumbu 8"
    },
    domProps: {
      value: _vm.laikjalan.berats8
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats8");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats8", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 9 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 9 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats9,
      expression: "laikjalan.berats9"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS9 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats9",
      placeholder: "berat sumbu 9"
    },
    domProps: {
      value: _vm.laikjalan.berats9
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats9");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats9", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 10 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 10 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats10,
      expression: "laikjalan.berats10"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS10 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats10",
      placeholder: "berat sumbu 10"
    },
    domProps: {
      value: _vm.laikjalan.berats10
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats10");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats10", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 11 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 11 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats11,
      expression: "laikjalan.berats11"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS11 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats11",
      placeholder: "berat sumbu 11"
    },
    domProps: {
      value: _vm.laikjalan.berats11
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats11");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats11", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 12 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Berat Sumbu 12 (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.berats12,
      expression: "laikjalan.berats12"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.checkS12 === false ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "berats12",
      placeholder: "berat sumbu 12"
    },
    domProps: {
      value: _vm.laikjalan.berats12
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("berats12");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "berats12", $event.target.value);
      }, _vm.checkBeratSumbu]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KIRI S1")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkiri1,
      expression: "laikjalan.gayaremkiri1"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats1 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkiri1",
      disabled: _vm.laikjalan.berats1 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkiri1
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkiri1");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkiri1", $event.target.value);
      }, _vm.countEffS1]
    }
  }), _vm._v(" "), _vm.errors.effsumbu1 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.effsumbu1[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KANAN S1")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkanan1,
      expression: "laikjalan.gayaremkanan1"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats1 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkanan1",
      disabled: _vm.laikjalan.berats1 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkanan1
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkanan1");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkanan1", $event.target.value);
      }, _vm.countEffS1]
    }
  }), _vm._v(" "), _vm.errors.effsumbu2 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.effsumbu2[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("EFF REM S1 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.effsumbu1,
      expression: "pengujian.effsumbu1"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.pengujian.effsumbu1 < 50 || _vm.pengujian.effsumbu1 > 100 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "effsumbu1",
      readonly: ""
    },
    domProps: {
      value: _vm.pengujian.effsumbu1
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "effsumbu1", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.effsumbu1 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.effsumbu1[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("PENYIMPANGAN REM S1 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan1,
      expression: "laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan1"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan1 > 8 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_remutamaselisihgayapengeremanrodakirikanan1",
      readonly: ""
    },
    domProps: {
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan1
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_remutamaselisihgayapengeremanrodakirikanan1", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan1 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan1[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KIRI S2")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkiri2,
      expression: "laikjalan.gayaremkiri2"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats2 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkiri2"
    },
    domProps: {
      value: _vm.laikjalan.gayaremkiri2
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkiri2");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkiri2", $event.target.value);
      }, _vm.countEffS2]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KANAN S2")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkanan2,
      expression: "laikjalan.gayaremkanan2"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats2 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkanan2",
      disabled: _vm.laikjalan.berats2 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkanan2
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkanan2");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkanan2", $event.target.value);
      }, _vm.countEffS2]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("EFF REM S2 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.effsumbu2,
      expression: "pengujian.effsumbu2"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.pengujian.effsumbu2 < 50 || _vm.pengujian.effsumbu2 > 100 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "effsumbu2",
      readonly: ""
    },
    domProps: {
      value: _vm.pengujian.effsumbu2
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "effsumbu2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.effsumbu2 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.effsumbu2[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("PENYIMPANGAN REM S2 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan2,
      expression: "laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan2"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan2 > 8 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_remutamaselisihgayapengeremanrodakirikanan2",
      readonly: ""
    },
    domProps: {
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan2
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_remutamaselisihgayapengeremanrodakirikanan2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan2 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan2[0]))]) : _vm._e()])]), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 3 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KIRI S3")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkiri3,
      expression: "laikjalan.gayaremkiri3"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats3 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkiri3",
      disabled: _vm.laikjalan.berats3 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkiri3
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkiri3");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkiri3", $event.target.value);
      }, _vm.countEffS3]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 3 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KANAN S3")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkanan3,
      expression: "laikjalan.gayaremkanan3"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats3 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkanan3",
      disabled: _vm.laikjalan.berats3 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkanan3
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkanan3");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkanan3", $event.target.value);
      }, _vm.countEffS3]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 3 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("EFF REM S3 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.effsumbu3,
      expression: "pengujian.effsumbu3"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "effsumbu3",
      readonly: ""
    },
    domProps: {
      value: _vm.pengujian.effsumbu3
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "effsumbu3", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 3 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("PENYIMPANGAN REM S3 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan3,
      expression: "laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan3"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan3 > 8 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "width",
      readonly: ""
    },
    domProps: {
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan3
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_remutamaselisihgayapengeremanrodakirikanan3", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan3 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan3[0]))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 4 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KIRI S4")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkiri4,
      expression: "laikjalan.gayaremkiri4"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats4 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkiri4",
      disabled: _vm.laikjalan.berats4 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkiri4
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkiri4");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkiri4", $event.target.value);
      }, _vm.countEffS4]
    }
  }), _vm._v(" "), _vm.errors.effsumbu3 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.effsumbu3[0]))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 4 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KANAN S4")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkanan4,
      expression: "laikjalan.gayaremkanan4"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats4 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkanan4",
      disabled: _vm.laikjalan.berats4 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkanan4
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkanan4");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkanan4", $event.target.value);
      }, _vm.countEffS4]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 4 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("EFF REM S4 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.effsumbu4,
      expression: "pengujian.effsumbu4"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "effsumbu4",
      readonly: ""
    },
    domProps: {
      value: _vm.pengujian.effsumbu4
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "effsumbu4", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.effsumbu4 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.effsumbu4[0]))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 4 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("PENYIMPANGAN REM S4 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan4,
      expression: "laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan4"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan4 > 8 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_remutamaselisihgayapengeremanrodakirikanan4",
      readonly: ""
    },
    domProps: {
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan4
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_remutamaselisihgayapengeremanrodakirikanan4", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan4 ? _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.alatuji_remutamaselisihgayapengeremanrodakirikanan4[0]))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 5 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KIRI S5")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkiri5,
      expression: "laikjalan.gayaremkiri5"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats5 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkiri5",
      disabled: _vm.laikjalan.berats5 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkiri5
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkiri5");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkiri5", $event.target.value);
      }, _vm.countEffS5]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 5 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KANAN S5")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkanan5,
      expression: "laikjalan.gayaremkanan5"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats5 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkanan5",
      disabled: _vm.laikjalan.berats5 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkanan5
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkanan5");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkanan5", $event.target.value);
      }, _vm.countEffS5]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 5 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("EFF REM S5 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.effsumbu5,
      expression: "pengujian.effsumbu5"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "effsumbu5",
      readonly: ""
    },
    domProps: {
      value: _vm.pengujian.effsumbu5
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "effsumbu5", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 5 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("PENYIMPANGAN REM S5 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan5,
      expression: "laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan5"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan5 > 8 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_remutamaselisihgayapengeremanrodakirikanan5",
      readonly: ""
    },
    domProps: {
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan5
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_remutamaselisihgayapengeremanrodakirikanan5", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 6 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KIRI S6")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkiri6,
      expression: "laikjalan.gayaremkiri6"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats6 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkiri6",
      disabled: _vm.laikjalan.berats6 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkiri6
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkiri6");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkiri6", $event.target.value);
      }, _vm.countEffS6]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 6 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("GAYA REM KANAN S6")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.gayaremkanan6,
      expression: "laikjalan.gayaremkanan6"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.berats6 > 0 ? "background-color: #F3F6F9;" : "background-color: #f5c842;",
    attrs: {
      type: "number",
      min: "0",
      name: "gayaremkanan6",
      disabled: _vm.laikjalan.berats6 <= 0
    },
    domProps: {
      value: _vm.laikjalan.gayaremkanan6
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("gayaremkanan6");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "gayaremkanan6", $event.target.value);
      }, _vm.countEffS6]
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 6 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("EFF REM S6 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.effsumbu6,
      expression: "pengujian.effsumbu6"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "effsumbu6",
      readonly: ""
    },
    domProps: {
      value: _vm.pengujian.effsumbu6
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "effsumbu6", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.jumlah_sumbu >= 6 ? _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("PENYIMPANGAN REM S6 (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan6,
      expression: "laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan6"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan6 > 8 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_remutamaselisihgayapengeremanrodakirikanan6",
      readonly: ""
    },
    domProps: {
      value: _vm.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan6
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_remutamaselisihgayapengeremanrodakirikanan6", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Total Eff Rem (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pengujian.totalgayarem,
      expression: "pengujian.totalgayarem"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.pengujian.totalgayarem < 50 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "totalgayarem",
      readonly: ""
    },
    domProps: {
      value: _vm.pengujian.totalgayarem
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.pengujian, "totalgayarem", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Total Gaya Rem (Kg)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_remutamatotalgayapengereman,
      expression: "laikjalan.alatuji_remutamatotalgayapengereman"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_remutamatotalgayapengereman",
      readonly: ""
    },
    domProps: {
      value: _vm.laikjalan.alatuji_remutamatotalgayapengereman
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_remutamatotalgayapengereman", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Gaya Rem Parkir Kiri")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_gayapengeremanparkirkiri,
      expression: "laikjalan.alatuji_gayapengeremanparkirkiri"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_gayapengeremanparkirkiri"
    },
    domProps: {
      value: _vm.laikjalan.alatuji_gayapengeremanparkirkiri
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("alatuji_gayapengeremanparkirkiri");
      },
      change: _vm.countEffParkir,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_gayapengeremanparkirkiri", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Gaya Rem Parkir Kanan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_gayapengeremanparkirkanan,
      expression: "laikjalan.alatuji_gayapengeremanparkirkanan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_gayapengeremanparkirkanan"
    },
    domProps: {
      value: _vm.laikjalan.alatuji_gayapengeremanparkirkanan
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("alatuji_gayapengeremanparkirkanan");
      },
      change: _vm.countEffParkir,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_gayapengeremanparkirkanan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Eff Rem Parkir")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_remparkirtangan,
      expression: "laikjalan.alatuji_remparkirtangan"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_remparkirtangan < 12 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_remparkirtangan",
      readonly: ""
    },
    domProps: {
      value: _vm.laikjalan.alatuji_remparkirtangan
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_remparkirtangan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Total Rem Parkir")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_remparkirtotalgayapengereman,
      expression: "laikjalan.alatuji_remparkirtotalgayapengereman"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "number",
      min: "0",
      name: "alatuji_remparkirtotalgayapengereman",
      readonly: ""
    },
    domProps: {
      value: _vm.laikjalan.alatuji_remparkirtotalgayapengereman
    },
    on: {
      focus: function focus($event) {
        return $event.target.select();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_remparkirtotalgayapengereman", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_vm._m(4), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.laikjalan.status_remkiri == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Rem Kiri", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_vm._m(5), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.laikjalan.status_remkanan == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Rem Kanan", "-");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_vm._m(6), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.laikjalan.status_remparkir == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("Rem Parkir", "Tangan : " + _vm.laikjalan.alatuji_remparkirtangan + "%, Kaki : " + _vm.laikjalan.alatuji_remparkirkaki + "%");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  })])]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: "Catatan Penolakan"
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
      type: "text"
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
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12"
  }, [_c("h3", [_vm._v("Jumlah Sumbu")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12"
  }, [_c("h3", [_vm._v("Berat Sumbu")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12"
  }, [_c("h3", [_vm._v("Berat Sumbu UJI")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12"
  }, [_c("h3", [_vm._v("KEMAMPUAN REM UTAMA")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Alasan Kiri")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Alasan Kanan")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Alasan Rem Parkir")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=template&id=678edaf4":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=template&id=678edaf4 ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.laikjalan.alatuji_penunjukkecepatan,
      expression: "laikjalan.alatuji_penunjukkecepatan"
    }],
    staticClass: "form-control form-control-lg",
    style: _vm.laikjalan.alatuji_penunjukkecepatan < 36 || _vm.laikjalan.alatuji_penunjukkecepatan > 46 ? "background-color: #DC143C;" : "background-color: #F3F6F9;",
    attrs: {
      type: "number",
      name: "alatuji_penunjukkecepatan",
      placeholder: "Speedometer"
    },
    domProps: {
      value: _vm.laikjalan.alatuji_penunjukkecepatan
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("alatuji_penunjukkecepatan");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.laikjalan, "alatuji_penunjukkecepatan", $event.target.value);
      }, _vm.hasiluji]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      disabled: _vm.laikjalan.status_speedometer == "1"
    },
    on: {
      click: function click($event) {
        return _vm.showModal("SPEEDOMETER", _vm.laikjalan.alatuji_penunjukkecepatan + " Km/jam");
      }
    }
  }, [_c("i", {
    staticClass: "far fa-window-close"
  }), _vm._v(" Alasan Penolakan\n      ")])])]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      title: "Catatan Penolakan"
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
    }), _vm._v(" "), _c("span"), _vm._v("\n                      " + _vm._s(item.alasanpenolakan) + "\n                  ")]);
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
      type: "text"
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos4/Pengujian.vue?vue&type=template&id=7eabe6aa":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos4/Pengujian.vue?vue&type=template&id=7eabe6aa ***!
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
    style: _vm.laikjalan.status_remparkir == 0 || _vm.laikjalan.status_remparkir == 0 ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        Rem\n                    ")])]), _vm._v(" "), _c("div", {
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
  }, [_c("posRem-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label",
    style: _vm.laikjalan.alatuji_penunjukkecepatan < 36 || _vm.laikjalan.alatuji_penunjukkecepatan > 46 ? "background-color: #DC143C;" : "background-color: #FFFFFF;"
  }, [_vm._v("\n                        AKURASI PENUNJUK KECEPATAN/SPEEDOMETER (Km/Jam)\n                    ")])]), _vm._v(" "), _c("div", {
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
  }, [_c("posSpeed-form")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "card card-custom"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c("img", _vm._b({
    attrs: {
      src: "/normal_images/" + _vm.identitaskendaraan.nouji + "-tampakdepan.jpg"
    }
  }, "img", _vm.size, false)), _vm._v(" "), _c("p", [_vm._v("Tampak Depan")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c("img", _vm._b({
    attrs: {
      src: "/normal_images/" + _vm.identitaskendaraan.nouji + "-tampakbelakang.jpg"
    }
  }, "img", _vm.size, false)), _vm._v(" "), _c("p", [_vm._v("Tampak Belakang")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c("img", _vm._b({
    attrs: {
      src: "/normal_images/" + _vm.identitaskendaraan.nouji + "-tampakkanan.jpg"
    }
  }, "img", _vm.size, false)), _vm._v(" "), _c("p", [_vm._v("Tampak Kanan")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 col-sm-12 text-center"
  }, [_c("img", _vm._b({
    attrs: {
      src: "/normal_images/" + _vm.identitaskendaraan.nouji + "-tampakkiri.jpg"
    }
  }, "img", _vm.size, false)), _vm._v(" "), _c("p", [_vm._v("Tampak Kiri")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-sm-12 text-center"
  }, [_c("a", {
    staticClass: "btn btn-sm btn-warning",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.uploadfoto.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "flaticon2-refresh"
  }), _vm._v("Upload\n                                Foto\n                            ")])])])])])], 1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
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
      value: _vm.pendaftaran.pos4,
      expression: "pendaftaran.pos4"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.pendaftaran.pos4, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.pendaftaran, "pos4", "1");
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                        Ya\n                    ")]), _vm._v(" "), _c("label", {
    staticClass: "radio radio-danger"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pendaftaran.pos4,
      expression: "pendaftaran.pos4"
    }],
    attrs: {
      type: "radio",
      disabled: "",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.pendaftaran.pos4, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.pendaftaran, "pos4", "0");
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
    staticClass: "card-title"
  }, [_c("h3", {
    staticClass: "card-label"
  }, [_vm._v("Foto Kendaraan Kendaraan")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12"
  }, [_c("h3", [_vm._v("HASIL PENGUJIAN")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormRem.vue":
/*!***********************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormRem.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormRem_vue_vue_type_template_id_256167c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormRem.vue?vue&type=template&id=256167c2 */ "./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=template&id=256167c2");
/* harmony import */ var _FormRem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRem.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormRem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormRem_vue_vue_type_template_id_256167c2__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormRem_vue_vue_type_template_id_256167c2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormRem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=template&id=256167c2":
/*!*****************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=template&id=256167c2 ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRem_vue_vue_type_template_id_256167c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRem.vue?vue&type=template&id=256167c2 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormRem.vue?vue&type=template&id=256167c2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRem_vue_vue_type_template_id_256167c2__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRem_vue_vue_type_template_id_256167c2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormSpeedometer.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormSpeedometer.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpeedometer_vue_vue_type_template_id_678edaf4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpeedometer.vue?vue&type=template&id=678edaf4 */ "./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=template&id=678edaf4");
/* harmony import */ var _FormSpeedometer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpeedometer.vue?vue&type=script&lang=js */ "./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpeedometer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpeedometer_vue_vue_type_template_id_678edaf4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpeedometer_vue_vue_type_template_id_678edaf4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/formPengujian/FormSpeedometer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpeedometer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpeedometer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpeedometer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=template&id=678edaf4":
/*!*************************************************************************************************!*\
  !*** ./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=template&id=678edaf4 ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpeedometer_vue_vue_type_template_id_678edaf4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpeedometer.vue?vue&type=template&id=678edaf4 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/formPengujian/FormSpeedometer.vue?vue&type=template&id=678edaf4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpeedometer_vue_vue_type_template_id_678edaf4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpeedometer_vue_vue_type_template_id_678edaf4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/pages/pos4/Pengujian.vue":
/*!****************************************************!*\
  !*** ./resources/js/view/pages/pos4/Pengujian.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pengujian_vue_vue_type_template_id_7eabe6aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=template&id=7eabe6aa */ "./resources/js/view/pages/pos4/Pengujian.vue?vue&type=template&id=7eabe6aa");
/* harmony import */ var _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pengujian.vue?vue&type=script&lang=js */ "./resources/js/view/pages/pos4/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pengujian_vue_vue_type_template_id_7eabe6aa__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pengujian_vue_vue_type_template_id_7eabe6aa__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/pos4/Pengujian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/pos4/Pengujian.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/view/pages/pos4/Pengujian.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos4/Pengujian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/pos4/Pengujian.vue?vue&type=template&id=7eabe6aa":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/pages/pos4/Pengujian.vue?vue&type=template&id=7eabe6aa ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_7eabe6aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengujian.vue?vue&type=template&id=7eabe6aa */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos4/Pengujian.vue?vue&type=template&id=7eabe6aa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_7eabe6aa__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengujian_vue_vue_type_template_id_7eabe6aa__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);