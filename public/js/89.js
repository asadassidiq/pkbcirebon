(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Verifikasi.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/verif/Verifikasi.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: [],
      image: 'no image.jpg',
      showPass: false,
      timestamp: Date.now(),
      iframeUrl: document.querySelector('meta[name="app-url"]').getAttribute('content'),
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
      title: "Persuratan"
    }]);
  },
  created: function created() {
    this.getIdentitaskendaraan(this.$route.params.id);
    this.editVerif2(this.$route.params.id);
    this.user = this.$store.state.profile.user_personal_info;
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("verif", ["getIdentitaskendaraan", "editVerif2", "submitApprove", "submitApproving"])), {}, {
    submit: function submit() {
      var _this = this;
      if (this.user.role == 'KEPALA') {
        if (this.surat.passkey.length == 0) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            icon: "error",
            title: "Oops...",
            text: 'Akses ditolak. Anda tidak memiliki izin!!'
          }).then(function (result) {
            if (result.isConfirmed) {
              _this.$refs.passkey.focus();
            }
            ;
          });
        } else {
          this.submitApproving(this.$route.params.id).then(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: "",
              text: "Berhasil, silahkan cetak Surat",
              icon: "success",
              showConfirmButton: false,
              timer: 1500
            });
            _this.goBack();
          });
        }
      } else {
        this.submitApprove(this.$route.params.id).then(function () {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "",
            text: "Berhasil Lanjut ke Kepala UPT",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
          _this.$router.push({
            name: "verif.data"
          });
        });
      }
    },
    goBack: function goBack() {
      this.$router.go(-1);
    },
    togglePass: function togglePass() {
      this.showPass = !this.showPass;
    }
  }),
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])({
    identitaskendaraan: function identitaskendaraan(state) {
      return state.verif.identitaskendaraan;
    },
    surat: function surat(state) {
      return state.verif.surat;
    }
  })),
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Verifikasi.vue?vue&type=template&id=314fb1ab":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/verif/Verifikasi.vue?vue&type=template&id=314fb1ab ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm.user.role == 'PENGUJI' || _vm.user.role == 'ADMIN' ? _c('router-link', {
    staticClass: "btn btn-sm btn-light-success",
    attrs: {
      "to": {
        name: 'pendaftaran.edit',
        params: {
          id: this.$route.params.id
        }
      }
    }
  }, [_vm._v("Datakendaraan\n            ")]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-light-warning mr-2",
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("Close")])], 1)]), _vm._v(" "), _c('b-collapse', {
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
  }, [_c('label', [_vm._v("Jenis Pendaftaran")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.keterangan,
      expression: "identitaskendaraan.keterangan"
    }],
    staticClass: "form-control form-control-lg",
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
  }, [_c('label', [_vm._v(" No Uji")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.identitaskendaraan.nouji,
      expression: "identitaskendaraan.nouji"
    }],
    staticClass: "form-control form-control-lg",
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
      expression: "identitaskendaraan.noregistrasikendaraan"
    }],
    staticClass: "form-control form-control-lg",
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
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm.identitaskendaraan.keterangan == 'Numpang Uji Keluar' || _vm.identitaskendaraan.keterangan == 'Mutasi Keluar' || _vm.identitaskendaraan.keterangan == 'Persetujuan Numpang Uji Masuk' ? _c('div', {
    staticClass: "col-4"
  }, [_c('div', {
    staticClass: "checkbox-list"
  }, [_c('label', {
    staticClass: "checkbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.v_stnk,
      expression: "surat.v_stnk"
    }],
    attrs: {
      "type": "checkbox",
      "name": "v_stnk",
      "true-value": 1,
      "false-value": 0,
      "disabled": _vm.user.role == 'KEPALA'
    },
    domProps: {
      "checked": Array.isArray(_vm.surat.v_stnk) ? _vm._i(_vm.surat.v_stnk, null) > -1 : _vm._q(_vm.surat.v_stnk, 1)
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.surat.v_stnk,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.surat, "v_stnk", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.surat, "v_stnk", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.surat, "v_stnk", $$c);
        }
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                            STNK asli dan masih berlaku\n                        ")])])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.keterangan == 'Mutasi Keluar' ? _c('div', {
    staticClass: "col-4"
  }, [_c('div', {
    staticClass: "checkbox-list"
  }, [_c('label', {
    staticClass: "checkbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.v_kartuinduk,
      expression: "surat.v_kartuinduk"
    }],
    attrs: {
      "type": "checkbox",
      "name": "v_kartuinduk",
      "true-value": 1,
      "false-value": 0
    },
    domProps: {
      "checked": Array.isArray(_vm.surat.v_kartuinduk) ? _vm._i(_vm.surat.v_kartuinduk, null) > -1 : _vm._q(_vm.surat.v_kartuinduk, 1)
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.surat.v_kartuinduk,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.surat, "v_kartuinduk", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.surat, "v_kartuinduk", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.surat, "v_kartuinduk", $$c);
        }
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                            Kartu Induk Pemeriksaan \n                        ")])])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.keterangan == 'Numpang Uji Keluar' || _vm.identitaskendaraan.keterangan == 'Mutasi Keluar' || _vm.identitaskendaraan.keterangan == 'Persetujuan Numpang Uji Masuk' ? _c('div', {
    staticClass: "col-4"
  }, [_c('div', {
    staticClass: "checkbox-list"
  }, [_c('label', {
    staticClass: "checkbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.v_smartcard,
      expression: "surat.v_smartcard"
    }],
    attrs: {
      "type": "checkbox",
      "name": "v_smartcard",
      "true-value": 1,
      "false-value": 0,
      "disabled": _vm.user.role == 'KEPALA'
    },
    domProps: {
      "checked": Array.isArray(_vm.surat.v_smartcard) ? _vm._i(_vm.surat.v_smartcard, null) > -1 : _vm._q(_vm.surat.v_smartcard, 1)
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.surat.v_smartcard,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.surat, "v_smartcard", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.surat, "v_smartcard", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.surat, "v_smartcard", $$c);
        }
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                            Kartu Uji\n                        ")])])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.keterangan == 'Mutasi Keluar' ? _c('div', {
    staticClass: "col-4"
  }, [_c('div', {
    staticClass: "checkbox-list"
  }, [_c('label', {
    staticClass: "checkbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.v_srut,
      expression: "surat.v_srut"
    }],
    attrs: {
      "type": "checkbox",
      "name": "v_srut",
      "true-value": 1,
      "false-value": 0,
      "disabled": _vm.user.role == 'KEPALA'
    },
    domProps: {
      "checked": Array.isArray(_vm.surat.v_srut) ? _vm._i(_vm.surat.v_srut, null) > -1 : _vm._q(_vm.surat.v_srut, 1)
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.surat.v_srut,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.surat, "v_srut", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.surat, "v_srut", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.surat, "v_srut", $$c);
        }
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                            SRUT\n                        ")])])]) : _vm._e(), _vm._v(" "), _vm.identitaskendaraan.keterangan == 'Mutasi Keluar' ? _c('div', {
    staticClass: "col-4"
  }, [_c('div', {
    staticClass: "checkbox-list"
  }, [_c('label', {
    staticClass: "checkbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.v_riwayat,
      expression: "surat.v_riwayat"
    }],
    attrs: {
      "type": "checkbox",
      "name": "v_riwayat",
      "true-value": 1,
      "false-value": 0,
      "disabled": _vm.user.role == 'KEPALA'
    },
    domProps: {
      "checked": Array.isArray(_vm.surat.v_riwayat) ? _vm._i(_vm.surat.v_riwayat, null) > -1 : _vm._q(_vm.surat.v_riwayat, 1)
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.surat.v_riwayat,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.surat, "v_riwayat", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.surat, "v_riwayat", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.surat, "v_riwayat", $$c);
        }
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                            Riwayat dan Dokumen Pendukung Lainnya \n                        ")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('b', [_vm._v("Persetujuan Verifikator")])]), _vm._v(" "), _c('div', {
    staticClass: "radio-inline"
  }, [_c('label', {
    staticClass: "radio radio-success"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.posverif,
      expression: "surat.posverif"
    }],
    attrs: {
      "type": "radio",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.surat.posverif, "1")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.surat, "posverif", "1");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                            Disetujui\n                            ")]), _vm._v(" "), _c('label', {
    staticClass: "radio radio-danger"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.posverif,
      expression: "surat.posverif"
    }],
    attrs: {
      "type": "radio",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.surat.posverif, "0")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.surat, "posverif", "0");
      }
    }
  }), _vm._v(" "), _c('span'), _vm._v("\n                            Ditolak\n                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleTextarea"
    }
  }, [_vm._v("Catatan")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.catatan,
      expression: "surat.catatan"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3"
    },
    domProps: {
      "value": _vm.surat.catatan
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.surat, "catatan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.user.role == 'KEPALA' ? _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Pass Key")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [(_vm.showPass ? 'text' : 'password') === 'checkbox' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.passkey,
      expression: "surat.passkey"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "name": "fake_passkey",
      "autocomplete": "off",
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.surat.passkey) ? _vm._i(_vm.surat.passkey, null) > -1 : _vm.surat.passkey
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.surat.passkey,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.surat, "passkey", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.surat, "passkey", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.surat, "passkey", $$c);
        }
      }
    }
  }) : (_vm.showPass ? 'text' : 'password') === 'radio' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.passkey,
      expression: "surat.passkey"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "name": "fake_passkey",
      "autocomplete": "off",
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.surat.passkey, null)
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.surat, "passkey", null);
      }
    }
  }) : _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.surat.passkey,
      expression: "surat.passkey"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "name": "fake_passkey",
      "autocomplete": "off",
      "type": _vm.showPass ? 'text' : 'password'
    },
    domProps: {
      "value": _vm.surat.passkey
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.surat, "passkey", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-append"
  }, [_c('span', {
    staticClass: "input-group-text",
    on: {
      "click": _vm.togglePass
    }
  }, [_c('i', {
    "class": _vm.showPass ? 'fa fa-eye-slash' : 'fa fa-eye'
  })])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-12 text-right"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-sm",
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save"
  }), _vm._v(" Submit\n                    ")])])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm.identitaskendaraan.keterangan == 'Numpang Uji Keluar' || _vm.identitaskendaraan.keterangan == 'Mutasi Keluar' || _vm.identitaskendaraan.keterangan == 'Laporan Pemeriksaan Kendaraan' ? _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "100vh"
    }
  }, [_c('iframe', {
    staticStyle: {
      "width": "100%",
      "height": "100%",
      "border": "none"
    },
    attrs: {
      "src": _vm.iframeUrl + '/cetak/' + _vm.identitaskendaraan.uuid + '/kartuinduk'
    }
  })])]) : _vm._e()], 1);
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

