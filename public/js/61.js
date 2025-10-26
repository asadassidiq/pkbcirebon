(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=script&lang=js ***!
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
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/core/services/store/breadcrumbs.module.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");





function ownKeys(e, r) { var t = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var o = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(e); r && (o = o.filter(function (r) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(e, r, t[r]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a ? Object.defineProperties(e, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: "",
      status: "3",
      tgl: ""
    };
  },
  created: function created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    this.tgl = today;
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["SET_BREADCRUMB"], [{
      title: "Pendaftaran"
    }, {
      title: "Online"
    }]);
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(["pendaftaranonline"])), {}, {
    page: {
      get: function get() {
        return this.$store.state.pendaftaranonline.page;
      },
      set: function set(val) {
        this.$store.commit("pendaftaranonline/SET_PAGE", val);
      }
    }
  }),
  watch: {
    page: function page() {
      this.getPendaftaranOnlines();
    },
    search: function search() {
      this.getPendaftarans(this.search);
    },
    tgl: function tgl() {
      this.$store.commit("pendaftaranonline/SET_TGL", this.customFormatter(this.tgl));
      this.getPendaftaranOnlines(this.search);
    },
    status: function status() {
      this.$store.commit("pendaftaranonline/SET_STATUS", this.status);
      this.getPendaftaranOnlines(this.search);
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapActions"])("pendaftaranonline", ["getPendaftaranOnlines"])), {}, {
    deletePendaftaran: function deletePendaftaran(id) {},
    customFormatter: function customFormatter(today) {
      return today;
    },
    print: function print(id) {
      window.open('/cetak/' + id + '/pendaftaranonline', "_blank");
    },
    reload: function reload() {
      this.getPendaftaranOnlines(this.search);
    }
  }),
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=template&id=55d94efd":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=template&id=55d94efd ***!
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
    staticClass: "card card-custom"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_c("b-form-datepicker", {
    attrs: {
      id: "example-datepicker",
      locale: "id"
    },
    model: {
      value: _vm.tgl,
      callback: function callback($$v) {
        _vm.tgl = $$v;
      },
      expression: "tgl"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.status,
      expression: "status"
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
        _vm.status = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Belum Verifikasi")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Verifikasi")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Semua")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "serach"
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("router-link", {
    staticClass: "btn btn-sm btn-icon btn-light-success mr-2",
    attrs: {
      to: {
        name: "pendaftaranonline.add"
      }
    }
  }, [_c("i", {
    staticClass: "flaticon2-add"
  })]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-sm btn-icon btn-light-info mr-2",
    attrs: {
      title: "reload data"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.reload.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "flaticon2-reload"
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row table-responsive"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.pendaftaranonline.pendaftaranonlines.data, function (pendaftaran, index) {
    return _c("tr", {
      key: pendaftaran.uuid
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pendaftaran.keterangan))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pendaftaran.nouji))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(pendaftaran.noregistrasikendaraan))]), _vm._v(" "), pendaftaran.waktu == "1" ? _c("td", [_vm._v("Pagi")]) : _c("td", [_vm._v("Siang")]), _vm._v(" "), pendaftaran.status == "1" ? _c("td", [_vm._v("terverifikasi")]) : _c("td", [_vm._v("belum diverifikasi")]), _vm._v(" "), _c("td", [pendaftaran.status == "0" ? _c("router-link", {
      attrs: {
        to: {
          name: "pendaftaranonline.approving",
          params: {
            id: pendaftaran.uuid
          }
        }
      }
    }, [_c("i", {
      staticClass: "far fa-check-square text-success"
    })]) : _vm._e(), _vm._v(" "), _c("a", {
      attrs: {
        href: "javascript:void(0)"
      },
      on: {
        click: function click($event) {
          return _vm.print(pendaftaran.uuid);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-print text-info"
    })])], 1)]);
  }), 0)])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("div", {
    staticClass: "pull-right"
  }, [_c("div", {
    staticClass: "overflow-auto"
  }, [_vm.pendaftaranonline.pendaftaranonlines.data && _vm.pendaftaranonline.pendaftaranonlines.data.length > 0 ? _c("b-pagination", {
    attrs: {
      "total-rows": _vm.pendaftaranonline.pendaftaranonlines.total,
      "per-page": _vm.pendaftaranonline.pendaftaranonlines.per_page,
      "aria-controls": "pendaftaranonlines"
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
  return _c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-title"
  }, [_c("span", {
    staticClass: "card-icon"
  }, [_c("i", {
    staticClass: "flaticon2-lorry text-primary"
  })]), _vm._v(" "), _c("h3", {
    staticClass: "card-label"
  }, [_vm._v("Pendaftaran Online")])]), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_c("div", {
    staticClass: "row"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("No.")]), _vm._v(" "), _c("th", [_vm._v("Jenis Pendaftaran")]), _vm._v(" "), _c("th", [_vm._v("No Uji")]), _vm._v(" "), _c("th", [_vm._v("No Kendaraan")]), _vm._v(" "), _c("th", [_vm._v("Waktu")]), _vm._v(" "), _c("th", [_vm._v("Status")]), _vm._v(" "), _c("th", [_vm._v("Modify")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/view/pages/pendaftaranonline/Table.vue":
/*!*************************************************************!*\
  !*** ./resources/js/view/pages/pendaftaranonline/Table.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_55d94efd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=55d94efd */ "./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=template&id=55d94efd");
/* harmony import */ var _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js */ "./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_55d94efd__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_55d94efd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/pages/pendaftaranonline/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=template&id=55d94efd":
/*!*******************************************************************************************!*\
  !*** ./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=template&id=55d94efd ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_55d94efd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=55d94efd */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/pages/pendaftaranonline/Table.vue?vue&type=template&id=55d94efd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_55d94efd__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_55d94efd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);