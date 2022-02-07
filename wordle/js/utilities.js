function a(e) {
  return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function s(e, a) {
  if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
}

function t(e, a) {
  for (var s = 0; s < a.length; s++) {
    var t = a[s];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
  }
}

function o(e, a, s) {
  return a && t(e.prototype, a), s && t(e, s), e
}

function n(e, a, s) {
  return a in e ? Object.defineProperty(e, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = s, e
}

function r(e, a) {
  if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(a && a.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), a && l(e, a)
}

function i(e) {
  return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function l(e, a) {
  return (l = Object.setPrototypeOf || function (e, a) {
    return e.__proto__ = a, e
  })(e, a)
}

function d() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
  } catch (e) {
    return !1
  }
}

function u(e, a, s) {
  return (u = d() ? Reflect.construct : function (e, a, s) {
    var t = [null];
    t.push.apply(t, a);
    var o = new (Function.bind.apply(e, t));
    return s && l(o, s.prototype), o
  }).apply(null, arguments)
}

function c(e) {
  var a = "function" == typeof Map ? new Map : void 0;
  return (c = function (e) {
    if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
    var s;
    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== a) {
      if (a.has(e)) return a.get(e);
      a.set(e, t)
    }

    function t() {
      return u(e, arguments, i(this).constructor)
    }
    return t.prototype = Object.create(e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), l(t, e)
  })(e)
}

function p(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function m(e, a) {
  return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
}

function h(e) {
  var a = d();
  return function () {
    var s, t = i(e);
    if (a) {
      var o = i(this).constructor;
      s = Reflect.construct(t, arguments, o)
    } else s = t.apply(this, arguments);
    return m(this, s)
  }
}

function y(e, a) {
  return function (e) {
    if (Array.isArray(e)) return e
  }(e) || function (e, a) {
    var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null == s) return;
    var t, o, n = [],
      r = !0,
      i = !1;
    try {
      for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0);
    } catch (e) {
      i = !0, o = e
    } finally {
      try {
        r || null == s.return || s.return()
      } finally {
        if (i) throw o
      }
    }
    return n
  }(e, a) || b(e, a) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}

