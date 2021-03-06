!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
            ? t(e, !0)
            : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e);
            })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function n(e, t) {
        var n = (t = t || te).createElement("script");
        (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
    }
    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = de.type(e);
        return "function" !== n && !de.isWindow(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function o(e, t, n) {
        return de.isFunction(t)
            ? de.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n;
            })
            : t.nodeType
                ? de.grep(e, function (e) {
                    return (e === t) !== n;
                })
                : "string" != typeof t
                    ? de.grep(e, function (e) {
                        return ae.call(t, e) > -1 !== n;
                    })
                    : ke.test(t)
                        ? de.filter(t, e, n)
                        : ((t = de.filter(t, e)),
                            de.grep(e, function (e) {
                                return ae.call(t, e) > -1 !== n && 1 === e.nodeType;
                            }));
    }
    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e;
    }
    function s(e) {
        var t = {};
        return (
            de.each(e.match(Ee) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    function c(e) {
        return e;
    }
    function l(e) {
        throw e;
    }
    function u(e, t, n, i) {
        var r;
        try {
            e && de.isFunction((r = e.promise)) ? r.call(e).done(t).fail(n) : e && de.isFunction((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    function h() {
        te.removeEventListener("DOMContentLoaded", h), e.removeEventListener("load", h), de.ready();
    }
    function p() {
        this.expando = de.expando + p.uid++;
    }
    function d(e) {
        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e));
    }
    function f(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (((i = "data-" + t.replace(Fe, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                try {
                    n = d(n);
                } catch (e) { }
                De.set(e, t, n);
            } else n = void 0;
        return n;
    }
    function m(e, t, n, i) {
        var r,
            o = 1,
            a = 20,
            s = i
                ? function () {
                    return i.cur();
                }
                : function () {
                    return de.css(e, t, "");
                },
            c = s(),
            l = (n && n[3]) || (de.cssNumber[t] ? "" : "px"),
            u = (de.cssNumber[t] || ("px" !== l && +c)) && Oe.exec(de.css(e, t));
        if (u && u[3] !== l) {
            (l = l || u[3]), (n = n || []), (u = +c || 1);
            do {
                (u /= o = o || ".5"), de.style(e, t, u + l);
            } while (o !== (o = s() / c) && 1 !== o && --a);
        }
        return n && ((u = +u || +c || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = l), (i.start = u), (i.end = r))), r;
    }
    function v(e) {
        var t,
            n = e.ownerDocument,
            i = e.nodeName,
            r = $e[i];
        return r || ((t = n.body.appendChild(n.createElement(i))), (r = de.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), ($e[i] = r), r);
    }
    function g(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
            (i = e[o]).style &&
                ((n = i.style.display),
                    t ? ("none" === n && ((r[o] = He.get(i, "display") || null), r[o] || (i.style.display = "")), "" === i.style.display && _e(i) && (r[o] = v(i))) : "none" !== n && ((r[o] = "none"), He.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
    }
    function y(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && r(e, t)) ? de.merge([e], n) : n;
    }
    function b(e, t) {
        for (var n = 0, i = e.length; n < i; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"));
    }
    function x(e, t, n, i, r) {
        for (var o, a, s, c, l, u, h = t.createDocumentFragment(), p = [], d = 0, f = e.length; d < f; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === de.type(o)) de.merge(p, o.nodeType ? [o] : o);
                else if (Xe.test(o)) {
                    for (a = a || h.appendChild(t.createElement("div")), s = (Ve.exec(o) || ["", ""])[1].toLowerCase(), c = Ue[s] || Ue._default, a.innerHTML = c[1] + de.htmlPrefilter(o) + c[2], u = c[0]; u--;) a = a.lastChild;
                    de.merge(p, a.childNodes), ((a = h.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        for (h.textContent = "", d = 0; (o = p[d++]);)
            if (i && de.inArray(o, i) > -1) r && r.push(o);
            else if (((l = de.contains(o.ownerDocument, o)), (a = y(h.appendChild(o), "script")), l && b(a), n)) for (u = 0; (o = a[u++]);) We.test(o.type || "") && n.push(o);
        return h;
    }
    function w() {
        return !0;
    }
    function z() {
        return !1;
    }
    function k() {
        try {
            return te.activeElement;
        } catch (e) { }
    }
    function M(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((i = i || n), (n = void 0));
            for (s in t) M(e, s, n, i, t[s], o);
            return e;
        }
        if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = z;
        else if (!r) return e;
        return (
            1 === o &&
            ((a = r),
                ((r = function (e) {
                    return de().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = de.guid++))),
            e.each(function () {
                de.event.add(this, t, r, i, n);
            })
        );
    }
    function S(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? de(">tbody", e)[0] || e : e;
    }
    function T(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function C(e) {
        var t = tt.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function E(e, t) {
        var n, i, r, o, a, s, c, l;
        if (1 === t.nodeType) {
            if (He.hasData(e) && ((o = He.access(e)), (a = He.set(t, o)), (l = o.events))) {
                delete a.handle, (a.events = {});
                for (r in l) for (n = 0, i = l[r].length; n < i; n++) de.event.add(t, r, l[r][n]);
            }
            De.hasData(e) && ((s = De.access(e)), (c = de.extend({}, s)), De.set(t, c));
        }
    }
    function A(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Re.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }
    function N(e, t, i, r) {
        t = re.apply([], t);
        var o,
            a,
            s,
            c,
            l,
            u,
            h = 0,
            p = e.length,
            d = p - 1,
            f = t[0],
            m = de.isFunction(f);
        if (m || (p > 1 && "string" == typeof f && !pe.checkClone && et.test(f)))
            return e.each(function (n) {
                var o = e.eq(n);
                m && (t[0] = f.call(this, n, o.html())), N(o, t, i, r);
            });
        if (p && ((o = x(t, e[0].ownerDocument, !1, e, r)), (a = o.firstChild), 1 === o.childNodes.length && (o = a), a || r)) {
            for (c = (s = de.map(y(o, "script"), T)).length; h < p; h++) (l = o), h !== d && ((l = de.clone(l, !0, !0)), c && de.merge(s, y(l, "script"))), i.call(e[h], l, h);
            if (c)
                for (u = s[s.length - 1].ownerDocument, de.map(s, C), h = 0; h < c; h++)
                    (l = s[h]), We.test(l.type || "") && !He.access(l, "globalEval") && de.contains(u, l) && (l.src ? de._evalUrl && de._evalUrl(l.src) : n(l.textContent.replace(nt, ""), u));
        }
        return e;
    }
    function j(e, t, n) {
        for (var i, r = t ? de.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || de.cleanData(y(i)), i.parentNode && (n && de.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    function L(e, t, n) {
        var i,
            r,
            o,
            a,
            s = e.style;
        return (
            (n = n || ot(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) || de.contains(e.ownerDocument, e) || (a = de.style(e, t)),
                !pe.pixelMarginRight() && rt.test(a) && it.test(t) && ((i = s.width), (r = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = i), (s.minWidth = r), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function H(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    function D(e) {
        if (e in ht) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ut.length; n--;) if ((e = ut[n] + t) in ht) return e;
    }
    function P(e) {
        var t = de.cssProps[e];
        return t || (t = de.cssProps[e] = D(e) || e), t;
    }
    function F(e, t, n) {
        var i = Oe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function B(e, t, n, i, r) {
        var o,
            a = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === n && (a += de.css(e, n + qe[o], !0, r)),
                i
                    ? ("content" === n && (a -= de.css(e, "padding" + qe[o], !0, r)), "margin" !== n && (a -= de.css(e, "border" + qe[o] + "Width", !0, r)))
                    : ((a += de.css(e, "padding" + qe[o], !0, r)), "padding" !== n && (a += de.css(e, "border" + qe[o] + "Width", !0, r)));
        return a;
    }
    function O(e, t, n) {
        var i,
            r = ot(e),
            o = L(e, t, r),
            a = "border-box" === de.css(e, "boxSizing", !1, r);
        return rt.test(o)
            ? o
            : ((i = a && (pe.boxSizingReliable() || o === e.style[t])), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + B(e, t, n || (a ? "border" : "content"), i, r) + "px");
    }
    function q(e, t, n, i, r) {
        return new q.prototype.init(e, t, n, i, r);
    }
    function _() {
        dt && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(_) : e.setTimeout(_, de.fx.interval), de.fx.tick());
    }
    function I() {
        return (
            e.setTimeout(function () {
                pt = void 0;
            }),
            (pt = de.now())
        );
    }
    function $(e, t) {
        var n,
            i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = qe[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function R(e, t, n) {
        for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, a = r.length; o < a; o++) if ((i = r[o].call(n, t, e))) return i;
    }
    function V(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (((i = de.camelCase(n)), (r = t[i]), (o = e[n]), Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])), n !== i && ((e[i] = o), delete e[n]), (a = de.cssHooks[i]) && "expand" in a)) {
                (o = a.expand(o)), delete e[i];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = r));
            } else t[i] = r;
    }
    function W(e, t, n) {
        var i,
            r,
            o = 0,
            a = W.prefilters.length,
            s = de.Deferred().always(function () {
                delete c.elem;
            }),
            c = function () {
                if (r) return !1;
                for (var t = pt || I(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(i);
                return s.notifyWith(e, [l, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
            },
            l = s.promise({
                elem: e,
                props: de.extend({}, t),
                opts: de.extend(!0, { specialEasing: {}, easing: de.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || I(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = de.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i;
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                },
            }),
            u = l.props;
        for (V(u, l.opts.specialEasing); o < a; o++) if ((i = W.prefilters[o].call(l, e, u, l.opts))) return de.isFunction(i.stop) && (de._queueHooks(l.elem, l.opts.queue).stop = de.proxy(i.stop, i)), i;
        return (
            de.map(u, R, l),
            de.isFunction(l.opts.start) && l.opts.start.call(e, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            de.fx.timer(de.extend(c, { elem: e, anim: l, queue: l.opts.queue })),
            l
        );
    }
    function U(e) {
        return (e.match(Ee) || []).join(" ");
    }
    function X(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function J(e, t, n, i) {
        var r;
        if (Array.isArray(t))
            de.each(t, function (t, r) {
                n || St.test(e) ? i(e, r) : J(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
            });
        else if (n || "object" !== de.type(t)) i(e, t);
        else for (r in t) J(e + "[" + r + "]", t[r], n, i);
    }
    function G(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
                r = 0,
                o = t.toLowerCase().match(Ee) || [];
            if (de.isFunction(n)) for (; (i = o[r++]);) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }
    function Y(e, t, n, i) {
        function r(s) {
            var c;
            return (
                (o[s] = !0),
                de.each(e[s] || [], function (e, s) {
                    var l = s(t, n, i);
                    return "string" != typeof l || a || o[l] ? (a ? !(c = l) : void 0) : (t.dataTypes.unshift(l), r(l), !1);
                }),
                c
            );
        }
        var o = {},
            a = e === Bt;
        return r(t.dataTypes[0]) || (!o["*"] && r("*"));
    }
    function Q(e, t) {
        var n,
            i,
            r = de.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && de.extend(!0, e, i), e;
    }
    function K(e, t, n) {
        for (var i, r, o, a, s = e.contents, c = e.dataTypes; "*" === c[0];) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    c.unshift(r);
                    break;
                }
        if (c[0] in n) o = c[0];
        else {
            for (r in n) {
                if (!c[0] || e.converters[r + " " + c[0]]) {
                    o = r;
                    break;
                }
                a || (a = r);
            }
            o = o || a;
        }
        if (o) return o !== c[0] && c.unshift(o), n[o];
    }
    function Z(e, t, n, i) {
        var r,
            o,
            a,
            s,
            c,
            l = {},
            u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (c = o), (o = u.shift())))
                if ("*" === o) o = c;
                else if ("*" !== c && c !== o) {
                    if (!(a = l[c + " " + o] || l["* " + o]))
                        for (r in l)
                            if ((s = r.split(" "))[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? (a = l[r]) : !0 !== l[r] && ((o = s[0]), u.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e.throws) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + c + " to " + o };
                            }
                }
        return { state: "success", data: t };
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        ie = ee.slice,
        re = ee.concat,
        oe = ee.push,
        ae = ee.indexOf,
        se = {},
        ce = se.toString,
        le = se.hasOwnProperty,
        ue = le.toString,
        he = ue.call(Object),
        pe = {},
        de = function (e, t) {
            return new de.fn.init(e, t);
        },
        fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ve = /-([a-z])/g,
        ge = function (e, t) {
            return t.toUpperCase();
        };
    (de.fn = de.prototype = {
        jquery: "3.2.1",
        constructor: de,
        length: 0,
        toArray: function () {
            return ie.call(this);
        },
        get: function (e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = de.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return de.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                de.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(ie.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice,
    }),
        (de.extend = de.fn.extend = function () {
            var e,
                t,
                n,
                i,
                r,
                o,
                a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || de.isFunction(a) || (a = {}), s === c && ((a = this), s--); s < c; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (n = a[t]),
                            a !== (i = e[t]) &&
                            (l && i && (de.isPlainObject(i) || (r = Array.isArray(i)))
                                ? (r ? ((r = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && de.isPlainObject(n) ? n : {}), (a[t] = de.extend(l, o, i)))
                                : void 0 !== i && (a[t] = i));
            return a;
        }),
        de.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () { },
            isFunction: function (e) {
                return "function" === de.type(e);
            },
            isWindow: function (e) {
                return null != e && e === e.window;
            },
            isNumeric: function (e) {
                var t = de.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            },
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== ce.call(e)) && (!(t = ne(e)) || ("function" == typeof (n = le.call(t, "constructor") && t.constructor) && ue.call(n) === he));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ce.call(e)] || "object" : typeof e;
            },
            globalEval: function (e) {
                n(e);
            },
            camelCase: function (e) {
                return e.replace(me, "ms-").replace(ve, ge);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(fe, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : ae.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return (e.length = r), e;
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    o,
                    a = 0,
                    s = [];
                if (i(e)) for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
                else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
                return re.apply([], s);
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), de.isFunction(e)))
                    return (
                        (i = ie.call(arguments, 2)),
                        (r = function () {
                            return e.apply(t || this, i.concat(ie.call(arguments)));
                        }),
                        (r.guid = e.guid = e.guid || de.guid++),
                        r
                    );
            },
            now: Date.now,
            support: pe,
        }),
        "function" == typeof Symbol && (de.fn[Symbol.iterator] = ee[Symbol.iterator]),
        de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            se["[object " + t + "]"] = t.toLowerCase();
        });
    var ye = (function (e) {
        function t(e, t, n, i) {
            var r,
                o,
                a,
                s,
                c,
                u,
                p,
                d = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (((n = n || []), "string" != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))) return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== j && N(t), (t = t || j), H)) {
                if (11 !== f && (c = me.exec(e)))
                    if ((r = c[1])) {
                        if (9 === f) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n;
                        } else if (d && (a = d.getElementById(r)) && B(t, a) && a.id === r) return n.push(a), n;
                    } else {
                        if (c[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(r)), n;
                    }
                if (x.qsa && !V[e + " "] && (!D || !D.test(e))) {
                    if (1 !== f) (d = t), (p = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? (s = s.replace(be, xe)) : t.setAttribute("id", (s = O)), o = (u = M(e)).length; o--;) u[o] = "#" + s + " " + h(u[o]);
                        (p = u.join(",")), (d = (ve.test(e) && l(t.parentNode)) || t);
                    }
                    if (p)
                        try {
                            return Y.apply(n, d.querySelectorAll(p)), n;
                        } catch (e) {
                        } finally {
                            s === O && t.removeAttribute("id");
                        }
                }
            }
            return T(e.replace(oe, "$1"), t, n, i);
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], (e[n + " "] = i);
            }
            var t = [];
            return e;
        }
        function i(e) {
            return (e[O] = !0), e;
        }
        function r(e) {
            var t = j.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t;
        }
        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling);) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function s(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && ze(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function c(e) {
            return i(function (t) {
                return (
                    (t = +t),
                    i(function (n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                    })
                );
            });
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function u() { }
        function h(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function p(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = I++;
            return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]);) if (1 === t.nodeType || a) return e(t, n, r);
                    return !1;
                }
                : function (t, n, c) {
                    var l,
                        u,
                        h,
                        p = [_, s];
                    if (c) {
                        for (; (t = t[i]);) if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                    } else
                        for (; (t = t[i]);)
                            if (1 === t.nodeType || a)
                                if (((h = t[O] || (t[O] = {})), (u = h[t.uniqueID] || (h[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                else {
                                    if ((l = u[o]) && l[0] === _ && l[1] === s) return (p[2] = l[2]);
                                    if (((u[o] = p), (p[2] = e(t, n, c)))) return !0;
                                }
                    return !1;
                };
        }
        function d(e) {
            return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                    return !0;
                }
                : e[0];
        }
        function f(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i;
        }
        function m(e, t, n, i, r) {
            for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++) (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function v(e, t, n, r, o, a) {
            return (
                r && !r[O] && (r = v(r)),
                o && !o[O] && (o = v(o, a)),
                i(function (i, a, s, c) {
                    var l,
                        u,
                        h,
                        p = [],
                        d = [],
                        v = a.length,
                        g = i || f(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!i && t) ? g : m(g, p, e, s, c),
                        b = n ? (o || (i ? e : v || r) ? [] : a) : y;
                    if ((n && n(y, b, s, c), r)) for (l = m(b, d), r(l, [], s, c), u = l.length; u--;) (h = l[u]) && (b[d[u]] = !(y[d[u]] = h));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], u = b.length; u--;) (h = b[u]) && l.push((y[u] = h));
                                o(null, (b = []), l, c);
                            }
                            for (u = b.length; u--;) (h = b[u]) && (l = o ? K(i, h) : p[u]) > -1 && (i[l] = !(a[l] = h));
                        }
                    } else (b = m(b === a ? b.splice(v, b.length) : b)), o ? o(null, a, b, c) : Y.apply(a, b);
                })
            );
        }
        function g(e) {
            for (
                var t,
                n,
                i,
                r = e.length,
                o = w.relative[e[0].type],
                a = o || w.relative[" "],
                s = o ? 1 : 0,
                c = p(
                    function (e) {
                        return e === t;
                    },
                    a,
                    !0
                ),
                l = p(
                    function (e) {
                        return K(t, e) > -1;
                    },
                    a,
                    !0
                ),
                u = [
                    function (e, n, i) {
                        var r = (!o && (i || n !== C)) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
                        return (t = null), r;
                    },
                ];
                s < r;
                s++
            )
                if ((n = w.relative[e[s].type])) u = [p(d(u), n)];
                else {
                    if ((n = w.filter[e[s].type].apply(null, e[s].matches))[O]) {
                        for (i = ++s; i < r && !w.relative[e[i].type]; i++);
                        return v(s > 1 && d(u), s > 1 && h(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(oe, "$1"), n, s < i && g(e.slice(s, i)), i < r && g((e = e.slice(i))), i < r && h(e));
                    }
                    u.push(n);
                }
            return d(u);
        }
        function y(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function (i, a, s, c, l) {
                    var u,
                        h,
                        p,
                        d = 0,
                        f = "0",
                        v = i && [],
                        g = [],
                        y = C,
                        b = i || (o && w.find.TAG("*", l)),
                        x = (_ += null == y ? 1 : Math.random() || 0.1),
                        z = b.length;
                    for (l && (C = a === j || a || l); f !== z && null != (u = b[f]); f++) {
                        if (o && u) {
                            for (h = 0, a || u.ownerDocument === j || (N(u), (s = !H)); (p = e[h++]);)
                                if (p(u, a || j, s)) {
                                    c.push(u);
                                    break;
                                }
                            l && (_ = x);
                        }
                        r && ((u = !p && u) && d--, i && v.push(u));
                    }
                    if (((d += f), r && f !== d)) {
                        for (h = 0; (p = n[h++]);) p(v, g, a, s);
                        if (i) {
                            if (d > 0) for (; f--;) v[f] || g[f] || (g[f] = J.call(c));
                            g = m(g);
                        }
                        Y.apply(c, g), l && !i && g.length > 0 && d + n.length > 1 && t.uniqueSort(c);
                    }
                    return l && ((_ = x), (C = y)), v;
                };
            return r ? i(a) : a;
        }
        var b,
            x,
            w,
            z,
            k,
            M,
            S,
            T,
            C,
            E,
            A,
            N,
            j,
            L,
            H,
            D,
            P,
            F,
            B,
            O = "sizzle" + 1 * new Date(),
            q = e.document,
            _ = 0,
            I = 0,
            $ = n(),
            R = n(),
            V = n(),
            W = function (e, t) {
                return e === t && (A = !0), 0;
            },
            U = {}.hasOwnProperty,
            X = [],
            J = X.pop,
            G = X.push,
            Y = X.push,
            Q = X.slice,
            K = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1;
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            le = new RegExp(ie),
            ue = new RegExp("^" + te + "$"),
            he = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i"),
            },
            pe = /^(?:input|select|textarea|button)$/i,
            de = /^h\d$/i,
            fe = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xe = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            we = function () {
                N();
            },
            ze = p(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            Y.apply((X = Q.call(q.childNodes)), q.childNodes), X[q.childNodes.length].nodeType;
        } catch (e) {
            Y = {
                apply: X.length
                    ? function (e, t) {
                        G.apply(e, Q.call(t));
                    }
                    : function (e, t) {
                        for (var n = e.length, i = 0; (e[n++] = t[i++]););
                        e.length = n - 1;
                    },
            };
        }
        (x = t.support = {}),
            (k = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (N = t.setDocument = function (e) {
                var t,
                    n,
                    i = e ? e.ownerDocument || e : q;
                return i !== j && 9 === i.nodeType && i.documentElement
                    ? ((j = i),
                        (L = j.documentElement),
                        (H = !k(j)),
                        q !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)),
                        (x.attributes = r(function (e) {
                            return (e.className = "i"), !e.getAttribute("className");
                        })),
                        (x.getElementsByTagName = r(function (e) {
                            return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length;
                        })),
                        (x.getElementsByClassName = fe.test(j.getElementsByClassName)),
                        (x.getById = r(function (e) {
                            return (L.appendChild(e).id = O), !j.getElementsByName || !j.getElementsByName(O).length;
                        })),
                        x.getById
                            ? ((w.filter.ID = function (e) {
                                var t = e.replace(ge, ye);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                                (w.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && H) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                }))
                            : ((w.filter.ID = function (e) {
                                var t = e.replace(ge, ye);
                                return function (e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            }),
                                (w.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && H) {
                                        var n,
                                            i,
                                            r,
                                            o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            for (r = t.getElementsByName(e), i = 0; (o = r[i++]);) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        }
                                        return [];
                                    }
                                })),
                        (w.find.TAG = x.getElementsByTagName
                            ? function (e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
                            }
                            : function (e, t) {
                                var n,
                                    i = [],
                                    r = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; (n = o[r++]);) 1 === n.nodeType && i.push(n);
                                    return i;
                                }
                                return o;
                            }),
                        (w.find.CLASS =
                            x.getElementsByClassName &&
                            function (e, t) {
                                if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e);
                            }),
                        (P = []),
                        (D = []),
                        (x.qsa = fe.test(j.querySelectorAll)) &&
                        (r(function (e) {
                            (L.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ee + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || D.push("\\[" + ee + "*(?:value|" + Z + ")"),
                                e.querySelectorAll("[id~=" + O + "-]").length || D.push("~="),
                                e.querySelectorAll(":checked").length || D.push(":checked"),
                                e.querySelectorAll("a#" + O + "+*").length || D.push(".#.+[+~]");
                        }),
                            r(function (e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = j.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length && D.push("name" + ee + "*[*^$|!~]?="),
                                    2 !== e.querySelectorAll(":enabled").length && D.push(":enabled", ":disabled"),
                                    (L.appendChild(e).disabled = !0),
                                    2 !== e.querySelectorAll(":disabled").length && D.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    D.push(",.*:");
                            })),
                        (x.matchesSelector = fe.test((F = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector))) &&
                        r(function (e) {
                            (x.disconnectedMatch = F.call(e, "*")), F.call(e, "[s!='']:x"), P.push("!=", ie);
                        }),
                        (D = D.length && new RegExp(D.join("|"))),
                        (P = P.length && new RegExp(P.join("|"))),
                        (t = fe.test(L.compareDocumentPosition)),
                        (B =
                            t || fe.test(L.contains)
                                ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        i = t && t.parentNode;
                                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                }
                                : function (e, t) {
                                    if (t) for (; (t = t.parentNode);) if (t === e) return !0;
                                    return !1;
                                }),
                        (W = t
                            ? function (e, t) {
                                if (e === t) return (A = !0), 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    n ||
                                    (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!x.sortDetached && t.compareDocumentPosition(e) === n)
                                        ? e === j || (e.ownerDocument === q && B(q, e))
                                            ? -1
                                            : t === j || (t.ownerDocument === q && B(q, t))
                                                ? 1
                                                : E
                                                    ? K(E, e) - K(E, t)
                                                    : 0
                                        : 4 & n
                                            ? -1
                                            : 1)
                                );
                            }
                            : function (e, t) {
                                if (e === t) return (A = !0), 0;
                                var n,
                                    i = 0,
                                    r = e.parentNode,
                                    o = t.parentNode,
                                    s = [e],
                                    c = [t];
                                if (!r || !o) return e === j ? -1 : t === j ? 1 : r ? -1 : o ? 1 : E ? K(E, e) - K(E, t) : 0;
                                if (r === o) return a(e, t);
                                for (n = e; (n = n.parentNode);) s.unshift(n);
                                for (n = t; (n = n.parentNode);) c.unshift(n);
                                for (; s[i] === c[i];) i++;
                                return i ? a(s[i], c[i]) : s[i] === q ? -1 : c[i] === q ? 1 : 0;
                            }),
                        j)
                    : j;
            }),
            (t.matches = function (e, n) {
                return t(e, null, null, n);
            }),
            (t.matchesSelector = function (e, n) {
                if (((e.ownerDocument || e) !== j && N(e), (n = n.replace(ce, "='$1']")), x.matchesSelector && H && !V[n + " "] && (!P || !P.test(n)) && (!D || !D.test(n))))
                    try {
                        var i = F.call(e, n);
                        if (i || x.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                    } catch (e) { }
                return t(n, j, null, [e]).length > 0;
            }),
            (t.contains = function (e, t) {
                return (e.ownerDocument || e) !== j && N(e), B(e, t);
            }),
            (t.attr = function (e, t) {
                (e.ownerDocument || e) !== j && N(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                return void 0 !== i ? i : x.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
            }),
            (t.escape = function (e) {
                return (e + "").replace(be, xe);
            }),
            (t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function (e) {
                var t,
                    n = [],
                    i = 0,
                    r = 0;
                if (((A = !x.detectDuplicates), (E = !x.sortStable && e.slice(0)), e.sort(W), A)) {
                    for (; (t = e[r++]);) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1);
                }
                return (E = null), e;
            }),
            (z = t.getText = function (e) {
                var t,
                    n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += z(e);
                    } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[i++]);) n += z(t);
                return n;
            }),
            ((w = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(ge, ye)), (e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ye)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && t.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return he.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && le.test(n) && (t = M(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ge, ye).toLowerCase();
                        return "*" === e
                            ? function () {
                                return !0;
                            }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                    },
                    CLASS: function (e) {
                        var t = $[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                                $(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (e, n, i) {
                        return function (r) {
                            var o = t.attr(r, e);
                            return null == o
                                ? "!=" === n
                                : !n ||
                                ((o += ""),
                                    "=" === n
                                        ? o === i
                                        : "!=" === n
                                            ? o !== i
                                            : "^=" === n
                                                ? i && 0 === o.indexOf(i)
                                                : "*=" === n
                                                    ? i && o.indexOf(i) > -1
                                                    : "$=" === n
                                                        ? i && o.slice(-i.length) === i
                                                        : "~=" === n
                                                            ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1
                                                            : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"));
                        };
                    },
                    CHILD: function (e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r
                            ? function (e) {
                                return !!e.parentNode;
                            }
                            : function (t, n, c) {
                                var l,
                                    u,
                                    h,
                                    p,
                                    d,
                                    f,
                                    m = o !== a ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    g = s && t.nodeName.toLowerCase(),
                                    y = !c && !s,
                                    b = !1;
                                if (v) {
                                    if (o) {
                                        for (; m;) {
                                            for (p = t; (p = p[m]);) if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                            f = m = "only" === e && !f && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((f = [a ? v.firstChild : v.lastChild]), a && y)) {
                                        for (
                                            b = (d = (l = (u = (h = (p = v)[O] || (p[O] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[e] || [])[0] === _ && l[1]) && l[2], p = d && v.childNodes[d];
                                            (p = (++d && p && p[m]) || (b = d = 0) || f.pop());

                                        )
                                            if (1 === p.nodeType && ++b && p === t) {
                                                u[e] = [_, d, b];
                                                break;
                                            }
                                    } else if ((y && (b = d = (l = (u = (h = (p = t)[O] || (p[O] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[e] || [])[0] === _ && l[1]), !1 === b))
                                        for (
                                            ;
                                            (p = (++d && p && p[m]) || (b = d = 0) || f.pop()) &&
                                            ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((u = (h = p[O] || (p[O] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[e] = [_, b]), p !== t));

                                        );
                                    return (b -= r) === i || (b % i == 0 && b / i >= 0);
                                }
                            };
                    },
                    PSEUDO: function (e, n) {
                        var r,
                            o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[O]
                            ? o(n)
                            : o.length > 1
                                ? ((r = [e, e, "", n]),
                                    w.setFilters.hasOwnProperty(e.toLowerCase())
                                        ? i(function (e, t) {
                                            for (var i, r = o(e, n), a = r.length; a--;) e[(i = K(e, r[a]))] = !(t[i] = r[a]);
                                        })
                                        : function (e) {
                                            return o(e, 0, r);
                                        })
                                : o;
                    },
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(oe, "$1"));
                        return r[O]
                            ? i(function (e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o));
                            })
                            : function (e, i, o) {
                                return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                            };
                    }),
                    has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0;
                        };
                    }),
                    contains: i(function (e) {
                        return (
                            (e = e.replace(ge, ye)),
                            function (t) {
                                return (t.textContent || t.innerText || z(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: i(function (e) {
                        return (
                            ue.test(e || "") || t.error("unsupported lang: " + e),
                            (e = e.replace(ge, ye).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if ((n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === L;
                    },
                    focus: function (e) {
                        return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !w.pseudos.empty(e);
                    },
                    header: function (e) {
                        return de.test(e.nodeName);
                    },
                    input: function (e) {
                        return pe.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: c(function () {
                        return [0];
                    }),
                    last: c(function (e, t) {
                        return [t - 1];
                    }),
                    eq: c(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: c(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: c(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: c(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e;
                    }),
                    gt: c(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e;
                    }),
                },
            }).pseudos.nth = w.pseudos.eq);
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            w.pseudos[b] = (function (e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
            })(b);
        for (b in { submit: !0, reset: !0 })
            w.pseudos[b] = (function (e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e;
                };
            })(b);
        return (
            (u.prototype = w.filters = w.pseudos),
            (w.setFilters = new u()),
            (M = t.tokenize = function (e, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    c,
                    l,
                    u = R[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, c = [], l = w.preFilter; s;) {
                    (i && !(r = ae.exec(s))) || (r && (s = s.slice(r[0].length) || s), c.push((o = []))), (i = !1), (r = se.exec(s)) && ((i = r.shift()), o.push({ value: i, type: r[0].replace(oe, " ") }), (s = s.slice(i.length)));
                    for (a in w.filter) !(r = he[a].exec(s)) || (l[a] && !(r = l[a](r))) || ((i = r.shift()), o.push({ value: i, type: a, matches: r }), (s = s.slice(i.length)));
                    if (!i) break;
                }
                return n ? s.length : s ? t.error(e) : R(e, c).slice(0);
            }),
            (S = t.compile = function (e, t) {
                var n,
                    i = [],
                    r = [],
                    o = V[e + " "];
                if (!o) {
                    for (t || (t = M(e)), n = t.length; n--;) (o = g(t[n]))[O] ? i.push(o) : r.push(o);
                    (o = V(e, y(r, i))).selector = e;
                }
                return o;
            }),
            (T = t.select = function (e, t, n, i) {
                var r,
                    o,
                    a,
                    s,
                    c,
                    u = "function" == typeof e && e,
                    p = !i && M((e = u.selector || e));
                if (((n = n || []), 1 === p.length)) {
                    if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
                        if (!(t = (w.find.ID(a.matches[0].replace(ge, ye), t) || [])[0])) return n;
                        u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                    }
                    for (r = he.needsContext.test(e) ? 0 : o.length; r-- && ((a = o[r]), !w.relative[(s = a.type)]);)
                        if ((c = w.find[s]) && (i = c(a.matches[0].replace(ge, ye), (ve.test(o[0].type) && l(t.parentNode)) || t))) {
                            if ((o.splice(r, 1), !(e = i.length && h(o)))) return Y.apply(n, i), n;
                            break;
                        }
                }
                return (u || S(e, p))(i, t, !H, n, !t || (ve.test(e) && l(t.parentNode)) || t), n;
            }),
            (x.sortStable = O.split("").sort(W).join("") === O),
            (x.detectDuplicates = !!A),
            N(),
            (x.sortDetached = r(function (e) {
                return 1 & e.compareDocumentPosition(j.createElement("fieldset"));
            })),
            r(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
            o("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (x.attributes &&
                r(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
            o("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            r(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
            o(Z, function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
            }),
            t
        );
    })(e);
    (de.find = ye), (de.expr = ye.selectors), (de.expr[":"] = de.expr.pseudos), (de.uniqueSort = de.unique = ye.uniqueSort), (de.text = ye.getText), (de.isXMLDoc = ye.isXML), (de.contains = ye.contains), (de.escapeSelector = ye.escape);
    var be = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && de(e).is(n)) break;
                i.push(e);
            }
        return i;
    },
        xe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        we = de.expr.match.needsContext,
        ze = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        ke = /^.[^:#\[\.,]*$/;
    (de.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? de.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : de.find.matches(
                    e,
                    de.grep(t, function (e) {
                        return 1 === e.nodeType;
                    })
                )
        );
    }),
        de.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    r = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        de(e).filter(function () {
                            for (t = 0; t < i; t++) if (de.contains(r[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++) de.find(e, r[t], n);
                return i > 1 ? de.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(o(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(o(this, e || [], !0));
            },
            is: function (e) {
                return !!o(this, "string" == typeof e && we.test(e) ? de(e) : e || [], !1).length;
            },
        });
    var Me,
        Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((de.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || Me), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof de ? t[0] : t), de.merge(this, de.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), ze.test(i[1]) && de.isPlainObject(t)))
                    for (i in t) de.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (r = te.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : de.isFunction(e) ? (void 0 !== n.ready ? n.ready(e) : e(de)) : de.makeArray(e, this);
    }).prototype = de.fn),
        (Me = de(te));
    var Te = /^(?:parents|prev(?:Until|All))/,
        Ce = { children: !0, contents: !0, next: !0, prev: !0 };
    de.fn.extend({
        has: function (e) {
            var t = de(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (de.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && de(e);
            if (!we.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? de.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? ae.call(de(e), this[0]) : ae.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        de.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return be(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return be(e, "parentNode", n);
                },
                next: function (e) {
                    return a(e, "nextSibling");
                },
                prev: function (e) {
                    return a(e, "previousSibling");
                },
                nextAll: function (e) {
                    return be(e, "nextSibling");
                },
                prevAll: function (e) {
                    return be(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return be(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return be(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return xe((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return xe(e.firstChild);
                },
                contents: function (e) {
                    return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), de.merge([], e.childNodes));
                },
            },
            function (e, t) {
                de.fn[e] = function (n, i) {
                    var r = de.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = de.filter(i, r)), this.length > 1 && (Ce[e] || de.uniqueSort(r), Te.test(e) && r.reverse()), this.pushStack(r);
                };
            }
        );
    var Ee = /[^\x20\t\r\n\f]+/g;
    (de.Callbacks = function (e) {
        e = "string" == typeof e ? s(e) : de.extend({}, e);
        var t,
            n,
            i,
            r,
            o = [],
            a = [],
            c = -1,
            l = function () {
                for (r = r || e.once, i = t = !0; a.length; c = -1) for (n = a.shift(); ++c < o.length;) !1 === o[c].apply(n[0], n[1]) && e.stopOnFalse && ((c = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
            },
            u = {
                add: function () {
                    return (
                        o &&
                        (n && !t && ((c = o.length - 1), a.push(n)),
                            (function t(n) {
                                de.each(n, function (n, i) {
                                    de.isFunction(i) ? (e.unique && u.has(i)) || o.push(i) : i && i.length && "string" !== de.type(i) && t(i);
                                });
                            })(arguments),
                            n && !t && l()),
                        this
                    );
                },
                remove: function () {
                    return (
                        de.each(arguments, function (e, t) {
                            for (var n; (n = de.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? de.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (r = a = []), (o = n = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (r = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                    return !!r;
                },
                fireWith: function (e, n) {
                    return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || l()), this;
                },
                fire: function () {
                    return u.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return u;
    }),
        de.extend({
            Deferred: function (t) {
                var n = [
                    ["notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2],
                    ["resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected"],
                ],
                    i = "pending",
                    r = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return r.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return de
                                .Deferred(function (t) {
                                    de.each(n, function (n, i) {
                                        var r = de.isFunction(e[i[4]]) && e[i[4]];
                                        o[i[1]](function () {
                                            var e = r && r.apply(this, arguments);
                                            e && de.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        then: function (t, i, r) {
                            function o(t, n, i, r) {
                                return function () {
                                    var s = this,
                                        u = arguments,
                                        h = function () {
                                            var e, h;
                                            if (!(t < a)) {
                                                if ((e = i.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (h = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    de.isFunction(h)
                                                        ? r
                                                            ? h.call(e, o(a, n, c, r), o(a, n, l, r))
                                                            : (a++, h.call(e, o(a, n, c, r), o(a, n, l, r), o(a, n, c, n.notifyWith)))
                                                        : (i !== c && ((s = void 0), (u = [e])), (r || n.resolveWith)(s, u));
                                            }
                                        },
                                        p = r
                                            ? h
                                            : function () {
                                                try {
                                                    h();
                                                } catch (e) {
                                                    de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (i !== l && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                                                }
                                            };
                                    t ? p() : (de.Deferred.getStackHook && (p.stackTrace = de.Deferred.getStackHook()), e.setTimeout(p));
                                };
                            }
                            var a = 0;
                            return de
                                .Deferred(function (e) {
                                    n[0][3].add(o(0, e, de.isFunction(r) ? r : c, e.notifyWith)), n[1][3].add(o(0, e, de.isFunction(t) ? t : c)), n[2][3].add(o(0, e, de.isFunction(i) ? i : l));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? de.extend(e, r) : r;
                        },
                    },
                    o = {};
                return (
                    de.each(n, function (e, t) {
                        var a = t[2],
                            s = t[5];
                        (r[t[1]] = a.add),
                            s &&
                            a.add(
                                function () {
                                    i = s;
                                },
                                n[3 - e][2].disable,
                                n[0][2].lock
                            ),
                            a.add(t[3].fire),
                            (o[t[0]] = function () {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[t[0] + "With"] = a.fireWith);
                    }),
                    r.promise(o),
                    t && t.call(o, o),
                    o
                );
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = ie.call(arguments),
                    o = de.Deferred(),
                    a = function (e) {
                        return function (n) {
                            (i[e] = this), (r[e] = arguments.length > 1 ? ie.call(arguments) : n), --t || o.resolveWith(i, r);
                        };
                    };
                if (t <= 1 && (u(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || de.isFunction(r[n] && r[n].then))) return o.then();
                for (; n--;) u(r[n], a(n), o.reject);
                return o.promise();
            },
        });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (de.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (de.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var Ne = de.Deferred();
    (de.fn.ready = function (e) {
        return (
            Ne.then(e).catch(function (e) {
                de.readyException(e);
            }),
            this
        );
    }),
        de.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --de.readyWait : de.isReady) || ((de.isReady = !0), (!0 !== e && --de.readyWait > 0) || Ne.resolveWith(te, [de]));
            },
        }),
        (de.ready.then = Ne.then),
        "complete" === te.readyState || ("loading" !== te.readyState && !te.documentElement.doScroll) ? e.setTimeout(de.ready) : (te.addEventListener("DOMContentLoaded", h), e.addEventListener("load", h));
    var je = function (e, t, n, i, r, o, a) {
        var s = 0,
            c = e.length,
            l = null == n;
        if ("object" === de.type(n)) {
            r = !0;
            for (s in n) je(e, t, s, n[s], !0, o, a);
        } else if (
            void 0 !== i &&
            ((r = !0),
                de.isFunction(i) || (a = !0),
                l &&
                (a
                    ? (t.call(e, i), (t = null))
                    : ((l = t),
                        (t = function (e, t, n) {
                            return l.call(de(e), n);
                        }))),
                t)
        )
            for (; s < c; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : l ? t.call(e) : c ? t(e[0], n) : o;
    },
        Le = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
    (p.uid = 1),
        (p.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Le(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var i,
                    r = this.cache(e);
                if ("string" == typeof t) r[de.camelCase(t)] = n;
                else for (i in t) r[de.camelCase(i)] = t[i];
                return r;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][de.camelCase(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(de.camelCase) : (t = de.camelCase(t)) in i ? [t] : t.match(Ee) || []).length;
                        for (; n--;) delete i[t[n]];
                    }
                    (void 0 === t || de.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !de.isEmptyObject(t);
            },
        });
    var He = new p(),
        De = new p(),
        Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Fe = /[A-Z]/g;
    de.extend({
        hasData: function (e) {
            return De.hasData(e) || He.hasData(e);
        },
        data: function (e, t, n) {
            return De.access(e, t, n);
        },
        removeData: function (e, t) {
            De.remove(e, t);
        },
        _data: function (e, t, n) {
            return He.access(e, t, n);
        },
        _removeData: function (e, t) {
            He.remove(e, t);
        },
    }),
        de.fn.extend({
            data: function (e, t) {
                var n,
                    i,
                    r,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((r = De.get(o)), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && ((i = de.camelCase(i.slice(5))), f(o, i, r[i]));
                        He.set(o, "hasDataAttrs", !0);
                    }
                    return r;
                }
                return "object" == typeof e
                    ? this.each(function () {
                        De.set(this, e);
                    })
                    : je(
                        this,
                        function (t) {
                            var n;
                            if (o && void 0 === t) {
                                if (void 0 !== (n = De.get(o, e))) return n;
                                if (void 0 !== (n = f(o, e))) return n;
                            } else
                                this.each(function () {
                                    De.set(this, e, t);
                                });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                    );
            },
            removeData: function (e) {
                return this.each(function () {
                    De.remove(this, e);
                });
            },
        }),
        de.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return (t = (t || "fx") + "queue"), (i = He.get(e, t)), n && (!i || Array.isArray(n) ? (i = He.access(e, t, de.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = de.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = de._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                    r &&
                    ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(
                            e,
                            function () {
                                de.dequeue(e, t);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    He.get(e, n) ||
                    He.access(e, n, {
                        empty: de.Callbacks("once memory").add(function () {
                            He.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        de.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? de.queue(this[0], e)
                        : void 0 === t
                            ? this
                            : this.each(function () {
                                var n = de.queue(this, e, t);
                                de._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e);
                            })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    de.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    i = 1,
                    r = de.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --i || r.resolveWith(o, [o]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--;) (n = He.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t);
            },
        });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Oe = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
        qe = ["Top", "Right", "Bottom", "Left"],
        _e = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && de.contains(e.ownerDocument, e) && "none" === de.css(e, "display"));
        },
        Ie = function (e, t, n, i) {
            var r,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r;
        },
        $e = {};
    de.fn.extend({
        show: function () {
            return g(this, !0);
        },
        hide: function () {
            return g(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                    _e(this) ? de(this).show() : de(this).hide();
                });
        },
    });
    var Re = /^(?:checkbox|radio)$/i,
        Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        We = /^$|\/(?:java|ecma)script/i,
        Ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (Ue.optgroup = Ue.option), (Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead), (Ue.th = Ue.td);
    var Xe = /<|&#?\w+;/;
    !(function () {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")),
            t = te.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var Je = te.documentElement,
        Ge = /^key/,
        Ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    (de.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o,
                a,
                s,
                c,
                l,
                u,
                h,
                p,
                d,
                f,
                m,
                v = He.get(e);
            if (v)
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && de.find.matchesSelector(Je, r),
                    n.guid || (n.guid = de.guid++),
                    (c = v.events) || (c = v.events = {}),
                    (a = v.handle) ||
                    (a = v.handle = function (t) {
                        return void 0 !== de && de.event.triggered !== t.type ? de.event.dispatch.apply(e, arguments) : void 0;
                    }),
                    l = (t = (t || "").match(Ee) || [""]).length;
                    l--;

                )
                    (d = m = (s = Qe.exec(t[l]) || [])[1]),
                        (f = (s[2] || "").split(".").sort()),
                        d &&
                        ((h = de.event.special[d] || {}),
                            (d = (r ? h.delegateType : h.bindType) || d),
                            (h = de.event.special[d] || {}),
                            (u = de.extend({ type: d, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && de.expr.match.needsContext.test(r), namespace: f.join(".") }, o)),
                            (p = c[d]) || (((p = c[d] = []).delegateCount = 0), (h.setup && !1 !== h.setup.call(e, i, f, a)) || (e.addEventListener && e.addEventListener(d, a))),
                            h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                            r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                            (de.event.global[d] = !0));
        },
        remove: function (e, t, n, i, r) {
            var o,
                a,
                s,
                c,
                l,
                u,
                h,
                p,
                d,
                f,
                m,
                v = He.hasData(e) && He.get(e);
            if (v && (c = v.events)) {
                for (l = (t = (t || "").match(Ee) || [""]).length; l--;)
                    if (((s = Qe.exec(t[l]) || []), (d = m = s[1]), (f = (s[2] || "").split(".").sort()), d)) {
                        for (h = de.event.special[d] || {}, p = c[(d = (i ? h.delegateType : h.bindType) || d)] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;)
                            (u = p[o]),
                                (!r && m !== u.origType) ||
                                (n && n.guid !== u.guid) ||
                                (s && !s.test(u.namespace)) ||
                                (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                (p.splice(o, 1), u.selector && p.delegateCount--, h.remove && h.remove.call(e, u));
                        a && !p.length && ((h.teardown && !1 !== h.teardown.call(e, f, v.handle)) || de.removeEvent(e, d, v.handle), delete c[d]);
                    } else for (d in c) de.event.remove(e, d + t[l], n, i, !0);
                de.isEmptyObject(c) && He.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                r,
                o,
                a,
                s = de.event.fix(e),
                c = new Array(arguments.length),
                l = (He.get(this, "events") || {})[s.type] || [],
                u = de.event.special[s.type] || {};
            for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t];
            if (((s.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, s))) {
                for (a = de.event.handlers.call(this, s, l), t = 0; (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();)
                        (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
                            ((s.handleObj = o), (s.data = o.data), void 0 !== (i = ((de.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, c)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                r,
                o,
                a,
                s = [],
                c = t.delegateCount,
                l = e.target;
            if (c && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < c; n++) void 0 === a[(r = (i = t[n]).selector + " ")] && (a[r] = i.needsContext ? de(r, this).index(l) > -1 : de.find(r, this, null, [l]).length), a[r] && o.push(i);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), c < t.length && s.push({ elem: l, handlers: t.slice(c) }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(de.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: de.isFunction(t)
                    ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                    }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[de.expando] ? e : new de.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== k() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === k() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                    return r(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (de.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (de.Event = function (e, t) {
            if (!(this instanceof de.Event)) return new de.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? w : z),
                    (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && de.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || de.now()),
                (this[de.expando] = !0);
        }),
        (de.Event.prototype = {
            constructor: de.Event,
            isDefaultPrevented: z,
            isPropagationStopped: z,
            isImmediatePropagationStopped: z,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = w), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = w), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = w), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        de.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && Ge.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ye.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            de.event.addProp
        ),
        de.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            de.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (r && (r === i || de.contains(i, r))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        de.fn.extend({
            on: function (e, t, n, i) {
                return M(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return M(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), de(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = z),
                    this.each(function () {
                        de.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ze = /<script|<style|<link/i,
        et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tt = /^true\/(.*)/,
        nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    de.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ke, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var i,
                r,
                o,
                a,
                s = e.cloneNode(!0),
                c = de.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || de.isXMLDoc(e))) for (a = y(s), i = 0, r = (o = y(e)).length; i < r; i++) A(o[i], a[i]);
            if (t)
                if (n) for (o = o || y(e), a = a || y(s), i = 0, r = o.length; i < r; i++) E(o[i], a[i]);
                else E(e, s);
            return (a = y(s, "script")).length > 0 && b(a, !c && y(e, "script")), s;
        },
        cleanData: function (e) {
            for (var t, n, i, r = de.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Le(n)) {
                    if ((t = n[He.expando])) {
                        if (t.events) for (i in t.events) r[i] ? de.event.remove(n, i) : de.removeEvent(n, i, t.handle);
                        n[He.expando] = void 0;
                    }
                    n[De.expando] && (n[De.expando] = void 0);
                }
        },
    }),
        de.fn.extend({
            detach: function (e) {
                return j(this, e, !0);
            },
            remove: function (e) {
                return j(this, e);
            },
            text: function (e) {
                return je(
                    this,
                    function (e) {
                        return void 0 === e
                            ? de.text(this)
                            : this.empty().each(function () {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return N(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || S(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return N(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return N(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return N(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (de.cleanData(y(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return de.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return je(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ze.test(e) && !Ue[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = de.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (de.cleanData(y(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) { }
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return N(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        de.inArray(this, e) < 0 && (de.cleanData(y(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        de.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            de.fn[e] = function (e) {
                for (var n, i = [], r = de(e), o = r.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), de(r[a])[t](n), oe.apply(i, n.get());
                return this.pushStack(i);
            };
        });
    var it = /^margin/,
        rt = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
        ot = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        };
    !(function () {
        function t() {
            if (s) {
                (s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (s.innerHTML = ""), Je.appendChild(a);
                var t = e.getComputedStyle(s);
                (n = "1%" !== t.top), (o = "2px" === t.marginLeft), (i = "4px" === t.width), (s.style.marginRight = "50%"), (r = "4px" === t.marginRight), Je.removeChild(a), (s = null);
            }
        }
        var n,
            i,
            r,
            o,
            a = te.createElement("div"),
            s = te.createElement("div");
        s.style &&
            ((s.style.backgroundClip = "content-box"),
                (s.cloneNode(!0).style.backgroundClip = ""),
                (pe.clearCloneStyle = "content-box" === s.style.backgroundClip),
                (a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                a.appendChild(s),
                de.extend(pe, {
                    pixelPosition: function () {
                        return t(), n;
                    },
                    boxSizingReliable: function () {
                        return t(), i;
                    },
                    pixelMarginRight: function () {
                        return t(), r;
                    },
                    reliableMarginLeft: function () {
                        return t(), o;
                    },
                }));
    })();
    var at = /^(none|table(?!-c[ea]).+)/,
        st = /^--/,
        ct = { position: "absolute", visibility: "hidden", display: "block" },
        lt = { letterSpacing: "0", fontWeight: "400" },
        ut = ["Webkit", "Moz", "ms"],
        ht = te.createElement("div").style;
    de.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: "cssFloat" },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    o,
                    a,
                    s = de.camelCase(t),
                    c = st.test(t),
                    l = e.style;
                if ((c || (t = P(s)), (a = de.cssHooks[t] || de.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                "string" == (o = typeof n) && (r = Oe.exec(n)) && r[1] && ((n = m(e, t, r)), (o = "number")),
                    null != n &&
                    n === n &&
                    ("number" === o && (n += (r && r[3]) || (de.cssNumber[s] ? "" : "px")),
                        pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, i))) || (c ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, i) {
            var r,
                o,
                a,
                s = de.camelCase(t);
            return (
                st.test(t) || (t = P(s)),
                (a = de.cssHooks[t] || de.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)),
                void 0 === r && (r = L(e, t, i)),
                "normal" === r && t in lt && (r = lt[t]),
                "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
            );
        },
    }),
        de.each(["height", "width"], function (e, t) {
            de.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n)
                        return !at.test(de.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? O(e, t, i)
                            : Ie(e, ct, function () {
                                return O(e, t, i);
                            });
                },
                set: function (e, n, i) {
                    var r,
                        o = i && ot(e),
                        a = i && B(e, t, i, "border-box" === de.css(e, "boxSizing", !1, o), o);
                    return a && (r = Oe.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = de.css(e, t))), F(0, n, a);
                },
            };
        }),
        (de.cssHooks.marginLeft = H(pe.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(L(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        Ie(e, { marginLeft: 0 }, function () {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        de.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (de.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + qe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                },
            }),
                it.test(e) || (de.cssHooks[e + t].set = F);
        }),
        de.fn.extend({
            css: function (e, t) {
                return je(
                    this,
                    function (e, t, n) {
                        var i,
                            r,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (i = ot(e), r = t.length; a < r; a++) o[t[a]] = de.css(e, t[a], !1, i);
                            return o;
                        }
                        return void 0 !== n ? de.style(e, t, n) : de.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        }),
        (de.Tween = q),
        (q.prototype = {
            constructor: q,
            init: function (e, t, n, i, r, o) {
                (this.elem = e), (this.prop = n), (this.easing = r || de.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (de.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = q.propHooks[this.prop];
                return e && e.get ? e.get(this) : q.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = q.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : q.propHooks._default.set(this),
                    this
                );
            },
        }),
        (q.prototype.init.prototype = q.prototype),
        (q.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : de.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (q.propHooks.scrollTop = q.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (de.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (de.fx = q.prototype.init),
        (de.fx.step = {});
    var pt,
        dt,
        ft = /^(?:toggle|show|hide)$/,
        mt = /queueHooks$/;
    (de.Animation = de.extend(W, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return m(n.elem, e, Oe.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            de.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ee));
            for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (W.tweeners[n] = W.tweeners[n] || []), W.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    c,
                    l,
                    u,
                    h = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    f = e.style,
                    m = e.nodeType && _e(e),
                    v = He.get(e, "fxshow");
                n.queue ||
                    (null == (a = de._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                            (s = a.empty.fire),
                            (a.empty.fire = function () {
                                a.unqueued || s();
                            })),
                        a.unqueued++,
                        p.always(function () {
                            p.always(function () {
                                a.unqueued--, de.queue(e, "fx").length || a.empty.fire();
                            });
                        }));
                for (i in t)
                    if (((r = t[i]), ft.test(r))) {
                        if ((delete t[i], (o = o || "toggle" === r), r === (m ? "hide" : "show"))) {
                            if ("show" !== r || !v || void 0 === v[i]) continue;
                            m = !0;
                        }
                        d[i] = (v && v[i]) || de.style(e, i);
                    }
                if ((c = !de.isEmptyObject(t)) || !de.isEmptyObject(d)) {
                    h &&
                        1 === e.nodeType &&
                        ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                            null == (l = v && v.display) && (l = He.get(e, "display")),
                            "none" === (u = de.css(e, "display")) && (l ? (u = l) : (g([e], !0), (l = e.style.display || l), (u = de.css(e, "display")), g([e]))),
                            ("inline" === u || ("inline-block" === u && null != l)) &&
                            "none" === de.css(e, "float") &&
                            (c ||
                                (p.done(function () {
                                    f.display = l;
                                }),
                                    null == l && ((u = f.display), (l = "none" === u ? "" : u))),
                                (f.display = "inline-block"))),
                        n.overflow &&
                        ((f.overflow = "hidden"),
                            p.always(function () {
                                (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
                            })),
                        (c = !1);
                    for (i in d)
                        c ||
                            (v ? "hidden" in v && (m = v.hidden) : (v = He.access(e, "fxshow", { display: l })),
                                o && (v.hidden = !m),
                                m && g([e], !0),
                                p.done(function () {
                                    m || g([e]), He.remove(e, "fxshow");
                                    for (i in d) de.style(e, i, d[i]);
                                })),
                            (c = R(m ? v[i] : 0, i, p)),
                            i in v || ((v[i] = c.start), m && ((c.end = c.start), (c.start = 0)));
                }
            },
        ],
        prefilter: function (e, t) {
            t ? W.prefilters.unshift(e) : W.prefilters.push(e);
        },
    })),
        (de.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? de.extend({}, e) : { complete: n || (!n && t) || (de.isFunction(e) && e), duration: e, easing: (n && t) || (t && !de.isFunction(t) && t) };
            return (
                de.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in de.fx.speeds ? (i.duration = de.fx.speeds[i.duration]) : (i.duration = de.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    de.isFunction(i.old) && i.old.call(this), i.queue && de.dequeue(this, i.queue);
                }),
                i
            );
        }),
        de.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(_e).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            },
            animate: function (e, t, n, i) {
                var r = de.isEmptyObject(e),
                    o = de.speed(t, n, i),
                    a = function () {
                        var t = W(this, de.extend({}, e), o);
                        (r || He.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = de.timers,
                            a = He.get(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else for (r in a) a[r] && a[r].stop && mt.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                        (!t && n) || de.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = He.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = de.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, de.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        de.each(["toggle", "show", "hide"], function (e, t) {
            var n = de.fn[t];
            de.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r);
            };
        }),
        de.each({ slideDown: $("show"), slideUp: $("hide"), slideToggle: $("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            de.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i);
            };
        }),
        (de.timers = []),
        (de.fx.tick = function () {
            var e,
                t = 0,
                n = de.timers;
            for (pt = de.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || de.fx.stop(), (pt = void 0);
        }),
        (de.fx.timer = function (e) {
            de.timers.push(e), de.fx.start();
        }),
        (de.fx.interval = 13),
        (de.fx.start = function () {
            dt || ((dt = !0), _());
        }),
        (de.fx.stop = function () {
            dt = null;
        }),
        (de.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (de.fn.delay = function (t, n) {
            return (
                (t = de.fx ? de.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(r);
                    };
                })
            );
        }),
        (function () {
            var e = te.createElement("input"),
                t = te.createElement("select").appendChild(te.createElement("option"));
            (e.type = "checkbox"), (pe.checkOn = "" !== e.value), (pe.optSelected = t.selected), ((e = te.createElement("input")).value = "t"), (e.type = "radio"), (pe.radioValue = "t" === e.value);
        })();
    var vt,
        gt = de.expr.attrHandle;
    de.fn.extend({
        attr: function (e, t) {
            return je(this, de.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                de.removeAttr(this, e);
            });
        },
    }),
        de.extend({
            attr: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                        ? de.prop(e, t, n)
                        : ((1 === o && de.isXMLDoc(e)) || (r = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? vt : void 0)),
                            void 0 !== n
                                ? null === n
                                    ? void de.removeAttr(e, t)
                                    : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                        ? i
                                        : (e.setAttribute(t, n + ""), n)
                                : r && "get" in r && null !== (i = r.get(e, t))
                                    ? i
                                    : null == (i = de.find.attr(e, t))
                                        ? void 0
                                        : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!pe.radioValue && "radio" === t && r(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    i = 0,
                    r = t && t.match(Ee);
                if (r && 1 === e.nodeType) for (; (n = r[i++]);) e.removeAttribute(n);
            },
        }),
        (vt = {
            set: function (e, t, n) {
                return !1 === t ? de.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        de.each(de.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = gt[t] || de.find.attr;
            gt[t] = function (e, t, i) {
                var r,
                    o,
                    a = t.toLowerCase();
                return i || ((o = gt[a]), (gt[a] = r), (r = null != n(e, t, i) ? a : null), (gt[a] = o)), r;
            };
        });
    var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function (e, t) {
            return je(this, de.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[de.propFix[e] || e];
            });
        },
    }),
        de.extend({
            prop: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && de.isXMLDoc(e)) || ((t = de.propFix[t] || t), (r = de.propHooks[t])),
                        void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = de.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || (bt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        pe.optSelected ||
        (de.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
        }),
        de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            de.propFix[this.toLowerCase()] = this;
        }),
        de.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    c = 0;
                if (de.isFunction(e))
                    return this.each(function (t) {
                        de(this).addClass(e.call(this, t, X(this)));
                    });
                if ("string" == typeof e && e)
                    for (t = e.match(Ee) || []; (n = this[c++]);)
                        if (((r = X(n)), (i = 1 === n.nodeType && " " + U(r) + " "))) {
                            for (a = 0; (o = t[a++]);) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (s = U(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    c = 0;
                if (de.isFunction(e))
                    return this.each(function (t) {
                        de(this).removeClass(e.call(this, t, X(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Ee) || []; (n = this[c++]);)
                        if (((r = X(n)), (i = 1 === n.nodeType && " " + U(r) + " "))) {
                            for (a = 0; (o = t[a++]);) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            r !== (s = U(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : de.isFunction(e)
                        ? this.each(function (n) {
                            de(this).toggleClass(e.call(this, n, X(this), t), t);
                        })
                        : this.each(function () {
                            var t, i, r, o;
                            if ("string" === n) for (i = 0, r = de(this), o = e.match(Ee) || []; (t = o[i++]);) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                            else (void 0 !== e && "boolean" !== n) || ((t = X(this)) && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : He.get(this, "__className__") || ""));
                        });
            },
            hasClass: function (e) {
                var t,
                    n,
                    i = 0;
                for (t = " " + e + " "; (n = this[i++]);) if (1 === n.nodeType && (" " + U(X(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
            },
        });
    var xt = /\r/g;
    de.fn.extend({
        val: function (e) {
            var t,
                n,
                i,
                r = this[0];
            {
                if (arguments.length)
                    return (
                        (i = de.isFunction(e)),
                        this.each(function (n) {
                            var r;
                            1 === this.nodeType &&
                                (null == (r = i ? e.call(this, n, de(this).val()) : e)
                                    ? (r = "")
                                    : "number" == typeof r
                                        ? (r += "")
                                        : Array.isArray(r) &&
                                        (r = de.map(r, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                    ((t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                        })
                    );
                if (r) return (t = de.valHooks[r.type] || de.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(xt, "") : null == n ? "" : n;
            }
        },
    }),
        de.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = de.find.attr(e, "value");
                        return null != t ? t : U(de.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            i,
                            o = e.options,
                            a = e.selectedIndex,
                            s = "select-one" === e.type,
                            c = s ? null : [],
                            l = s ? a + 1 : o.length;
                        for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                            if (((n = o[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                                if (((t = de(n).val()), s)) return t;
                                c.push(t);
                            }
                        return c;
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, o = de.makeArray(t), a = r.length; a--;) ((i = r[a]).selected = de.inArray(de.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        de.each(["radio", "checkbox"], function () {
            (de.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = de.inArray(de(e).val(), t) > -1);
                },
            }),
                pe.checkOn ||
                (de.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
        });
    var wt = /^(?:focusinfocus|focusoutblur)$/;
    de.extend(de.event, {
        trigger: function (t, n, i, r) {
            var o,
                a,
                s,
                c,
                l,
                u,
                h,
                p = [i || te],
                d = le.call(t, "type") ? t.type : t,
                f = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((a = s = i = i || te),
                    3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !wt.test(d + de.event.triggered) &&
                    (d.indexOf(".") > -1 && ((d = (f = d.split(".")).shift()), f.sort()),
                        (l = d.indexOf(":") < 0 && "on" + d),
                        (t = t[de.expando] ? t : new de.Event(d, "object" == typeof t && t)),
                        (t.isTrigger = r ? 2 : 3),
                        (t.namespace = f.join(".")),
                        (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (t.result = void 0),
                        t.target || (t.target = i),
                        (n = null == n ? [t] : de.makeArray(n, [t])),
                        (h = de.event.special[d] || {}),
                        r || !h.trigger || !1 !== h.trigger.apply(i, n)))
            ) {
                if (!r && !h.noBubble && !de.isWindow(i)) {
                    for (c = h.delegateType || d, wt.test(c + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), (s = a);
                    s === (i.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e);
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped();)
                    (t.type = o > 1 ? c : h.bindType || d),
                        (u = (He.get(a, "events") || {})[t.type] && He.get(a, "handle")) && u.apply(a, n),
                        (u = l && a[l]) && u.apply && Le(a) && ((t.result = u.apply(a, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = d),
                    r ||
                    t.isDefaultPrevented() ||
                    (h._default && !1 !== h._default.apply(p.pop(), n)) ||
                    !Le(i) ||
                    (l && de.isFunction(i[d]) && !de.isWindow(i) && ((s = i[l]) && (i[l] = null), (de.event.triggered = d), i[d](), (de.event.triggered = void 0), s && (i[l] = s))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var i = de.extend(new de.Event(), n, { type: e, isSimulated: !0 });
            de.event.trigger(i, null, t);
        },
    }),
        de.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    de.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return de.event.trigger(e, t, n, !0);
            },
        }),
        de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            de.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        de.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        (pe.focusin = "onfocusin" in e),
        pe.focusin ||
        de.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
                de.event.simulate(t, e.target, de.event.fix(e));
            };
            de.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        r = He.access(i, t);
                    r || i.addEventListener(e, n, !0), He.access(i, t, (r || 0) + 1);
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        r = He.access(i, t) - 1;
                    r ? He.access(i, t, r) : (i.removeEventListener(e, n, !0), He.remove(i, t));
                },
            };
        });
    var zt = e.location,
        kt = de.now(),
        Mt = /\?/;
    de.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || de.error("Invalid XML: " + t), n;
    };
    var St = /\[\]$/,
        Tt = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
    (de.param = function (e, t) {
        var n,
            i = [],
            r = function (e, t) {
                var n = de.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !de.isPlainObject(e)))
            de.each(e, function () {
                r(this.name, this.value);
            });
        else for (n in e) J(n, e[n], t, r);
        return i.join("&");
    }),
        de.fn.extend({
            serialize: function () {
                return de.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = de.prop(this, "elements");
                    return e ? de.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !de(this).is(":disabled") && Et.test(this.nodeName) && !Ct.test(e) && (this.checked || !Re.test(e));
                    })
                    .map(function (e, t) {
                        var n = de(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                                ? de.map(n, function (e) {
                                    return { name: t.name, value: e.replace(Tt, "\r\n") };
                                })
                                : { name: t.name, value: n.replace(Tt, "\r\n") };
                    })
                    .get();
            },
        });
    var At = /%20/g,
        Nt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Dt = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Ft = {},
        Bt = {},
        Ot = "*/".concat("*"),
        qt = te.createElement("a");
    (qt.href = zt.href),
        de.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: zt.href,
                type: "GET",
                isLocal: Ht.test(zt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Ot, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": de.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Q(Q(e, de.ajaxSettings), t) : Q(de.ajaxSettings, e);
            },
            ajaxPrefilter: G(Ft),
            ajaxTransport: G(Bt),
            ajax: function (t, n) {
                function i(t, n, i, s) {
                    var l,
                        p,
                        d,
                        x,
                        w,
                        z = n;
                    u ||
                        ((u = !0),
                            c && e.clearTimeout(c),
                            (r = void 0),
                            (a = s || ""),
                            (k.readyState = t > 0 ? 4 : 0),
                            (l = (t >= 200 && t < 300) || 304 === t),
                            i && (x = K(f, k, i)),
                            (x = Z(f, x, k, l)),
                            l
                                ? (f.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (de.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (de.etag[o] = w)),
                                    204 === t || "HEAD" === f.type ? (z = "nocontent") : 304 === t ? (z = "notmodified") : ((z = x.state), (p = x.data), (l = !(d = x.error))))
                                : ((d = z), (!t && z) || ((z = "error"), t < 0 && (t = 0))),
                            (k.status = t),
                            (k.statusText = (n || z) + ""),
                            l ? g.resolveWith(m, [p, z, k]) : g.rejectWith(m, [k, z, d]),
                            k.statusCode(b),
                            (b = void 0),
                            h && v.trigger(l ? "ajaxSuccess" : "ajaxError", [k, f, l ? p : d]),
                            y.fireWith(m, [k, z]),
                            h && (v.trigger("ajaxComplete", [k, f]), --de.active || de.event.trigger("ajaxStop")));
                }
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var r,
                    o,
                    a,
                    s,
                    c,
                    l,
                    u,
                    h,
                    p,
                    d,
                    f = de.ajaxSetup({}, n),
                    m = f.context || f,
                    v = f.context && (m.nodeType || m.jquery) ? de(m) : de.event,
                    g = de.Deferred(),
                    y = de.Callbacks("once memory"),
                    b = f.statusCode || {},
                    x = {},
                    w = {},
                    z = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!s) for (s = {}; (t = Lt.exec(a));) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return u ? a : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == u && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (x[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == u && (f.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (u) k.always(e[k.status]);
                                else for (t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || z;
                            return r && r.abort(t), i(0, t), this;
                        },
                    };
                if (
                    (g.promise(k),
                        (f.url = ((t || f.url || zt.href) + "").replace(Pt, zt.protocol + "//")),
                        (f.type = n.method || n.type || f.method || f.type),
                        (f.dataTypes = (f.dataType || "*").toLowerCase().match(Ee) || [""]),
                        null == f.crossDomain)
                ) {
                    l = te.createElement("a");
                    try {
                        (l.href = f.url), (l.href = l.href), (f.crossDomain = qt.protocol + "//" + qt.host != l.protocol + "//" + l.host);
                    } catch (e) {
                        f.crossDomain = !0;
                    }
                }
                if ((f.data && f.processData && "string" != typeof f.data && (f.data = de.param(f.data, f.traditional)), Y(Ft, f, n, k), u)) return k;
                (h = de.event && f.global) && 0 == de.active++ && de.event.trigger("ajaxStart"),
                    (f.type = f.type.toUpperCase()),
                    (f.hasContent = !Dt.test(f.type)),
                    (o = f.url.replace(Nt, "")),
                    f.hasContent
                        ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+"))
                        : ((d = f.url.slice(o.length)), f.data && ((o += (Mt.test(o) ? "&" : "?") + f.data), delete f.data), !1 === f.cache && ((o = o.replace(jt, "$1")), (d = (Mt.test(o) ? "&" : "?") + "_=" + kt++ + d)), (f.url = o + d)),
                    f.ifModified && (de.lastModified[o] && k.setRequestHeader("If-Modified-Since", de.lastModified[o]), de.etag[o] && k.setRequestHeader("If-None-Match", de.etag[o])),
                    ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) && k.setRequestHeader("Content-Type", f.contentType),
                    k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : f.accepts["*"]);
                for (p in f.headers) k.setRequestHeader(p, f.headers[p]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, k, f) || u)) return k.abort();
                if (((z = "abort"), y.add(f.complete), k.done(f.success), k.fail(f.error), (r = Y(Bt, f, n, k)))) {
                    if (((k.readyState = 1), h && v.trigger("ajaxSend", [k, f]), u)) return k;
                    f.async &&
                        f.timeout > 0 &&
                        (c = e.setTimeout(function () {
                            k.abort("timeout");
                        }, f.timeout));
                    try {
                        (u = !1), r.send(x, i);
                    } catch (e) {
                        if (u) throw e;
                        i(-1, e);
                    }
                } else i(-1, "No Transport");
                return k;
            },
            getJSON: function (e, t, n) {
                return de.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return de.get(e, void 0, t, "script");
            },
        }),
        de.each(["get", "post"], function (e, t) {
            de[t] = function (e, n, i, r) {
                return de.isFunction(n) && ((r = r || i), (i = n), (n = void 0)), de.ajax(de.extend({ url: e, type: t, dataType: r, data: n, success: i }, de.isPlainObject(e) && e));
            };
        }),
        (de._evalUrl = function (e) {
            return de.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        de.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                    (de.isFunction(e) && (e = e.call(this[0])),
                        (t = de(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return de.isFunction(e)
                    ? this.each(function (t) {
                        de(this).wrapInner(e.call(this, t));
                    })
                    : this.each(function () {
                        var t = de(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
            },
            wrap: function (e) {
                var t = de.isFunction(e);
                return this.each(function (n) {
                    de(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            de(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (de.expr.pseudos.hidden = function (e) {
            return !de.expr.pseudos.visible(e);
        }),
        (de.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (de.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) { }
        });
    var _t = { 0: 200, 1223: 204 },
        It = de.ajaxSettings.xhr();
    (pe.cors = !!It && "withCredentials" in It),
        (pe.ajax = It = !!It),
        de.ajaxTransport(function (t) {
            var n, i;
            if (pe.cors || (It && !t.crossDomain))
                return {
                    send: function (r, o) {
                        var a,
                            s = t.xhr();
                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (a in r) s.setRequestHeader(a, r[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null),
                                        "abort" === e
                                            ? s.abort()
                                            : "error" === e
                                                ? "number" != typeof s.status
                                                    ? o(0, "error")
                                                    : o(s.status, s.statusText)
                                                : o(_t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (i = s.onerror = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = i)
                                : (s.onreadystatechange = function () {
                                    4 === s.readyState &&
                                        e.setTimeout(function () {
                                            n && i();
                                        });
                                }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        de.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        de.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return de.globalEval(e), e;
                },
            },
        }),
        de.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        de.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, r) {
                        (t = de("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            te.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var $t = [],
        Rt = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = $t.pop() || de.expando + "_" + kt++;
            return (this[e] = !0), e;
        },
    }),
        de.ajaxPrefilter("json jsonp", function (t, n, i) {
            var r,
                o,
                a,
                s = !1 !== t.jsonp && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (r = t.jsonpCallback = de.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Rt, "$1" + r)) : !1 !== t.jsonp && (t.url += (Mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                    (t.converters["script json"] = function () {
                        return a || de.error(r + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[r]),
                    (e[r] = function () {
                        a = arguments;
                    }),
                    i.always(function () {
                        void 0 === o ? de(e).removeProp(r) : (e[r] = o), t[r] && ((t.jsonpCallback = n.jsonpCallback), $t.push(r)), a && de.isFunction(o) && o(a[0]), (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (pe.createHTMLDocument = (function () {
            var e = te.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (de.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var i, r, o;
            return (
                t || (pe.createHTMLDocument ? (((i = (t = te.implementation.createHTMLDocument("")).createElement("base")).href = te.location.href), t.head.appendChild(i)) : (t = te)),
                (r = ze.exec(e)),
                (o = !n && []),
                r ? [t.createElement(r[1])] : ((r = x([e], t, o)), o && o.length && de(o).remove(), de.merge([], r.childNodes))
            );
        }),
        (de.fn.load = function (e, t, n) {
            var i,
                r,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                s > -1 && ((i = U(e.slice(s))), (e = e.slice(0, s))),
                de.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                a.length > 0 &&
                de
                    .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                    .done(function (e) {
                        (o = arguments), a.html(i ? de("<div>").append(de.parseHTML(e)).find(i) : e);
                    })
                    .always(
                        n &&
                        function (e, t) {
                            a.each(function () {
                                n.apply(this, o || [e.responseText, t, e]);
                            });
                        }
                    ),
                this
            );
        }),
        de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            de.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (de.expr.pseudos.animated = function (e) {
            return de.grep(de.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (de.offset = {
            setOffset: function (e, t, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    c,
                    l = de.css(e, "position"),
                    u = de(e),
                    h = {};
                "static" === l && (e.style.position = "relative"),
                    (s = u.offset()),
                    (o = de.css(e, "top")),
                    (c = de.css(e, "left")),
                    ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1 ? ((a = (i = u.position()).top), (r = i.left)) : ((a = parseFloat(o) || 0), (r = parseFloat(c) || 0)),
                    de.isFunction(t) && (t = t.call(e, n, de.extend({}, s))),
                    null != t.top && (h.top = t.top - s.top + a),
                    null != t.left && (h.left = t.left - s.left + r),
                    "using" in t ? t.using.call(e, h) : u.css(h);
            },
        }),
        de.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                            de.offset.setOffset(this, e, t);
                        });
                var t,
                    n,
                    i,
                    r,
                    o = this[0];
                if (o)
                    return o.getClientRects().length
                        ? ((i = o.getBoundingClientRect()), (t = o.ownerDocument), (n = t.documentElement), (r = t.defaultView), { top: i.top + r.pageYOffset - n.clientTop, left: i.left + r.pageXOffset - n.clientLeft })
                        : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = this[0],
                        i = { top: 0, left: 0 };
                    return (
                        "fixed" === de.css(n, "position")
                            ? (t = n.getBoundingClientRect())
                            : ((e = this.offsetParent()), (t = this.offset()), r(e[0], "html") || (i = e.offset()), (i = { top: i.top + de.css(e[0], "borderTopWidth", !0), left: i.left + de.css(e[0], "borderLeftWidth", !0) })),
                        { top: t.top - i.top - de.css(n, "marginTop", !0), left: t.left - i.left - de.css(n, "marginLeft", !0) }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === de.css(e, "position");) e = e.offsetParent;
                    return e || Je;
                });
            },
        }),
        de.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            de.fn[e] = function (i) {
                return je(
                    this,
                    function (e, i, r) {
                        var o;
                        if ((de.isWindow(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                );
            };
        }),
        de.each(["top", "left"], function (e, t) {
            de.cssHooks[t] = H(pe.pixelPosition, function (e, n) {
                if (n) return (n = L(e, t)), rt.test(n) ? de(e).position()[t] + "px" : n;
            });
        }),
        de.each({ Height: "height", Width: "width" }, function (e, t) {
            de.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                de.fn[i] = function (r, o) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                    return je(
                        this,
                        function (t, n, r) {
                            var o;
                            return de.isWindow(t)
                                ? 0 === i.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                    ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                    : void 0 === r
                                        ? de.css(t, n, s)
                                        : de.style(t, n, r, s);
                        },
                        t,
                        a ? r : void 0,
                        a
                    );
                };
            });
        }),
        de.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (de.holdReady = function (e) {
            e ? de.readyWait++ : de.ready(!0);
        }),
        (de.isArray = Array.isArray),
        (de.parseJSON = JSON.parse),
        (de.nodeName = r),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
            return de;
        });
    var Vt = e.jQuery,
        Wt = e.$;
    return (
        (de.noConflict = function (t) {
            return e.$ === de && (e.$ = Wt), t && e.jQuery === de && (e.jQuery = Vt), de;
        }),
        t || (e.jQuery = e.$ = de),
        de
    );
}),
    (function (e) {
        !(function () {
            var e = function (t) {
                var n = new e.Index();
                return n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer), t && t.call(n, n), n;
            };
            (e.version = "0.7.0"),
                (e.utils = {}),
                (e.utils.warn = (function (e) {
                    return function (t) {
                        e.console && console.warn && console.warn(t);
                    };
                })(this)),
                (e.utils.asString = function (e) {
                    return void 0 === e || null === e ? "" : e.toString();
                }),
                (e.EventEmitter = function () {
                    this.events = {};
                }),
                (e.EventEmitter.prototype.addListener = function () {
                    var e = Array.prototype.slice.call(arguments),
                        t = e.pop(),
                        n = e;
                    if ("function" != typeof t) throw new TypeError("last argument must be a function");
                    n.forEach(function (e) {
                        this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t);
                    }, this);
                }),
                (e.EventEmitter.prototype.removeListener = function (e, t) {
                    if (this.hasHandler(e)) {
                        var n = this.events[e].indexOf(t);
                        this.events[e].splice(n, 1), this.events[e].length || delete this.events[e];
                    }
                }),
                (e.EventEmitter.prototype.emit = function (e) {
                    if (this.hasHandler(e)) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        this.events[e].forEach(function (e) {
                            e.apply(void 0, t);
                        });
                    }
                }),
                (e.EventEmitter.prototype.hasHandler = function (e) {
                    return e in this.events;
                }),
                (e.tokenizer = function (t) {
                    return arguments.length && null != t && void 0 != t
                        ? Array.isArray(t)
                            ? t.map(function (t) {
                                return e.utils.asString(t).toLowerCase();
                            })
                            : t.toString().trim().toLowerCase().split(e.tokenizer.seperator)
                        : [];
                }),
                (e.tokenizer.seperator = /[\s\-]+/),
                (e.tokenizer.load = function (e) {
                    var t = this.registeredFunctions[e];
                    if (!t) throw new Error("Cannot load un-registered function: " + e);
                    return t;
                }),
                (e.tokenizer.label = "default"),
                (e.tokenizer.registeredFunctions = { default: e.tokenizer }),
                (e.tokenizer.registerFunction = function (t, n) {
                    n in this.registeredFunctions && e.utils.warn("Overwriting existing tokenizer: " + n), (t.label = n), (this.registeredFunctions[n] = t);
                }),
                (e.Pipeline = function () {
                    this._stack = [];
                }),
                (e.Pipeline.registeredFunctions = {}),
                (e.Pipeline.registerFunction = function (t, n) {
                    n in this.registeredFunctions && e.utils.warn("Overwriting existing registered function: " + n), (t.label = n), (e.Pipeline.registeredFunctions[t.label] = t);
                }),
                (e.Pipeline.warnIfFunctionNotRegistered = function (t) {
                    (t.label && t.label in this.registeredFunctions) || e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", t);
                }),
                (e.Pipeline.load = function (t) {
                    var n = new e.Pipeline();
                    return (
                        t.forEach(function (t) {
                            var i = e.Pipeline.registeredFunctions[t];
                            if (!i) throw new Error("Cannot load un-registered function: " + t);
                            n.add(i);
                        }),
                        n
                    );
                }),
                (e.Pipeline.prototype.add = function () {
                    Array.prototype.slice.call(arguments).forEach(function (t) {
                        e.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t);
                    }, this);
                }),
                (e.Pipeline.prototype.after = function (t, n) {
                    e.Pipeline.warnIfFunctionNotRegistered(n);
                    var i = this._stack.indexOf(t);
                    if (-1 == i) throw new Error("Cannot find existingFn");
                    (i += 1), this._stack.splice(i, 0, n);
                }),
                (e.Pipeline.prototype.before = function (t, n) {
                    e.Pipeline.warnIfFunctionNotRegistered(n);
                    var i = this._stack.indexOf(t);
                    if (-1 == i) throw new Error("Cannot find existingFn");
                    this._stack.splice(i, 0, n);
                }),
                (e.Pipeline.prototype.remove = function (e) {
                    var t = this._stack.indexOf(e);
                    -1 != t && this._stack.splice(t, 1);
                }),
                (e.Pipeline.prototype.run = function (e) {
                    for (var t = [], n = e.length, i = this._stack.length, r = 0; n > r; r++) {
                        for (var o = e[r], a = 0; i > a && void 0 !== (o = this._stack[a](o, r, e)) && "" !== o; a++);
                        void 0 !== o && "" !== o && t.push(o);
                    }
                    return t;
                }),
                (e.Pipeline.prototype.reset = function () {
                    this._stack = [];
                }),
                (e.Pipeline.prototype.toJSON = function () {
                    return this._stack.map(function (t) {
                        return e.Pipeline.warnIfFunctionNotRegistered(t), t.label;
                    });
                }),
                (e.Vector = function () {
                    (this._magnitude = null), (this.list = void 0), (this.length = 0);
                }),
                (e.Vector.Node = function (e, t, n) {
                    (this.idx = e), (this.val = t), (this.next = n);
                }),
                (e.Vector.prototype.insert = function (t, n) {
                    this._magnitude = void 0;
                    var i = this.list;
                    if (!i) return (this.list = new e.Vector.Node(t, n, i)), this.length++;
                    if (t < i.idx) return (this.list = new e.Vector.Node(t, n, i)), this.length++;
                    for (var r = i, o = i.next; void 0 != o;) {
                        if (t < o.idx) return (r.next = new e.Vector.Node(t, n, o)), this.length++;
                        (r = o), (o = o.next);
                    }
                    return (r.next = new e.Vector.Node(t, n, o)), this.length++;
                }),
                (e.Vector.prototype.magnitude = function () {
                    if (this._magnitude) return this._magnitude;
                    for (var e, t = this.list, n = 0; t;) (e = t.val), (n += e * e), (t = t.next);
                    return (this._magnitude = Math.sqrt(n));
                }),
                (e.Vector.prototype.dot = function (e) {
                    for (var t = this.list, n = e.list, i = 0; t && n;) t.idx < n.idx ? (t = t.next) : t.idx > n.idx ? (n = n.next) : ((i += t.val * n.val), (t = t.next), (n = n.next));
                    return i;
                }),
                (e.Vector.prototype.similarity = function (e) {
                    return this.dot(e) / (this.magnitude() * e.magnitude());
                }),
                (e.SortedSet = function () {
                    (this.length = 0), (this.elements = []);
                }),
                (e.SortedSet.load = function (e) {
                    var t = new this();
                    return (t.elements = e), (t.length = e.length), t;
                }),
                (e.SortedSet.prototype.add = function () {
                    var e, t;
                    for (e = 0; e < arguments.length; e++) (t = arguments[e]), ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t);
                    this.length = this.elements.length;
                }),
                (e.SortedSet.prototype.toArray = function () {
                    return this.elements.slice();
                }),
                (e.SortedSet.prototype.map = function (e, t) {
                    return this.elements.map(e, t);
                }),
                (e.SortedSet.prototype.forEach = function (e, t) {
                    return this.elements.forEach(e, t);
                }),
                (e.SortedSet.prototype.indexOf = function (e) {
                    for (var t = 0, n = this.elements.length, i = n - t, r = t + Math.floor(i / 2), o = this.elements[r]; i > 1;) {
                        if (o === e) return r;
                        e > o && (t = r), o > e && (n = r), (i = n - t), (r = t + Math.floor(i / 2)), (o = this.elements[r]);
                    }
                    return o === e ? r : -1;
                }),
                (e.SortedSet.prototype.locationFor = function (e) {
                    for (var t = 0, n = this.elements.length, i = n - t, r = t + Math.floor(i / 2), o = this.elements[r]; i > 1;) e > o && (t = r), o > e && (n = r), (i = n - t), (r = t + Math.floor(i / 2)), (o = this.elements[r]);
                    return o > e ? r : e > o ? r + 1 : void 0;
                }),
                (e.SortedSet.prototype.intersect = function (t) {
                    for (var n = new e.SortedSet(), i = 0, r = 0, o = this.length, a = t.length, s = this.elements, c = t.elements; !(i > o - 1 || r > a - 1);)
                        s[i] !== c[r] ? (s[i] < c[r] ? i++ : s[i] > c[r] && r++) : (n.add(s[i]), i++, r++);
                    return n;
                }),
                (e.SortedSet.prototype.clone = function () {
                    var t = new e.SortedSet();
                    return (t.elements = this.toArray()), (t.length = t.elements.length), t;
                }),
                (e.SortedSet.prototype.union = function (e) {
                    var t, n, i;
                    this.length >= e.length ? ((t = this), (n = e)) : ((t = e), (n = this)), (i = t.clone());
                    for (var r = 0, o = n.toArray(); r < o.length; r++) i.add(o[r]);
                    return i;
                }),
                (e.SortedSet.prototype.toJSON = function () {
                    return this.toArray();
                }),
                (e.Index = function () {
                    (this._fields = []),
                        (this._ref = "id"),
                        (this.pipeline = new e.Pipeline()),
                        (this.documentStore = new e.Store()),
                        (this.tokenStore = new e.TokenStore()),
                        (this.corpusTokens = new e.SortedSet()),
                        (this.eventEmitter = new e.EventEmitter()),
                        (this.tokenizerFn = e.tokenizer),
                        (this._idfCache = {}),
                        this.on(
                            "add",
                            "remove",
                            "update",
                            function () {
                                this._idfCache = {};
                            }.bind(this)
                        );
                }),
                (e.Index.prototype.on = function () {
                    var e = Array.prototype.slice.call(arguments);
                    return this.eventEmitter.addListener.apply(this.eventEmitter, e);
                }),
                (e.Index.prototype.off = function (e, t) {
                    return this.eventEmitter.removeListener(e, t);
                }),
                (e.Index.load = function (t) {
                    t.version !== e.version && e.utils.warn("version mismatch: current " + e.version + " importing " + t.version);
                    var n = new this();
                    return (
                        (n._fields = t.fields),
                        (n._ref = t.ref),
                        (n.tokenizer = e.tokenizer.load(t.tokenizer)),
                        (n.documentStore = e.Store.load(t.documentStore)),
                        (n.tokenStore = e.TokenStore.load(t.tokenStore)),
                        (n.corpusTokens = e.SortedSet.load(t.corpusTokens)),
                        (n.pipeline = e.Pipeline.load(t.pipeline)),
                        n
                    );
                }),
                (e.Index.prototype.field = function (e, t) {
                    var n = { name: e, boost: (t = t || {}).boost || 1 };
                    return this._fields.push(n), this;
                }),
                (e.Index.prototype.ref = function (e) {
                    return (this._ref = e), this;
                }),
                (e.Index.prototype.tokenizer = function (t) {
                    return (t.label && t.label in e.tokenizer.registeredFunctions) || e.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"), (this.tokenizerFn = t), this;
                }),
                (e.Index.prototype.add = function (t, n) {
                    var i = {},
                        r = new e.SortedSet(),
                        o = t[this._ref],
                        n = void 0 === n || n;
                    this._fields.forEach(function (e) {
                        var n = this.pipeline.run(this.tokenizerFn(t[e.name]));
                        i[e.name] = n;
                        for (var o = 0; o < n.length; o++) {
                            var a = n[o];
                            r.add(a), this.corpusTokens.add(a);
                        }
                    }, this),
                        this.documentStore.set(o, r);
                    for (var a = 0; a < r.length; a++) {
                        for (var s = r.elements[a], c = 0, l = 0; l < this._fields.length; l++) {
                            var u = this._fields[l],
                                h = i[u.name],
                                p = h.length;
                            if (p) {
                                for (var d = 0, f = 0; p > f; f++) h[f] === s && d++;
                                c += (d / p) * u.boost;
                            }
                        }
                        this.tokenStore.add(s, { ref: o, tf: c });
                    }
                    n && this.eventEmitter.emit("add", t, this);
                }),
                (e.Index.prototype.remove = function (e, t) {
                    var n = e[this._ref],
                        t = void 0 === t || t;
                    if (this.documentStore.has(n)) {
                        var i = this.documentStore.get(n);
                        this.documentStore.remove(n),
                            i.forEach(function (e) {
                                this.tokenStore.remove(e, n);
                            }, this),
                            t && this.eventEmitter.emit("remove", e, this);
                    }
                }),
                (e.Index.prototype.update = function (e, t) {
                    var t = void 0 === t || t;
                    this.remove(e, !1), this.add(e, !1), t && this.eventEmitter.emit("update", e, this);
                }),
                (e.Index.prototype.idf = function (e) {
                    var t = "@" + e;
                    if (Object.prototype.hasOwnProperty.call(this._idfCache, t)) return this._idfCache[t];
                    var n = this.tokenStore.count(e),
                        i = 1;
                    return n > 0 && (i = 1 + Math.log(this.documentStore.length / n)), (this._idfCache[t] = i);
                }),
                (e.Index.prototype.search = function (t) {
                    var n = this.pipeline.run(this.tokenizerFn(t)),
                        i = new e.Vector(),
                        r = [],
                        o = this._fields.reduce(function (e, t) {
                            return e + t.boost;
                        }, 0);
                    return n.some(function (e) {
                        return this.tokenStore.has(e);
                    }, this)
                        ? (n.forEach(function (t, n, a) {
                            var s = (1 / a.length) * this._fields.length * o,
                                c = this,
                                l = this.tokenStore.expand(t).reduce(function (n, r) {
                                    var o = c.corpusTokens.indexOf(r),
                                        a = c.idf(r),
                                        l = 1,
                                        u = new e.SortedSet();
                                    if (r !== t) {
                                        var h = Math.max(3, r.length - t.length);
                                        l = 1 / Math.log(h);
                                    }
                                    o > -1 && i.insert(o, s * a * l);
                                    for (var p = c.tokenStore.get(r), d = Object.keys(p), f = d.length, m = 0; f > m; m++) u.add(p[d[m]].ref);
                                    return n.union(u);
                                }, new e.SortedSet());
                            r.push(l);
                        }, this),
                            r
                                .reduce(function (e, t) {
                                    return e.intersect(t);
                                })
                                .map(function (e) {
                                    return { ref: e, score: i.similarity(this.documentVector(e)) };
                                }, this)
                                .sort(function (e, t) {
                                    return t.score - e.score;
                                }))
                        : [];
                }),
                (e.Index.prototype.documentVector = function (t) {
                    for (var n = this.documentStore.get(t), i = n.length, r = new e.Vector(), o = 0; i > o; o++) {
                        var a = n.elements[o],
                            s = this.tokenStore.get(a)[t].tf,
                            c = this.idf(a);
                        r.insert(this.corpusTokens.indexOf(a), s * c);
                    }
                    return r;
                }),
                (e.Index.prototype.toJSON = function () {
                    return {
                        version: e.version,
                        fields: this._fields,
                        ref: this._ref,
                        tokenizer: this.tokenizerFn.label,
                        documentStore: this.documentStore.toJSON(),
                        tokenStore: this.tokenStore.toJSON(),
                        corpusTokens: this.corpusTokens.toJSON(),
                        pipeline: this.pipeline.toJSON(),
                    };
                }),
                (e.Index.prototype.use = function (e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    t.unshift(this), e.apply(this, t);
                }),
                (e.Store = function () {
                    (this.store = {}), (this.length = 0);
                }),
                (e.Store.load = function (t) {
                    var n = new this();
                    return (
                        (n.length = t.length),
                        (n.store = Object.keys(t.store).reduce(function (n, i) {
                            return (n[i] = e.SortedSet.load(t.store[i])), n;
                        }, {})),
                        n
                    );
                }),
                (e.Store.prototype.set = function (e, t) {
                    this.has(e) || this.length++, (this.store[e] = t);
                }),
                (e.Store.prototype.get = function (e) {
                    return this.store[e];
                }),
                (e.Store.prototype.has = function (e) {
                    return e in this.store;
                }),
                (e.Store.prototype.remove = function (e) {
                    this.has(e) && (delete this.store[e], this.length--);
                }),
                (e.Store.prototype.toJSON = function () {
                    return { store: this.store, length: this.length };
                }),
                (e.stemmer = (function () {
                    var e = {
                        ational: "ate",
                        tional: "tion",
                        enci: "ence",
                        anci: "ance",
                        izer: "ize",
                        bli: "ble",
                        alli: "al",
                        entli: "ent",
                        eli: "e",
                        ousli: "ous",
                        ization: "ize",
                        ation: "ate",
                        ator: "ate",
                        alism: "al",
                        iveness: "ive",
                        fulness: "ful",
                        ousness: "ous",
                        aliti: "al",
                        iviti: "ive",
                        biliti: "ble",
                        logi: "log",
                    },
                        t = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" },
                        n = "[aeiouy]",
                        i = "[^aeiou][^aeiouy]*",
                        r = n + "[aeiou]*",
                        o = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),
                        a = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),
                        s = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),
                        c = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),
                        l = /^(.+?)(ss|i)es$/,
                        u = /^(.+?)([^s])s$/,
                        h = /^(.+?)eed$/,
                        p = /^(.+?)(ed|ing)$/,
                        d = /.$/,
                        f = /(at|bl|iz)$/,
                        m = new RegExp("([^aeiouylsz])\\1$"),
                        v = new RegExp("^" + i + n + "[^aeiouwxy]$"),
                        g = /^(.+?[^aeiou])y$/,
                        y = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
                        b = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                        x = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
                        w = /^(.+?)(s|t)(ion)$/,
                        z = /^(.+?)e$/,
                        k = /ll$/,
                        M = new RegExp("^" + i + n + "[^aeiouwxy]$");
                    return function (n) {
                        var i, r, S, T, C, E, A;
                        if (n.length < 3) return n;
                        if (("y" == (S = n.substr(0, 1)) && (n = S.toUpperCase() + n.substr(1)), (T = l), (C = u), T.test(n) ? (n = n.replace(T, "$1$2")) : C.test(n) && (n = n.replace(C, "$1$2")), (T = h), (C = p), T.test(n))) {
                            var N = T.exec(n);
                            (T = o).test(N[1]) && ((T = d), (n = n.replace(T, "")));
                        } else C.test(n) && ((i = (N = C.exec(n))[1]), (C = c).test(i) && ((n = i), (C = f), (E = m), (A = v), C.test(n) ? (n += "e") : E.test(n) ? ((T = d), (n = n.replace(T, ""))) : A.test(n) && (n += "e")));
                        return (
                            (T = g).test(n) && (n = (i = (N = T.exec(n))[1]) + "i"),
                            (T = y).test(n) && ((i = (N = T.exec(n))[1]), (r = N[2]), (T = o).test(i) && (n = i + e[r])),
                            (T = b).test(n) && ((i = (N = T.exec(n))[1]), (r = N[2]), (T = o).test(i) && (n = i + t[r])),
                            (T = x),
                            (C = w),
                            T.test(n) ? ((i = (N = T.exec(n))[1]), (T = a).test(i) && (n = i)) : C.test(n) && ((i = (N = C.exec(n))[1] + N[2]), (C = a).test(i) && (n = i)),
                            (T = z).test(n) && ((i = (N = T.exec(n))[1]), (C = s), (E = M), ((T = a).test(i) || (C.test(i) && !E.test(i))) && (n = i)),
                            (T = k),
                            (C = a),
                            T.test(n) && C.test(n) && ((T = d), (n = n.replace(T, ""))),
                            "y" == S && (n = S.toLowerCase() + n.substr(1)),
                            n
                        );
                    };
                })()),
                e.Pipeline.registerFunction(e.stemmer, "stemmer"),
                (e.generateStopWordFilter = function (e) {
                    var t = e.reduce(function (e, t) {
                        return (e[t] = t), e;
                    }, {});
                    return function (e) {
                        return e && t[e] !== e ? e : void 0;
                    };
                }),
                (e.stopWordFilter = e.generateStopWordFilter([
                    "a",
                    "able",
                    "about",
                    "across",
                    "after",
                    "all",
                    "almost",
                    "also",
                    "am",
                    "among",
                    "an",
                    "and",
                    "any",
                    "are",
                    "as",
                    "at",
                    "be",
                    "because",
                    "been",
                    "but",
                    "by",
                    "can",
                    "cannot",
                    "could",
                    "dear",
                    "did",
                    "do",
                    "does",
                    "either",
                    "else",
                    "ever",
                    "every",
                    "for",
                    "from",
                    "get",
                    "got",
                    "had",
                    "has",
                    "have",
                    "he",
                    "her",
                    "hers",
                    "him",
                    "his",
                    "how",
                    "however",
                    "i",
                    "if",
                    "in",
                    "into",
                    "is",
                    "it",
                    "its",
                    "just",
                    "least",
                    "let",
                    "like",
                    "likely",
                    "may",
                    "me",
                    "might",
                    "most",
                    "must",
                    "my",
                    "neither",
                    "no",
                    "nor",
                    "not",
                    "of",
                    "off",
                    "often",
                    "on",
                    "only",
                    "or",
                    "other",
                    "our",
                    "own",
                    "rather",
                    "said",
                    "say",
                    "says",
                    "she",
                    "should",
                    "since",
                    "so",
                    "some",
                    "than",
                    "that",
                    "the",
                    "their",
                    "them",
                    "then",
                    "there",
                    "these",
                    "they",
                    "this",
                    "tis",
                    "to",
                    "too",
                    "twas",
                    "us",
                    "wants",
                    "was",
                    "we",
                    "were",
                    "what",
                    "when",
                    "where",
                    "which",
                    "while",
                    "who",
                    "whom",
                    "why",
                    "will",
                    "with",
                    "would",
                    "yet",
                    "you",
                    "your",
                ])),
                e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter"),
                (e.trimmer = function (e) {
                    return e.replace(/^\W+/, "").replace(/\W+$/, "");
                }),
                e.Pipeline.registerFunction(e.trimmer, "trimmer"),
                (e.TokenStore = function () {
                    (this.root = { docs: {} }), (this.length = 0);
                }),
                (e.TokenStore.load = function (e) {
                    var t = new this();
                    return (t.root = e.root), (t.length = e.length), t;
                }),
                (e.TokenStore.prototype.add = function (e, t, n) {
                    var n = n || this.root,
                        i = e.charAt(0),
                        r = e.slice(1);
                    return i in n || (n[i] = { docs: {} }), 0 === r.length ? ((n[i].docs[t.ref] = t), void (this.length += 1)) : this.add(r, t, n[i]);
                }),
                (e.TokenStore.prototype.has = function (e) {
                    if (!e) return !1;
                    for (var t = this.root, n = 0; n < e.length; n++) {
                        if (!t[e.charAt(n)]) return !1;
                        t = t[e.charAt(n)];
                    }
                    return !0;
                }),
                (e.TokenStore.prototype.getNode = function (e) {
                    if (!e) return {};
                    for (var t = this.root, n = 0; n < e.length; n++) {
                        if (!t[e.charAt(n)]) return {};
                        t = t[e.charAt(n)];
                    }
                    return t;
                }),
                (e.TokenStore.prototype.get = function (e, t) {
                    return this.getNode(e, t).docs || {};
                }),
                (e.TokenStore.prototype.count = function (e, t) {
                    return Object.keys(this.get(e, t)).length;
                }),
                (e.TokenStore.prototype.remove = function (e, t) {
                    if (e) {
                        for (var n = this.root, i = 0; i < e.length; i++) {
                            if (!(e.charAt(i) in n)) return;
                            n = n[e.charAt(i)];
                        }
                        delete n.docs[t];
                    }
                }),
                (e.TokenStore.prototype.expand = function (e, t) {
                    var n = this.getNode(e),
                        i = n.docs || {},
                        t = t || [];
                    return (
                        Object.keys(i).length && t.push(e),
                        Object.keys(n).forEach(function (n) {
                            "docs" !== n && t.concat(this.expand(e + n, t));
                        }, this),
                        t
                    );
                }),
                (e.TokenStore.prototype.toJSON = function () {
                    return { root: this.root, length: this.length };
                }),
                (function (e, t) {
                    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? (module.exports = t()) : (e.lunr = t());
                })(this, function () {
                    return e;
                });
        })(),
            (e.fn.ghostHunter = function (t) {
                var i = e.extend({}, e.fn.ghostHunter.defaults, t);
                if (i.results) return n.init(this, i), n;
            }),
            (e.fn.ghostHunter.defaults = {
                resultsData: !1,
                onPageLoad: !1,
                onKeyUp: !1,
                result_template: "<a href='{{link}}'><p><h2>{{title}}</h2><h4>{{prettyPubDate}}</h4></p></a>",
                info_template: "<p>Number of posts found: {{amount}}</p>",
                displaySearchInfo: !0,
                zeroResultsInfo: !0,
                before: !1,
                onComplete: !1,
                includepages: !1,
                filterfields: !1,
            });
        var t = function (e) {
            var t = new Date(e),
                n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return t.getDate() + " " + n[t.getMonth()] + " " + t.getFullYear();
        },
            n = {
                isInit: !1,
                init: function (e, t) {
                    var n = this;
                    (this.target = e),
                        (this.results = t.results),
                        (this.blogData = {}),
                        (this.result_template = t.result_template),
                        (this.info_template = t.info_template),
                        (this.zeroResultsInfo = t.zeroResultsInfo),
                        (this.displaySearchInfo = t.displaySearchInfo),
                        (this.before = t.before),
                        (this.onComplete = t.onComplete),
                        (this.includepages = t.includepages),
                        (this.filterfields = t.filterfields),
                        (this.index = lunr(function () {
                            this.field("title", { boost: 10 }), this.field("description"), this.field("link"), this.field("markdown", { boost: 5 }), this.field("pubDate"), this.field("tag"), this.ref("id");
                        })),
                        t.onPageLoad
                            ? n.loadAPI()
                            : e.focus(function () {
                                n.loadAPI();
                            }),
                        e.closest("form").submit(function (t) {
                            t.preventDefault(), n.find(e.val());
                        }),
                        t.onKeyUp &&
                        e.keyup(function () {
                            n.find(e.val());
                        });
                },
                loadAPI: function () { return null },
                find: function (t) {
                    var n = this.index.search(t),
                        i = e(this.results),
                        r = [];
                    i.empty(), this.before && this.before(), (this.zeroResultsInfo || n.length > 0) && this.displaySearchInfo && i.append(this.format(this.info_template, { amount: n.length }));
                    for (var o = 0; o < n.length; o++) {
                        var a = n[o].ref,
                            s = this.blogData[a];
                        i.append(this.format(this.result_template, s)), r.push(s);
                    }
                    this.onComplete && this.onComplete(r);
                },
                clear: function () {
                    e(this.results).empty(), this.target.val("");
                },
                format: function (e, t) {
                    return e.replace(/{{([^{}]*)}}/g, function (e, n) {
                        var i = t[n];
                        return "string" == typeof i || "number" == typeof i ? i : e;
                    });
                },
            };
    })(jQuery),
    (function (e) {
        "use strict";
        (e.fn.fitVids = function (t) {
            var n = { customSelector: null, ignore: null };
            if (!document.getElementById("fit-vids-style")) {
                var i = document.head || document.getElementsByTagName("head")[0],
                    r = document.createElement("div");
                (r.innerHTML =
                    '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
                    i.appendChild(r.childNodes[1]);
            }
            return (
                t && e.extend(n, t),
                this.each(function () {
                    var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                    n.customSelector && t.push(n.customSelector);
                    var i = ".fitvidsignore";
                    n.ignore && (i = i + ", " + n.ignore);
                    var r = e(this).find(t.join(","));
                    (r = (r = r.not("object object")).not(i)).each(function () {
                        var t = e(this);
                        if (!(t.parents(i).length > 0 || ("embed" === this.tagName.toLowerCase() && t.parent("object").length) || t.parent(".fluid-width-video-wrapper").length)) {
                            t.css("height") || t.css("width") || (!isNaN(t.attr("height")) && !isNaN(t.attr("width"))) || (t.attr("height", 9), t.attr("width", 16));
                            var n =
                                ("object" === this.tagName.toLowerCase() || (t.attr("height") && !isNaN(parseInt(t.attr("height"), 10))) ? parseInt(t.attr("height"), 10) : t.height()) /
                                (isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10));
                            if (!t.attr("name")) {
                                var r = "fitvid" + e.fn.fitVids._count;
                                t.attr("name", r), e.fn.fitVids._count++;
                            }
                            t
                                .wrap('<div class="fluid-width-video-wrapper"></div>')
                                .parent(".fluid-width-video-wrapper")
                                .css("padding-top", 100 * n + "%"),
                                t.removeAttr("height").removeAttr("width");
                        }
                    });
                })
            );
        }),
            (e.fn.fitVids._count = 0);
    })(window.jQuery || window.Zepto),
    (function (e) {
        e.fn.viewportChecker = function (t) {
            var n = {
                classToAdd: "visible",
                classToRemove: "invisible",
                classToAddForFullView: "full-visible",
                removeClassAfterAnimation: !1,
                offset: 100,
                repeat: !1,
                invertBottomOffset: !0,
                callbackFunction: function (e, t) { },
                scrollHorizontal: !1,
                scrollBox: window,
            };
            e.extend(n, t);
            var i = this,
                r = { height: e(n.scrollBox).height(), width: e(n.scrollBox).width() };
            return (
                (this.checkElements = function () {
                    var t, o;
                    n.scrollHorizontal
                        ? ((t = Math.max(e("html").scrollLeft(), e("body").scrollLeft(), e(window).scrollLeft())), (o = t + r.width))
                        : ((t = Math.max(e("html").scrollTop(), e("body").scrollTop(), e(window).scrollTop())), (o = t + r.height)),
                        i.each(function () {
                            var i = e(this),
                                a = {},
                                s = {};
                            if (
                                (i.data("vp-add-class") && (s.classToAdd = i.data("vp-add-class")),
                                    i.data("vp-remove-class") && (s.classToRemove = i.data("vp-remove-class")),
                                    i.data("vp-add-class-full-view") && (s.classToAddForFullView = i.data("vp-add-class-full-view")),
                                    i.data("vp-keep-add-class") && (s.removeClassAfterAnimation = i.data("vp-remove-after-animation")),
                                    i.data("vp-offset") && (s.offset = i.data("vp-offset")),
                                    i.data("vp-repeat") && (s.repeat = i.data("vp-repeat")),
                                    i.data("vp-scrollHorizontal") && (s.scrollHorizontal = i.data("vp-scrollHorizontal")),
                                    i.data("vp-invertBottomOffset") && (s.scrollHorizontal = i.data("vp-invertBottomOffset")),
                                    e.extend(a, n),
                                    e.extend(a, s),
                                    !i.data("vp-animated") || a.repeat)
                            ) {
                                String(a.offset).indexOf("%") > 0 && (a.offset = (parseInt(a.offset) / 100) * r.height);
                                var c = a.scrollHorizontal ? i.offset().left : i.offset().top,
                                    l = a.scrollHorizontal ? c + i.width() : c + i.height(),
                                    u = Math.round(c) + a.offset,
                                    h = a.scrollHorizontal ? u + i.width() : u + i.height();
                                a.invertBottomOffset && (h -= 2 * a.offset),
                                    u < o && h > t
                                        ? (i.removeClass(a.classToRemove),
                                            i.addClass(a.classToAdd),
                                            a.callbackFunction(i, "add"),
                                            l <= o && c >= t ? i.addClass(a.classToAddForFullView) : i.removeClass(a.classToAddForFullView),
                                            i.data("vp-animated", !0),
                                            a.removeClassAfterAnimation &&
                                            i.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                                i.removeClass(a.classToAdd);
                                            }))
                                        : i.hasClass(a.classToAdd) && a.repeat && (i.removeClass(a.classToAdd + " " + a.classToAddForFullView), a.callbackFunction(i, "remove"), i.data("vp-animated", !1));
                            }
                        });
                }),
                ("ontouchstart" in window || "onmsgesturechange" in window) && e(document).bind("touchmove MSPointerMove pointermove", this.checkElements),
                e(n.scrollBox).bind("load scroll", this.checkElements),
                e(window).resize(function (t) {
                    (r = { height: e(n.scrollBox).height(), width: e(n.scrollBox).width() }), i.checkElements();
                }),
                this.checkElements(),
                this
            );
        };
    })(jQuery),
    (function (e) {
        "use strict";
        function t() {
            e.querySelector("body").insertAdjacentHTML(
                "afterbegin",
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ei-sprite" style="display:none"><symbol id=\'ei-archive-icon\' viewBox=\'0 0 50 50\'><path d="M42 20h-2v-5c0-.6-.4-1-1-1H11c-.6 0-1 .4-1 1v5H8v-5c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v5z"></path><path d="M37 40H13c-1.7 0-3-1.3-3-3V20h2v17c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V20h2v17c0 1.7-1.3 3-3 3z"></path><path d="M29 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path d="M8 18h34v2H8z"></path></symbol><symbol id=\'ei-arrow-down-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M25 34.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z"></path><path d="M24 16h2v17h-2z"></path></symbol><symbol id=\'ei-arrow-left-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M25.3 34.7L15.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"></path><path d="M17 24h17v2H17z"></path></symbol><symbol id=\'ei-arrow-right-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M24.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"></path><path d="M16 24h17v2H16z"></path></symbol><symbol id=\'ei-arrow-up-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M33.3 26.7L25 18.4l-8.3 8.3-1.4-1.4 9.7-9.7 9.7 9.7z"></path><path d="M24 17h2v17h-2z"></path></symbol><symbol id=\'ei-bell-icon\' viewBox=\'0 0 50 50\'><path d="M42 36c-6.5 0-7.4-6.3-8.2-11.9C32.9 17.9 32.1 12 25 12s-7.9 5.9-8.8 12.1C15.4 29.7 14.5 36 8 36v-2c4.6 0 5.3-3.9 6.2-10.1.9-6.2 2-13.9 10.8-13.9s9.9 7.7 10.8 13.9C36.7 30.1 37.4 34 42 34v2z"></path><path d="M25 40c-2.8 0-5-2.2-5-5h2c0 1.7 1.3 3 3 3s3-1.3 3-3h2c0 2.8-2.2 5-5 5z"></path><path d="M8 34h34v2H8z"></path><path d="M27 10c0 1.1-.9 1.5-2 1.5s-2-.4-2-1.5.9-2 2-2 2 .9 2 2z"></path></symbol><symbol id=\'ei-calendar-icon\' viewBox=\'0 0 50 50\'><path d="M37 38H13c-1.7 0-3-1.3-3-3V13c0-1.7 1.1-3 2.5-3H14v2h-1.5c-.2 0-.5.4-.5 1v22c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V13c0-.6-.3-1-.5-1H36v-2h1.5c1.4 0 2.5 1.3 2.5 3v22c0 1.7-1.3 3-3 3z"></path><path d="M17 14c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1z"></path><path d="M33 14c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1z"></path><path d="M20 10h10v2H20z"></path><path d="M12 16h26v2H12z"></path><path d="M34 20h2v2h-2z"></path><path d="M30 20h2v2h-2z"></path><path d="M26 20h2v2h-2z"></path><path d="M22 20h2v2h-2z"></path><path d="M18 20h2v2h-2z"></path><path d="M34 24h2v2h-2z"></path><path d="M30 24h2v2h-2z"></path><path d="M26 24h2v2h-2z"></path><path d="M22 24h2v2h-2z"></path><path d="M18 24h2v2h-2z"></path><path d="M14 24h2v2h-2z"></path><path d="M34 28h2v2h-2z"></path><path d="M30 28h2v2h-2z"></path><path d="M26 28h2v2h-2z"></path><path d="M22 28h2v2h-2z"></path><path d="M18 28h2v2h-2z"></path><path d="M14 28h2v2h-2z"></path><path d="M30 32h2v2h-2z"></path><path d="M26 32h2v2h-2z"></path><path d="M22 32h2v2h-2z"></path><path d="M18 32h2v2h-2z"></path><path d="M14 32h2v2h-2z"></path></symbol><symbol id=\'ei-camera-icon\' viewBox=\'0 0 50 50\'><path d="M39 38H11c-1.7 0-3-1.3-3-3V17c0-1.7 1.3-3 3-3h6c.2 0 .5-.2.6-.3l1.1-2.2c.4-.8 1.4-1.4 2.3-1.4h8c.9 0 1.9.6 2.3 1.4l1.1 2.2c.1.2.4.3.6.3h6c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3zM11 16c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1h-6c-.9 0-1.9-.6-2.3-1.4l-1.1-2.2c-.1-.2-.4-.4-.6-.4h-8c-.2 0-.5.2-.6.3l-1.1 2.2c-.4.9-1.4 1.5-2.3 1.5h-6z"></path><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><circle cx="35" cy="18" r="1"></circle><path d="M12 12h4v1h-4z"></path><path d="M25 21v-1c-2.8 0-5 2.2-5 5h1c0-2.2 1.8-4 4-4z"></path></symbol><symbol id=\'ei-cart-icon\' viewBox=\'0 0 50 50\'><path d="M35 34H13c-.3 0-.6-.2-.8-.4s-.2-.6-.1-.9l1.9-4.8L12.1 10H6V8h7c.5 0 .9.4 1 .9l2 19c0 .2 0 .3-.1.5L14.5 32H36l-1 2z"></path><path d="M15.2 29l-.4-2L38 22.2V14H14v-2h25c.6 0 1 .4 1 1v10c0 .5-.3.9-.8 1l-24 5z"></path><path d="M36 40c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path><path d="M12 40c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></symbol><symbol id=\'ei-chart-icon\' viewBox=\'0 0 50 50\'><path d="M18 36h-2V26h-4v10h-2V24h8z"></path><path d="M28 36h-2V20h-4v16h-2V18h8z"></path><path d="M38 36h-2V14h-4v22h-2V12h8z"></path><path d="M8 36h32v2H8z"></path></symbol><symbol id=\'ei-check-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M23 32.4l-8.7-8.7 1.4-1.4 7.3 7.3 11.3-11.3 1.4 1.4z"></path></symbol><symbol id=\'ei-chevron-down-icon\' viewBox=\'0 0 50 50\'><path d="M25 32.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z"></path></symbol><symbol id=\'ei-chevron-left-icon\' viewBox=\'0 0 50 50\'><path d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"></path></symbol><symbol id=\'ei-chevron-right-icon\' viewBox=\'0 0 50 50\'><path d="M22.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"></path></symbol><symbol id=\'ei-chevron-up-icon\' viewBox=\'0 0 50 50\'><path d="M33.3 28.7L25 20.4l-8.3 8.3-1.4-1.4 9.7-9.7 9.7 9.7z"></path></symbol><symbol id=\'ei-clock-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M30.3 33.7L24 27.4V16h2v10.6l5.7 5.7z"></path></symbol><symbol id=\'ei-close-o-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M32.283 16.302l1.414 1.415-15.98 15.98-1.414-1.414z"></path><path d="M17.717 16.302l15.98 15.98-1.414 1.415-15.98-15.98z"></path></symbol><symbol id=\'ei-close-icon\' viewBox=\'0 0 50 50\'><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"></path><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"></path></symbol><symbol id=\'ei-comment-icon\' viewBox=\'0 0 50 50\'><path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12 0 6.4 3.9 9.4 7.2 10.7l.7.3-.1.8c-.2 1.6-.5 3-1.1 4.2 3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z"></path></symbol><symbol id=\'ei-credit-card-icon\' viewBox=\'0 0 50 50\'><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path><path d="M9 16h32v6H9z"></path><path d="M12 26h1v2h-1z"></path><path d="M14 26h1v2h-1z"></path><path d="M16 26h1v2h-1z"></path><path d="M19 26h1v2h-1z"></path><path d="M21 26h1v2h-1z"></path><path d="M23 26h1v2h-1z"></path><path d="M26 26h1v2h-1z"></path><path d="M28 26h1v2h-1z"></path><path d="M30 26h1v2h-1z"></path><path d="M33 26h1v2h-1z"></path><path d="M35 26h1v2h-1z"></path><path d="M37 26h1v2h-1z"></path></symbol><symbol id=\'ei-envelope-icon\' viewBox=\'0 0 50 50\'><path opacity=".9" d="M31.796 24.244l9.97 9.97-1.415 1.414-9.97-9.97z"></path><path opacity=".9" d="M18.278 24.287l1.414 1.414-9.9 9.9-1.414-1.41z"></path><path d="M25 29.9c-1.5 0-3.1-.6-4.2-1.8L8.3 15.7l1.4-1.4 12.5 12.5c1.6 1.6 4.1 1.6 5.7 0l12.5-12.5 1.4 1.4-12.6 12.5c-1.1 1.1-2.7 1.7-4.2 1.7z"></path><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path></symbol><symbol id=\'ei-exclamation-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M24 32h2v2h-2z"></path><path d="M25.6 30h-1.2l-.4-8v-6h2v6z"></path></symbol><symbol id=\'ei-external-link-icon\' viewBox=\'0 0 50 50\'><path d="M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z"></path><path d="M40 20h-2v-8h-8v-2h10z"></path><path d="M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z"></path></symbol><symbol id=\'ei-eye-icon\' viewBox=\'0 0 50 50\'><path d="M25 36C13.5 36 8.3 25.9 8.1 25.4c-.1-.3-.1-.6 0-.9C8.3 24.1 13.5 14 25 14s16.7 10.1 16.9 10.6c.1.3.1.6 0 .9-.2.4-5.4 10.5-16.9 10.5zM10.1 25c1.1 1.9 5.9 9 14.9 9s13.7-7.1 14.9-9c-1.1-1.9-5.9-9-14.9-9s-13.7 7.1-14.9 9z"></path><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><path d="M25 30c-2.8 0-5-2.2-5-5 0-.6.4-1 1-1s1 .4 1 1c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3c-.6 0-1-.4-1-1s.4-1 1-1c2.8 0 5 2.2 5 5s-2.2 5-5 5z"></path></symbol><symbol id=\'ei-gear-icon\' viewBox=\'0 0 50 50\'><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><path d="M27.7 44h-5.4l-1.5-4.6c-1-.3-2-.7-2.9-1.2l-4.4 2.2-3.8-3.8 2.2-4.4c-.5-.9-.9-1.9-1.2-2.9L6 27.7v-5.4l4.6-1.5c.3-1 .7-2 1.2-2.9l-2.2-4.4 3.8-3.8 4.4 2.2c.9-.5 1.9-.9 2.9-1.2L22.3 6h5.4l1.5 4.6c1 .3 2 .7 2.9 1.2l4.4-2.2 3.8 3.8-2.2 4.4c.5.9.9 1.9 1.2 2.9l4.6 1.5v5.4l-4.6 1.5c-.3 1-.7 2-1.2 2.9l2.2 4.4-3.8 3.8-4.4-2.2c-.9.5-1.9.9-2.9 1.2L27.7 44zm-4-2h2.6l1.4-4.3.5-.1c1.2-.3 2.3-.8 3.4-1.4l.5-.3 4 2 1.8-1.8-2-4 .3-.5c.6-1 1.1-2.2 1.4-3.4l.1-.5 4.3-1.4v-2.6l-4.3-1.4-.1-.5c-.3-1.2-.8-2.3-1.4-3.4l-.3-.5 2-4-1.8-1.8-4 2-.5-.3c-1.1-.6-2.2-1.1-3.4-1.4l-.5-.1L26.3 8h-2.6l-1.4 4.3-.5.1c-1.2.3-2.3.8-3.4 1.4l-.5.3-4-2-1.8 1.8 2 4-.3.5c-.6 1-1.1 2.2-1.4 3.4l-.1.5L8 23.7v2.6l4.3 1.4.1.5c.3 1.2.8 2.3 1.4 3.4l.3.5-2 4 1.8 1.8 4-2 .5.3c1.1.6 2.2 1.1 3.4 1.4l.5.1 1.4 4.3z"></path></symbol><symbol id=\'ei-heart-icon\' viewBox=\'0 0 50 50\'><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"></path></symbol><symbol id=\'ei-image-icon\' viewBox=\'0 0 50 50\'><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path><path d="M30 24c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path><path d="M35.3 37.7L19 22.4 9.7 31l-1.4-1.4 10.7-10 17.7 16.7z"></path><path d="M40.4 32.7L35 28.3 30.5 32l-1.3-1.6 5.8-4.7 6.6 5.4z"></path></symbol><symbol id=\'ei-like-icon\' viewBox=\'0 0 50 50\'><path d="M40 23.2c0-2.1-1.7-3.2-4-3.2h-6.7c.5-1.8.7-3.5.7-5 0-5.8-1.6-7-3-7-.9 0-1.6.1-2.5.6-.3.2-.4.4-.5.7l-1 5.4c-1.1 2.8-3.8 5.3-6 7V36c.8 0 1.6.4 2.6.9 1.1.5 2.2 1.1 3.4 1.1h9.5c2 0 3.5-1.6 3.5-3 0-.3 0-.5-.1-.7 1.2-.5 2.1-1.5 2.1-2.8 0-.6-.1-1.1-.3-1.6.8-.5 1.5-1.4 1.5-2.4 0-.6-.3-1.2-.6-1.7.8-.6 1.4-1.6 1.4-2.6zm-2.1 0c0 1.3-1.3 1.4-1.5 2-.2.7.8.9.8 2.1 0 1.2-1.5 1.2-1.7 1.9-.2.8.5 1 .5 2.2v.2c-.2 1-1.7 1.1-2 1.5-.3.5 0 .7 0 1.8 0 .6-.7 1-1.5 1H23c-.8 0-1.6-.4-2.6-.9-.8-.4-1.6-.8-2.4-1V23.5c2.5-1.9 5.7-4.7 6.9-8.2v-.2l.9-5c.4-.1.7-.1 1.2-.1.2 0 1 1.2 1 5 0 1.5-.3 3.1-.8 5H27c-.6 0-1 .4-1 1s.4 1 1 1h9c1 0 1.9.5 1.9 1.2z"></path><path d="M16 38h-6c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zm-6-16v14h6V22h-6z"></path></symbol><symbol id=\'ei-link-icon\' viewBox=\'0 0 50 50\'><path d="M24 30.2c0 .2.1.5.1.8 0 1.4-.5 2.6-1.5 3.6l-2 2c-1 1-2.2 1.5-3.6 1.5-2.8 0-5.1-2.3-5.1-5.1 0-1.4.5-2.6 1.5-3.6l2-2c1-1 2.2-1.5 3.6-1.5.3 0 .5 0 .8.1l1.5-1.5c-.7-.3-1.5-.4-2.3-.4-1.9 0-3.6.7-4.9 2l-2 2c-1.3 1.3-2 3-2 4.9 0 3.8 3.1 6.9 6.9 6.9 1.9 0 3.6-.7 4.9-2l2-2c1.3-1.3 2-3 2-4.9 0-.8-.1-1.6-.4-2.3L24 30.2z"></path><path d="M33 10.1c-1.9 0-3.6.7-4.9 2l-2 2c-1.3 1.3-2 3-2 4.9 0 .8.1 1.6.4 2.3l1.5-1.5c0-.2-.1-.5-.1-.8 0-1.4.5-2.6 1.5-3.6l2-2c1-1 2.2-1.5 3.6-1.5 2.8 0 5.1 2.3 5.1 5.1 0 1.4-.5 2.6-1.5 3.6l-2 2c-1 1-2.2 1.5-3.6 1.5-.3 0-.5 0-.8-.1l-1.5 1.5c.7.3 1.5.4 2.3.4 1.9 0 3.6-.7 4.9-2l2-2c1.3-1.3 2-3 2-4.9 0-3.8-3.1-6.9-6.9-6.9z"></path><path d="M20 31c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l10-10c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z"></path></symbol><symbol id=\'ei-location-icon\' viewBox=\'0 0 50 50\'><path d="M25 42.5l-.8-.9C23.7 41.1 12 27.3 12 19c0-7.2 5.8-13 13-13s13 5.8 13 13c0 8.3-11.7 22.1-12.2 22.7l-.8.8zM25 8c-6.1 0-11 4.9-11 11 0 6.4 8.4 17.2 11 20.4 2.6-3.2 11-14 11-20.4 0-6.1-4.9-11-11-11z"></path><path d="M25 24c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path></symbol><symbol id=\'ei-lock-icon\' viewBox=\'0 0 50 50\'><path d="M34 23h-2v-4c0-3.9-3.1-7-7-7s-7 3.1-7 7v4h-2v-4c0-5 4-9 9-9s9 4 9 9v4z"></path><path d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z"></path><circle cx="25" cy="28" r="2"></circle><path d="M25.5 28h-1l-1 6h3z"></path></symbol><symbol id=\'ei-minus-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M16 24h18v2H16z"></path></symbol><symbol id=\'ei-navicon-icon\' viewBox=\'0 0 50 50\'><path d="M10 12h30v4H10z"></path><path d="M10 22h30v4H10z"></path><path d="M10 32h30v4H10z"></path></symbol><symbol id=\'ei-paperclip-icon\' viewBox=\'0 0 50 50\'><path d="M13.8 39.6c-1.5 0-3.1-.6-4.2-1.8-2.3-2.3-2.3-6.1 0-8.5l17-17c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.3L25.1 36.4 23.7 35l12.7-12.7c2.3-2.3 2.3-6.1 0-8.5-2.3-2.3-6.1-2.3-8.5 0l-17 17c-.8.8-1.2 1.8-1.2 2.8 0 1.1.4 2.1 1.2 2.8 1.6 1.6 4.1 1.6 5.7 0l12.7-12.7c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L18 29.3l-1.4-1.4 8.5-8.5c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L18 37.8c-1.1 1.2-2.7 1.8-4.2 1.8z"></path></symbol><symbol id=\'ei-pencil-icon\' viewBox=\'0 0 50 50\'><path d="M9.6 40.4l2.5-9.9L27 15.6l7.4 7.4-14.9 14.9-9.9 2.5zm4.3-8.9l-1.5 6.1 6.1-1.5L31.6 23 27 18.4 13.9 31.5z"></path><path d="M17.8 37.3c-.6-2.5-2.6-4.5-5.1-5.1l.5-1.9c3.2.8 5.7 3.3 6.5 6.5l-1.9.5z"></path><path d="M29.298 19.287l1.414 1.414-13.01 13.02-1.414-1.41z"></path><path d="M11 39l2.9-.7c-.3-1.1-1.1-1.9-2.2-2.2L11 39z"></path><path d="M35 22.4L27.6 15l3-3 .5.1c3.6.5 6.4 3.3 6.9 6.9l.1.5-3.1 2.9zM30.4 15l4.6 4.6.9-.9c-.5-2.3-2.3-4.1-4.6-4.6l-.9.9z"></path></symbol><symbol id=\'ei-play-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M20 33.7V16.3L35 25l-15 8.7zm2-14v10.5l9-5.3-9-5.2z"></path></symbol><symbol id=\'ei-plus-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M16 24h18v2H16z"></path><path d="M24 16h2v18h-2z"></path></symbol><symbol id=\'ei-pointer-icon\' viewBox=\'0 0 50 50\'><path d="M33 38H21c-.6 0-1-.4-1-1 0-1.5-.7-2.4-1.8-3.8-.6-.7-1.3-1.6-2-2.7-1.9-3-3.6-6.6-4-7.9-.4-1.3-.1-2.2.3-2.7.4-.6 1.2-.9 2.1-.9 1.2 0 2.4 1 3.5 2.3V11c0-1.7 1.3-3 3-3s3 1.3 3 3v4.2c.3-.1.6-.2 1-.2 1.1 0 2 .6 2.5 1.4.4-.3.9-.4 1.4-.4 1.4 0 2.5.9 2.9 2.2.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3v3c0 2.6-.5 4.7-1 6.7s-1 3.9-1 6.3c0 .6-.4 1-1 1zm-11.1-2H32c.1-2.2.6-4 1-5.8.5-2 1-3.9 1-6.2v-3c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-9c0-.6-.4-1-1-1s-1 .4-1 1v15c0 .6-.4 1-1 1s-1-.4-1-1v-.8c-.9-2.3-2.8-4.2-3.5-4.2-.2 0-.4 0-.5.1-.1.1-.1.4 0 .9.3 1.1 1.8 4.3 3.8 7.5.6 1 1.2 1.7 1.8 2.5 1.1 1.2 2.1 2.3 2.3 4z"></path></symbol><symbol id=\'ei-question-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M19.8 19.6c.3-.8.6-1.4 1.2-1.9.5-.5 1.1-.9 1.9-1.2s1.6-.4 2.5-.4c.7 0 1.4.1 2 .3.6.2 1.2.5 1.7.9s.9.9 1.1 1.5c.3.6.4 1.3.4 2 0 1-.2 1.8-.6 2.5s-1 1.3-1.6 2l-1.3 1.3c-.3.3-.6.6-.7.9-.2.3-.3.7-.3 1.1-.1.4-.1.7-.1 1.5h-1.6c0-.8 0-1.1.1-1.7.1-.5.3-1 .5-1.5.2-.4.5-.8.9-1.2.4-.4.9-.8 1.4-1.4.5-.5.9-1 1.2-1.5s.5-1.2.5-1.8c0-.5-.1-1-.3-1.4-.2-.4-.5-.8-.8-1.1-.3-.3-.7-.5-1.2-.7-.5-.2-.9-.3-1.4-.3-.7 0-1.3.1-1.8.4-.5.2-1 .6-1.3 1-.3.4-.6.9-.8 1.5s-.4.9-.4 1.6h-1.6c0-.9.1-1.6.4-2.4zM26 32v2h-2v-2h2z"></path></symbol><symbol id=\'ei-redo-icon\' viewBox=\'0 0 50 50\'><path d="M25 38c-7.2 0-13-5.8-13-13s5.8-13 13-13c5.4 0 10.1 3.4 11.9 8.7l-1.9.7c-1.5-4.6-5.4-7.4-10-7.4-6.1 0-11 4.9-11 11s4.9 11 11 11c4.3 0 8.2-2.5 10-6.4l1.8.8C34.7 35 30.1 38 25 38z"></path><path d="M38 22h-8v-2h6v-6h2z"></path></symbol><symbol id=\'ei-refresh-icon\' viewBox=\'0 0 50 50\'><path d="M25 38c-7.2 0-13-5.8-13-13 0-3.2 1.2-6.2 3.3-8.6l1.5 1.3C15 19.7 14 22.3 14 25c0 6.1 4.9 11 11 11 1.6 0 3.1-.3 4.6-1l.8 1.8c-1.7.8-3.5 1.2-5.4 1.2z"></path><path d="M34.7 33.7l-1.5-1.3c1.8-2 2.8-4.6 2.8-7.3 0-6.1-4.9-11-11-11-1.6 0-3.1.3-4.6 1l-.8-1.8c1.7-.8 3.5-1.2 5.4-1.2 7.2 0 13 5.8 13 13 0 3.1-1.2 6.2-3.3 8.6z"></path><path d="M18 24h-2v-6h-6v-2h8z"></path><path d="M40 34h-8v-8h2v6h6z"></path></symbol><symbol id=\'ei-retweet-icon\' viewBox=\'0 0 50 50\'><path d="M38 35h-2V17c0-.6-.4-1-1-1H18v-2h17c1.7 0 3 1.3 3 3v18z"></path><path d="M37 36.5l-6.8-7.8 1.6-1.4 5.2 6.2 5.2-6.2 1.6 1.4z"></path><path d="M32 36H15c-1.7 0-3-1.3-3-3V15h2v18c0 .6.4 1 1 1h17v2z"></path><path d="M18.2 22.7L13 16.5l-5.2 6.2-1.6-1.4 6.8-7.8 6.8 7.8z"></path></symbol><symbol id=\'ei-sc-facebook-icon\' viewBox=\'0 0 50 50\'><path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z"></path></symbol><symbol id=\'ei-sc-github-icon\' viewBox=\'0 0 50 50\'><path fill-rule="evenodd" clip-rule="evenodd" d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"></path></symbol><symbol id=\'ei-sc-google-plus-icon\' viewBox=\'0 0 50 50\'><path d="M18 23v4.8h7.9c-.3 2.1-2.4 6-7.9 6-4.8 0-8.7-4-8.7-8.8s3.9-8.8 8.7-8.8c2.7 0 4.5 1.2 5.6 2.2l3.8-3.7C24.9 12.4 21.8 11 18 11c-7.7 0-14 6.3-14 14s6.3 14 14 14c8.1 0 13.4-5.7 13.4-13.7 0-.9-.1-1.6-.2-2.3H18z"></path><path d="M48 23h-4v-4h-4v4h-4v4h4v4h4v-4h4z"></path></symbol><symbol id=\'ei-sc-instagram-icon\' viewBox=\'0 0 50 50\'><path d="M25 12c-3.53 0-3.973.015-5.36.078-1.384.063-2.329.283-3.156.604a6.372 6.372 0 0 0-2.302 1.5 6.372 6.372 0 0 0-1.5 2.303c-.321.826-.54 1.771-.604 3.155C12.015 21.027 12 21.47 12 25c0 3.53.015 3.973.078 5.36.063 1.384.283 2.329.604 3.155.333.855.777 1.58 1.5 2.303a6.372 6.372 0 0 0 2.302 1.5c.827.32 1.772.54 3.156.604 1.387.063 1.83.078 5.36.078 3.53 0 3.973-.015 5.36-.078 1.384-.063 2.329-.283 3.155-.604a6.371 6.371 0 0 0 2.303-1.5 6.372 6.372 0 0 0 1.5-2.303c.32-.826.54-1.771.604-3.155.063-1.387.078-1.83.078-5.36 0-3.53-.015-3.973-.078-5.36-.063-1.384-.283-2.329-.605-3.155a6.372 6.372 0 0 0-1.499-2.303 6.371 6.371 0 0 0-2.303-1.5c-.826-.32-1.771-.54-3.155-.604C28.973 12.015 28.53 12 25 12m0 2.342c3.471 0 3.882.014 5.253.076 1.267.058 1.956.27 2.414.448.607.236 1.04.517 1.495.972.455.455.736.888.972 1.495.178.458.39 1.146.448 2.414.062 1.37.076 1.782.076 5.253s-.014 3.882-.076 5.253c-.058 1.268-.27 1.956-.448 2.414a4.028 4.028 0 0 1-.972 1.495 4.027 4.027 0 0 1-1.495.972c-.458.178-1.147.39-2.414.448-1.37.062-1.782.076-5.253.076s-3.883-.014-5.253-.076c-1.268-.058-1.956-.27-2.414-.448a4.027 4.027 0 0 1-1.495-.972 4.03 4.03 0 0 1-.972-1.495c-.178-.458-.39-1.146-.448-2.414-.062-1.37-.076-1.782-.076-5.253s.014-3.882.076-5.253c.058-1.268.27-1.956.448-2.414.236-.607.517-1.04.972-1.495a4.028 4.028 0 0 1 1.495-.972c.458-.178 1.146-.39 2.414-.448 1.37-.062 1.782-.076 5.253-.076"></path><path d="M25 18a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m8.7-11.4a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0"></path></symbol><symbol id=\'ei-sc-linkedin-icon\' viewBox=\'0 0 50 50\'><path d="M36.1 12H13.9c-1.1 0-1.9.8-1.9 1.9v22.2c0 1 .9 1.9 1.9 1.9h22.2c1.1 0 1.9-.8 1.9-1.9V13.9c0-1.1-.9-1.9-1.9-1.9zM20 34h-4V22h4v12zm-2-13.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM34 34h-4v-6c0-1.6-.4-3.2-2-3.2s-2 1.6-2 3.2v6h-4V22h4v1.4h.2c.5-1 1.8-1.8 3.3-1.8 3.7 0 4.5 2.4 4.5 5.4v7z"></path></symbol><symbol id=\'ei-sc-odnoklassniki-icon\' viewBox=\'0 0 50 50\'><path d="M25 26c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-12.2c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2-1.9-4.2-4.2-4.2z"></path><path d="M33.6 26.8c-.7-.9-1.9-1-2.8-.4 0 0-2.2 1.6-5.8 1.6-3.6 0-5.8-1.6-5.8-1.6-.9-.7-2.1-.5-2.8.4-.7.9-.5 2.1.4 2.8.1.1 2.2 1.7 5.7 2.2l-5.3 5.4c-.8.8-.8 2.1 0 2.8.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5-5.1 5 5.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8l-5.3-5.4c3.5-.6 5.6-2.2 5.7-2.2.9-.7 1.1-2 .4-2.8z"></path></symbol><symbol id=\'ei-sc-pinterest-icon\' viewBox=\'0 0 50 50\'><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.4 4 11.8 9.5 14-.1-1.2-.2-3 .1-4.3.3-1.2 1.8-7.5 1.8-7.5s-.4-.9-.4-2.2c0-2.1 1.2-3.6 2.7-3.6 1.3 0 1.9 1 1.9 2.1 0 1.3-.8 3.2-1.2 5-.4 1.5.7 2.7 2.2 2.7 2.7 0 4.7-2.8 4.7-6.9 0-3.6-2.6-6.1-6.3-6.1-4.3 0-6.8 3.2-6.8 6.5 0 1.3.5 2.7 1.1 3.4.1.1.1.3.1.4-.1.5-.4 1.5-.4 1.7-.1.3-.2.3-.5.2-1.9-.9-3-3.6-3-5.8 0-4.7 3.4-9.1 9.9-9.1 5.2 0 9.2 3.7 9.2 8.7 0 5.2-3.3 9.3-7.8 9.3-1.5 0-2.9-.8-3.4-1.7 0 0-.8 2.9-.9 3.6-.3 1.3-1.3 2.9-1.9 3.9 1.4.5 2.9.7 4.4.7 8.3 0 15-6.7 15-15s-6.7-15-15-15z"></path></symbol><symbol id=\'ei-sc-skype-icon\' viewBox=\'0 0 50 50\'><path d="M38 27.3c.1-.8.2-1.6.2-2.4 0-1.8-.3-3.5-1-5.1-.7-1.6-1.6-3-2.8-4.2-1.2-1.2-2.6-2.2-4.2-2.8-1.6-.7-3.4-1-5.1-1-.8 0-1.7.1-2.5.2-1.1-.6-2.4-.9-3.7-.9-2.1 0-4.1.8-5.5 2.3-1.5 1.5-2.3 3.4-2.3 5.5 0 1.3.3 2.6 1 3.8-.1.7-.2 1.5-.2 2.3 0 1.8.3 3.5 1 5.1.7 1.6 1.6 3 2.8 4.2 1.2 1.2 2.6 2.2 4.2 2.8 1.6.7 3.4 1 5.1 1 .8 0 1.6-.1 2.3-.2 1.2.7 2.5 1 3.9 1 2.1 0 4.1-.8 5.5-2.3 1.5-1.5 2.3-3.4 2.3-5.5 0-1.3-.3-2.6-1-3.8zM25.1 33c-4.7 0-6.8-2.3-6.8-4 0-.9.7-1.5 1.6-1.5 2 0 1.5 2.9 5.2 2.9 1.9 0 3-1 3-2.1 0-.6-.3-1.4-1.6-1.7l-4.2-1c-3.4-.8-4-2.7-4-4.4 0-3.6 3.3-4.9 6.5-4.9 2.9 0 6.3 1.6 6.3 3.7 0 .9-.8 1.4-1.7 1.4-1.7 0-1.4-2.4-4.9-2.4-1.7 0-2.7.8-2.7 1.9 0 1.1 1.4 1.5 2.5 1.7l3.1.7c3.4.8 4.2 2.7 4.2 4.6.1 2.9-2.1 5.1-6.5 5.1z"></path></symbol><symbol id=\'ei-sc-soundcloud-icon\' viewBox=\'0 0 50 50\'><path d="M40 24h-.2c-.9-4.6-5-8-9.8-8-3.1 0-5.9 1.4-7.7 3.7-.2.3-.3.6-.3 1.2l-.4 9.1.4 5.5c0 .3.3.5.5.5H40c3.3 0 6-2.7 6-6s-2.7-6-6-6z"></path><path d="M18.9 20c-.3 0-.5.2-.5.5l-.8 9v1l.8 5c0 .3.3.5.6.5h.2c.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.8-9c0-.3-.3-.5-.5-.5h-.4z"></path><path d="M14.9 21c-.3 0-.5.2-.5.5l-.8 8v1l.8 5c0 .3.3.5.6.5h.2c.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.8-8c0-.3-.3-.5-.5-.5h-.4z"></path><path d="M11 24c-.3 0-.5.2-.6.5l-.8 5v1l.8 5c0 .3.3.5.6.5s.5-.2.6-.5l.8-5v-1l-.8-5c-.1-.3-.3-.5-.6-.5z"></path><path d="M7 23c-.3 0-.5.2-.6.5l-.9 6v1l.8 5c.2.3.4.5.7.5.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.9-6c0-.3-.2-.5-.5-.5z"></path><path d="M3.3 26c-.3 0-.5.2-.6.5l-.6 3c-.1.3-.1.7 0 1l.6 4c.1.3.3.5.6.5s.5-.2.6-.5l.6-4v-1l-.6-3c-.1-.3-.3-.5-.6-.5z"></path></symbol><symbol id=\'ei-sc-telegram-icon\' viewBox=\'0 0 50 50\'><path d="M37.1 13L9.4 24c-.9.3-.8 1.6.1 1.9l7 2.2 2.8 8.8c.2.7 1.1.9 1.6.4l4.1-3.8 7.8 5.7c.6.4 1.4.1 1.6-.6l5.4-23.2c.3-1.7-1.2-3-2.7-2.4zM20.9 29.8L20 35l-2-7.2L37.5 15 20.9 29.8z"></path></symbol><symbol id=\'ei-sc-tumblr-icon\' viewBox=\'0 0 50 50\'><path d="M30.9 32.4c-.5.2-1.5.5-2.3.5-2.2.1-2.7-1.6-2.7-2.8v-8.7h5.6v-4.2H26V10h-4.1c-.1 0-.2.1-.2.2-.2 2.2-1.3 6-5.5 7.5v3.6H19v9.1c0 3.1 2.3 7.6 8.4 7.5 2.1 0 4.3-.9 4.8-1.6l-1.3-3.9z"></path></symbol><symbol id=\'ei-sc-twitter-icon\' viewBox=\'0 0 50 50\'><path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z"></path></symbol><symbol id=\'ei-sc-vimeo-icon\' viewBox=\'0 0 50 50\'><path d="M38 19.6c-.1 2.7-2 6.4-5.6 11.1-3.8 4.9-7 7.4-9.6 7.4-1.6 0-3-1.5-4.1-4.5-.7-2.7-1.5-5.5-2.2-8.2-.8-3-1.7-4.5-2.7-4.5-.2 0-.9.4-2.2 1.3l-1.3-1.7c1.4-1.2 2.7-2.4 4-3.6 1.8-1.6 3.2-2.4 4.1-2.5 2.2-.2 3.5 1.3 4 4.4.5 3.4.9 5.5 1.1 6.4.6 2.8 1.3 4.2 2.1 4.2.6 0 1.5-.9 2.6-2.8 1.2-1.8 1.8-3.2 1.9-4.2.2-1.6-.5-2.4-1.9-2.4-.7 0-1.3.2-2 .5 1.4-4.5 4-6.6 7.8-6.5 2.8.1 4.2 1.9 4 5.6z"></path></symbol><symbol id=\'ei-sc-vk-icon\' viewBox=\'0 0 50 50\'><path fill-rule="evenodd" clip-rule="evenodd" d="M25.1 35.9h2s.6-.1.9-.4c.3-.3.3-.9.3-.9s0-2.6 1.2-3c1.2-.4 2.8 2.6 4.4 3.7 1.2.9 2.1.7 2.1.7l4.4-.1s2.3-.1 1.2-2c-.1-.1-.6-1.3-3.3-3.8-2.8-2.6-2.4-2.1.9-6.6 2-2.7 2.8-4.3 2.6-5.1-.2-.7-1.7-.5-1.7-.5h-5s-.4-.1-.6.1c-.3.2-.4.5-.4.5s-.8 2.1-1.8 3.9c-2.2 3.7-3.1 3.9-3.4 3.7-.8-.5-.6-2.2-.6-3.3 0-3.6.6-5.1-1.1-5.5-.5-.1-.9-.2-2.3-.2-1.8 0-3.3 0-4.1.4-.6.3-1 .9-.7.9.3 0 1.1.2 1.5.7.4.9.4 2.4.4 2.4s.3 4.3-.7 4.8c-.7.4-1.6-.4-3.6-3.8-1-1.7-1.8-3.7-1.8-3.7s-.1-.4-.4-.6c-.3-.2-.8-.3-.8-.3H10s-.7 0-1 .3c-.2.3 0 .8 0 .8s3.7 8.6 7.9 13c3.9 4.2 8.2 3.9 8.2 3.9z"></path></symbol><symbol id=\'ei-sc-youtube-icon\' viewBox=\'0 0 50 50\'><path d="M39.7 18.6s-.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C31.3 14 25 14 25 14s-6.3 0-10.5.3c-.6.1-1.9.1-3 1.3-.9.9-1.2 3-1.2 3S10 21 10 23.4v2.2c0 2.4.3 4.9.3 4.9s.3 2.1 1.2 3c1.1 1.2 2.6 1.2 3.3 1.3 2.4.1 10.2.2 10.2.2s6.3 0 10.5-.3c.6-.1 1.9-.1 3-1.3.9-.9 1.2-3 1.2-3s.3-2.4.3-4.8v-2.2c0-2.4-.3-4.8-.3-4.8zm-17.8 9.8V20l8.1 4.2-8.1 4.2z"></path></symbol><symbol id=\'ei-search-icon\' viewBox=\'0 0 50 50\'><path d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"></path><path d="M32.682 31.267l8.98 8.98-1.414 1.414-8.98-8.98z"></path></symbol><symbol id=\'ei-share-apple-icon\' viewBox=\'0 0 50 50\'><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"></path><path d="M24 7h2v21h-2z"></path><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"></path></symbol><symbol id=\'ei-share-google-icon\' viewBox=\'0 0 50 50\'><path d="M15 30c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path><path d="M35 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path><path d="M35 40c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path><path d="M19.007 25.885l12.88 6.44-.895 1.788-12.88-6.44z"></path><path d="M30.993 15.885l.894 1.79-12.88 6.438-.894-1.79z"></path></symbol><symbol id=\'ei-spinner-2-icon\' viewBox=\'0 0 50 50\'><circle cx="25" cy="10" r="2"></circle><circle opacity=".3" cx="25" cy="40" r="2"></circle><circle opacity=".3" cx="32.5" cy="12" r="2"></circle><circle opacity=".3" cx="17.5" cy="38" r="2"></circle><circle opacity=".93" cx="17.5" cy="12" r="2"></circle><circle opacity=".3" cx="32.5" cy="38" r="2"></circle><circle opacity=".65" cx="10" cy="25" r="2"></circle><circle opacity=".3" cx="40" cy="25" r="2"></circle><circle opacity=".86" cx="12" cy="17.5" r="2"></circle><circle opacity=".3" cx="38" cy="32.5" r="2"></circle><circle opacity=".44" cx="12" cy="32.5" r="2"></circle><circle opacity=".3" cx="38" cy="17.5" r="2"></circle></symbol><symbol id=\'ei-spinner-3-icon\' viewBox=\'0 0 50 50\'><path d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4-6-2.7-13.3-1.6-18.3 2.6-4.8 4-7 10.5-5.6 16.6 1.3 6 6 10.9 11.9 12.5 7.1 2 13.6-1.4 17.6-7.2-3.6 4.8-9.1 8-15.2 6.9-6.1-1.1-11.1-5.7-12.5-11.7-1.5-6.4 1.5-13.1 7.2-16.4 5.9-3.4 14.2-2.1 18.1 3.7 1 1.4 1.7 3.1 2 4.8.3 1.4.2 2.9.4 4.3.2 1.3 1.3 3 2.8 2.1 1.3-.8 1.2-2.5 1.1-3.8 0-.4.1.7 0 0z"></path></symbol><symbol id=\'ei-spinner-icon\' viewBox=\'0 0 50 50\'><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"></path><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"></path><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"></path><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"></path><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"></path><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"></path><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"></path><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"></path><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"></path><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"></path></symbol><symbol id=\'ei-star-icon\' viewBox=\'0 0 50 50\'><path d="M15.2 40.6c-.2 0-.4-.1-.6-.2-.4-.3-.5-.7-.4-1.1l3.9-12-10.2-7.5c-.4-.3-.5-.7-.4-1.1s.5-.7 1-.7h12.7L25 5.9c.1-.4.5-.7 1-.7s.8.3 1 .7L30.9 18h12.7c.4 0 .8.2 1 .6s0 .9-.4 1.1L34 27.1l3.9 12c.1.4 0 .9-.4 1.1s-.8.3-1.2 0L26 33l-10.2 7.4c-.2.1-.4.2-.6.2zM26 30.7c.2 0 .4.1.6.2l8.3 6.1-3.2-9.8c-.1-.4 0-.9.4-1.1l8.3-6.1H30.1c-.4 0-.8-.3-1-.7L26 9.5l-3.2 9.8c-.1.4-.5.7-1 .7H11.5l8.3 6.1c.4.3.5.7.4 1.1L17.1 37l8.3-6.1c.2-.1.4-.2.6-.2z"></path></symbol><symbol id=\'ei-tag-icon\' viewBox=\'0 0 50 50\'><path d="M22 40.1c-.9 0-1.7-.3-2.3-.9l-8.9-8.9c-1.2-1.2-1.2-3.3 0-4.5l11.9-11.9c1-1 3-1.8 4.5-1.8h7.6c1.8 0 3.2 1.4 3.2 3.2v7.6c0 1.5-.8 3.4-1.8 4.5L24.3 39.2c-.6.6-1.4.9-2.3.9zM27.2 14c-1 0-2.4.6-3 1.3L12.3 27.2c-.5.5-.5 1.2 0 1.7l8.9 8.9c.5.4 1.2.4 1.7 0l11.9-11.9c.7-.7 1.3-2.1 1.3-3v-7.6c0-.7-.5-1.2-1.2-1.2h-7.7z"></path><path d="M30 24c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></symbol><symbol id=\'ei-trash-icon\' viewBox=\'0 0 50 50\'><path d="M20 18h2v16h-2z"></path><path d="M24 18h2v16h-2z"></path><path d="M28 18h2v16h-2z"></path><path d="M12 12h26v2H12z"></path><path d="M30 12h-2v-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1h-2v-1c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1z"></path><path d="M31 40H19c-1.6 0-3-1.3-3.2-2.9l-1.8-24 2-.2 1.8 24c0 .6.6 1.1 1.2 1.1h12c.6 0 1.1-.5 1.2-1.1l1.8-24 2 .2-1.8 24C34 38.7 32.6 40 31 40z"></path></symbol><symbol id=\'ei-trophy-icon\' viewBox=\'0 0 50 50\'><path d="M28.6 29.4c3-2.3 7.4-5.7 7.4-18.4v-1H14v1c0 12.7 4.5 16.1 7.4 18.4 1.7 1.3 2.6 2 2.6 3.6v3c-1.6.2-3.2.8-3.8 2H18c-1.1 0-2 .9-2 2h18c0-1.1-.9-2-2-2h-2.2c-.6-1.2-2.1-1.8-3.8-2v-3c0-1.6.8-2.3 2.6-3.6zm-3.6.5c-.6-.8-1.5-1.5-2.3-2.1-2.7-2.1-6.4-4.9-6.6-15.8h18c-.2 10.8-3.9 13.7-6.6 15.8-1 .7-1.9 1.3-2.5 2.1z"></path><path d="M18.8 27C18.7 27 8 24.7 8 13v-1h7v2h-5c.6 9.2 9.1 11 9.2 11l-.4 2z"></path><path d="M31.2 27l-.4-2c.4-.1 8.6-1.9 9.2-11h-5v-2h7v1c0 11.7-10.7 14-10.8 14z"></path></symbol><symbol id=\'ei-undo-icon\' viewBox=\'0 0 50 50\'><path d="M25 38c-5.1 0-9.7-3-11.8-7.6l1.8-.8c1.8 3.9 5.7 6.4 10 6.4 6.1 0 11-4.9 11-11s-4.9-11-11-11c-4.6 0-8.5 2.8-10.1 7.3l-1.9-.7c1.9-5.2 6.6-8.6 12-8.6 7.2 0 13 5.8 13 13s-5.8 13-13 13z"></path><path d="M20 22h-8v-8h2v6h6z"></path></symbol><symbol id=\'ei-unlock-icon\' viewBox=\'0 0 50 50\'><path d="M18 23h-2v-4c0-5 4-9 9-9 4.5 0 8.4 3.4 8.9 7.9l-2 .2c-.4-3.5-3.4-6.1-6.9-6.1-3.9 0-7 3.1-7 7v4z"></path><path d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z"></path><circle cx="25" cy="28" r="2"></circle><path d="M25.5 28h-1l-1 6h3z"></path></symbol><symbol id=\'ei-user-icon\' viewBox=\'0 0 50 50\'><path d="M25.1 42c-9.4 0-17-7.6-17-17s7.6-17 17-17 17 7.6 17 17-7.7 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.8-15-15-15z"></path><path d="M15.3 37.3l-1.8-.8c.5-1.2 2.1-1.9 3.8-2.7 1.7-.8 3.8-1.7 3.8-2.8v-1.5c-.6-.5-1.6-1.6-1.8-3.2-.5-.5-1.3-1.4-1.3-2.6 0-.7.3-1.3.5-1.7-.2-.8-.4-2.3-.4-3.5 0-3.9 2.7-6.5 7-6.5 1.2 0 2.7.3 3.5 1.2 1.9.4 3.5 2.6 3.5 5.3 0 1.7-.3 3.1-.5 3.8.2.3.4.8.4 1.4 0 1.3-.7 2.2-1.3 2.6-.2 1.6-1.1 2.6-1.7 3.1V31c0 .9 1.8 1.6 3.4 2.2 1.9.7 3.9 1.5 4.6 3.1l-1.9.7c-.3-.8-1.9-1.4-3.4-1.9-2.2-.8-4.7-1.7-4.7-4v-2.6l.5-.3s1.2-.8 1.2-2.4v-.7l.6-.3c.1 0 .6-.3.6-1.1 0-.2-.2-.5-.3-.6l-.4-.4.2-.5s.5-1.6.5-3.6c0-1.9-1.1-3.3-2-3.3h-.6l-.3-.5c0-.4-.7-.8-1.9-.8-3.1 0-5 1.7-5 4.5 0 1.3.5 3.5.5 3.5l.1.5-.4.5c-.1 0-.3.3-.3.7 0 .5.6 1.1.9 1.3l.4.3v.5c0 1.5 1.3 2.3 1.3 2.4l.5.3v2.6c0 2.4-2.6 3.6-5 4.6-1.1.4-2.6 1.1-2.8 1.6z"></path></symbol></svg>'
            );
        }
        function n(e, t) {
            var n = "icon icon--" + e + " " + ((t = t || {}).size ? "icon--" + t.size : "") + " " + (t.class || "");
            return "<div class='" + n + "'>" + i("<svg class='icon__cnt'><use xlink:href='#" + e + "-icon' /></svg>", n) + "</div>";
        }
        function i(e, t) {
            return t.indexOf("spinner") > -1 ? "<div class='icon__spinner'>" + e + "</div>" : e;
        }
        function r() {
            for (var t = e.querySelectorAll("[data-icon]"), i = 0; i < t.length; i++) {
                var r = t[i],
                    o = r.getAttribute("data-icon"),
                    a = { class: r.className, size: r.getAttribute("data-size") };
                r.insertAdjacentHTML("beforebegin", n(o, a)), r.parentNode.removeChild(r);
            }
        }
        e.addEventListener("DOMContentLoaded", function () {
            t(), r();
        });
    })(window.document);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = (function () {
        var e = /\blang(?:uage)?-(\w+)\b/i,
            t = 0,
            n = (_self.Prism = {
                util: {
                    encode: function (e) {
                        return e instanceof i
                            ? new i(e.type, n.util.encode(e.content), e.alias)
                            : "Array" === n.util.type(e)
                                ? e.map(n.util.encode)
                                : e
                                    .replace(/&/g, "&amp;")
                                    .replace(/</g, "&lt;")
                                    .replace(/\u00a0/g, " ");
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
                    },
                    objId: function (e) {
                        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
                    },
                    clone: function (e) {
                        switch (n.util.type(e)) {
                            case "Object":
                                var t = {};
                                for (var i in e) e.hasOwnProperty(i) && (t[i] = n.util.clone(e[i]));
                                return t;
                            case "Array":
                                return (
                                    e.map &&
                                    e.map(function (e) {
                                        return n.util.clone(e);
                                    })
                                );
                        }
                        return e;
                    },
                },
                languages: {
                    extend: function (e, t) {
                        var i = n.util.clone(n.languages[e]);
                        for (var r in t) i[r] = t[r];
                        return i;
                    },
                    insertBefore: function (e, t, i, r) {
                        var o = (r = r || n.languages)[e];
                        if (2 == arguments.length) {
                            i = arguments[1];
                            for (var a in i) i.hasOwnProperty(a) && (o[a] = i[a]);
                            return o;
                        }
                        var s = {};
                        for (var c in o)
                            if (o.hasOwnProperty(c)) {
                                if (c == t) for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                                s[c] = o[c];
                            }
                        return (
                            n.languages.DFS(n.languages, function (t, n) {
                                n === r[e] && t != e && (this[t] = s);
                            }),
                            (r[e] = s)
                        );
                    },
                    DFS: function (e, t, i, r) {
                        r = r || {};
                        for (var o in e)
                            e.hasOwnProperty(o) &&
                                (t.call(e, o, e[o], i || o),
                                    "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])]
                                        ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || ((r[n.util.objId(e[o])] = !0), n.languages.DFS(e[o], t, o, r))
                                        : ((r[n.util.objId(e[o])] = !0), n.languages.DFS(e[o], t, null, r)));
                    },
                },
                plugins: {},
                highlightAll: function (e, t) {
                    var i = { callback: t, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
                    n.hooks.run("before-highlightall", i);
                    for (var r, o = i.elements || document.querySelectorAll(i.selector), a = 0; (r = o[a++]);) n.highlightElement(r, !0 === e, i.callback);
                },
                highlightElement: function (t, i, r) {
                    for (var o, a, s = t; s && !e.test(s.className);) s = s.parentNode;
                    s && ((o = (s.className.match(e) || [, ""])[1].toLowerCase()), (a = n.languages[o])),
                        (t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o),
                        (s = t.parentNode),
                        /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
                    var c = { element: t, language: o, grammar: a, code: t.textContent };
                    if ((n.hooks.run("before-sanity-check", c), !c.code || !c.grammar)) return c.code && (c.element.textContent = c.code), void n.hooks.run("complete", c);
                    if ((n.hooks.run("before-highlight", c), i && _self.Worker)) {
                        var l = new Worker(n.filename);
                        (l.onmessage = function (e) {
                            (c.highlightedCode = e.data), n.hooks.run("before-insert", c), (c.element.innerHTML = c.highlightedCode), r && r.call(c.element), n.hooks.run("after-highlight", c), n.hooks.run("complete", c);
                        }),
                            l.postMessage(JSON.stringify({ language: c.language, code: c.code, immediateClose: !0 }));
                    } else
                        (c.highlightedCode = n.highlight(c.code, c.grammar, c.language)),
                            n.hooks.run("before-insert", c),
                            (c.element.innerHTML = c.highlightedCode),
                            r && r.call(t),
                            n.hooks.run("after-highlight", c),
                            n.hooks.run("complete", c);
                },
                highlight: function (e, t, r) {
                    var o = n.tokenize(e, t);
                    return i.stringify(n.util.encode(o), r);
                },
                tokenize: function (e, t, i) {
                    var r = n.Token,
                        o = [e],
                        a = t.rest;
                    if (a) {
                        for (var s in a) t[s] = a[s];
                        delete t.rest;
                    }
                    e: for (var s in t)
                        if (t.hasOwnProperty(s) && t[s]) {
                            var c = t[s];
                            c = "Array" === n.util.type(c) ? c : [c];
                            for (var l = 0; l < c.length; ++l) {
                                var u = c[l],
                                    h = u.inside,
                                    p = !!u.lookbehind,
                                    d = !!u.greedy,
                                    f = 0,
                                    m = u.alias;
                                if (d && !u.pattern.global) {
                                    var v = u.pattern.toString().match(/[imuy]*$/)[0];
                                    u.pattern = RegExp(u.pattern.source, v + "g");
                                }
                                u = u.pattern || u;
                                for (var g = 0, y = 0; g < o.length; y += o[g].length, ++g) {
                                    var b = o[g];
                                    if (o.length > e.length) break e;
                                    if (!(b instanceof r)) {
                                        u.lastIndex = 0;
                                        var x = u.exec(b),
                                            w = 1;
                                        if (!x && d && g != o.length - 1) {
                                            if (((u.lastIndex = y), !(x = u.exec(e)))) break;
                                            for (var z = x.index + (p ? x[1].length : 0), k = x.index + x[0].length, M = g, S = y, T = o.length; M < T && S < k; ++M) z >= (S += o[M].length) && (++g, (y = S));
                                            if (o[g] instanceof r || o[M - 1].greedy) continue;
                                            (w = M - g), (b = e.slice(y, S)), (x.index -= y);
                                        }
                                        if (x) {
                                            p && (f = x[1].length);
                                            var k = (z = x.index + f) + (x = x[0].slice(f)).length,
                                                C = b.slice(0, z),
                                                E = b.slice(k),
                                                A = [g, w];
                                            C && A.push(C);
                                            var N = new r(s, h ? n.tokenize(x, h) : x, m, x, d);
                                            A.push(N), E && A.push(E), Array.prototype.splice.apply(o, A);
                                        }
                                    }
                                }
                            }
                        }
                    return o;
                },
                hooks: {
                    all: {},
                    add: function (e, t) {
                        var i = n.hooks.all;
                        (i[e] = i[e] || []), i[e].push(t);
                    },
                    run: function (e, t) {
                        var i = n.hooks.all[e];
                        if (i && i.length) for (var r, o = 0; (r = i[o++]);) r(t);
                    },
                },
            }),
            i = (n.Token = function (e, t, n, i, r) {
                (this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (i || "").length), (this.greedy = !!r);
            });
        if (
            ((i.stringify = function (e, t, r) {
                if ("string" == typeof e) return e;
                if ("Array" === n.util.type(e))
                    return e
                        .map(function (n) {
                            return i.stringify(n, t, e);
                        })
                        .join("");
                var o = { type: e.type, content: i.stringify(e.content, t, r), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: r };
                if (("comment" == o.type && (o.attributes.spellcheck = "true"), e.alias)) {
                    var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(o.classes, a);
                }
                n.hooks.run("wrap", o);
                var s = Object.keys(o.attributes)
                    .map(function (e) {
                        return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"';
                    })
                    .join(" ");
                return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + o.content + "</" + o.tag + ">";
            }),
                !_self.document)
        )
            return _self.addEventListener
                ? (_self.addEventListener(
                    "message",
                    function (e) {
                        var t = JSON.parse(e.data),
                            i = t.language,
                            r = t.code,
                            o = t.immediateClose;
                        _self.postMessage(n.highlight(r, n.languages[i], i)), o && _self.close();
                    },
                    !1
                ),
                    _self.Prism)
                : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return (
            r &&
            ((n.filename = r.src),
                document.addEventListener &&
                !r.hasAttribute("data-manual") &&
                ("loading" !== document.readyState
                    ? window.requestAnimationFrame
                        ? window.requestAnimationFrame(n.highlightAll)
                        : window.setTimeout(n.highlightAll, 16)
                    : document.addEventListener("DOMContentLoaded", n.highlightAll))),
            _self.Prism
        );
    })();
"undefined" != typeof module && module.exports && (module.exports = Prism),
    "undefined" != typeof global && (global.Prism = Prism),
    (Prism.languages.markup = {
        comment: /<!--[\w\W]*?-->/,
        prolog: /<\?[\w\W]+?\?>/,
        doctype: /<!DOCTYPE[\w\W]+?>/i,
        cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            inside: {
                tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
                "attr-value": { pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: { punctuation: /[=>"']/ } },
                punctuation: /\/?>/,
                "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
            },
        },
        entity: /&#?[\da-z]{1,8};/i,
    }),
    Prism.hooks.add("wrap", function (e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
    }),
    (Prism.languages.xml = Prism.languages.markup),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.css = {
        comment: /\/\*[\w\W]*?\*\//,
        atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } },
        url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
        string: { pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
        property: /(\b|\B)[\w-]+(?=\s*:)/i,
        important: /\B!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:]/,
    }),
    (Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css)),
    Prism.languages.markup &&
    (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css" } }),
        Prism.languages.insertBefore(
            "inside",
            "attr-value",
            {
                "style-attr": {
                    pattern: /\s*style=("|').*?\1/i,
                    inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } },
                    alias: "language-css",
                },
            },
            Prism.languages.markup.tag
        )),
    (Prism.languages.clike = {
        comment: [
            { pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
        ],
        string: { pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
        "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i, lookbehind: !0, inside: { punctuation: /(\.|\\)/ } },
        keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(true|false)\b/,
        function: /[a-z0-9_]+(?=\()/i,
        number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        punctuation: /[{}[\];(),.:]/,
    }),
    (Prism.languages.javascript = Prism.languages.extend("clike", {
        keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
        function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/,
    })),
    Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0, greedy: !0 } }),
    Prism.languages.insertBefore("javascript", "string", {
        "template-string": {
            pattern: /`(?:\\\\|\\?[^\\])*?`/,
            greedy: !0,
            inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ },
        },
    }),
    Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript" } }),
    (Prism.languages.js = Prism.languages.javascript),
    "undefined" != typeof self &&
    self.Prism &&
    self.document &&
    document.querySelector &&
    ((self.Prism.fileHighlight = function () {
        var e = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" };
        Array.prototype.forEach &&
            Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function (t) {
                for (var n, i = t.getAttribute("data-src"), r = t, o = /\blang(?:uage)?-(?!\*)(\w+)\b/i; r && !o.test(r.className);) r = r.parentNode;
                if ((r && (n = (t.className.match(o) || [, ""])[1]), !n)) {
                    var a = (i.match(/\.(\w+)$/) || [, ""])[1];
                    n = e[a] || a;
                }
                var s = document.createElement("code");
                (s.className = "language-" + n), (t.textContent = ""), (s.textContent = "Loading…"), t.appendChild(s);
                var c = new XMLHttpRequest();
                c.open("GET", i, !0),
                    (c.onreadystatechange = function () {
                        4 == c.readyState &&
                            (c.status < 400 && c.responseText
                                ? ((s.textContent = c.responseText), Prism.highlightElement(s))
                                : c.status >= 400
                                    ? (s.textContent = "✖ Error " + c.status + " while fetching file: " + c.statusText)
                                    : (s.textContent = "✖ Error: File does not exist or is empty"));
                    }),
                    c.send(null);
            });
    }),
        document.addEventListener("DOMContentLoaded", self.Prism.fileHighlight)),
    $(document).ready(function () {
        "use strict";
        $(".off-canvas-toggle").click(function (e) {
            e.preventDefault(), $(".off-canvas-container").toggleClass("is-active");
        }),
            $(".js-fadein").viewportChecker({ classToAdd: "is-inview", offset: 100, removeClassAfterAnimation: !0 }),
            $(".wrapper").fitVids({ customSelector: ['iframe[src*="ted.com"]'] });
        var e = $(".search-form__field"),
            t = $(".search-results");
        // $(".toggle-search-button").click(function (t) {
        //     t.preventDefault(),
        //         $(".search-form-container").addClass("is-active"),
        //         $(".off-canvas-container").removeClass("is-active"),
        //         setTimeout(function () {
        //             e.focus();
        //         }, 500);
        // }),
        $(".search-form-container, .close-search-button").on("click keyup", function (e) {
            (e.target != this && "close-search-button" != e.target.className && 27 != e.keyCode) || $(".search-form-container").removeClass("is-active");
        }),
            e.ghostHunter({
                results: t,
                onKeyUp: !0,
                info_template: "<h4 class='heading'>Number of posts found: {{amount}}</h4>",
                result_template: "        <div class='search-results__item'>          <a class='search-results__item__title' href='{{link}}'>{{title}}</a>          <span class='search-results__date'>{{pubDate}}</span>        </div>",
                zeroResultsInfo: !1,
                before: function () {
                    t.fadeIn();
                },
            });
    });
