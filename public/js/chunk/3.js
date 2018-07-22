webpackJsonp([3],{

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(73)
/* template */
var __vue_template__ = __webpack_require__(80)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c0a33b2", Component.options)
  } else {
    hotAPI.reload("data-v-6c0a33b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_Threads_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_Threads_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_Threads_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_Channels_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_Channels_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__home_Channels_vue__);
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Threads: __WEBPACK_IMPORTED_MODULE_0__home_Threads_vue___default.a, Channels: __WEBPACK_IMPORTED_MODULE_1__home_Channels_vue___default.a },
    metaInfo: {
        title: '看微博'
    }
});

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(75)
/* template */
var __vue_template__ = __webpack_require__(76)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/home/Threads.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71a81de8", Component.options)
  } else {
    hotAPI.reload("data-v-71a81de8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            threads: [],
            pagination: {
                current_page: 0,
                first_page_url: null,
                last_page: 0,
                last_page_url: null,
                next_page_url: null,
                prev_page_url: null
            }
        };
    },

    methods: {
        darkTextColor: function darkTextColor(fromColor) {
            return TinyColor(fromColor).isLight();
        }
    },
    created: function created() {
        var _this = this;

        this.$client.get('/threads').then(function (_ref) {
            var data = _ref.data;

            var threads = data.threads;

            _this.threads = threads.data;

            setTimeout(function () {
                // Render timeago
                TimeAgo.render(document.querySelectorAll('.time'), 'zh_CN');
            }, 50);
        });
    }
});

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column is-two-thirds" }, [
    _c("h1", { staticClass: "title" }, [_vm._v("微博总览")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "py-6" },
      _vm._l(_vm.threads, function(thread) {
        return _c("article", { staticClass: "media" }, [
          _c("figure", { staticClass: "media-left" }, [
            _c(
              "div",
              {
                staticClass:
                  "image is-64x64 rounded-lg flex items-center justify-center",
                style: {
                  backgroundColor: "#" + thread.channel.color,
                  color: _vm.darkTextColor(thread.channel.color)
                    ? "#111"
                    : "#fff"
                }
              },
              [
                _c("b", {
                  staticClass: "is-size-3",
                  domProps: { textContent: _vm._s(thread.user.name.charAt(0)) }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("p", [
                _c("strong", [_vm._v(_vm._s(thread.user.name))]),
                _vm._v(" "),
                _c("small", [_vm._v("@" + _vm._s(thread.user.username))]),
                _vm._v(" "),
                _c("br"),
                _vm._v(
                  "\n                        " +
                    _vm._s(thread.body) +
                    "\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1, true)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media-right" }, [
            _c("small", [
              _c("time", {
                staticClass: "time",
                attrs: { datetime: thread.updated_at }
              })
            ])
          ])
        ])
      })
    ),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle leading-normal" }, [
      _vm._v("\n        一个可以让你发布任何内容的"),
      _c("strong", [_vm._v("高大上微博")]),
      _vm._v(", 好像很厉害一样，但其实就这么简单\n    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "level is-mobile" }, [
      _c("div", { staticClass: "level-left" }, [
        _c("a", { staticClass: "level-item" }, [
          _c("span", { staticClass: "icon is-small" }, [
            _c("i", { staticClass: "fas fa-reply" })
          ])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "level-item" }, [
          _c("span", { staticClass: "icon is-small" }, [
            _c("i", { staticClass: "fas fa-retweet" })
          ])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "level-item" }, [
          _c("span", { staticClass: "icon is-small" }, [
            _c("i", { staticClass: "fas fa-heart" })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      {
        staticClass: "pagination is-centered is-rounded",
        attrs: { role: "navigation", "aria-label": "pagination" }
      },
      [
        _c("a", { staticClass: "pagination-previous" }, [_vm._v("上一页")]),
        _vm._v(" "),
        _c("a", { staticClass: "pagination-next" }, [_vm._v("下一页")]),
        _vm._v(" "),
        _c("ul", { staticClass: "pagination-list" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                attrs: { "aria-label": "Goto page 1" }
              },
              [_vm._v("1")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                attrs: { "aria-label": "Goto page 45" }
              },
              [_vm._v("45")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "pagination-link is-current",
                attrs: { "aria-label": "Page 46", "aria-current": "page" }
              },
              [_vm._v("46")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                attrs: { "aria-label": "Goto page 47" }
              },
              [_vm._v("47")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                attrs: { "aria-label": "Goto page 86" }
              },
              [_vm._v("86")]
            )
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-71a81de8", module.exports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(78)
/* template */
var __vue_template__ = __webpack_require__(79)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/home/Channels.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c1cd07d", Component.options)
  } else {
    hotAPI.reload("data-v-0c1cd07d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column" }, [
      _c("nav", { staticClass: "panel" }, [
        _c(
          "p",
          {
            staticClass:
              "panel-heading panel-heading has-text-white has-background-primary"
          },
          [
            _c("i", { staticClass: "fas fa-fire" }),
            _vm._v(" 热门频道\n        ")
          ]
        ),
        _vm._v(" "),
        _c("a", { staticClass: "panel-block is-active" }, [
          _vm._v("\n            全部频道\n        ")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "panel-block" }, [
          _c("span", { staticClass: "panel-icon" }, [
            _c("i", {
              staticClass: "fas fa-book",
              attrs: { "aria-hidden": "true" }
            })
          ]),
          _vm._v("\n            频道\n        ")
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c1cd07d", module.exports)
  }
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "columns" },
      [_c("threads"), _vm._v(" "), _c("channels")],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c0a33b2", module.exports)
  }
}

/***/ })

});