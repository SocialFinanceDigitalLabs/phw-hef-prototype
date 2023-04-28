/*! For license information please see index.js.LICENSE.txt */
(() => {
  var t = {
      985: function (t) {
        var e;
        'undefined' != typeof self && self,
          (e = function () {
            return (function (t) {
              var e = {};
              function i(n) {
                if (e[n]) return e[n].exports;
                var s = (e[n] = { i: n, l: !1, exports: {} });
                return (
                  t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports
                );
              }
              return (
                (i.m = t),
                (i.c = e),
                (i.d = function (t, e, n) {
                  i.o(t, e) ||
                    Object.defineProperty(t, e, {
                      configurable: !1,
                      enumerable: !0,
                      get: n,
                    });
                }),
                (i.n = function (t) {
                  var e =
                    t && t.__esModule
                      ? function () {
                          return t.default;
                        }
                      : function () {
                          return t;
                        };
                  return i.d(e, 'a', e), e;
                }),
                (i.o = function (t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (i.p = ''),
                i((i.s = 11))
              );
            })([
              function (t, e, i) {
                'use strict';
                var n = Array.prototype,
                  s = Object.prototype,
                  o = {
                    '&': '&amp;',
                    '"': '&quot;',
                    "'": '&#39;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '\\': '&#92;',
                  },
                  r = /[&"'<>\\]/g;
                function a(t, e) {
                  return s.hasOwnProperty.call(t, e);
                }
                function l(t) {
                  return o[t];
                }
                function c(t, e, i) {
                  var n, s, o;
                  if (
                    (t instanceof Error &&
                      (t = (s = t).name + ': ' + s.message),
                    Object.setPrototypeOf
                      ? ((n = new Error(t)),
                        Object.setPrototypeOf(n, c.prototype))
                      : ((n = this),
                        Object.defineProperty(n, 'message', {
                          enumerable: !1,
                          writable: !0,
                          value: t,
                        })),
                    Object.defineProperty(n, 'name', {
                      value: 'Template render error',
                    }),
                    Error.captureStackTrace &&
                      Error.captureStackTrace(n, this.constructor),
                    s)
                  ) {
                    var r = Object.getOwnPropertyDescriptor(s, 'stack');
                    (o =
                      r &&
                      (r.get ||
                        function () {
                          return r.value;
                        })) ||
                      (o = function () {
                        return s.stack;
                      });
                  } else {
                    var a = new Error(t).stack;
                    o = function () {
                      return a;
                    };
                  }
                  return (
                    Object.defineProperty(n, 'stack', {
                      get: function () {
                        return o.call(n);
                      },
                    }),
                    Object.defineProperty(n, 'cause', { value: s }),
                    (n.lineno = e),
                    (n.colno = i),
                    (n.firstUpdate = !0),
                    (n.Update = function (t) {
                      var e = '(' + (t || 'unknown path') + ')';
                      return (
                        this.firstUpdate &&
                          (this.lineno && this.colno
                            ? (e +=
                                ' [Line ' +
                                this.lineno +
                                ', Column ' +
                                this.colno +
                                ']')
                            : this.lineno &&
                              (e += ' [Line ' + this.lineno + ']')),
                        (e += '\n '),
                        this.firstUpdate && (e += ' '),
                        (this.message = e + (this.message || '')),
                        (this.firstUpdate = !1),
                        this
                      );
                    }),
                    n
                  );
                }
                function h(t) {
                  return '[object Function]' === s.toString.call(t);
                }
                function u(t) {
                  return '[object Array]' === s.toString.call(t);
                }
                function d(t) {
                  return '[object String]' === s.toString.call(t);
                }
                function f(t) {
                  return '[object Object]' === s.toString.call(t);
                }
                function p(t) {
                  var e,
                    i = (e = t)
                      ? 'string' == typeof e
                        ? e.split('.')
                        : [e]
                      : [];
                  return function (t) {
                    for (var e = t, n = 0; n < i.length; n++) {
                      var s = i[n];
                      if (!a(e, s)) return;
                      e = e[s];
                    }
                    return e;
                  };
                }
                function g(t) {
                  return Array.prototype.slice.call(t);
                }
                function m(t, e, i) {
                  return Array.prototype.indexOf.call(t || [], e, i);
                }
                function b(t) {
                  var e = [];
                  for (var i in t) a(t, i) && e.push(i);
                  return e;
                }
                ((e = t.exports = {}).hasOwnProp = a),
                  (e._prettifyError = function (t, i, n) {
                    if (
                      (n.Update || (n = new e.TemplateError(n)),
                      n.Update(t),
                      !i)
                    ) {
                      var s = n;
                      (n = new Error(s.message)).name = s.name;
                    }
                    return n;
                  }),
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(c.prototype, Error.prototype)
                    : (c.prototype = Object.create(Error.prototype, {
                        constructor: { value: c },
                      })),
                  (e.TemplateError = c),
                  (e.escape = function (t) {
                    return t.replace(r, l);
                  }),
                  (e.isFunction = h),
                  (e.isArray = u),
                  (e.isString = d),
                  (e.isObject = f),
                  (e.getAttrGetter = p),
                  (e.groupBy = function (t, e, i) {
                    for (
                      var n = {}, s = h(e) ? e : p(e), o = 0;
                      o < t.length;
                      o++
                    ) {
                      var r = t[o],
                        a = s(r, o);
                      if (void 0 === a && !0 === i)
                        throw new TypeError(
                          'groupby: attribute "' + e + '" resolved to undefined'
                        );
                      (n[a] || (n[a] = [])).push(r);
                    }
                    return n;
                  }),
                  (e.toArray = g),
                  (e.without = function (t) {
                    var e = [];
                    if (!t) return e;
                    for (
                      var i = t.length, n = g(arguments).slice(1), s = -1;
                      ++s < i;

                    )
                      -1 === m(n, t[s]) && e.push(t[s]);
                    return e;
                  }),
                  (e.repeat = function (t, e) {
                    for (var i = '', n = 0; n < e; n++) i += t;
                    return i;
                  }),
                  (e.each = function (t, e, i) {
                    if (null != t)
                      if (n.forEach && t.forEach === n.forEach) t.forEach(e, i);
                      else if (t.length === +t.length)
                        for (var s = 0, o = t.length; s < o; s++)
                          e.call(i, t[s], s, t);
                  }),
                  (e.map = function (t, e) {
                    var i = [];
                    if (null == t) return i;
                    if (n.map && t.map === n.map) return t.map(e);
                    for (var s = 0; s < t.length; s++) i[i.length] = e(t[s], s);
                    return t.length === +t.length && (i.length = t.length), i;
                  }),
                  (e.asyncIter = function (t, e, i) {
                    var n = -1;
                    !(function s() {
                      ++n < t.length ? e(t[n], n, s, i) : i();
                    })();
                  }),
                  (e.asyncFor = function (t, e, i) {
                    var n = b(t || {}),
                      s = n.length,
                      o = -1;
                    !(function r() {
                      o++;
                      var a = n[o];
                      o < s ? e(a, t[a], o, s, r) : i();
                    })();
                  }),
                  (e.indexOf = m),
                  (e.keys = b),
                  (e._entries = function (t) {
                    return b(t).map(function (e) {
                      return [e, t[e]];
                    });
                  }),
                  (e._values = function (t) {
                    return b(t).map(function (e) {
                      return t[e];
                    });
                  }),
                  (e._assign = e.extend =
                    function (t, e) {
                      return (
                        (t = t || {}),
                        b(e).forEach(function (i) {
                          t[i] = e[i];
                        }),
                        t
                      );
                    }),
                  (e.inOperator = function (t, e) {
                    if (u(e) || d(e)) return -1 !== e.indexOf(t);
                    if (f(e)) return t in e;
                    throw new Error(
                      'Cannot use "in" operator to search for "' +
                        t +
                        '" in unexpected types.'
                    );
                  });
              },
              function (t, e, i) {
                'use strict';
                function n(t, e) {
                  for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(
                        t,
                        (void 0,
                        'symbol' ==
                        typeof (s = (function (t, e) {
                          if ('object' != typeof t || null === t) return t;
                          var i = t[Symbol.toPrimitive];
                          if (void 0 !== i) {
                            var n = i.call(t, 'string');
                            if ('object' != typeof n) return n;
                            throw new TypeError(
                              '@@toPrimitive must return a primitive value.'
                            );
                          }
                          return String(t);
                        })(n.key))
                          ? s
                          : String(s)),
                        n
                      );
                  }
                  var s;
                }
                function s(t, e, i) {
                  return (
                    e && n(t.prototype, e),
                    i && n(t, i),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                  );
                }
                function o(t, e) {
                  (t.prototype = Object.create(e.prototype)),
                    (t.prototype.constructor = t),
                    r(t, e);
                }
                function r(t, e) {
                  return (
                    (r = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (t, e) {
                          return (t.__proto__ = e), t;
                        }),
                    r(t, e)
                  );
                }
                var a = i(16),
                  l = i(0);
                function c(t, e, i) {
                  (i = i || {}),
                    l.keys(i).forEach(function (e) {
                      var n, s;
                      i[e] =
                        ((n = t.prototype[e]),
                        (s = i[e]),
                        'function' != typeof n || 'function' != typeof s
                          ? s
                          : function () {
                              var t = this.parent;
                              this.parent = n;
                              var e = s.apply(this, arguments);
                              return (this.parent = t), e;
                            });
                    });
                  var n = (function (t) {
                    function i() {
                      return t.apply(this, arguments) || this;
                    }
                    return (
                      o(i, t),
                      s(i, [
                        {
                          key: 'typename',
                          get: function () {
                            return e;
                          },
                        },
                      ]),
                      i
                    );
                  })(t);
                  return l._assign(n.prototype, i), n;
                }
                var h = (function () {
                    function t() {
                      this.init.apply(this, arguments);
                    }
                    return (
                      (t.prototype.init = function () {}),
                      (t.extend = function (t, e) {
                        return (
                          'object' == typeof t && ((e = t), (t = 'anonymous')),
                          c(this, t, e)
                        );
                      }),
                      s(t, [
                        {
                          key: 'typename',
                          get: function () {
                            return this.constructor.name;
                          },
                        },
                      ]),
                      t
                    );
                  })(),
                  u = (function (t) {
                    function e() {
                      var e, i;
                      return (
                        (e = i = t.call(this) || this).init.apply(e, arguments),
                        i
                      );
                    }
                    return (
                      o(e, t),
                      (e.prototype.init = function () {}),
                      (e.extend = function (t, e) {
                        return (
                          'object' == typeof t && ((e = t), (t = 'anonymous')),
                          c(this, t, e)
                        );
                      }),
                      s(e, [
                        {
                          key: 'typename',
                          get: function () {
                            return this.constructor.name;
                          },
                        },
                      ]),
                      e
                    );
                  })(a);
                t.exports = { Obj: h, EmitterObj: u };
              },
              function (t, e, i) {
                'use strict';
                var n = i(0),
                  s = Array.from,
                  o =
                    'function' == typeof Symbol &&
                    Symbol.iterator &&
                    'function' == typeof s,
                  r = (function () {
                    function t(t, e) {
                      (this.variables = Object.create(null)),
                        (this.parent = t),
                        (this.topLevel = !1),
                        (this.isolateWrites = e);
                    }
                    var e = t.prototype;
                    return (
                      (e.set = function (t, e, i) {
                        var n = t.split('.'),
                          s = this.variables,
                          o = this;
                        if (i && (o = this.resolve(n[0], !0))) o.set(t, e);
                        else {
                          for (var r = 0; r < n.length - 1; r++) {
                            var a = n[r];
                            s[a] || (s[a] = {}), (s = s[a]);
                          }
                          s[n[n.length - 1]] = e;
                        }
                      }),
                      (e.get = function (t) {
                        var e = this.variables[t];
                        return void 0 !== e ? e : null;
                      }),
                      (e.lookup = function (t) {
                        var e = this.parent,
                          i = this.variables[t];
                        return void 0 !== i ? i : e && e.lookup(t);
                      }),
                      (e.resolve = function (t, e) {
                        var i = e && this.isolateWrites ? void 0 : this.parent;
                        return void 0 !== this.variables[t]
                          ? this
                          : i && i.resolve(t);
                      }),
                      (e.push = function (e) {
                        return new t(this, e);
                      }),
                      (e.pop = function () {
                        return this.parent;
                      }),
                      t
                    );
                  })();
                function a(t) {
                  return (
                    t && Object.prototype.hasOwnProperty.call(t, '__keywords')
                  );
                }
                function l(t) {
                  var e = t.length;
                  return 0 === e ? 0 : a(t[e - 1]) ? e - 1 : e;
                }
                function c(t) {
                  if ('string' != typeof t) return t;
                  (this.val = t), (this.length = t.length);
                }
                (c.prototype = Object.create(String.prototype, {
                  length: { writable: !0, configurable: !0, value: 0 },
                })),
                  (c.prototype.valueOf = function () {
                    return this.val;
                  }),
                  (c.prototype.toString = function () {
                    return this.val;
                  }),
                  (t.exports = {
                    Frame: r,
                    makeMacro: function (t, e, i) {
                      return function () {
                        for (
                          var n = arguments.length, s = new Array(n), o = 0;
                          o < n;
                          o++
                        )
                          s[o] = arguments[o];
                        var r,
                          c = l(s),
                          h = (function (t) {
                            var e = t.length;
                            if (e) {
                              var i = t[e - 1];
                              if (a(i)) return i;
                            }
                            return {};
                          })(s);
                        if (c > t.length)
                          (r = s.slice(0, t.length)),
                            s.slice(r.length, c).forEach(function (t, i) {
                              i < e.length && (h[e[i]] = t);
                            }),
                            r.push(h);
                        else if (c < t.length) {
                          r = s.slice(0, c);
                          for (var u = c; u < t.length; u++) {
                            var d = t[u];
                            r.push(h[d]), delete h[d];
                          }
                          r.push(h);
                        } else r = s;
                        return i.apply(this, r);
                      };
                    },
                    makeKeywordArgs: function (t) {
                      return (t.__keywords = !0), t;
                    },
                    numArgs: l,
                    suppressValue: function (t, e) {
                      return (
                        (t = null != t ? t : ''),
                        !e || t instanceof c || (t = n.escape(t.toString())),
                        t
                      );
                    },
                    ensureDefined: function (t, e, i) {
                      if (null == t)
                        throw new n.TemplateError(
                          'attempted to output null or undefined value',
                          e + 1,
                          i + 1
                        );
                      return t;
                    },
                    memberLookup: function (t, e) {
                      if (null != t)
                        return 'function' == typeof t[e]
                          ? function () {
                              for (
                                var i = arguments.length,
                                  n = new Array(i),
                                  s = 0;
                                s < i;
                                s++
                              )
                                n[s] = arguments[s];
                              return t[e].apply(t, n);
                            }
                          : t[e];
                    },
                    contextOrFrameLookup: function (t, e, i) {
                      var n = e.lookup(i);
                      return void 0 !== n ? n : t.lookup(i);
                    },
                    callWrap: function (t, e, i, n) {
                      if (!t)
                        throw new Error(
                          'Unable to call `' +
                            e +
                            '`, which is undefined or falsey'
                        );
                      if ('function' != typeof t)
                        throw new Error(
                          'Unable to call `' + e + '`, which is not a function'
                        );
                      return t.apply(i, n);
                    },
                    handleError: function (t, e, i) {
                      return t.lineno ? t : new n.TemplateError(t, e, i);
                    },
                    isArray: n.isArray,
                    keys: n.keys,
                    SafeString: c,
                    copySafeness: function (t, e) {
                      return t instanceof c ? new c(e) : e.toString();
                    },
                    markSafe: function (t) {
                      var e = typeof t;
                      return 'string' === e
                        ? new c(t)
                        : 'function' !== e
                        ? t
                        : function (e) {
                            var i = t.apply(this, arguments);
                            return 'string' == typeof i ? new c(i) : i;
                          };
                    },
                    asyncEach: function (t, e, i, s) {
                      if (n.isArray(t)) {
                        var o = t.length;
                        n.asyncIter(
                          t,
                          function (t, n, s) {
                            switch (e) {
                              case 1:
                                i(t, n, o, s);
                                break;
                              case 2:
                                i(t[0], t[1], n, o, s);
                                break;
                              case 3:
                                i(t[0], t[1], t[2], n, o, s);
                                break;
                              default:
                                t.push(n, o, s), i.apply(this, t);
                            }
                          },
                          s
                        );
                      } else
                        n.asyncFor(
                          t,
                          function (t, e, n, s, o) {
                            i(t, e, n, s, o);
                          },
                          s
                        );
                    },
                    asyncAll: function (t, e, i, s) {
                      var o,
                        r,
                        a = 0;
                      function l(t, e) {
                        a++, (r[t] = e), a === o && s(null, r.join(''));
                      }
                      if (n.isArray(t))
                        if (((o = t.length), (r = new Array(o)), 0 === o))
                          s(null, '');
                        else
                          for (var c = 0; c < t.length; c++) {
                            var h = t[c];
                            switch (e) {
                              case 1:
                                i(h, c, o, l);
                                break;
                              case 2:
                                i(h[0], h[1], c, o, l);
                                break;
                              case 3:
                                i(h[0], h[1], h[2], c, o, l);
                                break;
                              default:
                                h.push(c, o, l), i.apply(this, h);
                            }
                          }
                      else {
                        var u = n.keys(t || {});
                        if (((o = u.length), (r = new Array(o)), 0 === o))
                          s(null, '');
                        else
                          for (var d = 0; d < u.length; d++) {
                            var f = u[d];
                            i(f, t[f], d, o, l);
                          }
                      }
                    },
                    inOperator: n.inOperator,
                    fromIterator: function (t) {
                      return 'object' != typeof t || null === t || n.isArray(t)
                        ? t
                        : o && Symbol.iterator in t
                        ? s(t)
                        : t;
                    },
                  });
              },
              function (t, e, i) {
                'use strict';
                function n(t, e) {
                  for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(
                        t,
                        (void 0,
                        'symbol' ==
                        typeof (s = (function (t, e) {
                          if ('object' != typeof t || null === t) return t;
                          var i = t[Symbol.toPrimitive];
                          if (void 0 !== i) {
                            var n = i.call(t, 'string');
                            if ('object' != typeof n) return n;
                            throw new TypeError(
                              '@@toPrimitive must return a primitive value.'
                            );
                          }
                          return String(t);
                        })(n.key))
                          ? s
                          : String(s)),
                        n
                      );
                  }
                  var s;
                }
                function s(t, e, i) {
                  return (
                    e && n(t.prototype, e),
                    i && n(t, i),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                  );
                }
                function o(t, e) {
                  (t.prototype = Object.create(e.prototype)),
                    (t.prototype.constructor = t),
                    r(t, e);
                }
                function r(t, e) {
                  return (
                    (r = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (t, e) {
                          return (t.__proto__ = e), t;
                        }),
                    r(t, e)
                  );
                }
                function a(t, e, i) {
                  t instanceof e && i.push(t),
                    t instanceof l && t.findAll(e, i);
                }
                var l = (function (t) {
                    function e() {
                      return t.apply(this, arguments) || this;
                    }
                    o(e, t);
                    var i = e.prototype;
                    return (
                      (i.init = function (t, e) {
                        for (
                          var i = arguments,
                            n = this,
                            s = arguments.length,
                            o = new Array(s > 2 ? s - 2 : 0),
                            r = 2;
                          r < s;
                          r++
                        )
                          o[r - 2] = arguments[r];
                        (this.lineno = t),
                          (this.colno = e),
                          this.fields.forEach(function (t, e) {
                            var s = i[e + 2];
                            void 0 === s && (s = null), (n[t] = s);
                          });
                      }),
                      (i.findAll = function (t, e) {
                        var i = this;
                        return (
                          (e = e || []),
                          this instanceof h
                            ? this.children.forEach(function (i) {
                                return a(i, t, e);
                              })
                            : this.fields.forEach(function (n) {
                                return a(i[n], t, e);
                              }),
                          e
                        );
                      }),
                      (i.iterFields = function (t) {
                        var e = this;
                        this.fields.forEach(function (i) {
                          t(e[i], i);
                        });
                      }),
                      e
                    );
                  })(i(1).Obj),
                  c = (function (t) {
                    function e() {
                      return t.apply(this, arguments) || this;
                    }
                    return (
                      o(e, t),
                      s(e, [
                        {
                          key: 'typename',
                          get: function () {
                            return 'Value';
                          },
                        },
                        {
                          key: 'fields',
                          get: function () {
                            return ['value'];
                          },
                        },
                      ]),
                      e
                    );
                  })(l),
                  h = (function (t) {
                    function e() {
                      return t.apply(this, arguments) || this;
                    }
                    o(e, t);
                    var i = e.prototype;
                    return (
                      (i.init = function (e, i, n) {
                        t.prototype.init.call(this, e, i, n || []);
                      }),
                      (i.addChild = function (t) {
                        this.children.push(t);
                      }),
                      s(e, [
                        {
                          key: 'typename',
                          get: function () {
                            return 'NodeList';
                          },
                        },
                        {
                          key: 'fields',
                          get: function () {
                            return ['children'];
                          },
                        },
                      ]),
                      e
                    );
                  })(l),
                  u = h.extend('Root'),
                  d = c.extend('Literal'),
                  f = c.extend('Symbol'),
                  p = h.extend('Group'),
                  g = h.extend('Array'),
                  m = l.extend('Pair', { fields: ['key', 'value'] }),
                  b = h.extend('Dict'),
                  x = l.extend('LookupVal', { fields: ['target', 'val'] }),
                  v = l.extend('If', { fields: ['cond', 'body', 'else_'] }),
                  _ = v.extend('IfAsync'),
                  y = l.extend('InlineIf', {
                    fields: ['cond', 'body', 'else_'],
                  }),
                  k = l.extend('For', {
                    fields: ['arr', 'name', 'body', 'else_'],
                  }),
                  w = k.extend('AsyncEach'),
                  S = k.extend('AsyncAll'),
                  E = l.extend('Macro', { fields: ['name', 'args', 'body'] }),
                  O = E.extend('Caller'),
                  M = l.extend('Import', {
                    fields: ['template', 'target', 'withContext'],
                  }),
                  L = (function (t) {
                    function e() {
                      return t.apply(this, arguments) || this;
                    }
                    return (
                      o(e, t),
                      (e.prototype.init = function (e, i, n, s, o) {
                        t.prototype.init.call(this, e, i, n, s || new h(), o);
                      }),
                      s(e, [
                        {
                          key: 'typename',
                          get: function () {
                            return 'FromImport';
                          },
                        },
                        {
                          key: 'fields',
                          get: function () {
                            return ['template', 'names', 'withContext'];
                          },
                        },
                      ]),
                      e
                    );
                  })(l),
                  T = l.extend('FunCall', { fields: ['name', 'args'] }),
                  A = T.extend('Filter'),
                  C = A.extend('FilterAsync', {
                    fields: ['name', 'args', 'symbol'],
                  }),
                  P = b.extend('KeywordArgs'),
                  D = l.extend('Block', { fields: ['name', 'body'] }),
                  R = l.extend('Super', { fields: ['blockName', 'symbol'] }),
                  N = l
                    .extend('TemplateRef', { fields: ['template'] })
                    .extend('Extends'),
                  F = l.extend('Include', {
                    fields: ['template', 'ignoreMissing'],
                  }),
                  I = l.extend('Set', { fields: ['targets', 'value'] }),
                  B = l.extend('Switch', {
                    fields: ['expr', 'cases', 'default'],
                  }),
                  j = l.extend('Case', { fields: ['cond', 'body'] }),
                  V = h.extend('Output'),
                  z = l.extend('Capture', { fields: ['body'] }),
                  W = d.extend('TemplateData'),
                  H = l.extend('UnaryOp', { fields: ['target'] }),
                  K = l.extend('BinOp', { fields: ['left', 'right'] }),
                  U = K.extend('In'),
                  $ = K.extend('Is'),
                  Y = K.extend('Or'),
                  q = K.extend('And'),
                  X = H.extend('Not'),
                  G = K.extend('Add'),
                  J = K.extend('Concat'),
                  Z = K.extend('Sub'),
                  Q = K.extend('Mul'),
                  tt = K.extend('Div'),
                  et = K.extend('FloorDiv'),
                  it = K.extend('Mod'),
                  nt = K.extend('Pow'),
                  st = H.extend('Neg'),
                  ot = H.extend('Pos'),
                  rt = l.extend('Compare', { fields: ['expr', 'ops'] }),
                  at = l.extend('CompareOperand', { fields: ['expr', 'type'] }),
                  lt = l.extend('CallExtension', {
                    init: function (t, e, i, n) {
                      this.parent(),
                        (this.extName = t.__name || t),
                        (this.prop = e),
                        (this.args = i || new h()),
                        (this.contentArgs = n || []),
                        (this.autoescape = t.autoescape);
                    },
                    fields: ['extName', 'prop', 'args', 'contentArgs'],
                  }),
                  ct = lt.extend('CallExtensionAsync');
                function ht(t, e, i) {
                  var n = t.split('\n');
                  n.forEach(function (t, s) {
                    t &&
                      ((i && s > 0) || !i) &&
                      process.stdout.write(' '.repeat(e));
                    var o = s === n.length - 1 ? '' : '\n';
                    process.stdout.write('' + t + o);
                  });
                }
                t.exports = {
                  Node: l,
                  Root: u,
                  NodeList: h,
                  Value: c,
                  Literal: d,
                  Symbol: f,
                  Group: p,
                  Array: g,
                  Pair: m,
                  Dict: b,
                  Output: V,
                  Capture: z,
                  TemplateData: W,
                  If: v,
                  IfAsync: _,
                  InlineIf: y,
                  For: k,
                  AsyncEach: w,
                  AsyncAll: S,
                  Macro: E,
                  Caller: O,
                  Import: M,
                  FromImport: L,
                  FunCall: T,
                  Filter: A,
                  FilterAsync: C,
                  KeywordArgs: P,
                  Block: D,
                  Super: R,
                  Extends: N,
                  Include: F,
                  Set: I,
                  Switch: B,
                  Case: j,
                  LookupVal: x,
                  BinOp: K,
                  In: U,
                  Is: $,
                  Or: Y,
                  And: q,
                  Not: X,
                  Add: G,
                  Concat: J,
                  Sub: Z,
                  Mul: Q,
                  Div: tt,
                  FloorDiv: et,
                  Mod: it,
                  Pow: nt,
                  Neg: st,
                  Pos: ot,
                  Compare: rt,
                  CompareOperand: at,
                  CallExtension: lt,
                  CallExtensionAsync: ct,
                  printNodes: function t(e, i) {
                    if (
                      ((i = i || 0), ht(e.typename + ': ', i), e instanceof h)
                    )
                      ht('\n'),
                        e.children.forEach(function (e) {
                          t(e, i + 2);
                        });
                    else if (e instanceof lt)
                      ht(e.extName + '.' + e.prop + '\n'),
                        e.args && t(e.args, i + 2),
                        e.contentArgs &&
                          e.contentArgs.forEach(function (e) {
                            t(e, i + 2);
                          });
                    else {
                      var n = [],
                        s = null;
                      e.iterFields(function (t, e) {
                        t instanceof l
                          ? n.push([e, t])
                          : ((s = s || {})[e] = t);
                      }),
                        s
                          ? ht(JSON.stringify(s, null, 2) + '\n', null, !0)
                          : ht('\n'),
                        n.forEach(function (e) {
                          var n = e[0],
                            s = e[1];
                          ht('[' + n + '] =>', i + 2), t(s, i + 4);
                        });
                    }
                  },
                };
              },
              function (t, e) {},
              function (t, e, i) {
                'use strict';
                function n(t, e) {
                  return (
                    (n = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (t, e) {
                          return (t.__proto__ = e), t;
                        }),
                    n(t, e)
                  );
                }
                var s = i(8),
                  o = i(17),
                  r = i(3),
                  a = i(0).TemplateError,
                  l = i(2).Frame,
                  c = i(1).Obj,
                  h = {
                    '==': '==',
                    '===': '===',
                    '!=': '!=',
                    '!==': '!==',
                    '<': '<',
                    '>': '>',
                    '<=': '<=',
                    '>=': '>=',
                  },
                  u = (function (t) {
                    var e, i;
                    function s() {
                      return t.apply(this, arguments) || this;
                    }
                    (i = t),
                      ((e = s).prototype = Object.create(i.prototype)),
                      (e.prototype.constructor = e),
                      n(e, i);
                    var o = s.prototype;
                    return (
                      (o.init = function (t, e) {
                        (this.templateName = t),
                          (this.codebuf = []),
                          (this.lastId = 0),
                          (this.buffer = null),
                          (this.bufferStack = []),
                          (this._scopeClosers = ''),
                          (this.inBlock = !1),
                          (this.throwOnUndefined = e);
                      }),
                      (o.fail = function (t, e, i) {
                        throw (
                          (void 0 !== e && (e += 1),
                          void 0 !== i && (i += 1),
                          new a(t, e, i))
                        );
                      }),
                      (o._pushBuffer = function () {
                        var t = this._tmpid();
                        return (
                          this.bufferStack.push(this.buffer),
                          (this.buffer = t),
                          this._emit('var ' + this.buffer + ' = "";'),
                          t
                        );
                      }),
                      (o._popBuffer = function () {
                        this.buffer = this.bufferStack.pop();
                      }),
                      (o._emit = function (t) {
                        this.codebuf.push(t);
                      }),
                      (o._emitLine = function (t) {
                        this._emit(t + '\n');
                      }),
                      (o._emitLines = function () {
                        for (
                          var t = this,
                            e = arguments.length,
                            i = new Array(e),
                            n = 0;
                          n < e;
                          n++
                        )
                          i[n] = arguments[n];
                        i.forEach(function (e) {
                          return t._emitLine(e);
                        });
                      }),
                      (o._emitFuncBegin = function (t, e) {
                        (this.buffer = 'output'),
                          (this._scopeClosers = ''),
                          this._emitLine(
                            'function ' +
                              e +
                              '(env, context, frame, runtime, cb) {'
                          ),
                          this._emitLine('var lineno = ' + t.lineno + ';'),
                          this._emitLine('var colno = ' + t.colno + ';'),
                          this._emitLine('var ' + this.buffer + ' = "";'),
                          this._emitLine('try {');
                      }),
                      (o._emitFuncEnd = function (t) {
                        t || this._emitLine('cb(null, ' + this.buffer + ');'),
                          this._closeScopeLevels(),
                          this._emitLine('} catch (e) {'),
                          this._emitLine(
                            '  cb(runtime.handleError(e, lineno, colno));'
                          ),
                          this._emitLine('}'),
                          this._emitLine('}'),
                          (this.buffer = null);
                      }),
                      (o._addScopeLevel = function () {
                        this._scopeClosers += '})';
                      }),
                      (o._closeScopeLevels = function () {
                        this._emitLine(this._scopeClosers + ';'),
                          (this._scopeClosers = '');
                      }),
                      (o._withScopedSyntax = function (t) {
                        var e = this._scopeClosers;
                        (this._scopeClosers = ''),
                          t.call(this),
                          this._closeScopeLevels(),
                          (this._scopeClosers = e);
                      }),
                      (o._makeCallback = function (t) {
                        var e = this._tmpid();
                        return (
                          'function(' +
                          e +
                          (t ? ',' + t : '') +
                          ') {\nif(' +
                          e +
                          ') { cb(' +
                          e +
                          '); return; }'
                        );
                      }),
                      (o._tmpid = function () {
                        return this.lastId++, 't_' + this.lastId;
                      }),
                      (o._templateName = function () {
                        return null == this.templateName
                          ? 'undefined'
                          : JSON.stringify(this.templateName);
                      }),
                      (o._compileChildren = function (t, e) {
                        var i = this;
                        t.children.forEach(function (t) {
                          i.compile(t, e);
                        });
                      }),
                      (o._compileAggregate = function (t, e, i, n) {
                        var s = this;
                        i && this._emit(i),
                          t.children.forEach(function (t, i) {
                            i > 0 && s._emit(','), s.compile(t, e);
                          }),
                          n && this._emit(n);
                      }),
                      (o._compileExpression = function (t, e) {
                        this.assertType(
                          t,
                          r.Literal,
                          r.Symbol,
                          r.Group,
                          r.Array,
                          r.Dict,
                          r.FunCall,
                          r.Caller,
                          r.Filter,
                          r.LookupVal,
                          r.Compare,
                          r.InlineIf,
                          r.In,
                          r.Is,
                          r.And,
                          r.Or,
                          r.Not,
                          r.Add,
                          r.Concat,
                          r.Sub,
                          r.Mul,
                          r.Div,
                          r.FloorDiv,
                          r.Mod,
                          r.Pow,
                          r.Neg,
                          r.Pos,
                          r.Compare,
                          r.NodeList
                        ),
                          this.compile(t, e);
                      }),
                      (o.assertType = function (t) {
                        for (
                          var e = arguments.length,
                            i = new Array(e > 1 ? e - 1 : 0),
                            n = 1;
                          n < e;
                          n++
                        )
                          i[n - 1] = arguments[n];
                        i.some(function (e) {
                          return t instanceof e;
                        }) ||
                          this.fail(
                            'assertType: invalid type: ' + t.typename,
                            t.lineno,
                            t.colno
                          );
                      }),
                      (o.compileCallExtension = function (t, e, i) {
                        var n = this,
                          s = t.args,
                          o = t.contentArgs,
                          a = 'boolean' != typeof t.autoescape || t.autoescape;
                        if (
                          (i ||
                            this._emit(
                              this.buffer + ' += runtime.suppressValue('
                            ),
                          this._emit(
                            'env.getExtension("' +
                              t.extName +
                              '")["' +
                              t.prop +
                              '"]('
                          ),
                          this._emit('context'),
                          (s || o) && this._emit(','),
                          s &&
                            (s instanceof r.NodeList ||
                              this.fail(
                                'compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`'
                              ),
                            s.children.forEach(function (t, i) {
                              n._compileExpression(t, e),
                                (i !== s.children.length - 1 || o.length) &&
                                  n._emit(',');
                            })),
                          o.length &&
                            o.forEach(function (t, i) {
                              if ((i > 0 && n._emit(','), t)) {
                                n._emitLine('function(cb) {'),
                                  n._emitLine(
                                    'if(!cb) { cb = function(err) { if(err) { throw err; }}}'
                                  );
                                var s = n._pushBuffer();
                                n._withScopedSyntax(function () {
                                  n.compile(t, e),
                                    n._emitLine('cb(null, ' + s + ');');
                                }),
                                  n._popBuffer(),
                                  n._emitLine('return ' + s + ';'),
                                  n._emitLine('}');
                              } else n._emit('null');
                            }),
                          i)
                        ) {
                          var l = this._tmpid();
                          this._emitLine(', ' + this._makeCallback(l)),
                            this._emitLine(
                              this.buffer +
                                ' += runtime.suppressValue(' +
                                l +
                                ', ' +
                                a +
                                ' && env.opts.autoescape);'
                            ),
                            this._addScopeLevel();
                        } else
                          this._emit(')'),
                            this._emit(
                              ', ' + a + ' && env.opts.autoescape);\n'
                            );
                      }),
                      (o.compileCallExtensionAsync = function (t, e) {
                        this.compileCallExtension(t, e, !0);
                      }),
                      (o.compileNodeList = function (t, e) {
                        this._compileChildren(t, e);
                      }),
                      (o.compileLiteral = function (t) {
                        if ('string' == typeof t.value) {
                          var e = t.value.replace(/\\/g, '\\\\');
                          (e = (e = (e = (e = (e = e.replace(
                            /"/g,
                            '\\"'
                          )).replace(/\n/g, '\\n')).replace(
                            /\r/g,
                            '\\r'
                          )).replace(/\t/g, '\\t')).replace(
                            /\u2028/g,
                            '\\u2028'
                          )),
                            this._emit('"' + e + '"');
                        } else
                          null === t.value
                            ? this._emit('null')
                            : this._emit(t.value.toString());
                      }),
                      (o.compileSymbol = function (t, e) {
                        var i = t.value,
                          n = e.lookup(i);
                        n
                          ? this._emit(n)
                          : this._emit(
                              'runtime.contextOrFrameLookup(context, frame, "' +
                                i +
                                '")'
                            );
                      }),
                      (o.compileGroup = function (t, e) {
                        this._compileAggregate(t, e, '(', ')');
                      }),
                      (o.compileArray = function (t, e) {
                        this._compileAggregate(t, e, '[', ']');
                      }),
                      (o.compileDict = function (t, e) {
                        this._compileAggregate(t, e, '{', '}');
                      }),
                      (o.compilePair = function (t, e) {
                        var i = t.key,
                          n = t.value;
                        i instanceof r.Symbol
                          ? (i = new r.Literal(i.lineno, i.colno, i.value))
                          : (i instanceof r.Literal &&
                              'string' == typeof i.value) ||
                            this.fail(
                              'compilePair: Dict keys must be strings or names',
                              i.lineno,
                              i.colno
                            ),
                          this.compile(i, e),
                          this._emit(': '),
                          this._compileExpression(n, e);
                      }),
                      (o.compileInlineIf = function (t, e) {
                        this._emit('('),
                          this.compile(t.cond, e),
                          this._emit('?'),
                          this.compile(t.body, e),
                          this._emit(':'),
                          null !== t.else_
                            ? this.compile(t.else_, e)
                            : this._emit('""'),
                          this._emit(')');
                      }),
                      (o.compileIn = function (t, e) {
                        this._emit('runtime.inOperator('),
                          this.compile(t.left, e),
                          this._emit(','),
                          this.compile(t.right, e),
                          this._emit(')');
                      }),
                      (o.compileIs = function (t, e) {
                        var i = t.right.name
                          ? t.right.name.value
                          : t.right.value;
                        this._emit('env.getTest("' + i + '").call(context, '),
                          this.compile(t.left, e),
                          t.right.args &&
                            (this._emit(','), this.compile(t.right.args, e)),
                          this._emit(') === true');
                      }),
                      (o._binOpEmitter = function (t, e, i) {
                        this.compile(t.left, e),
                          this._emit(i),
                          this.compile(t.right, e);
                      }),
                      (o.compileOr = function (t, e) {
                        return this._binOpEmitter(t, e, ' || ');
                      }),
                      (o.compileAnd = function (t, e) {
                        return this._binOpEmitter(t, e, ' && ');
                      }),
                      (o.compileAdd = function (t, e) {
                        return this._binOpEmitter(t, e, ' + ');
                      }),
                      (o.compileConcat = function (t, e) {
                        return this._binOpEmitter(t, e, ' + "" + ');
                      }),
                      (o.compileSub = function (t, e) {
                        return this._binOpEmitter(t, e, ' - ');
                      }),
                      (o.compileMul = function (t, e) {
                        return this._binOpEmitter(t, e, ' * ');
                      }),
                      (o.compileDiv = function (t, e) {
                        return this._binOpEmitter(t, e, ' / ');
                      }),
                      (o.compileMod = function (t, e) {
                        return this._binOpEmitter(t, e, ' % ');
                      }),
                      (o.compileNot = function (t, e) {
                        this._emit('!'), this.compile(t.target, e);
                      }),
                      (o.compileFloorDiv = function (t, e) {
                        this._emit('Math.floor('),
                          this.compile(t.left, e),
                          this._emit(' / '),
                          this.compile(t.right, e),
                          this._emit(')');
                      }),
                      (o.compilePow = function (t, e) {
                        this._emit('Math.pow('),
                          this.compile(t.left, e),
                          this._emit(', '),
                          this.compile(t.right, e),
                          this._emit(')');
                      }),
                      (o.compileNeg = function (t, e) {
                        this._emit('-'), this.compile(t.target, e);
                      }),
                      (o.compilePos = function (t, e) {
                        this._emit('+'), this.compile(t.target, e);
                      }),
                      (o.compileCompare = function (t, e) {
                        var i = this;
                        this.compile(t.expr, e),
                          t.ops.forEach(function (t) {
                            i._emit(' ' + h[t.type] + ' '),
                              i.compile(t.expr, e);
                          });
                      }),
                      (o.compileLookupVal = function (t, e) {
                        this._emit('runtime.memberLookup(('),
                          this._compileExpression(t.target, e),
                          this._emit('),'),
                          this._compileExpression(t.val, e),
                          this._emit(')');
                      }),
                      (o._getNodeName = function (t) {
                        switch (t.typename) {
                          case 'Symbol':
                            return t.value;
                          case 'FunCall':
                            return (
                              'the return value of (' +
                              this._getNodeName(t.name) +
                              ')'
                            );
                          case 'LookupVal':
                            return (
                              this._getNodeName(t.target) +
                              '["' +
                              this._getNodeName(t.val) +
                              '"]'
                            );
                          case 'Literal':
                            return t.value.toString();
                          default:
                            return '--expression--';
                        }
                      }),
                      (o.compileFunCall = function (t, e) {
                        this._emit(
                          '(lineno = ' +
                            t.lineno +
                            ', colno = ' +
                            t.colno +
                            ', '
                        ),
                          this._emit('runtime.callWrap('),
                          this._compileExpression(t.name, e),
                          this._emit(
                            ', "' +
                              this._getNodeName(t.name).replace(/"/g, '\\"') +
                              '", context, '
                          ),
                          this._compileAggregate(t.args, e, '[', '])'),
                          this._emit(')');
                      }),
                      (o.compileFilter = function (t, e) {
                        var i = t.name;
                        this.assertType(i, r.Symbol),
                          this._emit(
                            'env.getFilter("' + i.value + '").call(context, '
                          ),
                          this._compileAggregate(t.args, e),
                          this._emit(')');
                      }),
                      (o.compileFilterAsync = function (t, e) {
                        var i = t.name,
                          n = t.symbol.value;
                        this.assertType(i, r.Symbol),
                          e.set(n, n),
                          this._emit(
                            'env.getFilter("' + i.value + '").call(context, '
                          ),
                          this._compileAggregate(t.args, e),
                          this._emitLine(', ' + this._makeCallback(n)),
                          this._addScopeLevel();
                      }),
                      (o.compileKeywordArgs = function (t, e) {
                        this._emit('runtime.makeKeywordArgs('),
                          this.compileDict(t, e),
                          this._emit(')');
                      }),
                      (o.compileSet = function (t, e) {
                        var i = this,
                          n = [];
                        t.targets.forEach(function (t) {
                          var s = t.value,
                            o = e.lookup(s);
                          null == o &&
                            ((o = i._tmpid()), i._emitLine('var ' + o + ';')),
                            n.push(o);
                        }),
                          t.value
                            ? (this._emit(n.join(' = ') + ' = '),
                              this._compileExpression(t.value, e),
                              this._emitLine(';'))
                            : (this._emit(n.join(' = ') + ' = '),
                              this.compile(t.body, e),
                              this._emitLine(';')),
                          t.targets.forEach(function (t, e) {
                            var s = n[e],
                              o = t.value;
                            i._emitLine(
                              'frame.set("' + o + '", ' + s + ', true);'
                            ),
                              i._emitLine('if(frame.topLevel) {'),
                              i._emitLine(
                                'context.setVariable("' + o + '", ' + s + ');'
                              ),
                              i._emitLine('}'),
                              '_' !== o.charAt(0) &&
                                (i._emitLine('if(frame.topLevel) {'),
                                i._emitLine(
                                  'context.addExport("' + o + '", ' + s + ');'
                                ),
                                i._emitLine('}'));
                          });
                      }),
                      (o.compileSwitch = function (t, e) {
                        var i = this;
                        this._emit('switch ('),
                          this.compile(t.expr, e),
                          this._emit(') {'),
                          t.cases.forEach(function (t, n) {
                            i._emit('case '),
                              i.compile(t.cond, e),
                              i._emit(': '),
                              i.compile(t.body, e),
                              t.body.children.length && i._emitLine('break;');
                          }),
                          t.default &&
                            (this._emit('default:'),
                            this.compile(t.default, e)),
                          this._emit('}');
                      }),
                      (o.compileIf = function (t, e, i) {
                        var n = this;
                        this._emit('if('),
                          this._compileExpression(t.cond, e),
                          this._emitLine(') {'),
                          this._withScopedSyntax(function () {
                            n.compile(t.body, e), i && n._emit('cb()');
                          }),
                          t.else_
                            ? (this._emitLine('}\nelse {'),
                              this._withScopedSyntax(function () {
                                n.compile(t.else_, e), i && n._emit('cb()');
                              }))
                            : i &&
                              (this._emitLine('}\nelse {'), this._emit('cb()')),
                          this._emitLine('}');
                      }),
                      (o.compileIfAsync = function (t, e) {
                        this._emit('(function(cb) {'),
                          this.compileIf(t, e, !0),
                          this._emit('})(' + this._makeCallback()),
                          this._addScopeLevel();
                      }),
                      (o._emitLoopBindings = function (t, e, i, n) {
                        var s = this;
                        [
                          { name: 'index', val: i + ' + 1' },
                          { name: 'index0', val: i },
                          { name: 'revindex', val: n + ' - ' + i },
                          { name: 'revindex0', val: n + ' - ' + i + ' - 1' },
                          { name: 'first', val: i + ' === 0' },
                          { name: 'last', val: i + ' === ' + n + ' - 1' },
                          { name: 'length', val: n },
                        ].forEach(function (t) {
                          s._emitLine(
                            'frame.set("loop.' + t.name + '", ' + t.val + ');'
                          );
                        });
                      }),
                      (o.compileFor = function (t, e) {
                        var i = this,
                          n = this._tmpid(),
                          s = this._tmpid(),
                          o = this._tmpid();
                        if (
                          ((e = e.push()),
                          this._emitLine('frame = frame.push();'),
                          this._emit('var ' + o + ' = '),
                          this._compileExpression(t.arr, e),
                          this._emitLine(';'),
                          this._emit('if(' + o + ') {'),
                          this._emitLine(
                            o + ' = runtime.fromIterator(' + o + ');'
                          ),
                          t.name instanceof r.Array)
                        ) {
                          this._emitLine('var ' + n + ';'),
                            this._emitLine('if(runtime.isArray(' + o + ')) {'),
                            this._emitLine('var ' + s + ' = ' + o + '.length;'),
                            this._emitLine(
                              'for(' +
                                n +
                                '=0; ' +
                                n +
                                ' < ' +
                                o +
                                '.length; ' +
                                n +
                                '++) {'
                            ),
                            t.name.children.forEach(function (s, r) {
                              var a = i._tmpid();
                              i._emitLine(
                                'var ' +
                                  a +
                                  ' = ' +
                                  o +
                                  '[' +
                                  n +
                                  '][' +
                                  r +
                                  '];'
                              ),
                                i._emitLine(
                                  'frame.set("' +
                                    s +
                                    '", ' +
                                    o +
                                    '[' +
                                    n +
                                    '][' +
                                    r +
                                    ']);'
                                ),
                                e.set(t.name.children[r].value, a);
                            }),
                            this._emitLoopBindings(t, o, n, s),
                            this._withScopedSyntax(function () {
                              i.compile(t.body, e);
                            }),
                            this._emitLine('}'),
                            this._emitLine('} else {');
                          var a = t.name.children,
                            l = a[0],
                            c = a[1],
                            h = this._tmpid(),
                            u = this._tmpid();
                          e.set(l.value, h),
                            e.set(c.value, u),
                            this._emitLine(n + ' = -1;'),
                            this._emitLine(
                              'var ' + s + ' = runtime.keys(' + o + ').length;'
                            ),
                            this._emitLine('for(var ' + h + ' in ' + o + ') {'),
                            this._emitLine(n + '++;'),
                            this._emitLine(
                              'var ' + u + ' = ' + o + '[' + h + '];'
                            ),
                            this._emitLine(
                              'frame.set("' + l.value + '", ' + h + ');'
                            ),
                            this._emitLine(
                              'frame.set("' + c.value + '", ' + u + ');'
                            ),
                            this._emitLoopBindings(t, o, n, s),
                            this._withScopedSyntax(function () {
                              i.compile(t.body, e);
                            }),
                            this._emitLine('}'),
                            this._emitLine('}');
                        } else {
                          var d = this._tmpid();
                          e.set(t.name.value, d),
                            this._emitLine('var ' + s + ' = ' + o + '.length;'),
                            this._emitLine(
                              'for(var ' +
                                n +
                                '=0; ' +
                                n +
                                ' < ' +
                                o +
                                '.length; ' +
                                n +
                                '++) {'
                            ),
                            this._emitLine(
                              'var ' + d + ' = ' + o + '[' + n + '];'
                            ),
                            this._emitLine(
                              'frame.set("' + t.name.value + '", ' + d + ');'
                            ),
                            this._emitLoopBindings(t, o, n, s),
                            this._withScopedSyntax(function () {
                              i.compile(t.body, e);
                            }),
                            this._emitLine('}');
                        }
                        this._emitLine('}'),
                          t.else_ &&
                            (this._emitLine('if (!' + s + ') {'),
                            this.compile(t.else_, e),
                            this._emitLine('}')),
                          this._emitLine('frame = frame.pop();');
                      }),
                      (o._compileAsyncLoop = function (t, e, i) {
                        var n = this,
                          s = this._tmpid(),
                          o = this._tmpid(),
                          a = this._tmpid(),
                          l = i ? 'asyncAll' : 'asyncEach';
                        if (
                          ((e = e.push()),
                          this._emitLine('frame = frame.push();'),
                          this._emit('var ' + a + ' = runtime.fromIterator('),
                          this._compileExpression(t.arr, e),
                          this._emitLine(');'),
                          t.name instanceof r.Array)
                        ) {
                          var c = t.name.children.length;
                          this._emit(
                            'runtime.' + l + '(' + a + ', ' + c + ', function('
                          ),
                            t.name.children.forEach(function (t) {
                              n._emit(t.value + ',');
                            }),
                            this._emit(s + ',' + o + ',next) {'),
                            t.name.children.forEach(function (t) {
                              var i = t.value;
                              e.set(i, i),
                                n._emitLine(
                                  'frame.set("' + i + '", ' + i + ');'
                                );
                            });
                        } else {
                          var h = t.name.value;
                          this._emitLine(
                            'runtime.' +
                              l +
                              '(' +
                              a +
                              ', 1, function(' +
                              h +
                              ', ' +
                              s +
                              ', ' +
                              o +
                              ',next) {'
                          ),
                            this._emitLine(
                              'frame.set("' + h + '", ' + h + ');'
                            ),
                            e.set(h, h);
                        }
                        this._emitLoopBindings(t, a, s, o),
                          this._withScopedSyntax(function () {
                            var o;
                            i && (o = n._pushBuffer()),
                              n.compile(t.body, e),
                              n._emitLine(
                                'next(' + s + (o ? ',' + o : '') + ');'
                              ),
                              i && n._popBuffer();
                          });
                        var u = this._tmpid();
                        this._emitLine('}, ' + this._makeCallback(u)),
                          this._addScopeLevel(),
                          i && this._emitLine(this.buffer + ' += ' + u + ';'),
                          t.else_ &&
                            (this._emitLine('if (!' + a + '.length) {'),
                            this.compile(t.else_, e),
                            this._emitLine('}')),
                          this._emitLine('frame = frame.pop();');
                      }),
                      (o.compileAsyncEach = function (t, e) {
                        this._compileAsyncLoop(t, e);
                      }),
                      (o.compileAsyncAll = function (t, e) {
                        this._compileAsyncLoop(t, e, !0);
                      }),
                      (o._compileMacro = function (t, e) {
                        var i = this,
                          n = [],
                          s = null,
                          o = 'macro_' + this._tmpid(),
                          a = void 0 !== e;
                        t.args.children.forEach(function (e, o) {
                          o === t.args.children.length - 1 &&
                          e instanceof r.Dict
                            ? (s = e)
                            : (i.assertType(e, r.Symbol), n.push(e));
                        });
                        var c,
                          h = [].concat(
                            n.map(function (t) {
                              return 'l_' + t.value;
                            }),
                            ['kwargs']
                          ),
                          u = n.map(function (t) {
                            return '"' + t.value + '"';
                          }),
                          d = ((s && s.children) || []).map(function (t) {
                            return '"' + t.key.value + '"';
                          });
                        (c = a ? e.push(!0) : new l()),
                          this._emitLines(
                            'var ' + o + ' = runtime.makeMacro(',
                            '[' + u.join(', ') + '], ',
                            '[' + d.join(', ') + '], ',
                            'function (' + h.join(', ') + ') {',
                            'var callerFrame = frame;',
                            'frame = ' +
                              (a
                                ? 'frame.push(true);'
                                : 'new runtime.Frame();'),
                            'kwargs = kwargs || {};',
                            'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {',
                            'frame.set("caller", kwargs.caller); }'
                          ),
                          n.forEach(function (t) {
                            i._emitLine(
                              'frame.set("' + t.value + '", l_' + t.value + ');'
                            ),
                              c.set(t.value, 'l_' + t.value);
                          }),
                          s &&
                            s.children.forEach(function (t) {
                              var e = t.key.value;
                              i._emit('frame.set("' + e + '", '),
                                i._emit(
                                  'Object.prototype.hasOwnProperty.call(kwargs, "' +
                                    e +
                                    '")'
                                ),
                                i._emit(' ? kwargs["' + e + '"] : '),
                                i._compileExpression(t.value, c),
                                i._emit(');');
                            });
                        var f = this._pushBuffer();
                        return (
                          this._withScopedSyntax(function () {
                            i.compile(t.body, c);
                          }),
                          this._emitLine(
                            'frame = ' + (a ? 'frame.pop();' : 'callerFrame;')
                          ),
                          this._emitLine(
                            'return new runtime.SafeString(' + f + ');'
                          ),
                          this._emitLine('});'),
                          this._popBuffer(),
                          o
                        );
                      }),
                      (o.compileMacro = function (t, e) {
                        var i = this._compileMacro(t),
                          n = t.name.value;
                        e.set(n, i),
                          e.parent
                            ? this._emitLine(
                                'frame.set("' + n + '", ' + i + ');'
                              )
                            : ('_' !== t.name.value.charAt(0) &&
                                this._emitLine(
                                  'context.addExport("' + n + '");'
                                ),
                              this._emitLine(
                                'context.setVariable("' + n + '", ' + i + ');'
                              ));
                      }),
                      (o.compileCaller = function (t, e) {
                        this._emit('(function (){');
                        var i = this._compileMacro(t, e);
                        this._emit('return ' + i + ';})()');
                      }),
                      (o._compileGetTemplate = function (t, e, i, n) {
                        var s = this._tmpid(),
                          o = this._templateName(),
                          r = this._makeCallback(s),
                          a = i ? 'true' : 'false',
                          l = n ? 'true' : 'false';
                        return (
                          this._emit('env.getTemplate('),
                          this._compileExpression(t.template, e),
                          this._emitLine(
                            ', ' + a + ', ' + o + ', ' + l + ', ' + r
                          ),
                          s
                        );
                      }),
                      (o.compileImport = function (t, e) {
                        var i = t.target.value,
                          n = this._compileGetTemplate(t, e, !1, !1);
                        this._addScopeLevel(),
                          this._emitLine(
                            n +
                              '.getExported(' +
                              (t.withContext
                                ? 'context.getVariables(), frame, '
                                : '') +
                              this._makeCallback(n)
                          ),
                          this._addScopeLevel(),
                          e.set(i, n),
                          e.parent
                            ? this._emitLine(
                                'frame.set("' + i + '", ' + n + ');'
                              )
                            : this._emitLine(
                                'context.setVariable("' + i + '", ' + n + ');'
                              );
                      }),
                      (o.compileFromImport = function (t, e) {
                        var i = this,
                          n = this._compileGetTemplate(t, e, !1, !1);
                        this._addScopeLevel(),
                          this._emitLine(
                            n +
                              '.getExported(' +
                              (t.withContext
                                ? 'context.getVariables(), frame, '
                                : '') +
                              this._makeCallback(n)
                          ),
                          this._addScopeLevel(),
                          t.names.children.forEach(function (t) {
                            var s,
                              o,
                              a = i._tmpid();
                            t instanceof r.Pair
                              ? ((s = t.key.value), (o = t.value.value))
                              : (o = s = t.value),
                              i._emitLine(
                                'if(Object.prototype.hasOwnProperty.call(' +
                                  n +
                                  ', "' +
                                  s +
                                  '")) {'
                              ),
                              i._emitLine(
                                'var ' + a + ' = ' + n + '.' + s + ';'
                              ),
                              i._emitLine('} else {'),
                              i._emitLine(
                                'cb(new Error("cannot import \'' +
                                  s +
                                  '\'")); return;'
                              ),
                              i._emitLine('}'),
                              e.set(o, a),
                              e.parent
                                ? i._emitLine(
                                    'frame.set("' + o + '", ' + a + ');'
                                  )
                                : i._emitLine(
                                    'context.setVariable("' +
                                      o +
                                      '", ' +
                                      a +
                                      ');'
                                  );
                          });
                      }),
                      (o.compileBlock = function (t) {
                        var e = this._tmpid();
                        this.inBlock ||
                          this._emit(
                            '(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '
                          ),
                          this._emit(
                            'context.getBlock("' + t.name.value + '")'
                          ),
                          this.inBlock || this._emit(')'),
                          this._emitLine(
                            '(env, context, frame, runtime, ' +
                              this._makeCallback(e)
                          ),
                          this._emitLine(this.buffer + ' += ' + e + ';'),
                          this._addScopeLevel();
                      }),
                      (o.compileSuper = function (t, e) {
                        var i = t.blockName.value,
                          n = t.symbol.value,
                          s = this._makeCallback(n);
                        this._emitLine(
                          'context.getSuper(env, "' +
                            i +
                            '", b_' +
                            i +
                            ', frame, runtime, ' +
                            s
                        ),
                          this._emitLine(n + ' = runtime.markSafe(' + n + ');'),
                          this._addScopeLevel(),
                          e.set(n, n);
                      }),
                      (o.compileExtends = function (t, e) {
                        var i = this._tmpid(),
                          n = this._compileGetTemplate(t, e, !0, !1);
                        this._emitLine('parentTemplate = ' + n),
                          this._emitLine(
                            'for(var ' + i + ' in parentTemplate.blocks) {'
                          ),
                          this._emitLine(
                            'context.addBlock(' +
                              i +
                              ', parentTemplate.blocks[' +
                              i +
                              ']);'
                          ),
                          this._emitLine('}'),
                          this._addScopeLevel();
                      }),
                      (o.compileInclude = function (t, e) {
                        this._emitLine('var tasks = [];'),
                          this._emitLine('tasks.push('),
                          this._emitLine('function(callback) {');
                        var i = this._compileGetTemplate(
                          t,
                          e,
                          !1,
                          t.ignoreMissing
                        );
                        this._emitLine('callback(null,' + i + ');});'),
                          this._emitLine('});');
                        var n = this._tmpid();
                        this._emitLine('tasks.push('),
                          this._emitLine('function(template, callback){'),
                          this._emitLine(
                            'template.render(context.getVariables(), frame, ' +
                              this._makeCallback(n)
                          ),
                          this._emitLine('callback(null,' + n + ');});'),
                          this._emitLine('});'),
                          this._emitLine('tasks.push('),
                          this._emitLine('function(result, callback){'),
                          this._emitLine(this.buffer + ' += result;'),
                          this._emitLine('callback(null);'),
                          this._emitLine('});'),
                          this._emitLine('env.waterfall(tasks, function(){'),
                          this._addScopeLevel();
                      }),
                      (o.compileTemplateData = function (t, e) {
                        this.compileLiteral(t, e);
                      }),
                      (o.compileCapture = function (t, e) {
                        var i = this,
                          n = this.buffer;
                        (this.buffer = 'output'),
                          this._emitLine('(function() {'),
                          this._emitLine('var output = "";'),
                          this._withScopedSyntax(function () {
                            i.compile(t.body, e);
                          }),
                          this._emitLine('return output;'),
                          this._emitLine('})()'),
                          (this.buffer = n);
                      }),
                      (o.compileOutput = function (t, e) {
                        var i = this;
                        t.children.forEach(function (n) {
                          n instanceof r.TemplateData
                            ? n.value &&
                              (i._emit(i.buffer + ' += '),
                              i.compileLiteral(n, e),
                              i._emitLine(';'))
                            : (i._emit(i.buffer + ' += runtime.suppressValue('),
                              i.throwOnUndefined &&
                                i._emit('runtime.ensureDefined('),
                              i.compile(n, e),
                              i.throwOnUndefined &&
                                i._emit(',' + t.lineno + ',' + t.colno + ')'),
                              i._emit(', env.opts.autoescape);\n'));
                        });
                      }),
                      (o.compileRoot = function (t, e) {
                        var i = this;
                        e &&
                          this.fail("compileRoot: root node can't have frame"),
                          (e = new l()),
                          this._emitFuncBegin(t, 'root'),
                          this._emitLine('var parentTemplate = null;'),
                          this._compileChildren(t, e),
                          this._emitLine('if(parentTemplate) {'),
                          this._emitLine(
                            'parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);'
                          ),
                          this._emitLine('} else {'),
                          this._emitLine('cb(null, ' + this.buffer + ');'),
                          this._emitLine('}'),
                          this._emitFuncEnd(!0),
                          (this.inBlock = !0);
                        var n = [],
                          s = t.findAll(r.Block);
                        s.forEach(function (t, e) {
                          var s = t.name.value;
                          if (-1 !== n.indexOf(s))
                            throw new Error(
                              'Block "' + s + '" defined more than once.'
                            );
                          n.push(s), i._emitFuncBegin(t, 'b_' + s);
                          var o = new l();
                          i._emitLine('var frame = frame.push(true);'),
                            i.compile(t.body, o),
                            i._emitFuncEnd();
                        }),
                          this._emitLine('return {'),
                          s.forEach(function (t, e) {
                            var n = 'b_' + t.name.value;
                            i._emitLine(n + ': ' + n + ',');
                          }),
                          this._emitLine('root: root\n};');
                      }),
                      (o.compile = function (t, e) {
                        var i = this['compile' + t.typename];
                        i
                          ? i.call(this, t, e)
                          : this.fail(
                              'compile: Cannot compile node: ' + t.typename,
                              t.lineno,
                              t.colno
                            );
                      }),
                      (o.getCode = function () {
                        return this.codebuf.join('');
                      }),
                      s
                    );
                  })(c);
                t.exports = {
                  compile: function (t, e, i, n, r) {
                    void 0 === r && (r = {});
                    var a = new u(n, r.throwOnUndefined),
                      l = (i || [])
                        .map(function (t) {
                          return t.preprocess;
                        })
                        .filter(function (t) {
                          return !!t;
                        })
                        .reduce(function (t, e) {
                          return e(t);
                        }, t);
                    return (
                      a.compile(o.transform(s.parse(l, i, r), e, n)),
                      a.getCode()
                    );
                  },
                  Compiler: u,
                };
              },
              function (t, e, i) {
                'use strict';
                function n(t, e) {
                  return (
                    (n = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (t, e) {
                          return (t.__proto__ = e), t;
                        }),
                    n(t, e)
                  );
                }
                var s = i(4),
                  o = i(1).EmitterObj;
                t.exports = (function (t) {
                  var e, i;
                  function o() {
                    return t.apply(this, arguments) || this;
                  }
                  (i = t),
                    ((e = o).prototype = Object.create(i.prototype)),
                    (e.prototype.constructor = e),
                    n(e, i);
                  var r = o.prototype;
                  return (
                    (r.resolve = function (t, e) {
                      return s.resolve(s.dirname(t), e);
                    }),
                    (r.isRelative = function (t) {
                      return 0 === t.indexOf('./') || 0 === t.indexOf('../');
                    }),
                    o
                  );
                })(o);
              },
              function (t, e, i) {
                'use strict';
                function n(t, e) {
                  (t.prototype = Object.create(e.prototype)),
                    (t.prototype.constructor = t),
                    s(t, e);
                }
                function s(t, e) {
                  return (
                    (s = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (t, e) {
                          return (t.__proto__ = e), t;
                        }),
                    s(t, e)
                  );
                }
                var o = i(12),
                  r = i(15),
                  a = i(0),
                  l = i(5),
                  c = i(18),
                  h = i(10),
                  u = h.FileSystemLoader,
                  d = h.WebLoader,
                  f = h.PrecompiledLoader,
                  p = i(20),
                  g = i(21),
                  m = i(1),
                  b = m.Obj,
                  x = m.EmitterObj,
                  v = i(2),
                  _ = v.handleError,
                  y = v.Frame,
                  k = i(22);
                function w(t, e, i) {
                  o(function () {
                    t(e, i);
                  });
                }
                var S = {
                    type: 'code',
                    obj: {
                      root: function (t, e, i, n, s) {
                        try {
                          s(null, '');
                        } catch (t) {
                          s(_(t, null, null));
                        }
                      },
                    },
                  },
                  E = (function (t) {
                    function e() {
                      return t.apply(this, arguments) || this;
                    }
                    n(e, t);
                    var i = e.prototype;
                    return (
                      (i.init = function (t, e) {
                        var i = this;
                        (e = this.opts = e || {}),
                          (this.opts.dev = !!e.dev),
                          (this.opts.autoescape =
                            null == e.autoescape || e.autoescape),
                          (this.opts.throwOnUndefined = !!e.throwOnUndefined),
                          (this.opts.trimBlocks = !!e.trimBlocks),
                          (this.opts.lstripBlocks = !!e.lstripBlocks),
                          (this.loaders = []),
                          t
                            ? (this.loaders = a.isArray(t) ? t : [t])
                            : u
                            ? (this.loaders = [new u('views')])
                            : d && (this.loaders = [new d('/views')]),
                          'undefined' != typeof window &&
                            window.nunjucksPrecompiled &&
                            this.loaders.unshift(
                              new f(window.nunjucksPrecompiled)
                            ),
                          this._initLoaders(),
                          (this.globals = g()),
                          (this.filters = {}),
                          (this.tests = {}),
                          (this.asyncFilters = []),
                          (this.extensions = {}),
                          (this.extensionsList = []),
                          a._entries(c).forEach(function (t) {
                            var e = t[0],
                              n = t[1];
                            return i.addFilter(e, n);
                          }),
                          a._entries(p).forEach(function (t) {
                            var e = t[0],
                              n = t[1];
                            return i.addTest(e, n);
                          });
                      }),
                      (i._initLoaders = function () {
                        var t = this;
                        this.loaders.forEach(function (e) {
                          (e.cache = {}),
                            'function' == typeof e.on &&
                              (e.on('update', function (i, n) {
                                (e.cache[i] = null), t.emit('update', i, n, e);
                              }),
                              e.on('load', function (i, n) {
                                t.emit('load', i, n, e);
                              }));
                        });
                      }),
                      (i.invalidateCache = function () {
                        this.loaders.forEach(function (t) {
                          t.cache = {};
                        });
                      }),
                      (i.addExtension = function (t, e) {
                        return (
                          (e.__name = t),
                          (this.extensions[t] = e),
                          this.extensionsList.push(e),
                          this
                        );
                      }),
                      (i.removeExtension = function (t) {
                        var e = this.getExtension(t);
                        e &&
                          ((this.extensionsList = a.without(
                            this.extensionsList,
                            e
                          )),
                          delete this.extensions[t]);
                      }),
                      (i.getExtension = function (t) {
                        return this.extensions[t];
                      }),
                      (i.hasExtension = function (t) {
                        return !!this.extensions[t];
                      }),
                      (i.addGlobal = function (t, e) {
                        return (this.globals[t] = e), this;
                      }),
                      (i.getGlobal = function (t) {
                        if (void 0 === this.globals[t])
                          throw new Error('global not found: ' + t);
                        return this.globals[t];
                      }),
                      (i.addFilter = function (t, e, i) {
                        var n = e;
                        return (
                          i && this.asyncFilters.push(t),
                          (this.filters[t] = n),
                          this
                        );
                      }),
                      (i.getFilter = function (t) {
                        if (!this.filters[t])
                          throw new Error('filter not found: ' + t);
                        return this.filters[t];
                      }),
                      (i.addTest = function (t, e) {
                        return (this.tests[t] = e), this;
                      }),
                      (i.getTest = function (t) {
                        if (!this.tests[t])
                          throw new Error('test not found: ' + t);
                        return this.tests[t];
                      }),
                      (i.resolveTemplate = function (t, e, i) {
                        return t.isRelative && e && t.isRelative(i) && t.resolve
                          ? t.resolve(e, i)
                          : i;
                      }),
                      (i.getTemplate = function (t, e, i, n, s) {
                        var o,
                          r = this,
                          l = this,
                          c = null;
                        if (
                          (t && t.raw && (t = t.raw),
                          a.isFunction(i) &&
                            ((s = i), (i = null), (e = e || !1)),
                          a.isFunction(e) && ((s = e), (e = !1)),
                          t instanceof M)
                        )
                          c = t;
                        else {
                          if ('string' != typeof t)
                            throw new Error(
                              'template names must be a string: ' + t
                            );
                          for (var h = 0; h < this.loaders.length; h++) {
                            var u = this.loaders[h];
                            if ((c = u.cache[this.resolveTemplate(u, i, t)]))
                              break;
                          }
                        }
                        return c
                          ? (e && c.compile(), s ? void s(null, c) : c)
                          : (a.asyncIter(
                              this.loaders,
                              function (e, n, s, o) {
                                function r(t, i) {
                                  t
                                    ? o(t)
                                    : i
                                    ? ((i.loader = e), o(null, i))
                                    : s();
                                }
                                (t = l.resolveTemplate(e, i, t)),
                                  e.async
                                    ? e.getSource(t, r)
                                    : r(null, e.getSource(t));
                              },
                              function (i, a) {
                                if (
                                  (a ||
                                    i ||
                                    n ||
                                    (i = new Error('template not found: ' + t)),
                                  i)
                                ) {
                                  if (s) return void s(i);
                                  throw i;
                                }
                                var l;
                                a
                                  ? ((l = new M(a.src, r, a.path, e)),
                                    a.noCache || (a.loader.cache[t] = l))
                                  : (l = new M(S, r, '', e)),
                                  s ? s(null, l) : (o = l);
                              }
                            ),
                            o);
                      }),
                      (i.express = function (t) {
                        return k(this, t);
                      }),
                      (i.render = function (t, e, i) {
                        a.isFunction(e) && ((i = e), (e = null));
                        var n = null;
                        return (
                          this.getTemplate(t, function (t, s) {
                            if (t && i) w(i, t);
                            else {
                              if (t) throw t;
                              n = s.render(e, i);
                            }
                          }),
                          n
                        );
                      }),
                      (i.renderString = function (t, e, i, n) {
                        return (
                          a.isFunction(i) && ((n = i), (i = {})),
                          new M(t, this, (i = i || {}).path).render(e, n)
                        );
                      }),
                      (i.waterfall = function (t, e, i) {
                        return r(t, e, i);
                      }),
                      e
                    );
                  })(x),
                  O = (function (t) {
                    function e() {
                      return t.apply(this, arguments) || this;
                    }
                    n(e, t);
                    var i = e.prototype;
                    return (
                      (i.init = function (t, e, i) {
                        var n = this;
                        (this.env = i || new E()),
                          (this.ctx = a.extend({}, t)),
                          (this.blocks = {}),
                          (this.exported = []),
                          a.keys(e).forEach(function (t) {
                            n.addBlock(t, e[t]);
                          });
                      }),
                      (i.lookup = function (t) {
                        return t in this.env.globals && !(t in this.ctx)
                          ? this.env.globals[t]
                          : this.ctx[t];
                      }),
                      (i.setVariable = function (t, e) {
                        this.ctx[t] = e;
                      }),
                      (i.getVariables = function () {
                        return this.ctx;
                      }),
                      (i.addBlock = function (t, e) {
                        return (
                          (this.blocks[t] = this.blocks[t] || []),
                          this.blocks[t].push(e),
                          this
                        );
                      }),
                      (i.getBlock = function (t) {
                        if (!this.blocks[t])
                          throw new Error('unknown block "' + t + '"');
                        return this.blocks[t][0];
                      }),
                      (i.getSuper = function (t, e, i, n, s, o) {
                        var r = a.indexOf(this.blocks[e] || [], i),
                          l = this.blocks[e][r + 1];
                        if (-1 === r || !l)
                          throw new Error(
                            'no super block available for "' + e + '"'
                          );
                        l(t, this, n, s, o);
                      }),
                      (i.addExport = function (t) {
                        this.exported.push(t);
                      }),
                      (i.getExported = function () {
                        var t = this,
                          e = {};
                        return (
                          this.exported.forEach(function (i) {
                            e[i] = t.ctx[i];
                          }),
                          e
                        );
                      }),
                      e
                    );
                  })(b),
                  M = (function (t) {
                    function e() {
                      return t.apply(this, arguments) || this;
                    }
                    n(e, t);
                    var i = e.prototype;
                    return (
                      (i.init = function (t, e, i, n) {
                        if (((this.env = e || new E()), a.isObject(t)))
                          switch (t.type) {
                            case 'code':
                              this.tmplProps = t.obj;
                              break;
                            case 'string':
                              this.tmplStr = t.obj;
                              break;
                            default:
                              throw new Error(
                                'Unexpected template object type ' +
                                  t.type +
                                  "; expected 'code', or 'string'"
                              );
                          }
                        else {
                          if (!a.isString(t))
                            throw new Error(
                              'src must be a string or an object describing the source'
                            );
                          this.tmplStr = t;
                        }
                        if (((this.path = i), n))
                          try {
                            this._compile();
                          } catch (t) {
                            throw a._prettifyError(
                              this.path,
                              this.env.opts.dev,
                              t
                            );
                          }
                        else this.compiled = !1;
                      }),
                      (i.render = function (t, e, i) {
                        var n = this;
                        'function' == typeof t
                          ? ((i = t), (t = {}))
                          : 'function' == typeof e && ((i = e), (e = null));
                        var s = !e;
                        try {
                          this.compile();
                        } catch (t) {
                          var o = a._prettifyError(
                            this.path,
                            this.env.opts.dev,
                            t
                          );
                          if (i) return w(i, o);
                          throw o;
                        }
                        var r = new O(t || {}, this.blocks, this.env),
                          l = e ? e.push(!0) : new y();
                        l.topLevel = !0;
                        var c = null,
                          h = !1;
                        return (
                          this.rootRenderFunc(
                            this.env,
                            r,
                            l,
                            v,
                            function (t, e) {
                              if (!h || !i || void 0 === e)
                                if (
                                  (t &&
                                    ((t = a._prettifyError(
                                      n.path,
                                      n.env.opts.dev,
                                      t
                                    )),
                                    (h = !0)),
                                  i)
                                )
                                  s ? w(i, t, e) : i(t, e);
                                else {
                                  if (t) throw t;
                                  c = e;
                                }
                            }
                          ),
                          c
                        );
                      }),
                      (i.getExported = function (t, e, i) {
                        'function' == typeof t && ((i = t), (t = {})),
                          'function' == typeof e && ((i = e), (e = null));
                        try {
                          this.compile();
                        } catch (t) {
                          if (i) return i(t);
                          throw t;
                        }
                        var n = e ? e.push() : new y();
                        n.topLevel = !0;
                        var s = new O(t || {}, this.blocks, this.env);
                        this.rootRenderFunc(this.env, s, n, v, function (t) {
                          t ? i(t, null) : i(null, s.getExported());
                        });
                      }),
                      (i.compile = function () {
                        this.compiled || this._compile();
                      }),
                      (i._compile = function () {
                        var t;
                        if (this.tmplProps) t = this.tmplProps;
                        else {
                          var e = l.compile(
                            this.tmplStr,
                            this.env.asyncFilters,
                            this.env.extensionsList,
                            this.path,
                            this.env.opts
                          );
                          t = new Function(e)();
                        }
                        (this.blocks = this._getBlocks(t)),
                          (this.rootRenderFunc = t.root),
                          (this.compiled = !0);
                      }),
                      (i._getBlocks = function (t) {
                        var e = {};
                        return (
                          a.keys(t).forEach(function (i) {
                            'b_' === i.slice(0, 2) && (e[i.slice(2)] = t[i]);
                          }),
                          e
                        );
                      }),
                      e
                    );
                  })(b);
                t.exports = { Environment: E, Template: M };
              },
              function (t, e, i) {
                'use strict';
                function n(t, e) {
                  return (
                    (n = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (t, e) {
                          return (t.__proto__ = e), t;
                        }),
                    n(t, e)
                  );
                }
                var s = i(9),
                  o = i(3),
                  r = i(1).Obj,
                  a = i(0),
                  l = (function (t) {
                    var e, i;
                    function r() {
                      return t.apply(this, arguments) || this;
                    }
                    (i = t),
                      ((e = r).prototype = Object.create(i.prototype)),
                      (e.prototype.constructor = e),
                      n(e, i);
                    var l = r.prototype;
                    return (
                      (l.init = function (t) {
                        (this.tokens = t),
                          (this.peeked = null),
                          (this.breakOnBlocks = null),
                          (this.dropLeadingWhitespace = !1),
                          (this.extensions = []);
                      }),
                      (l.nextToken = function (t) {
                        var e;
                        if (this.peeked) {
                          if (t || this.peeked.type !== s.TOKEN_WHITESPACE)
                            return (e = this.peeked), (this.peeked = null), e;
                          this.peeked = null;
                        }
                        if (((e = this.tokens.nextToken()), !t))
                          for (; e && e.type === s.TOKEN_WHITESPACE; )
                            e = this.tokens.nextToken();
                        return e;
                      }),
                      (l.peekToken = function () {
                        return (
                          (this.peeked = this.peeked || this.nextToken()),
                          this.peeked
                        );
                      }),
                      (l.pushToken = function (t) {
                        if (this.peeked)
                          throw new Error(
                            'pushToken: can only push one token on between reads'
                          );
                        this.peeked = t;
                      }),
                      (l.error = function (t, e, i) {
                        if (void 0 === e || void 0 === i) {
                          var n = this.peekToken() || {};
                          (e = n.lineno), (i = n.colno);
                        }
                        return (
                          void 0 !== e && (e += 1),
                          void 0 !== i && (i += 1),
                          new a.TemplateError(t, e, i)
                        );
                      }),
                      (l.fail = function (t, e, i) {
                        throw this.error(t, e, i);
                      }),
                      (l.skip = function (t) {
                        var e = this.nextToken();
                        return !(!e || e.type !== t) || (this.pushToken(e), !1);
                      }),
                      (l.expect = function (t) {
                        var e = this.nextToken();
                        return (
                          e.type !== t &&
                            this.fail(
                              'expected ' + t + ', got ' + e.type,
                              e.lineno,
                              e.colno
                            ),
                          e
                        );
                      }),
                      (l.skipValue = function (t, e) {
                        var i = this.nextToken();
                        return (
                          !(!i || i.type !== t || i.value !== e) ||
                          (this.pushToken(i), !1)
                        );
                      }),
                      (l.skipSymbol = function (t) {
                        return this.skipValue(s.TOKEN_SYMBOL, t);
                      }),
                      (l.advanceAfterBlockEnd = function (t) {
                        var e;
                        return (
                          t ||
                            ((e = this.peekToken()) ||
                              this.fail('unexpected end of file'),
                            e.type !== s.TOKEN_SYMBOL &&
                              this.fail(
                                'advanceAfterBlockEnd: expected symbol token or explicit name to be passed'
                              ),
                            (t = this.nextToken().value)),
                          (e = this.nextToken()) && e.type === s.TOKEN_BLOCK_END
                            ? '-' === e.value.charAt(0) &&
                              (this.dropLeadingWhitespace = !0)
                            : this.fail(
                                'expected block end in ' + t + ' statement'
                              ),
                          e
                        );
                      }),
                      (l.advanceAfterVariableEnd = function () {
                        var t = this.nextToken();
                        t && t.type === s.TOKEN_VARIABLE_END
                          ? (this.dropLeadingWhitespace =
                              '-' ===
                              t.value.charAt(
                                t.value.length -
                                  this.tokens.tags.VARIABLE_END.length -
                                  1
                              ))
                          : (this.pushToken(t),
                            this.fail('expected variable end'));
                      }),
                      (l.parseFor = function () {
                        var t,
                          e,
                          i = this.peekToken();
                        if (
                          (this.skipSymbol('for')
                            ? ((t = new o.For(i.lineno, i.colno)),
                              (e = 'endfor'))
                            : this.skipSymbol('asyncEach')
                            ? ((t = new o.AsyncEach(i.lineno, i.colno)),
                              (e = 'endeach'))
                            : this.skipSymbol('asyncAll')
                            ? ((t = new o.AsyncAll(i.lineno, i.colno)),
                              (e = 'endall'))
                            : this.fail(
                                'parseFor: expected for{Async}',
                                i.lineno,
                                i.colno
                              ),
                          (t.name = this.parsePrimary()),
                          t.name instanceof o.Symbol ||
                            this.fail(
                              'parseFor: variable name expected for loop'
                            ),
                          this.peekToken().type === s.TOKEN_COMMA)
                        ) {
                          var n = t.name;
                          for (
                            t.name = new o.Array(n.lineno, n.colno),
                              t.name.addChild(n);
                            this.skip(s.TOKEN_COMMA);

                          ) {
                            var r = this.parsePrimary();
                            t.name.addChild(r);
                          }
                        }
                        return (
                          this.skipSymbol('in') ||
                            this.fail(
                              'parseFor: expected "in" keyword for loop',
                              i.lineno,
                              i.colno
                            ),
                          (t.arr = this.parseExpression()),
                          this.advanceAfterBlockEnd(i.value),
                          (t.body = this.parseUntilBlocks(e, 'else')),
                          this.skipSymbol('else') &&
                            (this.advanceAfterBlockEnd('else'),
                            (t.else_ = this.parseUntilBlocks(e))),
                          this.advanceAfterBlockEnd(),
                          t
                        );
                      }),
                      (l.parseMacro = function () {
                        var t = this.peekToken();
                        this.skipSymbol('macro') || this.fail('expected macro');
                        var e = this.parsePrimary(!0),
                          i = this.parseSignature(),
                          n = new o.Macro(t.lineno, t.colno, e, i);
                        return (
                          this.advanceAfterBlockEnd(t.value),
                          (n.body = this.parseUntilBlocks('endmacro')),
                          this.advanceAfterBlockEnd(),
                          n
                        );
                      }),
                      (l.parseCall = function () {
                        var t = this.peekToken();
                        this.skipSymbol('call') || this.fail('expected call');
                        var e = this.parseSignature(!0) || new o.NodeList(),
                          i = this.parsePrimary();
                        this.advanceAfterBlockEnd(t.value);
                        var n = this.parseUntilBlocks('endcall');
                        this.advanceAfterBlockEnd();
                        var s = new o.Symbol(t.lineno, t.colno, 'caller'),
                          r = new o.Caller(t.lineno, t.colno, s, e, n),
                          a = i.args.children;
                        return (
                          a[a.length - 1] instanceof o.KeywordArgs ||
                            a.push(new o.KeywordArgs()),
                          a[a.length - 1].addChild(
                            new o.Pair(t.lineno, t.colno, s, r)
                          ),
                          new o.Output(t.lineno, t.colno, [i])
                        );
                      }),
                      (l.parseWithContext = function () {
                        var t = this.peekToken(),
                          e = null;
                        return (
                          this.skipSymbol('with')
                            ? (e = !0)
                            : this.skipSymbol('without') && (e = !1),
                          null !== e &&
                            (this.skipSymbol('context') ||
                              this.fail(
                                'parseFrom: expected context after with/without',
                                t.lineno,
                                t.colno
                              )),
                          e
                        );
                      }),
                      (l.parseImport = function () {
                        var t = this.peekToken();
                        this.skipSymbol('import') ||
                          this.fail(
                            'parseImport: expected import',
                            t.lineno,
                            t.colno
                          );
                        var e = this.parseExpression();
                        this.skipSymbol('as') ||
                          this.fail(
                            'parseImport: expected "as" keyword',
                            t.lineno,
                            t.colno
                          );
                        var i = this.parseExpression(),
                          n = this.parseWithContext(),
                          s = new o.Import(t.lineno, t.colno, e, i, n);
                        return this.advanceAfterBlockEnd(t.value), s;
                      }),
                      (l.parseFrom = function () {
                        var t = this.peekToken();
                        this.skipSymbol('from') ||
                          this.fail('parseFrom: expected from');
                        var e = this.parseExpression();
                        this.skipSymbol('import') ||
                          this.fail(
                            'parseFrom: expected import',
                            t.lineno,
                            t.colno
                          );
                        for (var i, n = new o.NodeList(); ; ) {
                          var r = this.peekToken();
                          if (r.type === s.TOKEN_BLOCK_END) {
                            n.children.length ||
                              this.fail(
                                'parseFrom: Expected at least one import name',
                                t.lineno,
                                t.colno
                              ),
                              '-' === r.value.charAt(0) &&
                                (this.dropLeadingWhitespace = !0),
                              this.nextToken();
                            break;
                          }
                          n.children.length > 0 &&
                            !this.skip(s.TOKEN_COMMA) &&
                            this.fail(
                              'parseFrom: expected comma',
                              t.lineno,
                              t.colno
                            );
                          var a = this.parsePrimary();
                          if (
                            ('_' === a.value.charAt(0) &&
                              this.fail(
                                'parseFrom: names starting with an underscore cannot be imported',
                                a.lineno,
                                a.colno
                              ),
                            this.skipSymbol('as'))
                          ) {
                            var l = this.parsePrimary();
                            n.addChild(new o.Pair(a.lineno, a.colno, a, l));
                          } else n.addChild(a);
                          i = this.parseWithContext();
                        }
                        return new o.FromImport(t.lineno, t.colno, e, n, i);
                      }),
                      (l.parseBlock = function () {
                        var t = this.peekToken();
                        this.skipSymbol('block') ||
                          this.fail(
                            'parseBlock: expected block',
                            t.lineno,
                            t.colno
                          );
                        var e = new o.Block(t.lineno, t.colno);
                        (e.name = this.parsePrimary()),
                          e.name instanceof o.Symbol ||
                            this.fail(
                              'parseBlock: variable name expected',
                              t.lineno,
                              t.colno
                            ),
                          this.advanceAfterBlockEnd(t.value),
                          (e.body = this.parseUntilBlocks('endblock')),
                          this.skipSymbol('endblock'),
                          this.skipSymbol(e.name.value);
                        var i = this.peekToken();
                        return (
                          i ||
                            this.fail(
                              'parseBlock: expected endblock, got end of file'
                            ),
                          this.advanceAfterBlockEnd(i.value),
                          e
                        );
                      }),
                      (l.parseExtends = function () {
                        var t = 'extends',
                          e = this.peekToken();
                        this.skipSymbol(t) ||
                          this.fail('parseTemplateRef: expected ' + t);
                        var i = new o.Extends(e.lineno, e.colno);
                        return (
                          (i.template = this.parseExpression()),
                          this.advanceAfterBlockEnd(e.value),
                          i
                        );
                      }),
                      (l.parseInclude = function () {
                        var t = 'include',
                          e = this.peekToken();
                        this.skipSymbol(t) ||
                          this.fail('parseInclude: expected ' + t);
                        var i = new o.Include(e.lineno, e.colno);
                        return (
                          (i.template = this.parseExpression()),
                          this.skipSymbol('ignore') &&
                            this.skipSymbol('missing') &&
                            (i.ignoreMissing = !0),
                          this.advanceAfterBlockEnd(e.value),
                          i
                        );
                      }),
                      (l.parseIf = function () {
                        var t,
                          e = this.peekToken();
                        this.skipSymbol('if') ||
                        this.skipSymbol('elif') ||
                        this.skipSymbol('elseif')
                          ? (t = new o.If(e.lineno, e.colno))
                          : this.skipSymbol('ifAsync')
                          ? (t = new o.IfAsync(e.lineno, e.colno))
                          : this.fail(
                              'parseIf: expected if, elif, or elseif',
                              e.lineno,
                              e.colno
                            ),
                          (t.cond = this.parseExpression()),
                          this.advanceAfterBlockEnd(e.value),
                          (t.body = this.parseUntilBlocks(
                            'elif',
                            'elseif',
                            'else',
                            'endif'
                          ));
                        var i = this.peekToken();
                        switch (i && i.value) {
                          case 'elseif':
                          case 'elif':
                            t.else_ = this.parseIf();
                            break;
                          case 'else':
                            this.advanceAfterBlockEnd(),
                              (t.else_ = this.parseUntilBlocks('endif')),
                              this.advanceAfterBlockEnd();
                            break;
                          case 'endif':
                            (t.else_ = null), this.advanceAfterBlockEnd();
                            break;
                          default:
                            this.fail(
                              'parseIf: expected elif, else, or endif, got end of file'
                            );
                        }
                        return t;
                      }),
                      (l.parseSet = function () {
                        var t = this.peekToken();
                        this.skipSymbol('set') ||
                          this.fail(
                            'parseSet: expected set',
                            t.lineno,
                            t.colno
                          );
                        for (
                          var e, i = new o.Set(t.lineno, t.colno, []);
                          (e = this.parsePrimary()) &&
                          (i.targets.push(e), this.skip(s.TOKEN_COMMA));

                        );
                        return (
                          this.skipValue(s.TOKEN_OPERATOR, '=')
                            ? ((i.value = this.parseExpression()),
                              this.advanceAfterBlockEnd(t.value))
                            : this.skip(s.TOKEN_BLOCK_END)
                            ? ((i.body = new o.Capture(
                                t.lineno,
                                t.colno,
                                this.parseUntilBlocks('endset')
                              )),
                              (i.value = null),
                              this.advanceAfterBlockEnd())
                            : this.fail(
                                'parseSet: expected = or block end in set tag',
                                t.lineno,
                                t.colno
                              ),
                          i
                        );
                      }),
                      (l.parseSwitch = function () {
                        var t = 'switch',
                          e = 'endswitch',
                          i = 'case',
                          n = 'default',
                          s = this.peekToken();
                        this.skipSymbol(t) ||
                          this.skipSymbol(i) ||
                          this.skipSymbol(n) ||
                          this.fail(
                            'parseSwitch: expected "switch," "case" or "default"',
                            s.lineno,
                            s.colno
                          );
                        var r = this.parseExpression();
                        this.advanceAfterBlockEnd(t),
                          this.parseUntilBlocks(i, n, e);
                        var a,
                          l = this.peekToken(),
                          c = [];
                        do {
                          this.skipSymbol(i);
                          var h = this.parseExpression();
                          this.advanceAfterBlockEnd(t);
                          var u = this.parseUntilBlocks(i, n, e);
                          c.push(new o.Case(l.line, l.col, h, u)),
                            (l = this.peekToken());
                        } while (l && l.value === i);
                        switch (l.value) {
                          case n:
                            this.advanceAfterBlockEnd(),
                              (a = this.parseUntilBlocks(e)),
                              this.advanceAfterBlockEnd();
                            break;
                          case e:
                            this.advanceAfterBlockEnd();
                            break;
                          default:
                            this.fail(
                              'parseSwitch: expected "case," "default" or "endswitch," got EOF.'
                            );
                        }
                        return new o.Switch(s.lineno, s.colno, r, c, a);
                      }),
                      (l.parseStatement = function () {
                        var t = this.peekToken();
                        if (
                          (t.type !== s.TOKEN_SYMBOL &&
                            this.fail('tag name expected', t.lineno, t.colno),
                          this.breakOnBlocks &&
                            -1 !== a.indexOf(this.breakOnBlocks, t.value))
                        )
                          return null;
                        switch (t.value) {
                          case 'raw':
                            return this.parseRaw();
                          case 'verbatim':
                            return this.parseRaw('verbatim');
                          case 'if':
                          case 'ifAsync':
                            return this.parseIf();
                          case 'for':
                          case 'asyncEach':
                          case 'asyncAll':
                            return this.parseFor();
                          case 'block':
                            return this.parseBlock();
                          case 'extends':
                            return this.parseExtends();
                          case 'include':
                            return this.parseInclude();
                          case 'set':
                            return this.parseSet();
                          case 'macro':
                            return this.parseMacro();
                          case 'call':
                            return this.parseCall();
                          case 'import':
                            return this.parseImport();
                          case 'from':
                            return this.parseFrom();
                          case 'filter':
                            return this.parseFilterStatement();
                          case 'switch':
                            return this.parseSwitch();
                          default:
                            if (this.extensions.length)
                              for (var e = 0; e < this.extensions.length; e++) {
                                var i = this.extensions[e];
                                if (-1 !== a.indexOf(i.tags || [], t.value))
                                  return i.parse(this, o, s);
                              }
                            this.fail(
                              'unknown block tag: ' + t.value,
                              t.lineno,
                              t.colno
                            );
                        }
                      }),
                      (l.parseRaw = function (t) {
                        for (
                          var e = 'end' + (t = t || 'raw'),
                            i = new RegExp(
                              '([\\s\\S]*?){%\\s*(' +
                                t +
                                '|' +
                                e +
                                ')\\s*(?=%})%}'
                            ),
                            n = 1,
                            s = '',
                            r = null,
                            a = this.advanceAfterBlockEnd();
                          (r = this.tokens._extractRegex(i)) && n > 0;

                        ) {
                          var l = r[0],
                            c = r[1],
                            h = r[2];
                          h === t ? (n += 1) : h === e && (n -= 1),
                            0 === n
                              ? ((s += c),
                                this.tokens.backN(l.length - c.length))
                              : (s += l);
                        }
                        return new o.Output(a.lineno, a.colno, [
                          new o.TemplateData(a.lineno, a.colno, s),
                        ]);
                      }),
                      (l.parsePostfix = function (t) {
                        for (var e, i = this.peekToken(); i; ) {
                          if (i.type === s.TOKEN_LEFT_PAREN)
                            t = new o.FunCall(
                              i.lineno,
                              i.colno,
                              t,
                              this.parseSignature()
                            );
                          else if (i.type === s.TOKEN_LEFT_BRACKET)
                            (e = this.parseAggregate()).children.length > 1 &&
                              this.fail('invalid index'),
                              (t = new o.LookupVal(
                                i.lineno,
                                i.colno,
                                t,
                                e.children[0]
                              ));
                          else {
                            if (i.type !== s.TOKEN_OPERATOR || '.' !== i.value)
                              break;
                            this.nextToken();
                            var n = this.nextToken();
                            n.type !== s.TOKEN_SYMBOL &&
                              this.fail(
                                'expected name as lookup value, got ' + n.value,
                                n.lineno,
                                n.colno
                              ),
                              (e = new o.Literal(n.lineno, n.colno, n.value)),
                              (t = new o.LookupVal(i.lineno, i.colno, t, e));
                          }
                          i = this.peekToken();
                        }
                        return t;
                      }),
                      (l.parseExpression = function () {
                        return this.parseInlineIf();
                      }),
                      (l.parseInlineIf = function () {
                        var t = this.parseOr();
                        if (this.skipSymbol('if')) {
                          var e = this.parseOr(),
                            i = t;
                          ((t = new o.InlineIf(t.lineno, t.colno)).body = i),
                            (t.cond = e),
                            this.skipSymbol('else')
                              ? (t.else_ = this.parseOr())
                              : (t.else_ = null);
                        }
                        return t;
                      }),
                      (l.parseOr = function () {
                        for (var t = this.parseAnd(); this.skipSymbol('or'); ) {
                          var e = this.parseAnd();
                          t = new o.Or(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parseAnd = function () {
                        for (
                          var t = this.parseNot();
                          this.skipSymbol('and');

                        ) {
                          var e = this.parseNot();
                          t = new o.And(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parseNot = function () {
                        var t = this.peekToken();
                        return this.skipSymbol('not')
                          ? new o.Not(t.lineno, t.colno, this.parseNot())
                          : this.parseIn();
                      }),
                      (l.parseIn = function () {
                        for (var t = this.parseIs(); ; ) {
                          var e = this.nextToken();
                          if (!e) break;
                          var i =
                            e.type === s.TOKEN_SYMBOL && 'not' === e.value;
                          if (
                            (i || this.pushToken(e), !this.skipSymbol('in'))
                          ) {
                            i && this.pushToken(e);
                            break;
                          }
                          var n = this.parseIs();
                          (t = new o.In(t.lineno, t.colno, t, n)),
                            i && (t = new o.Not(t.lineno, t.colno, t));
                        }
                        return t;
                      }),
                      (l.parseIs = function () {
                        var t = this.parseCompare();
                        if (this.skipSymbol('is')) {
                          var e = this.skipSymbol('not'),
                            i = this.parseCompare();
                          (t = new o.Is(t.lineno, t.colno, t, i)),
                            e && (t = new o.Not(t.lineno, t.colno, t));
                        }
                        return t;
                      }),
                      (l.parseCompare = function () {
                        for (
                          var t = [
                              '==',
                              '===',
                              '!=',
                              '!==',
                              '<',
                              '>',
                              '<=',
                              '>=',
                            ],
                            e = this.parseConcat(),
                            i = [];
                          ;

                        ) {
                          var n = this.nextToken();
                          if (!n) break;
                          if (-1 === t.indexOf(n.value)) {
                            this.pushToken(n);
                            break;
                          }
                          i.push(
                            new o.CompareOperand(
                              n.lineno,
                              n.colno,
                              this.parseConcat(),
                              n.value
                            )
                          );
                        }
                        return i.length
                          ? new o.Compare(i[0].lineno, i[0].colno, e, i)
                          : e;
                      }),
                      (l.parseConcat = function () {
                        for (
                          var t = this.parseAdd();
                          this.skipValue(s.TOKEN_TILDE, '~');

                        ) {
                          var e = this.parseAdd();
                          t = new o.Concat(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parseAdd = function () {
                        for (
                          var t = this.parseSub();
                          this.skipValue(s.TOKEN_OPERATOR, '+');

                        ) {
                          var e = this.parseSub();
                          t = new o.Add(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parseSub = function () {
                        for (
                          var t = this.parseMul();
                          this.skipValue(s.TOKEN_OPERATOR, '-');

                        ) {
                          var e = this.parseMul();
                          t = new o.Sub(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parseMul = function () {
                        for (
                          var t = this.parseDiv();
                          this.skipValue(s.TOKEN_OPERATOR, '*');

                        ) {
                          var e = this.parseDiv();
                          t = new o.Mul(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parseDiv = function () {
                        for (
                          var t = this.parseFloorDiv();
                          this.skipValue(s.TOKEN_OPERATOR, '/');

                        ) {
                          var e = this.parseFloorDiv();
                          t = new o.Div(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parseFloorDiv = function () {
                        for (
                          var t = this.parseMod();
                          this.skipValue(s.TOKEN_OPERATOR, '//');

                        ) {
                          var e = this.parseMod();
                          t = new o.FloorDiv(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parseMod = function () {
                        for (
                          var t = this.parsePow();
                          this.skipValue(s.TOKEN_OPERATOR, '%');

                        ) {
                          var e = this.parsePow();
                          t = new o.Mod(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parsePow = function () {
                        for (
                          var t = this.parseUnary();
                          this.skipValue(s.TOKEN_OPERATOR, '**');

                        ) {
                          var e = this.parseUnary();
                          t = new o.Pow(t.lineno, t.colno, t, e);
                        }
                        return t;
                      }),
                      (l.parseUnary = function (t) {
                        var e,
                          i = this.peekToken();
                        return (
                          (e = this.skipValue(s.TOKEN_OPERATOR, '-')
                            ? new o.Neg(i.lineno, i.colno, this.parseUnary(!0))
                            : this.skipValue(s.TOKEN_OPERATOR, '+')
                            ? new o.Pos(i.lineno, i.colno, this.parseUnary(!0))
                            : this.parsePrimary()),
                          t || (e = this.parseFilter(e)),
                          e
                        );
                      }),
                      (l.parsePrimary = function (t) {
                        var e,
                          i = this.nextToken(),
                          n = null;
                        if (
                          (i
                            ? i.type === s.TOKEN_STRING
                              ? (e = i.value)
                              : i.type === s.TOKEN_INT
                              ? (e = parseInt(i.value, 10))
                              : i.type === s.TOKEN_FLOAT
                              ? (e = parseFloat(i.value))
                              : i.type === s.TOKEN_BOOLEAN
                              ? 'true' === i.value
                                ? (e = !0)
                                : 'false' === i.value
                                ? (e = !1)
                                : this.fail(
                                    'invalid boolean: ' + i.value,
                                    i.lineno,
                                    i.colno
                                  )
                              : i.type === s.TOKEN_NONE
                              ? (e = null)
                              : i.type === s.TOKEN_REGEX &&
                                (e = new RegExp(i.value.body, i.value.flags))
                            : this.fail('expected expression, got end of file'),
                          void 0 !== e
                            ? (n = new o.Literal(i.lineno, i.colno, e))
                            : i.type === s.TOKEN_SYMBOL
                            ? (n = new o.Symbol(i.lineno, i.colno, i.value))
                            : (this.pushToken(i), (n = this.parseAggregate())),
                          t || (n = this.parsePostfix(n)),
                          n)
                        )
                          return n;
                        throw this.error(
                          'unexpected token: ' + i.value,
                          i.lineno,
                          i.colno
                        );
                      }),
                      (l.parseFilterName = function () {
                        for (
                          var t = this.expect(s.TOKEN_SYMBOL), e = t.value;
                          this.skipValue(s.TOKEN_OPERATOR, '.');

                        )
                          e += '.' + this.expect(s.TOKEN_SYMBOL).value;
                        return new o.Symbol(t.lineno, t.colno, e);
                      }),
                      (l.parseFilterArgs = function (t) {
                        return this.peekToken().type === s.TOKEN_LEFT_PAREN
                          ? this.parsePostfix(t).args.children
                          : [];
                      }),
                      (l.parseFilter = function (t) {
                        for (; this.skip(s.TOKEN_PIPE); ) {
                          var e = this.parseFilterName();
                          t = new o.Filter(
                            e.lineno,
                            e.colno,
                            e,
                            new o.NodeList(
                              e.lineno,
                              e.colno,
                              [t].concat(this.parseFilterArgs(t))
                            )
                          );
                        }
                        return t;
                      }),
                      (l.parseFilterStatement = function () {
                        var t = this.peekToken();
                        this.skipSymbol('filter') ||
                          this.fail('parseFilterStatement: expected filter');
                        var e = this.parseFilterName(),
                          i = this.parseFilterArgs(e);
                        this.advanceAfterBlockEnd(t.value);
                        var n = new o.Capture(
                          e.lineno,
                          e.colno,
                          this.parseUntilBlocks('endfilter')
                        );
                        this.advanceAfterBlockEnd();
                        var s = new o.Filter(
                          e.lineno,
                          e.colno,
                          e,
                          new o.NodeList(e.lineno, e.colno, [n].concat(i))
                        );
                        return new o.Output(e.lineno, e.colno, [s]);
                      }),
                      (l.parseAggregate = function () {
                        var t,
                          e = this.nextToken();
                        switch (e.type) {
                          case s.TOKEN_LEFT_PAREN:
                            t = new o.Group(e.lineno, e.colno);
                            break;
                          case s.TOKEN_LEFT_BRACKET:
                            t = new o.Array(e.lineno, e.colno);
                            break;
                          case s.TOKEN_LEFT_CURLY:
                            t = new o.Dict(e.lineno, e.colno);
                            break;
                          default:
                            return null;
                        }
                        for (;;) {
                          var i = this.peekToken().type;
                          if (
                            i === s.TOKEN_RIGHT_PAREN ||
                            i === s.TOKEN_RIGHT_BRACKET ||
                            i === s.TOKEN_RIGHT_CURLY
                          ) {
                            this.nextToken();
                            break;
                          }
                          if (
                            (t.children.length > 0 &&
                              (this.skip(s.TOKEN_COMMA) ||
                                this.fail(
                                  'parseAggregate: expected comma after expression',
                                  e.lineno,
                                  e.colno
                                )),
                            t instanceof o.Dict)
                          ) {
                            var n = this.parsePrimary();
                            this.skip(s.TOKEN_COLON) ||
                              this.fail(
                                'parseAggregate: expected colon after dict key',
                                e.lineno,
                                e.colno
                              );
                            var r = this.parseExpression();
                            t.addChild(new o.Pair(n.lineno, n.colno, n, r));
                          } else {
                            var a = this.parseExpression();
                            t.addChild(a);
                          }
                        }
                        return t;
                      }),
                      (l.parseSignature = function (t, e) {
                        var i = this.peekToken();
                        if (!e && i.type !== s.TOKEN_LEFT_PAREN) {
                          if (t) return null;
                          this.fail('expected arguments', i.lineno, i.colno);
                        }
                        i.type === s.TOKEN_LEFT_PAREN && (i = this.nextToken());
                        for (
                          var n = new o.NodeList(i.lineno, i.colno),
                            r = new o.KeywordArgs(i.lineno, i.colno),
                            a = !1;
                          ;

                        ) {
                          if (
                            ((i = this.peekToken()),
                            !e && i.type === s.TOKEN_RIGHT_PAREN)
                          ) {
                            this.nextToken();
                            break;
                          }
                          if (e && i.type === s.TOKEN_BLOCK_END) break;
                          if (a && !this.skip(s.TOKEN_COMMA))
                            this.fail(
                              'parseSignature: expected comma after expression',
                              i.lineno,
                              i.colno
                            );
                          else {
                            var l = this.parseExpression();
                            this.skipValue(s.TOKEN_OPERATOR, '=')
                              ? r.addChild(
                                  new o.Pair(
                                    l.lineno,
                                    l.colno,
                                    l,
                                    this.parseExpression()
                                  )
                                )
                              : n.addChild(l);
                          }
                          a = !0;
                        }
                        return r.children.length && n.addChild(r), n;
                      }),
                      (l.parseUntilBlocks = function () {
                        for (
                          var t = this.breakOnBlocks,
                            e = arguments.length,
                            i = new Array(e),
                            n = 0;
                          n < e;
                          n++
                        )
                          i[n] = arguments[n];
                        this.breakOnBlocks = i;
                        var s = this.parse();
                        return (this.breakOnBlocks = t), s;
                      }),
                      (l.parseNodes = function () {
                        for (var t, e = []; (t = this.nextToken()); )
                          if (t.type === s.TOKEN_DATA) {
                            var i = t.value,
                              n = this.peekToken(),
                              r = n && n.value;
                            this.dropLeadingWhitespace &&
                              ((i = i.replace(/^\s*/, '')),
                              (this.dropLeadingWhitespace = !1)),
                              n &&
                                ((n.type === s.TOKEN_BLOCK_START &&
                                  '-' === r.charAt(r.length - 1)) ||
                                  (n.type === s.TOKEN_VARIABLE_START &&
                                    '-' ===
                                      r.charAt(
                                        this.tokens.tags.VARIABLE_START.length
                                      )) ||
                                  (n.type === s.TOKEN_COMMENT &&
                                    '-' ===
                                      r.charAt(
                                        this.tokens.tags.COMMENT_START.length
                                      ))) &&
                                (i = i.replace(/\s*$/, '')),
                              e.push(
                                new o.Output(t.lineno, t.colno, [
                                  new o.TemplateData(t.lineno, t.colno, i),
                                ])
                              );
                          } else if (t.type === s.TOKEN_BLOCK_START) {
                            this.dropLeadingWhitespace = !1;
                            var a = this.parseStatement();
                            if (!a) break;
                            e.push(a);
                          } else if (t.type === s.TOKEN_VARIABLE_START) {
                            var l = this.parseExpression();
                            (this.dropLeadingWhitespace = !1),
                              this.advanceAfterVariableEnd(),
                              e.push(new o.Output(t.lineno, t.colno, [l]));
                          } else
                            t.type === s.TOKEN_COMMENT
                              ? (this.dropLeadingWhitespace =
                                  '-' ===
                                  t.value.charAt(
                                    t.value.length -
                                      this.tokens.tags.COMMENT_END.length -
                                      1
                                  ))
                              : this.fail(
                                  'Unexpected token at top-level: ' + t.type,
                                  t.lineno,
                                  t.colno
                                );
                        return e;
                      }),
                      (l.parse = function () {
                        return new o.NodeList(0, 0, this.parseNodes());
                      }),
                      (l.parseAsRoot = function () {
                        return new o.Root(0, 0, this.parseNodes());
                      }),
                      r
                    );
                  })(r);
                t.exports = {
                  parse: function (t, e, i) {
                    var n = new l(s.lex(t, i));
                    return void 0 !== e && (n.extensions = e), n.parseAsRoot();
                  },
                  Parser: l,
                };
              },
              function (t, e, i) {
                'use strict';
                var n = i(0),
                  s = ' \n\t\r ',
                  o = '()[]{}%*-+~/#,:|.<>=!',
                  r = 'string',
                  a = 'whitespace',
                  l = 'data',
                  c = 'block-start',
                  h = 'block-end',
                  u = 'variable-start',
                  d = 'variable-end',
                  f = 'comment',
                  p = 'left-paren',
                  g = 'right-paren',
                  m = 'left-bracket',
                  b = 'right-bracket',
                  x = 'left-curly',
                  v = 'right-curly',
                  _ = 'operator',
                  y = 'comma',
                  k = 'colon',
                  w = 'tilde',
                  S = 'pipe',
                  E = 'float',
                  O = 'boolean',
                  M = 'none',
                  L = 'symbol',
                  T = 'regex';
                function A(t, e, i, n) {
                  return { type: t, value: e, lineno: i, colno: n };
                }
                var C = (function () {
                  function t(t, e) {
                    (this.str = t),
                      (this.index = 0),
                      (this.len = t.length),
                      (this.lineno = 0),
                      (this.colno = 0),
                      (this.in_code = !1);
                    var i = (e = e || {}).tags || {};
                    (this.tags = {
                      BLOCK_START: i.blockStart || '{%',
                      BLOCK_END: i.blockEnd || '%}',
                      VARIABLE_START: i.variableStart || '{{',
                      VARIABLE_END: i.variableEnd || '}}',
                      COMMENT_START: i.commentStart || '{#',
                      COMMENT_END: i.commentEnd || '#}',
                    }),
                      (this.trimBlocks = !!e.trimBlocks),
                      (this.lstripBlocks = !!e.lstripBlocks);
                  }
                  var e = t.prototype;
                  return (
                    (e.nextToken = function () {
                      var t,
                        e = this.lineno,
                        i = this.colno;
                      if (this.in_code) {
                        var C = this.current();
                        if (this.isFinished()) return null;
                        if ('"' === C || "'" === C)
                          return A(r, this._parseString(C), e, i);
                        if ((t = this._extract(s))) return A(a, t, e, i);
                        if (
                          (t = this._extractString(this.tags.BLOCK_END)) ||
                          (t = this._extractString('-' + this.tags.BLOCK_END))
                        )
                          return (
                            (this.in_code = !1),
                            this.trimBlocks &&
                              ('\n' === (C = this.current())
                                ? this.forward()
                                : '\r' === C &&
                                  (this.forward(),
                                  '\n' === (C = this.current())
                                    ? this.forward()
                                    : this.back())),
                            A(h, t, e, i)
                          );
                        if (
                          (t = this._extractString(this.tags.VARIABLE_END)) ||
                          (t = this._extractString(
                            '-' + this.tags.VARIABLE_END
                          ))
                        )
                          return (this.in_code = !1), A(d, t, e, i);
                        if (
                          'r' === C &&
                          '/' === this.str.charAt(this.index + 1)
                        ) {
                          this.forwardN(2);
                          for (var P = ''; !this.isFinished(); ) {
                            if (
                              '/' === this.current() &&
                              '\\' !== this.previous()
                            ) {
                              this.forward();
                              break;
                            }
                            (P += this.current()), this.forward();
                          }
                          for (
                            var D = ['g', 'i', 'm', 'y'], R = '';
                            !this.isFinished() &&
                            -1 !== D.indexOf(this.current());

                          )
                            (R += this.current()), this.forward();
                          return A(T, { body: P, flags: R }, e, i);
                        }
                        if (-1 !== o.indexOf(C)) {
                          this.forward();
                          var N,
                            F = [
                              '==',
                              '===',
                              '!=',
                              '!==',
                              '<=',
                              '>=',
                              '//',
                              '**',
                            ],
                            I = C + this.current();
                          switch (
                            (-1 !== n.indexOf(F, I) &&
                              (this.forward(),
                              (C = I),
                              -1 !== n.indexOf(F, I + this.current()) &&
                                ((C = I + this.current()), this.forward())),
                            C)
                          ) {
                            case '(':
                              N = p;
                              break;
                            case ')':
                              N = g;
                              break;
                            case '[':
                              N = m;
                              break;
                            case ']':
                              N = b;
                              break;
                            case '{':
                              N = x;
                              break;
                            case '}':
                              N = v;
                              break;
                            case ',':
                              N = y;
                              break;
                            case ':':
                              N = k;
                              break;
                            case '~':
                              N = w;
                              break;
                            case '|':
                              N = S;
                              break;
                            default:
                              N = _;
                          }
                          return A(N, C, e, i);
                        }
                        if (
                          (t = this._extractUntil(s + o)).match(/^[-+]?[0-9]+$/)
                        ) {
                          if ('.' === this.current()) {
                            this.forward();
                            var B = this._extract('0123456789');
                            return A(E, t + '.' + B, e, i);
                          }
                          return A('int', t, e, i);
                        }
                        if (t.match(/^(true|false)$/)) return A(O, t, e, i);
                        if ('none' === t) return A(M, t, e, i);
                        if ('null' === t) return A(M, t, e, i);
                        if (t) return A(L, t, e, i);
                        throw new Error('Unexpected value while parsing: ' + t);
                      }
                      var j,
                        V =
                          this.tags.BLOCK_START.charAt(0) +
                          this.tags.VARIABLE_START.charAt(0) +
                          this.tags.COMMENT_START.charAt(0) +
                          this.tags.COMMENT_END.charAt(0);
                      if (this.isFinished()) return null;
                      if (
                        (t = this._extractString(
                          this.tags.BLOCK_START + '-'
                        )) ||
                        (t = this._extractString(this.tags.BLOCK_START))
                      )
                        return (this.in_code = !0), A(c, t, e, i);
                      if (
                        (t = this._extractString(
                          this.tags.VARIABLE_START + '-'
                        )) ||
                        (t = this._extractString(this.tags.VARIABLE_START))
                      )
                        return (this.in_code = !0), A(u, t, e, i);
                      t = '';
                      var z = !1;
                      for (
                        this._matches(this.tags.COMMENT_START) &&
                        ((z = !0),
                        (t = this._extractString(this.tags.COMMENT_START)));
                        null !== (j = this._extractUntil(V));

                      ) {
                        if (
                          ((t += j),
                          (this._matches(this.tags.BLOCK_START) ||
                            this._matches(this.tags.VARIABLE_START) ||
                            this._matches(this.tags.COMMENT_START)) &&
                            !z)
                        ) {
                          if (
                            this.lstripBlocks &&
                            this._matches(this.tags.BLOCK_START) &&
                            this.colno > 0 &&
                            this.colno <= t.length
                          ) {
                            var W = t.slice(-this.colno);
                            if (
                              /^\s+$/.test(W) &&
                              !(t = t.slice(0, -this.colno)).length
                            )
                              return this.nextToken();
                          }
                          break;
                        }
                        if (this._matches(this.tags.COMMENT_END)) {
                          if (!z) throw new Error('unexpected end of comment');
                          t += this._extractString(this.tags.COMMENT_END);
                          break;
                        }
                        (t += this.current()), this.forward();
                      }
                      if (null === j && z)
                        throw new Error(
                          'expected end of comment, got end of file'
                        );
                      return A(z ? f : l, t, e, i);
                    }),
                    (e._parseString = function (t) {
                      this.forward();
                      for (
                        var e = '';
                        !this.isFinished() && this.current() !== t;

                      ) {
                        var i = this.current();
                        if ('\\' === i) {
                          switch ((this.forward(), this.current())) {
                            case 'n':
                              e += '\n';
                              break;
                            case 't':
                              e += '\t';
                              break;
                            case 'r':
                              e += '\r';
                              break;
                            default:
                              e += this.current();
                          }
                          this.forward();
                        } else (e += i), this.forward();
                      }
                      return this.forward(), e;
                    }),
                    (e._matches = function (t) {
                      return this.index + t.length > this.len
                        ? null
                        : this.str.slice(this.index, this.index + t.length) ===
                            t;
                    }),
                    (e._extractString = function (t) {
                      return this._matches(t)
                        ? (this.forwardN(t.length), t)
                        : null;
                    }),
                    (e._extractUntil = function (t) {
                      return this._extractMatching(!0, t || '');
                    }),
                    (e._extract = function (t) {
                      return this._extractMatching(!1, t);
                    }),
                    (e._extractMatching = function (t, e) {
                      if (this.isFinished()) return null;
                      var i = e.indexOf(this.current());
                      if ((t && -1 === i) || (!t && -1 !== i)) {
                        var n = this.current();
                        this.forward();
                        for (
                          var s = e.indexOf(this.current());
                          ((t && -1 === s) || (!t && -1 !== s)) &&
                          !this.isFinished();

                        )
                          (n += this.current()),
                            this.forward(),
                            (s = e.indexOf(this.current()));
                        return n;
                      }
                      return '';
                    }),
                    (e._extractRegex = function (t) {
                      var e = this.currentStr().match(t);
                      return e ? (this.forwardN(e[0].length), e) : null;
                    }),
                    (e.isFinished = function () {
                      return this.index >= this.len;
                    }),
                    (e.forwardN = function (t) {
                      for (var e = 0; e < t; e++) this.forward();
                    }),
                    (e.forward = function () {
                      this.index++,
                        '\n' === this.previous()
                          ? (this.lineno++, (this.colno = 0))
                          : this.colno++;
                    }),
                    (e.backN = function (t) {
                      for (var e = 0; e < t; e++) this.back();
                    }),
                    (e.back = function () {
                      if ((this.index--, '\n' === this.current())) {
                        this.lineno--;
                        var t = this.src.lastIndexOf('\n', this.index - 1);
                        this.colno = -1 === t ? this.index : this.index - t;
                      } else this.colno--;
                    }),
                    (e.current = function () {
                      return this.isFinished()
                        ? ''
                        : this.str.charAt(this.index);
                    }),
                    (e.currentStr = function () {
                      return this.isFinished()
                        ? ''
                        : this.str.substr(this.index);
                    }),
                    (e.previous = function () {
                      return this.str.charAt(this.index - 1);
                    }),
                    t
                  );
                })();
                t.exports = {
                  lex: function (t, e) {
                    return new C(t, e);
                  },
                  TOKEN_STRING: r,
                  TOKEN_WHITESPACE: a,
                  TOKEN_DATA: l,
                  TOKEN_BLOCK_START: c,
                  TOKEN_BLOCK_END: h,
                  TOKEN_VARIABLE_START: u,
                  TOKEN_VARIABLE_END: d,
                  TOKEN_COMMENT: f,
                  TOKEN_LEFT_PAREN: p,
                  TOKEN_RIGHT_PAREN: g,
                  TOKEN_LEFT_BRACKET: m,
                  TOKEN_RIGHT_BRACKET: b,
                  TOKEN_LEFT_CURLY: x,
                  TOKEN_RIGHT_CURLY: v,
                  TOKEN_OPERATOR: _,
                  TOKEN_COMMA: y,
                  TOKEN_COLON: k,
                  TOKEN_TILDE: w,
                  TOKEN_PIPE: S,
                  TOKEN_INT: 'int',
                  TOKEN_FLOAT: E,
                  TOKEN_BOOLEAN: O,
                  TOKEN_NONE: M,
                  TOKEN_SYMBOL: L,
                  TOKEN_SPECIAL: 'special',
                  TOKEN_REGEX: T,
                };
              },
              function (t, e, i) {
                'use strict';
                function n(t, e) {
                  return (
                    (n = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (t, e) {
                          return (t.__proto__ = e), t;
                        }),
                    n(t, e)
                  );
                }
                var s = i(6),
                  o = i(19).PrecompiledLoader,
                  r = (function (t) {
                    var e, i;
                    function s(e, i) {
                      var n;
                      return (
                        ((n = t.call(this) || this).baseURL = e || '.'),
                        (i = i || {}),
                        (n.useCache = !!i.useCache),
                        (n.async = !!i.async),
                        n
                      );
                    }
                    (i = t),
                      ((e = s).prototype = Object.create(i.prototype)),
                      (e.prototype.constructor = e),
                      n(e, i);
                    var o = s.prototype;
                    return (
                      (o.resolve = function (t, e) {
                        throw new Error(
                          'relative templates not support in the browser yet'
                        );
                      }),
                      (o.getSource = function (t, e) {
                        var i,
                          n = this,
                          s = this.useCache;
                        return (
                          this.fetch(this.baseURL + '/' + t, function (o, r) {
                            if (o)
                              if (e) e(o.content);
                              else {
                                if (404 !== o.status) throw o.content;
                                i = null;
                              }
                            else
                              (i = { src: r, path: t, noCache: !s }),
                                n.emit('load', t, i),
                                e && e(null, i);
                          }),
                          i
                        );
                      }),
                      (o.fetch = function (t, e) {
                        if ('undefined' == typeof window)
                          throw new Error(
                            'WebLoader can only by used in a browser'
                          );
                        var i = new XMLHttpRequest(),
                          n = !0;
                        (i.onreadystatechange = function () {
                          4 === i.readyState &&
                            n &&
                            ((n = !1),
                            0 === i.status || 200 === i.status
                              ? e(null, i.responseText)
                              : e({
                                  status: i.status,
                                  content: i.responseText,
                                }));
                        }),
                          (t +=
                            (-1 === t.indexOf('?') ? '?' : '&') +
                            's=' +
                            new Date().getTime()),
                          i.open('GET', t, this.async),
                          i.send();
                      }),
                      s
                    );
                  })(s);
                t.exports = { WebLoader: r, PrecompiledLoader: o };
              },
              function (t, e, i) {
                'use strict';
                var n,
                  s = i(0),
                  o = i(7),
                  r = o.Environment,
                  a = o.Template,
                  l = i(6),
                  c = i(10),
                  h = i(23),
                  u = i(5),
                  d = i(8),
                  f = i(9),
                  p = i(2),
                  g = i(3),
                  m = i(25);
                function b(t, e) {
                  var i;
                  return (
                    (e = e || {}),
                    s.isObject(t) && ((e = t), (t = null)),
                    c.FileSystemLoader
                      ? (i = new c.FileSystemLoader(t, {
                          watch: e.watch,
                          noCache: e.noCache,
                        }))
                      : c.WebLoader &&
                        (i = new c.WebLoader(t, {
                          useCache: e.web && e.web.useCache,
                          async: e.web && e.web.async,
                        })),
                    (n = new r(i, e)),
                    e && e.express && n.express(e.express),
                    n
                  );
                }
                t.exports = {
                  Environment: r,
                  Template: a,
                  Loader: l,
                  FileSystemLoader: c.FileSystemLoader,
                  NodeResolveLoader: c.NodeResolveLoader,
                  PrecompiledLoader: c.PrecompiledLoader,
                  WebLoader: c.WebLoader,
                  compiler: u,
                  parser: d,
                  lexer: f,
                  runtime: p,
                  lib: s,
                  nodes: g,
                  installJinjaCompat: m,
                  configure: b,
                  reset: function () {
                    n = void 0;
                  },
                  compile: function (t, e, i, s) {
                    return n || b(), new a(t, e, i, s);
                  },
                  render: function (t, e, i) {
                    return n || b(), n.render(t, e, i);
                  },
                  renderString: function (t, e, i) {
                    return n || b(), n.renderString(t, e, i);
                  },
                  precompile: h ? h.precompile : void 0,
                  precompileString: h ? h.precompileString : void 0,
                };
              },
              function (t, e, i) {
                'use strict';
                var n = i(13),
                  s = [],
                  o = [],
                  r = n.makeRequestCallFromTimer(function () {
                    if (o.length) throw o.shift();
                  });
                function a(t) {
                  var e;
                  ((e = s.length ? s.pop() : new l()).task = t), n(e);
                }
                function l() {
                  this.task = null;
                }
                (t.exports = a),
                  (l.prototype.call = function () {
                    try {
                      this.task.call();
                    } catch (t) {
                      a.onerror ? a.onerror(t) : (o.push(t), r());
                    } finally {
                      (this.task = null), (s[s.length] = this);
                    }
                  });
              },
              function (t, e, i) {
                'use strict';
                (function (e) {
                  function i(t) {
                    s.length || n(), (s[s.length] = t);
                  }
                  t.exports = i;
                  var n,
                    s = [],
                    o = 0;
                  function r() {
                    for (; o < s.length; ) {
                      var t = o;
                      if (((o += 1), s[t].call(), o > 1024)) {
                        for (var e = 0, i = s.length - o; e < i; e++)
                          s[e] = s[e + o];
                        (s.length -= o), (o = 0);
                      }
                    }
                    (s.length = 0), (o = 0);
                  }
                  var a,
                    l,
                    c,
                    h = void 0 !== e ? e : self,
                    u = h.MutationObserver || h.WebKitMutationObserver;
                  function d(t) {
                    return function () {
                      var e = setTimeout(n, 0),
                        i = setInterval(n, 50);
                      function n() {
                        clearTimeout(e), clearInterval(i), t();
                      }
                    };
                  }
                  'function' == typeof u
                    ? ((a = 1),
                      (l = new u(r)),
                      (c = document.createTextNode('')),
                      l.observe(c, { characterData: !0 }),
                      (n = function () {
                        (a = -a), (c.data = a);
                      }))
                    : (n = d(r)),
                    (i.requestFlush = n),
                    (i.makeRequestCallFromTimer = d);
                }).call(e, i(14));
              },
              function (t, e) {
                var i;
                i = (function () {
                  return this;
                })();
                try {
                  i = i || Function('return this')() || (0, eval)('this');
                } catch (t) {
                  'object' == typeof window && (i = window);
                }
                t.exports = i;
              },
              function (t, e, i) {
                var n;
                !(function (i) {
                  'use strict';
                  var s = function () {
                      var t = Array.prototype.slice.call(arguments);
                      'function' == typeof t[0] &&
                        t[0].apply(null, t.splice(1));
                    },
                    o = function (t) {
                      'function' == typeof setImmediate
                        ? setImmediate(t)
                        : 'undefined' != typeof process && process.nextTick
                        ? process.nextTick(t)
                        : setTimeout(t, 0);
                    },
                    r =
                      Array.isArray ||
                      function (t) {
                        return (
                          '[object Array]' === Object.prototype.toString.call(t)
                        );
                      },
                    a = function (t, e, i) {
                      var n = i ? o : s;
                      if (((e = e || function () {}), !r(t))) {
                        var a = new Error(
                          'First argument to waterfall must be an array of functions'
                        );
                        return e(a);
                      }
                      if (!t.length) return e();
                      var l = function (t) {
                        return function (i) {
                          if (i) e.apply(null, arguments), (e = function () {});
                          else {
                            var s = Array.prototype.slice.call(arguments, 1),
                              o = t.next();
                            o ? s.push(l(o)) : s.push(e),
                              n(function () {
                                t.apply(null, s);
                              });
                          }
                        };
                      };
                      l(
                        (function (t) {
                          var e = function (i) {
                            var n = function () {
                              return (
                                t.length && t[i].apply(null, arguments),
                                n.next()
                              );
                            };
                            return (
                              (n.next = function () {
                                return i < t.length - 1 ? e(i + 1) : null;
                              }),
                              n
                            );
                          };
                          return e(0);
                        })(t)
                      )();
                    };
                  void 0 ===
                    (n = function () {
                      return a;
                    }.apply(e, [])) || (t.exports = n);
                })();
              },
              function (t, e, i) {
                'use strict';
                var n,
                  s = 'object' == typeof Reflect ? Reflect : null,
                  o =
                    s && 'function' == typeof s.apply
                      ? s.apply
                      : function (t, e, i) {
                          return Function.prototype.apply.call(t, e, i);
                        };
                n =
                  s && 'function' == typeof s.ownKeys
                    ? s.ownKeys
                    : Object.getOwnPropertySymbols
                    ? function (t) {
                        return Object.getOwnPropertyNames(t).concat(
                          Object.getOwnPropertySymbols(t)
                        );
                      }
                    : function (t) {
                        return Object.getOwnPropertyNames(t);
                      };
                var r =
                  Number.isNaN ||
                  function (t) {
                    return t != t;
                  };
                function a() {
                  a.init.call(this);
                }
                (t.exports = a),
                  (t.exports.once = function (t, e) {
                    return new Promise(function (i, n) {
                      function s(i) {
                        t.removeListener(e, o), n(i);
                      }
                      function o() {
                        'function' == typeof t.removeListener &&
                          t.removeListener('error', s),
                          i([].slice.call(arguments));
                      }
                      b(t, e, o, { once: !0 }),
                        'error' !== e &&
                          (function (t, e, i) {
                            'function' == typeof t.on &&
                              b(t, 'error', e, { once: !0 });
                          })(t, s);
                    });
                  }),
                  (a.EventEmitter = a),
                  (a.prototype._events = void 0),
                  (a.prototype._eventsCount = 0),
                  (a.prototype._maxListeners = void 0);
                var l = 10;
                function c(t) {
                  if ('function' != typeof t)
                    throw new TypeError(
                      'The "listener" argument must be of type Function. Received type ' +
                        typeof t
                    );
                }
                function h(t) {
                  return void 0 === t._maxListeners
                    ? a.defaultMaxListeners
                    : t._maxListeners;
                }
                function u(t, e, i, n) {
                  var s, o, r, a;
                  if (
                    (c(i),
                    void 0 === (o = t._events)
                      ? ((o = t._events = Object.create(null)),
                        (t._eventsCount = 0))
                      : (void 0 !== o.newListener &&
                          (t.emit(
                            'newListener',
                            e,
                            i.listener ? i.listener : i
                          ),
                          (o = t._events)),
                        (r = o[e])),
                    void 0 === r)
                  )
                    (r = o[e] = i), ++t._eventsCount;
                  else if (
                    ('function' == typeof r
                      ? (r = o[e] = n ? [i, r] : [r, i])
                      : n
                      ? r.unshift(i)
                      : r.push(i),
                    (s = h(t)) > 0 && r.length > s && !r.warned)
                  ) {
                    r.warned = !0;
                    var l = new Error(
                      'Possible EventEmitter memory leak detected. ' +
                        r.length +
                        ' ' +
                        String(e) +
                        ' listeners added. Use emitter.setMaxListeners() to increase limit'
                    );
                    (l.name = 'MaxListenersExceededWarning'),
                      (l.emitter = t),
                      (l.type = e),
                      (l.count = r.length),
                      (a = l),
                      console && console.warn && console.warn(a);
                  }
                  return t;
                }
                function d() {
                  if (!this.fired)
                    return (
                      this.target.removeListener(this.type, this.wrapFn),
                      (this.fired = !0),
                      0 === arguments.length
                        ? this.listener.call(this.target)
                        : this.listener.apply(this.target, arguments)
                    );
                }
                function f(t, e, i) {
                  var n = {
                      fired: !1,
                      wrapFn: void 0,
                      target: t,
                      type: e,
                      listener: i,
                    },
                    s = d.bind(n);
                  return (s.listener = i), (n.wrapFn = s), s;
                }
                function p(t, e, i) {
                  var n = t._events;
                  if (void 0 === n) return [];
                  var s = n[e];
                  return void 0 === s
                    ? []
                    : 'function' == typeof s
                    ? i
                      ? [s.listener || s]
                      : [s]
                    : i
                    ? (function (t) {
                        for (
                          var e = new Array(t.length), i = 0;
                          i < e.length;
                          ++i
                        )
                          e[i] = t[i].listener || t[i];
                        return e;
                      })(s)
                    : m(s, s.length);
                }
                function g(t) {
                  var e = this._events;
                  if (void 0 !== e) {
                    var i = e[t];
                    if ('function' == typeof i) return 1;
                    if (void 0 !== i) return i.length;
                  }
                  return 0;
                }
                function m(t, e) {
                  for (var i = new Array(e), n = 0; n < e; ++n) i[n] = t[n];
                  return i;
                }
                function b(t, e, i, n) {
                  if ('function' == typeof t.on)
                    n.once ? t.once(e, i) : t.on(e, i);
                  else {
                    if ('function' != typeof t.addEventListener)
                      throw new TypeError(
                        'The "emitter" argument must be of type EventEmitter. Received type ' +
                          typeof t
                      );
                    t.addEventListener(e, function s(o) {
                      n.once && t.removeEventListener(e, s), i(o);
                    });
                  }
                }
                Object.defineProperty(a, 'defaultMaxListeners', {
                  enumerable: !0,
                  get: function () {
                    return l;
                  },
                  set: function (t) {
                    if ('number' != typeof t || t < 0 || r(t))
                      throw new RangeError(
                        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                          t +
                          '.'
                      );
                    l = t;
                  },
                }),
                  (a.init = function () {
                    (void 0 !== this._events &&
                      this._events !== Object.getPrototypeOf(this)._events) ||
                      ((this._events = Object.create(null)),
                      (this._eventsCount = 0)),
                      (this._maxListeners = this._maxListeners || void 0);
                  }),
                  (a.prototype.setMaxListeners = function (t) {
                    if ('number' != typeof t || t < 0 || r(t))
                      throw new RangeError(
                        'The value of "n" is out of range. It must be a non-negative number. Received ' +
                          t +
                          '.'
                      );
                    return (this._maxListeners = t), this;
                  }),
                  (a.prototype.getMaxListeners = function () {
                    return h(this);
                  }),
                  (a.prototype.emit = function (t) {
                    for (var e = [], i = 1; i < arguments.length; i++)
                      e.push(arguments[i]);
                    var n = 'error' === t,
                      s = this._events;
                    if (void 0 !== s) n = n && void 0 === s.error;
                    else if (!n) return !1;
                    if (n) {
                      var r;
                      if ((e.length > 0 && (r = e[0]), r instanceof Error))
                        throw r;
                      var a = new Error(
                        'Unhandled error.' + (r ? ' (' + r.message + ')' : '')
                      );
                      throw ((a.context = r), a);
                    }
                    var l = s[t];
                    if (void 0 === l) return !1;
                    if ('function' == typeof l) o(l, this, e);
                    else {
                      var c = l.length,
                        h = m(l, c);
                      for (i = 0; i < c; ++i) o(h[i], this, e);
                    }
                    return !0;
                  }),
                  (a.prototype.addListener = function (t, e) {
                    return u(this, t, e, !1);
                  }),
                  (a.prototype.on = a.prototype.addListener),
                  (a.prototype.prependListener = function (t, e) {
                    return u(this, t, e, !0);
                  }),
                  (a.prototype.once = function (t, e) {
                    return c(e), this.on(t, f(this, t, e)), this;
                  }),
                  (a.prototype.prependOnceListener = function (t, e) {
                    return c(e), this.prependListener(t, f(this, t, e)), this;
                  }),
                  (a.prototype.removeListener = function (t, e) {
                    var i, n, s, o, r;
                    if ((c(e), void 0 === (n = this._events))) return this;
                    if (void 0 === (i = n[t])) return this;
                    if (i === e || i.listener === e)
                      0 == --this._eventsCount
                        ? (this._events = Object.create(null))
                        : (delete n[t],
                          n.removeListener &&
                            this.emit('removeListener', t, i.listener || e));
                    else if ('function' != typeof i) {
                      for (s = -1, o = i.length - 1; o >= 0; o--)
                        if (i[o] === e || i[o].listener === e) {
                          (r = i[o].listener), (s = o);
                          break;
                        }
                      if (s < 0) return this;
                      0 === s
                        ? i.shift()
                        : (function (t, e) {
                            for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                            t.pop();
                          })(i, s),
                        1 === i.length && (n[t] = i[0]),
                        void 0 !== n.removeListener &&
                          this.emit('removeListener', t, r || e);
                    }
                    return this;
                  }),
                  (a.prototype.off = a.prototype.removeListener),
                  (a.prototype.removeAllListeners = function (t) {
                    var e, i, n;
                    if (void 0 === (i = this._events)) return this;
                    if (void 0 === i.removeListener)
                      return (
                        0 === arguments.length
                          ? ((this._events = Object.create(null)),
                            (this._eventsCount = 0))
                          : void 0 !== i[t] &&
                            (0 == --this._eventsCount
                              ? (this._events = Object.create(null))
                              : delete i[t]),
                        this
                      );
                    if (0 === arguments.length) {
                      var s,
                        o = Object.keys(i);
                      for (n = 0; n < o.length; ++n)
                        'removeListener' !== (s = o[n]) &&
                          this.removeAllListeners(s);
                      return (
                        this.removeAllListeners('removeListener'),
                        (this._events = Object.create(null)),
                        (this._eventsCount = 0),
                        this
                      );
                    }
                    if ('function' == typeof (e = i[t]))
                      this.removeListener(t, e);
                    else if (void 0 !== e)
                      for (n = e.length - 1; n >= 0; n--)
                        this.removeListener(t, e[n]);
                    return this;
                  }),
                  (a.prototype.listeners = function (t) {
                    return p(this, t, !0);
                  }),
                  (a.prototype.rawListeners = function (t) {
                    return p(this, t, !1);
                  }),
                  (a.listenerCount = function (t, e) {
                    return 'function' == typeof t.listenerCount
                      ? t.listenerCount(e)
                      : g.call(t, e);
                  }),
                  (a.prototype.listenerCount = g),
                  (a.prototype.eventNames = function () {
                    return this._eventsCount > 0 ? n(this._events) : [];
                  });
              },
              function (t, e, i) {
                'use strict';
                var n = i(3),
                  s = i(0),
                  o = 0;
                function r() {
                  return 'hole_' + o++;
                }
                function a(t, e) {
                  for (var i = null, n = 0; n < t.length; n++) {
                    var s = e(t[n]);
                    s !== t[n] && (i || (i = t.slice()), (i[n] = s));
                  }
                  return i || t;
                }
                function l(t, e, i) {
                  if (!(t instanceof n.Node)) return t;
                  if (!i) {
                    var s = e(t);
                    if (s && s !== t) return s;
                  }
                  if (t instanceof n.NodeList) {
                    var o = a(t.children, function (t) {
                      return l(t, e, i);
                    });
                    o !== t.children &&
                      (t = new n[t.typename](t.lineno, t.colno, o));
                  } else if (t instanceof n.CallExtension) {
                    var r = l(t.args, e, i),
                      c = a(t.contentArgs, function (t) {
                        return l(t, e, i);
                      });
                    (r === t.args && c === t.contentArgs) ||
                      (t = new n[t.typename](t.extName, t.prop, r, c));
                  } else {
                    var h = t.fields.map(function (e) {
                        return t[e];
                      }),
                      u = a(h, function (t) {
                        return l(t, e, i);
                      });
                    u !== h &&
                      ((t = new n[t.typename](t.lineno, t.colno)),
                      u.forEach(function (e, i) {
                        t[t.fields[i]] = e;
                      }));
                  }
                  return (i && e(t)) || t;
                }
                function c(t, e) {
                  return l(t, e, !0);
                }
                function h(t, e, i) {
                  var o = [],
                    a = c(i ? t[i] : t, function (t) {
                      var i;
                      return t instanceof n.Block
                        ? t
                        : (((t instanceof n.Filter &&
                            -1 !== s.indexOf(e, t.name.value)) ||
                            t instanceof n.CallExtensionAsync) &&
                            ((i = new n.Symbol(t.lineno, t.colno, r())),
                            o.push(
                              new n.FilterAsync(
                                t.lineno,
                                t.colno,
                                t.name,
                                t.args,
                                i
                              )
                            )),
                          i);
                    });
                  return (
                    i ? (t[i] = a) : (t = a),
                    o.length
                      ? (o.push(t), new n.NodeList(t.lineno, t.colno, o))
                      : t
                  );
                }
                t.exports = {
                  transform: function (t, e) {
                    return (function (t, e) {
                      return (function (t) {
                        return c(t, function (t) {
                          if (t instanceof n.If || t instanceof n.For) {
                            var e = !1;
                            if (
                              (l(t, function (t) {
                                if (
                                  t instanceof n.FilterAsync ||
                                  t instanceof n.IfAsync ||
                                  t instanceof n.AsyncEach ||
                                  t instanceof n.AsyncAll ||
                                  t instanceof n.CallExtensionAsync
                                )
                                  return (e = !0), t;
                              }),
                              e)
                            ) {
                              if (t instanceof n.If)
                                return new n.IfAsync(
                                  t.lineno,
                                  t.colno,
                                  t.cond,
                                  t.body,
                                  t.else_
                                );
                              if (
                                t instanceof n.For &&
                                !(t instanceof n.AsyncAll)
                              )
                                return new n.AsyncEach(
                                  t.lineno,
                                  t.colno,
                                  t.arr,
                                  t.name,
                                  t.body,
                                  t.else_
                                );
                            }
                          }
                        });
                      })(
                        (function (t) {
                          return l(t, function (t) {
                            if (t instanceof n.Block) {
                              var e = !1,
                                i = r();
                              (t.body = l(t.body, function (t) {
                                if (
                                  t instanceof n.FunCall &&
                                  'super' === t.name.value
                                )
                                  return (
                                    (e = !0), new n.Symbol(t.lineno, t.colno, i)
                                  );
                              })),
                                e &&
                                  t.body.children.unshift(
                                    new n.Super(
                                      0,
                                      0,
                                      t.name,
                                      new n.Symbol(0, 0, i)
                                    )
                                  );
                            }
                          });
                        })(
                          (function (t, e) {
                            return c(t, function (t) {
                              return t instanceof n.Output
                                ? h(t, e)
                                : t instanceof n.Set
                                ? h(t, e, 'value')
                                : t instanceof n.For
                                ? h(t, e, 'arr')
                                : t instanceof n.If
                                ? h(t, e, 'cond')
                                : t instanceof n.CallExtension
                                ? h(t, e, 'args')
                                : void 0;
                            });
                          })(t, e)
                        )
                      );
                    })(t, e || []);
                  },
                };
              },
              function (t, e, i) {
                'use strict';
                var n = i(0),
                  s = i(2);
                function o(t, e) {
                  return null == t || !1 === t ? e : t;
                }
                function r(t) {
                  return t != t;
                }
                function a(t) {
                  var e = (t = o(t, '')).toLowerCase();
                  return s.copySafeness(
                    t,
                    e.charAt(0).toUpperCase() + e.slice(1)
                  );
                }
                function l(t) {
                  if (n.isString(t)) return t.split('');
                  if (n.isObject(t))
                    return n._entries(t || {}).map(function (t) {
                      return { key: t[0], value: t[1] };
                    });
                  if (n.isArray(t)) return t;
                  throw new n.TemplateError('list filter: type not iterable');
                }
                function c(t) {
                  return function (e, i, s) {
                    void 0 === i && (i = 'truthy');
                    var o = this,
                      r = o.env.getTest(i);
                    return n.toArray(e).filter(function (e) {
                      return r.call(o, e, s) === t;
                    });
                  };
                }
                function h(t) {
                  return s.copySafeness(t, t.replace(/^\s*|\s*$/g, ''));
                }
                ((e = t.exports = {}).abs = Math.abs),
                  (e.batch = function (t, e, i) {
                    var n,
                      s = [],
                      o = [];
                    for (n = 0; n < t.length; n++)
                      n % e == 0 && o.length && (s.push(o), (o = [])),
                        o.push(t[n]);
                    if (o.length) {
                      if (i) for (n = o.length; n < e; n++) o.push(i);
                      s.push(o);
                    }
                    return s;
                  }),
                  (e.capitalize = a),
                  (e.center = function (t, e) {
                    if (((e = e || 80), (t = o(t, '')).length >= e)) return t;
                    var i = e - t.length,
                      r = n.repeat(' ', i / 2 - (i % 2)),
                      a = n.repeat(' ', i / 2);
                    return s.copySafeness(t, r + t + a);
                  }),
                  (e.default = function (t, e, i) {
                    return i ? t || e : void 0 !== t ? t : e;
                  }),
                  (e.dictsort = function (t, e, i) {
                    if (!n.isObject(t))
                      throw new n.TemplateError(
                        'dictsort filter: val must be an object'
                      );
                    var s,
                      o = [];
                    for (var r in t) o.push([r, t[r]]);
                    if (void 0 === i || 'key' === i) s = 0;
                    else {
                      if ('value' !== i)
                        throw new n.TemplateError(
                          'dictsort filter: You can only sort by either key or value'
                        );
                      s = 1;
                    }
                    return (
                      o.sort(function (t, i) {
                        var o = t[s],
                          r = i[s];
                        return (
                          e ||
                            (n.isString(o) && (o = o.toUpperCase()),
                            n.isString(r) && (r = r.toUpperCase())),
                          o > r ? 1 : o === r ? 0 : -1
                        );
                      }),
                      o
                    );
                  }),
                  (e.dump = function (t, e) {
                    return JSON.stringify(t, null, e);
                  }),
                  (e.escape = function (t) {
                    return t instanceof s.SafeString
                      ? t
                      : ((t = null == t ? '' : t),
                        s.markSafe(n.escape(t.toString())));
                  }),
                  (e.safe = function (t) {
                    return t instanceof s.SafeString
                      ? t
                      : ((t = null == t ? '' : t), s.markSafe(t.toString()));
                  }),
                  (e.first = function (t) {
                    return t[0];
                  }),
                  (e.forceescape = function (t) {
                    return (
                      (t = null == t ? '' : t),
                      s.markSafe(n.escape(t.toString()))
                    );
                  }),
                  (e.groupby = function (t, e) {
                    return n.groupBy(t, e, this.env.opts.throwOnUndefined);
                  }),
                  (e.indent = function (t, e, i) {
                    if ('' === (t = o(t, ''))) return '';
                    e = e || 4;
                    var r = t.split('\n'),
                      a = n.repeat(' ', e),
                      l = r
                        .map(function (t, e) {
                          return 0 !== e || i ? '' + a + t : t;
                        })
                        .join('\n');
                    return s.copySafeness(t, l);
                  }),
                  (e.join = function (t, e, i) {
                    return (
                      (e = e || ''),
                      i &&
                        (t = n.map(t, function (t) {
                          return t[i];
                        })),
                      t.join(e)
                    );
                  }),
                  (e.last = function (t) {
                    return t[t.length - 1];
                  }),
                  (e.length = function (t) {
                    var e = o(t, '');
                    return void 0 !== e
                      ? ('function' == typeof Map && e instanceof Map) ||
                        ('function' == typeof Set && e instanceof Set)
                        ? e.size
                        : !n.isObject(e) || e instanceof s.SafeString
                        ? e.length
                        : n.keys(e).length
                      : 0;
                  }),
                  (e.list = l),
                  (e.lower = function (t) {
                    return (t = o(t, '')).toLowerCase();
                  }),
                  (e.nl2br = function (t) {
                    return null == t
                      ? ''
                      : s.copySafeness(t, t.replace(/\r\n|\n/g, '<br />\n'));
                  }),
                  (e.random = function (t) {
                    return t[Math.floor(Math.random() * t.length)];
                  }),
                  (e.reject = c(!1)),
                  (e.rejectattr = function (t, e) {
                    return t.filter(function (t) {
                      return !t[e];
                    });
                  }),
                  (e.select = c(!0)),
                  (e.selectattr = function (t, e) {
                    return t.filter(function (t) {
                      return !!t[e];
                    });
                  }),
                  (e.replace = function (t, e, i, n) {
                    var o = t;
                    if (e instanceof RegExp) return t.replace(e, i);
                    void 0 === n && (n = -1);
                    var r = '';
                    if ('number' == typeof e) e = '' + e;
                    else if ('string' != typeof e) return t;
                    if (
                      ('number' == typeof t && (t = '' + t),
                      'string' != typeof t && !(t instanceof s.SafeString))
                    )
                      return t;
                    if ('' === e)
                      return (
                        (r = i + t.split('').join(i) + i), s.copySafeness(t, r)
                      );
                    var a = t.indexOf(e);
                    if (0 === n || -1 === a) return t;
                    for (var l = 0, c = 0; a > -1 && (-1 === n || c < n); )
                      (r += t.substring(l, a) + i),
                        (l = a + e.length),
                        c++,
                        (a = t.indexOf(e, l));
                    return (
                      l < t.length && (r += t.substring(l)),
                      s.copySafeness(o, r)
                    );
                  }),
                  (e.reverse = function (t) {
                    var e;
                    return (
                      (e = n.isString(t)
                        ? l(t)
                        : n.map(t, function (t) {
                            return t;
                          })).reverse(),
                      n.isString(t) ? s.copySafeness(t, e.join('')) : e
                    );
                  }),
                  (e.round = function (t, e, i) {
                    e = e || 0;
                    var n = Math.pow(10, e);
                    return (
                      ('ceil' === i
                        ? Math.ceil
                        : 'floor' === i
                        ? Math.floor
                        : Math.round)(t * n) / n
                    );
                  }),
                  (e.slice = function (t, e, i) {
                    for (
                      var n = Math.floor(t.length / e),
                        s = t.length % e,
                        o = [],
                        r = 0,
                        a = 0;
                      a < e;
                      a++
                    ) {
                      var l = r + a * n;
                      a < s && r++;
                      var c = r + (a + 1) * n,
                        h = t.slice(l, c);
                      i && a >= s && h.push(i), o.push(h);
                    }
                    return o;
                  }),
                  (e.sum = function (t, e, i) {
                    return (
                      void 0 === i && (i = 0),
                      e &&
                        (t = n.map(t, function (t) {
                          return t[e];
                        })),
                      i +
                        t.reduce(function (t, e) {
                          return t + e;
                        }, 0)
                    );
                  }),
                  (e.sort = s.makeMacro(
                    ['value', 'reverse', 'case_sensitive', 'attribute'],
                    [],
                    function (t, e, i, s) {
                      var o = this,
                        r = n.map(t, function (t) {
                          return t;
                        }),
                        a = n.getAttrGetter(s);
                      return (
                        r.sort(function (t, r) {
                          var l = s ? a(t) : t,
                            c = s ? a(r) : r;
                          if (
                            o.env.opts.throwOnUndefined &&
                            s &&
                            (void 0 === l || void 0 === c)
                          )
                            throw new TypeError(
                              'sort: attribute "' +
                                s +
                                '" resolved to undefined'
                            );
                          return (
                            !i &&
                              n.isString(l) &&
                              n.isString(c) &&
                              ((l = l.toLowerCase()), (c = c.toLowerCase())),
                            l < c ? (e ? 1 : -1) : l > c ? (e ? -1 : 1) : 0
                          );
                        }),
                        r
                      );
                    }
                  )),
                  (e.string = function (t) {
                    return s.copySafeness(t, t);
                  }),
                  (e.striptags = function (t, e) {
                    var i,
                      n = h(
                        (t = o(t, '')).replace(
                          /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,
                          ''
                        )
                      );
                    return (
                      (i = e
                        ? n
                            .replace(/^ +| +$/gm, '')
                            .replace(/ +/g, ' ')
                            .replace(/(\r\n)/g, '\n')
                            .replace(/\n\n\n+/g, '\n\n')
                        : n.replace(/\s+/gi, ' ')),
                      s.copySafeness(t, i)
                    );
                  }),
                  (e.title = function (t) {
                    var e = (t = o(t, '')).split(' ').map(function (t) {
                      return a(t);
                    });
                    return s.copySafeness(t, e.join(' '));
                  }),
                  (e.trim = h),
                  (e.truncate = function (t, e, i, n) {
                    var r = t;
                    if (((e = e || 255), (t = o(t, '')).length <= e)) return t;
                    if (i) t = t.substring(0, e);
                    else {
                      var a = t.lastIndexOf(' ', e);
                      -1 === a && (a = e), (t = t.substring(0, a));
                    }
                    return (t += null != n ? n : '...'), s.copySafeness(r, t);
                  }),
                  (e.upper = function (t) {
                    return (t = o(t, '')).toUpperCase();
                  }),
                  (e.urlencode = function (t) {
                    var e = encodeURIComponent;
                    return n.isString(t)
                      ? e(t)
                      : (n.isArray(t) ? t : n._entries(t))
                          .map(function (t) {
                            var i = t[0],
                              n = t[1];
                            return e(i) + '=' + e(n);
                          })
                          .join('&');
                  });
                var u = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,
                  d =
                    /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,
                  f = /^https?:\/\/.*$/,
                  p = /^www\./,
                  g = /\.(?:org|net|com)(?:\:|\/|$)/;
                (e.urlize = function (t, e, i) {
                  r(e) && (e = 1 / 0);
                  var n = !0 === i ? ' rel="nofollow"' : '';
                  return t
                    .split(/(\s+)/)
                    .filter(function (t) {
                      return t && t.length;
                    })
                    .map(function (t) {
                      var i = t.match(u),
                        s = i ? i[1] : t,
                        o = s.substr(0, e);
                      return f.test(s)
                        ? '<a href="' + s + '"' + n + '>' + o + '</a>'
                        : p.test(s)
                        ? '<a href="http://' + s + '"' + n + '>' + o + '</a>'
                        : d.test(s)
                        ? '<a href="mailto:' + s + '">' + s + '</a>'
                        : g.test(s)
                        ? '<a href="http://' + s + '"' + n + '>' + o + '</a>'
                        : t;
                    })
                    .join('');
                }),
                  (e.wordcount = function (t) {
                    var e = (t = o(t, '')) ? t.match(/\w+/g) : null;
                    return e ? e.length : null;
                  }),
                  (e.float = function (t, e) {
                    var i = parseFloat(t);
                    return r(i) ? e : i;
                  });
                var m = s.makeMacro(
                  ['value', 'default', 'base'],
                  [],
                  function (t, e, i) {
                    void 0 === i && (i = 10);
                    var n = parseInt(t, i);
                    return r(n) ? e : n;
                  }
                );
                (e.int = m), (e.d = e.default), (e.e = e.escape);
              },
              function (t, e, i) {
                'use strict';
                function n(t, e) {
                  return (
                    (n = Object.setPrototypeOf
                      ? Object.setPrototypeOf.bind()
                      : function (t, e) {
                          return (t.__proto__ = e), t;
                        }),
                    n(t, e)
                  );
                }
                var s = (function (t) {
                  var e, i;
                  function s(e) {
                    var i;
                    return (
                      ((i = t.call(this) || this).precompiled = e || {}), i
                    );
                  }
                  return (
                    (i = t),
                    ((e = s).prototype = Object.create(i.prototype)),
                    (e.prototype.constructor = e),
                    n(e, i),
                    (s.prototype.getSource = function (t) {
                      return this.precompiled[t]
                        ? {
                            src: { type: 'code', obj: this.precompiled[t] },
                            path: t,
                          }
                        : null;
                    }),
                    s
                  );
                })(i(6));
                t.exports = { PrecompiledLoader: s };
              },
              function (t, e, i) {
                'use strict';
                var n = i(2).SafeString;
                (e.callable = function (t) {
                  return 'function' == typeof t;
                }),
                  (e.defined = function (t) {
                    return void 0 !== t;
                  }),
                  (e.divisibleby = function (t, e) {
                    return t % e == 0;
                  }),
                  (e.escaped = function (t) {
                    return t instanceof n;
                  }),
                  (e.equalto = function (t, e) {
                    return t === e;
                  }),
                  (e.eq = e.equalto),
                  (e.sameas = e.equalto),
                  (e.even = function (t) {
                    return t % 2 == 0;
                  }),
                  (e.falsy = function (t) {
                    return !t;
                  }),
                  (e.ge = function (t, e) {
                    return t >= e;
                  }),
                  (e.greaterthan = function (t, e) {
                    return t > e;
                  }),
                  (e.gt = e.greaterthan),
                  (e.le = function (t, e) {
                    return t <= e;
                  }),
                  (e.lessthan = function (t, e) {
                    return t < e;
                  }),
                  (e.lt = e.lessthan),
                  (e.lower = function (t) {
                    return t.toLowerCase() === t;
                  }),
                  (e.ne = function (t, e) {
                    return t !== e;
                  }),
                  (e.null = function (t) {
                    return null === t;
                  }),
                  (e.number = function (t) {
                    return 'number' == typeof t;
                  }),
                  (e.odd = function (t) {
                    return t % 2 == 1;
                  }),
                  (e.string = function (t) {
                    return 'string' == typeof t;
                  }),
                  (e.truthy = function (t) {
                    return !!t;
                  }),
                  (e.undefined = function (t) {
                    return void 0 === t;
                  }),
                  (e.upper = function (t) {
                    return t.toUpperCase() === t;
                  }),
                  (e.iterable = function (t) {
                    return 'undefined' != typeof Symbol
                      ? !!t[Symbol.iterator]
                      : Array.isArray(t) || 'string' == typeof t;
                  }),
                  (e.mapping = function (t) {
                    var e =
                      null != t && 'object' == typeof t && !Array.isArray(t);
                    return Set ? e && !(t instanceof Set) : e;
                  });
              },
              function (t, e, i) {
                'use strict';
                t.exports = function () {
                  return {
                    range: function (t, e, i) {
                      void 0 === e ? ((e = t), (t = 0), (i = 1)) : i || (i = 1);
                      var n = [];
                      if (i > 0) for (var s = t; s < e; s += i) n.push(s);
                      else for (var o = t; o > e; o += i) n.push(o);
                      return n;
                    },
                    cycler: function () {
                      return (
                        (t = Array.prototype.slice.call(arguments)),
                        (e = -1),
                        {
                          current: null,
                          reset: function () {
                            (e = -1), (this.current = null);
                          },
                          next: function () {
                            return (
                              ++e >= t.length && (e = 0),
                              (this.current = t[e]),
                              this.current
                            );
                          },
                        }
                      );
                      var t, e;
                    },
                    joiner: function (t) {
                      return (function (t) {
                        t = t || ',';
                        var e = !0;
                        return function () {
                          var i = e ? '' : t;
                          return (e = !1), i;
                        };
                      })(t);
                    },
                  };
                };
              },
              function (t, e, i) {
                var n = i(4);
                t.exports = function (t, e) {
                  function i(t, e) {
                    if (
                      ((this.name = t),
                      (this.path = t),
                      (this.defaultEngine = e.defaultEngine),
                      (this.ext = n.extname(t)),
                      !this.ext && !this.defaultEngine)
                    )
                      throw new Error(
                        'No default engine was specified and no extension was provided.'
                      );
                    this.ext ||
                      (this.name += this.ext =
                        ('.' !== this.defaultEngine[0] ? '.' : '') +
                        this.defaultEngine);
                  }
                  return (
                    (i.prototype.render = function (e, i) {
                      t.render(this.name, e, i);
                    }),
                    e.set('view', i),
                    e.set('nunjucksEnv', t),
                    t
                  );
                };
              },
              function (t, e, i) {
                'use strict';
                var n = i(4),
                  s = i(4),
                  o = i(0)._prettifyError,
                  r = i(5),
                  a = i(7).Environment,
                  l = i(24);
                function c(t, e) {
                  return (
                    !!Array.isArray(e) &&
                    e.some(function (e) {
                      return t.match(e);
                    })
                  );
                }
                function h(t, e) {
                  (e = e || {}).isString = !0;
                  var i = e.env || new a([]),
                    n = e.wrapper || l;
                  if (!e.name)
                    throw new Error(
                      'the "name" option is required when compiling a string'
                    );
                  return n([u(t, e.name, i)], e);
                }
                function u(t, e, i) {
                  var n,
                    s = (i = i || new a([])).asyncFilters,
                    l = i.extensionsList;
                  e = e.replace(/\\/g, '/');
                  try {
                    n = r.compile(t, s, l, e, i.opts);
                  } catch (t) {
                    throw o(e, !1, t);
                  }
                  return { name: e, template: n };
                }
                t.exports = {
                  precompile: function (t, e) {
                    var i = (e = e || {}).env || new a([]),
                      o = e.wrapper || l;
                    if (e.isString) return h(t, e);
                    var r = n.existsSync(t) && n.statSync(t),
                      d = [],
                      f = [];
                    if (r.isFile())
                      d.push(u(n.readFileSync(t, 'utf-8'), e.name || t, i));
                    else if (r.isDirectory()) {
                      !(function i(o) {
                        n.readdirSync(o).forEach(function (r) {
                          var a = s.join(o, r),
                            l = a.substr(s.join(t, '/').length),
                            h = n.statSync(a);
                          h && h.isDirectory()
                            ? c((l += '/'), e.exclude) || i(a)
                            : c(l, e.include) && f.push(a);
                        });
                      })(t);
                      for (var p = 0; p < f.length; p++) {
                        var g = f[p].replace(s.join(t, '/'), '');
                        try {
                          d.push(u(n.readFileSync(f[p], 'utf-8'), g, i));
                        } catch (t) {
                          if (!e.force) throw t;
                          console.error(t);
                        }
                      }
                    }
                    return o(d, e);
                  },
                  precompileString: h,
                };
              },
              function (t, e, i) {
                'use strict';
                t.exports = function (t, e) {
                  var i = '';
                  e = e || {};
                  for (var n = 0; n < t.length; n++) {
                    var s = JSON.stringify(t[n].name);
                    (i +=
                      '(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[' +
                      s +
                      '] = (function() {\n' +
                      t[n].template +
                      '\n})();\n'),
                      e.asFunction &&
                        (i +=
                          'return function(ctx, cb) { return nunjucks.render(' +
                          s +
                          ', ctx, cb); }\n'),
                      (i += '})();\n');
                  }
                  return i;
                };
              },
              function (t, e, i) {
                t.exports = function () {
                  'use strict';
                  var t,
                    e,
                    i = this.runtime,
                    n = this.lib,
                    s = this.compiler.Compiler,
                    o = this.parser.Parser,
                    r = this.nodes,
                    a = this.lexer,
                    l = i.contextOrFrameLookup,
                    c = i.memberLookup;
                  function h(t) {
                    return { index: t.index, lineno: t.lineno, colno: t.colno };
                  }
                  if (
                    (s && (t = s.prototype.assertType),
                    o && (e = o.prototype.parseAggregate),
                    (i.contextOrFrameLookup = function (t, e, i) {
                      var n = l.apply(this, arguments);
                      if (void 0 !== n) return n;
                      switch (i) {
                        case 'True':
                          return !0;
                        case 'False':
                          return !1;
                        case 'None':
                          return null;
                        default:
                          return;
                      }
                    }),
                    r && s && o)
                  ) {
                    var u = r.Node.extend('Slice', {
                      fields: ['start', 'stop', 'step'],
                      init: function (t, e, i, n, s) {
                        (i = i || new r.Literal(t, e, null)),
                          (n = n || new r.Literal(t, e, null)),
                          (s = s || new r.Literal(t, e, 1)),
                          this.parent(t, e, i, n, s);
                      },
                    });
                    (s.prototype.assertType = function (e) {
                      e instanceof u || t.apply(this, arguments);
                    }),
                      (s.prototype.compileSlice = function (t, e) {
                        this._emit('('),
                          this._compileExpression(t.start, e),
                          this._emit('),('),
                          this._compileExpression(t.stop, e),
                          this._emit('),('),
                          this._compileExpression(t.step, e),
                          this._emit(')');
                      }),
                      (o.prototype.parseAggregate = function () {
                        var t = this,
                          i = h(this.tokens);
                        i.colno--, i.index--;
                        try {
                          return e.apply(this);
                        } catch (e) {
                          var s = h(this.tokens),
                            o = function () {
                              return n._assign(t.tokens, s), e;
                            };
                          n._assign(this.tokens, i), (this.peeked = !1);
                          var l = this.peekToken();
                          if (l.type !== a.TOKEN_LEFT_BRACKET) throw o();
                          this.nextToken();
                          for (
                            var c = new u(l.lineno, l.colno), d = !1, f = 0;
                            f <= c.fields.length &&
                            !this.skip(a.TOKEN_RIGHT_BRACKET);
                            f++
                          ) {
                            if (f === c.fields.length) {
                              if (!d) break;
                              this.fail(
                                'parseSlice: too many slice components',
                                l.lineno,
                                l.colno
                              );
                            }
                            this.skip(a.TOKEN_COLON)
                              ? (d = !0)
                              : ((c[c.fields[f]] = this.parseExpression()),
                                (d = this.skip(a.TOKEN_COLON) || d));
                          }
                          if (!d) throw o();
                          return new r.Array(l.lineno, l.colno, [c]);
                        }
                      });
                  }
                  function d(t, e, n, s) {
                    (t = t || []),
                      null === e && (e = s < 0 ? t.length - 1 : 0),
                      null === n
                        ? (n = s < 0 ? -1 : t.length)
                        : n < 0 && (n += t.length),
                      e < 0 && (e += t.length);
                    for (
                      var o = [], r = e;
                      !(
                        r < 0 ||
                        r > t.length ||
                        (s > 0 && r >= n) ||
                        (s < 0 && r <= n)
                      );
                      r += s
                    )
                      o.push(i.memberLookup(t, r));
                    return o;
                  }
                  function f(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                  }
                  var p = {
                      pop: function (t) {
                        if (void 0 === t) return this.pop();
                        if (t >= this.length || t < 0)
                          throw new Error('KeyError');
                        return this.splice(t, 1);
                      },
                      append: function (t) {
                        return this.push(t);
                      },
                      remove: function (t) {
                        for (var e = 0; e < this.length; e++)
                          if (this[e] === t) return this.splice(e, 1);
                        throw new Error('ValueError');
                      },
                      count: function (t) {
                        for (var e = 0, i = 0; i < this.length; i++)
                          this[i] === t && e++;
                        return e;
                      },
                      index: function (t) {
                        var e;
                        if (-1 === (e = this.indexOf(t)))
                          throw new Error('ValueError');
                        return e;
                      },
                      find: function (t) {
                        return this.indexOf(t);
                      },
                      insert: function (t, e) {
                        return this.splice(t, 0, e);
                      },
                    },
                    g = {
                      items: function () {
                        return n._entries(this);
                      },
                      values: function () {
                        return n._values(this);
                      },
                      keys: function () {
                        return n.keys(this);
                      },
                      get: function (t, e) {
                        var i = this[t];
                        return void 0 === i && (i = e), i;
                      },
                      has_key: function (t) {
                        return f(this, t);
                      },
                      pop: function (t, e) {
                        var i = this[t];
                        if (void 0 === i && void 0 !== e) i = e;
                        else {
                          if (void 0 === i) throw new Error('KeyError');
                          delete this[t];
                        }
                        return i;
                      },
                      popitem: function () {
                        var t = n.keys(this);
                        if (!t.length) throw new Error('KeyError');
                        var e = t[0],
                          i = this[e];
                        return delete this[e], [e, i];
                      },
                      setdefault: function (t, e) {
                        return (
                          void 0 === e && (e = null),
                          t in this || (this[t] = e),
                          this[t]
                        );
                      },
                      update: function (t) {
                        return n._assign(this, t), null;
                      },
                    };
                  return (
                    (g.iteritems = g.items),
                    (g.itervalues = g.values),
                    (g.iterkeys = g.keys),
                    (i.memberLookup = function (t, e, i) {
                      return 4 === arguments.length
                        ? d.apply(this, arguments)
                        : ((t = t || {}),
                          n.isArray(t) && f(p, e)
                            ? p[e].bind(t)
                            : n.isObject(t) && f(g, e)
                            ? g[e].bind(t)
                            : c.apply(this, arguments));
                    }),
                    function () {
                      (i.contextOrFrameLookup = l),
                        (i.memberLookup = c),
                        s && (s.prototype.assertType = t),
                        o && (o.prototype.parseAggregate = e);
                    }
                  );
                };
              },
            ]);
          }),
          (t.exports = e());
      },
    },
    e = {};
  function i(n) {
    var s = e[n];
    if (void 0 !== s) return s.exports;
    var o = (e[n] = { exports: {} });
    return t[n].call(o.exports, o, o.exports, i), o.exports;
  }
  (() => {
    'use strict';
    const t = (t) => {
      const { domElement: e } = t,
        i = e.querySelector('[data-trigger]');
      console.log(i);
      const n = e.querySelector('.hef-menu__container');
      i.addEventListener('click', (t) => {
        t.preventDefault(),
          n.classList.toggle('hef-menu__container--open'),
          i.querySelectorAll('span').forEach((t) => {
            t.classList.toggle('hef-menu__link-text--hidden');
          });
      });
    };
    let e = {};
    const n = (t, i) => {
        const n = Object.assign({}, e);
        return (n[t] = i), (e = n), e;
      },
      s = () => e,
      o = (t, e) => {
        const i = t.cloneNode(!1);
        return t.replaceWith(i), i.appendChild(e), i;
      };
    var r,
      a = i(985);
    !(function (t) {
      (t.ASC = 'ASC'), (t.DESC = 'DESC');
    })(r || (r = {}));
    const l = (t) => {
        const { rows: e, headers: i } = JSON.parse(t.data),
          n = JSON.parse(t.config);
        new a.Environment();
        let s = t.domElement,
          l = n.limit || 10,
          c = 0,
          h = i[0].key,
          u = r.ASC;
        const d = () => {
          const t = a.renderString(
            '<table> <thead> <tr> {% if selectable %} <th></th> {% endif %} {% for header in headers %} <th {% if header.width %}style="width:{{header.width}}" {% endif %}> {{ header.label }} <button class="hef-table__sort-button" data-sort="{{header.key}}"> <span class="material-symbols-outlined">{% if sortCol == header.key and order == \'DESC\' %}expand_less{% else %}expand_more{% endif %}</span> </button> </th> {% endfor %} </tr> </thead> <tbody> {% for row in rows %} <tr class=""> {% if selectable %} <td><input data-select="true" type="checkbox" value=""/></td> {% endif %} {% for header in headers %} <td> {% if header.link %} {% if row[header.key] == \'David Readytoscore\' %} <a href="/{{base}}/{{header.link}}?p={{row[header.linkVal]}}"> {{ row[header.key] }}</a> {% elif row[header.key] == \'Betty Existingscoring\' %} <a href="/{{base}}/patient/summaryscoreactive.html"> {{ row[header.key] }}</a> {% else %} <a href="/{{base}}/{{header.link}}?p={{row[header.linkVal]}}"> {{ row[header.key] }}</a> {% endif %} {% else %} <span>{{ row[header.key] }}</span> {% endif %} </td> {% endfor %} </tr> {% endfor %} </tbody> </table> <div class="hef-table__pagination"> <button class="hef-table__pagination-button" data-paginate-left="true"> <span class="material-symbols-outlined">chevron_left</span> </button> {{pagination.offset}} to {{pagination.limit}} of {{pagination.total}} <button class="hef-table__pagination-button" data-paginate-right="true"> <span class="material-symbols-outlined">chevron_right</span> </button> </div> ',
            {
              rows:
                ((f = e),
                f
                  .slice()
                  .sort((t, e) =>
                    u === r.ASC ? (t[h] > e[h] ? 1 : -1) : t[h] > e[h] ? -1 : 1
                  )
                  .slice(c, c + l)),
              headers: i,
              pagination: { offset: c + 1, limit: c + l, total: e.length },
              sortCol: h,
              order: u,
              selectable: n.selectable || !1,
              base: 'phw-hef-prototype',
            }
          );
          var f;
          const p = document.createElement('div');
          (p.innerHTML = t),
            (s = o(s, p)),
            s.querySelectorAll('[data-select]').forEach((t) => {
              const e = t.closest('tr');
              t.addEventListener('change', (t) => {
                t.currentTarget.checked
                  ? e.classList.add('hef-table__row--selected')
                  : e.classList.remove('hef-table__row--selected');
              });
            }),
            s
              .querySelector('[data-paginate-left]')
              .addEventListener('click', () => {
                c > 0 && (c -= l), d();
              }),
            s
              .querySelector('[data-paginate-right]')
              .addEventListener('click', () => {
                c < e.length && (c += l), d();
              }),
            s.querySelectorAll('[data-sort]').forEach((t) => {
              const e = t.getAttribute('data-sort');
              t.addEventListener('click', (t) => {
                e === h
                  ? (u = u === r.ASC ? r.DESC : r.ASC)
                  : ((u = r.ASC), (h = e)),
                  (c = 0),
                  d();
              });
            });
        };
        d();
      },
      c = (t) => {
        const { domElement: e } = t,
          i = JSON.parse(t.data),
          n = e.querySelector('[data-delete-trigger]');
        let s = e.querySelector('[data-dialog-container]');
        n.addEventListener('click', () => {
          (() => {
            const t = a.renderString(
                '<div class="hef-dialog"> <div class="hef-dialog__wrapper"> <div class="hef-dialog__container"> <div class="hef-dialog__header"> <span class="hef-dialog__close-button" data-close-trigger="true"> <span class="material-symbols-outlined"> close </span> </span> </div> <div class="hef-dialog__body"> <h2>Set user {{label}}</h2> <p> Are you sure you want to delete this record from your team or would you like to remove from here only? </p> </div> <div class="hef-dialog__controls"> <button class="nhsuk-button nhsuk-button--secondary" data-close-trigger="true"> Cancel </button> <button class="nhsuk-button" data-close-trigger="true"> Set {{label}} </button> </div> </div> </div> </div> ',
                { label: i.label }
              ),
              e = document.createElement('div');
            (e.innerHTML = t),
              (s = o(s, e)),
              s.querySelectorAll('[data-close-trigger]').forEach((t) => {
                t.addEventListener('click', () => {
                  s = o(s, document.createElement('div'));
                });
              });
          })();
        });
      },
      h = (t) => {
        const e = document.createElement('div'),
          i = JSON.parse(t.data),
          n = JSON.parse(t.config),
          s = a.renderString(
            '<div class="hef-expander {% if config.open %} {% else %}hef-expander--closed {%endif%}"> <div class="hef-expander__header" data-trigger="true"> <h3> {{data.title}}<span class="material-symbols-outlined check-icon check-icon--hidden">check</span> </h3> <span class="material-symbols-outlined icon">expand_more</span> </div> <div class="hef-expander__body"> <div class="hef-expander__notes"> <a href="/" data-trigger-note="true">Add note </a> <span class="material-symbols-outlined icon">note</span> </div> {% for option in data.options %} <div class="hef-sub-expander hef-sub-expander--closed"> <div class="hef-sub-expander__body"> <div class="hef-sub-expander__content"> <h5 data-sub-trigger="true"> <span class="material-symbols-outlined">expand_more</span> {{option.title}} </h5> <p>{{option.description}}</p> </div> <div class="hef-sub-expander__level hef-sub-expander__level--{{loop.index0}}"> <span>{% if loop.index0 == 0 %}Major{% elif loop.index0 == 1 %}Significant{% elif loop.index0 == 2 %}Limited{% elif loop.index0 == 3 %}Minimal{% elif loop.index0 == 4 %}None{% endif %}</span> </div> <div class="hef-sub-expander__select"> <input data-radio="true" type="radio" name="{{title}}"/> </div> </div> </div> {% endfor %} </div> </div> ',
            { data: i, config: n }
          );
        e.innerHTML = s;
        const r = o(t.domElement, e),
          l = r.querySelector('[data-trigger]');
        l.addEventListener('click', (t) => {
          t.target
            .closest('.hef-expander')
            .classList.toggle('hef-expander--closed');
        }),
          r.querySelectorAll('[data-sub-trigger]').forEach((t) => {
            t.addEventListener('click', (t) => {
              t.target
                .closest('.hef-sub-expander')
                .classList.toggle('hef-sub-expander--closed');
            });
          }),
          r.querySelectorAll('[data-radio]').forEach((t) => {
            t.addEventListener('change', () => {
              l.querySelector('.check-icon').classList.remove(
                'check-icon--hidden'
              );
            });
          }),
          r.querySelectorAll('[data-trigger-note]').forEach((t) => {
            t.addEventListener('click', (t) => {
              t.preventDefault();
            });
          });
      };
    function u(t) {
      return (t + 0.5) | 0;
    }
    const d = (t, e, i) => Math.max(Math.min(t, i), e);
    function f(t) {
      return d(u(2.55 * t), 0, 255);
    }
    function p(t) {
      return d(u(255 * t), 0, 255);
    }
    function g(t) {
      return d(u(t / 2.55) / 100, 0, 1);
    }
    function m(t) {
      return d(u(100 * t), 0, 100);
    }
    const b = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
      },
      x = [...'0123456789ABCDEF'],
      v = (t) => x[15 & t],
      _ = (t) => x[(240 & t) >> 4] + x[15 & t],
      y = (t) => (240 & t) >> 4 == (15 & t);
    const k =
      /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
    function w(t, e, i) {
      const n = e * Math.min(i, 1 - i),
        s = (e, s = (e + t / 30) % 12) =>
          i - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
      return [s(0), s(8), s(4)];
    }
    function S(t, e, i) {
      const n = (n, s = (n + t / 60) % 6) =>
        i - i * e * Math.max(Math.min(s, 4 - s, 1), 0);
      return [n(5), n(3), n(1)];
    }
    function E(t, e, i) {
      const n = w(t, 1, 0.5);
      let s;
      for (
        e + i > 1 && ((s = 1 / (e + i)), (e *= s), (i *= s)), s = 0;
        s < 3;
        s++
      )
        (n[s] *= 1 - e - i), (n[s] += e);
      return n;
    }
    function O(t) {
      const e = t.r / 255,
        i = t.g / 255,
        n = t.b / 255,
        s = Math.max(e, i, n),
        o = Math.min(e, i, n),
        r = (s + o) / 2;
      let a, l, c;
      return (
        s !== o &&
          ((c = s - o),
          (l = r > 0.5 ? c / (2 - s - o) : c / (s + o)),
          (a = (function (t, e, i, n, s) {
            return t === s
              ? (e - i) / n + (e < i ? 6 : 0)
              : e === s
              ? (i - t) / n + 2
              : (t - e) / n + 4;
          })(e, i, n, c, s)),
          (a = 60 * a + 0.5)),
        [0 | a, l || 0, r]
      );
    }
    function M(t, e, i, n) {
      return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(p);
    }
    function L(t, e, i) {
      return M(w, t, e, i);
    }
    function T(t) {
      return ((t % 360) + 360) % 360;
    }
    const A = {
        x: 'dark',
        Z: 'light',
        Y: 're',
        X: 'blu',
        W: 'gr',
        V: 'medium',
        U: 'slate',
        A: 'ee',
        T: 'ol',
        S: 'or',
        B: 'ra',
        C: 'lateg',
        D: 'ights',
        R: 'in',
        Q: 'turquois',
        E: 'hi',
        P: 'ro',
        O: 'al',
        N: 'le',
        M: 'de',
        L: 'yello',
        F: 'en',
        K: 'ch',
        G: 'arks',
        H: 'ea',
        I: 'ightg',
        J: 'wh',
      },
      C = {
        OiceXe: 'f0f8ff',
        antiquewEte: 'faebd7',
        aqua: 'ffff',
        aquamarRe: '7fffd4',
        azuY: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '0',
        blanKedOmond: 'ffebcd',
        Xe: 'ff',
        XeviTet: '8a2be2',
        bPwn: 'a52a2a',
        burlywood: 'deb887',
        caMtXe: '5f9ea0',
        KartYuse: '7fff00',
        KocTate: 'd2691e',
        cSO: 'ff7f50',
        cSnflowerXe: '6495ed',
        cSnsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: 'ffff',
        xXe: '8b',
        xcyan: '8b8b',
        xgTMnPd: 'b8860b',
        xWay: 'a9a9a9',
        xgYF: '6400',
        xgYy: 'a9a9a9',
        xkhaki: 'bdb76b',
        xmagFta: '8b008b',
        xTivegYF: '556b2f',
        xSange: 'ff8c00',
        xScEd: '9932cc',
        xYd: '8b0000',
        xsOmon: 'e9967a',
        xsHgYF: '8fbc8f',
        xUXe: '483d8b',
        xUWay: '2f4f4f',
        xUgYy: '2f4f4f',
        xQe: 'ced1',
        xviTet: '9400d3',
        dAppRk: 'ff1493',
        dApskyXe: 'bfff',
        dimWay: '696969',
        dimgYy: '696969',
        dodgerXe: '1e90ff',
        fiYbrick: 'b22222',
        flSOwEte: 'fffaf0',
        foYstWAn: '228b22',
        fuKsia: 'ff00ff',
        gaRsbSo: 'dcdcdc',
        ghostwEte: 'f8f8ff',
        gTd: 'ffd700',
        gTMnPd: 'daa520',
        Way: '808080',
        gYF: '8000',
        gYFLw: 'adff2f',
        gYy: '808080',
        honeyMw: 'f0fff0',
        hotpRk: 'ff69b4',
        RdianYd: 'cd5c5c',
        Rdigo: '4b0082',
        ivSy: 'fffff0',
        khaki: 'f0e68c',
        lavFMr: 'e6e6fa',
        lavFMrXsh: 'fff0f5',
        lawngYF: '7cfc00',
        NmoncEffon: 'fffacd',
        ZXe: 'add8e6',
        ZcSO: 'f08080',
        Zcyan: 'e0ffff',
        ZgTMnPdLw: 'fafad2',
        ZWay: 'd3d3d3',
        ZgYF: '90ee90',
        ZgYy: 'd3d3d3',
        ZpRk: 'ffb6c1',
        ZsOmon: 'ffa07a',
        ZsHgYF: '20b2aa',
        ZskyXe: '87cefa',
        ZUWay: '778899',
        ZUgYy: '778899',
        ZstAlXe: 'b0c4de',
        ZLw: 'ffffe0',
        lime: 'ff00',
        limegYF: '32cd32',
        lRF: 'faf0e6',
        magFta: 'ff00ff',
        maPon: '800000',
        VaquamarRe: '66cdaa',
        VXe: 'cd',
        VScEd: 'ba55d3',
        VpurpN: '9370db',
        VsHgYF: '3cb371',
        VUXe: '7b68ee',
        VsprRggYF: 'fa9a',
        VQe: '48d1cc',
        VviTetYd: 'c71585',
        midnightXe: '191970',
        mRtcYam: 'f5fffa',
        mistyPse: 'ffe4e1',
        moccasR: 'ffe4b5',
        navajowEte: 'ffdead',
        navy: '80',
        Tdlace: 'fdf5e6',
        Tive: '808000',
        TivedBb: '6b8e23',
        Sange: 'ffa500',
        SangeYd: 'ff4500',
        ScEd: 'da70d6',
        pOegTMnPd: 'eee8aa',
        pOegYF: '98fb98',
        pOeQe: 'afeeee',
        pOeviTetYd: 'db7093',
        papayawEp: 'ffefd5',
        pHKpuff: 'ffdab9',
        peru: 'cd853f',
        pRk: 'ffc0cb',
        plum: 'dda0dd',
        powMrXe: 'b0e0e6',
        purpN: '800080',
        YbeccapurpN: '663399',
        Yd: 'ff0000',
        Psybrown: 'bc8f8f',
        PyOXe: '4169e1',
        saddNbPwn: '8b4513',
        sOmon: 'fa8072',
        sandybPwn: 'f4a460',
        sHgYF: '2e8b57',
        sHshell: 'fff5ee',
        siFna: 'a0522d',
        silver: 'c0c0c0',
        skyXe: '87ceeb',
        UXe: '6a5acd',
        UWay: '708090',
        UgYy: '708090',
        snow: 'fffafa',
        sprRggYF: 'ff7f',
        stAlXe: '4682b4',
        tan: 'd2b48c',
        teO: '8080',
        tEstN: 'd8bfd8',
        tomato: 'ff6347',
        Qe: '40e0d0',
        viTet: 'ee82ee',
        JHt: 'f5deb3',
        wEte: 'ffffff',
        wEtesmoke: 'f5f5f5',
        Lw: 'ffff00',
        LwgYF: '9acd32',
      };
    let P;
    const D =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
      R = (t) =>
        t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
      N = (t) =>
        t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
    function F(t, e, i) {
      if (t) {
        let n = O(t);
        (n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1))),
          (n = L(n)),
          (t.r = n[0]),
          (t.g = n[1]),
          (t.b = n[2]);
      }
    }
    function I(t, e) {
      return t ? Object.assign(e || {}, t) : t;
    }
    function B(t) {
      var e = { r: 0, g: 0, b: 0, a: 255 };
      return (
        Array.isArray(t)
          ? t.length >= 3 &&
            ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
            t.length > 3 && (e.a = p(t[3])))
          : ((e = I(t, { r: 0, g: 0, b: 0, a: 1 })).a = p(e.a)),
        e
      );
    }
    function j(t) {
      return 'r' === t.charAt(0)
        ? (function (t) {
            const e = D.exec(t);
            let i,
              n,
              s,
              o = 255;
            if (e) {
              if (e[7] !== i) {
                const t = +e[7];
                o = e[8] ? f(t) : d(255 * t, 0, 255);
              }
              return (
                (i = +e[1]),
                (n = +e[3]),
                (s = +e[5]),
                (i = 255 & (e[2] ? f(i) : d(i, 0, 255))),
                (n = 255 & (e[4] ? f(n) : d(n, 0, 255))),
                (s = 255 & (e[6] ? f(s) : d(s, 0, 255))),
                { r: i, g: n, b: s, a: o }
              );
            }
          })(t)
        : (function (t) {
            const e = k.exec(t);
            let i,
              n = 255;
            if (!e) return;
            e[5] !== i && (n = e[6] ? f(+e[5]) : p(+e[5]));
            const s = T(+e[2]),
              o = +e[3] / 100,
              r = +e[4] / 100;
            return (
              (i =
                'hwb' === e[1]
                  ? (function (t, e, i) {
                      return M(E, t, e, i);
                    })(s, o, r)
                  : 'hsv' === e[1]
                  ? (function (t, e, i) {
                      return M(S, t, e, i);
                    })(s, o, r)
                  : L(s, o, r)),
              { r: i[0], g: i[1], b: i[2], a: n }
            );
          })(t);
    }
    class V {
      constructor(t) {
        if (t instanceof V) return t;
        const e = typeof t;
        let i;
        var n, s, o;
        'object' === e
          ? (i = B(t))
          : 'string' === e &&
            ((o = (n = t).length),
            '#' === n[0] &&
              (4 === o || 5 === o
                ? (s = {
                    r: 255 & (17 * b[n[1]]),
                    g: 255 & (17 * b[n[2]]),
                    b: 255 & (17 * b[n[3]]),
                    a: 5 === o ? 17 * b[n[4]] : 255,
                  })
                : (7 !== o && 9 !== o) ||
                  (s = {
                    r: (b[n[1]] << 4) | b[n[2]],
                    g: (b[n[3]] << 4) | b[n[4]],
                    b: (b[n[5]] << 4) | b[n[6]],
                    a: 9 === o ? (b[n[7]] << 4) | b[n[8]] : 255,
                  })),
            (i =
              s ||
              (function (t) {
                P ||
                  ((P = (function () {
                    const t = {},
                      e = Object.keys(C),
                      i = Object.keys(A);
                    let n, s, o, r, a;
                    for (n = 0; n < e.length; n++) {
                      for (r = a = e[n], s = 0; s < i.length; s++)
                        (o = i[s]), (a = a.replace(o, A[o]));
                      (o = parseInt(C[r], 16)),
                        (t[a] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
                    }
                    return t;
                  })()),
                  (P.transparent = [0, 0, 0, 0]));
                const e = P[t.toLowerCase()];
                return (
                  e && {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 4 === e.length ? e[3] : 255,
                  }
                );
              })(t) ||
              j(t))),
          (this._rgb = i),
          (this._valid = !!i);
      }
      get valid() {
        return this._valid;
      }
      get rgb() {
        var t = I(this._rgb);
        return t && (t.a = g(t.a)), t;
      }
      set rgb(t) {
        this._rgb = B(t);
      }
      rgbString() {
        return this._valid
          ? (t = this._rgb) &&
              (t.a < 255
                ? `rgba(${t.r}, ${t.g}, ${t.b}, ${g(t.a)})`
                : `rgb(${t.r}, ${t.g}, ${t.b})`)
          : void 0;
        var t;
      }
      hexString() {
        return this._valid
          ? ((t = this._rgb),
            (e = ((t) => y(t.r) && y(t.g) && y(t.b) && y(t.a))(t) ? v : _),
            t
              ? '#' +
                e(t.r) +
                e(t.g) +
                e(t.b) +
                ((t, e) => (t < 255 ? e(t) : ''))(t.a, e)
              : void 0)
          : void 0;
        var t, e;
      }
      hslString() {
        return this._valid
          ? (function (t) {
              if (!t) return;
              const e = O(t),
                i = e[0],
                n = m(e[1]),
                s = m(e[2]);
              return t.a < 255
                ? `hsla(${i}, ${n}%, ${s}%, ${g(t.a)})`
                : `hsl(${i}, ${n}%, ${s}%)`;
            })(this._rgb)
          : void 0;
      }
      mix(t, e) {
        if (t) {
          const i = this.rgb,
            n = t.rgb;
          let s;
          const o = e === s ? 0.5 : e,
            r = 2 * o - 1,
            a = i.a - n.a,
            l = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2;
          (s = 1 - l),
            (i.r = 255 & (l * i.r + s * n.r + 0.5)),
            (i.g = 255 & (l * i.g + s * n.g + 0.5)),
            (i.b = 255 & (l * i.b + s * n.b + 0.5)),
            (i.a = o * i.a + (1 - o) * n.a),
            (this.rgb = i);
        }
        return this;
      }
      interpolate(t, e) {
        return (
          t &&
            (this._rgb = (function (t, e, i) {
              const n = N(g(t.r)),
                s = N(g(t.g)),
                o = N(g(t.b));
              return {
                r: p(R(n + i * (N(g(e.r)) - n))),
                g: p(R(s + i * (N(g(e.g)) - s))),
                b: p(R(o + i * (N(g(e.b)) - o))),
                a: t.a + i * (e.a - t.a),
              };
            })(this._rgb, t._rgb, e)),
          this
        );
      }
      clone() {
        return new V(this.rgb);
      }
      alpha(t) {
        return (this._rgb.a = p(t)), this;
      }
      clearer(t) {
        return (this._rgb.a *= 1 - t), this;
      }
      greyscale() {
        const t = this._rgb,
          e = u(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
        return (t.r = t.g = t.b = e), this;
      }
      opaquer(t) {
        return (this._rgb.a *= 1 + t), this;
      }
      negate() {
        const t = this._rgb;
        return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
      }
      lighten(t) {
        return F(this._rgb, 2, t), this;
      }
      darken(t) {
        return F(this._rgb, 2, -t), this;
      }
      saturate(t) {
        return F(this._rgb, 1, t), this;
      }
      desaturate(t) {
        return F(this._rgb, 1, -t), this;
      }
      rotate(t) {
        return (
          (function (t, e) {
            var i = O(t);
            (i[0] = T(i[0] + e)),
              (i = L(i)),
              (t.r = i[0]),
              (t.g = i[1]),
              (t.b = i[2]);
          })(this._rgb, t),
          this
        );
      }
    }
    function z() {}
    const W = (() => {
      let t = 0;
      return () => t++;
    })();
    function H(t) {
      return null == t;
    }
    function K(t) {
      if (Array.isArray && Array.isArray(t)) return !0;
      const e = Object.prototype.toString.call(t);
      return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
    }
    function U(t) {
      return (
        null !== t && '[object Object]' === Object.prototype.toString.call(t)
      );
    }
    function $(t) {
      return ('number' == typeof t || t instanceof Number) && isFinite(+t);
    }
    function Y(t, e) {
      return $(t) ? t : e;
    }
    function q(t, e) {
      return void 0 === t ? e : t;
    }
    const X = (t, e) =>
      'string' == typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t;
    function G(t, e, i) {
      if (t && 'function' == typeof t.call) return t.apply(i, e);
    }
    function J(t, e, i, n) {
      let s, o, r;
      if (K(t))
        if (((o = t.length), n))
          for (s = o - 1; s >= 0; s--) e.call(i, t[s], s);
        else for (s = 0; s < o; s++) e.call(i, t[s], s);
      else if (U(t))
        for (r = Object.keys(t), o = r.length, s = 0; s < o; s++)
          e.call(i, t[r[s]], r[s]);
    }
    function Z(t, e) {
      let i, n, s, o;
      if (!t || !e || t.length !== e.length) return !1;
      for (i = 0, n = t.length; i < n; ++i)
        if (
          ((s = t[i]),
          (o = e[i]),
          s.datasetIndex !== o.datasetIndex || s.index !== o.index)
        )
          return !1;
      return !0;
    }
    function Q(t) {
      if (K(t)) return t.map(Q);
      if (U(t)) {
        const e = Object.create(null),
          i = Object.keys(t),
          n = i.length;
        let s = 0;
        for (; s < n; ++s) e[i[s]] = Q(t[i[s]]);
        return e;
      }
      return t;
    }
    function tt(t) {
      return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
    }
    function et(t, e, i, n) {
      if (!tt(t)) return;
      const s = e[t],
        o = i[t];
      U(s) && U(o) ? it(s, o, n) : (e[t] = Q(o));
    }
    function it(t, e, i) {
      const n = K(e) ? e : [e],
        s = n.length;
      if (!U(t)) return t;
      const o = (i = i || {}).merger || et;
      let r;
      for (let e = 0; e < s; ++e) {
        if (((r = n[e]), !U(r))) continue;
        const s = Object.keys(r);
        for (let e = 0, n = s.length; e < n; ++e) o(s[e], t, r, i);
      }
      return t;
    }
    function nt(t, e) {
      return it(t, e, { merger: st });
    }
    function st(t, e, i) {
      if (!tt(t)) return;
      const n = e[t],
        s = i[t];
      U(n) && U(s)
        ? nt(n, s)
        : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Q(s));
    }
    const ot = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
    function rt(t, e) {
      const i =
        ot[e] ||
        (ot[e] = (function (t) {
          const e = (function (t) {
            const e = t.split('.'),
              i = [];
            let n = '';
            for (const t of e)
              (n += t),
                n.endsWith('\\')
                  ? (n = n.slice(0, -1) + '.')
                  : (i.push(n), (n = ''));
            return i;
          })(t);
          return (t) => {
            for (const i of e) {
              if ('' === i) break;
              t = t && t[i];
            }
            return t;
          };
        })(e));
      return i(t);
    }
    function at(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
    const lt = (t) => void 0 !== t,
      ct = (t) => 'function' == typeof t,
      ht = (t, e) => {
        if (t.size !== e.size) return !1;
        for (const i of t) if (!e.has(i)) return !1;
        return !0;
      },
      ut = Math.PI,
      dt = 2 * ut,
      ft = dt + ut,
      pt = Number.POSITIVE_INFINITY,
      gt = ut / 180,
      mt = ut / 2,
      bt = ut / 4,
      xt = (2 * ut) / 3,
      vt = Math.log10,
      _t = Math.sign;
    function yt(t, e, i) {
      return Math.abs(t - e) < i;
    }
    function kt(t) {
      const e = Math.round(t);
      t = yt(t, e, t / 1e3) ? e : t;
      const i = Math.pow(10, Math.floor(vt(t))),
        n = t / i;
      return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
    }
    function wt(t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }
    function St(t, e, i) {
      let n, s, o;
      for (n = 0, s = t.length; n < s; n++)
        (o = t[n][i]),
          isNaN(o) ||
            ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
    }
    function Et(t) {
      return t * (ut / 180);
    }
    function Ot(t) {
      return t * (180 / ut);
    }
    function Mt(t) {
      if (!$(t)) return;
      let e = 1,
        i = 0;
      for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
      return i;
    }
    function Lt(t, e) {
      const i = e.x - t.x,
        n = e.y - t.y,
        s = Math.sqrt(i * i + n * n);
      let o = Math.atan2(n, i);
      return o < -0.5 * ut && (o += dt), { angle: o, distance: s };
    }
    function Tt(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }
    function At(t, e) {
      return ((t - e + ft) % dt) - ut;
    }
    function Ct(t) {
      return ((t % dt) + dt) % dt;
    }
    function Pt(t, e, i, n) {
      const s = Ct(t),
        o = Ct(e),
        r = Ct(i),
        a = Ct(o - s),
        l = Ct(r - s),
        c = Ct(s - o),
        h = Ct(s - r);
      return s === o || s === r || (n && o === r) || (a > l && c < h);
    }
    function Dt(t, e, i) {
      return Math.max(e, Math.min(i, t));
    }
    function Rt(t, e, i, n = 1e-6) {
      return t >= Math.min(e, i) - n && t <= Math.max(e, i) + n;
    }
    function Nt(t, e, i) {
      i = i || ((i) => t[i] < e);
      let n,
        s = t.length - 1,
        o = 0;
      for (; s - o > 1; ) (n = (o + s) >> 1), i(n) ? (o = n) : (s = n);
      return { lo: o, hi: s };
    }
    const Ft = (t, e, i, n) =>
        Nt(
          t,
          i,
          n
            ? (n) => {
                const s = t[n][e];
                return s < i || (s === i && t[n + 1][e] === i);
              }
            : (n) => t[n][e] < i
        ),
      It = (t, e, i) => Nt(t, i, (n) => t[n][e] >= i),
      Bt = ['push', 'pop', 'shift', 'splice', 'unshift'];
    function jt(t, e) {
      const i = t._chartjs;
      if (!i) return;
      const n = i.listeners,
        s = n.indexOf(e);
      -1 !== s && n.splice(s, 1),
        n.length > 0 ||
          (Bt.forEach((e) => {
            delete t[e];
          }),
          delete t._chartjs);
    }
    function Vt(t) {
      const e = new Set();
      let i, n;
      for (i = 0, n = t.length; i < n; ++i) e.add(t[i]);
      return e.size === n ? t : Array.from(e);
    }
    const zt =
      'undefined' == typeof window
        ? function (t) {
            return t();
          }
        : window.requestAnimationFrame;
    function Wt(t, e) {
      let i = [],
        n = !1;
      return function (...s) {
        (i = s),
          n ||
            ((n = !0),
            zt.call(window, () => {
              (n = !1), t.apply(e, i);
            }));
      };
    }
    const Ht = (t) =>
        'start' === t ? 'left' : 'end' === t ? 'right' : 'center',
      Kt = (t, e, i) => ('start' === t ? e : 'end' === t ? i : (e + i) / 2);
    function Ut(t, e, i) {
      const n = e.length;
      let s = 0,
        o = n;
      if (t._sorted) {
        const { iScale: r, _parsed: a } = t,
          l = r.axis,
          { min: c, max: h, minDefined: u, maxDefined: d } = r.getUserBounds();
        u &&
          (s = Dt(
            Math.min(
              Ft(a, r.axis, c).lo,
              i ? n : Ft(e, l, r.getPixelForValue(c)).lo
            ),
            0,
            n - 1
          )),
          (o = d
            ? Dt(
                Math.max(
                  Ft(a, r.axis, h, !0).hi + 1,
                  i ? 0 : Ft(e, l, r.getPixelForValue(h), !0).hi + 1
                ),
                s,
                n
              ) - s
            : n - s);
      }
      return { start: s, count: o };
    }
    function $t(t) {
      const { xScale: e, yScale: i, _scaleRanges: n } = t,
        s = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
      if (!n) return (t._scaleRanges = s), !0;
      const o =
        n.xmin !== e.min ||
        n.xmax !== e.max ||
        n.ymin !== i.min ||
        n.ymax !== i.max;
      return Object.assign(n, s), o;
    }
    const Yt = (t) => 0 === t || 1 === t,
      qt = (t, e, i) =>
        -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * dt) / i),
      Xt = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * dt) / i) + 1,
      Gt = {
        linear: (t) => t,
        easeInQuad: (t) => t * t,
        easeOutQuad: (t) => -t * (t - 2),
        easeInOutQuad: (t) =>
          (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
        easeInCubic: (t) => t * t * t,
        easeOutCubic: (t) => (t -= 1) * t * t + 1,
        easeInOutCubic: (t) =>
          (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
        easeInQuart: (t) => t * t * t * t,
        easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
        easeInOutQuart: (t) =>
          (t /= 0.5) < 1
            ? 0.5 * t * t * t * t
            : -0.5 * ((t -= 2) * t * t * t - 2),
        easeInQuint: (t) => t * t * t * t * t,
        easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
        easeInOutQuint: (t) =>
          (t /= 0.5) < 1
            ? 0.5 * t * t * t * t * t
            : 0.5 * ((t -= 2) * t * t * t * t + 2),
        easeInSine: (t) => 1 - Math.cos(t * mt),
        easeOutSine: (t) => Math.sin(t * mt),
        easeInOutSine: (t) => -0.5 * (Math.cos(ut * t) - 1),
        easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
        easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
        easeInOutExpo: (t) =>
          Yt(t)
            ? t
            : t < 0.5
            ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
            : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
        easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
        easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
        easeInOutCirc: (t) =>
          (t /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - t * t) - 1)
            : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
        easeInElastic: (t) => (Yt(t) ? t : qt(t, 0.075, 0.3)),
        easeOutElastic: (t) => (Yt(t) ? t : Xt(t, 0.075, 0.3)),
        easeInOutElastic(t) {
          const e = 0.1125;
          return Yt(t)
            ? t
            : t < 0.5
            ? 0.5 * qt(2 * t, e, 0.45)
            : 0.5 + 0.5 * Xt(2 * t - 1, e, 0.45);
        },
        easeInBack(t) {
          const e = 1.70158;
          return t * t * ((e + 1) * t - e);
        },
        easeOutBack(t) {
          const e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1;
        },
        easeInOutBack(t) {
          let e = 1.70158;
          return (t /= 0.5) < 1
            ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
            : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: (t) => 1 - Gt.easeOutBounce(1 - t),
        easeOutBounce(t) {
          const e = 7.5625,
            i = 2.75;
          return t < 1 / i
            ? e * t * t
            : t < 2 / i
            ? e * (t -= 1.5 / i) * t + 0.75
            : t < 2.5 / i
            ? e * (t -= 2.25 / i) * t + 0.9375
            : e * (t -= 2.625 / i) * t + 0.984375;
        },
        easeInOutBounce: (t) =>
          t < 0.5
            ? 0.5 * Gt.easeInBounce(2 * t)
            : 0.5 * Gt.easeOutBounce(2 * t - 1) + 0.5,
      };
    function Jt(t) {
      if (t && 'object' == typeof t) {
        const e = t.toString();
        return (
          '[object CanvasPattern]' === e || '[object CanvasGradient]' === e
        );
      }
      return !1;
    }
    function Zt(t) {
      return Jt(t) ? t : new V(t);
    }
    function Qt(t) {
      return Jt(t) ? t : new V(t).saturate(0.5).darken(0.1).hexString();
    }
    const te = ['x', 'y', 'borderWidth', 'radius', 'tension'],
      ee = ['color', 'borderColor', 'backgroundColor'],
      ie = new Map();
    function ne(t, e, i) {
      return (function (t, e) {
        e = e || {};
        const i = t + JSON.stringify(e);
        let n = ie.get(i);
        return n || ((n = new Intl.NumberFormat(t, e)), ie.set(i, n)), n;
      })(e, i).format(t);
    }
    const se = {
      values: (t) => (K(t) ? t : '' + t),
      numeric(t, e, i) {
        if (0 === t) return '0';
        const n = this.chart.options.locale;
        let s,
          o = t;
        if (i.length > 1) {
          const e = Math.max(
            Math.abs(i[0].value),
            Math.abs(i[i.length - 1].value)
          );
          (e < 1e-4 || e > 1e15) && (s = 'scientific'),
            (o = (function (t, e) {
              let i =
                e.length > 3
                  ? e[2].value - e[1].value
                  : e[1].value - e[0].value;
              return (
                Math.abs(i) >= 1 &&
                  t !== Math.floor(t) &&
                  (i = t - Math.floor(t)),
                i
              );
            })(t, i));
        }
        const r = vt(Math.abs(o)),
          a = Math.max(Math.min(-1 * Math.floor(r), 20), 0),
          l = {
            notation: s,
            minimumFractionDigits: a,
            maximumFractionDigits: a,
          };
        return Object.assign(l, this.options.ticks.format), ne(t, n, l);
      },
      logarithmic(t, e, i) {
        if (0 === t) return '0';
        const n = i[e].significand || t / Math.pow(10, Math.floor(vt(t)));
        return [1, 2, 3, 5, 10, 15].includes(n) || e > 0.8 * i.length
          ? se.numeric.call(this, t, e, i)
          : '';
      },
    };
    var oe = { formatters: se };
    const re = Object.create(null),
      ae = Object.create(null);
    function le(t, e) {
      if (!e) return t;
      const i = e.split('.');
      for (let e = 0, n = i.length; e < n; ++e) {
        const n = i[e];
        t = t[n] || (t[n] = Object.create(null));
      }
      return t;
    }
    function ce(t, e, i) {
      return 'string' == typeof e ? it(le(t, e), i) : it(le(t, ''), e);
    }
    class he {
      constructor(t, e) {
        (this.animation = void 0),
          (this.backgroundColor = 'rgba(0,0,0,0.1)'),
          (this.borderColor = 'rgba(0,0,0,0.1)'),
          (this.color = '#666'),
          (this.datasets = {}),
          (this.devicePixelRatio = (t) =>
            t.chart.platform.getDevicePixelRatio()),
          (this.elements = {}),
          (this.events = [
            'mousemove',
            'mouseout',
            'click',
            'touchstart',
            'touchmove',
          ]),
          (this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: 'normal',
            lineHeight: 1.2,
            weight: null,
          }),
          (this.hover = {}),
          (this.hoverBackgroundColor = (t, e) => Qt(e.backgroundColor)),
          (this.hoverBorderColor = (t, e) => Qt(e.borderColor)),
          (this.hoverColor = (t, e) => Qt(e.color)),
          (this.indexAxis = 'x'),
          (this.interaction = {
            mode: 'nearest',
            intersect: !0,
            includeInvisible: !1,
          }),
          (this.maintainAspectRatio = !0),
          (this.onHover = null),
          (this.onClick = null),
          (this.parsing = !0),
          (this.plugins = {}),
          (this.responsive = !0),
          (this.scale = void 0),
          (this.scales = {}),
          (this.showLine = !0),
          (this.drawActiveElementsOnTop = !0),
          this.describe(t),
          this.apply(e);
      }
      set(t, e) {
        return ce(this, t, e);
      }
      get(t) {
        return le(this, t);
      }
      describe(t, e) {
        return ce(ae, t, e);
      }
      override(t, e) {
        return ce(re, t, e);
      }
      route(t, e, i, n) {
        const s = le(this, t),
          o = le(this, i),
          r = '_' + e;
        Object.defineProperties(s, {
          [r]: { value: s[e], writable: !0 },
          [e]: {
            enumerable: !0,
            get() {
              const t = this[r],
                e = o[n];
              return U(t) ? Object.assign({}, e, t) : q(t, e);
            },
            set(t) {
              this[r] = t;
            },
          },
        });
      }
      apply(t) {
        t.forEach((t) => t(this));
      }
    }
    var ue = new he(
      {
        _scriptable: (t) => !t.startsWith('on'),
        _indexable: (t) => 'events' !== t,
        hover: { _fallback: 'interaction' },
        interaction: { _scriptable: !1, _indexable: !1 },
      },
      [
        function (t) {
          t.set('animation', {
            delay: void 0,
            duration: 1e3,
            easing: 'easeOutQuart',
            fn: void 0,
            from: void 0,
            loop: void 0,
            to: void 0,
            type: void 0,
          }),
            t.describe('animation', {
              _fallback: !1,
              _indexable: !1,
              _scriptable: (t) =>
                'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
            }),
            t.set('animations', {
              colors: { type: 'color', properties: ee },
              numbers: { type: 'number', properties: te },
            }),
            t.describe('animations', { _fallback: 'animation' }),
            t.set('transitions', {
              active: { animation: { duration: 400 } },
              resize: { animation: { duration: 0 } },
              show: {
                animations: {
                  colors: { from: 'transparent' },
                  visible: { type: 'boolean', duration: 0 },
                },
              },
              hide: {
                animations: {
                  colors: { to: 'transparent' },
                  visible: {
                    type: 'boolean',
                    easing: 'linear',
                    fn: (t) => 0 | t,
                  },
                },
              },
            });
        },
        function (t) {
          t.set('layout', {
            autoPadding: !0,
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
          });
        },
        function (t) {
          t.set('scale', {
            display: !0,
            offset: !1,
            reverse: !1,
            beginAtZero: !1,
            bounds: 'ticks',
            grace: 0,
            grid: {
              display: !0,
              lineWidth: 1,
              drawOnChartArea: !0,
              drawTicks: !0,
              tickLength: 8,
              tickWidth: (t, e) => e.lineWidth,
              tickColor: (t, e) => e.color,
              offset: !1,
            },
            border: { display: !0, dash: [], dashOffset: 0, width: 1 },
            title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
            ticks: {
              minRotation: 0,
              maxRotation: 50,
              mirror: !1,
              textStrokeWidth: 0,
              textStrokeColor: '',
              padding: 3,
              display: !0,
              autoSkip: !0,
              autoSkipPadding: 3,
              labelOffset: 0,
              callback: oe.formatters.values,
              minor: {},
              major: {},
              align: 'center',
              crossAlign: 'near',
              showLabelBackdrop: !1,
              backdropColor: 'rgba(255, 255, 255, 0.75)',
              backdropPadding: 2,
            },
          }),
            t.route('scale.ticks', 'color', '', 'color'),
            t.route('scale.grid', 'color', '', 'borderColor'),
            t.route('scale.border', 'color', '', 'borderColor'),
            t.route('scale.title', 'color', '', 'color'),
            t.describe('scale', {
              _fallback: !1,
              _scriptable: (t) =>
                !t.startsWith('before') &&
                !t.startsWith('after') &&
                'callback' !== t &&
                'parser' !== t,
              _indexable: (t) =>
                'borderDash' !== t && 'tickBorderDash' !== t && 'dash' !== t,
            }),
            t.describe('scales', { _fallback: 'scale' }),
            t.describe('scale.ticks', {
              _scriptable: (t) => 'backdropPadding' !== t && 'callback' !== t,
              _indexable: (t) => 'backdropPadding' !== t,
            });
        },
      ]
    );
    function de(t, e, i, n, s) {
      let o = e[s];
      return (
        o || ((o = e[s] = t.measureText(s).width), i.push(s)),
        o > n && (n = o),
        n
      );
    }
    function fe(t, e, i, n) {
      let s = ((n = n || {}).data = n.data || {}),
        o = (n.garbageCollect = n.garbageCollect || []);
      n.font !== e &&
        ((s = n.data = {}), (o = n.garbageCollect = []), (n.font = e)),
        t.save(),
        (t.font = e);
      let r = 0;
      const a = i.length;
      let l, c, h, u, d;
      for (l = 0; l < a; l++)
        if (((u = i[l]), null != u && !0 !== K(u))) r = de(t, s, o, r, u);
        else if (K(u))
          for (c = 0, h = u.length; c < h; c++)
            (d = u[c]), null == d || K(d) || (r = de(t, s, o, r, d));
      t.restore();
      const f = o.length / 2;
      if (f > i.length) {
        for (l = 0; l < f; l++) delete s[o[l]];
        o.splice(0, f);
      }
      return r;
    }
    function pe(t, e, i) {
      const n = t.currentDevicePixelRatio,
        s = 0 !== i ? Math.max(i / 2, 0.5) : 0;
      return Math.round((e - s) * n) / n + s;
    }
    function ge(t, e) {
      (e = e || t.getContext('2d')).save(),
        e.resetTransform(),
        e.clearRect(0, 0, t.width, t.height),
        e.restore();
    }
    function me(t, e, i, n) {
      be(t, e, i, n, null);
    }
    function be(t, e, i, n, s) {
      let o, r, a, l, c, h, u, d;
      const f = e.pointStyle,
        p = e.rotation,
        g = e.radius;
      let m = (p || 0) * gt;
      if (
        f &&
        'object' == typeof f &&
        ((o = f.toString()),
        '[object HTMLImageElement]' === o || '[object HTMLCanvasElement]' === o)
      )
        return (
          t.save(),
          t.translate(i, n),
          t.rotate(m),
          t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
          void t.restore()
        );
      if (!(isNaN(g) || g <= 0)) {
        switch ((t.beginPath(), f)) {
          default:
            s ? t.ellipse(i, n, s / 2, g, 0, 0, dt) : t.arc(i, n, g, 0, dt),
              t.closePath();
            break;
          case 'triangle':
            (h = s ? s / 2 : g),
              t.moveTo(i + Math.sin(m) * h, n - Math.cos(m) * g),
              (m += xt),
              t.lineTo(i + Math.sin(m) * h, n - Math.cos(m) * g),
              (m += xt),
              t.lineTo(i + Math.sin(m) * h, n - Math.cos(m) * g),
              t.closePath();
            break;
          case 'rectRounded':
            (c = 0.516 * g),
              (l = g - c),
              (r = Math.cos(m + bt) * l),
              (u = Math.cos(m + bt) * (s ? s / 2 - c : l)),
              (a = Math.sin(m + bt) * l),
              (d = Math.sin(m + bt) * (s ? s / 2 - c : l)),
              t.arc(i - u, n - a, c, m - ut, m - mt),
              t.arc(i + d, n - r, c, m - mt, m),
              t.arc(i + u, n + a, c, m, m + mt),
              t.arc(i - d, n + r, c, m + mt, m + ut),
              t.closePath();
            break;
          case 'rect':
            if (!p) {
              (l = Math.SQRT1_2 * g),
                (h = s ? s / 2 : l),
                t.rect(i - h, n - l, 2 * h, 2 * l);
              break;
            }
            m += bt;
          case 'rectRot':
            (u = Math.cos(m) * (s ? s / 2 : g)),
              (r = Math.cos(m) * g),
              (a = Math.sin(m) * g),
              (d = Math.sin(m) * (s ? s / 2 : g)),
              t.moveTo(i - u, n - a),
              t.lineTo(i + d, n - r),
              t.lineTo(i + u, n + a),
              t.lineTo(i - d, n + r),
              t.closePath();
            break;
          case 'crossRot':
            m += bt;
          case 'cross':
            (u = Math.cos(m) * (s ? s / 2 : g)),
              (r = Math.cos(m) * g),
              (a = Math.sin(m) * g),
              (d = Math.sin(m) * (s ? s / 2 : g)),
              t.moveTo(i - u, n - a),
              t.lineTo(i + u, n + a),
              t.moveTo(i + d, n - r),
              t.lineTo(i - d, n + r);
            break;
          case 'star':
            (u = Math.cos(m) * (s ? s / 2 : g)),
              (r = Math.cos(m) * g),
              (a = Math.sin(m) * g),
              (d = Math.sin(m) * (s ? s / 2 : g)),
              t.moveTo(i - u, n - a),
              t.lineTo(i + u, n + a),
              t.moveTo(i + d, n - r),
              t.lineTo(i - d, n + r),
              (m += bt),
              (u = Math.cos(m) * (s ? s / 2 : g)),
              (r = Math.cos(m) * g),
              (a = Math.sin(m) * g),
              (d = Math.sin(m) * (s ? s / 2 : g)),
              t.moveTo(i - u, n - a),
              t.lineTo(i + u, n + a),
              t.moveTo(i + d, n - r),
              t.lineTo(i - d, n + r);
            break;
          case 'line':
            (r = s ? s / 2 : Math.cos(m) * g),
              (a = Math.sin(m) * g),
              t.moveTo(i - r, n - a),
              t.lineTo(i + r, n + a);
            break;
          case 'dash':
            t.moveTo(i, n),
              t.lineTo(i + Math.cos(m) * (s ? s / 2 : g), n + Math.sin(m) * g);
            break;
          case !1:
            t.closePath();
        }
        t.fill(), e.borderWidth > 0 && t.stroke();
      }
    }
    function xe(t, e, i) {
      return (
        (i = i || 0.5),
        !e ||
          (t &&
            t.x > e.left - i &&
            t.x < e.right + i &&
            t.y > e.top - i &&
            t.y < e.bottom + i)
      );
    }
    function ve(t, e) {
      t.save(),
        t.beginPath(),
        t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
        t.clip();
    }
    function _e(t) {
      t.restore();
    }
    function ye(t, e, i, n, s) {
      if (!e) return t.lineTo(i.x, i.y);
      if ('middle' === s) {
        const n = (e.x + i.x) / 2;
        t.lineTo(n, e.y), t.lineTo(n, i.y);
      } else ('after' === s) != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
      t.lineTo(i.x, i.y);
    }
    function ke(t, e, i, n) {
      if (!e) return t.lineTo(i.x, i.y);
      t.bezierCurveTo(
        n ? e.cp1x : e.cp2x,
        n ? e.cp1y : e.cp2y,
        n ? i.cp2x : i.cp1x,
        n ? i.cp2y : i.cp1y,
        i.x,
        i.y
      );
    }
    function we(t, e, i, n, s, o = {}) {
      const r = K(e) ? e : [e],
        a = o.strokeWidth > 0 && '' !== o.strokeColor;
      let l, c;
      for (
        t.save(),
          t.font = s.string,
          (function (t, e) {
            e.translation && t.translate(e.translation[0], e.translation[1]),
              H(e.rotation) || t.rotate(e.rotation),
              e.color && (t.fillStyle = e.color),
              e.textAlign && (t.textAlign = e.textAlign),
              e.textBaseline && (t.textBaseline = e.textBaseline);
          })(t, o),
          l = 0;
        l < r.length;
        ++l
      )
        (c = r[l]),
          o.backdrop && Ee(t, o.backdrop),
          a &&
            (o.strokeColor && (t.strokeStyle = o.strokeColor),
            H(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
            t.strokeText(c, i, n, o.maxWidth)),
          t.fillText(c, i, n, o.maxWidth),
          Se(t, i, n, c, o),
          (n += s.lineHeight);
      t.restore();
    }
    function Se(t, e, i, n, s) {
      if (s.strikethrough || s.underline) {
        const o = t.measureText(n),
          r = e - o.actualBoundingBoxLeft,
          a = e + o.actualBoundingBoxRight,
          l = i - o.actualBoundingBoxAscent,
          c = i + o.actualBoundingBoxDescent,
          h = s.strikethrough ? (l + c) / 2 : c;
        (t.strokeStyle = t.fillStyle),
          t.beginPath(),
          (t.lineWidth = s.decorationWidth || 2),
          t.moveTo(r, h),
          t.lineTo(a, h),
          t.stroke();
      }
    }
    function Ee(t, e) {
      const i = t.fillStyle;
      (t.fillStyle = e.color),
        t.fillRect(e.left, e.top, e.width, e.height),
        (t.fillStyle = i);
    }
    function Oe(t, e) {
      const { x: i, y: n, w: s, h: o, radius: r } = e;
      t.arc(i + r.topLeft, n + r.topLeft, r.topLeft, -mt, ut, !0),
        t.lineTo(i, n + o - r.bottomLeft),
        t.arc(i + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, ut, mt, !0),
        t.lineTo(i + s - r.bottomRight, n + o),
        t.arc(
          i + s - r.bottomRight,
          n + o - r.bottomRight,
          r.bottomRight,
          mt,
          0,
          !0
        ),
        t.lineTo(i + s, n + r.topRight),
        t.arc(i + s - r.topRight, n + r.topRight, r.topRight, 0, -mt, !0),
        t.lineTo(i + r.topLeft, n);
    }
    const Me = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
      Le =
        /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
    function Te(t, e) {
      const i = ('' + t).match(Me);
      if (!i || 'normal' === i[1]) return 1.2 * e;
      switch (((t = +i[2]), i[3])) {
        case 'px':
          return t;
        case '%':
          t /= 100;
      }
      return e * t;
    }
    const Ae = (t) => +t || 0;
    function Ce(t, e) {
      const i = {},
        n = U(e),
        s = n ? Object.keys(e) : e,
        o = U(t) ? (n ? (i) => q(t[i], t[e[i]]) : (e) => t[e]) : () => t;
      for (const t of s) i[t] = Ae(o(t));
      return i;
    }
    function Pe(t) {
      return Ce(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
    }
    function De(t) {
      return Ce(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
    }
    function Re(t) {
      const e = Pe(t);
      return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
    }
    function Ne(t, e) {
      (t = t || {}), (e = e || ue.font);
      let i = q(t.size, e.size);
      'string' == typeof i && (i = parseInt(i, 10));
      let n = q(t.style, e.style);
      n &&
        !('' + n).match(Le) &&
        (console.warn('Invalid font style specified: "' + n + '"'),
        (n = void 0));
      const s = {
        family: q(t.family, e.family),
        lineHeight: Te(q(t.lineHeight, e.lineHeight), i),
        size: i,
        style: n,
        weight: q(t.weight, e.weight),
        string: '',
      };
      return (
        (s.string = (function (t) {
          return !t || H(t.size) || H(t.family)
            ? null
            : (t.style ? t.style + ' ' : '') +
                (t.weight ? t.weight + ' ' : '') +
                t.size +
                'px ' +
                t.family;
        })(s)),
        s
      );
    }
    function Fe(t, e, i, n) {
      let s,
        o,
        r,
        a = !0;
      for (s = 0, o = t.length; s < o; ++s)
        if (
          ((r = t[s]),
          void 0 !== r &&
            (void 0 !== e && 'function' == typeof r && ((r = r(e)), (a = !1)),
            void 0 !== i && K(r) && ((r = r[i % r.length]), (a = !1)),
            void 0 !== r))
        )
          return n && !a && (n.cacheable = !1), r;
    }
    function Ie(t, e) {
      return Object.assign(Object.create(t), e);
    }
    function Be(t, e = [''], i = t, n, s = () => t[0]) {
      lt(n) || (n = Xe('_fallback', t));
      const o = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: !0,
        _scopes: t,
        _rootScopes: i,
        _fallback: n,
        _getTarget: s,
        override: (s) => Be([s, ...t], e, i, n),
      };
      return new Proxy(o, {
        deleteProperty: (e, i) => (
          delete e[i], delete e._keys, delete t[0][i], !0
        ),
        get: (i, n) =>
          He(i, n, () =>
            (function (t, e, i, n) {
              let s;
              for (const o of e)
                if (((s = Xe(ze(o, t), i)), lt(s)))
                  return We(t, s) ? Ye(i, n, t, s) : s;
            })(n, e, t, i)
          ),
        getOwnPropertyDescriptor: (t, e) =>
          Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
        getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
        has: (t, e) => Ge(t).includes(e),
        ownKeys: (t) => Ge(t),
        set(t, e, i) {
          const n = t._storage || (t._storage = s());
          return (t[e] = n[e] = i), delete t._keys, !0;
        },
      });
    }
    function je(t, e, i, n) {
      const s = {
        _cacheable: !1,
        _proxy: t,
        _context: e,
        _subProxy: i,
        _stack: new Set(),
        _descriptors: Ve(t, n),
        setContext: (e) => je(t, e, i, n),
        override: (s) => je(t.override(s), e, i, n),
      };
      return new Proxy(s, {
        deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
        get: (t, e, i) =>
          He(t, e, () =>
            (function (t, e, i) {
              const {
                _proxy: n,
                _context: s,
                _subProxy: o,
                _descriptors: r,
              } = t;
              let a = n[e];
              return (
                ct(a) &&
                  r.isScriptable(e) &&
                  (a = (function (t, e, i, n) {
                    const {
                      _proxy: s,
                      _context: o,
                      _subProxy: r,
                      _stack: a,
                    } = i;
                    if (a.has(t))
                      throw new Error(
                        'Recursion detected: ' +
                          Array.from(a).join('->') +
                          '->' +
                          t
                      );
                    return (
                      a.add(t),
                      (e = e(o, r || n)),
                      a.delete(t),
                      We(t, e) && (e = Ye(s._scopes, s, t, e)),
                      e
                    );
                  })(e, a, t, i)),
                K(a) &&
                  a.length &&
                  (a = (function (t, e, i, n) {
                    const {
                      _proxy: s,
                      _context: o,
                      _subProxy: r,
                      _descriptors: a,
                    } = i;
                    if (lt(o.index) && n(t)) e = e[o.index % e.length];
                    else if (U(e[0])) {
                      const i = e,
                        n = s._scopes.filter((t) => t !== i);
                      e = [];
                      for (const l of i) {
                        const i = Ye(n, s, t, l);
                        e.push(je(i, o, r && r[t], a));
                      }
                    }
                    return e;
                  })(e, a, t, r.isIndexable)),
                We(e, a) && (a = je(a, s, o && o[e], r)),
                a
              );
            })(t, e, i)
          ),
        getOwnPropertyDescriptor: (e, i) =>
          e._descriptors.allKeys
            ? Reflect.has(t, i)
              ? { enumerable: !0, configurable: !0 }
              : void 0
            : Reflect.getOwnPropertyDescriptor(t, i),
        getPrototypeOf: () => Reflect.getPrototypeOf(t),
        has: (e, i) => Reflect.has(t, i),
        ownKeys: () => Reflect.ownKeys(t),
        set: (e, i, n) => ((t[i] = n), delete e[i], !0),
      });
    }
    function Ve(t, e = { scriptable: !0, indexable: !0 }) {
      const {
        _scriptable: i = e.scriptable,
        _indexable: n = e.indexable,
        _allKeys: s = e.allKeys,
      } = t;
      return {
        allKeys: s,
        scriptable: i,
        indexable: n,
        isScriptable: ct(i) ? i : () => i,
        isIndexable: ct(n) ? n : () => n,
      };
    }
    const ze = (t, e) => (t ? t + at(e) : e),
      We = (t, e) =>
        U(e) &&
        'adapters' !== t &&
        (null === Object.getPrototypeOf(e) || e.constructor === Object);
    function He(t, e, i) {
      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
      const n = i();
      return (t[e] = n), n;
    }
    function Ke(t, e, i) {
      return ct(t) ? t(e, i) : t;
    }
    const Ue = (t, e) =>
      !0 === t ? e : 'string' == typeof t ? rt(e, t) : void 0;
    function $e(t, e, i, n, s) {
      for (const o of e) {
        const e = Ue(i, o);
        if (e) {
          t.add(e);
          const o = Ke(e._fallback, i, s);
          if (lt(o) && o !== i && o !== n) return o;
        } else if (!1 === e && lt(n) && i !== n) return null;
      }
      return !1;
    }
    function Ye(t, e, i, n) {
      const s = e._rootScopes,
        o = Ke(e._fallback, i, n),
        r = [...t, ...s],
        a = new Set();
      a.add(n);
      let l = qe(a, r, i, o || i, n);
      return (
        null !== l &&
        (!lt(o) || o === i || ((l = qe(a, r, o, l, n)), null !== l)) &&
        Be(Array.from(a), [''], s, o, () =>
          (function (t, e, i) {
            const n = t._getTarget();
            e in n || (n[e] = {});
            const s = n[e];
            return K(s) && U(i) ? i : s || {};
          })(e, i, n)
        )
      );
    }
    function qe(t, e, i, n, s) {
      for (; i; ) i = $e(t, e, i, n, s);
      return i;
    }
    function Xe(t, e) {
      for (const i of e) {
        if (!i) continue;
        const e = i[t];
        if (lt(e)) return e;
      }
    }
    function Ge(t) {
      let e = t._keys;
      return (
        e ||
          (e = t._keys =
            (function (t) {
              const e = new Set();
              for (const i of t)
                for (const t of Object.keys(i).filter(
                  (t) => !t.startsWith('_')
                ))
                  e.add(t);
              return Array.from(e);
            })(t._scopes)),
        e
      );
    }
    function Je(t, e, i, n) {
      const { iScale: s } = t,
        { key: o = 'r' } = this._parsing,
        r = new Array(n);
      let a, l, c, h;
      for (a = 0, l = n; a < l; ++a)
        (c = a + i), (h = e[c]), (r[a] = { r: s.parse(rt(h, o), c) });
      return r;
    }
    const Ze = Number.EPSILON || 1e-14,
      Qe = (t, e) => e < t.length && !t[e].skip && t[e],
      ti = (t) => ('x' === t ? 'y' : 'x');
    function ei(t, e, i, n) {
      const s = t.skip ? e : t,
        o = e,
        r = i.skip ? e : i,
        a = Tt(o, s),
        l = Tt(r, o);
      let c = a / (a + l),
        h = l / (a + l);
      (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
      const u = n * c,
        d = n * h;
      return {
        previous: { x: o.x - u * (r.x - s.x), y: o.y - u * (r.y - s.y) },
        next: { x: o.x + d * (r.x - s.x), y: o.y + d * (r.y - s.y) },
      };
    }
    function ii(t, e, i) {
      return Math.max(Math.min(t, i), e);
    }
    function ni(t, e, i, n, s) {
      let o, r, a, l;
      if (
        (e.spanGaps && (t = t.filter((t) => !t.skip)),
        'monotone' === e.cubicInterpolationMode)
      )
        !(function (t, e = 'x') {
          const i = ti(e),
            n = t.length,
            s = Array(n).fill(0),
            o = Array(n);
          let r,
            a,
            l,
            c = Qe(t, 0);
          for (r = 0; r < n; ++r)
            if (((a = l), (l = c), (c = Qe(t, r + 1)), l)) {
              if (c) {
                const t = c[e] - l[e];
                s[r] = 0 !== t ? (c[i] - l[i]) / t : 0;
              }
              o[r] = a
                ? c
                  ? _t(s[r - 1]) !== _t(s[r])
                    ? 0
                    : (s[r - 1] + s[r]) / 2
                  : s[r - 1]
                : s[r];
            }
          !(function (t, e, i) {
            const n = t.length;
            let s,
              o,
              r,
              a,
              l,
              c = Qe(t, 0);
            for (let h = 0; h < n - 1; ++h)
              (l = c),
                (c = Qe(t, h + 1)),
                l &&
                  c &&
                  (yt(e[h], 0, Ze)
                    ? (i[h] = i[h + 1] = 0)
                    : ((s = i[h] / e[h]),
                      (o = i[h + 1] / e[h]),
                      (a = Math.pow(s, 2) + Math.pow(o, 2)),
                      a <= 9 ||
                        ((r = 3 / Math.sqrt(a)),
                        (i[h] = s * r * e[h]),
                        (i[h + 1] = o * r * e[h]))));
          })(t, s, o),
            (function (t, e, i = 'x') {
              const n = ti(i),
                s = t.length;
              let o,
                r,
                a,
                l = Qe(t, 0);
              for (let c = 0; c < s; ++c) {
                if (((r = a), (a = l), (l = Qe(t, c + 1)), !a)) continue;
                const s = a[i],
                  h = a[n];
                r &&
                  ((o = (s - r[i]) / 3),
                  (a[`cp1${i}`] = s - o),
                  (a[`cp1${n}`] = h - o * e[c])),
                  l &&
                    ((o = (l[i] - s) / 3),
                    (a[`cp2${i}`] = s + o),
                    (a[`cp2${n}`] = h + o * e[c]));
              }
            })(t, o, e);
        })(t, s);
      else {
        let i = n ? t[t.length - 1] : t[0];
        for (o = 0, r = t.length; o < r; ++o)
          (a = t[o]),
            (l = ei(i, a, t[Math.min(o + 1, r - (n ? 0 : 1)) % r], e.tension)),
            (a.cp1x = l.previous.x),
            (a.cp1y = l.previous.y),
            (a.cp2x = l.next.x),
            (a.cp2y = l.next.y),
            (i = a);
      }
      e.capBezierPoints &&
        (function (t, e) {
          let i,
            n,
            s,
            o,
            r,
            a = xe(t[0], e);
          for (i = 0, n = t.length; i < n; ++i)
            (r = o),
              (o = a),
              (a = i < n - 1 && xe(t[i + 1], e)),
              o &&
                ((s = t[i]),
                r &&
                  ((s.cp1x = ii(s.cp1x, e.left, e.right)),
                  (s.cp1y = ii(s.cp1y, e.top, e.bottom))),
                a &&
                  ((s.cp2x = ii(s.cp2x, e.left, e.right)),
                  (s.cp2y = ii(s.cp2y, e.top, e.bottom))));
        })(t, i);
    }
    function si() {
      return 'undefined' != typeof window && 'undefined' != typeof document;
    }
    function oi(t) {
      let e = t.parentNode;
      return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e;
    }
    function ri(t, e, i) {
      let n;
      return (
        'string' == typeof t
          ? ((n = parseInt(t, 10)),
            -1 !== t.indexOf('%') && (n = (n / 100) * e.parentNode[i]))
          : (n = t),
        n
      );
    }
    const ai = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null),
      li = ['top', 'right', 'bottom', 'left'];
    function ci(t, e, i) {
      const n = {};
      i = i ? '-' + i : '';
      for (let s = 0; s < 4; s++) {
        const o = li[s];
        n[o] = parseFloat(t[e + '-' + o + i]) || 0;
      }
      return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
    }
    const hi = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
    function ui(t, e) {
      if ('native' in t) return t;
      const { canvas: i, currentDevicePixelRatio: n } = e,
        s = ai(i),
        o = 'border-box' === s.boxSizing,
        r = ci(s, 'padding'),
        a = ci(s, 'border', 'width'),
        {
          x: l,
          y: c,
          box: h,
        } = (function (t, e) {
          const i = t.touches,
            n = i && i.length ? i[0] : t,
            { offsetX: s, offsetY: o } = n;
          let r,
            a,
            l = !1;
          if (hi(s, o, t.target)) (r = s), (a = o);
          else {
            const t = e.getBoundingClientRect();
            (r = n.clientX - t.left), (a = n.clientY - t.top), (l = !0);
          }
          return { x: r, y: a, box: l };
        })(t, i),
        u = r.left + (h && a.left),
        d = r.top + (h && a.top);
      let { width: f, height: p } = e;
      return (
        o && ((f -= r.width + a.width), (p -= r.height + a.height)),
        {
          x: Math.round((((l - u) / f) * i.width) / n),
          y: Math.round((((c - d) / p) * i.height) / n),
        }
      );
    }
    const di = (t) => Math.round(10 * t) / 10;
    function fi(t, e, i) {
      const n = e || 1,
        s = Math.floor(t.height * n),
        o = Math.floor(t.width * n);
      (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
      const r = t.canvas;
      return (
        r.style &&
          (i || (!r.style.height && !r.style.width)) &&
          ((r.style.height = `${t.height}px`),
          (r.style.width = `${t.width}px`)),
        (t.currentDevicePixelRatio !== n || r.height !== s || r.width !== o) &&
          ((t.currentDevicePixelRatio = n),
          (r.height = s),
          (r.width = o),
          t.ctx.setTransform(n, 0, 0, n, 0, 0),
          !0)
      );
    }
    const pi = (function () {
      let t = !1;
      try {
        const e = {
          get passive() {
            return (t = !0), !1;
          },
        };
        window.addEventListener('test', null, e),
          window.removeEventListener('test', null, e);
      } catch (t) {}
      return t;
    })();
    function gi(t, e) {
      const i = (function (t, e) {
          return ai(t).getPropertyValue(e);
        })(t, e),
        n = i && i.match(/^(\d+)(\.\d+)?px$/);
      return n ? +n[1] : void 0;
    }
    function mi(t, e, i, n) {
      return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
    }
    function bi(t, e, i, n) {
      return {
        x: t.x + i * (e.x - t.x),
        y:
          'middle' === n
            ? i < 0.5
              ? t.y
              : e.y
            : 'after' === n
            ? i < 1
              ? t.y
              : e.y
            : i > 0
            ? e.y
            : t.y,
      };
    }
    function xi(t, e, i, n) {
      const s = { x: t.cp2x, y: t.cp2y },
        o = { x: e.cp1x, y: e.cp1y },
        r = mi(t, s, i),
        a = mi(s, o, i),
        l = mi(o, e, i),
        c = mi(r, a, i),
        h = mi(a, l, i);
      return mi(c, h, i);
    }
    function vi(t, e, i) {
      return t
        ? (function (t, e) {
            return {
              x: (i) => t + t + e - i,
              setWidth(t) {
                e = t;
              },
              textAlign: (t) =>
                'center' === t ? t : 'right' === t ? 'left' : 'right',
              xPlus: (t, e) => t - e,
              leftForLtr: (t, e) => t - e,
            };
          })(e, i)
        : {
            x: (t) => t,
            setWidth(t) {},
            textAlign: (t) => t,
            xPlus: (t, e) => t + e,
            leftForLtr: (t, e) => t,
          };
    }
    function _i(t, e) {
      let i, n;
      ('ltr' !== e && 'rtl' !== e) ||
        ((i = t.canvas.style),
        (n = [
          i.getPropertyValue('direction'),
          i.getPropertyPriority('direction'),
        ]),
        i.setProperty('direction', e, 'important'),
        (t.prevTextDirection = n));
    }
    function yi(t, e) {
      void 0 !== e &&
        (delete t.prevTextDirection,
        t.canvas.style.setProperty('direction', e[0], e[1]));
    }
    function ki(t) {
      return 'angle' === t
        ? { between: Pt, compare: At, normalize: Ct }
        : { between: Rt, compare: (t, e) => t - e, normalize: (t) => t };
    }
    function wi({ start: t, end: e, count: i, loop: n, style: s }) {
      return {
        start: t % i,
        end: e % i,
        loop: n && (e - t + 1) % i == 0,
        style: s,
      };
    }
    function Si(t, e, i) {
      if (!i) return [t];
      const { property: n, start: s, end: o } = i,
        r = e.length,
        { compare: a, between: l, normalize: c } = ki(n),
        {
          start: h,
          end: u,
          loop: d,
          style: f,
        } = (function (t, e, i) {
          const { property: n, start: s, end: o } = i,
            { between: r, normalize: a } = ki(n),
            l = e.length;
          let c,
            h,
            { start: u, end: d, loop: f } = t;
          if (f) {
            for (
              u += l, d += l, c = 0, h = l;
              c < h && r(a(e[u % l][n]), s, o);
              ++c
            )
              u--, d--;
            (u %= l), (d %= l);
          }
          return (
            d < u && (d += l), { start: u, end: d, loop: f, style: t.style }
          );
        })(t, e, i),
        p = [];
      let g,
        m,
        b,
        x = !1,
        v = null;
      for (let t = h, i = h; t <= u; ++t)
        (m = e[t % r]),
          m.skip ||
            ((g = c(m[n])),
            g !== b &&
              ((x = l(g, s, o)),
              null === v &&
                (x || (l(s, b, g) && 0 !== a(s, b))) &&
                (v = 0 === a(g, s) ? t : i),
              null !== v &&
                (!x || 0 === a(o, g) || l(o, b, g)) &&
                (p.push(wi({ start: v, end: t, loop: d, count: r, style: f })),
                (v = null)),
              (i = t),
              (b = g)));
      return (
        null !== v &&
          p.push(wi({ start: v, end: u, loop: d, count: r, style: f })),
        p
      );
    }
    function Ei(t, e) {
      const i = [],
        n = t.segments;
      for (let s = 0; s < n.length; s++) {
        const o = Si(n[s], t.points, e);
        o.length && i.push(...o);
      }
      return i;
    }
    function Oi(t) {
      return {
        backgroundColor: t.backgroundColor,
        borderCapStyle: t.borderCapStyle,
        borderDash: t.borderDash,
        borderDashOffset: t.borderDashOffset,
        borderJoinStyle: t.borderJoinStyle,
        borderWidth: t.borderWidth,
        borderColor: t.borderColor,
      };
    }
    function Mi(t, e) {
      return e && JSON.stringify(t) !== JSON.stringify(e);
    }
    class Li {
      constructor() {
        (this._request = null),
          (this._charts = new Map()),
          (this._running = !1),
          (this._lastDate = void 0);
      }
      _notify(t, e, i, n) {
        const s = e.listeners[n],
          o = e.duration;
        s.forEach((n) =>
          n({
            chart: t,
            initial: e.initial,
            numSteps: o,
            currentStep: Math.min(i - e.start, o),
          })
        );
      }
      _refresh() {
        this._request ||
          ((this._running = !0),
          (this._request = zt.call(window, () => {
            this._update(),
              (this._request = null),
              this._running && this._refresh();
          })));
      }
      _update(t = Date.now()) {
        let e = 0;
        this._charts.forEach((i, n) => {
          if (!i.running || !i.items.length) return;
          const s = i.items;
          let o,
            r = s.length - 1,
            a = !1;
          for (; r >= 0; --r)
            (o = s[r]),
              o._active
                ? (o._total > i.duration && (i.duration = o._total),
                  o.tick(t),
                  (a = !0))
                : ((s[r] = s[s.length - 1]), s.pop());
          a && (n.draw(), this._notify(n, i, t, 'progress')),
            s.length ||
              ((i.running = !1),
              this._notify(n, i, t, 'complete'),
              (i.initial = !1)),
            (e += s.length);
        }),
          (this._lastDate = t),
          0 === e && (this._running = !1);
      }
      _getAnims(t) {
        const e = this._charts;
        let i = e.get(t);
        return (
          i ||
            ((i = {
              running: !1,
              initial: !0,
              items: [],
              listeners: { complete: [], progress: [] },
            }),
            e.set(t, i)),
          i
        );
      }
      listen(t, e, i) {
        this._getAnims(t).listeners[e].push(i);
      }
      add(t, e) {
        e && e.length && this._getAnims(t).items.push(...e);
      }
      has(t) {
        return this._getAnims(t).items.length > 0;
      }
      start(t) {
        const e = this._charts.get(t);
        e &&
          ((e.running = !0),
          (e.start = Date.now()),
          (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
          this._refresh());
      }
      running(t) {
        if (!this._running) return !1;
        const e = this._charts.get(t);
        return !!(e && e.running && e.items.length);
      }
      stop(t) {
        const e = this._charts.get(t);
        if (!e || !e.items.length) return;
        const i = e.items;
        let n = i.length - 1;
        for (; n >= 0; --n) i[n].cancel();
        (e.items = []), this._notify(t, e, Date.now(), 'complete');
      }
      remove(t) {
        return this._charts.delete(t);
      }
    }
    var Ti = new Li();
    const Ai = 'transparent',
      Ci = {
        boolean: (t, e, i) => (i > 0.5 ? e : t),
        color(t, e, i) {
          const n = Zt(t || Ai),
            s = n.valid && Zt(e || Ai);
          return s && s.valid ? s.mix(n, i).hexString() : e;
        },
        number: (t, e, i) => t + (e - t) * i,
      };
    class Pi {
      constructor(t, e, i, n) {
        const s = e[i];
        n = Fe([t.to, n, s, t.from]);
        const o = Fe([t.from, s, n]);
        (this._active = !0),
          (this._fn = t.fn || Ci[t.type || typeof o]),
          (this._easing = Gt[t.easing] || Gt.linear),
          (this._start = Math.floor(Date.now() + (t.delay || 0))),
          (this._duration = this._total = Math.floor(t.duration)),
          (this._loop = !!t.loop),
          (this._target = e),
          (this._prop = i),
          (this._from = o),
          (this._to = n),
          (this._promises = void 0);
      }
      active() {
        return this._active;
      }
      update(t, e, i) {
        if (this._active) {
          this._notify(!1);
          const n = this._target[this._prop],
            s = i - this._start,
            o = this._duration - s;
          (this._start = i),
            (this._duration = Math.floor(Math.max(o, t.duration))),
            (this._total += s),
            (this._loop = !!t.loop),
            (this._to = Fe([t.to, e, n, t.from])),
            (this._from = Fe([t.from, n, e]));
        }
      }
      cancel() {
        this._active &&
          (this.tick(Date.now()), (this._active = !1), this._notify(!1));
      }
      tick(t) {
        const e = t - this._start,
          i = this._duration,
          n = this._prop,
          s = this._from,
          o = this._loop,
          r = this._to;
        let a;
        if (((this._active = s !== r && (o || e < i)), !this._active))
          return (this._target[n] = r), void this._notify(!0);
        e < 0
          ? (this._target[n] = s)
          : ((a = (e / i) % 2),
            (a = o && a > 1 ? 2 - a : a),
            (a = this._easing(Math.min(1, Math.max(0, a)))),
            (this._target[n] = this._fn(s, r, a)));
      }
      wait() {
        const t = this._promises || (this._promises = []);
        return new Promise((e, i) => {
          t.push({ res: e, rej: i });
        });
      }
      _notify(t) {
        const e = t ? 'res' : 'rej',
          i = this._promises || [];
        for (let t = 0; t < i.length; t++) i[t][e]();
      }
    }
    class Di {
      constructor(t, e) {
        (this._chart = t), (this._properties = new Map()), this.configure(e);
      }
      configure(t) {
        if (!U(t)) return;
        const e = Object.keys(ue.animation),
          i = this._properties;
        Object.getOwnPropertyNames(t).forEach((n) => {
          const s = t[n];
          if (!U(s)) return;
          const o = {};
          for (const t of e) o[t] = s[t];
          ((K(s.properties) && s.properties) || [n]).forEach((t) => {
            (t !== n && i.has(t)) || i.set(t, o);
          });
        });
      }
      _animateOptions(t, e) {
        const i = e.options,
          n = (function (t, e) {
            if (!e) return;
            let i = t.options;
            if (i)
              return (
                i.$shared &&
                  (t.options = i =
                    Object.assign({}, i, { $shared: !1, $animations: {} })),
                i
              );
            t.options = e;
          })(t, i);
        if (!n) return [];
        const s = this._createAnimations(n, i);
        return (
          i.$shared &&
            (function (t, e) {
              const i = [],
                n = Object.keys(e);
              for (let e = 0; e < n.length; e++) {
                const s = t[n[e]];
                s && s.active() && i.push(s.wait());
              }
              return Promise.all(i);
            })(t.options.$animations, i).then(
              () => {
                t.options = i;
              },
              () => {}
            ),
          s
        );
      }
      _createAnimations(t, e) {
        const i = this._properties,
          n = [],
          s = t.$animations || (t.$animations = {}),
          o = Object.keys(e),
          r = Date.now();
        let a;
        for (a = o.length - 1; a >= 0; --a) {
          const l = o[a];
          if ('$' === l.charAt(0)) continue;
          if ('options' === l) {
            n.push(...this._animateOptions(t, e));
            continue;
          }
          const c = e[l];
          let h = s[l];
          const u = i.get(l);
          if (h) {
            if (u && h.active()) {
              h.update(u, c, r);
              continue;
            }
            h.cancel();
          }
          u && u.duration
            ? ((s[l] = h = new Pi(u, t, l, c)), n.push(h))
            : (t[l] = c);
        }
        return n;
      }
      update(t, e) {
        if (0 === this._properties.size) return void Object.assign(t, e);
        const i = this._createAnimations(t, e);
        return i.length ? (Ti.add(this._chart, i), !0) : void 0;
      }
    }
    function Ri(t, e) {
      const i = (t && t.options) || {},
        n = i.reverse,
        s = void 0 === i.min ? e : 0,
        o = void 0 === i.max ? e : 0;
      return { start: n ? o : s, end: n ? s : o };
    }
    function Ni(t, e) {
      const i = [],
        n = t._getSortedDatasetMetas(e);
      let s, o;
      for (s = 0, o = n.length; s < o; ++s) i.push(n[s].index);
      return i;
    }
    function Fi(t, e, i, n = {}) {
      const s = t.keys,
        o = 'single' === n.mode;
      let r, a, l, c;
      if (null !== e) {
        for (r = 0, a = s.length; r < a; ++r) {
          if (((l = +s[r]), l === i)) {
            if (n.all) continue;
            break;
          }
          (c = t.values[l]),
            $(c) && (o || 0 === e || _t(e) === _t(c)) && (e += c);
        }
        return e;
      }
    }
    function Ii(t, e) {
      const i = t && t.options.stacked;
      return i || (void 0 === i && void 0 !== e.stack);
    }
    function Bi(t, e, i) {
      const n = t[e] || (t[e] = {});
      return n[i] || (n[i] = {});
    }
    function ji(t, e, i, n) {
      for (const s of e.getMatchingVisibleMetas(n).reverse()) {
        const e = t[s.index];
        if ((i && e > 0) || (!i && e < 0)) return s.index;
      }
      return null;
    }
    function Vi(t, e) {
      const { chart: i, _cachedMeta: n } = t,
        s = i._stacks || (i._stacks = {}),
        { iScale: o, vScale: r, index: a } = n,
        l = o.axis,
        c = r.axis,
        h = (function (t, e, i) {
          return `${t.id}.${e.id}.${i.stack || i.type}`;
        })(o, r, n),
        u = e.length;
      let d;
      for (let t = 0; t < u; ++t) {
        const i = e[t],
          { [l]: o, [c]: u } = i;
        (d = (i._stacks || (i._stacks = {}))[c] = Bi(s, h, o)),
          (d[a] = u),
          (d._top = ji(d, r, !0, n.type)),
          (d._bottom = ji(d, r, !1, n.type)),
          ((d._visualValues || (d._visualValues = {}))[a] = u);
      }
    }
    function zi(t, e) {
      const i = t.scales;
      return Object.keys(i)
        .filter((t) => i[t].axis === e)
        .shift();
    }
    function Wi(t, e) {
      const i = t.controller.index,
        n = t.vScale && t.vScale.axis;
      if (n) {
        e = e || t._parsed;
        for (const t of e) {
          const e = t._stacks;
          if (!e || void 0 === e[n] || void 0 === e[n][i]) return;
          delete e[n][i],
            void 0 !== e[n]._visualValues &&
              void 0 !== e[n]._visualValues[i] &&
              delete e[n]._visualValues[i];
        }
      }
    }
    const Hi = (t) => 'reset' === t || 'none' === t,
      Ki = (t, e) => (e ? t : Object.assign({}, t));
    class Ui {
      static defaults = {};
      static datasetElementType = null;
      static dataElementType = null;
      constructor(t, e) {
        (this.chart = t),
          (this._ctx = t.ctx),
          (this.index = e),
          (this._cachedDataOpts = {}),
          (this._cachedMeta = this.getMeta()),
          (this._type = this._cachedMeta.type),
          (this.options = void 0),
          (this._parsing = !1),
          (this._data = void 0),
          (this._objectData = void 0),
          (this._sharedOptions = void 0),
          (this._drawStart = void 0),
          (this._drawCount = void 0),
          (this.enableOptionSharing = !1),
          (this.supportsDecimation = !1),
          (this.$context = void 0),
          (this._syncList = []),
          (this.datasetElementType = new.target.datasetElementType),
          (this.dataElementType = new.target.dataElementType),
          this.initialize();
      }
      initialize() {
        const t = this._cachedMeta;
        this.configure(),
          this.linkScales(),
          (t._stacked = Ii(t.vScale, t)),
          this.addElements(),
          this.options.fill &&
            !this.chart.isPluginEnabled('filler') &&
            console.warn(
              "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
            );
      }
      updateIndex(t) {
        this.index !== t && Wi(this._cachedMeta), (this.index = t);
      }
      linkScales() {
        const t = this.chart,
          e = this._cachedMeta,
          i = this.getDataset(),
          n = (t, e, i, n) => ('x' === t ? e : 'r' === t ? n : i),
          s = (e.xAxisID = q(i.xAxisID, zi(t, 'x'))),
          o = (e.yAxisID = q(i.yAxisID, zi(t, 'y'))),
          r = (e.rAxisID = q(i.rAxisID, zi(t, 'r'))),
          a = e.indexAxis,
          l = (e.iAxisID = n(a, s, o, r)),
          c = (e.vAxisID = n(a, o, s, r));
        (e.xScale = this.getScaleForId(s)),
          (e.yScale = this.getScaleForId(o)),
          (e.rScale = this.getScaleForId(r)),
          (e.iScale = this.getScaleForId(l)),
          (e.vScale = this.getScaleForId(c));
      }
      getDataset() {
        return this.chart.data.datasets[this.index];
      }
      getMeta() {
        return this.chart.getDatasetMeta(this.index);
      }
      getScaleForId(t) {
        return this.chart.scales[t];
      }
      _getOtherScale(t) {
        const e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale;
      }
      reset() {
        this._update('reset');
      }
      _destroy() {
        const t = this._cachedMeta;
        this._data && jt(this._data, this), t._stacked && Wi(t);
      }
      _dataCheck() {
        const t = this.getDataset(),
          e = t.data || (t.data = []),
          i = this._data;
        if (U(e))
          this._data = (function (t) {
            const e = Object.keys(t),
              i = new Array(e.length);
            let n, s, o;
            for (n = 0, s = e.length; n < s; ++n)
              (o = e[n]), (i[n] = { x: o, y: t[o] });
            return i;
          })(e);
        else if (i !== e) {
          if (i) {
            jt(i, this);
            const t = this._cachedMeta;
            Wi(t), (t._parsed = []);
          }
          e &&
            Object.isExtensible(e) &&
            (this,
            (n = e)._chartjs
              ? n._chartjs.listeners.push(this)
              : (Object.defineProperty(n, '_chartjs', {
                  configurable: !0,
                  enumerable: !1,
                  value: { listeners: [this] },
                }),
                Bt.forEach((t) => {
                  const e = '_onData' + at(t),
                    i = n[t];
                  Object.defineProperty(n, t, {
                    configurable: !0,
                    enumerable: !1,
                    value(...t) {
                      const s = i.apply(this, t);
                      return (
                        n._chartjs.listeners.forEach((i) => {
                          'function' == typeof i[e] && i[e](...t);
                        }),
                        s
                      );
                    },
                  });
                }))),
            (this._syncList = []),
            (this._data = e);
        }
        var n;
      }
      addElements() {
        const t = this._cachedMeta;
        this._dataCheck(),
          this.datasetElementType &&
            (t.dataset = new this.datasetElementType());
      }
      buildOrUpdateElements(t) {
        const e = this._cachedMeta,
          i = this.getDataset();
        let n = !1;
        this._dataCheck();
        const s = e._stacked;
        (e._stacked = Ii(e.vScale, e)),
          e.stack !== i.stack && ((n = !0), Wi(e), (e.stack = i.stack)),
          this._resyncElements(t),
          (n || s !== e._stacked) && Vi(this, e._parsed);
      }
      configure() {
        const t = this.chart.config,
          e = t.datasetScopeKeys(this._type),
          i = t.getOptionScopes(this.getDataset(), e, !0);
        (this.options = t.createResolver(i, this.getContext())),
          (this._parsing = this.options.parsing),
          (this._cachedDataOpts = {});
      }
      parse(t, e) {
        const { _cachedMeta: i, _data: n } = this,
          { iScale: s, _stacked: o } = i,
          r = s.axis;
        let a,
          l,
          c,
          h = (0 === t && e === n.length) || i._sorted,
          u = t > 0 && i._parsed[t - 1];
        if (!1 === this._parsing) (i._parsed = n), (i._sorted = !0), (c = n);
        else {
          c = K(n[t])
            ? this.parseArrayData(i, n, t, e)
            : U(n[t])
            ? this.parseObjectData(i, n, t, e)
            : this.parsePrimitiveData(i, n, t, e);
          const s = () => null === l[r] || (u && l[r] < u[r]);
          for (a = 0; a < e; ++a)
            (i._parsed[a + t] = l = c[a]), h && (s() && (h = !1), (u = l));
          i._sorted = h;
        }
        o && Vi(this, c);
      }
      parsePrimitiveData(t, e, i, n) {
        const { iScale: s, vScale: o } = t,
          r = s.axis,
          a = o.axis,
          l = s.getLabels(),
          c = s === o,
          h = new Array(n);
        let u, d, f;
        for (u = 0, d = n; u < d; ++u)
          (f = u + i),
            (h[u] = { [r]: c || s.parse(l[f], f), [a]: o.parse(e[f], f) });
        return h;
      }
      parseArrayData(t, e, i, n) {
        const { xScale: s, yScale: o } = t,
          r = new Array(n);
        let a, l, c, h;
        for (a = 0, l = n; a < l; ++a)
          (c = a + i),
            (h = e[c]),
            (r[a] = { x: s.parse(h[0], c), y: o.parse(h[1], c) });
        return r;
      }
      parseObjectData(t, e, i, n) {
        const { xScale: s, yScale: o } = t,
          { xAxisKey: r = 'x', yAxisKey: a = 'y' } = this._parsing,
          l = new Array(n);
        let c, h, u, d;
        for (c = 0, h = n; c < h; ++c)
          (u = c + i),
            (d = e[u]),
            (l[c] = { x: s.parse(rt(d, r), u), y: o.parse(rt(d, a), u) });
        return l;
      }
      getParsed(t) {
        return this._cachedMeta._parsed[t];
      }
      getDataElement(t) {
        return this._cachedMeta.data[t];
      }
      applyStack(t, e, i) {
        const n = this.chart,
          s = this._cachedMeta,
          o = e[t.axis];
        return Fi(
          { keys: Ni(n, !0), values: e._stacks[t.axis]._visualValues },
          o,
          s.index,
          { mode: i }
        );
      }
      updateRangeFromParsed(t, e, i, n) {
        const s = i[e.axis];
        let o = null === s ? NaN : s;
        const r = n && i._stacks[e.axis];
        n && r && ((n.values = r), (o = Fi(n, s, this._cachedMeta.index))),
          (t.min = Math.min(t.min, o)),
          (t.max = Math.max(t.max, o));
      }
      getMinMax(t, e) {
        const i = this._cachedMeta,
          n = i._parsed,
          s = i._sorted && t === i.iScale,
          o = n.length,
          r = this._getOtherScale(t),
          a = ((t, e, i) =>
            t && !e.hidden && e._stacked && { keys: Ni(i, !0), values: null })(
            e,
            i,
            this.chart
          ),
          l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
          { min: c, max: h } = (function (t) {
            const {
              min: e,
              max: i,
              minDefined: n,
              maxDefined: s,
            } = t.getUserBounds();
            return {
              min: n ? e : Number.NEGATIVE_INFINITY,
              max: s ? i : Number.POSITIVE_INFINITY,
            };
          })(r);
        let u, d;
        function f() {
          d = n[u];
          const e = d[r.axis];
          return !$(d[t.axis]) || c > e || h < e;
        }
        for (
          u = 0;
          u < o && (f() || (this.updateRangeFromParsed(l, t, d, a), !s));
          ++u
        );
        if (s)
          for (u = o - 1; u >= 0; --u)
            if (!f()) {
              this.updateRangeFromParsed(l, t, d, a);
              break;
            }
        return l;
      }
      getAllParsedValues(t) {
        const e = this._cachedMeta._parsed,
          i = [];
        let n, s, o;
        for (n = 0, s = e.length; n < s; ++n)
          (o = e[n][t.axis]), $(o) && i.push(o);
        return i;
      }
      getMaxOverflow() {
        return !1;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          i = e.iScale,
          n = e.vScale,
          s = this.getParsed(t);
        return {
          label: i ? '' + i.getLabelForValue(s[i.axis]) : '',
          value: n ? '' + n.getLabelForValue(s[n.axis]) : '',
        };
      }
      _update(t) {
        const e = this._cachedMeta;
        this.update(t || 'default'),
          (e._clip = (function (t) {
            let e, i, n, s;
            return (
              U(t)
                ? ((e = t.top), (i = t.right), (n = t.bottom), (s = t.left))
                : (e = i = n = s = t),
              { top: e, right: i, bottom: n, left: s, disabled: !1 === t }
            );
          })(
            q(
              this.options.clip,
              (function (t, e, i) {
                if (!1 === i) return !1;
                const n = Ri(t, i),
                  s = Ri(e, i);
                return {
                  top: s.end,
                  right: n.end,
                  bottom: s.start,
                  left: n.start,
                };
              })(e.xScale, e.yScale, this.getMaxOverflow())
            )
          ));
      }
      update(t) {}
      draw() {
        const t = this._ctx,
          e = this.chart,
          i = this._cachedMeta,
          n = i.data || [],
          s = e.chartArea,
          o = [],
          r = this._drawStart || 0,
          a = this._drawCount || n.length - r,
          l = this.options.drawActiveElementsOnTop;
        let c;
        for (i.dataset && i.dataset.draw(t, s, r, a), c = r; c < r + a; ++c) {
          const e = n[c];
          e.hidden || (e.active && l ? o.push(e) : e.draw(t, s));
        }
        for (c = 0; c < o.length; ++c) o[c].draw(t, s);
      }
      getStyle(t, e) {
        const i = e ? 'active' : 'default';
        return void 0 === t && this._cachedMeta.dataset
          ? this.resolveDatasetElementOptions(i)
          : this.resolveDataElementOptions(t || 0, i);
      }
      getContext(t, e, i) {
        const n = this.getDataset();
        let s;
        if (t >= 0 && t < this._cachedMeta.data.length) {
          const e = this._cachedMeta.data[t];
          (s =
            e.$context ||
            (e.$context = (function (t, e, i) {
              return Ie(t, {
                active: !1,
                dataIndex: e,
                parsed: void 0,
                raw: void 0,
                element: i,
                index: e,
                mode: 'default',
                type: 'data',
              });
            })(this.getContext(), t, e))),
            (s.parsed = this.getParsed(t)),
            (s.raw = n.data[t]),
            (s.index = s.dataIndex = t);
        } else
          (s =
            this.$context ||
            (this.$context = (function (t, e) {
              return Ie(t, {
                active: !1,
                dataset: void 0,
                datasetIndex: e,
                index: e,
                mode: 'default',
                type: 'dataset',
              });
            })(this.chart.getContext(), this.index))),
            (s.dataset = n),
            (s.index = s.datasetIndex = this.index);
        return (s.active = !!e), (s.mode = i), s;
      }
      resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
      }
      resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
      }
      _resolveElementOptions(t, e = 'default', i) {
        const n = 'active' === e,
          s = this._cachedDataOpts,
          o = t + '-' + e,
          r = s[o],
          a = this.enableOptionSharing && lt(i);
        if (r) return Ki(r, a);
        const l = this.chart.config,
          c = l.datasetElementScopeKeys(this._type, t),
          h = n ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
          u = l.getOptionScopes(this.getDataset(), c),
          d = Object.keys(ue.elements[t]),
          f = l.resolveNamedOptions(u, d, () => this.getContext(i, n, e), h);
        return (
          f.$shared && ((f.$shared = a), (s[o] = Object.freeze(Ki(f, a)))), f
        );
      }
      _resolveAnimations(t, e, i) {
        const n = this.chart,
          s = this._cachedDataOpts,
          o = `animation-${e}`,
          r = s[o];
        if (r) return r;
        let a;
        if (!1 !== n.options.animation) {
          const n = this.chart.config,
            s = n.datasetAnimationScopeKeys(this._type, e),
            o = n.getOptionScopes(this.getDataset(), s);
          a = n.createResolver(o, this.getContext(t, i, e));
        }
        const l = new Di(n, a && a.animations);
        return a && a._cacheable && (s[o] = Object.freeze(l)), l;
      }
      getSharedOptions(t) {
        if (t.$shared)
          return (
            this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
          );
      }
      includeOptions(t, e) {
        return !e || Hi(t) || this.chart._animationsDisabled;
      }
      _getSharedOptions(t, e) {
        const i = this.resolveDataElementOptions(t, e),
          n = this._sharedOptions,
          s = this.getSharedOptions(i),
          o = this.includeOptions(e, s) || s !== n;
        return (
          this.updateSharedOptions(s, e, i),
          { sharedOptions: s, includeOptions: o }
        );
      }
      updateElement(t, e, i, n) {
        Hi(n)
          ? Object.assign(t, i)
          : this._resolveAnimations(e, n).update(t, i);
      }
      updateSharedOptions(t, e, i) {
        t && !Hi(e) && this._resolveAnimations(void 0, e).update(t, i);
      }
      _setStyle(t, e, i, n) {
        t.active = n;
        const s = this.getStyle(e, n);
        this._resolveAnimations(e, i, n).update(t, {
          options: (!n && this.getSharedOptions(s)) || s,
        });
      }
      removeHoverStyle(t, e, i) {
        this._setStyle(t, i, 'active', !1);
      }
      setHoverStyle(t, e, i) {
        this._setStyle(t, i, 'active', !0);
      }
      _removeDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, 'active', !1);
      }
      _setDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, 'active', !0);
      }
      _resyncElements(t) {
        const e = this._data,
          i = this._cachedMeta.data;
        for (const [t, e, i] of this._syncList) this[t](e, i);
        this._syncList = [];
        const n = i.length,
          s = e.length,
          o = Math.min(s, n);
        o && this.parse(0, o),
          s > n
            ? this._insertElements(n, s - n, t)
            : s < n && this._removeElements(s, n - s);
      }
      _insertElements(t, e, i = !0) {
        const n = this._cachedMeta,
          s = n.data,
          o = t + e;
        let r;
        const a = (t) => {
          for (t.length += e, r = t.length - 1; r >= o; r--) t[r] = t[r - e];
        };
        for (a(s), r = t; r < o; ++r) s[r] = new this.dataElementType();
        this._parsing && a(n._parsed),
          this.parse(t, e),
          i && this.updateElements(s, t, e, 'reset');
      }
      updateElements(t, e, i, n) {}
      _removeElements(t, e) {
        const i = this._cachedMeta;
        if (this._parsing) {
          const n = i._parsed.splice(t, e);
          i._stacked && Wi(i, n);
        }
        i.data.splice(t, e);
      }
      _sync(t) {
        if (this._parsing) this._syncList.push(t);
        else {
          const [e, i, n] = t;
          this[e](i, n);
        }
        this.chart._dataChanges.push([this.index, ...t]);
      }
      _onDataPush() {
        const t = arguments.length;
        this._sync(['_insertElements', this.getDataset().data.length - t, t]);
      }
      _onDataPop() {
        this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
      }
      _onDataShift() {
        this._sync(['_removeElements', 0, 1]);
      }
      _onDataSplice(t, e) {
        e && this._sync(['_removeElements', t, e]);
        const i = arguments.length - 2;
        i && this._sync(['_insertElements', t, i]);
      }
      _onDataUnshift() {
        this._sync(['_insertElements', 0, arguments.length]);
      }
    }
    function $i(t) {
      const e = t.iScale,
        i = (function (t, e) {
          if (!t._cache.$bar) {
            const i = t.getMatchingVisibleMetas(e);
            let n = [];
            for (let e = 0, s = i.length; e < s; e++)
              n = n.concat(i[e].controller.getAllParsedValues(t));
            t._cache.$bar = Vt(n.sort((t, e) => t - e));
          }
          return t._cache.$bar;
        })(e, t.type);
      let n,
        s,
        o,
        r,
        a = e._length;
      const l = () => {
        32767 !== o &&
          -32768 !== o &&
          (lt(r) && (a = Math.min(a, Math.abs(o - r) || a)), (r = o));
      };
      for (n = 0, s = i.length; n < s; ++n) (o = e.getPixelForValue(i[n])), l();
      for (r = void 0, n = 0, s = e.ticks.length; n < s; ++n)
        (o = e.getPixelForTick(n)), l();
      return a;
    }
    function Yi(t, e, i, n) {
      return (
        K(t)
          ? (function (t, e, i, n) {
              const s = i.parse(t[0], n),
                o = i.parse(t[1], n),
                r = Math.min(s, o),
                a = Math.max(s, o);
              let l = r,
                c = a;
              Math.abs(r) > Math.abs(a) && ((l = a), (c = r)),
                (e[i.axis] = c),
                (e._custom = {
                  barStart: l,
                  barEnd: c,
                  start: s,
                  end: o,
                  min: r,
                  max: a,
                });
            })(t, e, i, n)
          : (e[i.axis] = i.parse(t, n)),
        e
      );
    }
    function qi(t, e, i, n) {
      const s = t.iScale,
        o = t.vScale,
        r = s.getLabels(),
        a = s === o,
        l = [];
      let c, h, u, d;
      for (c = i, h = i + n; c < h; ++c)
        (d = e[c]),
          (u = {}),
          (u[s.axis] = a || s.parse(r[c], c)),
          l.push(Yi(d, u, o, c));
      return l;
    }
    function Xi(t) {
      return t && void 0 !== t.barStart && void 0 !== t.barEnd;
    }
    function Gi(t, e, i, n) {
      let s = e.borderSkipped;
      const o = {};
      if (!s) return void (t.borderSkipped = o);
      if (!0 === s)
        return void (t.borderSkipped = {
          top: !0,
          right: !0,
          bottom: !0,
          left: !0,
        });
      const {
        start: r,
        end: a,
        reverse: l,
        top: c,
        bottom: h,
      } = (function (t) {
        let e, i, n, s, o;
        return (
          t.horizontal
            ? ((e = t.base > t.x), (i = 'left'), (n = 'right'))
            : ((e = t.base < t.y), (i = 'bottom'), (n = 'top')),
          e ? ((s = 'end'), (o = 'start')) : ((s = 'start'), (o = 'end')),
          { start: i, end: n, reverse: e, top: s, bottom: o }
        );
      })(t);
      'middle' === s &&
        i &&
        ((t.enableBorderRadius = !0),
        (i._top || 0) === n
          ? (s = c)
          : (i._bottom || 0) === n
          ? (s = h)
          : ((o[Ji(h, r, a, l)] = !0), (s = c))),
        (o[Ji(s, r, a, l)] = !0),
        (t.borderSkipped = o);
    }
    function Ji(t, e, i, n) {
      var s, o, r;
      return (
        n
          ? ((r = i),
            (t = Zi((t = (s = t) === (o = e) ? r : s === r ? o : s), i, e)))
          : (t = Zi(t, e, i)),
        t
      );
    }
    function Zi(t, e, i) {
      return 'start' === t ? e : 'end' === t ? i : t;
    }
    function Qi(t, { inflateAmount: e }, i) {
      t.inflateAmount = 'auto' === e ? (1 === i ? 0.33 : 0) : e;
    }
    class tn extends Ui {
      static id = 'doughnut';
      static defaults = {
        datasetElementType: !1,
        dataElementType: 'arc',
        animation: { animateRotate: !0, animateScale: !1 },
        animations: {
          numbers: {
            type: 'number',
            properties: [
              'circumference',
              'endAngle',
              'innerRadius',
              'outerRadius',
              'startAngle',
              'x',
              'y',
              'offset',
              'borderWidth',
              'spacing',
            ],
          },
        },
        cutout: '50%',
        rotation: 0,
        circumference: 360,
        radius: '100%',
        spacing: 0,
        indexAxis: 'r',
      };
      static descriptors = {
        _scriptable: (t) => 'spacing' !== t,
        _indexable: (t) => 'spacing' !== t,
      };
      static overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(t) {
                const e = t.data;
                if (e.labels.length && e.datasets.length) {
                  const {
                    labels: { pointStyle: i, color: n },
                  } = t.legend.options;
                  return e.labels.map((e, s) => {
                    const o = t.getDatasetMeta(0).controller.getStyle(s);
                    return {
                      text: e,
                      fillStyle: o.backgroundColor,
                      strokeStyle: o.borderColor,
                      fontColor: n,
                      lineWidth: o.borderWidth,
                      pointStyle: i,
                      hidden: !t.getDataVisibility(s),
                      index: s,
                    };
                  });
                }
                return [];
              },
            },
            onClick(t, e, i) {
              i.chart.toggleDataVisibility(e.index), i.chart.update();
            },
          },
        },
      };
      constructor(t, e) {
        super(t, e),
          (this.enableOptionSharing = !0),
          (this.innerRadius = void 0),
          (this.outerRadius = void 0),
          (this.offsetX = void 0),
          (this.offsetY = void 0);
      }
      linkScales() {}
      parse(t, e) {
        const i = this.getDataset().data,
          n = this._cachedMeta;
        if (!1 === this._parsing) n._parsed = i;
        else {
          let s,
            o,
            r = (t) => +i[t];
          if (U(i[t])) {
            const { key: t = 'value' } = this._parsing;
            r = (e) => +rt(i[e], t);
          }
          for (s = t, o = t + e; s < o; ++s) n._parsed[s] = r(s);
        }
      }
      _getRotation() {
        return Et(this.options.rotation - 90);
      }
      _getCircumference() {
        return Et(this.options.circumference);
      }
      _getRotationExtents() {
        let t = dt,
          e = -dt;
        for (let i = 0; i < this.chart.data.datasets.length; ++i)
          if (
            this.chart.isDatasetVisible(i) &&
            this.chart.getDatasetMeta(i).type === this._type
          ) {
            const n = this.chart.getDatasetMeta(i).controller,
              s = n._getRotation(),
              o = n._getCircumference();
            (t = Math.min(t, s)), (e = Math.max(e, s + o));
          }
        return { rotation: t, circumference: e - t };
      }
      update(t) {
        const e = this.chart,
          { chartArea: i } = e,
          n = this._cachedMeta,
          s = n.data,
          o =
            this.getMaxBorderWidth() +
            this.getMaxOffset(s) +
            this.options.spacing,
          r = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
          a = Math.min(
            ((c = r),
            'string' == typeof (l = this.options.cutout) && l.endsWith('%')
              ? parseFloat(l) / 100
              : +l / c),
            1
          );
        var l, c;
        const h = this._getRingWeight(this.index),
          { circumference: u, rotation: d } = this._getRotationExtents(),
          {
            ratioX: f,
            ratioY: p,
            offsetX: g,
            offsetY: m,
          } = (function (t, e, i) {
            let n = 1,
              s = 1,
              o = 0,
              r = 0;
            if (e < dt) {
              const a = t,
                l = a + e,
                c = Math.cos(a),
                h = Math.sin(a),
                u = Math.cos(l),
                d = Math.sin(l),
                f = (t, e, n) =>
                  Pt(t, a, l, !0) ? 1 : Math.max(e, e * i, n, n * i),
                p = (t, e, n) =>
                  Pt(t, a, l, !0) ? -1 : Math.min(e, e * i, n, n * i),
                g = f(0, c, u),
                m = f(mt, h, d),
                b = p(ut, c, u),
                x = p(ut + mt, h, d);
              (n = (g - b) / 2),
                (s = (m - x) / 2),
                (o = -(g + b) / 2),
                (r = -(m + x) / 2);
            }
            return { ratioX: n, ratioY: s, offsetX: o, offsetY: r };
          })(d, u, a),
          b = (i.width - o) / f,
          x = (i.height - o) / p,
          v = Math.max(Math.min(b, x) / 2, 0),
          _ = X(this.options.radius, v),
          y = (_ - Math.max(_ * a, 0)) / this._getVisibleDatasetWeightTotal();
        (this.offsetX = g * _),
          (this.offsetY = m * _),
          (n.total = this.calculateTotal()),
          (this.outerRadius = _ - y * this._getRingWeightOffset(this.index)),
          (this.innerRadius = Math.max(this.outerRadius - y * h, 0)),
          this.updateElements(s, 0, s.length, t);
      }
      _circumference(t, e) {
        const i = this.options,
          n = this._cachedMeta,
          s = this._getCircumference();
        return (e && i.animation.animateRotate) ||
          !this.chart.getDataVisibility(t) ||
          null === n._parsed[t] ||
          n.data[t].hidden
          ? 0
          : this.calculateCircumference((n._parsed[t] * s) / dt);
      }
      updateElements(t, e, i, n) {
        const s = 'reset' === n,
          o = this.chart,
          r = o.chartArea,
          a = o.options.animation,
          l = (r.left + r.right) / 2,
          c = (r.top + r.bottom) / 2,
          h = s && a.animateScale,
          u = h ? 0 : this.innerRadius,
          d = h ? 0 : this.outerRadius,
          { sharedOptions: f, includeOptions: p } = this._getSharedOptions(
            e,
            n
          );
        let g,
          m = this._getRotation();
        for (g = 0; g < e; ++g) m += this._circumference(g, s);
        for (g = e; g < e + i; ++g) {
          const e = this._circumference(g, s),
            i = t[g],
            o = {
              x: l + this.offsetX,
              y: c + this.offsetY,
              startAngle: m,
              endAngle: m + e,
              circumference: e,
              outerRadius: d,
              innerRadius: u,
            };
          p &&
            (o.options =
              f || this.resolveDataElementOptions(g, i.active ? 'active' : n)),
            (m += e),
            this.updateElement(i, g, o, n);
        }
      }
      calculateTotal() {
        const t = this._cachedMeta,
          e = t.data;
        let i,
          n = 0;
        for (i = 0; i < e.length; i++) {
          const s = t._parsed[i];
          null === s ||
            isNaN(s) ||
            !this.chart.getDataVisibility(i) ||
            e[i].hidden ||
            (n += Math.abs(s));
        }
        return n;
      }
      calculateCircumference(t) {
        const e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? dt * (Math.abs(t) / e) : 0;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          i = this.chart,
          n = i.data.labels || [],
          s = ne(e._parsed[t], i.options.locale);
        return { label: n[t] || '', value: s };
      }
      getMaxBorderWidth(t) {
        let e = 0;
        const i = this.chart;
        let n, s, o, r, a;
        if (!t)
          for (n = 0, s = i.data.datasets.length; n < s; ++n)
            if (i.isDatasetVisible(n)) {
              (o = i.getDatasetMeta(n)), (t = o.data), (r = o.controller);
              break;
            }
        if (!t) return 0;
        for (n = 0, s = t.length; n < s; ++n)
          (a = r.resolveDataElementOptions(n)),
            'inner' !== a.borderAlign &&
              (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
        return e;
      }
      getMaxOffset(t) {
        let e = 0;
        for (let i = 0, n = t.length; i < n; ++i) {
          const t = this.resolveDataElementOptions(i);
          e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
        }
        return e;
      }
      _getRingWeightOffset(t) {
        let e = 0;
        for (let i = 0; i < t; ++i)
          this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
        return e;
      }
      _getRingWeight(t) {
        return Math.max(q(this.chart.data.datasets[t].weight, 1), 0);
      }
      _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
      }
    }
    class en extends Ui {
      static id = 'polarArea';
      static defaults = {
        dataElementType: 'arc',
        animation: { animateRotate: !0, animateScale: !0 },
        animations: {
          numbers: {
            type: 'number',
            properties: [
              'x',
              'y',
              'startAngle',
              'endAngle',
              'innerRadius',
              'outerRadius',
            ],
          },
        },
        indexAxis: 'r',
        startAngle: 0,
      };
      static overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(t) {
                const e = t.data;
                if (e.labels.length && e.datasets.length) {
                  const {
                    labels: { pointStyle: i, color: n },
                  } = t.legend.options;
                  return e.labels.map((e, s) => {
                    const o = t.getDatasetMeta(0).controller.getStyle(s);
                    return {
                      text: e,
                      fillStyle: o.backgroundColor,
                      strokeStyle: o.borderColor,
                      fontColor: n,
                      lineWidth: o.borderWidth,
                      pointStyle: i,
                      hidden: !t.getDataVisibility(s),
                      index: s,
                    };
                  });
                }
                return [];
              },
            },
            onClick(t, e, i) {
              i.chart.toggleDataVisibility(e.index), i.chart.update();
            },
          },
        },
        scales: {
          r: {
            type: 'radialLinear',
            angleLines: { display: !1 },
            beginAtZero: !0,
            grid: { circular: !0 },
            pointLabels: { display: !1 },
            startAngle: 0,
          },
        },
      };
      constructor(t, e) {
        super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          i = this.chart,
          n = i.data.labels || [],
          s = ne(e._parsed[t].r, i.options.locale);
        return { label: n[t] || '', value: s };
      }
      parseObjectData(t, e, i, n) {
        return Je.bind(this)(t, e, i, n);
      }
      update(t) {
        const e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
      }
      getMinMax() {
        const t = this._cachedMeta,
          e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
        return (
          t.data.forEach((t, i) => {
            const n = this.getParsed(i).r;
            !isNaN(n) &&
              this.chart.getDataVisibility(i) &&
              (n < e.min && (e.min = n), n > e.max && (e.max = n));
          }),
          e
        );
      }
      _updateRadius() {
        const t = this.chart,
          e = t.chartArea,
          i = t.options,
          n = Math.min(e.right - e.left, e.bottom - e.top),
          s = Math.max(n / 2, 0),
          o =
            (s -
              Math.max(
                i.cutoutPercentage ? (s / 100) * i.cutoutPercentage : 1,
                0
              )) /
            t.getVisibleDatasetCount();
        (this.outerRadius = s - o * this.index),
          (this.innerRadius = this.outerRadius - o);
      }
      updateElements(t, e, i, n) {
        const s = 'reset' === n,
          o = this.chart,
          r = o.options.animation,
          a = this._cachedMeta.rScale,
          l = a.xCenter,
          c = a.yCenter,
          h = a.getIndexAngle(0) - 0.5 * ut;
        let u,
          d = h;
        const f = 360 / this.countVisibleElements();
        for (u = 0; u < e; ++u) d += this._computeAngle(u, n, f);
        for (u = e; u < e + i; u++) {
          const e = t[u];
          let i = d,
            p = d + this._computeAngle(u, n, f),
            g = o.getDataVisibility(u)
              ? a.getDistanceFromCenterForValue(this.getParsed(u).r)
              : 0;
          (d = p),
            s && (r.animateScale && (g = 0), r.animateRotate && (i = p = h));
          const m = {
            x: l,
            y: c,
            innerRadius: 0,
            outerRadius: g,
            startAngle: i,
            endAngle: p,
            options: this.resolveDataElementOptions(u, e.active ? 'active' : n),
          };
          this.updateElement(e, u, m, n);
        }
      }
      countVisibleElements() {
        const t = this._cachedMeta;
        let e = 0;
        return (
          t.data.forEach((t, i) => {
            !isNaN(this.getParsed(i).r) &&
              this.chart.getDataVisibility(i) &&
              e++;
          }),
          e
        );
      }
      _computeAngle(t, e, i) {
        return this.chart.getDataVisibility(t)
          ? Et(this.resolveDataElementOptions(t, e).angle || i)
          : 0;
      }
    }
    var nn = Object.freeze({
      __proto__: null,
      BarController: class extends Ui {
        static id = 'bar';
        static defaults = {
          datasetElementType: !1,
          dataElementType: 'bar',
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'base', 'width', 'height'],
            },
          },
        };
        static overrides = {
          scales: {
            _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
            _value_: { type: 'linear', beginAtZero: !0 },
          },
        };
        parsePrimitiveData(t, e, i, n) {
          return qi(t, e, i, n);
        }
        parseArrayData(t, e, i, n) {
          return qi(t, e, i, n);
        }
        parseObjectData(t, e, i, n) {
          const { iScale: s, vScale: o } = t,
            { xAxisKey: r = 'x', yAxisKey: a = 'y' } = this._parsing,
            l = 'x' === s.axis ? r : a,
            c = 'x' === o.axis ? r : a,
            h = [];
          let u, d, f, p;
          for (u = i, d = i + n; u < d; ++u)
            (p = e[u]),
              (f = {}),
              (f[s.axis] = s.parse(rt(p, l), u)),
              h.push(Yi(rt(p, c), f, o, u));
          return h;
        }
        updateRangeFromParsed(t, e, i, n) {
          super.updateRangeFromParsed(t, e, i, n);
          const s = i._custom;
          s &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, s.min)),
            (t.max = Math.max(t.max, s.max)));
        }
        getMaxOverflow() {
          return 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            { iScale: i, vScale: n } = e,
            s = this.getParsed(t),
            o = s._custom,
            r = Xi(o)
              ? '[' + o.start + ', ' + o.end + ']'
              : '' + n.getLabelForValue(s[n.axis]);
          return { label: '' + i.getLabelForValue(s[i.axis]), value: r };
        }
        initialize() {
          (this.enableOptionSharing = !0),
            super.initialize(),
            (this._cachedMeta.stack = this.getDataset().stack);
        }
        update(t) {
          const e = this._cachedMeta;
          this.updateElements(e.data, 0, e.data.length, t);
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            {
              index: o,
              _cachedMeta: { vScale: r },
            } = this,
            a = r.getBasePixel(),
            l = r.isHorizontal(),
            c = this._getRuler(),
            { sharedOptions: h, includeOptions: u } = this._getSharedOptions(
              e,
              n
            );
          for (let d = e; d < e + i; d++) {
            const e = this.getParsed(d),
              i =
                s || H(e[r.axis])
                  ? { base: a, head: a }
                  : this._calculateBarValuePixels(d),
              f = this._calculateBarIndexPixels(d, c),
              p = (e._stacks || {})[r.axis],
              g = {
                horizontal: l,
                base: i.base,
                enableBorderRadius:
                  !p || Xi(e._custom) || o === p._top || o === p._bottom,
                x: l ? i.head : f.center,
                y: l ? f.center : i.head,
                height: l ? f.size : Math.abs(i.size),
                width: l ? Math.abs(i.size) : f.size,
              };
            u &&
              (g.options =
                h ||
                this.resolveDataElementOptions(d, t[d].active ? 'active' : n));
            const m = g.options || t[d].options;
            Gi(g, m, p, o),
              Qi(g, m, c.ratio),
              this.updateElement(t[d], d, g, n);
          }
        }
        _getStacks(t, e) {
          const { iScale: i } = this._cachedMeta,
            n = i
              .getMatchingVisibleMetas(this._type)
              .filter((t) => t.controller.options.grouped),
            s = i.options.stacked,
            o = [],
            r = (t) => {
              const i = t.controller.getParsed(e),
                n = i && i[t.vScale.axis];
              if (H(n) || isNaN(n)) return !0;
            };
          for (const i of n)
            if (
              (void 0 === e || !r(i)) &&
              ((!1 === s ||
                -1 === o.indexOf(i.stack) ||
                (void 0 === s && void 0 === i.stack)) &&
                o.push(i.stack),
              i.index === t)
            )
              break;
          return o.length || o.push(void 0), o;
        }
        _getStackCount(t) {
          return this._getStacks(void 0, t).length;
        }
        _getStackIndex(t, e, i) {
          const n = this._getStacks(t, i),
            s = void 0 !== e ? n.indexOf(e) : -1;
          return -1 === s ? n.length - 1 : s;
        }
        _getRuler() {
          const t = this.options,
            e = this._cachedMeta,
            i = e.iScale,
            n = [];
          let s, o;
          for (s = 0, o = e.data.length; s < o; ++s)
            n.push(i.getPixelForValue(this.getParsed(s)[i.axis], s));
          const r = t.barThickness;
          return {
            min: r || $i(e),
            pixels: n,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: t.grouped,
            ratio: r ? 1 : t.categoryPercentage * t.barPercentage,
          };
        }
        _calculateBarValuePixels(t) {
          const {
              _cachedMeta: { vScale: e, _stacked: i, index: n },
              options: { base: s, minBarLength: o },
            } = this,
            r = s || 0,
            a = this.getParsed(t),
            l = a._custom,
            c = Xi(l);
          let h,
            u,
            d = a[e.axis],
            f = 0,
            p = i ? this.applyStack(e, a, i) : d;
          p !== d && ((f = p - d), (p = d)),
            c &&
              ((d = l.barStart),
              (p = l.barEnd - l.barStart),
              0 !== d && _t(d) !== _t(l.barEnd) && (f = 0),
              (f += d));
          const g = H(s) || c ? f : s;
          let m = e.getPixelForValue(g);
          if (
            ((h = this.chart.getDataVisibility(t)
              ? e.getPixelForValue(f + p)
              : m),
            (u = h - m),
            Math.abs(u) < o)
          ) {
            (u =
              (function (t, e, i) {
                return 0 !== t
                  ? _t(t)
                  : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
              })(u, e, r) * o),
              d === r && (m -= u / 2);
            const t = e.getPixelForDecimal(0),
              s = e.getPixelForDecimal(1),
              l = Math.min(t, s),
              f = Math.max(t, s);
            (m = Math.max(Math.min(m, f), l)),
              (h = m + u),
              i &&
                !c &&
                (a._stacks[e.axis]._visualValues[n] =
                  e.getValueForPixel(h) - e.getValueForPixel(m));
          }
          if (m === e.getPixelForValue(r)) {
            const t = (_t(u) * e.getLineWidthForValue(r)) / 2;
            (m += t), (u -= t);
          }
          return { size: u, base: m, head: h, center: h + u / 2 };
        }
        _calculateBarIndexPixels(t, e) {
          const i = e.scale,
            n = this.options,
            s = n.skipNull,
            o = q(n.maxBarThickness, 1 / 0);
          let r, a;
          if (e.grouped) {
            const i = s ? this._getStackCount(t) : e.stackCount,
              l =
                'flex' === n.barThickness
                  ? (function (t, e, i, n) {
                      const s = e.pixels,
                        o = s[t];
                      let r = t > 0 ? s[t - 1] : null,
                        a = t < s.length - 1 ? s[t + 1] : null;
                      const l = i.categoryPercentage;
                      null === r &&
                        (r = o - (null === a ? e.end - e.start : a - o)),
                        null === a && (a = o + o - r);
                      const c = o - ((o - Math.min(r, a)) / 2) * l;
                      return {
                        chunk: ((Math.abs(a - r) / 2) * l) / n,
                        ratio: i.barPercentage,
                        start: c,
                      };
                    })(t, e, n, i)
                  : (function (t, e, i, n) {
                      const s = i.barThickness;
                      let o, r;
                      return (
                        H(s)
                          ? ((o = e.min * i.categoryPercentage),
                            (r = i.barPercentage))
                          : ((o = s * n), (r = 1)),
                        { chunk: o / n, ratio: r, start: e.pixels[t] - o / 2 }
                      );
                    })(t, e, n, i),
              c = this._getStackIndex(
                this.index,
                this._cachedMeta.stack,
                s ? t : void 0
              );
            (r = l.start + l.chunk * c + l.chunk / 2),
              (a = Math.min(o, l.chunk * l.ratio));
          } else
            (r = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
              (a = Math.min(o, e.min * e.ratio));
          return { base: r - a / 2, head: r + a / 2, center: r, size: a };
        }
        draw() {
          const t = this._cachedMeta,
            e = t.vScale,
            i = t.data,
            n = i.length;
          let s = 0;
          for (; s < n; ++s)
            null !== this.getParsed(s)[e.axis] && i[s].draw(this._ctx);
        }
      },
      BubbleController: class extends Ui {
        static id = 'bubble';
        static defaults = {
          datasetElementType: !1,
          dataElementType: 'point',
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'borderWidth', 'radius'],
            },
          },
        };
        static overrides = {
          scales: { x: { type: 'linear' }, y: { type: 'linear' } },
        };
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
        }
        parsePrimitiveData(t, e, i, n) {
          const s = super.parsePrimitiveData(t, e, i, n);
          for (let t = 0; t < s.length; t++)
            s[t]._custom = this.resolveDataElementOptions(t + i).radius;
          return s;
        }
        parseArrayData(t, e, i, n) {
          const s = super.parseArrayData(t, e, i, n);
          for (let t = 0; t < s.length; t++) {
            const n = e[i + t];
            s[t]._custom = q(
              n[2],
              this.resolveDataElementOptions(t + i).radius
            );
          }
          return s;
        }
        parseObjectData(t, e, i, n) {
          const s = super.parseObjectData(t, e, i, n);
          for (let t = 0; t < s.length; t++) {
            const n = e[i + t];
            s[t]._custom = q(
              n && n.r && +n.r,
              this.resolveDataElementOptions(t + i).radius
            );
          }
          return s;
        }
        getMaxOverflow() {
          const t = this._cachedMeta.data;
          let e = 0;
          for (let i = t.length - 1; i >= 0; --i)
            e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
          return e > 0 && e;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart.data.labels || [],
            { xScale: n, yScale: s } = e,
            o = this.getParsed(t),
            r = n.getLabelForValue(o.x),
            a = s.getLabelForValue(o.y),
            l = o._custom;
          return {
            label: i[t] || '',
            value: '(' + r + ', ' + a + (l ? ', ' + l : '') + ')',
          };
        }
        update(t) {
          const e = this._cachedMeta.data;
          this.updateElements(e, 0, e.length, t);
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            { iScale: o, vScale: r } = this._cachedMeta,
            { sharedOptions: a, includeOptions: l } = this._getSharedOptions(
              e,
              n
            ),
            c = o.axis,
            h = r.axis;
          for (let u = e; u < e + i; u++) {
            const e = t[u],
              i = !s && this.getParsed(u),
              d = {},
              f = (d[c] = s
                ? o.getPixelForDecimal(0.5)
                : o.getPixelForValue(i[c])),
              p = (d[h] = s ? r.getBasePixel() : r.getPixelForValue(i[h]));
            (d.skip = isNaN(f) || isNaN(p)),
              l &&
                ((d.options =
                  a ||
                  this.resolveDataElementOptions(u, e.active ? 'active' : n)),
                s && (d.options.radius = 0)),
              this.updateElement(e, u, d, n);
          }
        }
        resolveDataElementOptions(t, e) {
          const i = this.getParsed(t);
          let n = super.resolveDataElementOptions(t, e);
          n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
          const s = n.radius;
          return (
            'active' !== e && (n.radius = 0),
            (n.radius += q(i && i._custom, s)),
            n
          );
        }
      },
      DoughnutController: tn,
      LineController: class extends Ui {
        static id = 'line';
        static defaults = {
          datasetElementType: 'line',
          dataElementType: 'point',
          showLine: !0,
          spanGaps: !1,
        };
        static overrides = {
          scales: {
            _index_: { type: 'category' },
            _value_: { type: 'linear' },
          },
        };
        initialize() {
          (this.enableOptionSharing = !0),
            (this.supportsDecimation = !0),
            super.initialize();
        }
        update(t) {
          const e = this._cachedMeta,
            { dataset: i, data: n = [], _dataset: s } = e,
            o = this.chart._animationsDisabled;
          let { start: r, count: a } = Ut(e, n, o);
          (this._drawStart = r),
            (this._drawCount = a),
            $t(e) && ((r = 0), (a = n.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!s._decimated),
            (i.points = n);
          const l = this.resolveDatasetElementOptions(t);
          this.options.showLine || (l.borderWidth = 0),
            (l.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !o, options: l }, t),
            this.updateElements(n, r, a, t);
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            {
              iScale: o,
              vScale: r,
              _stacked: a,
              _dataset: l,
            } = this._cachedMeta,
            { sharedOptions: c, includeOptions: h } = this._getSharedOptions(
              e,
              n
            ),
            u = o.axis,
            d = r.axis,
            { spanGaps: f, segment: p } = this.options,
            g = wt(f) ? f : Number.POSITIVE_INFINITY,
            m = this.chart._animationsDisabled || s || 'none' === n,
            b = e + i,
            x = t.length;
          let v = e > 0 && this.getParsed(e - 1);
          for (let i = 0; i < x; ++i) {
            const f = t[i],
              x = m ? f : {};
            if (i < e || i >= b) {
              x.skip = !0;
              continue;
            }
            const _ = this.getParsed(i),
              y = H(_[d]),
              k = (x[u] = o.getPixelForValue(_[u], i)),
              w = (x[d] =
                s || y
                  ? r.getBasePixel()
                  : r.getPixelForValue(a ? this.applyStack(r, _, a) : _[d], i));
            (x.skip = isNaN(k) || isNaN(w) || y),
              (x.stop = i > 0 && Math.abs(_[u] - v[u]) > g),
              p && ((x.parsed = _), (x.raw = l.data[i])),
              h &&
                (x.options =
                  c ||
                  this.resolveDataElementOptions(i, f.active ? 'active' : n)),
              m || this.updateElement(f, i, x, n),
              (v = _);
          }
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.dataset,
            i = (e.options && e.options.borderWidth) || 0,
            n = t.data || [];
          if (!n.length) return i;
          const s = n[0].size(this.resolveDataElementOptions(0)),
            o = n[n.length - 1].size(
              this.resolveDataElementOptions(n.length - 1)
            );
          return Math.max(i, s, o) / 2;
        }
        draw() {
          const t = this._cachedMeta;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            super.draw();
        }
      },
      PolarAreaController: en,
      PieController: class extends tn {
        static id = 'pie';
        static defaults = {
          cutout: 0,
          rotation: 0,
          circumference: 360,
          radius: '100%',
        };
      },
      RadarController: class extends Ui {
        static id = 'radar';
        static defaults = {
          datasetElementType: 'line',
          dataElementType: 'point',
          indexAxis: 'r',
          showLine: !0,
          elements: { line: { fill: 'start' } },
        };
        static overrides = {
          aspectRatio: 1,
          scales: { r: { type: 'radialLinear' } },
        };
        getLabelAndValue(t) {
          const e = this._cachedMeta.vScale,
            i = this.getParsed(t);
          return {
            label: e.getLabels()[t],
            value: '' + e.getLabelForValue(i[e.axis]),
          };
        }
        parseObjectData(t, e, i, n) {
          return Je.bind(this)(t, e, i, n);
        }
        update(t) {
          const e = this._cachedMeta,
            i = e.dataset,
            n = e.data || [],
            s = e.iScale.getLabels();
          if (((i.points = n), 'resize' !== t)) {
            const e = this.resolveDatasetElementOptions(t);
            this.options.showLine || (e.borderWidth = 0);
            const o = {
              _loop: !0,
              _fullLoop: s.length === n.length,
              options: e,
            };
            this.updateElement(i, void 0, o, t);
          }
          this.updateElements(n, 0, n.length, t);
        }
        updateElements(t, e, i, n) {
          const s = this._cachedMeta.rScale,
            o = 'reset' === n;
          for (let r = e; r < e + i; r++) {
            const e = t[r],
              i = this.resolveDataElementOptions(r, e.active ? 'active' : n),
              a = s.getPointPositionForValue(r, this.getParsed(r).r),
              l = o ? s.xCenter : a.x,
              c = o ? s.yCenter : a.y,
              h = {
                x: l,
                y: c,
                angle: a.angle,
                skip: isNaN(l) || isNaN(c),
                options: i,
              };
            this.updateElement(e, r, h, n);
          }
        }
      },
      ScatterController: class extends Ui {
        static id = 'scatter';
        static defaults = {
          datasetElementType: !1,
          dataElementType: 'point',
          showLine: !1,
          fill: !1,
        };
        static overrides = {
          interaction: { mode: 'point' },
          scales: { x: { type: 'linear' }, y: { type: 'linear' } },
        };
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart.data.labels || [],
            { xScale: n, yScale: s } = e,
            o = this.getParsed(t),
            r = n.getLabelForValue(o.x),
            a = s.getLabelForValue(o.y);
          return { label: i[t] || '', value: '(' + r + ', ' + a + ')' };
        }
        update(t) {
          const e = this._cachedMeta,
            { data: i = [] } = e,
            n = this.chart._animationsDisabled;
          let { start: s, count: o } = Ut(e, i, n);
          if (
            ((this._drawStart = s),
            (this._drawCount = o),
            $t(e) && ((s = 0), (o = i.length)),
            this.options.showLine)
          ) {
            const { dataset: s, _dataset: o } = e;
            (s._chart = this.chart),
              (s._datasetIndex = this.index),
              (s._decimated = !!o._decimated),
              (s.points = i);
            const r = this.resolveDatasetElementOptions(t);
            (r.segment = this.options.segment),
              this.updateElement(s, void 0, { animated: !n, options: r }, t);
          }
          this.updateElements(i, s, o, t);
        }
        addElements() {
          const { showLine: t } = this.options;
          !this.datasetElementType &&
            t &&
            (this.datasetElementType = this.chart.registry.getElement('line')),
            super.addElements();
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            {
              iScale: o,
              vScale: r,
              _stacked: a,
              _dataset: l,
            } = this._cachedMeta,
            c = this.resolveDataElementOptions(e, n),
            h = this.getSharedOptions(c),
            u = this.includeOptions(n, h),
            d = o.axis,
            f = r.axis,
            { spanGaps: p, segment: g } = this.options,
            m = wt(p) ? p : Number.POSITIVE_INFINITY,
            b = this.chart._animationsDisabled || s || 'none' === n;
          let x = e > 0 && this.getParsed(e - 1);
          for (let c = e; c < e + i; ++c) {
            const e = t[c],
              i = this.getParsed(c),
              p = b ? e : {},
              v = H(i[f]),
              _ = (p[d] = o.getPixelForValue(i[d], c)),
              y = (p[f] =
                s || v
                  ? r.getBasePixel()
                  : r.getPixelForValue(a ? this.applyStack(r, i, a) : i[f], c));
            (p.skip = isNaN(_) || isNaN(y) || v),
              (p.stop = c > 0 && Math.abs(i[d] - x[d]) > m),
              g && ((p.parsed = i), (p.raw = l.data[c])),
              u &&
                (p.options =
                  h ||
                  this.resolveDataElementOptions(c, e.active ? 'active' : n)),
              b || this.updateElement(e, c, p, n),
              (x = i);
          }
          this.updateSharedOptions(h, n, c);
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.data || [];
          if (!this.options.showLine) {
            let t = 0;
            for (let i = e.length - 1; i >= 0; --i)
              t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
            return t > 0 && t;
          }
          const i = t.dataset,
            n = (i.options && i.options.borderWidth) || 0;
          if (!e.length) return n;
          const s = e[0].size(this.resolveDataElementOptions(0)),
            o = e[e.length - 1].size(
              this.resolveDataElementOptions(e.length - 1)
            );
          return Math.max(n, s, o) / 2;
        }
      },
    });
    function sn() {
      throw new Error(
        'This method is not implemented: Check that a complete date adapter is provided.'
      );
    }
    class on {
      static override(t) {
        Object.assign(on.prototype, t);
      }
      constructor(t) {
        this.options = t || {};
      }
      init() {}
      formats() {
        return sn();
      }
      parse() {
        return sn();
      }
      format() {
        return sn();
      }
      add() {
        return sn();
      }
      diff() {
        return sn();
      }
      startOf() {
        return sn();
      }
      endOf() {
        return sn();
      }
    }
    var rn = on;
    function an(t, e, i, n) {
      const { controller: s, data: o, _sorted: r } = t,
        a = s._cachedMeta.iScale;
      if (a && e === a.axis && 'r' !== e && r && o.length) {
        const t = a._reversePixels ? It : Ft;
        if (!n) return t(o, e, i);
        if (s._sharedOptions) {
          const n = o[0],
            s = 'function' == typeof n.getRange && n.getRange(e);
          if (s) {
            const n = t(o, e, i - s),
              r = t(o, e, i + s);
            return { lo: n.lo, hi: r.hi };
          }
        }
      }
      return { lo: 0, hi: o.length - 1 };
    }
    function ln(t, e, i, n, s) {
      const o = t.getSortedVisibleDatasetMetas(),
        r = i[e];
      for (let t = 0, i = o.length; t < i; ++t) {
        const { index: i, data: a } = o[t],
          { lo: l, hi: c } = an(o[t], e, r, s);
        for (let t = l; t <= c; ++t) {
          const e = a[t];
          e.skip || n(e, i, t);
        }
      }
    }
    function cn(t, e, i, n, s) {
      const o = [];
      return s || t.isPointInArea(e)
        ? (ln(
            t,
            i,
            e,
            function (i, r, a) {
              (s || xe(i, t.chartArea, 0)) &&
                i.inRange(e.x, e.y, n) &&
                o.push({ element: i, datasetIndex: r, index: a });
            },
            !0
          ),
          o)
        : o;
    }
    function hn(t, e, i, n, s, o) {
      return o || t.isPointInArea(e)
        ? 'r' !== i || n
          ? (function (t, e, i, n, s, o) {
              let r = [];
              const a = (function (t) {
                const e = -1 !== t.indexOf('x'),
                  i = -1 !== t.indexOf('y');
                return function (t, n) {
                  const s = e ? Math.abs(t.x - n.x) : 0,
                    o = i ? Math.abs(t.y - n.y) : 0;
                  return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
                };
              })(i);
              let l = Number.POSITIVE_INFINITY;
              return (
                ln(t, i, e, function (i, c, h) {
                  const u = i.inRange(e.x, e.y, s);
                  if (n && !u) return;
                  const d = i.getCenterPoint(s);
                  if (!o && !t.isPointInArea(d) && !u) return;
                  const f = a(e, d);
                  f < l
                    ? ((r = [{ element: i, datasetIndex: c, index: h }]),
                      (l = f))
                    : f === l &&
                      r.push({ element: i, datasetIndex: c, index: h });
                }),
                r
              );
            })(t, e, i, n, s, o)
          : (function (t, e, i, n) {
              let s = [];
              return (
                ln(t, i, e, function (t, i, o) {
                  const { startAngle: r, endAngle: a } = t.getProps(
                      ['startAngle', 'endAngle'],
                      n
                    ),
                    { angle: l } = Lt(t, { x: e.x, y: e.y });
                  Pt(l, r, a) &&
                    s.push({ element: t, datasetIndex: i, index: o });
                }),
                s
              );
            })(t, e, i, s)
        : [];
    }
    function un(t, e, i, n, s) {
      const o = [],
        r = 'x' === i ? 'inXRange' : 'inYRange';
      let a = !1;
      return (
        ln(t, i, e, (t, n, l) => {
          t[r](e[i], s) &&
            (o.push({ element: t, datasetIndex: n, index: l }),
            (a = a || t.inRange(e.x, e.y, s)));
        }),
        n && !a ? [] : o
      );
    }
    var dn = {
      evaluateInteractionItems: ln,
      modes: {
        index(t, e, i, n) {
          const s = ui(e, t),
            o = i.axis || 'x',
            r = i.includeInvisible || !1,
            a = i.intersect ? cn(t, s, o, n, r) : hn(t, s, o, !1, n, r),
            l = [];
          return a.length
            ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                const e = a[0].index,
                  i = t.data[e];
                i &&
                  !i.skip &&
                  l.push({ element: i, datasetIndex: t.index, index: e });
              }),
              l)
            : [];
        },
        dataset(t, e, i, n) {
          const s = ui(e, t),
            o = i.axis || 'xy',
            r = i.includeInvisible || !1;
          let a = i.intersect ? cn(t, s, o, n, r) : hn(t, s, o, !1, n, r);
          if (a.length > 0) {
            const e = a[0].datasetIndex,
              i = t.getDatasetMeta(e).data;
            a = [];
            for (let t = 0; t < i.length; ++t)
              a.push({ element: i[t], datasetIndex: e, index: t });
          }
          return a;
        },
        point: (t, e, i, n) =>
          cn(t, ui(e, t), i.axis || 'xy', n, i.includeInvisible || !1),
        nearest(t, e, i, n) {
          const s = ui(e, t),
            o = i.axis || 'xy',
            r = i.includeInvisible || !1;
          return hn(t, s, o, i.intersect, n, r);
        },
        x: (t, e, i, n) => un(t, ui(e, t), 'x', i.intersect, n),
        y: (t, e, i, n) => un(t, ui(e, t), 'y', i.intersect, n),
      },
    };
    const fn = ['left', 'top', 'right', 'bottom'];
    function pn(t, e) {
      return t.filter((t) => t.pos === e);
    }
    function gn(t, e) {
      return t.filter((t) => -1 === fn.indexOf(t.pos) && t.box.axis === e);
    }
    function mn(t, e) {
      return t.sort((t, i) => {
        const n = e ? i : t,
          s = e ? t : i;
        return n.weight === s.weight ? n.index - s.index : n.weight - s.weight;
      });
    }
    function bn(t, e, i, n) {
      return Math.max(t[i], e[i]) + Math.max(t[n], e[n]);
    }
    function xn(t, e) {
      (t.top = Math.max(t.top, e.top)),
        (t.left = Math.max(t.left, e.left)),
        (t.bottom = Math.max(t.bottom, e.bottom)),
        (t.right = Math.max(t.right, e.right));
    }
    function vn(t, e, i, n) {
      const { pos: s, box: o } = i,
        r = t.maxPadding;
      if (!U(s)) {
        i.size && (t[s] -= i.size);
        const e = n[i.stack] || { size: 0, count: 1 };
        (e.size = Math.max(e.size, i.horizontal ? o.height : o.width)),
          (i.size = e.size / e.count),
          (t[s] += i.size);
      }
      o.getPadding && xn(r, o.getPadding());
      const a = Math.max(0, e.outerWidth - bn(r, t, 'left', 'right')),
        l = Math.max(0, e.outerHeight - bn(r, t, 'top', 'bottom')),
        c = a !== t.w,
        h = l !== t.h;
      return (
        (t.w = a),
        (t.h = l),
        i.horizontal ? { same: c, other: h } : { same: h, other: c }
      );
    }
    function _n(t, e) {
      const i = e.maxPadding;
      return (function (t) {
        const n = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
          t.forEach((t) => {
            n[t] = Math.max(e[t], i[t]);
          }),
          n
        );
      })(t ? ['left', 'right'] : ['top', 'bottom']);
    }
    function yn(t, e, i, n) {
      const s = [];
      let o, r, a, l, c, h;
      for (o = 0, r = t.length, c = 0; o < r; ++o) {
        (a = t[o]),
          (l = a.box),
          l.update(a.width || e.w, a.height || e.h, _n(a.horizontal, e));
        const { same: r, other: u } = vn(e, i, a, n);
        (c |= r && s.length), (h = h || u), l.fullSize || s.push(a);
      }
      return (c && yn(s, e, i, n)) || h;
    }
    function kn(t, e, i, n, s) {
      (t.top = i),
        (t.left = e),
        (t.right = e + n),
        (t.bottom = i + s),
        (t.width = n),
        (t.height = s);
    }
    function wn(t, e, i, n) {
      const s = i.padding;
      let { x: o, y: r } = e;
      for (const a of t) {
        const t = a.box,
          l = n[a.stack] || { count: 1, placed: 0, weight: 1 },
          c = a.stackWeight / l.weight || 1;
        if (a.horizontal) {
          const n = e.w * c,
            o = l.size || t.height;
          lt(l.start) && (r = l.start),
            t.fullSize
              ? kn(t, s.left, r, i.outerWidth - s.right - s.left, o)
              : kn(t, e.left + l.placed, r, n, o),
            (l.start = r),
            (l.placed += n),
            (r = t.bottom);
        } else {
          const n = e.h * c,
            r = l.size || t.width;
          lt(l.start) && (o = l.start),
            t.fullSize
              ? kn(t, o, s.top, r, i.outerHeight - s.bottom - s.top)
              : kn(t, o, e.top + l.placed, r, n),
            (l.start = o),
            (l.placed += n),
            (o = t.right);
        }
      }
      (e.x = o), (e.y = r);
    }
    var Sn = {
      addBox(t, e) {
        t.boxes || (t.boxes = []),
          (e.fullSize = e.fullSize || !1),
          (e.position = e.position || 'top'),
          (e.weight = e.weight || 0),
          (e._layers =
            e._layers ||
            function () {
              return [
                {
                  z: 0,
                  draw(t) {
                    e.draw(t);
                  },
                },
              ];
            }),
          t.boxes.push(e);
      },
      removeBox(t, e) {
        const i = t.boxes ? t.boxes.indexOf(e) : -1;
        -1 !== i && t.boxes.splice(i, 1);
      },
      configure(t, e, i) {
        (e.fullSize = i.fullSize),
          (e.position = i.position),
          (e.weight = i.weight);
      },
      update(t, e, i, n) {
        if (!t) return;
        const s = Re(t.options.layout.padding),
          o = Math.max(e - s.width, 0),
          r = Math.max(i - s.height, 0),
          a = (function (t) {
            const e = (function (t) {
                const e = [];
                let i, n, s, o, r, a;
                for (i = 0, n = (t || []).length; i < n; ++i)
                  (s = t[i]),
                    ({
                      position: o,
                      options: { stack: r, stackWeight: a = 1 },
                    } = s),
                    e.push({
                      index: i,
                      box: s,
                      pos: o,
                      horizontal: s.isHorizontal(),
                      weight: s.weight,
                      stack: r && o + r,
                      stackWeight: a,
                    });
                return e;
              })(t),
              i = mn(
                e.filter((t) => t.box.fullSize),
                !0
              ),
              n = mn(pn(e, 'left'), !0),
              s = mn(pn(e, 'right')),
              o = mn(pn(e, 'top'), !0),
              r = mn(pn(e, 'bottom')),
              a = gn(e, 'x'),
              l = gn(e, 'y');
            return {
              fullSize: i,
              leftAndTop: n.concat(o),
              rightAndBottom: s.concat(l).concat(r).concat(a),
              chartArea: pn(e, 'chartArea'),
              vertical: n.concat(s).concat(l),
              horizontal: o.concat(r).concat(a),
            };
          })(t.boxes),
          l = a.vertical,
          c = a.horizontal;
        J(t.boxes, (t) => {
          'function' == typeof t.beforeLayout && t.beforeLayout();
        });
        const h =
            l.reduce(
              (t, e) =>
                e.box.options && !1 === e.box.options.display ? t : t + 1,
              0
            ) || 1,
          u = Object.freeze({
            outerWidth: e,
            outerHeight: i,
            padding: s,
            availableWidth: o,
            availableHeight: r,
            vBoxMaxWidth: o / 2 / h,
            hBoxMaxHeight: r / 2,
          }),
          d = Object.assign({}, s);
        xn(d, Re(n));
        const f = Object.assign(
            { maxPadding: d, w: o, h: r, x: s.left, y: s.top },
            s
          ),
          p = (function (t, e) {
            const i = (function (t) {
                const e = {};
                for (const i of t) {
                  const { stack: t, pos: n, stackWeight: s } = i;
                  if (!t || !fn.includes(n)) continue;
                  const o =
                    e[t] ||
                    (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                  o.count++, (o.weight += s);
                }
                return e;
              })(t),
              { vBoxMaxWidth: n, hBoxMaxHeight: s } = e;
            let o, r, a;
            for (o = 0, r = t.length; o < r; ++o) {
              a = t[o];
              const { fullSize: r } = a.box,
                l = i[a.stack],
                c = l && a.stackWeight / l.weight;
              a.horizontal
                ? ((a.width = c ? c * n : r && e.availableWidth),
                  (a.height = s))
                : ((a.width = n),
                  (a.height = c ? c * s : r && e.availableHeight));
            }
            return i;
          })(l.concat(c), u);
        yn(a.fullSize, f, u, p),
          yn(l, f, u, p),
          yn(c, f, u, p) && yn(l, f, u, p),
          (function (t) {
            const e = t.maxPadding;
            function i(i) {
              const n = Math.max(e[i] - t[i], 0);
              return (t[i] += n), n;
            }
            (t.y += i('top')), (t.x += i('left')), i('right'), i('bottom');
          })(f),
          wn(a.leftAndTop, f, u, p),
          (f.x += f.w),
          (f.y += f.h),
          wn(a.rightAndBottom, f, u, p),
          (t.chartArea = {
            left: f.left,
            top: f.top,
            right: f.left + f.w,
            bottom: f.top + f.h,
            height: f.h,
            width: f.w,
          }),
          J(a.chartArea, (e) => {
            const i = e.box;
            Object.assign(i, t.chartArea),
              i.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
          });
      },
    };
    class En {
      acquireContext(t, e) {}
      releaseContext(t) {
        return !1;
      }
      addEventListener(t, e, i) {}
      removeEventListener(t, e, i) {}
      getDevicePixelRatio() {
        return 1;
      }
      getMaximumSize(t, e, i, n) {
        return (
          (e = Math.max(0, e || t.width)),
          (i = i || t.height),
          { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
        );
      }
      isAttached(t) {
        return !0;
      }
      updateConfig(t) {}
    }
    class On extends En {
      acquireContext(t) {
        return (t && t.getContext && t.getContext('2d')) || null;
      }
      updateConfig(t) {
        t.options.animation = !1;
      }
    }
    const Mn = '$chartjs',
      Ln = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup',
        pointerenter: 'mouseenter',
        pointerdown: 'mousedown',
        pointermove: 'mousemove',
        pointerup: 'mouseup',
        pointerleave: 'mouseout',
        pointerout: 'mouseout',
      },
      Tn = (t) => null === t || '' === t,
      An = !!pi && { passive: !0 };
    function Cn(t, e, i) {
      t.canvas.removeEventListener(e, i, An);
    }
    function Pn(t, e) {
      for (const i of t) if (i === e || i.contains(e)) return !0;
    }
    function Dn(t, e, i) {
      const n = t.canvas,
        s = new MutationObserver((t) => {
          let e = !1;
          for (const i of t)
            (e = e || Pn(i.addedNodes, n)), (e = e && !Pn(i.removedNodes, n));
          e && i();
        });
      return s.observe(document, { childList: !0, subtree: !0 }), s;
    }
    function Rn(t, e, i) {
      const n = t.canvas,
        s = new MutationObserver((t) => {
          let e = !1;
          for (const i of t)
            (e = e || Pn(i.removedNodes, n)), (e = e && !Pn(i.addedNodes, n));
          e && i();
        });
      return s.observe(document, { childList: !0, subtree: !0 }), s;
    }
    const Nn = new Map();
    let Fn = 0;
    function In() {
      const t = window.devicePixelRatio;
      t !== Fn &&
        ((Fn = t),
        Nn.forEach((e, i) => {
          i.currentDevicePixelRatio !== t && e();
        }));
    }
    function Bn(t, e, i) {
      const n = t.canvas,
        s = n && oi(n);
      if (!s) return;
      const o = Wt((t, e) => {
          const n = s.clientWidth;
          i(t, e), n < s.clientWidth && i();
        }, window),
        r = new ResizeObserver((t) => {
          const e = t[0],
            i = e.contentRect.width,
            n = e.contentRect.height;
          (0 === i && 0 === n) || o(i, n);
        });
      return (
        r.observe(s),
        (function (t, e) {
          Nn.size || window.addEventListener('resize', In), Nn.set(t, e);
        })(t, o),
        r
      );
    }
    function jn(t, e, i) {
      i && i.disconnect(),
        'resize' === e &&
          (function (t) {
            Nn.delete(t), Nn.size || window.removeEventListener('resize', In);
          })(t);
    }
    function Vn(t, e, i) {
      const n = t.canvas,
        s = Wt((e) => {
          null !== t.ctx &&
            i(
              (function (t, e) {
                const i = Ln[t.type] || t.type,
                  { x: n, y: s } = ui(t, e);
                return {
                  type: i,
                  chart: e,
                  native: t,
                  x: void 0 !== n ? n : null,
                  y: void 0 !== s ? s : null,
                };
              })(e, t)
            );
        }, t);
      return (
        (function (t, e, i) {
          t.addEventListener(e, i, An);
        })(n, e, s),
        s
      );
    }
    class zn extends En {
      acquireContext(t, e) {
        const i = t && t.getContext && t.getContext('2d');
        return i && i.canvas === t
          ? ((function (t, e) {
              const i = t.style,
                n = t.getAttribute('height'),
                s = t.getAttribute('width');
              if (
                ((t[Mn] = {
                  initial: {
                    height: n,
                    width: s,
                    style: {
                      display: i.display,
                      height: i.height,
                      width: i.width,
                    },
                  },
                }),
                (i.display = i.display || 'block'),
                (i.boxSizing = i.boxSizing || 'border-box'),
                Tn(s))
              ) {
                const e = gi(t, 'width');
                void 0 !== e && (t.width = e);
              }
              if (Tn(n))
                if ('' === t.style.height) t.height = t.width / (e || 2);
                else {
                  const e = gi(t, 'height');
                  void 0 !== e && (t.height = e);
                }
            })(t, e),
            i)
          : null;
      }
      releaseContext(t) {
        const e = t.canvas;
        if (!e[Mn]) return !1;
        const i = e[Mn].initial;
        ['height', 'width'].forEach((t) => {
          const n = i[t];
          H(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
        });
        const n = i.style || {};
        return (
          Object.keys(n).forEach((t) => {
            e.style[t] = n[t];
          }),
          (e.width = e.width),
          delete e[Mn],
          !0
        );
      }
      addEventListener(t, e, i) {
        this.removeEventListener(t, e);
        const n = t.$proxies || (t.$proxies = {}),
          s = { attach: Dn, detach: Rn, resize: Bn }[e] || Vn;
        n[e] = s(t, e, i);
      }
      removeEventListener(t, e) {
        const i = t.$proxies || (t.$proxies = {}),
          n = i[e];
        n &&
          (({ attach: jn, detach: jn, resize: jn }[e] || Cn)(t, e, n),
          (i[e] = void 0));
      }
      getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
      getMaximumSize(t, e, i, n) {
        return (function (t, e, i, n) {
          const s = ai(t),
            o = ci(s, 'margin'),
            r = ri(s.maxWidth, t, 'clientWidth') || pt,
            a = ri(s.maxHeight, t, 'clientHeight') || pt,
            l = (function (t, e, i) {
              let n, s;
              if (void 0 === e || void 0 === i) {
                const o = oi(t);
                if (o) {
                  const t = o.getBoundingClientRect(),
                    r = ai(o),
                    a = ci(r, 'border', 'width'),
                    l = ci(r, 'padding');
                  (e = t.width - l.width - a.width),
                    (i = t.height - l.height - a.height),
                    (n = ri(r.maxWidth, o, 'clientWidth')),
                    (s = ri(r.maxHeight, o, 'clientHeight'));
                } else (e = t.clientWidth), (i = t.clientHeight);
              }
              return {
                width: e,
                height: i,
                maxWidth: n || pt,
                maxHeight: s || pt,
              };
            })(t, e, i);
          let { width: c, height: h } = l;
          if ('content-box' === s.boxSizing) {
            const t = ci(s, 'border', 'width'),
              e = ci(s, 'padding');
            (c -= e.width + t.width), (h -= e.height + t.height);
          }
          return (
            (c = Math.max(0, c - o.width)),
            (h = Math.max(0, n ? c / n : h - o.height)),
            (c = di(Math.min(c, r, l.maxWidth))),
            (h = di(Math.min(h, a, l.maxHeight))),
            c && !h && (h = di(c / 2)),
            (void 0 !== e || void 0 !== i) &&
              n &&
              l.height &&
              h > l.height &&
              ((h = l.height), (c = di(Math.floor(h * n)))),
            { width: c, height: h }
          );
        })(t, e, i, n);
      }
      isAttached(t) {
        const e = oi(t);
        return !(!e || !e.isConnected);
      }
    }
    class Wn {
      static defaults = {};
      static defaultRoutes = void 0;
      active = !1;
      tooltipPosition(t) {
        const { x: e, y: i } = this.getProps(['x', 'y'], t);
        return { x: e, y: i };
      }
      hasValue() {
        return wt(this.x) && wt(this.y);
      }
      getProps(t, e) {
        const i = this.$animations;
        if (!e || !i) return this;
        const n = {};
        return (
          t.forEach((t) => {
            n[t] = i[t] && i[t].active() ? i[t]._to : this[t];
          }),
          n
        );
      }
    }
    function Hn(t, e, i, n, s) {
      const o = q(n, 0),
        r = Math.min(q(s, t.length), t.length);
      let a,
        l,
        c,
        h = 0;
      for (
        i = Math.ceil(i),
          s && ((a = s - n), (i = a / Math.floor(a / i))),
          c = o;
        c < 0;

      )
        h++, (c = Math.round(o + h * i));
      for (l = Math.max(o, 0); l < r; l++)
        l === c && (e.push(t[l]), h++, (c = Math.round(o + h * i)));
    }
    const Kn = (t, e, i) => ('top' === e || 'left' === e ? t[e] + i : t[e] - i),
      Un = (t, e) => Math.min(e || t, t);
    function $n(t, e) {
      const i = [],
        n = t.length / e,
        s = t.length;
      let o = 0;
      for (; o < s; o += n) i.push(t[Math.floor(o)]);
      return i;
    }
    function Yn(t, e, i) {
      const n = t.ticks.length,
        s = Math.min(e, n - 1),
        o = t._startPixel,
        r = t._endPixel,
        a = 1e-6;
      let l,
        c = t.getPixelForTick(s);
      if (
        !(
          i &&
          ((l =
            1 === n
              ? Math.max(c - o, r - c)
              : 0 === e
              ? (t.getPixelForTick(1) - c) / 2
              : (c - t.getPixelForTick(s - 1)) / 2),
          (c += s < e ? l : -l),
          c < o - a || c > r + a)
        )
      )
        return c;
    }
    function qn(t) {
      return t.drawTicks ? t.tickLength : 0;
    }
    function Xn(t, e) {
      if (!t.display) return 0;
      const i = Ne(t.font, e),
        n = Re(t.padding);
      return (K(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
    }
    function Gn(t, e, i) {
      let n = Ht(t);
      return (
        ((i && 'right' !== e) || (!i && 'right' === e)) &&
          (n = ((t) => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(
            n
          )),
        n
      );
    }
    class Jn extends Wn {
      constructor(t) {
        super(),
          (this.id = t.id),
          (this.type = t.type),
          (this.options = void 0),
          (this.ctx = t.ctx),
          (this.chart = t.chart),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.left = void 0),
          (this.right = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
          (this.maxWidth = void 0),
          (this.maxHeight = void 0),
          (this.paddingTop = void 0),
          (this.paddingBottom = void 0),
          (this.paddingLeft = void 0),
          (this.paddingRight = void 0),
          (this.axis = void 0),
          (this.labelRotation = void 0),
          (this.min = void 0),
          (this.max = void 0),
          (this._range = void 0),
          (this.ticks = []),
          (this._gridLineItems = null),
          (this._labelItems = null),
          (this._labelSizes = null),
          (this._length = 0),
          (this._maxLength = 0),
          (this._longestTextCache = {}),
          (this._startPixel = void 0),
          (this._endPixel = void 0),
          (this._reversePixels = !1),
          (this._userMax = void 0),
          (this._userMin = void 0),
          (this._suggestedMax = void 0),
          (this._suggestedMin = void 0),
          (this._ticksLength = 0),
          (this._borderValue = 0),
          (this._cache = {}),
          (this._dataLimitsCached = !1),
          (this.$context = void 0);
      }
      init(t) {
        (this.options = t.setContext(this.getContext())),
          (this.axis = t.axis),
          (this._userMin = this.parse(t.min)),
          (this._userMax = this.parse(t.max)),
          (this._suggestedMin = this.parse(t.suggestedMin)),
          (this._suggestedMax = this.parse(t.suggestedMax));
      }
      parse(t, e) {
        return t;
      }
      getUserBounds() {
        let {
          _userMin: t,
          _userMax: e,
          _suggestedMin: i,
          _suggestedMax: n,
        } = this;
        return (
          (t = Y(t, Number.POSITIVE_INFINITY)),
          (e = Y(e, Number.NEGATIVE_INFINITY)),
          (i = Y(i, Number.POSITIVE_INFINITY)),
          (n = Y(n, Number.NEGATIVE_INFINITY)),
          { min: Y(t, i), max: Y(e, n), minDefined: $(t), maxDefined: $(e) }
        );
      }
      getMinMax(t) {
        let e,
          {
            min: i,
            max: n,
            minDefined: s,
            maxDefined: o,
          } = this.getUserBounds();
        if (s && o) return { min: i, max: n };
        const r = this.getMatchingVisibleMetas();
        for (let a = 0, l = r.length; a < l; ++a)
          (e = r[a].controller.getMinMax(this, t)),
            s || (i = Math.min(i, e.min)),
            o || (n = Math.max(n, e.max));
        return (
          (i = o && i > n ? n : i),
          (n = s && i > n ? i : n),
          { min: Y(i, Y(n, i)), max: Y(n, Y(i, n)) }
        );
      }
      getPadding() {
        return {
          left: this.paddingLeft || 0,
          top: this.paddingTop || 0,
          right: this.paddingRight || 0,
          bottom: this.paddingBottom || 0,
        };
      }
      getTicks() {
        return this.ticks;
      }
      getLabels() {
        const t = this.chart.data;
        return (
          this.options.labels ||
          (this.isHorizontal() ? t.xLabels : t.yLabels) ||
          t.labels ||
          []
        );
      }
      getLabelItems(t = this.chart.chartArea) {
        return (
          this._labelItems || (this._labelItems = this._computeLabelItems(t))
        );
      }
      beforeLayout() {
        (this._cache = {}), (this._dataLimitsCached = !1);
      }
      beforeUpdate() {
        G(this.options.beforeUpdate, [this]);
      }
      update(t, e, i) {
        const { beginAtZero: n, grace: s, ticks: o } = this.options,
          r = o.sampleSize;
        this.beforeUpdate(),
          (this.maxWidth = t),
          (this.maxHeight = e),
          (this._margins = i =
            Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
          (this.ticks = null),
          (this._labelSizes = null),
          (this._gridLineItems = null),
          (this._labelItems = null),
          this.beforeSetDimensions(),
          this.setDimensions(),
          this.afterSetDimensions(),
          (this._maxLength = this.isHorizontal()
            ? this.width + i.left + i.right
            : this.height + i.top + i.bottom),
          this._dataLimitsCached ||
            (this.beforeDataLimits(),
            this.determineDataLimits(),
            this.afterDataLimits(),
            (this._range = (function (t, e, i) {
              const { min: n, max: s } = t,
                o = X(e, (s - n) / 2),
                r = (t, e) => (i && 0 === t ? 0 : t + e);
              return { min: r(n, -Math.abs(o)), max: r(s, o) };
            })(this, s, n)),
            (this._dataLimitsCached = !0)),
          this.beforeBuildTicks(),
          (this.ticks = this.buildTicks() || []),
          this.afterBuildTicks();
        const a = r < this.ticks.length;
        this._convertTicksToLabels(a ? $n(this.ticks, r) : this.ticks),
          this.configure(),
          this.beforeCalculateLabelRotation(),
          this.calculateLabelRotation(),
          this.afterCalculateLabelRotation(),
          o.display &&
            (o.autoSkip || 'auto' === o.source) &&
            ((this.ticks = (function (t, e) {
              const i = t.options.ticks,
                n = (function (t) {
                  const e = t.options.offset,
                    i = t._tickSize(),
                    n = t._length / i + (e ? 0 : 1),
                    s = t._maxLength / i;
                  return Math.floor(Math.min(n, s));
                })(t),
                s = Math.min(i.maxTicksLimit || n, n),
                o = i.major.enabled
                  ? (function (t) {
                      const e = [];
                      let i, n;
                      for (i = 0, n = t.length; i < n; i++)
                        t[i].major && e.push(i);
                      return e;
                    })(e)
                  : [],
                r = o.length,
                a = o[0],
                l = o[r - 1],
                c = [];
              if (r > s)
                return (
                  (function (t, e, i, n) {
                    let s,
                      o = 0,
                      r = i[0];
                    for (n = Math.ceil(n), s = 0; s < t.length; s++)
                      s === r && (e.push(t[s]), o++, (r = i[o * n]));
                  })(e, c, o, r / s),
                  c
                );
              const h = (function (t, e, i) {
                const n = (function (t) {
                    const e = t.length;
                    let i, n;
                    if (e < 2) return !1;
                    for (n = t[0], i = 1; i < e; ++i)
                      if (t[i] - t[i - 1] !== n) return !1;
                    return n;
                  })(t),
                  s = e.length / i;
                if (!n) return Math.max(s, 1);
                const o = (function (t) {
                  const e = [],
                    i = Math.sqrt(t);
                  let n;
                  for (n = 1; n < i; n++)
                    t % n == 0 && (e.push(n), e.push(t / n));
                  return (
                    i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e
                  );
                })(n);
                for (let t = 0, e = o.length - 1; t < e; t++) {
                  const e = o[t];
                  if (e > s) return e;
                }
                return Math.max(s, 1);
              })(o, e, s);
              if (r > 0) {
                let t, i;
                const n = r > 1 ? Math.round((l - a) / (r - 1)) : null;
                for (
                  Hn(e, c, h, H(n) ? 0 : a - n, a), t = 0, i = r - 1;
                  t < i;
                  t++
                )
                  Hn(e, c, h, o[t], o[t + 1]);
                return Hn(e, c, h, l, H(n) ? e.length : l + n), c;
              }
              return Hn(e, c, h), c;
            })(this, this.ticks)),
            (this._labelSizes = null),
            this.afterAutoSkip()),
          a && this._convertTicksToLabels(this.ticks),
          this.beforeFit(),
          this.fit(),
          this.afterFit(),
          this.afterUpdate();
      }
      configure() {
        let t,
          e,
          i = this.options.reverse;
        this.isHorizontal()
          ? ((t = this.left), (e = this.right))
          : ((t = this.top), (e = this.bottom), (i = !i)),
          (this._startPixel = t),
          (this._endPixel = e),
          (this._reversePixels = i),
          (this._length = e - t),
          (this._alignToPixels = this.options.alignToPixels);
      }
      afterUpdate() {
        G(this.options.afterUpdate, [this]);
      }
      beforeSetDimensions() {
        G(this.options.beforeSetDimensions, [this]);
      }
      setDimensions() {
        this.isHorizontal()
          ? ((this.width = this.maxWidth),
            (this.left = 0),
            (this.right = this.width))
          : ((this.height = this.maxHeight),
            (this.top = 0),
            (this.bottom = this.height)),
          (this.paddingLeft = 0),
          (this.paddingTop = 0),
          (this.paddingRight = 0),
          (this.paddingBottom = 0);
      }
      afterSetDimensions() {
        G(this.options.afterSetDimensions, [this]);
      }
      _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()),
          G(this.options[t], [this]);
      }
      beforeDataLimits() {
        this._callHooks('beforeDataLimits');
      }
      determineDataLimits() {}
      afterDataLimits() {
        this._callHooks('afterDataLimits');
      }
      beforeBuildTicks() {
        this._callHooks('beforeBuildTicks');
      }
      buildTicks() {
        return [];
      }
      afterBuildTicks() {
        this._callHooks('afterBuildTicks');
      }
      beforeTickToLabelConversion() {
        G(this.options.beforeTickToLabelConversion, [this]);
      }
      generateTickLabels(t) {
        const e = this.options.ticks;
        let i, n, s;
        for (i = 0, n = t.length; i < n; i++)
          (s = t[i]), (s.label = G(e.callback, [s.value, i, t], this));
      }
      afterTickToLabelConversion() {
        G(this.options.afterTickToLabelConversion, [this]);
      }
      beforeCalculateLabelRotation() {
        G(this.options.beforeCalculateLabelRotation, [this]);
      }
      calculateLabelRotation() {
        const t = this.options,
          e = t.ticks,
          i = Un(this.ticks.length, t.ticks.maxTicksLimit),
          n = e.minRotation || 0,
          s = e.maxRotation;
        let o,
          r,
          a,
          l = n;
        if (
          !this._isVisible() ||
          !e.display ||
          n >= s ||
          i <= 1 ||
          !this.isHorizontal()
        )
          return void (this.labelRotation = n);
        const c = this._getLabelSizes(),
          h = c.widest.width,
          u = c.highest.height,
          d = Dt(this.chart.width - h, 0, this.maxWidth);
        (o = t.offset ? this.maxWidth / i : d / (i - 1)),
          h + 6 > o &&
            ((o = d / (i - (t.offset ? 0.5 : 1))),
            (r =
              this.maxHeight -
              qn(t.grid) -
              e.padding -
              Xn(t.title, this.chart.options.font)),
            (a = Math.sqrt(h * h + u * u)),
            (l = Ot(
              Math.min(
                Math.asin(Dt((c.highest.height + 6) / o, -1, 1)),
                Math.asin(Dt(r / a, -1, 1)) - Math.asin(Dt(u / a, -1, 1))
              )
            )),
            (l = Math.max(n, Math.min(s, l)))),
          (this.labelRotation = l);
      }
      afterCalculateLabelRotation() {
        G(this.options.afterCalculateLabelRotation, [this]);
      }
      afterAutoSkip() {}
      beforeFit() {
        G(this.options.beforeFit, [this]);
      }
      fit() {
        const t = { width: 0, height: 0 },
          {
            chart: e,
            options: { ticks: i, title: n, grid: s },
          } = this,
          o = this._isVisible(),
          r = this.isHorizontal();
        if (o) {
          const o = Xn(n, e.options.font);
          if (
            (r
              ? ((t.width = this.maxWidth), (t.height = qn(s) + o))
              : ((t.height = this.maxHeight), (t.width = qn(s) + o)),
            i.display && this.ticks.length)
          ) {
            const {
                first: e,
                last: n,
                widest: s,
                highest: o,
              } = this._getLabelSizes(),
              a = 2 * i.padding,
              l = Et(this.labelRotation),
              c = Math.cos(l),
              h = Math.sin(l);
            if (r) {
              const e = i.mirror ? 0 : h * s.width + c * o.height;
              t.height = Math.min(this.maxHeight, t.height + e + a);
            } else {
              const e = i.mirror ? 0 : c * s.width + h * o.height;
              t.width = Math.min(this.maxWidth, t.width + e + a);
            }
            this._calculatePadding(e, n, h, c);
          }
        }
        this._handleMargins(),
          r
            ? ((this.width = this._length =
                e.width - this._margins.left - this._margins.right),
              (this.height = t.height))
            : ((this.width = t.width),
              (this.height = this._length =
                e.height - this._margins.top - this._margins.bottom));
      }
      _calculatePadding(t, e, i, n) {
        const {
            ticks: { align: s, padding: o },
            position: r,
          } = this.options,
          a = 0 !== this.labelRotation,
          l = 'top' !== r && 'x' === this.axis;
        if (this.isHorizontal()) {
          const r = this.getPixelForTick(0) - this.left,
            c = this.right - this.getPixelForTick(this.ticks.length - 1);
          let h = 0,
            u = 0;
          a
            ? l
              ? ((h = n * t.width), (u = i * e.height))
              : ((h = i * t.height), (u = n * e.width))
            : 'start' === s
            ? (u = e.width)
            : 'end' === s
            ? (h = t.width)
            : 'inner' !== s && ((h = t.width / 2), (u = e.width / 2)),
            (this.paddingLeft = Math.max(
              ((h - r + o) * this.width) / (this.width - r),
              0
            )),
            (this.paddingRight = Math.max(
              ((u - c + o) * this.width) / (this.width - c),
              0
            ));
        } else {
          let i = e.height / 2,
            n = t.height / 2;
          'start' === s
            ? ((i = 0), (n = t.height))
            : 'end' === s && ((i = e.height), (n = 0)),
            (this.paddingTop = i + o),
            (this.paddingBottom = n + o);
        }
      }
      _handleMargins() {
        this._margins &&
          ((this._margins.left = Math.max(
            this.paddingLeft,
            this._margins.left
          )),
          (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
          (this._margins.right = Math.max(
            this.paddingRight,
            this._margins.right
          )),
          (this._margins.bottom = Math.max(
            this.paddingBottom,
            this._margins.bottom
          )));
      }
      afterFit() {
        G(this.options.afterFit, [this]);
      }
      isHorizontal() {
        const { axis: t, position: e } = this.options;
        return 'top' === e || 'bottom' === e || 'x' === t;
      }
      isFullSize() {
        return this.options.fullSize;
      }
      _convertTicksToLabels(t) {
        let e, i;
        for (
          this.beforeTickToLabelConversion(),
            this.generateTickLabels(t),
            e = 0,
            i = t.length;
          e < i;
          e++
        )
          H(t[e].label) && (t.splice(e, 1), i--, e--);
        this.afterTickToLabelConversion();
      }
      _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
          const e = this.options.ticks.sampleSize;
          let i = this.ticks;
          e < i.length && (i = $n(i, e)),
            (this._labelSizes = t =
              this._computeLabelSizes(
                i,
                i.length,
                this.options.ticks.maxTicksLimit
              ));
        }
        return t;
      }
      _computeLabelSizes(t, e, i) {
        const { ctx: n, _longestTextCache: s } = this,
          o = [],
          r = [],
          a = Math.floor(e / Un(e, i));
        let l,
          c,
          h,
          u,
          d,
          f,
          p,
          g,
          m,
          b,
          x,
          v = 0,
          _ = 0;
        for (l = 0; l < e; l += a) {
          if (
            ((u = t[l].label),
            (d = this._resolveTickFontOptions(l)),
            (n.font = f = d.string),
            (p = s[f] = s[f] || { data: {}, gc: [] }),
            (g = d.lineHeight),
            (m = b = 0),
            H(u) || K(u))
          ) {
            if (K(u))
              for (c = 0, h = u.length; c < h; ++c)
                (x = u[c]),
                  H(x) || K(x) || ((m = de(n, p.data, p.gc, m, x)), (b += g));
          } else (m = de(n, p.data, p.gc, m, u)), (b = g);
          o.push(m), r.push(b), (v = Math.max(m, v)), (_ = Math.max(b, _));
        }
        !(function (t, e) {
          J(t, (t) => {
            const i = t.gc,
              n = i.length / 2;
            let s;
            if (n > e) {
              for (s = 0; s < n; ++s) delete t.data[i[s]];
              i.splice(0, n);
            }
          });
        })(s, e);
        const y = o.indexOf(v),
          k = r.indexOf(_),
          w = (t) => ({ width: o[t] || 0, height: r[t] || 0 });
        return {
          first: w(0),
          last: w(e - 1),
          widest: w(y),
          highest: w(k),
          widths: o,
          heights: r,
        };
      }
      getLabelForValue(t) {
        return t;
      }
      getPixelForValue(t, e) {
        return NaN;
      }
      getValueForPixel(t) {}
      getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1
          ? null
          : this.getPixelForValue(e[t].value);
      }
      getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        const e = this._startPixel + t * this._length;
        return Dt(
          this._alignToPixels ? pe(this.chart, e, 0) : e,
          -32768,
          32767
        );
      }
      getDecimalForPixel(t) {
        const e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e;
      }
      getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      }
      getBaseValue() {
        const { min: t, max: e } = this;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
      }
      getContext(t) {
        const e = this.ticks || [];
        if (t >= 0 && t < e.length) {
          const i = e[t];
          return (
            i.$context ||
            (i.$context = (function (t, e, i) {
              return Ie(t, { tick: i, index: e, type: 'tick' });
            })(this.getContext(), t, i))
          );
        }
        return (
          this.$context ||
          (this.$context = Ie(this.chart.getContext(), {
            scale: this,
            type: 'scale',
          }))
        );
      }
      _tickSize() {
        const t = this.options.ticks,
          e = Et(this.labelRotation),
          i = Math.abs(Math.cos(e)),
          n = Math.abs(Math.sin(e)),
          s = this._getLabelSizes(),
          o = t.autoSkipPadding || 0,
          r = s ? s.widest.width + o : 0,
          a = s ? s.highest.height + o : 0;
        return this.isHorizontal()
          ? a * i > r * n
            ? r / i
            : a / n
          : a * n < r * i
          ? a / i
          : r / n;
      }
      _isVisible() {
        const t = this.options.display;
        return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
      }
      _computeGridLineItems(t) {
        const e = this.axis,
          i = this.chart,
          n = this.options,
          { grid: s, position: o, border: r } = n,
          a = s.offset,
          l = this.isHorizontal(),
          c = this.ticks.length + (a ? 1 : 0),
          h = qn(s),
          u = [],
          d = r.setContext(this.getContext()),
          f = d.display ? d.width : 0,
          p = f / 2,
          g = function (t) {
            return pe(i, t, f);
          };
        let m, b, x, v, _, y, k, w, S, E, O, M;
        if ('top' === o)
          (m = g(this.bottom)),
            (y = this.bottom - h),
            (w = m - p),
            (E = g(t.top) + p),
            (M = t.bottom);
        else if ('bottom' === o)
          (m = g(this.top)),
            (E = t.top),
            (M = g(t.bottom) - p),
            (y = m + p),
            (w = this.top + h);
        else if ('left' === o)
          (m = g(this.right)),
            (_ = this.right - h),
            (k = m - p),
            (S = g(t.left) + p),
            (O = t.right);
        else if ('right' === o)
          (m = g(this.left)),
            (S = t.left),
            (O = g(t.right) - p),
            (_ = m + p),
            (k = this.left + h);
        else if ('x' === e) {
          if ('center' === o) m = g((t.top + t.bottom) / 2 + 0.5);
          else if (U(o)) {
            const t = Object.keys(o)[0],
              e = o[t];
            m = g(this.chart.scales[t].getPixelForValue(e));
          }
          (E = t.top), (M = t.bottom), (y = m + p), (w = y + h);
        } else if ('y' === e) {
          if ('center' === o) m = g((t.left + t.right) / 2);
          else if (U(o)) {
            const t = Object.keys(o)[0],
              e = o[t];
            m = g(this.chart.scales[t].getPixelForValue(e));
          }
          (_ = m - p), (k = _ - h), (S = t.left), (O = t.right);
        }
        const L = q(n.ticks.maxTicksLimit, c),
          T = Math.max(1, Math.ceil(c / L));
        for (b = 0; b < c; b += T) {
          const t = this.getContext(b),
            e = s.setContext(t),
            n = r.setContext(t),
            o = e.lineWidth,
            c = e.color,
            h = n.dash || [],
            d = n.dashOffset,
            f = e.tickWidth,
            p = e.tickColor,
            g = e.tickBorderDash || [],
            m = e.tickBorderDashOffset;
          (x = Yn(this, b, a)),
            void 0 !== x &&
              ((v = pe(i, x, o)),
              l ? (_ = k = S = O = v) : (y = w = E = M = v),
              u.push({
                tx1: _,
                ty1: y,
                tx2: k,
                ty2: w,
                x1: S,
                y1: E,
                x2: O,
                y2: M,
                width: o,
                color: c,
                borderDash: h,
                borderDashOffset: d,
                tickWidth: f,
                tickColor: p,
                tickBorderDash: g,
                tickBorderDashOffset: m,
              }));
        }
        return (this._ticksLength = c), (this._borderValue = m), u;
      }
      _computeLabelItems(t) {
        const e = this.axis,
          i = this.options,
          { position: n, ticks: s } = i,
          o = this.isHorizontal(),
          r = this.ticks,
          { align: a, crossAlign: l, padding: c, mirror: h } = s,
          u = qn(i.grid),
          d = u + c,
          f = h ? -c : d,
          p = -Et(this.labelRotation),
          g = [];
        let m,
          b,
          x,
          v,
          _,
          y,
          k,
          w,
          S,
          E,
          O,
          M,
          L = 'middle';
        if ('top' === n)
          (y = this.bottom - f), (k = this._getXAxisLabelAlignment());
        else if ('bottom' === n)
          (y = this.top + f), (k = this._getXAxisLabelAlignment());
        else if ('left' === n) {
          const t = this._getYAxisLabelAlignment(u);
          (k = t.textAlign), (_ = t.x);
        } else if ('right' === n) {
          const t = this._getYAxisLabelAlignment(u);
          (k = t.textAlign), (_ = t.x);
        } else if ('x' === e) {
          if ('center' === n) y = (t.top + t.bottom) / 2 + d;
          else if (U(n)) {
            const t = Object.keys(n)[0],
              e = n[t];
            y = this.chart.scales[t].getPixelForValue(e) + d;
          }
          k = this._getXAxisLabelAlignment();
        } else if ('y' === e) {
          if ('center' === n) _ = (t.left + t.right) / 2 - d;
          else if (U(n)) {
            const t = Object.keys(n)[0],
              e = n[t];
            _ = this.chart.scales[t].getPixelForValue(e);
          }
          k = this._getYAxisLabelAlignment(u).textAlign;
        }
        'y' === e &&
          ('start' === a ? (L = 'top') : 'end' === a && (L = 'bottom'));
        const T = this._getLabelSizes();
        for (m = 0, b = r.length; m < b; ++m) {
          (x = r[m]), (v = x.label);
          const t = s.setContext(this.getContext(m));
          (w = this.getPixelForTick(m) + s.labelOffset),
            (S = this._resolveTickFontOptions(m)),
            (E = S.lineHeight),
            (O = K(v) ? v.length : 1);
          const e = O / 2,
            i = t.color,
            a = t.textStrokeColor,
            c = t.textStrokeWidth;
          let u,
            d = k;
          if (
            (o
              ? ((_ = w),
                'inner' === k &&
                  (d =
                    m === b - 1
                      ? this.options.reverse
                        ? 'left'
                        : 'right'
                      : 0 === m
                      ? this.options.reverse
                        ? 'right'
                        : 'left'
                      : 'center'),
                (M =
                  'top' === n
                    ? 'near' === l || 0 !== p
                      ? -O * E + E / 2
                      : 'center' === l
                      ? -T.highest.height / 2 - e * E + E
                      : -T.highest.height + E / 2
                    : 'near' === l || 0 !== p
                    ? E / 2
                    : 'center' === l
                    ? T.highest.height / 2 - e * E
                    : T.highest.height - O * E),
                h && (M *= -1),
                0 === p || t.showLabelBackdrop || (_ += (E / 2) * Math.sin(p)))
              : ((y = w), (M = ((1 - O) * E) / 2)),
            t.showLabelBackdrop)
          ) {
            const e = Re(t.backdropPadding),
              i = T.heights[m],
              n = T.widths[m];
            let s = M - e.top,
              o = 0 - e.left;
            switch (L) {
              case 'middle':
                s -= i / 2;
                break;
              case 'bottom':
                s -= i;
            }
            switch (k) {
              case 'center':
                o -= n / 2;
                break;
              case 'right':
                o -= n;
            }
            u = {
              left: o,
              top: s,
              width: n + e.width,
              height: i + e.height,
              color: t.backdropColor,
            };
          }
          g.push({
            label: v,
            font: S,
            textOffset: M,
            options: {
              rotation: p,
              color: i,
              strokeColor: a,
              strokeWidth: c,
              textAlign: d,
              textBaseline: L,
              translation: [_, y],
              backdrop: u,
            },
          });
        }
        return g;
      }
      _getXAxisLabelAlignment() {
        const { position: t, ticks: e } = this.options;
        if (-Et(this.labelRotation)) return 'top' === t ? 'left' : 'right';
        let i = 'center';
        return (
          'start' === e.align
            ? (i = 'left')
            : 'end' === e.align
            ? (i = 'right')
            : 'inner' === e.align && (i = 'inner'),
          i
        );
      }
      _getYAxisLabelAlignment(t) {
        const {
            position: e,
            ticks: { crossAlign: i, mirror: n, padding: s },
          } = this.options,
          o = t + s,
          r = this._getLabelSizes().widest.width;
        let a, l;
        return (
          'left' === e
            ? n
              ? ((l = this.right + s),
                'near' === i
                  ? (a = 'left')
                  : 'center' === i
                  ? ((a = 'center'), (l += r / 2))
                  : ((a = 'right'), (l += r)))
              : ((l = this.right - o),
                'near' === i
                  ? (a = 'right')
                  : 'center' === i
                  ? ((a = 'center'), (l -= r / 2))
                  : ((a = 'left'), (l = this.left)))
            : 'right' === e
            ? n
              ? ((l = this.left + s),
                'near' === i
                  ? (a = 'right')
                  : 'center' === i
                  ? ((a = 'center'), (l -= r / 2))
                  : ((a = 'left'), (l -= r)))
              : ((l = this.left + o),
                'near' === i
                  ? (a = 'left')
                  : 'center' === i
                  ? ((a = 'center'), (l += r / 2))
                  : ((a = 'right'), (l = this.right)))
            : (a = 'right'),
          { textAlign: a, x: l }
        );
      }
      _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const t = this.chart,
          e = this.options.position;
        return 'left' === e || 'right' === e
          ? { top: 0, left: this.left, bottom: t.height, right: this.right }
          : 'top' === e || 'bottom' === e
          ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
          : void 0;
      }
      drawBackground() {
        const {
          ctx: t,
          options: { backgroundColor: e },
          left: i,
          top: n,
          width: s,
          height: o,
        } = this;
        e && (t.save(), (t.fillStyle = e), t.fillRect(i, n, s, o), t.restore());
      }
      getLineWidthForValue(t) {
        const e = this.options.grid;
        if (!this._isVisible() || !e.display) return 0;
        const i = this.ticks.findIndex((e) => e.value === t);
        return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
      }
      drawGrid(t) {
        const e = this.options.grid,
          i = this.ctx,
          n =
            this._gridLineItems ||
            (this._gridLineItems = this._computeGridLineItems(t));
        let s, o;
        const r = (t, e, n) => {
          n.width &&
            n.color &&
            (i.save(),
            (i.lineWidth = n.width),
            (i.strokeStyle = n.color),
            i.setLineDash(n.borderDash || []),
            (i.lineDashOffset = n.borderDashOffset),
            i.beginPath(),
            i.moveTo(t.x, t.y),
            i.lineTo(e.x, e.y),
            i.stroke(),
            i.restore());
        };
        if (e.display)
          for (s = 0, o = n.length; s < o; ++s) {
            const t = n[s];
            e.drawOnChartArea &&
              r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
              e.drawTicks &&
                r(
                  { x: t.tx1, y: t.ty1 },
                  { x: t.tx2, y: t.ty2 },
                  {
                    color: t.tickColor,
                    width: t.tickWidth,
                    borderDash: t.tickBorderDash,
                    borderDashOffset: t.tickBorderDashOffset,
                  }
                );
          }
      }
      drawBorder() {
        const {
            chart: t,
            ctx: e,
            options: { border: i, grid: n },
          } = this,
          s = i.setContext(this.getContext()),
          o = i.display ? s.width : 0;
        if (!o) return;
        const r = n.setContext(this.getContext(0)).lineWidth,
          a = this._borderValue;
        let l, c, h, u;
        this.isHorizontal()
          ? ((l = pe(t, this.left, o) - o / 2),
            (c = pe(t, this.right, r) + r / 2),
            (h = u = a))
          : ((h = pe(t, this.top, o) - o / 2),
            (u = pe(t, this.bottom, r) + r / 2),
            (l = c = a)),
          e.save(),
          (e.lineWidth = s.width),
          (e.strokeStyle = s.color),
          e.beginPath(),
          e.moveTo(l, h),
          e.lineTo(c, u),
          e.stroke(),
          e.restore();
      }
      drawLabels(t) {
        if (!this.options.ticks.display) return;
        const e = this.ctx,
          i = this._computeLabelArea();
        i && ve(e, i);
        const n = this.getLabelItems(t);
        for (const t of n) {
          const i = t.options,
            n = t.font;
          we(e, t.label, 0, t.textOffset, n, i);
        }
        i && _e(e);
      }
      drawTitle() {
        const {
          ctx: t,
          options: { position: e, title: i, reverse: n },
        } = this;
        if (!i.display) return;
        const s = Ne(i.font),
          o = Re(i.padding),
          r = i.align;
        let a = s.lineHeight / 2;
        'bottom' === e || 'center' === e || U(e)
          ? ((a += o.bottom),
            K(i.text) && (a += s.lineHeight * (i.text.length - 1)))
          : (a += o.top);
        const {
          titleX: l,
          titleY: c,
          maxWidth: h,
          rotation: u,
        } = (function (t, e, i, n) {
          const { top: s, left: o, bottom: r, right: a, chart: l } = t,
            { chartArea: c, scales: h } = l;
          let u,
            d,
            f,
            p = 0;
          const g = r - s,
            m = a - o;
          if (t.isHorizontal()) {
            if (((d = Kt(n, o, a)), U(i))) {
              const t = Object.keys(i)[0],
                n = i[t];
              f = h[t].getPixelForValue(n) + g - e;
            } else
              f = 'center' === i ? (c.bottom + c.top) / 2 + g - e : Kn(t, i, e);
            u = a - o;
          } else {
            if (U(i)) {
              const t = Object.keys(i)[0],
                n = i[t];
              d = h[t].getPixelForValue(n) - m + e;
            } else
              d = 'center' === i ? (c.left + c.right) / 2 - m + e : Kn(t, i, e);
            (f = Kt(n, r, s)), (p = 'left' === i ? -mt : mt);
          }
          return { titleX: d, titleY: f, maxWidth: u, rotation: p };
        })(this, a, e, r);
        we(t, i.text, 0, 0, s, {
          color: i.color,
          maxWidth: h,
          rotation: u,
          textAlign: Gn(r, e, n),
          textBaseline: 'middle',
          translation: [l, c],
        });
      }
      draw(t) {
        this._isVisible() &&
          (this.drawBackground(),
          this.drawGrid(t),
          this.drawBorder(),
          this.drawTitle(),
          this.drawLabels(t));
      }
      _layers() {
        const t = this.options,
          e = (t.ticks && t.ticks.z) || 0,
          i = q(t.grid && t.grid.z, -1),
          n = q(t.border && t.border.z, 0);
        return this._isVisible() && this.draw === Jn.prototype.draw
          ? [
              {
                z: i,
                draw: (t) => {
                  this.drawBackground(), this.drawGrid(t), this.drawTitle();
                },
              },
              {
                z: n,
                draw: () => {
                  this.drawBorder();
                },
              },
              {
                z: e,
                draw: (t) => {
                  this.drawLabels(t);
                },
              },
            ]
          : [
              {
                z: e,
                draw: (t) => {
                  this.draw(t);
                },
              },
            ];
      }
      getMatchingVisibleMetas(t) {
        const e = this.chart.getSortedVisibleDatasetMetas(),
          i = this.axis + 'AxisID',
          n = [];
        let s, o;
        for (s = 0, o = e.length; s < o; ++s) {
          const o = e[s];
          o[i] !== this.id || (t && o.type !== t) || n.push(o);
        }
        return n;
      }
      _resolveTickFontOptions(t) {
        return Ne(this.options.ticks.setContext(this.getContext(t)).font);
      }
      _maxDigits() {
        const t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t;
      }
    }
    class Zn {
      constructor(t, e, i) {
        (this.type = t),
          (this.scope = e),
          (this.override = i),
          (this.items = Object.create(null));
      }
      isForType(t) {
        return Object.prototype.isPrototypeOf.call(
          this.type.prototype,
          t.prototype
        );
      }
      register(t) {
        const e = Object.getPrototypeOf(t);
        let i;
        (function (t) {
          return 'id' in t && 'defaults' in t;
        })(e) && (i = this.register(e));
        const n = this.items,
          s = t.id,
          o = this.scope + '.' + s;
        if (!s) throw new Error('class does not have id: ' + t);
        return (
          s in n ||
            ((n[s] = t),
            (function (t, e, i) {
              const n = it(Object.create(null), [
                i ? ue.get(i) : {},
                ue.get(e),
                t.defaults,
              ]);
              ue.set(e, n),
                t.defaultRoutes &&
                  (function (t, e) {
                    Object.keys(e).forEach((i) => {
                      const n = i.split('.'),
                        s = n.pop(),
                        o = [t].concat(n).join('.'),
                        r = e[i].split('.'),
                        a = r.pop(),
                        l = r.join('.');
                      ue.route(o, s, l, a);
                    });
                  })(e, t.defaultRoutes),
                t.descriptors && ue.describe(e, t.descriptors);
            })(t, o, i),
            this.override && ue.override(t.id, t.overrides)),
          o
        );
      }
      get(t) {
        return this.items[t];
      }
      unregister(t) {
        const e = this.items,
          i = t.id,
          n = this.scope;
        i in e && delete e[i],
          n && i in ue[n] && (delete ue[n][i], this.override && delete re[i]);
      }
    }
    class Qn {
      constructor() {
        (this.controllers = new Zn(Ui, 'datasets', !0)),
          (this.elements = new Zn(Wn, 'elements')),
          (this.plugins = new Zn(Object, 'plugins')),
          (this.scales = new Zn(Jn, 'scales')),
          (this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements,
          ]);
      }
      add(...t) {
        this._each('register', t);
      }
      remove(...t) {
        this._each('unregister', t);
      }
      addControllers(...t) {
        this._each('register', t, this.controllers);
      }
      addElements(...t) {
        this._each('register', t, this.elements);
      }
      addPlugins(...t) {
        this._each('register', t, this.plugins);
      }
      addScales(...t) {
        this._each('register', t, this.scales);
      }
      getController(t) {
        return this._get(t, this.controllers, 'controller');
      }
      getElement(t) {
        return this._get(t, this.elements, 'element');
      }
      getPlugin(t) {
        return this._get(t, this.plugins, 'plugin');
      }
      getScale(t) {
        return this._get(t, this.scales, 'scale');
      }
      removeControllers(...t) {
        this._each('unregister', t, this.controllers);
      }
      removeElements(...t) {
        this._each('unregister', t, this.elements);
      }
      removePlugins(...t) {
        this._each('unregister', t, this.plugins);
      }
      removeScales(...t) {
        this._each('unregister', t, this.scales);
      }
      _each(t, e, i) {
        [...e].forEach((e) => {
          const n = i || this._getRegistryForType(e);
          i || n.isForType(e) || (n === this.plugins && e.id)
            ? this._exec(t, n, e)
            : J(e, (e) => {
                const n = i || this._getRegistryForType(e);
                this._exec(t, n, e);
              });
        });
      }
      _exec(t, e, i) {
        const n = at(t);
        G(i['before' + n], [], i), e[t](i), G(i['after' + n], [], i);
      }
      _getRegistryForType(t) {
        for (let e = 0; e < this._typedRegistries.length; e++) {
          const i = this._typedRegistries[e];
          if (i.isForType(t)) return i;
        }
        return this.plugins;
      }
      _get(t, e, i) {
        const n = e.get(t);
        if (void 0 === n)
          throw new Error('"' + t + '" is not a registered ' + i + '.');
        return n;
      }
    }
    var ts = new Qn();
    class es {
      constructor() {
        this._init = [];
      }
      notify(t, e, i, n) {
        'beforeInit' === e &&
          ((this._init = this._createDescriptors(t, !0)),
          this._notify(this._init, t, 'install'));
        const s = n ? this._descriptors(t).filter(n) : this._descriptors(t),
          o = this._notify(s, t, e, i);
        return (
          'afterDestroy' === e &&
            (this._notify(s, t, 'stop'),
            this._notify(this._init, t, 'uninstall')),
          o
        );
      }
      _notify(t, e, i, n) {
        n = n || {};
        for (const s of t) {
          const t = s.plugin;
          if (!1 === G(t[i], [e, n, s.options], t) && n.cancelable) return !1;
        }
        return !0;
      }
      invalidate() {
        H(this._cache) ||
          ((this._oldCache = this._cache), (this._cache = void 0));
      }
      _descriptors(t) {
        if (this._cache) return this._cache;
        const e = (this._cache = this._createDescriptors(t));
        return this._notifyStateChanges(t), e;
      }
      _createDescriptors(t, e) {
        const i = t && t.config,
          n = q(i.options && i.options.plugins, {}),
          s = (function (t) {
            const e = {},
              i = [],
              n = Object.keys(ts.plugins.items);
            for (let t = 0; t < n.length; t++) i.push(ts.getPlugin(n[t]));
            const s = t.plugins || [];
            for (let t = 0; t < s.length; t++) {
              const n = s[t];
              -1 === i.indexOf(n) && (i.push(n), (e[n.id] = !0));
            }
            return { plugins: i, localIds: e };
          })(i);
        return !1 !== n || e
          ? (function (t, { plugins: e, localIds: i }, n, s) {
              const o = [],
                r = t.getContext();
              for (const a of e) {
                const e = a.id,
                  l = is(n[e], s);
                null !== l &&
                  o.push({
                    plugin: a,
                    options: ns(t.config, { plugin: a, local: i[e] }, l, r),
                  });
              }
              return o;
            })(t, s, n, e)
          : [];
      }
      _notifyStateChanges(t) {
        const e = this._oldCache || [],
          i = this._cache,
          n = (t, e) =>
            t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
        this._notify(n(e, i), t, 'stop'), this._notify(n(i, e), t, 'start');
      }
    }
    function is(t, e) {
      return e || !1 !== t ? (!0 === t ? {} : t) : null;
    }
    function ns(t, { plugin: e, local: i }, n, s) {
      const o = t.pluginScopeKeys(e),
        r = t.getOptionScopes(n, o);
      return (
        i && e.defaults && r.push(e.defaults),
        t.createResolver(r, s, [''], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0,
        })
      );
    }
    function ss(t, e) {
      const i = ue.datasets[t] || {};
      return (
        ((e.datasets || {})[t] || {}).indexAxis ||
        e.indexAxis ||
        i.indexAxis ||
        'x'
      );
    }
    function os(t, e) {
      if ('x' === t || 'y' === t || 'r' === t) return t;
      var i;
      if (
        (t =
          e.axis ||
          ('top' === (i = e.position) || 'bottom' === i
            ? 'x'
            : 'left' === i || 'right' === i
            ? 'y'
            : void 0) ||
          (t.length > 1 && os(t[0].toLowerCase(), e)))
      )
        return t;
      throw new Error(
        `Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`
      );
    }
    function rs(t) {
      const e = t.options || (t.options = {});
      (e.plugins = q(e.plugins, {})),
        (e.scales = (function (t, e) {
          const i = re[t.type] || { scales: {} },
            n = e.scales || {},
            s = ss(t.type, e),
            o = Object.create(null);
          return (
            Object.keys(n).forEach((t) => {
              const e = n[t];
              if (!U(e))
                return console.error(
                  `Invalid scale configuration for scale: ${t}`
                );
              if (e._proxy)
                return console.warn(
                  `Ignoring resolver passed as options for scale: ${t}`
                );
              const r = os(t, e),
                a = (function (t, e) {
                  return t === e ? '_index_' : '_value_';
                })(r, s),
                l = i.scales || {};
              o[t] = nt(Object.create(null), [{ axis: r }, e, l[r], l[a]]);
            }),
            t.data.datasets.forEach((i) => {
              const s = i.type || t.type,
                r = i.indexAxis || ss(s, e),
                a = (re[s] || {}).scales || {};
              Object.keys(a).forEach((t) => {
                const e = (function (t, e) {
                    let i = t;
                    return (
                      '_index_' === t
                        ? (i = e)
                        : '_value_' === t && (i = 'x' === e ? 'y' : 'x'),
                      i
                    );
                  })(t, r),
                  s = i[e + 'AxisID'] || e;
                (o[s] = o[s] || Object.create(null)),
                  nt(o[s], [{ axis: e }, n[s], a[t]]);
              });
            }),
            Object.keys(o).forEach((t) => {
              const e = o[t];
              nt(e, [ue.scales[e.type], ue.scale]);
            }),
            o
          );
        })(t, e));
    }
    function as(t) {
      return (
        ((t = t || {}).datasets = t.datasets || []),
        (t.labels = t.labels || []),
        t
      );
    }
    const ls = new Map(),
      cs = new Set();
    function hs(t, e) {
      let i = ls.get(t);
      return i || ((i = e()), ls.set(t, i), cs.add(i)), i;
    }
    const us = (t, e, i) => {
      const n = rt(e, i);
      void 0 !== n && t.add(n);
    };
    class ds {
      constructor(t) {
        (this._config = (function (t) {
          return ((t = t || {}).data = as(t.data)), rs(t), t;
        })(t)),
          (this._scopeCache = new Map()),
          (this._resolverCache = new Map());
      }
      get platform() {
        return this._config.platform;
      }
      get type() {
        return this._config.type;
      }
      set type(t) {
        this._config.type = t;
      }
      get data() {
        return this._config.data;
      }
      set data(t) {
        this._config.data = as(t);
      }
      get options() {
        return this._config.options;
      }
      set options(t) {
        this._config.options = t;
      }
      get plugins() {
        return this._config.plugins;
      }
      update() {
        const t = this._config;
        this.clearCache(), rs(t);
      }
      clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
      }
      datasetScopeKeys(t) {
        return hs(t, () => [[`datasets.${t}`, '']]);
      }
      datasetAnimationScopeKeys(t, e) {
        return hs(`${t}.transition.${e}`, () => [
          [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
          [`datasets.${t}`, ''],
        ]);
      }
      datasetElementScopeKeys(t, e) {
        return hs(`${t}-${e}`, () => [
          [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
        ]);
      }
      pluginScopeKeys(t) {
        const e = t.id;
        return hs(`${this.type}-plugin-${e}`, () => [
          [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
        ]);
      }
      _cachedScopes(t, e) {
        const i = this._scopeCache;
        let n = i.get(t);
        return (n && !e) || ((n = new Map()), i.set(t, n)), n;
      }
      getOptionScopes(t, e, i) {
        const { options: n, type: s } = this,
          o = this._cachedScopes(t, i),
          r = o.get(e);
        if (r) return r;
        const a = new Set();
        e.forEach((e) => {
          t && (a.add(t), e.forEach((e) => us(a, t, e))),
            e.forEach((t) => us(a, n, t)),
            e.forEach((t) => us(a, re[s] || {}, t)),
            e.forEach((t) => us(a, ue, t)),
            e.forEach((t) => us(a, ae, t));
        });
        const l = Array.from(a);
        return (
          0 === l.length && l.push(Object.create(null)),
          cs.has(e) && o.set(e, l),
          l
        );
      }
      chartOptionScopes() {
        const { options: t, type: e } = this;
        return [t, re[e] || {}, ue.datasets[e] || {}, { type: e }, ue, ae];
      }
      resolveNamedOptions(t, e, i, n = ['']) {
        const s = { $shared: !0 },
          { resolver: o, subPrefixes: r } = fs(this._resolverCache, t, n);
        let a = o;
        (function (t, e) {
          const { isScriptable: i, isIndexable: n } = Ve(t);
          for (const s of e) {
            const e = i(s),
              o = n(s),
              r = (o || e) && t[s];
            if ((e && (ct(r) || ps(r))) || (o && K(r))) return !0;
          }
          return !1;
        })(o, e) &&
          ((s.$shared = !1),
          (a = je(o, (i = ct(i) ? i() : i), this.createResolver(t, i, r))));
        for (const t of e) s[t] = a[t];
        return s;
      }
      createResolver(t, e, i = [''], n) {
        const { resolver: s } = fs(this._resolverCache, t, i);
        return U(e) ? je(s, e, void 0, n) : s;
      }
    }
    function fs(t, e, i) {
      let n = t.get(e);
      n || ((n = new Map()), t.set(e, n));
      const s = i.join();
      let o = n.get(s);
      return (
        o ||
          ((o = {
            resolver: Be(e, i),
            subPrefixes: i.filter((t) => !t.toLowerCase().includes('hover')),
          }),
          n.set(s, o)),
        o
      );
    }
    const ps = (t) =>
        U(t) &&
        Object.getOwnPropertyNames(t).reduce((e, i) => e || ct(t[i]), !1),
      gs = ['top', 'bottom', 'left', 'right', 'chartArea'];
    function ms(t, e) {
      return (
        'top' === t || 'bottom' === t || (-1 === gs.indexOf(t) && 'x' === e)
      );
    }
    function bs(t, e) {
      return function (i, n) {
        return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t];
      };
    }
    function xs(t) {
      const e = t.chart,
        i = e.options.animation;
      e.notifyPlugins('afterRender'), G(i && i.onComplete, [t], e);
    }
    function vs(t) {
      const e = t.chart,
        i = e.options.animation;
      G(i && i.onProgress, [t], e);
    }
    function _s(t) {
      return (
        si() && 'string' == typeof t
          ? (t = document.getElementById(t))
          : t && t.length && (t = t[0]),
        t && t.canvas && (t = t.canvas),
        t
      );
    }
    const ys = {},
      ks = (t) => {
        const e = _s(t);
        return Object.values(ys)
          .filter((t) => t.canvas === e)
          .pop();
      };
    function ws(t, e, i) {
      const n = Object.keys(t);
      for (const s of n) {
        const n = +s;
        if (n >= e) {
          const o = t[s];
          delete t[s], (i > 0 || n > e) && (t[n + i] = o);
        }
      }
    }
    class Ss {
      static defaults = ue;
      static instances = ys;
      static overrides = re;
      static registry = ts;
      static version = '4.2.1';
      static getChart = ks;
      static register(...t) {
        ts.add(...t), Es();
      }
      static unregister(...t) {
        ts.remove(...t), Es();
      }
      constructor(t, e) {
        const i = (this.config = new ds(e)),
          n = _s(t),
          s = ks(n);
        if (s)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              s.id +
              "' must be destroyed before the canvas with ID '" +
              s.canvas.id +
              "' can be reused."
          );
        const o = i.createResolver(i.chartOptionScopes(), this.getContext());
        (this.platform = new (i.platform ||
          (function (t) {
            return !si() ||
              ('undefined' != typeof OffscreenCanvas &&
                t instanceof OffscreenCanvas)
              ? On
              : zn;
          })(n))()),
          this.platform.updateConfig(i);
        const r = this.platform.acquireContext(n, o.aspectRatio),
          a = r && r.canvas,
          l = a && a.height,
          c = a && a.width;
        (this.id = W()),
          (this.ctx = r),
          (this.canvas = a),
          (this.width = c),
          (this.height = l),
          (this._options = o),
          (this._aspectRatio = this.aspectRatio),
          (this._layers = []),
          (this._metasets = []),
          (this._stacks = void 0),
          (this.boxes = []),
          (this.currentDevicePixelRatio = void 0),
          (this.chartArea = void 0),
          (this._active = []),
          (this._lastEvent = void 0),
          (this._listeners = {}),
          (this._responsiveListeners = void 0),
          (this._sortedMetasets = []),
          (this.scales = {}),
          (this._plugins = new es()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = (function (t, e) {
            let i;
            return function (...n) {
              return (
                e
                  ? (clearTimeout(i), (i = setTimeout(t, e, n)))
                  : t.apply(this, n),
                e
              );
            };
          })((t) => this.update(t), o.resizeDelay || 0)),
          (this._dataChanges = []),
          (ys[this.id] = this),
          r && a
            ? (Ti.listen(this, 'complete', xs),
              Ti.listen(this, 'progress', vs),
              this._initialize(),
              this.attached && this.update())
            : console.error(
                "Failed to create chart: can't acquire context from the given item"
              );
      }
      get aspectRatio() {
        const {
          options: { aspectRatio: t, maintainAspectRatio: e },
          width: i,
          height: n,
          _aspectRatio: s,
        } = this;
        return H(t) ? (e && s ? s : n ? i / n : null) : t;
      }
      get data() {
        return this.config.data;
      }
      set data(t) {
        this.config.data = t;
      }
      get options() {
        return this._options;
      }
      set options(t) {
        this.config.options = t;
      }
      get registry() {
        return ts;
      }
      _initialize() {
        return (
          this.notifyPlugins('beforeInit'),
          this.options.responsive
            ? this.resize()
            : fi(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins('afterInit'),
          this
        );
      }
      clear() {
        return ge(this.canvas, this.ctx), this;
      }
      stop() {
        return Ti.stop(this), this;
      }
      resize(t, e) {
        Ti.running(this)
          ? (this._resizeBeforeDraw = { width: t, height: e })
          : this._resize(t, e);
      }
      _resize(t, e) {
        const i = this.options,
          n = this.canvas,
          s = i.maintainAspectRatio && this.aspectRatio,
          o = this.platform.getMaximumSize(n, t, e, s),
          r = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
          a = this.width ? 'resize' : 'attach';
        (this.width = o.width),
          (this.height = o.height),
          (this._aspectRatio = this.aspectRatio),
          fi(this, r, !0) &&
            (this.notifyPlugins('resize', { size: o }),
            G(i.onResize, [this, o], this),
            this.attached && this._doResize(a) && this.render());
      }
      ensureScalesHaveIDs() {
        J(this.options.scales || {}, (t, e) => {
          t.id = e;
        });
      }
      buildOrUpdateScales() {
        const t = this.options,
          e = t.scales,
          i = this.scales,
          n = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
        let s = [];
        e &&
          (s = s.concat(
            Object.keys(e).map((t) => {
              const i = e[t],
                n = os(t, i),
                s = 'r' === n,
                o = 'x' === n;
              return {
                options: i,
                dposition: s ? 'chartArea' : o ? 'bottom' : 'left',
                dtype: s ? 'radialLinear' : o ? 'category' : 'linear',
              };
            })
          )),
          J(s, (e) => {
            const s = e.options,
              o = s.id,
              r = os(o, s),
              a = q(s.type, e.dtype);
            (void 0 !== s.position && ms(s.position, r) === ms(e.dposition)) ||
              (s.position = e.dposition),
              (n[o] = !0);
            let l = null;
            o in i && i[o].type === a
              ? (l = i[o])
              : ((l = new (ts.getScale(a))({
                  id: o,
                  type: a,
                  ctx: this.ctx,
                  chart: this,
                })),
                (i[l.id] = l)),
              l.init(s, t);
          }),
          J(n, (t, e) => {
            t || delete i[e];
          }),
          J(i, (t) => {
            Sn.configure(this, t, t.options), Sn.addBox(this, t);
          });
      }
      _updateMetasets() {
        const t = this._metasets,
          e = this.data.datasets.length,
          i = t.length;
        if ((t.sort((t, e) => t.index - e.index), i > e)) {
          for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
          t.splice(e, i - e);
        }
        this._sortedMetasets = t.slice(0).sort(bs('order', 'index'));
      }
      _removeUnreferencedMetasets() {
        const {
          _metasets: t,
          data: { datasets: e },
        } = this;
        t.length > e.length && delete this._stacks,
          t.forEach((t, i) => {
            0 === e.filter((e) => e === t._dataset).length &&
              this._destroyDatasetMeta(i);
          });
      }
      buildOrUpdateControllers() {
        const t = [],
          e = this.data.datasets;
        let i, n;
        for (
          this._removeUnreferencedMetasets(), i = 0, n = e.length;
          i < n;
          i++
        ) {
          const n = e[i];
          let s = this.getDatasetMeta(i);
          const o = n.type || this.config.type;
          if (
            (s.type &&
              s.type !== o &&
              (this._destroyDatasetMeta(i), (s = this.getDatasetMeta(i))),
            (s.type = o),
            (s.indexAxis = n.indexAxis || ss(o, this.options)),
            (s.order = n.order || 0),
            (s.index = i),
            (s.label = '' + n.label),
            (s.visible = this.isDatasetVisible(i)),
            s.controller)
          )
            s.controller.updateIndex(i), s.controller.linkScales();
          else {
            const e = ts.getController(o),
              { datasetElementType: n, dataElementType: r } = ue.datasets[o];
            Object.assign(e, {
              dataElementType: ts.getElement(r),
              datasetElementType: n && ts.getElement(n),
            }),
              (s.controller = new e(this, i)),
              t.push(s.controller);
          }
        }
        return this._updateMetasets(), t;
      }
      _resetElements() {
        J(
          this.data.datasets,
          (t, e) => {
            this.getDatasetMeta(e).controller.reset();
          },
          this
        );
      }
      reset() {
        this._resetElements(), this.notifyPlugins('reset');
      }
      update(t) {
        const e = this.config;
        e.update();
        const i = (this._options = e.createResolver(
            e.chartOptionScopes(),
            this.getContext()
          )),
          n = (this._animationsDisabled = !i.animation);
        if (
          (this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          !1 ===
            this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
        )
          return;
        const s = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let o = 0;
        for (let t = 0, e = this.data.datasets.length; t < e; t++) {
          const { controller: e } = this.getDatasetMeta(t),
            i = !n && -1 === s.indexOf(e);
          e.buildOrUpdateElements(i), (o = Math.max(+e.getMaxOverflow(), o));
        }
        (o = this._minPadding = i.layout.autoPadding ? o : 0),
          this._updateLayout(o),
          n ||
            J(s, (t) => {
              t.reset();
            }),
          this._updateDatasets(t),
          this.notifyPlugins('afterUpdate', { mode: t }),
          this._layers.sort(bs('z', '_idx'));
        const { _active: r, _lastEvent: a } = this;
        a
          ? this._eventHandler(a, !0)
          : r.length && this._updateHoverStyles(r, r, !0),
          this.render();
      }
      _updateScales() {
        J(this.scales, (t) => {
          Sn.removeBox(this, t);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        const t = this.options,
          e = new Set(Object.keys(this._listeners)),
          i = new Set(t.events);
        (ht(e, i) && !!this._responsiveListeners === t.responsive) ||
          (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        const { _hiddenIndices: t } = this,
          e = this._getUniformDataChanges() || [];
        for (const { method: i, start: n, count: s } of e)
          ws(t, n, '_removeElements' === i ? -s : s);
      }
      _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const e = this.data.datasets.length,
          i = (e) =>
            new Set(
              t
                .filter((t) => t[0] === e)
                .map((t, e) => e + ',' + t.splice(1).join(','))
            ),
          n = i(0);
        for (let t = 1; t < e; t++) if (!ht(n, i(t))) return;
        return Array.from(n)
          .map((t) => t.split(','))
          .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
      }
      _updateLayout(t) {
        if (!1 === this.notifyPlugins('beforeLayout', { cancelable: !0 }))
          return;
        Sn.update(this, this.width, this.height, t);
        const e = this.chartArea,
          i = e.width <= 0 || e.height <= 0;
        (this._layers = []),
          J(
            this.boxes,
            (t) => {
              (i && 'chartArea' === t.position) ||
                (t.configure && t.configure(),
                this._layers.push(...t._layers()));
            },
            this
          ),
          this._layers.forEach((t, e) => {
            t._idx = e;
          }),
          this.notifyPlugins('afterLayout');
      }
      _updateDatasets(t) {
        if (
          !1 !==
          this.notifyPlugins('beforeDatasetsUpdate', {
            mode: t,
            cancelable: !0,
          })
        ) {
          for (let t = 0, e = this.data.datasets.length; t < e; ++t)
            this.getDatasetMeta(t).controller.configure();
          for (let e = 0, i = this.data.datasets.length; e < i; ++e)
            this._updateDataset(e, ct(t) ? t({ datasetIndex: e }) : t);
          this.notifyPlugins('afterDatasetsUpdate', { mode: t });
        }
      }
      _updateDataset(t, e) {
        const i = this.getDatasetMeta(t),
          n = { meta: i, index: t, mode: e, cancelable: !0 };
        !1 !== this.notifyPlugins('beforeDatasetUpdate', n) &&
          (i.controller._update(e),
          (n.cancelable = !1),
          this.notifyPlugins('afterDatasetUpdate', n));
      }
      render() {
        !1 !== this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
          (Ti.has(this)
            ? this.attached && !Ti.running(this) && Ti.start(this)
            : (this.draw(), xs({ chart: this })));
      }
      draw() {
        let t;
        if (this._resizeBeforeDraw) {
          const { width: t, height: e } = this._resizeBeforeDraw;
          this._resize(t, e), (this._resizeBeforeDraw = null);
        }
        if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
        if (!1 === this.notifyPlugins('beforeDraw', { cancelable: !0 })) return;
        const e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
      }
      _getSortedDatasetMetas(t) {
        const e = this._sortedMetasets,
          i = [];
        let n, s;
        for (n = 0, s = e.length; n < s; ++n) {
          const s = e[n];
          (t && !s.visible) || i.push(s);
        }
        return i;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
      _drawDatasets() {
        if (!1 === this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }))
          return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
        this.notifyPlugins('afterDatasetsDraw');
      }
      _drawDataset(t) {
        const e = this.ctx,
          i = t._clip,
          n = !i.disabled,
          s =
            (function (t) {
              const { xScale: e, yScale: i } = t;
              if (e && i)
                return {
                  left: e.left,
                  right: e.right,
                  top: i.top,
                  bottom: i.bottom,
                };
            })(t) || this.chartArea,
          o = { meta: t, index: t.index, cancelable: !0 };
        !1 !== this.notifyPlugins('beforeDatasetDraw', o) &&
          (n &&
            ve(e, {
              left: !1 === i.left ? 0 : s.left - i.left,
              right: !1 === i.right ? this.width : s.right + i.right,
              top: !1 === i.top ? 0 : s.top - i.top,
              bottom: !1 === i.bottom ? this.height : s.bottom + i.bottom,
            }),
          t.controller.draw(),
          n && _e(e),
          (o.cancelable = !1),
          this.notifyPlugins('afterDatasetDraw', o));
      }
      isPointInArea(t) {
        return xe(t, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(t, e, i, n) {
        const s = dn.modes[e];
        return 'function' == typeof s ? s(this, t, i, n) : [];
      }
      getDatasetMeta(t) {
        const e = this.data.datasets[t],
          i = this._metasets;
        let n = i.filter((t) => t && t._dataset === e).pop();
        return (
          n ||
            ((n = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: (e && e.order) || 0,
              index: t,
              _dataset: e,
              _parsed: [],
              _sorted: !1,
            }),
            i.push(n)),
          n
        );
      }
      getContext() {
        return (
          this.$context ||
          (this.$context = Ie(null, { chart: this, type: 'chart' }))
        );
      }
      getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
      isDatasetVisible(t) {
        const e = this.data.datasets[t];
        if (!e) return !1;
        const i = this.getDatasetMeta(t);
        return 'boolean' == typeof i.hidden ? !i.hidden : !e.hidden;
      }
      setDatasetVisibility(t, e) {
        this.getDatasetMeta(t).hidden = !e;
      }
      toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
      getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
      _updateVisibility(t, e, i) {
        const n = i ? 'show' : 'hide',
          s = this.getDatasetMeta(t),
          o = s.controller._resolveAnimations(void 0, n);
        lt(e)
          ? ((s.data[e].hidden = !i), this.update())
          : (this.setDatasetVisibility(t, i),
            o.update(s, { visible: i }),
            this.update((e) => (e.datasetIndex === t ? n : void 0)));
      }
      hide(t, e) {
        this._updateVisibility(t, e, !1);
      }
      show(t, e) {
        this._updateVisibility(t, e, !0);
      }
      _destroyDatasetMeta(t) {
        const e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
      }
      _stop() {
        let t, e;
        for (
          this.stop(), Ti.remove(this), t = 0, e = this.data.datasets.length;
          t < e;
          ++t
        )
          this._destroyDatasetMeta(t);
      }
      destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: t, ctx: e } = this;
        this._stop(),
          this.config.clearCache(),
          t &&
            (this.unbindEvents(),
            ge(t, e),
            this.platform.releaseContext(e),
            (this.canvas = null),
            (this.ctx = null)),
          delete ys[this.id],
          this.notifyPlugins('afterDestroy');
      }
      toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
      }
      bindEvents() {
        this.bindUserEvents(),
          this.options.responsive
            ? this.bindResponsiveEvents()
            : (this.attached = !0);
      }
      bindUserEvents() {
        const t = this._listeners,
          e = this.platform,
          i = (i, n) => {
            e.addEventListener(this, i, n), (t[i] = n);
          },
          n = (t, e, i) => {
            (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
          };
        J(this.options.events, (t) => i(t, n));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners,
          e = this.platform,
          i = (i, n) => {
            e.addEventListener(this, i, n), (t[i] = n);
          },
          n = (i, n) => {
            t[i] && (e.removeEventListener(this, i, n), delete t[i]);
          },
          s = (t, e) => {
            this.canvas && this.resize(t, e);
          };
        let o;
        const r = () => {
          n('attach', r),
            (this.attached = !0),
            this.resize(),
            i('resize', s),
            i('detach', o);
        };
        (o = () => {
          (this.attached = !1),
            n('resize', s),
            this._stop(),
            this._resize(0, 0),
            i('attach', r);
        }),
          e.isAttached(this.canvas) ? r() : o();
      }
      unbindEvents() {
        J(this._listeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
          (this._listeners = {}),
          J(this._responsiveListeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
          (this._responsiveListeners = void 0);
      }
      updateHoverStyle(t, e, i) {
        const n = i ? 'set' : 'remove';
        let s, o, r, a;
        for (
          'dataset' === e &&
            ((s = this.getDatasetMeta(t[0].datasetIndex)),
            s.controller['_' + n + 'DatasetHoverStyle']()),
            r = 0,
            a = t.length;
          r < a;
          ++r
        ) {
          o = t[r];
          const e = o && this.getDatasetMeta(o.datasetIndex).controller;
          e && e[n + 'HoverStyle'](o.element, o.datasetIndex, o.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t) {
        const e = this._active || [],
          i = t.map(({ datasetIndex: t, index: e }) => {
            const i = this.getDatasetMeta(t);
            if (!i) throw new Error('No dataset found at index ' + t);
            return { datasetIndex: t, element: i.data[e], index: e };
          });
        !Z(i, e) &&
          ((this._active = i),
          (this._lastEvent = null),
          this._updateHoverStyles(i, e));
      }
      notifyPlugins(t, e, i) {
        return this._plugins.notify(this, t, e, i);
      }
      isPluginEnabled(t) {
        return (
          1 === this._plugins._cache.filter((e) => e.plugin.id === t).length
        );
      }
      _updateHoverStyles(t, e, i) {
        const n = this.options.hover,
          s = (t, e) =>
            t.filter(
              (t) =>
                !e.some(
                  (e) =>
                    t.datasetIndex === e.datasetIndex && t.index === e.index
                )
            ),
          o = s(e, t),
          r = i ? t : s(t, e);
        o.length && this.updateHoverStyle(o, n.mode, !1),
          r.length && n.mode && this.updateHoverStyle(r, n.mode, !0);
      }
      _eventHandler(t, e) {
        const i = {
            event: t,
            replay: e,
            cancelable: !0,
            inChartArea: this.isPointInArea(t),
          },
          n = (e) =>
            (e.options.events || this.options.events).includes(t.native.type);
        if (!1 === this.notifyPlugins('beforeEvent', i, n)) return;
        const s = this._handleEvent(t, e, i.inChartArea);
        return (
          (i.cancelable = !1),
          this.notifyPlugins('afterEvent', i, n),
          (s || i.changed) && this.render(),
          this
        );
      }
      _handleEvent(t, e, i) {
        const { _active: n = [], options: s } = this,
          o = e,
          r = this._getActiveElements(t, n, i, o),
          a = (function (t) {
            return (
              'mouseup' === t.type ||
              'click' === t.type ||
              'contextmenu' === t.type
            );
          })(t),
          l = (function (t, e, i, n) {
            return i && 'mouseout' !== t.type ? (n ? e : t) : null;
          })(t, this._lastEvent, i, a);
        i &&
          ((this._lastEvent = null),
          G(s.onHover, [t, r, this], this),
          a && G(s.onClick, [t, r, this], this));
        const c = !Z(r, n);
        return (
          (c || e) && ((this._active = r), this._updateHoverStyles(r, n, e)),
          (this._lastEvent = l),
          c
        );
      }
      _getActiveElements(t, e, i, n) {
        if ('mouseout' === t.type) return [];
        if (!i) return e;
        const s = this.options.hover;
        return this.getElementsAtEventForMode(t, s.mode, s, n);
      }
    }
    function Es() {
      return J(Ss.instances, (t) => t._plugins.invalidate());
    }
    function Os(t, e, i, n) {
      return { x: i + t * Math.cos(e), y: n + t * Math.sin(e) };
    }
    function Ms(t, e, i, n, s, o) {
      const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = e,
        u = Math.max(e.outerRadius + n + i - c, 0),
        d = h > 0 ? h + n + i + c : 0;
      let f = 0;
      const p = s - l;
      if (n) {
        const t = ((h > 0 ? h - n : 0) + (u > 0 ? u - n : 0)) / 2;
        f = (p - (0 !== t ? (p * t) / (t + n) : p)) / 2;
      }
      const g = (p - Math.max(0.001, p * u - i / ut) / u) / 2,
        m = l + g + f,
        b = s - g - f,
        {
          outerStart: x,
          outerEnd: v,
          innerStart: _,
          innerEnd: y,
        } = (function (t, e, i, n) {
          const s = Ce(t.options.borderRadius, [
              'outerStart',
              'outerEnd',
              'innerStart',
              'innerEnd',
            ]),
            o = (i - e) / 2,
            r = Math.min(o, (n * e) / 2),
            a = (t) => {
              const e = ((i - Math.min(o, t)) * n) / 2;
              return Dt(t, 0, Math.min(o, e));
            };
          return {
            outerStart: a(s.outerStart),
            outerEnd: a(s.outerEnd),
            innerStart: Dt(s.innerStart, 0, r),
            innerEnd: Dt(s.innerEnd, 0, r),
          };
        })(e, d, u, b - m),
        k = u - x,
        w = u - v,
        S = m + x / k,
        E = b - v / w,
        O = d + _,
        M = d + y,
        L = m + _ / O,
        T = b - y / M;
      if ((t.beginPath(), o)) {
        const e = (S + E) / 2;
        if ((t.arc(r, a, u, S, e), t.arc(r, a, u, e, E), v > 0)) {
          const e = Os(w, E, r, a);
          t.arc(e.x, e.y, v, E, b + mt);
        }
        const i = Os(M, b, r, a);
        if ((t.lineTo(i.x, i.y), y > 0)) {
          const e = Os(M, T, r, a);
          t.arc(e.x, e.y, y, b + mt, T + Math.PI);
        }
        const n = (b - y / d + (m + _ / d)) / 2;
        if (
          (t.arc(r, a, d, b - y / d, n, !0),
          t.arc(r, a, d, n, m + _ / d, !0),
          _ > 0)
        ) {
          const e = Os(O, L, r, a);
          t.arc(e.x, e.y, _, L + Math.PI, m - mt);
        }
        const s = Os(k, m, r, a);
        if ((t.lineTo(s.x, s.y), x > 0)) {
          const e = Os(k, S, r, a);
          t.arc(e.x, e.y, x, m - mt, S);
        }
      } else {
        t.moveTo(r, a);
        const e = Math.cos(S) * u + r,
          i = Math.sin(S) * u + a;
        t.lineTo(e, i);
        const n = Math.cos(E) * u + r,
          s = Math.sin(E) * u + a;
        t.lineTo(n, s);
      }
      t.closePath();
    }
    function Ls(t, e, i = e) {
      (t.lineCap = q(i.borderCapStyle, e.borderCapStyle)),
        t.setLineDash(q(i.borderDash, e.borderDash)),
        (t.lineDashOffset = q(i.borderDashOffset, e.borderDashOffset)),
        (t.lineJoin = q(i.borderJoinStyle, e.borderJoinStyle)),
        (t.lineWidth = q(i.borderWidth, e.borderWidth)),
        (t.strokeStyle = q(i.borderColor, e.borderColor));
    }
    function Ts(t, e, i) {
      t.lineTo(i.x, i.y);
    }
    function As(t, e, i = {}) {
      const n = t.length,
        { start: s = 0, end: o = n - 1 } = i,
        { start: r, end: a } = e,
        l = Math.max(s, r),
        c = Math.min(o, a),
        h = (s < r && o < r) || (s > a && o > a);
      return {
        count: n,
        start: l,
        loop: e.loop,
        ilen: c < l && !h ? n + c - l : c - l,
      };
    }
    function Cs(t, e, i, n) {
      const { points: s, options: o } = e,
        { count: r, start: a, loop: l, ilen: c } = As(s, i, n),
        h = (function (t) {
          return t.stepped
            ? ye
            : t.tension || 'monotone' === t.cubicInterpolationMode
            ? ke
            : Ts;
        })(o);
      let u,
        d,
        f,
        { move: p = !0, reverse: g } = n || {};
      for (u = 0; u <= c; ++u)
        (d = s[(a + (g ? c - u : u)) % r]),
          d.skip ||
            (p ? (t.moveTo(d.x, d.y), (p = !1)) : h(t, f, d, g, o.stepped),
            (f = d));
      return (
        l && ((d = s[(a + (g ? c : 0)) % r]), h(t, f, d, g, o.stepped)), !!l
      );
    }
    function Ps(t, e, i, n) {
      const s = e.points,
        { count: o, start: r, ilen: a } = As(s, i, n),
        { move: l = !0, reverse: c } = n || {};
      let h,
        u,
        d,
        f,
        p,
        g,
        m = 0,
        b = 0;
      const x = (t) => (r + (c ? a - t : t)) % o,
        v = () => {
          f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g));
        };
      for (l && ((u = s[x(0)]), t.moveTo(u.x, u.y)), h = 0; h <= a; ++h) {
        if (((u = s[x(h)]), u.skip)) continue;
        const e = u.x,
          i = u.y,
          n = 0 | e;
        n === d
          ? (i < f ? (f = i) : i > p && (p = i), (m = (b * m + e) / ++b))
          : (v(), t.lineTo(e, i), (d = n), (b = 0), (f = p = i)),
          (g = i);
      }
      v();
    }
    function Ds(t) {
      const e = t.options,
        i = e.borderDash && e.borderDash.length;
      return t._decimated ||
        t._loop ||
        e.tension ||
        'monotone' === e.cubicInterpolationMode ||
        e.stepped ||
        i
        ? Cs
        : Ps;
    }
    const Rs = 'function' == typeof Path2D;
    class Ns extends Wn {
      static id = 'line';
      static defaults = {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: 'default',
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0,
      };
      static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor',
      };
      static descriptors = {
        _scriptable: !0,
        _indexable: (t) => 'borderDash' !== t && 'fill' !== t,
      };
      constructor(t) {
        super(),
          (this.animated = !0),
          (this.options = void 0),
          (this._chart = void 0),
          (this._loop = void 0),
          (this._fullLoop = void 0),
          (this._path = void 0),
          (this._points = void 0),
          (this._segments = void 0),
          (this._decimated = !1),
          (this._pointsUpdated = !1),
          (this._datasetIndex = void 0),
          t && Object.assign(this, t);
      }
      updateControlPoints(t, e) {
        const i = this.options;
        if (
          (i.tension || 'monotone' === i.cubicInterpolationMode) &&
          !i.stepped &&
          !this._pointsUpdated
        ) {
          const n = i.spanGaps ? this._loop : this._fullLoop;
          ni(this._points, i, t, n, e), (this._pointsUpdated = !0);
        }
      }
      set points(t) {
        (this._points = t),
          delete this._segments,
          delete this._path,
          (this._pointsUpdated = !1);
      }
      get points() {
        return this._points;
      }
      get segments() {
        return (
          this._segments ||
          (this._segments = (function (t, e) {
            const i = t.points,
              n = t.options.spanGaps,
              s = i.length;
            if (!s) return [];
            const o = !!t._loop,
              { start: r, end: a } = (function (t, e, i, n) {
                let s = 0,
                  o = e - 1;
                if (i && !n) for (; s < e && !t[s].skip; ) s++;
                for (; s < e && t[s].skip; ) s++;
                for (s %= e, i && (o += s); o > s && t[o % e].skip; ) o--;
                return (o %= e), { start: s, end: o };
              })(i, s, o, n);
            return (function (t, e, i, n) {
              return n && n.setContext && i
                ? (function (t, e, i, n) {
                    const s = t._chart.getContext(),
                      o = Oi(t.options),
                      {
                        _datasetIndex: r,
                        options: { spanGaps: a },
                      } = t,
                      l = i.length,
                      c = [];
                    let h = o,
                      u = e[0].start,
                      d = u;
                    function f(t, e, n, s) {
                      const o = a ? -1 : 1;
                      if (t !== e) {
                        for (t += l; i[t % l].skip; ) t -= o;
                        for (; i[e % l].skip; ) e += o;
                        t % l != e % l &&
                          (c.push({
                            start: t % l,
                            end: e % l,
                            loop: n,
                            style: s,
                          }),
                          (h = s),
                          (u = e % l));
                      }
                    }
                    for (const t of e) {
                      u = a ? u : t.start;
                      let e,
                        o = i[u % l];
                      for (d = u + 1; d <= t.end; d++) {
                        const a = i[d % l];
                        (e = Oi(
                          n.setContext(
                            Ie(s, {
                              type: 'segment',
                              p0: o,
                              p1: a,
                              p0DataIndex: (d - 1) % l,
                              p1DataIndex: d % l,
                              datasetIndex: r,
                            })
                          )
                        )),
                          Mi(e, h) && f(u, d - 1, t.loop, h),
                          (o = a),
                          (h = e);
                      }
                      u < d - 1 && f(u, d - 1, t.loop, h);
                    }
                    return c;
                  })(t, e, i, n)
                : e;
            })(
              t,
              !0 === n
                ? [{ start: r, end: a, loop: o }]
                : (function (t, e, i, n) {
                    const s = t.length,
                      o = [];
                    let r,
                      a = e,
                      l = t[e];
                    for (r = e + 1; r <= i; ++r) {
                      const i = t[r % s];
                      i.skip || i.stop
                        ? l.skip ||
                          ((n = !1),
                          o.push({ start: e % s, end: (r - 1) % s, loop: n }),
                          (e = a = i.stop ? r : null))
                        : ((a = r), l.skip && (e = r)),
                        (l = i);
                    }
                    return (
                      null !== a &&
                        o.push({ start: e % s, end: a % s, loop: n }),
                      o
                    );
                  })(
                    i,
                    r,
                    a < r ? a + s : a,
                    !!t._fullLoop && 0 === r && a === s - 1
                  ),
              i,
              e
            );
          })(this, this.options.segment))
        );
      }
      first() {
        const t = this.segments,
          e = this.points;
        return t.length && e[t[0].start];
      }
      last() {
        const t = this.segments,
          e = this.points,
          i = t.length;
        return i && e[t[i - 1].end];
      }
      interpolate(t, e) {
        const i = this.options,
          n = t[e],
          s = this.points,
          o = Ei(this, { property: e, start: n, end: n });
        if (!o.length) return;
        const r = [],
          a = (function (t) {
            return t.stepped
              ? bi
              : t.tension || 'monotone' === t.cubicInterpolationMode
              ? xi
              : mi;
          })(i);
        let l, c;
        for (l = 0, c = o.length; l < c; ++l) {
          const { start: c, end: h } = o[l],
            u = s[c],
            d = s[h];
          if (u === d) {
            r.push(u);
            continue;
          }
          const f = a(u, d, Math.abs((n - u[e]) / (d[e] - u[e])), i.stepped);
          (f[e] = t[e]), r.push(f);
        }
        return 1 === r.length ? r[0] : r;
      }
      pathSegment(t, e, i) {
        return Ds(this)(t, this, e, i);
      }
      path(t, e, i) {
        const n = this.segments,
          s = Ds(this);
        let o = this._loop;
        (e = e || 0), (i = i || this.points.length - e);
        for (const r of n) o &= s(t, this, r, { start: e, end: e + i - 1 });
        return !!o;
      }
      draw(t, e, i, n) {
        const s = this.options || {};
        (this.points || []).length &&
          s.borderWidth &&
          (t.save(),
          (function (t, e, i, n) {
            Rs && !e.options.segment
              ? (function (t, e, i, n) {
                  let s = e._path;
                  s ||
                    ((s = e._path = new Path2D()),
                    e.path(s, i, n) && s.closePath()),
                    Ls(t, e.options),
                    t.stroke(s);
                })(t, e, i, n)
              : (function (t, e, i, n) {
                  const { segments: s, options: o } = e,
                    r = Ds(e);
                  for (const a of s)
                    Ls(t, o, a.style),
                      t.beginPath(),
                      r(t, e, a, { start: i, end: i + n - 1 }) && t.closePath(),
                      t.stroke();
                })(t, e, i, n);
          })(t, this, i, n),
          t.restore()),
          this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
      }
    }
    function Fs(t, e, i, n) {
      const s = t.options,
        { [i]: o } = t.getProps([i], n);
      return Math.abs(e - o) < s.radius + s.hitRadius;
    }
    function Is(t, e) {
      const {
        x: i,
        y: n,
        base: s,
        width: o,
        height: r,
      } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
      let a, l, c, h, u;
      return (
        t.horizontal
          ? ((u = r / 2),
            (a = Math.min(i, s)),
            (l = Math.max(i, s)),
            (c = n - u),
            (h = n + u))
          : ((u = o / 2),
            (a = i - u),
            (l = i + u),
            (c = Math.min(n, s)),
            (h = Math.max(n, s))),
        { left: a, top: c, right: l, bottom: h }
      );
    }
    function Bs(t, e, i, n) {
      return t ? 0 : Dt(e, i, n);
    }
    function js(t, e, i, n) {
      const s = null === e,
        o = null === i,
        r = t && !(s && o) && Is(t, n);
      return (
        r && (s || Rt(e, r.left, r.right)) && (o || Rt(i, r.top, r.bottom))
      );
    }
    function Vs(t, e) {
      t.rect(e.x, e.y, e.w, e.h);
    }
    function zs(t, e, i = {}) {
      const n = t.x !== i.x ? -e : 0,
        s = t.y !== i.y ? -e : 0,
        o = (t.x + t.w !== i.x + i.w ? e : 0) - n,
        r = (t.y + t.h !== i.y + i.h ? e : 0) - s;
      return {
        x: t.x + n,
        y: t.y + s,
        w: t.w + o,
        h: t.h + r,
        radius: t.radius,
      };
    }
    var Ws = Object.freeze({
      __proto__: null,
      ArcElement: class extends Wn {
        static id = 'arc';
        static defaults = {
          borderAlign: 'center',
          borderColor: '#fff',
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
          circular: !0,
        };
        static defaultRoutes = { backgroundColor: 'backgroundColor' };
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, i) {
          const n = this.getProps(['x', 'y'], i),
            { angle: s, distance: o } = Lt(n, { x: t, y: e }),
            {
              startAngle: r,
              endAngle: a,
              innerRadius: l,
              outerRadius: c,
              circumference: h,
            } = this.getProps(
              [
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'circumference',
              ],
              i
            ),
            u = this.options.spacing / 2,
            d = q(h, a - r) >= dt || Pt(s, r, a),
            f = Rt(o, l + u, c + u);
          return d && f;
        }
        getCenterPoint(t) {
          const {
              x: e,
              y: i,
              startAngle: n,
              endAngle: s,
              innerRadius: o,
              outerRadius: r,
            } = this.getProps(
              [
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
              ],
              t
            ),
            { offset: a, spacing: l } = this.options,
            c = (n + s) / 2,
            h = (o + r + l + a) / 2;
          return { x: e + Math.cos(c) * h, y: i + Math.sin(c) * h };
        }
        tooltipPosition(t) {
          return this.getCenterPoint(t);
        }
        draw(t) {
          const { options: e, circumference: i } = this,
            n = (e.offset || 0) / 4,
            s = (e.spacing || 0) / 2,
            o = e.circular;
          if (
            ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
            (this.fullCircles = i > dt ? Math.floor(i / dt) : 0),
            0 === i || this.innerRadius < 0 || this.outerRadius < 0)
          )
            return;
          t.save();
          const r = (this.startAngle + this.endAngle) / 2;
          t.translate(Math.cos(r) * n, Math.sin(r) * n);
          const a = n * (1 - Math.sin(Math.min(ut, i || 0)));
          (t.fillStyle = e.backgroundColor),
            (t.strokeStyle = e.borderColor),
            (function (t, e, i, n, s) {
              const { fullCircles: o, startAngle: r, circumference: a } = e;
              let l = e.endAngle;
              if (o) {
                Ms(t, e, i, n, l, s);
                for (let e = 0; e < o; ++e) t.fill();
                isNaN(a) || (l = r + (a % dt || dt));
              }
              Ms(t, e, i, n, l, s), t.fill();
            })(t, this, a, s, o),
            (function (t, e, i, n, s) {
              const {
                  fullCircles: o,
                  startAngle: r,
                  circumference: a,
                  options: l,
                } = e,
                { borderWidth: c, borderJoinStyle: h } = l,
                u = 'inner' === l.borderAlign;
              if (!c) return;
              u
                ? ((t.lineWidth = 2 * c), (t.lineJoin = h || 'round'))
                : ((t.lineWidth = c), (t.lineJoin = h || 'bevel'));
              let d = e.endAngle;
              if (o) {
                Ms(t, e, i, n, d, s);
                for (let e = 0; e < o; ++e) t.stroke();
                isNaN(a) || (d = r + (a % dt || dt));
              }
              u &&
                (function (t, e, i) {
                  const {
                    startAngle: n,
                    pixelMargin: s,
                    x: o,
                    y: r,
                    outerRadius: a,
                    innerRadius: l,
                  } = e;
                  let c = s / a;
                  t.beginPath(),
                    t.arc(o, r, a, n - c, i + c),
                    l > s
                      ? ((c = s / l), t.arc(o, r, l, i + c, n - c, !0))
                      : t.arc(o, r, s, i + mt, n - mt),
                    t.closePath(),
                    t.clip();
                })(t, e, d),
                o || (Ms(t, e, i, n, d, s), t.stroke());
            })(t, this, a, s, o),
            t.restore();
        }
      },
      LineElement: Ns,
      PointElement: class extends Wn {
        static id = 'point';
        static defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: 'circle',
          radius: 3,
          rotation: 0,
        };
        static defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        };
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, i) {
          const n = this.options,
            { x: s, y: o } = this.getProps(['x', 'y'], i);
          return (
            Math.pow(t - s, 2) + Math.pow(e - o, 2) <
            Math.pow(n.hitRadius + n.radius, 2)
          );
        }
        inXRange(t, e) {
          return Fs(this, t, 'x', e);
        }
        inYRange(t, e) {
          return Fs(this, t, 'y', e);
        }
        getCenterPoint(t) {
          const { x: e, y: i } = this.getProps(['x', 'y'], t);
          return { x: e, y: i };
        }
        size(t) {
          let e = (t = t || this.options || {}).radius || 0;
          return (
            (e = Math.max(e, (e && t.hoverRadius) || 0)),
            2 * (e + ((e && t.borderWidth) || 0))
          );
        }
        draw(t, e) {
          const i = this.options;
          this.skip ||
            i.radius < 0.1 ||
            !xe(this, e, this.size(i) / 2) ||
            ((t.strokeStyle = i.borderColor),
            (t.lineWidth = i.borderWidth),
            (t.fillStyle = i.backgroundColor),
            me(t, i, this.x, this.y));
        }
        getRange() {
          const t = this.options || {};
          return t.radius + t.hitRadius;
        }
      },
      BarElement: class extends Wn {
        static id = 'bar';
        static defaults = {
          borderSkipped: 'start',
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: 'auto',
          pointStyle: void 0,
        };
        static defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        };
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t);
        }
        draw(t) {
          const {
              inflateAmount: e,
              options: { borderColor: i, backgroundColor: n },
            } = this,
            { inner: s, outer: o } = (function (t) {
              const e = Is(t),
                i = e.right - e.left,
                n = e.bottom - e.top,
                s = (function (t, e, i) {
                  const n = t.options.borderWidth,
                    s = t.borderSkipped,
                    o = Pe(n);
                  return {
                    t: Bs(s.top, o.top, 0, i),
                    r: Bs(s.right, o.right, 0, e),
                    b: Bs(s.bottom, o.bottom, 0, i),
                    l: Bs(s.left, o.left, 0, e),
                  };
                })(t, i / 2, n / 2),
                o = (function (t, e, i) {
                  const { enableBorderRadius: n } = t.getProps([
                      'enableBorderRadius',
                    ]),
                    s = t.options.borderRadius,
                    o = De(s),
                    r = Math.min(e, i),
                    a = t.borderSkipped,
                    l = n || U(s);
                  return {
                    topLeft: Bs(!l || a.top || a.left, o.topLeft, 0, r),
                    topRight: Bs(!l || a.top || a.right, o.topRight, 0, r),
                    bottomLeft: Bs(
                      !l || a.bottom || a.left,
                      o.bottomLeft,
                      0,
                      r
                    ),
                    bottomRight: Bs(
                      !l || a.bottom || a.right,
                      o.bottomRight,
                      0,
                      r
                    ),
                  };
                })(t, i / 2, n / 2);
              return {
                outer: { x: e.left, y: e.top, w: i, h: n, radius: o },
                inner: {
                  x: e.left + s.l,
                  y: e.top + s.t,
                  w: i - s.l - s.r,
                  h: n - s.t - s.b,
                  radius: {
                    topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
                    topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
                    bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
                    bottomRight: Math.max(
                      0,
                      o.bottomRight - Math.max(s.b, s.r)
                    ),
                  },
                },
              };
            })(this),
            r =
              (a = o.radius).topLeft ||
              a.topRight ||
              a.bottomLeft ||
              a.bottomRight
                ? Oe
                : Vs;
          var a;
          t.save(),
            (o.w === s.w && o.h === s.h) ||
              (t.beginPath(),
              r(t, zs(o, e, s)),
              t.clip(),
              r(t, zs(s, -e, o)),
              (t.fillStyle = i),
              t.fill('evenodd')),
            t.beginPath(),
            r(t, zs(s, e)),
            (t.fillStyle = n),
            t.fill(),
            t.restore();
        }
        inRange(t, e, i) {
          return js(this, t, e, i);
        }
        inXRange(t, e) {
          return js(this, t, null, e);
        }
        inYRange(t, e) {
          return js(this, null, t, e);
        }
        getCenterPoint(t) {
          const {
            x: e,
            y: i,
            base: n,
            horizontal: s,
          } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
          return { x: s ? (e + n) / 2 : e, y: s ? i : (i + n) / 2 };
        }
        getRange(t) {
          return 'x' === t ? this.width / 2 : this.height / 2;
        }
      },
    });
    const Hs = [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      Ks = Hs.map((t) => t.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
    function Us(t) {
      return Hs[t % Hs.length];
    }
    function $s(t) {
      return Ks[t % Ks.length];
    }
    function Ys(t) {
      let e;
      for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
      return !1;
    }
    var qs = {
      id: 'colors',
      defaults: { enabled: !0, forceOverride: !1 },
      beforeLayout(t, e, i) {
        if (!i.enabled) return;
        const {
            data: { datasets: n },
            options: s,
          } = t.config,
          { elements: o } = s;
        if (
          !i.forceOverride &&
          (Ys(n) ||
            ((r = s) && (r.borderColor || r.backgroundColor)) ||
            (o && Ys(o)))
        )
          return;
        var r;
        const a = (function (t) {
          let e = 0;
          return (i, n) => {
            const s = t.getDatasetMeta(n).controller;
            s instanceof tn
              ? (e = (function (t, e) {
                  return (t.backgroundColor = t.data.map(() => Us(e++))), e;
                })(i, e))
              : s instanceof en
              ? (e = (function (t, e) {
                  return (t.backgroundColor = t.data.map(() => $s(e++))), e;
                })(i, e))
              : s &&
                (e = (function (t, e) {
                  return (
                    (t.borderColor = Us(e)), (t.backgroundColor = $s(e)), ++e
                  );
                })(i, e));
          };
        })(t);
        n.forEach(a);
      },
    };
    function Xs(t) {
      if (t._decimated) {
        const e = t._data;
        delete t._decimated,
          delete t._data,
          Object.defineProperty(t, 'data', {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: e,
          });
      }
    }
    function Gs(t) {
      t.data.datasets.forEach((t) => {
        Xs(t);
      });
    }
    var Js = {
      id: 'decimation',
      defaults: { algorithm: 'min-max', enabled: !1 },
      beforeElementsUpdate: (t, e, i) => {
        if (!i.enabled) return void Gs(t);
        const n = t.width;
        t.data.datasets.forEach((e, s) => {
          const { _data: o, indexAxis: r } = e,
            a = t.getDatasetMeta(s),
            l = o || e.data;
          if ('y' === Fe([r, t.options.indexAxis])) return;
          if (!a.controller.supportsDecimation) return;
          const c = t.scales[a.xAxisID];
          if ('linear' !== c.type && 'time' !== c.type) return;
          if (t.options.parsing) return;
          let h,
            { start: u, count: d } = (function (t, e) {
              const i = e.length;
              let n,
                s = 0;
              const { iScale: o } = t,
                {
                  min: r,
                  max: a,
                  minDefined: l,
                  maxDefined: c,
                } = o.getUserBounds();
              return (
                l && (s = Dt(Ft(e, o.axis, r).lo, 0, i - 1)),
                (n = c ? Dt(Ft(e, o.axis, a).hi + 1, s, i) - s : i - s),
                { start: s, count: n }
              );
            })(a, l);
          if (d <= (i.threshold || 4 * n)) Xs(e);
          else {
            switch (
              (H(o) &&
                ((e._data = l),
                delete e.data,
                Object.defineProperty(e, 'data', {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    return this._decimated;
                  },
                  set: function (t) {
                    this._data = t;
                  },
                })),
              i.algorithm)
            ) {
              case 'lttb':
                h = (function (t, e, i, n, s) {
                  const o = s.samples || n;
                  if (o >= i) return t.slice(e, e + i);
                  const r = [],
                    a = (i - 2) / (o - 2);
                  let l = 0;
                  const c = e + i - 1;
                  let h,
                    u,
                    d,
                    f,
                    p,
                    g = e;
                  for (r[l++] = t[g], h = 0; h < o - 2; h++) {
                    let n,
                      s = 0,
                      o = 0;
                    const c = Math.floor((h + 1) * a) + 1 + e,
                      m = Math.min(Math.floor((h + 2) * a) + 1, i) + e,
                      b = m - c;
                    for (n = c; n < m; n++) (s += t[n].x), (o += t[n].y);
                    (s /= b), (o /= b);
                    const x = Math.floor(h * a) + 1 + e,
                      v = Math.min(Math.floor((h + 1) * a) + 1, i) + e,
                      { x: _, y } = t[g];
                    for (d = f = -1, n = x; n < v; n++)
                      (f =
                        0.5 *
                        Math.abs(
                          (_ - s) * (t[n].y - y) - (_ - t[n].x) * (o - y)
                        )),
                        f > d && ((d = f), (u = t[n]), (p = n));
                    (r[l++] = u), (g = p);
                  }
                  return (r[l++] = t[c]), r;
                })(l, u, d, n, i);
                break;
              case 'min-max':
                h = (function (t, e, i, n) {
                  let s,
                    o,
                    r,
                    a,
                    l,
                    c,
                    h,
                    u,
                    d,
                    f,
                    p = 0,
                    g = 0;
                  const m = [],
                    b = e + i - 1,
                    x = t[e].x,
                    v = t[b].x - x;
                  for (s = e; s < e + i; ++s) {
                    (o = t[s]), (r = ((o.x - x) / v) * n), (a = o.y);
                    const e = 0 | r;
                    if (e === l)
                      a < d ? ((d = a), (c = s)) : a > f && ((f = a), (h = s)),
                        (p = (g * p + o.x) / ++g);
                    else {
                      const i = s - 1;
                      if (!H(c) && !H(h)) {
                        const e = Math.min(c, h),
                          n = Math.max(c, h);
                        e !== u && e !== i && m.push({ ...t[e], x: p }),
                          n !== u && n !== i && m.push({ ...t[n], x: p });
                      }
                      s > 0 && i !== u && m.push(t[i]),
                        m.push(o),
                        (l = e),
                        (g = 0),
                        (d = f = a),
                        (c = h = u = s);
                    }
                  }
                  return m;
                })(l, u, d, n);
                break;
              default:
                throw new Error(
                  `Unsupported decimation algorithm '${i.algorithm}'`
                );
            }
            e._decimated = h;
          }
        });
      },
      destroy(t) {
        Gs(t);
      },
    };
    function Zs(t, e, i, n) {
      if (n) return;
      let s = e[t],
        o = i[t];
      return (
        'angle' === t && ((s = Ct(s)), (o = Ct(o))),
        { property: t, start: s, end: o }
      );
    }
    function Qs(t, e, i) {
      for (; e > t; e--) {
        const t = i[e];
        if (!isNaN(t.x) && !isNaN(t.y)) break;
      }
      return e;
    }
    function to(t, e, i, n) {
      return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
    }
    function eo(t, e) {
      let i = [],
        n = !1;
      return (
        K(t)
          ? ((n = !0), (i = t))
          : (i = (function (t, e) {
              const { x: i = null, y: n = null } = t || {},
                s = e.points,
                o = [];
              return (
                e.segments.forEach(({ start: t, end: e }) => {
                  e = Qs(t, e, s);
                  const r = s[t],
                    a = s[e];
                  null !== n
                    ? (o.push({ x: r.x, y: n }), o.push({ x: a.x, y: n }))
                    : null !== i &&
                      (o.push({ x: i, y: r.y }), o.push({ x: i, y: a.y }));
                }),
                o
              );
            })(t, e)),
        i.length
          ? new Ns({
              points: i,
              options: { tension: 0 },
              _loop: n,
              _fullLoop: n,
            })
          : null
      );
    }
    function io(t) {
      return t && !1 !== t.fill;
    }
    function no(t, e, i) {
      let n = t[e].fill;
      const s = [e];
      let o;
      if (!i) return n;
      for (; !1 !== n && -1 === s.indexOf(n); ) {
        if (!$(n)) return n;
        if (((o = t[n]), !o)) return !1;
        if (o.visible) return n;
        s.push(n), (n = o.fill);
      }
      return !1;
    }
    function so(t, e, i) {
      const n = (function (t) {
        const e = t.options,
          i = e.fill;
        let n = q(i && i.target, i);
        return (
          void 0 === n && (n = !!e.backgroundColor),
          !1 !== n && null !== n && (!0 === n ? 'origin' : n)
        );
      })(t);
      if (U(n)) return !isNaN(n.value) && n;
      let s = parseFloat(n);
      return $(s) && Math.floor(s) === s
        ? (function (t, e, i, n) {
            return (
              ('-' !== t && '+' !== t) || (i = e + i),
              !(i === e || i < 0 || i >= n) && i
            );
          })(n[0], e, s, i)
        : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(n) >= 0 && n;
    }
    function oo(t, e, i) {
      const n = [];
      for (let s = 0; s < i.length; s++) {
        const o = i[s],
          { first: r, last: a, point: l } = ro(o, e, 'x');
        if (!(!l || (r && a)))
          if (r) n.unshift(l);
          else if ((t.push(l), !a)) break;
      }
      t.push(...n);
    }
    function ro(t, e, i) {
      const n = t.interpolate(e, i);
      if (!n) return {};
      const s = n[i],
        o = t.segments,
        r = t.points;
      let a = !1,
        l = !1;
      for (let t = 0; t < o.length; t++) {
        const e = o[t],
          n = r[e.start][i],
          c = r[e.end][i];
        if (Rt(s, n, c)) {
          (a = s === n), (l = s === c);
          break;
        }
      }
      return { first: a, last: l, point: n };
    }
    class ao {
      constructor(t) {
        (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
      }
      pathSegment(t, e, i) {
        const { x: n, y: s, radius: o } = this;
        return (
          (e = e || { start: 0, end: dt }),
          t.arc(n, s, o, e.end, e.start, !0),
          !i.bounds
        );
      }
      interpolate(t) {
        const { x: e, y: i, radius: n } = this,
          s = t.angle;
        return { x: e + Math.cos(s) * n, y: i + Math.sin(s) * n, angle: s };
      }
    }
    function lo(t, e, i) {
      const n = (function (t) {
          const { chart: e, fill: i, line: n } = t;
          if ($(i))
            return (function (t, e) {
              const i = t.getDatasetMeta(e);
              return i && t.isDatasetVisible(e) ? i.dataset : null;
            })(e, i);
          if ('stack' === i)
            return (function (t) {
              const { scale: e, index: i, line: n } = t,
                s = [],
                o = n.segments,
                r = n.points,
                a = (function (t, e) {
                  const i = [],
                    n = t.getMatchingVisibleMetas('line');
                  for (let t = 0; t < n.length; t++) {
                    const s = n[t];
                    if (s.index === e) break;
                    s.hidden || i.unshift(s.dataset);
                  }
                  return i;
                })(e, i);
              a.push(eo({ x: null, y: e.bottom }, n));
              for (let t = 0; t < o.length; t++) {
                const e = o[t];
                for (let t = e.start; t <= e.end; t++) oo(s, r[t], a);
              }
              return new Ns({ points: s, options: {} });
            })(t);
          if ('shape' === i) return !0;
          const s = (function (t) {
            return (t.scale || {}).getPointPositionForValue
              ? (function (t) {
                  const { scale: e, fill: i } = t,
                    n = e.options,
                    s = e.getLabels().length,
                    o = n.reverse ? e.max : e.min,
                    r = (function (t, e, i) {
                      let n;
                      return (
                        (n =
                          'start' === t
                            ? i
                            : 'end' === t
                            ? e.options.reverse
                              ? e.min
                              : e.max
                            : U(t)
                            ? t.value
                            : e.getBaseValue()),
                        n
                      );
                    })(i, e, o),
                    a = [];
                  if (n.grid.circular) {
                    const t = e.getPointPositionForValue(0, o);
                    return new ao({
                      x: t.x,
                      y: t.y,
                      radius: e.getDistanceFromCenterForValue(r),
                    });
                  }
                  for (let t = 0; t < s; ++t)
                    a.push(e.getPointPositionForValue(t, r));
                  return a;
                })(t)
              : (function (t) {
                  const { scale: e = {}, fill: i } = t,
                    n = (function (t, e) {
                      let i = null;
                      return (
                        'start' === t
                          ? (i = e.bottom)
                          : 'end' === t
                          ? (i = e.top)
                          : U(t)
                          ? (i = e.getPixelForValue(t.value))
                          : e.getBasePixel && (i = e.getBasePixel()),
                        i
                      );
                    })(i, e);
                  if ($(n)) {
                    const t = e.isHorizontal();
                    return { x: t ? n : null, y: t ? null : n };
                  }
                  return null;
                })(t);
          })(t);
          return s instanceof ao ? s : eo(s, n);
        })(e),
        { line: s, scale: o, axis: r } = e,
        a = s.options,
        l = a.fill,
        c = a.backgroundColor,
        { above: h = c, below: u = c } = l || {};
      n &&
        s.points.length &&
        (ve(t, i),
        (function (t, e) {
          const {
              line: i,
              target: n,
              above: s,
              below: o,
              area: r,
              scale: a,
            } = e,
            l = i._loop ? 'angle' : e.axis;
          t.save(),
            'x' === l &&
              o !== s &&
              (co(t, n, r.top),
              ho(t, { line: i, target: n, color: s, scale: a, property: l }),
              t.restore(),
              t.save(),
              co(t, n, r.bottom)),
            ho(t, { line: i, target: n, color: o, scale: a, property: l }),
            t.restore();
        })(t, {
          line: s,
          target: n,
          above: h,
          below: u,
          area: i,
          scale: o,
          axis: r,
        }),
        _e(t));
    }
    function co(t, e, i) {
      const { segments: n, points: s } = e;
      let o = !0,
        r = !1;
      t.beginPath();
      for (const a of n) {
        const { start: n, end: l } = a,
          c = s[n],
          h = s[Qs(n, l, s)];
        o
          ? (t.moveTo(c.x, c.y), (o = !1))
          : (t.lineTo(c.x, i), t.lineTo(c.x, c.y)),
          (r = !!e.pathSegment(t, a, { move: r })),
          r ? t.closePath() : t.lineTo(h.x, i);
      }
      t.lineTo(e.first().x, i), t.closePath(), t.clip();
    }
    function ho(t, e) {
      const { line: i, target: n, property: s, color: o, scale: r } = e,
        a = (function (t, e, i) {
          const n = t.segments,
            s = t.points,
            o = e.points,
            r = [];
          for (const t of n) {
            let { start: n, end: a } = t;
            a = Qs(n, a, s);
            const l = Zs(i, s[n], s[a], t.loop);
            if (!e.segments) {
              r.push({ source: t, target: l, start: s[n], end: s[a] });
              continue;
            }
            const c = Ei(e, l);
            for (const e of c) {
              const n = Zs(i, o[e.start], o[e.end], e.loop),
                a = Si(t, s, n);
              for (const t of a)
                r.push({
                  source: t,
                  target: e,
                  start: { [i]: to(l, n, 'start', Math.max) },
                  end: { [i]: to(l, n, 'end', Math.min) },
                });
            }
          }
          return r;
        })(i, n, s);
      for (const { source: e, target: l, start: c, end: h } of a) {
        const { style: { backgroundColor: a = o } = {} } = e,
          u = !0 !== n;
        t.save(), (t.fillStyle = a), uo(t, r, u && Zs(s, c, h)), t.beginPath();
        const d = !!i.pathSegment(t, e);
        let f;
        if (u) {
          d ? t.closePath() : fo(t, n, h, s);
          const e = !!n.pathSegment(t, l, { move: d, reverse: !0 });
          (f = d && e), f || fo(t, n, c, s);
        }
        t.closePath(), t.fill(f ? 'evenodd' : 'nonzero'), t.restore();
      }
    }
    function uo(t, e, i) {
      const { top: n, bottom: s } = e.chart.chartArea,
        { property: o, start: r, end: a } = i || {};
      'x' === o && (t.beginPath(), t.rect(r, n, a - r, s - n), t.clip());
    }
    function fo(t, e, i, n) {
      const s = e.interpolate(i, n);
      s && t.lineTo(s.x, s.y);
    }
    var po = {
      id: 'filler',
      afterDatasetsUpdate(t, e, i) {
        const n = (t.data.datasets || []).length,
          s = [];
        let o, r, a, l;
        for (r = 0; r < n; ++r)
          (o = t.getDatasetMeta(r)),
            (a = o.dataset),
            (l = null),
            a &&
              a.options &&
              a instanceof Ns &&
              (l = {
                visible: t.isDatasetVisible(r),
                index: r,
                fill: so(a, r, n),
                chart: t,
                axis: o.controller.options.indexAxis,
                scale: o.vScale,
                line: a,
              }),
            (o.$filler = l),
            s.push(l);
        for (r = 0; r < n; ++r)
          (l = s[r]), l && !1 !== l.fill && (l.fill = no(s, r, i.propagate));
      },
      beforeDraw(t, e, i) {
        const n = 'beforeDraw' === i.drawTime,
          s = t.getSortedVisibleDatasetMetas(),
          o = t.chartArea;
        for (let e = s.length - 1; e >= 0; --e) {
          const i = s[e].$filler;
          i &&
            (i.line.updateControlPoints(o, i.axis),
            n && i.fill && lo(t.ctx, i, o));
        }
      },
      beforeDatasetsDraw(t, e, i) {
        if ('beforeDatasetsDraw' !== i.drawTime) return;
        const n = t.getSortedVisibleDatasetMetas();
        for (let e = n.length - 1; e >= 0; --e) {
          const i = n[e].$filler;
          io(i) && lo(t.ctx, i, t.chartArea);
        }
      },
      beforeDatasetDraw(t, e, i) {
        const n = e.meta.$filler;
        io(n) &&
          'beforeDatasetDraw' === i.drawTime &&
          lo(t.ctx, n, t.chartArea);
      },
      defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
    };
    const go = (t, e) => {
      let { boxHeight: i = e, boxWidth: n = e } = t;
      return (
        t.usePointStyle &&
          ((i = Math.min(i, e)), (n = t.pointStyleWidth || Math.min(n, e))),
        { boxWidth: n, boxHeight: i, itemHeight: Math.max(e, i) }
      );
    };
    class mo extends Wn {
      constructor(t) {
        super(),
          (this._added = !1),
          (this.legendHitBoxes = []),
          (this._hoveredItem = null),
          (this.doughnutMode = !1),
          (this.chart = t.chart),
          (this.options = t.options),
          (this.ctx = t.ctx),
          (this.legendItems = void 0),
          (this.columnSizes = void 0),
          (this.lineWidths = void 0),
          (this.maxHeight = void 0),
          (this.maxWidth = void 0),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.left = void 0),
          (this.right = void 0),
          (this.height = void 0),
          (this.width = void 0),
          (this._margins = void 0),
          (this.position = void 0),
          (this.weight = void 0),
          (this.fullSize = void 0);
      }
      update(t, e, i) {
        (this.maxWidth = t),
          (this.maxHeight = e),
          (this._margins = i),
          this.setDimensions(),
          this.buildLabels(),
          this.fit();
      }
      setDimensions() {
        this.isHorizontal()
          ? ((this.width = this.maxWidth),
            (this.left = this._margins.left),
            (this.right = this.width))
          : ((this.height = this.maxHeight),
            (this.top = this._margins.top),
            (this.bottom = this.height));
      }
      buildLabels() {
        const t = this.options.labels || {};
        let e = G(t.generateLabels, [this.chart], this) || [];
        t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
          t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
          this.options.reverse && e.reverse(),
          (this.legendItems = e);
      }
      fit() {
        const { options: t, ctx: e } = this;
        if (!t.display) return void (this.width = this.height = 0);
        const i = t.labels,
          n = Ne(i.font),
          s = n.size,
          o = this._computeTitleHeight(),
          { boxWidth: r, itemHeight: a } = go(i, s);
        let l, c;
        (e.font = n.string),
          this.isHorizontal()
            ? ((l = this.maxWidth), (c = this._fitRows(o, s, r, a) + 10))
            : ((c = this.maxHeight), (l = this._fitCols(o, n, r, a) + 10)),
          (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
          (this.height = Math.min(c, t.maxHeight || this.maxHeight));
      }
      _fitRows(t, e, i, n) {
        const {
            ctx: s,
            maxWidth: o,
            options: {
              labels: { padding: r },
            },
          } = this,
          a = (this.legendHitBoxes = []),
          l = (this.lineWidths = [0]),
          c = n + r;
        let h = t;
        (s.textAlign = 'left'), (s.textBaseline = 'middle');
        let u = -1,
          d = -c;
        return (
          this.legendItems.forEach((t, f) => {
            const p = i + e / 2 + s.measureText(t.text).width;
            (0 === f || l[l.length - 1] + p + 2 * r > o) &&
              ((h += c), (l[l.length - (f > 0 ? 0 : 1)] = 0), (d += c), u++),
              (a[f] = { left: 0, top: d, row: u, width: p, height: n }),
              (l[l.length - 1] += p + r);
          }),
          h
        );
      }
      _fitCols(t, e, i, n) {
        const {
            ctx: s,
            maxHeight: o,
            options: {
              labels: { padding: r },
            },
          } = this,
          a = (this.legendHitBoxes = []),
          l = (this.columnSizes = []),
          c = o - t;
        let h = r,
          u = 0,
          d = 0,
          f = 0,
          p = 0;
        return (
          this.legendItems.forEach((t, o) => {
            const { itemWidth: g, itemHeight: m } = (function (t, e, i, n, s) {
              const o = (function (t, e, i, n) {
                  let s = t.text;
                  return (
                    s &&
                      'string' != typeof s &&
                      (s = s.reduce((t, e) => (t.length > e.length ? t : e))),
                    e + i.size / 2 + n.measureText(s).width
                  );
                })(n, t, e, i),
                r = (function (t, e, i) {
                  let n = t;
                  return 'string' != typeof e.text && (n = bo(e, i)), n;
                })(s, n, e.lineHeight);
              return { itemWidth: o, itemHeight: r };
            })(i, e, s, t, n);
            o > 0 &&
              d + m + 2 * r > c &&
              ((h += u + r),
              l.push({ width: u, height: d }),
              (f += u + r),
              p++,
              (u = d = 0)),
              (a[o] = { left: f, top: d, col: p, width: g, height: m }),
              (u = Math.max(u, g)),
              (d += m + r);
          }),
          (h += u),
          l.push({ width: u, height: d }),
          h
        );
      }
      adjustHitBoxes() {
        if (!this.options.display) return;
        const t = this._computeTitleHeight(),
          {
            legendHitBoxes: e,
            options: {
              align: i,
              labels: { padding: n },
              rtl: s,
            },
          } = this,
          o = vi(s, this.left, this.width);
        if (this.isHorizontal()) {
          let s = 0,
            r = Kt(i, this.left + n, this.right - this.lineWidths[s]);
          for (const a of e)
            s !== a.row &&
              ((s = a.row),
              (r = Kt(i, this.left + n, this.right - this.lineWidths[s]))),
              (a.top += this.top + t + n),
              (a.left = o.leftForLtr(o.x(r), a.width)),
              (r += a.width + n);
        } else {
          let s = 0,
            r = Kt(
              i,
              this.top + t + n,
              this.bottom - this.columnSizes[s].height
            );
          for (const a of e)
            a.col !== s &&
              ((s = a.col),
              (r = Kt(
                i,
                this.top + t + n,
                this.bottom - this.columnSizes[s].height
              ))),
              (a.top = r),
              (a.left += this.left + n),
              (a.left = o.leftForLtr(o.x(a.left), a.width)),
              (r += a.height + n);
        }
      }
      isHorizontal() {
        return (
          'top' === this.options.position || 'bottom' === this.options.position
        );
      }
      draw() {
        if (this.options.display) {
          const t = this.ctx;
          ve(t, this), this._draw(), _e(t);
        }
      }
      _draw() {
        const { options: t, columnSizes: e, lineWidths: i, ctx: n } = this,
          { align: s, labels: o } = t,
          r = ue.color,
          a = vi(t.rtl, this.left, this.width),
          l = Ne(o.font),
          { padding: c } = o,
          h = l.size,
          u = h / 2;
        let d;
        this.drawTitle(),
          (n.textAlign = a.textAlign('left')),
          (n.textBaseline = 'middle'),
          (n.lineWidth = 0.5),
          (n.font = l.string);
        const { boxWidth: f, boxHeight: p, itemHeight: g } = go(o, h),
          m = this.isHorizontal(),
          b = this._computeTitleHeight();
        (d = m
          ? {
              x: Kt(s, this.left + c, this.right - i[0]),
              y: this.top + c + b,
              line: 0,
            }
          : {
              x: this.left + c,
              y: Kt(s, this.top + b + c, this.bottom - e[0].height),
              line: 0,
            }),
          _i(this.ctx, t.textDirection);
        const x = g + c;
        this.legendItems.forEach((v, _) => {
          (n.strokeStyle = v.fontColor), (n.fillStyle = v.fontColor);
          const y = n.measureText(v.text).width,
            k = a.textAlign(v.textAlign || (v.textAlign = o.textAlign)),
            w = f + u + y;
          let S = d.x,
            E = d.y;
          if (
            (a.setWidth(this.width),
            m
              ? _ > 0 &&
                S + w + c > this.right &&
                ((E = d.y += x),
                d.line++,
                (S = d.x = Kt(s, this.left + c, this.right - i[d.line])))
              : _ > 0 &&
                E + x > this.bottom &&
                ((S = d.x = S + e[d.line].width + c),
                d.line++,
                (E = d.y =
                  Kt(s, this.top + b + c, this.bottom - e[d.line].height))),
            (function (t, e, i) {
              if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return;
              n.save();
              const s = q(i.lineWidth, 1);
              if (
                ((n.fillStyle = q(i.fillStyle, r)),
                (n.lineCap = q(i.lineCap, 'butt')),
                (n.lineDashOffset = q(i.lineDashOffset, 0)),
                (n.lineJoin = q(i.lineJoin, 'miter')),
                (n.lineWidth = s),
                (n.strokeStyle = q(i.strokeStyle, r)),
                n.setLineDash(q(i.lineDash, [])),
                o.usePointStyle)
              ) {
                const r = {
                    radius: (p * Math.SQRT2) / 2,
                    pointStyle: i.pointStyle,
                    rotation: i.rotation,
                    borderWidth: s,
                  },
                  l = a.xPlus(t, f / 2);
                be(n, r, l, e + u, o.pointStyleWidth && f);
              } else {
                const o = e + Math.max((h - p) / 2, 0),
                  r = a.leftForLtr(t, f),
                  l = De(i.borderRadius);
                n.beginPath(),
                  Object.values(l).some((t) => 0 !== t)
                    ? Oe(n, { x: r, y: o, w: f, h: p, radius: l })
                    : n.rect(r, o, f, p),
                  n.fill(),
                  0 !== s && n.stroke();
              }
              n.restore();
            })(a.x(S), E, v),
            (S = ((t, e, i, n) =>
              t === (n ? 'left' : 'right')
                ? i
                : 'center' === t
                ? (e + i) / 2
                : e)(k, S + f + u, m ? S + w : this.right, t.rtl)),
            (function (t, e, i) {
              we(n, i.text, t, e + g / 2, l, {
                strikethrough: i.hidden,
                textAlign: a.textAlign(i.textAlign),
              });
            })(a.x(S), E, v),
            m)
          )
            d.x += w + c;
          else if ('string' != typeof v.text) {
            const t = l.lineHeight;
            d.y += bo(v, t);
          } else d.y += x;
        }),
          yi(this.ctx, t.textDirection);
      }
      drawTitle() {
        const t = this.options,
          e = t.title,
          i = Ne(e.font),
          n = Re(e.padding);
        if (!e.display) return;
        const s = vi(t.rtl, this.left, this.width),
          o = this.ctx,
          r = e.position,
          a = i.size / 2,
          l = n.top + a;
        let c,
          h = this.left,
          u = this.width;
        if (this.isHorizontal())
          (u = Math.max(...this.lineWidths)),
            (c = this.top + l),
            (h = Kt(t.align, h, this.right - u));
        else {
          const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
          c =
            l +
            Kt(
              t.align,
              this.top,
              this.bottom - e - t.labels.padding - this._computeTitleHeight()
            );
        }
        const d = Kt(r, h, h + u);
        (o.textAlign = s.textAlign(Ht(r))),
          (o.textBaseline = 'middle'),
          (o.strokeStyle = e.color),
          (o.fillStyle = e.color),
          (o.font = i.string),
          we(o, e.text, d, c, i);
      }
      _computeTitleHeight() {
        const t = this.options.title,
          e = Ne(t.font),
          i = Re(t.padding);
        return t.display ? e.lineHeight + i.height : 0;
      }
      _getLegendItemAt(t, e) {
        let i, n, s;
        if (Rt(t, this.left, this.right) && Rt(e, this.top, this.bottom))
          for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
            if (
              ((n = s[i]),
              Rt(t, n.left, n.left + n.width) && Rt(e, n.top, n.top + n.height))
            )
              return this.legendItems[i];
        return null;
      }
      handleEvent(t) {
        const e = this.options;
        if (
          !(function (t, e) {
            return (
              !(
                ('mousemove' !== t && 'mouseout' !== t) ||
                (!e.onHover && !e.onLeave)
              ) || !(!e.onClick || ('click' !== t && 'mouseup' !== t))
            );
          })(t.type, e)
        )
          return;
        const i = this._getLegendItemAt(t.x, t.y);
        if ('mousemove' === t.type || 'mouseout' === t.type) {
          const o = this._hoveredItem,
            r =
              ((s = i),
              null !== (n = o) &&
                null !== s &&
                n.datasetIndex === s.datasetIndex &&
                n.index === s.index);
          o && !r && G(e.onLeave, [t, o, this], this),
            (this._hoveredItem = i),
            i && !r && G(e.onHover, [t, i, this], this);
        } else i && G(e.onClick, [t, i, this], this);
        var n, s;
      }
    }
    function bo(t, e) {
      return e * (t.text ? t.text.length + 0.5 : 0);
    }
    var xo = {
      id: 'legend',
      _element: mo,
      start(t, e, i) {
        const n = (t.legend = new mo({ ctx: t.ctx, options: i, chart: t }));
        Sn.configure(t, n, i), Sn.addBox(t, n);
      },
      stop(t) {
        Sn.removeBox(t, t.legend), delete t.legend;
      },
      beforeUpdate(t, e, i) {
        const n = t.legend;
        Sn.configure(t, n, i), (n.options = i);
      },
      afterUpdate(t) {
        const e = t.legend;
        e.buildLabels(), e.adjustHitBoxes();
      },
      afterEvent(t, e) {
        e.replay || t.legend.handleEvent(e.event);
      },
      defaults: {
        display: !0,
        position: 'top',
        align: 'center',
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(t, e, i) {
          const n = e.datasetIndex,
            s = i.chart;
          s.isDatasetVisible(n)
            ? (s.hide(n), (e.hidden = !0))
            : (s.show(n), (e.hidden = !1));
        },
        onHover: null,
        onLeave: null,
        labels: {
          color: (t) => t.chart.options.color,
          boxWidth: 40,
          padding: 10,
          generateLabels(t) {
            const e = t.data.datasets,
              {
                labels: {
                  usePointStyle: i,
                  pointStyle: n,
                  textAlign: s,
                  color: o,
                  useBorderRadius: r,
                  borderRadius: a,
                },
              } = t.legend.options;
            return t._getSortedDatasetMetas().map((t) => {
              const l = t.controller.getStyle(i ? 0 : void 0),
                c = Re(l.borderWidth);
              return {
                text: e[t.index].label,
                fillStyle: l.backgroundColor,
                fontColor: o,
                hidden: !t.visible,
                lineCap: l.borderCapStyle,
                lineDash: l.borderDash,
                lineDashOffset: l.borderDashOffset,
                lineJoin: l.borderJoinStyle,
                lineWidth: (c.width + c.height) / 4,
                strokeStyle: l.borderColor,
                pointStyle: n || l.pointStyle,
                rotation: l.rotation,
                textAlign: s || l.textAlign,
                borderRadius: r && (a || l.borderRadius),
                datasetIndex: t.index,
              };
            }, this);
          },
        },
        title: {
          color: (t) => t.chart.options.color,
          display: !1,
          position: 'center',
          text: '',
        },
      },
      descriptors: {
        _scriptable: (t) => !t.startsWith('on'),
        labels: {
          _scriptable: (t) => !['generateLabels', 'filter', 'sort'].includes(t),
        },
      },
    };
    class vo extends Wn {
      constructor(t) {
        super(),
          (this.chart = t.chart),
          (this.options = t.options),
          (this.ctx = t.ctx),
          (this._padding = void 0),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.left = void 0),
          (this.right = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this.position = void 0),
          (this.weight = void 0),
          (this.fullSize = void 0);
      }
      update(t, e) {
        const i = this.options;
        if (((this.left = 0), (this.top = 0), !i.display))
          return void (this.width = this.height = this.right = this.bottom = 0);
        (this.width = this.right = t), (this.height = this.bottom = e);
        const n = K(i.text) ? i.text.length : 1;
        this._padding = Re(i.padding);
        const s = n * Ne(i.font).lineHeight + this._padding.height;
        this.isHorizontal() ? (this.height = s) : (this.width = s);
      }
      isHorizontal() {
        const t = this.options.position;
        return 'top' === t || 'bottom' === t;
      }
      _drawArgs(t) {
        const { top: e, left: i, bottom: n, right: s, options: o } = this,
          r = o.align;
        let a,
          l,
          c,
          h = 0;
        return (
          this.isHorizontal()
            ? ((l = Kt(r, i, s)), (c = e + t), (a = s - i))
            : ('left' === o.position
                ? ((l = i + t), (c = Kt(r, n, e)), (h = -0.5 * ut))
                : ((l = s - t), (c = Kt(r, e, n)), (h = 0.5 * ut)),
              (a = n - e)),
          { titleX: l, titleY: c, maxWidth: a, rotation: h }
        );
      }
      draw() {
        const t = this.ctx,
          e = this.options;
        if (!e.display) return;
        const i = Ne(e.font),
          n = i.lineHeight / 2 + this._padding.top,
          {
            titleX: s,
            titleY: o,
            maxWidth: r,
            rotation: a,
          } = this._drawArgs(n);
        we(t, e.text, 0, 0, i, {
          color: e.color,
          maxWidth: r,
          rotation: a,
          textAlign: Ht(e.align),
          textBaseline: 'middle',
          translation: [s, o],
        });
      }
    }
    var _o = {
      id: 'title',
      _element: vo,
      start(t, e, i) {
        !(function (t, e) {
          const i = new vo({ ctx: t.ctx, options: e, chart: t });
          Sn.configure(t, i, e), Sn.addBox(t, i), (t.titleBlock = i);
        })(t, i);
      },
      stop(t) {
        const e = t.titleBlock;
        Sn.removeBox(t, e), delete t.titleBlock;
      },
      beforeUpdate(t, e, i) {
        const n = t.titleBlock;
        Sn.configure(t, n, i), (n.options = i);
      },
      defaults: {
        align: 'center',
        display: !1,
        font: { weight: 'bold' },
        fullSize: !0,
        padding: 10,
        position: 'top',
        text: '',
        weight: 2e3,
      },
      defaultRoutes: { color: 'color' },
      descriptors: { _scriptable: !0, _indexable: !1 },
    };
    const yo = new WeakMap();
    var ko = {
      id: 'subtitle',
      start(t, e, i) {
        const n = new vo({ ctx: t.ctx, options: i, chart: t });
        Sn.configure(t, n, i), Sn.addBox(t, n), yo.set(t, n);
      },
      stop(t) {
        Sn.removeBox(t, yo.get(t)), yo.delete(t);
      },
      beforeUpdate(t, e, i) {
        const n = yo.get(t);
        Sn.configure(t, n, i), (n.options = i);
      },
      defaults: {
        align: 'center',
        display: !1,
        font: { weight: 'normal' },
        fullSize: !0,
        padding: 0,
        position: 'top',
        text: '',
        weight: 1500,
      },
      defaultRoutes: { color: 'color' },
      descriptors: { _scriptable: !0, _indexable: !1 },
    };
    const wo = {
      average(t) {
        if (!t.length) return !1;
        let e,
          i,
          n = 0,
          s = 0,
          o = 0;
        for (e = 0, i = t.length; e < i; ++e) {
          const i = t[e].element;
          if (i && i.hasValue()) {
            const t = i.tooltipPosition();
            (n += t.x), (s += t.y), ++o;
          }
        }
        return { x: n / o, y: s / o };
      },
      nearest(t, e) {
        if (!t.length) return !1;
        let i,
          n,
          s,
          o = e.x,
          r = e.y,
          a = Number.POSITIVE_INFINITY;
        for (i = 0, n = t.length; i < n; ++i) {
          const n = t[i].element;
          if (n && n.hasValue()) {
            const t = Tt(e, n.getCenterPoint());
            t < a && ((a = t), (s = n));
          }
        }
        if (s) {
          const t = s.tooltipPosition();
          (o = t.x), (r = t.y);
        }
        return { x: o, y: r };
      },
    };
    function So(t, e) {
      return e && (K(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
    }
    function Eo(t) {
      return ('string' == typeof t || t instanceof String) &&
        t.indexOf('\n') > -1
        ? t.split('\n')
        : t;
    }
    function Oo(t, e) {
      const { element: i, datasetIndex: n, index: s } = e,
        o = t.getDatasetMeta(n).controller,
        { label: r, value: a } = o.getLabelAndValue(s);
      return {
        chart: t,
        label: r,
        parsed: o.getParsed(s),
        raw: t.data.datasets[n].data[s],
        formattedValue: a,
        dataset: o.getDataset(),
        dataIndex: s,
        datasetIndex: n,
        element: i,
      };
    }
    function Mo(t, e) {
      const i = t.chart.ctx,
        { body: n, footer: s, title: o } = t,
        { boxWidth: r, boxHeight: a } = e,
        l = Ne(e.bodyFont),
        c = Ne(e.titleFont),
        h = Ne(e.footerFont),
        u = o.length,
        d = s.length,
        f = n.length,
        p = Re(e.padding);
      let g = p.height,
        m = 0,
        b = n.reduce(
          (t, e) => t + e.before.length + e.lines.length + e.after.length,
          0
        );
      (b += t.beforeBody.length + t.afterBody.length),
        u &&
          (g +=
            u * c.lineHeight + (u - 1) * e.titleSpacing + e.titleMarginBottom),
        b &&
          (g +=
            f * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) +
            (b - f) * l.lineHeight +
            (b - 1) * e.bodySpacing),
        d &&
          (g +=
            e.footerMarginTop + d * h.lineHeight + (d - 1) * e.footerSpacing);
      let x = 0;
      const v = function (t) {
        m = Math.max(m, i.measureText(t).width + x);
      };
      return (
        i.save(),
        (i.font = c.string),
        J(t.title, v),
        (i.font = l.string),
        J(t.beforeBody.concat(t.afterBody), v),
        (x = e.displayColors ? r + 2 + e.boxPadding : 0),
        J(n, (t) => {
          J(t.before, v), J(t.lines, v), J(t.after, v);
        }),
        (x = 0),
        (i.font = h.string),
        J(t.footer, v),
        i.restore(),
        (m += p.width),
        { width: m, height: g }
      );
    }
    function Lo(t, e, i, n) {
      const { x: s, width: o } = i,
        {
          width: r,
          chartArea: { left: a, right: l },
        } = t;
      let c = 'center';
      return (
        'center' === n
          ? (c = s <= (a + l) / 2 ? 'left' : 'right')
          : s <= o / 2
          ? (c = 'left')
          : s >= r - o / 2 && (c = 'right'),
        (function (t, e, i, n) {
          const { x: s, width: o } = n,
            r = i.caretSize + i.caretPadding;
          return (
            ('left' === t && s + o + r > e.width) ||
            ('right' === t && s - o - r < 0) ||
            void 0
          );
        })(c, t, e, i) && (c = 'center'),
        c
      );
    }
    function To(t, e, i) {
      const n =
        i.yAlign ||
        e.yAlign ||
        (function (t, e) {
          const { y: i, height: n } = e;
          return i < n / 2 ? 'top' : i > t.height - n / 2 ? 'bottom' : 'center';
        })(t, i);
      return { xAlign: i.xAlign || e.xAlign || Lo(t, e, i, n), yAlign: n };
    }
    function Ao(t, e, i, n) {
      const { caretSize: s, caretPadding: o, cornerRadius: r } = t,
        { xAlign: a, yAlign: l } = i,
        c = s + o,
        { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = De(r);
      let p = (function (t, e) {
        let { x: i, width: n } = t;
        return 'right' === e ? (i -= n) : 'center' === e && (i -= n / 2), i;
      })(e, a);
      const g = (function (t, e, i) {
        let { y: n, height: s } = t;
        return (
          'top' === e ? (n += i) : (n -= 'bottom' === e ? s + i : s / 2), n
        );
      })(e, l, c);
      return (
        'center' === l
          ? 'left' === a
            ? (p += c)
            : 'right' === a && (p -= c)
          : 'left' === a
          ? (p -= Math.max(h, d) + s)
          : 'right' === a && (p += Math.max(u, f) + s),
        { x: Dt(p, 0, n.width - e.width), y: Dt(g, 0, n.height - e.height) }
      );
    }
    function Co(t, e, i) {
      const n = Re(i.padding);
      return 'center' === e
        ? t.x + t.width / 2
        : 'right' === e
        ? t.x + t.width - n.right
        : t.x + n.left;
    }
    function Po(t) {
      return So([], Eo(t));
    }
    function Do(t, e) {
      const i =
        e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
      return i ? t.override(i) : t;
    }
    const Ro = {
      beforeTitle: z,
      title(t) {
        if (t.length > 0) {
          const e = t[0],
            i = e.chart.data.labels,
            n = i ? i.length : 0;
          if (this && this.options && 'dataset' === this.options.mode)
            return e.dataset.label || '';
          if (e.label) return e.label;
          if (n > 0 && e.dataIndex < n) return i[e.dataIndex];
        }
        return '';
      },
      afterTitle: z,
      beforeBody: z,
      beforeLabel: z,
      label(t) {
        if (this && this.options && 'dataset' === this.options.mode)
          return t.label + ': ' + t.formattedValue || t.formattedValue;
        let e = t.dataset.label || '';
        e && (e += ': ');
        const i = t.formattedValue;
        return H(i) || (e += i), e;
      },
      labelColor(t) {
        const e = t.chart
          .getDatasetMeta(t.datasetIndex)
          .controller.getStyle(t.dataIndex);
        return {
          borderColor: e.borderColor,
          backgroundColor: e.backgroundColor,
          borderWidth: e.borderWidth,
          borderDash: e.borderDash,
          borderDashOffset: e.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(t) {
        const e = t.chart
          .getDatasetMeta(t.datasetIndex)
          .controller.getStyle(t.dataIndex);
        return { pointStyle: e.pointStyle, rotation: e.rotation };
      },
      afterLabel: z,
      afterBody: z,
      beforeFooter: z,
      footer: z,
      afterFooter: z,
    };
    function No(t, e, i, n) {
      const s = t[e].call(i, n);
      return void 0 === s ? Ro[e].call(i, n) : s;
    }
    class Fo extends Wn {
      static positioners = wo;
      constructor(t) {
        super(),
          (this.opacity = 0),
          (this._active = []),
          (this._eventPosition = void 0),
          (this._size = void 0),
          (this._cachedAnimations = void 0),
          (this._tooltipItems = []),
          (this.$animations = void 0),
          (this.$context = void 0),
          (this.chart = t.chart),
          (this.options = t.options),
          (this.dataPoints = void 0),
          (this.title = void 0),
          (this.beforeBody = void 0),
          (this.body = void 0),
          (this.afterBody = void 0),
          (this.footer = void 0),
          (this.xAlign = void 0),
          (this.yAlign = void 0),
          (this.x = void 0),
          (this.y = void 0),
          (this.height = void 0),
          (this.width = void 0),
          (this.caretX = void 0),
          (this.caretY = void 0),
          (this.labelColors = void 0),
          (this.labelPointStyles = void 0),
          (this.labelTextColors = void 0);
      }
      initialize(t) {
        (this.options = t),
          (this._cachedAnimations = void 0),
          (this.$context = void 0);
      }
      _resolveAnimations() {
        const t = this._cachedAnimations;
        if (t) return t;
        const e = this.chart,
          i = this.options.setContext(this.getContext()),
          n = i.enabled && e.options.animation && i.animations,
          s = new Di(this.chart, n);
        return n._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
      }
      getContext() {
        return (
          this.$context ||
          (this.$context =
            (this,
            Ie(this.chart.getContext(), {
              tooltip: this,
              tooltipItems: this._tooltipItems,
              type: 'tooltip',
            })))
        );
      }
      getTitle(t, e) {
        const { callbacks: i } = e,
          n = No(i, 'beforeTitle', this, t),
          s = No(i, 'title', this, t),
          o = No(i, 'afterTitle', this, t);
        let r = [];
        return (r = So(r, Eo(n))), (r = So(r, Eo(s))), (r = So(r, Eo(o))), r;
      }
      getBeforeBody(t, e) {
        return Po(No(e.callbacks, 'beforeBody', this, t));
      }
      getBody(t, e) {
        const { callbacks: i } = e,
          n = [];
        return (
          J(t, (t) => {
            const e = { before: [], lines: [], after: [] },
              s = Do(i, t);
            So(e.before, Eo(No(s, 'beforeLabel', this, t))),
              So(e.lines, No(s, 'label', this, t)),
              So(e.after, Eo(No(s, 'afterLabel', this, t))),
              n.push(e);
          }),
          n
        );
      }
      getAfterBody(t, e) {
        return Po(No(e.callbacks, 'afterBody', this, t));
      }
      getFooter(t, e) {
        const { callbacks: i } = e,
          n = No(i, 'beforeFooter', this, t),
          s = No(i, 'footer', this, t),
          o = No(i, 'afterFooter', this, t);
        let r = [];
        return (r = So(r, Eo(n))), (r = So(r, Eo(s))), (r = So(r, Eo(o))), r;
      }
      _createItems(t) {
        const e = this._active,
          i = this.chart.data,
          n = [],
          s = [],
          o = [];
        let r,
          a,
          l = [];
        for (r = 0, a = e.length; r < a; ++r) l.push(Oo(this.chart, e[r]));
        return (
          t.filter && (l = l.filter((e, n, s) => t.filter(e, n, s, i))),
          t.itemSort && (l = l.sort((e, n) => t.itemSort(e, n, i))),
          J(l, (e) => {
            const i = Do(t.callbacks, e);
            n.push(No(i, 'labelColor', this, e)),
              s.push(No(i, 'labelPointStyle', this, e)),
              o.push(No(i, 'labelTextColor', this, e));
          }),
          (this.labelColors = n),
          (this.labelPointStyles = s),
          (this.labelTextColors = o),
          (this.dataPoints = l),
          l
        );
      }
      update(t, e) {
        const i = this.options.setContext(this.getContext()),
          n = this._active;
        let s,
          o = [];
        if (n.length) {
          const t = wo[i.position].call(this, n, this._eventPosition);
          (o = this._createItems(i)),
            (this.title = this.getTitle(o, i)),
            (this.beforeBody = this.getBeforeBody(o, i)),
            (this.body = this.getBody(o, i)),
            (this.afterBody = this.getAfterBody(o, i)),
            (this.footer = this.getFooter(o, i));
          const e = (this._size = Mo(this, i)),
            r = Object.assign({}, t, e),
            a = To(this.chart, i, r),
            l = Ao(i, r, a, this.chart);
          (this.xAlign = a.xAlign),
            (this.yAlign = a.yAlign),
            (s = {
              opacity: 1,
              x: l.x,
              y: l.y,
              width: e.width,
              height: e.height,
              caretX: t.x,
              caretY: t.y,
            });
        } else 0 !== this.opacity && (s = { opacity: 0 });
        (this._tooltipItems = o),
          (this.$context = void 0),
          s && this._resolveAnimations().update(this, s),
          t &&
            i.external &&
            i.external.call(this, {
              chart: this.chart,
              tooltip: this,
              replay: e,
            });
      }
      drawCaret(t, e, i, n) {
        const s = this.getCaretPosition(t, i, n);
        e.lineTo(s.x1, s.y1), e.lineTo(s.x2, s.y2), e.lineTo(s.x3, s.y3);
      }
      getCaretPosition(t, e, i) {
        const { xAlign: n, yAlign: s } = this,
          { caretSize: o, cornerRadius: r } = i,
          { topLeft: a, topRight: l, bottomLeft: c, bottomRight: h } = De(r),
          { x: u, y: d } = t,
          { width: f, height: p } = e;
        let g, m, b, x, v, _;
        return (
          'center' === s
            ? ((v = d + p / 2),
              'left' === n
                ? ((g = u), (m = g - o), (x = v + o), (_ = v - o))
                : ((g = u + f), (m = g + o), (x = v - o), (_ = v + o)),
              (b = g))
            : ((m =
                'left' === n
                  ? u + Math.max(a, c) + o
                  : 'right' === n
                  ? u + f - Math.max(l, h) - o
                  : this.caretX),
              'top' === s
                ? ((x = d), (v = x - o), (g = m - o), (b = m + o))
                : ((x = d + p), (v = x + o), (g = m + o), (b = m - o)),
              (_ = x)),
          { x1: g, x2: m, x3: b, y1: x, y2: v, y3: _ }
        );
      }
      drawTitle(t, e, i) {
        const n = this.title,
          s = n.length;
        let o, r, a;
        if (s) {
          const l = vi(i.rtl, this.x, this.width);
          for (
            t.x = Co(this, i.titleAlign, i),
              e.textAlign = l.textAlign(i.titleAlign),
              e.textBaseline = 'middle',
              o = Ne(i.titleFont),
              r = i.titleSpacing,
              e.fillStyle = i.titleColor,
              e.font = o.string,
              a = 0;
            a < s;
            ++a
          )
            e.fillText(n[a], l.x(t.x), t.y + o.lineHeight / 2),
              (t.y += o.lineHeight + r),
              a + 1 === s && (t.y += i.titleMarginBottom - r);
        }
      }
      _drawColorBox(t, e, i, n, s) {
        const o = this.labelColors[i],
          r = this.labelPointStyles[i],
          { boxHeight: a, boxWidth: l, boxPadding: c } = s,
          h = Ne(s.bodyFont),
          u = Co(this, 'left', s),
          d = n.x(u),
          f = a < h.lineHeight ? (h.lineHeight - a) / 2 : 0,
          p = e.y + f;
        if (s.usePointStyle) {
          const e = {
              radius: Math.min(l, a) / 2,
              pointStyle: r.pointStyle,
              rotation: r.rotation,
              borderWidth: 1,
            },
            i = n.leftForLtr(d, l) + l / 2,
            c = p + a / 2;
          (t.strokeStyle = s.multiKeyBackground),
            (t.fillStyle = s.multiKeyBackground),
            me(t, e, i, c),
            (t.strokeStyle = o.borderColor),
            (t.fillStyle = o.backgroundColor),
            me(t, e, i, c);
        } else {
          (t.lineWidth = U(o.borderWidth)
            ? Math.max(...Object.values(o.borderWidth))
            : o.borderWidth || 1),
            (t.strokeStyle = o.borderColor),
            t.setLineDash(o.borderDash || []),
            (t.lineDashOffset = o.borderDashOffset || 0);
          const e = n.leftForLtr(d, l - c),
            i = n.leftForLtr(n.xPlus(d, 1), l - c - 2),
            r = De(o.borderRadius);
          Object.values(r).some((t) => 0 !== t)
            ? (t.beginPath(),
              (t.fillStyle = s.multiKeyBackground),
              Oe(t, { x: e, y: p, w: l, h: a, radius: r }),
              t.fill(),
              t.stroke(),
              (t.fillStyle = o.backgroundColor),
              t.beginPath(),
              Oe(t, { x: i, y: p + 1, w: l - 2, h: a - 2, radius: r }),
              t.fill())
            : ((t.fillStyle = s.multiKeyBackground),
              t.fillRect(e, p, l, a),
              t.strokeRect(e, p, l, a),
              (t.fillStyle = o.backgroundColor),
              t.fillRect(i, p + 1, l - 2, a - 2));
        }
        t.fillStyle = this.labelTextColors[i];
      }
      drawBody(t, e, i) {
        const { body: n } = this,
          {
            bodySpacing: s,
            bodyAlign: o,
            displayColors: r,
            boxHeight: a,
            boxWidth: l,
            boxPadding: c,
          } = i,
          h = Ne(i.bodyFont);
        let u = h.lineHeight,
          d = 0;
        const f = vi(i.rtl, this.x, this.width),
          p = function (i) {
            e.fillText(i, f.x(t.x + d), t.y + u / 2), (t.y += u + s);
          },
          g = f.textAlign(o);
        let m, b, x, v, _, y, k;
        for (
          e.textAlign = o,
            e.textBaseline = 'middle',
            e.font = h.string,
            t.x = Co(this, g, i),
            e.fillStyle = i.bodyColor,
            J(this.beforeBody, p),
            d =
              r && 'right' !== g ? ('center' === o ? l / 2 + c : l + 2 + c) : 0,
            v = 0,
            y = n.length;
          v < y;
          ++v
        ) {
          for (
            m = n[v],
              b = this.labelTextColors[v],
              e.fillStyle = b,
              J(m.before, p),
              x = m.lines,
              r &&
                x.length &&
                (this._drawColorBox(e, t, v, f, i),
                (u = Math.max(h.lineHeight, a))),
              _ = 0,
              k = x.length;
            _ < k;
            ++_
          )
            p(x[_]), (u = h.lineHeight);
          J(m.after, p);
        }
        (d = 0), (u = h.lineHeight), J(this.afterBody, p), (t.y -= s);
      }
      drawFooter(t, e, i) {
        const n = this.footer,
          s = n.length;
        let o, r;
        if (s) {
          const a = vi(i.rtl, this.x, this.width);
          for (
            t.x = Co(this, i.footerAlign, i),
              t.y += i.footerMarginTop,
              e.textAlign = a.textAlign(i.footerAlign),
              e.textBaseline = 'middle',
              o = Ne(i.footerFont),
              e.fillStyle = i.footerColor,
              e.font = o.string,
              r = 0;
            r < s;
            ++r
          )
            e.fillText(n[r], a.x(t.x), t.y + o.lineHeight / 2),
              (t.y += o.lineHeight + i.footerSpacing);
        }
      }
      drawBackground(t, e, i, n) {
        const { xAlign: s, yAlign: o } = this,
          { x: r, y: a } = t,
          { width: l, height: c } = i,
          {
            topLeft: h,
            topRight: u,
            bottomLeft: d,
            bottomRight: f,
          } = De(n.cornerRadius);
        (e.fillStyle = n.backgroundColor),
          (e.strokeStyle = n.borderColor),
          (e.lineWidth = n.borderWidth),
          e.beginPath(),
          e.moveTo(r + h, a),
          'top' === o && this.drawCaret(t, e, i, n),
          e.lineTo(r + l - u, a),
          e.quadraticCurveTo(r + l, a, r + l, a + u),
          'center' === o && 'right' === s && this.drawCaret(t, e, i, n),
          e.lineTo(r + l, a + c - f),
          e.quadraticCurveTo(r + l, a + c, r + l - f, a + c),
          'bottom' === o && this.drawCaret(t, e, i, n),
          e.lineTo(r + d, a + c),
          e.quadraticCurveTo(r, a + c, r, a + c - d),
          'center' === o && 'left' === s && this.drawCaret(t, e, i, n),
          e.lineTo(r, a + h),
          e.quadraticCurveTo(r, a, r + h, a),
          e.closePath(),
          e.fill(),
          n.borderWidth > 0 && e.stroke();
      }
      _updateAnimationTarget(t) {
        const e = this.chart,
          i = this.$animations,
          n = i && i.x,
          s = i && i.y;
        if (n || s) {
          const i = wo[t.position].call(
            this,
            this._active,
            this._eventPosition
          );
          if (!i) return;
          const o = (this._size = Mo(this, t)),
            r = Object.assign({}, i, this._size),
            a = To(e, t, r),
            l = Ao(t, r, a, e);
          (n._to === l.x && s._to === l.y) ||
            ((this.xAlign = a.xAlign),
            (this.yAlign = a.yAlign),
            (this.width = o.width),
            (this.height = o.height),
            (this.caretX = i.x),
            (this.caretY = i.y),
            this._resolveAnimations().update(this, l));
        }
      }
      _willRender() {
        return !!this.opacity;
      }
      draw(t) {
        const e = this.options.setContext(this.getContext());
        let i = this.opacity;
        if (!i) return;
        this._updateAnimationTarget(e);
        const n = { width: this.width, height: this.height },
          s = { x: this.x, y: this.y };
        i = Math.abs(i) < 0.001 ? 0 : i;
        const o = Re(e.padding),
          r =
            this.title.length ||
            this.beforeBody.length ||
            this.body.length ||
            this.afterBody.length ||
            this.footer.length;
        e.enabled &&
          r &&
          (t.save(),
          (t.globalAlpha = i),
          this.drawBackground(s, t, n, e),
          _i(t, e.textDirection),
          (s.y += o.top),
          this.drawTitle(s, t, e),
          this.drawBody(s, t, e),
          this.drawFooter(s, t, e),
          yi(t, e.textDirection),
          t.restore());
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t, e) {
        const i = this._active,
          n = t.map(({ datasetIndex: t, index: e }) => {
            const i = this.chart.getDatasetMeta(t);
            if (!i) throw new Error('Cannot find a dataset at index ' + t);
            return { datasetIndex: t, element: i.data[e], index: e };
          }),
          s = !Z(i, n),
          o = this._positionChanged(n, e);
        (s || o) &&
          ((this._active = n),
          (this._eventPosition = e),
          (this._ignoreReplayEvents = !0),
          this.update(!0));
      }
      handleEvent(t, e, i = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const n = this.options,
          s = this._active || [],
          o = this._getActiveElements(t, s, e, i),
          r = this._positionChanged(o, t),
          a = e || !Z(o, s) || r;
        return (
          a &&
            ((this._active = o),
            (n.enabled || n.external) &&
              ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
          a
        );
      }
      _getActiveElements(t, e, i, n) {
        const s = this.options;
        if ('mouseout' === t.type) return [];
        if (!n) return e;
        const o = this.chart.getElementsAtEventForMode(t, s.mode, s, i);
        return s.reverse && o.reverse(), o;
      }
      _positionChanged(t, e) {
        const { caretX: i, caretY: n, options: s } = this,
          o = wo[s.position].call(this, t, e);
        return !1 !== o && (i !== o.x || n !== o.y);
      }
    }
    var Io = {
        id: 'tooltip',
        _element: Fo,
        positioners: wo,
        afterInit(t, e, i) {
          i && (t.tooltip = new Fo({ chart: t, options: i }));
        },
        beforeUpdate(t, e, i) {
          t.tooltip && t.tooltip.initialize(i);
        },
        reset(t, e, i) {
          t.tooltip && t.tooltip.initialize(i);
        },
        afterDraw(t) {
          const e = t.tooltip;
          if (e && e._willRender()) {
            const i = { tooltip: e };
            if (
              !1 ===
              t.notifyPlugins('beforeTooltipDraw', { ...i, cancelable: !0 })
            )
              return;
            e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', i);
          }
        },
        afterEvent(t, e) {
          if (t.tooltip) {
            const i = e.replay;
            t.tooltip.handleEvent(e.event, i, e.inChartArea) &&
              (e.changed = !0);
          }
        },
        defaults: {
          enabled: !0,
          external: null,
          position: 'average',
          backgroundColor: 'rgba(0,0,0,0.8)',
          titleColor: '#fff',
          titleFont: { weight: 'bold' },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: 'left',
          bodyColor: '#fff',
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: 'left',
          footerColor: '#fff',
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: 'bold' },
          footerAlign: 'left',
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: (t, e) => e.bodyFont.size,
          boxWidth: (t, e) => e.bodyFont.size,
          multiKeyBackground: '#fff',
          displayColors: !0,
          boxPadding: 0,
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          animation: { duration: 400, easing: 'easeOutQuart' },
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
            },
            opacity: { easing: 'linear', duration: 200 },
          },
          callbacks: Ro,
        },
        defaultRoutes: {
          bodyFont: 'font',
          footerFont: 'font',
          titleFont: 'font',
        },
        descriptors: {
          _scriptable: (t) =>
            'filter' !== t && 'itemSort' !== t && 'external' !== t,
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: 'animation' },
        },
        additionalOptionScopes: ['interaction'],
      },
      Bo = Object.freeze({
        __proto__: null,
        Colors: qs,
        Decimation: Js,
        Filler: po,
        Legend: xo,
        SubTitle: ko,
        Title: _o,
        Tooltip: Io,
      });
    function jo(t) {
      const e = this.getLabels();
      return t >= 0 && t < e.length ? e[t] : t;
    }
    function Vo(t, e, { horizontal: i, minRotation: n }) {
      const s = Et(n),
        o = (i ? Math.sin(s) : Math.cos(s)) || 0.001,
        r = 0.75 * e * ('' + t).length;
      return Math.min(e / o, r);
    }
    class zo extends Jn {
      constructor(t) {
        super(t),
          (this.start = void 0),
          (this.end = void 0),
          (this._startValue = void 0),
          (this._endValue = void 0),
          (this._valueRange = 0);
      }
      parse(t, e) {
        return H(t) ||
          (('number' == typeof t || t instanceof Number) && !isFinite(+t))
          ? null
          : +t;
      }
      handleTickRangeOptions() {
        const { beginAtZero: t } = this.options,
          { minDefined: e, maxDefined: i } = this.getUserBounds();
        let { min: n, max: s } = this;
        const o = (t) => (n = e ? n : t),
          r = (t) => (s = i ? s : t);
        if (t) {
          const t = _t(n),
            e = _t(s);
          t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && o(0);
        }
        if (n === s) {
          let e = 0 === s ? 1 : Math.abs(0.05 * s);
          r(s + e), t || o(n - e);
        }
        (this.min = n), (this.max = s);
      }
      getTickLimit() {
        const t = this.options.ticks;
        let e,
          { maxTicksLimit: i, stepSize: n } = t;
        return (
          n
            ? ((e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
              e > 1e3 &&
                (console.warn(
                  `scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${e} ticks. Limiting to 1000.`
                ),
                (e = 1e3)))
            : ((e = this.computeTickLimit()), (i = i || 11)),
          i && (e = Math.min(i, e)),
          e
        );
      }
      computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      }
      buildTicks() {
        const t = this.options,
          e = t.ticks;
        let i = this.getTickLimit();
        i = Math.max(2, i);
        const n = (function (t, e) {
          const i = [],
            {
              bounds: n,
              step: s,
              min: o,
              max: r,
              precision: a,
              count: l,
              maxTicks: c,
              maxDigits: h,
              includeBounds: u,
            } = t,
            d = s || 1,
            f = c - 1,
            { min: p, max: g } = e,
            m = !H(o),
            b = !H(r),
            x = !H(l),
            v = (g - p) / (h + 1);
          let _,
            y,
            k,
            w,
            S = kt((g - p) / f / d) * d;
          if (S < 1e-14 && !m && !b) return [{ value: p }, { value: g }];
          (w = Math.ceil(g / S) - Math.floor(p / S)),
            w > f && (S = kt((w * S) / f / d) * d),
            H(a) || ((_ = Math.pow(10, a)), (S = Math.ceil(S * _) / _)),
            'ticks' === n
              ? ((y = Math.floor(p / S) * S), (k = Math.ceil(g / S) * S))
              : ((y = p), (k = g)),
            m &&
            b &&
            s &&
            (function (t, e) {
              const i = Math.round(t);
              return i - e <= t && i + e >= t;
            })((r - o) / s, S / 1e3)
              ? ((w = Math.round(Math.min((r - o) / S, c))),
                (S = (r - o) / w),
                (y = o),
                (k = r))
              : x
              ? ((y = m ? o : y),
                (k = b ? r : k),
                (w = l - 1),
                (S = (k - y) / w))
              : ((w = (k - y) / S),
                (w = yt(w, Math.round(w), S / 1e3)
                  ? Math.round(w)
                  : Math.ceil(w)));
          const E = Math.max(Mt(S), Mt(y));
          (_ = Math.pow(10, H(a) ? E : a)),
            (y = Math.round(y * _) / _),
            (k = Math.round(k * _) / _);
          let O = 0;
          for (
            m &&
            (u && y !== o
              ? (i.push({ value: o }),
                y < o && O++,
                yt(Math.round((y + O * S) * _) / _, o, Vo(o, v, t)) && O++)
              : y < o && O++);
            O < w;
            ++O
          )
            i.push({ value: Math.round((y + O * S) * _) / _ });
          return (
            b && u && k !== r
              ? i.length && yt(i[i.length - 1].value, r, Vo(r, v, t))
                ? (i[i.length - 1].value = r)
                : i.push({ value: r })
              : (b && k !== r) || i.push({ value: k }),
            i
          );
        })(
          {
            maxTicks: i,
            bounds: t.bounds,
            min: t.min,
            max: t.max,
            precision: e.precision,
            step: e.stepSize,
            count: e.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: e.minRotation || 0,
            includeBounds: !1 !== e.includeBounds,
          },
          this._range || this
        );
        return (
          'ticks' === t.bounds && St(n, this, 'value'),
          t.reverse
            ? (n.reverse(), (this.start = this.max), (this.end = this.min))
            : ((this.start = this.min), (this.end = this.max)),
          n
        );
      }
      configure() {
        const t = this.ticks;
        let e = this.min,
          i = this.max;
        if ((super.configure(), this.options.offset && t.length)) {
          const n = (i - e) / Math.max(t.length - 1, 1) / 2;
          (e -= n), (i += n);
        }
        (this._startValue = e),
          (this._endValue = i),
          (this._valueRange = i - e);
      }
      getLabelForValue(t) {
        return ne(t, this.chart.options.locale, this.options.ticks.format);
      }
    }
    class Wo extends zo {
      static id = 'linear';
      static defaults = { ticks: { callback: oe.formatters.numeric } };
      determineDataLimits() {
        const { min: t, max: e } = this.getMinMax(!0);
        (this.min = $(t) ? t : 0),
          (this.max = $(e) ? e : 1),
          this.handleTickRangeOptions();
      }
      computeTickLimit() {
        const t = this.isHorizontal(),
          e = t ? this.width : this.height,
          i = Et(this.options.ticks.minRotation),
          n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
          s = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, s.lineHeight / n));
      }
      getPixelForValue(t) {
        return null === t
          ? NaN
          : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
      getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
      }
    }
    const Ho = (t) => Math.floor(vt(t)),
      Ko = (t, e) => Math.pow(10, Ho(t) + e);
    function Uo(t) {
      return 1 == t / Math.pow(10, Ho(t));
    }
    function $o(t, e, i) {
      const n = Math.pow(10, i),
        s = Math.floor(t / n);
      return Math.ceil(e / n) - s;
    }
    class Yo extends Jn {
      static id = 'logarithmic';
      static defaults = {
        ticks: { callback: oe.formatters.logarithmic, major: { enabled: !0 } },
      };
      constructor(t) {
        super(t),
          (this.start = void 0),
          (this.end = void 0),
          (this._startValue = void 0),
          (this._valueRange = 0);
      }
      parse(t, e) {
        const i = zo.prototype.parse.apply(this, [t, e]);
        if (0 !== i) return $(i) && i > 0 ? i : null;
        this._zero = !0;
      }
      determineDataLimits() {
        const { min: t, max: e } = this.getMinMax(!0);
        (this.min = $(t) ? Math.max(0, t) : null),
          (this.max = $(e) ? Math.max(0, e) : null),
          this.options.beginAtZero && (this._zero = !0),
          this._zero &&
            this.min !== this._suggestedMin &&
            !$(this._userMin) &&
            (this.min =
              t === Ko(this.min, 0) ? Ko(this.min, -1) : Ko(this.min, 0)),
          this.handleTickRangeOptions();
      }
      handleTickRangeOptions() {
        const { minDefined: t, maxDefined: e } = this.getUserBounds();
        let i = this.min,
          n = this.max;
        const s = (e) => (i = t ? i : e),
          o = (t) => (n = e ? n : t);
        i === n && (i <= 0 ? (s(1), o(10)) : (s(Ko(i, -1)), o(Ko(n, 1)))),
          i <= 0 && s(Ko(n, -1)),
          n <= 0 && o(Ko(i, 1)),
          (this.min = i),
          (this.max = n);
      }
      buildTicks() {
        const t = this.options,
          e = (function (t, { min: e, max: i }) {
            e = Y(t.min, e);
            const n = [],
              s = Ho(e);
            let o = (function (t, e) {
                let i = Ho(e - t);
                for (; $o(t, e, i) > 10; ) i++;
                for (; $o(t, e, i) < 10; ) i--;
                return Math.min(i, Ho(t));
              })(e, i),
              r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
            const a = Math.pow(10, o),
              l = s > o ? Math.pow(10, s) : 0,
              c = Math.round((e - l) * r) / r,
              h = Math.floor((e - l) / a / 10) * a * 10;
            let u = Math.floor((c - h) / Math.pow(10, o)),
              d = Y(t.min, Math.round((l + h + u * Math.pow(10, o)) * r) / r);
            for (; d < i; )
              n.push({ value: d, major: Uo(d), significand: u }),
                u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
                u >= 20 && (o++, (u = 2), (r = o >= 0 ? 1 : r)),
                (d = Math.round((l + h + u * Math.pow(10, o)) * r) / r);
            const f = Y(t.max, d);
            return n.push({ value: f, major: Uo(f), significand: u }), n;
          })({ min: this._userMin, max: this._userMax }, this);
        return (
          'ticks' === t.bounds && St(e, this, 'value'),
          t.reverse
            ? (e.reverse(), (this.start = this.max), (this.end = this.min))
            : ((this.start = this.min), (this.end = this.max)),
          e
        );
      }
      getLabelForValue(t) {
        return void 0 === t
          ? '0'
          : ne(t, this.chart.options.locale, this.options.ticks.format);
      }
      configure() {
        const t = this.min;
        super.configure(),
          (this._startValue = vt(t)),
          (this._valueRange = vt(this.max) - vt(t));
      }
      getPixelForValue(t) {
        return (
          (void 0 !== t && 0 !== t) || (t = this.min),
          null === t || isNaN(t)
            ? NaN
            : this.getPixelForDecimal(
                t === this.min
                  ? 0
                  : (vt(t) - this._startValue) / this._valueRange
              )
        );
      }
      getValueForPixel(t) {
        const e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange);
      }
    }
    function qo(t) {
      const e = t.ticks;
      if (e.display && t.display) {
        const t = Re(e.backdropPadding);
        return q(e.font && e.font.size, ue.font.size) + t.height;
      }
      return 0;
    }
    function Xo(t, e, i, n, s) {
      return t === n || t === s
        ? { start: e - i / 2, end: e + i / 2 }
        : t < n || t > s
        ? { start: e - i, end: e }
        : { start: e, end: e + i };
    }
    function Go(t, e, i, n, s) {
      const o = Math.abs(Math.sin(i)),
        r = Math.abs(Math.cos(i));
      let a = 0,
        l = 0;
      n.start < e.l
        ? ((a = (e.l - n.start) / o), (t.l = Math.min(t.l, e.l - a)))
        : n.end > e.r &&
          ((a = (n.end - e.r) / o), (t.r = Math.max(t.r, e.r + a))),
        s.start < e.t
          ? ((l = (e.t - s.start) / r), (t.t = Math.min(t.t, e.t - l)))
          : s.end > e.b &&
            ((l = (s.end - e.b) / r), (t.b = Math.max(t.b, e.b + l)));
    }
    function Jo(t) {
      return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right';
    }
    function Zo(t, e, i) {
      return (
        90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e),
        t
      );
    }
    function Qo(t, e, i, n) {
      const { ctx: s } = t;
      if (i) s.arc(t.xCenter, t.yCenter, e, 0, dt);
      else {
        let i = t.getPointPosition(0, e);
        s.moveTo(i.x, i.y);
        for (let o = 1; o < n; o++)
          (i = t.getPointPosition(o, e)), s.lineTo(i.x, i.y);
      }
    }
    class tr extends zo {
      static id = 'radialLinear';
      static defaults = {
        display: !0,
        animate: !0,
        position: 'chartArea',
        angleLines: {
          display: !0,
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0,
        },
        grid: { circular: !1 },
        startAngle: 0,
        ticks: { showLabelBackdrop: !0, callback: oe.formatters.numeric },
        pointLabels: {
          backdropColor: void 0,
          backdropPadding: 2,
          display: !0,
          font: { size: 10 },
          callback: (t) => t,
          padding: 5,
          centerPointLabels: !1,
        },
      };
      static defaultRoutes = {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color',
      };
      static descriptors = { angleLines: { _fallback: 'grid' } };
      constructor(t) {
        super(t),
          (this.xCenter = void 0),
          (this.yCenter = void 0),
          (this.drawingArea = void 0),
          (this._pointLabels = []),
          (this._pointLabelItems = []);
      }
      setDimensions() {
        const t = (this._padding = Re(qo(this.options) / 2)),
          e = (this.width = this.maxWidth - t.width),
          i = (this.height = this.maxHeight - t.height);
        (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
          (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
          (this.drawingArea = Math.floor(Math.min(e, i) / 2));
      }
      determineDataLimits() {
        const { min: t, max: e } = this.getMinMax(!1);
        (this.min = $(t) && !isNaN(t) ? t : 0),
          (this.max = $(e) && !isNaN(e) ? e : 0),
          this.handleTickRangeOptions();
      }
      computeTickLimit() {
        return Math.ceil(this.drawingArea / qo(this.options));
      }
      generateTickLabels(t) {
        zo.prototype.generateTickLabels.call(this, t),
          (this._pointLabels = this.getLabels()
            .map((t, e) => {
              const i = G(this.options.pointLabels.callback, [t, e], this);
              return i || 0 === i ? i : '';
            })
            .filter((t, e) => this.chart.getDataVisibility(e)));
      }
      fit() {
        const t = this.options;
        t.display && t.pointLabels.display
          ? (function (t) {
              const e = {
                  l: t.left + t._padding.left,
                  r: t.right - t._padding.right,
                  t: t.top + t._padding.top,
                  b: t.bottom - t._padding.bottom,
                },
                i = Object.assign({}, e),
                n = [],
                s = [],
                o = t._pointLabels.length,
                r = t.options.pointLabels,
                a = r.centerPointLabels ? ut / o : 0;
              for (let u = 0; u < o; u++) {
                const o = r.setContext(t.getPointLabelContext(u));
                s[u] = o.padding;
                const d = t.getPointPosition(u, t.drawingArea + s[u], a),
                  f = Ne(o.font),
                  p =
                    ((l = t.ctx),
                    (c = f),
                    (h = K((h = t._pointLabels[u])) ? h : [h]),
                    { w: fe(l, c.string, h), h: h.length * c.lineHeight });
                n[u] = p;
                const g = Ct(t.getIndexAngle(u) + a),
                  m = Math.round(Ot(g));
                Go(i, e, g, Xo(m, d.x, p.w, 0, 180), Xo(m, d.y, p.h, 90, 270));
              }
              var l, c, h;
              t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
                (t._pointLabelItems = (function (t, e, i) {
                  const n = [],
                    s = t._pointLabels.length,
                    o = t.options,
                    r = qo(o) / 2,
                    a = t.drawingArea,
                    l = o.pointLabels.centerPointLabels ? ut / s : 0;
                  for (let o = 0; o < s; o++) {
                    const s = t.getPointPosition(o, a + r + i[o], l),
                      d = Math.round(Ot(Ct(s.angle + mt))),
                      f = e[o],
                      p = Zo(s.y, f.h, d),
                      g = Jo(d),
                      m =
                        ((c = s.x),
                        (h = f.w),
                        'right' === (u = g)
                          ? (c -= h)
                          : 'center' === u && (c -= h / 2),
                        c);
                    n.push({
                      x: s.x,
                      y: p,
                      textAlign: g,
                      left: m,
                      top: p,
                      right: m + f.w,
                      bottom: p + f.h,
                    });
                  }
                  var c, h, u;
                  return n;
                })(t, n, s));
            })(this)
          : this.setCenterPoint(0, 0, 0, 0);
      }
      setCenterPoint(t, e, i, n) {
        (this.xCenter += Math.floor((t - e) / 2)),
          (this.yCenter += Math.floor((i - n) / 2)),
          (this.drawingArea -= Math.min(
            this.drawingArea / 2,
            Math.max(t, e, i, n)
          ));
      }
      getIndexAngle(t) {
        return Ct(
          t * (dt / (this._pointLabels.length || 1)) +
            Et(this.options.startAngle || 0)
        );
      }
      getDistanceFromCenterForValue(t) {
        if (H(t)) return NaN;
        const e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
      }
      getValueForDistanceFromCenter(t) {
        if (H(t)) return NaN;
        const e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e;
      }
      getPointLabelContext(t) {
        const e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
          const i = e[t];
          return (function (t, e, i) {
            return Ie(t, { label: i, index: e, type: 'pointLabel' });
          })(this.getContext(), t, i);
        }
      }
      getPointPosition(t, e, i = 0) {
        const n = this.getIndexAngle(t) - mt + i;
        return {
          x: Math.cos(n) * e + this.xCenter,
          y: Math.sin(n) * e + this.yCenter,
          angle: n,
        };
      }
      getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      }
      getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
      }
      getPointLabelPosition(t) {
        const {
          left: e,
          top: i,
          right: n,
          bottom: s,
        } = this._pointLabelItems[t];
        return { left: e, top: i, right: n, bottom: s };
      }
      drawBackground() {
        const {
          backgroundColor: t,
          grid: { circular: e },
        } = this.options;
        if (t) {
          const i = this.ctx;
          i.save(),
            i.beginPath(),
            Qo(
              this,
              this.getDistanceFromCenterForValue(this._endValue),
              e,
              this._pointLabels.length
            ),
            i.closePath(),
            (i.fillStyle = t),
            i.fill(),
            i.restore();
        }
      }
      drawGrid() {
        const t = this.ctx,
          e = this.options,
          { angleLines: i, grid: n, border: s } = e,
          o = this._pointLabels.length;
        let r, a, l;
        if (
          (e.pointLabels.display &&
            (function (t, e) {
              const {
                ctx: i,
                options: { pointLabels: n },
              } = t;
              for (let s = e - 1; s >= 0; s--) {
                const e = n.setContext(t.getPointLabelContext(s)),
                  o = Ne(e.font),
                  {
                    x: r,
                    y: a,
                    textAlign: l,
                    left: c,
                    top: h,
                    right: u,
                    bottom: d,
                  } = t._pointLabelItems[s],
                  { backdropColor: f } = e;
                if (!H(f)) {
                  const t = De(e.borderRadius),
                    n = Re(e.backdropPadding);
                  i.fillStyle = f;
                  const s = c - n.left,
                    o = h - n.top,
                    r = u - c + n.width,
                    a = d - h + n.height;
                  Object.values(t).some((t) => 0 !== t)
                    ? (i.beginPath(),
                      Oe(i, { x: s, y: o, w: r, h: a, radius: t }),
                      i.fill())
                    : i.fillRect(s, o, r, a);
                }
                we(i, t._pointLabels[s], r, a + o.lineHeight / 2, o, {
                  color: e.color,
                  textAlign: l,
                  textBaseline: 'middle',
                });
              }
            })(this, o),
          n.display &&
            this.ticks.forEach((t, e) => {
              if (0 !== e) {
                a = this.getDistanceFromCenterForValue(t.value);
                const i = this.getContext(e),
                  r = n.setContext(i),
                  l = s.setContext(i);
                !(function (t, e, i, n, s) {
                  const o = t.ctx,
                    r = e.circular,
                    { color: a, lineWidth: l } = e;
                  (!r && !n) ||
                    !a ||
                    !l ||
                    i < 0 ||
                    (o.save(),
                    (o.strokeStyle = a),
                    (o.lineWidth = l),
                    o.setLineDash(s.dash),
                    (o.lineDashOffset = s.dashOffset),
                    o.beginPath(),
                    Qo(t, i, r, n),
                    o.closePath(),
                    o.stroke(),
                    o.restore());
                })(this, r, a, o, l);
              }
            }),
          i.display)
        ) {
          for (t.save(), r = o - 1; r >= 0; r--) {
            const n = i.setContext(this.getPointLabelContext(r)),
              { color: s, lineWidth: o } = n;
            o &&
              s &&
              ((t.lineWidth = o),
              (t.strokeStyle = s),
              t.setLineDash(n.borderDash),
              (t.lineDashOffset = n.borderDashOffset),
              (a = this.getDistanceFromCenterForValue(
                e.ticks.reverse ? this.min : this.max
              )),
              (l = this.getPointPosition(r, a)),
              t.beginPath(),
              t.moveTo(this.xCenter, this.yCenter),
              t.lineTo(l.x, l.y),
              t.stroke());
          }
          t.restore();
        }
      }
      drawBorder() {}
      drawLabels() {
        const t = this.ctx,
          e = this.options,
          i = e.ticks;
        if (!i.display) return;
        const n = this.getIndexAngle(0);
        let s, o;
        t.save(),
          t.translate(this.xCenter, this.yCenter),
          t.rotate(n),
          (t.textAlign = 'center'),
          (t.textBaseline = 'middle'),
          this.ticks.forEach((n, r) => {
            if (0 === r && !e.reverse) return;
            const a = i.setContext(this.getContext(r)),
              l = Ne(a.font);
            if (
              ((s = this.getDistanceFromCenterForValue(this.ticks[r].value)),
              a.showLabelBackdrop)
            ) {
              (t.font = l.string),
                (o = t.measureText(n.label).width),
                (t.fillStyle = a.backdropColor);
              const e = Re(a.backdropPadding);
              t.fillRect(
                -o / 2 - e.left,
                -s - l.size / 2 - e.top,
                o + e.width,
                l.size + e.height
              );
            }
            we(t, n.label, 0, -s, l, { color: a.color });
          }),
          t.restore();
      }
      drawTitle() {}
    }
    const er = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
      },
      ir = Object.keys(er);
    function nr(t, e) {
      return t - e;
    }
    function sr(t, e) {
      if (H(e)) return null;
      const i = t._adapter,
        { parser: n, round: s, isoWeekday: o } = t._parseOpts;
      let r = e;
      return (
        'function' == typeof n && (r = n(r)),
        $(r) || (r = 'string' == typeof n ? i.parse(r, n) : i.parse(r)),
        null === r
          ? null
          : (s &&
              (r =
                'week' !== s || (!wt(o) && !0 !== o)
                  ? i.startOf(r, s)
                  : i.startOf(r, 'isoWeek', o)),
            +r)
      );
    }
    function or(t, e, i, n) {
      const s = ir.length;
      for (let o = ir.indexOf(t); o < s - 1; ++o) {
        const t = er[ir[o]],
          s = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
        if (t.common && Math.ceil((i - e) / (s * t.size)) <= n) return ir[o];
      }
      return ir[s - 1];
    }
    function rr(t, e, i) {
      if (i) {
        if (i.length) {
          const { lo: n, hi: s } = Nt(i, e);
          t[i[n] >= e ? i[n] : i[s]] = !0;
        }
      } else t[e] = !0;
    }
    function ar(t, e, i) {
      const n = [],
        s = {},
        o = e.length;
      let r, a;
      for (r = 0; r < o; ++r)
        (a = e[r]), (s[a] = r), n.push({ value: a, major: !1 });
      return 0 !== o && i
        ? (function (t, e, i, n) {
            const s = t._adapter,
              o = +s.startOf(e[0].value, n),
              r = e[e.length - 1].value;
            let a, l;
            for (a = o; a <= r; a = +s.add(a, 1, n))
              (l = i[a]), l >= 0 && (e[l].major = !0);
            return e;
          })(t, n, s, i)
        : n;
    }
    class lr extends Jn {
      static id = 'time';
      static defaults = {
        bounds: 'data',
        adapters: {},
        time: {
          parser: !1,
          unit: !1,
          round: !1,
          isoWeekday: !1,
          minUnit: 'millisecond',
          displayFormats: {},
        },
        ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
      };
      constructor(t) {
        super(t),
          (this._cache = { data: [], labels: [], all: [] }),
          (this._unit = 'day'),
          (this._majorUnit = void 0),
          (this._offsets = {}),
          (this._normalized = !1),
          (this._parseOpts = void 0);
      }
      init(t, e = {}) {
        const i = t.time || (t.time = {}),
          n = (this._adapter = new rn(t.adapters.date));
        n.init(e),
          nt(i.displayFormats, n.formats()),
          (this._parseOpts = {
            parser: i.parser,
            round: i.round,
            isoWeekday: i.isoWeekday,
          }),
          super.init(t),
          (this._normalized = e.normalized);
      }
      parse(t, e) {
        return void 0 === t ? null : sr(this, t);
      }
      beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
      }
      determineDataLimits() {
        const t = this.options,
          e = this._adapter,
          i = t.time.unit || 'day';
        let {
          min: n,
          max: s,
          minDefined: o,
          maxDefined: r,
        } = this.getUserBounds();
        function a(t) {
          o || isNaN(t.min) || (n = Math.min(n, t.min)),
            r || isNaN(t.max) || (s = Math.max(s, t.max));
        }
        (o && r) ||
          (a(this._getLabelBounds()),
          ('ticks' === t.bounds && 'labels' === t.ticks.source) ||
            a(this.getMinMax(!1))),
          (n = $(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i)),
          (s = $(s) && !isNaN(s) ? s : +e.endOf(Date.now(), i) + 1),
          (this.min = Math.min(n, s - 1)),
          (this.max = Math.max(n + 1, s));
      }
      _getLabelBounds() {
        const t = this.getLabelTimestamps();
        let e = Number.POSITIVE_INFINITY,
          i = Number.NEGATIVE_INFINITY;
        return (
          t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
        );
      }
      buildTicks() {
        const t = this.options,
          e = t.time,
          i = t.ticks,
          n =
            'labels' === i.source
              ? this.getLabelTimestamps()
              : this._generate();
        'ticks' === t.bounds &&
          n.length &&
          ((this.min = this._userMin || n[0]),
          (this.max = this._userMax || n[n.length - 1]));
        const s = this.min,
          o = (function (t, e, i) {
            let n = 0,
              s = t.length;
            for (; n < s && t[n] < e; ) n++;
            for (; s > n && t[s - 1] > i; ) s--;
            return n > 0 || s < t.length ? t.slice(n, s) : t;
          })(n, s, this.max);
        return (
          (this._unit =
            e.unit ||
            (i.autoSkip
              ? or(e.minUnit, this.min, this.max, this._getLabelCapacity(s))
              : (function (t, e, i, n, s) {
                  for (let o = ir.length - 1; o >= ir.indexOf(i); o--) {
                    const i = ir[o];
                    if (er[i].common && t._adapter.diff(s, n, i) >= e - 1)
                      return i;
                  }
                  return ir[i ? ir.indexOf(i) : 0];
                })(this, o.length, e.minUnit, this.min, this.max))),
          (this._majorUnit =
            i.major.enabled && 'year' !== this._unit
              ? (function (t) {
                  for (let e = ir.indexOf(t) + 1, i = ir.length; e < i; ++e)
                    if (er[ir[e]].common) return ir[e];
                })(this._unit)
              : void 0),
          this.initOffsets(n),
          t.reverse && o.reverse(),
          ar(this, o, this._majorUnit)
        );
      }
      afterAutoSkip() {
        this.options.offsetAfterAutoskip &&
          this.initOffsets(this.ticks.map((t) => +t.value));
      }
      initOffsets(t = []) {
        let e,
          i,
          n = 0,
          s = 0;
        this.options.offset &&
          t.length &&
          ((e = this.getDecimalForValue(t[0])),
          (n =
            1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
          (i = this.getDecimalForValue(t[t.length - 1])),
          (s =
            1 === t.length
              ? i
              : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
        const o = t.length < 3 ? 0.5 : 0.25;
        (n = Dt(n, 0, o)),
          (s = Dt(s, 0, o)),
          (this._offsets = { start: n, end: s, factor: 1 / (n + 1 + s) });
      }
      _generate() {
        const t = this._adapter,
          e = this.min,
          i = this.max,
          n = this.options,
          s = n.time,
          o = s.unit || or(s.minUnit, e, i, this._getLabelCapacity(e)),
          r = q(n.ticks.stepSize, 1),
          a = 'week' === o && s.isoWeekday,
          l = wt(a) || !0 === a,
          c = {};
        let h,
          u,
          d = e;
        if (
          (l && (d = +t.startOf(d, 'isoWeek', a)),
          (d = +t.startOf(d, l ? 'day' : o)),
          t.diff(i, e, o) > 1e5 * r)
        )
          throw new Error(
            e +
              ' and ' +
              i +
              ' are too far apart with stepSize of ' +
              r +
              ' ' +
              o
          );
        const f = 'data' === n.ticks.source && this.getDataTimestamps();
        for (h = d, u = 0; h < i; h = +t.add(h, r, o), u++) rr(c, h, f);
        return (
          (h !== i && 'ticks' !== n.bounds && 1 !== u) || rr(c, h, f),
          Object.keys(c)
            .sort((t, e) => t - e)
            .map((t) => +t)
        );
      }
      getLabelForValue(t) {
        const e = this._adapter,
          i = this.options.time;
        return i.tooltipFormat
          ? e.format(t, i.tooltipFormat)
          : e.format(t, i.displayFormats.datetime);
      }
      format(t, e) {
        const i = this.options.time.displayFormats,
          n = this._unit,
          s = e || i[n];
        return this._adapter.format(t, s);
      }
      _tickFormatFunction(t, e, i, n) {
        const s = this.options,
          o = s.ticks.callback;
        if (o) return G(o, [t, e, i], this);
        const r = s.time.displayFormats,
          a = this._unit,
          l = this._majorUnit,
          c = a && r[a],
          h = l && r[l],
          u = i[e],
          d = l && h && u && u.major;
        return this._adapter.format(t, n || (d ? h : c));
      }
      generateTickLabels(t) {
        let e, i, n;
        for (e = 0, i = t.length; e < i; ++e)
          (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t));
      }
      getDecimalForValue(t) {
        return null === t ? NaN : (t - this.min) / (this.max - this.min);
      }
      getPixelForValue(t) {
        const e = this._offsets,
          i = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + i) * e.factor);
      }
      getValueForPixel(t) {
        const e = this._offsets,
          i = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + i * (this.max - this.min);
      }
      _getLabelSize(t) {
        const e = this.options.ticks,
          i = this.ctx.measureText(t).width,
          n = Et(this.isHorizontal() ? e.maxRotation : e.minRotation),
          s = Math.cos(n),
          o = Math.sin(n),
          r = this._resolveTickFontOptions(0).size;
        return { w: i * s + r * o, h: i * o + r * s };
      }
      _getLabelCapacity(t) {
        const e = this.options.time,
          i = e.displayFormats,
          n = i[e.unit] || i.millisecond,
          s = this._tickFormatFunction(t, 0, ar(this, [t], this._majorUnit), n),
          o = this._getLabelSize(s),
          r =
            Math.floor(
              this.isHorizontal() ? this.width / o.w : this.height / o.h
            ) - 1;
        return r > 0 ? r : 1;
      }
      getDataTimestamps() {
        let t,
          e,
          i = this._cache.data || [];
        if (i.length) return i;
        const n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length)
          return (this._cache.data = n[0].controller.getAllParsedValues(this));
        for (t = 0, e = n.length; t < e; ++t)
          i = i.concat(n[t].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(i));
      }
      getLabelTimestamps() {
        const t = this._cache.labels || [];
        let e, i;
        if (t.length) return t;
        const n = this.getLabels();
        for (e = 0, i = n.length; e < i; ++e) t.push(sr(this, n[e]));
        return (this._cache.labels = this._normalized ? t : this.normalize(t));
      }
      normalize(t) {
        return Vt(t.sort(nr));
      }
    }
    function cr(t, e, i) {
      let n,
        s,
        o,
        r,
        a = 0,
        l = t.length - 1;
      i
        ? (e >= t[a].pos &&
            e <= t[l].pos &&
            ({ lo: a, hi: l } = Ft(t, 'pos', e)),
          ({ pos: n, time: o } = t[a]),
          ({ pos: s, time: r } = t[l]))
        : (e >= t[a].time &&
            e <= t[l].time &&
            ({ lo: a, hi: l } = Ft(t, 'time', e)),
          ({ time: n, pos: o } = t[a]),
          ({ time: s, pos: r } = t[l]));
      const c = s - n;
      return c ? o + ((r - o) * (e - n)) / c : o;
    }
    var hr = Object.freeze({
      __proto__: null,
      CategoryScale: class extends Jn {
        static id = 'category';
        static defaults = { ticks: { callback: jo } };
        constructor(t) {
          super(t),
            (this._startValue = void 0),
            (this._valueRange = 0),
            (this._addedLabels = []);
        }
        init(t) {
          const e = this._addedLabels;
          if (e.length) {
            const t = this.getLabels();
            for (const { index: i, label: n } of e)
              t[i] === n && t.splice(i, 1);
            this._addedLabels = [];
          }
          super.init(t);
        }
        parse(t, e) {
          if (H(t)) return null;
          const i = this.getLabels();
          return ((t, e) => (null === t ? null : Dt(Math.round(t), 0, e)))(
            (e =
              isFinite(e) && i[e] === t
                ? e
                : (function (t, e, i, n) {
                    const s = t.indexOf(e);
                    return -1 === s
                      ? ((t, e, i, n) => (
                          'string' == typeof e
                            ? ((i = t.push(e) - 1),
                              n.unshift({ index: i, label: e }))
                            : isNaN(e) && (i = null),
                          i
                        ))(t, e, i, n)
                      : s !== t.lastIndexOf(e)
                      ? i
                      : s;
                  })(i, t, q(e, t), this._addedLabels)),
            i.length - 1
          );
        }
        determineDataLimits() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let { min: i, max: n } = this.getMinMax(!0);
          'ticks' === this.options.bounds &&
            (t || (i = 0), e || (n = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = n);
        }
        buildTicks() {
          const t = this.min,
            e = this.max,
            i = this.options.offset,
            n = [];
          let s = this.getLabels();
          (s = 0 === t && e === s.length - 1 ? s : s.slice(t, e + 1)),
            (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0));
          for (let i = t; i <= e; i++) n.push({ value: i });
          return n;
        }
        getLabelForValue(t) {
          return jo.call(this, t);
        }
        configure() {
          super.configure(),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(t) {
          return (
            'number' != typeof t && (t = this.parse(t)),
            null === t
              ? NaN
              : this.getPixelForDecimal(
                  (t - this._startValue) / this._valueRange
                )
          );
        }
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getValueForPixel(t) {
          return Math.round(
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        }
        getBasePixel() {
          return this.bottom;
        }
      },
      LinearScale: Wo,
      LogarithmicScale: Yo,
      RadialLinearScale: tr,
      TimeScale: lr,
      TimeSeriesScale: class extends lr {
        static id = 'timeseries';
        static defaults = lr.defaults;
        constructor(t) {
          super(t),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
        }
        initOffsets() {
          const t = this._getTimestampsForTable(),
            e = (this._table = this.buildLookupTable(t));
          (this._minPos = cr(e, this.min)),
            (this._tableRange = cr(e, this.max) - this._minPos),
            super.initOffsets(t);
        }
        buildLookupTable(t) {
          const { min: e, max: i } = this,
            n = [],
            s = [];
          let o, r, a, l, c;
          for (o = 0, r = t.length; o < r; ++o)
            (l = t[o]), l >= e && l <= i && n.push(l);
          if (n.length < 2)
            return [
              { time: e, pos: 0 },
              { time: i, pos: 1 },
            ];
          for (o = 0, r = n.length; o < r; ++o)
            (c = n[o + 1]),
              (a = n[o - 1]),
              (l = n[o]),
              Math.round((c + a) / 2) !== l &&
                s.push({ time: l, pos: o / (r - 1) });
          return s;
        }
        _getTimestampsForTable() {
          let t = this._cache.all || [];
          if (t.length) return t;
          const e = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
          return (
            (t =
              e.length && i.length
                ? this.normalize(e.concat(i))
                : e.length
                ? e
                : i),
            (t = this._cache.all = t),
            t
          );
        }
        getDecimalForValue(t) {
          return (cr(this._table, t) - this._minPos) / this._tableRange;
        }
        getValueForPixel(t) {
          const e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
          return cr(this._table, i * this._tableRange + this._minPos, !0);
        }
      },
    });
    const ur = [nn, Ws, Bo, hr];
    Ss.register(...ur);
    const dr = Ss,
      fr = (t) => {
        const e = JSON.parse(t.data),
          i = [
            {
              label: '',
              data: e.labels.map((t) => t.value),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
              borderWidth: 1,
            },
          ];
        e.labels[0].compare &&
          i.push({
            label: '',
            data: e.labels.map((t) => t.compare),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          });
        const n = { labels: e.labels.map((t) => t.label), datasets: i };
        dr.register(qs);
        const s = {
            type: 'bar',
            data: n,
            options: {
              plugins: { legend: { display: !1 } },
              scales: { y: { beginAtZero: !0 } },
            },
          },
          r = o(t.domElement, document.createElement('canvas'));
        new dr(r.querySelector('canvas'), s);
      },
      pr = (t) => {
        const e = JSON.parse(t.data),
          i = o(t.domElement, document.createElement('canvas'))
            .querySelector('canvas')
            .getContext('2d'),
          n = i.createRadialGradient(300, 100, 0, 200, 100, 216.23);
        n.addColorStop(0, 'rgba(37, 219, 72, 1)'),
          n.addColorStop(0.4, 'rgba(255, 255, 0, 1)'),
          n.addColorStop(1, 'rgba(255, 0, 0, 1)');
        const s = {
          labels: e.map((t) => t.label),
          datasets: [
            {
              data: e.map((t) => t.value),
              fill: !0,
              backgroundColor: n,
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)',
            },
          ],
        };
        new dr(i, {
          type: 'radar',
          data: s,
          options: {
            plugins: { legend: { display: !1 } },
            elements: { line: { borderWidth: 3 } },
          },
        });
      },
      gr = (t) => {
        const { domElement: e } = t;
        let i = e.querySelector('[data-dialog-container]');
        (() => {
          const t = a.renderString(
              '<div class="hef-dialog"> <div class="hef-dialog__wrapper"> <div class="hef-dialog__container"> <div class="hef-dialog__header"> <span class="hef-dialog__close-button" data-close-trigger="true"> <span class="material-symbols-outlined"> close </span> </span> </div> <div class="hef-dialog__body"> <h2>Set Reminder</h2> <p>Would you like to be reminded to rescore this patient?</p> <div class="hef-select-form"> <label class="nhsuk-label" for="select-1"> Set scoring date </label> <select class="nhsuk-select" id="select-1" name="select-1"> <option value="1">1 month</option> <option value="2" selected="selected">3 months</option> <option value="3" disabled="disabled">6 months</option> </select> </div> </div> <div class="hef-dialog__controls"> <button class="nhsuk-button nhsuk-button--secondary" data-close-trigger="true"> Cancel </button> <button class="nhsuk-button" data-close-trigger="true">Submit</button> </div> </div> </div> </div> ',
              {}
            ),
            e = document.createElement('div');
          (e.innerHTML = t),
            (i = o(i, e)),
            i.querySelectorAll('[data-close-trigger]').forEach((t) => {
              t.addEventListener('click', () => {
                i = o(i, document.createElement('div'));
              });
            });
        })(),
          console.log('rendering...');
      },
      mr = (t) => {
        const { domElement: e } = t;
        let i = e.querySelector('[data-dialog-container]');
        (() => {
          const t = a.renderString(
              '<div class="hef-dialog"> <div class="hef-dialog__wrapper"> <div class="hef-dialog__container"> <div class="hef-dialog__header"> <span class="hef-dialog__close-button" data-close-trigger="true"> <span class="material-symbols-outlined"> close </span> </span> </div> <div class="hef-dialog__body"> <h2>Select scores to plot</h2> <div class="hef-select-rows"> <div class="hef-select-rows__row"> <div class="nhsuk-checkboxes"> <div class="nhsuk-checkboxes__item"> <input type="checkbox" class="nhsuk-checkboxes__input" name="row1"/> <label class="nhsuk-label nhsuk-checkboxes__label">22/04/2023 - Score 66%</label> </div> </div> </div> <div class="hef-select-rows__row"> <div class="nhsuk-checkboxes__item"> <input type="checkbox" class="nhsuk-checkboxes__input" name="row1"/> <label class="nhsuk-label nhsuk-checkboxes__label">10/03/2023 - Score 62%</label> </div> </div> <div class="hef-select-rows__row"> <div class="nhsuk-checkboxes__item"> <input type="checkbox" class="nhsuk-checkboxes__input" name="row1"/> <label class="nhsuk-label nhsuk-checkboxes__label">01/02/2023 - Score 54%</label> </div> </div> </div> </div> <div class="hef-dialog__controls"> <button class="nhsuk-button" data-close-trigger="true">Compare</button> </div> </div> </div> </div> ',
              {}
            ),
            e = document.createElement('div');
          (e.innerHTML = t),
            (i = o(i, e)),
            i.querySelectorAll('[data-close-trigger]').forEach((t) => {
              t.addEventListener('click', () => {
                i = o(i, document.createElement('div'));
              });
            });
        })();
      };
    (() => {
      const e = document.querySelectorAll('[data-component]');
      n('mainmenu', t),
        n('table', l),
        n('deletedialog', c),
        n('accordion', h),
        n('barchart', fr),
        n('radarchart', pr),
        n('reminderdialog', gr),
        n('comparedialog', mr);
      ((
        t,
        e,
        i = 'data-component-type',
        n = 'data-component-data',
        s = 'data-component-config'
      ) => {
        const o = [];
        [...e].forEach((e) => {
          const r = e.getAttribute(i),
            a = e.getAttribute(n),
            l = e.getAttribute(s);
          console.log(e.getAttribute(n));
          const c = t[r];
          try {
            c({
              domElement: e,
              name: r,
              sendMessage: (t) => {
                var e;
                (e = Object.assign(Object.assign({}, t), { source: r })),
                  o.forEach((t) => {
                    t.receiveMessage(e);
                  });
              },
              ready: (t) => {
                o.push({ receiveMessage: t });
              },
              data: a,
              config: l,
            });
          } catch (t) {
            console.log(t, 'error occurred when binding to DOM');
          }
        });
      })(s(), e);
    })();
  })();
})();