function g(e) {
  return function (e) {
    if (Array.isArray(e)) return f(e)
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
  }(e) || b(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}

function b(e, a) {
  if (e) {
    if ("string" == typeof e) return f(e, a);
    var s = Object.prototype.toString.call(e).slice(8, -1);
    return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
  }
}

function f(e, a) {
  (null == a || a > e.length) && (a = e.length);
  for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
  return t
}

function q(e, a) {
  return e === a || e != e && a != a
}

function Oe(e) {
  return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}

function E(e, a) {
  for (var s = e.length; s--;)
    if (q(e[s][0], a)) return s;
  return -1
}

function ce(e, a, s) {
  "__proto__" == a && ue ? ue(e, a, {
    configurable: !0,
    enumerable: !0,
    value: s,
    writable: !0
  }) : e[a] = s
}

function pe(e, a, s) {
  (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
}

var me, he = function (e, a, s) {
  for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
    var i = n[me ? r : ++t];
    if (!1 === a(o[i], i, o)) break
  }
  return e
};

var A = Array.prototype.splice;

  function C(e) {
    var a = -1,
      s = null == e ? 0 : e.length;
    for (this.clear(); ++a < s;) {
      var t = e[a];
      this.set(t[0], t[1])
    }
  }
  C.prototype.clear = function () {
    this.__data__ = [], this.size = 0
  }, C.prototype.delete = function (e) {
    var a = this.__data__,
      s = E(a, e);
    return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
  }, C.prototype.get = function (e) {
    var a = this.__data__,
      s = E(a, e);
    return s < 0 ? void 0 : a[s][1]
  }, C.prototype.has = function (e) {
    return E(this.__data__, e) > -1
  }, C.prototype.set = function (e, a) {
    var s = this.__data__,
      t = E(s, e);
    return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
  };

  var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global;
  var T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
    I = L || T || Function("return this")(),
    M = I.Symbol,
    O = Object.prototype,
    R = O.hasOwnProperty,
    P = O.toString,
    $ = M ? M.toStringTag : void 0;
  var H = Object.prototype.toString;
  var N = M ? M.toStringTag : void 0;

  var ke = I.Uint8Array;

  function ve(e, a) {
    var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
    return new e.constructor(o, e.byteOffset, e.length)
  }

  var we = Object.create,
  xe = function () {
    function e() { }
    return function (a) {
      if (!G(a)) return {};
      if (we) return we(a);
      e.prototype = a;
      var s = new e;
      return e.prototype = void 0, s
    }
  }();
var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function (e) {
  return ze(je(e))
}),
  _e = Object.prototype;

  function D(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function (e) {
      var a = R.call(e, $),
        s = e[$];
      try {
        e[$] = void 0;
        var t = !0
      } catch (e) { }
      var o = P.call(e);
      return t && (a ? e[$] = s : delete e[$]), o
    }(e) : function (e) {
      return H.call(e)
    }(e)
  }

  function G(e) {
    var s = a(e);
    return null != e && ("object" == s || "function" == s)
  }

  function B(e) {
    if (!G(e)) return !1;
    var a = D(e);
    return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
  }

  var F, W = I["__core-js_shared__"],
    Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
  var J = Function.prototype.toString;
  var U = /^\[object .+?Constructor\]$/,
    X = Function.prototype,
    V = Object.prototype,
    K = X.toString,
    Q = V.hasOwnProperty,
    Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  function ee(e) {
    return !(!G(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function (e) {
      if (null != e) {
        try {
          return J.call(e)
        } catch (e) { }
        try {
          return e + ""
        } catch (e) { }
      }
      return ""
    }(e));
    var a
  }

  function ae(e, a) {
    var s = function (e, a) {
      return null == e ? void 0 : e[a]
    }(e, a);
    return ee(s) ? s : void 0
  }

  var se = ae(I, "Map"),
    te = ae(Object, "create");

  function re(e) {
    var a = -1,
      s = null == e ? 0 : e.length;
    for (this.clear(); ++a < s;) {
      var t = e[a];
      this.set(t[0], t[1])
    }
  }

  function ie(e, s) {
    var t, o, n = e.__data__;
    return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
  }

  function le(e) {
    var a = -1,
      s = null == e ? 0 : e.length;
    for (this.clear(); ++a < s;) {
      var t = e[a];
      this.set(t[0], t[1])
    }
  }
  re.prototype.clear = function () {
    this.__data__ = te ? te(null) : {}, this.size = 0
  }, re.prototype.delete = function (e) {
    var a = this.has(e) && delete this.__data__[e];
    return this.size -= a ? 1 : 0, a
  }, re.prototype.get = function (e) {
    var a = this.__data__;
    if (te) {
      var s = a[e];
      return "__lodash_hash_undefined__" === s ? void 0 : s
    }
    return Object.prototype.hasOwnProperty.call(a, e) ? a[e] : void 0
  }, re.prototype.has = function (e) {
    var a = this.__data__;
    return te ? void 0 !== a[e] : Object.prototype.hasOwnProperty.call(a, e)
  }, re.prototype.set = function (e, a) {
    var s = this.__data__;
    return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
  }, le.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new re,
      map: new (se || C),
      string: new re
    }
  }, le.prototype.delete = function (e) {
    var a = ie(this, e).delete(e);
    return this.size -= a ? 1 : 0, a
  }, le.prototype.get = function (e) {
    return ie(this, e).get(e)
  }, le.prototype.has = function (e) {
    return ie(this, e).has(e)
  }, le.prototype.set = function (e, a) {
    var s = ie(this, e),
      t = s.size;
    return s.set(e, a), this.size += s.size == t ? 0 : 1, this
  };

  function de(e) {
    var a = this.__data__ = new C(e);
    this.size = a.size
  }
  de.prototype.clear = function () {
    this.__data__ = new C, this.size = 0
  }, de.prototype.delete = function (e) {
    var a = this.__data__,
      s = a.delete(e);
    return this.size = a.size, s
  }, de.prototype.get = function (e) {
    return this.__data__.get(e)
  }, de.prototype.has = function (e) {
    return this.__data__.has(e)
  }, de.prototype.set = function (e, a) {
    var s = this.__data__;
    if (s instanceof C) {
      var t = s.__data__;
      if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
      s = this.__data__ = new le(t)
    }
    return s.set(e, a), this.size = s.size, this
  };
  var ue = function () {
    try {
      var e = ae(Object, "defineProperty");
      return e({}, "", {}), e
    } catch (e) { }
  }();

  function qe(e) {
    var a = e && e.constructor;
    return e === ("function" == typeof a && a.prototype || _e)
  }

  function Ee(e) {
    return null != e && "object" == a(e)
  }

  function Ae(e) {
    return Ee(e) && "[object Arguments]" == D(e)
  }

  var Ce = Object.prototype,
    Le = Ce.hasOwnProperty,
    Te = Ce.propertyIsEnumerable,
    Ie = Ae(function () {
      return arguments
    }()) ? Ae : function (e) {
      return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
    },
    Me = Array.isArray;

  function Re(e) {
    return null != e && Oe(e.length) && !B(e)
  }

  var De = Function.prototype,
    Ge = Object.prototype,
    Be = De.toString,
    Fe = Ge.hasOwnProperty,
    We = Be.call(Object);

