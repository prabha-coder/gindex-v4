(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-48822c69"],
    {
        "362a": function (e, t, r) {},
        "56b3": function (e, t, r) {
            (function (t, r) {
                e.exports = r();
            })(0, function () {
                "use strict";
                var e = navigator.userAgent,
                    t = navigator.platform,
                    r = /gecko\/\d/i.test(e),
                    n = /MSIE \d/.test(e),
                    i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
                    o = /Edge\/(\d+)/.exec(e),
                    l = n || i || o,
                    a = l && (n ? document.documentMode || 6 : +(o || i)[1]),
                    s = !o && /WebKit\//.test(e),
                    u = s && /Qt\/\d+\.\d+/.test(e),
                    c = !o && /Chrome\//.test(e),
                    f = /Opera\//.test(e),
                    h = /Apple Computer/.test(navigator.vendor),
                    d = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                    p = /PhantomJS/.test(e),
                    g = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
                    v = /Android/.test(e),
                    m = g || v || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                    y = g || /Mac/.test(t),
                    b = /\bCrOS\b/.test(e),
                    w = /win/i.test(t),
                    x = f && e.match(/Version\/(\d*\.\d*)/);
                x && (x = Number(x[1])), x && x >= 15 && ((f = !1), (s = !0));
                var C = y && (u || (f && (null == x || x < 12.11))),
                    k = r || (l && a >= 9);
                function S(e) {
                    return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
                }
                var L,
                    M = function (e, t) {
                        var r = e.className,
                            n = S(t).exec(r);
                        if (n) {
                            var i = r.slice(n.index + n[0].length);
                            e.className = r.slice(0, n.index) + (i ? n[1] + i : "");
                        }
                    };
                function T(e) {
                    for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                    return e;
                }
                function O(e, t) {
                    return T(e).appendChild(t);
                }
                function N(e, t, r, n) {
                    var i = document.createElement(e);
                    if ((r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t)) i.appendChild(document.createTextNode(t));
                    else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
                    return i;
                }
                function A(e, t, r, n) {
                    var i = N(e, t, r, n);
                    return i.setAttribute("role", "presentation"), i;
                }
                function D(e, t) {
                    if ((3 == t.nodeType && (t = t.parentNode), e.contains)) return e.contains(t);
                    do {
                        if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
                    } while ((t = t.parentNode));
                }
                function W() {
                    var e;
                    try {
                        e = document.activeElement;
                    } catch (t) {
                        e = document.body || null;
                    }
                    while (e && e.shadowRoot && e.shadowRoot.activeElement) e = e.shadowRoot.activeElement;
                    return e;
                }
                function E(e, t) {
                    var r = e.className;
                    S(t).test(r) || (e.className += (r ? " " : "") + t);
                }
                function H(e, t) {
                    for (var r = e.split(" "), n = 0; n < r.length; n++) r[n] && !S(r[n]).test(t) && (t += " " + r[n]);
                    return t;
                }
                L = document.createRange
                    ? function (e, t, r, n) {
                          var i = document.createRange();
                          return i.setEnd(n || e, r), i.setStart(e, t), i;
                      }
                    : function (e, t, r) {
                          var n = document.body.createTextRange();
                          try {
                              n.moveToElementText(e.parentNode);
                          } catch (i) {
                              return n;
                          }
                          return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n;
                      };
                var F = function (e) {
                    e.select();
                };
                function P(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return function () {
                        return e.apply(null, t);
                    };
                }
                function I(e, t, r) {
                    for (var n in (t || (t = {}), e)) !e.hasOwnProperty(n) || (!1 === r && t.hasOwnProperty(n)) || (t[n] = e[n]);
                    return t;
                }
                function z(e, t, r, n, i) {
                    null == t && ((t = e.search(/[^\s\u00a0]/)), -1 == t && (t = e.length));
                    for (var o = n || 0, l = i || 0; ; ) {
                        var a = e.indexOf("\t", o);
                        if (a < 0 || a >= t) return l + (t - o);
                        (l += a - o), (l += r - (l % r)), (o = a + 1);
                    }
                }
                g
                    ? (F = function (e) {
                          (e.selectionStart = 0), (e.selectionEnd = e.value.length);
                      })
                    : l &&
                      (F = function (e) {
                          try {
                              e.select();
                          } catch (t) {}
                      });
                var R = function () {
                    (this.id = null), (this.f = null), (this.time = 0), (this.handler = P(this.onTimeout, this));
                };
                function B(e, t) {
                    for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
                    return -1;
                }
                (R.prototype.onTimeout = function (e) {
                    (e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
                }),
                    (R.prototype.set = function (e, t) {
                        this.f = t;
                        var r = +new Date() + e;
                        (!this.id || r < this.time) && (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = r));
                    });
                var j = 30,
                    V = {
                        toString: function () {
                            return "CodeMirror.Pass";
                        },
                    },
                    G = { scroll: !1 },
                    _ = { origin: "*mouse" },
                    U = { origin: "+move" };
                function $(e, t, r) {
                    for (var n = 0, i = 0; ; ) {
                        var o = e.indexOf("\t", n);
                        -1 == o && (o = e.length);
                        var l = o - n;
                        if (o == e.length || i + l >= t) return n + Math.min(l, t - i);
                        if (((i += o - n), (i += r - (i % r)), (n = o + 1), i >= t)) return n;
                    }
                }
                var K = [""];
                function X(e) {
                    while (K.length <= e) K.push(Y(K) + " ");
                    return K[e];
                }
                function Y(e) {
                    return e[e.length - 1];
                }
                function q(e, t) {
                    for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
                    return r;
                }
                function Z(e, t, r) {
                    var n = 0,
                        i = r(t);
                    while (n < e.length && r(e[n]) <= i) n++;
                    e.splice(n, 0, t);
                }
                function J() {}
                function Q(e, t) {
                    var r;
                    return Object.create ? (r = Object.create(e)) : ((J.prototype = e), (r = new J())), t && I(t, r), r;
                }
                var ee = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
                function te(e) {
                    return /\w/.test(e) || (e > "" && (e.toUpperCase() != e.toLowerCase() || ee.test(e)));
                }
                function re(e, t) {
                    return t ? !!(t.source.indexOf("\\w") > -1 && te(e)) || t.test(e) : te(e);
                }
                function ne(e) {
                    for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
                    return !0;
                }
                var ie = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
                function oe(e) {
                    return e.charCodeAt(0) >= 768 && ie.test(e);
                }
                function le(e, t, r) {
                    while ((r < 0 ? t > 0 : t < e.length) && oe(e.charAt(t))) t += r;
                    return t;
                }
                function ae(e, t, r) {
                    for (var n = t > r ? -1 : 1; ; ) {
                        if (t == r) return t;
                        var i = (t + r) / 2,
                            o = n < 0 ? Math.ceil(i) : Math.floor(i);
                        if (o == t) return e(o) ? t : r;
                        e(o) ? (r = o) : (t = o + n);
                    }
                }
                function se(e, t, r, n) {
                    if (!e) return n(t, r, "ltr", 0);
                    for (var i = !1, o = 0; o < e.length; ++o) {
                        var l = e[o];
                        ((l.from < r && l.to > t) || (t == r && l.to == t)) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr", o), (i = !0));
                    }
                    i || n(t, r, "ltr");
                }
                var ue = null;
                function ce(e, t, r) {
                    var n;
                    ue = null;
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.from < t && o.to > t) return i;
                        o.to == t && (o.from != o.to && "before" == r ? (n = i) : (ue = i)), o.from == t && (o.from != o.to && "before" != r ? (n = i) : (ue = i));
                    }
                    return null != n ? n : ue;
                }
                var fe = (function () {
                    var e =
                            "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                        t =
                            "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
                    function r(r) {
                        return r <= 247 ? e.charAt(r) : 1424 <= r && r <= 1524 ? "R" : 1536 <= r && r <= 1785 ? t.charAt(r - 1536) : 1774 <= r && r <= 2220 ? "r" : 8192 <= r && r <= 8203 ? "w" : 8204 == r ? "b" : "L";
                    }
                    var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                        i = /[stwN]/,
                        o = /[LRr]/,
                        l = /[Lb1n]/,
                        a = /[1n]/;
                    function s(e, t, r) {
                        (this.level = e), (this.from = t), (this.to = r);
                    }
                    return function (e, t) {
                        var u = "ltr" == t ? "L" : "R";
                        if (0 == e.length || ("ltr" == t && !n.test(e))) return !1;
                        for (var c = e.length, f = [], h = 0; h < c; ++h) f.push(r(e.charCodeAt(h)));
                        for (var d = 0, p = u; d < c; ++d) {
                            var g = f[d];
                            "m" == g ? (f[d] = p) : (p = g);
                        }
                        for (var v = 0, m = u; v < c; ++v) {
                            var y = f[v];
                            "1" == y && "r" == m ? (f[v] = "n") : o.test(y) && ((m = y), "r" == y && (f[v] = "R"));
                        }
                        for (var b = 1, w = f[0]; b < c - 1; ++b) {
                            var x = f[b];
                            "+" == x && "1" == w && "1" == f[b + 1] ? (f[b] = "1") : "," != x || w != f[b + 1] || ("1" != w && "n" != w) || (f[b] = w), (w = x);
                        }
                        for (var C = 0; C < c; ++C) {
                            var k = f[C];
                            if ("," == k) f[C] = "N";
                            else if ("%" == k) {
                                var S = void 0;
                                for (S = C + 1; S < c && "%" == f[S]; ++S);
                                for (var L = (C && "!" == f[C - 1]) || (S < c && "1" == f[S]) ? "1" : "N", M = C; M < S; ++M) f[M] = L;
                                C = S - 1;
                            }
                        }
                        for (var T = 0, O = u; T < c; ++T) {
                            var N = f[T];
                            "L" == O && "1" == N ? (f[T] = "L") : o.test(N) && (O = N);
                        }
                        for (var A = 0; A < c; ++A)
                            if (i.test(f[A])) {
                                var D = void 0;
                                for (D = A + 1; D < c && i.test(f[D]); ++D);
                                for (var W = "L" == (A ? f[A - 1] : u), E = "L" == (D < c ? f[D] : u), H = W == E ? (W ? "L" : "R") : u, F = A; F < D; ++F) f[F] = H;
                                A = D - 1;
                            }
                        for (var P, I = [], z = 0; z < c; )
                            if (l.test(f[z])) {
                                var R = z;
                                for (++z; z < c && l.test(f[z]); ++z);
                                I.push(new s(0, R, z));
                            } else {
                                var B = z,
                                    j = I.length,
                                    V = "rtl" == t ? 1 : 0;
                                for (++z; z < c && "L" != f[z]; ++z);
                                for (var G = B; G < z; )
                                    if (a.test(f[G])) {
                                        B < G && (I.splice(j, 0, new s(1, B, G)), (j += V));
                                        var _ = G;
                                        for (++G; G < z && a.test(f[G]); ++G);
                                        I.splice(j, 0, new s(2, _, G)), (j += V), (B = G);
                                    } else ++G;
                                B < z && I.splice(j, 0, new s(1, B, z));
                            }
                        return (
                            "ltr" == t &&
                                (1 == I[0].level && (P = e.match(/^\s+/)) && ((I[0].from = P[0].length), I.unshift(new s(0, 0, P[0].length))),
                                1 == Y(I).level && (P = e.match(/\s+$/)) && ((Y(I).to -= P[0].length), I.push(new s(0, c - P[0].length, c)))),
                            "rtl" == t ? I.reverse() : I
                        );
                    };
                })();
                function he(e, t) {
                    var r = e.order;
                    return null == r && (r = e.order = fe(e.text, t)), r;
                }
                var de = [],
                    pe = function (e, t, r) {
                        if (e.addEventListener) e.addEventListener(t, r, !1);
                        else if (e.attachEvent) e.attachEvent("on" + t, r);
                        else {
                            var n = e._handlers || (e._handlers = {});
                            n[t] = (n[t] || de).concat(r);
                        }
                    };
                function ge(e, t) {
                    return (e._handlers && e._handlers[t]) || de;
                }
                function ve(e, t, r) {
                    if (e.removeEventListener) e.removeEventListener(t, r, !1);
                    else if (e.detachEvent) e.detachEvent("on" + t, r);
                    else {
                        var n = e._handlers,
                            i = n && n[t];
                        if (i) {
                            var o = B(i, r);
                            o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)));
                        }
                    }
                }
                function me(e, t) {
                    var r = ge(e, t);
                    if (r.length) for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n);
                }
                function ye(e, t, r) {
                    return (
                        "string" == typeof t &&
                            (t = {
                                type: t,
                                preventDefault: function () {
                                    this.defaultPrevented = !0;
                                },
                            }),
                        me(e, r || t.type, e, t),
                        Se(t) || t.codemirrorIgnore
                    );
                }
                function be(e) {
                    var t = e._handlers && e._handlers.cursorActivity;
                    if (t) for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) -1 == B(r, t[n]) && r.push(t[n]);
                }
                function we(e, t) {
                    return ge(e, t).length > 0;
                }
                function xe(e) {
                    (e.prototype.on = function (e, t) {
                        pe(this, e, t);
                    }),
                        (e.prototype.off = function (e, t) {
                            ve(this, e, t);
                        });
                }
                function Ce(e) {
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                }
                function ke(e) {
                    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
                }
                function Se(e) {
                    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
                }
                function Le(e) {
                    Ce(e), ke(e);
                }
                function Me(e) {
                    return e.target || e.srcElement;
                }
                function Te(e) {
                    var t = e.which;
                    return null == t && (1 & e.button ? (t = 1) : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t;
                }
                var Oe,
                    Ne,
                    Ae = (function () {
                        if (l && a < 9) return !1;
                        var e = N("div");
                        return "draggable" in e || "dragDrop" in e;
                    })();
                function De(e) {
                    if (null == Oe) {
                        var t = N("span", "​");
                        O(e, N("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Oe = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(l && a < 8));
                    }
                    var r = Oe ? N("span", "​") : N("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                    return r.setAttribute("cm-text", ""), r;
                }
                function We(e) {
                    if (null != Ne) return Ne;
                    var t = O(e, document.createTextNode("AخA")),
                        r = L(t, 0, 1).getBoundingClientRect(),
                        n = L(t, 1, 2).getBoundingClientRect();
                    return T(e), !(!r || r.left == r.right) && (Ne = n.right - r.right < 3);
                }
                var Ee =
                        3 != "\n\nb".split(/\n/).length
                            ? function (e) {
                                  var t = 0,
                                      r = [],
                                      n = e.length;
                                  while (t <= n) {
                                      var i = e.indexOf("\n", t);
                                      -1 == i && (i = e.length);
                                      var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                                          l = o.indexOf("\r");
                                      -1 != l ? (r.push(o.slice(0, l)), (t += l + 1)) : (r.push(o), (t = i + 1));
                                  }
                                  return r;
                              }
                            : function (e) {
                                  return e.split(/\r\n?|\n/);
                              },
                    He = window.getSelection
                        ? function (e) {
                              try {
                                  return e.selectionStart != e.selectionEnd;
                              } catch (t) {
                                  return !1;
                              }
                          }
                        : function (e) {
                              var t;
                              try {
                                  t = e.ownerDocument.selection.createRange();
                              } catch (r) {}
                              return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
                          },
                    Fe = (function () {
                        var e = N("div");
                        return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
                    })(),
                    Pe = null;
                function Ie(e) {
                    if (null != Pe) return Pe;
                    var t = O(e, N("span", "x")),
                        r = t.getBoundingClientRect(),
                        n = L(t, 0, 1).getBoundingClientRect();
                    return (Pe = Math.abs(r.left - n.left) > 1);
                }
                var ze = {},
                    Re = {};
                function Be(e, t) {
                    arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), (ze[e] = t);
                }
                function je(e, t) {
                    Re[e] = t;
                }
                function Ve(e) {
                    if ("string" == typeof e && Re.hasOwnProperty(e)) e = Re[e];
                    else if (e && "string" == typeof e.name && Re.hasOwnProperty(e.name)) {
                        var t = Re[e.name];
                        "string" == typeof t && (t = { name: t }), (e = Q(t, e)), (e.name = t.name);
                    } else {
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ve("application/xml");
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ve("application/json");
                    }
                    return "string" == typeof e ? { name: e } : e || { name: "null" };
                }
                function Ge(e, t) {
                    t = Ve(t);
                    var r = ze[t.name];
                    if (!r) return Ge(e, "text/plain");
                    var n = r(e, t);
                    if (_e.hasOwnProperty(t.name)) {
                        var i = _e[t.name];
                        for (var o in i) i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]), (n[o] = i[o]));
                    }
                    if (((n.name = t.name), t.helperType && (n.helperType = t.helperType), t.modeProps)) for (var l in t.modeProps) n[l] = t.modeProps[l];
                    return n;
                }
                var _e = {};
                function Ue(e, t) {
                    var r = _e.hasOwnProperty(e) ? _e[e] : (_e[e] = {});
                    I(t, r);
                }
                function $e(e, t) {
                    if (!0 === t) return t;
                    if (e.copyState) return e.copyState(t);
                    var r = {};
                    for (var n in t) {
                        var i = t[n];
                        i instanceof Array && (i = i.concat([])), (r[n] = i);
                    }
                    return r;
                }
                function Ke(e, t) {
                    var r;
                    while (e.innerMode) {
                        if (((r = e.innerMode(t)), !r || r.mode == e)) break;
                        (t = r.state), (e = r.mode);
                    }
                    return r || { mode: e, state: t };
                }
                function Xe(e, t, r) {
                    return !e.startState || e.startState(t, r);
                }
                var Ye = function (e, t, r) {
                    (this.pos = this.start = 0), (this.string = e), (this.tabSize = t || 8), (this.lastColumnPos = this.lastColumnValue = 0), (this.lineStart = 0), (this.lineOracle = r);
                };
                function qe(e, t) {
                    if (((t -= e.first), t < 0 || t >= e.size)) throw new Error("There is no line " + (t + e.first) + " in the document.");
                    var r = e;
                    while (!r.lines)
                        for (var n = 0; ; ++n) {
                            var i = r.children[n],
                                o = i.chunkSize();
                            if (t < o) {
                                r = i;
                                break;
                            }
                            t -= o;
                        }
                    return r.lines[t];
                }
                function Ze(e, t, r) {
                    var n = [],
                        i = t.line;
                    return (
                        e.iter(t.line, r.line + 1, function (e) {
                            var o = e.text;
                            i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i;
                        }),
                        n
                    );
                }
                function Je(e, t, r) {
                    var n = [];
                    return (
                        e.iter(t, r, function (e) {
                            n.push(e.text);
                        }),
                        n
                    );
                }
                function Qe(e, t) {
                    var r = t - e.height;
                    if (r) for (var n = e; n; n = n.parent) n.height += r;
                }
                function et(e) {
                    if (null == e.parent) return null;
                    for (var t = e.parent, r = B(t.lines, e), n = t.parent; n; t = n, n = n.parent)
                        for (var i = 0; ; ++i) {
                            if (n.children[i] == t) break;
                            r += n.children[i].chunkSize();
                        }
                    return r + t.first;
                }
                function tt(e, t) {
                    var r = e.first;
                    e: do {
                        for (var n = 0; n < e.children.length; ++n) {
                            var i = e.children[n],
                                o = i.height;
                            if (t < o) {
                                e = i;
                                continue e;
                            }
                            (t -= o), (r += i.chunkSize());
                        }
                        return r;
                    } while (!e.lines);
                    for (var l = 0; l < e.lines.length; ++l) {
                        var a = e.lines[l],
                            s = a.height;
                        if (t < s) break;
                        t -= s;
                    }
                    return r + l;
                }
                function rt(e, t) {
                    return t >= e.first && t < e.first + e.size;
                }
                function nt(e, t) {
                    return String(e.lineNumberFormatter(t + e.firstLineNumber));
                }
                function it(e, t, r) {
                    if ((void 0 === r && (r = null), !(this instanceof it))) return new it(e, t, r);
                    (this.line = e), (this.ch = t), (this.sticky = r);
                }
                function ot(e, t) {
                    return e.line - t.line || e.ch - t.ch;
                }
                function lt(e, t) {
                    return e.sticky == t.sticky && 0 == ot(e, t);
                }
                function at(e) {
                    return it(e.line, e.ch);
                }
                function st(e, t) {
                    return ot(e, t) < 0 ? t : e;
                }
                function ut(e, t) {
                    return ot(e, t) < 0 ? e : t;
                }
                function ct(e, t) {
                    return Math.max(e.first, Math.min(t, e.first + e.size - 1));
                }
                function ft(e, t) {
                    if (t.line < e.first) return it(e.first, 0);
                    var r = e.first + e.size - 1;
                    return t.line > r ? it(r, qe(e, r).text.length) : ht(t, qe(e, t.line).text.length);
                }
                function ht(e, t) {
                    var r = e.ch;
                    return null == r || r > t ? it(e.line, t) : r < 0 ? it(e.line, 0) : e;
                }
                function dt(e, t) {
                    for (var r = [], n = 0; n < t.length; n++) r[n] = ft(e, t[n]);
                    return r;
                }
                (Ye.prototype.eol = function () {
                    return this.pos >= this.string.length;
                }),
                    (Ye.prototype.sol = function () {
                        return this.pos == this.lineStart;
                    }),
                    (Ye.prototype.peek = function () {
                        return this.string.charAt(this.pos) || void 0;
                    }),
                    (Ye.prototype.next = function () {
                        if (this.pos < this.string.length) return this.string.charAt(this.pos++);
                    }),
                    (Ye.prototype.eat = function (e) {
                        var t,
                            r = this.string.charAt(this.pos);
                        if (((t = "string" == typeof e ? r == e : r && (e.test ? e.test(r) : e(r))), t)) return ++this.pos, r;
                    }),
                    (Ye.prototype.eatWhile = function (e) {
                        var t = this.pos;
                        while (this.eat(e));
                        return this.pos > t;
                    }),
                    (Ye.prototype.eatSpace = function () {
                        var e = this.pos;
                        while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
                        return this.pos > e;
                    }),
                    (Ye.prototype.skipToEnd = function () {
                        this.pos = this.string.length;
                    }),
                    (Ye.prototype.skipTo = function (e) {
                        var t = this.string.indexOf(e, this.pos);
                        if (t > -1) return (this.pos = t), !0;
                    }),
                    (Ye.prototype.backUp = function (e) {
                        this.pos -= e;
                    }),
                    (Ye.prototype.column = function () {
                        return (
                            this.lastColumnPos < this.start && ((this.lastColumnValue = z(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)), (this.lastColumnPos = this.start)),
                            this.lastColumnValue - (this.lineStart ? z(this.string, this.lineStart, this.tabSize) : 0)
                        );
                    }),
                    (Ye.prototype.indentation = function () {
                        return z(this.string, null, this.tabSize) - (this.lineStart ? z(this.string, this.lineStart, this.tabSize) : 0);
                    }),
                    (Ye.prototype.match = function (e, t, r) {
                        if ("string" != typeof e) {
                            var n = this.string.slice(this.pos).match(e);
                            return n && n.index > 0 ? null : (n && !1 !== t && (this.pos += n[0].length), n);
                        }
                        var i = function (e) {
                                return r ? e.toLowerCase() : e;
                            },
                            o = this.string.substr(this.pos, e.length);
                        if (i(o) == i(e)) return !1 !== t && (this.pos += e.length), !0;
                    }),
                    (Ye.prototype.current = function () {
                        return this.string.slice(this.start, this.pos);
                    }),
                    (Ye.prototype.hideFirstChars = function (e, t) {
                        this.lineStart += e;
                        try {
                            return t();
                        } finally {
                            this.lineStart -= e;
                        }
                    }),
                    (Ye.prototype.lookAhead = function (e) {
                        var t = this.lineOracle;
                        return t && t.lookAhead(e);
                    }),
                    (Ye.prototype.baseToken = function () {
                        var e = this.lineOracle;
                        return e && e.baseToken(this.pos);
                    });
                var pt = function (e, t) {
                        (this.state = e), (this.lookAhead = t);
                    },
                    gt = function (e, t, r, n) {
                        (this.state = t), (this.doc = e), (this.line = r), (this.maxLookAhead = n || 0), (this.baseTokens = null), (this.baseTokenPos = 1);
                    };
                function vt(e, t, r, n) {
                    var i = [e.state.modeGen],
                        o = {};
                    Lt(
                        e,
                        t.text,
                        e.doc.mode,
                        r,
                        function (e, t) {
                            return i.push(e, t);
                        },
                        o,
                        n
                    );
                    for (
                        var l = r.state,
                            a = function (n) {
                                r.baseTokens = i;
                                var a = e.state.overlays[n],
                                    s = 1,
                                    u = 0;
                                (r.state = !0),
                                    Lt(
                                        e,
                                        t.text,
                                        a.mode,
                                        r,
                                        function (e, t) {
                                            var r = s;
                                            while (u < e) {
                                                var n = i[s];
                                                n > e && i.splice(s, 1, e, i[s + 1], n), (s += 2), (u = Math.min(e, n));
                                            }
                                            if (t)
                                                if (a.opaque) i.splice(r, s - r, e, "overlay " + t), (s = r + 2);
                                                else
                                                    for (; r < s; r += 2) {
                                                        var o = i[r + 1];
                                                        i[r + 1] = (o ? o + " " : "") + "overlay " + t;
                                                    }
                                        },
                                        o
                                    ),
                                    (r.state = l),
                                    (r.baseTokens = null),
                                    (r.baseTokenPos = 1);
                            },
                            s = 0;
                        s < e.state.overlays.length;
                        ++s
                    )
                        a(s);
                    return { styles: i, classes: o.bgClass || o.textClass ? o : null };
                }
                function mt(e, t, r) {
                    if (!t.styles || t.styles[0] != e.state.modeGen) {
                        var n = yt(e, et(t)),
                            i = t.text.length > e.options.maxHighlightLength && $e(e.doc.mode, n.state),
                            o = vt(e, t, n);
                        i && (n.state = i),
                            (t.stateAfter = n.save(!i)),
                            (t.styles = o.styles),
                            o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null),
                            r === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
                    }
                    return t.styles;
                }
                function yt(e, t, r) {
                    var n = e.doc,
                        i = e.display;
                    if (!n.mode.startState) return new gt(n, !0, t);
                    var o = Mt(e, t, r),
                        l = o > n.first && qe(n, o - 1).stateAfter,
                        a = l ? gt.fromSaved(n, l, o) : new gt(n, Xe(n.mode), o);
                    return (
                        n.iter(o, t, function (r) {
                            bt(e, r.text, a);
                            var n = a.line;
                            (r.stateAfter = n == t - 1 || n % 5 == 0 || (n >= i.viewFrom && n < i.viewTo) ? a.save() : null), a.nextLine();
                        }),
                        r && (n.modeFrontier = a.line),
                        a
                    );
                }
                function bt(e, t, r, n) {
                    var i = e.doc.mode,
                        o = new Ye(t, e.options.tabSize, r);
                    (o.start = o.pos = n || 0), "" == t && wt(i, r.state);
                    while (!o.eol()) xt(i, o, r.state), (o.start = o.pos);
                }
                function wt(e, t) {
                    if (e.blankLine) return e.blankLine(t);
                    if (e.innerMode) {
                        var r = Ke(e, t);
                        return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
                    }
                }
                function xt(e, t, r, n) {
                    for (var i = 0; i < 10; i++) {
                        n && (n[0] = Ke(e, r).mode);
                        var o = e.token(t, r);
                        if (t.pos > t.start) return o;
                    }
                    throw new Error("Mode " + e.name + " failed to advance stream.");
                }
                (gt.prototype.lookAhead = function (e) {
                    var t = this.doc.getLine(this.line + e);
                    return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
                }),
                    (gt.prototype.baseToken = function (e) {
                        if (!this.baseTokens) return null;
                        while (this.baseTokens[this.baseTokenPos] <= e) this.baseTokenPos += 2;
                        var t = this.baseTokens[this.baseTokenPos + 1];
                        return { type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e };
                    }),
                    (gt.prototype.nextLine = function () {
                        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
                    }),
                    (gt.fromSaved = function (e, t, r) {
                        return t instanceof pt ? new gt(e, $e(e.mode, t.state), r, t.lookAhead) : new gt(e, $e(e.mode, t), r);
                    }),
                    (gt.prototype.save = function (e) {
                        var t = !1 !== e ? $e(this.doc.mode, this.state) : this.state;
                        return this.maxLookAhead > 0 ? new pt(t, this.maxLookAhead) : t;
                    });
                var Ct = function (e, t, r) {
                    (this.start = e.start), (this.end = e.pos), (this.string = e.current()), (this.type = t || null), (this.state = r);
                };
                function kt(e, t, r, n) {
                    var i,
                        o = e.doc,
                        l = o.mode;
                    t = ft(o, t);
                    var a,
                        s = qe(o, t.line),
                        u = yt(e, t.line, r),
                        c = new Ye(s.text, e.options.tabSize, u);
                    n && (a = []);
                    while ((n || c.pos < t.ch) && !c.eol()) (c.start = c.pos), (i = xt(l, c, u.state)), n && a.push(new Ct(c, i, $e(o.mode, u.state)));
                    return n ? a : new Ct(c, i, u.state);
                }
                function St(e, t) {
                    if (e)
                        for (;;) {
                            var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                            if (!r) break;
                            e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
                            var n = r[1] ? "bgClass" : "textClass";
                            null == t[n] ? (t[n] = r[2]) : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) || (t[n] += " " + r[2]);
                        }
                    return e;
                }
                function Lt(e, t, r, n, i, o, l) {
                    var a = r.flattenSpans;
                    null == a && (a = e.options.flattenSpans);
                    var s,
                        u = 0,
                        c = null,
                        f = new Ye(t, e.options.tabSize, n),
                        h = e.options.addModeClass && [null];
                    "" == t && St(wt(r, n.state), o);
                    while (!f.eol()) {
                        if ((f.pos > e.options.maxHighlightLength ? ((a = !1), l && bt(e, t, n, f.pos), (f.pos = t.length), (s = null)) : (s = St(xt(r, f, n.state, h), o)), h)) {
                            var d = h[0].name;
                            d && (s = "m-" + (s ? d + " " + s : d));
                        }
                        if (!a || c != s) {
                            while (u < f.start) (u = Math.min(f.start, u + 5e3)), i(u, c);
                            c = s;
                        }
                        f.start = f.pos;
                    }
                    while (u < f.pos) {
                        var p = Math.min(f.pos, u + 5e3);
                        i(p, c), (u = p);
                    }
                }
                function Mt(e, t, r) {
                    for (var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > l; --a) {
                        if (a <= o.first) return o.first;
                        var s = qe(o, a - 1),
                            u = s.stateAfter;
                        if (u && (!r || a + (u instanceof pt ? u.lookAhead : 0) <= o.modeFrontier)) return a;
                        var c = z(s.text, null, e.options.tabSize);
                        (null == i || n > c) && ((i = a - 1), (n = c));
                    }
                    return i;
                }
                function Tt(e, t) {
                    if (((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))) {
                        for (var r = e.first, n = t - 1; n > r; n--) {
                            var i = qe(e, n).stateAfter;
                            if (i && (!(i instanceof pt) || n + i.lookAhead < t)) {
                                r = n + 1;
                                break;
                            }
                        }
                        e.highlightFrontier = Math.min(e.highlightFrontier, r);
                    }
                }
                var Ot = !1,
                    Nt = !1;
                function At() {
                    Ot = !0;
                }
                function Dt() {
                    Nt = !0;
                }
                function Wt(e, t, r) {
                    (this.marker = e), (this.from = t), (this.to = r);
                }
                function Et(e, t) {
                    if (e)
                        for (var r = 0; r < e.length; ++r) {
                            var n = e[r];
                            if (n.marker == t) return n;
                        }
                }
                function Ht(e, t) {
                    for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
                    return r;
                }
                function Ft(e, t) {
                    (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]), t.marker.attachLine(e);
                }
                function Pt(e, t, r) {
                    var n;
                    if (e)
                        for (var i = 0; i < e.length; ++i) {
                            var o = e[i],
                                l = o.marker,
                                a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                            if (a || (o.from == t && "bookmark" == l.type && (!r || !o.marker.insertLeft))) {
                                var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                                (n || (n = [])).push(new Wt(l, o.from, s ? null : o.to));
                            }
                        }
                    return n;
                }
                function It(e, t, r) {
                    var n;
                    if (e)
                        for (var i = 0; i < e.length; ++i) {
                            var o = e[i],
                                l = o.marker,
                                a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                            if (a || (o.from == t && "bookmark" == l.type && (!r || o.marker.insertLeft))) {
                                var s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                                (n || (n = [])).push(new Wt(l, s ? null : o.from - t, null == o.to ? null : o.to - t));
                            }
                        }
                    return n;
                }
                function zt(e, t) {
                    if (t.full) return null;
                    var r = rt(e, t.from.line) && qe(e, t.from.line).markedSpans,
                        n = rt(e, t.to.line) && qe(e, t.to.line).markedSpans;
                    if (!r && !n) return null;
                    var i = t.from.ch,
                        o = t.to.ch,
                        l = 0 == ot(t.from, t.to),
                        a = Pt(r, i, l),
                        s = It(n, o, l),
                        u = 1 == t.text.length,
                        c = Y(t.text).length + (u ? i : 0);
                    if (a)
                        for (var f = 0; f < a.length; ++f) {
                            var h = a[f];
                            if (null == h.to) {
                                var d = Et(s, h.marker);
                                d ? u && (h.to = null == d.to ? null : d.to + c) : (h.to = i);
                            }
                        }
                    if (s)
                        for (var p = 0; p < s.length; ++p) {
                            var g = s[p];
                            if ((null != g.to && (g.to += c), null == g.from)) {
                                var v = Et(a, g.marker);
                                v || ((g.from = c), u && (a || (a = [])).push(g));
                            } else (g.from += c), u && (a || (a = [])).push(g);
                        }
                    a && (a = Rt(a)), s && s != a && (s = Rt(s));
                    var m = [a];
                    if (!u) {
                        var y,
                            b = t.text.length - 2;
                        if (b > 0 && a) for (var w = 0; w < a.length; ++w) null == a[w].to && (y || (y = [])).push(new Wt(a[w].marker, null, null));
                        for (var x = 0; x < b; ++x) m.push(y);
                        m.push(s);
                    }
                    return m;
                }
                function Rt(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var r = e[t];
                        null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1);
                    }
                    return e.length ? e : null;
                }
                function Bt(e, t, r) {
                    var n = null;
                    if (
                        (e.iter(t.line, r.line + 1, function (e) {
                            if (e.markedSpans)
                                for (var t = 0; t < e.markedSpans.length; ++t) {
                                    var r = e.markedSpans[t].marker;
                                    !r.readOnly || (n && -1 != B(n, r)) || (n || (n = [])).push(r);
                                }
                        }),
                        !n)
                    )
                        return null;
                    for (var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
                        for (var l = n[o], a = l.find(0), s = 0; s < i.length; ++s) {
                            var u = i[s];
                            if (!(ot(u.to, a.from) < 0 || ot(u.from, a.to) > 0)) {
                                var c = [s, 1],
                                    f = ot(u.from, a.from),
                                    h = ot(u.to, a.to);
                                (f < 0 || (!l.inclusiveLeft && !f)) && c.push({ from: u.from, to: a.from }), (h > 0 || (!l.inclusiveRight && !h)) && c.push({ from: a.to, to: u.to }), i.splice.apply(i, c), (s += c.length - 3);
                            }
                        }
                    return i;
                }
                function jt(e) {
                    var t = e.markedSpans;
                    if (t) {
                        for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
                        e.markedSpans = null;
                    }
                }
                function Vt(e, t) {
                    if (t) {
                        for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
                        e.markedSpans = t;
                    }
                }
                function Gt(e) {
                    return e.inclusiveLeft ? -1 : 0;
                }
                function _t(e) {
                    return e.inclusiveRight ? 1 : 0;
                }
                function Ut(e, t) {
                    var r = e.lines.length - t.lines.length;
                    if (0 != r) return r;
                    var n = e.find(),
                        i = t.find(),
                        o = ot(n.from, i.from) || Gt(e) - Gt(t);
                    if (o) return -o;
                    var l = ot(n.to, i.to) || _t(e) - _t(t);
                    return l || t.id - e.id;
                }
                function $t(e, t) {
                    var r,
                        n = Nt && e.markedSpans;
                    if (n) for (var i = void 0, o = 0; o < n.length; ++o) (i = n[o]), i.marker.collapsed && null == (t ? i.from : i.to) && (!r || Ut(r, i.marker) < 0) && (r = i.marker);
                    return r;
                }
                function Kt(e) {
                    return $t(e, !0);
                }
                function Xt(e) {
                    return $t(e, !1);
                }
                function Yt(e, t) {
                    var r,
                        n = Nt && e.markedSpans;
                    if (n)
                        for (var i = 0; i < n.length; ++i) {
                            var o = n[i];
                            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!r || Ut(r, o.marker) < 0) && (r = o.marker);
                        }
                    return r;
                }
                function qt(e, t, r, n, i) {
                    var o = qe(e, t),
                        l = Nt && o.markedSpans;
                    if (l)
                        for (var a = 0; a < l.length; ++a) {
                            var s = l[a];
                            if (s.marker.collapsed) {
                                var u = s.marker.find(0),
                                    c = ot(u.from, r) || Gt(s.marker) - Gt(i),
                                    f = ot(u.to, n) || _t(s.marker) - _t(i);
                                if (
                                    !((c >= 0 && f <= 0) || (c <= 0 && f >= 0)) &&
                                    ((c <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? ot(u.to, r) >= 0 : ot(u.to, r) > 0)) || (c >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? ot(u.from, n) <= 0 : ot(u.from, n) < 0)))
                                )
                                    return !0;
                            }
                        }
                }
                function Zt(e) {
                    var t;
                    while ((t = Kt(e))) e = t.find(-1, !0).line;
                    return e;
                }
                function Jt(e) {
                    var t;
                    while ((t = Xt(e))) e = t.find(1, !0).line;
                    return e;
                }
                function Qt(e) {
                    var t, r;
                    while ((t = Xt(e))) (e = t.find(1, !0).line), (r || (r = [])).push(e);
                    return r;
                }
                function er(e, t) {
                    var r = qe(e, t),
                        n = Zt(r);
                    return r == n ? t : et(n);
                }
                function tr(e, t) {
                    if (t > e.lastLine()) return t;
                    var r,
                        n = qe(e, t);
                    if (!rr(e, n)) return t;
                    while ((r = Xt(n))) n = r.find(1, !0).line;
                    return et(n) + 1;
                }
                function rr(e, t) {
                    var r = Nt && t.markedSpans;
                    if (r)
                        for (var n = void 0, i = 0; i < r.length; ++i)
                            if (((n = r[i]), n.marker.collapsed)) {
                                if (null == n.from) return !0;
                                if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && nr(e, t, n)) return !0;
                            }
                }
                function nr(e, t, r) {
                    if (null == r.to) {
                        var n = r.marker.find(1, !0);
                        return nr(e, n.line, Et(n.line.markedSpans, r.marker));
                    }
                    if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
                    for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
                        if (((i = t.markedSpans[o]), i.marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && nr(e, t, i))) return !0;
                }
                function ir(e) {
                    e = Zt(e);
                    for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
                        var i = r.lines[n];
                        if (i == e) break;
                        t += i.height;
                    }
                    for (var o = r.parent; o; r = o, o = r.parent)
                        for (var l = 0; l < o.children.length; ++l) {
                            var a = o.children[l];
                            if (a == r) break;
                            t += a.height;
                        }
                    return t;
                }
                function or(e) {
                    if (0 == e.height) return 0;
                    var t,
                        r = e.text.length,
                        n = e;
                    while ((t = Kt(n))) {
                        var i = t.find(0, !0);
                        (n = i.from.line), (r += i.from.ch - i.to.ch);
                    }
                    n = e;
                    while ((t = Xt(n))) {
                        var o = t.find(0, !0);
                        (r -= n.text.length - o.from.ch), (n = o.to.line), (r += n.text.length - o.to.ch);
                    }
                    return r;
                }
                function lr(e) {
                    var t = e.display,
                        r = e.doc;
                    (t.maxLine = qe(r, r.first)),
                        (t.maxLineLength = or(t.maxLine)),
                        (t.maxLineChanged = !0),
                        r.iter(function (e) {
                            var r = or(e);
                            r > t.maxLineLength && ((t.maxLineLength = r), (t.maxLine = e));
                        });
                }
                var ar = function (e, t, r) {
                    (this.text = e), Vt(this, t), (this.height = r ? r(this) : 1);
                };
                function sr(e, t, r, n) {
                    (e.text = t), e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), jt(e), Vt(e, r);
                    var i = n ? n(e) : 1;
                    i != e.height && Qe(e, i);
                }
                function ur(e) {
                    (e.parent = null), jt(e);
                }
                (ar.prototype.lineNo = function () {
                    return et(this);
                }),
                    xe(ar);
                var cr = {},
                    fr = {};
                function hr(e, t) {
                    if (!e || /^\s*$/.test(e)) return null;
                    var r = t.addModeClass ? fr : cr;
                    return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"));
                }
                function dr(e, t) {
                    var r = A("span", null, null, s ? "padding-right: .1px" : null),
                        n = { pre: A("pre", [r], "CodeMirror-line"), content: r, col: 0, pos: 0, cm: e, trailingSpace: !1, splitSpaces: e.getOption("lineWrapping") };
                    t.measure = {};
                    for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                        var o = i ? t.rest[i - 1] : t.line,
                            l = void 0;
                        (n.pos = 0), (n.addToken = gr), We(e.display.measure) && (l = he(o, e.doc.direction)) && (n.addToken = mr(n.addToken, l)), (n.map = []);
                        var a = t != e.display.externalMeasured && et(o);
                        br(o, n, mt(e, o, a)),
                            o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = H(o.styleClasses.bgClass, n.bgClass || "")), o.styleClasses.textClass && (n.textClass = H(o.styleClasses.textClass, n.textClass || ""))),
                            0 == n.map.length && n.map.push(0, 0, n.content.appendChild(De(e.display.measure))),
                            0 == i ? ((t.measure.map = n.map), (t.measure.cache = {})) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}));
                    }
                    if (s) {
                        var u = n.content.lastChild;
                        (/\bcm-tab\b/.test(u.className) || (u.querySelector && u.querySelector(".cm-tab"))) && (n.content.className = "cm-tab-wrap-hack");
                    }
                    return me(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = H(n.pre.className, n.textClass || "")), n;
                }
                function pr(e) {
                    var t = N("span", "•", "cm-invalidchar");
                    return (t.title = "\\u" + e.charCodeAt(0).toString(16)), t.setAttribute("aria-label", t.title), t;
                }
                function gr(e, t, r, n, i, o, s) {
                    if (t) {
                        var u,
                            c = e.splitSpaces ? vr(t, e.trailingSpace) : t,
                            f = e.cm.state.specialChars,
                            h = !1;
                        if (f.test(t)) {
                            u = document.createDocumentFragment();
                            var d = 0;
                            while (1) {
                                f.lastIndex = d;
                                var p = f.exec(t),
                                    g = p ? p.index - d : t.length - d;
                                if (g) {
                                    var v = document.createTextNode(c.slice(d, d + g));
                                    l && a < 9 ? u.appendChild(N("span", [v])) : u.appendChild(v), e.map.push(e.pos, e.pos + g, v), (e.col += g), (e.pos += g);
                                }
                                if (!p) break;
                                d += g + 1;
                                var m = void 0;
                                if ("\t" == p[0]) {
                                    var y = e.cm.options.tabSize,
                                        b = y - (e.col % y);
                                    (m = u.appendChild(N("span", X(b), "cm-tab"))), m.setAttribute("role", "presentation"), m.setAttribute("cm-text", "\t"), (e.col += b);
                                } else
                                    "\r" == p[0] || "\n" == p[0]
                                        ? ((m = u.appendChild(N("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar"))), m.setAttribute("cm-text", p[0]), (e.col += 1))
                                        : ((m = e.cm.options.specialCharPlaceholder(p[0])), m.setAttribute("cm-text", p[0]), l && a < 9 ? u.appendChild(N("span", [m])) : u.appendChild(m), (e.col += 1));
                                e.map.push(e.pos, e.pos + 1, m), e.pos++;
                            }
                        } else (e.col += t.length), (u = document.createTextNode(c)), e.map.push(e.pos, e.pos + t.length, u), l && a < 9 && (h = !0), (e.pos += t.length);
                        if (((e.trailingSpace = 32 == c.charCodeAt(t.length - 1)), r || n || i || h || o)) {
                            var w = r || "";
                            n && (w += n), i && (w += i);
                            var x = N("span", [u], w, o);
                            if (s) for (var C in s) s.hasOwnProperty(C) && "style" != C && "class" != C && x.setAttribute(C, s[C]);
                            return e.content.appendChild(x);
                        }
                        e.content.appendChild(u);
                    }
                }
                function vr(e, t) {
                    if (e.length > 1 && !/  /.test(e)) return e;
                    for (var r = t, n = "", i = 0; i < e.length; i++) {
                        var o = e.charAt(i);
                        " " != o || !r || (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) || (o = " "), (n += o), (r = " " == o);
                    }
                    return n;
                }
                function mr(e, t) {
                    return function (r, n, i, o, l, a, s) {
                        i = i ? i + " cm-force-border" : "cm-force-border";
                        for (var u = r.pos, c = u + n.length; ; ) {
                            for (var f = void 0, h = 0; h < t.length; h++) if (((f = t[h]), f.to > u && f.from <= u)) break;
                            if (f.to >= c) return e(r, n, i, o, l, a, s);
                            e(r, n.slice(0, f.to - u), i, o, null, a, s), (o = null), (n = n.slice(f.to - u)), (u = f.to);
                        }
                    };
                }
                function yr(e, t, r, n) {
                    var i = !n && r.widgetNode;
                    i && e.map.push(e.pos, e.pos + t, i),
                        !n && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", r.id)),
                        i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
                        (e.pos += t),
                        (e.trailingSpace = !1);
                }
                function br(e, t, r) {
                    var n = e.markedSpans,
                        i = e.text,
                        o = 0;
                    if (n)
                        for (var l, a, s, u, c, f, h, d = i.length, p = 0, g = 1, v = "", m = 0; ; ) {
                            if (m == p) {
                                (s = u = c = a = ""), (h = null), (f = null), (m = 1 / 0);
                                for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                                    var x = n[w],
                                        C = x.marker;
                                    if ("bookmark" == C.type && x.from == p && C.widgetNode) y.push(C);
                                    else if (x.from <= p && (null == x.to || x.to > p || (C.collapsed && x.to == p && x.from == p))) {
                                        if (
                                            (null != x.to && x.to != p && m > x.to && ((m = x.to), (u = "")),
                                            C.className && (s += " " + C.className),
                                            C.css && (a = (a ? a + ";" : "") + C.css),
                                            C.startStyle && x.from == p && (c += " " + C.startStyle),
                                            C.endStyle && x.to == m && (b || (b = [])).push(C.endStyle, x.to),
                                            C.title && ((h || (h = {})).title = C.title),
                                            C.attributes)
                                        )
                                            for (var k in C.attributes) (h || (h = {}))[k] = C.attributes[k];
                                        C.collapsed && (!f || Ut(f.marker, C) < 0) && (f = x);
                                    } else x.from > p && m > x.from && (m = x.from);
                                }
                                if (b) for (var S = 0; S < b.length; S += 2) b[S + 1] == m && (u += " " + b[S]);
                                if (!f || f.from == p) for (var L = 0; L < y.length; ++L) yr(t, 0, y[L]);
                                if (f && (f.from || 0) == p) {
                                    if ((yr(t, (null == f.to ? d + 1 : f.to) - p, f.marker, null == f.from), null == f.to)) return;
                                    f.to == p && (f = !1);
                                }
                            }
                            if (p >= d) break;
                            var M = Math.min(d, m);
                            while (1) {
                                if (v) {
                                    var T = p + v.length;
                                    if (!f) {
                                        var O = T > M ? v.slice(0, M - p) : v;
                                        t.addToken(t, O, l ? l + s : s, c, p + O.length == m ? u : "", a, h);
                                    }
                                    if (T >= M) {
                                        (v = v.slice(M - p)), (p = M);
                                        break;
                                    }
                                    (p = T), (c = "");
                                }
                                (v = i.slice(o, (o = r[g++]))), (l = hr(r[g++], t.cm.options));
                            }
                        }
                    else for (var N = 1; N < r.length; N += 2) t.addToken(t, i.slice(o, (o = r[N])), hr(r[N + 1], t.cm.options));
                }
                function wr(e, t, r) {
                    (this.line = t), (this.rest = Qt(t)), (this.size = this.rest ? et(Y(this.rest)) - r + 1 : 1), (this.node = this.text = null), (this.hidden = rr(e, t));
                }
                function xr(e, t, r) {
                    for (var n, i = [], o = t; o < r; o = n) {
                        var l = new wr(e.doc, qe(e.doc, o), o);
                        (n = o + l.size), i.push(l);
                    }
                    return i;
                }
                var Cr = null;
                function kr(e) {
                    Cr ? Cr.ops.push(e) : (e.ownsGroup = Cr = { ops: [e], delayedCallbacks: [] });
                }
                function Sr(e) {
                    var t = e.delayedCallbacks,
                        r = 0;
                    do {
                        for (; r < t.length; r++) t[r].call(null);
                        for (var n = 0; n < e.ops.length; n++) {
                            var i = e.ops[n];
                            if (i.cursorActivityHandlers) while (i.cursorActivityCalled < i.cursorActivityHandlers.length) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                        }
                    } while (r < t.length);
                }
                function Lr(e, t) {
                    var r = e.ownsGroup;
                    if (r)
                        try {
                            Sr(r);
                        } finally {
                            (Cr = null), t(r);
                        }
                }
                var Mr = null;
                function Tr(e, t) {
                    var r = ge(e, t);
                    if (r.length) {
                        var n,
                            i = Array.prototype.slice.call(arguments, 2);
                        Cr ? (n = Cr.delayedCallbacks) : Mr ? (n = Mr) : ((n = Mr = []), setTimeout(Or, 0));
                        for (
                            var o = function (e) {
                                    n.push(function () {
                                        return r[e].apply(null, i);
                                    });
                                },
                                l = 0;
                            l < r.length;
                            ++l
                        )
                            o(l);
                    }
                }
                function Or() {
                    var e = Mr;
                    Mr = null;
                    for (var t = 0; t < e.length; ++t) e[t]();
                }
                function Nr(e, t, r, n) {
                    for (var i = 0; i < t.changes.length; i++) {
                        var o = t.changes[i];
                        "text" == o ? Er(e, t) : "gutter" == o ? Fr(e, t, r, n) : "class" == o ? Hr(e, t) : "widget" == o && Pr(e, t, n);
                    }
                    t.changes = null;
                }
                function Ar(e) {
                    return (
                        e.node == e.text && ((e.node = N("div", null, null, "position: relative")), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), l && a < 8 && (e.node.style.zIndex = 2)),
                        e.node
                    );
                }
                function Dr(e, t) {
                    var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                    if ((r && (r += " CodeMirror-linebackground"), t.background)) r ? (t.background.className = r) : (t.background.parentNode.removeChild(t.background), (t.background = null));
                    else if (r) {
                        var n = Ar(t);
                        (t.background = n.insertBefore(N("div", null, r), n.firstChild)), e.display.input.setUneditable(t.background);
                    }
                }
                function Wr(e, t) {
                    var r = e.display.externalMeasured;
                    return r && r.line == t.line ? ((e.display.externalMeasured = null), (t.measure = r.measure), r.built) : dr(e, t);
                }
                function Er(e, t) {
                    var r = t.text.className,
                        n = Wr(e, t);
                    t.text == t.node && (t.node = n.pre),
                        t.text.parentNode.replaceChild(n.pre, t.text),
                        (t.text = n.pre),
                        n.bgClass != t.bgClass || n.textClass != t.textClass ? ((t.bgClass = n.bgClass), (t.textClass = n.textClass), Hr(e, t)) : r && (t.text.className = r);
                }
                function Hr(e, t) {
                    Dr(e, t), t.line.wrapClass ? (Ar(t).className = t.line.wrapClass) : t.node != t.text && (t.node.className = "");
                    var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                    t.text.className = r || "";
                }
                function Fr(e, t, r, n) {
                    if ((t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)), t.gutterBackground && (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)), t.line.gutterClass)) {
                        var i = Ar(t);
                        (t.gutterBackground = N("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px")),
                            e.display.input.setUneditable(t.gutterBackground),
                            i.insertBefore(t.gutterBackground, t.text);
                    }
                    var o = t.line.gutterMarkers;
                    if (e.options.lineNumbers || o) {
                        var l = Ar(t),
                            a = (t.gutter = N("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px"));
                        if (
                            (e.display.input.setUneditable(a),
                            l.insertBefore(a, t.text),
                            t.line.gutterClass && (a.className += " " + t.line.gutterClass),
                            !e.options.lineNumbers ||
                                (o && o["CodeMirror-linenumbers"]) ||
                                (t.lineNumber = a.appendChild(
                                    N("div", nt(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px")
                                )),
                            o)
                        )
                            for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                                var u = e.display.gutterSpecs[s].className,
                                    c = o.hasOwnProperty(u) && o[u];
                                c && a.appendChild(N("div", [c], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[u] + "px; width: " + n.gutterWidth[u] + "px"));
                            }
                    }
                }
                function Pr(e, t, r) {
                    t.alignable && (t.alignable = null);
                    for (var n = S("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o) (o = i.nextSibling), n.test(i.className) && t.node.removeChild(i);
                    zr(e, t, r);
                }
                function Ir(e, t, r, n) {
                    var i = Wr(e, t);
                    return (t.text = t.node = i.pre), i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), Hr(e, t), Fr(e, t, r, n), zr(e, t, n), t.node;
                }
                function zr(e, t, r) {
                    if ((Rr(e, t.line, t, r, !0), t.rest)) for (var n = 0; n < t.rest.length; n++) Rr(e, t.rest[n], t, r, !1);
                }
                function Rr(e, t, r, n, i) {
                    if (t.widgets)
                        for (var o = Ar(r), l = 0, a = t.widgets; l < a.length; ++l) {
                            var s = a[l],
                                u = N("div", [s.node], "CodeMirror-linewidget" + (s.className ? " " + s.className : ""));
                            s.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), Br(s, u, r, n), e.display.input.setUneditable(u), i && s.above ? o.insertBefore(u, r.gutter || r.text) : o.appendChild(u), Tr(s, "redraw");
                        }
                }
                function Br(e, t, r, n) {
                    if (e.noHScroll) {
                        (r.alignable || (r.alignable = [])).push(t);
                        var i = n.wrapperWidth;
                        (t.style.left = n.fixedPos + "px"), e.coverGutter || ((i -= n.gutterTotalWidth), (t.style.paddingLeft = n.gutterTotalWidth + "px")), (t.style.width = i + "px");
                    }
                    e.coverGutter && ((t.style.zIndex = 5), (t.style.position = "relative"), e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"));
                }
                function jr(e) {
                    if (null != e.height) return e.height;
                    var t = e.doc.cm;
                    if (!t) return 0;
                    if (!D(document.body, e.node)) {
                        var r = "position: relative;";
                        e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), O(t.display.measure, N("div", [e.node], null, r));
                    }
                    return (e.height = e.node.parentNode.offsetHeight);
                }
                function Vr(e, t) {
                    for (var r = Me(t); r != e.wrapper; r = r.parentNode) if (!r || (1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events")) || (r.parentNode == e.sizer && r != e.mover)) return !0;
                }
                function Gr(e) {
                    return e.lineSpace.offsetTop;
                }
                function _r(e) {
                    return e.mover.offsetHeight - e.lineSpace.offsetHeight;
                }
                function Ur(e) {
                    if (e.cachedPaddingH) return e.cachedPaddingH;
                    var t = O(e.measure, N("pre", "x", "CodeMirror-line-like")),
                        r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                        n = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) };
                    return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n;
                }
                function $r(e) {
                    return j - e.display.nativeBarWidth;
                }
                function Kr(e) {
                    return e.display.scroller.clientWidth - $r(e) - e.display.barWidth;
                }
                function Xr(e) {
                    return e.display.scroller.clientHeight - $r(e) - e.display.barHeight;
                }
                function Yr(e, t, r) {
                    var n = e.options.lineWrapping,
                        i = n && Kr(e);
                    if (!t.measure.heights || (n && t.measure.width != i)) {
                        var o = (t.measure.heights = []);
                        if (n) {
                            t.measure.width = i;
                            for (var l = t.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) {
                                var s = l[a],
                                    u = l[a + 1];
                                Math.abs(s.bottom - u.bottom) > 2 && o.push((s.bottom + u.top) / 2 - r.top);
                            }
                        }
                        o.push(r.bottom - r.top);
                    }
                }
                function qr(e, t, r) {
                    if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
                    for (var n = 0; n < e.rest.length; n++) if (e.rest[n] == t) return { map: e.measure.maps[n], cache: e.measure.caches[n] };
                    for (var i = 0; i < e.rest.length; i++) if (et(e.rest[i]) > r) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
                }
                function Zr(e, t) {
                    t = Zt(t);
                    var r = et(t),
                        n = (e.display.externalMeasured = new wr(e.doc, t, r));
                    n.lineN = r;
                    var i = (n.built = dr(e, n));
                    return (n.text = i.pre), O(e.display.lineMeasure, i.pre), n;
                }
                function Jr(e, t, r, n) {
                    return tn(e, en(e, t), r, n);
                }
                function Qr(e, t) {
                    if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Fn(e, t)];
                    var r = e.display.externalMeasured;
                    return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0;
                }
                function en(e, t) {
                    var r = et(t),
                        n = Qr(e, r);
                    n && !n.text ? (n = null) : n && n.changes && (Nr(e, n, r, An(e)), (e.curOp.forceUpdate = !0)), n || (n = Zr(e, t));
                    var i = qr(n, t, r);
                    return { line: t, view: n, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 };
                }
                function tn(e, t, r, n, i) {
                    t.before && (r = -1);
                    var o,
                        l = r + (n || "");
                    return (
                        t.cache.hasOwnProperty(l)
                            ? (o = t.cache[l])
                            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Yr(e, t.view, t.rect), (t.hasHeights = !0)), (o = an(e, t, r, n)), o.bogus || (t.cache[l] = o)),
                        { left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom }
                    );
                }
                var rn,
                    nn = { left: 0, right: 0, top: 0, bottom: 0 };
                function on(e, t, r) {
                    for (var n, i, o, l, a, s, u = 0; u < e.length; u += 3)
                        if (
                            ((a = e[u]),
                            (s = e[u + 1]),
                            t < a ? ((i = 0), (o = 1), (l = "left")) : t < s ? ((i = t - a), (o = i + 1)) : (u == e.length - 3 || (t == s && e[u + 3] > t)) && ((o = s - a), (i = o - 1), t >= s && (l = "right")),
                            null != i)
                        ) {
                            if (((n = e[u + 2]), a == s && r == (n.insertLeft ? "left" : "right") && (l = r), "left" == r && 0 == i)) while (u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft) (n = e[2 + (u -= 3)]), (l = "left");
                            if ("right" == r && i == s - a) while (u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft) (n = e[(u += 3) + 2]), (l = "right");
                            break;
                        }
                    return { node: n, start: i, end: o, collapse: l, coverStart: a, coverEnd: s };
                }
                function ln(e, t) {
                    var r = nn;
                    if ("left" == t) {
                        for (var n = 0; n < e.length; n++) if ((r = e[n]).left != r.right) break;
                    } else for (var i = e.length - 1; i >= 0; i--) if ((r = e[i]).left != r.right) break;
                    return r;
                }
                function an(e, t, r, n) {
                    var i,
                        o = on(t.map, r, n),
                        s = o.node,
                        u = o.start,
                        c = o.end,
                        f = o.collapse;
                    if (3 == s.nodeType) {
                        for (var h = 0; h < 4; h++) {
                            while (u && oe(t.line.text.charAt(o.coverStart + u))) --u;
                            while (o.coverStart + c < o.coverEnd && oe(t.line.text.charAt(o.coverStart + c))) ++c;
                            if (((i = l && a < 9 && 0 == u && c == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : ln(L(s, u, c).getClientRects(), n)), i.left || i.right || 0 == u)) break;
                            (c = u), (u -= 1), (f = "right");
                        }
                        l && a < 11 && (i = sn(e.display.measure, i));
                    } else {
                        var d;
                        u > 0 && (f = n = "right"), (i = e.options.lineWrapping && (d = s.getClientRects()).length > 1 ? d["right" == n ? d.length - 1 : 0] : s.getBoundingClientRect());
                    }
                    if (l && a < 9 && !u && (!i || (!i.left && !i.right))) {
                        var p = s.parentNode.getClientRects()[0];
                        i = p ? { left: p.left, right: p.left + Nn(e.display), top: p.top, bottom: p.bottom } : nn;
                    }
                    for (var g = i.top - t.rect.top, v = i.bottom - t.rect.top, m = (g + v) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1; b++) if (m < y[b]) break;
                    var w = b ? y[b - 1] : 0,
                        x = y[b],
                        C = { left: ("right" == f ? i.right : i.left) - t.rect.left, right: ("left" == f ? i.left : i.right) - t.rect.left, top: w, bottom: x };
                    return i.left || i.right || (C.bogus = !0), e.options.singleCursorHeightPerLine || ((C.rtop = g), (C.rbottom = v)), C;
                }
                function sn(e, t) {
                    if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Ie(e)) return t;
                    var r = screen.logicalXDPI / screen.deviceXDPI,
                        n = screen.logicalYDPI / screen.deviceYDPI;
                    return { left: t.left * r, right: t.right * r, top: t.top * n, bottom: t.bottom * n };
                }
                function un(e) {
                    if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
                }
                function cn(e) {
                    (e.display.externalMeasure = null), T(e.display.lineMeasure);
                    for (var t = 0; t < e.display.view.length; t++) un(e.display.view[t]);
                }
                function fn(e) {
                    cn(e), (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null), e.options.lineWrapping || (e.display.maxLineChanged = !0), (e.display.lineNumChars = null);
                }
                function hn() {
                    return c && v ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
                }
                function dn() {
                    return c && v ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop;
                }
                function pn(e) {
                    var t = 0;
                    if (e.widgets) for (var r = 0; r < e.widgets.length; ++r) e.widgets[r].above && (t += jr(e.widgets[r]));
                    return t;
                }
                function gn(e, t, r, n, i) {
                    if (!i) {
                        var o = pn(t);
                        (r.top += o), (r.bottom += o);
                    }
                    if ("line" == n) return r;
                    n || (n = "local");
                    var l = ir(t);
                    if (("local" == n ? (l += Gr(e.display)) : (l -= e.display.viewOffset), "page" == n || "window" == n)) {
                        var a = e.display.lineSpace.getBoundingClientRect();
                        l += a.top + ("window" == n ? 0 : dn());
                        var s = a.left + ("window" == n ? 0 : hn());
                        (r.left += s), (r.right += s);
                    }
                    return (r.top += l), (r.bottom += l), r;
                }
                function vn(e, t, r) {
                    if ("div" == r) return t;
                    var n = t.left,
                        i = t.top;
                    if ("page" == r) (n -= hn()), (i -= dn());
                    else if ("local" == r || !r) {
                        var o = e.display.sizer.getBoundingClientRect();
                        (n += o.left), (i += o.top);
                    }
                    var l = e.display.lineSpace.getBoundingClientRect();
                    return { left: n - l.left, top: i - l.top };
                }
                function mn(e, t, r, n, i) {
                    return n || (n = qe(e.doc, t.line)), gn(e, n, Jr(e, n, t.ch, i), r);
                }
                function yn(e, t, r, n, i, o) {
                    function l(t, l) {
                        var a = tn(e, i, t, l ? "right" : "left", o);
                        return l ? (a.left = a.right) : (a.right = a.left), gn(e, n, a, r);
                    }
                    (n = n || qe(e.doc, t.line)), i || (i = en(e, n));
                    var a = he(n, e.doc.direction),
                        s = t.ch,
                        u = t.sticky;
                    if ((s >= n.text.length ? ((s = n.text.length), (u = "before")) : s <= 0 && ((s = 0), (u = "after")), !a)) return l("before" == u ? s - 1 : s, "before" == u);
                    function c(e, t, r) {
                        var n = a[t],
                            i = 1 == n.level;
                        return l(r ? e - 1 : e, i != r);
                    }
                    var f = ce(a, s, u),
                        h = ue,
                        d = c(s, f, "before" == u);
                    return null != h && (d.other = c(s, h, "before" != u)), d;
                }
                function bn(e, t) {
                    var r = 0;
                    (t = ft(e.doc, t)), e.options.lineWrapping || (r = Nn(e.display) * t.ch);
                    var n = qe(e.doc, t.line),
                        i = ir(n) + Gr(e.display);
                    return { left: r, right: r, top: i, bottom: i + n.height };
                }
                function wn(e, t, r, n, i) {
                    var o = it(e, t, r);
                    return (o.xRel = i), n && (o.outside = n), o;
                }
                function xn(e, t, r) {
                    var n = e.doc;
                    if (((r += e.display.viewOffset), r < 0)) return wn(n.first, 0, null, -1, -1);
                    var i = tt(n, r),
                        o = n.first + n.size - 1;
                    if (i > o) return wn(n.first + n.size - 1, qe(n, o).text.length, null, 1, 1);
                    t < 0 && (t = 0);
                    for (var l = qe(n, i); ; ) {
                        var a = Ln(e, l, i, t, r),
                            s = Yt(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
                        if (!s) return a;
                        var u = s.find(1);
                        if (u.line == i) return u;
                        l = qe(n, (i = u.line));
                    }
                }
                function Cn(e, t, r, n) {
                    n -= pn(t);
                    var i = t.text.length,
                        o = ae(
                            function (t) {
                                return tn(e, r, t - 1).bottom <= n;
                            },
                            i,
                            0
                        );
                    return (
                        (i = ae(
                            function (t) {
                                return tn(e, r, t).top > n;
                            },
                            o,
                            i
                        )),
                        { begin: o, end: i }
                    );
                }
                function kn(e, t, r, n) {
                    r || (r = en(e, t));
                    var i = gn(e, t, tn(e, r, n), "line").top;
                    return Cn(e, t, r, i);
                }
                function Sn(e, t, r, n) {
                    return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t);
                }
                function Ln(e, t, r, n, i) {
                    i -= ir(t);
                    var o = en(e, t),
                        l = pn(t),
                        a = 0,
                        s = t.text.length,
                        u = !0,
                        c = he(t, e.doc.direction);
                    if (c) {
                        var f = (e.options.lineWrapping ? Tn : Mn)(e, t, r, o, c, n, i);
                        (u = 1 != f.level), (a = u ? f.from : f.to - 1), (s = u ? f.to : f.from - 1);
                    }
                    var h,
                        d,
                        p = null,
                        g = null,
                        v = ae(
                            function (t) {
                                var r = tn(e, o, t);
                                return (r.top += l), (r.bottom += l), !!Sn(r, n, i, !1) && (r.top <= i && r.left <= n && ((p = t), (g = r)), !0);
                            },
                            a,
                            s
                        ),
                        m = !1;
                    if (g) {
                        var y = n - g.left < g.right - n,
                            b = y == u;
                        (v = p + (b ? 0 : 1)), (d = b ? "after" : "before"), (h = y ? g.left : g.right);
                    } else {
                        u || (v != s && v != a) || v++, (d = 0 == v ? "after" : v == t.text.length ? "before" : tn(e, o, v - (u ? 1 : 0)).bottom + l <= i == u ? "after" : "before");
                        var w = yn(e, it(r, v, d), "line", t, o);
                        (h = w.left), (m = i < w.top ? -1 : i >= w.bottom ? 1 : 0);
                    }
                    return (v = le(t.text, v, 1)), wn(r, v, d, m, n - h);
                }
                function Mn(e, t, r, n, i, o, l) {
                    var a = ae(
                            function (a) {
                                var s = i[a],
                                    u = 1 != s.level;
                                return Sn(yn(e, it(r, u ? s.to : s.from, u ? "before" : "after"), "line", t, n), o, l, !0);
                            },
                            0,
                            i.length - 1
                        ),
                        s = i[a];
                    if (a > 0) {
                        var u = 1 != s.level,
                            c = yn(e, it(r, u ? s.from : s.to, u ? "after" : "before"), "line", t, n);
                        Sn(c, o, l, !0) && c.top > l && (s = i[a - 1]);
                    }
                    return s;
                }
                function Tn(e, t, r, n, i, o, l) {
                    var a = Cn(e, t, n, l),
                        s = a.begin,
                        u = a.end;
                    /\s/.test(t.text.charAt(u - 1)) && u--;
                    for (var c = null, f = null, h = 0; h < i.length; h++) {
                        var d = i[h];
                        if (!(d.from >= u || d.to <= s)) {
                            var p = 1 != d.level,
                                g = tn(e, n, p ? Math.min(u, d.to) - 1 : Math.max(s, d.from)).right,
                                v = g < o ? o - g + 1e9 : g - o;
                            (!c || f > v) && ((c = d), (f = v));
                        }
                    }
                    return c || (c = i[i.length - 1]), c.from < s && (c = { from: s, to: c.to, level: c.level }), c.to > u && (c = { from: c.from, to: u, level: c.level }), c;
                }
                function On(e) {
                    if (null != e.cachedTextHeight) return e.cachedTextHeight;
                    if (null == rn) {
                        rn = N("pre", null, "CodeMirror-line-like");
                        for (var t = 0; t < 49; ++t) rn.appendChild(document.createTextNode("x")), rn.appendChild(N("br"));
                        rn.appendChild(document.createTextNode("x"));
                    }
                    O(e.measure, rn);
                    var r = rn.offsetHeight / 50;
                    return r > 3 && (e.cachedTextHeight = r), T(e.measure), r || 1;
                }
                function Nn(e) {
                    if (null != e.cachedCharWidth) return e.cachedCharWidth;
                    var t = N("span", "xxxxxxxxxx"),
                        r = N("pre", [t], "CodeMirror-line-like");
                    O(e.measure, r);
                    var n = t.getBoundingClientRect(),
                        i = (n.right - n.left) / 10;
                    return i > 2 && (e.cachedCharWidth = i), i || 10;
                }
                function An(e) {
                    for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) {
                        var a = e.display.gutterSpecs[l].className;
                        (r[a] = o.offsetLeft + o.clientLeft + i), (n[a] = o.clientWidth);
                    }
                    return { fixedPos: Dn(t), gutterTotalWidth: t.gutters.offsetWidth, gutterLeft: r, gutterWidth: n, wrapperWidth: t.wrapper.clientWidth };
                }
                function Dn(e) {
                    return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
                }
                function Wn(e) {
                    var t = On(e.display),
                        r = e.options.lineWrapping,
                        n = r && Math.max(5, e.display.scroller.clientWidth / Nn(e.display) - 3);
                    return function (i) {
                        if (rr(e.doc, i)) return 0;
                        var o = 0;
                        if (i.widgets) for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
                        return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
                    };
                }
                function En(e) {
                    var t = e.doc,
                        r = Wn(e);
                    t.iter(function (e) {
                        var t = r(e);
                        t != e.height && Qe(e, t);
                    });
                }
                function Hn(e, t, r, n) {
                    var i = e.display;
                    if (!r && "true" == Me(t).getAttribute("cm-not-content")) return null;
                    var o,
                        l,
                        a = i.lineSpace.getBoundingClientRect();
                    try {
                        (o = t.clientX - a.left), (l = t.clientY - a.top);
                    } catch (t) {
                        return null;
                    }
                    var s,
                        u = xn(e, o, l);
                    if (n && u.xRel > 0 && (s = qe(e.doc, u.line).text).length == u.ch) {
                        var c = z(s, s.length, e.options.tabSize) - s.length;
                        u = it(u.line, Math.max(0, Math.round((o - Ur(e.display).left) / Nn(e.display)) - c));
                    }
                    return u;
                }
                function Fn(e, t) {
                    if (t >= e.display.viewTo) return null;
                    if (((t -= e.display.viewFrom), t < 0)) return null;
                    for (var r = e.display.view, n = 0; n < r.length; n++) if (((t -= r[n].size), t < 0)) return n;
                }
                function Pn(e, t, r, n) {
                    null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
                    var i = e.display;
                    if ((n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), (e.curOp.viewChanged = !0), t >= i.viewTo)) Nt && er(e.doc, t) < i.viewTo && zn(e);
                    else if (r <= i.viewFrom) Nt && tr(e.doc, r + n) > i.viewFrom ? zn(e) : ((i.viewFrom += n), (i.viewTo += n));
                    else if (t <= i.viewFrom && r >= i.viewTo) zn(e);
                    else if (t <= i.viewFrom) {
                        var o = Rn(e, r, r + n, 1);
                        o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += n)) : zn(e);
                    } else if (r >= i.viewTo) {
                        var l = Rn(e, t, t, -1);
                        l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : zn(e);
                    } else {
                        var a = Rn(e, t, t, -1),
                            s = Rn(e, r, r + n, 1);
                        a && s ? ((i.view = i.view.slice(0, a.index).concat(xr(e, a.lineN, s.lineN)).concat(i.view.slice(s.index))), (i.viewTo += n)) : zn(e);
                    }
                    var u = i.externalMeasured;
                    u && (r < u.lineN ? (u.lineN += n) : t < u.lineN + u.size && (i.externalMeasured = null));
                }
                function In(e, t, r) {
                    e.curOp.viewChanged = !0;
                    var n = e.display,
                        i = e.display.externalMeasured;
                    if ((i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo))) {
                        var o = n.view[Fn(e, t)];
                        if (null != o.node) {
                            var l = o.changes || (o.changes = []);
                            -1 == B(l, r) && l.push(r);
                        }
                    }
                }
                function zn(e) {
                    (e.display.viewFrom = e.display.viewTo = e.doc.first), (e.display.view = []), (e.display.viewOffset = 0);
                }
                function Rn(e, t, r, n) {
                    var i,
                        o = Fn(e, t),
                        l = e.display.view;
                    if (!Nt || r == e.doc.first + e.doc.size) return { index: o, lineN: r };
                    for (var a = e.display.viewFrom, s = 0; s < o; s++) a += l[s].size;
                    if (a != t) {
                        if (n > 0) {
                            if (o == l.length - 1) return null;
                            (i = a + l[o].size - t), o++;
                        } else i = a - t;
                        (t += i), (r += i);
                    }
                    while (er(e.doc, r) != r) {
                        if (o == (n < 0 ? 0 : l.length - 1)) return null;
                        (r += n * l[o - (n < 0 ? 1 : 0)].size), (o += n);
                    }
                    return { index: o, lineN: r };
                }
                function Bn(e, t, r) {
                    var n = e.display,
                        i = n.view;
                    0 == i.length || t >= n.viewTo || r <= n.viewFrom
                        ? ((n.view = xr(e, t, r)), (n.viewFrom = t))
                        : (n.viewFrom > t ? (n.view = xr(e, t, n.viewFrom).concat(n.view)) : n.viewFrom < t && (n.view = n.view.slice(Fn(e, t))),
                          (n.viewFrom = t),
                          n.viewTo < r ? (n.view = n.view.concat(xr(e, n.viewTo, r))) : n.viewTo > r && (n.view = n.view.slice(0, Fn(e, r)))),
                        (n.viewTo = r);
                }
                function jn(e) {
                    for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.hidden || (i.node && !i.changes) || ++r;
                    }
                    return r;
                }
                function Vn(e) {
                    e.display.input.showSelection(e.display.input.prepareSelection());
                }
                function Gn(e, t) {
                    void 0 === t && (t = !0);
                    for (var r = e.doc, n = {}, i = (n.cursors = document.createDocumentFragment()), o = (n.selection = document.createDocumentFragment()), l = 0; l < r.sel.ranges.length; l++)
                        if (t || l != r.sel.primIndex) {
                            var a = r.sel.ranges[l];
                            if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
                                var s = a.empty();
                                (s || e.options.showCursorWhenSelecting) && _n(e, a.head, i), s || $n(e, a, o);
                            }
                        }
                    return n;
                }
                function _n(e, t, r) {
                    var n = yn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                        i = r.appendChild(N("div", " ", "CodeMirror-cursor"));
                    if (((i.style.left = n.left + "px"), (i.style.top = n.top + "px"), (i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px"), n.other)) {
                        var o = r.appendChild(N("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                        (o.style.display = ""), (o.style.left = n.other.left + "px"), (o.style.top = n.other.top + "px"), (o.style.height = 0.85 * (n.other.bottom - n.other.top) + "px");
                    }
                }
                function Un(e, t) {
                    return e.top - t.top || e.left - t.left;
                }
                function $n(e, t, r) {
                    var n = e.display,
                        i = e.doc,
                        o = document.createDocumentFragment(),
                        l = Ur(e.display),
                        a = l.left,
                        s = Math.max(n.sizerWidth, Kr(e) - n.sizer.offsetLeft) - l.right,
                        u = "ltr" == i.direction;
                    function c(e, t, r, n) {
                        t < 0 && (t = 0),
                            (t = Math.round(t)),
                            (n = Math.round(n)),
                            o.appendChild(
                                N(
                                    "div",
                                    null,
                                    "CodeMirror-selected",
                                    "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? s - e : r) + "px;\n                             height: " + (n - t) + "px"
                                )
                            );
                    }
                    function f(t, r, n) {
                        var o,
                            l,
                            f = qe(i, t),
                            h = f.text.length;
                        function d(r, n) {
                            return mn(e, it(t, r), "div", f, n);
                        }
                        function p(t, r, n) {
                            var i = kn(e, f, null, t),
                                o = ("ltr" == r) == ("after" == n) ? "left" : "right",
                                l = "after" == n ? i.begin : i.end - (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1);
                            return d(l, o)[o];
                        }
                        var g = he(f, i.direction);
                        return (
                            se(g, r || 0, null == n ? h : n, function (e, t, i, f) {
                                var v = "ltr" == i,
                                    m = d(e, v ? "left" : "right"),
                                    y = d(t - 1, v ? "right" : "left"),
                                    b = null == r && 0 == e,
                                    w = null == n && t == h,
                                    x = 0 == f,
                                    C = !g || f == g.length - 1;
                                if (y.top - m.top <= 3) {
                                    var k = (u ? b : w) && x,
                                        S = (u ? w : b) && C,
                                        L = k ? a : (v ? m : y).left,
                                        M = S ? s : (v ? y : m).right;
                                    c(L, m.top, M - L, m.bottom);
                                } else {
                                    var T, O, N, A;
                                    v
                                        ? ((T = u && b && x ? a : m.left), (O = u ? s : p(e, i, "before")), (N = u ? a : p(t, i, "after")), (A = u && w && C ? s : y.right))
                                        : ((T = u ? p(e, i, "before") : a), (O = !u && b && x ? s : m.right), (N = !u && w && C ? a : y.left), (A = u ? p(t, i, "after") : s)),
                                        c(T, m.top, O - T, m.bottom),
                                        m.bottom < y.top && c(a, m.bottom, null, y.top),
                                        c(N, y.top, A - N, y.bottom);
                                }
                                (!o || Un(m, o) < 0) && (o = m), Un(y, o) < 0 && (o = y), (!l || Un(m, l) < 0) && (l = m), Un(y, l) < 0 && (l = y);
                            }),
                            { start: o, end: l }
                        );
                    }
                    var h = t.from(),
                        d = t.to();
                    if (h.line == d.line) f(h.line, h.ch, d.ch);
                    else {
                        var p = qe(i, h.line),
                            g = qe(i, d.line),
                            v = Zt(p) == Zt(g),
                            m = f(h.line, h.ch, v ? p.text.length + 1 : null).end,
                            y = f(d.line, v ? 0 : null, d.ch).start;
                        v && (m.top < y.top - 2 ? (c(m.right, m.top, null, m.bottom), c(a, y.top, y.left, y.bottom)) : c(m.right, m.top, y.left - m.right, m.bottom)), m.bottom < y.top && c(a, m.bottom, null, y.top);
                    }
                    r.appendChild(o);
                }
                function Kn(e) {
                    if (e.state.focused) {
                        var t = e.display;
                        clearInterval(t.blinker);
                        var r = !0;
                        (t.cursorDiv.style.visibility = ""),
                            e.options.cursorBlinkRate > 0
                                ? (t.blinker = setInterval(function () {
                                      return (t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden");
                                  }, e.options.cursorBlinkRate))
                                : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
                    }
                }
                function Xn(e) {
                    e.state.focused || (e.display.input.focus(), qn(e));
                }
                function Yn(e) {
                    (e.state.delayingBlurEvent = !0),
                        setTimeout(function () {
                            e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), Zn(e));
                        }, 100);
                }
                function qn(e, t) {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
                        "nocursor" != e.options.readOnly &&
                            (e.state.focused ||
                                (me(e, "focus", e, t),
                                (e.state.focused = !0),
                                E(e.display.wrapper, "CodeMirror-focused"),
                                e.curOp ||
                                    e.display.selForContextMenu == e.doc.sel ||
                                    (e.display.input.reset(),
                                    s &&
                                        setTimeout(function () {
                                            return e.display.input.reset(!0);
                                        }, 20)),
                                e.display.input.receivedFocus()),
                            Kn(e));
                }
                function Zn(e, t) {
                    e.state.delayingBlurEvent ||
                        (e.state.focused && (me(e, "blur", e, t), (e.state.focused = !1), M(e.display.wrapper, "CodeMirror-focused")),
                        clearInterval(e.display.blinker),
                        setTimeout(function () {
                            e.state.focused || (e.display.shift = !1);
                        }, 150));
                }
                function Jn(e) {
                    for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
                        var i = t.view[n],
                            o = e.options.lineWrapping,
                            s = void 0,
                            u = 0;
                        if (!i.hidden) {
                            if (l && a < 8) {
                                var c = i.node.offsetTop + i.node.offsetHeight;
                                (s = c - r), (r = c);
                            } else {
                                var f = i.node.getBoundingClientRect();
                                (s = f.bottom - f.top), !o && i.text.firstChild && (u = i.text.firstChild.getBoundingClientRect().right - f.left - 1);
                            }
                            var h = i.line.height - s;
                            if ((h > 0.005 || h < -0.005) && (Qe(i.line, s), Qn(i.line), i.rest)) for (var d = 0; d < i.rest.length; d++) Qn(i.rest[d]);
                            if (u > e.display.sizerWidth) {
                                var p = Math.ceil(u / Nn(e.display));
                                p > e.display.maxLineLength && ((e.display.maxLineLength = p), (e.display.maxLine = i.line), (e.display.maxLineChanged = !0));
                            }
                        }
                    }
                }
                function Qn(e) {
                    if (e.widgets)
                        for (var t = 0; t < e.widgets.length; ++t) {
                            var r = e.widgets[t],
                                n = r.node.parentNode;
                            n && (r.height = n.offsetHeight);
                        }
                }
                function ei(e, t, r) {
                    var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
                    n = Math.floor(n - Gr(e));
                    var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
                        o = tt(t, n),
                        l = tt(t, i);
                    if (r && r.ensure) {
                        var a = r.ensure.from.line,
                            s = r.ensure.to.line;
                        a < o ? ((o = a), (l = tt(t, ir(qe(t, a)) + e.wrapper.clientHeight))) : Math.min(s, t.lastLine()) >= l && ((o = tt(t, ir(qe(t, s)) - e.wrapper.clientHeight)), (l = s));
                    }
                    return { from: o, to: Math.max(l, o + 1) };
                }
                function ti(e, t) {
                    if (!ye(e, "scrollCursorIntoView")) {
                        var r = e.display,
                            n = r.sizer.getBoundingClientRect(),
                            i = null;
                        if ((t.top + n.top < 0 ? (i = !0) : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p)) {
                            var o = N(
                                "div",
                                "​",
                                null,
                                "position: absolute;\n                         top: " +
                                    (t.top - r.viewOffset - Gr(e.display)) +
                                    "px;\n                         height: " +
                                    (t.bottom - t.top + $r(e) + r.barHeight) +
                                    "px;\n                         left: " +
                                    t.left +
                                    "px; width: " +
                                    Math.max(2, t.right - t.left) +
                                    "px;"
                            );
                            e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
                        }
                    }
                }
                function ri(e, t, r, n) {
                    var i;
                    null == n && (n = 0), e.options.lineWrapping || t != r || ((t = t.ch ? it(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t), (r = "before" == t.sticky ? it(t.line, t.ch + 1, "before") : t));
                    for (var o = 0; o < 5; o++) {
                        var l = !1,
                            a = yn(e, t),
                            s = r && r != t ? yn(e, r) : a;
                        i = { left: Math.min(a.left, s.left), top: Math.min(a.top, s.top) - n, right: Math.max(a.left, s.left), bottom: Math.max(a.bottom, s.bottom) + n };
                        var u = ii(e, i),
                            c = e.doc.scrollTop,
                            f = e.doc.scrollLeft;
                        if ((null != u.scrollTop && (fi(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (l = !0)), null != u.scrollLeft && (di(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - f) > 1 && (l = !0)), !l)) break;
                    }
                    return i;
                }
                function ni(e, t) {
                    var r = ii(e, t);
                    null != r.scrollTop && fi(e, r.scrollTop), null != r.scrollLeft && di(e, r.scrollLeft);
                }
                function ii(e, t) {
                    var r = e.display,
                        n = On(e.display);
                    t.top < 0 && (t.top = 0);
                    var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop,
                        o = Xr(e),
                        l = {};
                    t.bottom - t.top > o && (t.bottom = t.top + o);
                    var a = e.doc.height + _r(r),
                        s = t.top < n,
                        u = t.bottom > a - n;
                    if (t.top < i) l.scrollTop = s ? 0 : t.top;
                    else if (t.bottom > i + o) {
                        var c = Math.min(t.top, (u ? a : t.bottom) - o);
                        c != i && (l.scrollTop = c);
                    }
                    var f = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft,
                        h = Kr(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0),
                        d = t.right - t.left > h;
                    return d && (t.right = t.left + h), t.left < 10 ? (l.scrollLeft = 0) : t.left < f ? (l.scrollLeft = Math.max(0, t.left - (d ? 0 : 10))) : t.right > h + f - 3 && (l.scrollLeft = t.right + (d ? 0 : 10) - h), l;
                }
                function oi(e, t) {
                    null != t && (ui(e), (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
                }
                function li(e) {
                    ui(e);
                    var t = e.getCursor();
                    e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
                }
                function ai(e, t, r) {
                    (null == t && null == r) || ui(e), null != t && (e.curOp.scrollLeft = t), null != r && (e.curOp.scrollTop = r);
                }
                function si(e, t) {
                    ui(e), (e.curOp.scrollToPos = t);
                }
                function ui(e) {
                    var t = e.curOp.scrollToPos;
                    if (t) {
                        e.curOp.scrollToPos = null;
                        var r = bn(e, t.from),
                            n = bn(e, t.to);
                        ci(e, r, n, t.margin);
                    }
                }
                function ci(e, t, r, n) {
                    var i = ii(e, { left: Math.min(t.left, r.left), top: Math.min(t.top, r.top) - n, right: Math.max(t.right, r.right), bottom: Math.max(t.bottom, r.bottom) + n });
                    ai(e, i.scrollLeft, i.scrollTop);
                }
                function fi(e, t) {
                    Math.abs(e.doc.scrollTop - t) < 2 || (r || Vi(e, { top: t }), hi(e, t, !0), r && Vi(e), Hi(e, 100));
                }
                function hi(e, t, r) {
                    (t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t))),
                        (e.display.scroller.scrollTop != t || r) && ((e.doc.scrollTop = t), e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
                }
                function di(e, t, r, n) {
                    (t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth))),
                        ((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n) ||
                            ((e.doc.scrollLeft = t), $i(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
                }
                function pi(e) {
                    var t = e.display,
                        r = t.gutters.offsetWidth,
                        n = Math.round(e.doc.height + _r(e.display));
                    return {
                        clientHeight: t.scroller.clientHeight,
                        viewHeight: t.wrapper.clientHeight,
                        scrollWidth: t.scroller.scrollWidth,
                        clientWidth: t.scroller.clientWidth,
                        viewWidth: t.wrapper.clientWidth,
                        barLeft: e.options.fixedGutter ? r : 0,
                        docHeight: n,
                        scrollHeight: n + $r(e) + t.barHeight,
                        nativeBarWidth: t.nativeBarWidth,
                        gutterWidth: r,
                    };
                }
                var gi = function (e, t, r) {
                    this.cm = r;
                    var n = (this.vert = N("div", [N("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")),
                        i = (this.horiz = N("div", [N("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar"));
                    (n.tabIndex = i.tabIndex = -1),
                        e(n),
                        e(i),
                        pe(n, "scroll", function () {
                            n.clientHeight && t(n.scrollTop, "vertical");
                        }),
                        pe(i, "scroll", function () {
                            i.clientWidth && t(i.scrollLeft, "horizontal");
                        }),
                        (this.checkedZeroWidth = !1),
                        l && a < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
                };
                (gi.prototype.update = function (e) {
                    var t = e.scrollWidth > e.clientWidth + 1,
                        r = e.scrollHeight > e.clientHeight + 1,
                        n = e.nativeBarWidth;
                    if (r) {
                        (this.vert.style.display = "block"), (this.vert.style.bottom = t ? n + "px" : "0");
                        var i = e.viewHeight - (t ? n : 0);
                        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
                    } else (this.vert.style.display = ""), (this.vert.firstChild.style.height = "0");
                    if (t) {
                        (this.horiz.style.display = "block"), (this.horiz.style.right = r ? n + "px" : "0"), (this.horiz.style.left = e.barLeft + "px");
                        var o = e.viewWidth - e.barLeft - (r ? n : 0);
                        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
                    } else (this.horiz.style.display = ""), (this.horiz.firstChild.style.width = "0");
                    return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)), { right: r ? n : 0, bottom: t ? n : 0 };
                }),
                    (gi.prototype.setScrollLeft = function (e) {
                        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
                    }),
                    (gi.prototype.setScrollTop = function (e) {
                        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
                    }),
                    (gi.prototype.zeroWidthHack = function () {
                        var e = y && !d ? "12px" : "18px";
                        (this.horiz.style.height = this.vert.style.width = e), (this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"), (this.disableHoriz = new R()), (this.disableVert = new R());
                    }),
                    (gi.prototype.enableZeroWidthBar = function (e, t, r) {
                        function n() {
                            var i = e.getBoundingClientRect(),
                                o = "vert" == r ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
                            o != e ? (e.style.pointerEvents = "none") : t.set(1e3, n);
                        }
                        (e.style.pointerEvents = "auto"), t.set(1e3, n);
                    }),
                    (gi.prototype.clear = function () {
                        var e = this.horiz.parentNode;
                        e.removeChild(this.horiz), e.removeChild(this.vert);
                    });
                var vi = function () {};
                function mi(e, t) {
                    t || (t = pi(e));
                    var r = e.display.barWidth,
                        n = e.display.barHeight;
                    yi(e, t);
                    for (var i = 0; (i < 4 && r != e.display.barWidth) || n != e.display.barHeight; i++) r != e.display.barWidth && e.options.lineWrapping && Jn(e), yi(e, pi(e)), (r = e.display.barWidth), (n = e.display.barHeight);
                }
                function yi(e, t) {
                    var r = e.display,
                        n = r.scrollbars.update(t);
                    (r.sizer.style.paddingRight = (r.barWidth = n.right) + "px"),
                        (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px"),
                        (r.heightForcer.style.borderBottom = n.bottom + "px solid transparent"),
                        n.right && n.bottom ? ((r.scrollbarFiller.style.display = "block"), (r.scrollbarFiller.style.height = n.bottom + "px"), (r.scrollbarFiller.style.width = n.right + "px")) : (r.scrollbarFiller.style.display = ""),
                        n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
                            ? ((r.gutterFiller.style.display = "block"), (r.gutterFiller.style.height = n.bottom + "px"), (r.gutterFiller.style.width = t.gutterWidth + "px"))
                            : (r.gutterFiller.style.display = "");
                }
                (vi.prototype.update = function () {
                    return { bottom: 0, right: 0 };
                }),
                    (vi.prototype.setScrollLeft = function () {}),
                    (vi.prototype.setScrollTop = function () {}),
                    (vi.prototype.clear = function () {});
                var bi = { native: gi, null: vi };
                function wi(e) {
                    e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && M(e.display.wrapper, e.display.scrollbars.addClass)),
                        (e.display.scrollbars = new bi[e.options.scrollbarStyle](
                            function (t) {
                                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                                    pe(t, "mousedown", function () {
                                        e.state.focused &&
                                            setTimeout(function () {
                                                return e.display.input.focus();
                                            }, 0);
                                    }),
                                    t.setAttribute("cm-not-content", "true");
                            },
                            function (t, r) {
                                "horizontal" == r ? di(e, t) : fi(e, t);
                            },
                            e
                        )),
                        e.display.scrollbars.addClass && E(e.display.wrapper, e.display.scrollbars.addClass);
                }
                var xi = 0;
                function Ci(e) {
                    (e.curOp = {
                        cm: e,
                        viewChanged: !1,
                        startHeight: e.doc.height,
                        forceUpdate: !1,
                        updateInput: 0,
                        typing: !1,
                        changeObjs: null,
                        cursorActivityHandlers: null,
                        cursorActivityCalled: 0,
                        selectionChanged: !1,
                        updateMaxLine: !1,
                        scrollLeft: null,
                        scrollTop: null,
                        scrollToPos: null,
                        focus: !1,
                        id: ++xi,
                    }),
                        kr(e.curOp);
                }
                function ki(e) {
                    var t = e.curOp;
                    t &&
                        Lr(t, function (e) {
                            for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                            Si(e);
                        });
                }
                function Si(e) {
                    for (var t = e.ops, r = 0; r < t.length; r++) Li(t[r]);
                    for (var n = 0; n < t.length; n++) Mi(t[n]);
                    for (var i = 0; i < t.length; i++) Ti(t[i]);
                    for (var o = 0; o < t.length; o++) Oi(t[o]);
                    for (var l = 0; l < t.length; l++) Ni(t[l]);
                }
                function Li(e) {
                    var t = e.cm,
                        r = t.display;
                    Ii(t),
                        e.updateMaxLine && lr(t),
                        (e.mustUpdate =
                            e.viewChanged || e.forceUpdate || null != e.scrollTop || (e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo)) || (r.maxLineChanged && t.options.lineWrapping)),
                        (e.update = e.mustUpdate && new Pi(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate));
                }
                function Mi(e) {
                    e.updatedDisplay = e.mustUpdate && Bi(e.cm, e.update);
                }
                function Ti(e) {
                    var t = e.cm,
                        r = t.display;
                    e.updatedDisplay && Jn(t),
                        (e.barMeasure = pi(t)),
                        r.maxLineChanged &&
                            !t.options.lineWrapping &&
                            ((e.adjustWidthTo = Jr(t, r.maxLine, r.maxLine.text.length).left + 3),
                            (t.display.sizerWidth = e.adjustWidthTo),
                            (e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + $r(t) + t.display.barWidth)),
                            (e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - Kr(t)))),
                        (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection());
                }
                function Oi(e) {
                    var t = e.cm;
                    null != e.adjustWidthTo &&
                        ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"), e.maxScrollLeft < t.doc.scrollLeft && di(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), (t.display.maxLineChanged = !1));
                    var r = e.focus && e.focus == W();
                    e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r),
                        (e.updatedDisplay || e.startHeight != t.doc.height) && mi(t, e.barMeasure),
                        e.updatedDisplay && Ui(t, e.barMeasure),
                        e.selectionChanged && Kn(t),
                        t.state.focused && e.updateInput && t.display.input.reset(e.typing),
                        r && Xn(e.cm);
                }
                function Ni(e) {
                    var t = e.cm,
                        r = t.display,
                        n = t.doc;
                    if (
                        (e.updatedDisplay && ji(t, e.update),
                        null == r.wheelStartX || (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) || (r.wheelStartX = r.wheelStartY = null),
                        null != e.scrollTop && hi(t, e.scrollTop, e.forceScroll),
                        null != e.scrollLeft && di(t, e.scrollLeft, !0, !0),
                        e.scrollToPos)
                    ) {
                        var i = ri(t, ft(n, e.scrollToPos.from), ft(n, e.scrollToPos.to), e.scrollToPos.margin);
                        ti(t, i);
                    }
                    var o = e.maybeHiddenMarkers,
                        l = e.maybeUnhiddenMarkers;
                    if (o) for (var a = 0; a < o.length; ++a) o[a].lines.length || me(o[a], "hide");
                    if (l) for (var s = 0; s < l.length; ++s) l[s].lines.length && me(l[s], "unhide");
                    r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && me(t, "changes", t, e.changeObjs), e.update && e.update.finish();
                }
                function Ai(e, t) {
                    if (e.curOp) return t();
                    Ci(e);
                    try {
                        return t();
                    } finally {
                        ki(e);
                    }
                }
                function Di(e, t) {
                    return function () {
                        if (e.curOp) return t.apply(e, arguments);
                        Ci(e);
                        try {
                            return t.apply(e, arguments);
                        } finally {
                            ki(e);
                        }
                    };
                }
                function Wi(e) {
                    return function () {
                        if (this.curOp) return e.apply(this, arguments);
                        Ci(this);
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            ki(this);
                        }
                    };
                }
                function Ei(e) {
                    return function () {
                        var t = this.cm;
                        if (!t || t.curOp) return e.apply(this, arguments);
                        Ci(t);
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            ki(t);
                        }
                    };
                }
                function Hi(e, t) {
                    e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, P(Fi, e));
                }
                function Fi(e) {
                    var t = e.doc;
                    if (!(t.highlightFrontier >= e.display.viewTo)) {
                        var r = +new Date() + e.options.workTime,
                            n = yt(e, t.highlightFrontier),
                            i = [];
                        t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
                            if (n.line >= e.display.viewFrom) {
                                var l = o.styles,
                                    a = o.text.length > e.options.maxHighlightLength ? $e(t.mode, n.state) : null,
                                    s = vt(e, o, n, !0);
                                a && (n.state = a), (o.styles = s.styles);
                                var u = o.styleClasses,
                                    c = s.classes;
                                c ? (o.styleClasses = c) : u && (o.styleClasses = null);
                                for (var f = !l || l.length != o.styles.length || (u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass)), h = 0; !f && h < l.length; ++h) f = l[h] != o.styles[h];
                                f && i.push(n.line), (o.stateAfter = n.save()), n.nextLine();
                            } else o.text.length <= e.options.maxHighlightLength && bt(e, o.text, n), (o.stateAfter = n.line % 5 == 0 ? n.save() : null), n.nextLine();
                            if (+new Date() > r) return Hi(e, e.options.workDelay), !0;
                        }),
                            (t.highlightFrontier = n.line),
                            (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
                            i.length &&
                                Ai(e, function () {
                                    for (var t = 0; t < i.length; t++) In(e, i[t], "text");
                                });
                    }
                }
                var Pi = function (e, t, r) {
                    var n = e.display;
                    (this.viewport = t),
                        (this.visible = ei(n, e.doc, t)),
                        (this.editorIsHidden = !n.wrapper.offsetWidth),
                        (this.wrapperHeight = n.wrapper.clientHeight),
                        (this.wrapperWidth = n.wrapper.clientWidth),
                        (this.oldDisplayWidth = Kr(e)),
                        (this.force = r),
                        (this.dims = An(e)),
                        (this.events = []);
                };
                function Ii(e) {
                    var t = e.display;
                    !t.scrollbarsClipped &&
                        t.scroller.offsetWidth &&
                        ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
                        (t.heightForcer.style.height = $r(e) + "px"),
                        (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
                        (t.sizer.style.borderRightWidth = $r(e) + "px"),
                        (t.scrollbarsClipped = !0));
                }
                function zi(e) {
                    if (e.hasFocus()) return null;
                    var t = W();
                    if (!t || !D(e.display.lineDiv, t)) return null;
                    var r = { activeElt: t };
                    if (window.getSelection) {
                        var n = window.getSelection();
                        n.anchorNode && n.extend && D(e.display.lineDiv, n.anchorNode) && ((r.anchorNode = n.anchorNode), (r.anchorOffset = n.anchorOffset), (r.focusNode = n.focusNode), (r.focusOffset = n.focusOffset));
                    }
                    return r;
                }
                function Ri(e) {
                    if (e && e.activeElt && e.activeElt != W() && (e.activeElt.focus(), e.anchorNode && D(document.body, e.anchorNode) && D(document.body, e.focusNode))) {
                        var t = window.getSelection(),
                            r = document.createRange();
                        r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), t.removeAllRanges(), t.addRange(r), t.extend(e.focusNode, e.focusOffset);
                    }
                }
                function Bi(e, t) {
                    var r = e.display,
                        n = e.doc;
                    if (t.editorIsHidden) return zn(e), !1;
                    if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == jn(e)) return !1;
                    Ki(e) && (zn(e), (t.dims = An(e)));
                    var i = n.first + n.size,
                        o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
                        l = Math.min(i, t.visible.to + e.options.viewportMargin);
                    r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)), Nt && ((o = er(e.doc, o)), (l = tr(e.doc, l)));
                    var a = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
                    Bn(e, o, l), (r.viewOffset = ir(qe(e.doc, r.viewFrom))), (e.display.mover.style.top = r.viewOffset + "px");
                    var s = jn(e);
                    if (!a && 0 == s && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
                    var u = zi(e);
                    return (
                        s > 4 && (r.lineDiv.style.display = "none"),
                        Gi(e, r.updateLineNumbers, t.dims),
                        s > 4 && (r.lineDiv.style.display = ""),
                        (r.renderedView = r.view),
                        Ri(u),
                        T(r.cursorDiv),
                        T(r.selectionDiv),
                        (r.gutters.style.height = r.sizer.style.minHeight = 0),
                        a && ((r.lastWrapHeight = t.wrapperHeight), (r.lastWrapWidth = t.wrapperWidth), Hi(e, 400)),
                        (r.updateLineNumbers = null),
                        !0
                    );
                }
                function ji(e, t) {
                    for (var r = t.viewport, n = !0; ; n = !1) {
                        if (n && e.options.lineWrapping && t.oldDisplayWidth != Kr(e)) n && (t.visible = ei(e.display, e.doc, r));
                        else if ((r && null != r.top && (r = { top: Math.min(e.doc.height + _r(e.display) - Xr(e), r.top) }), (t.visible = ei(e.display, e.doc, r)), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))
                            break;
                        if (!Bi(e, t)) break;
                        Jn(e);
                        var i = pi(e);
                        Vn(e), mi(e, i), Ui(e, i), (t.force = !1);
                    }
                    t.signal(e, "update", e),
                        (e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo) ||
                            (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), (e.display.reportedViewFrom = e.display.viewFrom), (e.display.reportedViewTo = e.display.viewTo));
                }
                function Vi(e, t) {
                    var r = new Pi(e, t);
                    if (Bi(e, r)) {
                        Jn(e), ji(e, r);
                        var n = pi(e);
                        Vn(e), mi(e, n), Ui(e, n), r.finish();
                    }
                }
                function Gi(e, t, r) {
                    var n = e.display,
                        i = e.options.lineNumbers,
                        o = n.lineDiv,
                        l = o.firstChild;
                    function a(t) {
                        var r = t.nextSibling;
                        return s && y && e.display.currentWheelTarget == t ? (t.style.display = "none") : t.parentNode.removeChild(t), r;
                    }
                    for (var u = n.view, c = n.viewFrom, f = 0; f < u.length; f++) {
                        var h = u[f];
                        if (h.hidden);
                        else if (h.node && h.node.parentNode == o) {
                            while (l != h.node) l = a(l);
                            var d = i && null != t && t <= c && h.lineNumber;
                            h.changes && (B(h.changes, "gutter") > -1 && (d = !1), Nr(e, h, c, r)), d && (T(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(nt(e.options, c)))), (l = h.node.nextSibling);
                        } else {
                            var p = Ir(e, h, c, r);
                            o.insertBefore(p, l);
                        }
                        c += h.size;
                    }
                    while (l) l = a(l);
                }
                function _i(e) {
                    var t = e.gutters.offsetWidth;
                    e.sizer.style.marginLeft = t + "px";
                }
                function Ui(e, t) {
                    (e.display.sizer.style.minHeight = t.docHeight + "px"), (e.display.heightForcer.style.top = t.docHeight + "px"), (e.display.gutters.style.height = t.docHeight + e.display.barHeight + $r(e) + "px");
                }
                function $i(e) {
                    var t = e.display,
                        r = t.view;
                    if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
                        for (var n = Dn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++)
                            if (!r[l].hidden) {
                                e.options.fixedGutter && (r[l].gutter && (r[l].gutter.style.left = o), r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
                                var a = r[l].alignable;
                                if (a) for (var s = 0; s < a.length; s++) a[s].style.left = o;
                            }
                        e.options.fixedGutter && (t.gutters.style.left = n + i + "px");
                    }
                }
                function Ki(e) {
                    if (!e.options.lineNumbers) return !1;
                    var t = e.doc,
                        r = nt(e.options, t.first + t.size - 1),
                        n = e.display;
                    if (r.length != n.lineNumChars) {
                        var i = n.measure.appendChild(N("div", [N("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                            o = i.firstChild.offsetWidth,
                            l = i.offsetWidth - o;
                        return (
                            (n.lineGutter.style.width = ""),
                            (n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1),
                            (n.lineNumWidth = n.lineNumInnerWidth + l),
                            (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
                            (n.lineGutter.style.width = n.lineNumWidth + "px"),
                            _i(e.display),
                            !0
                        );
                    }
                    return !1;
                }
                function Xi(e, t) {
                    for (var r = [], n = !1, i = 0; i < e.length; i++) {
                        var o = e[i],
                            l = null;
                        if (("string" != typeof o && ((l = o.style), (o = o.className)), "CodeMirror-linenumbers" == o)) {
                            if (!t) continue;
                            n = !0;
                        }
                        r.push({ className: o, style: l });
                    }
                    return t && !n && r.push({ className: "CodeMirror-linenumbers", style: null }), r;
                }
                function Yi(e) {
                    var t = e.gutters,
                        r = e.gutterSpecs;
                    T(t), (e.lineGutter = null);
                    for (var n = 0; n < r.length; ++n) {
                        var i = r[n],
                            o = i.className,
                            l = i.style,
                            a = t.appendChild(N("div", null, "CodeMirror-gutter " + o));
                        l && (a.style.cssText = l), "CodeMirror-linenumbers" == o && ((e.lineGutter = a), (a.style.width = (e.lineNumWidth || 1) + "px"));
                    }
                    (t.style.display = r.length ? "" : "none"), _i(e);
                }
                function qi(e) {
                    Yi(e.display), Pn(e), $i(e);
                }
                function Zi(e, t, n, i) {
                    var o = this;
                    (this.input = n),
                        (o.scrollbarFiller = N("div", null, "CodeMirror-scrollbar-filler")),
                        o.scrollbarFiller.setAttribute("cm-not-content", "true"),
                        (o.gutterFiller = N("div", null, "CodeMirror-gutter-filler")),
                        o.gutterFiller.setAttribute("cm-not-content", "true"),
                        (o.lineDiv = A("div", null, "CodeMirror-code")),
                        (o.selectionDiv = N("div", null, null, "position: relative; z-index: 1")),
                        (o.cursorDiv = N("div", null, "CodeMirror-cursors")),
                        (o.measure = N("div", null, "CodeMirror-measure")),
                        (o.lineMeasure = N("div", null, "CodeMirror-measure")),
                        (o.lineSpace = A("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none"));
                    var u = A("div", [o.lineSpace], "CodeMirror-lines");
                    (o.mover = N("div", [u], null, "position: relative")),
                        (o.sizer = N("div", [o.mover], "CodeMirror-sizer")),
                        (o.sizerWidth = null),
                        (o.heightForcer = N("div", null, null, "position: absolute; height: " + j + "px; width: 1px;")),
                        (o.gutters = N("div", null, "CodeMirror-gutters")),
                        (o.lineGutter = null),
                        (o.scroller = N("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll")),
                        o.scroller.setAttribute("tabIndex", "-1"),
                        (o.wrapper = N("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror")),
                        l && a < 8 && ((o.gutters.style.zIndex = -1), (o.scroller.style.paddingRight = 0)),
                        s || (r && m) || (o.scroller.draggable = !0),
                        e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
                        (o.viewFrom = o.viewTo = t.first),
                        (o.reportedViewFrom = o.reportedViewTo = t.first),
                        (o.view = []),
                        (o.renderedView = null),
                        (o.externalMeasured = null),
                        (o.viewOffset = 0),
                        (o.lastWrapHeight = o.lastWrapWidth = 0),
                        (o.updateLineNumbers = null),
                        (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
                        (o.scrollbarsClipped = !1),
                        (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
                        (o.alignWidgets = !1),
                        (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
                        (o.maxLine = null),
                        (o.maxLineLength = 0),
                        (o.maxLineChanged = !1),
                        (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
                        (o.shift = !1),
                        (o.selForContextMenu = null),
                        (o.activeTouch = null),
                        (o.gutterSpecs = Xi(i.gutters, i.lineNumbers)),
                        Yi(o),
                        n.init(o);
                }
                (Pi.prototype.signal = function (e, t) {
                    we(e, t) && this.events.push(arguments);
                }),
                    (Pi.prototype.finish = function () {
                        for (var e = 0; e < this.events.length; e++) me.apply(null, this.events[e]);
                    });
                var Ji = 0,
                    Qi = null;
                function eo(e) {
                    var t = e.wheelDeltaX,
                        r = e.wheelDeltaY;
                    return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? (r = e.detail) : null == r && (r = e.wheelDelta), { x: t, y: r };
                }
                function to(e) {
                    var t = eo(e);
                    return (t.x *= Qi), (t.y *= Qi), t;
                }
                function ro(e, t) {
                    var n = eo(t),
                        i = n.x,
                        o = n.y,
                        l = e.display,
                        a = l.scroller,
                        u = a.scrollWidth > a.clientWidth,
                        c = a.scrollHeight > a.clientHeight;
                    if ((i && u) || (o && c)) {
                        if (o && y && s)
                            e: for (var h = t.target, d = l.view; h != a; h = h.parentNode)
                                for (var p = 0; p < d.length; p++)
                                    if (d[p].node == h) {
                                        e.display.currentWheelTarget = h;
                                        break e;
                                    }
                        if (i && !r && !f && null != Qi) return o && c && fi(e, Math.max(0, a.scrollTop + o * Qi)), di(e, Math.max(0, a.scrollLeft + i * Qi)), (!o || (o && c)) && Ce(t), void (l.wheelStartX = null);
                        if (o && null != Qi) {
                            var g = o * Qi,
                                v = e.doc.scrollTop,
                                m = v + l.wrapper.clientHeight;
                            g < 0 ? (v = Math.max(0, v + g - 50)) : (m = Math.min(e.doc.height, m + g + 50)), Vi(e, { top: v, bottom: m });
                        }
                        Ji < 20 &&
                            (null == l.wheelStartX
                                ? ((l.wheelStartX = a.scrollLeft),
                                  (l.wheelStartY = a.scrollTop),
                                  (l.wheelDX = i),
                                  (l.wheelDY = o),
                                  setTimeout(function () {
                                      if (null != l.wheelStartX) {
                                          var e = a.scrollLeft - l.wheelStartX,
                                              t = a.scrollTop - l.wheelStartY,
                                              r = (t && l.wheelDY && t / l.wheelDY) || (e && l.wheelDX && e / l.wheelDX);
                                          (l.wheelStartX = l.wheelStartY = null), r && ((Qi = (Qi * Ji + r) / (Ji + 1)), ++Ji);
                                      }
                                  }, 200))
                                : ((l.wheelDX += i), (l.wheelDY += o)));
                    }
                }
                l ? (Qi = -0.53) : r ? (Qi = 15) : c ? (Qi = -0.7) : h && (Qi = -1 / 3);
                var no = function (e, t) {
                    (this.ranges = e), (this.primIndex = t);
                };
                (no.prototype.primary = function () {
                    return this.ranges[this.primIndex];
                }),
                    (no.prototype.equals = function (e) {
                        if (e == this) return !0;
                        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                        for (var t = 0; t < this.ranges.length; t++) {
                            var r = this.ranges[t],
                                n = e.ranges[t];
                            if (!lt(r.anchor, n.anchor) || !lt(r.head, n.head)) return !1;
                        }
                        return !0;
                    }),
                    (no.prototype.deepCopy = function () {
                        for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new io(at(this.ranges[t].anchor), at(this.ranges[t].head));
                        return new no(e, this.primIndex);
                    }),
                    (no.prototype.somethingSelected = function () {
                        for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
                        return !1;
                    }),
                    (no.prototype.contains = function (e, t) {
                        t || (t = e);
                        for (var r = 0; r < this.ranges.length; r++) {
                            var n = this.ranges[r];
                            if (ot(t, n.from()) >= 0 && ot(e, n.to()) <= 0) return r;
                        }
                        return -1;
                    });
                var io = function (e, t) {
                    (this.anchor = e), (this.head = t);
                };
                function oo(e, t, r) {
                    var n = e && e.options.selectionsMayTouch,
                        i = t[r];
                    t.sort(function (e, t) {
                        return ot(e.from(), t.from());
                    }),
                        (r = B(t, i));
                    for (var o = 1; o < t.length; o++) {
                        var l = t[o],
                            a = t[o - 1],
                            s = ot(a.to(), l.from());
                        if (n && !l.empty() ? s > 0 : s >= 0) {
                            var u = ut(a.from(), l.from()),
                                c = st(a.to(), l.to()),
                                f = a.empty() ? l.from() == l.head : a.from() == a.head;
                            o <= r && --r, t.splice(--o, 2, new io(f ? c : u, f ? u : c));
                        }
                    }
                    return new no(t, r);
                }
                function lo(e, t) {
                    return new no([new io(e, t || e)], 0);
                }
                function ao(e) {
                    return e.text ? it(e.from.line + e.text.length - 1, Y(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
                }
                function so(e, t) {
                    if (ot(e, t.from) < 0) return e;
                    if (ot(e, t.to) <= 0) return ao(t);
                    var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                        n = e.ch;
                    return e.line == t.to.line && (n += ao(t).ch - t.to.ch), it(r, n);
                }
                function uo(e, t) {
                    for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
                        var i = e.sel.ranges[n];
                        r.push(new io(so(i.anchor, t), so(i.head, t)));
                    }
                    return oo(e.cm, r, e.sel.primIndex);
                }
                function co(e, t, r) {
                    return e.line == t.line ? it(r.line, e.ch - t.ch + r.ch) : it(r.line + (e.line - t.line), e.ch);
                }
                function fo(e, t, r) {
                    for (var n = [], i = it(e.first, 0), o = i, l = 0; l < t.length; l++) {
                        var a = t[l],
                            s = co(a.from, i, o),
                            u = co(ao(a), i, o);
                        if (((i = a.to), (o = u), "around" == r)) {
                            var c = e.sel.ranges[l],
                                f = ot(c.head, c.anchor) < 0;
                            n[l] = new io(f ? u : s, f ? s : u);
                        } else n[l] = new io(s, s);
                    }
                    return new no(n, e.sel.primIndex);
                }
                function ho(e) {
                    (e.doc.mode = Ge(e.options, e.doc.modeOption)), po(e);
                }
                function po(e) {
                    e.doc.iter(function (e) {
                        e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
                    }),
                        (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
                        Hi(e, 100),
                        e.state.modeGen++,
                        e.curOp && Pn(e);
                }
                function go(e, t) {
                    return 0 == t.from.ch && 0 == t.to.ch && "" == Y(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
                }
                function vo(e, t, r, n) {
                    function i(e) {
                        return r ? r[e] : null;
                    }
                    function o(e, r, i) {
                        sr(e, r, i, n), Tr(e, "change", e, t);
                    }
                    function l(e, t) {
                        for (var r = [], o = e; o < t; ++o) r.push(new ar(u[o], i(o), n));
                        return r;
                    }
                    var a = t.from,
                        s = t.to,
                        u = t.text,
                        c = qe(e, a.line),
                        f = qe(e, s.line),
                        h = Y(u),
                        d = i(u.length - 1),
                        p = s.line - a.line;
                    if (t.full) e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
                    else if (go(e, t)) {
                        var g = l(0, u.length - 1);
                        o(f, f.text, d), p && e.remove(a.line, p), g.length && e.insert(a.line, g);
                    } else if (c == f)
                        if (1 == u.length) o(c, c.text.slice(0, a.ch) + h + c.text.slice(s.ch), d);
                        else {
                            var v = l(1, u.length - 1);
                            v.push(new ar(h + c.text.slice(s.ch), d, n)), o(c, c.text.slice(0, a.ch) + u[0], i(0)), e.insert(a.line + 1, v);
                        }
                    else if (1 == u.length) o(c, c.text.slice(0, a.ch) + u[0] + f.text.slice(s.ch), i(0)), e.remove(a.line + 1, p);
                    else {
                        o(c, c.text.slice(0, a.ch) + u[0], i(0)), o(f, h + f.text.slice(s.ch), d);
                        var m = l(1, u.length - 1);
                        p > 1 && e.remove(a.line + 1, p - 1), e.insert(a.line + 1, m);
                    }
                    Tr(e, "change", e, t);
                }
                function mo(e, t, r) {
                    function n(e, i, o) {
                        if (e.linked)
                            for (var l = 0; l < e.linked.length; ++l) {
                                var a = e.linked[l];
                                if (a.doc != i) {
                                    var s = o && a.sharedHist;
                                    (r && !s) || (t(a.doc, s), n(a.doc, e, s));
                                }
                            }
                    }
                    n(e, null, !0);
                }
                function yo(e, t) {
                    if (t.cm) throw new Error("This document is already in use.");
                    (e.doc = t), (t.cm = e), En(e), ho(e), bo(e), e.options.lineWrapping || lr(e), (e.options.mode = t.modeOption), Pn(e);
                }
                function bo(e) {
                    ("rtl" == e.doc.direction ? E : M)(e.display.lineDiv, "CodeMirror-rtl");
                }
                function wo(e) {
                    Ai(e, function () {
                        bo(e), Pn(e);
                    });
                }
                function xo(e) {
                    (this.done = []),
                        (this.undone = []),
                        (this.undoDepth = 1 / 0),
                        (this.lastModTime = this.lastSelTime = 0),
                        (this.lastOp = this.lastSelOp = null),
                        (this.lastOrigin = this.lastSelOrigin = null),
                        (this.generation = this.maxGeneration = e || 1);
                }
                function Co(e, t) {
                    var r = { from: at(t.from), to: ao(t), text: Ze(e, t.from, t.to) };
                    return (
                        No(e, r, t.from.line, t.to.line + 1),
                        mo(
                            e,
                            function (e) {
                                return No(e, r, t.from.line, t.to.line + 1);
                            },
                            !0
                        ),
                        r
                    );
                }
                function ko(e) {
                    while (e.length) {
                        var t = Y(e);
                        if (!t.ranges) break;
                        e.pop();
                    }
                }
                function So(e, t) {
                    return t ? (ko(e.done), Y(e.done)) : e.done.length && !Y(e.done).ranges ? Y(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), Y(e.done)) : void 0;
                }
                function Lo(e, t, r, n) {
                    var i = e.history;
                    i.undone.length = 0;
                    var o,
                        l,
                        a = +new Date();
                    if (
                        (i.lastOp == n || (i.lastOrigin == t.origin && t.origin && (("+" == t.origin.charAt(0) && i.lastModTime > a - (e.cm ? e.cm.options.historyEventDelay : 500)) || "*" == t.origin.charAt(0)))) &&
                        (o = So(i, i.lastOp == n))
                    )
                        (l = Y(o.changes)), 0 == ot(t.from, t.to) && 0 == ot(t.from, l.to) ? (l.to = ao(t)) : o.changes.push(Co(e, t));
                    else {
                        var s = Y(i.done);
                        (s && s.ranges) || Oo(e.sel, i.done), (o = { changes: [Co(e, t)], generation: i.generation }), i.done.push(o);
                        while (i.done.length > i.undoDepth) i.done.shift(), i.done[0].ranges || i.done.shift();
                    }
                    i.done.push(r), (i.generation = ++i.maxGeneration), (i.lastModTime = i.lastSelTime = a), (i.lastOp = i.lastSelOp = n), (i.lastOrigin = i.lastSelOrigin = t.origin), l || me(e, "historyAdded");
                }
                function Mo(e, t, r, n) {
                    var i = t.charAt(0);
                    return "*" == i || ("+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500));
                }
                function To(e, t, r, n) {
                    var i = e.history,
                        o = n && n.origin;
                    r == i.lastSelOp || (o && i.lastSelOrigin == o && ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) || Mo(e, o, Y(i.done), t))) ? (i.done[i.done.length - 1] = t) : Oo(t, i.done),
                        (i.lastSelTime = +new Date()),
                        (i.lastSelOrigin = o),
                        (i.lastSelOp = r),
                        n && !1 !== n.clearRedo && ko(i.undone);
                }
                function Oo(e, t) {
                    var r = Y(t);
                    (r && r.ranges && r.equals(e)) || t.push(e);
                }
                function No(e, t, r, n) {
                    var i = t["spans_" + e.id],
                        o = 0;
                    e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function (r) {
                        r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o;
                    });
                }
                function Ao(e) {
                    if (!e) return null;
                    for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
                    return t ? (t.length ? t : null) : e;
                }
                function Do(e, t) {
                    var r = t["spans_" + e.id];
                    if (!r) return null;
                    for (var n = [], i = 0; i < t.text.length; ++i) n.push(Ao(r[i]));
                    return n;
                }
                function Wo(e, t) {
                    var r = Do(e, t),
                        n = zt(e, t);
                    if (!r) return n;
                    if (!n) return r;
                    for (var i = 0; i < r.length; ++i) {
                        var o = r[i],
                            l = n[i];
                        if (o && l)
                            e: for (var a = 0; a < l.length; ++a) {
                                for (var s = l[a], u = 0; u < o.length; ++u) if (o[u].marker == s.marker) continue e;
                                o.push(s);
                            }
                        else l && (r[i] = l);
                    }
                    return r;
                }
                function Eo(e, t, r) {
                    for (var n = [], i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.ranges) n.push(r ? no.prototype.deepCopy.call(o) : o);
                        else {
                            var l = o.changes,
                                a = [];
                            n.push({ changes: a });
                            for (var s = 0; s < l.length; ++s) {
                                var u = l[s],
                                    c = void 0;
                                if ((a.push({ from: u.from, to: u.to, text: u.text }), t)) for (var f in u) (c = f.match(/^spans_(\d+)$/)) && B(t, Number(c[1])) > -1 && ((Y(a)[f] = u[f]), delete u[f]);
                            }
                        }
                    }
                    return n;
                }
                function Ho(e, t, r, n) {
                    if (n) {
                        var i = e.anchor;
                        if (r) {
                            var o = ot(t, i) < 0;
                            o != ot(r, i) < 0 ? ((i = t), (t = r)) : o != ot(t, r) < 0 && (t = r);
                        }
                        return new io(i, t);
                    }
                    return new io(r || t, t);
                }
                function Fo(e, t, r, n, i) {
                    null == i && (i = e.cm && (e.cm.display.shift || e.extend)), jo(e, new no([Ho(e.sel.primary(), t, r, i)], 0), n);
                }
                function Po(e, t, r) {
                    for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) n[o] = Ho(e.sel.ranges[o], t[o], null, i);
                    var l = oo(e.cm, n, e.sel.primIndex);
                    jo(e, l, r);
                }
                function Io(e, t, r, n) {
                    var i = e.sel.ranges.slice(0);
                    (i[t] = r), jo(e, oo(e.cm, i, e.sel.primIndex), n);
                }
                function zo(e, t, r, n) {
                    jo(e, lo(t, r), n);
                }
                function Ro(e, t, r) {
                    var n = {
                        ranges: t.ranges,
                        update: function (t) {
                            this.ranges = [];
                            for (var r = 0; r < t.length; r++) this.ranges[r] = new io(ft(e, t[r].anchor), ft(e, t[r].head));
                        },
                        origin: r && r.origin,
                    };
                    return me(e, "beforeSelectionChange", e, n), e.cm && me(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? oo(e.cm, n.ranges, n.ranges.length - 1) : t;
                }
                function Bo(e, t, r) {
                    var n = e.history.done,
                        i = Y(n);
                    i && i.ranges ? ((n[n.length - 1] = t), Vo(e, t, r)) : jo(e, t, r);
                }
                function jo(e, t, r) {
                    Vo(e, t, r), To(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
                }
                function Vo(e, t, r) {
                    (we(e, "beforeSelectionChange") || (e.cm && we(e.cm, "beforeSelectionChange"))) && (t = Ro(e, t, r));
                    var n = (r && r.bias) || (ot(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                    Go(e, Uo(e, t, n, !0)), (r && !1 === r.scroll) || !e.cm || li(e.cm);
                }
                function Go(e, t) {
                    t.equals(e.sel) || ((e.sel = t), e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), be(e.cm)), Tr(e, "cursorActivity", e));
                }
                function _o(e) {
                    Go(e, Uo(e, e.sel, null, !1));
                }
                function Uo(e, t, r, n) {
                    for (var i, o = 0; o < t.ranges.length; o++) {
                        var l = t.ranges[o],
                            a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                            s = Ko(e, l.anchor, a && a.anchor, r, n),
                            u = Ko(e, l.head, a && a.head, r, n);
                        (i || s != l.anchor || u != l.head) && (i || (i = t.ranges.slice(0, o)), (i[o] = new io(s, u)));
                    }
                    return i ? oo(e.cm, i, t.primIndex) : t;
                }
                function $o(e, t, r, n, i) {
                    var o = qe(e, t.line);
                    if (o.markedSpans)
                        for (var l = 0; l < o.markedSpans.length; ++l) {
                            var a = o.markedSpans[l],
                                s = a.marker,
                                u = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft,
                                c = "selectRight" in s ? !s.selectRight : s.inclusiveRight;
                            if ((null == a.from || (u ? a.from <= t.ch : a.from < t.ch)) && (null == a.to || (c ? a.to >= t.ch : a.to > t.ch))) {
                                if (i && (me(s, "beforeCursorEnter"), s.explicitlyCleared)) {
                                    if (o.markedSpans) {
                                        --l;
                                        continue;
                                    }
                                    break;
                                }
                                if (!s.atomic) continue;
                                if (r) {
                                    var f = s.find(n < 0 ? 1 : -1),
                                        h = void 0;
                                    if (((n < 0 ? c : u) && (f = Xo(e, f, -n, f && f.line == t.line ? o : null)), f && f.line == t.line && (h = ot(f, r)) && (n < 0 ? h < 0 : h > 0))) return $o(e, f, t, n, i);
                                }
                                var d = s.find(n < 0 ? -1 : 1);
                                return (n < 0 ? u : c) && (d = Xo(e, d, n, d.line == t.line ? o : null)), d ? $o(e, d, t, n, i) : null;
                            }
                        }
                    return t;
                }
                function Ko(e, t, r, n, i) {
                    var o = n || 1,
                        l = $o(e, t, r, o, i) || (!i && $o(e, t, r, o, !0)) || $o(e, t, r, -o, i) || (!i && $o(e, t, r, -o, !0));
                    return l || ((e.cantEdit = !0), it(e.first, 0));
                }
                function Xo(e, t, r, n) {
                    return r < 0 && 0 == t.ch ? (t.line > e.first ? ft(e, it(t.line - 1)) : null) : r > 0 && t.ch == (n || qe(e, t.line)).text.length ? (t.line < e.first + e.size - 1 ? it(t.line + 1, 0) : null) : new it(t.line, t.ch + r);
                }
                function Yo(e) {
                    e.setSelection(it(e.firstLine(), 0), it(e.lastLine()), G);
                }
                function qo(e, t, r) {
                    var n = {
                        canceled: !1,
                        from: t.from,
                        to: t.to,
                        text: t.text,
                        origin: t.origin,
                        cancel: function () {
                            return (n.canceled = !0);
                        },
                    };
                    return (
                        r &&
                            (n.update = function (t, r, i, o) {
                                t && (n.from = ft(e, t)), r && (n.to = ft(e, r)), i && (n.text = i), void 0 !== o && (n.origin = o);
                            }),
                        me(e, "beforeChange", e, n),
                        e.cm && me(e.cm, "beforeChange", e.cm, n),
                        n.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: n.from, to: n.to, text: n.text, origin: n.origin }
                    );
                }
                function Zo(e, t, r) {
                    if (e.cm) {
                        if (!e.cm.curOp) return Di(e.cm, Zo)(e, t, r);
                        if (e.cm.state.suppressEdits) return;
                    }
                    if (!(we(e, "beforeChange") || (e.cm && we(e.cm, "beforeChange"))) || ((t = qo(e, t, !0)), t)) {
                        var n = Ot && !r && Bt(e, t.from, t.to);
                        if (n) for (var i = n.length - 1; i >= 0; --i) Jo(e, { from: n[i].from, to: n[i].to, text: i ? [""] : t.text, origin: t.origin });
                        else Jo(e, t);
                    }
                }
                function Jo(e, t) {
                    if (1 != t.text.length || "" != t.text[0] || 0 != ot(t.from, t.to)) {
                        var r = uo(e, t);
                        Lo(e, t, r, e.cm ? e.cm.curOp.id : NaN), tl(e, t, r, zt(e, t));
                        var n = [];
                        mo(e, function (e, r) {
                            r || -1 != B(n, e.history) || (ll(e.history, t), n.push(e.history)), tl(e, t, null, zt(e, t));
                        });
                    }
                }
                function Qo(e, t, r) {
                    var n = e.cm && e.cm.state.suppressEdits;
                    if (!n || r) {
                        for (var i, o = e.history, l = e.sel, a = "undo" == t ? o.done : o.undone, s = "undo" == t ? o.undone : o.done, u = 0; u < a.length; u++) if (((i = a[u]), r ? i.ranges && !i.equals(e.sel) : !i.ranges)) break;
                        if (u != a.length) {
                            for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                                if (((i = a.pop()), !i.ranges)) {
                                    if (n) return void a.push(i);
                                    break;
                                }
                                if ((Oo(i, s), r && !i.equals(e.sel))) return void jo(e, i, { clearRedo: !1 });
                                l = i;
                            }
                            var c = [];
                            Oo(l, s), s.push({ changes: c, generation: o.generation }), (o.generation = i.generation || ++o.maxGeneration);
                            for (
                                var f = we(e, "beforeChange") || (e.cm && we(e.cm, "beforeChange")),
                                    h = function (r) {
                                        var n = i.changes[r];
                                        if (((n.origin = t), f && !qo(e, n, !1))) return (a.length = 0), {};
                                        c.push(Co(e, n));
                                        var o = r ? uo(e, n) : Y(a);
                                        tl(e, n, o, Wo(e, n)), !r && e.cm && e.cm.scrollIntoView({ from: n.from, to: ao(n) });
                                        var l = [];
                                        mo(e, function (e, t) {
                                            t || -1 != B(l, e.history) || (ll(e.history, n), l.push(e.history)), tl(e, n, null, Wo(e, n));
                                        });
                                    },
                                    d = i.changes.length - 1;
                                d >= 0;
                                --d
                            ) {
                                var p = h(d);
                                if (p) return p.v;
                            }
                        }
                    }
                }
                function el(e, t) {
                    if (
                        0 != t &&
                        ((e.first += t),
                        (e.sel = new no(
                            q(e.sel.ranges, function (e) {
                                return new io(it(e.anchor.line + t, e.anchor.ch), it(e.head.line + t, e.head.ch));
                            }),
                            e.sel.primIndex
                        )),
                        e.cm)
                    ) {
                        Pn(e.cm, e.first, e.first - t, t);
                        for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) In(e.cm, n, "gutter");
                    }
                }
                function tl(e, t, r, n) {
                    if (e.cm && !e.cm.curOp) return Di(e.cm, tl)(e, t, r, n);
                    if (t.to.line < e.first) el(e, t.text.length - 1 - (t.to.line - t.from.line));
                    else if (!(t.from.line > e.lastLine())) {
                        if (t.from.line < e.first) {
                            var i = t.text.length - 1 - (e.first - t.from.line);
                            el(e, i), (t = { from: it(e.first, 0), to: it(t.to.line + i, t.to.ch), text: [Y(t.text)], origin: t.origin });
                        }
                        var o = e.lastLine();
                        t.to.line > o && (t = { from: t.from, to: it(o, qe(e, o).text.length), text: [t.text[0]], origin: t.origin }),
                            (t.removed = Ze(e, t.from, t.to)),
                            r || (r = uo(e, t)),
                            e.cm ? rl(e.cm, t, n) : vo(e, t, n),
                            Vo(e, r, G),
                            e.cantEdit && Ko(e, it(e.firstLine(), 0)) && (e.cantEdit = !1);
                    }
                }
                function rl(e, t, r) {
                    var n = e.doc,
                        i = e.display,
                        o = t.from,
                        l = t.to,
                        a = !1,
                        s = o.line;
                    e.options.lineWrapping ||
                        ((s = et(Zt(qe(n, o.line)))),
                        n.iter(s, l.line + 1, function (e) {
                            if (e == i.maxLine) return (a = !0), !0;
                        })),
                        n.sel.contains(t.from, t.to) > -1 && be(e),
                        vo(n, t, r, Wn(e)),
                        e.options.lineWrapping ||
                            (n.iter(s, o.line + t.text.length, function (e) {
                                var t = or(e);
                                t > i.maxLineLength && ((i.maxLine = e), (i.maxLineLength = t), (i.maxLineChanged = !0), (a = !1));
                            }),
                            a && (e.curOp.updateMaxLine = !0)),
                        Tt(n, o.line),
                        Hi(e, 400);
                    var u = t.text.length - (l.line - o.line) - 1;
                    t.full ? Pn(e) : o.line != l.line || 1 != t.text.length || go(e.doc, t) ? Pn(e, o.line, l.line + 1, u) : In(e, o.line, "text");
                    var c = we(e, "changes"),
                        f = we(e, "change");
                    if (f || c) {
                        var h = { from: o, to: l, text: t.text, removed: t.removed, origin: t.origin };
                        f && Tr(e, "change", e, h), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h);
                    }
                    e.display.selForContextMenu = null;
                }
                function nl(e, t, r, n, i) {
                    var o;
                    n || (n = r), ot(n, r) < 0 && ((o = [n, r]), (r = o[0]), (n = o[1])), "string" == typeof t && (t = e.splitLines(t)), Zo(e, { from: r, to: n, text: t, origin: i });
                }
                function il(e, t, r, n) {
                    r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0));
                }
                function ol(e, t, r, n) {
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            l = !0;
                        if (o.ranges) {
                            o.copied || ((o = e[i] = o.deepCopy()), (o.copied = !0));
                            for (var a = 0; a < o.ranges.length; a++) il(o.ranges[a].anchor, t, r, n), il(o.ranges[a].head, t, r, n);
                        } else {
                            for (var s = 0; s < o.changes.length; ++s) {
                                var u = o.changes[s];
                                if (r < u.from.line) (u.from = it(u.from.line + n, u.from.ch)), (u.to = it(u.to.line + n, u.to.ch));
                                else if (t <= u.to.line) {
                                    l = !1;
                                    break;
                                }
                            }
                            l || (e.splice(0, i + 1), (i = 0));
                        }
                    }
                }
                function ll(e, t) {
                    var r = t.from.line,
                        n = t.to.line,
                        i = t.text.length - (n - r) - 1;
                    ol(e.done, r, n, i), ol(e.undone, r, n, i);
                }
                function al(e, t, r, n) {
                    var i = t,
                        o = t;
                    return "number" == typeof t ? (o = qe(e, ct(e, t))) : (i = et(t)), null == i ? null : (n(o, i) && e.cm && In(e.cm, i, r), o);
                }
                function sl(e) {
                    (this.lines = e), (this.parent = null);
                    for (var t = 0, r = 0; r < e.length; ++r) (e[r].parent = this), (t += e[r].height);
                    this.height = t;
                }
                function ul(e) {
                    this.children = e;
                    for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
                        var i = e[n];
                        (t += i.chunkSize()), (r += i.height), (i.parent = this);
                    }
                    (this.size = t), (this.height = r), (this.parent = null);
                }
                (io.prototype.from = function () {
                    return ut(this.anchor, this.head);
                }),
                    (io.prototype.to = function () {
                        return st(this.anchor, this.head);
                    }),
                    (io.prototype.empty = function () {
                        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
                    }),
                    (sl.prototype = {
                        chunkSize: function () {
                            return this.lines.length;
                        },
                        removeInner: function (e, t) {
                            for (var r = e, n = e + t; r < n; ++r) {
                                var i = this.lines[r];
                                (this.height -= i.height), ur(i), Tr(i, "delete");
                            }
                            this.lines.splice(e, t);
                        },
                        collapse: function (e) {
                            e.push.apply(e, this.lines);
                        },
                        insertInner: function (e, t, r) {
                            (this.height += r), (this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)));
                            for (var n = 0; n < t.length; ++n) t[n].parent = this;
                        },
                        iterN: function (e, t, r) {
                            for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0;
                        },
                    }),
                    (ul.prototype = {
                        chunkSize: function () {
                            return this.size;
                        },
                        removeInner: function (e, t) {
                            this.size -= t;
                            for (var r = 0; r < this.children.length; ++r) {
                                var n = this.children[r],
                                    i = n.chunkSize();
                                if (e < i) {
                                    var o = Math.min(t, i - e),
                                        l = n.height;
                                    if ((n.removeInner(e, o), (this.height -= l - n.height), i == o && (this.children.splice(r--, 1), (n.parent = null)), 0 == (t -= o))) break;
                                    e = 0;
                                } else e -= i;
                            }
                            if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof sl))) {
                                var a = [];
                                this.collapse(a), (this.children = [new sl(a)]), (this.children[0].parent = this);
                            }
                        },
                        collapse: function (e) {
                            for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
                        },
                        insertInner: function (e, t, r) {
                            (this.size += t.length), (this.height += r);
                            for (var n = 0; n < this.children.length; ++n) {
                                var i = this.children[n],
                                    o = i.chunkSize();
                                if (e <= o) {
                                    if ((i.insertInner(e, t, r), i.lines && i.lines.length > 50)) {
                                        for (var l = (i.lines.length % 25) + 25, a = l; a < i.lines.length; ) {
                                            var s = new sl(i.lines.slice(a, (a += 25)));
                                            (i.height -= s.height), this.children.splice(++n, 0, s), (s.parent = this);
                                        }
                                        (i.lines = i.lines.slice(0, l)), this.maybeSpill();
                                    }
                                    break;
                                }
                                e -= o;
                            }
                        },
                        maybeSpill: function () {
                            if (!(this.children.length <= 10)) {
                                var e = this;
                                do {
                                    var t = e.children.splice(e.children.length - 5, 5),
                                        r = new ul(t);
                                    if (e.parent) {
                                        (e.size -= r.size), (e.height -= r.height);
                                        var n = B(e.parent.children, e);
                                        e.parent.children.splice(n + 1, 0, r);
                                    } else {
                                        var i = new ul(e.children);
                                        (i.parent = e), (e.children = [i, r]), (e = i);
                                    }
                                    r.parent = e.parent;
                                } while (e.children.length > 10);
                                e.parent.maybeSpill();
                            }
                        },
                        iterN: function (e, t, r) {
                            for (var n = 0; n < this.children.length; ++n) {
                                var i = this.children[n],
                                    o = i.chunkSize();
                                if (e < o) {
                                    var l = Math.min(t, o - e);
                                    if (i.iterN(e, l, r)) return !0;
                                    if (0 == (t -= l)) break;
                                    e = 0;
                                } else e -= o;
                            }
                        },
                    });
                var cl = function (e, t, r) {
                    if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
                    (this.doc = e), (this.node = t);
                };
                function fl(e, t, r) {
                    ir(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && oi(e, r);
                }
                function hl(e, t, r, n) {
                    var i = new cl(e, r, n),
                        o = e.cm;
                    return (
                        o && i.noHScroll && (o.display.alignWidgets = !0),
                        al(e, t, "widget", function (t) {
                            var r = t.widgets || (t.widgets = []);
                            if ((null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length - 1, Math.max(0, i.insertAt)), 0, i), (i.line = t), o && !rr(e, t))) {
                                var n = ir(t) < e.scrollTop;
                                Qe(t, t.height + jr(i)), n && oi(o, i.height), (o.curOp.forceUpdate = !0);
                            }
                            return !0;
                        }),
                        o && Tr(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : et(t)),
                        i
                    );
                }
                (cl.prototype.clear = function () {
                    var e = this.doc.cm,
                        t = this.line.widgets,
                        r = this.line,
                        n = et(r);
                    if (null != n && t) {
                        for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                        t.length || (r.widgets = null);
                        var o = jr(this);
                        Qe(r, Math.max(0, r.height - o)),
                            e &&
                                (Ai(e, function () {
                                    fl(e, r, -o), In(e, n, "widget");
                                }),
                                Tr(e, "lineWidgetCleared", e, this, n));
                    }
                }),
                    (cl.prototype.changed = function () {
                        var e = this,
                            t = this.height,
                            r = this.doc.cm,
                            n = this.line;
                        this.height = null;
                        var i = jr(this) - t;
                        i &&
                            (rr(this.doc, n) || Qe(n, n.height + i),
                            r &&
                                Ai(r, function () {
                                    (r.curOp.forceUpdate = !0), fl(r, n, i), Tr(r, "lineWidgetChanged", r, e, et(n));
                                }));
                    }),
                    xe(cl);
                var dl = 0,
                    pl = function (e, t) {
                        (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++dl);
                    };
                function gl(e, t, r, n, i) {
                    if (n && n.shared) return ml(e, t, r, n, i);
                    if (e.cm && !e.cm.curOp) return Di(e.cm, gl)(e, t, r, n, i);
                    var o = new pl(e, i),
                        l = ot(t, r);
                    if ((n && I(n, o, !1), l > 0 || (0 == l && !1 !== o.clearWhenEmpty))) return o;
                    if (
                        (o.replacedWith &&
                            ((o.collapsed = !0),
                            (o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget")),
                            n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"),
                            n.insertLeft && (o.widgetNode.insertLeft = !0)),
                        o.collapsed)
                    ) {
                        if (qt(e, t.line, t, r, o) || (t.line != r.line && qt(e, r.line, t, r, o))) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                        Dt();
                    }
                    o.addToHistory && Lo(e, { from: t, to: r, origin: "markText" }, e.sel, NaN);
                    var a,
                        s = t.line,
                        u = e.cm;
                    if (
                        (e.iter(s, r.line + 1, function (e) {
                            u && o.collapsed && !u.options.lineWrapping && Zt(e) == u.display.maxLine && (a = !0), o.collapsed && s != t.line && Qe(e, 0), Ft(e, new Wt(o, s == t.line ? t.ch : null, s == r.line ? r.ch : null)), ++s;
                        }),
                        o.collapsed &&
                            e.iter(t.line, r.line + 1, function (t) {
                                rr(e, t) && Qe(t, 0);
                            }),
                        o.clearOnEnter &&
                            pe(o, "beforeCursorEnter", function () {
                                return o.clear();
                            }),
                        o.readOnly && (At(), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
                        o.collapsed && ((o.id = ++dl), (o.atomic = !0)),
                        u)
                    ) {
                        if ((a && (u.curOp.updateMaxLine = !0), o.collapsed)) Pn(u, t.line, r.line + 1);
                        else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var c = t.line; c <= r.line; c++) In(u, c, "text");
                        o.atomic && _o(u.doc), Tr(u, "markerAdded", u, o);
                    }
                    return o;
                }
                (pl.prototype.clear = function () {
                    if (!this.explicitlyCleared) {
                        var e = this.doc.cm,
                            t = e && !e.curOp;
                        if ((t && Ci(e), we(this, "clear"))) {
                            var r = this.find();
                            r && Tr(this, "clear", r.from, r.to);
                        }
                        for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
                            var l = this.lines[o],
                                a = Et(l.markedSpans, this);
                            e && !this.collapsed ? In(e, et(l), "text") : e && (null != a.to && (i = et(l)), null != a.from && (n = et(l))),
                                (l.markedSpans = Ht(l.markedSpans, a)),
                                null == a.from && this.collapsed && !rr(this.doc, l) && e && Qe(l, On(e.display));
                        }
                        if (e && this.collapsed && !e.options.lineWrapping)
                            for (var s = 0; s < this.lines.length; ++s) {
                                var u = Zt(this.lines[s]),
                                    c = or(u);
                                c > e.display.maxLineLength && ((e.display.maxLine = u), (e.display.maxLineLength = c), (e.display.maxLineChanged = !0));
                            }
                        null != n && e && this.collapsed && Pn(e, n, i + 1),
                            (this.lines.length = 0),
                            (this.explicitlyCleared = !0),
                            this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && _o(e.doc)),
                            e && Tr(e, "markerCleared", e, this, n, i),
                            t && ki(e),
                            this.parent && this.parent.clear();
                    }
                }),
                    (pl.prototype.find = function (e, t) {
                        var r, n;
                        null == e && "bookmark" == this.type && (e = 1);
                        for (var i = 0; i < this.lines.length; ++i) {
                            var o = this.lines[i],
                                l = Et(o.markedSpans, this);
                            if (null != l.from && ((r = it(t ? o : et(o), l.from)), -1 == e)) return r;
                            if (null != l.to && ((n = it(t ? o : et(o), l.to)), 1 == e)) return n;
                        }
                        return r && { from: r, to: n };
                    }),
                    (pl.prototype.changed = function () {
                        var e = this,
                            t = this.find(-1, !0),
                            r = this,
                            n = this.doc.cm;
                        t &&
                            n &&
                            Ai(n, function () {
                                var i = t.line,
                                    o = et(t.line),
                                    l = Qr(n, o);
                                if ((l && (un(l), (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)), (n.curOp.updateMaxLine = !0), !rr(r.doc, i) && null != r.height)) {
                                    var a = r.height;
                                    r.height = null;
                                    var s = jr(r) - a;
                                    s && Qe(i, i.height + s);
                                }
                                Tr(n, "markerChanged", n, e);
                            });
                    }),
                    (pl.prototype.attachLine = function (e) {
                        if (!this.lines.length && this.doc.cm) {
                            var t = this.doc.cm.curOp;
                            (t.maybeHiddenMarkers && -1 != B(t.maybeHiddenMarkers, this)) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
                        }
                        this.lines.push(e);
                    }),
                    (pl.prototype.detachLine = function (e) {
                        if ((this.lines.splice(B(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
                            var t = this.doc.cm.curOp;
                            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
                        }
                    }),
                    xe(pl);
                var vl = function (e, t) {
                    (this.markers = e), (this.primary = t);
                    for (var r = 0; r < e.length; ++r) e[r].parent = this;
                };
                function ml(e, t, r, n, i) {
                    (n = I(n)), (n.shared = !1);
                    var o = [gl(e, t, r, n, i)],
                        l = o[0],
                        a = n.widgetNode;
                    return (
                        mo(e, function (e) {
                            a && (n.widgetNode = a.cloneNode(!0)), o.push(gl(e, ft(e, t), ft(e, r), n, i));
                            for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
                            l = Y(o);
                        }),
                        new vl(o, l)
                    );
                }
                function yl(e) {
                    return e.findMarks(it(e.first, 0), e.clipPos(it(e.lastLine())), function (e) {
                        return e.parent;
                    });
                }
                function bl(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r],
                            i = n.find(),
                            o = e.clipPos(i.from),
                            l = e.clipPos(i.to);
                        if (ot(o, l)) {
                            var a = gl(e, o, l, n.primary, n.primary.type);
                            n.markers.push(a), (a.parent = n);
                        }
                    }
                }
                function wl(e) {
                    for (
                        var t = function (t) {
                                var r = e[t],
                                    n = [r.primary.doc];
                                mo(r.primary.doc, function (e) {
                                    return n.push(e);
                                });
                                for (var i = 0; i < r.markers.length; i++) {
                                    var o = r.markers[i];
                                    -1 == B(n, o.doc) && ((o.parent = null), r.markers.splice(i--, 1));
                                }
                            },
                            r = 0;
                        r < e.length;
                        r++
                    )
                        t(r);
                }
                (vl.prototype.clear = function () {
                    if (!this.explicitlyCleared) {
                        this.explicitlyCleared = !0;
                        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                        Tr(this, "clear");
                    }
                }),
                    (vl.prototype.find = function (e, t) {
                        return this.primary.find(e, t);
                    }),
                    xe(vl);
                var xl = 0,
                    Cl = function (e, t, r, n, i) {
                        if (!(this instanceof Cl)) return new Cl(e, t, r, n, i);
                        null == r && (r = 0),
                            ul.call(this, [new sl([new ar("", null)])]),
                            (this.first = r),
                            (this.scrollTop = this.scrollLeft = 0),
                            (this.cantEdit = !1),
                            (this.cleanGeneration = 1),
                            (this.modeFrontier = this.highlightFrontier = r);
                        var o = it(r, 0);
                        (this.sel = lo(o)),
                            (this.history = new xo(null)),
                            (this.id = ++xl),
                            (this.modeOption = t),
                            (this.lineSep = n),
                            (this.direction = "rtl" == i ? "rtl" : "ltr"),
                            (this.extend = !1),
                            "string" == typeof e && (e = this.splitLines(e)),
                            vo(this, { from: o, to: o, text: e }),
                            jo(this, lo(o), G);
                    };
                (Cl.prototype = Q(ul.prototype, {
                    constructor: Cl,
                    iter: function (e, t, r) {
                        r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e);
                    },
                    insert: function (e, t) {
                        for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
                        this.insertInner(e - this.first, t, r);
                    },
                    remove: function (e, t) {
                        this.removeInner(e - this.first, t);
                    },
                    getValue: function (e) {
                        var t = Je(this, this.first, this.first + this.size);
                        return !1 === e ? t : t.join(e || this.lineSeparator());
                    },
                    setValue: Ei(function (e) {
                        var t = it(this.first, 0),
                            r = this.first + this.size - 1;
                        Zo(this, { from: t, to: it(r, qe(this, r).text.length), text: this.splitLines(e), origin: "setValue", full: !0 }, !0), this.cm && ai(this.cm, 0, 0), jo(this, lo(t), G);
                    }),
                    replaceRange: function (e, t, r, n) {
                        (t = ft(this, t)), (r = r ? ft(this, r) : t), nl(this, e, t, r, n);
                    },
                    getRange: function (e, t, r) {
                        var n = Ze(this, ft(this, e), ft(this, t));
                        return !1 === r ? n : n.join(r || this.lineSeparator());
                    },
                    getLine: function (e) {
                        var t = this.getLineHandle(e);
                        return t && t.text;
                    },
                    getLineHandle: function (e) {
                        if (rt(this, e)) return qe(this, e);
                    },
                    getLineNumber: function (e) {
                        return et(e);
                    },
                    getLineHandleVisualStart: function (e) {
                        return "number" == typeof e && (e = qe(this, e)), Zt(e);
                    },
                    lineCount: function () {
                        return this.size;
                    },
                    firstLine: function () {
                        return this.first;
                    },
                    lastLine: function () {
                        return this.first + this.size - 1;
                    },
                    clipPos: function (e) {
                        return ft(this, e);
                    },
                    getCursor: function (e) {
                        var t,
                            r = this.sel.primary();
                        return (t = null == e || "head" == e ? r.head : "anchor" == e ? r.anchor : "end" == e || "to" == e || !1 === e ? r.to() : r.from()), t;
                    },
                    listSelections: function () {
                        return this.sel.ranges;
                    },
                    somethingSelected: function () {
                        return this.sel.somethingSelected();
                    },
                    setCursor: Ei(function (e, t, r) {
                        zo(this, ft(this, "number" == typeof e ? it(e, t || 0) : e), null, r);
                    }),
                    setSelection: Ei(function (e, t, r) {
                        zo(this, ft(this, e), ft(this, t || e), r);
                    }),
                    extendSelection: Ei(function (e, t, r) {
                        Fo(this, ft(this, e), t && ft(this, t), r);
                    }),
                    extendSelections: Ei(function (e, t) {
                        Po(this, dt(this, e), t);
                    }),
                    extendSelectionsBy: Ei(function (e, t) {
                        var r = q(this.sel.ranges, e);
                        Po(this, dt(this, r), t);
                    }),
                    setSelections: Ei(function (e, t, r) {
                        if (e.length) {
                            for (var n = [], i = 0; i < e.length; i++) n[i] = new io(ft(this, e[i].anchor), ft(this, e[i].head));
                            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), jo(this, oo(this.cm, n, t), r);
                        }
                    }),
                    addSelection: Ei(function (e, t, r) {
                        var n = this.sel.ranges.slice(0);
                        n.push(new io(ft(this, e), ft(this, t || e))), jo(this, oo(this.cm, n, n.length - 1), r);
                    }),
                    getSelection: function (e) {
                        for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
                            var i = Ze(this, r[n].from(), r[n].to());
                            t = t ? t.concat(i) : i;
                        }
                        return !1 === e ? t : t.join(e || this.lineSeparator());
                    },
                    getSelections: function (e) {
                        for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
                            var i = Ze(this, r[n].from(), r[n].to());
                            !1 !== e && (i = i.join(e || this.lineSeparator())), (t[n] = i);
                        }
                        return t;
                    },
                    replaceSelection: function (e, t, r) {
                        for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
                        this.replaceSelections(n, t, r || "+input");
                    },
                    replaceSelections: Ei(function (e, t, r) {
                        for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                            var l = i.ranges[o];
                            n[o] = { from: l.from(), to: l.to(), text: this.splitLines(e[o]), origin: r };
                        }
                        for (var a = t && "end" != t && fo(this, n, t), s = n.length - 1; s >= 0; s--) Zo(this, n[s]);
                        a ? Bo(this, a) : this.cm && li(this.cm);
                    }),
                    undo: Ei(function () {
                        Qo(this, "undo");
                    }),
                    redo: Ei(function () {
                        Qo(this, "redo");
                    }),
                    undoSelection: Ei(function () {
                        Qo(this, "undo", !0);
                    }),
                    redoSelection: Ei(function () {
                        Qo(this, "redo", !0);
                    }),
                    setExtending: function (e) {
                        this.extend = e;
                    },
                    getExtending: function () {
                        return this.extend;
                    },
                    historySize: function () {
                        for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t;
                        for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
                        return { undo: t, redo: r };
                    },
                    clearHistory: function () {
                        var e = this;
                        (this.history = new xo(this.history.maxGeneration)),
                            mo(
                                this,
                                function (t) {
                                    return (t.history = e.history);
                                },
                                !0
                            );
                    },
                    markClean: function () {
                        this.cleanGeneration = this.changeGeneration(!0);
                    },
                    changeGeneration: function (e) {
                        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
                    },
                    isClean: function (e) {
                        return this.history.generation == (e || this.cleanGeneration);
                    },
                    getHistory: function () {
                        return { done: Eo(this.history.done), undone: Eo(this.history.undone) };
                    },
                    setHistory: function (e) {
                        var t = (this.history = new xo(this.history.maxGeneration));
                        (t.done = Eo(e.done.slice(0), null, !0)), (t.undone = Eo(e.undone.slice(0), null, !0));
                    },
                    setGutterMarker: Ei(function (e, t, r) {
                        return al(this, e, "gutter", function (e) {
                            var n = e.gutterMarkers || (e.gutterMarkers = {});
                            return (n[t] = r), !r && ne(n) && (e.gutterMarkers = null), !0;
                        });
                    }),
                    clearGutter: Ei(function (e) {
                        var t = this;
                        this.iter(function (r) {
                            r.gutterMarkers &&
                                r.gutterMarkers[e] &&
                                al(t, r, "gutter", function () {
                                    return (r.gutterMarkers[e] = null), ne(r.gutterMarkers) && (r.gutterMarkers = null), !0;
                                });
                        });
                    }),
                    lineInfo: function (e) {
                        var t;
                        if ("number" == typeof e) {
                            if (!rt(this, e)) return null;
                            if (((t = e), (e = qe(this, e)), !e)) return null;
                        } else if (((t = et(e)), null == t)) return null;
                        return { line: t, handle: e, text: e.text, gutterMarkers: e.gutterMarkers, textClass: e.textClass, bgClass: e.bgClass, wrapClass: e.wrapClass, widgets: e.widgets };
                    },
                    addLineClass: Ei(function (e, t, r) {
                        return al(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                            var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
                            if (e[n]) {
                                if (S(r).test(e[n])) return !1;
                                e[n] += " " + r;
                            } else e[n] = r;
                            return !0;
                        });
                    }),
                    removeLineClass: Ei(function (e, t, r) {
                        return al(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                            var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                                i = e[n];
                            if (!i) return !1;
                            if (null == r) e[n] = null;
                            else {
                                var o = i.match(S(r));
                                if (!o) return !1;
                                var l = o.index + o[0].length;
                                e[n] = i.slice(0, o.index) + (o.index && l != i.length ? " " : "") + i.slice(l) || null;
                            }
                            return !0;
                        });
                    }),
                    addLineWidget: Ei(function (e, t, r) {
                        return hl(this, e, t, r);
                    }),
                    removeLineWidget: function (e) {
                        e.clear();
                    },
                    markText: function (e, t, r) {
                        return gl(this, ft(this, e), ft(this, t), r, (r && r.type) || "range");
                    },
                    setBookmark: function (e, t) {
                        var r = { replacedWith: t && (null == t.nodeType ? t.widget : t), insertLeft: t && t.insertLeft, clearWhenEmpty: !1, shared: t && t.shared, handleMouseEvents: t && t.handleMouseEvents };
                        return (e = ft(this, e)), gl(this, e, e, r, "bookmark");
                    },
                    findMarksAt: function (e) {
                        e = ft(this, e);
                        var t = [],
                            r = qe(this, e.line).markedSpans;
                        if (r)
                            for (var n = 0; n < r.length; ++n) {
                                var i = r[n];
                                (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
                            }
                        return t;
                    },
                    findMarks: function (e, t, r) {
                        (e = ft(this, e)), (t = ft(this, t));
                        var n = [],
                            i = e.line;
                        return (
                            this.iter(e.line, t.line + 1, function (o) {
                                var l = o.markedSpans;
                                if (l)
                                    for (var a = 0; a < l.length; a++) {
                                        var s = l[a];
                                        (null != s.to && i == e.line && e.ch >= s.to) || (null == s.from && i != e.line) || (null != s.from && i == t.line && s.from >= t.ch) || (r && !r(s.marker)) || n.push(s.marker.parent || s.marker);
                                    }
                                ++i;
                            }),
                            n
                        );
                    },
                    getAllMarks: function () {
                        var e = [];
                        return (
                            this.iter(function (t) {
                                var r = t.markedSpans;
                                if (r) for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker);
                            }),
                            e
                        );
                    },
                    posFromIndex: function (e) {
                        var t,
                            r = this.first,
                            n = this.lineSeparator().length;
                        return (
                            this.iter(function (i) {
                                var o = i.text.length + n;
                                if (o > e) return (t = e), !0;
                                (e -= o), ++r;
                            }),
                            ft(this, it(r, t))
                        );
                    },
                    indexFromPos: function (e) {
                        e = ft(this, e);
                        var t = e.ch;
                        if (e.line < this.first || e.ch < 0) return 0;
                        var r = this.lineSeparator().length;
                        return (
                            this.iter(this.first, e.line, function (e) {
                                t += e.text.length + r;
                            }),
                            t
                        );
                    },
                    copy: function (e) {
                        var t = new Cl(Je(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                        return (t.scrollTop = this.scrollTop), (t.scrollLeft = this.scrollLeft), (t.sel = this.sel), (t.extend = !1), e && ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())), t;
                    },
                    linkedDoc: function (e) {
                        e || (e = {});
                        var t = this.first,
                            r = this.first + this.size;
                        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
                        var n = new Cl(Je(this, t, r), e.mode || this.modeOption, t, this.lineSep, this.direction);
                        return (
                            e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({ doc: n, sharedHist: e.sharedHist }), (n.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]), bl(n, yl(this)), n
                        );
                    },
                    unlinkDoc: function (e) {
                        if ((e instanceof Pa && (e = e.doc), this.linked))
                            for (var t = 0; t < this.linked.length; ++t) {
                                var r = this.linked[t];
                                if (r.doc == e) {
                                    this.linked.splice(t, 1), e.unlinkDoc(this), wl(yl(this));
                                    break;
                                }
                            }
                        if (e.history == this.history) {
                            var n = [e.id];
                            mo(
                                e,
                                function (e) {
                                    return n.push(e.id);
                                },
                                !0
                            ),
                                (e.history = new xo(null)),
                                (e.history.done = Eo(this.history.done, n)),
                                (e.history.undone = Eo(this.history.undone, n));
                        }
                    },
                    iterLinkedDocs: function (e) {
                        mo(this, e);
                    },
                    getMode: function () {
                        return this.mode;
                    },
                    getEditor: function () {
                        return this.cm;
                    },
                    splitLines: function (e) {
                        return this.lineSep ? e.split(this.lineSep) : Ee(e);
                    },
                    lineSeparator: function () {
                        return this.lineSep || "\n";
                    },
                    setDirection: Ei(function (e) {
                        "rtl" != e && (e = "ltr"),
                            e != this.direction &&
                                ((this.direction = e),
                                this.iter(function (e) {
                                    return (e.order = null);
                                }),
                                this.cm && wo(this.cm));
                    }),
                })),
                    (Cl.prototype.eachLine = Cl.prototype.iter);
                var kl = 0;
                function Sl(e) {
                    var t = this;
                    if ((Tl(t), !ye(t, e) && !Vr(t.display, e))) {
                        Ce(e), l && (kl = +new Date());
                        var r = Hn(t, e, !0),
                            n = e.dataTransfer.files;
                        if (r && !t.isReadOnly())
                            if (n && n.length && window.FileReader && window.File)
                                for (
                                    var i = n.length,
                                        o = Array(i),
                                        a = 0,
                                        s = function () {
                                            ++a == i &&
                                                Di(t, function () {
                                                    r = ft(t.doc, r);
                                                    var e = {
                                                        from: r,
                                                        to: r,
                                                        text: t.doc.splitLines(
                                                            o
                                                                .filter(function (e) {
                                                                    return null != e;
                                                                })
                                                                .join(t.doc.lineSeparator())
                                                        ),
                                                        origin: "paste",
                                                    };
                                                    Zo(t.doc, e), Bo(t.doc, lo(ft(t.doc, r), ft(t.doc, ao(e))));
                                                })();
                                        },
                                        u = function (e, r) {
                                            if (t.options.allowDropFileTypes && -1 == B(t.options.allowDropFileTypes, e.type)) s();
                                            else {
                                                var n = new FileReader();
                                                (n.onerror = function () {
                                                    return s();
                                                }),
                                                    (n.onload = function () {
                                                        var e = n.result;
                                                        /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[r] = e), s();
                                                    }),
                                                    n.readAsText(e);
                                            }
                                        },
                                        c = 0;
                                    c < n.length;
                                    c++
                                )
                                    u(n[c], c);
                            else {
                                if (t.state.draggingText && t.doc.sel.contains(r) > -1)
                                    return (
                                        t.state.draggingText(e),
                                        void setTimeout(function () {
                                            return t.display.input.focus();
                                        }, 20)
                                    );
                                try {
                                    var f = e.dataTransfer.getData("Text");
                                    if (f) {
                                        var h;
                                        if ((t.state.draggingText && !t.state.draggingText.copy && (h = t.listSelections()), Vo(t.doc, lo(r, r)), h)) for (var d = 0; d < h.length; ++d) nl(t.doc, "", h[d].anchor, h[d].head, "drag");
                                        t.replaceSelection(f, "around", "paste"), t.display.input.focus();
                                    }
                                } catch (e) {}
                            }
                    }
                }
                function Ll(e, t) {
                    if (l && (!e.state.draggingText || +new Date() - kl < 100)) Le(t);
                    else if (!ye(e, t) && !Vr(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), (t.dataTransfer.effectAllowed = "copyMove"), t.dataTransfer.setDragImage && !h)) {
                        var r = N("img", null, null, "position: fixed; left: 0; top: 0;");
                        (r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                            f && ((r.width = r.height = 1), e.display.wrapper.appendChild(r), (r._top = r.offsetTop)),
                            t.dataTransfer.setDragImage(r, 0, 0),
                            f && r.parentNode.removeChild(r);
                    }
                }
                function Ml(e, t) {
                    var r = Hn(e, t);
                    if (r) {
                        var n = document.createDocumentFragment();
                        _n(e, r, n),
                            e.display.dragCursor || ((e.display.dragCursor = N("div", null, "CodeMirror-cursors CodeMirror-dragcursors")), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                            O(e.display.dragCursor, n);
                    }
                }
                function Tl(e) {
                    e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
                }
                function Ol(e) {
                    if (document.getElementsByClassName) {
                        for (var t = document.getElementsByClassName("CodeMirror"), r = [], n = 0; n < t.length; n++) {
                            var i = t[n].CodeMirror;
                            i && r.push(i);
                        }
                        r.length &&
                            r[0].operation(function () {
                                for (var t = 0; t < r.length; t++) e(r[t]);
                            });
                    }
                }
                var Nl = !1;
                function Al() {
                    Nl || (Dl(), (Nl = !0));
                }
                function Dl() {
                    var e;
                    pe(window, "resize", function () {
                        null == e &&
                            (e = setTimeout(function () {
                                (e = null), Ol(Wl);
                            }, 100));
                    }),
                        pe(window, "blur", function () {
                            return Ol(Zn);
                        });
                }
                function Wl(e) {
                    var t = e.display;
                    (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null), (t.scrollbarsClipped = !1), e.setSize();
                }
                for (
                    var El = {
                            3: "Pause",
                            8: "Backspace",
                            9: "Tab",
                            13: "Enter",
                            16: "Shift",
                            17: "Ctrl",
                            18: "Alt",
                            19: "Pause",
                            20: "CapsLock",
                            27: "Esc",
                            32: "Space",
                            33: "PageUp",
                            34: "PageDown",
                            35: "End",
                            36: "Home",
                            37: "Left",
                            38: "Up",
                            39: "Right",
                            40: "Down",
                            44: "PrintScrn",
                            45: "Insert",
                            46: "Delete",
                            59: ";",
                            61: "=",
                            91: "Mod",
                            92: "Mod",
                            93: "Mod",
                            106: "*",
                            107: "=",
                            109: "-",
                            110: ".",
                            111: "/",
                            145: "ScrollLock",
                            173: "-",
                            186: ";",
                            187: "=",
                            188: ",",
                            189: "-",
                            190: ".",
                            191: "/",
                            192: "`",
                            219: "[",
                            220: "\\",
                            221: "]",
                            222: "'",
                            63232: "Up",
                            63233: "Down",
                            63234: "Left",
                            63235: "Right",
                            63272: "Delete",
                            63273: "Home",
                            63275: "End",
                            63276: "PageUp",
                            63277: "PageDown",
                            63302: "Insert",
                        },
                        Hl = 0;
                    Hl < 10;
                    Hl++
                )
                    El[Hl + 48] = El[Hl + 96] = String(Hl);
                for (var Fl = 65; Fl <= 90; Fl++) El[Fl] = String.fromCharCode(Fl);
                for (var Pl = 1; Pl <= 12; Pl++) El[Pl + 111] = El[Pl + 63235] = "F" + Pl;
                var Il = {};
                function zl(e) {
                    var t,
                        r,
                        n,
                        i,
                        o = e.split(/-(?!$)/);
                    e = o[o.length - 1];
                    for (var l = 0; l < o.length - 1; l++) {
                        var a = o[l];
                        if (/^(cmd|meta|m)$/i.test(a)) i = !0;
                        else if (/^a(lt)?$/i.test(a)) t = !0;
                        else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
                        else {
                            if (!/^s(hift)?$/i.test(a)) throw new Error("Unrecognized modifier name: " + a);
                            n = !0;
                        }
                    }
                    return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e;
                }
                function Rl(e) {
                    var t = {};
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var n = e[r];
                            if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
                            if ("..." == n) {
                                delete e[r];
                                continue;
                            }
                            for (var i = q(r.split(" "), zl), o = 0; o < i.length; o++) {
                                var l = void 0,
                                    a = void 0;
                                o == i.length - 1 ? ((a = i.join(" ")), (l = n)) : ((a = i.slice(0, o + 1).join(" ")), (l = "..."));
                                var s = t[a];
                                if (s) {
                                    if (s != l) throw new Error("Inconsistent bindings for " + a);
                                } else t[a] = l;
                            }
                            delete e[r];
                        }
                    for (var u in t) e[u] = t[u];
                    return e;
                }
                function Bl(e, t, r, n) {
                    t = _l(t);
                    var i = t.call ? t.call(e, n) : t[e];
                    if (!1 === i) return "nothing";
                    if ("..." === i) return "multi";
                    if (null != i && r(i)) return "handled";
                    if (t.fallthrough) {
                        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Bl(e, t.fallthrough, r, n);
                        for (var o = 0; o < t.fallthrough.length; o++) {
                            var l = Bl(e, t.fallthrough[o], r, n);
                            if (l) return l;
                        }
                    }
                }
                function jl(e) {
                    var t = "string" == typeof e ? e : El[e.keyCode];
                    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
                }
                function Vl(e, t, r) {
                    var n = e;
                    return (
                        t.altKey && "Alt" != n && (e = "Alt-" + e),
                        (C ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e),
                        (C ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e),
                        !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e),
                        e
                    );
                }
                function Gl(e, t) {
                    if (f && 34 == e.keyCode && e["char"]) return !1;
                    var r = El[e.keyCode];
                    return null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code), Vl(r, e, t));
                }
                function _l(e) {
                    return "string" == typeof e ? Il[e] : e;
                }
                function Ul(e, t) {
                    for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
                        var o = t(r[i]);
                        while (n.length && ot(o.from, Y(n).to) <= 0) {
                            var l = n.pop();
                            if (ot(l.from, o.from) < 0) {
                                o.from = l.from;
                                break;
                            }
                        }
                        n.push(o);
                    }
                    Ai(e, function () {
                        for (var t = n.length - 1; t >= 0; t--) nl(e.doc, "", n[t].from, n[t].to, "+delete");
                        li(e);
                    });
                }
                function $l(e, t, r) {
                    var n = le(e.text, t + r, r);
                    return n < 0 || n > e.text.length ? null : n;
                }
                function Kl(e, t, r) {
                    var n = $l(e, t.ch, r);
                    return null == n ? null : new it(t.line, n, r < 0 ? "after" : "before");
                }
                function Xl(e, t, r, n, i) {
                    if (e) {
                        "rtl" == t.doc.direction && (i = -i);
                        var o = he(r, t.doc.direction);
                        if (o) {
                            var l,
                                a = i < 0 ? Y(o) : o[0],
                                s = i < 0 == (1 == a.level),
                                u = s ? "after" : "before";
                            if (a.level > 0 || "rtl" == t.doc.direction) {
                                var c = en(t, r);
                                l = i < 0 ? r.text.length - 1 : 0;
                                var f = tn(t, c, l).top;
                                (l = ae(
                                    function (e) {
                                        return tn(t, c, e).top == f;
                                    },
                                    i < 0 == (1 == a.level) ? a.from : a.to - 1,
                                    l
                                )),
                                    "before" == u && (l = $l(r, l, 1));
                            } else l = i < 0 ? a.to : a.from;
                            return new it(n, l, u);
                        }
                    }
                    return new it(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after");
                }
                function Yl(e, t, r, n) {
                    var i = he(t, e.doc.direction);
                    if (!i) return Kl(t, r, n);
                    r.ch >= t.text.length ? ((r.ch = t.text.length), (r.sticky = "before")) : r.ch <= 0 && ((r.ch = 0), (r.sticky = "after"));
                    var o = ce(i, r.ch, r.sticky),
                        l = i[o];
                    if ("ltr" == e.doc.direction && l.level % 2 == 0 && (n > 0 ? l.to > r.ch : l.from < r.ch)) return Kl(t, r, n);
                    var a,
                        s = function (e, r) {
                            return $l(t, e instanceof it ? e.ch : e, r);
                        },
                        u = function (r) {
                            return e.options.lineWrapping ? ((a = a || en(e, t)), kn(e, t, a, r)) : { begin: 0, end: t.text.length };
                        },
                        c = u("before" == r.sticky ? s(r, -1) : r.ch);
                    if ("rtl" == e.doc.direction || 1 == l.level) {
                        var f = (1 == l.level) == n < 0,
                            h = s(r, f ? 1 : -1);
                        if (null != h && (f ? h <= l.to && h <= c.end : h >= l.from && h >= c.begin)) {
                            var d = f ? "before" : "after";
                            return new it(r.line, h, d);
                        }
                    }
                    var p = function (e, t, n) {
                            for (
                                var o = function (e, t) {
                                    return t ? new it(r.line, s(e, 1), "before") : new it(r.line, e, "after");
                                };
                                e >= 0 && e < i.length;
                                e += t
                            ) {
                                var l = i[e],
                                    a = t > 0 == (1 != l.level),
                                    u = a ? n.begin : s(n.end, -1);
                                if (l.from <= u && u < l.to) return o(u, a);
                                if (((u = a ? l.from : s(l.to, -1)), n.begin <= u && u < n.end)) return o(u, a);
                            }
                        },
                        g = p(o + n, n, c);
                    if (g) return g;
                    var v = n > 0 ? c.end : s(c.begin, -1);
                    return null == v || (n > 0 && v == t.text.length) || ((g = p(n > 0 ? 0 : i.length - 1, n, u(v))), !g) ? null : g;
                }
                (Il.basic = {
                    Left: "goCharLeft",
                    Right: "goCharRight",
                    Up: "goLineUp",
                    Down: "goLineDown",
                    End: "goLineEnd",
                    Home: "goLineStartSmart",
                    PageUp: "goPageUp",
                    PageDown: "goPageDown",
                    Delete: "delCharAfter",
                    Backspace: "delCharBefore",
                    "Shift-Backspace": "delCharBefore",
                    Tab: "defaultTab",
                    "Shift-Tab": "indentAuto",
                    Enter: "newlineAndIndent",
                    Insert: "toggleOverwrite",
                    Esc: "singleSelection",
                }),
                    (Il.pcDefault = {
                        "Ctrl-A": "selectAll",
                        "Ctrl-D": "deleteLine",
                        "Ctrl-Z": "undo",
                        "Shift-Ctrl-Z": "redo",
                        "Ctrl-Y": "redo",
                        "Ctrl-Home": "goDocStart",
                        "Ctrl-End": "goDocEnd",
                        "Ctrl-Up": "goLineUp",
                        "Ctrl-Down": "goLineDown",
                        "Ctrl-Left": "goGroupLeft",
                        "Ctrl-Right": "goGroupRight",
                        "Alt-Left": "goLineStart",
                        "Alt-Right": "goLineEnd",
                        "Ctrl-Backspace": "delGroupBefore",
                        "Ctrl-Delete": "delGroupAfter",
                        "Ctrl-S": "save",
                        "Ctrl-F": "find",
                        "Ctrl-G": "findNext",
                        "Shift-Ctrl-G": "findPrev",
                        "Shift-Ctrl-F": "replace",
                        "Shift-Ctrl-R": "replaceAll",
                        "Ctrl-[": "indentLess",
                        "Ctrl-]": "indentMore",
                        "Ctrl-U": "undoSelection",
                        "Shift-Ctrl-U": "redoSelection",
                        "Alt-U": "redoSelection",
                        fallthrough: "basic",
                    }),
                    (Il.emacsy = {
                        "Ctrl-F": "goCharRight",
                        "Ctrl-B": "goCharLeft",
                        "Ctrl-P": "goLineUp",
                        "Ctrl-N": "goLineDown",
                        "Alt-F": "goWordRight",
                        "Alt-B": "goWordLeft",
                        "Ctrl-A": "goLineStart",
                        "Ctrl-E": "goLineEnd",
                        "Ctrl-V": "goPageDown",
                        "Shift-Ctrl-V": "goPageUp",
                        "Ctrl-D": "delCharAfter",
                        "Ctrl-H": "delCharBefore",
                        "Alt-D": "delWordAfter",
                        "Alt-Backspace": "delWordBefore",
                        "Ctrl-K": "killLine",
                        "Ctrl-T": "transposeChars",
                        "Ctrl-O": "openLine",
                    }),
                    (Il.macDefault = {
                        "Cmd-A": "selectAll",
                        "Cmd-D": "deleteLine",
                        "Cmd-Z": "undo",
                        "Shift-Cmd-Z": "redo",
                        "Cmd-Y": "redo",
                        "Cmd-Home": "goDocStart",
                        "Cmd-Up": "goDocStart",
                        "Cmd-End": "goDocEnd",
                        "Cmd-Down": "goDocEnd",
                        "Alt-Left": "goGroupLeft",
                        "Alt-Right": "goGroupRight",
                        "Cmd-Left": "goLineLeft",
                        "Cmd-Right": "goLineRight",
                        "Alt-Backspace": "delGroupBefore",
                        "Ctrl-Alt-Backspace": "delGroupAfter",
                        "Alt-Delete": "delGroupAfter",
                        "Cmd-S": "save",
                        "Cmd-F": "find",
                        "Cmd-G": "findNext",
                        "Shift-Cmd-G": "findPrev",
                        "Cmd-Alt-F": "replace",
                        "Shift-Cmd-Alt-F": "replaceAll",
                        "Cmd-[": "indentLess",
                        "Cmd-]": "indentMore",
                        "Cmd-Backspace": "delWrappedLineLeft",
                        "Cmd-Delete": "delWrappedLineRight",
                        "Cmd-U": "undoSelection",
                        "Shift-Cmd-U": "redoSelection",
                        "Ctrl-Up": "goDocStart",
                        "Ctrl-Down": "goDocEnd",
                        fallthrough: ["basic", "emacsy"],
                    }),
                    (Il["default"] = y ? Il.macDefault : Il.pcDefault);
                var ql = {
                    selectAll: Yo,
                    singleSelection: function (e) {
                        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), G);
                    },
                    killLine: function (e) {
                        return Ul(e, function (t) {
                            if (t.empty()) {
                                var r = qe(e.doc, t.head.line).text.length;
                                return t.head.ch == r && t.head.line < e.lastLine() ? { from: t.head, to: it(t.head.line + 1, 0) } : { from: t.head, to: it(t.head.line, r) };
                            }
                            return { from: t.from(), to: t.to() };
                        });
                    },
                    deleteLine: function (e) {
                        return Ul(e, function (t) {
                            return { from: it(t.from().line, 0), to: ft(e.doc, it(t.to().line + 1, 0)) };
                        });
                    },
                    delLineLeft: function (e) {
                        return Ul(e, function (e) {
                            return { from: it(e.from().line, 0), to: e.from() };
                        });
                    },
                    delWrappedLineLeft: function (e) {
                        return Ul(e, function (t) {
                            var r = e.charCoords(t.head, "div").top + 5,
                                n = e.coordsChar({ left: 0, top: r }, "div");
                            return { from: n, to: t.from() };
                        });
                    },
                    delWrappedLineRight: function (e) {
                        return Ul(e, function (t) {
                            var r = e.charCoords(t.head, "div").top + 5,
                                n = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, "div");
                            return { from: t.from(), to: n };
                        });
                    },
                    undo: function (e) {
                        return e.undo();
                    },
                    redo: function (e) {
                        return e.redo();
                    },
                    undoSelection: function (e) {
                        return e.undoSelection();
                    },
                    redoSelection: function (e) {
                        return e.redoSelection();
                    },
                    goDocStart: function (e) {
                        return e.extendSelection(it(e.firstLine(), 0));
                    },
                    goDocEnd: function (e) {
                        return e.extendSelection(it(e.lastLine()));
                    },
                    goLineStart: function (e) {
                        return e.extendSelectionsBy(
                            function (t) {
                                return Zl(e, t.head.line);
                            },
                            { origin: "+move", bias: 1 }
                        );
                    },
                    goLineStartSmart: function (e) {
                        return e.extendSelectionsBy(
                            function (t) {
                                return Ql(e, t.head);
                            },
                            { origin: "+move", bias: 1 }
                        );
                    },
                    goLineEnd: function (e) {
                        return e.extendSelectionsBy(
                            function (t) {
                                return Jl(e, t.head.line);
                            },
                            { origin: "+move", bias: -1 }
                        );
                    },
                    goLineRight: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var r = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, "div");
                        }, U);
                    },
                    goLineLeft: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var r = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({ left: 0, top: r }, "div");
                        }, U);
                    },
                    goLineLeftSmart: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var r = e.cursorCoords(t.head, "div").top + 5,
                                n = e.coordsChar({ left: 0, top: r }, "div");
                            return n.ch < e.getLine(n.line).search(/\S/) ? Ql(e, t.head) : n;
                        }, U);
                    },
                    goLineUp: function (e) {
                        return e.moveV(-1, "line");
                    },
                    goLineDown: function (e) {
                        return e.moveV(1, "line");
                    },
                    goPageUp: function (e) {
                        return e.moveV(-1, "page");
                    },
                    goPageDown: function (e) {
                        return e.moveV(1, "page");
                    },
                    goCharLeft: function (e) {
                        return e.moveH(-1, "char");
                    },
                    goCharRight: function (e) {
                        return e.moveH(1, "char");
                    },
                    goColumnLeft: function (e) {
                        return e.moveH(-1, "column");
                    },
                    goColumnRight: function (e) {
                        return e.moveH(1, "column");
                    },
                    goWordLeft: function (e) {
                        return e.moveH(-1, "word");
                    },
                    goGroupRight: function (e) {
                        return e.moveH(1, "group");
                    },
                    goGroupLeft: function (e) {
                        return e.moveH(-1, "group");
                    },
                    goWordRight: function (e) {
                        return e.moveH(1, "word");
                    },
                    delCharBefore: function (e) {
                        return e.deleteH(-1, "char");
                    },
                    delCharAfter: function (e) {
                        return e.deleteH(1, "char");
                    },
                    delWordBefore: function (e) {
                        return e.deleteH(-1, "word");
                    },
                    delWordAfter: function (e) {
                        return e.deleteH(1, "word");
                    },
                    delGroupBefore: function (e) {
                        return e.deleteH(-1, "group");
                    },
                    delGroupAfter: function (e) {
                        return e.deleteH(1, "group");
                    },
                    indentAuto: function (e) {
                        return e.indentSelection("smart");
                    },
                    indentMore: function (e) {
                        return e.indentSelection("add");
                    },
                    indentLess: function (e) {
                        return e.indentSelection("subtract");
                    },
                    insertTab: function (e) {
                        return e.replaceSelection("\t");
                    },
                    insertSoftTab: function (e) {
                        for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
                            var o = r[i].from(),
                                l = z(e.getLine(o.line), o.ch, n);
                            t.push(X(n - (l % n)));
                        }
                        e.replaceSelections(t);
                    },
                    defaultTab: function (e) {
                        e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
                    },
                    transposeChars: function (e) {
                        return Ai(e, function () {
                            for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                                if (t[n].empty()) {
                                    var i = t[n].head,
                                        o = qe(e.doc, i.line).text;
                                    if (o)
                                        if ((i.ch == o.length && (i = new it(i.line, i.ch - 1)), i.ch > 0)) (i = new it(i.line, i.ch + 1)), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), it(i.line, i.ch - 2), i, "+transpose");
                                        else if (i.line > e.doc.first) {
                                            var l = qe(e.doc, i.line - 1).text;
                                            l && ((i = new it(i.line, 1)), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), it(i.line - 1, l.length - 1), i, "+transpose"));
                                        }
                                    r.push(new io(i, i));
                                }
                            e.setSelections(r);
                        });
                    },
                    newlineAndIndent: function (e) {
                        return Ai(e, function () {
                            for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--) e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, "+input");
                            t = e.listSelections();
                            for (var n = 0; n < t.length; n++) e.indentLine(t[n].from().line, null, !0);
                            li(e);
                        });
                    },
                    openLine: function (e) {
                        return e.replaceSelection("\n", "start");
                    },
                    toggleOverwrite: function (e) {
                        return e.toggleOverwrite();
                    },
                };
                function Zl(e, t) {
                    var r = qe(e.doc, t),
                        n = Zt(r);
                    return n != r && (t = et(n)), Xl(!0, e, n, t, 1);
                }
                function Jl(e, t) {
                    var r = qe(e.doc, t),
                        n = Jt(r);
                    return n != r && (t = et(n)), Xl(!0, e, r, t, -1);
                }
                function Ql(e, t) {
                    var r = Zl(e, t.line),
                        n = qe(e.doc, r.line),
                        i = he(n, e.doc.direction);
                    if (!i || 0 == i[0].level) {
                        var o = Math.max(r.ch, n.text.search(/\S/)),
                            l = t.line == r.line && t.ch <= o && t.ch;
                        return it(r.line, l ? 0 : o, r.sticky);
                    }
                    return r;
                }
                function ea(e, t, r) {
                    if ("string" == typeof t && ((t = ql[t]), !t)) return !1;
                    e.display.input.ensurePolled();
                    var n = e.display.shift,
                        i = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), (i = t(e) != V);
                    } finally {
                        (e.display.shift = n), (e.state.suppressEdits = !1);
                    }
                    return i;
                }
                function ta(e, t, r) {
                    for (var n = 0; n < e.state.keyMaps.length; n++) {
                        var i = Bl(t, e.state.keyMaps[n], r, e);
                        if (i) return i;
                    }
                    return (e.options.extraKeys && Bl(t, e.options.extraKeys, r, e)) || Bl(t, e.options.keyMap, r, e);
                }
                var ra = new R();
                function na(e, t, r, n) {
                    var i = e.state.keySeq;
                    if (i) {
                        if (jl(t)) return "handled";
                        if (
                            (/\'$/.test(t)
                                ? (e.state.keySeq = null)
                                : ra.set(50, function () {
                                      e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
                                  }),
                            ia(e, i + " " + t, r, n))
                        )
                            return !0;
                    }
                    return ia(e, t, r, n);
                }
                function ia(e, t, r, n) {
                    var i = ta(e, t, n);
                    return "multi" == i && (e.state.keySeq = t), "handled" == i && Tr(e, "keyHandled", e, t, r), ("handled" != i && "multi" != i) || (Ce(r), Kn(e)), !!i;
                }
                function oa(e, t) {
                    var r = Gl(t, !0);
                    return (
                        !!r &&
                        (t.shiftKey && !e.state.keySeq
                            ? na(e, "Shift-" + r, t, function (t) {
                                  return ea(e, t, !0);
                              }) ||
                              na(e, r, t, function (t) {
                                  if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ea(e, t);
                              })
                            : na(e, r, t, function (t) {
                                  return ea(e, t);
                              }))
                    );
                }
                function la(e, t, r) {
                    return na(e, "'" + r + "'", t, function (t) {
                        return ea(e, t, !0);
                    });
                }
                var aa = null;
                function sa(e) {
                    var t = this;
                    if (((t.curOp.focus = W()), !ye(t, e))) {
                        l && a < 11 && 27 == e.keyCode && (e.returnValue = !1);
                        var n = e.keyCode;
                        t.display.shift = 16 == n || e.shiftKey;
                        var i = oa(t, e);
                        f && ((aa = i ? n : null), i || 88 != n || Fe || !(y ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")),
                            r && !y && !i && 46 == n && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"),
                            18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || ua(t);
                    }
                }
                function ua(e) {
                    var t = e.display.lineDiv;
                    function r(e) {
                        (18 != e.keyCode && e.altKey) || (M(t, "CodeMirror-crosshair"), ve(document, "keyup", r), ve(document, "mouseover", r));
                    }
                    E(t, "CodeMirror-crosshair"), pe(document, "keyup", r), pe(document, "mouseover", r);
                }
                function ca(e) {
                    16 == e.keyCode && (this.doc.sel.shift = !1), ye(this, e);
                }
                function fa(e) {
                    var t = this;
                    if (!(Vr(t.display, e) || ye(t, e) || (e.ctrlKey && !e.altKey) || (y && e.metaKey))) {
                        var r = e.keyCode,
                            n = e.charCode;
                        if (f && r == aa) return (aa = null), void Ce(e);
                        if (!f || (e.which && !(e.which < 10)) || !oa(t, e)) {
                            var i = String.fromCharCode(null == n ? r : n);
                            "\b" != i && (la(t, e, i) || t.display.input.onKeyPress(e));
                        }
                    }
                }
                var ha,
                    da,
                    pa = 400,
                    ga = function (e, t, r) {
                        (this.time = e), (this.pos = t), (this.button = r);
                    };
                function va(e, t) {
                    var r = +new Date();
                    return da && da.compare(r, e, t) ? ((ha = da = null), "triple") : ha && ha.compare(r, e, t) ? ((da = new ga(r, e, t)), (ha = null), "double") : ((ha = new ga(r, e, t)), (da = null), "single");
                }
                function ma(e) {
                    var t = this,
                        r = t.display;
                    if (!(ye(t, e) || (r.activeTouch && r.input.supportsTouch())))
                        if ((r.input.ensurePolled(), (r.shift = e.shiftKey), Vr(r, e)))
                            s ||
                                ((r.scroller.draggable = !1),
                                setTimeout(function () {
                                    return (r.scroller.draggable = !0);
                                }, 100));
                        else if (!Ma(t, e)) {
                            var n = Hn(t, e),
                                i = Te(e),
                                o = n ? va(n, i) : "single";
                            window.focus(),
                                1 == i && t.state.selectingText && t.state.selectingText(e),
                                (n && ya(t, i, n, o, e)) ||
                                    (1 == i
                                        ? n
                                            ? wa(t, n, o, e)
                                            : Me(e) == r.scroller && Ce(e)
                                        : 2 == i
                                        ? (n && Fo(t.doc, n),
                                          setTimeout(function () {
                                              return r.input.focus();
                                          }, 20))
                                        : 3 == i && (k ? t.display.input.onContextMenu(e) : Yn(t)));
                        }
                }
                function ya(e, t, r, n, i) {
                    var o = "Click";
                    return (
                        "double" == n ? (o = "Double" + o) : "triple" == n && (o = "Triple" + o),
                        (o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o),
                        na(e, Vl(o, i), i, function (t) {
                            if (("string" == typeof t && (t = ql[t]), !t)) return !1;
                            var n = !1;
                            try {
                                e.isReadOnly() && (e.state.suppressEdits = !0), (n = t(e, r) != V);
                            } finally {
                                e.state.suppressEdits = !1;
                            }
                            return n;
                        })
                    );
                }
                function ba(e, t, r) {
                    var n = e.getOption("configureMouse"),
                        i = n ? n(e, t, r) : {};
                    if (null == i.unit) {
                        var o = b ? r.shiftKey && r.metaKey : r.altKey;
                        i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line";
                    }
                    return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey), null == i.addNew && (i.addNew = y ? r.metaKey : r.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(y ? r.altKey : r.ctrlKey)), i;
                }
                function wa(e, t, r, n) {
                    l ? setTimeout(P(Xn, e), 0) : (e.curOp.focus = W());
                    var i,
                        o = ba(e, r, n),
                        a = e.doc.sel;
                    e.options.dragDrop && Ae && !e.isReadOnly() && "single" == r && (i = a.contains(t)) > -1 && (ot((i = a.ranges[i]).from(), t) < 0 || t.xRel > 0) && (ot(i.to(), t) > 0 || t.xRel < 0) ? xa(e, n, t, o) : ka(e, n, t, o);
                }
                function xa(e, t, r, n) {
                    var i = e.display,
                        o = !1,
                        u = Di(e, function (t) {
                            s && (i.scroller.draggable = !1),
                                (e.state.draggingText = !1),
                                ve(i.wrapper.ownerDocument, "mouseup", u),
                                ve(i.wrapper.ownerDocument, "mousemove", c),
                                ve(i.scroller, "dragstart", f),
                                ve(i.scroller, "drop", u),
                                o ||
                                    (Ce(t),
                                    n.addNew || Fo(e.doc, r, null, null, n.extend),
                                    s || (l && 9 == a)
                                        ? setTimeout(function () {
                                              i.wrapper.ownerDocument.body.focus(), i.input.focus();
                                          }, 20)
                                        : i.input.focus());
                        }),
                        c = function (e) {
                            o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
                        },
                        f = function () {
                            return (o = !0);
                        };
                    s && (i.scroller.draggable = !0),
                        (e.state.draggingText = u),
                        (u.copy = !n.moveOnDrag),
                        i.scroller.dragDrop && i.scroller.dragDrop(),
                        pe(i.wrapper.ownerDocument, "mouseup", u),
                        pe(i.wrapper.ownerDocument, "mousemove", c),
                        pe(i.scroller, "dragstart", f),
                        pe(i.scroller, "drop", u),
                        Yn(e),
                        setTimeout(function () {
                            return i.input.focus();
                        }, 20);
                }
                function Ca(e, t, r) {
                    if ("char" == r) return new io(t, t);
                    if ("word" == r) return e.findWordAt(t);
                    if ("line" == r) return new io(it(t.line, 0), ft(e.doc, it(t.line + 1, 0)));
                    var n = r(e, t);
                    return new io(n.from, n.to);
                }
                function ka(e, t, r, n) {
                    var i = e.display,
                        o = e.doc;
                    Ce(t);
                    var l,
                        a,
                        s = o.sel,
                        u = s.ranges;
                    if ((n.addNew && !n.extend ? ((a = o.sel.contains(r)), (l = a > -1 ? u[a] : new io(r, r))) : ((l = o.sel.primary()), (a = o.sel.primIndex)), "rectangle" == n.unit))
                        n.addNew || (l = new io(r, r)), (r = Hn(e, t, !0, !0)), (a = -1);
                    else {
                        var c = Ca(e, r, n.unit);
                        l = n.extend ? Ho(l, c.anchor, c.head, n.extend) : c;
                    }
                    n.addNew
                        ? -1 == a
                            ? ((a = u.length), jo(o, oo(e, u.concat([l]), a), { scroll: !1, origin: "*mouse" }))
                            : u.length > 1 && u[a].empty() && "char" == n.unit && !n.extend
                            ? (jo(o, oo(e, u.slice(0, a).concat(u.slice(a + 1)), 0), { scroll: !1, origin: "*mouse" }), (s = o.sel))
                            : Io(o, a, l, _)
                        : ((a = 0), jo(o, new no([l], 0), _), (s = o.sel));
                    var f = r;
                    function h(t) {
                        if (0 != ot(f, t))
                            if (((f = t), "rectangle" == n.unit)) {
                                for (
                                    var i = [],
                                        u = e.options.tabSize,
                                        c = z(qe(o, r.line).text, r.ch, u),
                                        h = z(qe(o, t.line).text, t.ch, u),
                                        d = Math.min(c, h),
                                        p = Math.max(c, h),
                                        g = Math.min(r.line, t.line),
                                        v = Math.min(e.lastLine(), Math.max(r.line, t.line));
                                    g <= v;
                                    g++
                                ) {
                                    var m = qe(o, g).text,
                                        y = $(m, d, u);
                                    d == p ? i.push(new io(it(g, y), it(g, y))) : m.length > y && i.push(new io(it(g, y), it(g, $(m, p, u))));
                                }
                                i.length || i.push(new io(r, r)), jo(o, oo(e, s.ranges.slice(0, a).concat(i), a), { origin: "*mouse", scroll: !1 }), e.scrollIntoView(t);
                            } else {
                                var b,
                                    w = l,
                                    x = Ca(e, t, n.unit),
                                    C = w.anchor;
                                ot(x.anchor, C) > 0 ? ((b = x.head), (C = ut(w.from(), x.anchor))) : ((b = x.anchor), (C = st(w.to(), x.head)));
                                var k = s.ranges.slice(0);
                                (k[a] = Sa(e, new io(ft(o, C), b))), jo(o, oo(e, k, a), _);
                            }
                    }
                    var d = i.wrapper.getBoundingClientRect(),
                        p = 0;
                    function g(t) {
                        var r = ++p,
                            l = Hn(e, t, !0, "rectangle" == n.unit);
                        if (l)
                            if (0 != ot(l, f)) {
                                (e.curOp.focus = W()), h(l);
                                var a = ei(i, o);
                                (l.line >= a.to || l.line < a.from) &&
                                    setTimeout(
                                        Di(e, function () {
                                            p == r && g(t);
                                        }),
                                        150
                                    );
                            } else {
                                var s = t.clientY < d.top ? -20 : t.clientY > d.bottom ? 20 : 0;
                                s &&
                                    setTimeout(
                                        Di(e, function () {
                                            p == r && ((i.scroller.scrollTop += s), g(t));
                                        }),
                                        50
                                    );
                            }
                    }
                    function v(t) {
                        (e.state.selectingText = !1), (p = 1 / 0), t && (Ce(t), i.input.focus()), ve(i.wrapper.ownerDocument, "mousemove", m), ve(i.wrapper.ownerDocument, "mouseup", y), (o.history.lastSelOrigin = null);
                    }
                    var m = Di(e, function (e) {
                            0 !== e.buttons && Te(e) ? g(e) : v(e);
                        }),
                        y = Di(e, v);
                    (e.state.selectingText = y), pe(i.wrapper.ownerDocument, "mousemove", m), pe(i.wrapper.ownerDocument, "mouseup", y);
                }
                function Sa(e, t) {
                    var r = t.anchor,
                        n = t.head,
                        i = qe(e.doc, r.line);
                    if (0 == ot(r, n) && r.sticky == n.sticky) return t;
                    var o = he(i);
                    if (!o) return t;
                    var l = ce(o, r.ch, r.sticky),
                        a = o[l];
                    if (a.from != r.ch && a.to != r.ch) return t;
                    var s,
                        u = l + ((a.from == r.ch) == (1 != a.level) ? 0 : 1);
                    if (0 == u || u == o.length) return t;
                    if (n.line != r.line) s = (n.line - r.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;
                    else {
                        var c = ce(o, n.ch, n.sticky),
                            f = c - l || (n.ch - r.ch) * (1 == a.level ? -1 : 1);
                        s = c == u - 1 || c == u ? f < 0 : f > 0;
                    }
                    var h = o[u + (s ? -1 : 0)],
                        d = s == (1 == h.level),
                        p = d ? h.from : h.to,
                        g = d ? "after" : "before";
                    return r.ch == p && r.sticky == g ? t : new io(new it(r.line, p, g), n);
                }
                function La(e, t, r, n) {
                    var i, o;
                    if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
                    else
                        try {
                            (i = t.clientX), (o = t.clientY);
                        } catch (t) {
                            return !1;
                        }
                    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                    n && Ce(t);
                    var l = e.display,
                        a = l.lineDiv.getBoundingClientRect();
                    if (o > a.bottom || !we(e, r)) return Se(t);
                    o -= a.top - l.viewOffset;
                    for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                        var u = l.gutters.childNodes[s];
                        if (u && u.getBoundingClientRect().right >= i) {
                            var c = tt(e.doc, o),
                                f = e.display.gutterSpecs[s];
                            return me(e, r, e, c, f.className, t), Se(t);
                        }
                    }
                }
                function Ma(e, t) {
                    return La(e, t, "gutterClick", !0);
                }
                function Ta(e, t) {
                    Vr(e.display, t) || Oa(e, t) || ye(e, t, "contextmenu") || k || e.display.input.onContextMenu(t);
                }
                function Oa(e, t) {
                    return !!we(e, "gutterContextMenu") && La(e, t, "gutterContextMenu", !1);
                }
                function Na(e) {
                    (e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")), fn(e);
                }
                ga.prototype.compare = function (e, t, r) {
                    return this.time + pa > e && 0 == ot(t, this.pos) && r == this.button;
                };
                var Aa = {
                        toString: function () {
                            return "CodeMirror.Init";
                        },
                    },
                    Da = {},
                    Wa = {};
                function Ea(e) {
                    var t = e.optionHandlers;
                    function r(r, n, i, o) {
                        (e.defaults[r] = n),
                            i &&
                                (t[r] = o
                                    ? function (e, t, r) {
                                          r != Aa && i(e, t, r);
                                      }
                                    : i);
                    }
                    (e.defineOption = r),
                        (e.Init = Aa),
                        r(
                            "value",
                            "",
                            function (e, t) {
                                return e.setValue(t);
                            },
                            !0
                        ),
                        r(
                            "mode",
                            null,
                            function (e, t) {
                                (e.doc.modeOption = t), ho(e);
                            },
                            !0
                        ),
                        r("indentUnit", 2, ho, !0),
                        r("indentWithTabs", !1),
                        r("smartIndent", !0),
                        r(
                            "tabSize",
                            4,
                            function (e) {
                                po(e), fn(e), Pn(e);
                            },
                            !0
                        ),
                        r("lineSeparator", null, function (e, t) {
                            if (((e.doc.lineSep = t), t)) {
                                var r = [],
                                    n = e.doc.first;
                                e.doc.iter(function (e) {
                                    for (var i = 0; ; ) {
                                        var o = e.text.indexOf(t, i);
                                        if (-1 == o) break;
                                        (i = o + t.length), r.push(it(n, o));
                                    }
                                    n++;
                                });
                                for (var i = r.length - 1; i >= 0; i--) nl(e.doc, t, r[i], it(r[i].line, r[i].ch + t.length));
                            }
                        }),
                        r("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (e, t, r) {
                            (e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g")), r != Aa && e.refresh();
                        }),
                        r(
                            "specialCharPlaceholder",
                            pr,
                            function (e) {
                                return e.refresh();
                            },
                            !0
                        ),
                        r("electricChars", !0),
                        r(
                            "inputStyle",
                            m ? "contenteditable" : "textarea",
                            function () {
                                throw new Error("inputStyle can not (yet) be changed in a running editor");
                            },
                            !0
                        ),
                        r(
                            "spellcheck",
                            !1,
                            function (e, t) {
                                return (e.getInputField().spellcheck = t);
                            },
                            !0
                        ),
                        r(
                            "autocorrect",
                            !1,
                            function (e, t) {
                                return (e.getInputField().autocorrect = t);
                            },
                            !0
                        ),
                        r(
                            "autocapitalize",
                            !1,
                            function (e, t) {
                                return (e.getInputField().autocapitalize = t);
                            },
                            !0
                        ),
                        r("rtlMoveVisually", !w),
                        r("wholeLineUpdateBefore", !0),
                        r(
                            "theme",
                            "default",
                            function (e) {
                                Na(e), qi(e);
                            },
                            !0
                        ),
                        r("keyMap", "default", function (e, t, r) {
                            var n = _l(t),
                                i = r != Aa && _l(r);
                            i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null);
                        }),
                        r("extraKeys", null),
                        r("configureMouse", null),
                        r("lineWrapping", !1, Fa, !0),
                        r(
                            "gutters",
                            [],
                            function (e, t) {
                                (e.display.gutterSpecs = Xi(t, e.options.lineNumbers)), qi(e);
                            },
                            !0
                        ),
                        r(
                            "fixedGutter",
                            !0,
                            function (e, t) {
                                (e.display.gutters.style.left = t ? Dn(e.display) + "px" : "0"), e.refresh();
                            },
                            !0
                        ),
                        r(
                            "coverGutterNextToScrollbar",
                            !1,
                            function (e) {
                                return mi(e);
                            },
                            !0
                        ),
                        r(
                            "scrollbarStyle",
                            "native",
                            function (e) {
                                wi(e), mi(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                            },
                            !0
                        ),
                        r(
                            "lineNumbers",
                            !1,
                            function (e, t) {
                                (e.display.gutterSpecs = Xi(e.options.gutters, t)), qi(e);
                            },
                            !0
                        ),
                        r("firstLineNumber", 1, qi, !0),
                        r(
                            "lineNumberFormatter",
                            function (e) {
                                return e;
                            },
                            qi,
                            !0
                        ),
                        r("showCursorWhenSelecting", !1, Vn, !0),
                        r("resetSelectionOnContextMenu", !0),
                        r("lineWiseCopyCut", !0),
                        r("pasteLinesPerSelection", !0),
                        r("selectionsMayTouch", !1),
                        r("readOnly", !1, function (e, t) {
                            "nocursor" == t && (Zn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
                        }),
                        r("screenReaderLabel", null, function (e, t) {
                            (t = "" === t ? null : t), e.display.input.screenReaderLabelChanged(t);
                        }),
                        r(
                            "disableInput",
                            !1,
                            function (e, t) {
                                t || e.display.input.reset();
                            },
                            !0
                        ),
                        r("dragDrop", !0, Ha),
                        r("allowDropFileTypes", null),
                        r("cursorBlinkRate", 530),
                        r("cursorScrollMargin", 0),
                        r("cursorHeight", 1, Vn, !0),
                        r("singleCursorHeightPerLine", !0, Vn, !0),
                        r("workTime", 100),
                        r("workDelay", 100),
                        r("flattenSpans", !0, po, !0),
                        r("addModeClass", !1, po, !0),
                        r("pollInterval", 100),
                        r("undoDepth", 200, function (e, t) {
                            return (e.doc.history.undoDepth = t);
                        }),
                        r("historyEventDelay", 1250),
                        r(
                            "viewportMargin",
                            10,
                            function (e) {
                                return e.refresh();
                            },
                            !0
                        ),
                        r("maxHighlightLength", 1e4, po, !0),
                        r("moveInputWithCursor", !0, function (e, t) {
                            t || e.display.input.resetPosition();
                        }),
                        r("tabindex", null, function (e, t) {
                            return (e.display.input.getField().tabIndex = t || "");
                        }),
                        r("autofocus", null),
                        r(
                            "direction",
                            "ltr",
                            function (e, t) {
                                return e.doc.setDirection(t);
                            },
                            !0
                        ),
                        r("phrases", null);
                }
                function Ha(e, t, r) {
                    var n = r && r != Aa;
                    if (!t != !n) {
                        var i = e.display.dragFunctions,
                            o = t ? pe : ve;
                        o(e.display.scroller, "dragstart", i.start), o(e.display.scroller, "dragenter", i.enter), o(e.display.scroller, "dragover", i.over), o(e.display.scroller, "dragleave", i.leave), o(e.display.scroller, "drop", i.drop);
                    }
                }
                function Fa(e) {
                    e.options.lineWrapping ? (E(e.display.wrapper, "CodeMirror-wrap"), (e.display.sizer.style.minWidth = ""), (e.display.sizerWidth = null)) : (M(e.display.wrapper, "CodeMirror-wrap"), lr(e)),
                        En(e),
                        Pn(e),
                        fn(e),
                        setTimeout(function () {
                            return mi(e);
                        }, 100);
                }
                function Pa(e, t) {
                    var r = this;
                    if (!(this instanceof Pa)) return new Pa(e, t);
                    (this.options = t = t ? I(t) : {}), I(Da, t, !1);
                    var n = t.value;
                    "string" == typeof n ? (n = new Cl(n, t.mode, null, t.lineSeparator, t.direction)) : t.mode && (n.modeOption = t.mode), (this.doc = n);
                    var i = new Pa.inputStyles[t.inputStyle](this),
                        o = (this.display = new Zi(e, n, i, t));
                    for (var u in ((o.wrapper.CodeMirror = this),
                    Na(this),
                    t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
                    wi(this),
                    (this.state = {
                        keyMaps: [],
                        overlays: [],
                        modeGen: 0,
                        overwrite: !1,
                        delayingBlurEvent: !1,
                        focused: !1,
                        suppressEdits: !1,
                        pasteIncoming: -1,
                        cutIncoming: -1,
                        selectingText: !1,
                        draggingText: !1,
                        highlight: new R(),
                        keySeq: null,
                        specialChars: null,
                    }),
                    t.autofocus && !m && o.input.focus(),
                    l &&
                        a < 11 &&
                        setTimeout(function () {
                            return r.display.input.reset(!0);
                        }, 20),
                    Ia(this),
                    Al(),
                    Ci(this),
                    (this.curOp.forceUpdate = !0),
                    yo(this, n),
                    (t.autofocus && !m) || this.hasFocus() ? setTimeout(P(qn, this), 20) : Zn(this),
                    Wa))
                        Wa.hasOwnProperty(u) && Wa[u](this, t[u], Aa);
                    Ki(this), t.finishInit && t.finishInit(this);
                    for (var c = 0; c < za.length; ++c) za[c](this);
                    ki(this), s && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto");
                }
                function Ia(e) {
                    var t = e.display;
                    pe(t.scroller, "mousedown", Di(e, ma)),
                        pe(
                            t.scroller,
                            "dblclick",
                            l && a < 11
                                ? Di(e, function (t) {
                                      if (!ye(e, t)) {
                                          var r = Hn(e, t);
                                          if (r && !Ma(e, t) && !Vr(e.display, t)) {
                                              Ce(t);
                                              var n = e.findWordAt(r);
                                              Fo(e.doc, n.anchor, n.head);
                                          }
                                      }
                                  })
                                : function (t) {
                                      return ye(e, t) || Ce(t);
                                  }
                        ),
                        pe(t.scroller, "contextmenu", function (t) {
                            return Ta(e, t);
                        }),
                        pe(t.input.getField(), "contextmenu", function (r) {
                            t.scroller.contains(r.target) || Ta(e, r);
                        });
                    var r,
                        n = { end: 0 };
                    function i() {
                        t.activeTouch &&
                            ((r = setTimeout(function () {
                                return (t.activeTouch = null);
                            }, 1e3)),
                            (n = t.activeTouch),
                            (n.end = +new Date()));
                    }
                    function o(e) {
                        if (1 != e.touches.length) return !1;
                        var t = e.touches[0];
                        return t.radiusX <= 1 && t.radiusY <= 1;
                    }
                    function s(e, t) {
                        if (null == t.left) return !0;
                        var r = t.left - e.left,
                            n = t.top - e.top;
                        return r * r + n * n > 400;
                    }
                    pe(t.scroller, "touchstart", function (i) {
                        if (!ye(e, i) && !o(i) && !Ma(e, i)) {
                            t.input.ensurePolled(), clearTimeout(r);
                            var l = +new Date();
                            (t.activeTouch = { start: l, moved: !1, prev: l - n.end <= 300 ? n : null }), 1 == i.touches.length && ((t.activeTouch.left = i.touches[0].pageX), (t.activeTouch.top = i.touches[0].pageY));
                        }
                    }),
                        pe(t.scroller, "touchmove", function () {
                            t.activeTouch && (t.activeTouch.moved = !0);
                        }),
                        pe(t.scroller, "touchend", function (r) {
                            var n = t.activeTouch;
                            if (n && !Vr(t, r) && null != n.left && !n.moved && new Date() - n.start < 300) {
                                var o,
                                    l = e.coordsChar(t.activeTouch, "page");
                                (o = !n.prev || s(n, n.prev) ? new io(l, l) : !n.prev.prev || s(n, n.prev.prev) ? e.findWordAt(l) : new io(it(l.line, 0), ft(e.doc, it(l.line + 1, 0)))), e.setSelection(o.anchor, o.head), e.focus(), Ce(r);
                            }
                            i();
                        }),
                        pe(t.scroller, "touchcancel", i),
                        pe(t.scroller, "scroll", function () {
                            t.scroller.clientHeight && (fi(e, t.scroller.scrollTop), di(e, t.scroller.scrollLeft, !0), me(e, "scroll", e));
                        }),
                        pe(t.scroller, "mousewheel", function (t) {
                            return ro(e, t);
                        }),
                        pe(t.scroller, "DOMMouseScroll", function (t) {
                            return ro(e, t);
                        }),
                        pe(t.wrapper, "scroll", function () {
                            return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
                        }),
                        (t.dragFunctions = {
                            enter: function (t) {
                                ye(e, t) || Le(t);
                            },
                            over: function (t) {
                                ye(e, t) || (Ml(e, t), Le(t));
                            },
                            start: function (t) {
                                return Ll(e, t);
                            },
                            drop: Di(e, Sl),
                            leave: function (t) {
                                ye(e, t) || Tl(e);
                            },
                        });
                    var u = t.input.getField();
                    pe(u, "keyup", function (t) {
                        return ca.call(e, t);
                    }),
                        pe(u, "keydown", Di(e, sa)),
                        pe(u, "keypress", Di(e, fa)),
                        pe(u, "focus", function (t) {
                            return qn(e, t);
                        }),
                        pe(u, "blur", function (t) {
                            return Zn(e, t);
                        });
                }
                (Pa.defaults = Da), (Pa.optionHandlers = Wa);
                var za = [];
                function Ra(e, t, r, n) {
                    var i,
                        o = e.doc;
                    null == r && (r = "add"), "smart" == r && (o.mode.indent ? (i = yt(e, t).state) : (r = "prev"));
                    var l = e.options.tabSize,
                        a = qe(o, t),
                        s = z(a.text, null, l);
                    a.stateAfter && (a.stateAfter = null);
                    var u,
                        c = a.text.match(/^\s*/)[0];
                    if (n || /\S/.test(a.text)) {
                        if ("smart" == r && ((u = o.mode.indent(i, a.text.slice(c.length), a.text)), u == V || u > 150)) {
                            if (!n) return;
                            r = "prev";
                        }
                    } else (u = 0), (r = "not");
                    "prev" == r ? (u = t > o.first ? z(qe(o, t - 1).text, null, l) : 0) : "add" == r ? (u = s + e.options.indentUnit) : "subtract" == r ? (u = s - e.options.indentUnit) : "number" == typeof r && (u = s + r),
                        (u = Math.max(0, u));
                    var f = "",
                        h = 0;
                    if (e.options.indentWithTabs) for (var d = Math.floor(u / l); d; --d) (h += l), (f += "\t");
                    if ((h < u && (f += X(u - h)), f != c)) return nl(o, f, it(t, 0), it(t, c.length), "+input"), (a.stateAfter = null), !0;
                    for (var p = 0; p < o.sel.ranges.length; p++) {
                        var g = o.sel.ranges[p];
                        if (g.head.line == t && g.head.ch < c.length) {
                            var v = it(t, c.length);
                            Io(o, p, new io(v, v));
                            break;
                        }
                    }
                }
                Pa.defineInitHook = function (e) {
                    return za.push(e);
                };
                var Ba = null;
                function ja(e) {
                    Ba = e;
                }
                function Va(e, t, r, n, i) {
                    var o = e.doc;
                    (e.display.shift = !1), n || (n = o.sel);
                    var l = +new Date() - 200,
                        a = "paste" == i || e.state.pasteIncoming > l,
                        s = Ee(t),
                        u = null;
                    if (a && n.ranges.length > 1)
                        if (Ba && Ba.text.join("\n") == t) {
                            if (n.ranges.length % Ba.text.length == 0) {
                                u = [];
                                for (var c = 0; c < Ba.text.length; c++) u.push(o.splitLines(Ba.text[c]));
                            }
                        } else
                            s.length == n.ranges.length &&
                                e.options.pasteLinesPerSelection &&
                                (u = q(s, function (e) {
                                    return [e];
                                }));
                    for (var f = e.curOp.updateInput, h = n.ranges.length - 1; h >= 0; h--) {
                        var d = n.ranges[h],
                            p = d.from(),
                            g = d.to();
                        d.empty() &&
                            (r && r > 0
                                ? (p = it(p.line, p.ch - r))
                                : e.state.overwrite && !a
                                ? (g = it(g.line, Math.min(qe(o, g.line).text.length, g.ch + Y(s).length)))
                                : a && Ba && Ba.lineWise && Ba.text.join("\n") == t && (p = g = it(p.line, 0)));
                        var v = { from: p, to: g, text: u ? u[h % u.length] : s, origin: i || (a ? "paste" : e.state.cutIncoming > l ? "cut" : "+input") };
                        Zo(e.doc, v), Tr(e, "inputRead", e, v);
                    }
                    t && !a && _a(e, t), li(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = f), (e.curOp.typing = !0), (e.state.pasteIncoming = e.state.cutIncoming = -1);
                }
                function Ga(e, t) {
                    var r = e.clipboardData && e.clipboardData.getData("Text");
                    if (r)
                        return (
                            e.preventDefault(),
                            t.isReadOnly() ||
                                t.options.disableInput ||
                                Ai(t, function () {
                                    return Va(t, r, 0, null, "paste");
                                }),
                            !0
                        );
                }
                function _a(e, t) {
                    if (e.options.electricChars && e.options.smartIndent)
                        for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
                            var i = r.ranges[n];
                            if (!(i.head.ch > 100 || (n && r.ranges[n - 1].head.line == i.head.line))) {
                                var o = e.getModeAt(i.head),
                                    l = !1;
                                if (o.electricChars) {
                                    for (var a = 0; a < o.electricChars.length; a++)
                                        if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                                            l = Ra(e, i.head.line, "smart");
                                            break;
                                        }
                                } else o.electricInput && o.electricInput.test(qe(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Ra(e, i.head.line, "smart"));
                                l && Tr(e, "electricInput", e, i.head.line);
                            }
                        }
                }
                function Ua(e) {
                    for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
                        var i = e.doc.sel.ranges[n].head.line,
                            o = { anchor: it(i, 0), head: it(i + 1, 0) };
                        r.push(o), t.push(e.getRange(o.anchor, o.head));
                    }
                    return { text: t, ranges: r };
                }
                function $a(e, t, r, n) {
                    e.setAttribute("autocorrect", r ? "" : "off"), e.setAttribute("autocapitalize", n ? "" : "off"), e.setAttribute("spellcheck", !!t);
                }
                function Ka() {
                    var e = N("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                        t = N("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                    return s ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"), g && (e.style.border = "1px solid black"), $a(e), t;
                }
                function Xa(e) {
                    var t = e.optionHandlers,
                        r = (e.helpers = {});
                    (e.prototype = {
                        constructor: e,
                        focus: function () {
                            window.focus(), this.display.input.focus();
                        },
                        setOption: function (e, r) {
                            var n = this.options,
                                i = n[e];
                            (n[e] == r && "mode" != e) || ((n[e] = r), t.hasOwnProperty(e) && Di(this, t[e])(this, r, i), me(this, "optionChange", this, e));
                        },
                        getOption: function (e) {
                            return this.options[e];
                        },
                        getDoc: function () {
                            return this.doc;
                        },
                        addKeyMap: function (e, t) {
                            this.state.keyMaps[t ? "push" : "unshift"](_l(e));
                        },
                        removeKeyMap: function (e) {
                            for (var t = this.state.keyMaps, r = 0; r < t.length; ++r) if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0;
                        },
                        addOverlay: Wi(function (t, r) {
                            var n = t.token ? t : e.getMode(this.options, t);
                            if (n.startState) throw new Error("Overlays may not be stateful.");
                            Z(this.state.overlays, { mode: n, modeSpec: t, opaque: r && r.opaque, priority: (r && r.priority) || 0 }, function (e) {
                                return e.priority;
                            }),
                                this.state.modeGen++,
                                Pn(this);
                        }),
                        removeOverlay: Wi(function (e) {
                            for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
                                var n = t[r].modeSpec;
                                if (n == e || ("string" == typeof e && n.name == e)) return t.splice(r, 1), this.state.modeGen++, void Pn(this);
                            }
                        }),
                        indentLine: Wi(function (e, t, r) {
                            "string" != typeof t && "number" != typeof t && (t = null == t ? (this.options.smartIndent ? "smart" : "prev") : t ? "add" : "subtract"), rt(this.doc, e) && Ra(this, e, t, r);
                        }),
                        indentSelection: Wi(function (e) {
                            for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
                                var i = t[n];
                                if (i.empty()) i.head.line > r && (Ra(this, i.head.line, e, !0), (r = i.head.line), n == this.doc.sel.primIndex && li(this));
                                else {
                                    var o = i.from(),
                                        l = i.to(),
                                        a = Math.max(r, o.line);
                                    r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                                    for (var s = a; s < r; ++s) Ra(this, s, e);
                                    var u = this.doc.sel.ranges;
                                    0 == o.ch && t.length == u.length && u[n].from().ch > 0 && Io(this.doc, n, new io(o, u[n].to()), G);
                                }
                            }
                        }),
                        getTokenAt: function (e, t) {
                            return kt(this, e, t);
                        },
                        getLineTokens: function (e, t) {
                            return kt(this, it(e), t, !0);
                        },
                        getTokenTypeAt: function (e) {
                            e = ft(this.doc, e);
                            var t,
                                r = mt(this, qe(this.doc, e.line)),
                                n = 0,
                                i = (r.length - 1) / 2,
                                o = e.ch;
                            if (0 == o) t = r[2];
                            else
                                for (;;) {
                                    var l = (n + i) >> 1;
                                    if ((l ? r[2 * l - 1] : 0) >= o) i = l;
                                    else {
                                        if (!(r[2 * l + 1] < o)) {
                                            t = r[2 * l + 2];
                                            break;
                                        }
                                        n = l + 1;
                                    }
                                }
                            var a = t ? t.indexOf("overlay ") : -1;
                            return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1);
                        },
                        getModeAt: function (t) {
                            var r = this.doc.mode;
                            return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r;
                        },
                        getHelper: function (e, t) {
                            return this.getHelpers(e, t)[0];
                        },
                        getHelpers: function (e, t) {
                            var n = [];
                            if (!r.hasOwnProperty(t)) return n;
                            var i = r[t],
                                o = this.getModeAt(e);
                            if ("string" == typeof o[t]) i[o[t]] && n.push(i[o[t]]);
                            else if (o[t])
                                for (var l = 0; l < o[t].length; l++) {
                                    var a = i[o[t][l]];
                                    a && n.push(a);
                                }
                            else o.helperType && i[o.helperType] ? n.push(i[o.helperType]) : i[o.name] && n.push(i[o.name]);
                            for (var s = 0; s < i._global.length; s++) {
                                var u = i._global[s];
                                u.pred(o, this) && -1 == B(n, u.val) && n.push(u.val);
                            }
                            return n;
                        },
                        getStateAfter: function (e, t) {
                            var r = this.doc;
                            return (e = ct(r, null == e ? r.first + r.size - 1 : e)), yt(this, e + 1, t).state;
                        },
                        cursorCoords: function (e, t) {
                            var r,
                                n = this.doc.sel.primary();
                            return (r = null == e ? n.head : "object" == typeof e ? ft(this.doc, e) : e ? n.from() : n.to()), yn(this, r, t || "page");
                        },
                        charCoords: function (e, t) {
                            return mn(this, ft(this.doc, e), t || "page");
                        },
                        coordsChar: function (e, t) {
                            return (e = vn(this, e, t || "page")), xn(this, e.left, e.top);
                        },
                        lineAtHeight: function (e, t) {
                            return (e = vn(this, { top: e, left: 0 }, t || "page").top), tt(this.doc, e + this.display.viewOffset);
                        },
                        heightAtLine: function (e, t, r) {
                            var n,
                                i = !1;
                            if ("number" == typeof e) {
                                var o = this.doc.first + this.doc.size - 1;
                                e < this.doc.first ? (e = this.doc.first) : e > o && ((e = o), (i = !0)), (n = qe(this.doc, e));
                            } else n = e;
                            return gn(this, n, { top: 0, left: 0 }, t || "page", r || i).top + (i ? this.doc.height - ir(n) : 0);
                        },
                        defaultTextHeight: function () {
                            return On(this.display);
                        },
                        defaultCharWidth: function () {
                            return Nn(this.display);
                        },
                        getViewport: function () {
                            return { from: this.display.viewFrom, to: this.display.viewTo };
                        },
                        addWidget: function (e, t, r, n, i) {
                            var o = this.display;
                            e = yn(this, ft(this.doc, e));
                            var l = e.bottom,
                                a = e.left;
                            if (((t.style.position = "absolute"), t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == n)) l = e.top;
                            else if ("above" == n || "near" == n) {
                                var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                                    u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                                ("above" == n || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? (l = e.top - t.offsetHeight) : e.bottom + t.offsetHeight <= s && (l = e.bottom), a + t.offsetWidth > u && (a = u - t.offsetWidth);
                            }
                            (t.style.top = l + "px"),
                                (t.style.left = t.style.right = ""),
                                "right" == i ? ((a = o.sizer.clientWidth - t.offsetWidth), (t.style.right = "0px")) : ("left" == i ? (a = 0) : "middle" == i && (a = (o.sizer.clientWidth - t.offsetWidth) / 2), (t.style.left = a + "px")),
                                r && ni(this, { left: a, top: l, right: a + t.offsetWidth, bottom: l + t.offsetHeight });
                        },
                        triggerOnKeyDown: Wi(sa),
                        triggerOnKeyPress: Wi(fa),
                        triggerOnKeyUp: ca,
                        triggerOnMouseDown: Wi(ma),
                        execCommand: function (e) {
                            if (ql.hasOwnProperty(e)) return ql[e].call(null, this);
                        },
                        triggerElectric: Wi(function (e) {
                            _a(this, e);
                        }),
                        findPosH: function (e, t, r, n) {
                            var i = 1;
                            t < 0 && ((i = -1), (t = -t));
                            for (var o = ft(this.doc, e), l = 0; l < t; ++l) if (((o = Ya(this.doc, o, i, r, n)), o.hitSide)) break;
                            return o;
                        },
                        moveH: Wi(function (e, t) {
                            var r = this;
                            this.extendSelectionsBy(function (n) {
                                return r.display.shift || r.doc.extend || n.empty() ? Ya(r.doc, n.head, e, t, r.options.rtlMoveVisually) : e < 0 ? n.from() : n.to();
                            }, U);
                        }),
                        deleteH: Wi(function (e, t) {
                            var r = this.doc.sel,
                                n = this.doc;
                            r.somethingSelected()
                                ? n.replaceSelection("", null, "+delete")
                                : Ul(this, function (r) {
                                      var i = Ya(n, r.head, e, t, !1);
                                      return e < 0 ? { from: i, to: r.head } : { from: r.head, to: i };
                                  });
                        }),
                        findPosV: function (e, t, r, n) {
                            var i = 1,
                                o = n;
                            t < 0 && ((i = -1), (t = -t));
                            for (var l = ft(this.doc, e), a = 0; a < t; ++a) {
                                var s = yn(this, l, "div");
                                if ((null == o ? (o = s.left) : (s.left = o), (l = qa(this, s, i, r)), l.hitSide)) break;
                            }
                            return l;
                        },
                        moveV: Wi(function (e, t) {
                            var r = this,
                                n = this.doc,
                                i = [],
                                o = !this.display.shift && !n.extend && n.sel.somethingSelected();
                            if (
                                (n.extendSelectionsBy(function (l) {
                                    if (o) return e < 0 ? l.from() : l.to();
                                    var a = yn(r, l.head, "div");
                                    null != l.goalColumn && (a.left = l.goalColumn), i.push(a.left);
                                    var s = qa(r, a, e, t);
                                    return "page" == t && l == n.sel.primary() && oi(r, mn(r, s, "div").top - a.top), s;
                                }, U),
                                i.length)
                            )
                                for (var l = 0; l < n.sel.ranges.length; l++) n.sel.ranges[l].goalColumn = i[l];
                        }),
                        findWordAt: function (e) {
                            var t = this.doc,
                                r = qe(t, e.line).text,
                                n = e.ch,
                                i = e.ch;
                            if (r) {
                                var o = this.getHelper(e, "wordChars");
                                ("before" != e.sticky && i != r.length) || !n ? ++i : --n;
                                var l = r.charAt(n),
                                    a = re(l, o)
                                        ? function (e) {
                                              return re(e, o);
                                          }
                                        : /\s/.test(l)
                                        ? function (e) {
                                              return /\s/.test(e);
                                          }
                                        : function (e) {
                                              return !/\s/.test(e) && !re(e);
                                          };
                                while (n > 0 && a(r.charAt(n - 1))) --n;
                                while (i < r.length && a(r.charAt(i))) ++i;
                            }
                            return new io(it(e.line, n), it(e.line, i));
                        },
                        toggleOverwrite: function (e) {
                            (null != e && e == this.state.overwrite) ||
                                ((this.state.overwrite = !this.state.overwrite) ? E(this.display.cursorDiv, "CodeMirror-overwrite") : M(this.display.cursorDiv, "CodeMirror-overwrite"),
                                me(this, "overwriteToggle", this, this.state.overwrite));
                        },
                        hasFocus: function () {
                            return this.display.input.getField() == W();
                        },
                        isReadOnly: function () {
                            return !(!this.options.readOnly && !this.doc.cantEdit);
                        },
                        scrollTo: Wi(function (e, t) {
                            ai(this, e, t);
                        }),
                        getScrollInfo: function () {
                            var e = this.display.scroller;
                            return { left: e.scrollLeft, top: e.scrollTop, height: e.scrollHeight - $r(this) - this.display.barHeight, width: e.scrollWidth - $r(this) - this.display.barWidth, clientHeight: Xr(this), clientWidth: Kr(this) };
                        },
                        scrollIntoView: Wi(function (e, t) {
                            null == e
                                ? ((e = { from: this.doc.sel.primary().head, to: null }), null == t && (t = this.options.cursorScrollMargin))
                                : "number" == typeof e
                                ? (e = { from: it(e, 0), to: null })
                                : null == e.from && (e = { from: e, to: null }),
                                e.to || (e.to = e.from),
                                (e.margin = t || 0),
                                null != e.from.line ? si(this, e) : ci(this, e.from, e.to, e.margin);
                        }),
                        setSize: Wi(function (e, t) {
                            var r = this,
                                n = function (e) {
                                    return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
                                };
                            null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && cn(this);
                            var i = this.display.viewFrom;
                            this.doc.iter(i, this.display.viewTo, function (e) {
                                if (e.widgets)
                                    for (var t = 0; t < e.widgets.length; t++)
                                        if (e.widgets[t].noHScroll) {
                                            In(r, i, "widget");
                                            break;
                                        }
                                ++i;
                            }),
                                (this.curOp.forceUpdate = !0),
                                me(this, "refresh", this);
                        }),
                        operation: function (e) {
                            return Ai(this, e);
                        },
                        startOperation: function () {
                            return Ci(this);
                        },
                        endOperation: function () {
                            return ki(this);
                        },
                        refresh: Wi(function () {
                            var e = this.display.cachedTextHeight;
                            Pn(this),
                                (this.curOp.forceUpdate = !0),
                                fn(this),
                                ai(this, this.doc.scrollLeft, this.doc.scrollTop),
                                _i(this.display),
                                (null == e || Math.abs(e - On(this.display)) > 0.5 || this.options.lineWrapping) && En(this),
                                me(this, "refresh", this);
                        }),
                        swapDoc: Wi(function (e) {
                            var t = this.doc;
                            return (
                                (t.cm = null),
                                this.state.selectingText && this.state.selectingText(),
                                yo(this, e),
                                fn(this),
                                this.display.input.reset(),
                                ai(this, e.scrollLeft, e.scrollTop),
                                (this.curOp.forceScroll = !0),
                                Tr(this, "swapDoc", this, t),
                                t
                            );
                        }),
                        phrase: function (e) {
                            var t = this.options.phrases;
                            return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
                        },
                        getInputField: function () {
                            return this.display.input.getField();
                        },
                        getWrapperElement: function () {
                            return this.display.wrapper;
                        },
                        getScrollerElement: function () {
                            return this.display.scroller;
                        },
                        getGutterElement: function () {
                            return this.display.gutters;
                        },
                    }),
                        xe(e),
                        (e.registerHelper = function (t, n, i) {
                            r.hasOwnProperty(t) || (r[t] = e[t] = { _global: [] }), (r[t][n] = i);
                        }),
                        (e.registerGlobalHelper = function (t, n, i, o) {
                            e.registerHelper(t, n, o), r[t]._global.push({ pred: i, val: o });
                        });
                }
                function Ya(e, t, r, n, i) {
                    var o = t,
                        l = r,
                        a = qe(e, t.line),
                        s = i && "rtl" == e.direction ? -r : r;
                    function u() {
                        var r = t.line + s;
                        return !(r < e.first || r >= e.first + e.size) && ((t = new it(r, t.ch, t.sticky)), (a = qe(e, r)));
                    }
                    function c(n) {
                        var o;
                        if (((o = i ? Yl(e.cm, a, t, r) : Kl(a, t, r)), null == o)) {
                            if (n || !u()) return !1;
                            t = Xl(i, e.cm, a, t.line, s);
                        } else t = o;
                        return !0;
                    }
                    if ("char" == n) c();
                    else if ("column" == n) c(!0);
                    else if ("word" == n || "group" == n)
                        for (var f = null, h = "group" == n, d = e.cm && e.cm.getHelper(t, "wordChars"), p = !0; ; p = !1) {
                            if (r < 0 && !c(!p)) break;
                            var g = a.text.charAt(t.ch) || "\n",
                                v = re(g, d) ? "w" : h && "\n" == g ? "n" : !h || /\s/.test(g) ? null : "p";
                            if ((!h || p || v || (v = "s"), f && f != v)) {
                                r < 0 && ((r = 1), c(), (t.sticky = "after"));
                                break;
                            }
                            if ((v && (f = v), r > 0 && !c(!p))) break;
                        }
                    var m = Ko(e, t, o, l, !0);
                    return lt(o, m) && (m.hitSide = !0), m;
                }
                function qa(e, t, r, n) {
                    var i,
                        o,
                        l = e.doc,
                        a = t.left;
                    if ("page" == n) {
                        var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                            u = Math.max(s - 0.5 * On(e.display), 3);
                        i = (r > 0 ? t.bottom : t.top) + r * u;
                    } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
                    for (;;) {
                        if (((o = xn(e, a, i)), !o.outside)) break;
                        if (r < 0 ? i <= 0 : i >= l.height) {
                            o.hitSide = !0;
                            break;
                        }
                        i += 5 * r;
                    }
                    return o;
                }
                var Za = function (e) {
                    (this.cm = e), (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null), (this.polling = new R()), (this.composing = null), (this.gracePeriod = !1), (this.readDOMTimeout = null);
                };
                function Ja(e, t) {
                    var r = Qr(e, t.line);
                    if (!r || r.hidden) return null;
                    var n = qe(e.doc, t.line),
                        i = qr(r, n, t.line),
                        o = he(n, e.doc.direction),
                        l = "left";
                    if (o) {
                        var a = ce(o, t.ch);
                        l = a % 2 ? "right" : "left";
                    }
                    var s = on(i.map, t.ch, l);
                    return (s.offset = "right" == s.collapse ? s.end : s.start), s;
                }
                function Qa(e) {
                    for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                    return !1;
                }
                function es(e, t) {
                    return t && (e.bad = !0), e;
                }
                function ts(e, t, r, n, i) {
                    var o = "",
                        l = !1,
                        a = e.doc.lineSeparator(),
                        s = !1;
                    function u(e) {
                        return function (t) {
                            return t.id == e;
                        };
                    }
                    function c() {
                        l && ((o += a), s && (o += a), (l = s = !1));
                    }
                    function f(e) {
                        e && (c(), (o += e));
                    }
                    function h(t) {
                        if (1 == t.nodeType) {
                            var r = t.getAttribute("cm-text");
                            if (r) return void f(r);
                            var o,
                                d = t.getAttribute("cm-marker");
                            if (d) {
                                var p = e.findMarks(it(n, 0), it(i + 1, 0), u(+d));
                                return void (p.length && (o = p[0].find(0)) && f(Ze(e.doc, o.from, o.to).join(a)));
                            }
                            if ("false" == t.getAttribute("contenteditable")) return;
                            var g = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                            if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                            g && c();
                            for (var v = 0; v < t.childNodes.length; v++) h(t.childNodes[v]);
                            /^(pre|p)$/i.test(t.nodeName) && (s = !0), g && (l = !0);
                        } else 3 == t.nodeType && f(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                    }
                    for (;;) {
                        if ((h(t), t == r)) break;
                        (t = t.nextSibling), (s = !1);
                    }
                    return o;
                }
                function rs(e, t, r) {
                    var n;
                    if (t == e.display.lineDiv) {
                        if (((n = e.display.lineDiv.childNodes[r]), !n)) return es(e.clipPos(it(e.display.viewTo - 1)), !0);
                        (t = null), (r = 0);
                    } else
                        for (n = t; ; n = n.parentNode) {
                            if (!n || n == e.display.lineDiv) return null;
                            if (n.parentNode && n.parentNode == e.display.lineDiv) break;
                        }
                    for (var i = 0; i < e.display.view.length; i++) {
                        var o = e.display.view[i];
                        if (o.node == n) return ns(o, t, r);
                    }
                }
                function ns(e, t, r) {
                    var n = e.text.firstChild,
                        i = !1;
                    if (!t || !D(n, t)) return es(it(et(e.line), 0), !0);
                    if (t == n && ((i = !0), (t = n.childNodes[r]), (r = 0), !t)) {
                        var o = e.rest ? Y(e.rest) : e.line;
                        return es(it(et(o), o.text.length), i);
                    }
                    var l = 3 == t.nodeType ? t : null,
                        a = t;
                    l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || ((l = t.firstChild), r && (r = l.nodeValue.length));
                    while (a.parentNode != n) a = a.parentNode;
                    var s = e.measure,
                        u = s.maps;
                    function c(t, r, n) {
                        for (var i = -1; i < (u ? u.length : 0); i++)
                            for (var o = i < 0 ? s.map : u[i], l = 0; l < o.length; l += 3) {
                                var a = o[l + 2];
                                if (a == t || a == r) {
                                    var c = et(i < 0 ? e.line : e.rest[i]),
                                        f = o[l] + n;
                                    return (n < 0 || a != t) && (f = o[l + (n ? 1 : 0)]), it(c, f);
                                }
                            }
                    }
                    var f = c(l, a, r);
                    if (f) return es(f, i);
                    for (var h = a.nextSibling, d = l ? l.nodeValue.length - r : 0; h; h = h.nextSibling) {
                        if (((f = c(h, h.firstChild, 0)), f)) return es(it(f.line, f.ch - d), i);
                        d += h.textContent.length;
                    }
                    for (var p = a.previousSibling, g = r; p; p = p.previousSibling) {
                        if (((f = c(p, p.firstChild, -1)), f)) return es(it(f.line, f.ch + g), i);
                        g += p.textContent.length;
                    }
                }
                (Za.prototype.init = function (e) {
                    var t = this,
                        r = this,
                        n = r.cm,
                        i = (r.div = e.lineDiv);
                    function o(e) {
                        if (!ye(n, e)) {
                            if (n.somethingSelected()) ja({ lineWise: !1, text: n.getSelections() }), "cut" == e.type && n.replaceSelection("", null, "cut");
                            else {
                                if (!n.options.lineWiseCopyCut) return;
                                var t = Ua(n);
                                ja({ lineWise: !0, text: t.text }),
                                    "cut" == e.type &&
                                        n.operation(function () {
                                            n.setSelections(t.ranges, 0, G), n.replaceSelection("", null, "cut");
                                        });
                            }
                            if (e.clipboardData) {
                                e.clipboardData.clearData();
                                var o = Ba.text.join("\n");
                                if ((e.clipboardData.setData("Text", o), e.clipboardData.getData("Text") == o)) return void e.preventDefault();
                            }
                            var l = Ka(),
                                a = l.firstChild;
                            n.display.lineSpace.insertBefore(l, n.display.lineSpace.firstChild), (a.value = Ba.text.join("\n"));
                            var s = document.activeElement;
                            F(a),
                                setTimeout(function () {
                                    n.display.lineSpace.removeChild(l), s.focus(), s == i && r.showPrimarySelection();
                                }, 50);
                        }
                    }
                    $a(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize),
                        pe(i, "paste", function (e) {
                            ye(n, e) ||
                                Ga(e, n) ||
                                (a <= 11 &&
                                    setTimeout(
                                        Di(n, function () {
                                            return t.updateFromDOM();
                                        }),
                                        20
                                    ));
                        }),
                        pe(i, "compositionstart", function (e) {
                            t.composing = { data: e.data, done: !1 };
                        }),
                        pe(i, "compositionupdate", function (e) {
                            t.composing || (t.composing = { data: e.data, done: !1 });
                        }),
                        pe(i, "compositionend", function (e) {
                            t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0));
                        }),
                        pe(i, "touchstart", function () {
                            return r.forceCompositionEnd();
                        }),
                        pe(i, "input", function () {
                            t.composing || t.readFromDOMSoon();
                        }),
                        pe(i, "copy", o),
                        pe(i, "cut", o);
                }),
                    (Za.prototype.screenReaderLabelChanged = function (e) {
                        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
                    }),
                    (Za.prototype.prepareSelection = function () {
                        var e = Gn(this.cm, !1);
                        return (e.focus = document.activeElement == this.div), e;
                    }),
                    (Za.prototype.showSelection = function (e, t) {
                        e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
                    }),
                    (Za.prototype.getSelection = function () {
                        return this.cm.display.wrapper.ownerDocument.getSelection();
                    }),
                    (Za.prototype.showPrimarySelection = function () {
                        var e = this.getSelection(),
                            t = this.cm,
                            n = t.doc.sel.primary(),
                            i = n.from(),
                            o = n.to();
                        if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();
                        else {
                            var l = rs(t, e.anchorNode, e.anchorOffset),
                                a = rs(t, e.focusNode, e.focusOffset);
                            if (!l || l.bad || !a || a.bad || 0 != ot(ut(l, a), i) || 0 != ot(st(l, a), o)) {
                                var s = t.display.view,
                                    u = (i.line >= t.display.viewFrom && Ja(t, i)) || { node: s[0].measure.map[2], offset: 0 },
                                    c = o.line < t.display.viewTo && Ja(t, o);
                                if (!c) {
                                    var f = s[s.length - 1].measure,
                                        h = f.maps ? f.maps[f.maps.length - 1] : f.map;
                                    c = { node: h[h.length - 1], offset: h[h.length - 2] - h[h.length - 3] };
                                }
                                if (u && c) {
                                    var d,
                                        p = e.rangeCount && e.getRangeAt(0);
                                    try {
                                        d = L(u.node, u.offset, c.offset, c.node);
                                    } catch (g) {}
                                    d &&
                                        (!r && t.state.focused ? (e.collapse(u.node, u.offset), d.collapsed || (e.removeAllRanges(), e.addRange(d))) : (e.removeAllRanges(), e.addRange(d)),
                                        p && null == e.anchorNode ? e.addRange(p) : r && this.startGracePeriod()),
                                        this.rememberSelection();
                                } else e.removeAllRanges();
                            }
                        }
                    }),
                    (Za.prototype.startGracePeriod = function () {
                        var e = this;
                        clearTimeout(this.gracePeriod),
                            (this.gracePeriod = setTimeout(function () {
                                (e.gracePeriod = !1),
                                    e.selectionChanged() &&
                                        e.cm.operation(function () {
                                            return (e.cm.curOp.selectionChanged = !0);
                                        });
                            }, 20));
                    }),
                    (Za.prototype.showMultipleSelections = function (e) {
                        O(this.cm.display.cursorDiv, e.cursors), O(this.cm.display.selectionDiv, e.selection);
                    }),
                    (Za.prototype.rememberSelection = function () {
                        var e = this.getSelection();
                        (this.lastAnchorNode = e.anchorNode), (this.lastAnchorOffset = e.anchorOffset), (this.lastFocusNode = e.focusNode), (this.lastFocusOffset = e.focusOffset);
                    }),
                    (Za.prototype.selectionInEditor = function () {
                        var e = this.getSelection();
                        if (!e.rangeCount) return !1;
                        var t = e.getRangeAt(0).commonAncestorContainer;
                        return D(this.div, t);
                    }),
                    (Za.prototype.focus = function () {
                        "nocursor" != this.cm.options.readOnly && ((this.selectionInEditor() && document.activeElement == this.div) || this.showSelection(this.prepareSelection(), !0), this.div.focus());
                    }),
                    (Za.prototype.blur = function () {
                        this.div.blur();
                    }),
                    (Za.prototype.getField = function () {
                        return this.div;
                    }),
                    (Za.prototype.supportsTouch = function () {
                        return !0;
                    }),
                    (Za.prototype.receivedFocus = function () {
                        var e = this;
                        function t() {
                            e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
                        }
                        this.selectionInEditor()
                            ? this.pollSelection()
                            : Ai(this.cm, function () {
                                  return (e.cm.curOp.selectionChanged = !0);
                              }),
                            this.polling.set(this.cm.options.pollInterval, t);
                    }),
                    (Za.prototype.selectionChanged = function () {
                        var e = this.getSelection();
                        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
                    }),
                    (Za.prototype.pollSelection = function () {
                        if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                            var e = this.getSelection(),
                                t = this.cm;
                            if (v && c && this.cm.display.gutterSpecs.length && Qa(e.anchorNode)) return this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus();
                            if (!this.composing) {
                                this.rememberSelection();
                                var r = rs(t, e.anchorNode, e.anchorOffset),
                                    n = rs(t, e.focusNode, e.focusOffset);
                                r &&
                                    n &&
                                    Ai(t, function () {
                                        jo(t.doc, lo(r, n), G), (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
                                    });
                            }
                        }
                    }),
                    (Za.prototype.pollContent = function () {
                        null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
                        var e,
                            t,
                            r,
                            n = this.cm,
                            i = n.display,
                            o = n.doc.sel.primary(),
                            l = o.from(),
                            a = o.to();
                        if (
                            (0 == l.ch && l.line > n.firstLine() && (l = it(l.line - 1, qe(n.doc, l.line - 1).length)),
                            a.ch == qe(n.doc, a.line).text.length && a.line < n.lastLine() && (a = it(a.line + 1, 0)),
                            l.line < i.viewFrom || a.line > i.viewTo - 1)
                        )
                            return !1;
                        l.line == i.viewFrom || 0 == (e = Fn(n, l.line)) ? ((t = et(i.view[0].line)), (r = i.view[0].node)) : ((t = et(i.view[e].line)), (r = i.view[e - 1].node.nextSibling));
                        var s,
                            u,
                            c = Fn(n, a.line);
                        if ((c == i.view.length - 1 ? ((s = i.viewTo - 1), (u = i.lineDiv.lastChild)) : ((s = et(i.view[c + 1].line) - 1), (u = i.view[c + 1].node.previousSibling)), !r)) return !1;
                        var f = n.doc.splitLines(ts(n, r, u, t, s)),
                            h = Ze(n.doc, it(t, 0), it(s, qe(n.doc, s).text.length));
                        while (f.length > 1 && h.length > 1)
                            if (Y(f) == Y(h)) f.pop(), h.pop(), s--;
                            else {
                                if (f[0] != h[0]) break;
                                f.shift(), h.shift(), t++;
                            }
                        var d = 0,
                            p = 0,
                            g = f[0],
                            v = h[0],
                            m = Math.min(g.length, v.length);
                        while (d < m && g.charCodeAt(d) == v.charCodeAt(d)) ++d;
                        var y = Y(f),
                            b = Y(h),
                            w = Math.min(y.length - (1 == f.length ? d : 0), b.length - (1 == h.length ? d : 0));
                        while (p < w && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)) ++p;
                        if (1 == f.length && 1 == h.length && t == l.line) while (d && d > l.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)) d--, p++;
                        (f[f.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, "")), (f[0] = f[0].slice(d).replace(/\u200b+$/, ""));
                        var x = it(t, d),
                            C = it(s, h.length ? Y(h).length - p : 0);
                        return f.length > 1 || f[0] || ot(x, C) ? (nl(n.doc, f, x, C, "+input"), !0) : void 0;
                    }),
                    (Za.prototype.ensurePolled = function () {
                        this.forceCompositionEnd();
                    }),
                    (Za.prototype.reset = function () {
                        this.forceCompositionEnd();
                    }),
                    (Za.prototype.forceCompositionEnd = function () {
                        this.composing && (clearTimeout(this.readDOMTimeout), (this.composing = null), this.updateFromDOM(), this.div.blur(), this.div.focus());
                    }),
                    (Za.prototype.readFromDOMSoon = function () {
                        var e = this;
                        null == this.readDOMTimeout &&
                            (this.readDOMTimeout = setTimeout(function () {
                                if (((e.readDOMTimeout = null), e.composing)) {
                                    if (!e.composing.done) return;
                                    e.composing = null;
                                }
                                e.updateFromDOM();
                            }, 80));
                    }),
                    (Za.prototype.updateFromDOM = function () {
                        var e = this;
                        (!this.cm.isReadOnly() && this.pollContent()) ||
                            Ai(this.cm, function () {
                                return Pn(e.cm);
                            });
                    }),
                    (Za.prototype.setUneditable = function (e) {
                        e.contentEditable = "false";
                    }),
                    (Za.prototype.onKeyPress = function (e) {
                        0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Di(this.cm, Va)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
                    }),
                    (Za.prototype.readOnlyChanged = function (e) {
                        this.div.contentEditable = String("nocursor" != e);
                    }),
                    (Za.prototype.onContextMenu = function () {}),
                    (Za.prototype.resetPosition = function () {}),
                    (Za.prototype.needsContentAttribute = !0);
                var is = function (e) {
                    (this.cm = e), (this.prevInput = ""), (this.pollingFast = !1), (this.polling = new R()), (this.hasSelection = !1), (this.composing = null);
                };
                function os(e, t) {
                    if (((t = t ? I(t) : {}), (t.value = e.value), !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus)) {
                        var r = W();
                        t.autofocus = r == e || (null != e.getAttribute("autofocus") && r == document.body);
                    }
                    function n() {
                        e.value = a.getValue();
                    }
                    var i;
                    if (e.form && (pe(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
                        var o = e.form;
                        i = o.submit;
                        try {
                            var l = (o.submit = function () {
                                n(), (o.submit = i), o.submit(), (o.submit = l);
                            });
                        } catch (s) {}
                    }
                    (t.finishInit = function (r) {
                        (r.save = n),
                            (r.getTextArea = function () {
                                return e;
                            }),
                            (r.toTextArea = function () {
                                (r.toTextArea = isNaN),
                                    n(),
                                    e.parentNode.removeChild(r.getWrapperElement()),
                                    (e.style.display = ""),
                                    e.form && (ve(e.form, "submit", n), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = i));
                            });
                    }),
                        (e.style.display = "none");
                    var a = Pa(function (t) {
                        return e.parentNode.insertBefore(t, e.nextSibling);
                    }, t);
                    return a;
                }
                function ls(e) {
                    (e.off = ve),
                        (e.on = pe),
                        (e.wheelEventPixels = to),
                        (e.Doc = Cl),
                        (e.splitLines = Ee),
                        (e.countColumn = z),
                        (e.findColumn = $),
                        (e.isWordChar = te),
                        (e.Pass = V),
                        (e.signal = me),
                        (e.Line = ar),
                        (e.changeEnd = ao),
                        (e.scrollbarModel = bi),
                        (e.Pos = it),
                        (e.cmpPos = ot),
                        (e.modes = ze),
                        (e.mimeModes = Re),
                        (e.resolveMode = Ve),
                        (e.getMode = Ge),
                        (e.modeExtensions = _e),
                        (e.extendMode = Ue),
                        (e.copyState = $e),
                        (e.startState = Xe),
                        (e.innerMode = Ke),
                        (e.commands = ql),
                        (e.keyMap = Il),
                        (e.keyName = Gl),
                        (e.isModifierKey = jl),
                        (e.lookupKey = Bl),
                        (e.normalizeKeyMap = Rl),
                        (e.StringStream = Ye),
                        (e.SharedTextMarker = vl),
                        (e.TextMarker = pl),
                        (e.LineWidget = cl),
                        (e.e_preventDefault = Ce),
                        (e.e_stopPropagation = ke),
                        (e.e_stop = Le),
                        (e.addClass = E),
                        (e.contains = D),
                        (e.rmClass = M),
                        (e.keyNames = El);
                }
                (is.prototype.init = function (e) {
                    var t = this,
                        r = this,
                        n = this.cm;
                    this.createField(e);
                    var i = this.textarea;
                    function o(e) {
                        if (!ye(n, e)) {
                            if (n.somethingSelected()) ja({ lineWise: !1, text: n.getSelections() });
                            else {
                                if (!n.options.lineWiseCopyCut) return;
                                var t = Ua(n);
                                ja({ lineWise: !0, text: t.text }), "cut" == e.type ? n.setSelections(t.ranges, null, G) : ((r.prevInput = ""), (i.value = t.text.join("\n")), F(i));
                            }
                            "cut" == e.type && (n.state.cutIncoming = +new Date());
                        }
                    }
                    e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
                        g && (i.style.width = "0px"),
                        pe(i, "input", function () {
                            l && a >= 9 && t.hasSelection && (t.hasSelection = null), r.poll();
                        }),
                        pe(i, "paste", function (e) {
                            ye(n, e) || Ga(e, n) || ((n.state.pasteIncoming = +new Date()), r.fastPoll());
                        }),
                        pe(i, "cut", o),
                        pe(i, "copy", o),
                        pe(e.scroller, "paste", function (t) {
                            if (!Vr(e, t) && !ye(n, t)) {
                                if (!i.dispatchEvent) return (n.state.pasteIncoming = +new Date()), void r.focus();
                                var o = new Event("paste");
                                (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
                            }
                        }),
                        pe(e.lineSpace, "selectstart", function (t) {
                            Vr(e, t) || Ce(t);
                        }),
                        pe(i, "compositionstart", function () {
                            var e = n.getCursor("from");
                            r.composing && r.composing.range.clear(), (r.composing = { start: e, range: n.markText(e, n.getCursor("to"), { className: "CodeMirror-composing" }) });
                        }),
                        pe(i, "compositionend", function () {
                            r.composing && (r.poll(), r.composing.range.clear(), (r.composing = null));
                        });
                }),
                    (is.prototype.createField = function (e) {
                        (this.wrapper = Ka()), (this.textarea = this.wrapper.firstChild);
                    }),
                    (is.prototype.screenReaderLabelChanged = function (e) {
                        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
                    }),
                    (is.prototype.prepareSelection = function () {
                        var e = this.cm,
                            t = e.display,
                            r = e.doc,
                            n = Gn(e);
                        if (e.options.moveInputWithCursor) {
                            var i = yn(e, r.sel.primary().head, "div"),
                                o = t.wrapper.getBoundingClientRect(),
                                l = t.lineDiv.getBoundingClientRect();
                            (n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top))), (n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left)));
                        }
                        return n;
                    }),
                    (is.prototype.showSelection = function (e) {
                        var t = this.cm,
                            r = t.display;
                        O(r.cursorDiv, e.cursors), O(r.selectionDiv, e.selection), null != e.teTop && ((this.wrapper.style.top = e.teTop + "px"), (this.wrapper.style.left = e.teLeft + "px"));
                    }),
                    (is.prototype.reset = function (e) {
                        if (!this.contextMenuPending && !this.composing) {
                            var t = this.cm;
                            if (t.somethingSelected()) {
                                this.prevInput = "";
                                var r = t.getSelection();
                                (this.textarea.value = r), t.state.focused && F(this.textarea), l && a >= 9 && (this.hasSelection = r);
                            } else e || ((this.prevInput = this.textarea.value = ""), l && a >= 9 && (this.hasSelection = null));
                        }
                    }),
                    (is.prototype.getField = function () {
                        return this.textarea;
                    }),
                    (is.prototype.supportsTouch = function () {
                        return !1;
                    }),
                    (is.prototype.focus = function () {
                        if ("nocursor" != this.cm.options.readOnly && (!m || W() != this.textarea))
                            try {
                                this.textarea.focus();
                            } catch (e) {}
                    }),
                    (is.prototype.blur = function () {
                        this.textarea.blur();
                    }),
                    (is.prototype.resetPosition = function () {
                        this.wrapper.style.top = this.wrapper.style.left = 0;
                    }),
                    (is.prototype.receivedFocus = function () {
                        this.slowPoll();
                    }),
                    (is.prototype.slowPoll = function () {
                        var e = this;
                        this.pollingFast ||
                            this.polling.set(this.cm.options.pollInterval, function () {
                                e.poll(), e.cm.state.focused && e.slowPoll();
                            });
                    }),
                    (is.prototype.fastPoll = function () {
                        var e = !1,
                            t = this;
                        function r() {
                            var n = t.poll();
                            n || e ? ((t.pollingFast = !1), t.slowPoll()) : ((e = !0), t.polling.set(60, r));
                        }
                        (t.pollingFast = !0), t.polling.set(20, r);
                    }),
                    (is.prototype.poll = function () {
                        var e = this,
                            t = this.cm,
                            r = this.textarea,
                            n = this.prevInput;
                        if (this.contextMenuPending || !t.state.focused || (He(r) && !n && !this.composing) || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                        var i = r.value;
                        if (i == n && !t.somethingSelected()) return !1;
                        if ((l && a >= 9 && this.hasSelection === i) || (y && /[\uf700-\uf7ff]/.test(i))) return t.display.input.reset(), !1;
                        if (t.doc.sel == t.display.selForContextMenu) {
                            var o = i.charCodeAt(0);
                            if ((8203 != o || n || (n = "​"), 8666 == o)) return this.reset(), this.cm.execCommand("undo");
                        }
                        var s = 0,
                            u = Math.min(n.length, i.length);
                        while (s < u && n.charCodeAt(s) == i.charCodeAt(s)) ++s;
                        return (
                            Ai(t, function () {
                                Va(t, i.slice(s), n.length - s, null, e.composing ? "*compose" : null),
                                    i.length > 1e3 || i.indexOf("\n") > -1 ? (r.value = e.prevInput = "") : (e.prevInput = i),
                                    e.composing && (e.composing.range.clear(), (e.composing.range = t.markText(e.composing.start, t.getCursor("to"), { className: "CodeMirror-composing" })));
                            }),
                            !0
                        );
                    }),
                    (is.prototype.ensurePolled = function () {
                        this.pollingFast && this.poll() && (this.pollingFast = !1);
                    }),
                    (is.prototype.onKeyPress = function () {
                        l && a >= 9 && (this.hasSelection = null), this.fastPoll();
                    }),
                    (is.prototype.onContextMenu = function (e) {
                        var t = this,
                            r = t.cm,
                            n = r.display,
                            i = t.textarea;
                        t.contextMenuPending && t.contextMenuPending();
                        var o = Hn(r, e),
                            u = n.scroller.scrollTop;
                        if (o && !f) {
                            var c = r.options.resetSelectionOnContextMenu;
                            c && -1 == r.doc.sel.contains(o) && Di(r, jo)(r.doc, lo(o), G);
                            var h,
                                d = i.style.cssText,
                                p = t.wrapper.style.cssText,
                                g = t.wrapper.offsetParent.getBoundingClientRect();
                            if (
                                ((t.wrapper.style.cssText = "position: static"),
                                (i.style.cssText =
                                    "position: absolute; width: 30px; height: 30px;\n      top: " +
                                    (e.clientY - g.top - 5) +
                                    "px; left: " +
                                    (e.clientX - g.left - 5) +
                                    "px;\n      z-index: 1000; background: " +
                                    (l ? "rgba(255, 255, 255, .05)" : "transparent") +
                                    ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
                                s && (h = window.scrollY),
                                n.input.focus(),
                                s && window.scrollTo(null, h),
                                n.input.reset(),
                                r.somethingSelected() || (i.value = t.prevInput = " "),
                                (t.contextMenuPending = y),
                                (n.selForContextMenu = r.doc.sel),
                                clearTimeout(n.detectingSelectAll),
                                l && a >= 9 && m(),
                                k)
                            ) {
                                Le(e);
                                var v = function () {
                                    ve(window, "mouseup", v), setTimeout(y, 20);
                                };
                                pe(window, "mouseup", v);
                            } else setTimeout(y, 50);
                        }
                        function m() {
                            if (null != i.selectionStart) {
                                var e = r.somethingSelected(),
                                    o = "​" + (e ? i.value : "");
                                (i.value = "⇚"), (i.value = o), (t.prevInput = e ? "" : "​"), (i.selectionStart = 1), (i.selectionEnd = o.length), (n.selForContextMenu = r.doc.sel);
                            }
                        }
                        function y() {
                            if (
                                t.contextMenuPending == y &&
                                ((t.contextMenuPending = !1), (t.wrapper.style.cssText = p), (i.style.cssText = d), l && a < 9 && n.scrollbars.setScrollTop((n.scroller.scrollTop = u)), null != i.selectionStart)
                            ) {
                                (!l || (l && a < 9)) && m();
                                var e = 0,
                                    o = function () {
                                        n.selForContextMenu == r.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput
                                            ? Di(r, Yo)(r)
                                            : e++ < 10
                                            ? (n.detectingSelectAll = setTimeout(o, 500))
                                            : ((n.selForContextMenu = null), n.input.reset());
                                    };
                                n.detectingSelectAll = setTimeout(o, 200);
                            }
                        }
                    }),
                    (is.prototype.readOnlyChanged = function (e) {
                        e || this.reset(), (this.textarea.disabled = "nocursor" == e);
                    }),
                    (is.prototype.setUneditable = function () {}),
                    (is.prototype.needsContentAttribute = !1),
                    Ea(Pa),
                    Xa(Pa);
                var as = "iter insert remove copy getEditor constructor".split(" ");
                for (var ss in Cl.prototype)
                    Cl.prototype.hasOwnProperty(ss) &&
                        B(as, ss) < 0 &&
                        (Pa.prototype[ss] = (function (e) {
                            return function () {
                                return e.apply(this.doc, arguments);
                            };
                        })(Cl.prototype[ss]));
                return (
                    xe(Cl),
                    (Pa.inputStyles = { textarea: is, contenteditable: Za }),
                    (Pa.defineMode = function (e) {
                        Pa.defaults.mode || "null" == e || (Pa.defaults.mode = e), Be.apply(this, arguments);
                    }),
                    (Pa.defineMIME = je),
                    Pa.defineMode("null", function () {
                        return {
                            token: function (e) {
                                return e.skipToEnd();
                            },
                        };
                    }),
                    Pa.defineMIME("text/plain", "null"),
                    (Pa.defineExtension = function (e, t) {
                        Pa.prototype[e] = t;
                    }),
                    (Pa.defineDocExtension = function (e, t) {
                        Cl.prototype[e] = t;
                    }),
                    (Pa.fromTextArea = os),
                    ls(Pa),
                    (Pa.version = "5.53.2"),
                    Pa
                );
            });
        },
        "84f5": function (e, t, r) {
            "use strict";
            var n = r("362a"),
                i = r.n(n);
            i.a;
        },
        "8c2e": function (e, t, r) {},
        "8f94": function (e, t, r) {
            !(function (t, n) {
                e.exports = n(r("56b3"));
            })(0, function (e) {
                return (function (e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var i = (r[n] = { i: n, l: !1, exports: {} });
                        return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
                    }
                    var r = {};
                    return (
                        (t.m = e),
                        (t.c = r),
                        (t.i = function (e) {
                            return e;
                        }),
                        (t.d = function (e, r, n) {
                            t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
                        }),
                        (t.n = function (e) {
                            var r =
                                e && e.__esModule
                                    ? function () {
                                          return e.default;
                                      }
                                    : function () {
                                          return e;
                                      };
                            return t.d(r, "a", r), r;
                        }),
                        (t.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (t.p = "/"),
                        t((t.s = 3))
                    );
                })([
                    function (t, r) {
                        t.exports = e;
                    },
                    function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var n = r(0),
                            i = (function (e) {
                                return e && e.__esModule ? e : { default: e };
                            })(n),
                            o = window.CodeMirror || i.default;
                        "function" != typeof Object.assign &&
                            Object.defineProperty(Object, "assign", {
                                value: function (e, t) {
                                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                                    for (var r = Object(e), n = 1; n < arguments.length; n++) {
                                        var i = arguments[n];
                                        if (null != i) for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
                                    }
                                    return r;
                                },
                                writable: !0,
                                configurable: !0,
                            }),
                            (t.default = {
                                name: "codemirror",
                                data: function () {
                                    return { content: "", codemirror: null, cminstance: null };
                                },
                                props: {
                                    code: String,
                                    value: String,
                                    marker: Function,
                                    unseenLines: Array,
                                    name: { type: String, default: "codemirror" },
                                    placeholder: { type: String, default: "" },
                                    merge: { type: Boolean, default: !1 },
                                    options: {
                                        type: Object,
                                        default: function () {
                                            return {};
                                        },
                                    },
                                    events: {
                                        type: Array,
                                        default: function () {
                                            return [];
                                        },
                                    },
                                    globalOptions: {
                                        type: Object,
                                        default: function () {
                                            return {};
                                        },
                                    },
                                    globalEvents: {
                                        type: Array,
                                        default: function () {
                                            return [];
                                        },
                                    },
                                },
                                watch: {
                                    options: {
                                        deep: !0,
                                        handler: function (e) {
                                            for (var t in e) this.cminstance.setOption(t, e[t]);
                                        },
                                    },
                                    merge: function () {
                                        this.$nextTick(this.switchMerge);
                                    },
                                    code: function (e) {
                                        this.handerCodeChange(e);
                                    },
                                    value: function (e) {
                                        this.handerCodeChange(e);
                                    },
                                },
                                methods: {
                                    initialize: function () {
                                        var e = this,
                                            t = Object.assign({}, this.globalOptions, this.options);
                                        this.merge
                                            ? ((this.codemirror = o.MergeView(this.$refs.mergeview, t)), (this.cminstance = this.codemirror.edit))
                                            : ((this.codemirror = o.fromTextArea(this.$refs.textarea, t)), (this.cminstance = this.codemirror), this.cminstance.setValue(this.code || this.value || this.content)),
                                            this.cminstance.on("change", function (t) {
                                                (e.content = t.getValue()), e.$emit && e.$emit("input", e.content);
                                            });
                                        var r = {};
                                        [
                                            "scroll",
                                            "changes",
                                            "beforeChange",
                                            "cursorActivity",
                                            "keyHandled",
                                            "inputRead",
                                            "electricInput",
                                            "beforeSelectionChange",
                                            "viewportChange",
                                            "swapDoc",
                                            "gutterClick",
                                            "gutterContextMenu",
                                            "focus",
                                            "blur",
                                            "refresh",
                                            "optionChange",
                                            "scrollCursorIntoView",
                                            "update",
                                        ]
                                            .concat(this.events)
                                            .concat(this.globalEvents)
                                            .filter(function (e) {
                                                return !r[e] && (r[e] = !0);
                                            })
                                            .forEach(function (t) {
                                                e.cminstance.on(t, function () {
                                                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                                                    e.$emit.apply(e, [t].concat(n));
                                                    var o = t.replace(/([A-Z])/g, "-$1").toLowerCase();
                                                    o !== t && e.$emit.apply(e, [o].concat(n));
                                                });
                                            }),
                                            this.$emit("ready", this.codemirror),
                                            this.unseenLineMarkers(),
                                            this.refresh();
                                    },
                                    refresh: function () {
                                        var e = this;
                                        this.$nextTick(function () {
                                            e.cminstance.refresh();
                                        });
                                    },
                                    destroy: function () {
                                        var e = this.cminstance.doc.cm.getWrapperElement();
                                        e && e.remove && e.remove();
                                    },
                                    handerCodeChange: function (e) {
                                        if (e !== this.cminstance.getValue()) {
                                            var t = this.cminstance.getScrollInfo();
                                            this.cminstance.setValue(e), (this.content = e), this.cminstance.scrollTo(t.left, t.top);
                                        }
                                        this.unseenLineMarkers();
                                    },
                                    unseenLineMarkers: function () {
                                        var e = this;
                                        void 0 !== this.unseenLines &&
                                            void 0 !== this.marker &&
                                            this.unseenLines.forEach(function (t) {
                                                var r = e.cminstance.lineInfo(t);
                                                e.cminstance.setGutterMarker(t, "breakpoints", r.gutterMarkers ? null : e.marker());
                                            });
                                    },
                                    switchMerge: function () {
                                        var e = this.cminstance.doc.history,
                                            t = this.cminstance.doc.cleanGeneration;
                                        (this.options.value = this.cminstance.getValue()), this.destroy(), this.initialize(), (this.cminstance.doc.history = e), (this.cminstance.doc.cleanGeneration = t);
                                    },
                                },
                                mounted: function () {
                                    this.initialize();
                                },
                                beforeDestroy: function () {
                                    this.destroy();
                                },
                            });
                    },
                    function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var n = r(1),
                            i = r.n(n);
                        for (var o in n)
                            ["default", "default"].indexOf(o) < 0 &&
                                (function (e) {
                                    r.d(t, e, function () {
                                        return n[e];
                                    });
                                })(o);
                        var l = r(5),
                            a = r(4),
                            s = a(i.a, l.a, !1, null, null, null);
                        t.default = s.exports;
                    },
                    function (e, t, r) {
                        "use strict";
                        function n(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        Object.defineProperty(t, "__esModule", { value: !0 }), (t.install = t.codemirror = t.CodeMirror = void 0);
                        var i = r(0),
                            o = n(i),
                            l = r(2),
                            a = n(l),
                            s = window.CodeMirror || o.default,
                            u = function (e, t) {
                                t &&
                                    (t.options &&
                                        (a.default.props.globalOptions.default = function () {
                                            return t.options;
                                        }),
                                    t.events &&
                                        (a.default.props.globalEvents.default = function () {
                                            return t.events;
                                        })),
                                    e.component(a.default.name, a.default);
                            },
                            c = { CodeMirror: s, codemirror: a.default, install: u };
                        (t.default = c), (t.CodeMirror = s), (t.codemirror = a.default), (t.install = u);
                    },
                    function (e, t) {
                        e.exports = function (e, t, r, n, i, o) {
                            var l,
                                a = (e = e || {}),
                                s = typeof e.default;
                            ("object" !== s && "function" !== s) || ((l = e), (a = e.default));
                            var u,
                                c = "function" == typeof a ? a.options : a;
                            if (
                                (t && ((c.render = t.render), (c.staticRenderFns = t.staticRenderFns), (c._compiled = !0)),
                                r && (c.functional = !0),
                                i && (c._scopeId = i),
                                o
                                    ? ((u = function (e) {
                                          (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)),
                                              e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                                              n && n.call(this, e),
                                              e && e._registeredComponents && e._registeredComponents.add(o);
                                      }),
                                      (c._ssrRegister = u))
                                    : n && (u = n),
                                u)
                            ) {
                                var f = c.functional,
                                    h = f ? c.render : c.beforeCreate;
                                f
                                    ? ((c._injectStyles = u),
                                      (c.render = function (e, t) {
                                          return u.call(t), h(e, t);
                                      }))
                                    : (c.beforeCreate = h ? [].concat(h, u) : [u]);
                            }
                            return { esModule: l, exports: a, options: c };
                        };
                    },
                    function (e, t, r) {
                        "use strict";
                        var n = function () {
                                var e = this,
                                    t = e.$createElement,
                                    r = e._self._c || t;
                                return r("div", { staticClass: "vue-codemirror", class: { merge: e.merge } }, [
                                    e.merge ? r("div", { ref: "mergeview" }) : r("textarea", { ref: "textarea", attrs: { name: e.name, placeholder: e.placeholder } }),
                                ]);
                            },
                            i = [],
                            o = { render: n, staticRenderFns: i };
                        t.a = o;
                    },
                ]);
            });
        },
        a7be: function (e, t, r) {},
        c556: function (e, t, r) {
            "use strict";
            r.r(t);
            var n = function () {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r(
                        "div",
                        { staticClass: "content g2-content" },
                        [
                            r("codemirror", {
                                attrs: { options: e.cmOptions },
                                model: {
                                    value: e.content,
                                    callback: function (t) {
                                        e.content = t;
                                    },
                                    expression: "content",
                                },
                            }),
                        ],
                        1
                    );
                },
                i = [],
                o = r("45d8"),
                l = r("8f94"),
                a =
                    (r("a7be"),
                    r("f9d4"),
                    r("8c2e"),
                    {
                        data: function () {
                            return { path: "", content: "", cmOptions: { tabSize: 4, mode: "text/javascript", lineNumbers: !0, line: !0 } };
                        },
                        activated: function () {
                            this.render();
                        },
                        computed: {
                            url: function () {
                                return this.$route.params.path ? Object(o["d"])(this.$route.params.path) : "";
                            },
                        },
                        components: { codemirror: l["codemirror"] },
                        methods: {
                            render: function () {
                                var e = this,
                                    t = this.url;
                                (this.content = this.$t("page.text.loading")),
                                    Object(o["g"])({ path: t, file: {} }, function (t) {
                                        e.content = t;
                                    });
                            },
                        },
                    }),
                s = a,
                u = (r("84f5"), r("2877")),
                c = Object(u["a"])(s, n, i, !1, null, null, null);
            t["default"] = c.exports;
        },
        f9d4: function (e, t, r) {
            (function (e) {
                e(r("56b3"));
            })(function (e) {
                "use strict";
                e.defineMode("javascript", function (t, r) {
                    var n,
                        i,
                        o = t.indentUnit,
                        l = r.statementIndent,
                        a = r.jsonld,
                        s = r.json || a,
                        u = r.typescript,
                        c = r.wordCharacters || /[\w$\xa1-\uffff]/,
                        f = (function () {
                            function e(e) {
                                return { type: e, style: "keyword" };
                            }
                            var t = e("keyword a"),
                                r = e("keyword b"),
                                n = e("keyword c"),
                                i = e("keyword d"),
                                o = e("operator"),
                                l = { type: "atom", style: "atom" };
                            return {
                                if: e("if"),
                                while: t,
                                with: t,
                                else: r,
                                do: r,
                                try: r,
                                finally: r,
                                return: i,
                                break: i,
                                continue: i,
                                new: e("new"),
                                delete: n,
                                void: n,
                                throw: n,
                                debugger: e("debugger"),
                                var: e("var"),
                                const: e("var"),
                                let: e("var"),
                                function: e("function"),
                                catch: e("catch"),
                                for: e("for"),
                                switch: e("switch"),
                                case: e("case"),
                                default: e("default"),
                                in: o,
                                typeof: o,
                                instanceof: o,
                                true: l,
                                false: l,
                                null: l,
                                undefined: l,
                                NaN: l,
                                Infinity: l,
                                this: e("this"),
                                class: e("class"),
                                super: e("atom"),
                                yield: n,
                                export: e("export"),
                                import: e("import"),
                                extends: n,
                                await: n,
                            };
                        })(),
                        h = /[+\-*&%=<>!?|~^@]/,
                        d = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
                    function p(e) {
                        var t,
                            r = !1,
                            n = !1;
                        while (null != (t = e.next())) {
                            if (!r) {
                                if ("/" == t && !n) return;
                                "[" == t ? (n = !0) : n && "]" == t && (n = !1);
                            }
                            r = !r && "\\" == t;
                        }
                    }
                    function g(e, t, r) {
                        return (n = e), (i = r), t;
                    }
                    function v(e, t) {
                        var r = e.next();
                        if ('"' == r || "'" == r) return (t.tokenize = m(r)), t.tokenize(e, t);
                        if ("." == r && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return g("number", "number");
                        if ("." == r && e.match("..")) return g("spread", "meta");
                        if (/[\[\]{}\(\),;\:\.]/.test(r)) return g(r);
                        if ("=" == r && e.eat(">")) return g("=>", "operator");
                        if ("0" == r && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return g("number", "number");
                        if (/\d/.test(r)) return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), g("number", "number");
                        if ("/" == r)
                            return e.eat("*")
                                ? ((t.tokenize = y), y(e, t))
                                : e.eat("/")
                                ? (e.skipToEnd(), g("comment", "comment"))
                                : et(e, t, 1)
                                ? (p(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), g("regexp", "string-2"))
                                : (e.eat("="), g("operator", "operator", e.current()));
                        if ("`" == r) return (t.tokenize = b), b(e, t);
                        if ("#" == r) return e.skipToEnd(), g("error", "error");
                        if (("<" == r && e.match("!--")) || ("-" == r && e.match("->"))) return e.skipToEnd(), g("comment", "comment");
                        if (h.test(r))
                            return (">" == r && t.lexical && ">" == t.lexical.type) || (e.eat("=") ? ("!" != r && "=" != r) || e.eat("=") : /[<>*+\-]/.test(r) && (e.eat(r), ">" == r && e.eat(r))), g("operator", "operator", e.current());
                        if (c.test(r)) {
                            e.eatWhile(c);
                            var n = e.current();
                            if ("." != t.lastType) {
                                if (f.propertyIsEnumerable(n)) {
                                    var i = f[n];
                                    return g(i.type, i.style, n);
                                }
                                if ("async" == n && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return g("async", "keyword", n);
                            }
                            return g("variable", "variable", n);
                        }
                    }
                    function m(e) {
                        return function (t, r) {
                            var n,
                                i = !1;
                            if (a && "@" == t.peek() && t.match(d)) return (r.tokenize = v), g("jsonld-keyword", "meta");
                            while (null != (n = t.next())) {
                                if (n == e && !i) break;
                                i = !i && "\\" == n;
                            }
                            return i || (r.tokenize = v), g("string", "string");
                        };
                    }
                    function y(e, t) {
                        var r,
                            n = !1;
                        while ((r = e.next())) {
                            if ("/" == r && n) {
                                t.tokenize = v;
                                break;
                            }
                            n = "*" == r;
                        }
                        return g("comment", "comment");
                    }
                    function b(e, t) {
                        var r,
                            n = !1;
                        while (null != (r = e.next())) {
                            if (!n && ("`" == r || ("$" == r && e.eat("{")))) {
                                t.tokenize = v;
                                break;
                            }
                            n = !n && "\\" == r;
                        }
                        return g("quasi", "string-2", e.current());
                    }
                    var w = "([{}])";
                    function x(e, t) {
                        t.fatArrowAt && (t.fatArrowAt = null);
                        var r = e.string.indexOf("=>", e.start);
                        if (!(r < 0)) {
                            if (u) {
                                var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, r));
                                n && (r = n.index);
                            }
                            for (var i = 0, o = !1, l = r - 1; l >= 0; --l) {
                                var a = e.string.charAt(l),
                                    s = w.indexOf(a);
                                if (s >= 0 && s < 3) {
                                    if (!i) {
                                        ++l;
                                        break;
                                    }
                                    if (0 == --i) {
                                        "(" == a && (o = !0);
                                        break;
                                    }
                                } else if (s >= 3 && s < 6) ++i;
                                else if (c.test(a)) o = !0;
                                else if (/["'\/`]/.test(a))
                                    for (; ; --l) {
                                        if (0 == l) return;
                                        var f = e.string.charAt(l - 1);
                                        if (f == a && "\\" != e.string.charAt(l - 2)) {
                                            l--;
                                            break;
                                        }
                                    }
                                else if (o && !i) {
                                    ++l;
                                    break;
                                }
                            }
                            o && !i && (t.fatArrowAt = l);
                        }
                    }
                    var C = { atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, "jsonld-keyword": !0 };
                    function k(e, t, r, n, i, o) {
                        (this.indented = e), (this.column = t), (this.type = r), (this.prev = i), (this.info = o), null != n && (this.align = n);
                    }
                    function S(e, t) {
                        for (var r = e.localVars; r; r = r.next) if (r.name == t) return !0;
                        for (var n = e.context; n; n = n.prev) for (r = n.vars; r; r = r.next) if (r.name == t) return !0;
                    }
                    function L(e, t, r, n, i) {
                        var o = e.cc;
                        (M.state = e), (M.stream = i), (M.marked = null), (M.cc = o), (M.style = t), e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);
                        while (1) {
                            var l = o.length ? o.pop() : s ? _ : V;
                            if (l(r, n)) {
                                while (o.length && o[o.length - 1].lex) o.pop()();
                                return M.marked ? M.marked : "variable" == r && S(e, n) ? "variable-2" : t;
                            }
                        }
                    }
                    var M = { state: null, column: null, marked: null, cc: null };
                    function T() {
                        for (var e = arguments.length - 1; e >= 0; e--) M.cc.push(arguments[e]);
                    }
                    function O() {
                        return T.apply(null, arguments), !0;
                    }
                    function N(e, t) {
                        for (var r = t; r; r = r.next) if (r.name == e) return !0;
                        return !1;
                    }
                    function A(e) {
                        var t = M.state;
                        if (((M.marked = "def"), t.context))
                            if ("var" == t.lexical.info && t.context && t.context.block) {
                                var n = D(e, t.context);
                                if (null != n) return void (t.context = n);
                            } else if (!N(e, t.localVars)) return void (t.localVars = new H(e, t.localVars));
                        r.globalVars && !N(e, t.globalVars) && (t.globalVars = new H(e, t.globalVars));
                    }
                    function D(e, t) {
                        if (t) {
                            if (t.block) {
                                var r = D(e, t.prev);
                                return r ? (r == t.prev ? t : new E(r, t.vars, !0)) : null;
                            }
                            return N(e, t.vars) ? t : new E(t.prev, new H(e, t.vars), !1);
                        }
                        return null;
                    }
                    function W(e) {
                        return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e;
                    }
                    function E(e, t, r) {
                        (this.prev = e), (this.vars = t), (this.block = r);
                    }
                    function H(e, t) {
                        (this.name = e), (this.next = t);
                    }
                    var F = new H("this", new H("arguments", null));
                    function P() {
                        (M.state.context = new E(M.state.context, M.state.localVars, !1)), (M.state.localVars = F);
                    }
                    function I() {
                        (M.state.context = new E(M.state.context, M.state.localVars, !0)), (M.state.localVars = null);
                    }
                    function z() {
                        (M.state.localVars = M.state.context.vars), (M.state.context = M.state.context.prev);
                    }
                    function R(e, t) {
                        var r = function () {
                            var r = M.state,
                                n = r.indented;
                            if ("stat" == r.lexical.type) n = r.lexical.indented;
                            else for (var i = r.lexical; i && ")" == i.type && i.align; i = i.prev) n = i.indented;
                            r.lexical = new k(n, M.stream.column(), e, null, r.lexical, t);
                        };
                        return (r.lex = !0), r;
                    }
                    function B() {
                        var e = M.state;
                        e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), (e.lexical = e.lexical.prev));
                    }
                    function j(e) {
                        function t(r) {
                            return r == e ? O() : ";" == e || "}" == r || ")" == r || "]" == r ? T() : O(t);
                        }
                        return t;
                    }
                    function V(e, t) {
                        return "var" == e
                            ? O(R("vardef", t), Se, j(";"), B)
                            : "keyword a" == e
                            ? O(R("form"), $, V, B)
                            : "keyword b" == e
                            ? O(R("form"), V, B)
                            : "keyword d" == e
                            ? M.stream.match(/^\s*$/, !1)
                                ? O()
                                : O(R("stat"), X, j(";"), B)
                            : "debugger" == e
                            ? O(j(";"))
                            : "{" == e
                            ? O(R("}"), I, fe, B, z)
                            : ";" == e
                            ? O()
                            : "if" == e
                            ? ("else" == M.state.lexical.info && M.state.cc[M.state.cc.length - 1] == B && M.state.cc.pop()(), O(R("form"), $, V, B, Ae))
                            : "function" == e
                            ? O(He)
                            : "for" == e
                            ? O(R("form"), De, V, B)
                            : "class" == e || (u && "interface" == t)
                            ? ((M.marked = "keyword"), O(R("form", "class" == e ? e : t), Re, B))
                            : "variable" == e
                            ? u && "declare" == t
                                ? ((M.marked = "keyword"), O(V))
                                : u && ("module" == t || "enum" == t || "type" == t) && M.stream.match(/^\s*\w/, !1)
                                ? ((M.marked = "keyword"), "enum" == t ? O(Ze) : "type" == t ? O(Pe, j("operator"), ve, j(";")) : O(R("form"), Le, j("{"), R("}"), fe, B, B))
                                : u && "namespace" == t
                                ? ((M.marked = "keyword"), O(R("form"), _, V, B))
                                : u && "abstract" == t
                                ? ((M.marked = "keyword"), O(V))
                                : O(R("stat"), ie)
                            : "switch" == e
                            ? O(R("form"), $, j("{"), R("}", "switch"), I, fe, B, B, z)
                            : "case" == e
                            ? O(_, j(":"))
                            : "default" == e
                            ? O(j(":"))
                            : "catch" == e
                            ? O(R("form"), P, G, V, B, z)
                            : "export" == e
                            ? O(R("stat"), Ge, B)
                            : "import" == e
                            ? O(R("stat"), Ue, B)
                            : "async" == e
                            ? O(V)
                            : "@" == t
                            ? O(_, V)
                            : T(R("stat"), _, j(";"), B);
                    }
                    function G(e) {
                        if ("(" == e) return O(Ie, j(")"));
                    }
                    function _(e, t) {
                        return K(e, t, !1);
                    }
                    function U(e, t) {
                        return K(e, t, !0);
                    }
                    function $(e) {
                        return "(" != e ? T() : O(R(")"), X, j(")"), B);
                    }
                    function K(e, t, r) {
                        if (M.state.fatArrowAt == M.stream.start) {
                            var n = r ? ee : Q;
                            if ("(" == e) return O(P, R(")"), ue(Ie, ")"), B, j("=>"), n, z);
                            if ("variable" == e) return T(P, Le, j("=>"), n, z);
                        }
                        var i = r ? q : Y;
                        return C.hasOwnProperty(e)
                            ? O(i)
                            : "function" == e
                            ? O(He, i)
                            : "class" == e || (u && "interface" == t)
                            ? ((M.marked = "keyword"), O(R("form"), ze, B))
                            : "keyword c" == e || "async" == e
                            ? O(r ? U : _)
                            : "(" == e
                            ? O(R(")"), X, j(")"), B, i)
                            : "operator" == e || "spread" == e
                            ? O(r ? U : _)
                            : "[" == e
                            ? O(R("]"), qe, B, i)
                            : "{" == e
                            ? ce(le, "}", null, i)
                            : "quasi" == e
                            ? T(Z, i)
                            : "new" == e
                            ? O(te(r))
                            : "import" == e
                            ? O(_)
                            : O();
                    }
                    function X(e) {
                        return e.match(/[;\}\)\],]/) ? T() : T(_);
                    }
                    function Y(e, t) {
                        return "," == e ? O(X) : q(e, t, !1);
                    }
                    function q(e, t, r) {
                        var n = 0 == r ? Y : q,
                            i = 0 == r ? _ : U;
                        return "=>" == e
                            ? O(P, r ? ee : Q, z)
                            : "operator" == e
                            ? /\+\+|--/.test(t) || (u && "!" == t)
                                ? O(n)
                                : u && "<" == t && M.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1)
                                ? O(R(">"), ue(ve, ">"), B, n)
                                : "?" == t
                                ? O(_, j(":"), i)
                                : O(i)
                            : "quasi" == e
                            ? T(Z, n)
                            : ";" != e
                            ? "(" == e
                                ? ce(U, ")", "call", n)
                                : "." == e
                                ? O(oe, n)
                                : "[" == e
                                ? O(R("]"), X, j("]"), B, n)
                                : u && "as" == t
                                ? ((M.marked = "keyword"), O(ve, n))
                                : "regexp" == e
                                ? ((M.state.lastType = M.marked = "operator"), M.stream.backUp(M.stream.pos - M.stream.start - 1), O(i))
                                : void 0
                            : void 0;
                    }
                    function Z(e, t) {
                        return "quasi" != e ? T() : "${" != t.slice(t.length - 2) ? O(Z) : O(_, J);
                    }
                    function J(e) {
                        if ("}" == e) return (M.marked = "string-2"), (M.state.tokenize = b), O(Z);
                    }
                    function Q(e) {
                        return x(M.stream, M.state), T("{" == e ? V : _);
                    }
                    function ee(e) {
                        return x(M.stream, M.state), T("{" == e ? V : U);
                    }
                    function te(e) {
                        return function (t) {
                            return "." == t ? O(e ? ne : re) : "variable" == t && u ? O(xe, e ? q : Y) : T(e ? U : _);
                        };
                    }
                    function re(e, t) {
                        if ("target" == t) return (M.marked = "keyword"), O(Y);
                    }
                    function ne(e, t) {
                        if ("target" == t) return (M.marked = "keyword"), O(q);
                    }
                    function ie(e) {
                        return ":" == e ? O(B, V) : T(Y, j(";"), B);
                    }
                    function oe(e) {
                        if ("variable" == e) return (M.marked = "property"), O();
                    }
                    function le(e, t) {
                        return "async" == e
                            ? ((M.marked = "property"), O(le))
                            : "variable" == e || "keyword" == M.style
                            ? ((M.marked = "property"), "get" == t || "set" == t ? O(ae) : (u && M.state.fatArrowAt == M.stream.start && (r = M.stream.match(/^\s*:\s*/, !1)) && (M.state.fatArrowAt = M.stream.pos + r[0].length), O(se)))
                            : "number" == e || "string" == e
                            ? ((M.marked = a ? "property" : M.style + " property"), O(se))
                            : "jsonld-keyword" == e
                            ? O(se)
                            : u && W(t)
                            ? ((M.marked = "keyword"), O(le))
                            : "[" == e
                            ? O(_, he, j("]"), se)
                            : "spread" == e
                            ? O(U, se)
                            : "*" == t
                            ? ((M.marked = "keyword"), O(le))
                            : ":" == e
                            ? T(se)
                            : void 0;
                        var r;
                    }
                    function ae(e) {
                        return "variable" != e ? T(se) : ((M.marked = "property"), O(He));
                    }
                    function se(e) {
                        return ":" == e ? O(U) : "(" == e ? T(He) : void 0;
                    }
                    function ue(e, t, r) {
                        function n(i, o) {
                            if (r ? r.indexOf(i) > -1 : "," == i) {
                                var l = M.state.lexical;
                                return (
                                    "call" == l.info && (l.pos = (l.pos || 0) + 1),
                                    O(function (r, n) {
                                        return r == t || n == t ? T() : T(e);
                                    }, n)
                                );
                            }
                            return i == t || o == t ? O() : r && r.indexOf(";") > -1 ? T(e) : O(j(t));
                        }
                        return function (r, i) {
                            return r == t || i == t ? O() : T(e, n);
                        };
                    }
                    function ce(e, t, r) {
                        for (var n = 3; n < arguments.length; n++) M.cc.push(arguments[n]);
                        return O(R(t, r), ue(e, t), B);
                    }
                    function fe(e) {
                        return "}" == e ? O() : T(V, fe);
                    }
                    function he(e, t) {
                        if (u) {
                            if (":" == e) return O(ve);
                            if ("?" == t) return O(he);
                        }
                    }
                    function de(e, t) {
                        if (u && (":" == e || "in" == t)) return O(ve);
                    }
                    function pe(e) {
                        if (u && ":" == e) return M.stream.match(/^\s*\w+\s+is\b/, !1) ? O(_, ge, ve) : O(ve);
                    }
                    function ge(e, t) {
                        if ("is" == t) return (M.marked = "keyword"), O();
                    }
                    function ve(e, t) {
                        return "keyof" == t || "typeof" == t || "infer" == t
                            ? ((M.marked = "keyword"), O("typeof" == t ? U : ve))
                            : "variable" == e || "void" == t
                            ? ((M.marked = "type"), O(we))
                            : "|" == t || "&" == t
                            ? O(ve)
                            : "string" == e || "number" == e || "atom" == e
                            ? O(we)
                            : "[" == e
                            ? O(R("]"), ue(ve, "]", ","), B, we)
                            : "{" == e
                            ? O(R("}"), ue(ye, "}", ",;"), B, we)
                            : "(" == e
                            ? O(ue(be, ")"), me, we)
                            : "<" == e
                            ? O(ue(ve, ">"), ve)
                            : void 0;
                    }
                    function me(e) {
                        if ("=>" == e) return O(ve);
                    }
                    function ye(e, t) {
                        return "variable" == e || "keyword" == M.style
                            ? ((M.marked = "property"), O(ye))
                            : "?" == t || "number" == e || "string" == e
                            ? O(ye)
                            : ":" == e
                            ? O(ve)
                            : "[" == e
                            ? O(j("variable"), de, j("]"), ye)
                            : "(" == e
                            ? T(Fe, ye)
                            : void 0;
                    }
                    function be(e, t) {
                        return ("variable" == e && M.stream.match(/^\s*[?:]/, !1)) || "?" == t ? O(be) : ":" == e ? O(ve) : "spread" == e ? O(be) : T(ve);
                    }
                    function we(e, t) {
                        return "<" == t
                            ? O(R(">"), ue(ve, ">"), B, we)
                            : "|" == t || "." == e || "&" == t
                            ? O(ve)
                            : "[" == e
                            ? O(ve, j("]"), we)
                            : "extends" == t || "implements" == t
                            ? ((M.marked = "keyword"), O(ve))
                            : "?" == t
                            ? O(ve, j(":"), ve)
                            : void 0;
                    }
                    function xe(e, t) {
                        if ("<" == t) return O(R(">"), ue(ve, ">"), B, we);
                    }
                    function Ce() {
                        return T(ve, ke);
                    }
                    function ke(e, t) {
                        if ("=" == t) return O(ve);
                    }
                    function Se(e, t) {
                        return "enum" == t ? ((M.marked = "keyword"), O(Ze)) : T(Le, he, Oe, Ne);
                    }
                    function Le(e, t) {
                        return u && W(t) ? ((M.marked = "keyword"), O(Le)) : "variable" == e ? (A(t), O()) : "spread" == e ? O(Le) : "[" == e ? ce(Te, "]") : "{" == e ? ce(Me, "}") : void 0;
                    }
                    function Me(e, t) {
                        return "variable" != e || M.stream.match(/^\s*:/, !1) ? ("variable" == e && (M.marked = "property"), "spread" == e ? O(Le) : "}" == e ? T() : "[" == e ? O(_, j("]"), j(":"), Me) : O(j(":"), Le, Oe)) : (A(t), O(Oe));
                    }
                    function Te() {
                        return T(Le, Oe);
                    }
                    function Oe(e, t) {
                        if ("=" == t) return O(U);
                    }
                    function Ne(e) {
                        if ("," == e) return O(Se);
                    }
                    function Ae(e, t) {
                        if ("keyword b" == e && "else" == t) return O(R("form", "else"), V, B);
                    }
                    function De(e, t) {
                        return "await" == t ? O(De) : "(" == e ? O(R(")"), We, B) : void 0;
                    }
                    function We(e) {
                        return "var" == e ? O(Se, Ee) : "variable" == e ? O(Ee) : T(Ee);
                    }
                    function Ee(e, t) {
                        return ")" == e ? O() : ";" == e ? O(Ee) : "in" == t || "of" == t ? ((M.marked = "keyword"), O(_, Ee)) : T(_, Ee);
                    }
                    function He(e, t) {
                        return "*" == t ? ((M.marked = "keyword"), O(He)) : "variable" == e ? (A(t), O(He)) : "(" == e ? O(P, R(")"), ue(Ie, ")"), B, pe, V, z) : u && "<" == t ? O(R(">"), ue(Ce, ">"), B, He) : void 0;
                    }
                    function Fe(e, t) {
                        return "*" == t ? ((M.marked = "keyword"), O(Fe)) : "variable" == e ? (A(t), O(Fe)) : "(" == e ? O(P, R(")"), ue(Ie, ")"), B, pe, z) : u && "<" == t ? O(R(">"), ue(Ce, ">"), B, Fe) : void 0;
                    }
                    function Pe(e, t) {
                        return "keyword" == e || "variable" == e ? ((M.marked = "type"), O(Pe)) : "<" == t ? O(R(">"), ue(Ce, ">"), B) : void 0;
                    }
                    function Ie(e, t) {
                        return "@" == t && O(_, Ie), "spread" == e ? O(Ie) : u && W(t) ? ((M.marked = "keyword"), O(Ie)) : u && "this" == e ? O(he, Oe) : T(Le, he, Oe);
                    }
                    function ze(e, t) {
                        return "variable" == e ? Re(e, t) : Be(e, t);
                    }
                    function Re(e, t) {
                        if ("variable" == e) return A(t), O(Be);
                    }
                    function Be(e, t) {
                        return "<" == t ? O(R(">"), ue(Ce, ">"), B, Be) : "extends" == t || "implements" == t || (u && "," == e) ? ("implements" == t && (M.marked = "keyword"), O(u ? ve : _, Be)) : "{" == e ? O(R("}"), je, B) : void 0;
                    }
                    function je(e, t) {
                        return "async" == e || ("variable" == e && ("static" == t || "get" == t || "set" == t || (u && W(t))) && M.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
                            ? ((M.marked = "keyword"), O(je))
                            : "variable" == e || "keyword" == M.style
                            ? ((M.marked = "property"), O(u ? Ve : He, je))
                            : "number" == e || "string" == e
                            ? O(u ? Ve : He, je)
                            : "[" == e
                            ? O(_, he, j("]"), u ? Ve : He, je)
                            : "*" == t
                            ? ((M.marked = "keyword"), O(je))
                            : u && "(" == e
                            ? T(Fe, je)
                            : ";" == e || "," == e
                            ? O(je)
                            : "}" == e
                            ? O()
                            : "@" == t
                            ? O(_, je)
                            : void 0;
                    }
                    function Ve(e, t) {
                        if ("?" == t) return O(Ve);
                        if (":" == e) return O(ve, Oe);
                        if ("=" == t) return O(U);
                        var r = M.state.lexical.prev,
                            n = r && "interface" == r.info;
                        return T(n ? Fe : He);
                    }
                    function Ge(e, t) {
                        return "*" == t ? ((M.marked = "keyword"), O(Ye, j(";"))) : "default" == t ? ((M.marked = "keyword"), O(_, j(";"))) : "{" == e ? O(ue(_e, "}"), Ye, j(";")) : T(V);
                    }
                    function _e(e, t) {
                        return "as" == t ? ((M.marked = "keyword"), O(j("variable"))) : "variable" == e ? T(U, _e) : void 0;
                    }
                    function Ue(e) {
                        return "string" == e ? O() : "(" == e ? T(_) : T($e, Ke, Ye);
                    }
                    function $e(e, t) {
                        return "{" == e ? ce($e, "}") : ("variable" == e && A(t), "*" == t && (M.marked = "keyword"), O(Xe));
                    }
                    function Ke(e) {
                        if ("," == e) return O($e, Ke);
                    }
                    function Xe(e, t) {
                        if ("as" == t) return (M.marked = "keyword"), O($e);
                    }
                    function Ye(e, t) {
                        if ("from" == t) return (M.marked = "keyword"), O(_);
                    }
                    function qe(e) {
                        return "]" == e ? O() : T(ue(U, "]"));
                    }
                    function Ze() {
                        return T(R("form"), Le, j("{"), R("}"), ue(Je, "}"), B, B);
                    }
                    function Je() {
                        return T(Le, Oe);
                    }
                    function Qe(e, t) {
                        return "operator" == e.lastType || "," == e.lastType || h.test(t.charAt(0)) || /[,.]/.test(t.charAt(0));
                    }
                    function et(e, t, r) {
                        return (t.tokenize == v && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)) || ("quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0))));
                    }
                    return (
                        (z.lex = !0),
                        (B.lex = !0),
                        {
                            startState: function (e) {
                                var t = { tokenize: v, lastType: "sof", cc: [], lexical: new k((e || 0) - o, 0, "block", !1), localVars: r.localVars, context: r.localVars && new E(null, null, !1), indented: e || 0 };
                                return r.globalVars && "object" == typeof r.globalVars && (t.globalVars = r.globalVars), t;
                            },
                            token: function (e, t) {
                                if ((e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), (t.indented = e.indentation()), x(e, t)), t.tokenize != y && e.eatSpace())) return null;
                                var r = t.tokenize(e, t);
                                return "comment" == n ? r : ((t.lastType = "operator" != n || ("++" != i && "--" != i) ? n : "incdec"), L(t, r, n, i, e));
                            },
                            indent: function (t, n) {
                                if (t.tokenize == y) return e.Pass;
                                if (t.tokenize != v) return 0;
                                var i,
                                    a = n && n.charAt(0),
                                    s = t.lexical;
                                if (!/^\s*else\b/.test(n))
                                    for (var u = t.cc.length - 1; u >= 0; --u) {
                                        var c = t.cc[u];
                                        if (c == B) s = s.prev;
                                        else if (c != Ae) break;
                                    }
                                while (("stat" == s.type || "form" == s.type) && ("}" == a || ((i = t.cc[t.cc.length - 1]) && (i == Y || i == q) && !/^[,\.=+\-*:?[\(]/.test(n)))) s = s.prev;
                                l && ")" == s.type && "stat" == s.prev.type && (s = s.prev);
                                var f = s.type,
                                    h = a == f;
                                return "vardef" == f
                                    ? s.indented + ("operator" == t.lastType || "," == t.lastType ? s.info.length + 1 : 0)
                                    : "form" == f && "{" == a
                                    ? s.indented
                                    : "form" == f
                                    ? s.indented + o
                                    : "stat" == f
                                    ? s.indented + (Qe(t, n) ? l || o : 0)
                                    : "switch" != s.info || h || 0 == r.doubleIndentSwitch
                                    ? s.align
                                        ? s.column + (h ? 0 : 1)
                                        : s.indented + (h ? 0 : o)
                                    : s.indented + (/^(?:case|default)\b/.test(n) ? o : 2 * o);
                            },
                            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                            blockCommentStart: s ? null : "/*",
                            blockCommentEnd: s ? null : "*/",
                            blockCommentContinue: s ? null : " * ",
                            lineComment: s ? null : "//",
                            fold: "brace",
                            closeBrackets: "()[]{}''\"\"``",
                            helperType: s ? "json" : "javascript",
                            jsonldMode: a,
                            jsonMode: s,
                            expressionAllowed: et,
                            skipExpression: function (e) {
                                var t = e.cc[e.cc.length - 1];
                                (t != _ && t != U) || e.cc.pop();
                            },
                        }
                    );
                }),
                    e.registerHelper("wordChars", "javascript", /[\w$]/),
                    e.defineMIME("text/javascript", "javascript"),
                    e.defineMIME("text/ecmascript", "javascript"),
                    e.defineMIME("application/javascript", "javascript"),
                    e.defineMIME("application/x-javascript", "javascript"),
                    e.defineMIME("application/ecmascript", "javascript"),
                    e.defineMIME("application/json", { name: "javascript", json: !0 }),
                    e.defineMIME("application/x-json", { name: "javascript", json: !0 }),
                    e.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }),
                    e.defineMIME("text/typescript", { name: "javascript", typescript: !0 }),
                    e.defineMIME("application/typescript", { name: "javascript", typescript: !0 });
            });
        },
    },
]);
