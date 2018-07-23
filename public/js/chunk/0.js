webpackJsonp([0],{

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(80)
/* template */
var __vue_template__ = __webpack_require__(93)
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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_Threads__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_Threads___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_Threads__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_Sidebar__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__home_Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_ProfileBar__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_ProfileBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__home_ProfileBar__);
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
    components: { ProfileBar: __WEBPACK_IMPORTED_MODULE_2__home_ProfileBar___default.a, Threads: __WEBPACK_IMPORTED_MODULE_0__home_Threads___default.a, Sidebar: __WEBPACK_IMPORTED_MODULE_1__home_Sidebar___default.a },
    metaInfo: {
        title: '看微博'
    }
});

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(82)
/* template */
var __vue_template__ = __webpack_require__(83)
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

/***/ 82:
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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column" }, [
    _c(
      "section",
      { staticClass: "py-6" },
      _vm._l(_vm.threads, function(thread) {
        return _c("article", { staticClass: "media" }, [
          _c(
            "figure",
            {
              staticClass: "media-left sticky",
              staticStyle: { top: ".75rem" }
            },
            [
              _c("avatar", {
                staticClass: "pointer-events-none",
                attrs: {
                  username: thread.user.username,
                  initials: thread.user.name.charAt(0)
                }
              })
            ],
            1
          ),
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
            _vm._m(0, true)
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "media-right sticky",
              staticStyle: { top: ".75rem" }
            },
            [
              _c("small", [
                _c("time", {
                  staticClass: "time",
                  attrs: { datetime: thread.updated_at }
                })
              ])
            ]
          )
        ])
      })
    ),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(85)
/* template */
var __vue_template__ = __webpack_require__(89)
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
Component.options.__file = "resources/assets/js/views/home/Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a8c373f", Component.options)
  } else {
    hotAPI.reload("data-v-3a8c373f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TrendingTopics__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TrendingTopics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TrendingTopics__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: { TrendingTopics: __WEBPACK_IMPORTED_MODULE_0__TrendingTopics___default.a }
});

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(87)
/* template */
var __vue_template__ = __webpack_require__(88)
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
Component.options.__file = "resources/assets/js/views/home/TrendingTopics.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a2e41d4", Component.options)
  } else {
    hotAPI.reload("data-v-5a2e41d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 87:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'trending-topics'
});

/***/ }),

/***/ 88:
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
    return _c("section", { staticClass: "mb-4 p-2" }, [
      _c(
        "nav",
        {
          staticClass:
            "panel overflow-hidden rounded-lg has-background-white shadow-subtle"
        },
        [
          _c(
            "p",
            {
              staticClass:
                "panel-heading panel-heading has-text-weight-bold has-text-white has-background-primary text-base py-4 rounded-t-lg"
            },
            [
              _c("i", { staticClass: "fas fa-fire" }),
              _vm._v(" 热门话题\n        ")
            ]
          ),
          _vm._v(" "),
          _c("a", { staticClass: "panel-block border-0" }, [
            _c("span", { staticClass: "panel-icon" }, [
              _c("i", {
                staticClass: "fas fa-hashtag",
                attrs: { "aria-hidden": "true" }
              })
            ]),
            _vm._v("\n            话题1\n        ")
          ])
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5a2e41d4", module.exports)
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column is-one-quarter" }, [
    _c("div", { staticClass: "sticky pin-t" }, [_c("trending-topics")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3a8c373f", module.exports)
  }
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(91)
/* template */
var __vue_template__ = __webpack_require__(92)
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
Component.options.__file = "resources/assets/js/views/home/ProfileBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3faa7d2", Component.options)
  } else {
    hotAPI.reload("data-v-a3faa7d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 91:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'profile-bar',
    methods: {
        loginDidClick: function loginDidClick() {
            this.$modal.show('login');
        },
        registerDidClick: function registerDidClick() {
            this.$modal.show('register');
        }
    }
});

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column is-one-quarter" }, [
    _c("div", { staticClass: "sticky pin-t" }, [
      _c(
        "section",
        { staticClass: "mb-4 p-2" },
        [
          _c("transition", { attrs: { name: "slide-fade" } }, [
            _vm.App.authenticated
              ? _c(
                  "div",
                  {
                    key: "user",
                    staticClass: "card rounded-lg overflow-hidden shadow-subtle"
                  },
                  [
                    _c("div", {
                      staticClass: "w-full h-16",
                      staticStyle: {
                        background:
                          "linear-gradient(to right bottom, #8A4D76, #8A4D76)"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "columns" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "column is-one-third flex justify-center items-center p-0 ml-3 -mt-8"
                        },
                        [
                          _c("avatar", {
                            staticClass:
                              "border-4 border-white pointer-events-none",
                            attrs: {
                              username: _vm.App.user.username,
                              initials: _vm.App.user.name.charAt(0),
                              size: "66"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "column px-0 pr-3 pt-4" }, [
                        _c("b", { staticClass: "p-0 mb-2 text-lg" }, [
                          _vm._v(_vm._s(_vm.App.user.name))
                        ]),
                        _vm._v(" "),
                        _c("small", { staticClass: "block mb-2" }, [
                          _vm._v("@" + _vm._s(_vm.App.user.username))
                        ])
                      ])
                    ])
                  ]
                )
              : _c(
                  "div",
                  {
                    key: "guest",
                    staticClass: "card rounded-lg shadow-subtle"
                  },
                  [
                    _c(
                      "header",
                      {
                        staticClass:
                          "card-header has-background-success rounded-t-lg"
                      },
                      [
                        _c(
                          "p",
                          { staticClass: "card-header-title has-text-white" },
                          [
                            _c("i", { staticClass: "fas fa-user" }),
                            _vm._v(" 还木有登陆？\n                        ")
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-content" }, [
                      _c("div", { staticClass: "content" }, [
                        _c("p", [
                          _vm._v(
                            "\n                                最近发生了什么新鲜事？赶快来跟大家分享一下吧！\n                            "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("footer", { staticClass: "card-footer border-0 pb-2" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "card-footer-item button rounded is-success border-0 ml-4 mr-2 my-3 has-text-weight-bold text-sm shadow-subtle",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.loginDidClick($event)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-sign-in-alt" }),
                          _vm._v(" 登陆\n                        ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "card-footer-item button rounded border-0 ml-2 mr-4 my-3 has-text-weight-bold text-sm shadow-subtle",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.registerDidClick($event)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-plus-circle" }),
                          _vm._v(" 注册\n                        ")
                        ]
                      )
                    ])
                  ]
                )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a3faa7d2", module.exports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "columns" },
      [
        _c("profile-bar"),
        _vm._v(" "),
        _c("threads"),
        _vm._v(" "),
        _c("sidebar")
      ],
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