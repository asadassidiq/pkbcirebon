(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker/dist/locale */ "./node_modules/vuejs-datepicker/dist/locale/index.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    this.tgl = yyyy + "-" + mm + "-" + dd;
    this.bulan = yyyy + "-" + mm;
    this.bulan1 = yyyy + "-" + mm;
    this.bulan2 = yyyy + "-" + mm;
    this.tahun = "2024";
    this.tahun1 = "2024";
    this.tahun2 = "2024";
    this.getJenis().then(function () {});
    this.getKotas();
    this.$store.commit("pendaftaran/SET_KOTA", "Kabupaten Sragen");
    this.getKecamatans("Kabupaten Sragen");
  },
  data: function data() {
    return {
      // users: {}
      search: "",
      dataHarian: "",
      tgl: "",
      tgl1: "",
      bulan: "",
      bulan1: "",
      bulan2: "",
      tahun: "",
      tahun1: "",
      tahun2: "",
      id: vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_3__["id"],
      jenispendaftaran: "",
      jeniskendaraan: "",
      peruntukan: "",
      jbb: "",
      kota: "Kabupaten Sragen",
      disabled1: 1,
      disabled2: 1,
      kecamatan: "",
      kelurahan: "",
      tglrange1: "",
      tglrange2: ""
    };
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Cetak"
    }, {
      title: "Laporan Kendaraan"
    }]);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("pendaftaran", {
    jenis: function jenis(state) {
      return state.jenis;
    },
    kotas: function kotas(state) {
      return state.kotas;
    },
    kecamatans: function kecamatans(state) {
      return state.kecamatans;
    },
    kelurahans: function kelurahans(state) {
      return state.kelurahans;
    },
    identitaskendaraan: function identitaskendaraan(state) {
      return state.identitaskendaraan;
    }
  })),
  watch: {},
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("pendaftaran", ["getKotas", "getKecamatans", "getKelurahans2", "getJenis"])), {}, {
    setKota: function setKota(value) {
      this.kota = value.nama;
      this.getKecamatans(value.nama);
      this.$store.commit("pendaftaran/SET_KOTA", value.nama);
      this.disabled1 = 0;
    },
    setKecamatan: function setKecamatan(value) {
      this.kecamatan = value.nama;
      this.getKelurahans2(value.nama);
      this.disabled2 = 0;
    },
    setKelurahan: function setKelurahan(value) {
      this.kelurahan = value.nama;
    },
    printharian: function printharian() {
      this.tgl = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tgl).format("YYYY-MM-DD");
      window.open("/cetak/" + this.tgl + '/' + this.dataHarian, "_blank");
    },
    exportharian: function exportharian() {
      this.tgl = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tgl).format("YYYY-MM-DD");
      window.open("/export/" + this.tgl + "/laporanharian", "_blank");
    },
    customFormatter: function customFormatter(date) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("YYYY-MM-DD");
    },
    customFormatter2: function customFormatter2(date) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("YYYY-MM");
    },
    customFormatter3: function customFormatter3(date) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("YYYY");
    },
    printbulanan: function printbulanan() {
      this.bulan = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.bulan).format("YYYY-MM");
      window.open("/cetak/" + this.bulan + "/printlaporanbulanan", "_blank");
    },
    exportbulanan: function exportbulanan() {
      this.bulan = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.bulan).format("YYYY-MM");
      window.open("/export/" + this.bulan + "/kwbubulanan", "_blank");
    },
    printtahunan: function printtahunan() {
      this.tahun = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tahun).format("YYYY-MM");
      window.open("/cetak/" + this.tahun + "/printlaporantahunan", "_blank");
    },
    exporttahunan: function exporttahunan() {
      this.bulan = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.bulan).format("YYYY-MM");
      window.open("/export/" + this.bulan + "/kwbutahunan", "_blank");
    },
    printtahunanBapperida: function printtahunanBapperida() {
      this.tahun = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tahun).format("YYYY");
      window.open("/cetak/" + this.tahun + "/printtamankendaraantahunan", "_blank");
    },
    exporttahunanBapperida: function exporttahunanBapperida() {
      this.tahun = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tahun).format("YYYY");
      window.open("/export/" + this.tahun + "/tamankendaraantahunan", "_blank");
    },
    printtahunanrange: function printtahunanrange() {
      this.tahun1 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tahun1).format("YYYY-MM");
      this.tahun2 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tahun2).format("YYYY-MM");
      window.open("/cetak/" + this.tahun1 + "/" + this.tahun2 + "/printlaporantahunanrange", "_blank");
    },
    printbulananjenis: function printbulananjenis() {
      this.bulan1 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.bulan1).format("YYYY-MM");
      window.open("/cetak/" + this.bulan1 + "/printlaporanjeniskendaraanbulanan", "_blank");
    },
    exportbulananjenis: function exportbulananjenis() {
      this.bulan1 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.bulan1).format("YYYY-MM");
      window.open("/export/" + this.bulan1 + "/jenisbulanan", "_blank");
    },
    printtahunanjenis: function printtahunanjenis() {
      this.tahun1 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tahun1).format("YYYY");
      window.open("/cetak/" + this.tahun1 + "/printlaporanjeniskendaraantahunan", "_blank");
    },
    exporttahunanjenis: function exporttahunanjenis() {
      this.tahun1 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tahun1).format("YYYY-MM");
      window.open("/export/" + this.tahun1 + "/jenistahunan", "_blank");
    },
    printbulananpelayanan: function printbulananpelayanan() {
      this.bulan2 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.bulan2).format("YYYY-MM");
      window.open("/cetak/" + this.bulan2 + "/printlaporanjenispelayananbulanan", "_blank");
    },
    exportbulananpelayanan: function exportbulananpelayanan() {
      this.bulan2 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.bulan2).format("YYYY-MM");
      window.open("/export/" + this.bulan2 + "/pelayananbulanan", "_blank");
    },
    printtahunanpelayanan: function printtahunanpelayanan() {
      this.tahun2 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tahun2).format("YYYY");
      window.open("/cetak/" + this.tahun2 + "/printlaporanjenispelayanantahunan", "_blank");
    },
    exporttahunanpelayanan: function exporttahunanpelayanan() {
      this.tahun2 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tahun2).format("YYYY");
      window.open("/export/" + this.tahun2 + "/pelayanantahunan", "_blank");
    },
    printcustom1: function printcustom1() {
      if (this.jeniskendaraan.length === 0) {
        var jenis = '';
      } else {
        var jenis = this.jeniskendaraan.jenis;
      }
      if (this.tglrange1.length === 0) {} else {
        this.tglrange1 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tglrange1).format("YYYY-MM-DD");
      }
      if (this.tglrange2.length === 0) {} else {
        this.tglrange2 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tglrange2).format("YYYY-MM-DD");
      }
      if (this.kota.length === 0) {
        var kota = '';
      } else {
        var kota = this.kota;
      }
      if (this.kecamatan.length === 0) {
        var kecamatan = '';
      } else {
        var kecamatan = this.kecamatan;
      }
      if (this.kelurahan.length === 0) {
        var kelurahan = '';
      } else {
        var kelurahan = this.kelurahan;
      }
      window.open("/cetak/printcustom1?tgl1=".concat(this.tglrange1, "&tgl2=").concat(this.tglrange2, "&jenispendaftaran=").concat(this.jenispendaftaran, "&jeniskendaraan=").concat(jenis, "&peruntukan=").concat(this.peruntukan, "&jbb=").concat(this.jbb, "&kota=").concat(kota, "&kec=").concat(kecamatan, "&kel=").concat(kelurahan), "_blank");
    },
    exportcustom1: function exportcustom1() {
      if (this.jeniskendaraan.length === 0) {
        var jenis = '';
      } else {
        var jenis = this.jeniskendaraan.jenis;
      }
      if (this.tglrange1.length === 0) {} else {
        this.tglrange1 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tglrange1).format("YYYY-MM-DD");
      }
      if (this.tglrange2.length === 0) {} else {
        this.tglrange2 = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.tglrange2).format("YYYY-MM-DD");
      }
      if (this.jeniskendaraan.length === 0) {
        var jenis = '';
      } else {
        var jenis = this.jeniskendaraan.jenis;
      }
      if (this.kota.length === 0) {
        var kota = '';
      } else {
        var kota = this.kota;
      }
      if (this.kecamatan.length === 0) {
        var kecamatan = '';
      } else {
        var kecamatan = this.kecamatan;
      }
      if (this.kelurahan.length === 0) {
        var kelurahan = '';
      } else {
        var kelurahan = this.kelurahan;
      }
      window.open("/export/custom1?tgl1=".concat(this.tglrange1, "&tgl2=").concat(this.tglrange2, "&jenispendaftaran=").concat(this.jenispendaftaran, "&jeniskendaraan=").concat(jenis, "&peruntukan=").concat(this.peruntukan, "&jbb=").concat(this.jbb, "&kota=").concat(kota, "&kec=").concat(kecamatan, "&kel=").concat(kelurahan), "_blank");
    },
    printcustom2: function printcustom2() {
      if (this.jeniskendaraan.length === 0) {
        var jenis = '';
      } else {
        var jenis = this.jeniskendaraan.jenis;
      }
      if (this.kota.length === 0) {
        var kota = '';
      } else {
        var kota = this.kota;
      }
      if (this.kecamatan.length === 0) {
        var kecamatan = '';
      } else {
        var kecamatan = this.kecamatan;
      }
      if (this.kelurahan.length === 0) {
        var kelurahan = '';
      } else {
        var kelurahan = this.kelurahan;
      }
      window.open("/cetak/printcustom2?jeniskendaraan=".concat(jenis, "&peruntukan=").concat(this.peruntukan, "&jbb=").concat(this.jbb, "&kota=").concat(kota, "&kec=").concat(kecamatan, "&kel=").concat(kelurahan), "_blank");
    },
    exportcustom2: function exportcustom2() {
      if (this.jeniskendaraan.length === 0) {
        var jenis = '';
      } else {
        var jenis = this.jeniskendaraan.jenis;
      }
      if (this.kota.length === 0) {
        var kota = '';
      } else {
        var kota = this.kota;
      }
      if (this.kecamatan.length === 0) {
        var kecamatan = '';
      } else {
        var kecamatan = this.kecamatan;
      }
      if (this.kelurahan.length === 0) {
        var kelurahan = '';
      } else {
        var kelurahan = this.kelurahan;
      }
      window.open("/export/custom2?jeniskendaraan=".concat(jenis, "&peruntukan=").concat(this.peruntukan, "&jbb=").concat(this.jbb, "&kota=").concat(kota, "&kec=").concat(kecamatan, "&kel=").concat(kelurahan), "_blank");
    }
  }),
  components: {
    datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_5___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=template&id=f4956a12":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=template&id=f4956a12 ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('label', [_vm._v("Pilih Tanggal")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter
    },
    model: {
      value: _vm.tgl,
      callback: function callback($$v) {
        _vm.tgl = $$v;
      },
      expression: "tgl"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('label', [_vm._v("Pilih Jenis Laporan")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataHarian,
      expression: "dataHarian"
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
        _vm.dataHarian = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected",
      "value": ""
    }
  }), _vm._v(" "), _c('option', {
    attrs: {
      "value": "printlaporanharian"
    }
  }, [_vm._v("Laporan Harian")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('label', [_vm._v("Pilih Aksi")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printharian.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exportharian.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('label', [_vm._v("Bulanan KBWU")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter2,
      "minimum-view": "month"
    },
    model: {
      value: _vm.bulan,
      callback: function callback($$v) {
        _vm.bulan = $$v;
      },
      expression: "bulan"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printbulanan.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exportbulanan.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('label', [_vm._v("Tahunan KBWU")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter3,
      "minimum-view": "year"
    },
    model: {
      value: _vm.tahun,
      callback: function callback($$v) {
        _vm.tahun = $$v;
      },
      expression: "tahun"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printtahunan.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exporttahunan.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('label', [_vm._v("Bulanan Jenis Kendaraan")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter2,
      "minimum-view": "month"
    },
    model: {
      value: _vm.bulan1,
      callback: function callback($$v) {
        _vm.bulan1 = $$v;
      },
      expression: "bulan1"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printbulananjenis.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exportbulananjenis.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('label', [_vm._v("Tahunan Jenis Kendaraan")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter3,
      "minimum-view": "year"
    },
    model: {
      value: _vm.tahun1,
      callback: function callback($$v) {
        _vm.tahun1 = $$v;
      },
      expression: "tahun1"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printtahunanjenis.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exporttahunanjenis.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('label', [_vm._v("Bulanan Jenis Pelayanan")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter2,
      "minimum-view": "month"
    },
    model: {
      value: _vm.bulan2,
      callback: function callback($$v) {
        _vm.bulan2 = $$v;
      },
      expression: "bulan2"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printbulananpelayanan.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exportbulananpelayanan.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('label', [_vm._v("Tahunan Jenis Pelayanan")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter3,
      "minimum-view": "year"
    },
    model: {
      value: _vm.tahun2,
      callback: function callback($$v) {
        _vm.tahun2 = $$v;
      },
      expression: "tahun2"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printtahunanpelayanan.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exporttahunanpelayanan.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('label', [_vm._v("Tahunan Bapperida")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter3,
      "minimum-view": "year"
    },
    model: {
      value: _vm.tahun,
      callback: function callback($$v) {
        _vm.tahun = $$v;
      },
      expression: "tahun"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printtahunanBapperida.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exporttahunanBapperida.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-2"
  }, [_c('label', [_vm._v("Jenis Pendaftaran")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.jenispendaftaran,
      expression: "jenispendaftaran"
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
        _vm.jenispendaftaran = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected",
      "value": ""
    }
  }), _vm._v(" "), _c('option', {
    attrs: {
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
  }, [_vm._v("Uji Ulang")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-2"
  }, [_c('label', [_vm._v("Jenis Kendaraan")]), _vm._v(" "), _c('vSelect', {
    ref: "jenis",
    attrs: {
      "label": "jenis",
      "options": _vm.jenis
    },
    model: {
      value: _vm.jeniskendaraan,
      callback: function callback($$v) {
        _vm.jeniskendaraan = $$v;
      },
      expression: "jeniskendaraan"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-2"
  }, [_c('label', [_vm._v("Umum/Tidak Umum")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.peruntukan,
      expression: "peruntukan"
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
        _vm.peruntukan = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected",
      "value": ""
    }
  }), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Umum"
    }
  }, [_vm._v("Umum")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Tidak Umum"
    }
  }, [_vm._v("Tidak Umum")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-2"
  }, [_c('label', [_vm._v("JBB")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.jbb,
      expression: "jbb"
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
        _vm.jbb = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected",
      "value": ""
    }
  }), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("(JBB) s/d 3000")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("(JBB) 3001 s/d 9000")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("(JBB) 9001 s/d 15000")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("(JBB) 15001 s/d 21000")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("(JBB) >= 21000")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-2"
  }, [_c('label', [_vm._v("Tanggal")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter
    },
    model: {
      value: _vm.tglrange1,
      callback: function callback($$v) {
        _vm.tglrange1 = $$v;
      },
      expression: "tglrange1"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-2"
  }, [_c('label', [_vm._v(":")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "input-class": "form-control",
      "language": _vm.id,
      "format": _vm.customFormatter
    },
    model: {
      value: _vm.tglrange2,
      callback: function callback($$v) {
        _vm.tglrange2 = $$v;
      },
      expression: "tglrange2"
    }
  })], 1), _vm._v(" "), _c('div', {
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
      value: _vm.kota,
      callback: function callback($$v) {
        _vm.kota = $$v;
      },
      expression: "kota"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kecamatan")]), _vm._v(" "), _c('vSelect', {
    attrs: {
      "label": "nama",
      "options": _vm.kecamatans
    },
    on: {
      "input": _vm.setKecamatan
    },
    model: {
      value: _vm.kecamatan,
      callback: function callback($$v) {
        _vm.kecamatan = $$v;
      },
      expression: "kecamatan"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kelurahan")]), _vm._v(" "), _c('vSelect', {
    attrs: {
      "label": "nama",
      "options": _vm.kelurahans
    },
    on: {
      "input": _vm.setKelurahan
    },
    model: {
      value: _vm.kelurahan,
      callback: function callback($$v) {
        _vm.kelurahan = $$v;
      },
      expression: "kelurahan"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-2"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printcustom1.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exportcustom1.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card card-custom gutter-b"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-4"
  }, [_c('label', [_vm._v("Jenis Kendaraan")]), _vm._v(" "), _c('vSelect', {
    ref: "jenis",
    attrs: {
      "label": "jenis",
      "options": _vm.jenis
    },
    model: {
      value: _vm.jeniskendaraan,
      callback: function callback($$v) {
        _vm.jeniskendaraan = $$v;
      },
      expression: "jeniskendaraan"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('label', [_vm._v("Umum/Tidak Umum")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.peruntukan,
      expression: "peruntukan"
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
        _vm.peruntukan = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected",
      "value": ""
    }
  }), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Umum"
    }
  }, [_vm._v("Umum")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Tidak Umum"
    }
  }, [_vm._v("Tidak Umum")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('label', [_vm._v("JBB")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.jbb,
      expression: "jbb"
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
        _vm.jbb = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "selected": "selected",
      "value": ""
    }
  }), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("(JBB) s/d 3000")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("(JBB) 3001 s/d 9000")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("(JBB) 9001 s/d 15000")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("(JBB) 15001 s/d 21000")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("(JBB) >= 21000")])])]), _vm._v(" "), _c('div', {
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
      value: _vm.kota,
      callback: function callback($$v) {
        _vm.kota = $$v;
      },
      expression: "kota"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kecamatan")]), _vm._v(" "), _c('vSelect', {
    attrs: {
      "label": "nama",
      "options": _vm.kecamatans
    },
    on: {
      "input": _vm.setKecamatan
    },
    model: {
      value: _vm.kecamatan,
      callback: function callback($$v) {
        _vm.kecamatan = $$v;
      },
      expression: "kecamatan"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kelurahan")]), _vm._v(" "), _c('vSelect', {
    attrs: {
      "label": "nama",
      "options": _vm.kelurahans
    },
    on: {
      "input": _vm.setKelurahan
    },
    model: {
      value: _vm.kelurahan,
      callback: function callback($$v) {
        _vm.kelurahan = $$v;
      },
      expression: "kelurahan"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-2"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-info",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.printcustom2.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-printer"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-icon btn-success",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.exportcustom2.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "far fa-file-excel"
  })])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12"
  }, [_c('h4', [_vm._v("Harian")])]);
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

/***/ "./resources/js/view/pages/cetak/laporan/Fields.vue":
/*!**********************************************************!*\
  !*** ./resources/js/view/pages/cetak/laporan/Fields.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fields_vue_vue_type_template_id_f4956a12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fields.vue?vue&type=template&id=f4956a12 */ "./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=template&id=f4956a12");
/* harmony import */ var _Fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fields.vue?vue&type=script&lang=js */ "./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fields_vue_vue_type_template_id_f4956a12__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Fields_vue_vue_type_template_id_f4956a12__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/cetak/laporan/Fields.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fields.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=template&id=f4956a12":
/*!****************************************************************************************!*\
  !*** ./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=template&id=f4956a12 ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_template_id_f4956a12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fields.vue?vue&type=template&id=f4956a12 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/cetak/laporan/Fields.vue?vue&type=template&id=f4956a12");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_template_id_f4956a12__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Fields_vue_vue_type_template_id_f4956a12__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);