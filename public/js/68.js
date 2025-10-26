(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    // this.getPendaftaransTLulus();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    this.tgl = today;
  },
  data: function data() {
    return {
      // users: {}
      search: "",
      tgl: ""
    };
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__["SET_BREADCRUMB"], [{
      title: "Pendaftaran"
    }, {
      title: "Data"
    }]);
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(["pos2"])), {}, {
    page: {
      get: function get() {
        return this.$store.state.pos2.page;
      },
      set: function set(val) {
        this.$store.commit("pos2/SET_PAGE", val);
      }
    }
  }),
  watch: {
    page: function page() {
      this.getPendaftaransTLulus();
    },
    search: function search() {
      this.getPendaftaransTLulus(this.search);
    },
    tgl: function tgl() {
      this.$store.commit("pos2/SET_TGL", this.customFormatter(this.tgl));
      this.getPendaftaransTLulus(this.search);
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("pos2", ["getPendaftaransTLulus"])), {}, {
    customFormatter: function customFormatter(today) {
      return today;
    },
    reload: function reload() {
      this.getPendaftaransTLulus(this.search);
    }
  }),
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=template&id=efb9b5e8":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=template&id=efb9b5e8 ***!
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
    staticClass: "card card-custom"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-toolbar"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('b-form-datepicker', {
    attrs: {
      "id": "example-datepicker",
      "locale": "id"
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
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "serach"
    },
    domProps: {
      "value": _vm.search
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-2"
  }, [_c('a', {
    staticClass: "btn btn-sm btn-icon btn-light-info mr-2",
    attrs: {
      "title": "reload data"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.reload.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "flaticon2-reload"
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row table-responsive"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('table', {
    staticClass: "table"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l(_vm.pos2.pendaftaransTLulus.data, function (pendaftaran, index) {
    return _c('tr', {
      key: pendaftaran.uuid
    }, [_c('td', [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(pendaftaran.keterangan))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(pendaftaran.nouji))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(pendaftaran.noregistrasikendaraan))]), _vm._v(" "), _c('td', [_c('router-link', {
      attrs: {
        "to": {
          name: 'pos2.pengujian',
          params: {
            id: pendaftaran.uuid
          }
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-edit text-success"
    })])], 1)]);
  }), 0)])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "pull-right"
  }, [_c('div', {
    staticClass: "overflow-auto"
  }, [_vm.pos2.pendaftaransTLulus.data && _vm.pos2.pendaftaransTLulus.data.length > 0 ? _c('b-pagination', {
    attrs: {
      "total-rows": _vm.pos2.pendaftaransTLulus.total,
      "per-page": _vm.pos2.pendaftaransTLulus.per_page,
      "aria-controls": "pendaftaransTLulus"
    },
    model: {
      value: _vm.page,
      callback: function callback($$v) {
        _vm.page = $$v;
      },
      expression: "page"
    }
  }) : _vm._e()], 1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-title"
  }, [_c('span', {
    staticClass: "card-icon"
  }, [_c('i', {
    staticClass: "flaticon2-lorry text-primary"
  })]), _vm._v(" "), _c('h3', {
    staticClass: "card-label"
  }, [_vm._v("Pengujian POS 2 Tidak Lulus")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("No.")]), _vm._v(" "), _c('th', [_vm._v("Jenis Pendaftaran")]), _vm._v(" "), _c('th', [_vm._v("No Uji")]), _vm._v(" "), _c('th', [_vm._v("No Kendaraan")]), _vm._v(" "), _c('th', [_vm._v("Modify")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/pos2/TableTidakLulus.vue":
/*!**********************************************************!*\
  !*** ./resources/js/view/pages/pos2/TableTidakLulus.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableTidakLulus_vue_vue_type_template_id_efb9b5e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableTidakLulus.vue?vue&type=template&id=efb9b5e8 */ "./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=template&id=efb9b5e8");
/* harmony import */ var _TableTidakLulus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableTidakLulus.vue?vue&type=script&lang=js */ "./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableTidakLulus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableTidakLulus_vue_vue_type_template_id_efb9b5e8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableTidakLulus_vue_vue_type_template_id_efb9b5e8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/pos2/TableTidakLulus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTidakLulus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableTidakLulus.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTidakLulus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=template&id=efb9b5e8":
/*!****************************************************************************************!*\
  !*** ./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=template&id=efb9b5e8 ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTidakLulus_vue_vue_type_template_id_efb9b5e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableTidakLulus.vue?vue&type=template&id=efb9b5e8 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pos2/TableTidakLulus.vue?vue&type=template&id=efb9b5e8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTidakLulus_vue_vue_type_template_id_efb9b5e8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TableTidakLulus_vue_vue_type_template_id_efb9b5e8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);