(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function lg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var mf = { exports: {} },
  Ms = {},
  gf = { exports: {} },
  _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ii = Symbol.for("react.element"),
  ag = Symbol.for("react.portal"),
  ug = Symbol.for("react.fragment"),
  cg = Symbol.for("react.strict_mode"),
  dg = Symbol.for("react.profiler"),
  fg = Symbol.for("react.provider"),
  hg = Symbol.for("react.context"),
  pg = Symbol.for("react.forward_ref"),
  mg = Symbol.for("react.suspense"),
  gg = Symbol.for("react.memo"),
  yg = Symbol.for("react.lazy"),
  Au = Symbol.iterator;
function vg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Au && e[Au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var yf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vf = Object.assign,
  xf = {};
function Yn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xf),
    (this.updater = n || yf);
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wf() {}
wf.prototype = Yn.prototype;
function Jl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xf),
    (this.updater = n || yf);
}
var ea = (Jl.prototype = new wf());
ea.constructor = Jl;
vf(ea, Yn.prototype);
ea.isPureReactComponent = !0;
var Du = Array.isArray,
  Sf = Object.prototype.hasOwnProperty,
  ta = { current: null },
  Pf = { key: !0, ref: !0, __self: !0, __source: !0 };
function kf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Sf.call(t, r) && !Pf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ii,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: ta.current,
  };
}
function xg(e, t) {
  return {
    $$typeof: ii,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function na(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ii;
}
function wg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Lu = /\/+/g;
function no(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? wg("" + e.key)
    : t.toString(36);
}
function Fi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ii:
          case ag:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + no(o, 0) : r),
      Du(i)
        ? ((n = ""),
          e != null && (n = e.replace(Lu, "$&/") + "/"),
          Fi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (na(i) &&
            (i = xg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Lu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Du(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + no(s, l);
      o += Fi(s, t, n, a, i);
    }
  else if (((a = vg(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + no(s, l++)), (o += Fi(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function gi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Sg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  bi = { transition: null },
  Pg = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: bi,
    ReactCurrentOwner: ta,
  };
function Tf() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = {
  map: gi,
  forEach: function (e, t, n) {
    gi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!na(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
_.Component = Yn;
_.Fragment = ug;
_.Profiler = dg;
_.PureComponent = Jl;
_.StrictMode = cg;
_.Suspense = mg;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pg;
_.act = Tf;
_.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = vf({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = ta.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Sf.call(t, a) &&
        !Pf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ii, type: e.type, key: i, ref: s, props: r, _owner: o };
};
_.createContext = function (e) {
  return (
    (e = {
      $$typeof: hg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fg, _context: e }),
    (e.Consumer = e)
  );
};
_.createElement = kf;
_.createFactory = function (e) {
  var t = kf.bind(null, e);
  return (t.type = e), t;
};
_.createRef = function () {
  return { current: null };
};
_.forwardRef = function (e) {
  return { $$typeof: pg, render: e };
};
_.isValidElement = na;
_.lazy = function (e) {
  return { $$typeof: yg, _payload: { _status: -1, _result: e }, _init: Sg };
};
_.memo = function (e, t) {
  return { $$typeof: gg, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function (e) {
  var t = bi.transition;
  bi.transition = {};
  try {
    e();
  } finally {
    bi.transition = t;
  }
};
_.unstable_act = Tf;
_.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
_.useContext = function (e) {
  return xe.current.useContext(e);
};
_.useDebugValue = function () {};
_.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
_.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
_.useId = function () {
  return xe.current.useId();
};
_.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
_.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
_.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
_.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
_.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
_.useRef = function (e) {
  return xe.current.useRef(e);
};
_.useState = function (e) {
  return xe.current.useState(e);
};
_.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
_.useTransition = function () {
  return xe.current.useTransition();
};
_.version = "18.3.1";
gf.exports = _;
var k = gf.exports;
const kg = lg(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tg = k,
  Cg = Symbol.for("react.element"),
  Ng = Symbol.for("react.fragment"),
  Eg = Object.prototype.hasOwnProperty,
  jg = Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ag = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Eg.call(t, r) && !Ag.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Cg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: jg.current,
  };
}
Ms.Fragment = Ng;
Ms.jsx = Cf;
Ms.jsxs = Cf;
mf.exports = Ms;
var d = mf.exports,
  Wo = {},
  Nf = { exports: {} },
  Me = {},
  Ef = { exports: {} },
  jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, M) {
    var R = j.length;
    j.push(M);
    e: for (; 0 < R; ) {
      var Y = (R - 1) >>> 1,
        ie = j[Y];
      if (0 < i(ie, M)) (j[Y] = M), (j[R] = ie), (R = Y);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var M = j[0],
      R = j.pop();
    if (R !== M) {
      j[0] = R;
      e: for (var Y = 0, ie = j.length, pi = ie >>> 1; Y < pi; ) {
        var Kt = 2 * (Y + 1) - 1,
          to = j[Kt],
          Gt = Kt + 1,
          mi = j[Gt];
        if (0 > i(to, R))
          Gt < ie && 0 > i(mi, to)
            ? ((j[Y] = mi), (j[Gt] = R), (Y = Gt))
            : ((j[Y] = to), (j[Kt] = R), (Y = Kt));
        else if (Gt < ie && 0 > i(mi, R)) (j[Y] = mi), (j[Gt] = R), (Y = Gt);
        else break e;
      }
    }
    return M;
  }
  function i(j, M) {
    var R = j.sortIndex - M.sortIndex;
    return R !== 0 ? R : j.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    f = 3,
    g = !1,
    v = !1,
    x = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(j) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= j)
        r(u), (M.sortIndex = M.expirationTime), t(a, M);
      else break;
      M = n(u);
    }
  }
  function w(j) {
    if (((x = !1), y(j), !v))
      if (n(a) !== null) (v = !0), hi(P);
      else {
        var M = n(u);
        M !== null && ee(w, M.startTime - j);
      }
  }
  function P(j, M) {
    (v = !1), x && ((x = !1), m(T), (T = -1)), (g = !0);
    var R = f;
    try {
      for (
        y(M), h = n(a);
        h !== null && (!(h.expirationTime > M) || (j && !re()));

      ) {
        var Y = h.callback;
        if (typeof Y == "function") {
          (h.callback = null), (f = h.priorityLevel);
          var ie = Y(h.expirationTime <= M);
          (M = e.unstable_now()),
            typeof ie == "function" ? (h.callback = ie) : h === n(a) && r(a),
            y(M);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var pi = !0;
      else {
        var Kt = n(u);
        Kt !== null && ee(w, Kt.startTime - M), (pi = !1);
      }
      return pi;
    } finally {
      (h = null), (f = R), (g = !1);
    }
  }
  var N = !1,
    E = null,
    T = -1,
    V = 5,
    L = -1;
  function re() {
    return !(e.unstable_now() - L < V);
  }
  function vt() {
    if (E !== null) {
      var j = e.unstable_now();
      L = j;
      var M = !0;
      try {
        M = E(!0, j);
      } finally {
        M ? Wt() : ((N = !1), (E = null));
      }
    } else N = !1;
  }
  var Wt;
  if (typeof p == "function")
    Wt = function () {
      p(vt);
    };
  else if (typeof MessageChannel < "u") {
    var nr = new MessageChannel(),
      ju = nr.port2;
    (nr.port1.onmessage = vt),
      (Wt = function () {
        ju.postMessage(null);
      });
  } else
    Wt = function () {
      S(vt, 0);
    };
  function hi(j) {
    (E = j), N || ((N = !0), Wt());
  }
  function ee(j, M) {
    T = S(function () {
      j(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), hi(P));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = f;
      }
      var R = f;
      f = M;
      try {
        return j();
      } finally {
        f = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, M) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var R = f;
      f = j;
      try {
        return M();
      } finally {
        f = R;
      }
    }),
    (e.unstable_scheduleCallback = function (j, M, R) {
      var Y = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? Y + R : Y))
          : (R = Y),
        j)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = R + ie),
        (j = {
          id: c++,
          callback: M,
          priorityLevel: j,
          startTime: R,
          expirationTime: ie,
          sortIndex: -1,
        }),
        R > Y
          ? ((j.sortIndex = R),
            t(u, j),
            n(a) === null &&
              j === n(u) &&
              (x ? (m(T), (T = -1)) : (x = !0), ee(w, R - Y)))
          : ((j.sortIndex = ie), t(a, j), v || g || ((v = !0), hi(P))),
        j
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (j) {
      var M = f;
      return function () {
        var R = f;
        f = M;
        try {
          return j.apply(this, arguments);
        } finally {
          f = R;
        }
      };
    });
})(jf);
Ef.exports = jf;
var Dg = Ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lg = k,
  De = Dg;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Af = new Set(),
  Vr = {};
function hn(e, t) {
  zn(e, t), zn(e + "Capture", t);
}
function zn(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) Af.add(t[e]);
}
var ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ko = Object.prototype.hasOwnProperty,
  Mg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mu = {},
  Ru = {};
function Rg(e) {
  return Ko.call(Ru, e)
    ? !0
    : Ko.call(Mu, e)
    ? !1
    : Mg.test(e)
    ? (Ru[e] = !0)
    : ((Mu[e] = !0), !1);
}
function Vg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _g(e, t, n, r) {
  if (t === null || typeof t > "u" || Vg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function ia(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ra, ia);
    ce[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ra, ia);
    ce[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ra, ia);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function sa(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_g(t, n, i, r) && (n = null),
    r || i === null
      ? Rg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = Lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yi = Symbol.for("react.element"),
  yn = Symbol.for("react.portal"),
  vn = Symbol.for("react.fragment"),
  oa = Symbol.for("react.strict_mode"),
  Go = Symbol.for("react.profiler"),
  Df = Symbol.for("react.provider"),
  Lf = Symbol.for("react.context"),
  la = Symbol.for("react.forward_ref"),
  Xo = Symbol.for("react.suspense"),
  Qo = Symbol.for("react.suspense_list"),
  aa = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  Mf = Symbol.for("react.offscreen"),
  Vu = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vu && e[Vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  ro;
function pr(e) {
  if (ro === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ro = (t && t[1]) || "";
    }
  return (
    `
` +
    ro +
    e
  );
}
var io = !1;
function so(e, t) {
  if (!e || io) return "";
  io = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (io = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? pr(e) : "";
}
function Og(e) {
  switch (e.tag) {
    case 5:
      return pr(e.type);
    case 16:
      return pr("Lazy");
    case 13:
      return pr("Suspense");
    case 19:
      return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = so(e.type, !1)), e;
    case 11:
      return (e = so(e.type.render, !1)), e;
    case 1:
      return (e = so(e.type, !0)), e;
    default:
      return "";
  }
}
function Yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vn:
      return "Fragment";
    case yn:
      return "Portal";
    case Go:
      return "Profiler";
    case oa:
      return "StrictMode";
    case Xo:
      return "Suspense";
    case Qo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lf:
        return (e.displayName || "Context") + ".Consumer";
      case Df:
        return (e._context.displayName || "Context") + ".Provider";
      case la:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case aa:
        return (
          (t = e.displayName || null), t !== null ? t : Yo(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return Yo(e(t));
        } catch {}
    }
  return null;
}
function Ig(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Yo(t);
    case 8:
      return t === oa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function It(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Rf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Fg(e) {
  var t = Rf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vi(e) {
  e._valueTracker || (e._valueTracker = Fg(e));
}
function Vf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Rf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function es(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zo(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _u(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = It(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function _f(e, t) {
  (t = t.checked), t != null && sa(e, "checked", t, !1);
}
function qo(e, t) {
  _f(e, t);
  var n = It(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Jo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Jo(e, t.type, It(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ou(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Jo(e, t, n) {
  (t !== "number" || es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mr = Array.isArray;
function Vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function el(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (mr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: It(n) };
}
function Of(e, t) {
  var n = It(t.value),
    r = It(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Fu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function If(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function tl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? If(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xi,
  Ff = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xi = xi || document.createElement("div"),
          xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  bg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sr).forEach(function (e) {
  bg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e]);
  });
});
function bf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
    ? ("" + t).trim()
    : t + "px";
}
function zf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = bf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var zg = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function nl(e, t) {
  if (t) {
    if (zg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function rl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var il = null;
function ua(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sl = null,
  _n = null,
  On = null;
function bu(e) {
  if ((e = li(e))) {
    if (typeof sl != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Is(t)), sl(e.stateNode, e.type, t));
  }
}
function Bf(e) {
  _n ? (On ? On.push(e) : (On = [e])) : (_n = e);
}
function Uf() {
  if (_n) {
    var e = _n,
      t = On;
    if (((On = _n = null), bu(e), t)) for (e = 0; e < t.length; e++) bu(t[e]);
  }
}
function $f(e, t) {
  return e(t);
}
function Hf() {}
var oo = !1;
function Wf(e, t, n) {
  if (oo) return e(t, n);
  oo = !0;
  try {
    return $f(e, t, n);
  } finally {
    (oo = !1), (_n !== null || On !== null) && (Hf(), Uf());
  }
}
function Or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Is(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var ol = !1;
if (ft)
  try {
    var ir = {};
    Object.defineProperty(ir, "passive", {
      get: function () {
        ol = !0;
      },
    }),
      window.addEventListener("test", ir, ir),
      window.removeEventListener("test", ir, ir);
  } catch {
    ol = !1;
  }
function Bg(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Pr = !1,
  ts = null,
  ns = !1,
  ll = null,
  Ug = {
    onError: function (e) {
      (Pr = !0), (ts = e);
    },
  };
function $g(e, t, n, r, i, s, o, l, a) {
  (Pr = !1), (ts = null), Bg.apply(Ug, arguments);
}
function Hg(e, t, n, r, i, s, o, l, a) {
  if (($g.apply(this, arguments), Pr)) {
    if (Pr) {
      var u = ts;
      (Pr = !1), (ts = null);
    } else throw Error(C(198));
    ns || ((ns = !0), (ll = u));
  }
}
function pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Kf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zu(e) {
  if (pn(e) !== e) throw Error(C(188));
}
function Wg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return zu(i), e;
        if (s === r) return zu(i), t;
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Gf(e) {
  return (e = Wg(e)), e !== null ? Xf(e) : null;
}
function Xf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qf = De.unstable_scheduleCallback,
  Bu = De.unstable_cancelCallback,
  Kg = De.unstable_shouldYield,
  Gg = De.unstable_requestPaint,
  q = De.unstable_now,
  Xg = De.unstable_getCurrentPriorityLevel,
  ca = De.unstable_ImmediatePriority,
  Yf = De.unstable_UserBlockingPriority,
  rs = De.unstable_NormalPriority,
  Qg = De.unstable_LowPriority,
  Zf = De.unstable_IdlePriority,
  Rs = null,
  tt = null;
function Yg(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
    try {
      tt.onCommitFiberRoot(Rs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Jg,
  Zg = Math.log,
  qg = Math.LN2;
function Jg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zg(e) / qg) | 0)) | 0;
}
var wi = 64,
  Si = 4194304;
function gr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function is(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = gr(l)) : ((s &= o), s !== 0 && (r = gr(s)));
  } else (o = n & ~i), o !== 0 ? (r = gr(o)) : s !== 0 && (r = gr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ey(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ty(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Qe(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = ey(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function al(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qf() {
  var e = wi;
  return (wi <<= 1), !(wi & 4194240) && (wi = 64), e;
}
function lo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function si(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n);
}
function ny(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Qe(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function da(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var F = 0;
function Jf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var eh,
  fa,
  th,
  nh,
  rh,
  ul = !1,
  Pi = [],
  At = null,
  Dt = null,
  Lt = null,
  Ir = new Map(),
  Fr = new Map(),
  Ct = [],
  ry =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      At = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function sr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = li(t)), t !== null && fa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function iy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (At = sr(At, e, t, n, r, i)), !0;
    case "dragenter":
      return (Dt = sr(Dt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Lt = sr(Lt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ir.set(s, sr(Ir.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Fr.set(s, sr(Fr.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ih(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kf(n)), t !== null)) {
          (e.blockedOn = t),
            rh(e.priority, function () {
              th(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = cl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (il = r), n.target.dispatchEvent(r), (il = null);
    } else return (t = li(n)), t !== null && fa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $u(e, t, n) {
  zi(e) && n.delete(t);
}
function sy() {
  (ul = !1),
    At !== null && zi(At) && (At = null),
    Dt !== null && zi(Dt) && (Dt = null),
    Lt !== null && zi(Lt) && (Lt = null),
    Ir.forEach($u),
    Fr.forEach($u);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ul ||
      ((ul = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, sy)));
}
function br(e) {
  function t(i) {
    return or(i, e);
  }
  if (0 < Pi.length) {
    or(Pi[0], e);
    for (var n = 1; n < Pi.length; n++) {
      var r = Pi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    At !== null && or(At, e),
      Dt !== null && or(Dt, e),
      Lt !== null && or(Lt, e),
      Ir.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < Ct.length;
    n++
  )
    (r = Ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ct.length && ((n = Ct[0]), n.blockedOn === null); )
    ih(n), n.blockedOn === null && Ct.shift();
}
var In = yt.ReactCurrentBatchConfig,
  ss = !0;
function oy(e, t, n, r) {
  var i = F,
    s = In.transition;
  In.transition = null;
  try {
    (F = 1), ha(e, t, n, r);
  } finally {
    (F = i), (In.transition = s);
  }
}
function ly(e, t, n, r) {
  var i = F,
    s = In.transition;
  In.transition = null;
  try {
    (F = 4), ha(e, t, n, r);
  } finally {
    (F = i), (In.transition = s);
  }
}
function ha(e, t, n, r) {
  if (ss) {
    var i = cl(e, t, n, r);
    if (i === null) vo(e, t, r, os, n), Uu(e, r);
    else if (iy(i, e, t, n, r)) r.stopPropagation();
    else if ((Uu(e, r), t & 4 && -1 < ry.indexOf(e))) {
      for (; i !== null; ) {
        var s = li(i);
        if (
          (s !== null && eh(s),
          (s = cl(e, t, n, r)),
          s === null && vo(e, t, r, os, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else vo(e, t, r, null, n);
  }
}
var os = null;
function cl(e, t, n, r) {
  if (((os = null), (e = ua(r)), (e = en(e)), e !== null))
    if (((t = pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Kf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (os = e), null;
}
function sh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Xg()) {
        case ca:
          return 1;
        case Yf:
          return 4;
        case rs:
        case Qg:
          return 16;
        case Zf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  pa = null,
  Bi = null;
function oh() {
  if (Bi) return Bi;
  var e,
    t = pa,
    n = t.length,
    r,
    i = "value" in Et ? Et.value : Et.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Bi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ui(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ki() {
  return !0;
}
function Hu() {
  return !1;
}
function Re(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ki
        : Hu),
      (this.isPropagationStopped = Hu),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ki));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ki));
      },
      persist: function () {},
      isPersistent: ki,
    }),
    t
  );
}
var Zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ma = Re(Zn),
  oi = G({}, Zn, { view: 0, detail: 0 }),
  ay = Re(oi),
  ao,
  uo,
  lr,
  Vs = G({}, oi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ga,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== lr &&
            (lr && e.type === "mousemove"
              ? ((ao = e.screenX - lr.screenX), (uo = e.screenY - lr.screenY))
              : (uo = ao = 0),
            (lr = e)),
          ao);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : uo;
    },
  }),
  Wu = Re(Vs),
  uy = G({}, Vs, { dataTransfer: 0 }),
  cy = Re(uy),
  dy = G({}, oi, { relatedTarget: 0 }),
  co = Re(dy),
  fy = G({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hy = Re(fy),
  py = G({}, Zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  my = Re(py),
  gy = G({}, Zn, { data: 0 }),
  Ku = Re(gy),
  yy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  xy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xy[e]) ? !!t[e] : !1;
}
function ga() {
  return wy;
}
var Sy = G({}, oi, {
    key: function (e) {
      if (e.key) {
        var t = yy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ga,
    charCode: function (e) {
      return e.type === "keypress" ? Ui(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ui(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Py = Re(Sy),
  ky = G({}, Vs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gu = Re(ky),
  Ty = G({}, oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ga,
  }),
  Cy = Re(Ty),
  Ny = G({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ey = Re(Ny),
  jy = G({}, Vs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ay = Re(jy),
  Dy = [9, 13, 27, 32],
  ya = ft && "CompositionEvent" in window,
  kr = null;
ft && "documentMode" in document && (kr = document.documentMode);
var Ly = ft && "TextEvent" in window && !kr,
  lh = ft && (!ya || (kr && 8 < kr && 11 >= kr)),
  Xu = " ",
  Qu = !1;
function ah(e, t) {
  switch (e) {
    case "keyup":
      return Dy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function uh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xn = !1;
function My(e, t) {
  switch (e) {
    case "compositionend":
      return uh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qu = !0), Xu);
    case "textInput":
      return (e = t.data), e === Xu && Qu ? null : e;
    default:
      return null;
  }
}
function Ry(e, t) {
  if (xn)
    return e === "compositionend" || (!ya && ah(e, t))
      ? ((e = oh()), (Bi = pa = Et = null), (xn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return lh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vy[e.type] : t === "textarea";
}
function ch(e, t, n, r) {
  Bf(r),
    (t = ls(t, "onChange")),
    0 < t.length &&
      ((n = new ma("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tr = null,
  zr = null;
function _y(e) {
  Sh(e, 0);
}
function _s(e) {
  var t = Pn(e);
  if (Vf(t)) return e;
}
function Oy(e, t) {
  if (e === "change") return t;
}
var dh = !1;
if (ft) {
  var fo;
  if (ft) {
    var ho = "oninput" in document;
    if (!ho) {
      var Zu = document.createElement("div");
      Zu.setAttribute("oninput", "return;"),
        (ho = typeof Zu.oninput == "function");
    }
    fo = ho;
  } else fo = !1;
  dh = fo && (!document.documentMode || 9 < document.documentMode);
}
function qu() {
  Tr && (Tr.detachEvent("onpropertychange", fh), (zr = Tr = null));
}
function fh(e) {
  if (e.propertyName === "value" && _s(zr)) {
    var t = [];
    ch(t, zr, e, ua(e)), Wf(_y, t);
  }
}
function Iy(e, t, n) {
  e === "focusin"
    ? (qu(), (Tr = t), (zr = n), Tr.attachEvent("onpropertychange", fh))
    : e === "focusout" && qu();
}
function Fy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _s(zr);
}
function by(e, t) {
  if (e === "click") return _s(t);
}
function zy(e, t) {
  if (e === "input" || e === "change") return _s(t);
}
function By(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : By;
function Br(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ko.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function Ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ec(e, t) {
  var n = Ju(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ju(n);
  }
}
function hh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? hh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ph() {
  for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = es(e.document);
  }
  return t;
}
function va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Uy(e) {
  var t = ph(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    hh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && va(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = ec(n, s));
        var o = ec(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $y = ft && "documentMode" in document && 11 >= document.documentMode,
  wn = null,
  dl = null,
  Cr = null,
  fl = !1;
function tc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fl ||
    wn == null ||
    wn !== es(r) ||
    ((r = wn),
    "selectionStart" in r && va(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Cr && Br(Cr, r)) ||
      ((Cr = r),
      (r = ls(dl, "onSelect")),
      0 < r.length &&
        ((t = new ma("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wn))));
}
function Ti(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Sn = {
    animationend: Ti("Animation", "AnimationEnd"),
    animationiteration: Ti("Animation", "AnimationIteration"),
    animationstart: Ti("Animation", "AnimationStart"),
    transitionend: Ti("Transition", "TransitionEnd"),
  },
  po = {},
  mh = {};
ft &&
  ((mh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Sn.animationend.animation,
    delete Sn.animationiteration.animation,
    delete Sn.animationstart.animation),
  "TransitionEvent" in window || delete Sn.transitionend.transition);
function Os(e) {
  if (po[e]) return po[e];
  if (!Sn[e]) return e;
  var t = Sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in mh) return (po[e] = t[n]);
  return e;
}
var gh = Os("animationend"),
  yh = Os("animationiteration"),
  vh = Os("animationstart"),
  xh = Os("transitionend"),
  wh = new Map(),
  nc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bt(e, t) {
  wh.set(e, t), hn(t, [e]);
}
for (var mo = 0; mo < nc.length; mo++) {
  var go = nc[mo],
    Hy = go.toLowerCase(),
    Wy = go[0].toUpperCase() + go.slice(1);
  Bt(Hy, "on" + Wy);
}
Bt(gh, "onAnimationEnd");
Bt(yh, "onAnimationIteration");
Bt(vh, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(xh, "onTransitionEnd");
zn("onMouseEnter", ["mouseout", "mouseover"]);
zn("onMouseLeave", ["mouseout", "mouseover"]);
zn("onPointerEnter", ["pointerout", "pointerover"]);
zn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ky = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function rc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Hg(r, t, void 0, e), (e.currentTarget = null);
}
function Sh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          rc(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          rc(i, l, u), (s = a);
        }
    }
  }
  if (ns) throw ((e = ll), (ns = !1), (ll = null), e);
}
function z(e, t) {
  var n = t[yl];
  n === void 0 && (n = t[yl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ph(t, e, 2, !1), n.add(r));
}
function yo(e, t, n) {
  var r = 0;
  t && (r |= 4), Ph(n, e, r, t);
}
var Ci = "_reactListening" + Math.random().toString(36).slice(2);
function Ur(e) {
  if (!e[Ci]) {
    (e[Ci] = !0),
      Af.forEach(function (n) {
        n !== "selectionchange" && (Ky.has(n) || yo(n, !1, e), yo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ci] || ((t[Ci] = !0), yo("selectionchange", !1, t));
  }
}
function Ph(e, t, n, r) {
  switch (sh(t)) {
    case 1:
      var i = oy;
      break;
    case 4:
      i = ly;
      break;
    default:
      i = ha;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function vo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = en(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Wf(function () {
    var u = s,
      c = ua(n),
      h = [];
    e: {
      var f = wh.get(e);
      if (f !== void 0) {
        var g = ma,
          v = e;
        switch (e) {
          case "keypress":
            if (Ui(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Py;
            break;
          case "focusin":
            (v = "focus"), (g = co);
            break;
          case "focusout":
            (v = "blur"), (g = co);
            break;
          case "beforeblur":
          case "afterblur":
            g = co;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Wu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = cy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Cy;
            break;
          case gh:
          case yh:
          case vh:
            g = hy;
            break;
          case xh:
            g = Ey;
            break;
          case "scroll":
            g = ay;
            break;
          case "wheel":
            g = Ay;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = my;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Gu;
        }
        var x = (t & 4) !== 0,
          S = !x && e === "scroll",
          m = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var w = y.stateNode;
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w),
              m !== null && ((w = Or(p, m)), w != null && x.push($r(p, w, y)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((f = new g(f, v, null, n, c)), h.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== il &&
            (v = n.relatedTarget || n.fromElement) &&
            (en(v) || v[ht]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? en(v) : null),
              v !== null &&
                ((S = pn(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((x = Wu),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Gu),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (S = g == null ? f : Pn(g)),
            (y = v == null ? f : Pn(v)),
            (f = new x(w, p + "leave", g, n, c)),
            (f.target = S),
            (f.relatedTarget = y),
            (w = null),
            en(c) === u &&
              ((x = new x(m, p + "enter", v, n, c)),
              (x.target = y),
              (x.relatedTarget = S),
              (w = x)),
            (S = w),
            g && v)
          )
            t: {
              for (x = g, m = v, p = 0, y = x; y; y = gn(y)) p++;
              for (y = 0, w = m; w; w = gn(w)) y++;
              for (; 0 < p - y; ) (x = gn(x)), p--;
              for (; 0 < y - p; ) (m = gn(m)), y--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = gn(x)), (m = gn(m));
              }
              x = null;
            }
          else x = null;
          g !== null && ic(h, f, g, x, !1),
            v !== null && S !== null && ic(h, S, v, x, !0);
        }
      }
      e: {
        if (
          ((f = u ? Pn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var P = Oy;
        else if (Yu(f))
          if (dh) P = zy;
          else {
            P = Fy;
            var N = Iy;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = by);
        if (P && (P = P(e, u))) {
          ch(h, P, n, c);
          break e;
        }
        N && N(e, f, u),
          e === "focusout" &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === "number" &&
            Jo(f, "number", f.value);
      }
      switch (((N = u ? Pn(u) : window), e)) {
        case "focusin":
          (Yu(N) || N.contentEditable === "true") &&
            ((wn = N), (dl = u), (Cr = null));
          break;
        case "focusout":
          Cr = dl = wn = null;
          break;
        case "mousedown":
          fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fl = !1), tc(h, n, c);
          break;
        case "selectionchange":
          if ($y) break;
        case "keydown":
        case "keyup":
          tc(h, n, c);
      }
      var E;
      if (ya)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        xn
          ? ah(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (lh &&
          n.locale !== "ko" &&
          (xn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && xn && (E = oh())
            : ((Et = c),
              (pa = "value" in Et ? Et.value : Et.textContent),
              (xn = !0))),
        (N = ls(u, T)),
        0 < N.length &&
          ((T = new Ku(T, e, null, n, c)),
          h.push({ event: T, listeners: N }),
          E ? (T.data = E) : ((E = uh(n)), E !== null && (T.data = E)))),
        (E = Ly ? My(e, n) : Ry(e, n)) &&
          ((u = ls(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ku("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Sh(h, t);
  });
}
function $r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ls(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Or(e, n)),
      s != null && r.unshift($r(e, s, i)),
      (s = Or(e, t)),
      s != null && r.push($r(e, s, i))),
      (e = e.return);
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ic(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Or(n, s)), a != null && o.unshift($r(n, a, l)))
        : i || ((a = Or(n, s)), a != null && o.push($r(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Gy = /\r\n?/g,
  Xy = /\u0000|\uFFFD/g;
function sc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gy,
      `
`
    )
    .replace(Xy, "");
}
function Ni(e, t, n) {
  if (((t = sc(t)), sc(e) !== t && n)) throw Error(C(425));
}
function as() {}
var hl = null,
  pl = null;
function ml(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var gl = typeof setTimeout == "function" ? setTimeout : void 0,
  Qy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  oc = typeof Promise == "function" ? Promise : void 0,
  Yy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof oc < "u"
      ? function (e) {
          return oc.resolve(null).then(e).catch(Zy);
        }
      : gl;
function Zy(e) {
  setTimeout(function () {
    throw e;
  });
}
function xo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  br(t);
}
function Mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function lc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var qn = Math.random().toString(36).slice(2),
  et = "__reactFiber$" + qn,
  Hr = "__reactProps$" + qn,
  ht = "__reactContainer$" + qn,
  yl = "__reactEvents$" + qn,
  qy = "__reactListeners$" + qn,
  Jy = "__reactHandles$" + qn;
function en(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ht] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = lc(e); e !== null; ) {
          if ((n = e[et])) return n;
          e = lc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function li(e) {
  return (
    (e = e[et] || e[ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Is(e) {
  return e[Hr] || null;
}
var vl = [],
  kn = -1;
function Ut(e) {
  return { current: e };
}
function B(e) {
  0 > kn || ((e.current = vl[kn]), (vl[kn] = null), kn--);
}
function b(e, t) {
  kn++, (vl[kn] = e.current), (e.current = t);
}
var Ft = {},
  ge = Ut(Ft),
  ke = Ut(!1),
  an = Ft;
function Bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function us() {
  B(ke), B(ge);
}
function ac(e, t, n) {
  if (ge.current !== Ft) throw Error(C(168));
  b(ge, t), b(ke, n);
}
function kh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, Ig(e) || "Unknown", i));
  return G({}, n, r);
}
function cs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (an = ge.current),
    b(ge, e),
    b(ke, ke.current),
    !0
  );
}
function uc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = kh(e, t, an)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ke),
      B(ge),
      b(ge, e))
    : B(ke),
    b(ke, n);
}
var ot = null,
  Fs = !1,
  wo = !1;
function Th(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
function ev(e) {
  (Fs = !0), Th(e);
}
function $t() {
  if (!wo && ot !== null) {
    wo = !0;
    var e = 0,
      t = F;
    try {
      var n = ot;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ot = null), (Fs = !1);
    } catch (i) {
      throw (ot !== null && (ot = ot.slice(e + 1)), Qf(ca, $t), i);
    } finally {
      (F = t), (wo = !1);
    }
  }
  return null;
}
var Tn = [],
  Cn = 0,
  ds = null,
  fs = 0,
  Oe = [],
  Ie = 0,
  un = null,
  lt = 1,
  at = "";
function Yt(e, t) {
  (Tn[Cn++] = fs), (Tn[Cn++] = ds), (ds = e), (fs = t);
}
function Ch(e, t, n) {
  (Oe[Ie++] = lt), (Oe[Ie++] = at), (Oe[Ie++] = un), (un = e);
  var r = lt;
  e = at;
  var i = 32 - Qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Qe(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (lt = (1 << (32 - Qe(t) + i)) | (n << i) | r),
      (at = s + e);
  } else (lt = (1 << s) | (n << i) | r), (at = e);
}
function xa(e) {
  e.return !== null && (Yt(e, 1), Ch(e, 1, 0));
}
function wa(e) {
  for (; e === ds; )
    (ds = Tn[--Cn]), (Tn[Cn] = null), (fs = Tn[--Cn]), (Tn[Cn] = null);
  for (; e === un; )
    (un = Oe[--Ie]),
      (Oe[Ie] = null),
      (at = Oe[--Ie]),
      (Oe[Ie] = null),
      (lt = Oe[--Ie]),
      (Oe[Ie] = null);
}
var je = null,
  Ee = null,
  $ = !1,
  Ge = null;
function Nh(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function cc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Ee = Mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = un !== null ? { id: lt, overflow: at } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wl(e) {
  if ($) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!cc(e, t)) {
        if (xl(e)) throw Error(C(418));
        t = Mt(n.nextSibling);
        var r = je;
        t && cc(e, t)
          ? Nh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (je = e));
      }
    } else {
      if (xl(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (je = e);
    }
  }
}
function dc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Ei(e) {
  if (e !== je) return !1;
  if (!$) return dc(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ml(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (xl(e)) throw (Eh(), Error(C(418)));
    for (; t; ) Nh(e, t), (t = Mt(t.nextSibling));
  }
  if ((dc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = je ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function Eh() {
  for (var e = Ee; e; ) e = Mt(e.nextSibling);
}
function Un() {
  (Ee = je = null), ($ = !1);
}
function Sa(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
var tv = yt.ReactCurrentBatchConfig;
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function ji(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function fc(e) {
  var t = e._init;
  return t(e._payload);
}
function jh(e) {
  function t(m, p) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [p]), (m.flags |= 16)) : y.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Ot(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((m.flags |= 2), p) : y)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, y, w) {
    return p === null || p.tag !== 6
      ? ((p = Eo(y, m.mode, w)), (p.return = m), p)
      : ((p = i(p, y)), (p.return = m), p);
  }
  function a(m, p, y, w) {
    var P = y.type;
    return P === vn
      ? c(m, p, y.props.children, w, y.key)
      : p !== null &&
        (p.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === St &&
            fc(P) === p.type))
      ? ((w = i(p, y.props)), (w.ref = ar(m, p, y)), (w.return = m), w)
      : ((w = Qi(y.type, y.key, y.props, null, m.mode, w)),
        (w.ref = ar(m, p, y)),
        (w.return = m),
        w);
  }
  function u(m, p, y, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = jo(y, m.mode, w)), (p.return = m), p)
      : ((p = i(p, y.children || [])), (p.return = m), p);
  }
  function c(m, p, y, w, P) {
    return p === null || p.tag !== 7
      ? ((p = on(y, m.mode, w, P)), (p.return = m), p)
      : ((p = i(p, y)), (p.return = m), p);
  }
  function h(m, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Eo("" + p, m.mode, y)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case yi:
          return (
            (y = Qi(p.type, p.key, p.props, null, m.mode, y)),
            (y.ref = ar(m, null, p)),
            (y.return = m),
            y
          );
        case yn:
          return (p = jo(p, m.mode, y)), (p.return = m), p;
        case St:
          var w = p._init;
          return h(m, w(p._payload), y);
      }
      if (mr(p) || rr(p))
        return (p = on(p, m.mode, y, null)), (p.return = m), p;
      ji(m, p);
    }
    return null;
  }
  function f(m, p, y, w) {
    var P = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return P !== null ? null : l(m, p, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case yi:
          return y.key === P ? a(m, p, y, w) : null;
        case yn:
          return y.key === P ? u(m, p, y, w) : null;
        case St:
          return (P = y._init), f(m, p, P(y._payload), w);
      }
      if (mr(y) || rr(y)) return P !== null ? null : c(m, p, y, w, null);
      ji(m, y);
    }
    return null;
  }
  function g(m, p, y, w, P) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(y) || null), l(p, m, "" + w, P);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case yi:
          return (m = m.get(w.key === null ? y : w.key) || null), a(p, m, w, P);
        case yn:
          return (m = m.get(w.key === null ? y : w.key) || null), u(p, m, w, P);
        case St:
          var N = w._init;
          return g(m, p, y, N(w._payload), P);
      }
      if (mr(w) || rr(w)) return (m = m.get(y) || null), c(p, m, w, P, null);
      ji(p, w);
    }
    return null;
  }
  function v(m, p, y, w) {
    for (
      var P = null, N = null, E = p, T = (p = 0), V = null;
      E !== null && T < y.length;
      T++
    ) {
      E.index > T ? ((V = E), (E = null)) : (V = E.sibling);
      var L = f(m, E, y[T], w);
      if (L === null) {
        E === null && (E = V);
        break;
      }
      e && E && L.alternate === null && t(m, E),
        (p = s(L, p, T)),
        N === null ? (P = L) : (N.sibling = L),
        (N = L),
        (E = V);
    }
    if (T === y.length) return n(m, E), $ && Yt(m, T), P;
    if (E === null) {
      for (; T < y.length; T++)
        (E = h(m, y[T], w)),
          E !== null &&
            ((p = s(E, p, T)), N === null ? (P = E) : (N.sibling = E), (N = E));
      return $ && Yt(m, T), P;
    }
    for (E = r(m, E); T < y.length; T++)
      (V = g(E, m, T, y[T], w)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? T : V.key),
          (p = s(V, p, T)),
          N === null ? (P = V) : (N.sibling = V),
          (N = V));
    return (
      e &&
        E.forEach(function (re) {
          return t(m, re);
        }),
      $ && Yt(m, T),
      P
    );
  }
  function x(m, p, y, w) {
    var P = rr(y);
    if (typeof P != "function") throw Error(C(150));
    if (((y = P.call(y)), y == null)) throw Error(C(151));
    for (
      var N = (P = null), E = p, T = (p = 0), V = null, L = y.next();
      E !== null && !L.done;
      T++, L = y.next()
    ) {
      E.index > T ? ((V = E), (E = null)) : (V = E.sibling);
      var re = f(m, E, L.value, w);
      if (re === null) {
        E === null && (E = V);
        break;
      }
      e && E && re.alternate === null && t(m, E),
        (p = s(re, p, T)),
        N === null ? (P = re) : (N.sibling = re),
        (N = re),
        (E = V);
    }
    if (L.done) return n(m, E), $ && Yt(m, T), P;
    if (E === null) {
      for (; !L.done; T++, L = y.next())
        (L = h(m, L.value, w)),
          L !== null &&
            ((p = s(L, p, T)), N === null ? (P = L) : (N.sibling = L), (N = L));
      return $ && Yt(m, T), P;
    }
    for (E = r(m, E); !L.done; T++, L = y.next())
      (L = g(E, m, T, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? T : L.key),
          (p = s(L, p, T)),
          N === null ? (P = L) : (N.sibling = L),
          (N = L));
    return (
      e &&
        E.forEach(function (vt) {
          return t(m, vt);
        }),
      $ && Yt(m, T),
      P
    );
  }
  function S(m, p, y, w) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === vn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case yi:
          e: {
            for (var P = y.key, N = p; N !== null; ) {
              if (N.key === P) {
                if (((P = y.type), P === vn)) {
                  if (N.tag === 7) {
                    n(m, N.sibling),
                      (p = i(N, y.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  N.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === St &&
                    fc(P) === N.type)
                ) {
                  n(m, N.sibling),
                    (p = i(N, y.props)),
                    (p.ref = ar(m, N, y)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, N);
                break;
              } else t(m, N);
              N = N.sibling;
            }
            y.type === vn
              ? ((p = on(y.props.children, m.mode, w, y.key)),
                (p.return = m),
                (m = p))
              : ((w = Qi(y.type, y.key, y.props, null, m.mode, w)),
                (w.ref = ar(m, p, y)),
                (w.return = m),
                (m = w));
          }
          return o(m);
        case yn:
          e: {
            for (N = y.key; p !== null; ) {
              if (p.key === N)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, y.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = jo(y, m.mode, w)), (p.return = m), (m = p);
          }
          return o(m);
        case St:
          return (N = y._init), S(m, p, N(y._payload), w);
      }
      if (mr(y)) return v(m, p, y, w);
      if (rr(y)) return x(m, p, y, w);
      ji(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, y)), (p.return = m), (m = p))
          : (n(m, p), (p = Eo(y, m.mode, w)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return S;
}
var $n = jh(!0),
  Ah = jh(!1),
  hs = Ut(null),
  ps = null,
  Nn = null,
  Pa = null;
function ka() {
  Pa = Nn = ps = null;
}
function Ta(e) {
  var t = hs.current;
  B(hs), (e._currentValue = t);
}
function Sl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Fn(e, t) {
  (ps = e),
    (Pa = Nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Pa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
      if (ps === null) throw Error(C(308));
      (Nn = e), (ps.dependencies = { lanes: 0, firstContext: e });
    } else Nn = Nn.next = e;
  return t;
}
var tn = null;
function Ca(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function Dh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ca(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    pt(e, r)
  );
}
function pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function Na(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      pt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ca(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    pt(e, n)
  );
}
function $i(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n);
  }
}
function hc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ms(e, t, n, r) {
  var i = e.updateQueue;
  Pt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var h = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var f = l.lane,
        g = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            x = l;
          switch (((f = t), (g = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                h = v.call(g, h, f);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (f = typeof v == "function" ? v.call(g, h, f) : v),
                f == null)
              )
                break e;
              h = G({}, h, f);
              break e;
            case 2:
              Pt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = h)) : (c = c.next = g),
          (o |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = h),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (dn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function pc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var ai = {},
  nt = Ut(ai),
  Wr = Ut(ai),
  Kr = Ut(ai);
function nn(e) {
  if (e === ai) throw Error(C(174));
  return e;
}
function Ea(e, t) {
  switch ((b(Kr, t), b(Wr, e), b(nt, ai), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = tl(t, e));
  }
  B(nt), b(nt, t);
}
function Hn() {
  B(nt), B(Wr), B(Kr);
}
function Mh(e) {
  nn(Kr.current);
  var t = nn(nt.current),
    n = tl(t, e.type);
  t !== n && (b(Wr, e), b(nt, n));
}
function ja(e) {
  Wr.current === e && (B(nt), B(Wr));
}
var H = Ut(0);
function gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var So = [];
function Aa() {
  for (var e = 0; e < So.length; e++)
    So[e]._workInProgressVersionPrimary = null;
  So.length = 0;
}
var Hi = yt.ReactCurrentDispatcher,
  Po = yt.ReactCurrentBatchConfig,
  cn = 0,
  K = null,
  te = null,
  se = null,
  ys = !1,
  Nr = !1,
  Gr = 0,
  nv = 0;
function de() {
  throw Error(C(321));
}
function Da(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function La(e, t, n, r, i, s) {
  if (
    ((cn = s),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hi.current = e === null || e.memoizedState === null ? ov : lv),
    (e = n(r, i)),
    Nr)
  ) {
    s = 0;
    do {
      if (((Nr = !1), (Gr = 0), 25 <= s)) throw Error(C(301));
      (s += 1),
        (se = te = null),
        (t.updateQueue = null),
        (Hi.current = av),
        (e = n(r, i));
    } while (Nr);
  }
  if (
    ((Hi.current = vs),
    (t = te !== null && te.next !== null),
    (cn = 0),
    (se = te = K = null),
    (ys = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Ma() {
  var e = Gr !== 0;
  return (Gr = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (K.memoizedState = se = e) : (se = se.next = e), se;
}
function Ue() {
  if (te === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = se === null ? K.memoizedState : se.next;
  if (t !== null) (se = t), (te = e);
  else {
    if (e === null) throw Error(C(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      se === null ? (K.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ko(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((cn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = h), (o = r)) : (a = a.next = h),
          (K.lanes |= c),
          (dn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      Ze(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (K.lanes |= s), (dn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function To(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ze(s, t.memoizedState) || (Pe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Rh() {}
function Vh(e, t) {
  var n = K,
    r = Ue(),
    i = t(),
    s = !Ze(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Ra(Ih.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qr(9, Oh.bind(null, n, r, i, t), void 0, null),
      oe === null)
    )
      throw Error(C(349));
    cn & 30 || _h(n, t, i);
  }
  return i;
}
function _h(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Oh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Fh(t) && bh(e);
}
function Ih(e, t, n) {
  return n(function () {
    Fh(t) && bh(e);
  });
}
function Fh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function bh(e) {
  var t = pt(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function mc(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = sv.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function zh() {
  return Ue().memoizedState;
}
function Wi(e, t, n, r) {
  var i = Je();
  (K.flags |= e),
    (i.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r));
}
function bs(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (te !== null) {
    var o = te.memoizedState;
    if (((s = o.destroy), r !== null && Da(r, o.deps))) {
      i.memoizedState = Qr(t, n, s, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = Qr(1 | t, n, s, r));
}
function gc(e, t) {
  return Wi(8390656, 8, e, t);
}
function Ra(e, t) {
  return bs(2048, 8, e, t);
}
function Bh(e, t) {
  return bs(4, 2, e, t);
}
function Uh(e, t) {
  return bs(4, 4, e, t);
}
function $h(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Hh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bs(4, 4, $h.bind(null, t, e), n)
  );
}
function Va() {}
function Wh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Da(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Da(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gh(e, t, n) {
  return cn & 21
    ? (Ze(n, t) || ((n = qf()), (K.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function rv(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Po.transition;
  Po.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (Po.transition = r);
  }
}
function Xh() {
  return Ue().memoizedState;
}
function iv(e, t, n) {
  var r = _t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qh(e))
  )
    Yh(t, n);
  else if (((n = Dh(e, t, n, r)), n !== null)) {
    var i = ve();
    Ye(n, e, r, i), Zh(n, t, r);
  }
}
function sv(e, t, n) {
  var r = _t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qh(e)) Yh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ze(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Ca(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Dh(e, t, i, r)),
      n !== null && ((i = ve()), Ye(n, e, r, i), Zh(n, t, r));
  }
}
function Qh(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Yh(e, t) {
  Nr = ys = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Zh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n);
  }
}
var vs = {
    readContext: Be,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  ov = {
    readContext: Be,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: gc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wi(4194308, 4, $h.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = iv.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: mc,
    useDebugValue: Va,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = mc(!1),
        t = e[0];
      return (e = rv.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = Je();
      if ($) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(C(349));
        cn & 30 || _h(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        gc(Ih.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Qr(9, Oh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = oe.identifierPrefix;
      if ($) {
        var n = at,
          r = lt;
        (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = nv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  lv = {
    readContext: Be,
    useCallback: Wh,
    useContext: Be,
    useEffect: Ra,
    useImperativeHandle: Hh,
    useInsertionEffect: Bh,
    useLayoutEffect: Uh,
    useMemo: Kh,
    useReducer: ko,
    useRef: zh,
    useState: function () {
      return ko(Xr);
    },
    useDebugValue: Va,
    useDeferredValue: function (e) {
      var t = Ue();
      return Gh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = ko(Xr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Rh,
    useSyncExternalStore: Vh,
    useId: Xh,
    unstable_isNewReconciler: !1,
  },
  av = {
    readContext: Be,
    useCallback: Wh,
    useContext: Be,
    useEffect: Ra,
    useImperativeHandle: Hh,
    useInsertionEffect: Bh,
    useLayoutEffect: Uh,
    useMemo: Kh,
    useReducer: To,
    useRef: zh,
    useState: function () {
      return To(Xr);
    },
    useDebugValue: Va,
    useDeferredValue: function (e) {
      var t = Ue();
      return te === null ? (t.memoizedState = e) : Gh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = To(Xr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Rh,
    useSyncExternalStore: Vh,
    useId: Xh,
    unstable_isNewReconciler: !1,
  };
function We(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = _t(e),
      s = ut(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Rt(e, s, i)),
      t !== null && (Ye(t, e, i, r), $i(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = _t(e),
      s = ut(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Rt(e, s, i)),
      t !== null && (Ye(t, e, i, r), $i(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = _t(e),
      i = ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Rt(e, i, r)),
      t !== null && (Ye(t, e, r, n), $i(t, e, r));
  },
};
function yc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Br(n, r) || !Br(i, s)
      : !0
  );
}
function qh(e, t, n) {
  var r = !1,
    i = Ft,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Be(s))
      : ((i = Te(t) ? an : ge.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Bn(e, i) : Ft)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function vc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zs.enqueueReplaceState(t, t.state, null);
}
function kl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Na(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Be(s))
    : ((s = Te(t) ? an : ge.current), (i.context = Bn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Pl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && zs.enqueueReplaceState(i, i.state, null),
      ms(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Og(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var uv = typeof WeakMap == "function" ? WeakMap : Map;
function Jh(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ws || ((ws = !0), (Vl = r)), Tl(e, t);
    }),
    n
  );
}
function ep(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Tl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Tl(e, t),
          typeof r != "function" &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function xc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = kv.bind(null, e, t, n)), t.then(e, e));
}
function wc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Sc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Rt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var cv = yt.ReactCurrentOwner,
  Pe = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Ah(t, null, n, r) : $n(t, e.child, n, r);
}
function Pc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Fn(t, i),
    (r = La(e, t, n, r, s, i)),
    (n = Ma()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mt(e, t, i))
      : ($ && n && xa(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  );
}
function kc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ua(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), tp(e, t, s, r, i))
      : ((e = Qi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Br), n(o, r) && e.ref === t.ref)
    )
      return mt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ot(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Br(s, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), mt(e, t, i);
  }
  return Cl(e, t, n, r, i);
}
function np(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(jn, Ne),
        (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(jn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        b(jn, Ne),
        (Ne |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(jn, Ne),
      (Ne |= r);
  return ye(e, t, i, n), t.child;
}
function rp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cl(e, t, n, r, i) {
  var s = Te(n) ? an : ge.current;
  return (
    (s = Bn(t, s)),
    Fn(t, i),
    (n = La(e, t, n, r, s, i)),
    (r = Ma()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mt(e, t, i))
      : ($ && r && xa(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  );
}
function Tc(e, t, n, r, i) {
  if (Te(n)) {
    var s = !0;
    cs(t);
  } else s = !1;
  if ((Fn(t, i), t.stateNode === null))
    Ki(e, t), qh(t, n, r), kl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Be(u))
      : ((u = Te(n) ? an : ge.current), (u = Bn(t, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && vc(t, o, r, u)),
      (Pt = !1);
    var f = t.memoizedState;
    (o.state = f),
      ms(t, r, o, i),
      (a = t.memoizedState),
      l !== r || f !== a || ke.current || Pt
        ? (typeof c == "function" && (Pl(t, n, c, r), (a = t.memoizedState)),
          (l = Pt || yc(t, n, l, r, f, a, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Lh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : We(t.type, l)),
      (o.props = u),
      (h = t.pendingProps),
      (f = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Be(a))
        : ((a = Te(n) ? an : ge.current), (a = Bn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== h || f !== a) && vc(t, o, r, a)),
      (Pt = !1),
      (f = t.memoizedState),
      (o.state = f),
      ms(t, r, o, i);
    var v = t.memoizedState;
    l !== h || f !== v || ke.current || Pt
      ? (typeof g == "function" && (Pl(t, n, g, r), (v = t.memoizedState)),
        (u = Pt || yc(t, n, u, r, f, v, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Nl(e, t, n, r, s, i);
}
function Nl(e, t, n, r, i, s) {
  rp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && uc(t, n, !1), mt(e, t, s);
  (r = t.stateNode), (cv.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = $n(t, e.child, null, s)), (t.child = $n(t, null, l, s)))
      : ye(e, t, l, s),
    (t.memoizedState = r.state),
    i && uc(t, n, !0),
    t.child
  );
}
function ip(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ac(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ac(e, t.context, !1),
    Ea(e, t.containerInfo);
}
function Cc(e, t, n, r, i) {
  return Un(), Sa(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var El = { dehydrated: null, treeContext: null, retryLane: 0 };
function jl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sp(e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    b(H, i & 1),
    e === null)
  )
    return (
      wl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = $s(o, r, 0, null)),
              (e = on(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = jl(n)),
              (t.memoizedState = El),
              e)
            : _a(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return dv(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ot(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Ot(l, s)) : ((s = on(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? jl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = El),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ot(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _a(e, t) {
  return (
    (t = $s({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ai(e, t, n, r) {
  return (
    r !== null && Sa(r),
    $n(t, e.child, null, n),
    (e = _a(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function dv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Co(Error(C(422)))), Ai(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = $s({ mode: "visible", children: r.children }, i, 0, null)),
        (s = on(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && $n(t, e.child, null, o),
        (t.child.memoizedState = jl(o)),
        (t.memoizedState = El),
        s);
  if (!(t.mode & 1)) return Ai(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(C(419))), (r = Co(s, r, void 0)), Ai(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Pe || l)) {
    if (((r = oe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), pt(e, i), Ye(r, e, i, -1));
    }
    return Ba(), (r = Co(Error(C(421)))), Ai(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Tv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ee = Mt(i.nextSibling)),
      (je = t),
      ($ = !0),
      (Ge = null),
      e !== null &&
        ((Oe[Ie++] = lt),
        (Oe[Ie++] = at),
        (Oe[Ie++] = un),
        (lt = e.id),
        (at = e.overflow),
        (un = t)),
      (t = _a(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Nc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sl(e.return, t, n);
}
function No(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function op(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ye(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Nc(e, n, t);
        else if (e.tag === 19) Nc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && gs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          No(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && gs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        No(t, !0, n, null, s);
        break;
      case "together":
        No(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ki(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ot(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fv(e, t, n) {
  switch (t.tag) {
    case 3:
      ip(t), Un();
      break;
    case 5:
      Mh(t);
      break;
    case 1:
      Te(t.type) && cs(t);
      break;
    case 4:
      Ea(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      b(hs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sp(e, t, n)
          : (b(H, H.current & 1),
            (e = mt(e, t, n)),
            e !== null ? e.sibling : null);
      b(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return op(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        b(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), np(e, t, n);
  }
  return mt(e, t, n);
}
var lp, Al, ap, up;
lp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Al = function () {};
ap = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), nn(nt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Zo(e, i)), (r = Zo(e, r)), (s = []);
        break;
      case "select":
        (i = G({}, i, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = el(e, i)), (r = el(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = as);
    }
    nl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Vr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Vr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && z("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
up = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function hv(e, t, n) {
  var r = t.pendingProps;
  switch ((wa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return fe(t), null;
    case 1:
      return Te(t.type) && us(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Hn(),
        B(ke),
        B(ge),
        Aa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ei(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (Il(Ge), (Ge = null)))),
        Al(e, t),
        fe(t),
        null
      );
    case 5:
      ja(t);
      var i = nn(Kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ap(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return fe(t), null;
        }
        if (((e = nn(nt.current)), Ei(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[et] = t), (r[Hr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              z("cancel", r), z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              z("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < yr.length; i++) z(yr[i], r);
              break;
            case "source":
              z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              z("error", r), z("load", r);
              break;
            case "details":
              z("toggle", r);
              break;
            case "input":
              _u(r, s), z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                z("invalid", r);
              break;
            case "textarea":
              Iu(r, s), z("invalid", r);
          }
          nl(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ni(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ni(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Vr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  z("scroll", r);
            }
          switch (n) {
            case "input":
              vi(r), Ou(r, s, !0);
              break;
            case "textarea":
              vi(r), Fu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = as);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = If(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[et] = t),
            (e[Hr] = r),
            lp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = rl(n, r)), n)) {
              case "dialog":
                z("cancel", e), z("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                z("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < yr.length; i++) z(yr[i], e);
                i = r;
                break;
              case "source":
                z("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                z("error", e), z("load", e), (i = r);
                break;
              case "details":
                z("toggle", e), (i = r);
                break;
              case "input":
                _u(e, r), (i = Zo(e, r)), z("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = G({}, r, { value: void 0 })),
                  z("invalid", e);
                break;
              case "textarea":
                Iu(e, r), (i = el(e, r)), z("invalid", e);
                break;
              default:
                i = r;
            }
            nl(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? zf(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ff(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && _r(e, a)
                    : typeof a == "number" && _r(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Vr.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && z("scroll", e)
                      : a != null && sa(e, s, a, o));
              }
            switch (n) {
              case "input":
                vi(e), Ou(e, r, !1);
                break;
              case "textarea":
                vi(e), Fu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Vn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = as);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) up(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = nn(Kr.current)), nn(nt.current), Ei(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (s = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ni(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ni(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        (B(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Ee !== null && t.mode & 1 && !(t.flags & 128))
          Eh(), Un(), (t.flags |= 98560), (s = !1);
        else if (((s = Ei(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[et] = t;
          } else
            Un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (s = !1);
        } else Ge !== null && (Il(Ge), (Ge = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? ne === 0 && (ne = 3) : Ba())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        Hn(), Al(e, t), e === null && Ur(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return Ta(t.type._context), fe(t), null;
    case 17:
      return Te(t.type) && us(), fe(t), null;
    case 19:
      if ((B(H), (s = t.memoizedState), s === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) ur(s, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = gs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ur(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            q() > Kn &&
            ((t.flags |= 128), (r = !0), ur(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !$)
            )
              return fe(t), null;
          } else
            2 * q() - s.renderingStartTime > Kn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = q()),
          (t.sibling = null),
          (n = H.current),
          b(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        za(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function pv(e, t) {
  switch ((wa(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && us(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hn(),
        B(ke),
        B(ge),
        Aa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ja(t), null;
    case 13:
      if ((B(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(H), null;
    case 4:
      return Hn(), null;
    case 10:
      return Ta(t.type._context), null;
    case 22:
    case 23:
      return za(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Di = !1,
  pe = !1,
  mv = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function En(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function Dl(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Ec = !1;
function gv(e, t) {
  if (((hl = ss), (e = ph()), va(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (i !== 0 && h.nodeType !== 3) || (l = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (f = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++u === i && (l = o),
                f === s && ++c === r && (a = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pl = { focusedElem: e, selectionRange: n }, ss = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    S = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : We(t.type, x),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (w) {
          Q(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (v = Ec), (Ec = !1), v;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Dl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Bs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ll(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function cp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[Hr], delete t[yl], delete t[qy], delete t[Jy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = as));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ml(e, t, n), e = e.sibling; e !== null; ) Ml(e, t, n), (e = e.sibling);
}
function Rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rl(e, t, n), e = e.sibling; e !== null; ) Rl(e, t, n), (e = e.sibling);
}
var le = null,
  Ke = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null; ) fp(e, t, n), (n = n.sibling);
}
function fp(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
    try {
      tt.onCommitFiberUnmount(Rs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || En(n, t);
    case 6:
      var r = le,
        i = Ke;
      (le = null),
        xt(e, t, n),
        (le = r),
        (Ke = i),
        le !== null &&
          (Ke
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Ke
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? xo(e.parentNode, n)
              : e.nodeType === 1 && xo(e, n),
            br(e))
          : xo(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = Ke),
        (le = n.stateNode.containerInfo),
        (Ke = !0),
        xt(e, t, n),
        (le = r),
        (Ke = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Dl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (En(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Q(n, t, l);
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), xt(e, t, n), (pe = r))
        : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function Ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mv()),
      t.forEach(function (r) {
        var i = Cv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (le = l.stateNode), (Ke = !1);
              break e;
            case 3:
              (le = l.stateNode.containerInfo), (Ke = !0);
              break e;
            case 4:
              (le = l.stateNode.containerInfo), (Ke = !0);
              break e;
          }
          l = l.return;
        }
        if (le === null) throw Error(C(160));
        fp(s, o, i), (le = null), (Ke = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hp(t, e), (t = t.sibling);
}
function hp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), qe(e), r & 4)) {
        try {
          Er(3, e, e.return), Bs(3, e);
        } catch (x) {
          Q(e, e.return, x);
        }
        try {
          Er(5, e, e.return);
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 1:
      $e(t, e), qe(e), r & 512 && n !== null && En(n, n.return);
      break;
    case 5:
      if (
        ($e(t, e),
        qe(e),
        r & 512 && n !== null && En(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          _r(i, "");
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && _f(i, s),
              rl(l, o);
            var u = rl(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                h = a[o + 1];
              c === "style"
                ? zf(i, h)
                : c === "dangerouslySetInnerHTML"
                ? Ff(i, h)
                : c === "children"
                ? _r(i, h)
                : sa(i, c, h, u);
            }
            switch (l) {
              case "input":
                qo(i, s);
                break;
              case "textarea":
                Of(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Vn(i, !!s.multiple, g, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Vn(i, !!s.multiple, s.defaultValue, !0)
                      : Vn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Hr] = s;
          } catch (x) {
            Q(e, e.return, x);
          }
      }
      break;
    case 6:
      if (($e(t, e), qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        ($e(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          br(t.containerInfo);
        } catch (x) {
          Q(e, e.return, x);
        }
      break;
    case 4:
      $e(t, e), qe(e);
      break;
    case 13:
      $e(t, e),
        qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Fa = q())),
        r & 4 && Ac(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), $e(t, e), (pe = u)) : $e(t, e),
        qe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (h = A = c; A !== null; ) {
              switch (((f = A), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, f, f.return);
                  break;
                case 1:
                  En(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      Q(r, n, x);
                    }
                  }
                  break;
                case 5:
                  En(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Lc(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (A = g)) : Lc(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = bf("display", o)));
              } catch (x) {
                Q(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (x) {
                Q(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      $e(t, e), qe(e), r & 4 && Ac(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), qe(e);
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (_r(i, ""), (r.flags &= -33));
          var s = jc(e);
          Rl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = jc(e);
          Ml(e, l, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yv(e, t, n) {
  (A = e), pp(e);
}
function pp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Di;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe;
        l = Di;
        var u = pe;
        if (((Di = o), (pe = a) && !u))
          for (A = i; A !== null; )
            (o = A),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Mc(i)
                : a !== null
                ? ((a.return = o), (A = a))
                : Mc(i);
        for (; s !== null; ) (A = s), pp(s), (s = s.sibling);
        (A = i), (Di = l), (pe = u);
      }
      Dc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (A = s)) : Dc(e);
  }
}
function Dc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Bs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : We(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && pc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                pc(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && br(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        pe || (t.flags & 512 && Ll(t));
      } catch (f) {
        Q(t, t.return, f);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Lc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Mc(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bs(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, i, a);
            }
          }
          var s = t.return;
          try {
            Ll(t);
          } catch (a) {
            Q(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ll(t);
          } catch (a) {
            Q(t, o, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      A = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (A = l);
      break;
    }
    A = t.return;
  }
}
var vv = Math.ceil,
  xs = yt.ReactCurrentDispatcher,
  Oa = yt.ReactCurrentOwner,
  ze = yt.ReactCurrentBatchConfig,
  I = 0,
  oe = null,
  J = null,
  ue = 0,
  Ne = 0,
  jn = Ut(0),
  ne = 0,
  Yr = null,
  dn = 0,
  Us = 0,
  Ia = 0,
  jr = null,
  Se = null,
  Fa = 0,
  Kn = 1 / 0,
  st = null,
  ws = !1,
  Vl = null,
  Vt = null,
  Li = !1,
  jt = null,
  Ss = 0,
  Ar = 0,
  _l = null,
  Gi = -1,
  Xi = 0;
function ve() {
  return I & 6 ? q() : Gi !== -1 ? Gi : (Gi = q());
}
function _t(e) {
  return e.mode & 1
    ? I & 2 && ue !== 0
      ? ue & -ue
      : tv.transition !== null
      ? (Xi === 0 && (Xi = qf()), Xi)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sh(e.type))),
        e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (_l = null), Error(C(185)));
  si(e, n, r),
    (!(I & 2) || e !== oe) &&
      (e === oe && (!(I & 2) && (Us |= n), ne === 4 && Nt(e, ue)),
      Ce(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Kn = q() + 500), Fs && $t()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  ty(e, t);
  var r = is(e, e === oe ? ue : 0);
  if (r === 0)
    n !== null && Bu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Bu(n), t === 1))
      e.tag === 0 ? ev(Rc.bind(null, e)) : Th(Rc.bind(null, e)),
        Yy(function () {
          !(I & 6) && $t();
        }),
        (n = null);
    else {
      switch (Jf(r)) {
        case 1:
          n = ca;
          break;
        case 4:
          n = Yf;
          break;
        case 16:
          n = rs;
          break;
        case 536870912:
          n = Zf;
          break;
        default:
          n = rs;
      }
      n = Pp(n, mp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function mp(e, t) {
  if (((Gi = -1), (Xi = 0), I & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = is(e, e === oe ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ps(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var s = yp();
    (oe !== e || ue !== t) && ((st = null), (Kn = q() + 500), sn(e, t));
    do
      try {
        Sv();
        break;
      } catch (l) {
        gp(e, l);
      }
    while (!0);
    ka(),
      (xs.current = s),
      (I = i),
      J !== null ? (t = 0) : ((oe = null), (ue = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = al(e)), i !== 0 && ((r = i), (t = Ol(e, i)))), t === 1)
    )
      throw ((n = Yr), sn(e, 0), Nt(e, r), Ce(e, q()), n);
    if (t === 6) Nt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !xv(i) &&
          ((t = Ps(e, r)),
          t === 2 && ((s = al(e)), s !== 0 && ((r = s), (t = Ol(e, s)))),
          t === 1))
      )
        throw ((n = Yr), sn(e, 0), Nt(e, r), Ce(e, q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Zt(e, Se, st);
          break;
        case 3:
          if (
            (Nt(e, r), (r & 130023424) === r && ((t = Fa + 500 - q()), 10 < t))
          ) {
            if (is(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = gl(Zt.bind(null, e, Se, st), t);
            break;
          }
          Zt(e, Se, st);
          break;
        case 4:
          if ((Nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Qe(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gl(Zt.bind(null, e, Se, st), r);
            break;
          }
          Zt(e, Se, st);
          break;
        case 5:
          Zt(e, Se, st);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ce(e, q()), e.callbackNode === n ? mp.bind(null, e) : null;
}
function Ol(e, t) {
  var n = jr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = Ps(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && Il(t)),
    e
  );
}
function Il(e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function xv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Nt(e, t) {
  for (
    t &= ~Ia,
      t &= ~Us,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Rc(e) {
  if (I & 6) throw Error(C(327));
  bn();
  var t = is(e, 0);
  if (!(t & 1)) return Ce(e, q()), null;
  var n = Ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = al(e);
    r !== 0 && ((t = r), (n = Ol(e, r)));
  }
  if (n === 1) throw ((n = Yr), sn(e, 0), Nt(e, t), Ce(e, q()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zt(e, Se, st),
    Ce(e, q()),
    null
  );
}
function ba(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Kn = q() + 500), Fs && $t());
  }
}
function fn(e) {
  jt !== null && jt.tag === 0 && !(I & 6) && bn();
  var t = I;
  I |= 1;
  var n = ze.transition,
    r = F;
  try {
    if (((ze.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (ze.transition = n), (I = t), !(I & 6) && $t();
  }
}
function za() {
  (Ne = jn.current), B(jn);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qy(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((wa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && us();
          break;
        case 3:
          Hn(), B(ke), B(ge), Aa();
          break;
        case 5:
          ja(r);
          break;
        case 4:
          Hn();
          break;
        case 13:
          B(H);
          break;
        case 19:
          B(H);
          break;
        case 10:
          Ta(r.type._context);
          break;
        case 22:
        case 23:
          za();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (J = e = Ot(e.current, null)),
    (ue = Ne = t),
    (ne = 0),
    (Yr = null),
    (Ia = Us = dn = 0),
    (Se = jr = null),
    tn !== null)
  ) {
    for (t = 0; t < tn.length; t++)
      if (((n = tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    tn = null;
  }
  return e;
}
function gp(e, t) {
  do {
    var n = J;
    try {
      if ((ka(), (Hi.current = vs), ys)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ys = !1;
      }
      if (
        ((cn = 0),
        (se = te = K = null),
        (Nr = !1),
        (Gr = 0),
        (Oa.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Yr = t), (J = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = wc(o);
          if (g !== null) {
            (g.flags &= -257),
              Sc(g, o, l, s, t),
              g.mode & 1 && xc(s, u, t),
              (t = g),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              xc(s, u, t), Ba();
              break e;
            }
            a = Error(C(426));
          }
        } else if ($ && l.mode & 1) {
          var S = wc(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Sc(S, o, l, s, t),
              Sa(Wn(a, l));
            break e;
          }
        }
        (s = a = Wn(a, l)),
          ne !== 4 && (ne = 2),
          jr === null ? (jr = [s]) : jr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = Jh(s, a, t);
              hc(s, m);
              break e;
            case 1:
              l = a;
              var p = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Vt === null || !Vt.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = ep(s, l, t);
                hc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      xp(n);
    } catch (P) {
      (t = P), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function yp() {
  var e = xs.current;
  return (xs.current = vs), e === null ? vs : e;
}
function Ba() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    oe === null || (!(dn & 268435455) && !(Us & 268435455)) || Nt(oe, ue);
}
function Ps(e, t) {
  var n = I;
  I |= 2;
  var r = yp();
  (oe !== e || ue !== t) && ((st = null), sn(e, t));
  do
    try {
      wv();
      break;
    } catch (i) {
      gp(e, i);
    }
  while (!0);
  if ((ka(), (I = n), (xs.current = r), J !== null)) throw Error(C(261));
  return (oe = null), (ue = 0), ne;
}
function wv() {
  for (; J !== null; ) vp(J);
}
function Sv() {
  for (; J !== null && !Kg(); ) vp(J);
}
function vp(e) {
  var t = Sp(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? xp(e) : (J = t),
    (Oa.current = null);
}
function xp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pv(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (J = null);
        return;
      }
    } else if (((n = hv(n, t, Ne)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Zt(e, t, n) {
  var r = F,
    i = ze.transition;
  try {
    (ze.transition = null), (F = 1), Pv(e, t, n, r);
  } finally {
    (ze.transition = i), (F = r);
  }
  return null;
}
function Pv(e, t, n, r) {
  do bn();
  while (jt !== null);
  if (I & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (ny(e, s),
    e === oe && ((J = oe = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Li ||
      ((Li = !0),
      Pp(rs, function () {
        return bn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = ze.transition), (ze.transition = null);
    var o = F;
    F = 1;
    var l = I;
    (I |= 4),
      (Oa.current = null),
      gv(e, n),
      hp(n, e),
      Uy(pl),
      (ss = !!hl),
      (pl = hl = null),
      (e.current = n),
      yv(n),
      Gg(),
      (I = l),
      (F = o),
      (ze.transition = s);
  } else e.current = n;
  if (
    (Li && ((Li = !1), (jt = e), (Ss = i)),
    (s = e.pendingLanes),
    s === 0 && (Vt = null),
    Yg(n.stateNode),
    Ce(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ws) throw ((ws = !1), (e = Vl), (Vl = null), e);
  return (
    Ss & 1 && e.tag !== 0 && bn(),
    (s = e.pendingLanes),
    s & 1 ? (e === _l ? Ar++ : ((Ar = 0), (_l = e))) : (Ar = 0),
    $t(),
    null
  );
}
function bn() {
  if (jt !== null) {
    var e = Jf(Ss),
      t = ze.transition,
      n = F;
    try {
      if (((ze.transition = null), (F = 16 > e ? 16 : e), jt === null))
        var r = !1;
      else {
        if (((e = jt), (jt = null), (Ss = 0), I & 6)) throw Error(C(331));
        var i = I;
        for (I |= 4, A = e.current; A !== null; ) {
          var s = A,
            o = s.child;
          if (A.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (A = h);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var f = c.sibling,
                        g = c.return;
                      if ((cp(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (A = f);
                        break;
                      }
                      A = g;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var S = x.sibling;
                    (x.sibling = null), (x = S);
                  } while (x !== null);
                }
              }
              A = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (A = o);
          else
            e: for (; A !== null; ) {
              if (((s = A), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (A = m);
                break e;
              }
              A = s.return;
            }
        }
        var p = e.current;
        for (A = p; A !== null; ) {
          o = A;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (A = y);
          else
            e: for (o = p; A !== null; ) {
              if (((l = A), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(9, l);
                  }
                } catch (P) {
                  Q(l, l.return, P);
                }
              if (l === o) {
                A = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (A = w);
                break e;
              }
              A = l.return;
            }
        }
        if (
          ((I = i), $t(), tt && typeof tt.onPostCommitFiberRoot == "function")
        )
          try {
            tt.onPostCommitFiberRoot(Rs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (ze.transition = t);
    }
  }
  return !1;
}
function Vc(e, t, n) {
  (t = Wn(n, t)),
    (t = Jh(e, t, 1)),
    (e = Rt(e, t, 1)),
    (t = ve()),
    e !== null && (si(e, 1, t), Ce(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = Wn(n, e)),
            (e = ep(t, e, 1)),
            (t = Rt(t, e, 1)),
            (e = ve()),
            t !== null && (si(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ue & n) === n &&
      (ne === 4 || (ne === 3 && (ue & 130023424) === ue && 500 > q() - Fa)
        ? sn(e, 0)
        : (Ia |= n)),
    Ce(e, t);
}
function wp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Si), (Si <<= 1), !(Si & 130023424) && (Si = 4194304))
      : (t = 1));
  var n = ve();
  (e = pt(e, t)), e !== null && (si(e, t, n), Ce(e, n));
}
function Tv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), wp(e, n);
}
function Cv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), wp(e, n);
}
var Sp;
Sp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ke.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), fv(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), $ && t.flags & 1048576 && Ch(t, fs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ki(e, t), (e = t.pendingProps);
      var i = Bn(t, ge.current);
      Fn(t, n), (i = La(null, t, r, e, i, n));
      var s = Ma();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((s = !0), cs(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Na(t),
            (i.updater = zs),
            (t.stateNode = i),
            (i._reactInternals = t),
            kl(t, r, e, n),
            (t = Nl(null, t, r, !0, s, n)))
          : ((t.tag = 0), $ && s && xa(t), ye(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ki(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ev(r)),
          (e = We(r, e)),
          i)
        ) {
          case 0:
            t = Cl(null, t, r, e, n);
            break e;
          case 1:
            t = Tc(null, t, r, e, n);
            break e;
          case 11:
            t = Pc(null, t, r, e, n);
            break e;
          case 14:
            t = kc(null, t, r, We(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        Cl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        Tc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ip(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Lh(e, t),
          ms(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Wn(Error(C(423)), t)), (t = Cc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Wn(Error(C(424)), t)), (t = Cc(e, t, r, n, i));
            break e;
          } else
            for (
              Ee = Mt(t.stateNode.containerInfo.firstChild),
                je = t,
                $ = !0,
                Ge = null,
                n = Ah(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Un(), r === i)) {
            t = mt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Mh(t),
        e === null && wl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ml(r, i) ? (o = null) : s !== null && ml(r, s) && (t.flags |= 32),
        rp(e, t),
        ye(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && wl(t), null;
    case 13:
      return sp(e, t, n);
    case 4:
      return (
        Ea(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $n(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        Pc(e, t, r, i, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          b(hs, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ze(s.value, o)) {
            if (s.children === i.children && !ke.current) {
              t = mt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = ut(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Sl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Sl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        ye(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Fn(t, n),
        (i = Be(i)),
        (r = r(i)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = We(r, t.pendingProps)),
        (i = We(r.type, i)),
        kc(e, t, r, i, n)
      );
    case 15:
      return tp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : We(r, i)),
        Ki(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), cs(t)) : (e = !1),
        Fn(t, n),
        qh(t, r, i),
        kl(t, r, i, n),
        Nl(null, t, r, !0, e, n)
      );
    case 19:
      return op(e, t, n);
    case 22:
      return np(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Pp(e, t) {
  return Qf(e, t);
}
function Nv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function be(e, t, n, r) {
  return new Nv(e, t, n, r);
}
function Ua(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ev(e) {
  if (typeof e == "function") return Ua(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === la)) return 11;
    if (e === aa) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ua(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case vn:
        return on(n.children, i, s, t);
      case oa:
        (o = 8), (i |= 8);
        break;
      case Go:
        return (
          (e = be(12, n, t, i | 2)), (e.elementType = Go), (e.lanes = s), e
        );
      case Xo:
        return (e = be(13, n, t, i)), (e.elementType = Xo), (e.lanes = s), e;
      case Qo:
        return (e = be(19, n, t, i)), (e.elementType = Qo), (e.lanes = s), e;
      case Mf:
        return $s(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Df:
              o = 10;
              break e;
            case Lf:
              o = 9;
              break e;
            case la:
              o = 11;
              break e;
            case aa:
              o = 14;
              break e;
            case St:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = be(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function on(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function $s(e, t, n, r) {
  return (
    (e = be(22, e, r, t)),
    (e.elementType = Mf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Eo(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function jo(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = lo(0)),
    (this.expirationTimes = lo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = lo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function $a(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new jv(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = be(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Na(s),
    e
  );
}
function Av(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kp(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return kh(e, n, t);
  }
  return t;
}
function Tp(e, t, n, r, i, s, o, l, a) {
  return (
    (e = $a(n, r, !0, e, i, s, o, l, a)),
    (e.context = kp(null)),
    (n = e.current),
    (r = ve()),
    (i = _t(n)),
    (s = ut(r, i)),
    (s.callback = t ?? null),
    Rt(n, s, i),
    (e.current.lanes = i),
    si(e, i, r),
    Ce(e, r),
    e
  );
}
function Hs(e, t, n, r) {
  var i = t.current,
    s = ve(),
    o = _t(i);
  return (
    (n = kp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rt(i, t, o)),
    e !== null && (Ye(e, i, o, s), $i(e, i, o)),
    o
  );
}
function ks(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _c(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ha(e, t) {
  _c(e, t), (e = e.alternate) && _c(e, t);
}
function Dv() {
  return null;
}
var Cp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wa(e) {
  this._internalRoot = e;
}
Ws.prototype.render = Wa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Hs(e, t, null, null);
};
Ws.prototype.unmount = Wa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fn(function () {
      Hs(null, e, null, null);
    }),
      (t[ht] = null);
  }
};
function Ws(e) {
  this._internalRoot = e;
}
Ws.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
    Ct.splice(n, 0, e), n === 0 && ih(e);
  }
};
function Ka(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ks(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Oc() {}
function Lv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ks(o);
        s.call(u);
      };
    }
    var o = Tp(t, r, e, 0, null, !1, !1, "", Oc);
    return (
      (e._reactRootContainer = o),
      (e[ht] = o.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ks(a);
      l.call(u);
    };
  }
  var a = $a(e, 0, !1, null, null, !1, !1, "", Oc);
  return (
    (e._reactRootContainer = a),
    (e[ht] = a.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      Hs(t, a, n, r);
    }),
    a
  );
}
function Gs(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = ks(o);
        l.call(a);
      };
    }
    Hs(t, o, e, i);
  } else o = Lv(n, t, e, i, r);
  return ks(o);
}
eh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = gr(t.pendingLanes);
        n !== 0 &&
          (da(t, n | 1), Ce(t, q()), !(I & 6) && ((Kn = q() + 500), $t()));
      }
      break;
    case 13:
      fn(function () {
        var r = pt(e, 1);
        if (r !== null) {
          var i = ve();
          Ye(r, e, 1, i);
        }
      }),
        Ha(e, 1);
  }
};
fa = function (e) {
  if (e.tag === 13) {
    var t = pt(e, 134217728);
    if (t !== null) {
      var n = ve();
      Ye(t, e, 134217728, n);
    }
    Ha(e, 134217728);
  }
};
th = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = pt(e, t);
    if (n !== null) {
      var r = ve();
      Ye(n, e, t, r);
    }
    Ha(e, t);
  }
};
nh = function () {
  return F;
};
rh = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
sl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Is(r);
            if (!i) throw Error(C(90));
            Vf(r), qo(r, i);
          }
        }
      }
      break;
    case "textarea":
      Of(e, n);
      break;
    case "select":
      (t = n.value), t != null && Vn(e, !!n.multiple, t, !1);
  }
};
$f = ba;
Hf = fn;
var Mv = { usingClientEntryPoint: !1, Events: [li, Pn, Is, Bf, Uf, ba] },
  cr = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rv = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Gf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || Dv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mi.isDisabled && Mi.supportsFiber)
    try {
      (Rs = Mi.inject(Rv)), (tt = Mi);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mv;
Me.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ka(t)) throw Error(C(200));
  return Av(e, t, null, n);
};
Me.createRoot = function (e, t) {
  if (!Ka(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Cp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = $a(e, 1, !1, null, null, n, !1, r, i)),
    (e[ht] = t.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    new Wa(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Gf(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
  return fn(e);
};
Me.hydrate = function (e, t, n) {
  if (!Ks(t)) throw Error(C(200));
  return Gs(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
  if (!Ka(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Cp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Tp(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[ht] = t.current),
    Ur(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ws(t);
};
Me.render = function (e, t, n) {
  if (!Ks(t)) throw Error(C(200));
  return Gs(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!Ks(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (fn(function () {
        Gs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ht] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = ba;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ks(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Gs(e, t, n, !1, r);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function Np() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Np);
    } catch (e) {
      console.error(e);
    }
}
Np(), (Nf.exports = Me);
var Vv = Nf.exports,
  Ic = Vv;
(Wo.createRoot = Ic.createRoot), (Wo.hydrateRoot = Ic.hydrateRoot);
const Ga = k.createContext({});
function Xa(e) {
  const t = k.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Xs = k.createContext(null),
  Qa = k.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class _v extends k.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Ov({ children: e, isPresent: t }) {
  const n = k.useId(),
    r = k.useRef(null),
    i = k.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = k.useContext(Qa);
  return (
    k.useInsertionEffect(() => {
      const { width: o, height: l, top: a, left: u } = i.current;
      if (t || !r.current || !o || !l) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    d.jsx(_v, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: k.cloneElement(e, { ref: r }),
    })
  );
}
const Iv = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const l = Xa(Fv),
    a = k.useId(),
    u = k.useCallback(
      (h) => {
        l.set(h, !0);
        for (const f of l.values()) if (!f) return;
        r && r();
      },
      [l, r]
    ),
    c = k.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (h) => (l.set(h, !1), () => l.delete(h)),
      }),
      s ? [Math.random(), u] : [n, u]
    );
  return (
    k.useMemo(() => {
      l.forEach((h, f) => l.set(f, !1));
    }, [n]),
    k.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    o === "popLayout" && (e = d.jsx(Ov, { isPresent: n, children: e })),
    d.jsx(Xs.Provider, { value: c, children: e })
  );
};
function Fv() {
  return new Map();
}
function Ep(e = !0) {
  const t = k.useContext(Xs);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = k.useId();
  k.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = k.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Ri = (e) => e.key || "";
function Fc(e) {
  const t = [];
  return (
    k.Children.forEach(e, (n) => {
      k.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Ya = typeof window < "u",
  jp = Ya ? k.useLayoutEffect : k.useEffect,
  Ap = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
  }) => {
    const [l, a] = Ep(o),
      u = k.useMemo(() => Fc(e), [e]),
      c = o && !l ? [] : u.map(Ri),
      h = k.useRef(!0),
      f = k.useRef(u),
      g = Xa(() => new Map()),
      [v, x] = k.useState(u),
      [S, m] = k.useState(u);
    jp(() => {
      (h.current = !1), (f.current = u);
      for (let w = 0; w < S.length; w++) {
        const P = Ri(S[w]);
        c.includes(P) ? g.delete(P) : g.get(P) !== !0 && g.set(P, !1);
      }
    }, [S, c.length, c.join("-")]);
    const p = [];
    if (u !== v) {
      let w = [...u];
      for (let P = 0; P < S.length; P++) {
        const N = S[P],
          E = Ri(N);
        c.includes(E) || (w.splice(P, 0, N), p.push(N));
      }
      s === "wait" && p.length && (w = p), m(Fc(w)), x(u);
      return;
    }
    const { forceRender: y } = k.useContext(Ga);
    return d.jsx(d.Fragment, {
      children: S.map((w) => {
        const P = Ri(w),
          N = o && !l ? !1 : u === S || c.includes(P),
          E = () => {
            if (g.has(P)) g.set(P, !0);
            else return;
            let T = !0;
            g.forEach((V) => {
              V || (T = !1);
            }),
              T &&
                (y == null || y(),
                m(f.current),
                o && (a == null || a()),
                r && r());
          };
        return d.jsx(
          Iv,
          {
            isPresent: N,
            initial: !h.current || n ? void 0 : !1,
            custom: N ? void 0 : t,
            presenceAffectsLayout: i,
            mode: s,
            onExitComplete: N ? void 0 : E,
            children: w,
          },
          P
        );
      }),
    });
  },
  Ae = (e) => e;
let Dp = Ae;
function Za(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Gn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ct = (e) => e * 1e3,
  dt = (e) => e / 1e3,
  bv = { useManualTiming: !1 };
function zv(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    s.has(u) && (a.schedule(u), e()), u(o);
  }
  const a = {
    schedule: (u, c = !1, h = !1) => {
      const g = h && r ? t : n;
      return c && s.add(u), g.has(u) || g.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(l),
        t.clear(),
        (r = !1),
        i && ((i = !1), a.process(u));
    },
  };
  return a;
}
const Vi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Bv = 40;
function Lp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Vi.reduce((m, p) => ((m[p] = zv(s)), m), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: h,
      postRender: f,
    } = o,
    g = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Bv), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        h.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: Vi.reduce((m, p) => {
      const y = o[p];
      return (m[p] = (w, P = !1, N = !1) => (n || v(), y.schedule(w, P, N))), m;
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Vi.length; p++) o[Vi[p]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: U,
    cancel: bt,
    state: ae,
    steps: Ao,
  } = Lp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ae, !0),
  Mp = k.createContext({ strict: !1 }),
  bc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Xn = {};
for (const e in bc) Xn[e] = { isEnabled: (t) => bc[e].some((n) => !!t[n]) };
function Uv(e) {
  for (const t in e) Xn[t] = { ...Xn[t], ...e[t] };
}
const $v = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ts(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    $v.has(e)
  );
}
let Rp = (e) => !Ts(e);
function Hv(e) {
  e && (Rp = (t) => (t.startsWith("on") ? !Ts(t) : e(t)));
}
try {
  Hv(require("@emotion/is-prop-valid").default);
} catch {}
function Wv(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Rp(i) ||
        (n === !0 && Ts(i)) ||
        (!t && !Ts(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Kv(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const Qs = k.createContext({});
function Zr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ys(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const qa = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ja = ["initial", ...qa];
function Zs(e) {
  return Ys(e.animate) || Ja.some((t) => Zr(e[t]));
}
function Vp(e) {
  return !!(Zs(e) || e.variants);
}
function Gv(e, t) {
  if (Zs(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Zr(n) ? n : void 0,
      animate: Zr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Xv(e) {
  const { initial: t, animate: n } = Gv(e, k.useContext(Qs));
  return k.useMemo(() => ({ initial: t, animate: n }), [zc(t), zc(n)]);
}
function zc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Qv = Symbol.for("motionComponentSymbol");
function An(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Yv(e, t, n) {
  return k.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : An(n) && (n.current = r));
    },
    [t]
  );
}
const eu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Zv = "framerAppearId",
  _p = "data-" + eu(Zv),
  { schedule: tu } = Lp(queueMicrotask, !1),
  Op = k.createContext({});
function qv(e, t, n, r, i) {
  var s, o;
  const { visualElement: l } = k.useContext(Qs),
    a = k.useContext(Mp),
    u = k.useContext(Xs),
    c = k.useContext(Qa).reducedMotion,
    h = k.useRef(null);
  (r = r || a.renderer),
    !h.current &&
      r &&
      (h.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const f = h.current,
    g = k.useContext(Op);
  f &&
    !f.projection &&
    i &&
    (f.type === "html" || f.type === "svg") &&
    Jv(h.current, n, i, g);
  const v = k.useRef(!1);
  k.useInsertionEffect(() => {
    f && v.current && f.update(n, u);
  });
  const x = n[_p],
    S = k.useRef(
      !!x &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, x)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, x))
    );
  return (
    jp(() => {
      f &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        tu.render(f.render),
        S.current && f.animationState && f.animationState.animateChanges());
    }),
    k.useEffect(() => {
      f &&
        (!S.current && f.animationState && f.animationState.animateChanges(),
        S.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, x);
          }),
          (S.current = !1)));
    }),
    f
  );
}
function Jv(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Ip(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (l && An(l)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u,
    });
}
function Ip(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Ip(e.parent);
}
function e0({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, o;
  e && Uv(e);
  function l(u, c) {
    let h;
    const f = { ...k.useContext(Qa), ...u, layoutId: t0(u) },
      { isStatic: g } = f,
      v = Xv(u),
      x = r(u, g);
    if (!g && Ya) {
      n0();
      const S = r0(f);
      (h = S.MeasureLayout),
        (v.visualElement = qv(i, x, f, t, S.ProjectionNode));
    }
    return d.jsxs(Qs.Provider, {
      value: v,
      children: [
        h && v.visualElement
          ? d.jsx(h, { visualElement: v.visualElement, ...f })
          : null,
        n(i, u, Yv(x, v.visualElement, c), x, g, v.visualElement),
      ],
    });
  }
  l.displayName = `motion.${
    typeof i == "string"
      ? i
      : `create(${
          (o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !==
            null && o !== void 0
            ? o
            : ""
        })`
  }`;
  const a = k.forwardRef(l);
  return (a[Qv] = i), a;
}
function t0({ layoutId: e }) {
  const t = k.useContext(Ga).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function n0(e, t) {
  k.useContext(Mp).strict;
}
function r0(e) {
  const { drag: t, layout: n } = Xn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const i0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function nu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(i0.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Bc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function ru(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Bc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Bc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const Fl = (e) => Array.isArray(e),
  s0 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  o0 = (e) => (Fl(e) ? e[e.length - 1] || 0 : e),
  me = (e) => !!(e && e.getVelocity);
function Yi(e) {
  const t = me(e) ? e.get() : e;
  return s0(t) ? t.toValue() : t;
}
function l0(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s
) {
  const o = { latestValues: a0(r, i, s, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (l) => n({ props: r, current: l, ...o })),
      (o.onUpdate = (l) => n(l))),
    o
  );
}
const Fp = (e) => (t, n) => {
  const r = k.useContext(Qs),
    i = k.useContext(Xs),
    s = () => l0(e, t, r, i);
  return n ? s() : Xa(s);
};
function a0(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const f in s) i[f] = Yi(s[f]);
  let { initial: o, animate: l } = e;
  const a = Zs(e),
    u = Vp(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const h = c ? l : o;
  if (h && typeof h != "boolean" && !Ys(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let g = 0; g < f.length; g++) {
      const v = ru(e, f[g]);
      if (v) {
        const { transitionEnd: x, transition: S, ...m } = v;
        for (const p in m) {
          let y = m[p];
          if (Array.isArray(y)) {
            const w = c ? y.length - 1 : 0;
            y = y[w];
          }
          y !== null && (i[p] = y);
        }
        for (const p in x) i[p] = x[p];
      }
    }
  }
  return i;
}
const Jn = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  mn = new Set(Jn),
  bp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  zp = bp("--"),
  u0 = bp("var(--"),
  iu = (e) => (u0(e) ? c0.test(e.split("/*")[0].trim()) : !1),
  c0 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Bp = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  gt = (e, t, n) => (n > t ? t : n < e ? e : n),
  er = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  qr = { ...er, transform: (e) => gt(0, 1, e) },
  _i = { ...er, default: 1 },
  ui = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wt = ui("deg"),
  rt = ui("%"),
  D = ui("px"),
  d0 = ui("vh"),
  f0 = ui("vw"),
  Uc = {
    ...rt,
    parse: (e) => rt.parse(e) / 100,
    transform: (e) => rt.transform(e * 100),
  },
  h0 = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    backgroundPositionX: D,
    backgroundPositionY: D,
  },
  p0 = {
    rotate: wt,
    rotateX: wt,
    rotateY: wt,
    rotateZ: wt,
    scale: _i,
    scaleX: _i,
    scaleY: _i,
    scaleZ: _i,
    skew: wt,
    skewX: wt,
    skewY: wt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: qr,
    originX: Uc,
    originY: Uc,
    originZ: D,
  },
  $c = { ...er, transform: Math.round },
  su = {
    ...h0,
    ...p0,
    zIndex: $c,
    size: D,
    fillOpacity: qr,
    strokeOpacity: qr,
    numOctaves: $c,
  },
  m0 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  g0 = Jn.length;
function y0(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < g0; s++) {
    const o = Jn[s],
      l = e[o];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == "number"
        ? (a = l === (o.startsWith("scale") ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = Bp(l, su[o]);
      if (!a) {
        i = !1;
        const c = m0[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function ou(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (mn.has(a)) {
      o = !0;
      continue;
    } else if (zp(a)) {
      i[a] = u;
      continue;
    } else {
      const c = Bp(u, su[a]);
      a.startsWith("origin") ? ((l = !0), (s[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = y0(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
const v0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  x0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function w0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? v0 : x0;
  e[s.offset] = D.transform(-r);
  const o = D.transform(t),
    l = D.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Hc(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function S0(e, t, n) {
  const r = Hc(t, e.x, e.width),
    i = Hc(n, e.y, e.height);
  return `${r} ${i}`;
}
function lu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  h
) {
  if ((ou(e, u, h), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: g, dimensions: v } = e;
  f.transform && (v && (g.transform = f.transform), delete f.transform),
    v &&
      (i !== void 0 || s !== void 0 || g.transform) &&
      (g.transformOrigin = S0(
        v,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && w0(f, o, l, a, !1);
}
const au = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Up = () => ({ ...au(), attrs: {} }),
  uu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function $p(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Hp = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Wp(e, t, n, r) {
  $p(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Hp.has(i) ? i : eu(i), t.attrs[i]);
}
const Cs = {};
function P0(e) {
  Object.assign(Cs, e);
}
function Kp(e, { layout: t, layoutId: n }) {
  return (
    mn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Cs[e] || e === "opacity"))
  );
}
function cu(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (me(i[o]) ||
      (t.style && me(t.style[o])) ||
      Kp(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function Gp(e, t, n) {
  const r = cu(e, t, n);
  for (const i in e)
    if (me(e[i]) || me(t[i])) {
      const s =
        Jn.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function k0(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Wc = ["x", "y", "width", "height", "cx", "cy", "r"],
  T0 = {
    useVisualState: Fp({
      scrapeMotionValuesFromProps: Gp,
      createRenderState: Up,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const l in i)
            if (mn.has(l)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let o = !t;
        if (t)
          for (let l = 0; l < Wc.length; l++) {
            const a = Wc[l];
            e[a] !== t[a] && (o = !0);
          }
        o &&
          U.read(() => {
            k0(n, r),
              U.render(() => {
                lu(r, i, uu(n.tagName), e.transformTemplate), Wp(n, r);
              });
          });
      },
    }),
  },
  C0 = {
    useVisualState: Fp({
      scrapeMotionValuesFromProps: cu,
      createRenderState: au,
    }),
  };
function Xp(e, t, n) {
  for (const r in t) !me(t[r]) && !Kp(r, n) && (e[r] = t[r]);
}
function N0({ transformTemplate: e }, t) {
  return k.useMemo(() => {
    const n = au();
    return ou(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function E0(e, t) {
  const n = e.style || {},
    r = {};
  return Xp(r, n, e), Object.assign(r, N0(e, t)), r;
}
function j0(e, t) {
  const n = {},
    r = E0(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function A0(e, t, n, r) {
  const i = k.useMemo(() => {
    const s = Up();
    return (
      lu(s, t, uu(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Xp(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function D0(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (nu(n) ? A0 : j0)(r, s, o, n),
      u = Wv(r, typeof n == "string", e),
      c = n !== k.Fragment ? { ...u, ...a, ref: i } : {},
      { children: h } = r,
      f = k.useMemo(() => (me(h) ? h.get() : h), [h]);
    return k.createElement(n, { ...c, children: f });
  };
}
function L0(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(nu(r) ? T0 : C0),
      preloadedFeatures: e,
      useRender: D0(i),
      createVisualElement: t,
      Component: r,
    };
    return e0(o);
  };
}
function Qp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function qs(e, t, n) {
  const r = e.getProps();
  return ru(r, t, n !== void 0 ? n : r.custom, e);
}
const M0 = Za(() => window.ScrollTimeline !== void 0);
class R0 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (M0() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class V0 extends R0 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function du(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const bl = 2e4;
function Yp(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < bl; ) (t += n), (r = e.next(t));
  return t >= bl ? 1 / 0 : t;
}
function fu(e) {
  return typeof e == "function";
}
function Kc(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const hu = (e) => Array.isArray(e) && typeof e[0] == "number",
  _0 = { linearEasing: void 0 };
function O0(e, t) {
  const n = Za(e);
  return () => {
    var r;
    return (r = _0[t]) !== null && r !== void 0 ? r : n();
  };
}
const Ns = O0(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Zp = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(Gn(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function qp(e) {
  return !!(
    (typeof e == "function" && Ns()) ||
    !e ||
    (typeof e == "string" && (e in zl || Ns())) ||
    hu(e) ||
    (Array.isArray(e) && e.every(qp))
  );
}
const vr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  zl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vr([0, 0.65, 0.55, 1]),
    circOut: vr([0.55, 0, 1, 0.45]),
    backIn: vr([0.31, 0.01, 0.66, -0.59]),
    backOut: vr([0.33, 1.53, 0.69, 0.99]),
  };
function Jp(e, t) {
  if (e)
    return typeof e == "function" && Ns()
      ? Zp(e, t)
      : hu(e)
      ? vr(e)
      : Array.isArray(e)
      ? e.map((n) => Jp(n, t) || zl.easeOut)
      : zl[e];
}
const He = { x: !1, y: !1 };
function em() {
  return He.x || He.y;
}
function I0(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function tm(e, t) {
  const n = I0(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Gc(e) {
  return (t) => {
    t.pointerType === "touch" || em() || e(t);
  };
}
function F0(e, t, n = {}) {
  const [r, i, s] = tm(e, n),
    o = Gc((l) => {
      const { target: a } = l,
        u = t(l);
      if (typeof u != "function" || !a) return;
      const c = Gc((h) => {
        u(h), a.removeEventListener("pointerleave", c);
      });
      a.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((l) => {
      l.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const nm = (e, t) => (t ? (e === t ? !0 : nm(e, t.parentElement)) : !1),
  pu = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  b0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function z0(e) {
  return b0.has(e.tagName) || e.tabIndex !== -1;
}
const xr = new WeakSet();
function Xc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Do(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const B0 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Xc(() => {
    if (xr.has(n)) return;
    Do(n, "down");
    const i = Xc(() => {
        Do(n, "up");
      }),
      s = () => Do(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Qc(e) {
  return pu(e) && !em();
}
function U0(e, t, n = {}) {
  const [r, i, s] = tm(e, n),
    o = (l) => {
      const a = l.currentTarget;
      if (!Qc(l) || xr.has(a)) return;
      xr.add(a);
      const u = t(l),
        c = (g, v) => {
          window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            !(!Qc(g) || !xr.has(a)) &&
              (xr.delete(a), typeof u == "function" && u(g, { success: v }));
        },
        h = (g) => {
          c(g, n.useGlobalTarget || nm(a, g.target));
        },
        f = (g) => {
          c(g, !1);
        };
      window.addEventListener("pointerup", h, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    r.forEach((l) => {
      !z0(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0),
        (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i),
        l.addEventListener("focus", (u) => B0(u, i), i);
    }),
    s
  );
}
function $0(e) {
  return e === "x" || e === "y"
    ? He[e]
      ? null
      : ((He[e] = !0),
        () => {
          He[e] = !1;
        })
    : He.x || He.y
    ? null
    : ((He.x = He.y = !0),
      () => {
        He.x = He.y = !1;
      });
}
const rm = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Jn,
]);
let Zi;
function H0() {
  Zi = void 0;
}
const it = {
  now: () => (
    Zi === void 0 &&
      it.set(
        ae.isProcessing || bv.useManualTiming ? ae.timestamp : performance.now()
      ),
    Zi
  ),
  set: (e) => {
    (Zi = e), queueMicrotask(H0);
  },
};
function mu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function gu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class yu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return mu(this.subscriptions, t), () => gu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function im(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Yc = 30,
  W0 = (e) => !isNaN(parseFloat(e));
class K0 {
  constructor(t, n = {}) {
    (this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = it.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = it.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = W0(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new yu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            U.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = it.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Yc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Yc);
    return im(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Jr(e, t) {
  return new K0(e, t);
}
function G0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Jr(n));
}
function X0(e, t) {
  const n = qs(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = o0(s[o]);
    G0(e, o, l);
  }
}
function Q0(e) {
  return !!(me(e) && e.add);
}
function Bl(e, t) {
  const n = e.getValue("willChange");
  if (Q0(n)) return n.add(t);
}
function sm(e) {
  return e.props[_p];
}
const om = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Y0 = 1e-7,
  Z0 = 12;
function q0(e, t, n, r, i) {
  let s,
    o,
    l = 0;
  do (o = t + (n - t) / 2), (s = om(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > Y0 && ++l < Z0);
  return o;
}
function ci(e, t, n, r) {
  if (e === t && n === r) return Ae;
  const i = (s) => q0(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : om(i(s), t, r));
}
const lm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  am = (e) => (t) => 1 - e(1 - t),
  um = ci(0.33, 1.53, 0.69, 0.99),
  vu = am(um),
  cm = lm(vu),
  dm = (e) =>
    (e *= 2) < 1 ? 0.5 * vu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  xu = (e) => 1 - Math.sin(Math.acos(e)),
  fm = am(xu),
  hm = lm(xu),
  pm = (e) => /^0[^.\s]+$/u.test(e);
function J0(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || pm(e)
    : !0;
}
const Dr = (e) => Math.round(e * 1e5) / 1e5,
  wu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ex(e) {
  return e == null;
}
const tx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Su = (e, t) => (n) =>
    !!(
      (typeof n == "string" && tx.test(n) && n.startsWith(e)) ||
      (t && !ex(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  mm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, l] = r.match(wu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  nx = (e) => gt(0, 255, e),
  Lo = { ...er, transform: (e) => Math.round(nx(e)) },
  rn = {
    test: Su("rgb", "red"),
    parse: mm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Lo.transform(e) +
      ", " +
      Lo.transform(t) +
      ", " +
      Lo.transform(n) +
      ", " +
      Dr(qr.transform(r)) +
      ")",
  };
function rx(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ul = { test: Su("#"), parse: rx, transform: rn.transform },
  Dn = {
    test: Su("hsl", "hue"),
    parse: mm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      rt.transform(Dr(t)) +
      ", " +
      rt.transform(Dr(n)) +
      ", " +
      Dr(qr.transform(r)) +
      ")",
  },
  he = {
    test: (e) => rn.test(e) || Ul.test(e) || Dn.test(e),
    parse: (e) =>
      rn.test(e) ? rn.parse(e) : Dn.test(e) ? Dn.parse(e) : Ul.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? rn.transform(e)
        : Dn.transform(e),
  },
  ix =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function sx(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(wu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(ix)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const gm = "number",
  ym = "color",
  ox = "var",
  lx = "var(",
  Zc = "${}",
  ax =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ei(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const l = t
    .replace(
      ax,
      (a) => (
        he.test(a)
          ? (r.color.push(s), i.push(ym), n.push(he.parse(a)))
          : a.startsWith(lx)
          ? (r.var.push(s), i.push(ox), n.push(a))
          : (r.number.push(s), i.push(gm), n.push(parseFloat(a))),
        ++s,
        Zc
      )
    )
    .split(Zc);
  return { values: n, split: l, indexes: r, types: i };
}
function vm(e) {
  return ei(e).values;
}
function xm(e) {
  const { split: t, types: n } = ei(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const l = n[o];
        l === gm
          ? (s += Dr(i[o]))
          : l === ym
          ? (s += he.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const ux = (e) => (typeof e == "number" ? 0 : e);
function cx(e) {
  const t = vm(e);
  return xm(e)(t.map(ux));
}
const zt = {
    test: sx,
    parse: vm,
    createTransformer: xm,
    getAnimatableNone: cx,
  },
  dx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function fx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(wu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = dx.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const hx = /\b([a-z-]*)\(.*?\)/gu,
  $l = {
    ...zt,
    getAnimatableNone: (e) => {
      const t = e.match(hx);
      return t ? t.map(fx).join(" ") : e;
    },
  },
  px = {
    ...su,
    color: he,
    backgroundColor: he,
    outlineColor: he,
    fill: he,
    stroke: he,
    borderColor: he,
    borderTopColor: he,
    borderRightColor: he,
    borderBottomColor: he,
    borderLeftColor: he,
    filter: $l,
    WebkitFilter: $l,
  },
  Pu = (e) => px[e];
function wm(e, t) {
  let n = Pu(e);
  return (
    n !== $l && (n = zt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const mx = new Set(["auto", "none", "0"]);
function gx(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !mx.has(s) && ei(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = wm(n, i);
}
const qc = (e) => e === er || e === D,
  Jc = (e, t) => parseFloat(e.split(", ")[t]),
  ed =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Jc(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Jc(s[1], e) : 0;
      }
    },
  yx = new Set(["x", "y", "z"]),
  vx = Jn.filter((e) => !yx.has(e));
function xx(e) {
  const t = [];
  return (
    vx.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Qn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: ed(4, 13),
  y: ed(5, 14),
};
Qn.translateX = Qn.x;
Qn.translateY = Qn.y;
const ln = new Set();
let Hl = !1,
  Wl = !1;
function Sm() {
  if (Wl) {
    const e = Array.from(ln).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = xx(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var l;
            (l = r.getValue(s)) === null || l === void 0 || l.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Wl = !1), (Hl = !1), ln.forEach((e) => e.complete()), ln.clear();
}
function Pm() {
  ln.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Wl = !0);
  });
}
function wx() {
  Pm(), Sm();
}
class ku {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ln.add(this), Hl || ((Hl = !0), U.read(Pm), U.resolveKeyframes(Sm)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ln.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ln.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const km = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Sx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Px(e) {
  const t = Sx.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Tm(e, t, n = 1) {
  const [r, i] = Px(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return km(o) ? parseFloat(o) : o;
  }
  return iu(i) ? Tm(i, t, n + 1) : i;
}
const Cm = (e) => (t) => t.test(e),
  kx = { test: (e) => e === "auto", parse: (e) => e },
  Nm = [er, D, rt, wt, f0, d0, kx],
  td = (e) => Nm.find(Cm(e));
class Em extends ku {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && ((u = u.trim()), iu(u))) {
        const c = Tm(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !rm.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = td(i),
      l = td(s);
    if (o !== l)
      if (qc(o) && qc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) J0(t[i]) && r.push(i);
    r.length && gx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Qn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      l = i[o];
    (i[o] = Qn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const nd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (zt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Tx(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Cx(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = nd(i, t),
    l = nd(s, t);
  return !o || !l ? !1 : Tx(e) || ((n === "spring" || fu(n)) && r);
}
const Nx = (e) => e !== null;
function Js(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Nx),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const Ex = 40;
class jm {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = it.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Ex
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && wx(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = it.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !Cx(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        a && a(Js(t, this.options, n)), l && l(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const W = (e, t, n) => e + (t - e) * n;
function Mo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function jx({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Mo(a, l, e + 1 / 3)), (s = Mo(a, l, e)), (o = Mo(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Es(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ro = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Ax = [Ul, rn, Dn],
  Dx = (e) => Ax.find((t) => t.test(e));
function rd(e) {
  const t = Dx(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Dn && (n = jx(n)), n;
}
const id = (e, t) => {
    const n = rd(e),
      r = rd(t);
    if (!n || !r) return Es(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Ro(n.red, r.red, s)),
      (i.green = Ro(n.green, r.green, s)),
      (i.blue = Ro(n.blue, r.blue, s)),
      (i.alpha = W(n.alpha, r.alpha, s)),
      rn.transform(i)
    );
  },
  Lx = (e, t) => (n) => t(e(n)),
  di = (...e) => e.reduce(Lx),
  Kl = new Set(["none", "hidden"]);
function Mx(e, t) {
  return Kl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Rx(e, t) {
  return (n) => W(e, t, n);
}
function Tu(e) {
  return typeof e == "number"
    ? Rx
    : typeof e == "string"
    ? iu(e)
      ? Es
      : he.test(e)
      ? id
      : Ox
    : Array.isArray(e)
    ? Am
    : typeof e == "object"
    ? he.test(e)
      ? id
      : Vx
    : Es;
}
function Am(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Tu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Vx(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Tu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function _x(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      l = e.indexes[o][i[o]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[s] = a), i[o]++;
  }
  return r;
}
const Ox = (e, t) => {
  const n = zt.createTransformer(t),
    r = ei(e),
    i = ei(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Kl.has(e) && !i.values.length) || (Kl.has(t) && !r.values.length)
      ? Mx(e, t)
      : di(Am(_x(r, i), i.values), n)
    : Es(e, t);
};
function Dm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? W(e, t, n)
    : Tu(e)(e, t);
}
const Ix = 5;
function Lm(e, t, n) {
  const r = Math.max(t - Ix, 0);
  return im(n - e(r), t - r);
}
const X = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Vo = 0.001;
function Fx({
  duration: e = X.duration,
  bounce: t = X.bounce,
  velocity: n = X.velocity,
  mass: r = X.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = gt(X.minDamping, X.maxDamping, o)),
    (e = gt(X.minDuration, X.maxDuration, dt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            h = c * e,
            f = c - n,
            g = Gl(u, o),
            v = Math.exp(-h);
          return Vo - (f / g) * v;
        }),
        (s = (u) => {
          const h = u * o * e,
            f = h * n + n,
            g = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-h),
            x = Gl(Math.pow(u, 2), o);
          return ((-i(u) + Vo > 0 ? -1 : 1) * ((f - g) * v)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            h = (u - n) * e + 1;
          return -Vo + c * h;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            h = (n - u) * (e * e);
          return c * h;
        }));
  const l = 5 / e,
    a = zx(i, s, l);
  if (((e = ct(e)), isNaN(a)))
    return { stiffness: X.stiffness, damping: X.damping, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const bx = 12;
function zx(e, t, n) {
  let r = n;
  for (let i = 1; i < bx; i++) r = r - e(r) / t(r);
  return r;
}
function Gl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Bx = ["duration", "bounce"],
  Ux = ["stiffness", "damping", "mass"];
function sd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function $x(e) {
  let t = {
    velocity: X.velocity,
    stiffness: X.stiffness,
    damping: X.damping,
    mass: X.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!sd(e, Ux) && sd(e, Bx))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * gt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: X.mass, stiffness: i, damping: s };
    } else {
      const n = Fx(e);
      (t = { ...t, ...n, mass: X.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Mm(e = X.visualDuration, t = X.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    l = { done: !1, value: s },
    {
      stiffness: a,
      damping: u,
      mass: c,
      duration: h,
      velocity: f,
      isResolvedFromDuration: g,
    } = $x({ ...n, velocity: -dt(n.velocity || 0) }),
    v = f || 0,
    x = u / (2 * Math.sqrt(a * c)),
    S = o - s,
    m = dt(Math.sqrt(a / c)),
    p = Math.abs(S) < 5;
  r || (r = p ? X.restSpeed.granular : X.restSpeed.default),
    i || (i = p ? X.restDelta.granular : X.restDelta.default);
  let y;
  if (x < 1) {
    const P = Gl(m, x);
    y = (N) => {
      const E = Math.exp(-x * m * N);
      return (
        o - E * (((v + x * m * S) / P) * Math.sin(P * N) + S * Math.cos(P * N))
      );
    };
  } else if (x === 1) y = (P) => o - Math.exp(-m * P) * (S + (v + m * S) * P);
  else {
    const P = m * Math.sqrt(x * x - 1);
    y = (N) => {
      const E = Math.exp(-x * m * N),
        T = Math.min(P * N, 300);
      return (
        o - (E * ((v + x * m * S) * Math.sinh(T) + P * S * Math.cosh(T))) / P
      );
    };
  }
  const w = {
    calculatedDuration: (g && h) || null,
    next: (P) => {
      const N = y(P);
      if (g) l.done = P >= h;
      else {
        let E = 0;
        x < 1 && (E = P === 0 ? ct(v) : Lm(y, P, N));
        const T = Math.abs(E) <= r,
          V = Math.abs(o - N) <= i;
        l.done = T && V;
      }
      return (l.value = l.done ? o : N), l;
    },
    toString: () => {
      const P = Math.min(Yp(w), bl),
        N = Zp((E) => w.next(P * E).value, P, 30);
      return P + "ms " + N;
    },
  };
  return w;
}
function od({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const h = e[0],
    f = { done: !1, value: h },
    g = (T) => (l !== void 0 && T < l) || (a !== void 0 && T > a),
    v = (T) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - T) < Math.abs(a - T)
        ? l
        : a;
  let x = n * t;
  const S = h + x,
    m = o === void 0 ? S : o(S);
  m !== S && (x = m - h);
  const p = (T) => -x * Math.exp(-T / r),
    y = (T) => m + p(T),
    w = (T) => {
      const V = p(T),
        L = y(T);
      (f.done = Math.abs(V) <= u), (f.value = f.done ? m : L);
    };
  let P, N;
  const E = (T) => {
    g(f.value) &&
      ((P = T),
      (N = Mm({
        keyframes: [f.value, v(f.value)],
        velocity: Lm(y, T, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let V = !1;
        return (
          !N && P === void 0 && ((V = !0), w(T), E(T)),
          P !== void 0 && T >= P ? N.next(T - P) : (!V && w(T), f)
        );
      },
    }
  );
}
const Hx = ci(0.42, 0, 1, 1),
  Wx = ci(0, 0, 0.58, 1),
  Rm = ci(0.42, 0, 0.58, 1),
  Kx = (e) => Array.isArray(e) && typeof e[0] != "number",
  Gx = {
    linear: Ae,
    easeIn: Hx,
    easeInOut: Rm,
    easeOut: Wx,
    circIn: xu,
    circInOut: hm,
    circOut: fm,
    backIn: vu,
    backInOut: cm,
    backOut: um,
    anticipate: dm,
  },
  ld = (e) => {
    if (hu(e)) {
      Dp(e.length === 4);
      const [t, n, r, i] = e;
      return ci(t, n, r, i);
    } else if (typeof e == "string") return Gx[e];
    return e;
  };
function Xx(e, t, n) {
  const r = [],
    i = n || Dm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || Ae : t;
      l = di(a, l);
    }
    r.push(l);
  }
  return r;
}
function Qx(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Dp(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const l = Xx(t, r, i),
    a = l.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let h = 0;
      if (a > 1) for (; h < e.length - 2 && !(c < e[h + 1]); h++);
      const f = Gn(e[h], e[h + 1], c);
      return l[h](f);
    };
  return n ? (c) => u(gt(e[0], e[s - 1], c)) : u;
}
function Yx(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Gn(0, t, r);
    e.push(W(n, 1, i));
  }
}
function Zx(e) {
  const t = [0];
  return Yx(t, e.length - 1), t;
}
function qx(e, t) {
  return e.map((n) => n * t);
}
function Jx(e, t) {
  return e.map(() => t || Rm).splice(0, e.length - 1);
}
function js({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Kx(r) ? r.map(ld) : ld(r),
    s = { done: !1, value: t[0] },
    o = qx(n && n.length === t.length ? n : Zx(t), e),
    l = Qx(o, t, { ease: Array.isArray(i) ? i : Jx(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((s.value = l(a)), (s.done = a >= e), s),
  };
}
const e1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => U.update(t, !0),
      stop: () => bt(t),
      now: () => (ae.isProcessing ? ae.timestamp : it.now()),
    };
  },
  t1 = { decay: od, inertia: od, tween: js, keyframes: js, spring: Mm },
  n1 = (e) => e / 100;
class Cu extends jm {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || ku,
      l = (a, u) => this.onKeyframesResolved(a, u);
    (this.resolver = new o(s, l, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      l = fu(n) ? n : t1[n] || js;
    let a, u;
    l !== js &&
      typeof t[0] != "number" &&
      ((a = di(n1, Dm(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = Yp(c));
    const { calculatedDuration: h } = c,
      f = h + i,
      g = f * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: h,
      resolvedDuration: f,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: h,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: f,
      repeat: g,
      repeatType: v,
      repeatDelay: x,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let y = this.currentTime,
      w = s;
    if (g) {
      const T = Math.min(this.currentTime, c) / h;
      let V = Math.floor(T),
        L = T % 1;
      !L && T >= 1 && (L = 1),
        L === 1 && V--,
        (V = Math.min(V, g + 1)),
        !!(V % 2) &&
          (v === "reverse"
            ? ((L = 1 - L), x && (L -= x / h))
            : v === "mirror" && (w = o)),
        (y = gt(0, 1, L) * h);
    }
    const P = p ? { done: !1, value: a[0] } : w.next(y);
    l && (P.value = l(P.value));
    let { done: N } = P;
    !p &&
      u !== null &&
      (N = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && N));
    return (
      E && i !== void 0 && (P.value = Js(a, this.options, i)),
      S && S(P.value),
      E && this.finish(),
      P
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? dt(t.calculatedDuration) : 0;
  }
  get time() {
    return dt(this.currentTime);
  }
  set time(t) {
    (t = ct(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = dt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = e1, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const r1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function i1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l = "easeInOut",
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Jp(l, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const s1 = Za(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  As = 10,
  o1 = 2e4;
function l1(e) {
  return fu(e.type) || e.type === "spring" || !qp(e.ease);
}
function a1(e, t) {
  const n = new Cu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < o1; ) (r = n.sample(s)), i.push(r.value), (s += As);
  return { times: void 0, keyframes: i, duration: s - As, ease: "linear" };
}
const Vm = { anticipate: dm, backInOut: cm, circInOut: hm };
function u1(e) {
  return e in Vm;
}
class ad extends jm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new Em(
      s,
      (o, l) => this.onKeyframesResolved(o, l),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: s,
      type: o,
      motionValue: l,
      name: a,
      startTime: u,
    } = this.options;
    if (!l.owner || !l.owner.current) return !1;
    if (
      (typeof s == "string" && Ns() && u1(s) && (s = Vm[s]), l1(this.options))
    ) {
      const {
          onComplete: h,
          onUpdate: f,
          motionValue: g,
          element: v,
          ...x
        } = this.options,
        S = a1(t, x);
      (t = S.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = S.duration),
        (i = S.times),
        (s = S.ease),
        (o = "keyframes");
    }
    const c = i1(l.owner.current, a, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: s,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Kc(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: h } = this.options;
            l.set(Js(t, this.options, n)),
              h && h(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: i, type: o, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return dt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return dt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = ct(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ae;
      const { animation: r } = n;
      Kc(r, t);
    }
    return Ae;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: l,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: h,
          element: f,
          ...g
        } = this.options,
        v = new Cu({
          ...g,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: l,
          isGenerator: !0,
        }),
        x = ct(this.time);
      u.setWithVelocity(v.sample(x - As).value, v.sample(x).value, As);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: l,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: a, transformTemplate: u } = n.owner.getProps();
    return (
      s1() &&
      r &&
      r1.has(r) &&
      !a &&
      !u &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      l !== "inertia"
    );
  }
}
const c1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  d1 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  f1 = { type: "keyframes", duration: 0.8 },
  h1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  p1 = (e, { keyframes: t }) =>
    t.length > 2
      ? f1
      : mn.has(e)
      ? e.startsWith("scale")
        ? d1(t[1])
        : c1
      : h1;
function m1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Nu =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const l = du(r, e) || {},
      a = l.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - ct(a);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), l.onUpdate && l.onUpdate(f);
      },
      onComplete: () => {
        o(), l.onComplete && l.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    m1(l) || (c = { ...c, ...p1(e, c) }),
      c.duration && (c.duration = ct(c.duration)),
      c.repeatDelay && (c.repeatDelay = ct(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let h = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (h = !0)),
      h && !s && t.get() !== void 0)
    ) {
      const f = Js(c.keyframes, l);
      if (f !== void 0)
        return (
          U.update(() => {
            c.onUpdate(f), c.onComplete();
          }),
          new V0([])
        );
    }
    return !s && ad.supports(c) ? new ad(c) : new Cu(c);
  };
function g1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function _m(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const h in a) {
    const f = e.getValue(
        h,
        (s = e.latestValues[h]) !== null && s !== void 0 ? s : null
      ),
      g = a[h];
    if (g === void 0 || (c && g1(c, h))) continue;
    const v = { delay: n, ...du(o || {}, h) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = sm(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, h, U);
        p !== null && ((v.startTime = p), (x = !0));
      }
    }
    Bl(e, h),
      f.start(
        Nu(h, f, g, e.shouldReduceMotion && rm.has(h) ? { type: !1 } : v, e, x)
      );
    const S = f.animation;
    S && u.push(S);
  }
  return (
    l &&
      Promise.all(u).then(() => {
        U.update(() => {
          l && X0(e, l);
        });
      }),
    u
  );
}
function Xl(e, t, n = {}) {
  var r;
  const i = qs(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(_m(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: h,
              staggerDirection: f,
            } = s;
            return y1(e, t, c + u, h, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else return Promise.all([o(), l(n.delay)]);
}
function y1(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(v1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            Xl(u, t, { ...s, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function v1(e, t) {
  return e.sortNodePosition(t);
}
function x1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Xl(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Xl(e, t, n);
  else {
    const i = typeof t == "function" ? qs(e, t, n.custom) : t;
    r = Promise.all(_m(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const w1 = Ja.length;
function Om(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Om(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < w1; n++) {
    const r = Ja[n],
      i = e.props[r];
    (Zr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const S1 = [...qa].reverse(),
  P1 = qa.length;
function k1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => x1(e, n, r)));
}
function T1(e) {
  let t = k1(e),
    n = ud(),
    r = !0;
  const i = (a) => (u, c) => {
    var h;
    const f = qs(
      e,
      c,
      a === "exit"
        ? (h = e.presenceContext) === null || h === void 0
          ? void 0
          : h.custom
        : void 0
    );
    if (f) {
      const { transition: g, transitionEnd: v, ...x } = f;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const { props: u } = e,
      c = Om(e.parent) || {},
      h = [],
      f = new Set();
    let g = {},
      v = 1 / 0;
    for (let S = 0; S < P1; S++) {
      const m = S1[S],
        p = n[m],
        y = u[m] !== void 0 ? u[m] : c[m],
        w = Zr(y),
        P = m === a ? p.isActive : null;
      P === !1 && (v = S);
      let N = y === c[m] && y !== u[m] && w;
      if (
        (N && r && e.manuallyAnimateOnMount && (N = !1),
        (p.protectedKeys = { ...g }),
        (!p.isActive && P === null) ||
          (!y && !p.prevProp) ||
          Ys(y) ||
          typeof y == "boolean")
      )
        continue;
      const E = C1(p.prevProp, y);
      let T = E || (m === a && p.isActive && !N && w) || (S > v && w),
        V = !1;
      const L = Array.isArray(y) ? y : [y];
      let re = L.reduce(i(m), {});
      P === !1 && (re = {});
      const { prevResolvedValues: vt = {} } = p,
        Wt = { ...vt, ...re },
        nr = (ee) => {
          (T = !0),
            f.has(ee) && ((V = !0), f.delete(ee)),
            (p.needsAnimating[ee] = !0);
          const j = e.getValue(ee);
          j && (j.liveStyle = !1);
        };
      for (const ee in Wt) {
        const j = re[ee],
          M = vt[ee];
        if (g.hasOwnProperty(ee)) continue;
        let R = !1;
        Fl(j) && Fl(M) ? (R = !Qp(j, M)) : (R = j !== M),
          R
            ? j != null
              ? nr(ee)
              : f.add(ee)
            : j !== void 0 && f.has(ee)
            ? nr(ee)
            : (p.protectedKeys[ee] = !0);
      }
      (p.prevProp = y),
        (p.prevResolvedValues = re),
        p.isActive && (g = { ...g, ...re }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!(N && E) || V) &&
          h.push(...L.map((ee) => ({ animation: ee, options: { type: m } })));
    }
    if (f.size) {
      const S = {};
      f.forEach((m) => {
        const p = e.getBaseTarget(m),
          y = e.getValue(m);
        y && (y.liveStyle = !0), (S[m] = p ?? null);
      }),
        h.push({ animation: S });
    }
    let x = !!h.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(h) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var g;
        return (g = f.animationState) === null || g === void 0
          ? void 0
          : g.setActive(a, u);
      }),
      (n[a].isActive = u);
    const h = o(a);
    for (const f in n) n[f].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = ud()), (r = !0);
    },
  };
}
function C1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Qp(t, e) : !1;
}
function Xt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ud() {
  return {
    animate: Xt(!0),
    whileInView: Xt(),
    whileHover: Xt(),
    whileTap: Xt(),
    whileDrag: Xt(),
    whileFocus: Xt(),
    exit: Xt(),
  };
}
class Ht {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class N1 extends Ht {
  constructor(t) {
    super(t), t.animationState || (t.animationState = T1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ys(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let E1 = 0;
class j1 extends Ht {
  constructor() {
    super(...arguments), (this.id = E1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const A1 = { animation: { Feature: N1 }, exit: { Feature: j1 } };
function ti(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function fi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const D1 = (e) => (t) => pu(t) && e(t, fi(t));
function Lr(e, t, n, r) {
  return ti(e, t, D1(n), r);
}
const cd = (e, t) => Math.abs(e - t);
function L1(e, t) {
  const n = cd(e.x, t.x),
    r = cd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Im {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = Oo(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          g = L1(h.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !g) return;
        const { point: v } = h,
          { timestamp: x } = ae;
        this.history.push({ ...v, timestamp: x });
        const { onStart: S, onMove: m } = this.handlers;
        f ||
          (S && S(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, f) => {
        (this.lastMoveEvent = h),
          (this.lastMoveEventInfo = _o(f, this.transformPagePoint)),
          U.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, f) => {
        this.end();
        const { onEnd: g, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = Oo(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : _o(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(h, S), v && v(h, S);
      }),
      !pu(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = fi(t),
      l = _o(o, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = ae;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Oo(l, this.history)),
      (this.removeListeners = di(
        Lr(this.contextWindow, "pointermove", this.handlePointerMove),
        Lr(this.contextWindow, "pointerup", this.handlePointerUp),
        Lr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), bt(this.updatePoint);
  }
}
function _o(e, t) {
  return t ? { point: t(e.point) } : e;
}
function dd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Oo({ point: e }, t) {
  return {
    point: e,
    delta: dd(e, Fm(t)),
    offset: dd(e, M1(t)),
    velocity: R1(t, 0.1),
  };
}
function M1(e) {
  return e[0];
}
function Fm(e) {
  return e[e.length - 1];
}
function R1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Fm(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ct(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = dt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const bm = 1e-4,
  V1 = 1 - bm,
  _1 = 1 + bm,
  zm = 0.01,
  O1 = 0 - zm,
  I1 = 0 + zm;
function Le(e) {
  return e.max - e.min;
}
function F1(e, t, n) {
  return Math.abs(e - t) <= n;
}
function fd(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = W(t.min, t.max, e.origin)),
    (e.scale = Le(n) / Le(t)),
    (e.translate = W(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= V1 && e.scale <= _1) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= O1 && e.translate <= I1) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Mr(e, t, n, r) {
  fd(e.x, t.x, n.x, r ? r.originX : void 0),
    fd(e.y, t.y, n.y, r ? r.originY : void 0);
}
function hd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Le(t));
}
function b1(e, t, n) {
  hd(e.x, t.x, n.x), hd(e.y, t.y, n.y);
}
function pd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Le(t));
}
function Rr(e, t, n) {
  pd(e.x, t.x, n.x), pd(e.y, t.y, n.y);
}
function z1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? W(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function md(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function B1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: md(e.x, n, i), y: md(e.y, t, r) };
}
function gd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function U1(e, t) {
  return { x: gd(e.x, t.x), y: gd(e.y, t.y) };
}
function $1(e, t) {
  let n = 0.5;
  const r = Le(e),
    i = Le(t);
  return (
    i > r
      ? (n = Gn(t.min, t.max - r, e.min))
      : r > i && (n = Gn(e.min, e.max - i, t.min)),
    gt(0, 1, n)
  );
}
function H1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ql = 0.35;
function W1(e = Ql) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ql),
    { x: yd(e, "left", "right"), y: yd(e, "top", "bottom") }
  );
}
function yd(e, t, n) {
  return { min: vd(e, t), max: vd(e, n) };
}
function vd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const xd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ln = () => ({ x: xd(), y: xd() }),
  wd = () => ({ min: 0, max: 0 }),
  Z = () => ({ x: wd(), y: wd() });
function _e(e) {
  return [e("x"), e("y")];
}
function Bm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function K1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function G1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Io(e) {
  return e === void 0 || e === 1;
}
function Yl({ scale: e, scaleX: t, scaleY: n }) {
  return !Io(e) || !Io(t) || !Io(n);
}
function qt(e) {
  return (
    Yl(e) ||
    Um(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Um(e) {
  return Sd(e.x) || Sd(e.y);
}
function Sd(e) {
  return e && e !== "0%";
}
function Ds(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Pd(e, t, n, r, i) {
  return i !== void 0 && (e = Ds(e, i, r)), Ds(e, n, r) + t;
}
function Zl(e, t = 0, n = 1, r, i) {
  (e.min = Pd(e.min, t, n, r, i)), (e.max = Pd(e.max, t, n, r, i));
}
function $m(e, { x: t, y: n }) {
  Zl(e.x, t.translate, t.scale, t.originPoint),
    Zl(e.y, n.translate, n.scale, n.originPoint);
}
const kd = 0.999999999999,
  Td = 1.0000000000001;
function X1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    (s = n[l]), (o = s.projectionDelta);
    const { visualElement: a } = s.options;
    (a && a.props.style && a.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Rn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), $m(e, o)),
      r && qt(s.latestValues) && Rn(e, s.latestValues));
  }
  t.x < Td && t.x > kd && (t.x = 1), t.y < Td && t.y > kd && (t.y = 1);
}
function Mn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Cd(e, t, n, r, i = 0.5) {
  const s = W(e.min, e.max, i);
  Zl(e, t, n, s, r);
}
function Rn(e, t) {
  Cd(e.x, t.x, t.scaleX, t.scale, t.originX),
    Cd(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Hm(e, t) {
  return Bm(G1(e.getBoundingClientRect(), t));
}
function Q1(e, t, n) {
  const r = Hm(e, n),
    { scroll: i } = t;
  return i && (Mn(r.x, i.offset.x), Mn(r.y, i.offset.y)), r;
}
const Wm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Y1 = new WeakMap();
class Z1 {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Z()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: h } = this.getProps();
        h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(fi(c).point);
      },
      s = (c, h) => {
        const { drag: f, dragPropagation: g, onDragStart: v } = this.getProps();
        if (
          f &&
          !g &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = $0(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          _e((S) => {
            let m = this.getAxisMotionValue(S).get() || 0;
            if (rt.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const y = p.layout.layoutBox[S];
                y && (m = Le(y) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[S] = m;
          }),
          v && U.postRender(() => v(c, h)),
          Bl(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (c, h) => {
        const {
          dragPropagation: f,
          dragDirectionLock: g,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: S } = h;
        if (g && this.currentDirection === null) {
          (this.currentDirection = q1(S)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, S),
          this.updateAxis("y", h.point, S),
          this.visualElement.render(),
          x && x(c, h);
      },
      l = (c, h) => this.stop(c, h),
      a = () =>
        _e((c) => {
          var h;
          return (
            this.getAnimationState(c) === "paused" &&
            ((h = this.getAxisMotionValue(c).animation) === null || h === void 0
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Im(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Wm(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && U.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Oi(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = z1(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && An(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = B1(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = W1(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        _e((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = H1(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !An(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = Q1(r, i.root, this.visualElement.getTransformPagePoint());
    let o = U1(i.layout.layoutBox, s);
    if (n) {
      const l = n(K1(o));
      (this.hasMutatedConstraints = !!l), l && (o = Bm(l));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = _e((c) => {
        if (!Oi(c, n, this.currentDirection)) return;
        let h = (a && a[c]) || {};
        o && (h = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...h,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Bl(this.visualElement, t), r.start(Nu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    _e((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    _e((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    _e((n) => {
      const { drag: r } = this.getProps();
      if (!Oi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - W(o, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!An(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _e((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = $1({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      _e((o) => {
        if (!Oi(o, t, null)) return;
        const l = this.getAxisMotionValue(o),
          { min: a, max: u } = this.constraints[o];
        l.set(W(a, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Y1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Lr(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        An(a) && a.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      U.read(r);
    const o = ti(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (_e((c) => {
              const h = this.getAxisMotionValue(c);
              h &&
                ((this.originPoint[c] += a[c].translate),
                h.set(h.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Ql,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l,
    };
  }
}
function Oi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function q1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class J1 extends Ht {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ae),
      (this.removeListeners = Ae),
      (this.controls = new Z1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ae);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Nd = (e) => (t, n) => {
  e && U.postRender(() => e(t, n));
};
class ew extends Ht {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ae);
  }
  onPointerDown(t) {
    this.session = new Im(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Wm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Nd(t),
      onStart: Nd(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && U.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Lr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const qi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ed(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const dr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Ed(e, t.target.x),
        r = Ed(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  tw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = zt.parse(e);
      if (i.length > 5) return r;
      const s = zt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + o] /= l), (i[1 + o] /= a);
      const u = W(l, a, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class nw extends k.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    P0(rw),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (qi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              U.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      tu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Km(e) {
  const [t, n] = Ep(),
    r = k.useContext(Ga);
  return d.jsx(nw, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(Op),
    isPresent: t,
    safeToRemove: n,
  });
}
const rw = {
  borderRadius: {
    ...dr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: dr,
  borderTopRightRadius: dr,
  borderBottomLeftRadius: dr,
  borderBottomRightRadius: dr,
  boxShadow: tw,
};
function iw(e, t, n) {
  const r = me(e) ? e : Jr(e);
  return r.start(Nu("", r, t, n)), r.animation;
}
function sw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const ow = (e, t) => e.depth - t.depth;
class lw {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    mu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    gu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(ow),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function aw(e, t) {
  const n = it.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (bt(r), e(s - t));
    };
  return U.read(r, !0), () => bt(r);
}
const Gm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  uw = Gm.length,
  jd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Ad = (e) => typeof e == "number" || D.test(e);
function cw(e, t, n, r, i, s) {
  i
    ? ((e.opacity = W(0, n.opacity !== void 0 ? n.opacity : 1, dw(r))),
      (e.opacityExit = W(t.opacity !== void 0 ? t.opacity : 1, 0, fw(r))))
    : s &&
      (e.opacity = W(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < uw; o++) {
    const l = `border${Gm[o]}Radius`;
    let a = Dd(t, l),
      u = Dd(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Ad(a) === Ad(u)
        ? ((e[l] = Math.max(W(jd(a), jd(u), r), 0)),
          (rt.test(u) || rt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r));
}
function Dd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const dw = Xm(0, 0.5, fm),
  fw = Xm(0.5, 0.95, Ae);
function Xm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Gn(e, t, r)));
}
function Ld(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ve(e, t) {
  Ld(e.x, t.x), Ld(e.y, t.y);
}
function Md(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Rd(e, t, n, r, i) {
  return (
    (e -= t), (e = Ds(e, 1 / n, r)), i !== void 0 && (e = Ds(e, 1 / i, r)), e
  );
}
function hw(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (rt.test(t) &&
      ((t = parseFloat(t)), (t = W(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let l = W(s.min, s.max, r);
  e === s && (l -= t),
    (e.min = Rd(e.min, t, n, l, i)),
    (e.max = Rd(e.max, t, n, l, i));
}
function Vd(e, t, [n, r, i], s, o) {
  hw(e, t[n], t[r], t[i], t.scale, s, o);
}
const pw = ["x", "scaleX", "originX"],
  mw = ["y", "scaleY", "originY"];
function _d(e, t, n, r) {
  Vd(e.x, t, pw, n ? n.x : void 0, r ? r.x : void 0),
    Vd(e.y, t, mw, n ? n.y : void 0, r ? r.y : void 0);
}
function Od(e) {
  return e.translate === 0 && e.scale === 1;
}
function Qm(e) {
  return Od(e.x) && Od(e.y);
}
function Id(e, t) {
  return e.min === t.min && e.max === t.max;
}
function gw(e, t) {
  return Id(e.x, t.x) && Id(e.y, t.y);
}
function Fd(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Ym(e, t) {
  return Fd(e.x, t.x) && Fd(e.y, t.y);
}
function bd(e) {
  return Le(e.x) / Le(e.y);
}
function zd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class yw {
  constructor() {
    this.members = [];
  }
  add(t) {
    mu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (gu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: h,
      rotateY: f,
      skewX: g,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      h && (r += `rotateX(${h}deg) `),
      f && (r += `rotateY(${f}deg) `),
      g && (r += `skewX(${g}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const Jt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  wr = typeof window < "u" && window.MotionDebug !== void 0,
  Fo = ["", "X", "Y", "Z"],
  xw = { visibility: "hidden" },
  Bd = 1e3;
let ww = 0;
function bo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Zm(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = sm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Zm(r);
}
function qm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      (this.id = ww++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            wr &&
              (Jt.totalNodes =
                Jt.resolvedTargetDeltas =
                Jt.recalculatedProjection =
                  0),
            this.nodes.forEach(kw),
            this.nodes.forEach(jw),
            this.nodes.forEach(Aw),
            this.nodes.forEach(Tw),
            wr && window.MotionDebug.record(Jt);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new lw());
    }
    addEventListener(o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new yu()),
        this.eventHandlers.get(o).add(l)
      );
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = sw(o)), (this.instance = o);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let h;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            h && h(),
            (h = aw(f, 250)),
            qi.hasAnimatedSinceResize &&
              ((qi.hasAnimatedSinceResize = !1), this.nodes.forEach($d));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: h,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: g,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || Vw,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } =
                  c.getProps(),
                p = !this.targetLayout || !Ym(this.targetLayout, v) || g,
                y = !f && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, y);
                const w = { ...du(x, "layout"), onPlay: S, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                f || $d(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        bt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Dw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Zm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        (h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ud);
        return;
      }
      this.isUpdating || this.nodes.forEach(Nw),
        (this.isUpdating = !1),
        this.nodes.forEach(Ew),
        this.nodes.forEach(Sw),
        this.nodes.forEach(Pw),
        this.clearAllSnapshots();
      const l = it.now();
      (ae.delta = gt(0, 1e3 / 60, l - ae.timestamp)),
        (ae.timestamp = l),
        (ae.isProcessing = !0),
        Ao.update.process(ae),
        Ao.preRender.process(ae),
        Ao.render.process(ae),
        (ae.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), tu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Cw), this.sharedNodes.forEach(Lw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        U.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      U.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Z()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !Qm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (l || qt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        o && (a = this.removeTransform(a)),
        _w(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: l } = this.options;
      if (!l) return Z();
      const a = l.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(Ow)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Mn(a.x, c.offset.x), Mn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Z();
      if (
        (Ve(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: h, options: f } = c;
        c !== this.root &&
          h &&
          f.layoutScroll &&
          (h.wasRoot && Ve(a, o), Mn(a.x, h.offset.x), Mn(a.y, h.offset.y));
      }
      return a;
    }
    applyTransform(o, l = !1) {
      const a = Z();
      Ve(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Rn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          qt(c.latestValues) && Rn(a, c.latestValues);
      }
      return qt(this.latestValues) && Rn(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = Z();
      Ve(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !qt(u.latestValues)) continue;
        Yl(u.latestValues) && u.updateSnapshot();
        const c = Z(),
          h = u.measurePageBox();
        Ve(c, h),
          _d(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return qt(this.latestValues) && _d(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: h, layoutId: f } = this.options;
      if (!(!this.layout || !(h || f))) {
        if (
          ((this.resolvedRelativeTargetAt = ae.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Z()),
              (this.relativeTargetOrigin = Z()),
              Rr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              Ve(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Z()), (this.targetWithTransforms = Z())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                b1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ve(this.target, this.layout.layoutBox),
                $m(this.target, this.targetDelta))
              : Ve(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Z()),
                (this.relativeTargetOrigin = Z()),
                Rr(this.relativeTargetOrigin, this.target, g.target),
                Ve(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          wr && Jt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Yl(this.parent.latestValues) ||
          Um(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ae.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || h))
      )
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        g = this.treeScale.y;
      X1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = Z()));
      const { target: v } = l;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Md(this.prevProjectionDelta.x, this.projectionDelta.x),
          Md(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Mr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== g ||
          !zd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !zd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        wr && Jt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var l;
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        o)
      ) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Ln()),
        (this.projectionDelta = Ln()),
        (this.projectionDeltaWithTransform = Ln());
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        h = Ln();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const f = Z(),
        g = a ? a.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = g !== v,
        S = this.getStack(),
        m = !S || S.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(Rw));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (w) => {
        const P = w / 1e3;
        Hd(h.x, o.x, P),
          Hd(h.y, o.y, P),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Rr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Mw(this.relativeTarget, this.relativeTargetOrigin, f, P),
            y && gw(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = Z()),
            Ve(y, this.relativeTarget)),
          x &&
            ((this.animationValues = c), cw(c, u, this.latestValues, P, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (bt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = U.update(() => {
          (qi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = iw(0, Bd, {
              ...o,
              onUpdate: (l) => {
                this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Bd),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!l || !a || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Jm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || Z();
          const h = Le(this.layout.layoutBox.x);
          (a.x.min = o.target.x.min), (a.x.max = a.x.min + h);
          const f = Le(this.layout.layoutBox.y);
          (a.y.min = o.target.y.min), (a.y.max = a.y.min + f);
        }
        Ve(l, a),
          Rn(l, c),
          Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new yw()),
        this.sharedNodes.get(o).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let l = !1;
      const { latestValues: a } = o;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && bo("z", o, u, this.animationValues);
      for (let c = 0; c < Fo.length; c++)
        bo(`rotate${Fo[c]}`, o, u, this.animationValues),
          bo(`skew${Fo[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return xw;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Yi(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Yi(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !qt(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const f = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = vw(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: g, y: v } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`),
        h.animationValues
          ? (u.opacity =
              h === this
                ? (a =
                    (l = f.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              h === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const x in Cs) {
        if (f[x] === void 0) continue;
        const { correct: S, applyTo: m } = Cs[x],
          p = u.transform === "none" ? f[x] : S(f[x], h);
        if (m) {
          const y = m.length;
          for (let w = 0; w < y; w++) u[m[w]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            h === this
              ? Yi(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Ud),
        this.root.sharedNodes.clear();
    }
  };
}
function Sw(e) {
  e.updateLayout();
}
function Pw(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? _e((h) => {
          const f = o ? n.measuredBox[h] : n.layoutBox[h],
            g = Le(f);
          (f.min = r[h].min), (f.max = f.min + g);
        })
      : Jm(s, n.layoutBox, r) &&
        _e((h) => {
          const f = o ? n.measuredBox[h] : n.layoutBox[h],
            g = Le(r[h]);
          (f.max = f.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[h].max = e.relativeTarget[h].min + g));
        });
    const l = Ln();
    Mr(l, r, n.layoutBox);
    const a = Ln();
    o ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox);
    const u = !Qm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: g } = h;
        if (f && g) {
          const v = Z();
          Rr(v, n.layoutBox, f.layoutBox);
          const x = Z();
          Rr(x, r, g.layoutBox),
            Ym(v, x) || (c = !0),
            h.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = h));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function kw(e) {
  wr && Jt.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Tw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Cw(e) {
  e.clearSnapshot();
}
function Ud(e) {
  e.clearMeasurements();
}
function Nw(e) {
  e.isLayoutDirty = !1;
}
function Ew(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function $d(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function jw(e) {
  e.resolveTargetDelta();
}
function Aw(e) {
  e.calcProjection();
}
function Dw(e) {
  e.resetSkewAndRotation();
}
function Lw(e) {
  e.removeLeadSnapshot();
}
function Hd(e, t, n) {
  (e.translate = W(t.translate, 0, n)),
    (e.scale = W(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Wd(e, t, n, r) {
  (e.min = W(t.min, n.min, r)), (e.max = W(t.max, n.max, r));
}
function Mw(e, t, n, r) {
  Wd(e.x, t.x, n.x, r), Wd(e.y, t.y, n.y, r);
}
function Rw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Vw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Kd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Gd = Kd("applewebkit/") && !Kd("chrome/") ? Math.round : Ae;
function Xd(e) {
  (e.min = Gd(e.min)), (e.max = Gd(e.max));
}
function _w(e) {
  Xd(e.x), Xd(e.y);
}
function Jm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !F1(bd(t), bd(n), 0.2))
  );
}
function Ow(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const Iw = qm({
    attachResizeListener: (e, t) => ti(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  zo = { current: void 0 },
  eg = qm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!zo.current) {
        const e = new Iw({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (zo.current = e);
      }
      return zo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Fw = {
    pan: { Feature: ew },
    drag: { Feature: J1, ProjectionNode: eg, MeasureLayout: Km },
  };
function Qd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && U.postRender(() => s(t, fi(t)));
}
class bw extends Ht {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = F0(
        t,
        (n) => (Qd(this.node, n, "Start"), (r) => Qd(this.node, r, "End"))
      ));
  }
  unmount() {}
}
class zw extends Ht {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = di(
      ti(this.node.current, "focus", () => this.onFocus()),
      ti(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Yd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && U.postRender(() => s(t, fi(t)));
}
class Bw extends Ht {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = U0(
        t,
        (n) => (
          Yd(this.node, n, "Start"),
          (r, { success: i }) => Yd(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const ql = new WeakMap(),
  Bo = new WeakMap(),
  Uw = (e) => {
    const t = ql.get(e.target);
    t && t(e);
  },
  $w = (e) => {
    e.forEach(Uw);
  };
function Hw({ root: e, ...t }) {
  const n = e || document;
  Bo.has(n) || Bo.set(n, {});
  const r = Bo.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver($w, { root: e, ...t })), r[i];
}
function Ww(e, t, n) {
  const r = Hw(t);
  return (
    ql.set(e, n),
    r.observe(e),
    () => {
      ql.delete(e), r.unobserve(e);
    }
  );
}
const Kw = { some: 0, all: 1 };
class Gw extends Ht {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Kw[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(),
          f = u ? c : h;
        f && f(a);
      };
    return Ww(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Xw(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Xw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Qw = {
    inView: { Feature: Gw },
    tap: { Feature: Bw },
    focus: { Feature: zw },
    hover: { Feature: bw },
  },
  Yw = { layout: { ProjectionNode: eg, MeasureLayout: Km } },
  Ls = { current: null },
  Eu = { current: !1 };
function tg() {
  if (((Eu.current = !0), !!Ya))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ls.current = e.matches);
      e.addListener(t), t();
    } else Ls.current = !1;
}
const Zw = [...Nm, he, zt],
  qw = (e) => Zw.find(Cm(e)),
  Zd = new WeakMap();
function Jw(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (me(i)) e.addValue(r, i);
    else if (me(s)) e.addValue(r, Jr(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Jr(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const qd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class eS {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = ku),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const g = it.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), U.render(this.render, !1, !0));
      });
    const { latestValues: a, renderState: u, onUpdate: c } = o;
    (this.onUpdate = c),
      (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Zs(n)),
      (this.isVariantNode = Vp(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const g in f) {
      const v = f[g];
      a[g] !== void 0 && me(v) && v.set(a[g], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Zd.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Eu.current || tg(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ls.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Zd.delete(this.current),
      this.projection && this.projection.unmount(),
      bt(this.notifyUpdate),
      bt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = mn.has(t),
      i = n.on("change", (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && U.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Xn) {
      const n = Xn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Z();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < qd.length; r++) {
      const i = qd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Jw(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Jr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (km(i) || pm(i))
          ? (i = parseFloat(i))
          : !qw(i) && zt.test(n) && (i = wm(t, n)),
        this.setBaseTarget(t, me(i) ? i.get() : i)),
      me(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = ru(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !me(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new yu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class ng extends eS {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Em);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    me(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function tS(e) {
  return window.getComputedStyle(e);
}
class nS extends ng {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = $p);
  }
  readValueFromInstance(t, n) {
    if (mn.has(n)) {
      const r = Pu(n);
      return (r && r.default) || 0;
    } else {
      const r = tS(t),
        i = (zp(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Hm(t, n);
  }
  build(t, n, r) {
    ou(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return cu(t, n, r);
  }
}
class rS extends ng {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Z);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (mn.has(n)) {
      const r = Pu(n);
      return (r && r.default) || 0;
    }
    return (n = Hp.has(n) ? n : eu(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Gp(t, n, r);
  }
  build(t, n, r) {
    lu(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Wp(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = uu(t.tagName)), super.mount(t);
  }
}
const iS = (e, t) =>
    nu(e) ? new rS(t) : new nS(t, { allowProjection: e !== k.Fragment }),
  sS = L0({ ...A1, ...Qw, ...Fw, ...Yw }, iS),
  O = Kv(sS);
function oS() {
  !Eu.current && tg();
  const [e] = k.useState(Ls.current);
  return e;
}
const kt = !1,
  rg = "https://api.ponscat.com",
  lS = "ETH",
  aS = {
    name: "Pons Cat",
    ticker: "PONSCAT",
    contractAddress: "0x7428aa3cd53902998656d771ebf0c85e7981ab92",
    chain: "Robinhood",
    explorerTxBase: "https://robinhoodchain.blockscout.com/tx/",
    explorerAddressBase: "https://robinhoodchain.blockscout.com/address/",
    twitterUrl: "https://x.com/ponscatcoin",
    twitterHandle: "@ponscat_",
  };
let Qt = 1337;
function ni() {
  return (
    (Qt ^= Qt << 13),
    (Qt ^= Qt >> 17),
    (Qt ^= Qt << 5),
    ((Qt >>> 0) % 1e5) / 1e5
  );
}
const Jd = "0123456789abcdef",
  ef = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function uS() {
  let e = "";
  for (let t = 0; t < 44; t++) e += ef[Math.floor(ni() * ef.length)];
  return e;
}
function tf() {
  let e = "";
  for (let t = 0; t < 64; t++) e += Jd[Math.floor(ni() * Jd.length)];
  return e;
}
function cS() {
  const e = [420, 690, 1337, 2500, 5e3, 8888, 12e3, 25e3, 42069];
  return e[Math.floor(ni() * e.length)] + Math.floor(ni() * 500);
}
function ig(e = 0) {
  return {
    id: tf().slice(0, 12),
    wallet: uS(),
    amount: cS(),
    tx: tf(),
    timestamp: Date.now() - e,
  };
}
function dS(e = 40) {
  const t = [];
  for (let n = 0; n < e; n++) t.push(ig(n * 47e3 + Math.floor(ni() * 2e4)));
  return t;
}
const fS = {
    totalHolders: 18432,
    totalDistributed: 4820500,
    creatorFeesClaimed: 312.74,
    feesCurrency: "SOL",
    totalBurned: 275e4,
    marketCap: 69e5,
    priceUsd: 42e-5,
  },
  hS = {
    tagline:
      "Every hero needs an origin story. This one starts with a cat who refused to bleed.",
    paragraphs: [
      "In a chain overrun by rug-pulls and paper-handed villains, one cat rose from the red candles. She didn't just survive the dip — she pounced straight through it, claws first.",
      "PONSCAT is a rewards token with a heart of gold and nine lives to spare. Every trade feeds the community war-chest, and every few minutes the vault erupts, raining $PONS onto the diamond-handed faithful who never sold.",
      "No promises of the moon. Just a cat, a mission, and a distribution engine that never sleeps. HODL up, hero — the next drop is already loading.",
    ],
  },
  fr = (e) => new Promise((t) => setTimeout(t, e));
async function Ji(e, t = {}) {
  const n = await fetch(`${rg}${e}`, {
    headers: t.body ? { "Content-Type": "application/json" } : void 0,
    ...t,
  });
  if (!n.ok) throw new Error(`API ${e} failed: ${n.status}`);
  return n.json();
}
function pS(e, t = null) {
  return {
    totalHolders: t ?? e.rewardHolders ?? 0,
    totalDistributed: e.rewardsDistributed ?? 0,
    creatorFeesClaimed: e.totalCreatorFeesClaimed ?? 0,
    feesCurrency: lS,
    totalBurned: e.tokensBurned ?? 0,
    marketCap: e.marketCap ?? null,
    priceUsd: null,
  };
}
async function mS() {
  try {
    const t = ((await Ji("/api/cycles?limit=10&offset=0")).items || []).find(
      (n) => n.total_holders != null
    );
    return t ? t.total_holders : null;
  } catch {
    return null;
  }
}
function nf(e) {
  return {
    id: e.id != null ? String(e.id) : e.signature,
    wallet: e.recipient,
    amount: e.amount_ui ?? 0,
    tx: e.signature ?? "",
    timestamp: Date.parse(e.created_at) || Date.now(),
  };
}
let Uo = dS(40);
const Tt = {
    async getToken() {
      return kt && (await fr(180)), { ...aS };
    },
    async getStats() {
      if (kt) return await fr(260), { ...fS };
      const [e, t] = await Promise.all([Ji("/stats"), mS()]);
      return pS(e, t);
    },
    async getNarrative() {
      return kt && (await fr(120)), { ...hS };
    },
    async getDistributions({ limit: e = 50, search: t = "" } = {}) {
      if (kt) {
        await fr(220);
        let s = Uo;
        if (t) {
          const o = t.toLowerCase();
          s = s.filter((l) => l.wallet.toLowerCase().includes(o));
        }
        return { rows: s.slice(0, e), total: s.length };
      }
      const n = t ? Math.min(500, Math.max(e * 4, 100)) : e,
        r = await Ji(`/api/airdrops?limit=${n}&offset=0`);
      let i = (r.items || []).filter((s) => s.status === "ok").map(nf);
      if (t) {
        const s = t.toLowerCase();
        i = i.filter(
          (o) =>
            o.wallet.toLowerCase().includes(s) || o.tx.toLowerCase().includes(s)
        );
      }
      return { rows: i.slice(0, e), total: t ? i.length : r.total ?? i.length };
    },
    async getNextDrop() {
      if (kt) {
        await fr(90);
        const i = 300,
          s = Math.floor(Date.now() / 1e3),
          o = i - (s % i);
        return { cadenceSeconds: i, secondsLeft: o };
      }
      const {
          serverTime: e,
          nextCycleAt: t,
          intervalSec: n,
        } = await Ji("/countdown"),
        r = Math.max(0, Math.round(((t ?? e) - (e ?? Date.now())) / 1e3));
      return { cadenceSeconds: n || 60, secondsLeft: r };
    },
    _mockPushDrop() {
      const e = ig(0);
      return (Uo = [e, ...Uo].slice(0, 120)), e;
    },
    subscribe({ onDrop: e } = {}) {
      if (kt || typeof EventSource > "u") return () => {};
      const t = new EventSource(`${rg}/api/stream`);
      return (
        t.addEventListener("airdrop", (n) => {
          try {
            e == null || e(nf(JSON.parse(n.data)));
          } catch {}
        }),
        () => t.close()
      );
    },
  },
  sg = k.createContext(null);
function gS({ children: e }) {
  const t = k.useCallback(() => {}, []),
    n = { muted: !0, musicOn: !1, toggleMute: t, toggleMusic: t, play: t };
  return d.jsx(sg.Provider, { value: n, children: e });
}
function tr() {
  const e = k.useContext(sg);
  if (!e) throw new Error("useSound must be used within SoundProvider");
  return e;
}
function Fe({
  children: e,
  color: t = "#6fae86",
  text: n = "#ffffff",
  className: r = "",
  spin: i = !1,
  id: s = "k",
}) {
  const u = [];
  for (let g = 0; g < 12 * 2; g++) {
    const v = g % 2 === 0 ? 50 : 38,
      x = (Math.PI / 12) * g - Math.PI / 2;
    u.push(`${50 + v * Math.cos(x)},${50 + v * Math.sin(x)}`);
  }
  const c = String(e ?? ""),
    h = c.length >= 5 ? 15 : c.length >= 4 ? 19 : 24,
    f = `kapow-${s}-${c || "x"}`;
  return d.jsxs("svg", {
    viewBox: "0 0 100 100",
    className: `drop-shadow-[0_6px_14px_rgba(63,114,86,0.4)] ${
      i ? "animate-spin-slow" : ""
    } ${r}`,
    children: [
      d.jsx("defs", {
        children: d.jsxs("radialGradient", {
          id: f,
          cx: "0.4",
          cy: "0.32",
          r: "0.7",
          children: [
            d.jsx("stop", {
              offset: "0",
              stopColor: "#ffffff",
              stopOpacity: "0.85",
            }),
            d.jsx("stop", {
              offset: "0.45",
              stopColor: t,
              stopOpacity: "0.95",
            }),
            d.jsx("stop", { offset: "1", stopColor: "#3f7256" }),
          ],
        }),
      }),
      d.jsx("polygon", {
        points: u.join(" "),
        fill: `url(#${f})`,
        stroke: "rgba(255,255,255,0.85)",
        strokeWidth: "2.5",
        strokeLinejoin: "round",
      }),
      d.jsx("text", {
        x: "50",
        y: "53",
        textAnchor: "middle",
        dominantBaseline: "middle",
        fontFamily: "Bangers, cursive",
        fontSize: h,
        fill: n,
        style: { letterSpacing: "0.5px", textTransform: "uppercase" },
        children: c,
      }),
    ],
  });
}
function Xe({ id: e = "p", src: t = "/mascot.png", className: n = "" }) {
  return d.jsx("img", {
    src: t,
    alt: "",
    "aria-hidden": !0,
    className: `object-contain ${n}`,
  });
}
const rf = 3,
  sf = 0.72,
  $o = 0.3;
function yS({ onDone: e }) {
  const { play: t } = tr(),
    [n, r] = k.useState(!1),
    i = k.useRef(!1),
    s = () => {
      i.current || ((i.current = !0), e == null || e());
    },
    o = () => {
      r((l) => {
        if (l) return l;
        for (let u = 0; u < rf; u++)
          setTimeout(() => t("pageFlip"), u * $o * 1e3);
        const a = (rf - 1) * $o + sf + 0.25;
        return setTimeout(s, a * 1e3), !0;
      });
    };
  return (
    k.useEffect(() => {
      const l = document.body.style.overflow;
      return (
        (document.body.style.overflow = "hidden"),
        () => {
          document.body.style.overflow = l;
        }
      );
    }, []),
    d.jsxs(O.div, {
      onClick: o,
      className:
        "fixed inset-0 z-[100] grid place-items-center bg-gradient-to-br from-glass-mist via-glass-haze to-glass-mint overflow-hidden select-none",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4 },
      children: [
        d.jsx("div", {
          className:
            "blob w-[36rem] h-[36rem] -left-40 -top-32 bg-glass-sage animate-drift-blob",
        }),
        d.jsx("div", {
          className:
            "blob w-[32rem] h-[32rem] -right-36 -bottom-28 bg-glass-mint animate-drift-blob [animation-delay:2s]",
        }),
        d.jsx("div", {
          className:
            "blob w-[26rem] h-[26rem] left-[45%] top-[55%] bg-glass-green animate-drift-blob [animation-delay:4s]",
        }),
        d.jsx(Fe, {
          id: "intro-a",
          color: "#6fae86",
          className:
            "hidden sm:block absolute left-[6%] top-[16%] w-20 h-20 md:w-28 md:h-28 animate-float pointer-events-none",
          children: "SHINE!",
        }),
        d.jsx(Fe, {
          id: "intro-b",
          color: "#9ecbad",
          className:
            "hidden sm:block absolute right-[7%] top-[20%] w-20 h-20 md:w-28 md:h-28 animate-float [animation-delay:.6s] pointer-events-none",
          children: "GLOW!",
        }),
        d.jsx(Fe, {
          id: "intro-c",
          color: "#4f8c66",
          className:
            "hidden lg:block absolute right-[3%] top-[54%] w-14 h-14 md:w-20 md:h-20 animate-float [animation-delay:1.5s] pointer-events-none",
          children: "DROP!",
        }),
        d.jsx(Fe, {
          id: "intro-m1",
          color: "#6fae86",
          className:
            "sm:hidden absolute left-3 top-16 w-14 h-14 animate-float pointer-events-none",
          children: "SHINE!",
        }),
        d.jsx(Fe, {
          id: "intro-m2",
          color: "#9ecbad",
          className:
            "sm:hidden absolute right-4 top-24 w-12 h-12 animate-float [animation-delay:.5s] pointer-events-none",
          children: "GLOW!",
        }),
        d.jsxs("div", {
          className: "relative grid place-items-center gap-6",
          children: [
            d.jsxs(O.div, {
              initial: { scale: 0.15, rotate: -12, opacity: 0 },
              animate: { scale: 1, rotate: 0, opacity: 1 },
              transition: { type: "spring", stiffness: 130, damping: 12 },
              className: "relative w-[300px] sm:w-[360px] aspect-[3/4]",
              style: { perspective: 1600 },
              children: [
                d.jsxs("div", {
                  className:
                    "absolute inset-0 rounded-[10px] glass shadow-glass-lg grid place-items-center overflow-hidden",
                  children: [
                    d.jsx(Fe, {
                      id: "intro-go",
                      color: "#6fae86",
                      className: "w-40 h-40 animate-pop",
                      children: "GO!",
                    }),
                    d.jsx("span", {
                      className:
                        "absolute bottom-8 font-display text-xl text-glass-jade tracking-wide text-center px-4",
                      children: "✦ HOLD PONSCAT · EARN $PONS ✦",
                    }),
                  ],
                }),
                lf.map((l, a) =>
                  d.jsxs(
                    O.div,
                    {
                      custom: a,
                      initial: "closed",
                      animate: n ? "flip" : "closed",
                      variants: {
                        closed: { rotateY: 0 },
                        flip: (u) => ({
                          rotateY: -178,
                          transition: {
                            delay: u * $o,
                            duration: sf,
                            ease: "easeInOut",
                          },
                        }),
                      },
                      style: {
                        transformOrigin: "left center",
                        transformStyle: n ? "preserve-3d" : "flat",
                        zIndex: lf.length - a,
                      },
                      className: "absolute inset-0",
                      children: [
                        d.jsx("div", {
                          className:
                            "absolute inset-0 rounded-[10px] overflow-hidden border border-white/60 shadow-glass-lg",
                          style: {
                            backfaceVisibility: n ? "hidden" : "visible",
                          },
                          children: l.front,
                        }),
                        n &&
                          d.jsx("div", {
                            className:
                              "absolute inset-0 rounded-[10px] overflow-hidden glass grid place-items-center",
                            style: {
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                            },
                            children: d.jsx("span", {
                              className:
                                "font-display text-6xl text-glass-jade/15",
                              children: "✦",
                            }),
                          }),
                      ],
                    },
                    l.key
                  )
                ),
              ],
            }),
            !n &&
              d.jsx(O.div, {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: [0, -6, 0] },
                transition: {
                  opacity: { delay: 0.6, duration: 0.4 },
                  y: {
                    delay: 0.6,
                    duration: 1.6,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                  },
                },
                className: "pointer-events-none",
                children: d.jsx("span", {
                  className:
                    "inline-block font-display text-lg sm:text-2xl tracking-widest text-white bg-glass-jade rounded-full px-5 sm:px-7 py-2 shadow-glass whitespace-nowrap",
                  children: "TAP TO REVEAL ▸",
                }),
              }),
          ],
        }),
        d.jsx("button", {
          onClick: (l) => {
            l.stopPropagation(), s();
          },
          className:
            "absolute top-5 right-5 chip hover:-translate-y-0.5 transition-transform",
          children: "Skip ▸▸",
        }),
      ],
    })
  );
}
const vS = "/mascot.png";
function xS() {
  const [e, t] = k.useState(!0);
  return d.jsxs("div", {
    className:
      "relative w-full h-full overflow-hidden bg-gradient-to-br from-glass-mint via-glass-sage to-glass-green",
    children: [
      e
        ? d.jsx("div", {
            className: "absolute inset-0",
            style: {
              background:
                "radial-gradient(circle at 50% 40%, rgba(215,239,224,0.55), rgba(215,239,224,0) 62%)",
            },
          })
        : d.jsxs(d.Fragment, {
            children: [
              d.jsx("div", {
                className: "absolute inset-0",
                style: {
                  background:
                    "radial-gradient(circle at 50% 40%, rgba(215,239,224,0.55), rgba(215,239,224,0) 62%)",
                },
              }),
              d.jsx(Xe, {
                id: "cover-mark-l",
                className:
                  "absolute left-1 top-[42%] w-14 opacity-20 -rotate-12",
              }),
              d.jsx(Xe, {
                id: "cover-mark-r",
                className:
                  "absolute right-1 top-[42%] w-14 opacity-20 rotate-12",
              }),
              d.jsx(Xe, {
                id: "cover-mark-tl",
                className:
                  "absolute left-4 top-[26%] w-8 opacity-[0.16] rotate-6",
              }),
              d.jsx(Xe, {
                id: "cover-mark-tr",
                className:
                  "absolute right-4 top-[26%] w-8 opacity-[0.16] -rotate-6",
              }),
            ],
          }),
      d.jsxs("div", {
        className: "relative z-10 flex h-full flex-col",
        children: [
          d.jsxs("div", {
            className:
              "flex items-center justify-between px-3 py-2 bg-glass-jade/90 text-white shrink-0",
            children: [
              d.jsx("span", {
                className: "font-display tracking-widest text-base sm:text-lg",
                children: "PONS CAT",
              }),
              d.jsx("span", {
                className:
                  "chip bg-glass-green text-white !py-0.5 !px-2 !text-[10px] sm:!text-xs",
                children: "$PONSCAT",
              }),
            ],
          }),
          d.jsxs("div", {
            className: "flex-1 flex flex-col min-h-0 px-3 pt-2 pb-1",
            children: [
              d.jsx("div", {
                className: "shrink-0 text-center",
                children: d.jsx("h1", {
                  className:
                    "glass-title text-5xl sm:text-6xl leading-[0.85] whitespace-nowrap",
                  children: "PONS CAT",
                }),
              }),
              !e &&
                d.jsx("div", {
                  className: "flex-1 grid place-items-center min-h-0 py-2",
                  children: d.jsxs("div", {
                    className: "relative grid place-items-center",
                    children: [
                      d.jsx("div", {
                        className: "absolute w-[135%] h-[135%] rounded-full",
                        style: {
                          background:
                            "radial-gradient(circle, rgba(215,239,224,0.6), rgba(215,239,224,0) 62%)",
                        },
                      }),
                      d.jsx("div", {
                        className:
                          "relative w-24 h-24 sm:w-36 sm:h-36 rounded-full glass grid place-items-center overflow-hidden shadow-glass-lg",
                        children: d.jsx(Xe, {
                          id: "cover-emblem",
                          className: "w-[70%] h-[70%]",
                        }),
                      }),
                    ],
                  }),
                }),
              e &&
                d.jsx("div", {
                  className: "flex-1 grid place-items-center min-h-0 py-2",
                  children: d.jsx("img", {
                    src: vS,
                    alt: "Pons Cat",
                    onError: () => t(!1),
                    className:
                      "max-h-[75%] max-w-[70%] w-auto object-contain drop-shadow-[0_12px_24px_rgba(63,114,86,0.35)] translate-x-5",
                  }),
                }),
              d.jsxs("div", {
                className: "shrink-0 flex flex-col items-center gap-1.5 pb-1",
                children: [
                  d.jsx("span", {
                    className:
                      "bg-glass-green text-white font-display text-base sm:text-xl tracking-wide rounded-md px-3 sm:px-4 py-1 shadow-glass-sm -rotate-2 whitespace-nowrap",
                    children: "✦ Rewards Token ✦",
                  }),
                  d.jsx("span", {
                    className:
                      "bg-white/85 text-glass-jade font-comic font-bold text-[10px] sm:text-xs rounded px-2 py-0.5 rotate-1 text-center",
                    children: "Hold to earn · paid automatically",
                  }),
                ],
              }),
            ],
          }),
          d.jsxs("div", {
            className: "shrink-0 flex items-end justify-between px-3 pb-2",
            children: [
              d.jsx("span", {
                className:
                  "font-comic font-bold text-glass-jade text-[11px] sm:text-xs bg-white/80 rounded px-1.5",
                children: "Rewards for holders",
              }),
              d.jsx("div", {
                className: "flex gap-[2px] bg-white rounded px-1 py-1",
                children: [2, 1, 3, 1, 2, 1, 1, 3, 2, 1].map((n, r) =>
                  d.jsx(
                    "span",
                    {
                      className: "bg-glass-jade",
                      style: { width: n, height: 16 },
                    },
                    r
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function of({
  bg: e,
  kicker: t,
  title: n,
  word: r,
  wordColor: i,
  wordText: s = "#fff",
  icon: o,
}) {
  return d.jsxs("div", {
    className: `relative w-full h-full ${e} grid place-items-center text-center px-5`,
    children: [
      d.jsx(Fe, {
        color: i,
        text: s,
        className: "absolute top-6 right-4 w-20 h-20 animate-float",
        children: r,
      }),
      d.jsxs("div", {
        className: "relative",
        children: [
          d.jsx("span", { className: "chip mb-3", children: t }),
          d.jsx("div", { className: "text-7xl mb-3", children: o }),
          d.jsx("h2", {
            className:
              "comic-title comic-title-lg text-white text-4xl leading-tight",
            children: n,
          }),
        ],
      }),
      d.jsx("span", {
        className:
          "absolute bottom-6 font-display text-white/80 text-lg tracking-widest",
        children: "▸ turn the page ▸",
      }),
    ],
  });
}
const lf = [
    { key: "cover", front: d.jsx(xS, {}) },
    {
      key: "hero",
      front: d.jsx(of, {
        bg: "bg-gradient-to-br from-glass-sage to-glass-green",
        kicker: "Rewards Token",
        title: "HOLD TO EARN REWARDS",
        word: "EARN",
        wordColor: "#9ecbad",
        icon: "💎",
      }),
    },
    {
      key: "mission",
      front: d.jsx(of, {
        bg: "bg-gradient-to-br from-glass-green to-glass-deep",
        kicker: "Every 5 Minutes",
        title: "$PONS PAID AUTOMATICALLY",
        word: "$PONS",
        wordColor: "#6fae86",
        icon: "✨",
      }),
    },
  ],
  af = {
    green: "text-white bg-gradient-to-b from-glass-green to-glass-jade",
    jade: "text-white bg-gradient-to-b from-glass-deep to-glass-jade",
    mint: "text-glass-jade bg-gradient-to-b from-white/70 to-glass-mint/80",
    white: "text-glass-jade bg-gradient-to-b from-white/75 to-white/45",
    yellow: "text-glass-jade bg-gradient-to-b from-white/70 to-glass-mint/80",
    red: "text-white bg-gradient-to-b from-glass-green to-glass-jade",
    blue: "text-white bg-gradient-to-b from-glass-deep to-glass-jade",
  };
function ri({
  as: e = "button",
  variant: t = "green",
  sound: n = "click",
  className: r = "",
  onClick: i,
  children: s,
  ...o
}) {
  const { play: l } = tr(),
    a = e,
    u = (c) => {
      l(n), i == null || i(c);
    };
  return d.jsx(a, {
    className: `btn-comic ${af[t] || af.green} ${r}`,
    onClick: u,
    ...o,
    children: s,
  });
}
const uf = [
    { href: "#powers", label: "PONS CAT STATS" },
    { href: "#how", label: "How It Works" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#drops", label: "Live Distribution" },
  ],
  Ii = "#3f7256",
  cf = {
    top: { bg: "rgba(201,230,211,0.55)", text: Ii },
    powers: { bg: "rgba(244,248,245,0.6)", text: Ii },
    how: { bg: "rgba(111,174,134,0.55)", text: "#ffffff" },
    eligibility: { bg: "rgba(158,203,173,0.55)", text: Ii },
    drops: { bg: "rgba(244,248,245,0.6)", text: Ii },
    follow: { bg: "rgba(79,140,102,0.6)", text: "#ffffff" },
  },
  df = ["top", "powers", "how", "eligibility", "drops", "follow"];
function wS({ className: e = "w-5 h-5" }) {
  return d.jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: e,
    "aria-hidden": !0,
    children: d.jsx("path", {
      d: "M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.1 4H5.1l12.6 16Z",
    }),
  });
}
function SS({ token: e, xConnected: t, onConnectX: n }) {
  const { play: r } = tr(),
    [i, s] = k.useState(!1),
    [o, l] = k.useState(!1),
    [a, u] = k.useState("top");
  k.useEffect(() => {
    const f = () => {
      l(window.scrollY > 20);
      const g = 90;
      let v = df[0];
      for (const x of df) {
        const S = document.getElementById(x);
        S && S.getBoundingClientRect().top <= g && (v = x);
      }
      u(v);
    };
    return (
      f(),
      window.addEventListener("scroll", f, { passive: !0 }),
      () => window.removeEventListener("scroll", f)
    );
  }, []);
  const c = cf[a] || cf.top;
  c.text;
  const h = (f) => {
    var g;
    r("click"),
      s(!1),
      (g = document.querySelector(f)) == null ||
        g.scrollIntoView({ behavior: "smooth" });
  };
  return d.jsxs("header", {
    className: `fixed top-0 inset-x-0 z-50 border-b border-white/50 backdrop-blur-xl transition-[background-color,box-shadow] duration-500 ${
      o ? "shadow-glass-sm" : ""
    }`,
    style: { backgroundColor: c.bg },
    children: [
      d.jsxs("div", {
        className:
          "mx-auto max-w-7xl px-3 sm:px-6 h-16 flex items-center justify-between gap-3",
        children: [
          d.jsxs("button", {
            onClick: () => h("#top"),
            className: "flex items-center gap-2 shrink-0",
            children: [
              d.jsx("span", {
                className:
                  "grid place-items-center w-10 h-10 rounded-2xl glass shadow-glass-sm wobble",
                children: d.jsx("img", {
                  src: "/mascot.png",
                  alt: "",
                  className: "w-8 h-8 object-contain",
                }),
              }),
              d.jsxs("span", {
                className:
                  "comic-title text-2xl sm:text-3xl transition-colors duration-500",
                style: { color: c.text },
                children: ["$", (e == null ? void 0 : e.ticker) || "PONSCAT"],
              }),
            ],
          }),
          d.jsx("nav", {
            className: "hidden lg:flex items-center gap-1",
            children: uf.map((f) => {
              const g = a === f.href.slice(1);
              return d.jsxs(
                "button",
                {
                  onClick: () => h(f.href),
                  className:
                    "relative font-display tracking-wide text-lg px-3 py-1 rounded-md hover:bg-white/60 hover:-translate-y-0.5 transition-all",
                  style: { color: c.text },
                  children: [
                    f.label,
                    g &&
                      d.jsx(O.span, {
                        layoutId: "nav-active",
                        transition: {
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        },
                        className:
                          "absolute left-3 right-3 -bottom-0.5 h-[3px] rounded-full bg-gradient-to-r from-glass-sage to-glass-deep",
                      }),
                  ],
                },
                f.href
              );
            }),
          }),
          d.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              d.jsx(ri, {
                as: "a",
                href: (e == null ? void 0 : e.twitterUrl) || "https://x.com",
                target: "_blank",
                rel: "noreferrer",
                variant: "blue",
                sound: "whoosh",
                title: "Follow on X",
                className: "!px-3 !py-1.5 !text-base",
                children: d.jsx(wS, {}),
              }),
              d.jsx("button", {
                onClick: () => {
                  r("pop"), s((f) => !f);
                },
                className:
                  "lg:hidden grid place-items-center w-10 h-10 glass rounded-2xl shadow-glass-sm",
                "aria-label": "Menu",
                children: i ? "✕" : "☰",
              }),
            ],
          }),
        ],
      }),
      i &&
        d.jsx("nav", {
          className:
            "lg:hidden border-t border-white/50 backdrop-blur-xl px-3 py-3 flex flex-col gap-1 transition-colors duration-500",
          style: { backgroundColor: c.bg },
          children: uf.map((f) => {
            const g = a === f.href.slice(1);
            return d.jsxs(
              "button",
              {
                onClick: () => h(f.href),
                className: `flex items-center gap-2 text-left font-display tracking-wide text-xl px-3 py-2 rounded-md hover:bg-white/60 ${
                  g ? "bg-white/50" : ""
                }`,
                style: { color: c.text },
                children: [
                  d.jsx("span", {
                    className: `inline-block w-2.5 h-2.5 rounded-full transition-all ${
                      g
                        ? "bg-glass-deep scale-100"
                        : "bg-glass-sage/40 scale-75 opacity-60"
                    }`,
                  }),
                  f.label,
                ],
              },
              f.href
            );
          }),
        }),
    ],
  });
}
function PS({
  value: e,
  label: t = "Contract Address",
  live: n = !1,
  className: r = "",
}) {
  const [i, s] = k.useState(!1),
    { play: o } = tr(),
    l = async () => {
      try {
        await navigator.clipboard.writeText(e);
      } catch {
        const a = document.createElement("textarea");
        (a.value = e),
          document.body.appendChild(a),
          a.select(),
          document.execCommand("copy"),
          document.body.removeChild(a);
      }
      o("success"), s(!0), setTimeout(() => s(!1), 1600);
    };
  return d.jsxs("div", {
    className: `w-full ${r}`,
    children: [
      d.jsxs("div", {
        className: "flex items-center gap-2 mb-2",
        children: [
          d.jsx("span", {
            className:
              "inline-flex items-center font-display text-lg sm:text-xl tracking-wider text-white bg-gradient-to-b from-glass-green to-glass-jade rounded-full px-4 py-0.5 shadow-glass-sm",
            children: t,
          }),
          n &&
            d.jsxs("span", {
              className: "chip !py-0.5 !text-xs",
              children: [
                d.jsx("span", {
                  className:
                    "w-1.5 h-1.5 rounded-full bg-glass-green animate-pulse",
                }),
                " LIVE",
              ],
            }),
        ],
      }),
      d.jsxs("button", {
        onClick: l,
        title: "Click to copy",
        className:
          "group glass w-full flex items-center gap-3 rounded-2xl px-3 sm:px-4 py-3 shadow-glass-sm hover:shadow-glass transition-all active:translate-y-[1px]",
        children: [
          d.jsx("code", {
            className:
              "font-mono text-xs sm:text-sm md:text-base text-glass-jade break-all text-left flex-1 min-w-0",
            children: e,
          }),
          d.jsx("span", {
            className: `shrink-0 font-display text-sm sm:text-base tracking-wide px-4 py-1 rounded-full text-white transition-all ${
              i
                ? "bg-gradient-to-b from-glass-green to-glass-jade animate-pop"
                : "bg-gradient-to-b from-glass-sage to-glass-deep"
            }`,
            children: i ? "COPIED! ✔" : "COPY",
          }),
        ],
      }),
    ],
  });
}
function og({
  value: e = 0,
  decimals: t = 0,
  prefix: n = "",
  suffix: r = "",
  duration: i = 1400,
}) {
  const [s, o] = k.useState(0),
    l = k.useRef(null),
    a = k.useRef(!1);
  k.useEffect(() => {
    const c = l.current;
    if (!c) return;
    const h = new IntersectionObserver(
      (f) => {
        f.forEach((g) => {
          if (g.isIntersecting && !a.current) {
            a.current = !0;
            const v = performance.now(),
              x = (S) => {
                const m = Math.min((S - v) / i, 1),
                  p = 1 - Math.pow(1 - m, 3);
                o(e * p), m < 1 && requestAnimationFrame(x);
              };
            requestAnimationFrame(x);
          }
        });
      },
      { threshold: 0.4 }
    );
    return h.observe(c), () => h.disconnect();
  }, [e, i]);
  const u = s.toLocaleString(void 0, {
    minimumFractionDigits: t,
    maximumFractionDigits: t,
  });
  return d.jsxs("span", { ref: l, children: [n, u, r] });
}
function kS(e) {
  return e == null || Number.isNaN(e)
    ? null
    : e >= 1e9
    ? { value: e / 1e9, suffix: "B", decimals: 2 }
    : e >= 1e6
    ? { value: e / 1e6, suffix: "M", decimals: 2 }
    : e >= 1e3
    ? { value: e / 1e3, suffix: "K", decimals: 1 }
    : { value: e, suffix: "", decimals: 0 };
}
const hr = (e = 0) => ({
  initial: { opacity: 0, y: 28, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: !0 },
  transition: { type: "spring", stiffness: 120, damping: 15, delay: e },
});
function TS({ token: e, stats: t, statsLoading: n, onScrollTo: r }) {
  const i = kS(t == null ? void 0 : t.marketCap);
  return d.jsxs("section", {
    id: "top",
    className: "relative overflow-hidden pt-24 pb-0",
    children: [
      d.jsx("div", {
        className:
          "blob w-[38rem] h-[38rem] -left-40 -top-24 bg-glass-sage animate-drift-blob",
      }),
      d.jsx("div", {
        className:
          "blob w-[32rem] h-[32rem] right-[-8rem] top-10 bg-glass-mint animate-drift-blob [animation-delay:3s]",
      }),
      d.jsx("div", {
        className:
          "blob w-[26rem] h-[26rem] left-1/3 top-40 bg-glass-green/70 animate-drift-blob [animation-delay:6s]",
      }),
      d.jsx("div", {
        className: "relative mx-auto max-w-6xl px-4",
        children: d.jsxs("div", {
          className:
            "grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_auto_auto] gap-3 md:gap-4",
          children: [
            d.jsxs(O.div, {
              ...hr(0),
              className:
                "panel p-5 md:p-7 overflow-hidden md:col-span-7 md:col-start-6 md:row-start-1",
              children: [
                d.jsx("div", {
                  className:
                    "absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-40 sm:w-52 md:w-60 pointer-events-none hidden sm:block",
                  children: d.jsxs("div", {
                    className: "relative grid place-items-center animate-float",
                    children: [
                      d.jsx("div", {
                        className:
                          "absolute w-[86%] h-[86%] rounded-full bg-white/40 blur-xl",
                      }),
                      d.jsx(Xe, {
                        id: "hero",
                        src: "/mascot2.png",
                        className:
                          "w-[92%] h-[92%] drop-shadow-[0_12px_24px_rgba(63,114,86,0.35)]",
                      }),
                    ],
                  }),
                }),
                d.jsxs("span", {
                  className: "relative z-10 chip mb-3",
                  children: [
                    "✦ ",
                    (e == null ? void 0 : e.chain) || "On-Chain",
                  ],
                }),
                d.jsx("h1", {
                  className:
                    "relative z-10 glass-title text-6xl md:text-7xl leading-[0.85]",
                  children: (e == null ? void 0 : e.name) || "Pons Cat",
                }),
                
              ],
            }),
            d.jsxs(O.div, {
              ...hr(0.1),
              className:
                "panel panel-green flex flex-col items-center p-4 overflow-hidden md:col-span-5 md:col-start-1 md:row-start-1 md:row-span-3",
              children: [
                d.jsx("div", {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    background:
                      "radial-gradient(50% 40% at 50% 32%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 65%)",
                  },
                }),
                d.jsx("span", {
                  className: "absolute top-3 left-3 z-10 chip",
                  children: "💎 Pons Cat",
                }),
                d.jsx("div", {
                  className:
                    "relative z-10 w-full max-w-[380px] mt-6 mb-4 animate-float",
                  children: d.jsx(Xe, {
                    id: "showcase",
                    src: "/ponscatintro.png",
                    className:
                      "w-full h-auto drop-shadow-[0_18px_36px_rgba(63,114,86,0.4)]",
                  }),
                }),
                d.jsxs("div", {
                  className:
                    "relative z-10 w-full rounded-2xl bg-white/90 shadow-glass-sm px-5 py-4 text-center",
                  children: [
                    d.jsx("h3", {
                      className: "comic-title text-2xl text-glass-deep mb-1.5",
                      children: "Meet PONSCAT",
                    }),
                    d.jsx("p", {
                      className:
                        "font-comic font-bold text-ink/80 text-sm leading-snug",
                      children:
                        "PONSCAT is the little green cat roaming around on Robinhood Chain.",
                    }),
                    d.jsxs("p", {
                      className:
                        "font-comic font-bold text-glass-jade text-sm leading-snug mt-2",
                      children: [
                        "This cat does not chase mice. It chases ",
                        d.jsx("span", {
                          className: "text-glass-deep",
                          children: "$PONS",
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs(O.div, {
              ...hr(0.18),
              className:
                "panel p-5 overflow-hidden md:col-span-4 md:col-start-9 md:row-start-2",
              children: [
                d.jsx("span", {
                  className:
                    "absolute -right-6 -bottom-8 opacity-15 rotate-6 select-none pointer-events-none w-32",
                  children: d.jsx(Xe, {
                    id: "story-wm",
                    className: "w-full h-full",
                  }),
                }),
                d.jsxs("div", {
                  className: "relative z-10",
                  children: [
                    d.jsx("span", {
                      className: "chip mb-2",
                      children: "How it works",
                    }),
                    d.jsx("p", {
                      className:
                        "font-comic font-bold text-lg text-glass-jade leading-snug",
                      children:
                        "Hold PONSCAT and earn $PONS. Every 5 minutes, rewards are distributed automatically to every wallet holding at least 100,000 PONSCAT — no claiming required.",
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs(O.div, {
              ...hr(0.26),
              className:
                "panel panel-green p-5 flex flex-col justify-center gap-3 overflow-hidden md:col-span-3 md:col-start-6 md:row-start-2",
              children: [
                d.jsx("div", {
                  className: "absolute inset-0 opacity-60",
                  style: {
                    background:
                      "radial-gradient(60% 50% at 30% 20%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)",
                  },
                }),
                d.jsxs("div", {
                  className: "relative z-10 flex flex-col gap-3",
                  children: [
                    d.jsx(ri, {
                      variant: "green",
                      sound: "whoosh",
                      onClick: () => r("#drops"),
                      className: "!w-full",
                      children: "🚀 Live Rewards",
                    }),
                    d.jsx(ri, {
                      variant: "white",
                      sound: "pop",
                      onClick: () => r("#how"),
                      className: "!w-full",
                      children: "📖 How It Works",
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs(O.div, {
              ...hr(0.34),
              className:
                "panel p-4 overflow-hidden md:col-span-7 md:col-start-6 md:row-start-3",
              children: [
                d.jsx(Fe, {
                  id: "ca",
                  color: "#6fae86",
                  className:
                    "absolute right-3 top-1 w-11 h-11 z-10 animate-float pointer-events-none",
                  children: "$$$",
                }),
                d.jsx(O.div, {
                  className:
                    "absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent pointer-events-none z-20",
                  animate: { x: ["-140%", "360%"] },
                  transition: {
                    duration: 2.8,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    repeatDelay: 1.4,
                  },
                }),
                d.jsx("div", {
                  className: "relative z-10",
                  children: d.jsx(PS, {
                    value: (e == null ? void 0 : e.contractAddress) || "",
                    label: "CA",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      d.jsx("div", {
        className:
          "mt-16 md:mt-20 border-y border-white/50 bg-white/30 backdrop-blur-md overflow-hidden",
        children: d.jsx("div", {
          className: "flex whitespace-nowrap animate-marquee",
          children: Array.from({ length: 2 }).map((s, o) =>
            d.jsx(
              "div",
              {
                className: "flex shrink-0",
                children: [
                  "HOLD PONSCAT",
                  "EARN $PONS",
                  "EVERY 5 MINUTES",
                  "ZERO CLAIMING",
                  "ON-CHAIN & OPEN",
                  "PONS CAT",
                ].map((l) =>
                  d.jsxs(
                    "span",
                    {
                      className:
                        "font-display text-2xl text-glass-deep tracking-widest px-6 py-2",
                      children: ["✦ ", l],
                    },
                    l
                  )
                ),
              },
              o
            )
          ),
        }),
      }),
    ],
  });
}
function eo({ kicker: e, title: t, color: n = "" }) {
  return d.jsxs("div", {
    className: "text-center mb-8 md:mb-12",
    children: [
      e &&
        d.jsxs(O.span, {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: "chip mb-4",
          children: ["✦ ", e],
        }),
      d.jsx(O.h2, {
        initial: { opacity: 0, scale: 0.85 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: !0 },
        transition: { type: "spring", stiffness: 140, damping: 14 },
        className: `glass-title text-4xl sm:text-5xl md:text-6xl ${n}`,
        children: t,
      }),
    ],
  });
}
function CS({ stats: e, loading: t }) {
  const n = [
    {
      label: "Holders",
      sub: "Total Holders",
      value: (e == null ? void 0 : e.totalHolders) ?? 0,
      decimals: 0,
      color: "panel-green",
      text: "text-white",
      icon: "✨",
      tag: "+ RISING",
    },
    {
      label: "$PONS Distributed",
      sub: "Total Distributed",
      value: (e == null ? void 0 : e.totalDistributed) ?? 0,
      decimals: 0,
      suffix: " $PONS",
      color: "panel-green",
      text: "text-white",
      icon: "💎",
      tag: "+ FLOWING",
    },
    {
      label: "Total Burned",
      sub: "Total Burned",
      value: (e == null ? void 0 : e.totalBurned) ?? 0,
      decimals: 0,
      suffix: " PONSCAT",
      color: "panel-green",
      text: "text-white",
      icon: "🔥",
      tag: "+ BURNING",
    },
  ];

}
function NS({ delay: e = 0 }) {
  return d.jsxs("svg", {
    viewBox: "0 0 130 60",
    className:
      "absolute bottom-3 right-3 w-28 md:w-32 opacity-30 pointer-events-none",
    children: [
      d.jsx(O.path, {
        d: "M4 54 L26 44 L48 48 L70 30 L92 34 L122 8",
        fill: "none",
        stroke: "#ffffff",
        strokeWidth: "4.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: !0 },
        transition: { duration: 1.3, delay: e, ease: "easeInOut" },
      }),
      d.jsx("path", {
        d: "M110 6 L124 6 L124 20",
        fill: "none",
        stroke: "#ffffff",
        strokeWidth: "4.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
const Ho = [
  {
    n: "01",
    title: "Hold 100,000 PONSCAT",
    body: "Get PONSCAT and keep at least 100,000 in a wallet you control. That's the minimum to qualify for rewards.",
    color: "panel-green",
    icon: "🛒",
    sfx: "HOLD",
  },
  {
    n: "02",
    title: "Fees Collect",
    body: "A small fee on every trade is set aside into a shared rewards pool that builds up automatically over time.",
    color: "panel-green",
    icon: "🏦",
    sfx: "POOL",
  },
  {
    n: "03",
    title: "Paid Every 5 Minutes",
    body: "Every 5 minutes the pool is distributed directly to qualifying wallets. No claiming and no clicking required.",
    color: "panel-green",
    icon: "💧",
    sfx: "SEND",
  },
  {
    n: "04",
    title: "Earn $PONS",
    body: "Rewards are paid in $PONS, sized to your share of the supply. Keep holding to keep earning.",
    color: "panel-green",
    icon: "💎",
    sfx: "EARN",
  },
];
function ES() {
  return d.jsxs("section", {
    id: "how",
    className:
      "relative py-16 md:py-24 bg-gradient-to-b from-glass-sage to-glass-green overflow-hidden",
    children: [
      d.jsx("div", {
        className:
          "blob w-[34rem] h-[34rem] -left-40 top-10 bg-glass-mint animate-drift-blob opacity-40",
      }),
      d.jsx("div", {
        className:
          "blob w-[28rem] h-[28rem] -right-32 bottom-0 bg-glass-glow animate-drift-blob opacity-40",
      }),
      d.jsx("div", {
        className:
          "absolute -left-10 top-1/2 -translate-y-1/2 w-[22rem] opacity-[0.08] select-none pointer-events-none -rotate-6",
        children: d.jsx(Xe, {
          id: "how-watermark",
          className: "w-full h-auto",
        }),
      }),
      d.jsxs("div", {
        className: "relative mx-auto max-w-6xl px-4",
        children: [
          d.jsx(eo, {
            kicker: "How It Works",
            title: "HOW PONS CAT WORKS",
            color: "text-white",
          }),
          d.jsxs("div", {
            className: "block relative h-12 lg:h-20 mb-4 lg:mb-2",
            children: [
              d.jsxs("svg", {
                className:
                  "absolute inset-x-[10%] top-1/2 -translate-y-1/2 w-[80%] h-4 overflow-visible",
                viewBox: "0 0 100 4",
                preserveAspectRatio: "none",
                children: [
                  d.jsx("line", {
                    x1: "0",
                    y1: "2",
                    x2: "100",
                    y2: "2",
                    stroke: "#3f7256",
                    strokeWidth: "4",
                    strokeLinecap: "round",
                  }),
                  d.jsx(O.line, {
                    x1: "0",
                    y1: "2",
                    x2: "100",
                    y2: "2",
                    stroke: "#9ecbad",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeDasharray: "3 3",
                    animate: { strokeDashoffset: [0, -12] },
                    transition: {
                      duration: 0.7,
                      repeat: 1 / 0,
                      ease: "linear",
                    },
                    vectorEffect: "non-scaling-stroke",
                  }),
                ],
              }),
              d.jsx("div", {
                className: "absolute inset-0 grid grid-cols-4",
                children: Ho.map((e, t) =>
                  d.jsx(
                    "div",
                    {
                      className: "grid place-items-center",
                      children: d.jsx(O.div, {
                        className:
                          "grid place-items-center w-8 h-8 lg:w-14 lg:h-14 rounded-full glass font-display text-sm lg:text-2xl shadow-glass-sm",
                        animate: { scale: [1, 1.1, 1] },
                        transition: {
                          duration: 1.8,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                          delay: t * 0.25,
                        },
                        children: e.n,
                      }),
                    },
                    e.n
                  )
                ),
              }),
              d.jsx(O.span, {
                className:
                  "absolute top-1/2 -translate-y-[100%] leading-none text-2xl lg:text-4xl drop-shadow-[0_4px_10px_rgba(63,114,86,0.35)]",
                animate: { left: ["9%", "88%"], rotate: [0, -6, 6, 0] },
                transition: {
                  left: {
                    duration: 3.6,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  },
                  rotate: { duration: 0.6, repeat: 1 / 0, ease: "easeInOut" },
                },
                children: "💎",
              }),
            ],
          }),
          d.jsx("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:mt-4",
            children: Ho.map((e, t) =>
              d.jsxs(
                O.div,
                {
                  initial: { opacity: 0, y: 50, rotate: t % 2 ? 2 : -2 },
                  whileInView: { opacity: 1, y: 0, rotate: t % 2 ? 1 : -1 },
                  viewport: { once: !0, margin: "-40px" },
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 13,
                    delay: t * 0.08,
                  },
                  whileHover: {
                    scale: 1.06,
                    rotate: 0,
                    y: -10,
                    boxShadow: "0 24px 60px -12px rgba(63,114,86,0.35)",
                  },
                  className: `relative panel ${e.color} p-5 pt-8 group`,
                  children: [
                    d.jsx("span", {
                      className:
                        "lg:hidden absolute -top-4 -left-3 z-20 grid place-items-center w-12 h-12 rounded-full glass font-display text-xl shadow-glass-sm",
                      children: e.n,
                    }),
                    d.jsx("span", {
                      className:
                        "absolute top-3 right-3 z-20 glass text-glass-deep font-display text-base tracking-wide rounded-full px-3 py-0.5 shadow-glass-sm",
                      children: e.sfx,
                    }),
                    d.jsx(O.div, {
                      className:
                        "relative w-14 h-14 grid place-items-center rounded-2xl glass mb-3 text-4xl",
                      animate: { y: [0, -6, 0], rotate: [0, -4, 4, 0] },
                      transition: {
                        duration: 2.4,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: t * 0.3,
                      },
                      children: e.icon,
                    }),
                    d.jsx("h3", {
                      className: "comic-title text-2xl text-white mb-2",
                      children: e.title,
                    }),
                    d.jsx("p", {
                      className:
                        "font-comic font-bold text-white/90 leading-snug",
                      children: e.body,
                    }),
                    d.jsx("div", {
                      className: "flex gap-1.5 mt-4",
                      children: Ho.map((n, r) =>
                        d.jsx(
                          "span",
                          {
                            className: `h-2 rounded-full ${
                              r <= t ? "w-6 bg-glass-deep" : "w-2 bg-white/50"
                            }`,
                          },
                          r
                        )
                      ),
                    }),
                  ],
                },
                e.n
              )
            ),
          }),
        ],
      }),
    ],
  });
}
const jS = [
  {
    ok: !0,
    title: "Hold 100,000 PONSCAT",
    body: "Keep at least 100,000 PONSCAT in your wallet to qualify for every distribution.",
  },
  {
    ok: !0,
    title: "Use a wallet you control",
    body: "Hold in a self-custodied wallet. $PONS rewards are sent on-chain directly to your address.",
  },
  {
    ok: !0,
    title: "Hold through the snapshot",
    body: "A snapshot is taken before each distribution — every 5 minutes. Hold through it and your share is included.",
  },
];
function AS() {
  const e = jS.filter((t) => t.ok);
  return d.jsxs("section", {
    id: "eligibility",
    className:
      "relative py-16 md:py-24 bg-gradient-to-b from-glass-mist to-glass-haze overflow-hidden",
    children: [
      d.jsx("div", {
        className:
          "blob w-[34rem] h-[34rem] -left-40 top-10 bg-glass-sage animate-drift-blob opacity-50",
      }),
      d.jsx("div", {
        className:
          "blob w-[30rem] h-[30rem] -right-32 bottom-0 bg-glass-mint animate-drift-blob opacity-50",
      }),
      d.jsx("div", {
        className: "absolute inset-0 pointer-events-none",
        style: {
          background:
            "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.5), rgba(255,255,255,0) 55%)",
        },
      }),
      d.jsx(Fe, {
        id: "who",
        color: "#6fae86",
        text: "#ffffff",
        className:
          "absolute right-4 top-6 w-20 h-20 md:w-28 md:h-28 animate-float",
        children: "WHO?",
      }),
      d.jsxs("div", {
        className: "relative mx-auto max-w-2xl px-4",
        children: [
          d.jsx(eo, { kicker: "Eligibility", title: "WHO GETS REWARDS" }),
          d.jsx(DS, {
            rules: e,
            ok: !0,
            fromX: -60,
            headline: "✓ On The List",
            headClass: "from-glass-green to-glass-jade",
          }),
          d.jsx(O.p, {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className:
              "glass text-center font-comic font-bold text-glass-jade mt-10 max-w-2xl mx-auto rounded-xl p-3",
            children:
              "✨ Snapshots and distributions are automatic and on-chain. No forms, no sign-ups, no claiming — just hold and the contract does the rest.",
          }),
        ],
      }),
    ],
  });
}
function DS({ rules: e, ok: t, fromX: n, headline: r, headClass: i }) {
  return d.jsxs("div", {
    className: "flex flex-col gap-4",
    children: [
      d.jsx(O.div, {
        initial: { opacity: 0, scale: 0.7, rotate: -3 },
        whileInView: { opacity: 1, scale: 1, rotate: -1.5 },
        viewport: { once: !0 },
        transition: { type: "spring", stiffness: 160, damping: 12 },
        className: "self-start",
        children: d.jsx("span", {
          className: `inline-block bg-gradient-to-br ${i} text-white font-display text-xl md:text-2xl tracking-wide rounded-lg px-4 py-1 shadow-glass`,
          children: r,
        }),
      }),
      e.map((s, o) =>
        d.jsxs(
          O.div,
          {
            initial: { opacity: 0, x: n, rotate: t ? -2 : 2 },
            whileInView: { opacity: 1, x: 0, rotate: 0 },
            viewport: { once: !0, margin: "-40px" },
            transition: {
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: 0.1 + o * 0.1,
            },
            whileHover: {
              scale: 1.04,
              y: -8,
              rotate: t ? -1 : 1,
              boxShadow: "0 24px 60px -12px rgba(63,114,86,0.35)",
            },
            className: "panel p-4 flex items-start gap-3 overflow-hidden",
            children: [
              d.jsx(O.span, {
                initial: { scale: 2.2, rotate: -25, opacity: 0 },
                whileInView: { scale: 1, rotate: t ? -6 : 6, opacity: 1 },
                viewport: { once: !0 },
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 12,
                  delay: 0.25 + o * 0.1,
                },
                className: `relative shrink-0 grid place-items-center w-12 h-12 rounded-lg font-display text-2xl text-white shadow-glass-sm bg-gradient-to-br ${
                  t
                    ? "from-glass-green to-glass-jade"
                    : "from-glass-sage to-glass-deep"
                }`,
                children: t ? "✔" : "✗",
              }),
              d.jsxs("div", {
                className: "relative",
                children: [
                  d.jsx("h3", {
                    className: "comic-title text-xl",
                    children: s.title,
                  }),
                  d.jsx("p", {
                    className: "font-comic font-bold text-ink/80 leading-snug",
                    children: s.body,
                  }),
                ],
              }),
            ],
          },
          s.title
        )
      ),
    ],
  });
}
function ff({ className: e = "", tilt: t = 0, children: n, ...r }) {
  return d.jsx(O.div, {
    initial: { opacity: 0, y: 40, scale: 0.94 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: !0, margin: "-60px" },
    transition: { type: "spring", stiffness: 120, damping: 14 },
    style: { rotate: t },
    className: `panel ${e}`,
    ...r,
    children: n,
  });
}
const LS = 5e3;
function MS({ onDrop: e } = {}) {
  const [t, n] = k.useState([]),
    [r, i] = k.useState(!0),
    [s, o] = k.useState(60),
    [l, a] = k.useState(60),
    u = k.useRef(e);
  u.current = e;
  const c = k.useRef(new Set());
  k.useEffect(() => {
    let f = !0;
    return (
      (async () => {
        const [g, v] = await Promise.all([
          Tt.getDistributions({ limit: 50 }),
          Tt.getNextDrop(),
        ]);
        f &&
          (g.rows.forEach((x) => c.current.add(x.id)),
          n(g.rows),
          o(v.cadenceSeconds),
          a(v.secondsLeft),
          i(!1));
      })(),
      () => {
        f = !1;
      }
    );
  }, []),
    k.useEffect(() => {
      const f = setInterval(() => {
        a((g) => {
          var v;
          if (g <= 1) {
            if (kt) {
              const x = Tt._mockPushDrop();
              c.current.add(x.id),
                n((S) => [x, ...S].slice(0, 120)),
                (v = u.current) == null || v.call(u, x);
            }
            return s;
          }
          return g - 1;
        });
      }, 1e3);
      return () => clearInterval(f);
    }, [s]),
    k.useEffect(() => {
      if (kt) return;
      let f = !0;
      const v = setInterval(async () => {
        var x;
        try {
          const [S, m] = await Promise.all([
            Tt.getDistributions({ limit: 50 }),
            Tt.getNextDrop(),
          ]);
          if (!f) return;
          o(m.cadenceSeconds), a(m.secondsLeft);
          const p = S.rows.filter((y) => !c.current.has(y.id));
          p.forEach((y) => c.current.add(y.id)),
            n(S.rows.slice(0, 120)),
            p.length && ((x = u.current) == null || x.call(u, p[0]));
        } catch (S) {
          console.error("[useLiveFeed] poll failed:", S);
        }
      }, LS);
      return () => {
        (f = !1), clearInterval(v);
      };
    }, []);
  const h = k.useCallback(async (f = "") => {
    const g = await Tt.getDistributions({ limit: 50, search: f });
    n(g.rows);
  }, []);
  return { rows: t, loading: r, cadence: s, secondsLeft: l, refresh: h };
}
const hf = (e, t = 6, n = 6) =>
  e && e.length > t + n ? `${e.slice(0, t)}…${e.slice(-n)}` : e;
function RS(e) {
  const t = Math.max(0, Math.floor((Date.now() - e) / 1e3));
  if (t < 60) return `${t}s ago`;
  const n = Math.floor(t / 60);
  return n < 60 ? `${n}m ago` : `${Math.floor(n / 60)}h ago`;
}
function VS({ token: e }) {
  const { play: t } = tr(),
    [n, r] = k.useState(null),
    {
      rows: i,
      loading: s,
      cadence: o,
      secondsLeft: l,
    } = MS({
      onDrop: (S) => {
        t("success"), r(S.id);
      },
    }),
    [a, u] = k.useState("");
  k.useEffect(() => {
    if (!n) return;
    const S = setTimeout(() => r(null), 2800);
    return () => clearTimeout(S);
  }, [n]);
  const c = k.useMemo(() => {
      const S = a.trim().toLowerCase();
      return S
        ? i.filter(
            (m) =>
              m.wallet.toLowerCase().includes(S) ||
              m.tx.toLowerCase().includes(S)
          )
        : i;
    }, [i, a]),
    h = ((o - l) / o) * 100,
    f = String(Math.floor(l / 60)).padStart(2, "0"),
    g = String(l % 60).padStart(2, "0"),
    v = (S) => `${(e == null ? void 0 : e.explorerTxBase) || "#"}${S}`,
    x = (S) => `${(e == null ? void 0 : e.explorerAddressBase) || "#"}${S}`;
  
}
function _S({ row: e, isNew: t, ticker: n, addrUrl: r, txUrl: i, play: s }) {
  const o = oS(),
    l = t && !o;
  return d.jsxs(O.div, {
    layout: !0,
    initial: l
      ? { opacity: 0, scale: 1.7, rotate: -8, y: -40 }
      : { opacity: 0, scale: 0.94 },
    animate: { opacity: 1, scale: 1, rotate: 0, y: 0 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.18 } },
    transition: l
      ? { type: "spring", stiffness: 520, damping: 12, mass: 0.9 }
      : { type: "spring", stiffness: 300, damping: 26 },
    className: "relative",
    children: [
      l &&
        d.jsxs(d.Fragment, {
          children: [
            d.jsx(O.span, {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute -inset-1 rounded-2xl border-[5px] border-glass-green",
              initial: { opacity: 0.9, scale: 0.92 },
              animate: { opacity: 0, scale: 1.3 },
              transition: { duration: 0.75, ease: "easeOut", delay: 0.12 },
            }),
            d.jsx(O.div, {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute -top-5 -right-4 w-16 h-16 z-20",
              initial: { scale: 0, rotate: -45 },
              animate: {
                scale: [0, 1.3, 1, 1, 0],
                rotate: [-45, 10, -5, -5, -5],
              },
              transition: {
                duration: 2.6,
                times: [0, 0.12, 0.24, 0.88, 1],
                ease: "easeOut",
              },
              children: d.jsx(Fe, {
                color: "#6fae86",
                className: "w-full h-full",
                children: "New!",
              }),
            }),
          ],
        }),
      d.jsxs("article", {
        className: `glass relative flex flex-col h-full rounded-2xl overflow-hidden transition-all hover:-translate-y-2 hover:scale-[1.02] hover:shadow-glass-lg ${
          l ? "shadow-glass" : "shadow-glass-sm"
        }`,
        children: [
          l &&
            d.jsx(O.span, {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute inset-0 z-10 bg-glass-green",
              initial: { opacity: 0.45 },
              animate: { opacity: 0 },
              transition: { duration: 1.1, ease: "easeOut", delay: 0.1 },
            }),
          d.jsxs("div", {
            className: `flex items-center justify-between gap-2 px-3 py-1.5 ${
              l ? "bg-glass-green" : "bg-glass-deep"
            }`,
            children: [
              d.jsx("span", {
                className: `font-display tracking-wide text-sm text-white ${
                  l ? "animate-flash" : ""
                }`,
                children: l ? "JUST LANDED!" : "REWARDED!",
              }),
              d.jsx("span", {
                className:
                  "font-comic font-bold text-white/60 text-xs whitespace-nowrap",
                children: RS(e.timestamp),
              }),
            ],
          }),
          d.jsxs("div", {
            className: "flex flex-col gap-3 p-3.5 flex-1",
            children: [
              d.jsxs(O.span, {
                className:
                  "chip bg-glass-green/80 text-white border-white/50 self-start",
                initial: l ? { scale: 0.6 } : !1,
                animate: { scale: 1 },
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 12,
                  delay: 0.18,
                },
                children: ["+", e.amount.toLocaleString(), " ", n],
              }),
              d.jsxs("div", {
                children: [
                  d.jsx("p", {
                    className:
                      "font-display tracking-wide text-ink/50 text-xs mb-0.5",
                    children: "Wallet Address",
                  }),
                  d.jsx("a", {
                    href: r(e.wallet),
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: () => s("click"),
                    className:
                      "font-mono text-sm font-bold break-all hover:text-glass-deep underline decoration-dotted",
                    title: e.wallet,
                    children: hf(e.wallet),
                  }),
                ],
              }),
              d.jsxs("div", {
                children: [
                  d.jsx("p", {
                    className:
                      "font-display tracking-wide text-ink/50 text-xs mb-0.5",
                    children: "Transaction",
                  }),
                  d.jsx("p", {
                    className: "font-mono text-sm text-ink/70 break-all",
                    title: e.tx,
                    children: hf(e.tx, 8, 8),
                  }),
                ],
              }),
              d.jsx(ri, {
                as: "a",
                href: i(e.tx),
                target: "_blank",
                rel: "noreferrer",
                variant: "green",
                sound: "pop",
                className:
                  "mt-auto w-full justify-center !py-1.5 !text-sm !shadow-glass-sm",
                children: "Open ↗",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function OS() {
  return Array.from({ length: 8 }).map((e, t) =>
    d.jsxs(
      "div",
      {
        className: "glass rounded-2xl shadow-glass-sm overflow-hidden",
        children: [
          d.jsx("div", {
            className: "bg-glass-deep px-3 py-1.5",
            children: d.jsx("div", {
              className: "h-3.5 w-24 rounded bg-white/20 animate-flash",
            }),
          }),
          d.jsxs("div", {
            className: "flex flex-col gap-3 p-3.5",
            children: [
              d.jsx("div", {
                className:
                  "h-7 w-32 rounded-full bg-glass-sage/20 animate-flash",
              }),
              Array.from({ length: 2 }).map((n, r) =>
                d.jsxs(
                  "div",
                  {
                    className: "flex flex-col gap-1.5",
                    children: [
                      d.jsx("div", {
                        className:
                          "h-3 w-20 rounded bg-glass-sage/20 animate-flash",
                      }),
                      d.jsx("div", {
                        className: "h-4 rounded bg-glass-sage/20 animate-flash",
                        style: { width: `${60 + ((t + r) % 3) * 12}%` },
                      }),
                    ],
                  },
                  r
                )
              ),
              d.jsx("div", {
                className: "h-8 w-full rounded bg-glass-sage/20 animate-flash",
              }),
            ],
          }),
        ],
      },
      t
    )
  );
}
function IS({ children: e, className: t = "", tail: n = "left" }) {
  const r =
    n === "left"
      ? "left-8"
      : n === "right"
      ? "right-8"
      : "left-1/2 -translate-x-1/2";
  return d.jsxs("div", {
    className: `relative inline-block glass rounded-[26px] px-5 py-3 shadow-glass ${t}`,
    children: [
      e,
      d.jsx("span", {
        className: `absolute -bottom-[13px] ${r} w-0 h-0 border-l-[14px] border-l-transparent border-t-[18px]`,
        style: { borderTopColor: "rgba(255,255,255,0.75)" },
      }),
    ],
  });
}
function pf({ className: e = "w-6 h-6" }) {
  return d.jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: e,
    "aria-hidden": !0,
    children: d.jsx("path", {
      d: "M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.1 4H5.1l12.6 16Z",
    }),
  });
}
const FS = [
  { t: "gm ✨", x: "8%", delay: 0, dur: 9 },
  { t: "PONSCAT rewards just hit 🌿", x: "78%", delay: 2, dur: 11 },
  { t: "auto distributions 💎", x: "16%", delay: 4, dur: 10 },
  { t: "holding PONSCAT ✦", x: "84%", delay: 6, dur: 12 },
];
function bS({ token: e }) {
  return d.jsxs("section", {
    id: "follow",
    className:
      "relative py-16 md:py-24 bg-gradient-to-b from-glass-sage to-glass-green overflow-hidden",
    children: [
      d.jsx("div", {
        className:
          "blob w-[30rem] h-[30rem] -left-40 top-10 bg-glass-mint animate-drift-blob opacity-40",
      }),
      d.jsx("div", {
        className:
          "blob w-[26rem] h-[26rem] -right-32 bottom-0 bg-glass-green animate-drift-blob opacity-40",
      }),
      d.jsx("span", {
        className:
          "absolute left-[6%] top-[22%] w-28 md:w-36 opacity-[0.14] -rotate-12 select-none pointer-events-none",
        children: d.jsx(Xe, {
          id: "joinx-watermark-a",
          className: "w-full h-auto",
        }),
      }),
      d.jsx("span", {
        className:
          "absolute right-[7%] bottom-[24%] w-28 md:w-36 opacity-[0.14] rotate-12 select-none pointer-events-none",
        children: d.jsx(Xe, {
          id: "joinx-watermark-b",
          className: "w-full h-auto",
        }),
      }),
      d.jsx(Fe, {
        id: "joinx-bam",
        color: "#6fae86",
        text: "#ffffff",
        className:
          "absolute left-6 top-8 w-16 h-16 md:w-24 md:h-24 animate-float",
        children: "BAM!",
      }),
      d.jsx(Fe, {
        id: "joinx-post",
        color: "#4f8c66",
        text: "#ffffff",
        className:
          "absolute right-6 top-10 w-14 h-14 md:w-20 md:h-20 animate-float [animation-delay:1s] hidden sm:grid",
        children: "POST!",
      }),
      FS.map((t, n) =>
        d.jsx(
          O.div,
          {
            className: "absolute bottom-24 hidden md:block pointer-events-none",
            style: { left: t.x },
            initial: { opacity: 0, y: 0 },
            animate: { opacity: [0, 1, 1, 0], y: [-10, -160] },
            transition: {
              duration: t.dur,
              delay: t.delay,
              repeat: 1 / 0,
              ease: "easeOut",
              repeatDelay: 1,
            },
            children: d.jsxs("span", {
              className:
                "glass inline-flex items-center gap-1.5 text-glass-jade font-comic font-bold text-sm rounded-full px-3 py-1 shadow-glass-sm -rotate-2",
              children: [d.jsx(pf, { className: "w-3.5 h-3.5" }), " ", t.t],
            }),
          },
          n
        )
      ),
      d.jsxs("div", {
        className: "relative z-10 mx-auto max-w-4xl px-4 text-center",
        children: [
          d.jsx(O.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className: "inline-block mb-6",
            children: d.jsx(IS, {
              tail: "center",
              className: "text-ink",
              children: d.jsx("span", {
                className: "font-display text-2xl md:text-3xl tracking-wide",
                children: "Follow Pons Cat on X",
              }),
            }),
          }),
          d.jsx(O.h2, {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: !0 },
            transition: { type: "spring", stiffness: 140, damping: 12 },
            className:
              "comic-title comic-title-lg text-white text-4xl md:text-6xl mb-4",
            children: "STAY IN THE LOOP",
          }),
          d.jsx("p", {
            className:
              "font-comic font-bold text-white/90 text-lg max-w-2xl mx-auto mb-8",
            children:
              "Distributions, updates, and announcements are posted first on X. Follow along to keep up with everything Pons Cat.",
          }),
          d.jsx("div", {
            className: "flex flex-wrap items-center justify-center gap-4",
            children: d.jsx(O.div, {
              whileHover: { scale: 1.06, rotate: -1 },
              whileTap: { scale: 0.96 },
              children: d.jsxs(ri, {
                as: "a",
                href: (e == null ? void 0 : e.twitterUrl) || "https://x.com",
                target: "_blank",
                rel: "noreferrer",
                variant: "green",
                sound: "whoosh",
                className: "!text-xl !px-6 !py-3",
                children: [
                  d.jsx(pf, {}),
                  " Follow ",
                  (e == null ? void 0 : e.twitterHandle) || "@PonsCat",
                ],
              }),
            }),
          }),
        ],
      }),
      d.jsx("div", {
        className:
          "absolute bottom-0 inset-x-0 border-t border-white/50 bg-white/20 overflow-hidden",
        children: d.jsx("div", {
          className:
            "flex whitespace-nowrap animate-marquee text-3xl md:text-4xl py-1.5",
          children: Array.from({ length: 2 }).map((t, n) =>
            d.jsx(
              "div",
              {
                className: "flex shrink-0",
                children: Array.from({ length: 14 }).map((r, i) =>
                  d.jsx(
                    "span",
                    { className: "px-2 select-none", children: "💎" },
                    i
                  )
                ),
              },
              n
            )
          ),
        }),
      }),
    ],
  });
}
function zS({ token: e }) {
  const t = new Date().getFullYear();
  return d.jsxs("footer", {
    className:
      "relative bg-gradient-to-b from-glass-green to-glass-jade text-white pt-14 pb-8 overflow-hidden",
    children: [
      d.jsx("div", {
        className:
          "blob w-[28rem] h-[28rem] -left-32 -bottom-24 bg-glass-mint animate-drift-blob opacity-40",
      }),
      d.jsxs("div", {
        className: "relative mx-auto max-w-6xl px-4",
        children: [
          d.jsxs("div", {
            className: "mb-10 text-center md:text-left",
            children: [
              d.jsxs("div", {
                className:
                  "flex items-center justify-center md:justify-start gap-2 mb-3",
                children: [
                  d.jsx("span", {
                    className:
                      "glass w-12 h-12 rounded-2xl flex items-center justify-center",
                    children: d.jsx("img", {
                      src: "/mascot.png",
                      alt: "",
                      className: "w-9 h-9 object-contain",
                    }),
                  }),
                  d.jsxs("span", {
                    className: "comic-title text-3xl text-white",
                    children: [
                      "$",
                      (e == null ? void 0 : e.ticker) || "PONSCAT",
                    ],
                  }),
                ],
              }),
              d.jsxs("p", {
                className:
                  "font-comic font-bold text-white/70 leading-snug max-w-2xl mx-auto md:mx-0",
                children: [
                  (e == null ? void 0 : e.name) || "Pons Cat",
                  " — a rewards token that pays $PONS to holders automatically, on-chain, every 5 minutes.",
                ],
              }),
            ],
          }),
          d.jsxs("div", {
            className: "border-t border-white/30 pt-6",
            children: [
              d.jsxs("p", {
                className:
                  "font-comic text-white/50 text-sm leading-relaxed max-w-4xl",
                children: [
                  d.jsx("strong", {
                    className: "text-white",
                    children: "⚠ Disclaimer:",
                  }),
                  " ",
                  (e == null ? void 0 : e.ticker) || "PONSCAT",
                  " is a community token created for entertainment. Nothing on this site is financial, investment, legal, or tax advice. Crypto assets are highly volatile and you may lose your entire capital. Do your own research and never invest more than you can afford to lose.",
                ],
              }),
              d.jsx("div", {
                className:
                  "flex flex-col sm:flex-row justify-between items-center gap-2 mt-6 font-comic font-bold text-white/60 text-sm",
                children: d.jsxs("span", {
                  children: [
                    "© ",
                    t,
                    " ",
                    (e == null ? void 0 : e.name) || "Pons Cat",
                    ". All rights reserved.",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function BS() {
  const { play: e } = tr(),
    [t, n] = k.useState(null),
    [r, i] = k.useState(null),
    [s, o] = k.useState(!0),
    [l, a] = k.useState(!1),
    [u, c] = k.useState(!1);
  k.useEffect(() => {
    let g = !0;
    return (
      (async () => {
        const v = await Tt.getToken();
        if (!g) return;
        n(v);
        const x = await Tt.getStats();
        g && (i(x), o(!1));
      })(),
      () => {
        g = !1;
      }
    );
  }, []);
  const h = k.useCallback(
      (g) => {
        var v;
        e("whoosh"),
          (v = document.querySelector(g)) == null ||
            v.scrollIntoView({ behavior: "smooth" });
      },
      [e]
    ),
    f = k.useCallback(() => {
      a((g) => !g);
    }, []);
  return d.jsxs("div", {
    className: "min-h-screen",
    children: [
      d.jsx(Ap, {
        children: !u && d.jsx(yS, { onDone: () => c(!0) }, "intro"),
      }),
      d.jsx(SS, { token: t, xConnected: l, onConnectX: f }),
      d.jsxs("main", {
        children: [
          d.jsx(TS, { token: t, stats: r, statsLoading: s, onScrollTo: h }),
          d.jsx(CS, { stats: r, loading: s }),
          d.jsx(ES, {}),
          d.jsx(AS, {}),
          d.jsx(VS, { token: t }),
          d.jsx(bS, { token: t, xConnected: l, onConnectX: f }),
        ],
      }),
      d.jsx(zS, { token: t }),
    ],
  });
}
Wo.createRoot(document.getElementById("root")).render(
  d.jsx(kg.StrictMode, { children: d.jsx(gS, { children: d.jsx(BS, {}) }) })
);
