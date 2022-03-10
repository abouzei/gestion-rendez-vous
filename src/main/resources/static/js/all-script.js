/*!
 * Tabler v1.0.0-beta3 (https://tabler.io)
 * @version 1.0.0-beta3
 * @link https://tabler.io
 * Copyright 2018-2021 The Tabler Authors
 * Copyright 2018-2021 codecalm.net Paweł Kuna
 * Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
 */
! function (t) {
    "function" == typeof define && define.amd ? define(t) : t()
}(function () {
    "use strict";
    var t, e, n = "function" == typeof Map ? new Map : (t = [], e = [], {
        has: function (e) {
            return t.indexOf(e) > -1
        },
        get: function (n) {
            return e[t.indexOf(n)]
        },
        set: function (n, i) {
            -1 === t.indexOf(n) && (t.push(n), e.push(i))
        },
        delete: function (n) {
            var i = t.indexOf(n);
            i > -1 && (t.splice(i, 1), e.splice(i, 1))
        }
    }),
        i = function (t) {
            return new Event(t, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch (t) {
        i = function (t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !1), e
        }
    }

    function s(t) {
        var e = n.get(t);
        e && e.destroy()
    }

    function r(t) {
        var e = n.get(t);
        e && e.update()
    }
    var o = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((o = function (t) {
        return t
    }).destroy = function (t) {
        return t
    }, o.update = function (t) {
        return t
    }) : ((o = function (t, e) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], function (t) {
            return function (t) {
                if (t && t.nodeName && "TEXTAREA" === t.nodeName && !n.has(t)) {
                    var e, s = null,
                        r = null,
                        o = null,
                        a = function () {
                            t.clientWidth !== r && h()
                        },
                        u = function (e) {
                            window.removeEventListener("resize", a, !1), t.removeEventListener("input", h, !1), t.removeEventListener("keyup", h, !1), t.removeEventListener("autosize:destroy", u, !1), t.removeEventListener("autosize:update", h, !1), Object.keys(e).forEach(function (n) {
                                t.style[n] = e[n]
                            }), n.delete(t)
                        }.bind(t, {
                            height: t.style.height,
                            resize: t.style.resize,
                            overflowY: t.style.overflowY,
                            overflowX: t.style.overflowX,
                            wordWrap: t.style.wordWrap
                        });
                    t.addEventListener("autosize:destroy", u, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", h, !1), window.addEventListener("resize", a, !1), t.addEventListener("input", h, !1), t.addEventListener("autosize:update", h, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", n.set(t, {
                        destroy: u,
                        update: h
                    }), "vertical" === (e = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), s = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(s) && (s = 0), h()
                }

                function l(e) {
                    var n = t.style.width;
                    t.style.width = "0px", t.style.width = n, t.style.overflowY = e
                }

                function c() {
                    if (0 !== t.scrollHeight) {
                        var e = function (t) {
                            for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                                node: t.parentNode,
                                scrollTop: t.parentNode.scrollTop
                            }), t = t.parentNode;
                            return e
                        }(t),
                            n = document.documentElement && document.documentElement.scrollTop;
                        t.style.height = "", t.style.height = t.scrollHeight + s + "px", r = t.clientWidth, e.forEach(function (t) {
                            t.node.scrollTop = t.scrollTop
                        }), n && (document.documentElement.scrollTop = n)
                    }
                }

                function h() {
                    c();
                    var e = Math.round(parseFloat(t.style.height)),
                        n = window.getComputedStyle(t, null),
                        s = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : t.offsetHeight;
                    if (s < e ? "hidden" === n.overflowY && (l("scroll"), c(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== n.overflowY && (l("hidden"), c(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), o !== s) {
                        o = s;
                        var r = i("autosize:resized");
                        try {
                            t.dispatchEvent(r)
                        } catch (t) { }
                    }
                }
            }(t)
        }), t
    }).destroy = function (t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], s), t
    }, o.update = function (t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], r), t
    });
    var a = o,
        u = document.querySelectorAll('[data-bs-toggle="autosize"]');

    function l(t) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function h(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function d(t, e, n) {
        return e && h(t.prototype, e), n && h(t, n), t
    }

    function f(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && g(t, e)
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function g(t, e) {
        return (g = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function m(t, e) {
        if (null == t) return {};
        var n, i, s = function (t, e) {
            if (null == t) return {};
            var n, i, s = {},
                r = Object.keys(t);
            for (i = 0; i < r.length; i++) n = r[i], e.indexOf(n) >= 0 || (s[n] = t[n]);
            return s
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            for (i = 0; i < r.length; i++) n = r[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
        }
        return s
    }

    function v(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function _(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, i = p(t);
            if (e) {
                var s = p(this).constructor;
                n = Reflect.construct(i, arguments, s)
            } else n = i.apply(this, arguments);
            return v(this, n)
        }
    }

    function y(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t)););
        return t
    }

    function b(t, e, n) {
        return (b = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var i = y(t, e);
            if (i) {
                var s = Object.getOwnPropertyDescriptor(i, e);
                return s.get ? s.get.call(n) : s.value
            }
        })(t, e, n || t)
    }

    function k(t, e, n, i) {
        return (k = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (t, e, n, i) {
            var s, r = y(t, e);
            if (r) {
                if ((s = Object.getOwnPropertyDescriptor(r, e)).set) return s.set.call(i, n), !0;
                if (!s.writable) return !1
            }
            if (s = Object.getOwnPropertyDescriptor(i, e)) {
                if (!s.writable) return !1;
                s.value = n, Object.defineProperty(i, e, s)
            } else ! function (t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n
            }(i, e, n);
            return !0
        })(t, e, n, i)
    }

    function E(t, e, n, i, s) {
        if (!k(t, e, n, i || t) && s) throw new Error("failed to set property");
        return n
    }

    function w(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == n) return;
            var i, s, r = [],
                o = !0,
                a = !1;
            try {
                for (n = n.call(t); !(o = (i = n.next()).done) && (r.push(i.value), !e || r.length !== e); o = !0);
            } catch (t) {
                a = !0, s = t
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }(t, e) || function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return A(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(t, e)
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function A(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    function C(t) {
        return "string" == typeof t || t instanceof String
    }
    u.length && u.forEach(function (t) {
        a(t)
    });
    var S = {
        NONE: "NONE",
        LEFT: "LEFT",
        FORCE_LEFT: "FORCE_LEFT",
        RIGHT: "RIGHT",
        FORCE_RIGHT: "FORCE_RIGHT"
    };

    function T(t) {
        return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }
    var D = function () {
        function t(e, n, i, s) {
            for (c(this, t), this.value = e, this.cursorPos = n, this.oldValue = i, this.oldSelection = s; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
        }
        return d(t, [{
            key: "startChangePos",
            get: function () {
                return Math.min(this.cursorPos, this.oldSelection.start)
            }
        }, {
            key: "insertedCount",
            get: function () {
                return this.cursorPos - this.startChangePos
            }
        }, {
            key: "inserted",
            get: function () {
                return this.value.substr(this.startChangePos, this.insertedCount)
            }
        }, {
            key: "removedCount",
            get: function () {
                return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
            }
        }, {
            key: "removed",
            get: function () {
                return this.oldValue.substr(this.startChangePos, this.removedCount)
            }
        }, {
            key: "head",
            get: function () {
                return this.value.substring(0, this.startChangePos)
            }
        }, {
            key: "tail",
            get: function () {
                return this.value.substring(this.startChangePos + this.insertedCount)
            }
        }, {
            key: "removeDirection",
            get: function () {
                return !this.removedCount || this.insertedCount ? S.NONE : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? S.RIGHT : S.LEFT
            }
        }]), t
    }(),
        O = function () {
            function t(e) {
                c(this, t), Object.assign(this, {
                    inserted: "",
                    rawInserted: "",
                    skip: !1,
                    tailShift: 0
                }, e)
            }
            return d(t, [{
                key: "aggregate",
                value: function (t) {
                    return this.rawInserted += t.rawInserted, this.skip = this.skip || t.skip, this.inserted += t.inserted, this.tailShift += t.tailShift, this
                }
            }, {
                key: "offset",
                get: function () {
                    return this.tailShift + this.inserted.length
                }
            }]), t
        }(),
        F = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                c(this, t), this.value = e, this.from = n, this.stop = i
            }
            return d(t, [{
                key: "toString",
                value: function () {
                    return this.value
                }
            }, {
                key: "extend",
                value: function (t) {
                    this.value += String(t)
                }
            }, {
                key: "appendTo",
                value: function (t) {
                    return t.append(this.toString(), {
                        tail: !0
                    }).aggregate(t._appendPlaceholder())
                }
            }, {
                key: "state",
                get: function () {
                    return {
                        value: this.value,
                        from: this.from,
                        stop: this.stop
                    }
                },
                set: function (t) {
                    Object.assign(this, t)
                }
            }, {
                key: "shiftBefore",
                value: function (t) {
                    if (this.from >= t || !this.value.length) return "";
                    var e = this.value[0];
                    return this.value = this.value.slice(1), e
                }
            }]), t
        }();

    function x(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new x.InputMask(t, e)
    }
    var B = function () {
        function t(e) {
            c(this, t), this._value = "", this._update(Object.assign({}, t.DEFAULTS, e)), this.isInitialized = !0
        }
        return d(t, [{
            key: "updateOptions",
            value: function (t) {
                Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t))
            }
        }, {
            key: "_update",
            value: function (t) {
                Object.assign(this, t)
            }
        }, {
            key: "state",
            get: function () {
                return {
                    _value: this.value
                }
            },
            set: function (t) {
                this._value = t._value
            }
        }, {
            key: "reset",
            value: function () {
                this._value = ""
            }
        }, {
            key: "value",
            get: function () {
                return this._value
            },
            set: function (t) {
                this.resolve(t)
            }
        }, {
            key: "resolve",
            value: function (t) {
                return this.reset(), this.append(t, {
                    input: !0
                }, ""), this.doCommit(), this.value
            }
        }, {
            key: "unmaskedValue",
            get: function () {
                return this.value
            },
            set: function (t) {
                this.reset(), this.append(t, {}, ""), this.doCommit()
            }
        }, {
            key: "typedValue",
            get: function () {
                return this.doParse(this.value)
            },
            set: function (t) {
                this.value = this.doFormat(t)
            }
        }, {
            key: "rawInputValue",
            get: function () {
                return this.extractInput(0, this.value.length, {
                    raw: !0
                })
            },
            set: function (t) {
                this.reset(), this.append(t, {
                    raw: !0
                }, ""), this.doCommit()
            }
        }, {
            key: "isComplete",
            get: function () {
                return !0
            }
        }, {
            key: "nearestInputPos",
            value: function (t, e) {
                return t
            }
        }, {
            key: "extractInput",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return this.value.slice(t, e)
            }
        }, {
            key: "extractTail",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return new F(this.extractInput(t, e), t)
            }
        }, {
            key: "appendTail",
            value: function (t) {
                return C(t) && (t = new F(String(t))), t.appendTo(this)
            }
        }, {
            key: "_appendCharRaw",
            value: function (t) {
                return t ? (this._value += t, new O({
                    inserted: t,
                    rawInserted: t
                })) : new O
            }
        }, {
            key: "_appendChar",
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = this.state,
                    s = this._appendCharRaw(this.doPrepare(t, e), e);
                if (s.inserted) {
                    var r, o = !1 !== this.doValidate(e);
                    if (o && null != n) {
                        var a = this.state;
                        this.overwrite && (r = n.state, n.shiftBefore(this.value.length));
                        var u = this.appendTail(n);
                        (o = u.rawInserted === n.toString()) && u.inserted && (this.state = a)
                    }
                    o || (s = new O, this.state = i, n && r && (n.state = r))
                }
                return s
            }
        }, {
            key: "_appendPlaceholder",
            value: function () {
                return new O
            }
        }, {
            key: "append",
            value: function (t, e, n) {
                if (!C(t)) throw new Error("value should be string");
                var i = new O,
                    s = C(n) ? new F(String(n)) : n;
                e && e.tail && (e._beforeTailState = this.state);
                for (var r = 0; r < t.length; ++r) i.aggregate(this._appendChar(t[r], e, s));
                return null != s && (i.tailShift += this.appendTail(s).tailShift), i
            }
        }, {
            key: "remove",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return this._value = this.value.slice(0, t) + this.value.slice(e), new O
            }
        }, {
            key: "withValueRefresh",
            value: function (t) {
                if (this._refreshing || !this.isInitialized) return t();
                this._refreshing = !0;
                var e = this.rawInputValue,
                    n = this.value,
                    i = t();
                return this.rawInputValue = e, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, i
            }
        }, {
            key: "runIsolated",
            value: function (t) {
                if (this._isolated || !this.isInitialized) return t(this);
                this._isolated = !0;
                var e = this.state,
                    n = t(this);
                return this.state = e, delete this._isolated, n
            }
        }, {
            key: "doPrepare",
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.prepare ? this.prepare(t, this, e) : t
            }
        }, {
            key: "doValidate",
            value: function (t) {
                return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t))
            }
        }, {
            key: "doCommit",
            value: function () {
                this.commit && this.commit(this.value, this)
            }
        }, {
            key: "doFormat",
            value: function (t) {
                return this.format ? this.format(t, this) : t
            }
        }, {
            key: "doParse",
            value: function (t) {
                return this.parse ? this.parse(t, this) : t
            }
        }, {
            key: "splice",
            value: function (t, e, n, i) {
                var s = t + e,
                    r = this.extractTail(s),
                    o = this.nearestInputPos(t, i);
                return new O({
                    tailShift: o - t
                }).aggregate(this.remove(o)).aggregate(this.append(n, {
                    input: !0
                }, r))
            }
        }]), t
    }();

    function I(t) {
        if (null == t) throw new Error("mask property should be defined");
        return t instanceof RegExp ? x.MaskedRegExp : C(t) ? x.MaskedPattern : t instanceof Date || t === Date ? x.MaskedDate : t instanceof Number || "number" == typeof t || t === Number ? x.MaskedNumber : Array.isArray(t) || t === Array ? x.MaskedDynamic : x.Masked && t.prototype instanceof x.Masked ? t : t instanceof Function ? x.MaskedFunction : t instanceof x.Masked ? t.constructor : (console.warn("Mask not found for mask", t), x.Masked)
    }

    function L(t) {
        if (x.Masked && t instanceof x.Masked) return t;
        var e = (t = Object.assign({}, t)).mask;
        if (x.Masked && e instanceof x.Masked) return e;
        var n = I(e);
        if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
        return new n(t)
    }
    B.DEFAULTS = {
        format: function (t) {
            return t
        },
        parse: function (t) {
            return t
        }
    }, x.Masked = B, x.createMask = L;
    var P = ["mask"],
        M = {
            0: /\d/,
            a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            "*": /./
        },
        N = function () {
            function t(e) {
                c(this, t);
                var n = e.mask,
                    i = m(e, P);
                this.masked = L({
                    mask: n
                }), Object.assign(this, i)
            }
            return d(t, [{
                key: "reset",
                value: function () {
                    this._isFilled = !1, this.masked.reset()
                }
            }, {
                key: "remove",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return 0 === t && e >= 1 ? (this._isFilled = !1, this.masked.remove(t, e)) : new O
                }
            }, {
                key: "value",
                get: function () {
                    return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : "")
                }
            }, {
                key: "unmaskedValue",
                get: function () {
                    return this.masked.unmaskedValue
                }
            }, {
                key: "isComplete",
                get: function () {
                    return Boolean(this.masked.value) || this.isOptional
                }
            }, {
                key: "_appendChar",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._isFilled) return new O;
                    var n = this.masked.state,
                        i = this.masked._appendChar(t, e);
                    return i.inserted && !1 === this.doValidate(e) && (i.inserted = i.rawInserted = "", this.masked.state = n), i.inserted || this.isOptional || this.lazy || e.input || (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this._isFilled = Boolean(i.inserted), i
                }
            }, {
                key: "append",
                value: function () {
                    var t;
                    return (t = this.masked).append.apply(t, arguments)
                }
            }, {
                key: "_appendPlaceholder",
                value: function () {
                    var t = new O;
                    return this._isFilled || this.isOptional ? t : (this._isFilled = !0, t.inserted = this.placeholderChar, t)
                }
            }, {
                key: "extractTail",
                value: function () {
                    var t;
                    return (t = this.masked).extractTail.apply(t, arguments)
                }
            }, {
                key: "appendTail",
                value: function () {
                    var t;
                    return (t = this.masked).appendTail.apply(t, arguments)
                }
            }, {
                key: "extractInput",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return this.masked.extractInput(t, e, n)
                }
            }, {
                key: "nearestInputPos",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.NONE,
                        n = this.value.length,
                        i = Math.min(Math.max(t, 0), n);
                    switch (e) {
                        case S.LEFT:
                        case S.FORCE_LEFT:
                            return this.isComplete ? i : 0;
                        case S.RIGHT:
                        case S.FORCE_RIGHT:
                            return this.isComplete ? i : n;
                        case S.NONE:
                        default:
                            return i
                    }
                }
            }, {
                key: "doValidate",
                value: function () {
                    var t, e;
                    return (t = this.masked).doValidate.apply(t, arguments) && (!this.parent || (e = this.parent).doValidate.apply(e, arguments))
                }
            }, {
                key: "doCommit",
                value: function () {
                    this.masked.doCommit()
                }
            }, {
                key: "state",
                get: function () {
                    return {
                        masked: this.masked.state,
                        _isFilled: this._isFilled
                    }
                },
                set: function (t) {
                    this.masked.state = t.masked, this._isFilled = t._isFilled
                }
            }]), t
        }(),
        R = function () {
            function t(e) {
                c(this, t), Object.assign(this, e), this._value = ""
            }
            return d(t, [{
                key: "value",
                get: function () {
                    return this._value
                }
            }, {
                key: "unmaskedValue",
                get: function () {
                    return this.isUnmasking ? this.value : ""
                }
            }, {
                key: "reset",
                value: function () {
                    this._isRawInput = !1, this._value = ""
                }
            }, {
                key: "remove",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                    return this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new O
                }
            }, {
                key: "nearestInputPos",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.NONE,
                        n = this._value.length;
                    switch (e) {
                        case S.LEFT:
                        case S.FORCE_LEFT:
                            return 0;
                        case S.NONE:
                        case S.RIGHT:
                        case S.FORCE_RIGHT:
                        default:
                            return n
                    }
                }
            }, {
                key: "extractInput",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).raw && this._isRawInput && this._value.slice(t, e) || ""
                }
            }, {
                key: "isComplete",
                get: function () {
                    return !0
                }
            }, {
                key: "_appendChar",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = new O;
                    if (this._value) return n;
                    var i = this.char === t[0] && (this.isUnmasking || e.input || e.raw) && !e.tail;
                    return i && (n.rawInserted = this.char), this._value = n.inserted = this.char, this._isRawInput = i && (e.raw || e.input), n
                }
            }, {
                key: "_appendPlaceholder",
                value: function () {
                    var t = new O;
                    return this._value ? t : (this._value = t.inserted = this.char, t)
                }
            }, {
                key: "extractTail",
                value: function () {
                    return arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length, new F("")
                }
            }, {
                key: "appendTail",
                value: function (t) {
                    return C(t) && (t = new F(String(t))), t.appendTo(this)
                }
            }, {
                key: "append",
                value: function (t, e, n) {
                    var i = this._appendChar(t, e);
                    return null != n && (i.tailShift += this.appendTail(n).tailShift), i
                }
            }, {
                key: "doCommit",
                value: function () { }
            }, {
                key: "state",
                get: function () {
                    return {
                        _value: this._value,
                        _isRawInput: this._isRawInput
                    }
                },
                set: function (t) {
                    Object.assign(this, t)
                }
            }]), t
        }(),
        j = ["chunks"],
        V = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                c(this, t), this.chunks = e, this.from = n
            }
            return d(t, [{
                key: "toString",
                value: function () {
                    return this.chunks.map(String).join("")
                }
            }, {
                key: "extend",
                value: function (e) {
                    if (String(e)) {
                        C(e) && (e = new F(String(e)));
                        var n = this.chunks[this.chunks.length - 1],
                            i = n && (n.stop === e.stop || null == e.stop) && e.from === n.from + n.toString().length;
                        if (e instanceof F) i ? n.extend(e.toString()) : this.chunks.push(e);
                        else if (e instanceof t) {
                            if (null == e.stop)
                                for (var s; e.chunks.length && null == e.chunks[0].stop;)(s = e.chunks.shift()).from += e.from, this.extend(s);
                            e.toString() && (e.stop = e.blockIndex, this.chunks.push(e))
                        }
                    }
                }
            }, {
                key: "appendTo",
                value: function (e) {
                    if (!(e instanceof x.MaskedPattern)) return new F(this.toString()).appendTo(e);
                    for (var n = new O, i = 0; i < this.chunks.length && !n.skip; ++i) {
                        var s = this.chunks[i],
                            r = e._mapPosToBlock(e.value.length),
                            o = s.stop,
                            a = void 0;
                        if (null != o && (!r || r.index <= o) && ((s instanceof t || e._stops.indexOf(o) >= 0) && n.aggregate(e._appendPlaceholder(o)), a = s instanceof t && e._blocks[o]), a) {
                            var u = a.appendTail(s);
                            u.skip = !1, n.aggregate(u), e._value += u.inserted;
                            var l = s.toString().slice(u.rawInserted.length);
                            l && n.aggregate(e.append(l, {
                                tail: !0
                            }))
                        } else n.aggregate(e.append(s.toString(), {
                            tail: !0
                        }))
                    }
                    return n
                }
            }, {
                key: "state",
                get: function () {
                    return {
                        chunks: this.chunks.map(function (t) {
                            return t.state
                        }),
                        from: this.from,
                        stop: this.stop,
                        blockIndex: this.blockIndex
                    }
                },
                set: function (e) {
                    var n = e.chunks,
                        i = m(e, j);
                    Object.assign(this, i), this.chunks = n.map(function (e) {
                        var n = "chunks" in e ? new t : new F;
                        return n.state = e, n
                    })
                }
            }, {
                key: "shiftBefore",
                value: function (t) {
                    if (this.from >= t || !this.chunks.length) return "";
                    for (var e = t - this.from, n = 0; n < this.chunks.length;) {
                        var i = this.chunks[n],
                            s = i.shiftBefore(e);
                        if (i.toString()) {
                            if (!s) break;
                            ++n
                        } else this.chunks.splice(n, 1);
                        if (s) return s
                    }
                    return ""
                }
            }]), t
        }(),
        H = function (t) {
            f(n, B);
            var e = _(n);

            function n() {
                return c(this, n), e.apply(this, arguments)
            }
            return d(n, [{
                key: "_update",
                value: function (t) {
                    t.mask && (t.validate = function (e) {
                        return e.search(t.mask) >= 0
                    }), b(p(n.prototype), "_update", this).call(this, t)
                }
            }]), n
        }();
    x.MaskedRegExp = H;
    var $ = ["_blocks"],
        z = function (t) {
            f(n, B);
            var e = _(n);

            function n() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return c(this, n), t.definitions = Object.assign({}, M, t.definitions), e.call(this, Object.assign({}, n.DEFAULTS, t))
            }
            return d(n, [{
                key: "_update",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.definitions = Object.assign({}, this.definitions, t.definitions), b(p(n.prototype), "_update", this).call(this, t), this._rebuildMask()
                }
            }, {
                key: "_rebuildMask",
                value: function () {
                    var t = this,
                        e = this.definitions;
                    this._blocks = [], this._stops = [], this._maskedBlocks = {};
                    var i = this.mask;
                    if (i && e)
                        for (var s = !1, r = !1, o = 0; o < i.length; ++o) {
                            if (this.blocks)
                                if ("continue" === function () {
                                    var e = i.slice(o),
                                        n = Object.keys(t.blocks).filter(function (t) {
                                            return 0 === e.indexOf(t)
                                        });
                                    n.sort(function (t, e) {
                                        return e.length - t.length
                                    });
                                    var s = n[0];
                                    if (s) {
                                        var r = L(Object.assign({
                                            parent: t,
                                            lazy: t.lazy,
                                            placeholderChar: t.placeholderChar,
                                            overwrite: t.overwrite
                                        }, t.blocks[s]));
                                        return r && (t._blocks.push(r), t._maskedBlocks[s] || (t._maskedBlocks[s] = []), t._maskedBlocks[s].push(t._blocks.length - 1)), o += s.length - 1, "continue"
                                    }
                                }()) continue;
                            var a = i[o],
                                u = a in e;
                            if (a !== n.STOP_CHAR)
                                if ("{" !== a && "}" !== a)
                                    if ("[" !== a && "]" !== a) {
                                        if (a === n.ESCAPE_CHAR) {
                                            if (!(a = i[++o])) break;
                                            u = !1
                                        }
                                        var l = u ? new N({
                                            parent: this,
                                            lazy: this.lazy,
                                            placeholderChar: this.placeholderChar,
                                            mask: e[a],
                                            isOptional: r
                                        }) : new R({
                                            char: a,
                                            isUnmasking: s
                                        });
                                        this._blocks.push(l)
                                    } else r = !r;
                                else s = !s;
                            else this._stops.push(this._blocks.length)
                        }
                }
            }, {
                key: "state",
                get: function () {
                    return Object.assign({}, b(p(n.prototype), "state", this), {
                        _blocks: this._blocks.map(function (t) {
                            return t.state
                        })
                    })
                },
                set: function (t) {
                    var e = t._blocks,
                        i = m(t, $);
                    this._blocks.forEach(function (t, n) {
                        return t.state = e[n]
                    }), E(p(n.prototype), "state", i, this, !0)
                }
            }, {
                key: "reset",
                value: function () {
                    b(p(n.prototype), "reset", this).call(this), this._blocks.forEach(function (t) {
                        return t.reset()
                    })
                }
            }, {
                key: "isComplete",
                get: function () {
                    return this._blocks.every(function (t) {
                        return t.isComplete
                    })
                }
            }, {
                key: "doCommit",
                value: function () {
                    this._blocks.forEach(function (t) {
                        return t.doCommit()
                    }), b(p(n.prototype), "doCommit", this).call(this)
                }
            }, {
                key: "unmaskedValue",
                get: function () {
                    return this._blocks.reduce(function (t, e) {
                        return t + e.unmaskedValue
                    }, "")
                },
                set: function (t) {
                    E(p(n.prototype), "unmaskedValue", t, this, !0)
                }
            }, {
                key: "value",
                get: function () {
                    return this._blocks.reduce(function (t, e) {
                        return t + e.value
                    }, "")
                },
                set: function (t) {
                    E(p(n.prototype), "value", t, this, !0)
                }
            }, {
                key: "appendTail",
                value: function (t) {
                    return b(p(n.prototype), "appendTail", this).call(this, t).aggregate(this._appendPlaceholder())
                }
            }, {
                key: "_appendCharRaw",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this._mapPosToBlock(this.value.length),
                        i = new O;
                    if (!n) return i;
                    for (var s = n.index; ; ++s) {
                        var r = this._blocks[s];
                        if (!r) break;
                        var o = r._appendChar(t, e),
                            a = o.skip;
                        if (i.aggregate(o), a || o.rawInserted) break
                    }
                    return i
                }
            }, {
                key: "extractTail",
                value: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        i = new V;
                    return e === n ? i : (this._forEachBlocksInRange(e, n, function (e, n, s, r) {
                        var o = e.extractTail(s, r);
                        o.stop = t._findStopBefore(n), o.from = t._blockStartPos(n), o instanceof V && (o.blockIndex = n), i.extend(o)
                    }), i)
                }
            }, {
                key: "extractInput",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (t === e) return "";
                    var i = "";
                    return this._forEachBlocksInRange(t, e, function (t, e, s, r) {
                        i += t.extractInput(s, r, n)
                    }), i
                }
            }, {
                key: "_findStopBefore",
                value: function (t) {
                    for (var e, n = 0; n < this._stops.length; ++n) {
                        var i = this._stops[n];
                        if (!(i <= t)) break;
                        e = i
                    }
                    return e
                }
            }, {
                key: "_appendPlaceholder",
                value: function (t) {
                    var e = this,
                        n = new O;
                    if (this.lazy && null == t) return n;
                    var i = this._mapPosToBlock(this.value.length);
                    if (!i) return n;
                    var s = i.index,
                        r = null != t ? t : this._blocks.length;
                    return this._blocks.slice(s, r).forEach(function (i) {
                        if (!i.lazy || null != t) {
                            var s = null != i._blocks ? [i._blocks.length] : [],
                                r = i._appendPlaceholder.apply(i, s);
                            e._value += r.inserted, n.aggregate(r)
                        }
                    }), n
                }
            }, {
                key: "_mapPosToBlock",
                value: function (t) {
                    for (var e = "", n = 0; n < this._blocks.length; ++n) {
                        var i = this._blocks[n],
                            s = e.length;
                        if (t <= (e += i.value).length) return {
                            index: n,
                            offset: t - s
                        }
                    }
                }
            }, {
                key: "_blockStartPos",
                value: function (t) {
                    return this._blocks.slice(0, t).reduce(function (t, e) {
                        return t + e.value.length
                    }, 0)
                }
            }, {
                key: "_forEachBlocksInRange",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = this._mapPosToBlock(t);
                    if (i) {
                        var s = this._mapPosToBlock(e),
                            r = s && i.index === s.index,
                            o = i.offset,
                            a = s && r ? s.offset : this._blocks[i.index].value.length;
                        if (n(this._blocks[i.index], i.index, o, a), s && !r) {
                            for (var u = i.index + 1; u < s.index; ++u) n(this._blocks[u], u, 0, this._blocks[u].value.length);
                            n(this._blocks[s.index], s.index, 0, s.offset)
                        }
                    }
                }
            }, {
                key: "remove",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        i = b(p(n.prototype), "remove", this).call(this, t, e);
                    return this._forEachBlocksInRange(t, e, function (t, e, n, s) {
                        i.aggregate(t.remove(n, s))
                    }), i
                }
            }, {
                key: "nearestInputPos",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.NONE,
                        n = this._mapPosToBlock(t) || {
                            index: 0,
                            offset: 0
                        },
                        i = n.offset,
                        s = n.index,
                        r = this._blocks[s];
                    if (!r) return t;
                    var o = i;
                    0 !== o && o < r.value.length && (o = r.nearestInputPos(i, function (t) {
                        switch (t) {
                            case S.LEFT:
                                return S.FORCE_LEFT;
                            case S.RIGHT:
                                return S.FORCE_RIGHT;
                            default:
                                return t
                        }
                    }(e)));
                    var a = o === r.value.length;
                    if (!(0 === o) && !a) return this._blockStartPos(s) + o;
                    var u = a ? s + 1 : s;
                    if (e === S.NONE) {
                        if (u > 0) {
                            var l = u - 1,
                                c = this._blocks[l],
                                h = c.nearestInputPos(0, S.NONE);
                            if (!c.value.length || h !== c.value.length) return this._blockStartPos(u)
                        }
                        for (var d = u; d < this._blocks.length; ++d) {
                            var f = this._blocks[d],
                                p = f.nearestInputPos(0, S.NONE);
                            if (!f.value.length || p !== f.value.length) return this._blockStartPos(d) + p
                        }
                        for (var g = u - 1; g >= 0; --g) {
                            var m = this._blocks[g],
                                v = m.nearestInputPos(0, S.NONE);
                            if (!m.value.length || v !== m.value.length) return this._blockStartPos(g) + m.value.length
                        }
                        return t
                    }
                    if (e === S.LEFT || e === S.FORCE_LEFT) {
                        for (var _, y = u; y < this._blocks.length; ++y)
                            if (this._blocks[y].value) {
                                _ = y;
                                break
                            } if (null != _) {
                                var b = this._blocks[_],
                                    k = b.nearestInputPos(0, S.RIGHT);
                                if (0 === k && b.unmaskedValue.length) return this._blockStartPos(_) + k
                            }
                        for (var E, w = -1, A = u - 1; A >= 0; --A) {
                            var C = this._blocks[A],
                                T = C.nearestInputPos(C.value.length, S.FORCE_LEFT);
                            if (C.value && 0 === T || (E = A), 0 !== T) {
                                if (T !== C.value.length) return this._blockStartPos(A) + T;
                                w = A;
                                break
                            }
                        }
                        if (e === S.LEFT)
                            for (var D = w + 1; D <= Math.min(u, this._blocks.length - 1); ++D) {
                                var O = this._blocks[D],
                                    F = O.nearestInputPos(0, S.NONE),
                                    x = this._blockStartPos(D) + F;
                                if (x > t) break;
                                if (F !== O.value.length) return x
                            }
                        if (w >= 0) return this._blockStartPos(w) + this._blocks[w].value.length;
                        if (e === S.FORCE_LEFT || this.lazy && !this.extractInput() && ! function (t) {
                            if (!t) return !1;
                            var e = t.value;
                            return !e || t.nearestInputPos(0, S.NONE) !== e.length
                        }(this._blocks[u])) return 0;
                        if (null != E) return this._blockStartPos(E);
                        for (var B = u; B < this._blocks.length; ++B) {
                            var I = this._blocks[B],
                                L = I.nearestInputPos(0, S.NONE);
                            if (!I.value.length || L !== I.value.length) return this._blockStartPos(B) + L
                        }
                        return 0
                    }
                    if (e === S.RIGHT || e === S.FORCE_RIGHT) {
                        for (var P, M, N = u; N < this._blocks.length; ++N) {
                            var R = this._blocks[N],
                                j = R.nearestInputPos(0, S.NONE);
                            if (j !== R.value.length) {
                                M = this._blockStartPos(N) + j, P = N;
                                break
                            }
                        }
                        if (null != P && null != M) {
                            for (var V = P; V < this._blocks.length; ++V) {
                                var H = this._blocks[V],
                                    $ = H.nearestInputPos(0, S.FORCE_RIGHT);
                                if ($ !== H.value.length) return this._blockStartPos(V) + $
                            }
                            return e === S.FORCE_RIGHT ? this.value.length : M
                        }
                        for (var z = Math.min(u, this._blocks.length - 1); z >= 0; --z) {
                            var W = this._blocks[z],
                                U = W.nearestInputPos(W.value.length, S.LEFT);
                            if (0 !== U) {
                                var q = this._blockStartPos(z) + U;
                                if (q >= t) return q;
                                break
                            }
                        }
                    }
                    return t
                }
            }, {
                key: "maskedBlock",
                value: function (t) {
                    return this.maskedBlocks(t)[0]
                }
            }, {
                key: "maskedBlocks",
                value: function (t) {
                    var e = this,
                        n = this._maskedBlocks[t];
                    return n ? n.map(function (t) {
                        return e._blocks[t]
                    }) : []
                }
            }]), n
        }();
    z.DEFAULTS = {
        lazy: !0,
        placeholderChar: "_"
    }, z.STOP_CHAR = "`", z.ESCAPE_CHAR = "\\", z.InputDefinition = N, z.FixedDefinition = R, x.MaskedPattern = z;
    var W = function (t) {
        f(n, z);
        var e = _(n);

        function n() {
            return c(this, n), e.apply(this, arguments)
        }
        return d(n, [{
            key: "_matchFrom",
            get: function () {
                return this.maxLength - String(this.from).length
            }
        }, {
            key: "_update",
            value: function (t) {
                t = Object.assign({
                    to: this.to || 0,
                    from: this.from || 0
                }, t);
                var e = String(t.to).length;
                null != t.maxLength && (e = Math.max(e, t.maxLength)), t.maxLength = e;
                for (var i = String(t.from).padStart(e, "0"), s = String(t.to).padStart(e, "0"), r = 0; r < s.length && s[r] === i[r];) ++r;
                t.mask = s.slice(0, r).replace(/0/g, "\\0") + "0".repeat(e - r), b(p(n.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "isComplete",
            get: function () {
                return b(p(n.prototype), "isComplete", this) && Boolean(this.value)
            }
        }, {
            key: "boundaries",
            value: function (t) {
                var e = "",
                    n = "",
                    i = w(t.match(/^(\D*)(\d*)(\D*)/) || [], 3),
                    s = i[1],
                    r = i[2];
                return r && (e = "0".repeat(s.length) + r, n = "9".repeat(s.length) + r), [e = e.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")]
            }
        }, {
            key: "doPrepare",
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (t = b(p(n.prototype), "doPrepare", this).call(this, t, e).replace(/\D/g, ""), !this.autofix) return t;
                for (var i = String(this.from).padStart(this.maxLength, "0"), s = String(this.to).padStart(this.maxLength, "0"), r = this.value, o = "", a = 0; a < t.length; ++a) {
                    var u = r + o + t[a],
                        l = w(this.boundaries(u), 2),
                        c = l[0],
                        h = l[1];
                    Number(h) < this.from ? o += i[u.length - 1] : Number(c) > this.to ? o += s[u.length - 1] : o += t[a]
                }
                return o
            }
        }, {
            key: "doValidate",
            value: function () {
                var t, e = this.value;
                if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom) return !0;
                for (var i = w(this.boundaries(e), 2), s = i[0], r = i[1], o = arguments.length, a = new Array(o), u = 0; u < o; u++) a[u] = arguments[u];
                return this.from <= Number(r) && Number(s) <= this.to && (t = b(p(n.prototype), "doValidate", this)).call.apply(t, [this].concat(a))
            }
        }]), n
    }();
    x.MaskedRange = W;
    var U = function (t) {
        f(n, z);
        var e = _(n);

        function n(t) {
            return c(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t))
        }
        return d(n, [{
            key: "_update",
            value: function (t) {
                t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
                var e = t.blocks;
                t.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS()), t.min && (t.blocks.Y.from = t.min.getFullYear()), t.max && (t.blocks.Y.to = t.max.getFullYear()), t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1, t.blocks.m.to = t.max.getMonth() + 1, t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(), t.blocks.d.to = t.max.getDate())), Object.assign(t.blocks, e), Object.keys(t.blocks).forEach(function (e) {
                    var n = t.blocks[e];
                    "autofix" in n || (n.autofix = t.autofix)
                }), b(p(n.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "doValidate",
            value: function () {
                for (var t, e = this.date, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                return (t = b(p(n.prototype), "doValidate", this)).call.apply(t, [this].concat(s)) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max))
            }
        }, {
            key: "isDateExist",
            value: function (t) {
                return this.format(this.parse(t, this), this).indexOf(t) >= 0
            }
        }, {
            key: "date",
            get: function () {
                return this.typedValue
            },
            set: function (t) {
                this.typedValue = t
            }
        }, {
            key: "typedValue",
            get: function () {
                return this.isComplete ? b(p(n.prototype), "typedValue", this) : null
            },
            set: function (t) {
                E(p(n.prototype), "typedValue", t, this, !0)
            }
        }]), n
    }();
    U.DEFAULTS = {
        pattern: "d{.}`m{.}`Y",
        format: function (t) {
            return [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".")
        },
        parse: function (t) {
            var e = w(t.split("."), 3),
                n = e[0],
                i = e[1],
                s = e[2];
            return new Date(s, i - 1, n)
        }
    }, U.GET_DEFAULT_BLOCKS = function () {
        return {
            d: {
                mask: W,
                from: 1,
                to: 31,
                maxLength: 2
            },
            m: {
                mask: W,
                from: 1,
                to: 12,
                maxLength: 2
            },
            Y: {
                mask: W,
                from: 1900,
                to: 9999
            }
        }
    }, x.MaskedDate = U;
    var q = function () {
        function t() {
            c(this, t)
        }
        return d(t, [{
            key: "selectionStart",
            get: function () {
                var t;
                try {
                    t = this._unsafeSelectionStart
                } catch (t) { }
                return null != t ? t : this.value.length
            }
        }, {
            key: "selectionEnd",
            get: function () {
                var t;
                try {
                    t = this._unsafeSelectionEnd
                } catch (t) { }
                return null != t ? t : this.value.length
            }
        }, {
            key: "select",
            value: function (t, e) {
                if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd)) try {
                    this._unsafeSelect(t, e)
                } catch (t) { }
            }
        }, {
            key: "_unsafeSelect",
            value: function (t, e) { }
        }, {
            key: "isActive",
            get: function () {
                return !1
            }
        }, {
            key: "bindEvents",
            value: function (t) { }
        }, {
            key: "unbindEvents",
            value: function () { }
        }]), t
    }();
    x.MaskElement = q;
    var Y = function (t) {
        f(n, q);
        var e = _(n);

        function n(t) {
            var i;
            return c(this, n), (i = e.call(this)).input = t, i._handlers = {}, i
        }
        return d(n, [{
            key: "rootElement",
            get: function () {
                return this.input.getRootNode ? this.input.getRootNode() : document
            }
        }, {
            key: "isActive",
            get: function () {
                return this.input === this.rootElement.activeElement
            }
        }, {
            key: "_unsafeSelectionStart",
            get: function () {
                return this.input.selectionStart
            }
        }, {
            key: "_unsafeSelectionEnd",
            get: function () {
                return this.input.selectionEnd
            }
        }, {
            key: "_unsafeSelect",
            value: function (t, e) {
                this.input.setSelectionRange(t, e)
            }
        }, {
            key: "value",
            get: function () {
                return this.input.value
            },
            set: function (t) {
                this.input.value = t
            }
        }, {
            key: "bindEvents",
            value: function (t) {
                var e = this;
                Object.keys(t).forEach(function (i) {
                    return e._toggleEventHandler(n.EVENTS_MAP[i], t[i])
                })
            }
        }, {
            key: "unbindEvents",
            value: function () {
                var t = this;
                Object.keys(this._handlers).forEach(function (e) {
                    return t._toggleEventHandler(e)
                })
            }
        }, {
            key: "_toggleEventHandler",
            value: function (t, e) {
                this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]), e && (this.input.addEventListener(t, e), this._handlers[t] = e)
            }
        }]), n
    }();
    Y.EVENTS_MAP = {
        selectionChange: "keydown",
        input: "input",
        drop: "drop",
        click: "click",
        focus: "focus",
        commit: "blur"
    }, x.HTMLMaskElement = Y;
    var K = function (t) {
        f(n, Y);
        var e = _(n);

        function n() {
            return c(this, n), e.apply(this, arguments)
        }
        return d(n, [{
            key: "_unsafeSelectionStart",
            get: function () {
                var t = this.rootElement,
                    e = t.getSelection && t.getSelection();
                return e && e.anchorOffset
            }
        }, {
            key: "_unsafeSelectionEnd",
            get: function () {
                var t = this.rootElement,
                    e = t.getSelection && t.getSelection();
                return e && this._unsafeSelectionStart + String(e).length
            }
        }, {
            key: "_unsafeSelect",
            value: function (t, e) {
                if (this.rootElement.createRange) {
                    var n = this.rootElement.createRange();
                    n.setStart(this.input.firstChild || this.input, t), n.setEnd(this.input.lastChild || this.input, e);
                    var i = this.rootElement,
                        s = i.getSelection && i.getSelection();
                    s && (s.removeAllRanges(), s.addRange(n))
                }
            }
        }, {
            key: "value",
            get: function () {
                return this.input.textContent
            },
            set: function (t) {
                this.input.textContent = t
            }
        }]), n
    }();
    x.HTMLContenteditableMaskElement = K;
    var X = ["mask"],
        G = function () {
            function t(e, n) {
                c(this, t), this.el = e instanceof q ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new K(e) : new Y(e), this.masked = L(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
            }
            return d(t, [{
                key: "mask",
                get: function () {
                    return this.masked.mask
                },
                set: function (t) {
                    if (!this.maskEquals(t))
                        if (t instanceof x.Masked || this.masked.constructor !== I(t)) {
                            var e = L({
                                mask: t
                            });
                            e.unmaskedValue = this.masked.unmaskedValue, this.masked = e
                        } else this.masked.updateOptions({
                            mask: t
                        })
                }
            }, {
                key: "maskEquals",
                value: function (t) {
                    return null == t || t === this.masked.mask || t === Date && this.masked instanceof U
                }
            }, {
                key: "value",
                get: function () {
                    return this._value
                },
                set: function (t) {
                    this.masked.value = t, this.updateControl(), this.alignCursor()
                }
            }, {
                key: "unmaskedValue",
                get: function () {
                    return this._unmaskedValue
                },
                set: function (t) {
                    this.masked.unmaskedValue = t, this.updateControl(), this.alignCursor()
                }
            }, {
                key: "typedValue",
                get: function () {
                    return this.masked.typedValue
                },
                set: function (t) {
                    this.masked.typedValue = t, this.updateControl(), this.alignCursor()
                }
            }, {
                key: "_bindEvents",
                value: function () {
                    this.el.bindEvents({
                        selectionChange: this._saveSelection,
                        input: this._onInput,
                        drop: this._onDrop,
                        click: this._onClick,
                        focus: this._onFocus,
                        commit: this._onChange
                    })
                }
            }, {
                key: "_unbindEvents",
                value: function () {
                    this.el && this.el.unbindEvents()
                }
            }, {
                key: "_fireEvent",
                value: function (t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                    var s = this._listeners[t];
                    s && s.forEach(function (t) {
                        return t.apply(void 0, n)
                    })
                }
            }, {
                key: "selectionStart",
                get: function () {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
                }
            }, {
                key: "cursorPos",
                get: function () {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
                },
                set: function (t) {
                    this.el && this.el.isActive && (this.el.select(t, t), this._saveSelection())
                }
            }, {
                key: "_saveSelection",
                value: function () {
                    this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
                        start: this.selectionStart,
                        end: this.cursorPos
                    }
                }
            }, {
                key: "updateValue",
                value: function () {
                    this.masked.value = this.el.value, this._value = this.masked.value
                }
            }, {
                key: "updateControl",
                value: function () {
                    var t = this.masked.unmaskedValue,
                        e = this.masked.value,
                        n = this.unmaskedValue !== t || this.value !== e;
                    this._unmaskedValue = t, this._value = e, this.el.value !== e && (this.el.value = e), n && this._fireChangeEvents()
                }
            }, {
                key: "updateOptions",
                value: function (t) {
                    var e = t.mask,
                        n = m(t, X),
                        i = !this.maskEquals(e),
                        s = ! function t(e, n) {
                            if (n === e) return !0;
                            var i, s = Array.isArray(n),
                                r = Array.isArray(e);
                            if (s && r) {
                                if (n.length != e.length) return !1;
                                for (i = 0; i < n.length; i++)
                                    if (!t(n[i], e[i])) return !1;
                                return !0
                            }
                            if (s != r) return !1;
                            if (n && e && "object" === l(n) && "object" === l(e)) {
                                var o = n instanceof Date,
                                    a = e instanceof Date;
                                if (o && a) return n.getTime() == e.getTime();
                                if (o != a) return !1;
                                var u = n instanceof RegExp,
                                    c = e instanceof RegExp;
                                if (u && c) return n.toString() == e.toString();
                                if (u != c) return !1;
                                var h = Object.keys(n);
                                for (i = 0; i < h.length; i++)
                                    if (!Object.prototype.hasOwnProperty.call(e, h[i])) return !1;
                                for (i = 0; i < h.length; i++)
                                    if (!t(e[h[i]], n[h[i]])) return !1;
                                return !0
                            }
                            return !(!n || !e || "function" != typeof n || "function" != typeof e) && n.toString() === e.toString()
                        }(this.masked, n);
                    i && (this.mask = e), s && this.masked.updateOptions(n), (i || s) && this.updateControl()
                }
            }, {
                key: "updateCursor",
                value: function (t) {
                    null != t && (this.cursorPos = t, this._delayUpdateCursor(t))
                }
            }, {
                key: "_delayUpdateCursor",
                value: function (t) {
                    var e = this;
                    this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(function () {
                        e.el && (e.cursorPos = e._changingCursorPos, e._abortUpdateCursor())
                    }, 10)
                }
            }, {
                key: "_fireChangeEvents",
                value: function () {
                    this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
                }
            }, {
                key: "_abortUpdateCursor",
                value: function () {
                    this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
                }
            }, {
                key: "alignCursor",
                value: function () {
                    this.cursorPos = this.masked.nearestInputPos(this.cursorPos, S.LEFT)
                }
            }, {
                key: "alignCursorFriendly",
                value: function () {
                    this.selectionStart === this.cursorPos && this.alignCursor()
                }
            }, {
                key: "on",
                value: function (t, e) {
                    return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this
                }
            }, {
                key: "off",
                value: function (t, e) {
                    if (!this._listeners[t]) return this;
                    if (!e) return delete this._listeners[t], this;
                    var n = this._listeners[t].indexOf(e);
                    return n >= 0 && this._listeners[t].splice(n, 1), this
                }
            }, {
                key: "_onInput",
                value: function (t) {
                    if (this._inputEvent = t, this._abortUpdateCursor(), !this._selection) return this.updateValue();
                    var e = new D(this.el.value, this.cursorPos, this.value, this._selection),
                        n = this.masked.rawInputValue,
                        i = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection).offset,
                        s = n === this.masked.rawInputValue ? e.removeDirection : S.NONE,
                        r = this.masked.nearestInputPos(e.startChangePos + i, s);
                    this.updateControl(), this.updateCursor(r), delete this._inputEvent
                }
            }, {
                key: "_onChange",
                value: function () {
                    this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
                }
            }, {
                key: "_onDrop",
                value: function (t) {
                    t.preventDefault(), t.stopPropagation()
                }
            }, {
                key: "_onFocus",
                value: function (t) {
                    this.alignCursorFriendly()
                }
            }, {
                key: "_onClick",
                value: function (t) {
                    this.alignCursorFriendly()
                }
            }, {
                key: "destroy",
                value: function () {
                    this._unbindEvents(), this._listeners.length = 0, delete this.el
                }
            }]), t
        }();
    x.InputMask = G;
    var Q = function (t) {
        f(n, z);
        var e = _(n);

        function n() {
            return c(this, n), e.apply(this, arguments)
        }
        return d(n, [{
            key: "_update",
            value: function (t) {
                t.enum && (t.mask = "*".repeat(t.enum[0].length)), b(p(n.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "doValidate",
            value: function () {
                for (var t, e = this, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                return this.enum.some(function (t) {
                    return t.indexOf(e.unmaskedValue) >= 0
                }) && (t = b(p(n.prototype), "doValidate", this)).call.apply(t, [this].concat(s))
            }
        }]), n
    }();
    x.MaskedEnum = Q;
    var Z = function (t) {
        f(n, B);
        var e = _(n);

        function n(t) {
            return c(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t))
        }
        return d(n, [{
            key: "_update",
            value: function (t) {
                b(p(n.prototype), "_update", this).call(this, t), this._updateRegExps()
            }
        }, {
            key: "_updateRegExps",
            value: function () {
                var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                    e = (this.scale ? "(" + T(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
                this._numberRegExpInput = new RegExp(t + "(0|([1-9]+\\d*))?" + e), this._numberRegExp = new RegExp(t + "\\d*" + e), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(T).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(T(this.thousandsSeparator), "g")
            }
        }, {
            key: "_removeThousandsSeparators",
            value: function (t) {
                return t.replace(this._thousandsSeparatorRegExp, "")
            }
        }, {
            key: "_insertThousandsSeparators",
            value: function (t) {
                var e = t.split(this.radix);
                return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix)
            }
        }, {
            key: "doPrepare",
            value: function (t) {
                for (var e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) s[r - 1] = arguments[r];
                return (e = b(p(n.prototype), "doPrepare", this)).call.apply(e, [this, this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp, this.radix))].concat(s))
            }
        }, {
            key: "_separatorsCount",
            value: function (t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, i = 0; i < t; ++i) this._value.indexOf(this.thousandsSeparator, i) === i && (++n, e && (t += this.thousandsSeparator.length));
                return n
            }
        }, {
            key: "_separatorsCountFromSlice",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
                return this._separatorsCount(this._removeThousandsSeparators(t).length, !0)
            }
        }, {
            key: "extractInput",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    s = w(this._adjustRangeWithSeparators(t, e), 2);
                return t = s[0], e = s[1], this._removeThousandsSeparators(b(p(n.prototype), "extractInput", this).call(this, t, e, i))
            }
        }, {
            key: "_appendCharRaw",
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.thousandsSeparator) return b(p(n.prototype), "_appendCharRaw", this).call(this, t, e);
                var i = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                    s = this._separatorsCountFromSlice(i);
                this._value = this._removeThousandsSeparators(this.value);
                var r = b(p(n.prototype), "_appendCharRaw", this).call(this, t, e);
                this._value = this._insertThousandsSeparators(this._value);
                var o = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                    a = this._separatorsCountFromSlice(o);
                return r.tailShift += (a - s) * this.thousandsSeparator.length, r.skip = !r.rawInserted && t === this.thousandsSeparator, r
            }
        }, {
            key: "_findSeparatorAround",
            value: function (t) {
                if (this.thousandsSeparator) {
                    var e = t - this.thousandsSeparator.length + 1,
                        n = this.value.indexOf(this.thousandsSeparator, e);
                    if (n <= t) return n
                }
                return -1
            }
        }, {
            key: "_adjustRangeWithSeparators",
            value: function (t, e) {
                var n = this._findSeparatorAround(t);
                n >= 0 && (t = n);
                var i = this._findSeparatorAround(e);
                return i >= 0 && (e = i + this.thousandsSeparator.length), [t, e]
            }
        }, {
            key: "remove",
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = w(this._adjustRangeWithSeparators(t, e), 2);
                t = n[0], e = n[1];
                var i = this.value.slice(0, t),
                    s = this.value.slice(e),
                    r = this._separatorsCount(i.length);
                this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(i + s));
                var o = this._separatorsCountFromSlice(i);
                return new O({
                    tailShift: (o - r) * this.thousandsSeparator.length
                })
            }
        }, {
            key: "nearestInputPos",
            value: function (t, e) {
                if (!this.thousandsSeparator) return t;
                switch (e) {
                    case S.NONE:
                    case S.LEFT:
                    case S.FORCE_LEFT:
                        var n = this._findSeparatorAround(t - 1);
                        if (n >= 0) {
                            var i = n + this.thousandsSeparator.length;
                            if (t < i || this.value.length <= i || e === S.FORCE_LEFT) return n
                        }
                        break;
                    case S.RIGHT:
                    case S.FORCE_RIGHT:
                        var s = this._findSeparatorAround(t);
                        if (s >= 0) return s + this.thousandsSeparator.length
                }
                return t
            }
        }, {
            key: "doValidate",
            value: function (t) {
                var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));
                if (e) {
                    var i = this.number;
                    e = e && !isNaN(i) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)
                }
                return e && b(p(n.prototype), "doValidate", this).call(this, t)
            }
        }, {
            key: "doCommit",
            value: function () {
                if (this.value) {
                    var t = this.number,
                        e = t;
                    null != this.min && (e = Math.max(e, this.min)), null != this.max && (e = Math.min(e, this.max)), e !== t && (this.unmaskedValue = String(e));
                    var i = this.value;
                    this.normalizeZeros && (i = this._normalizeZeros(i)), this.padFractionalZeros && (i = this._padFractionalZeros(i)), this._value = i
                }
                b(p(n.prototype), "doCommit", this).call(this)
            }
        }, {
            key: "_normalizeZeros",
            value: function (t) {
                var e = this._removeThousandsSeparators(t).split(this.radix);
                return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, function (t, e, n, i) {
                    return e + i
                }), t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"), e.length > 1 && (e[1] = e[1].replace(/0*$/, ""), e[1].length || (e.length = 1)), this._insertThousandsSeparators(e.join(this.radix))
            }
        }, {
            key: "_padFractionalZeros",
            value: function (t) {
                if (!t) return t;
                var e = t.split(this.radix);
                return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix)
            }
        }, {
            key: "unmaskedValue",
            get: function () {
                return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".")
            },
            set: function (t) {
                E(p(n.prototype), "unmaskedValue", t.replace(".", this.radix), this, !0)
            }
        }, {
            key: "typedValue",
            get: function () {
                return Number(this.unmaskedValue)
            },
            set: function (t) {
                E(p(n.prototype), "unmaskedValue", String(t), this, !0)
            }
        }, {
            key: "number",
            get: function () {
                return this.typedValue
            },
            set: function (t) {
                this.typedValue = t
            }
        }, {
            key: "allowNegative",
            get: function () {
                return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0
            }
        }]), n
    }();
    Z.DEFAULTS = {
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: ["."],
        scale: 2,
        signed: !1,
        normalizeZeros: !0,
        padFractionalZeros: !1
    }, x.MaskedNumber = Z;
    var J = function (t) {
        f(n, B);
        var e = _(n);

        function n() {
            return c(this, n), e.apply(this, arguments)
        }
        return d(n, [{
            key: "_update",
            value: function (t) {
                t.mask && (t.validate = t.mask), b(p(n.prototype), "_update", this).call(this, t)
            }
        }]), n
    }();
    x.MaskedFunction = J;
    var tt = ["compiledMasks", "currentMaskRef", "currentMask"],
        et = function (t) {
            f(n, B);
            var e = _(n);

            function n(t) {
                var i;
                return c(this, n), (i = e.call(this, Object.assign({}, n.DEFAULTS, t))).currentMask = null, i
            }
            return d(n, [{
                key: "_update",
                value: function (t) {
                    b(p(n.prototype), "_update", this).call(this, t), "mask" in t && (this.compiledMasks = Array.isArray(t.mask) ? t.mask.map(function (t) {
                        return L(t)
                    }) : [])
                }
            }, {
                key: "_appendCharRaw",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this._applyDispatch(t, e);
                    return this.currentMask && n.aggregate(this.currentMask._appendChar(t, e)), n
                }
            }, {
                key: "_applyDispatch",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value,
                        i = this.rawInputValue,
                        s = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : i,
                        r = i.slice(s.length),
                        o = this.currentMask,
                        a = new O,
                        u = o && o.state;
                    if (this.currentMask = this.doDispatch(t, Object.assign({}, e)), this.currentMask)
                        if (this.currentMask !== o) {
                            if (this.currentMask.reset(), s) {
                                var l = this.currentMask.append(s, {
                                    raw: !0
                                });
                                a.tailShift = l.inserted.length - n.length
                            }
                            r && (a.tailShift += this.currentMask.append(r, {
                                raw: !0,
                                tail: !0
                            }).tailShift)
                        } else this.currentMask.state = u;
                    return a
                }
            }, {
                key: "_appendPlaceholder",
                value: function () {
                    var t = this._applyDispatch.apply(this, arguments);
                    return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t
                }
            }, {
                key: "doDispatch",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.dispatch(t, this, e)
                }
            }, {
                key: "doValidate",
                value: function () {
                    for (var t, e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return (t = b(p(n.prototype), "doValidate", this)).call.apply(t, [this].concat(s)) && (!this.currentMask || (e = this.currentMask).doValidate.apply(e, s))
                }
            }, {
                key: "reset",
                value: function () {
                    this.currentMask && this.currentMask.reset(), this.compiledMasks.forEach(function (t) {
                        return t.reset()
                    })
                }
            }, {
                key: "value",
                get: function () {
                    return this.currentMask ? this.currentMask.value : ""
                },
                set: function (t) {
                    E(p(n.prototype), "value", t, this, !0)
                }
            }, {
                key: "unmaskedValue",
                get: function () {
                    return this.currentMask ? this.currentMask.unmaskedValue : ""
                },
                set: function (t) {
                    E(p(n.prototype), "unmaskedValue", t, this, !0)
                }
            }, {
                key: "typedValue",
                get: function () {
                    return this.currentMask ? this.currentMask.typedValue : ""
                },
                set: function (t) {
                    var e = String(t);
                    this.currentMask && (this.currentMask.typedValue = t, e = this.currentMask.unmaskedValue), this.unmaskedValue = e
                }
            }, {
                key: "isComplete",
                get: function () {
                    return !!this.currentMask && this.currentMask.isComplete
                }
            }, {
                key: "remove",
                value: function () {
                    var t, e = new O;
                    this.currentMask && e.aggregate((t = this.currentMask).remove.apply(t, arguments)).aggregate(this._applyDispatch());
                    return e
                }
            }, {
                key: "state",
                get: function () {
                    return Object.assign({}, b(p(n.prototype), "state", this), {
                        _rawInputValue: this.rawInputValue,
                        compiledMasks: this.compiledMasks.map(function (t) {
                            return t.state
                        }),
                        currentMaskRef: this.currentMask,
                        currentMask: this.currentMask && this.currentMask.state
                    })
                },
                set: function (t) {
                    var e = t.compiledMasks,
                        i = t.currentMaskRef,
                        s = t.currentMask,
                        r = m(t, tt);
                    this.compiledMasks.forEach(function (t, n) {
                        return t.state = e[n]
                    }), null != i && (this.currentMask = i, this.currentMask.state = s), E(p(n.prototype), "state", r, this, !0)
                }
            }, {
                key: "extractInput",
                value: function () {
                    var t;
                    return this.currentMask ? (t = this.currentMask).extractInput.apply(t, arguments) : ""
                }
            }, {
                key: "extractTail",
                value: function () {
                    for (var t, e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return this.currentMask ? (t = this.currentMask).extractTail.apply(t, s) : (e = b(p(n.prototype), "extractTail", this)).call.apply(e, [this].concat(s))
                }
            }, {
                key: "doCommit",
                value: function () {
                    this.currentMask && this.currentMask.doCommit(), b(p(n.prototype), "doCommit", this).call(this)
                }
            }, {
                key: "nearestInputPos",
                value: function () {
                    for (var t, e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    return this.currentMask ? (t = this.currentMask).nearestInputPos.apply(t, s) : (e = b(p(n.prototype), "nearestInputPos", this)).call.apply(e, [this].concat(s))
                }
            }, {
                key: "overwrite",
                get: function () {
                    return this.currentMask ? this.currentMask.overwrite : b(p(n.prototype), "overwrite", this)
                },
                set: function (t) {
                    console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')
                }
            }]), n
        }();
    et.DEFAULTS = {
        dispatch: function (t, e, n) {
            if (e.compiledMasks.length) {
                var i = e.rawInputValue,
                    s = e.compiledMasks.map(function (e, s) {
                        return e.reset(), e.append(i, {
                            raw: !0
                        }), e.append(t, n), {
                            weight: e.rawInputValue.length,
                            index: s
                        }
                    });
                return s.sort(function (t, e) {
                    return e.weight - t.weight
                }), e.compiledMasks[s[0].index]
            }
        }
    }, x.MaskedDynamic = et;
    var nt = {
        MASKED: "value",
        UNMASKED: "unmaskedValue",
        TYPED: "typedValue"
    };

    function it(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nt.MASKED,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nt.MASKED,
            i = L(t);
        return function (t) {
            return i.runIsolated(function (i) {
                return i[e] = t, i[n]
            })
        }
    }
    x.PIPE_TYPE = nt, x.createPipe = it, x.pipe = function (t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
        return it.apply(void 0, n)(t)
    };
    try {
        globalThis.IMask = x
    } catch (t) { } [].slice.call(document.querySelectorAll("[data-mask]")).map(function (t) {
        return new x(t, {
            mask: t.dataset.mask,
            lazy: "true" === t.dataset["mask-visible"]
        })
    });
    var st = "top",
        rt = "bottom",
        ot = "right",
        at = "left",
        ut = "auto",
        lt = [st, rt, ot, at],
        ct = "start",
        ht = "end",
        dt = "clippingParents",
        ft = "viewport",
        pt = "popper",
        gt = "reference",
        mt = lt.reduce(function (t, e) {
            return t.concat([e + "-" + ct, e + "-" + ht])
        }, []),
        vt = [].concat(lt, [ut]).reduce(function (t, e) {
            return t.concat([e, e + "-" + ct, e + "-" + ht])
        }, []),
        _t = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function yt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function bt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function kt(t) {
        return t instanceof bt(t).Element || t instanceof Element
    }

    function Et(t) {
        return t instanceof bt(t).HTMLElement || t instanceof HTMLElement
    }

    function wt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof bt(t).ShadowRoot || t instanceof ShadowRoot)
    }
    var At = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var n = e.styles[t] || {},
                    i = e.attributes[t] || {},
                    s = e.elements[t];
                Et(s) && yt(s) && (Object.assign(s.style, n), Object.keys(i).forEach(function (t) {
                    var e = i[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }))
            })
        },
        effect: function (t) {
            var e = t.state,
                n = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (t) {
                        var i = e.elements[t],
                            s = e.attributes[t] || {},
                            r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function (t, e) {
                                return t[e] = "", t
                            }, {});
                        Et(i) && yt(i) && (Object.assign(i.style, r), Object.keys(s).forEach(function (t) {
                            i.removeAttribute(t)
                        }))
                    })
                }
        },
        requires: ["computeStyles"]
    };

    function Ct(t) {
        return t.split("-")[0]
    }
    var St = Math.round;

    function Tt(t, e) {
        void 0 === e && (e = !1);
        var n = t.getBoundingClientRect(),
            i = 1,
            s = 1;
        return Et(t) && e && (i = n.width / t.offsetWidth || 1, s = n.height / t.offsetHeight || 1), {
            width: St(n.width / i),
            height: St(n.height / s),
            top: St(n.top / s),
            right: St(n.right / i),
            bottom: St(n.bottom / s),
            left: St(n.left / i),
            x: St(n.left / i),
            y: St(n.top / s)
        }
    }

    function Dt(t) {
        var e = Tt(t),
            n = t.offsetWidth,
            i = t.offsetHeight;
        return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: n,
            height: i
        }
    }

    function Ot(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && wt(n)) {
            var i = e;
            do {
                if (i && t.isSameNode(i)) return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }

    function Ft(t) {
        return bt(t).getComputedStyle(t)
    }

    function xt(t) {
        return ["table", "td", "th"].indexOf(yt(t)) >= 0
    }

    function Bt(t) {
        return ((kt(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function It(t) {
        return "html" === yt(t) ? t : t.assignedSlot || t.parentNode || (wt(t) ? t.host : null) || Bt(t)
    }

    function Lt(t) {
        return Et(t) && "fixed" !== Ft(t).position ? t.offsetParent : null
    }

    function Pt(t) {
        for (var e = bt(t), n = Lt(t); n && xt(n) && "static" === Ft(n).position;) n = Lt(n);
        return n && ("html" === yt(n) || "body" === yt(n) && "static" === Ft(n).position) ? e : n || function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && Et(t) && "fixed" === Ft(t).position) return null;
            for (var n = It(t); Et(n) && ["html", "body"].indexOf(yt(n)) < 0;) {
                var i = Ft(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter) return n;
                n = n.parentNode
            }
            return null
        }(t) || e
    }

    function Mt(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    var Nt = Math.max,
        Rt = Math.min,
        jt = Math.round;

    function Vt(t, e, n) {
        return Nt(t, Rt(e, n))
    }

    function Ht(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }

    function $t(t, e) {
        return e.reduce(function (e, n) {
            return e[n] = t, e
        }, {})
    }
    var zt = function (t, e) {
        return Ht("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
        })) : t) ? t : $t(t, lt))
    };
    var Wt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e, n = t.state,
                i = t.name,
                s = t.options,
                r = n.elements.arrow,
                o = n.modifiersData.popperOffsets,
                a = Ct(n.placement),
                u = Mt(a),
                l = [at, ot].indexOf(a) >= 0 ? "height" : "width";
            if (r && o) {
                var c = zt(s.padding, n),
                    h = Dt(r),
                    d = "y" === u ? st : at,
                    f = "y" === u ? rt : ot,
                    p = n.rects.reference[l] + n.rects.reference[u] - o[u] - n.rects.popper[l],
                    g = o[u] - n.rects.reference[u],
                    m = Pt(r),
                    v = m ? "y" === u ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                    _ = p / 2 - g / 2,
                    y = c[d],
                    b = v - h[l] - c[f],
                    k = v / 2 - h[l] / 2 + _,
                    E = Vt(y, k, b),
                    w = u;
                n.modifiersData[i] = ((e = {})[w] = E, e.centerOffset = E - k, e)
            }
        },
        effect: function (t) {
            var e = t.state,
                n = t.options.element,
                i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && Ot(e.elements.popper, i) && (e.elements.arrow = i)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    },
        Ut = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

    function qt(t) {
        var e, n = t.popper,
            i = t.popperRect,
            s = t.placement,
            r = t.offsets,
            o = t.position,
            a = t.gpuAcceleration,
            u = t.adaptive,
            l = t.roundOffsets,
            c = !0 === l ? function (t) {
                var e = t.x,
                    n = t.y,
                    i = window.devicePixelRatio || 1;
                return {
                    x: jt(jt(e * i) / i) || 0,
                    y: jt(jt(n * i) / i) || 0
                }
            }(r) : "function" == typeof l ? l(r) : r,
            h = c.x,
            d = void 0 === h ? 0 : h,
            f = c.y,
            p = void 0 === f ? 0 : f,
            g = r.hasOwnProperty("x"),
            m = r.hasOwnProperty("y"),
            v = at,
            _ = st,
            y = window;
        if (u) {
            var b = Pt(n),
                k = "clientHeight",
                E = "clientWidth";
            b === bt(n) && "static" !== Ft(b = Bt(n)).position && (k = "scrollHeight", E = "scrollWidth"), b = b, s === st && (_ = rt, p -= b[k] - i.height, p *= a ? 1 : -1), s === at && (v = ot, d -= b[E] - i.width, d *= a ? 1 : -1)
        }
        var w, A = Object.assign({
            position: o
        }, u && Ut);
        return a ? Object.assign({}, A, ((w = {})[_] = m ? "0" : "", w[v] = g ? "0" : "", w.transform = (y.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + p + "px)" : "translate3d(" + d + "px, " + p + "px, 0)", w)) : Object.assign({}, A, ((e = {})[_] = m ? p + "px" : "", e[v] = g ? d + "px" : "", e.transform = "", e))
    }
    var Yt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
            var e = t.state,
                n = t.options,
                i = n.gpuAcceleration,
                s = void 0 === i || i,
                r = n.adaptive,
                o = void 0 === r || r,
                a = n.roundOffsets,
                u = void 0 === a || a,
                l = {
                    placement: Ct(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, qt(Object.assign({}, l, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: o,
                roundOffsets: u
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, qt(Object.assign({}, l, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: u
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    },
        Kt = {
            passive: !0
        };
    var Xt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () { },
        effect: function (t) {
            var e = t.state,
                n = t.instance,
                i = t.options,
                s = i.scroll,
                r = void 0 === s || s,
                o = i.resize,
                a = void 0 === o || o,
                u = bt(e.elements.popper),
                l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return r && l.forEach(function (t) {
                t.addEventListener("scroll", n.update, Kt)
            }), a && u.addEventListener("resize", n.update, Kt),
                function () {
                    r && l.forEach(function (t) {
                        t.removeEventListener("scroll", n.update, Kt)
                    }), a && u.removeEventListener("resize", n.update, Kt)
                }
        },
        data: {}
    },
        Gt = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function Qt(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return Gt[t]
        })
    }
    var Zt = {
        start: "end",
        end: "start"
    };

    function Jt(t) {
        return t.replace(/start|end/g, function (t) {
            return Zt[t]
        })
    }

    function te(t) {
        var e = bt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function ee(t) {
        return Tt(Bt(t)).left + te(t).scrollLeft
    }

    function ne(t) {
        var e = Ft(t),
            n = e.overflow,
            i = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + s + i)
    }

    function ie(t, e) {
        var n;
        void 0 === e && (e = []);
        var i = function t(e) {
            return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : Et(e) && ne(e) ? e : t(It(e))
        }(t),
            s = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
            r = bt(i),
            o = s ? [r].concat(r.visualViewport || [], ne(i) ? i : []) : i,
            a = e.concat(o);
        return s ? a : a.concat(ie(It(o)))
    }

    function se(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function re(t, e) {
        return e === ft ? se(function (t) {
            var e = bt(t),
                n = Bt(t),
                i = e.visualViewport,
                s = n.clientWidth,
                r = n.clientHeight,
                o = 0,
                a = 0;
            return i && (s = i.width, r = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = i.offsetLeft, a = i.offsetTop)), {
                width: s,
                height: r,
                x: o + ee(t),
                y: a
            }
        }(t)) : Et(e) ? function (t) {
            var e = Tt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : se(function (t) {
            var e, n = Bt(t),
                i = te(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                r = Nt(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                o = Nt(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -i.scrollLeft + ee(t),
                u = -i.scrollTop;
            return "rtl" === Ft(s || n).direction && (a += Nt(n.clientWidth, s ? s.clientWidth : 0) - r), {
                width: r,
                height: o,
                x: a,
                y: u
            }
        }(Bt(t)))
    }

    function oe(t, e, n) {
        var i = "clippingParents" === e ? function (t) {
            var e = ie(It(t)),
                n = ["absolute", "fixed"].indexOf(Ft(t).position) >= 0 && Et(t) ? Pt(t) : t;
            return kt(n) ? e.filter(function (t) {
                return kt(t) && Ot(t, n) && "body" !== yt(t)
            }) : []
        }(t) : [].concat(e),
            s = [].concat(i, [n]),
            r = s[0],
            o = s.reduce(function (e, n) {
                var i = re(t, n);
                return e.top = Nt(i.top, e.top), e.right = Rt(i.right, e.right), e.bottom = Rt(i.bottom, e.bottom), e.left = Nt(i.left, e.left), e
            }, re(t, r));
        return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o
    }

    function ae(t) {
        return t.split("-")[1]
    }

    function ue(t) {
        var e, n = t.reference,
            i = t.element,
            s = t.placement,
            r = s ? Ct(s) : null,
            o = s ? ae(s) : null,
            a = n.x + n.width / 2 - i.width / 2,
            u = n.y + n.height / 2 - i.height / 2;
        switch (r) {
            case st:
                e = {
                    x: a,
                    y: n.y - i.height
                };
                break;
            case rt:
                e = {
                    x: a,
                    y: n.y + n.height
                };
                break;
            case ot:
                e = {
                    x: n.x + n.width,
                    y: u
                };
                break;
            case at:
                e = {
                    x: n.x - i.width,
                    y: u
                };
                break;
            default:
                e = {
                    x: n.x,
                    y: n.y
                }
        }
        var l = r ? Mt(r) : null;
        if (null != l) {
            var c = "y" === l ? "height" : "width";
            switch (o) {
                case ct:
                    e[l] = e[l] - (n[c] / 2 - i[c] / 2);
                    break;
                case ht:
                    e[l] = e[l] + (n[c] / 2 - i[c] / 2)
            }
        }
        return e
    }

    function le(t, e) {
        void 0 === e && (e = {});
        var n = e,
            i = n.placement,
            s = void 0 === i ? t.placement : i,
            r = n.boundary,
            o = void 0 === r ? dt : r,
            a = n.rootBoundary,
            u = void 0 === a ? ft : a,
            l = n.elementContext,
            c = void 0 === l ? pt : l,
            h = n.altBoundary,
            d = void 0 !== h && h,
            f = n.padding,
            p = void 0 === f ? 0 : f,
            g = Ht("number" != typeof p ? p : $t(p, lt)),
            m = c === pt ? gt : pt,
            v = t.elements.reference,
            _ = t.rects.popper,
            y = t.elements[d ? m : c],
            b = oe(kt(y) ? y : y.contextElement || Bt(t.elements.popper), o, u),
            k = Tt(v),
            E = ue({
                reference: k,
                element: _,
                strategy: "absolute",
                placement: s
            }),
            w = se(Object.assign({}, _, E)),
            A = c === pt ? w : k,
            C = {
                top: b.top - A.top + g.top,
                bottom: A.bottom - b.bottom + g.bottom,
                left: b.left - A.left + g.left,
                right: A.right - b.right + g.right
            },
            S = t.modifiersData.offset;
        if (c === pt && S) {
            var T = S[s];
            Object.keys(C).forEach(function (t) {
                var e = [ot, rt].indexOf(t) >= 0 ? 1 : -1,
                    n = [st, rt].indexOf(t) >= 0 ? "y" : "x";
                C[t] += T[n] * e
            })
        }
        return C
    }

    function ce(t, e) {
        void 0 === e && (e = {});
        var n = e,
            i = n.placement,
            s = n.boundary,
            r = n.rootBoundary,
            o = n.padding,
            a = n.flipVariations,
            u = n.allowedAutoPlacements,
            l = void 0 === u ? vt : u,
            c = ae(i),
            h = c ? a ? mt : mt.filter(function (t) {
                return ae(t) === c
            }) : lt,
            d = h.filter(function (t) {
                return l.indexOf(t) >= 0
            });
        0 === d.length && (d = h);
        var f = d.reduce(function (e, n) {
            return e[n] = le(t, {
                placement: n,
                boundary: s,
                rootBoundary: r,
                padding: o
            })[Ct(n)], e
        }, {});
        return Object.keys(f).sort(function (t, e) {
            return f[t] - f[e]
        })
    }
    var he = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                n = t.options,
                i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var s = n.mainAxis, r = void 0 === s || s, o = n.altAxis, a = void 0 === o || o, u = n.fallbackPlacements, l = n.padding, c = n.boundary, h = n.rootBoundary, d = n.altBoundary, f = n.flipVariations, p = void 0 === f || f, g = n.allowedAutoPlacements, m = e.options.placement, v = Ct(m), _ = u || (v !== m && p ? function (t) {
                    if (Ct(t) === ut) return [];
                    var e = Qt(t);
                    return [Jt(t), e, Jt(e)]
                }(m) : [Qt(m)]), y = [m].concat(_).reduce(function (t, n) {
                    return t.concat(Ct(n) === ut ? ce(e, {
                        placement: n,
                        boundary: c,
                        rootBoundary: h,
                        padding: l,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : n)
                }, []), b = e.rects.reference, k = e.rects.popper, E = new Map, w = !0, A = y[0], C = 0; C < y.length; C++) {
                    var S = y[C],
                        T = Ct(S),
                        D = ae(S) === ct,
                        O = [st, rt].indexOf(T) >= 0,
                        F = O ? "width" : "height",
                        x = le(e, {
                            placement: S,
                            boundary: c,
                            rootBoundary: h,
                            altBoundary: d,
                            padding: l
                        }),
                        B = O ? D ? ot : at : D ? rt : st;
                    b[F] > k[F] && (B = Qt(B));
                    var I = Qt(B),
                        L = [];
                    if (r && L.push(x[T] <= 0), a && L.push(x[B] <= 0, x[I] <= 0), L.every(function (t) {
                        return t
                    })) {
                        A = S, w = !1;
                        break
                    }
                    E.set(S, L)
                }
                if (w)
                    for (var P = function (t) {
                        var e = y.find(function (e) {
                            var n = E.get(e);
                            if (n) return n.slice(0, t).every(function (t) {
                                return t
                            })
                        });
                        if (e) return A = e, "break"
                    }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
                e.placement !== A && (e.modifiersData[i]._skip = !0, e.placement = A, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function de(t, e, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }

    function fe(t) {
        return [st, ot, rt, at].some(function (e) {
            return t[e] >= 0
        })
    }
    var pe = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
            var e = t.state,
                n = t.name,
                i = e.rects.reference,
                s = e.rects.popper,
                r = e.modifiersData.preventOverflow,
                o = le(e, {
                    elementContext: "reference"
                }),
                a = le(e, {
                    altBoundary: !0
                }),
                u = de(o, i),
                l = de(a, s, r),
                c = fe(u),
                h = fe(l);
            e.modifiersData[n] = {
                referenceClippingOffsets: u,
                popperEscapeOffsets: l,
                isReferenceHidden: c,
                hasPopperEscaped: h
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": c,
                "data-popper-escaped": h
            })
        }
    };
    var ge = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
            var e = t.state,
                n = t.options,
                i = t.name,
                s = n.offset,
                r = void 0 === s ? [0, 0] : s,
                o = vt.reduce(function (t, n) {
                    return t[n] = function (t, e, n) {
                        var i = Ct(t),
                            s = [at, st].indexOf(i) >= 0 ? -1 : 1,
                            r = "function" == typeof n ? n(Object.assign({}, e, {
                                placement: t
                            })) : n,
                            o = r[0],
                            a = r[1];
                        return o = o || 0, a = (a || 0) * s, [at, ot].indexOf(i) >= 0 ? {
                            x: a,
                            y: o
                        } : {
                            x: o,
                            y: a
                        }
                    }(n, e.rects, r), t
                }, {}),
                a = o[e.placement],
                u = a.x,
                l = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += l), e.modifiersData[i] = o
        }
    };
    var me = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
            var e = t.state,
                n = t.name;
            e.modifiersData[n] = ue({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    var ve = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                n = t.options,
                i = t.name,
                s = n.mainAxis,
                r = void 0 === s || s,
                o = n.altAxis,
                a = void 0 !== o && o,
                u = n.boundary,
                l = n.rootBoundary,
                c = n.altBoundary,
                h = n.padding,
                d = n.tether,
                f = void 0 === d || d,
                p = n.tetherOffset,
                g = void 0 === p ? 0 : p,
                m = le(e, {
                    boundary: u,
                    rootBoundary: l,
                    padding: h,
                    altBoundary: c
                }),
                v = Ct(e.placement),
                _ = ae(e.placement),
                y = !_,
                b = Mt(v),
                k = "x" === b ? "y" : "x",
                E = e.modifiersData.popperOffsets,
                w = e.rects.reference,
                A = e.rects.popper,
                C = "function" == typeof g ? g(Object.assign({}, e.rects, {
                    placement: e.placement
                })) : g,
                S = {
                    x: 0,
                    y: 0
                };
            if (E) {
                if (r || a) {
                    var T = "y" === b ? st : at,
                        D = "y" === b ? rt : ot,
                        O = "y" === b ? "height" : "width",
                        F = E[b],
                        x = E[b] + m[T],
                        B = E[b] - m[D],
                        I = f ? -A[O] / 2 : 0,
                        L = _ === ct ? w[O] : A[O],
                        P = _ === ct ? -A[O] : -w[O],
                        M = e.elements.arrow,
                        N = f && M ? Dt(M) : {
                            width: 0,
                            height: 0
                        },
                        R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        j = R[T],
                        V = R[D],
                        H = Vt(0, w[O], N[O]),
                        $ = y ? w[O] / 2 - I - H - j - C : L - H - j - C,
                        z = y ? -w[O] / 2 + I + H + V + C : P + H + V + C,
                        W = e.elements.arrow && Pt(e.elements.arrow),
                        U = W ? "y" === b ? W.clientTop || 0 : W.clientLeft || 0 : 0,
                        q = e.modifiersData.offset ? e.modifiersData.offset[e.placement][b] : 0,
                        Y = E[b] + $ - q - U,
                        K = E[b] + z - q;
                    if (r) {
                        var X = Vt(f ? Rt(x, Y) : x, F, f ? Nt(B, K) : B);
                        E[b] = X, S[b] = X - F
                    }
                    if (a) {
                        var G = "x" === b ? st : at,
                            Q = "x" === b ? rt : ot,
                            Z = E[k],
                            J = Z + m[G],
                            tt = Z - m[Q],
                            et = Vt(f ? Rt(J, Y) : J, Z, f ? Nt(tt, K) : tt);
                        E[k] = et, S[k] = et - Z
                    }
                }
                e.modifiersData[i] = S
            }
        },
        requiresIfExists: ["offset"]
    };

    function _e(t, e, n) {
        void 0 === n && (n = !1);
        var i, s, r = Et(e),
            o = Et(e) && function (t) {
                var e = t.getBoundingClientRect(),
                    n = e.width / t.offsetWidth || 1,
                    i = e.height / t.offsetHeight || 1;
                return 1 !== n || 1 !== i
            }(e),
            a = Bt(e),
            u = Tt(t, o),
            l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            c = {
                x: 0,
                y: 0
            };
        return (r || !r && !n) && (("body" !== yt(e) || ne(a)) && (l = (i = e) !== bt(i) && Et(i) ? {
            scrollLeft: (s = i).scrollLeft,
            scrollTop: s.scrollTop
        } : te(i)), Et(e) ? ((c = Tt(e, !0)).x += e.clientLeft, c.y += e.clientTop) : a && (c.x = ee(a))), {
            x: u.left + l.scrollLeft - c.x,
            y: u.top + l.scrollTop - c.y,
            width: u.width,
            height: u.height
        }
    }

    function ye(t) {
        var e = new Map,
            n = new Set,
            i = [];
        return t.forEach(function (t) {
            e.set(t.name, t)
        }), t.forEach(function (t) {
            n.has(t.name) || function t(s) {
                n.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (i) {
                    if (!n.has(i)) {
                        var s = e.get(i);
                        s && t(s)
                    }
                }), i.push(s)
            }(t)
        }), i
    }
    var be = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function ke() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        })
    }

    function Ee(t) {
        void 0 === t && (t = {});
        var e = t,
            n = e.defaultModifiers,
            i = void 0 === n ? [] : n,
            s = e.defaultOptions,
            r = void 0 === s ? be : s;
        return function (t, e, n) {
            void 0 === n && (n = r);
            var s, o, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, be, r),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            },
                u = [],
                l = !1,
                c = {
                    state: a,
                    setOptions: function (n) {
                        h(), a.options = Object.assign({}, r, a.options, n), a.scrollParents = {
                            reference: kt(t) ? ie(t) : t.contextElement ? ie(t.contextElement) : [],
                            popper: ie(e)
                        };
                        var s, o, l = function (t) {
                            var e = ye(t);
                            return _t.reduce(function (t, n) {
                                return t.concat(e.filter(function (t) {
                                    return t.phase === n
                                }))
                            }, [])
                        }((s = [].concat(i, a.options.modifiers), o = s.reduce(function (t, e) {
                            var n = t[e.name];
                            return t[e.name] = n ? Object.assign({}, n, e, {
                                options: Object.assign({}, n.options, e.options),
                                data: Object.assign({}, n.data, e.data)
                            }) : e, t
                        }, {}), Object.keys(o).map(function (t) {
                            return o[t]
                        })));
                        return a.orderedModifiers = l.filter(function (t) {
                            return t.enabled
                        }), a.orderedModifiers.forEach(function (t) {
                            var e = t.name,
                                n = t.options,
                                i = void 0 === n ? {} : n,
                                s = t.effect;
                            if ("function" == typeof s) {
                                var r = s({
                                    state: a,
                                    name: e,
                                    instance: c,
                                    options: i
                                });
                                u.push(r || function () { })
                            }
                        }), c.update()
                    },
                    forceUpdate: function () {
                        if (!l) {
                            var t = a.elements,
                                e = t.reference,
                                n = t.popper;
                            if (ke(e, n)) {
                                a.rects = {
                                    reference: _e(e, Pt(n), "fixed" === a.options.strategy),
                                    popper: Dt(n)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                });
                                for (var i = 0; i < a.orderedModifiers.length; i++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[i],
                                            r = s.fn,
                                            o = s.options,
                                            u = void 0 === o ? {} : o,
                                            h = s.name;
                                        "function" == typeof r && (a = r({
                                            state: a,
                                            options: u,
                                            name: h,
                                            instance: c
                                        }) || a)
                                    } else a.reset = !1, i = -1
                            }
                        }
                    },
                    update: (s = function () {
                        return new Promise(function (t) {
                            c.forceUpdate(), t(a)
                        })
                    }, function () {
                        return o || (o = new Promise(function (t) {
                            Promise.resolve().then(function () {
                                o = void 0, t(s())
                            })
                        })), o
                    }),
                    destroy: function () {
                        h(), l = !0
                    }
                };
            if (!ke(t, e)) return c;

            function h() {
                u.forEach(function (t) {
                    return t()
                }), u = []
            }
            return c.setOptions(n).then(function (t) {
                !l && n.onFirstUpdate && n.onFirstUpdate(t)
            }), c
        }
    }
    var we = Ee(),
        Ae = Ee({
            defaultModifiers: [Xt, me, Yt, At]
        }),
        Ce = Ee({
            defaultModifiers: [Xt, me, Yt, At, ge, he, ve, Wt, pe]
        }),
        Se = Object.freeze({
            __proto__: null,
            popperGenerator: Ee,
            detectOverflow: le,
            createPopperBase: we,
            createPopper: Ce,
            createPopperLite: Ae,
            top: st,
            bottom: rt,
            right: ot,
            left: at,
            auto: ut,
            basePlacements: lt,
            start: ct,
            end: ht,
            clippingParents: dt,
            viewport: ft,
            popper: pt,
            reference: gt,
            variationPlacements: mt,
            placements: vt,
            beforeRead: "beforeRead",
            read: "read",
            afterRead: "afterRead",
            beforeMain: "beforeMain",
            main: "main",
            afterMain: "afterMain",
            beforeWrite: "beforeWrite",
            write: "write",
            afterWrite: "afterWrite",
            modifierPhases: _t,
            applyStyles: At,
            arrow: Wt,
            computeStyles: Yt,
            eventListeners: Xt,
            flip: he,
            hide: pe,
            offset: ge,
            popperOffsets: me,
            preventOverflow: ve
        });
    const Te = t => {
        do {
            t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    },
        De = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let n = t.getAttribute("href");
                if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), e = n && "#" !== n ? n.trim() : null
            }
            return e
        },
        Oe = t => {
            const e = De(t);
            return e && document.querySelector(e) ? e : null
        },
        Fe = t => {
            const e = De(t);
            return e ? document.querySelector(e) : null
        },
        xe = t => {
            t.dispatchEvent(new Event("transitionend"))
        },
        Be = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        Ie = t => Be(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
        Le = (t, e, n) => {
            Object.keys(n).forEach(i => {
                const s = n[i],
                    r = e[i],
                    o = r && Be(r) ? "element" : (t => null == t ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase())(r);
                if (!new RegExp(s).test(o)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`)
            })
        },
        Pe = t => !(!Be(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        Me = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))),
        Ne = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? Ne(t.parentNode) : null
        },
        Re = () => { },
        je = t => {
            t.offsetHeight
        },
        Ve = () => {
            const {
                jQuery: t
            } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        },
        He = [],
        $e = () => "rtl" === document.documentElement.dir,
        ze = t => {
            (t => {
                "loading" === document.readyState ? (He.length || document.addEventListener("DOMContentLoaded", () => {
                    He.forEach(t => t())
                }), He.push(t)) : t()
            })(() => {
                const e = Ve();
                if (e) {
                    const n = t.NAME,
                        i = e.fn[n];
                    e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = (() => (e.fn[n] = i, t.jQueryInterface))
                }
            })
        },
        We = t => {
            "function" == typeof t && t()
        },
        Ue = (t, e, n = !0) => {
            if (!n) return void We(t);
            const i = (t => {
                if (!t) return 0;
                let {
                    transitionDuration: e,
                    transitionDelay: n
                } = window.getComputedStyle(t);
                const i = Number.parseFloat(e),
                    s = Number.parseFloat(n);
                return i || s ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
            })(e) + 5;
            let s = !1;
            const r = ({
                target: n
            }) => {
                n === e && (s = !0, e.removeEventListener("transitionend", r), We(t))
            };
            e.addEventListener("transitionend", r), setTimeout(() => {
                s || xe(e)
            }, i)
        },
        qe = (t, e, n, i) => {
            let s = t.indexOf(e);
            if (-1 === s) return t[!n && i ? t.length - 1 : 0];
            const r = t.length;
            return s += n ? 1 : -1, i && (s = (s + r) % r), t[Math.max(0, Math.min(s, r - 1))]
        },
        Ye = /[^.]*(?=\..*)\.|.*/,
        Ke = /\..*/,
        Xe = /::\d+$/,
        Ge = {};
    let Qe = 1;
    const Ze = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
        Je = /^(mouseenter|mouseleave)/i,
        tn = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function en(t, e) {
        return e && `${e}::${Qe++}` || t.uidEvent || Qe++
    }

    function nn(t) {
        const e = en(t);
        return t.uidEvent = e, Ge[e] = Ge[e] || {}, Ge[e]
    }

    function sn(t, e, n = null) {
        const i = Object.keys(t);
        for (let s = 0, r = i.length; s < r; s++) {
            const r = t[i[s]];
            if (r.originalHandler === e && r.delegationSelector === n) return r
        }
        return null
    }

    function rn(t, e, n) {
        const i = "string" == typeof e,
            s = i ? n : e;
        let r = un(t);
        return tn.has(r) || (r = t), [i, s, r]
    }

    function on(t, e, n, i, s) {
        if ("string" != typeof e || !t) return;
        if (n || (n = i, i = null), Je.test(e)) {
            const t = t => (function (e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            });
            i ? i = t(i) : n = t(n)
        }
        const [r, o, a] = rn(e, n, i), u = nn(t), l = u[a] || (u[a] = {}), c = sn(l, o, r ? n : null);
        if (c) return void (c.oneOff = c.oneOff && s);
        const h = en(o, e.replace(Ye, "")),
            d = r ? function (t, e, n) {
                return function i(s) {
                    const r = t.querySelectorAll(e);
                    for (let {
                        target: o
                    } = s; o && o !== this; o = o.parentNode)
                        for (let a = r.length; a--;)
                            if (r[a] === o) return s.delegateTarget = o, i.oneOff && ln.off(t, s.type, e, n), n.apply(o, [s]);
                    return null
                }
            }(t, n, i) : function (t, e) {
                return function n(i) {
                    return i.delegateTarget = t, n.oneOff && ln.off(t, i.type, e), e.apply(t, [i])
                }
            }(t, n);
        d.delegationSelector = r ? n : null, d.originalHandler = o, d.oneOff = s, d.uidEvent = h, l[h] = d, t.addEventListener(a, d, r)
    }

    function an(t, e, n, i, s) {
        const r = sn(e[n], i, s);
        r && (t.removeEventListener(n, r, Boolean(s)), delete e[n][r.uidEvent])
    }

    function un(t) {
        return t = t.replace(Ke, ""), Ze[t] || t
    }
    const ln = {
        on(t, e, n, i) {
            on(t, e, n, i, !1)
        },
        one(t, e, n, i) {
            on(t, e, n, i, !0)
        },
        off(t, e, n, i) {
            if ("string" != typeof e || !t) return;
            const [s, r, o] = rn(e, n, i), a = o !== e, u = nn(t), l = e.startsWith(".");
            if (void 0 !== r) {
                if (!u || !u[o]) return;
                return void an(t, u, o, r, s ? n : null)
            }
            l && Object.keys(u).forEach(n => {
                ! function (t, e, n, i) {
                    const s = e[n] || {};
                    Object.keys(s).forEach(r => {
                        if (r.includes(i)) {
                            const i = s[r];
                            an(t, e, n, i.originalHandler, i.delegationSelector)
                        }
                    })
                }(t, u, n, e.slice(1))
            });
            const c = u[o] || {};
            Object.keys(c).forEach(n => {
                const i = n.replace(Xe, "");
                if (!a || e.includes(i)) {
                    const e = c[n];
                    an(t, u, o, e.originalHandler, e.delegationSelector)
                }
            })
        },
        trigger(t, e, n) {
            if ("string" != typeof e || !t) return null;
            const i = Ve(),
                s = un(e),
                r = e !== s,
                o = tn.has(s);
            let a, u = !0,
                l = !0,
                c = !1,
                h = null;
            return r && i && (a = i.Event(e, n), i(t).trigger(a), u = !a.isPropagationStopped(), l = !a.isImmediatePropagationStopped(), c = a.isDefaultPrevented()), o ? (h = document.createEvent("HTMLEvents")).initEvent(s, u, !0) : h = new CustomEvent(e, {
                bubbles: u,
                cancelable: !0
            }), void 0 !== n && Object.keys(n).forEach(t => {
                Object.defineProperty(h, t, {
                    get: () => n[t]
                })
            }), c && h.preventDefault(), l && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
        }
    },
        cn = new Map;
    var hn = {
        set(t, e, n) {
            cn.has(t) || cn.set(t, new Map);
            const i = cn.get(t);
            i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (t, e) => cn.has(t) && cn.get(t).get(e) || null,
        remove(t, e) {
            if (!cn.has(t)) return;
            const n = cn.get(t);
            n.delete(e), 0 === n.size && cn.delete(t)
        }
    };
    const dn = "5.1.0";
    class fn {
        constructor(t) {
            (t = Ie(t)) && (this._element = t, hn.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            hn.remove(this._element, this.constructor.DATA_KEY), ln.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
                this[t] = null
            })
        }
        _queueCallback(t, e, n = !0) {
            Ue(t, e, n)
        }
        static getInstance(t) {
            return hn.get(Ie(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return dn
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }
    const pn = (t, e = "hide") => {
        const n = `click.dismiss${t.EVENT_KEY}`,
            i = t.NAME;
        ln.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Me(this)) return;
            const s = Fe(this) || this.closest(`.${i}`);
            t.getOrCreateInstance(s)[e]()
        })
    },
        gn = "alert",
        mn = "close.bs.alert",
        vn = "closed.bs.alert",
        _n = "fade",
        yn = "show";
    class bn extends fn {
        static get NAME() {
            return gn
        }
        close() {
            if (ln.trigger(this._element, mn).defaultPrevented) return;
            this._element.classList.remove(yn);
            const t = this._element.classList.contains(_n);
            this._queueCallback(() => this._destroyElement(), this._element, t)
        }
        _destroyElement() {
            this._element.remove(), ln.trigger(this._element, vn), this.dispose()
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = bn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    pn(bn, "close"), ze(bn);
    const kn = "button",
        En = "active";
    class wn extends fn {
        static get NAME() {
            return kn
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle(En))
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = wn.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            })
        }
    }

    function An(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function Cn(t) {
        return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
    }
    ln.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        wn.getOrCreateInstance(e).toggle()
    }), ze(wn);
    const Sn = {
        setDataAttribute(t, e, n) {
            t.setAttribute(`data-bs-${Cn(e)}`, n)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${Cn(e)}`)
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {};
            return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(n => {
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = An(t.dataset[n])
            }), e
        },
        getDataAttribute: (t, e) => An(t.getAttribute(`data-bs-${Cn(e)}`)),
        offset(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            }
        },
        position: t => ({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    },
        Tn = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
            parents(t, e) {
                const n = [];
                let i = t.parentNode;
                for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode;
                return n
            },
            prev(t, e) {
                let n = t.previousElementSibling;
                for (; n;) {
                    if (n.matches(e)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let n = t.nextElementSibling;
                for (; n;) {
                    if (n.matches(e)) return [n];
                    n = n.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => `${t}:not([tabindex^="-"])`).join(", ");
                return this.find(e, t).filter(t => !Me(t) && Pe(t))
            }
        },
        Dn = "carousel",
        On = 500,
        Fn = 40,
        xn = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        Bn = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        In = "next",
        Ln = "prev",
        Pn = "left",
        Mn = "right",
        Nn = {
            ArrowLeft: Mn,
            ArrowRight: Pn
        },
        Rn = "slide.bs.carousel",
        jn = "slid.bs.carousel",
        Vn = "keydown.bs.carousel",
        Hn = "mouseenter.bs.carousel",
        $n = "mouseleave.bs.carousel",
        zn = "touchstart.bs.carousel",
        Wn = "touchmove.bs.carousel",
        Un = "touchend.bs.carousel",
        qn = "pointerdown.bs.carousel",
        Yn = "pointerup.bs.carousel",
        Kn = "dragstart.bs.carousel",
        Xn = "carousel",
        Gn = "active",
        Qn = "slide",
        Zn = "carousel-item-end",
        Jn = "carousel-item-start",
        ti = "carousel-item-next",
        ei = "carousel-item-prev",
        ni = "pointer-event",
        ii = ".active",
        si = ".active.carousel-item",
        ri = ".carousel-item",
        oi = ".carousel-item img",
        ai = ".carousel-item-next, .carousel-item-prev",
        ui = ".carousel-indicators",
        li = "[data-bs-target]",
        ci = "touch",
        hi = "pen";
    class di extends fn {
        constructor(t, e) {
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = Tn.findOne(ui, this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return xn
        }
        static get NAME() {
            return Dn
        }
        next() {
            this._slide(In)
        }
        nextWhenVisible() {
            !document.hidden && Pe(this._element) && this.next()
        }
        prev() {
            this._slide(Ln)
        }
        pause(t) {
            t || (this._isPaused = !0), Tn.findOne(ai, this._element) && (xe(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = Tn.findOne(si, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) return void ln.one(this._element, jn, () => this.to(t));
            if (e === t) return this.pause(), void this.cycle();
            const n = t > e ? In : Ln;
            this._slide(n, this._items[t])
        }
        _getConfig(t) {
            return t = {
                ...xn,
                ...Sn.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, Le(Dn, t, Bn), t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= Fn) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? Mn : Pn)
        }
        _addEventListeners() {
            this._config.keyboard && ln.on(this._element, Vn, t => this._keydown(t)), "hover" === this._config.pause && (ln.on(this._element, Hn, t => this.pause(t)), ln.on(this._element, $n, t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t => {
                !this._pointerEvent || t.pointerType !== hi && t.pointerType !== ci ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
            },
                e = t => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                },
                n = t => {
                    !this._pointerEvent || t.pointerType !== hi && t.pointerType !== ci || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), On + this._config.interval))
                };
            Tn.find(oi, this._element).forEach(t => {
                ln.on(t, Kn, t => t.preventDefault())
            }), this._pointerEvent ? (ln.on(this._element, qn, e => t(e)), ln.on(this._element, Yn, t => n(t)), this._element.classList.add(ni)) : (ln.on(this._element, zn, e => t(e)), ln.on(this._element, Wn, t => e(t)), ln.on(this._element, Un, t => n(t)))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Nn[t.key];
            e && (t.preventDefault(), this._slide(e))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? Tn.find(ri, t.parentNode) : [], this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const n = t === In;
            return qe(this._items, e, n, this._config.wrap)
        }
        _triggerSlideEvent(t, e) {
            const n = this._getItemIndex(t),
                i = this._getItemIndex(Tn.findOne(si, this._element));
            return ln.trigger(this._element, Rn, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = Tn.findOne(ii, this._indicatorsElement);
                e.classList.remove(Gn), e.removeAttribute("aria-current");
                const n = Tn.find(li, this._indicatorsElement);
                for (let e = 0; e < n.length; e++)
                    if (Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        n[e].classList.add(Gn), n[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || Tn.findOne(si, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const n = this._directionToOrder(t),
                i = Tn.findOne(si, this._element),
                s = this._getItemIndex(i),
                r = e || this._getItemByOrder(n, i),
                o = this._getItemIndex(r),
                a = Boolean(this._interval),
                u = n === In,
                l = u ? Jn : Zn,
                c = u ? ti : ei,
                h = this._orderToDirection(n);
            if (r && r.classList.contains(Gn)) return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(r, h).defaultPrevented) return;
            if (!i || !r) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
            const d = () => {
                ln.trigger(this._element, jn, {
                    relatedTarget: r,
                    direction: h,
                    from: s,
                    to: o
                })
            };
            if (this._element.classList.contains(Qn)) {
                r.classList.add(c), je(r), i.classList.add(l), r.classList.add(l);
                const t = () => {
                    r.classList.remove(l, c), r.classList.add(Gn), i.classList.remove(Gn, c, l), this._isSliding = !1, setTimeout(d, 0)
                };
                this._queueCallback(t, i, !0)
            } else i.classList.remove(Gn), r.classList.add(Gn), this._isSliding = !1, d();
            a && this.cycle()
        }
        _directionToOrder(t) {
            return [Mn, Pn].includes(t) ? $e() ? t === Pn ? Ln : In : t === Pn ? In : Ln : t
        }
        _orderToDirection(t) {
            return [In, Ln].includes(t) ? $e() ? t === Ln ? Pn : Mn : t === Ln ? Mn : Pn : t
        }
        static carouselInterface(t, e) {
            const n = di.getOrCreateInstance(t, e);
            let {
                _config: i
            } = n;
            "object" == typeof e && (i = {
                ...i,
                ...e
            });
            const s = "string" == typeof e ? e : i.slide;
            if ("number" == typeof e) n.to(e);
            else if ("string" == typeof s) {
                if (void 0 === n[s]) throw new TypeError(`No method named "${s}"`);
                n[s]()
            } else i.interval && i.ride && (n.pause(), n.cycle())
        }
        static jQueryInterface(t) {
            return this.each(function () {
                di.carouselInterface(this, t)
            })
        }
        static dataApiClickHandler(t) {
            const e = Fe(this);
            if (!e || !e.classList.contains(Xn)) return;
            const n = {
                ...Sn.getDataAttributes(e),
                ...Sn.getDataAttributes(this)
            },
                i = this.getAttribute("data-bs-slide-to");
            i && (n.interval = !1), di.carouselInterface(e, n), i && di.getInstance(e).to(i), t.preventDefault()
        }
    }
    ln.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", di.dataApiClickHandler), ln.on(window, "load.bs.carousel.data-api", () => {
        const t = Tn.find('[data-bs-ride="carousel"]');
        for (let e = 0, n = t.length; e < n; e++) di.carouselInterface(t[e], di.getInstance(t[e]))
    }), ze(di);
    const fi = "collapse",
        pi = "bs.collapse",
        gi = `.${pi}`,
        mi = {
            toggle: !0,
            parent: null
        },
        vi = {
            toggle: "boolean",
            parent: "(null|element)"
        },
        _i = `show${gi}`,
        yi = `shown${gi}`,
        bi = `hide${gi}`,
        ki = `hidden${gi}`,
        Ei = `click${gi}.data-api`,
        wi = "show",
        Ai = "collapse",
        Ci = "collapsing",
        Si = "collapsed",
        Ti = "collapse-horizontal",
        Di = "width",
        Oi = "height",
        Fi = ".show, .collapsing",
        xi = '[data-bs-toggle="collapse"]';
    class Bi extends fn {
        constructor(t, e) {
            super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
            const n = Tn.find(xi);
            for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t],
                    i = Oe(e),
                    s = Tn.find(i).filter(t => t === this._element);
                null !== i && s.length && (this._selector = i, this._triggerArray.push(e))
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return mi
        }
        static get NAME() {
            return fi
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t, e = [];
            if (this._config.parent) {
                const t = Tn.find(`.${Ai} .${Ai}`, this._config.parent);
                e = Tn.find(Fi, this._config.parent).filter(e => !t.includes(e))
            }
            const n = Tn.findOne(this._selector);
            if (e.length) {
                const i = e.find(t => n !== t);
                if ((t = i ? Bi.getInstance(i) : null) && t._isTransitioning) return
            }
            if (ln.trigger(this._element, _i).defaultPrevented) return;
            e.forEach(e => {
                n !== e && Bi.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(), t || hn.set(e, pi, null)
            });
            const i = this._getDimension();
            this._element.classList.remove(Ai), this._element.classList.add(Ci), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
            this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove(Ci), this._element.classList.add(Ai, wi), this._element.style[i] = "", ln.trigger(this._element, yi)
            }, this._element, !0), this._element.style[i] = `${this._element[s]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (ln.trigger(this._element, bi).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, je(this._element), this._element.classList.add(Ci), this._element.classList.remove(Ai, wi);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t],
                    n = Fe(e);
                n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0;
            this._element.style[t] = "", this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove(Ci), this._element.classList.add(Ai), ln.trigger(this._element, ki)
            }, this._element, !0)
        }
        _isShown(t = this._element) {
            return t.classList.contains(wi)
        }
        _getConfig(t) {
            return (t = {
                ...mi,
                ...Sn.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle), t.parent = Ie(t.parent), Le(fi, t, vi), t
        }
        _getDimension() {
            return this._element.classList.contains(Ti) ? Di : Oi
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = Tn.find(`.${Ai} .${Ai}`, this._config.parent);
            Tn.find(xi, this._config.parent).filter(e => !t.includes(e)).forEach(t => {
                const e = Fe(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            })
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach(t => {
                e ? t.classList.remove(Si) : t.classList.add(Si), t.setAttribute("aria-expanded", e)
            })
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const n = Bi.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                    n[t]()
                }
            })
        }
    }
    ln.on(document, Ei, xi, function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = Oe(this);
        Tn.find(e).forEach(t => {
            Bi.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        })
    }), ze(Bi);
    const Ii = "dropdown",
        Li = "Escape",
        Pi = "Space",
        Mi = "Tab",
        Ni = "ArrowUp",
        Ri = "ArrowDown",
        ji = 2,
        Vi = new RegExp(`${Ni}|${Ri}|${Li}`),
        Hi = "hide.bs.dropdown",
        $i = "hidden.bs.dropdown",
        zi = "show.bs.dropdown",
        Wi = "shown.bs.dropdown",
        Ui = "show",
        qi = "dropup",
        Yi = "dropend",
        Ki = "dropstart",
        Xi = "navbar",
        Gi = '[data-bs-toggle="dropdown"]',
        Qi = ".dropdown-menu",
        Zi = ".navbar-nav",
        Ji = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        ts = $e() ? "top-end" : "top-start",
        es = $e() ? "top-start" : "top-end",
        ns = $e() ? "bottom-end" : "bottom-start",
        is = $e() ? "bottom-start" : "bottom-end",
        ss = $e() ? "left-start" : "right-start",
        rs = $e() ? "right-start" : "left-start",
        os = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        as = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class us extends fn {
        constructor(t, e) {
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return os
        }
        static get DefaultType() {
            return as
        }
        static get NAME() {
            return Ii
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (Me(this._element) || this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            if (ln.trigger(this._element, zi, t).defaultPrevented) return;
            const e = us.getParentFromElement(this._element);
            this._inNavbar ? Sn.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(Zi) && [].concat(...document.body.children).forEach(t => ln.on(t, "mouseover", Re)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ui), this._element.classList.add(Ui), ln.trigger(this._element, Wi, t)
        }
        hide() {
            if (Me(this._element) || !this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(t) {
            ln.trigger(this._element, Hi, t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => ln.off(t, "mouseover", Re)), this._popper && this._popper.destroy(), this._menu.classList.remove(Ui), this._element.classList.remove(Ui), this._element.setAttribute("aria-expanded", "false"), Sn.removeDataAttribute(this._menu, "popper"), ln.trigger(this._element, $i, t))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...Sn.getDataAttributes(this._element),
                ...t
            }, Le(Ii, t, this.constructor.DefaultType), "object" == typeof t.reference && !Be(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ii.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper(t) {
            if (void 0 === Se) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : Be(this._config.reference) ? e = Ie(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const n = this._getPopperConfig(),
                i = n.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
            this._popper = Ce(e, this._menu, n), i && Sn.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(t = this._element) {
            return t.classList.contains(Ui)
        }
        _getMenuElement() {
            return Tn.next(this._element, Qi)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains(Yi)) return ss;
            if (t.classList.contains(Ki)) return rs;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains(qi) ? e ? es : ts : e ? is : ns
        }
        _detectNavbar() {
            return null !== this._element.closest(`.${Xi}`)
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: t,
            target: e
        }) {
            const n = Tn.find(Ji, this._menu).filter(Pe);
            n.length && qe(n, e, t === Ri, !n.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
        static clearMenus(t) {
            if (t && (t.button === ji || "keyup" === t.type && t.key !== Mi)) return;
            const e = Tn.find(Gi);
            for (let n = 0, i = e.length; n < i; n++) {
                const i = us.getInstance(e[n]);
                if (!i || !1 === i._config.autoClose) continue;
                if (!i._isShown()) continue;
                const s = {
                    relatedTarget: i._element
                };
                if (t) {
                    const e = t.composedPath(),
                        n = e.includes(i._menu);
                    if (e.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
                    if (i._menu.contains(t.target) && ("keyup" === t.type && t.key === Mi || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                    "click" === t.type && (s.clickEvent = t)
                }
                i._completeHide(s)
            }
        }
        static getParentFromElement(t) {
            return Fe(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === Pi || t.key !== Li && (t.key !== Ri && t.key !== Ni || t.target.closest(Qi)) : !Vi.test(t.key)) return;
            const e = this.classList.contains(Ui);
            if (!e && t.key === Li) return;
            if (t.preventDefault(), t.stopPropagation(), Me(this)) return;
            const n = this.matches(Gi) ? this : Tn.prev(this, Gi)[0],
                i = us.getOrCreateInstance(n);
            if (t.key !== Li) return t.key === Ni || t.key === Ri ? (e || i.show(), void i._selectMenuItem(t)) : void (e && t.key !== Pi || us.clearMenus());
            i.hide()
        }
    }
    ln.on(document, "keydown.bs.dropdown.data-api", Gi, us.dataApiKeydownHandler), ln.on(document, "keydown.bs.dropdown.data-api", Qi, us.dataApiKeydownHandler), ln.on(document, "click.bs.dropdown.data-api", us.clearMenus), ln.on(document, "keyup.bs.dropdown.data-api", us.clearMenus), ln.on(document, "click.bs.dropdown.data-api", Gi, function (t) {
        t.preventDefault(), us.getOrCreateInstance(this).toggle()
    }), ze(us);
    const ls = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        cs = ".sticky-top";
    class hs {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes(ls, "paddingRight", e => e + t), this._setElementAttributes(cs, "marginRight", e => e - t)
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, n) {
            const i = this.getWidth();
            this._applyManipulationCallback(t, t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + i) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = `${n(Number.parseFloat(s))}px`
            })
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(ls, "paddingRight"), this._resetElementAttributes(cs, "marginRight")
        }
        _saveInitialAttribute(t, e) {
            const n = t.style[e];
            n && Sn.setDataAttribute(t, e, n)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, t => {
                const n = Sn.getDataAttribute(t, e);
                void 0 === n ? t.style.removeProperty(e) : (Sn.removeDataAttribute(t, e), t.style[e] = n)
            })
        }
        _applyManipulationCallback(t, e) {
            Be(t) ? e(t) : Tn.find(t, this._element).forEach(e)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const ds = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    },
        fs = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        },
        ps = "backdrop",
        gs = "fade",
        ms = "show",
        vs = `mousedown.bs.${ps}`;
    class _s {
        constructor(t) {
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && je(this._getElement()), this._getElement().classList.add(ms), this._emulateAnimation(() => {
                We(t)
            })) : We(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(ms), this._emulateAnimation(() => {
                this.dispose(), We(t)
            })) : We(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add(gs), this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = {
                ...ds,
                ..."object" == typeof t ? t : {}
            }).rootElement = Ie(t.rootElement), Le(ps, t, fs), t
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), ln.on(this._getElement(), vs, () => {
                We(this._config.clickCallback)
            }), this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (ln.off(this._element, vs), this._element.remove(), this._isAppended = !1)
        }
        _emulateAnimation(t) {
            Ue(t, this._getElement(), this._config.isAnimated)
        }
    }
    const ys = {
        trapElement: null,
        autofocus: !0
    },
        bs = {
            trapElement: "element",
            autofocus: "boolean"
        },
        ks = "focustrap",
        Es = ".bs.focustrap",
        ws = `focusin${Es}`,
        As = `keydown.tab${Es}`,
        Cs = "Tab",
        Ss = "forward",
        Ts = "backward";
    class Ds {
        constructor(t) {
            this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }
        activate() {
            const {
                trapElement: t,
                autofocus: e
            } = this._config;
            this._isActive || (e && t.focus(), ln.off(document, Es), ln.on(document, ws, t => this._handleFocusin(t)), ln.on(document, As, t => this._handleKeydown(t)), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, ln.off(document, Es))
        }
        _handleFocusin(t) {
            const {
                target: e
            } = t, {
                trapElement: n
            } = this._config;
            if (e === document || e === n || n.contains(e)) return;
            const i = Tn.focusableChildren(n);
            0 === i.length ? n.focus() : this._lastTabNavDirection === Ts ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            t.key === Cs && (this._lastTabNavDirection = t.shiftKey ? Ts : Ss)
        }
        _getConfig(t) {
            return t = {
                ...ys,
                ..."object" == typeof t ? t : {}
            }, Le(ks, t, bs), t
        }
    }
    const Os = "modal",
        Fs = ".bs.modal",
        xs = "Escape",
        Bs = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        Is = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        },
        Ls = `hide${Fs}`,
        Ps = `hidePrevented${Fs}`,
        Ms = `hidden${Fs}`,
        Ns = `show${Fs}`,
        Rs = `shown${Fs}`,
        js = `resize${Fs}`,
        Vs = `click.dismiss${Fs}`,
        Hs = `keydown.dismiss${Fs}`,
        $s = `mouseup.dismiss${Fs}`,
        zs = `mousedown.dismiss${Fs}`,
        Ws = `click${Fs}.data-api`,
        Us = "modal-open",
        qs = "fade",
        Ys = "show",
        Ks = "modal-static",
        Xs = ".modal-dialog",
        Gs = ".modal-body";
    class Qs extends fn {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._dialog = Tn.findOne(Xs, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new hs
        }
        static get Default() {
            return Bs
        }
        static get NAME() {
            return Os
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning) return;
            ln.trigger(this._element, Ns, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Us), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), ln.on(this._dialog, zs, () => {
                ln.one(this._element, $s, t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(() => this._showElement(t)))
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (ln.trigger(this._element, Ls).defaultPrevented) return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(Ys), ln.off(this._element, Vs), ln.off(this._dialog, zs), this._queueCallback(() => this._hideModal(), this._element, t)
        }
        dispose() {
            [window, this._dialog].forEach(t => ln.off(t, Fs)), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new _s({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Ds({
                trapElement: this._element
            })
        }
        _getConfig(t) {
            return t = {
                ...Bs,
                ...Sn.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, Le(Os, t, Is), t
        }
        _showElement(t) {
            const e = this._isAnimated(),
                n = Tn.findOne(Gs, this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), e && je(this._element), this._element.classList.add(Ys);
            this._queueCallback(() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, ln.trigger(this._element, Rs, {
                    relatedTarget: t
                })
            }, this._dialog, e)
        }
        _setEscapeEvent() {
            this._isShown ? ln.on(this._element, Hs, t => {
                this._config.keyboard && t.key === xs ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== xs || this._triggerBackdropTransition()
            }) : ln.off(this._element, Hs)
        }
        _setResizeEvent() {
            this._isShown ? ln.on(window, js, () => this._adjustDialog()) : ln.off(window, js)
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove(Us), this._resetAdjustments(), this._scrollBar.reset(), ln.trigger(this._element, Ms)
            })
        }
        _showBackdrop(t) {
            ln.on(this._element, Vs, t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }), this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains(qs)
        }
        _triggerBackdropTransition() {
            if (ln.trigger(this._element, Ps).defaultPrevented) return;
            const {
                classList: t,
                scrollHeight: e,
                style: n
            } = this._element, i = e > document.documentElement.clientHeight;
            !i && "hidden" === n.overflowY || t.contains(Ks) || (i || (n.overflowY = "hidden"), t.add(Ks), this._queueCallback(() => {
                t.remove(Ks), i || this._queueCallback(() => {
                    n.overflowY = ""
                }, this._dialog)
            }, this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                n = e > 0;
            (!n && t && !$e() || n && !t && $e()) && (this._element.style.paddingLeft = `${e}px`), (n && !t && !$e() || !n && t && $e()) && (this._element.style.paddingRight = `${e}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const n = Qs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                    n[t](e)
                }
            })
        }
    }
    ln.on(document, Ws, '[data-bs-toggle="modal"]', function (t) {
        const e = Fe(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), ln.one(e, Ns, t => {
            t.defaultPrevented || ln.one(e, Ms, () => {
                Pe(this) && this.focus()
            })
        }), Qs.getOrCreateInstance(e).toggle(this)
    }), pn(Qs), ze(Qs);
    const Zs = "offcanvas",
        Js = "Escape",
        tr = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        er = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        },
        nr = "show",
        ir = "offcanvas-backdrop",
        sr = "show.bs.offcanvas",
        rr = "shown.bs.offcanvas",
        or = "hide.bs.offcanvas",
        ar = "hidden.bs.offcanvas",
        ur = "keydown.dismiss.bs.offcanvas";
    class lr extends fn {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get NAME() {
            return Zs
        }
        static get Default() {
            return tr
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown) return;
            if (ln.trigger(this._element, sr, {
                relatedTarget: t
            }).defaultPrevented) return;
            this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new hs).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(nr);
            this._queueCallback(() => {
                this._config.scroll || this._focustrap.activate(), ln.trigger(this._element, rr, {
                    relatedTarget: t
                })
            }, this._element, !0)
        }
        hide() {
            if (!this._isShown) return;
            if (ln.trigger(this._element, or).defaultPrevented) return;
            this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(nr), this._backdrop.hide();
            this._queueCallback(() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new hs).reset(), ln.trigger(this._element, ar)
            }, this._element, !0)
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...tr,
                ...Sn.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, Le(Zs, t, er), t
        }
        _initializeBackDrop() {
            return new _s({
                className: ir,
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _initializeFocusTrap() {
            return new Ds({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            ln.on(this._element, ur, t => {
                this._config.keyboard && t.key === Js && this.hide()
            })
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = lr.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    ln.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
        const e = Fe(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Me(this)) return;
        ln.one(e, ar, () => {
            Pe(this) && this.focus()
        });
        const n = Tn.findOne(".offcanvas.show");
        n && n !== e && lr.getInstance(n).hide(), lr.getOrCreateInstance(e).toggle(this)
    }), ln.on(window, "load.bs.offcanvas.data-api", () => Tn.find(".offcanvas.show").forEach(t => lr.getOrCreateInstance(t).show())), pn(lr), ze(lr);
    const cr = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        hr = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        dr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        fr = (t, e) => {
            const n = t.nodeName.toLowerCase();
            if (e.includes(n)) return !cr.has(n) || Boolean(hr.test(t.nodeValue) || dr.test(t.nodeValue));
            const i = e.filter(t => t instanceof RegExp);
            for (let t = 0, e = i.length; t < e; t++)
                if (i[t].test(n)) return !0;
            return !1
        },
        pr = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function gr(t, e, n) {
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        const i = (new window.DOMParser).parseFromString(t, "text/html"),
            s = Object.keys(e),
            r = [].concat(...i.body.querySelectorAll("*"));
        for (let t = 0, n = r.length; t < n; t++) {
            const n = r[t],
                i = n.nodeName.toLowerCase();
            if (!s.includes(i)) {
                n.remove();
                continue
            }
            const o = [].concat(...n.attributes),
                a = [].concat(e["*"] || [], e[i] || []);
            o.forEach(t => {
                fr(t, a) || n.removeAttribute(t.nodeName)
            })
        }
        return i.body.innerHTML
    }
    const mr = "tooltip",
        vr = "bs-tooltip",
        _r = new Set(["sanitize", "allowList", "sanitizeFn"]),
        yr = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        br = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: $e() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: $e() ? "right" : "left"
        },
        kr = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: pr,
            popperConfig: null
        },
        Er = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        wr = "fade",
        Ar = "show",
        Cr = "show",
        Sr = "out",
        Tr = ".tooltip-inner",
        Dr = ".modal",
        Or = "hide.bs.modal",
        Fr = "hover",
        xr = "focus",
        Br = "click",
        Ir = "manual";
    class Lr extends fn {
        constructor(t, e) {
            if (void 0 === Se) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
        }
        static get Default() {
            return kr
        }
        static get NAME() {
            return mr
        }
        static get Event() {
            return Er
        }
        static get DefaultType() {
            return yr
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(Ar)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout), ln.off(this._element.closest(Dr), Or, this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = ln.trigger(this._element, this.constructor.Event.SHOW),
                e = Ne(this._element),
                n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !n) return;
            const i = this.getTipElement(),
                s = Te(this.constructor.NAME);
            i.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && i.classList.add(wr);
            const r = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
                o = this._getAttachment(r);
            this._addAttachmentClass(o);
            const {
                container: a
            } = this._config;
            hn.set(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), ln.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Ce(this._element, i, this._getPopperConfig(o)), i.classList.add(Ar);
            const u = this._resolvePossibleFunction(this._config.customClass);
            u && i.classList.add(...u.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
                ln.on(t, "mouseover", Re)
            });
            const l = this.tip.classList.contains(wr);
            this._queueCallback(() => {
                const t = this._hoverState;
                this._hoverState = null, ln.trigger(this._element, this.constructor.Event.SHOWN), t === Sr && this._leave(null, this)
            }, this.tip, l)
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if (ln.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t.classList.remove(Ar), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => ln.off(t, "mouseover", Re)), this._activeTrigger[Br] = !1, this._activeTrigger[xr] = !1, this._activeTrigger[Fr] = !1;
            const e = this.tip.classList.contains(wr);
            this._queueCallback(() => {
                this._isWithActiveTrigger() || (this._hoverState !== Cr && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), ln.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
            }, this.tip, e), this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e), e.classList.remove(wr, Ar), this.tip = e, this.tip
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), Tr)
        }
        _sanitizeAndSetContent(t, e, n) {
            const i = Tn.findOne(n, t);
            e || !i ? this.setElementContent(i, e) : i.remove()
        }
        setElementContent(t, e) {
            if (null !== t) return Be(e) ? (e = Ie(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = gr(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
        }
        _getAttachment(t) {
            return br[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach(t => {
                if ("click" === t) ln.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
                else if (t !== Ir) {
                    const e = t === Fr ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        n = t === Fr ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    ln.on(this._element, e, this._config.selector, t => this._enter(t)), ln.on(this._element, n, this._config.selector, t => this._leave(t))
                }
            }), this._hideModalHandler = (() => {
                this._element && this.hide()
            }), ln.on(this._element.closest(Dr), Or, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? xr : Fr] = !0), e.getTipElement().classList.contains(Ar) || e._hoverState === Cr ? e._hoverState = Cr : (clearTimeout(e._timeout), e._hoverState = Cr, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
                e._hoverState === Cr && e.show()
            }, e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? xr : Fr] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Sr, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
                e._hoverState === Sr && e.hide()
            }, e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1
        }
        _getConfig(t) {
            const e = Sn.getDataAttributes(this._element);
            return Object.keys(e).forEach(t => {
                _r.has(t) && delete e[t]
            }), (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : Ie(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Le(mr, t, this.constructor.DefaultType), t.sanitize && (t.template = gr(t.template, t.allowList, t.sanitizeFn)), t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                n = t.getAttribute("class").match(e);
            null !== n && n.length > 0 && n.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        _getBasicClassPrefix() {
            return vr
        }
        _handlePopperPlacementChange(t) {
            const {
                state: e
            } = t;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Lr.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    ze(Lr);
    const Pr = "popover",
        Mr = "bs-popover",
        Nr = {
            ...Lr.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        Rr = {
            ...Lr.DefaultType,
            content: "(string|element|function)"
        },
        jr = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        Vr = ".popover-header",
        Hr = ".popover-body";
    class $r extends Lr {
        static get Default() {
            return Nr
        }
        static get NAME() {
            return Pr
        }
        static get Event() {
            return jr
        }
        static get DefaultType() {
            return Rr
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), Vr), this._sanitizeAndSetContent(t, this._getContent(), Hr)
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return Mr
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = $r.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    ze($r);
    const zr = "scrollspy",
        Wr = ".bs.scrollspy",
        Ur = {
            offset: 10,
            method: "auto",
            target: ""
        },
        qr = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Yr = `activate${Wr}`,
        Kr = `scroll${Wr}`,
        Xr = `load${Wr}.data-api`,
        Gr = "dropdown-item",
        Qr = "active",
        Zr = ".nav, .list-group",
        Jr = ".nav-link",
        to = ".nav-item",
        eo = ".list-group-item",
        no = `${Jr}, ${eo}, .${Gr}`,
        io = ".dropdown",
        so = ".dropdown-toggle",
        ro = "offset",
        oo = "position";
    class ao extends fn {
        constructor(t, e) {
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ln.on(this._scrollElement, Kr, () => this._process()), this.refresh(), this._process()
        }
        static get Default() {
            return Ur
        }
        static get NAME() {
            return zr
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? ro : oo,
                e = "auto" === this._config.method ? t : this._config.method,
                n = e === oo ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Tn.find(no, this._config.target).map(t => {
                const i = Oe(t),
                    s = i ? Tn.findOne(i) : null;
                if (s) {
                    const t = s.getBoundingClientRect();
                    if (t.width || t.height) return [Sn[e](s).top + n, i]
                }
                return null
            }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
                this._offsets.push(t[0]), this._targets.push(t[1])
            })
        }
        dispose() {
            ln.off(this._scrollElement, Wr), super.dispose()
        }
        _getConfig(t) {
            return (t = {
                ...Ur,
                ...Sn.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = Ie(t.target) || document.documentElement, Le(zr, t, qr), t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= n) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let e = this._offsets.length; e--;) {
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
                }
            }
        }
        _activate(t) {
            this._activeTarget = t, this._clear();
            const e = no.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
                n = Tn.findOne(e.join(","), this._config.target);
            n.classList.add(Qr), n.classList.contains(Gr) ? Tn.findOne(so, n.closest(io)).classList.add(Qr) : Tn.parents(n, Zr).forEach(t => {
                Tn.prev(t, `${Jr}, ${eo}`).forEach(t => t.classList.add(Qr)), Tn.prev(t, to).forEach(t => {
                    Tn.children(t, Jr).forEach(t => t.classList.add(Qr))
                })
            }), ln.trigger(this._scrollElement, Yr, {
                relatedTarget: t
            })
        }
        _clear() {
            Tn.find(no, this._config.target).filter(t => t.classList.contains(Qr)).forEach(t => t.classList.remove(Qr))
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ao.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    ln.on(window, Xr, () => {
        Tn.find('[data-bs-spy="scroll"]').forEach(t => new ao(t))
    }), ze(ao);
    const uo = "tab",
        lo = "hide.bs.tab",
        co = "hidden.bs.tab",
        ho = "show.bs.tab",
        fo = "shown.bs.tab",
        po = "dropdown-menu",
        go = "active",
        mo = "fade",
        vo = "show",
        _o = ".dropdown",
        yo = ".nav, .list-group",
        bo = ".active",
        ko = ":scope > li > .active",
        Eo = ".dropdown-toggle",
        wo = ":scope > .dropdown-menu .active";
    class Ao extends fn {
        static get NAME() {
            return uo
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(go)) return;
            let t;
            const e = Fe(this._element),
                n = this._element.closest(yo);
            if (n) {
                const e = "UL" === n.nodeName || "OL" === n.nodeName ? ko : bo;
                t = (t = Tn.find(e, n))[t.length - 1]
            }
            const i = t ? ln.trigger(t, lo, {
                relatedTarget: this._element
            }) : null;
            if (ln.trigger(this._element, ho, {
                relatedTarget: t
            }).defaultPrevented || null !== i && i.defaultPrevented) return;
            this._activate(this._element, n);
            const s = () => {
                ln.trigger(t, co, {
                    relatedTarget: this._element
                }), ln.trigger(this._element, fo, {
                    relatedTarget: t
                })
            };
            e ? this._activate(e, e.parentNode, s) : s()
        }
        _activate(t, e, n) {
            const i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Tn.children(e, bo) : Tn.find(ko, e))[0],
                s = n && i && i.classList.contains(mo),
                r = () => this._transitionComplete(t, i, n);
            i && s ? (i.classList.remove(vo), this._queueCallback(r, t, !0)) : r()
        }
        _transitionComplete(t, e, n) {
            if (e) {
                e.classList.remove(go);
                const t = Tn.findOne(wo, e.parentNode);
                t && t.classList.remove(go), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(go), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), je(t), t.classList.contains(mo) && t.classList.add(vo);
            let i = t.parentNode;
            if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains(po)) {
                const e = t.closest(_o);
                e && Tn.find(Eo, e).forEach(t => t.classList.add(go)), t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Ao.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    ln.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Me(this)) return;
        Ao.getOrCreateInstance(this).show()
    }), ze(Ao);
    const Co = "toast",
        So = "mouseover.bs.toast",
        To = "mouseout.bs.toast",
        Do = "focusin.bs.toast",
        Oo = "focusout.bs.toast",
        Fo = "hide.bs.toast",
        xo = "hidden.bs.toast",
        Bo = "show.bs.toast",
        Io = "shown.bs.toast",
        Lo = "fade",
        Po = "hide",
        Mo = "show",
        No = "showing",
        Ro = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        jo = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class Vo extends fn {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get DefaultType() {
            return Ro
        }
        static get Default() {
            return jo
        }
        static get NAME() {
            return Co
        }
        show() {
            if (ln.trigger(this._element, Bo).defaultPrevented) return;
            this._clearTimeout(), this._config.animation && this._element.classList.add(Lo);
            this._element.classList.remove(Po), je(this._element), this._element.classList.add(Mo), this._element.classList.add(No), this._queueCallback(() => {
                this._element.classList.remove(No), ln.trigger(this._element, Io), this._maybeScheduleHide()
            }, this._element, this._config.animation)
        }
        hide() {
            if (!this._element.classList.contains(Mo)) return;
            if (ln.trigger(this._element, Fo).defaultPrevented) return;
            this._element.classList.add(No), this._queueCallback(() => {
                this._element.classList.add(Po), this._element.classList.remove(No), this._element.classList.remove(Mo), ln.trigger(this._element, xo)
            }, this._element, this._config.animation)
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains(Mo) && this._element.classList.remove(Mo), super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...jo,
                ...Sn.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }, Le(Co, t, this.constructor.DefaultType), t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const n = t.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
            ln.on(this._element, So, t => this._onInteraction(t, !0)), ln.on(this._element, To, t => this._onInteraction(t, !1)), ln.on(this._element, Do, t => this._onInteraction(t, !0)), ln.on(this._element, Oo, t => this._onInteraction(t, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Vo.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    pn(Vo), ze(Vo), [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]')).map(function (t) {
        return new us(t)
    });
    var Ho = ".dropdown, .dropup, .dropend, .dropstart",
        $o = document.querySelectorAll(Ho),
        zo = void 0;
    $o.forEach(function (t) {
        t.addEventListener("mousedown", function (t) {
            t.stopPropagation(), t.target.dataset.bsToggle && "dropdown" === t.target.dataset.bsToggle && (zo = t.currentTarget)
        }), t.addEventListener("hide.bs.dropdown", function (e) {
            e.stopPropagation();
            var n = zo ? zo.parentElement.closest(Ho) : void 0;
            n && n === t && e.preventDefault(), zo = void 0
        })
    }), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (t) {
        var e, n, i = {
            delay: {
                show: 50,
                hide: 50
            },
            html: null !== (e = "true" === t.getAttribute("data-bs-html")) && void 0 !== e && e,
            placement: null !== (n = t.getAttribute("data-bs-placement")) && void 0 !== n ? n : "auto"
        };
        return new Lr(t, i)
    }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (t) {
        var e, n, i = {
            delay: {
                show: 50,
                hide: 50
            },
            html: null !== (e = "true" === t.getAttribute("data-bs-html")) && void 0 !== e && e,
            placement: null !== (n = t.getAttribute("data-bs-placement")) && void 0 !== n ? n : "auto"
        };
        return new $r(t, i)
    }), [].slice.call(document.querySelectorAll('[data-bs-toggle="switch-icon"]')).map(function (t) {
        t.addEventListener("click", function (e) {
            e.stopPropagation(), t.classList.toggle("active")
        })
    });
    var Wo;
    [].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]')).map(function (t) {
        return new Vo(t)
    }), (Wo = window.location.hash) && [].slice.call(document.querySelectorAll('[data-bs-toggle="tab"]')).filter(function (t) {
        return t.hash === Wo
    }).map(function (t) {
        new Ao(t).show()
    })
});