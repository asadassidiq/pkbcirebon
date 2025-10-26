(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/user/Form.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/user/Form.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************/
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
      pass: '',
      showPass: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(["errors"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])("user", {
    user: function user(state) {
      return state.user;
    }
    // pass: state => state.pass,
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapMutations"])("user", ["CLEAR_FORM"])), {}, {
    checkPassword: function checkPassword() {
      var minLength = 8;
      var hasLowercase = /[a-z]/.test(this.user.password);
      var hasUppercase = /[A-Z]/.test(this.user.password);
      var hasNumber = /[0-9]/.test(this.user.password);
      var hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(this.user.password);
      if (this.user.password.length <= minLength) {
        this.pass = 'minimal 8 Digit';
      } else if (!hasLowercase) {
        this.pass = 'harus menggunakan huruf kecil';
      } else if (!hasUppercase) {
        this.pass = 'harus menggunakan huruf besar';
      } else if (!hasNumber) {
        this.pass = 'harus menggunakan angka';
      } else if (!hasNumber) {
        this.pass = 'harus menggunakan simbol';
      } else {
        this.pass = '';
      }
      if (this.user.password.length >= minLength && hasLowercase && hasUppercase && hasNumber && hasSymbol) {
        this.pass = 'Password Kuat';
      } else {}
    },
    togglePass: function togglePass() {
      this.showPass = !this.showPass;
    }
  }),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  },
  created: function created() {
    this.CLEAR_FORM();
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/user/Form.vue?vue&type=template&id=b8882e9e":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/user/Form.vue?vue&type=template&id=b8882e9e ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: ""
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.name,
      expression: "user.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.user.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: ""
    }
  }, [_vm._v("Username")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.username,
      expression: "user.username"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.user.username
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "username", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: ""
    }
  }, [_vm._v("Jabatan")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.jabatan,
      expression: "user.jabatan"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.user, "jabatan", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", [_vm._v("---")]), _vm._v(" "), _c("option", [_vm._v("KEPALA UPT PKB")]), _vm._v(" "), _c("option", [_vm._v("KA. SUBBAG TU UPT PKB")]), _vm._v(" "), _c("option", [_vm._v("BENDAHARA PENERIMAAN")]), _vm._v(" "), _c("option", [_vm._v("ADMINISTRASI")]), _vm._v(" "), _c("option", [_vm._v("PENGUJI MAHIR")]), _vm._v(" "), _c("option", [_vm._v("PENGUJI PENYELIA")]), _vm._v(" "), _c("option", [_vm._v("PENGUJI")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: ""
    }
  }, [_vm._v("NIP")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.nip,
      expression: "user.nip"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.user.nip
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "nip", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: ""
    }
  }, [_vm._v("NRP")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.nrp,
      expression: "user.nrp"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.user.nrp
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "nrp", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: ""
    }
  }, [_vm._v("Pangkat")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.pangkat,
      expression: "user.pangkat"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.user.pangkat
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "pangkat", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Password")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [(_vm.showPass ? "text" : "password") === "checkbox" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.user.password) ? _vm._i(_vm.user.password, null) > -1 : _vm.user.password
    },
    on: {
      input: _vm.checkPassword,
      change: function change($event) {
        var $$a = _vm.user.password,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "password", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "password", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "password", $$c);
        }
      }
    }
  }) : (_vm.showPass ? "text" : "password") === "radio" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "radio"
    },
    domProps: {
      checked: _vm._q(_vm.user.password, null)
    },
    on: {
      input: _vm.checkPassword,
      change: function change($event) {
        return _vm.$set(_vm.user, "password", null);
      }
    }
  }) : _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: _vm.showPass ? "text" : "password"
    },
    domProps: {
      value: _vm.user.password
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "password", $event.target.value);
      }, _vm.checkPassword]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("span", {
    staticClass: "input-group-text",
    on: {
      click: _vm.togglePass
    }
  }, [_c("i", {
    class: _vm.showPass ? "fa fa-eye-slash" : "fa fa-eye"
  })])]), _vm._v(" "), _c("p", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.pass))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: ""
    }
  }, [_vm._v("Role")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.role,
      expression: "user.role"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.user, "role", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", [_vm._v("---")]), _vm._v(" "), _c("option", [_vm._v("ADMIN")]), _vm._v(" "), _c("option", [_vm._v("KEPALA")]), _vm._v(" "), _c("option", [_vm._v("PETUGAS")]), _vm._v(" "), _c("option", [_vm._v("PENGUJI")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_vm.user.role == "ADMIN" || _vm.user.role == "PETUGAS" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.pf,
      expression: "user.pf"
    }],
    attrs: {
      type: "checkbox",
      name: "pf"
    },
    domProps: {
      checked: Array.isArray(_vm.user.pf) ? _vm._i(_vm.user.pf, null) > -1 : _vm.user.pf
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.pf,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "pf", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "pf", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "pf", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Pendaftaran\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PETUGAS" || _vm.user.role == "KEPALA UPT" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.ct,
      expression: "user.ct"
    }],
    attrs: {
      type: "checkbox",
      name: "ct"
    },
    domProps: {
      checked: Array.isArray(_vm.user.ct) ? _vm._i(_vm.user.ct, null) > -1 : _vm.user.ct
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.ct,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "ct", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "ct", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "ct", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Cetak\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.ft,
      expression: "user.ft"
    }],
    attrs: {
      type: "checkbox",
      name: "ft"
    },
    domProps: {
      checked: Array.isArray(_vm.user.ft) ? _vm._i(_vm.user.ft, null) > -1 : _vm.user.ft
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.ft,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "ft", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "ft", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "ft", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Foto\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.p1,
      expression: "user.p1"
    }],
    attrs: {
      type: "checkbox",
      name: "p1"
    },
    domProps: {
      checked: Array.isArray(_vm.user.p1) ? _vm._i(_vm.user.p1, null) > -1 : _vm.user.p1
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.p1,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "p1", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "p1", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "p1", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Uji Visual\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.p2,
      expression: "user.p2"
    }],
    attrs: {
      type: "checkbox",
      name: "p2"
    },
    domProps: {
      checked: Array.isArray(_vm.user.p2) ? _vm._i(_vm.user.p2, null) > -1 : _vm.user.p2
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.p2,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "p2", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "p2", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "p2", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Emisi\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.p3,
      expression: "user.p3"
    }],
    attrs: {
      type: "checkbox",
      name: "p3"
    },
    domProps: {
      checked: Array.isArray(_vm.user.p3) ? _vm._i(_vm.user.p3, null) > -1 : _vm.user.p3
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.p3,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "p3", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "p3", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "p3", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Speedometer\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.p4,
      expression: "user.p4"
    }],
    attrs: {
      type: "checkbox",
      name: "p4"
    },
    domProps: {
      checked: Array.isArray(_vm.user.p4) ? _vm._i(_vm.user.p4, null) > -1 : _vm.user.p4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.p4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "p4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "p4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "p4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Bagian Bawah\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.p5,
      expression: "user.p5"
    }],
    attrs: {
      type: "checkbox",
      name: "p5"
    },
    domProps: {
      checked: Array.isArray(_vm.user.p5) ? _vm._i(_vm.user.p5, null) > -1 : _vm.user.p5
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.p5,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "p5", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "p5", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "p5", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Kebisingan\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.p6,
      expression: "user.p6"
    }],
    attrs: {
      type: "checkbox",
      name: "p6"
    },
    domProps: {
      checked: Array.isArray(_vm.user.p6) ? _vm._i(_vm.user.p6, null) > -1 : _vm.user.p6
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.p6,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "p6", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "p6", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "p6", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Rem\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.p7,
      expression: "user.p7"
    }],
    attrs: {
      type: "checkbox",
      name: "p7"
    },
    domProps: {
      checked: Array.isArray(_vm.user.p7) ? _vm._i(_vm.user.p7, null) > -1 : _vm.user.p7
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.p7,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "p7", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "p7", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "p7", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Sideslip\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.p8,
      expression: "user.p8"
    }],
    attrs: {
      type: "checkbox",
      name: "p8"
    },
    domProps: {
      checked: Array.isArray(_vm.user.p8) ? _vm._i(_vm.user.p8, null) > -1 : _vm.user.p8
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.p8,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "p8", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "p8", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "p8", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Lampu\n              ")])])]) : _vm._e(), _vm._v(" "), _vm.user.role == "ADMIN" || _vm.user.role == "PENGUJI" ? _c("div", {
    staticClass: "col-3 col-form-label"
  }, [_c("div", {
    staticClass: "checkbox-list"
  }, [_c("label", {
    staticClass: "checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.v1,
      expression: "user.v1"
    }],
    attrs: {
      type: "checkbox",
      name: "v1"
    },
    domProps: {
      checked: Array.isArray(_vm.user.v1) ? _vm._i(_vm.user.v1, null) > -1 : _vm.user.v1
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.v1,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "v1", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "v1", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "v1", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span"), _vm._v("\n                  Verifikator\n              ")])])]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/user/Form.vue":
/*!***********************************************!*\
  !*** ./resources/js/view/pages/user/Form.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_b8882e9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=b8882e9e */ "./resources/js/view/pages/user/Form.vue?vue&type=template&id=b8882e9e");
/* harmony import */ var _Form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js */ "./resources/js/view/pages/user/Form.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_b8882e9e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_b8882e9e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/user/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/user/Form.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/view/pages/user/Form.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/user/Form.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/user/Form.vue?vue&type=template&id=b8882e9e":
/*!*****************************************************************************!*\
  !*** ./resources/js/view/pages/user/Form.vue?vue&type=template&id=b8882e9e ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_b8882e9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=b8882e9e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/user/Form.vue?vue&type=template&id=b8882e9e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_b8882e9e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_b8882e9e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);