/***/ "./resources/js/view/pages/verif/Verifikasi.vue":
/*!******************************************************!*\
  !*** ./resources/js/view/pages/verif/Verifikasi.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Verifikasi_vue_vue_type_template_id_314fb1ab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verifikasi.vue?vue&type=template&id=314fb1ab */ "./resources/js/view/pages/verif/Verifikasi.vue?vue&type=template&id=314fb1ab");
/* harmony import */ var _Verifikasi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verifikasi.vue?vue&type=script&lang=js */ "./resources/js/view/pages/verif/Verifikasi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Verifikasi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Verifikasi_vue_vue_type_template_id_314fb1ab__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Verifikasi_vue_vue_type_template_id_314fb1ab__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/verif/Verifikasi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/verif/Verifikasi.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/view/pages/verif/Verifikasi.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifikasi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Verifikasi.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Verifikasi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifikasi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/verif/Verifikasi.vue?vue&type=template&id=314fb1ab":
/*!************************************************************************************!*\
  !*** ./resources/js/view/pages/verif/Verifikasi.vue?vue&type=template&id=314fb1ab ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifikasi_vue_vue_type_template_id_314fb1ab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Verifikasi.vue?vue&type=template&id=314fb1ab */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/verif/Verifikasi.vue?vue&type=template&id=314fb1ab");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifikasi_vue_vue_type_template_id_314fb1ab__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Verifikasi_vue_vue_type_template_id_314fb1ab__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);