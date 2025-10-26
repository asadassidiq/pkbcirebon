(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      disabled1: 1,
      disabled2: 1
    };
  },
  name: "Wizard-1",
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__["SET_BREADCRUMB"], [{
      title: "Datakendaraan"
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
    this.getVarians();
    this.getJenis();
    this.getSubJenis();
    this.getFuels();
    this.getKotas();
    this.getKelasJalans();
    if (this.$route.name == 'datakendaraan.edit') {
      this.editDatakendaraan(this.$route.params.id);
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    this.datakendaraan.tglsertifikatreg = today;
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])("datakendaraan", ["CLEAR_FORM"])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])("datakendaraan", ["submitDatakendaraan", "getMereks", "getTipes", "getVarians", "getJenis", "getSubJenis", "getJeniskendaraan", "getFuels", "getKelasJalans", "getKodewilayahs", "getKotas", "getKecamatans", "getKelurahans", "getVTA"])), {}, _defineProperty({
    submit: function submit() {
      var _this = this;
      this.submitDatakendaraan().then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
          icon: 'success',
          title: 'Saved',
          showConfirmButton: false,
          timer: 1500
        });
        _this.$router.push({
          name: "datakendaraan.data"
        });
      });
    },
    totalBeratSumbu: function totalBeratSumbu() {
      this.datakendaraan.beratkosong = parseInt(this.datakendaraan.beratsumbu1) + parseInt(this.datakendaraan.beratsumbu2) + parseInt(this.datakendaraan.beratsumbu3) + parseInt(this.datakendaraan.beratsumbu4);
      this.setJBI();
    },
    setJBI: function setJBI() {
      this.datakendaraan.jbi = parseInt(this.datakendaraan.beratkosong) + parseInt(this.datakendaraan.dayaangkutbarang) + parseInt(this.datakendaraan.dayaangkutorang) * 60;
    },
    caridata: function caridata() {
      var _this2 = this;
      this.getIdentitaskendaraanNouji().then(function () {
        if (_this2.carinouji == 1) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: 'success',
            title: 'Data ditemukan',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: 'warning',
            title: 'Data Tidak ditemukan',
            showConfirmButton: false,
            timer: 1500
          });
        }
        if (_this2.datakendaraan.tglsertifikatreg === null || _this2.datakendaraan.tglsertifikatreg == '') {
          var CurrentDate = moment().format("YYYY-MM-DD");
          _this2.datakendaraan.tglsertifikatreg = CurrentDate;
        }
      });
    },
    setKota: function setKota(value) {
      this.datakendaraan.kota = value.nama;
      this.getKecamatans(value.nama);
      this.disabled1 = 0;
    },
    setKecamatan: function setKecamatan(value) {
      this.datakendaraan.kecamatan = value.nama;
      this.getKelurahans(value.nama);
      this.disabled2 = 0;
    },
    setKelurahan: function setKelurahan(value) {
      this.datakendaraan.kelurahan = value.nama;
    },
    setType: function setType(value) {
      this.datakendaraan.merek = value.vehicle_brand_name;
      this.datakendaraan.idmerek = value.vehicle_brand_id;
      this.getTipes(value.vehicle_brand_id);
    },
    setVarian: function setVarian(value) {
      this.datakendaraan.tipe = value.vehicle_varian_type_name;
      this.datakendaraan.idtipe = value.vehicle_varian_type_id;
      this.getVarians(value.vehicle_varian_type_id);
    },
    setVarianid: function setVarianid(value) {
      this.datakendaraan.varian = value.vehicle_varian_name;
      this.datakendaraan.idvarian = value.vehicle_varian_id;
    },
    setSubVehicle: function setSubVehicle(value) {
      this.datakendaraan.jenis = value.vehicle_type_name;
      this.datakendaraan.idjenis = value.vehicle_type_id;
      this.getSubJenis(value.vehicle_type_id);
    },
    setSubVehicleid: function setSubVehicleid(value) {
      this.datakendaraan.subjenis = value.vehicle_sub_name;
      this.datakendaraan.idsubjenis = value.vehicle_sub_id;
    },
    setArea: function setArea(value) {
      this.datakendaraan.wilayah = value.area_name;
      this.datakendaraan.kodewilayah = value.area_code;
      this.datakendaraan.idkodewilayah = value.area_id;
    },
    setFuel: function setFuel(value) {
      this.datakendaraan.bahanbakar = value.fuel_name;
      this.datakendaraan.idbahanbakar = value.fuel_id;
    },
    setKelasJalan: function setKelasJalan(value) {
      this.datakendaraan.kelasjalanterendah = value.kelasjalan_name;
      this.datakendaraan.idkelasjalanterendah = value.kelasjalan_id;
    },
    setAreaFrom: function setAreaFrom(value) {
      this.datakendaraan.wilayahasal = value.area_name;
      this.datakendaraan.kodewilayahasal = value.area_code;
      this.datakendaraan.idkodewilayahasal = value.area_id;
    },
    customFormatter: function customFormatter(today) {
      return today;
    },
    showModalVTA: function showModalVTA() {
      this.$refs['modalVTA'].show();
    },
    getDataVTA: function getDataVTA(dataSearch) {
      var _this3 = this;
      if (this.dataSearch === "") {
        this.$refs.nouji.focus();
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
          icon: 'warning',
          title: 'No Uji/No Rangka Tidak Boleh Kosong',
          showConfirmButton: false,
          timer: 750
        });
      } else {
        this.getVTA(dataSearch).then(function () {
          if (_this3.responeBlue.status) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              icon: 'success',
              title: 'Berhasil Data',
              showConfirmButton: false,
              timer: 1500
            });
            _this3.showModalVTA();
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              icon: 'warning',
              title: _this3.responeBlue.message,
              showConfirmButton: false,
              timer: 2000
            });
          }
        });
      }
    },
    handleFocus: function handleFocus(field) {
      if (this.datakendaraan[field] === 0 || this.datakendaraan[field] === "0") {
        this.datakendaraan[field] = '';
      }
    }
  }, "customFormatter", function customFormatter(today) {
    return today;
  })),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])("datakendaraan", {
    datakendaraan: function datakendaraan(state) {
      return state.datakendaraan;
    },
    carinouji: function carinouji(state) {
      return state.carinouji;
    },
    datavta: function datavta(state) {
      return state.datavta;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])("datakendaraan", {
    kodewilayahs: function kodewilayahs(state) {
      return state.kodewilayahs;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])("datakendaraan", {
    mereks: function mereks(state) {
      return state.mereks;
    },
    tipes: function tipes(state) {
      return state.tipes;
    },
    varians: function varians(state) {
      return state.varians;
    },
    jenis: function jenis(state) {
      return state.jenis;
    },
    subjenis: function subjenis(state) {
      return state.subjenis;
    },
    jeniskendaraan: function jeniskendaraan(state) {
      return state.jeniskendaraan;
    },
    fuels: function fuels(state) {
      return state.fuels;
    },
    kelasjalans: function kelasjalans(state) {
      return state.kelasjalans;
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
    responeBlue: function responeBlue(state) {
      return state.responeBlue;
    }
  })),
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_5___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=template&id=c63d7f04":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=template&id=c63d7f04 ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
      value: _vm.datakendaraan.nouji,
      expression: "datakendaraan.nouji"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "nouji",
      "placeholder": "No Uji"
    },
    domProps: {
      "value": _vm.datakendaraan.nouji
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "nouji", $event.target.value);
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
      value: _vm.datakendaraan.noregistrasikendaraan,
      expression: "datakendaraan.noregistrasikendaraan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "noregistrasikendaraan",
      "placeholder": " No Kendaraan"
    },
    domProps: {
      "value": _vm.datakendaraan.noregistrasikendaraan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "noregistrasikendaraan", $event.target.value);
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
      value: _vm.datakendaraan.nama,
      expression: "datakendaraan.nama"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "nama",
      "placeholder": " nama"
    },
    domProps: {
      "value": _vm.datakendaraan.nama
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "nama", $event.target.value);
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
      value: _vm.datakendaraan.noidentitaspemilik,
      expression: "datakendaraan.noidentitaspemilik"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "noidentitaspemilik",
      "placeholder": " No Identitas"
    },
    domProps: {
      "value": _vm.datakendaraan.noidentitaspemilik
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "noidentitaspemilik", $event.target.value);
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
      value: _vm.datakendaraan.alamat,
      expression: "datakendaraan.alamat"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "alamat",
      "placeholder": " Alamat"
    },
    domProps: {
      "value": _vm.datakendaraan.alamat
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "alamat", $event.target.value);
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
      value: _vm.datakendaraan.kota,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "kota", $$v);
      },
      expression: "datakendaraan.kota"
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
      value: _vm.datakendaraan.kecamatan,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "kecamatan", $$v);
      },
      expression: "datakendaraan.kecamatan"
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
      value: _vm.datakendaraan.kelurahan,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "kelurahan", $$v);
      },
      expression: "datakendaraan.kelurahan"
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
      value: _vm.datakendaraan.nosertifikatreg,
      expression: "datakendaraan.nosertifikatreg"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "nosertifikatreg",
      "placeholder": " No SRUT"
    },
    domProps: {
      "value": _vm.datakendaraan.nosertifikatreg
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "nosertifikatreg", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nosertifikatreg ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nosertifikatreg[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tanggal SRUT")]), _vm._v(" "), _c('b-form-datepicker', {
    attrs: {
      "id": "tglsertifikatreg",
      "locale": "id"
    },
    model: {
      value: _vm.datakendaraan.tglsertifikatreg,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "tglsertifikatreg", $$v);
      },
      expression: "datakendaraan.tglsertifikatreg"
    }
  }), _vm._v(" "), _vm.errors.tglsertifikatreg ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.tglsertifikatreg[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tanggal STNK terbit")]), _vm._v(" "), _c('b-form-datepicker', {
    attrs: {
      "id": "tgl_registrasikendaraan",
      "locale": "id"
    },
    model: {
      value: _vm.datakendaraan.tgl_registrasikendaraan,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "tgl_registrasikendaraan", $$v);
      },
      expression: "datakendaraan.tgl_registrasikendaraan"
    }
  }), _vm._v(" "), _vm.errors.tgl_registrasikendaraan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.tgl_registrasikendaraan[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("SK Rancang Bangun")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.rancang,
      expression: "datakendaraan.rancang"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "rancang",
      "placeholder": "SK Rancang Bangun"
    },
    domProps: {
      "value": _vm.datakendaraan.rancang
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "rancang", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.rancang ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.rancang[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tahun Pembuatan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.thpembuatan,
      expression: "datakendaraan.thpembuatan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "thpembuatan",
      "placeholder": "Tahun Pembuatan"
    },
    domProps: {
      "value": _vm.datakendaraan.thpembuatan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "thpembuatan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.thpembuatan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.thpembuatan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Merek "), _vm.datakendaraan.mereklama ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.datakendaraan.mereklama))]) : _vm._e()]), _vm._v(" "), _c('vSelect', {
    ref: "merek",
    attrs: {
      "label": "vehicle_brand_name",
      "options": _vm.mereks
    },
    on: {
      "input": _vm.setType
    },
    model: {
      value: _vm.datakendaraan.merek,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "merek", $$v);
      },
      expression: "datakendaraan.merek"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tipe "), _vm.datakendaraan.tipelama ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.datakendaraan.tipelama))]) : _vm._e()]), _vm._v(" "), _c('vSelect', {
    ref: "tipes",
    attrs: {
      "label": "vehicle_varian_type_name",
      "options": _vm.tipes,
      "disabled": !_vm.tipes.length
    },
    on: {
      "input": _vm.setVarian
    },
    model: {
      value: _vm.datakendaraan.tipe,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "tipe", $$v);
      },
      expression: "datakendaraan.tipe"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('label', {
    staticClass: "text-danger"
  }, [_vm._v("Varian")]), _vm._v(" "), _c('vSelect', {
    ref: "varian",
    attrs: {
      "label": "vehicle_varian_name",
      "options": _vm.varians,
      "disabled": !_vm.varians.length
    },
    on: {
      "input": _vm.setVarianid
    },
    model: {
      value: _vm.datakendaraan.varian,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "varian", $$v);
      },
      expression: "datakendaraan.varian"
    }
  })], 1), _vm._v(" "), _vm.errors.varian ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.varian[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jenis "), _vm.datakendaraan.jenislama ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.datakendaraan.jenislama))]) : _vm._e()]), _vm._v(" "), _c('vSelect', {
    ref: "jenis",
    attrs: {
      "label": "vehicle_type_name",
      "options": _vm.jenis,
      "disabled": !_vm.jenis.length
    },
    on: {
      "input": _vm.setSubVehicle
    },
    model: {
      value: _vm.datakendaraan.jenis,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "jenis", $$v);
      },
      expression: "datakendaraan.jenis"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Model "), _vm.datakendaraan.model ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.datakendaraan.model))]) : _vm._e()]), _vm._v(" "), _c('vSelect', {
    ref: "subjenis",
    attrs: {
      "label": "vehicle_sub_name",
      "options": _vm.subjenis,
      "disabled": !_vm.subjenis.length
    },
    on: {
      "input": _vm.setSubVehicleid
    },
    model: {
      value: _vm.datakendaraan.subjenis,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "subjenis", $$v);
      },
      expression: "datakendaraan.subjenis"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Isi Silinder")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.isisilinder,
      expression: "datakendaraan.isisilinder"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "isisilinder",
      "placeholder": " Isi Silinder"
    },
    domProps: {
      "value": _vm.datakendaraan.isisilinder
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('isisilinder');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "isisilinder", $event.target.value);
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
      value: _vm.datakendaraan.dayamotorpenggerak,
      expression: "datakendaraan.dayamotorpenggerak"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "dayamotorpenggerak",
      "placeholder": " Daya Motor Penggerak"
    },
    domProps: {
      "value": _vm.datakendaraan.dayamotorpenggerak
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('dayamotorpenggerak');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "dayamotorpenggerak", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.dayamotorpenggerak ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.dayamotorpenggerak[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("No Mesin")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.nomesin,
      expression: "datakendaraan.nomesin"
    }],
    staticClass: "form-control form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text",
      "name": "nomesin",
      "placeholder": "No Mesin"
    },
    domProps: {
      "value": _vm.datakendaraan.nomesin
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "nomesin", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.nomesin ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.nomesin[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', [_vm._v("No Rangka")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.norangka,
      expression: "datakendaraan.norangka"
    }],
    ref: "norangka",
    staticClass: "form-control form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text",
      "name": "norangka",
      "placeholder": " No Rangka"
    },
    domProps: {
      "value": _vm.datakendaraan.norangka
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "norangka", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-text",
    attrs: {
      "id": "basic-addon2"
    }
  }, [_c('a', {
    staticClass: "btn btn-sm btn-light-success font-weight-bold",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function click($event) {
        return _vm.getDataVTA(_vm.datakendaraan.norangka);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-search"
  }), _vm._v(" Cek Data\n                      ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Bahan Bakar")]), _vm._v(" "), _c('vSelect', {
    ref: "bahanbakar",
    attrs: {
      "label": "fuel_name",
      "options": _vm.fuels
    },
    on: {
      "input": _vm.setFuel
    },
    model: {
      value: _vm.datakendaraan.bahanbakar,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "bahanbakar", $$v);
      },
      expression: "datakendaraan.bahanbakar"
    }
  }), _vm._v(" "), _vm.errors.bahanbakar ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.bahanbakar[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Penggunaan")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.peruntukan,
      expression: "datakendaraan.peruntukan"
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
        _vm.$set(_vm.datakendaraan, "peruntukan", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_c('label', [_vm._v("Daerah Asal")]), _vm._v(" "), _c('vSelect', {
    ref: "kodewilayahasal",
    attrs: {
      "label": "area_name",
      "options": _vm.kodewilayahs
    },
    on: {
      "input": _vm.setAreaFrom
    },
    model: {
      value: _vm.datakendaraan.wilayahasal,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "wilayahasal", $$v);
      },
      expression: "datakendaraan.wilayahasal"
    }
  }), _vm._v(" "), _vm.errors.kodewilayah ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.kodewilayah[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Warna")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.warna,
      expression: "datakendaraan.warna"
    }],
    staticClass: "form-control form-control-lg",
    staticStyle: {
      "text-transform": "uppercase"
    },
    attrs: {
      "type": "text",
      "name": "warna",
      "placeholder": "Warna"
    },
    domProps: {
      "value": _vm.datakendaraan.warna
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "warna", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.warna ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.warna[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" No TMK")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.tmk,
      expression: "datakendaraan.tmk"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "min": "1",
      "placeholder": "No TMK "
    },
    domProps: {
      "value": _vm.datakendaraan.tmk
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "tmk", $event.target.value);
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "pb-5",
    attrs: {
      "data-wizard-type": "step-content"
    }
  }, [_c('div', {
    staticClass: "accordion",
    attrs: {
      "role": "tablist"
    }
  }, [_c('b-card', {
    staticClass: "mb-1",
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-header', {
    staticClass: "p-1 d-flex flex-row justify-content-center gap-2 mb-4",
    attrs: {
      "header-tag": "header",
      "role": "tab"
    }
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-1",
      modifiers: {
        "accordion-1": true
      }
    }],
    staticClass: "mr-2",
    attrs: {
      "variant": "outline-primary"
    }
  }, [_vm._v("Ukuran Utama")]), _vm._v(" "), _c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-2",
      modifiers: {
        "accordion-2": true
      }
    }],
    staticClass: "mr-2",
    attrs: {
      "variant": "outline-primary"
    }
  }, [_vm._v("Dimensi Bak / Tangki")]), _vm._v(" "), _c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-3",
      modifiers: {
        "accordion-3": true
      }
    }],
    staticClass: "mr-2",
    attrs: {
      "variant": "outline-primary"
    }
  }, [_vm._v("Jarak Sumbu")]), _vm._v(" "), _c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-4",
      modifiers: {
        "accordion-4": true
      }
    }],
    staticClass: "mr-2",
    attrs: {
      "variant": "outline-primary"
    }
  }, [_vm._v("Berat Kosong")]), _vm._v(" "), _c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-5",
      modifiers: {
        "accordion-5": true
      }
    }],
    staticClass: "mr-2",
    attrs: {
      "variant": "outline-primary"
    }
  }, [_vm._v("Daya Angkut")]), _vm._v(" "), _c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-6",
      modifiers: {
        "accordion-6": true
      }
    }],
    staticClass: "mr-2",
    attrs: {
      "variant": "outline-primary"
    }
  }, [_vm._v("Catatan Rubah Bentuk")])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-1",
      "visible": "",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('b-card-body', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Panjang Kendaraan (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.panjangkendaraan,
      expression: "datakendaraan.panjangkendaraan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "panjangkendaraan",
      "min": "0",
      "placeholder": "Panjang Kendaraan"
    },
    domProps: {
      "value": _vm.datakendaraan.panjangkendaraan
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('panjangkendaraan');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "panjangkendaraan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.panjangkendaraan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.panjangkendaraan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Lebar Kendaraan (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.lebarkendaraan,
      expression: "datakendaraan.lebarkendaraan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "lebarkendaraan",
      "min": "0",
      "placeholder": "Lebar Kendaraan"
    },
    domProps: {
      "value": _vm.datakendaraan.lebarkendaraan
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('lebarkendaraan');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "lebarkendaraan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.lebarkendaraan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.lebarkendaraan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tinggi Kendaraan (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.tinggikendaraan,
      expression: "datakendaraan.tinggikendaraan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "tinggikendaraan",
      "min": "0",
      "placeholder": "Tinggi Kendaraan"
    },
    domProps: {
      "value": _vm.datakendaraan.tinggikendaraan
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('tinggikendaraan');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "tinggikendaraan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.tinggikendaraan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.tinggikendaraan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Julur Belakang(mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.julurbelakang,
      expression: "datakendaraan.julurbelakang"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "julurbelakang",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.julurbelakang
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('julurbelakang');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "julurbelakang", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.julurbelakang ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.julurbelakang[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Julur Depan (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.julurdepan,
      expression: "datakendaraan.julurdepan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "julurdepan",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.julurdepan
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('julurdepan');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "julurdepan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.julurdepan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.julurdepan[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jenis Rumah-rumah")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.bahan,
      expression: "datakendaraan.bahan"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "bahan"
    },
    domProps: {
      "value": _vm.datakendaraan.bahan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "bahan", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.bahan ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.bahan[0]))]) : _vm._e()])])])])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-2",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('b-card-body', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Panjang Bak atau Tangki Muatan (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.panjangbakatautangki,
      expression: "datakendaraan.panjangbakatautangki"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "panjangbakatautangki",
      "min": "0",
      "placeholder": "Panjang Bak atau Tangki Muatan"
    },
    domProps: {
      "value": _vm.datakendaraan.panjangbakatautangki
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('panjangbakatautangki');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "panjangbakatautangki", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.panjangbakatautangki ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.panjangbakatautangki[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Lebar Bak atau Tangki Muatan (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.lebarbakatautangki,
      expression: "datakendaraan.lebarbakatautangki"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "lebarbakatautangki",
      "min": "0",
      "placeholder": "Lebar Bak atau Tangki Muatan"
    },
    domProps: {
      "value": _vm.datakendaraan.lebarbakatautangki
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('lebarbakatautangki');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "lebarbakatautangki", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.lebarbakatautangki ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.lebarbakatautangki[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Tinggi Bak atau Tangki Muatan (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.tinggibakatautangki,
      expression: "datakendaraan.tinggibakatautangki"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "tinggibakatautangki",
      "min": "0",
      "placeholder": "Tinggi Bak atau Tangki Muatan"
    },
    domProps: {
      "value": _vm.datakendaraan.tinggibakatautangki
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('tinggibakatautangki');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "tinggibakatautangki", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.tinggibakatautangki ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.tinggibakatautangki[0]))]) : _vm._e()])])])])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-3",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('b-card-body', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "text-danger"
  }, [_vm._v("Jumlah Sumbu")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jumlah_sumbu,
      expression: "datakendaraan.jumlah_sumbu"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jumlah_sumbu",
      "min": "2",
      "placeholder": "Jumlah Sumbu"
    },
    domProps: {
      "value": _vm.datakendaraan.jumlah_sumbu
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jumlah_sumbu');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jumlah_sumbu", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jumlah_sumbu ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jumlah_sumbu[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu I-II (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu1_2,
      expression: "datakendaraan.jaraksumbu1_2"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jaraksumbu1_2",
      "min": "0",
      "placeholder": "Jarak Sumbu I-II (mm)"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu1_2
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu1_2');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu1_2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jaraksumbu1_2 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jaraksumbu1_2[0]))]) : _vm._e()])]), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 2 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu II-III (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu2_3,
      expression: "datakendaraan.jaraksumbu2_3"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "height",
      "placeholder": "Jarak Sumbu II-III (mm)",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu2_3
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu2_3');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu2_3", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jaraksumbu2_3 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jaraksumbu2_3[0]))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 3 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu III-IV (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu3_4,
      expression: "datakendaraan.jaraksumbu3_4"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "length",
      "placeholder": "Jarak Sumbu III-IV (mm)",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu3_4
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu3_4');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu3_4", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jaraksumbu3_4 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jaraksumbu3_4[0]))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 4 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu IV-V (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu4_5,
      expression: "datakendaraan.jaraksumbu4_5"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jaraksumbu4_5",
      "placeholder": "Jarak Sumbu IV-V (mm)",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu4_5
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu4_5');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu4_5", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 5 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu V-VI (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu5_6,
      expression: "datakendaraan.jaraksumbu5_6"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jaraksumbu5_6",
      "placeholder": "Jarak Sumbu V-VI (mm)",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu5_6
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu5_6');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu5_6", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 6 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu VI-VII (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu6_7,
      expression: "datakendaraan.jaraksumbu6_7"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jaraksumbu6_7",
      "placeholder": "Jarak Sumbu VI-VII (mm)",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu6_7
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu6_7');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu6_7", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 7 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu VII-VIII (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu7_8,
      expression: "datakendaraan.jaraksumbu7_8"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jaraksumbu7_8",
      "placeholder": "Jarak Sumbu VII-VIII (mm)",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu7_8
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu7_8');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu7_8", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 8 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu VIII-IX (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu8_9,
      expression: "datakendaraan.jaraksumbu8_9"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jaraksumbu8_9",
      "placeholder": "Jarak Sumbu VIII-IX (mm)",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu8_9
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu8_9');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu8_9", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 9 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu IX-X (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu9_10,
      expression: "datakendaraan.jaraksumbu9_10"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jaraksumbu9_10",
      "placeholder": "Jarak Sumbu IX-X (mm)",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu9_10
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu9_10');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu9_10", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 10 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu X-XI (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu10_11,
      expression: "datakendaraan.jaraksumbu10_11"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jaraksumbu10_11",
      "min": "0",
      "placeholder": "Jarak Sumbu X-XI (mm)"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu10_11
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu10_11');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu10_11", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 11 ? _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Jarak Sumbu XI-XII (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jaraksumbu11_12,
      expression: "datakendaraan.jaraksumbu11_12"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jaraksumbu11_12",
      "min": "0",
      "placeholder": "Jarak Sumbu XI-XII (mm)"
    },
    domProps: {
      "value": _vm.datakendaraan.jaraksumbu11_12
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jaraksumbu11_12');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jaraksumbu11_12", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Wheelbase (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.a,
      expression: "datakendaraan.a"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "a",
      "placeholder": "Wheelbase (mm)"
    },
    domProps: {
      "value": _vm.datakendaraan.a
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('a');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "a", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.a ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.a[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("P (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.p,
      expression: "datakendaraan.p"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "P (mm)",
      "name": "p",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.p
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('p');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "p", $event.target.value);
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
      value: _vm.datakendaraan.q,
      expression: "datakendaraan.q"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "Q (mm)",
      "name": "q",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.q
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('q');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "q", $event.target.value);
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
      value: _vm.datakendaraan.r,
      expression: "datakendaraan.r"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "placeholder": "R (mm)",
      "name": "r",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.r
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('r');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "r", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.r ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.r[0]))]) : _vm._e()])])])])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-4",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('b-card-body', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 1(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu1,
      expression: "datakendaraan.beratsumbu1"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu1",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu1
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu1');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu1", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu1 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu1[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 2(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu2,
      expression: "datakendaraan.beratsumbu2"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu2",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu2
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu2');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu2", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu2 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu2[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 3(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu3,
      expression: "datakendaraan.beratsumbu3"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu3",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu3
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu3');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu3", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu3 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu3[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 4(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu4,
      expression: "datakendaraan.beratsumbu4"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu4",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu4
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu4');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu4", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu4 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu4[0]))]) : _vm._e()])]), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 4 ? _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 5(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu5,
      expression: "datakendaraan.beratsumbu5"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu5",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu5
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu5');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu5", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 5 ? _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 6(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu6,
      expression: "datakendaraan.beratsumbu6"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu6",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu6
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu6');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu6", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 6 ? _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 7(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu7,
      expression: "datakendaraan.beratsumbu7"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu7",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu7
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu7');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu7", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 7 ? _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 8(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu8,
      expression: "datakendaraan.beratsumbu8"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu8",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu8
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu8');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu8", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 8 ? _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 9(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu9,
      expression: "datakendaraan.beratsumbu9"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu9",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu9
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu9');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu9", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 9 ? _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 10(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu10,
      expression: "datakendaraan.beratsumbu10"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu10",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu10
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu10');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu10", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 10 ? _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 11(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu11,
      expression: "datakendaraan.beratsumbu11"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu11",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu11
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu11');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu11", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.datakendaraan.jumlah_sumbu > 11 ? _c('div', {
    staticClass: "col-sm-2"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Berat Sumbu 12(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratsumbu12,
      expression: "datakendaraan.beratsumbu12"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratsumbu12",
      "min": "0"
    },
    domProps: {
      "value": _vm.datakendaraan.beratsumbu12
    },
    on: {
      "change": function change($event) {
        _vm.totalBeratSumbu();
        _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratsumbu12');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratsumbu12", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Total Berat Sumbu(Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.beratkosong,
      expression: "datakendaraan.beratkosong"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "beratkosong"
    },
    domProps: {
      "value": _vm.datakendaraan.beratkosong
    },
    on: {
      "change": function change($event) {
        return _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('beratkosong');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "beratkosong", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.beratsumbu4 ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.beratsumbu4[0]))]) : _vm._e()])])])])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-5",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('b-card-body', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Daya Angkut Orang (orang)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.dayaangkutorang,
      expression: "datakendaraan.dayaangkutorang"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "dayaangkutorang",
      "min": "0",
      "placeholder": "Daya Angkut Orang (mm)"
    },
    domProps: {
      "value": _vm.datakendaraan.dayaangkutorang
    },
    on: {
      "change": function change($event) {
        return _vm.setJBI();
      },
      "focus": function focus($event) {
        return _vm.handleFocus('dayaangkutorang');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "dayaangkutorang", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.dayaangkutorang ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.dayaangkutorang[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Daya Angkut Barang (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.dayaangkutbarang,
      expression: "datakendaraan.dayaangkutbarang"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "dayaangkutbarang",
      "min": "0",
      "placeholder": "Daya Angkut Barang"
    },
    domProps: {
      "value": _vm.datakendaraan.dayaangkutbarang
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('dayaangkutbarang');
      },
      "change": function change($event) {
        return _vm.setJBI();
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "dayaangkutbarang", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.dayaangkutbarang ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.dayaangkutbarang[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("JBB (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.jbb,
      expression: "datakendaraan.jbb"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jbb",
      "min": "0",
      "placeholder": "JBB"
    },
    domProps: {
      "value": _vm.datakendaraan.jbb
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jbb');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jbb", $event.target.value);
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
      value: _vm.datakendaraan.jbkb,
      expression: "datakendaraan.jbkb"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jbkb",
      "min": "0",
      "placeholder": "JBKB (Kg)"
    },
    domProps: {
      "value": _vm.datakendaraan.jbkb
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jbkb');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jbkb", $event.target.value);
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
      value: _vm.datakendaraan.jbi,
      expression: "datakendaraan.jbi"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jbi",
      "min": "0",
      "placeholder": "JBI (Kg)"
    },
    domProps: {
      "value": _vm.datakendaraan.jbi
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jbi');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jbi", $event.target.value);
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
      value: _vm.datakendaraan.jbki,
      expression: "datakendaraan.jbki"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "jbki",
      "min": "0",
      "placeholder": "JBKI (Kg)"
    },
    domProps: {
      "value": _vm.datakendaraan.jbki
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('jbki');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "jbki", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.jbki ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.jbki[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("MST (Kg)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.mst,
      expression: "datakendaraan.mst"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "number",
      "name": "mst",
      "min": "0",
      "placeholder": "MST"
    },
    domProps: {
      "value": _vm.datakendaraan.mst
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('mst');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "mst", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.mst ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.mst[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Kelas Jalan Terendah")]), _vm._v(" "), _c('vSelect', {
    ref: "kelasjalanterendah",
    attrs: {
      "label": "kelasjalan_name",
      "options": _vm.kelasjalans
    },
    on: {
      "input": _vm.setKelasJalan
    },
    model: {
      value: _vm.datakendaraan.kelasjalanterendah,
      callback: function callback($$v) {
        _vm.$set(_vm.datakendaraan, "kelasjalanterendah", $$v);
      },
      expression: "datakendaraan.kelasjalanterendah"
    }
  }), _vm._v(" "), _vm.errors.kelasjalanterendah ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.kelasjalanterendah[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Konfigurasi Sumbu Roda")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.konfigurasisumburoda,
      expression: "datakendaraan.konfigurasisumburoda"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "konfigurasisumburoda",
      "min": "0",
      "placeholder": "Konfigurasi Sumbu Roda"
    },
    domProps: {
      "value": _vm.datakendaraan.konfigurasisumburoda
    },
    on: {
      "focus": function focus($event) {
        return _vm.handleFocus('konfigurasisumburoda');
      },
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "konfigurasisumburoda", $event.target.value);
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
      value: _vm.datakendaraan.ukuranban,
      expression: "datakendaraan.ukuranban"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "name": "ukuranban",
      "placeholder": "Ukuran Ban"
    },
    domProps: {
      "value": _vm.datakendaraan.ukuranban
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "ukuranban", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.ukuranban ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.ukuranban[0]))]) : _vm._e()])])])])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-6",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('b-card-body', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Catatan Rubah Bentuk")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datakendaraan.catatanrubahbentuk,
      expression: "datakendaraan.catatanrubahbentuk"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": "Catatan Rubah Bentuk",
      "name": "catatanrubahbentuk"
    },
    domProps: {
      "value": _vm.datakendaraan.catatanrubahbentuk
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datakendaraan, "catatanrubahbentuk", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.catatanrubahbentuk ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.catatanrubahbentuk[0]))]) : _vm._e()])])])])], 1)], 1)], 1)]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                  Next Step\n                ")])])])])])])])]), _vm._v(" "), _c('b-modal', {
    ref: "modalVTA",
    staticClass: "modal",
    attrs: {
      "id": "modalVTA",
      "title": "Cek Data"
    },
    on: {
      "ok": _vm.resetCheck,
      "hidden": _vm.resetCheck
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("No SRUT")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.nosertifikatreg,
      expression: "datavta.nosertifikatreg"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.nosertifikatreg
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "nosertifikatreg", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("No SK Drijen")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.noskdrijen,
      expression: "datavta.noskdrijen"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.noskdrijen
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "noskdrijen", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Merek")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.merek,
      expression: "datavta.merek"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.merek
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "merek", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Tipe Varian")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.tipe,
      expression: "datavta.tipe"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.tipe
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "tipe", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Jenis")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.jenis,
      expression: "datavta.jenis"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.jenis
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "jenis", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Peruntukan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.peruntukan,
      expression: "datavta.peruntukan"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.peruntukan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "peruntukan", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("No Rangka")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.norangka,
      expression: "datavta.norangka"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.norangka
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "norangka", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("No Mesin")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.nomesin,
      expression: "datavta.nomesin"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.nomesin
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "nomesin", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nama Perusahaan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.namaperusahaan,
      expression: "datavta.namaperusahaan"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.namaperusahaan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "namaperusahaan", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Alamat Perusahaan")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.alamatperusahaan,
      expression: "datavta.alamatperusahaan"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.alamatperusahaan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "alamatperusahaan", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Penanggung Jawab")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datavta.penanggungjawab,
      expression: "datavta.penanggungjawab"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "disabled": ""
    },
    domProps: {
      "value": _vm.datavta.penanggungjawab
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datavta, "penanggungjawab", $event.target.value);
      }
    }
  })])])], 1);
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
  }, [_vm._v("1. Identitas")])]), _vm._v(" "), _c('i', {
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
  }, [_vm._v("2. Data Kendaraan")])])])])]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss");

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