function Ze(e, a) {
  if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
}

function aa(e, a, s) {
  var t = e[a];
  Object.prototype.hasOwnProperty.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
}

function ta(e, s) {
  var sa = /^(?:0|[1-9]\d*)$/;
  var t = a(e);
  return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
}

function Pa(e, a) {
  var s = {};
  return e.forEach((function (e, t) {
    if (a[t])
      for (var o = 0; o < e.length; o++) {
        var n = e[o],
          r = a[t][o],
          i = s[n] || "unknown";
        Ra[r] > Ra[i] && (s[n] = r)
      }
  })), s
}

function $a(e) {
  var a = ["th", "st", "nd", "rd"],
    s = e % 100;
  return e + (a[(s - 20) % 10] || a[s] || a[0])
}

var Fa = [].concat(g(alphabet.split("").slice(13)), g(alphabet.split("").slice(0, 13)));

function Wa(e) {
  for (var a = "", s = 0; s < e.length; s++) {
    var t = alphabet.indexOf(e[s]);
    a += t >= 0 ? Fa[t] : "_"
  }
  return a
}

function cs(e, a, s, t) {
  return new (s || (s = Promise))((function (o, n) {
    function r(e) {
      try {
        l(t.next(e))
      } catch (e) {
        n(e)
      }
    }

    function i(e) {
      try {
        l(t.throw(e))
      } catch (e) {
        n(e)
      }
    }

    function l(e) {
      var a;
      e.done ? o(e.value) : (a = e.value, a instanceof s ? a : new s((function (e) {
        e(a)
      }))).then(r, i)
    }
    l((t = t.apply(e, a || [])).next())
  }))
}

function getGameState() {
  var e = window.localStorage.getItem(wa) || JSON.stringify(initialGameState);
  return JSON.parse(e)
}

function Na(e, a) {
  var s = new Date(e),
    t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
  return Math.round(t / daysMS)
}

function getDayOffset(e) {
  return Na(Ha, e)
}

function Da(e) {
  var a, s = getDayOffset(e);
  return a = s % solutions.length, solutions[a]
}

function notInSolutions(word) {
  return !solutions.includes(word);
}
