(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/monitoring/Table.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/monitoring/Table.vue?vue&type=script&lang=js ***!
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
  created: function created() {
    // this.getMonitorings();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    this.tgl = today;
  },
  data: function data() {
    return {
      // users: {}
      search: "",
      tgl: "",
      idbilling: "",
      result: '',
      error: ''
    };
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__["SET_BREADCRUMB"], [{
      title: "Monitoring"
    }, {
      title: "Data"
    }]);
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])(["monitoring"])), {}, {
    page: {
      get: function get() {
        return this.$store.state.monitoring.page;
      },
      set: function set(val) {
        this.$store.commit("monitoring/SET_PAGE", val);
      }
    }
  }),
  watch: {
    page: function page() {
      this.getMonitorings();
    },
    search: function search() {
      this.getMonitorings(this.search);
    },
    tgl: function tgl() {
      this.$store.commit("monitoring/SET_TGL", this.customFormatter(this.tgl));
      this.getMonitorings(this.search);
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("monitoring", ["getMonitorings"])), {}, {
    deleteMonitoring: function deleteMonitoring(id) {},
    customFormatter: function customFormatter(today) {
      return today;
    },
    print: function print(id) {
      window.open('/cetak/' + id + '/permohonan', "_blank");
    },
    reload: function reload() {
      this.getMonitorings(this.search);
    }
  }),
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/monitoring/Table.vue?vue&type=template&id=6a1e17ae":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/monitoring/Table.vue?vue&type=template&id=6a1e17ae ***!
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
    staticClass: "col-md-12 table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l(_vm.monitoring.monitorings.data, function (monitoring, index) {
    return _c('tr', {
      key: monitoring.uuid
    }, [_c('td', [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(monitoring.keterangan))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(monitoring.nouji))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(monitoring.noregistrasikendaraan))]), _vm._v(" "), monitoring.posisi == 0 ? _c('td', [_vm._v("Menunggu Uji")]) : monitoring.posisi < 5 ? _c('td', [_vm._v(_vm._s('POS ' + monitoring.posisi))]) : monitoring.posisi == 5 ? _c('td', [_vm._v("Verif")]) : monitoring.posisi == 6 ? _c('td', [_vm._v("Cetak")]) : monitoring.posisi == 7 ? _c('td', [_vm._v("Diserahkan")]) : _c('td', [_vm._v("Selesai")]), _vm._v(" "), monitoring.pos1 == 0 ? _c('td', [_vm._m(2, true)]) : monitoring.pos1 == 1 ? _c('td', [_vm._m(3, true)]) : _c('td', [_vm._m(4, true)]), _vm._v(" "), monitoring.pos2 == 0 ? _c('td', [_vm._m(5, true)]) : monitoring.pos2 == 1 ? _c('td', [_vm._m(6, true)]) : _c('td', [_vm._m(7, true)]), _vm._v(" "), monitoring.pos3 == 0 ? _c('td', [_vm._m(8, true)]) : monitoring.pos3 == 1 ? _c('td', [_vm._m(9, true)]) : _c('td', [_vm._m(10, true)]), _vm._v(" "), monitoring.pos4 == 0 ? _c('td', [_vm._m(11, true)]) : monitoring.pos4 == 1 ? _c('td', [_vm._m(12, true)]) : _c('td', [_vm._m(13, true)]), _vm._v(" "), monitoring.posverif == 0 ? _c('td', [_vm._m(14, true)]) : monitoring.posverif == 1 ? _c('td', [_vm._m(15, true)]) : _c('td', [_vm._m(16, true)])]);
  }), 0)])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "pull-right"
  }, [_c('div', {
    staticClass: "overflow-auto"
  }, [_vm.monitoring.monitorings.data && _vm.monitoring.monitorings.data.length > 0 ? _c('b-pagination', {
    attrs: {
      "total-rows": _vm.monitoring.monitorings.total,
      "per-page": _vm.monitoring.monitorings.per_page,
      "aria-controls": "monitorings"
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
  }, [_vm._v("Monitoring")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("No.")]), _vm._v(" "), _c('th', [_vm._v("Jenis Pendaftaran")]), _vm._v(" "), _c('th', [_vm._v("No Uji")]), _vm._v(" "), _c('th', [_vm._v("No Kendaraan")]), _vm._v(" "), _c('th', [_vm._v("Posisi")]), _vm._v(" "), _c('th', [_vm._v("Pos 1")]), _vm._v(" "), _c('th', [_vm._v("Pos 2")]), _vm._v(" "), _c('th', [_vm._v("Pos 3")]), _vm._v(" "), _c('th', [_vm._v("Pos 4")]), _vm._v(" "), _c('th', [_vm._v("Verif")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon-circle text-danger"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-correct text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-line text-dark"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon-circle text-danger"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-correct text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-line text-dark"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon-circle text-danger"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-correct text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-line text-dark"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon-circle text-danger"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-correct text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-line text-dark"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon-circle text-danger"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-correct text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "flaticon2-line text-dark"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/monitoring/Table.vue":
/*!******************************************************!*\
  !*** ./resources/js/view/pages/monitoring/Table.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_6a1e17ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=6a1e17ae */ "./resources/js/view/pages/monitoring/Table.vue?vue&type=template&id=6a1e17ae");
/* harmony import */ var _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js */ "./resources/js/view/pages/monitoring/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_6a1e17ae__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_6a1e17ae__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/monitoring/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/monitoring/Table.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/view/pages/monitoring/Table.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/monitoring/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/monitoring/Table.vue?vue&type=template&id=6a1e17ae":
/*!************************************************************************************!*\
  !*** ./resources/js/view/pages/monitoring/Table.vue?vue&type=template&id=6a1e17ae ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_6a1e17ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=6a1e17ae */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/monitoring/Table.vue?vue&type=template&id=6a1e17ae");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_6a1e17ae__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_6a1e17ae__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);