/***/ "./resources/js/view/pages/datakendaraan/Add.vue":
/*!*******************************************************!*\
  !*** ./resources/js/view/pages/datakendaraan/Add.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_c63d7f04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=c63d7f04 */ "./resources/js/view/pages/datakendaraan/Add.vue?vue&type=template&id=c63d7f04");
/* harmony import */ var _Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js */ "./resources/js/view/pages/datakendaraan/Add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_c63d7f04_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss */ "./resources/js/view/pages/datakendaraan/Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_c63d7f04__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_c63d7f04__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/datakendaraan/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/datakendaraan/Add.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/view/pages/datakendaraan/Add.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/datakendaraan/Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss":
/*!****************************************************************************************************!*\
  !*** ./resources/js/view/pages/datakendaraan/Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_c63d7f04_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=style&index=0&id=c63d7f04&lang=scss");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_c63d7f04_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_c63d7f04_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_c63d7f04_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_c63d7f04_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/view/pages/datakendaraan/Add.vue?vue&type=template&id=c63d7f04":
/*!*************************************************************************************!*\
  !*** ./resources/js/view/pages/datakendaraan/Add.vue?vue&type=template&id=c63d7f04 ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_c63d7f04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=c63d7f04 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/datakendaraan/Add.vue?vue&type=template&id=c63d7f04");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_c63d7f04__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_c63d7f04__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);