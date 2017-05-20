! function(t, e, i, n) {
    "use strict";

    function o(t, e, i) {
        return setTimeout(h(t, i), e)
    }

    function r(t, e, i) {
        return !!Array.isArray(t) && (s(t, i[e], i), !0)
    }

    function s(t, e, i) {
        var o;
        if (t)
            if (t.forEach) t.forEach(e, i);
            else if (t.length !== n)
            for (o = 0; o < t.length;) e.call(i, t[o], o, t), o++;
        else
            for (o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t)
    }

    function a(e, i, n) {
        var o = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function() {
            var i = new Error("get-stack-trace"),
                n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                r = t.console && (t.console.warn || t.console.log);
            return r && r.call(t.console, o, n), e.apply(this, arguments)
        }
    }

    function l(t, e, i) {
        var n, o = e.prototype;
        n = t.prototype = Object.create(o), n.constructor = t, n._super = o, i && ut(n, i)
    }

    function h(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function c(t, e) {
        return typeof t == ft ? t.apply(e ? e[0] || n : n, e) : t
    }

    function u(t, e) {
        return t === n ? e : t
    }

    function d(t, e, i) {
        s(m(e), function(e) {
            t.addEventListener(e, i, !1)
        })
    }

    function p(t, e, i) {
        s(m(e), function(e) {
            t.removeEventListener(e, i, !1)
        })
    }

    function f(t, e) {
        for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
        }
        return !1
    }

    function g(t, e) {
        return t.indexOf(e) > -1
    }

    function m(t) {
        return t.trim().split(/\s+/g)
    }

    function v(t, e, i) {
        if (t.indexOf && !i) return t.indexOf(e);
        for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e) return n;
            n++
        }
        return -1
    }

    function y(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function b(t, e, i) {
        for (var n = [], o = [], r = 0; r < t.length;) {
            var s = e ? t[r][e] : t[r];
            v(o, s) < 0 && n.push(t[r]), o[r] = s, r++
        }
        return i && (n = e ? n.sort(function(t, i) {
            return t[e] > i[e]
        }) : n.sort()), n
    }

    function w(t, e) {
        for (var i, o, r = e[0].toUpperCase() + e.slice(1), s = 0; s < dt.length;) {
            if (i = dt[s], o = i ? i + r : e, o in t) return o;
            s++
        }
        return n
    }

    function P() {
        return wt++
    }

    function _(e) {
        var i = e.ownerDocument || e;
        return i.defaultView || i.parentWindow || t
    }

    function x(t, e) {
        var i = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            c(t.options.enable, [t]) && i.handler(e)
        }, this.init()
    }

    function T(t) {
        var e, i = t.options.inputClass;
        return new(e = i ? i : xt ? R : Tt ? q : _t ? j : z)(t, C)
    }

    function C(t, e, i) {
        var n = i.pointers.length,
            o = i.changedPointers.length,
            r = e & At && n - o === 0,
            s = e & (Bt | It) && n - o === 0;
        i.isFirst = !!r, i.isFinal = !!s, r && (t.session = {}), i.eventType = e, S(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
    }

    function S(t, e) {
        var i = t.session,
            n = e.pointers,
            o = n.length;
        i.firstInput || (i.firstInput = L(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = L(e) : 1 === o && (i.firstMultiple = !1);
        var r = i.firstInput,
            s = i.firstMultiple,
            a = s ? s.center : r.center,
            l = e.center = A(n);
        e.timeStamp = vt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = F(a, l), e.distance = I(a, l), k(i, e), e.offsetDirection = B(e.deltaX, e.deltaY);
        var h = M(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = h.x, e.overallVelocityY = h.y, e.overallVelocity = mt(h.x) > mt(h.y) ? h.x : h.y, e.scale = s ? N(s.pointers, n) : 1, e.rotation = s ? O(s.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, E(i, e);
        var c = t.element;
        f(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
    }

    function k(t, e) {
        var i = e.center,
            n = t.offsetDelta || {},
            o = t.prevDelta || {},
            r = t.prevInput || {};
        e.eventType !== At && r.eventType !== Bt || (o = t.prevDelta = {
            x: r.deltaX || 0,
            y: r.deltaY || 0
        }, n = t.offsetDelta = {
            x: i.x,
            y: i.y
        }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y)
    }

    function E(t, e) {
        var i, o, r, s, a = t.lastInterval || e,
            l = e.timeStamp - a.timeStamp;
        if (e.eventType != It && (l > Lt || a.velocity === n)) {
            var h = e.deltaX - a.deltaX,
                c = e.deltaY - a.deltaY,
                u = M(l, h, c);
            o = u.x, r = u.y, i = mt(u.x) > mt(u.y) ? u.x : u.y, s = B(h, c), t.lastInterval = e
        } else i = a.velocity, o = a.velocityX, r = a.velocityY, s = a.direction;
        e.velocity = i, e.velocityX = o, e.velocityY = r, e.direction = s
    }

    function L(t) {
        for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
            clientX: gt(t.pointers[i].clientX),
            clientY: gt(t.pointers[i].clientY)
        }, i++;
        return {
            timeStamp: vt(),
            pointers: e,
            center: A(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }

    function A(t) {
        var e = t.length;
        if (1 === e) return {
            x: gt(t[0].clientX),
            y: gt(t[0].clientY)
        };
        for (var i = 0, n = 0, o = 0; o < e;) i += t[o].clientX, n += t[o].clientY, o++;
        return {
            x: gt(i / e),
            y: gt(n / e)
        }
    }

    function M(t, e, i) {
        return {
            x: e / t || 0,
            y: i / t || 0
        }
    }

    function B(t, e) {
        return t === e ? Ft : mt(t) >= mt(e) ? t < 0 ? Ot : Nt : e < 0 ? zt : Rt
    }

    function I(t, e, i) {
        i || (i = Ht);
        var n = e[i[0]] - t[i[0]],
            o = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + o * o)
    }

    function F(t, e, i) {
        i || (i = Ht);
        var n = e[i[0]] - t[i[0]],
            o = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(o, n) / Math.PI
    }

    function O(t, e) {
        return F(e[1], e[0], jt) + F(t[1], t[0], jt)
    }

    function N(t, e) {
        return I(e[0], e[1], jt) / I(t[0], t[1], jt)
    }

    function z() {
        this.evEl = Vt, this.evWin = Xt, this.pressed = !1, x.apply(this, arguments)
    }

    function R() {
        this.evEl = Zt, this.evWin = Jt, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function D() {
        this.evTarget = Qt, this.evWin = Kt, this.started = !1, x.apply(this, arguments)
    }

    function W(t, e) {
        var i = y(t.touches),
            n = y(t.changedTouches);
        return e & (Bt | It) && (i = b(i.concat(n), "identifier", !0)), [i, n]
    }

    function q() {
        this.evTarget = ee, this.targetIds = {}, x.apply(this, arguments)
    }

    function H(t, e) {
        var i = y(t.touches),
            n = this.targetIds;
        if (e & (At | Mt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
        var o, r, s = y(t.changedTouches),
            a = [],
            l = this.target;
        if (r = i.filter(function(t) {
                return f(t.target, l)
            }), e === At)
            for (o = 0; o < r.length;) n[r[o].identifier] = !0, o++;
        for (o = 0; o < s.length;) n[s[o].identifier] && a.push(s[o]), e & (Bt | It) && delete n[s[o].identifier], o++;
        return a.length ? [b(r.concat(a), "identifier", !0), a] : void 0
    }

    function j() {
        x.apply(this, arguments);
        var t = h(this.handler, this);
        this.touch = new q(this.manager, t), this.mouse = new z(this.manager, t), this.primaryTouch = null, this.lastTouches = []
    }

    function U(t, e) {
        t & At ? (this.primaryTouch = e.changedPointers[0].identifier, V.call(this, e)) : t & (Bt | It) && V.call(this, e)
    }

    function V(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches,
                o = function() {
                    var t = n.indexOf(i);
                    t > -1 && n.splice(t, 1)
                };
            setTimeout(o, ie)
        }
    }

    function X(t) {
        for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var o = this.lastTouches[n],
                r = Math.abs(e - o.x),
                s = Math.abs(i - o.y);
            if (r <= ne && s <= ne) return !0
        }
        return !1
    }

    function Y(t, e) {
        this.manager = t, this.set(e)
    }

    function G(t) {
        if (g(t, he)) return he;
        var e = g(t, ce),
            i = g(t, ue);
        return e && i ? he : e || i ? e ? ce : ue : g(t, le) ? le : ae
    }

    function Z() {
        if (!re) return !1;
        var e = {},
            i = t.CSS && t.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
            e[n] = !i || t.CSS.supports("touch-action", n)
        }), e
    }

    function J(t) {
        this.options = ut({}, this.defaults, t || {}), this.id = P(), this.manager = null, this.options.enable = u(this.options.enable, !0), this.state = pe, this.simultaneous = {}, this.requireFail = []
    }

    function $(t) {
        return t & ye ? "cancel" : t & me ? "end" : t & ge ? "move" : t & fe ? "start" : ""
    }

    function Q(t) {
        return t == Rt ? "down" : t == zt ? "up" : t == Ot ? "left" : t == Nt ? "right" : ""
    }

    function K(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }

    function tt() {
        J.apply(this, arguments)
    }

    function et() {
        tt.apply(this, arguments), this.pX = null, this.pY = null
    }

    function it() {
        tt.apply(this, arguments)
    }

    function nt() {
        J.apply(this, arguments), this._timer = null, this._input = null
    }

    function ot() {
        tt.apply(this, arguments)
    }

    function rt() {
        tt.apply(this, arguments)
    }

    function st() {
        J.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function at(t, e) {
        return e = e || {}, e.recognizers = u(e.recognizers, at.defaults.preset), new lt(t, e)
    }

    function lt(t, e) {
        this.options = ut({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = T(this), this.touchAction = new Y(this, this.options.touchAction), ht(this, !0), s(this.options.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function ht(t, e) {
        var i = t.element;
        if (i.style) {
            var n;
            s(t.options.cssProps, function(o, r) {
                n = w(i.style, r), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = t.oldCssProps[n] || ""
            }), e || (t.oldCssProps = {})
        }
    }

    function ct(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
    }
    var ut, dt = ["", "webkit", "Moz", "MS", "ms", "o"],
        pt = e.createElement("div"),
        ft = "function",
        gt = Math.round,
        mt = Math.abs,
        vt = Date.now;
    ut = "function" != typeof Object.assign ? function(t) {
        if (t === n || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            if (o !== n && null !== o)
                for (var r in o) o.hasOwnProperty(r) && (e[r] = o[r])
        }
        return e
    } : Object.assign;
    var yt = a(function(t, e, i) {
            for (var o = Object.keys(e), r = 0; r < o.length;)(!i || i && t[o[r]] === n) && (t[o[r]] = e[o[r]]), r++;
            return t
        }, "extend", "Use `assign`."),
        bt = a(function(t, e) {
            return yt(t, e, !0)
        }, "merge", "Use `assign`."),
        wt = 1,
        Pt = /mobile|tablet|ip(ad|hone|od)|android/i,
        _t = "ontouchstart" in t,
        xt = w(t, "PointerEvent") !== n,
        Tt = _t && Pt.test(navigator.userAgent),
        Ct = "touch",
        St = "pen",
        kt = "mouse",
        Et = "kinect",
        Lt = 25,
        At = 1,
        Mt = 2,
        Bt = 4,
        It = 8,
        Ft = 1,
        Ot = 2,
        Nt = 4,
        zt = 8,
        Rt = 16,
        Dt = Ot | Nt,
        Wt = zt | Rt,
        qt = Dt | Wt,
        Ht = ["x", "y"],
        jt = ["clientX", "clientY"];
    x.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(_(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(_(this.element), this.evWin, this.domHandler)
        }
    };
    var Ut = {
            mousedown: At,
            mousemove: Mt,
            mouseup: Bt
        },
        Vt = "mousedown",
        Xt = "mousemove mouseup";
    l(z, x, {
        handler: function(t) {
            var e = Ut[t.type];
            e & At && 0 === t.button && (this.pressed = !0), e & Mt && 1 !== t.which && (e = Bt), this.pressed && (e & Bt && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: kt,
                srcEvent: t
            }))
        }
    });
    var Yt = {
            pointerdown: At,
            pointermove: Mt,
            pointerup: Bt,
            pointercancel: It,
            pointerout: It
        },
        Gt = {
            2: Ct,
            3: St,
            4: kt,
            5: Et
        },
        Zt = "pointerdown",
        Jt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (Zt = "MSPointerDown", Jt = "MSPointerMove MSPointerUp MSPointerCancel"), l(R, x, {
        handler: function(t) {
            var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                o = Yt[n],
                r = Gt[t.pointerType] || t.pointerType,
                s = r == Ct,
                a = v(e, t.pointerId, "pointerId");
            o & At && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : o & (Bt | It) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, o, {
                pointers: e,
                changedPointers: [t],
                pointerType: r,
                srcEvent: t
            }), i && e.splice(a, 1))
        }
    });
    var $t = {
            touchstart: At,
            touchmove: Mt,
            touchend: Bt,
            touchcancel: It
        },
        Qt = "touchstart",
        Kt = "touchstart touchmove touchend touchcancel";
    l(D, x, {
        handler: function(t) {
            var e = $t[t.type];
            if (e === At && (this.started = !0), this.started) {
                var i = W.call(this, t, e);
                e & (Bt | It) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: Ct,
                    srcEvent: t
                })
            }
        }
    });
    var te = {
            touchstart: At,
            touchmove: Mt,
            touchend: Bt,
            touchcancel: It
        },
        ee = "touchstart touchmove touchend touchcancel";
    l(q, x, {
        handler: function(t) {
            var e = te[t.type],
                i = H.call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: Ct,
                srcEvent: t
            })
        }
    });
    var ie = 2500,
        ne = 25;
    l(j, x, {
        handler: function(t, e, i) {
            var n = i.pointerType == Ct,
                o = i.pointerType == kt;
            if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n) U.call(this, e, i);
                else if (o && X.call(this, i)) return;
                this.callback(t, e, i)
            }
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var oe = w(pt.style, "touchAction"),
        re = oe !== n,
        se = "compute",
        ae = "auto",
        le = "manipulation",
        he = "none",
        ce = "pan-x",
        ue = "pan-y",
        de = Z();
    Y.prototype = {
        set: function(t) {
            t == se && (t = this.compute()), re && this.manager.element.style && de[t] && (this.manager.element.style[oe] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return s(this.manager.recognizers, function(e) {
                c(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), G(t.join(" "))
        },
        preventDefaults: function(t) {
            var e = t.srcEvent,
                i = t.offsetDirection;
            if (this.manager.session.prevented) return void e.preventDefault();
            var n = this.actions,
                o = g(n, he) && !de[he],
                r = g(n, ue) && !de[ue],
                s = g(n, ce) && !de[ce];
            if (o) {
                var a = 1 === t.pointers.length,
                    l = t.distance < 2,
                    h = t.deltaTime < 250;
                if (a && l && h) return
            }
            return s && r ? void 0 : o || r && i & Dt || s && i & Wt ? this.preventSrc(e) : void 0
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var pe = 1,
        fe = 2,
        ge = 4,
        me = 8,
        ve = me,
        ye = 16,
        be = 32;
    J.prototype = {
        defaults: {},
        set: function(t) {
            return ut(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
            if (r(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
            return r(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], this)
        },
        requireFailure: function(t) {
            if (r(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return t = K(t, this), v(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
            if (r(t, "dropRequireFailure", this)) return this;
            t = K(t, this);
            var e = v(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                i.manager.emit(e, t)
            }
            var i = this,
                n = this.state;
            n < me && e(i.options.event + $(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= me && e(i.options.event + $(n))
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void(this.state = be)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (be | pe))) return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = ut({}, t);
            return c(this.options.enable, [this, e]) ? (this.state & (ve | ye | be) && (this.state = pe), this.state = this.process(e), void(this.state & (fe | ge | me | ye) && this.tryEmit(e))) : (this.reset(), void(this.state = be))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    }, l(tt, J, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state,
                i = t.eventType,
                n = e & (fe | ge),
                o = this.attrTest(t);
            return n && (i & It || !o) ? e | ye : n || o ? i & Bt ? e | me : e & fe ? e | ge : fe : be
        }
    }), l(et, tt, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: qt
        },
        getTouchAction: function() {
            var t = this.options.direction,
                e = [];
            return t & Dt && e.push(ue), t & Wt && e.push(ce), e
        },
        directionTest: function(t) {
            var e = this.options,
                i = !0,
                n = t.distance,
                o = t.direction,
                r = t.deltaX,
                s = t.deltaY;
            return o & e.direction || (e.direction & Dt ? (o = 0 === r ? Ft : r < 0 ? Ot : Nt, i = r != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === s ? Ft : s < 0 ? zt : Rt, i = s != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction
        },
        attrTest: function(t) {
            return tt.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Q(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
    }), l(it, tt, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [he]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe)
        },
        emit: function(t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }), l(nt, J, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [ae]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime > e.time;
            if (this._input = t, !n || !i || t.eventType & (Bt | It) && !r) this.reset();
            else if (t.eventType & At) this.reset(), this._timer = o(function() {
                this.state = ve, this.tryEmit()
            }, e.time, this);
            else if (t.eventType & Bt) return ve;
            return be
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === ve && (t && t.eventType & Bt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = vt(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(ot, tt, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [he]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe)
        }
    }), l(rt, tt, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Dt | Wt,
            pointers: 1
        },
        getTouchAction: function() {
            return et.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, i = this.options.direction;
            return i & (Dt | Wt) ? e = t.overallVelocity : i & Dt ? e = t.overallVelocityX : i & Wt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && mt(e) > this.options.velocity && t.eventType & Bt
        },
        emit: function(t) {
            var e = Q(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), l(st, J, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [le]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & At && 0 === this.count) return this.failTimeout();
            if (n && r && i) {
                if (t.eventType != Bt) return this.failTimeout();
                var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    a = !this.pCenter || I(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t;
                var l = this.count % e.taps;
                if (0 === l) return this.hasRequireFailures() ? (this._timer = o(function() {
                    this.state = ve, this.tryEmit()
                }, e.interval, this), fe) : ve
            }
            return be
        },
        failTimeout: function() {
            return this._timer = o(function() {
                this.state = be
            }, this.options.interval, this), be
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ve && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), at.VERSION = "2.0.8", at.defaults = {
        domEvents: !1,
        touchAction: se,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [ot, {
                enable: !1
            }],
            [it, {
                    enable: !1
                },
                ["rotate"]
            ],
            [rt, {
                direction: Dt
            }],
            [et, {
                    direction: Dt
                },
                ["swipe"]
            ],
            [st],
            [st, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [nt]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var we = 1,
        Pe = 2;
    lt.prototype = {
        set: function(t) {
            return ut(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function(t) {
            this.session.stopped = t ? Pe : we
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers,
                    o = e.curRecognizer;
                (!o || o && o.state & ve) && (o = e.curRecognizer = null);
                for (var r = 0; r < n.length;) i = n[r], e.stopped === Pe || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (fe | ge | me) && (o = e.curRecognizer = i), r++
            }
        },
        get: function(t) {
            if (t instanceof J) return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t) return e[i];
            return null
        },
        add: function(t) {
            if (r(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function(t) {
            if (r(t, "remove", this)) return this;
            if (t = this.get(t)) {
                var e = this.recognizers,
                    i = v(e, t);
                i !== -1 && (e.splice(i, 1), this.touchAction.update())
            }
            return this
        },
        on: function(t, e) {
            if (t !== n && e !== n) {
                var i = this.handlers;
                return s(m(t), function(t) {
                    i[t] = i[t] || [], i[t].push(e)
                }), this
            }
        },
        off: function(t, e) {
            if (t !== n) {
                var i = this.handlers;
                return s(m(t), function(t) {
                    e ? i[t] && i[t].splice(v(i[t], e), 1) : delete i[t]
                }), this
            }
        },
        emit: function(t, e) {
            this.options.domEvents && ct(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t, e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                };
                for (var n = 0; n < i.length;) i[n](e), n++
            }
        },
        destroy: function() {
            this.element && ht(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, ut(at, {
        INPUT_START: At,
        INPUT_MOVE: Mt,
        INPUT_END: Bt,
        INPUT_CANCEL: It,
        STATE_POSSIBLE: pe,
        STATE_BEGAN: fe,
        STATE_CHANGED: ge,
        STATE_ENDED: me,
        STATE_RECOGNIZED: ve,
        STATE_CANCELLED: ye,
        STATE_FAILED: be,
        DIRECTION_NONE: Ft,
        DIRECTION_LEFT: Ot,
        DIRECTION_RIGHT: Nt,
        DIRECTION_UP: zt,
        DIRECTION_DOWN: Rt,
        DIRECTION_HORIZONTAL: Dt,
        DIRECTION_VERTICAL: Wt,
        DIRECTION_ALL: qt,
        Manager: lt,
        Input: x,
        TouchAction: Y,
        TouchInput: q,
        MouseInput: z,
        PointerEventInput: R,
        TouchMouseInput: j,
        SingleTouchInput: D,
        Recognizer: J,
        AttrRecognizer: tt,
        Tap: st,
        Pan: et,
        Swipe: rt,
        Pinch: it,
        Rotate: ot,
        Press: nt,
        on: d,
        off: p,
        each: s,
        merge: bt,
        extend: yt,
        assign: ut,
        inherit: l,
        bindFn: h,
        prefixed: w
    });
    var _e = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
    _e.Hammer = at, "function" == typeof define && define.amd ? define(function() {
        return at
    }) : "undefined" != typeof module && module.exports ? module.exports = at : ("undefined" == typeof t[i] && (t[i] = {}), t[i].Hammer = at)
}(window, document, "FBPublication"),
function(t, e, i, n) {
    function o(i, n) {
        this.wrapper = "string" == typeof i ? e.querySelector(i) : i, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !l.hasPointer,
            disableTouch: l.hasPointer || !l.hasTouch,
            disableMouse: l.hasPointer || l.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: "undefined" == typeof t.onmousedown
        };
        for (var o in n) this.options[o] = n[o];
        this.translateZ = this.options.HWCompositing && l.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = l.hasTransition && this.options.useTransition, this.options.useTransform = l.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? l.ease[this.options.bounceEasing] || l.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function r(t, i, n) {
        var o = e.createElement("div"),
            r = e.createElement("div");
        return n === !0 && (o.style.cssText = "position:absolute;z-index:9999", r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), r.className = "iScrollIndicator", "h" == t ? (n === !0 && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", r.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (n === !0 && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", r.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", i || (o.style.pointerEvents = "none"), o.appendChild(r), o
    }

    function s(i, n) {
        this.wrapper = "string" == typeof n.el ? e.querySelector(n.el) : n.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = i, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var o in n) this.options[o] = n[o];
        if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (l.addEvent(this.indicator, "touchstart", this), l.addEvent(t, "touchend", this)), this.options.disablePointer || (l.addEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.addEvent(t, l.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (l.addEvent(this.indicator, "mousedown", this), l.addEvent(t, "mouseup", this))), this.options.fade) {
            this.wrapperStyle[l.style.transform] = this.scroller.translateZ;
            var r = l.style.transitionDuration;
            if (!r) return;
            this.wrapperStyle[r] = l.isBadAndroid ? "0.0001ms" : "0ms";
            var s = this;
            l.isBadAndroid && a(function() {
                "0.0001ms" === s.wrapperStyle[r] && (s.wrapperStyle[r] = "0s")
            }), this.wrapperStyle.opacity = "0"
        }
    }
    var a = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            t.setTimeout(e, 1e3 / 60)
        },
        l = function() {
            function n(t) {
                return s !== !1 && ("" === s ? t : s + t.charAt(0).toUpperCase() + t.substr(1))
            }
            var o = {},
                r = e.createElement("div").style,
                s = function() {
                    for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, n = e.length; i < n; i++)
                        if (t = e[i] + "ransform", t in r) return e[i].substr(0, e[i].length - 1);
                    return !1
                }();
            o.getTime = Date.now || function() {
                return (new Date).getTime()
            }, o.extend = function(t, e) {
                for (var i in e) t[i] = e[i]
            }, o.addEvent = function(t, e, i, n) {
                t.addEventListener(e, i, !!n)
            }, o.removeEvent = function(t, e, i, n) {
                t.removeEventListener(e, i, !!n)
            }, o.prefixPointerEvent = function(e) {
                return t.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
            }, o.momentum = function(t, e, n, o, r, s) {
                var a, l, h = t - e,
                    c = i.abs(h) / n;
                return s = void 0 === s ? 6e-4 : s, a = t + c * c / (2 * s) * (h < 0 ? -1 : 1), l = c / s, a < o ? (a = r ? o - r / 2.5 * (c / 8) : o, h = i.abs(a - t), l = h / c) : a > 0 && (a = r ? r / 2.5 * (c / 8) : 0, h = i.abs(t) + a, l = h / c), {
                    destination: i.round(a),
                    duration: l
                }
            };
            var a = n("transform");
            return o.extend(o, {
                hasTransform: a !== !1,
                hasPerspective: n("perspective") in r,
                hasTouch: "ontouchstart" in t,
                hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
                hasTransition: n("transition") in r
            }), o.isBadAndroid = function() {
                var e = t.navigator.appVersion;
                if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                    var i = e.match(/Safari\/(\d+.\d)/);
                    return !(i && "object" == typeof i && i.length >= 2) || parseFloat(i[1]) < 535.19
                }
                return !1
            }(), o.extend(o.style = {}, {
                transform: a,
                transitionTimingFunction: n("transitionTimingFunction"),
                transitionDuration: n("transitionDuration"),
                transitionDelay: n("transitionDelay"),
                transformOrigin: n("transformOrigin")
            }), o.hasClass = function(t, e) {
                var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
                return i.test(t.className)
            }, o.addClass = function(t, e) {
                if (!o.hasClass(t, e)) {
                    var i = t.className.split(" ");
                    i.push(e), t.className = i.join(" ")
                }
            }, o.removeClass = function(t, e) {
                if (o.hasClass(t, e)) {
                    var i = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                    t.className = t.className.replace(i, " ")
                }
            }, o.offset = function(t) {
                for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, i -= t.offsetTop;
                return {
                    left: e,
                    top: i
                }
            }, o.preventDefaultException = function(t, e) {
                for (var i in e)
                    if (e[i].test(t[i])) return !0;
                return !1
            }, o.extend(o.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), o.extend(o.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(t) {
                        return t * (2 - t)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(t) {
                        return i.sqrt(1 - --t * t)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(t) {
                        var e = 4;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(t) {
                        var e = .22,
                            n = .4;
                        return 0 === t ? 0 : 1 == t ? 1 : n * i.pow(2, -10 * t) * i.sin((t - e / 4) * (2 * i.PI) / e) + 1
                    }
                }
            }), o.tap = function(t, i) {
                var n = e.createEvent("Event");
                n.initEvent(i, !0, !0), n.pageX = t.pageX, n.pageY = t.pageY, t.target.dispatchEvent(n)
            }, o.click = function(i) {
                var n, o = i.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) || (n = e.createEvent(t.MouseEvent ? "MouseEvents" : "Event"), n.initEvent("click", !0, !0), n.view = i.view || t, n.detail = 1, n.screenX = o.screenX || 0, n.screenY = o.screenY || 0, n.clientX = o.clientX || 0, n.clientY = o.clientY || 0, n.ctrlKey = !!i.ctrlKey, n.altKey = !!i.altKey, n.shiftKey = !!i.shiftKey, n.metaKey = !!i.metaKey, n.button = 0, n.relatedTarget = null, n._constructed = !0, o.dispatchEvent(n))
            }, o
        }();
    o.prototype = {
        version: "5.2.0",
        _init: function() {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function(t) {
            if (1 != l.eventType[t.type]) {
                var e;
                if (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== e) return
            }
            if (this.enabled && (!this.initiated || l.eventType[t.type] === this.initiated)) {
                !this.options.preventDefault || l.isBadAndroid || l.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var n, o = t.touches ? t.touches[0] : t;
                this.initiated = l.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = l.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, n = this.getComputedPosition(), this._translate(i.round(n.x), i.round(n.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = o.pageX, this.pointY = o.pageY, this._execEvent("beforeScrollStart")
            }
        },
        _move: function(t) {
            if (this.enabled && l.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, n, o, r, s = t.touches ? t.touches[0] : t,
                    a = s.pageX - this.pointX,
                    h = s.pageY - this.pointY,
                    c = l.getTime();
                if (this.pointX = s.pageX, this.pointY = s.pageY, this.distX += a, this.distY += h, o = i.abs(this.distX), r = i.abs(this.distY), !(c - this.endTime > 300 && o < 10 && r < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (o > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                        h = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                        a = 0
                    }
                    a = this.hasHorizontalScroll ? a : 0, h = this.hasVerticalScroll ? h : 0, e = this.x + a, n = this.y + h, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + a / 3 : e > 0 ? 0 : this.maxScrollX), (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + h / 3 : n > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0, this.directionY = h > 0 ? -1 : h < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, n), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function(t) {
            if (this.enabled && l.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !l.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var e, n, o = (t.changedTouches ? t.changedTouches[0] : t, l.getTime() - this.startTime),
                    r = i.round(this.x),
                    s = i.round(this.y),
                    a = i.abs(r - this.startX),
                    h = i.abs(s - this.startY),
                    c = 0,
                    u = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = l.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(r, s), !this.moved) return this.options.tap && l.tap(t, this.options.tap), this.options.click && l.click(t), void this._execEvent("scrollCancel");
                    if (this._events.flick && o < 200 && a < 100 && h < 100) return void this._execEvent("flick");
                    if (this.options.momentum && o < 300 && (e = this.hasHorizontalScroll ? l.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: r,
                            duration: 0
                        }, n = this.hasVerticalScroll ? l.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: s,
                            duration: 0
                        }, r = e.destination, s = n.destination, c = i.max(e.duration, n.duration), this.isInTransition = 1), this.options.snap) {
                        var d = this._nearestSnap(r, s);
                        this.currentPage = d, c = this.options.snapSpeed || i.max(i.max(i.min(i.abs(r - d.x), 1e3), i.min(i.abs(s - d.y), 1e3)), 300), r = d.x, s = d.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                    }
                    return r != this.x || s != this.y ? ((r > 0 || r < this.maxScrollX || s > 0 || s < this.maxScrollY) && (u = l.ease.quadratic), void this.scrollTo(r, s, c, u)) : void this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                t.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(t) {
            var e = this.x,
                i = this.y;
            return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = l.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function(t, e) {
            this._events[t] || (this._events[t] = []), this._events[t].push(e)
        },
        off: function(t, e) {
            if (this._events[t]) {
                var i = this._events[t].indexOf(e);
                i > -1 && this._events[t].splice(i, 1)
            }
        },
        _execEvent: function(t) {
            if (this._events[t]) {
                var e = 0,
                    i = this._events[t].length;
                if (i)
                    for (; e < i; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(t, e, i, n) {
            t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n)
        },
        scrollTo: function(t, e, i, n) {
            n = n || l.ease.circular, this.isInTransition = this.options.useTransition && i > 0;
            var o = this.options.useTransition && n.style;
            !i || o ? (o && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn)
        },
        scrollToElement: function(t, e, n, o, r) {
            if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                var s = l.offset(t);
                s.left -= this.wrapperOffset.left, s.top -= this.wrapperOffset.top, n === !0 && (n = i.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = i.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), s.left -= n || 0, s.top -= o || 0, s.left = s.left > 0 ? 0 : s.left < this.maxScrollX ? this.maxScrollX : s.left, s.top = s.top > 0 ? 0 : s.top < this.maxScrollY ? this.maxScrollY : s.top, e = void 0 === e || null === e || "auto" === e ? i.max(i.abs(this.x - s.left), i.abs(this.y - s.top)) : e, this.scrollTo(s.left, s.top, e, r)
            }
        },
        _transitionTime: function(t) {
            if (this.options.useTransition) {
                t = t || 0;
                var e = l.style.transitionDuration;
                if (e) {
                    if (this.scrollerStyle[e] = t + "ms", !t && l.isBadAndroid) {
                        this.scrollerStyle[e] = "0.0001ms";
                        var i = this;
                        a(function() {
                            "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                        })
                    }
                    if (this.indicators)
                        for (var n = this.indicators.length; n--;) this.indicators[n].transitionTime(t)
                }
            }
        },
        _transitionTimingFunction: function(t) {
            if (this.scrollerStyle[l.style.transitionTimingFunction] = t, this.indicators)
                for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
        },
        _translate: function(t, e) {
            if (this.options.useTransform ? this.scrollerStyle[l.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = i.round(t), e = i.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this._execEvent("scroll"), this.indicators)
                for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
        },
        _initEvents: function(e) {
            var i = e ? l.removeEvent : l.addEvent,
                n = this.options.bindToWrapper ? this.wrapper : t;
            i(t, "orientationchange", this), i(t, "resize", this), this.options.click && i(this.wrapper, "click", this, !0), this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(n, "mousemove", this), i(n, "mousecancel", this), i(n, "mouseup", this)), l.hasPointer && !this.options.disablePointer && (i(this.wrapper, l.prefixPointerEvent("pointerdown"), this), i(n, l.prefixPointerEvent("pointermove"), this), i(n, l.prefixPointerEvent("pointercancel"), this), i(n, l.prefixPointerEvent("pointerup"), this)), l.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(n, "touchmove", this), i(n, "touchcancel", this), i(n, "touchend", this)), i(this.scroller, "transitionend", this), i(this.scroller, "webkitTransitionEnd", this), i(this.scroller, "oTransitionEnd", this), i(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var e, i, n = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (n = n[l.style.transform].split(")")[0].split(", "), e = +(n[12] || n[4]), i = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""), i = +n.top.replace(/[^-\d.]/g, "")), {
                x: e,
                y: i
            }
        },
        _initIndicators: function() {
            function t(t) {
                if (a.indicators)
                    for (var e = a.indicators.length; e--;) t.call(a.indicators[e])
            }
            var e, i = this.options.interactiveScrollbars,
                n = "string" != typeof this.options.scrollbars,
                o = [],
                a = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                el: r("v", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(e.el), o.push(e)), this.options.scrollX && (e = {
                el: r("h", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(e.el), o.push(e))), this.options.indicators && (o = o.concat(this.options.indicators));
            for (var l = o.length; l--;) this.indicators.push(new s(this, o[l]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollCancel", function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollStart", function() {
                t(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function() {
                t(function() {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function() {
                t(function() {
                    this.refresh()
                })
            }), this.on("destroy", function() {
                t(function() {
                    this.destroy()
                }), delete this.indicators
            })
        },
        _initWheel: function() {
            l.addEvent(this.wrapper, "wheel", this), l.addEvent(this.wrapper, "mousewheel", this), l.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                clearTimeout(this.wheelTimeout), this.wheelTimeout = null, l.removeEvent(this.wrapper, "wheel", this), l.removeEvent(this.wrapper, "mousewheel", this), l.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(t) {
            if (this.enabled) {
                t.preventDefault();
                var e, n, o, r, s = this;
                if (void 0 === this.wheelTimeout && s._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                        s.options.snap || s._execEvent("scrollEnd"), s.wheelTimeout = void 0
                    }, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, n = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, n = -t.deltaY);
                else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, n = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in t) e = n = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in t)) return;
                    e = n = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (e *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = n, n = 0), this.options.snap) return o = this.currentPage.pageX, r = this.currentPage.pageY, e > 0 ? o-- : e < 0 && o++, n > 0 ? r-- : n < 0 && r++, void this.goToPage(o, r);
                o = this.x + i.round(this.hasHorizontalScroll ? e : 0), r = this.y + i.round(this.hasVerticalScroll ? n : 0), this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0, this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0, o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX), r > 0 ? r = 0 : r < this.maxScrollY && (r = this.maxScrollY), this.scrollTo(o, r, 0)
            }
        },
        _initSnap: function() {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                var t, e, n, o, r, s, a = 0,
                    l = 0,
                    h = 0,
                    c = this.options.snapStepX || this.wrapperWidth,
                    u = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)
                        for (n = i.round(c / 2), o = i.round(u / 2); h > -this.scrollerWidth;) {
                            for (this.pages[a] = [], t = 0, r = 0; r > -this.scrollerHeight;) this.pages[a][t] = {
                                x: i.max(h, this.maxScrollX),
                                y: i.max(r, this.maxScrollY),
                                width: c,
                                height: u,
                                cx: h - n,
                                cy: r - o
                            }, r -= u, t++;
                            h -= c, a++
                        } else
                            for (s = this.options.snap, t = s.length, e = -1; a < t; a++)(0 === a || s[a].offsetLeft <= s[a - 1].offsetLeft) && (l = 0, e++), this.pages[l] || (this.pages[l] = []), h = i.max(-s[a].offsetLeft, this.maxScrollX), r = i.max(-s[a].offsetTop, this.maxScrollY), n = h - i.round(s[a].offsetWidth / 2), o = r - i.round(s[a].offsetHeight / 2), this.pages[l][e] = {
                                x: h,
                                y: r,
                                width: s[a].offsetWidth,
                                height: s[a].offsetHeight,
                                cx: n,
                                cy: o
                            }, h > this.maxScrollX && l++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function() {
                var t = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.x - this.startX), 1e3), i.min(i.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function(t, e) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var n = 0,
                o = this.pages.length,
                r = 0;
            if (i.abs(t - this.absStartX) < this.snapThresholdX && i.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n < o; n++)
                if (t >= this.pages[n][0].cx) {
                    t = this.pages[n][0].x;
                    break
                }
            for (o = this.pages[n].length; r < o; r++)
                if (e >= this.pages[0][r].cy) {
                    e = this.pages[0][r].y;
                    break
                }
            return n == this.currentPage.pageX && (n += this.directionX, n < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), t = this.pages[n][0].x), r == this.currentPage.pageY && (r += this.directionY, r < 0 ? r = 0 : r >= this.pages[0].length && (r = this.pages[0].length - 1), e = this.pages[0][r].y), {
                x: t,
                y: e,
                pageX: n,
                pageY: r
            }
        },
        goToPage: function(t, e, n, o) {
            o = o || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
            var r = this.pages[t][e].x,
                s = this.pages[t][e].y;
            n = void 0 === n ? this.options.snapSpeed || i.max(i.max(i.min(i.abs(r - this.x), 1e3), i.min(i.abs(s - this.y), 1e3)), 300) : n, this.currentPage = {
                x: r,
                y: s,
                pageX: t,
                pageY: e
            }, this.scrollTo(r, s, n, o)
        },
        next: function(t, e) {
            var i = this.currentPage.pageX,
                n = this.currentPage.pageY;
            i++, i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, t, e)
        },
        prev: function(t, e) {
            var i = this.currentPage.pageX,
                n = this.currentPage.pageY;
            i--, i < 0 && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, t, e)
        },
        _initKeys: function(e) {
            var i, n = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (i in n) this.options.keyBindings[i] = this.options.keyBindings[i] || n[i];
            l.addEvent(t, "keydown", this), this.on("destroy", function() {
                l.removeEvent(t, "keydown", this)
            })
        },
        _key: function(t) {
            if (this.enabled) {
                var e, n = this.options.snap,
                    o = n ? this.currentPage.pageX : this.x,
                    r = n ? this.currentPage.pageY : this.y,
                    s = l.getTime(),
                    a = this.keyTime || 0,
                    h = .25;
                switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this.isInTransition = !1), this.keyAcceleration = s - a < 200 ? i.min(this.keyAcceleration + h, 50) : 0, t.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? o += n ? 1 : this.wrapperWidth : r += n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= n ? 1 : this.wrapperWidth : r -= n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        o = n ? this.pages.length - 1 : this.maxScrollX, r = n ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        o = 0, r = 0;
                        break;
                    case this.options.keyBindings.left:
                        o += n ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        r += n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        o -= n ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        r -= n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                if (n) return void this.goToPage(o, r);
                o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0), r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(o, r, 0), this.keyTime = s
            }
        },
        _animate: function(t, e, i, n) {
            function o() {
                var d, p, f, g = l.getTime();
                return g >= u ? (r.isAnimating = !1, r._translate(t, e), void(r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"))) : (g = (g - c) / i, f = n(g), d = (t - s) * f + s, p = (e - h) * f + h, r._translate(d, p), void(r.isAnimating && a(o)))
            }
            var r = this,
                s = this.x,
                h = this.y,
                c = l.getTime(),
                u = c + i;
            this.isAnimating = !0, o()
        },
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(t);
                    break;
                case "keydown":
                    this._key(t);
                    break;
                case "click":
                    this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
            }
        }
    }, s.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t)
            }
        },
        destroy: function() {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (l.removeEvent(this.indicator, "touchstart", this), l.removeEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.removeEvent(this.indicator, "mousedown", this), l.removeEvent(t, "touchmove", this), l.removeEvent(t, l.prefixPointerEvent("pointermove"), this), l.removeEvent(t, "mousemove", this), l.removeEvent(t, "touchend", this), l.removeEvent(t, l.prefixPointerEvent("pointerup"), this), l.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(e) {
            var i = e.touches ? e.touches[0] : e;
            e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = i.pageX, this.lastPointY = i.pageY, this.startTime = l.getTime(), this.options.disableTouch || l.addEvent(t, "touchmove", this), this.options.disablePointer || l.addEvent(t, l.prefixPointerEvent("pointermove"), this), this.options.disableMouse || l.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(t) {
            var e, i, n, o, r = t.touches ? t.touches[0] : t;
            l.getTime();
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = r.pageX - this.lastPointX, this.lastPointX = r.pageX, i = r.pageY - this.lastPointY, this.lastPointY = r.pageY, n = this.x + e, o = this.y + i, this._pos(n, o), t.preventDefault(), t.stopPropagation()
        },
        _end: function(e) {
            if (this.initiated) {
                if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), l.removeEvent(t, "touchmove", this), l.removeEvent(t, l.prefixPointerEvent("pointermove"), this), l.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                    var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                        o = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.scroller.x - n.x), 1e3), i.min(i.abs(this.scroller.y - n.y), 1e3)), 300);
                    this.scroller.x == n.x && this.scroller.y == n.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, o, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(t) {
            t = t || 0;
            var e = l.style.transitionDuration;
            if (e && (this.indicatorStyle[e] = t + "ms", !t && l.isBadAndroid)) {
                this.indicatorStyle[e] = "0.0001ms";
                var i = this;
                a(function() {
                    "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
                })
            }
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[l.style.transitionTimingFunction] = t
        },
        refresh: function() {
            this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (l.addClass(this.wrapper, "iScrollBothScrollbars"), l.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (l.removeClass(this.wrapper, "iScrollBothScrollbars"), l.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = i.max(i.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = i.max(i.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },
        updatePosition: function() {
            var t = this.options.listenX && i.round(this.sizeRatioX * this.scroller.x) || 0,
                e = this.options.listenY && i.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = i.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = i.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = i.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = i.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[l.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
        },
        _pos: function(t, e) {
            t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? i.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? i.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
        },
        fade: function(t, e) {
            if (!e || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var i = t ? 250 : 500,
                    n = t ? 0 : 300;
                t = t ? "1" : "0", this.wrapperStyle[l.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function(t) {
                    this.wrapperStyle.opacity = t, this.visible = +t
                }.bind(this, t), n)
            }
        }
    }, o.utils = l, "undefined" != typeof module && module.exports ? module.exports = o : "function" == typeof define && define.amd ? define(function() {
        return o
    }) : ("undefined" == typeof t[n] && (t[n] = {}), t[n].IScroll = o)
}(window, document, Math, "FBPublication"),
function(t, e, i) {
    function n(t, e) {
        return typeof t === e
    }

    function o() {
        var t, e, i, o, r, s, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (t = [], e = b[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                for (o = n(e.fn, "function") ? e.fn() : e.fn, r = 0; r < t.length; r++) s = t[r], a = s.split("."), 1 === a.length ? P[a[0]] = o : (!P[a[0]] || P[a[0]] instanceof Boolean || (P[a[0]] = new Boolean(P[a[0]])), P[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function r(t) {
        var e = _.className,
            i = P._config.classPrefix || "";
        if (x && (e = e.baseVal), P._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(n, "$1" + i + "js$2")
        }
        P._config.enableClasses && (e += " " + i + t.join(" " + i), x ? _.className.baseVal = e : _.className = e)
    }

    function s() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : x ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function a() {
        var t = e.body;
        return t || (t = s(x ? "svg" : "body"), t.fake = !0), t
    }

    function l(t, i, n, o) {
        var r, l, h, c, u = "modernizr",
            d = s("div"),
            p = a();
        if (parseInt(n, 10))
            for (; n--;) h = s("div"), h.id = o ? o[n] : u + (n + 1), d.appendChild(h);
        return r = s("style"), r.type = "text/css", r.id = "s" + u, (p.fake ? p : d).appendChild(r), p.appendChild(d), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(e.createTextNode(t)), d.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), l = i(d, t), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = c, _.offsetHeight) : d.parentNode.removeChild(d), !!l
    }

    function h(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function c(t) {
        return t.replace(/([a-z])-([a-z])/g, function(t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function u(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function d(t, e, i) {
        var o;
        for (var r in t)
            if (t[r] in e) return i === !1 ? t[r] : (o = e[t[r]], n(o, "function") ? u(o, i || e) : o);
        return !1
    }

    function p(t) {
        return t.replace(/([A-Z])/g, function(t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f(e, n) {
        var o = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; o--;)
                if (t.CSS.supports(p(e[o]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var r = []; o--;) r.push("(" + p(e[o]) + ":" + n + ")");
            return r = r.join(" or "), l("@supports (" + r + ") { #modernizr { position: absolute; } }", function(t) {
                return "absolute" == getComputedStyle(t, null).position
            })
        }
        return i
    }

    function g(t, e, o, r) {
        function a() {
            u && (delete M.style, delete M.modElem)
        }
        if (r = !n(r, "undefined") && r, !n(o, "undefined")) {
            var l = f(t, o);
            if (!n(l, "undefined")) return l
        }
        for (var u, d, p, g, m, v = ["modernizr", "tspan", "samp"]; !M.style && v.length;) u = !0, M.modElem = s(v.shift()), M.style = M.modElem.style;
        for (p = t.length, d = 0; d < p; d++)
            if (g = t[d], m = M.style[g], h(g, "-") && (g = c(g)), M.style[g] !== i) {
                if (r || n(o, "undefined")) return a(), "pfx" != e || g;
                try {
                    M.style[g] = o
                } catch (y) {}
                if (M.style[g] != m) return a(), "pfx" != e || g
            }
        return a(), !1
    }

    function m(t, e, i, o, r) {
        var s = t.charAt(0).toUpperCase() + t.slice(1),
            a = (t + " " + E.join(s + " ") + s).split(" ");
        return n(e, "string") || n(e, "undefined") ? g(a, e, o, r) : (a = (t + " " + L.join(s + " ") + s).split(" "), d(a, e, i))
    }

    function v(t, e, n) {
        return m(t, i, i, e, n)
    }
    var y = [],
        b = [],
        w = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(t, e) {
                var i = this;
                setTimeout(function() {
                    e(i[t])
                }, 0)
            },
            addTest: function(t, e, i) {
                b.push({
                    name: t,
                    fn: e,
                    options: i
                })
            },
            addAsyncTest: function(t) {
                b.push({
                    name: null,
                    fn: t
                })
            }
        },
        P = function() {};
    P.prototype = w, P = new P;
    var _ = e.documentElement,
        x = "svg" === _.nodeName.toLowerCase(),
        T = "CSS" in t && "supports" in t.CSS,
        C = "supportsCSS" in t;
    P.addTest("supports", T || C);
    var S = w.testStyles = l,
        k = "Moz O ms Webkit",
        E = w._config.usePrefixes ? k.split(" ") : [];
    w._cssomPrefixes = E;
    var L = w._config.usePrefixes ? k.toLowerCase().split(" ") : [];
    w._domPrefixes = L;
    var A = {
        elem: s("modernizr")
    };
    P._q.push(function() {
        delete A.elem
    });
    var M = {
        style: A.elem.style
    };
    P._q.unshift(function() {
        delete M.style
    }), w.testAllProps = m, w.testAllProps = v, P.addTest("csstransforms3d", function() {
        var t = !!v("perspective", "1px", !0),
            e = P._config.usePrefixes;
        if (t && (!e || "webkitPerspective" in _.style)) {
            var i, n = "#modernizr{width:0;height:0}";
            P.supports ? i = "@supports (perspective: 1px)" : (i = "@media (transform-3d)", e && (i += ",(-webkit-transform-3d)")), i += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", S(n + i, function(e) {
                t = 7 === e.offsetWidth && 18 === e.offsetHeight
            })
        }
        return t
    });
    var B = function(e) {
        var n, o = prefixes.length,
            r = t.CSSRule;
        if ("undefined" == typeof r) return i;
        if (!e) return !1;
        if (e = e.replace(/^@/, ""), n = e.replace(/-/g, "_").toUpperCase() + "_RULE", n in r) return "@" + e;
        for (var s = 0; s < o; s++) {
            var a = prefixes[s],
                l = a.toUpperCase() + "_" + n;
            if (l in r) return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    w.atRule = B;
    var I = w.prefixed = function(t, e, i) {
        return 0 === t.indexOf("@") ? B(t) : (t.indexOf("-") != -1 && (t = c(t)), e ? m(t, e, i) : m(t, "pfx"))
    };
    w.prefixedCSS = function(t) {
        var e = I(t);
        return e && p(e)
    };
    o(), r(y), delete w.addTest, delete w.addAsyncTest;
    for (var F = 0; F < P._q.length; F++) P._q[F]();
    t.FBPublication.Modernizr = P
}(window, document),
function(t, e) {
    "undefined" != typeof exports ? t(global, exports) : t(window, e)
}(function(t, e) {
    var i;
    ! function() {
        function e(t) {
            this.mode = u.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
            for (var e = 0, i = this.data.length; e < i; e++) {
                var n = [],
                    o = this.data.charCodeAt(e);
                o > 65536 ? (n[0] = 240 | (1835008 & o) >>> 18, n[1] = 128 | (258048 & o) >>> 12, n[2] = 128 | (4032 & o) >>> 6, n[3] = 128 | 63 & o) : o > 2048 ? (n[0] = 224 | (61440 & o) >>> 12, n[1] = 128 | (4032 & o) >>> 6, n[2] = 128 | 63 & o) : o > 128 ? (n[0] = 192 | (1984 & o) >>> 6, n[1] = 128 | 63 & o) : n[0] = o, this.parsedData.push(n)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
        }

        function n(t, e) {
            this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
        }

        function o(t, e) {
            if (void 0 == t.length) throw new Error(t.length + "/" + e);
            for (var i = 0; i < t.length && 0 == t[i];) i++;
            this.num = new Array(t.length - i + e);
            for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
        }

        function r(t, e) {
            this.totalCount = t, this.dataCount = e
        }

        function s() {
            this.buffer = [], this.length = 0
        }

        function a() {
            return "undefined" != typeof CanvasRenderingContext2D
        }

        function l() {
            var t = !1,
                e = navigator.userAgent;
            if (/android/i.test(e)) {
                t = !0;
                var i = e.toString().match(/android ([0-9]\.[0-9])/i);
                i && i[1] && (t = parseFloat(i[1]))
            }
            return t
        }

        function h(t, e) {
            for (var i = 1, n = c(t), o = 0, r = v.length; o <= r; o++) {
                var s = 0;
                switch (e) {
                    case d.L:
                        s = v[o][0];
                        break;
                    case d.M:
                        s = v[o][1];
                        break;
                    case d.Q:
                        s = v[o][2];
                        break;
                    case d.H:
                        s = v[o][3]
                }
                if (n <= s) break;
                i++
            }
            if (i > v.length) throw new Error("Too long data");
            return i
        }

        function c(t) {
            var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
            return e.length + (e.length != t ? 3 : 0)
        }
        e.prototype = {
            getLength: function(t) {
                return this.parsedData.length
            },
            write: function(t) {
                for (var e = 0, i = this.parsedData.length; e < i; e++) t.put(this.parsedData[e], 8)
            }
        }, n.prototype = {
            addData: function(t) {
                var i = new e(t);
                this.dataList.push(i), this.dataCache = null
            },
            isDark: function(t, e) {
                if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
                return this.modules[t][e]
            },
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(t, e) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                for (var i = 0; i < this.moduleCount; i++) {
                    this.modules[i] = new Array(this.moduleCount);
                    for (var o = 0; o < this.moduleCount; o++) this.modules[i][o] = null
                }
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
            },
            setupPositionProbePattern: function(t, e) {
                for (var i = -1; i <= 7; i++)
                    if (!(t + i <= -1 || this.moduleCount <= t + i))
                        for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (0 <= i && i <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= n && n <= 4 ? this.modules[t + i][e + n] = !0 : this.modules[t + i][e + n] = !1)
            },
            getBestMaskPattern: function() {
                for (var t = 0, e = 0, i = 0; i < 8; i++) {
                    this.makeImpl(!0, i);
                    var n = f.getLostPoint(this);
                    (0 == i || t > n) && (t = n, e = i)
                }
                return e
            },
            createMovieClip: function(t, e, i) {
                var n = t.createEmptyMovieClip(e, i),
                    o = 1;
                this.make();
                for (var r = 0; r < this.modules.length; r++)
                    for (var s = r * o, a = 0; a < this.modules[r].length; a++) {
                        var l = a * o,
                            h = this.modules[r][a];
                        h && (n.beginFill(0, 100), n.moveTo(l, s), n.lineTo(l + o, s), n.lineTo(l + o, s + o), n.lineTo(l, s + o), n.endFill())
                    }
                return n
            },
            setupTimingPattern: function() {
                for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
            },
            setupPositionAdjustPattern: function() {
                for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                    for (var i = 0; i < t.length; i++) {
                        var n = t[e],
                            o = t[i];
                        if (null == this.modules[n][o])
                            for (var r = -2; r <= 2; r++)
                                for (var s = -2; s <= 2; s++) r == -2 || 2 == r || s == -2 || 2 == s || 0 == r && 0 == s ? this.modules[n + r][o + s] = !0 : this.modules[n + r][o + s] = !1
                    }
            },
            setupTypeNumber: function(t) {
                for (var e = f.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
                    var n = !t && 1 == (e >> i & 1);
                    this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n
                }
                for (var i = 0; i < 18; i++) {
                    var n = !t && 1 == (e >> i & 1);
                    this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
                }
            },
            setupTypeInfo: function(t, e) {
                for (var i = this.errorCorrectLevel << 3 | e, n = f.getBCHTypeInfo(i), o = 0; o < 15; o++) {
                    var r = !t && 1 == (n >> o & 1);
                    o < 6 ? this.modules[o][8] = r : o < 8 ? this.modules[o + 1][8] = r : this.modules[this.moduleCount - 15 + o][8] = r
                }
                for (var o = 0; o < 15; o++) {
                    var r = !t && 1 == (n >> o & 1);
                    o < 8 ? this.modules[8][this.moduleCount - o - 1] = r : o < 9 ? this.modules[8][15 - o - 1 + 1] = r : this.modules[8][15 - o - 1] = r
                }
                this.modules[this.moduleCount - 8][8] = !t
            },
            mapData: function(t, e) {
                for (var i = -1, n = this.moduleCount - 1, o = 7, r = 0, s = this.moduleCount - 1; s > 0; s -= 2)
                    for (6 == s && s--;;) {
                        for (var a = 0; a < 2; a++)
                            if (null == this.modules[n][s - a]) {
                                var l = !1;
                                r < t.length && (l = 1 == (t[r] >>> o & 1));
                                var h = f.getMask(e, n, s - a);
                                h && (l = !l), this.modules[n][s - a] = l, o--, o == -1 && (r++, o = 7)
                            }
                        if (n += i, n < 0 || this.moduleCount <= n) {
                            n -= i, i = -i;
                            break
                        }
                    }
            }
        }, n.PAD0 = 236, n.PAD1 = 17, n.createData = function(t, e, i) {
            for (var o = r.getRSBlocks(t, e), a = new s, l = 0; l < i.length; l++) {
                var h = i[l];
                a.put(h.mode, 4), a.put(h.getLength(), f.getLengthInBits(h.mode, t)), h.write(a)
            }
            for (var c = 0, l = 0; l < o.length; l++) c += o[l].dataCount;
            if (a.getLengthInBits() > 8 * c) throw new Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * c + ")");
            for (a.getLengthInBits() + 4 <= 8 * c && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(!1);
            for (;;) {
                if (a.getLengthInBits() >= 8 * c) break;
                if (a.put(n.PAD0, 8), a.getLengthInBits() >= 8 * c) break;
                a.put(n.PAD1, 8)
            }
            return n.createBytes(a, o)
        }, n.createBytes = function(t, e) {
            for (var i = 0, n = 0, r = 0, s = new Array(e.length), a = new Array(e.length), l = 0; l < e.length; l++) {
                var h = e[l].dataCount,
                    c = e[l].totalCount - h;
                n = Math.max(n, h), r = Math.max(r, c), s[l] = new Array(h);
                for (var u = 0; u < s[l].length; u++) s[l][u] = 255 & t.buffer[u + i];
                i += h;
                var d = f.getErrorCorrectPolynomial(c),
                    p = new o(s[l], d.getLength() - 1),
                    g = p.mod(d);
                a[l] = new Array(d.getLength() - 1);
                for (var u = 0; u < a[l].length; u++) {
                    var m = u + g.getLength() - a[l].length;
                    a[l][u] = m >= 0 ? g.get(m) : 0
                }
            }
            for (var v = 0, u = 0; u < e.length; u++) v += e[u].totalCount;
            for (var y = new Array(v), b = 0, u = 0; u < n; u++)
                for (var l = 0; l < e.length; l++) u < s[l].length && (y[b++] = s[l][u]);
            for (var u = 0; u < r; u++)
                for (var l = 0; l < e.length; l++) u < a[l].length && (y[b++] = a[l][u]);
            return y
        };
        for (var u = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            }, d = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            }, p = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            }, f = {
                PATTERN_POSITION_TABLE: [
                    [],
                    [6, 18],
                    [6, 22],
                    [6, 26],
                    [6, 30],
                    [6, 34],
                    [6, 22, 38],
                    [6, 24, 42],
                    [6, 26, 46],
                    [6, 28, 50],
                    [6, 30, 54],
                    [6, 32, 58],
                    [6, 34, 62],
                    [6, 26, 46, 66],
                    [6, 26, 48, 70],
                    [6, 26, 50, 74],
                    [6, 30, 54, 78],
                    [6, 30, 56, 82],
                    [6, 30, 58, 86],
                    [6, 34, 62, 90],
                    [6, 28, 50, 72, 94],
                    [6, 26, 50, 74, 98],
                    [6, 30, 54, 78, 102],
                    [6, 28, 54, 80, 106],
                    [6, 32, 58, 84, 110],
                    [6, 30, 58, 86, 114],
                    [6, 34, 62, 90, 118],
                    [6, 26, 50, 74, 98, 122],
                    [6, 30, 54, 78, 102, 126],
                    [6, 26, 52, 78, 104, 130],
                    [6, 30, 56, 82, 108, 134],
                    [6, 34, 60, 86, 112, 138],
                    [6, 30, 58, 86, 114, 142],
                    [6, 34, 62, 90, 118, 146],
                    [6, 30, 54, 78, 102, 126, 150],
                    [6, 24, 50, 76, 102, 128, 154],
                    [6, 28, 54, 80, 106, 132, 158],
                    [6, 32, 58, 84, 110, 136, 162],
                    [6, 26, 54, 82, 110, 138, 166],
                    [6, 30, 58, 86, 114, 142, 170]
                ],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function(t) {
                    for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0;) e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
                    return (t << 10 | e) ^ f.G15_MASK
                },
                getBCHTypeNumber: function(t) {
                    for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0;) e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
                    return t << 12 | e
                },
                getBCHDigit: function(t) {
                    for (var e = 0; 0 != t;) e++, t >>>= 1;
                    return e
                },
                getPatternPosition: function(t) {
                    return f.PATTERN_POSITION_TABLE[t - 1]
                },
                getMask: function(t, e, i) {
                    switch (t) {
                        case p.PATTERN000:
                            return (e + i) % 2 == 0;
                        case p.PATTERN001:
                            return e % 2 == 0;
                        case p.PATTERN010:
                            return i % 3 == 0;
                        case p.PATTERN011:
                            return (e + i) % 3 == 0;
                        case p.PATTERN100:
                            return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;
                        case p.PATTERN101:
                            return e * i % 2 + e * i % 3 == 0;
                        case p.PATTERN110:
                            return (e * i % 2 + e * i % 3) % 2 == 0;
                        case p.PATTERN111:
                            return (e * i % 3 + (e + i) % 2) % 2 == 0;
                        default:
                            throw new Error("bad maskPattern:" + t)
                    }
                },
                getErrorCorrectPolynomial: function(t) {
                    for (var e = new o([1], 0), i = 0; i < t; i++) e = e.multiply(new o([1, g.gexp(i)], 0));
                    return e
                },
                getLengthInBits: function(t, e) {
                    if (1 <= e && e < 10) switch (t) {
                        case u.MODE_NUMBER:
                            return 10;
                        case u.MODE_ALPHA_NUM:
                            return 9;
                        case u.MODE_8BIT_BYTE:
                            return 8;
                        case u.MODE_KANJI:
                            return 8;
                        default:
                            throw new Error("mode:" + t)
                    } else if (e < 27) switch (t) {
                        case u.MODE_NUMBER:
                            return 12;
                        case u.MODE_ALPHA_NUM:
                            return 11;
                        case u.MODE_8BIT_BYTE:
                            return 16;
                        case u.MODE_KANJI:
                            return 10;
                        default:
                            throw new Error("mode:" + t)
                    } else {
                        if (!(e < 41)) throw new Error("type:" + e);
                        switch (t) {
                            case u.MODE_NUMBER:
                                return 14;
                            case u.MODE_ALPHA_NUM:
                                return 13;
                            case u.MODE_8BIT_BYTE:
                                return 16;
                            case u.MODE_KANJI:
                                return 12;
                            default:
                                throw new Error("mode:" + t)
                        }
                    }
                },
                getLostPoint: function(t) {
                    for (var e = t.getModuleCount(), i = 0, n = 0; n < e; n++)
                        for (var o = 0; o < e; o++) {
                            for (var r = 0, s = t.isDark(n, o), a = -1; a <= 1; a++)
                                if (!(n + a < 0 || e <= n + a))
                                    for (var l = -1; l <= 1; l++) o + l < 0 || e <= o + l || 0 == a && 0 == l || s == t.isDark(n + a, o + l) && r++;
                            r > 5 && (i += 3 + r - 5)
                        }
                    for (var n = 0; n < e - 1; n++)
                        for (var o = 0; o < e - 1; o++) {
                            var h = 0;
                            t.isDark(n, o) && h++, t.isDark(n + 1, o) && h++, t.isDark(n, o + 1) && h++, t.isDark(n + 1, o + 1) && h++, 0 != h && 4 != h || (i += 3)
                        }
                    for (var n = 0; n < e; n++)
                        for (var o = 0; o < e - 6; o++) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (i += 40);
                    for (var o = 0; o < e; o++)
                        for (var n = 0; n < e - 6; n++) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (i += 40);
                    for (var c = 0, o = 0; o < e; o++)
                        for (var n = 0; n < e; n++) t.isDark(n, o) && c++;
                    var u = Math.abs(100 * c / e / e - 50) / 5;
                    return i += 10 * u
                }
            }, g = {
                glog: function(t) {
                    if (t < 1) throw new Error("glog(" + t + ")");
                    return g.LOG_TABLE[t]
                },
                gexp: function(t) {
                    for (; t < 0;) t += 255;
                    for (; t >= 256;) t -= 255;
                    return g.EXP_TABLE[t]
                },
                EXP_TABLE: new Array(256),
                LOG_TABLE: new Array(256)
            }, m = 0; m < 8; m++) g.EXP_TABLE[m] = 1 << m;
        for (var m = 8; m < 256; m++) g.EXP_TABLE[m] = g.EXP_TABLE[m - 4] ^ g.EXP_TABLE[m - 5] ^ g.EXP_TABLE[m - 6] ^ g.EXP_TABLE[m - 8];
        for (var m = 0; m < 255; m++) g.LOG_TABLE[g.EXP_TABLE[m]] = m;
        o.prototype = {
            get: function(t) {
                return this.num[t]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(t) {
                for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++)
                    for (var n = 0; n < t.getLength(); n++) e[i + n] ^= g.gexp(g.glog(this.get(i)) + g.glog(t.get(n)));
                return new o(e, 0)
            },
            mod: function(t) {
                if (this.getLength() - t.getLength() < 0) return this;
                for (var e = g.glog(this.get(0)) - g.glog(t.get(0)), i = new Array(this.getLength()), n = 0; n < this.getLength(); n++) i[n] = this.get(n);
                for (var n = 0; n < t.getLength(); n++) i[n] ^= g.gexp(g.glog(t.get(n)) + e);
                return new o(i, 0).mod(t)
            }
        }, r.RS_BLOCK_TABLE = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
        ], r.getRSBlocks = function(t, e) {
            var i = r.getRsBlockTable(t, e);
            if (void 0 == i) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
            for (var n = i.length / 3, o = [], s = 0; s < n; s++)
                for (var a = i[3 * s + 0], l = i[3 * s + 1], h = i[3 * s + 2], c = 0; c < a; c++) o.push(new r(l, h));
            return o
        }, r.getRsBlockTable = function(t, e) {
            switch (e) {
                case d.L:
                    return r.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                case d.M:
                    return r.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                case d.Q:
                    return r.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                case d.H:
                    return r.RS_BLOCK_TABLE[4 * (t - 1) + 3];
                default:
                    return
            }
        }, s.prototype = {
            get: function(t) {
                var e = Math.floor(t / 8);
                return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
            },
            put: function(t, e) {
                for (var i = 0; i < e; i++) this.putBit(1 == (t >>> e - i - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(t) {
                var e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
            }
        };
        var v = [
                [17, 14, 11, 7],
                [32, 26, 20, 14],
                [53, 42, 32, 24],
                [78, 62, 46, 34],
                [106, 84, 60, 44],
                [134, 106, 74, 58],
                [154, 122, 86, 64],
                [192, 152, 108, 84],
                [230, 180, 130, 98],
                [271, 213, 151, 119],
                [321, 251, 177, 137],
                [367, 287, 203, 155],
                [425, 331, 241, 177],
                [458, 362, 258, 194],
                [520, 412, 292, 220],
                [586, 450, 322, 250],
                [644, 504, 364, 280],
                [718, 560, 394, 310],
                [792, 624, 442, 338],
                [858, 666, 482, 382],
                [929, 711, 509, 403],
                [1003, 779, 565, 439],
                [1091, 857, 611, 461],
                [1171, 911, 661, 511],
                [1273, 997, 715, 535],
                [1367, 1059, 751, 593],
                [1465, 1125, 805, 625],
                [1528, 1190, 868, 658],
                [1628, 1264, 908, 698],
                [1732, 1370, 982, 742],
                [1840, 1452, 1030, 790],
                [1952, 1538, 1112, 842],
                [2068, 1628, 1168, 898],
                [2188, 1722, 1228, 958],
                [2303, 1809, 1283, 983],
                [2431, 1911, 1351, 1051],
                [2563, 1989, 1423, 1093],
                [2699, 2099, 1499, 1139],
                [2809, 2213, 1579, 1219],
                [2953, 2331, 1663, 1273]
            ],
            y = function() {
                var t = function(t, e) {
                    this._el = t, this._htOption = e
                };
                return t.prototype.draw = function(t) {
                    function e(t, e) {
                        var i = document.createElementNS("http://www.w3.org/2000/svg", t);
                        for (var n in e) e.hasOwnProperty(n) && i.setAttribute(n, e[n]);
                        return i
                    }
                    var i = this._htOption,
                        n = this._el,
                        o = t.getModuleCount();
                    Math.floor(i.width / o), Math.floor(i.height / o);
                    this.clear();
                    var r = e("svg", {
                        viewBox: "0 0 " + String(o) + " " + String(o),
                        width: "100%",
                        height: "100%",
                        fill: i.colorLight
                    });
                    r.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), n.appendChild(r), r.appendChild(e("rect", {
                        fill: i.colorLight,
                        width: "100%",
                        height: "100%"
                    })), r.appendChild(e("rect", {
                        fill: i.colorDark,
                        width: "1",
                        height: "1",
                        id: "template"
                    }));
                    for (var s = 0; s < o; s++)
                        for (var a = 0; a < o; a++)
                            if (t.isDark(s, a)) {
                                var l = e("use", {
                                    x: String(a),
                                    y: String(s)
                                });
                                l.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), r.appendChild(l)
                            }
                }, t.prototype.clear = function() {
                    for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
                }, t
            }(),
            b = "svg" === document.documentElement.tagName.toLowerCase(),
            w = b ? y : a() ? function() {
                function e() {
                    this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
                }

                function i(t, e) {
                    var i = this;
                    if (i._fFail = e, i._fSuccess = t, null === i._bSupportDataURI) {
                        var n = document.createElement("img"),
                            o = function() {
                                i._bSupportDataURI = !1, i._fFail && i._fFail.call(i)
                            },
                            r = function() {
                                i._bSupportDataURI = !0, i._fSuccess && i._fSuccess.call(i)
                            };
                        return n.onabort = o, n.onerror = o, n.onload = r, void(n.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                    }
                    i._bSupportDataURI === !0 && i._fSuccess ? i._fSuccess.call(i) : i._bSupportDataURI === !1 && i._fFail && i._fFail.call(i)
                }
                if (this._android && this._android <= 2.1) {
                    var n = 1 / t.devicePixelRatio,
                        o = CanvasRenderingContext2D.prototype.drawImage;
                    CanvasRenderingContext2D.prototype.drawImage = function(t, e, i, r, s, a, l, h, c) {
                        if ("nodeName" in t && /img/i.test(t.nodeName))
                            for (var u = arguments.length - 1; u >= 1; u--) arguments[u] = arguments[u] * n;
                        else "undefined" == typeof h && (arguments[1] *= n, arguments[2] *= n, arguments[3] *= n, arguments[4] *= n);
                        o.apply(this, arguments)
                    }
                }
                var r = function(t, e) {
                    this._bIsPainted = !1, this._android = l(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
                };
                return r.prototype.draw = function(t) {
                    var e = this._elImage,
                        i = this._oContext,
                        n = this._htOption,
                        o = t.getModuleCount(),
                        r = n.width / o,
                        s = n.height / o,
                        a = Math.round(r),
                        l = Math.round(s);
                    e.style.display = "none", this.clear();
                    for (var h = 0; h < o; h++)
                        for (var c = 0; c < o; c++) {
                            var u = t.isDark(h, c),
                                d = c * r,
                                p = h * s;
                            i.strokeStyle = u ? n.colorDark : n.colorLight, i.lineWidth = 1, i.fillStyle = u ? n.colorDark : n.colorLight, i.fillRect(d, p, r, s), i.strokeRect(Math.floor(d) + .5, Math.floor(p) + .5, a, l), i.strokeRect(Math.ceil(d) - .5, Math.ceil(p) - .5, a, l)
                        }
                    this._bIsPainted = !0
                }, r.prototype.makeImage = function() {
                    this._bIsPainted && i.call(this, e)
                }, r.prototype.isPainted = function() {
                    return this._bIsPainted
                }, r.prototype.clear = function() {
                    this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
                }, r.prototype.round = function(t) {
                    return t ? Math.floor(1e3 * t) / 1e3 : t
                }, r
            }() : function() {
                var t = function(t, e) {
                    this._el = t, this._htOption = e
                };
                return t.prototype.draw = function(t) {
                    for (var e = this._htOption, i = this._el, n = t.getModuleCount(), o = Math.floor(e.width / n), r = Math.floor(e.height / n), s = ['<table style="border:0;border-collapse:collapse;">'], a = 0; a < n; a++) {
                        s.push("<tr>");
                        for (var l = 0; l < n; l++) s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + o + "px;height:" + r + "px;background-color:" + (t.isDark(a, l) ? e.colorDark : e.colorLight) + ';"></td>');
                        s.push("</tr>")
                    }
                    s.push("</table>"), i.innerHTML = s.join("");
                    var h = i.childNodes[0],
                        c = (e.width - h.offsetWidth) / 2,
                        u = (e.height - h.offsetHeight) / 2;
                    c > 0 && u > 0 && (h.style.margin = u + "px " + c + "px")
                }, t.prototype.clear = function() {
                    this._el.innerHTML = ""
                }, t
            }();
        i = function(t, e) {
            if (this._htOption = {
                    width: 256,
                    height: 256,
                    typeNumber: 4,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: d.H
                }, "string" == typeof e && (e = {
                    text: e
                }), e)
                for (var i in e) this._htOption[i] = e[i];
            "string" == typeof t && (t = document.getElementById(t)), this._htOption.useSVG && (w = y), this._android = l(), this._el = t, this._oQRCode = null, this._oDrawing = new w(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
        }, i.prototype.makeCode = function(t) {
            this._oQRCode = new n(h(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage()
        }, i.prototype.makeImage = function() {
            "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
        }, i.prototype.clear = function() {
            this._oDrawing.clear()
        }, i.CorrectLevel = d
    }(), e.QRCode = i
}, this.FBPublication || {}), "undefined" == typeof this.FBPublication && (this.FBPublication = {}), this.FBPublication.self = this.FBPublication, ! function(t) {
        ! function() {
            var e = "object" == typeof t && t.self === t && t || "object" == typeof global && global.global === global && global || this,
                i = e._,
                n = Array.prototype,
                o = Object.prototype,
                r = "undefined" != typeof Symbol ? Symbol.prototype : null,
                s = n.push,
                a = n.slice,
                l = o.toString,
                h = o.hasOwnProperty,
                c = Array.isArray,
                u = Object.keys,
                d = Object.create,
                p = function() {},
                f = function(t) {
                    return t instanceof f ? t : this instanceof f ? void(this._wrapped = t) : new f(t)
                };
            "undefined" == typeof exports || exports.nodeType ? e._ = f : ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = f), exports._ = f), f.VERSION = "1.8.3";
            var g, m = function(t, e, i) {
                    if (void 0 === e) return t;
                    switch (null == i ? 3 : i) {
                        case 1:
                            return function(i) {
                                return t.call(e, i)
                            };
                        case 3:
                            return function(i, n, o) {
                                return t.call(e, i, n, o)
                            };
                        case 4:
                            return function(i, n, o, r) {
                                return t.call(e, i, n, o, r)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                v = function(t, e, i) {
                    return f.iteratee !== g ? f.iteratee(t, e) : null == t ? f.identity : f.isFunction(t) ? m(t, e, i) : f.isObject(t) ? f.matcher(t) : f.property(t)
                };
            f.iteratee = g = function(t, e) {
                return v(t, e, 1 / 0)
            };
            var y = function(t, e) {
                    return e = null == e ? t.length - 1 : +e,
                        function() {
                            for (var i = Math.max(arguments.length - e, 0), n = Array(i), o = 0; o < i; o++) n[o] = arguments[o + e];
                            switch (e) {
                                case 0:
                                    return t.call(this, n);
                                case 1:
                                    return t.call(this, arguments[0], n);
                                case 2:
                                    return t.call(this, arguments[0], arguments[1], n)
                            }
                            var r = Array(e + 1);
                            for (o = 0; o < e; o++) r[o] = arguments[o];
                            return r[e] = n, t.apply(this, r)
                        }
                },
                b = function(t) {
                    if (!f.isObject(t)) return {};
                    if (d) return d(t);
                    p.prototype = t;
                    var e = new p;
                    return p.prototype = null, e
                },
                w = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                },
                P = Math.pow(2, 53) - 1,
                _ = w("length"),
                x = function(t) {
                    var e = _(t);
                    return "number" == typeof e && e >= 0 && e <= P
                };
            f.each = f.forEach = function(t, e, i) {
                e = m(e, i);
                var n, o;
                if (x(t))
                    for (n = 0, o = t.length; n < o; n++) e(t[n], n, t);
                else {
                    var r = f.keys(t);
                    for (n = 0, o = r.length; n < o; n++) e(t[r[n]], r[n], t)
                }
                return t
            }, f.map = f.collect = function(t, e, i) {
                e = v(e, i);
                for (var n = !x(t) && f.keys(t), o = (n || t).length, r = Array(o), s = 0; s < o; s++) {
                    var a = n ? n[s] : s;
                    r[s] = e(t[a], a, t)
                }
                return r
            };
            var T = function(t) {
                var e = function(e, i, n, o) {
                    var r = !x(e) && f.keys(e),
                        s = (r || e).length,
                        a = t > 0 ? 0 : s - 1;
                    for (o || (n = e[r ? r[a] : a], a += t); a >= 0 && a < s; a += t) {
                        var l = r ? r[a] : a;
                        n = i(n, e[l], l, e)
                    }
                    return n
                };
                return function(t, i, n, o) {
                    var r = arguments.length >= 3;
                    return e(t, m(i, o, 4), n, r)
                }
            };
            f.reduce = f.foldl = f.inject = T(1), f.reduceRight = f.foldr = T(-1), f.find = f.detect = function(t, e, i) {
                var n = x(t) ? f.findIndex : f.findKey,
                    o = n(t, e, i);
                if (void 0 !== o && o !== -1) return t[o]
            }, f.filter = f.select = function(t, e, i) {
                var n = [];
                return e = v(e, i), f.each(t, function(t, i, o) {
                    e(t, i, o) && n.push(t)
                }), n
            }, f.reject = function(t, e, i) {
                return f.filter(t, f.negate(v(e)), i)
            }, f.every = f.all = function(t, e, i) {
                e = v(e, i);
                for (var n = !x(t) && f.keys(t), o = (n || t).length, r = 0; r < o; r++) {
                    var s = n ? n[r] : r;
                    if (!e(t[s], s, t)) return !1
                }
                return !0
            }, f.some = f.any = function(t, e, i) {
                e = v(e, i);
                for (var n = !x(t) && f.keys(t), o = (n || t).length, r = 0; r < o; r++) {
                    var s = n ? n[r] : r;
                    if (e(t[s], s, t)) return !0
                }
                return !1
            }, f.contains = f.includes = f.include = function(t, e, i, n) {
                return x(t) || (t = f.values(t)), ("number" != typeof i || n) && (i = 0), f.indexOf(t, e, i) >= 0
            }, f.invoke = y(function(t, e, i) {
                var n = f.isFunction(e);
                return f.map(t, function(t) {
                    var o = n ? e : t[e];
                    return null == o ? o : o.apply(t, i)
                })
            }), f.pluck = function(t, e) {
                return f.map(t, f.property(e))
            }, f.where = function(t, e) {
                return f.filter(t, f.matcher(e))
            }, f.findWhere = function(t, e) {
                return f.find(t, f.matcher(e))
            }, f.max = function(t, e, i) {
                var n, o, r = -(1 / 0),
                    s = -(1 / 0);
                if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                    t = x(t) ? t : f.values(t);
                    for (var a = 0, l = t.length; a < l; a++) n = t[a], null != n && n > r && (r = n)
                } else e = v(e, i), f.each(t, function(t, i, n) {
                    o = e(t, i, n), (o > s || o === -(1 / 0) && r === -(1 / 0)) && (r = t, s = o)
                });
                return r
            }, f.min = function(t, e, i) {
                var n, o, r = 1 / 0,
                    s = 1 / 0;
                if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                    t = x(t) ? t : f.values(t);
                    for (var a = 0, l = t.length; a < l; a++) n = t[a], null != n && n < r && (r = n)
                } else e = v(e, i), f.each(t, function(t, i, n) {
                    o = e(t, i, n), (o < s || o === 1 / 0 && r === 1 / 0) && (r = t, s = o)
                });
                return r
            }, f.shuffle = function(t) {
                return f.sample(t, 1 / 0)
            }, f.sample = function(t, e, i) {
                if (null == e || i) return x(t) || (t = f.values(t)), t[f.random(t.length - 1)];
                var n = x(t) ? f.clone(t) : f.values(t),
                    o = _(n);
                e = Math.max(Math.min(e, o), 0);
                for (var r = o - 1, s = 0; s < e; s++) {
                    var a = f.random(s, r),
                        l = n[s];
                    n[s] = n[a], n[a] = l
                }
                return n.slice(0, e)
            }, f.sortBy = function(t, e, i) {
                var n = 0;
                return e = v(e, i), f.pluck(f.map(t, function(t, i, o) {
                    return {
                        value: t,
                        index: n++,
                        criteria: e(t, i, o)
                    }
                }).sort(function(t, e) {
                    var i = t.criteria,
                        n = e.criteria;
                    if (i !== n) {
                        if (i > n || void 0 === i) return 1;
                        if (i < n || void 0 === n) return -1
                    }
                    return t.index - e.index
                }), "value")
            };
            var C = function(t, e) {
                return function(i, n, o) {
                    var r = e ? [
                        [],
                        []
                    ] : {};
                    return n = v(n, o), f.each(i, function(e, o) {
                        var s = n(e, o, i);
                        t(r, e, s)
                    }), r
                }
            };
            f.groupBy = C(function(t, e, i) {
                f.has(t, i) ? t[i].push(e) : t[i] = [e]
            }), f.indexBy = C(function(t, e, i) {
                t[i] = e
            }), f.countBy = C(function(t, e, i) {
                f.has(t, i) ? t[i]++ : t[i] = 1
            });
            var S = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
            f.toArray = function(t) {
                return t ? f.isArray(t) ? a.call(t) : f.isString(t) ? t.match(S) : x(t) ? f.map(t, f.identity) : f.values(t) : []
            }, f.size = function(t) {
                return null == t ? 0 : x(t) ? t.length : f.keys(t).length
            }, f.partition = C(function(t, e, i) {
                t[i ? 0 : 1].push(e)
            }, !0), f.first = f.head = f.take = function(t, e, i) {
                if (!(null == t || t.length < 1)) return null == e || i ? t[0] : f.initial(t, t.length - e)
            }, f.initial = function(t, e, i) {
                return a.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
            }, f.last = function(t, e, i) {
                if (!(null == t || t.length < 1)) return null == e || i ? t[t.length - 1] : f.rest(t, Math.max(0, t.length - e))
            }, f.rest = f.tail = f.drop = function(t, e, i) {
                return a.call(t, null == e || i ? 1 : e)
            }, f.compact = function(t) {
                return f.filter(t, Boolean)
            };
            var k = function(t, e, i, n) {
                n = n || [];
                for (var o = n.length, r = 0, s = _(t); r < s; r++) {
                    var a = t[r];
                    if (x(a) && (f.isArray(a) || f.isArguments(a)))
                        if (e)
                            for (var l = 0, h = a.length; l < h;) n[o++] = a[l++];
                        else k(a, e, i, n), o = n.length;
                    else i || (n[o++] = a)
                }
                return n
            };
            f.flatten = function(t, e) {
                return k(t, e, !1)
            }, f.without = y(function(t, e) {
                return f.difference(t, e)
            }), f.uniq = f.unique = function(t, e, i, n) {
                f.isBoolean(e) || (n = i, i = e, e = !1), null != i && (i = v(i, n));
                for (var o = [], r = [], s = 0, a = _(t); s < a; s++) {
                    var l = t[s],
                        h = i ? i(l, s, t) : l;
                    e ? (s && r === h || o.push(l), r = h) : i ? f.contains(r, h) || (r.push(h), o.push(l)) : f.contains(o, l) || o.push(l)
                }
                return o
            }, f.union = y(function(t) {
                return f.uniq(k(t, !0, !0))
            }), f.intersection = function(t) {
                for (var e = [], i = arguments.length, n = 0, o = _(t); n < o; n++) {
                    var r = t[n];
                    if (!f.contains(e, r)) {
                        var s;
                        for (s = 1; s < i && f.contains(arguments[s], r); s++);
                        s === i && e.push(r)
                    }
                }
                return e
            }, f.difference = y(function(t, e) {
                return e = k(e, !0, !0), f.filter(t, function(t) {
                    return !f.contains(e, t)
                })
            }), f.unzip = function(t) {
                for (var e = t && f.max(t, _).length || 0, i = Array(e), n = 0; n < e; n++) i[n] = f.pluck(t, n);
                return i
            }, f.zip = y(f.unzip), f.object = function(t, e) {
                for (var i = {}, n = 0, o = _(t); n < o; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
                return i
            };
            var E = function(t) {
                return function(e, i, n) {
                    i = v(i, n);
                    for (var o = _(e), r = t > 0 ? 0 : o - 1; r >= 0 && r < o; r += t)
                        if (i(e[r], r, e)) return r;
                    return -1
                }
            };
            f.findIndex = E(1), f.findLastIndex = E(-1), f.sortedIndex = function(t, e, i, n) {
                i = v(i, n, 1);
                for (var o = i(e), r = 0, s = _(t); r < s;) {
                    var a = Math.floor((r + s) / 2);
                    i(t[a]) < o ? r = a + 1 : s = a
                }
                return r
            };
            var L = function(t, e, i) {
                return function(n, o, r) {
                    var s = 0,
                        l = _(n);
                    if ("number" == typeof r) t > 0 ? s = r >= 0 ? r : Math.max(r + l, s) : l = r >= 0 ? Math.min(r + 1, l) : r + l + 1;
                    else if (i && r && l) return r = i(n, o), n[r] === o ? r : -1;
                    if (o !== o) return r = e(a.call(n, s, l), f.isNaN), r >= 0 ? r + s : -1;
                    for (r = t > 0 ? s : l - 1; r >= 0 && r < l; r += t)
                        if (n[r] === o) return r;
                    return -1
                }
            };
            f.indexOf = L(1, f.findIndex, f.sortedIndex), f.lastIndexOf = L(-1, f.findLastIndex), f.range = function(t, e, i) {
                null == e && (e = t || 0, t = 0), i || (i = e < t ? -1 : 1);
                for (var n = Math.max(Math.ceil((e - t) / i), 0), o = Array(n), r = 0; r < n; r++, t += i) o[r] = t;
                return o
            }, f.chunk = function(t, e) {
                if (null == e || e < 1) return [];
                for (var i = [], n = 0, o = t.length; n < o;) i.push(a.call(t, n, n += e));
                return i
            };
            var A = function(t, e, i, n, o) {
                if (!(n instanceof e)) return t.apply(i, o);
                var r = b(t.prototype),
                    s = t.apply(r, o);
                return f.isObject(s) ? s : r
            };
            f.bind = y(function(t, e, i) {
                if (!f.isFunction(t)) throw new TypeError("Bind must be called on a function");
                var n = y(function(o) {
                    return A(t, n, e, this, i.concat(o))
                });
                return n
            }), f.partial = y(function(t, e) {
                var i = f.partial.placeholder,
                    n = function() {
                        for (var o = 0, r = e.length, s = Array(r), a = 0; a < r; a++) s[a] = e[a] === i ? arguments[o++] : e[a];
                        for (; o < arguments.length;) s.push(arguments[o++]);
                        return A(t, n, this, this, s)
                    };
                return n
            }), f.partial.placeholder = f, f.bindAll = y(function(t, e) {
                e = k(e, !1, !1);
                var i = e.length;
                if (i < 1) throw new Error("bindAll must be passed function names");
                for (; i--;) {
                    var n = e[i];
                    t[n] = f.bind(t[n], t)
                }
            }), f.memoize = function(t, e) {
                var i = function(n) {
                    var o = i.cache,
                        r = "" + (e ? e.apply(this, arguments) : n);
                    return f.has(o, r) || (o[r] = t.apply(this, arguments)), o[r]
                };
                return i.cache = {}, i
            }, f.delay = y(function(t, e, i) {
                return setTimeout(function() {
                    return t.apply(null, i)
                }, e)
            }), f.defer = f.partial(f.delay, f, 1), f.throttle = function(t, e, i) {
                var n, o, r, s, a = 0;
                i || (i = {});
                var l = function() {
                        a = i.leading === !1 ? 0 : f.now(), n = null, s = t.apply(o, r), n || (o = r = null)
                    },
                    h = function() {
                        var h = f.now();
                        a || i.leading !== !1 || (a = h);
                        var c = e - (h - a);
                        return o = this, r = arguments, c <= 0 || c > e ? (n && (clearTimeout(n), n = null), a = h, s = t.apply(o, r), n || (o = r = null)) : n || i.trailing === !1 || (n = setTimeout(l, c)), s
                    };
                return h.cancel = function() {
                    clearTimeout(n), a = 0, n = o = r = null
                }, h
            }, f.debounce = function(t, e, i) {
                var n, o, r = function(e, i) {
                        n = null, i && (o = t.apply(e, i))
                    },
                    s = y(function(s) {
                        if (n && clearTimeout(n), i) {
                            var a = !n;
                            n = setTimeout(r, e), a && (o = t.apply(this, s))
                        } else n = f.delay(r, e, this, s);
                        return o
                    });
                return s.cancel = function() {
                    clearTimeout(n), n = null
                }, s
            }, f.wrap = function(t, e) {
                return f.partial(e, t)
            }, f.negate = function(t) {
                return function() {
                    return !t.apply(this, arguments)
                }
            }, f.compose = function() {
                var t = arguments,
                    e = t.length - 1;
                return function() {
                    for (var i = e, n = t[e].apply(this, arguments); i--;) n = t[i].call(this, n);
                    return n
                }
            }, f.after = function(t, e) {
                return function() {
                    if (--t < 1) return e.apply(this, arguments)
                }
            }, f.before = function(t, e) {
                var i;
                return function() {
                    return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = null), i
                }
            }, f.once = f.partial(f.before, 2), f.restArgs = y;
            var M = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                B = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                I = function(t, e) {
                    var i = B.length,
                        n = t.constructor,
                        r = f.isFunction(n) && n.prototype || o,
                        s = "constructor";
                    for (f.has(t, s) && !f.contains(e, s) && e.push(s); i--;) s = B[i], s in t && t[s] !== r[s] && !f.contains(e, s) && e.push(s)
                };
            f.keys = function(t) {
                if (!f.isObject(t)) return [];
                if (u) return u(t);
                var e = [];
                for (var i in t) f.has(t, i) && e.push(i);
                return M && I(t, e), e
            }, f.allKeys = function(t) {
                if (!f.isObject(t)) return [];
                var e = [];
                for (var i in t) e.push(i);
                return M && I(t, e), e
            }, f.values = function(t) {
                for (var e = f.keys(t), i = e.length, n = Array(i), o = 0; o < i; o++) n[o] = t[e[o]];
                return n
            }, f.mapObject = function(t, e, i) {
                e = v(e, i);
                for (var n = f.keys(t), o = n.length, r = {}, s = 0; s < o; s++) {
                    var a = n[s];
                    r[a] = e(t[a], a, t)
                }
                return r
            }, f.pairs = function(t) {
                for (var e = f.keys(t), i = e.length, n = Array(i), o = 0; o < i; o++) n[o] = [e[o], t[e[o]]];
                return n
            }, f.invert = function(t) {
                for (var e = {}, i = f.keys(t), n = 0, o = i.length; n < o; n++) e[t[i[n]]] = i[n];
                return e
            }, f.functions = f.methods = function(t) {
                var e = [];
                for (var i in t) f.isFunction(t[i]) && e.push(i);
                return e.sort()
            };
            var F = function(t, e) {
                return function(i) {
                    var n = arguments.length;
                    if (e && (i = Object(i)), n < 2 || null == i) return i;
                    for (var o = 1; o < n; o++)
                        for (var r = arguments[o], s = t(r), a = s.length, l = 0; l < a; l++) {
                            var h = s[l];
                            e && void 0 !== i[h] || (i[h] = r[h])
                        }
                    return i
                }
            };
            f.extend = F(f.allKeys), f.extendOwn = f.assign = F(f.keys), f.findKey = function(t, e, i) {
                e = v(e, i);
                for (var n, o = f.keys(t), r = 0, s = o.length; r < s; r++)
                    if (n = o[r], e(t[n], n, t)) return n
            };
            var O = function(t, e, i) {
                return e in i
            };
            f.pick = y(function(t, e) {
                var i = {},
                    n = e[0];
                if (null == t) return i;
                f.isFunction(n) ? (e.length > 1 && (n = m(n, e[1])), e = f.allKeys(t)) : (n = O, e = k(e, !1, !1), t = Object(t));
                for (var o = 0, r = e.length; o < r; o++) {
                    var s = e[o],
                        a = t[s];
                    n(a, s, t) && (i[s] = a)
                }
                return i
            }), f.omit = y(function(t, e) {
                var i, n = e[0];
                return f.isFunction(n) ? (n = f.negate(n), e.length > 1 && (i = e[1])) : (e = f.map(k(e, !1, !1), String), n = function(t, i) {
                    return !f.contains(e, i)
                }), f.pick(t, n, i)
            }), f.defaults = F(f.allKeys, !0), f.create = function(t, e) {
                var i = b(t);
                return e && f.extendOwn(i, e), i
            }, f.clone = function(t) {
                return f.isObject(t) ? f.isArray(t) ? t.slice() : f.extend({}, t) : t
            }, f.tap = function(t, e) {
                return e(t), t
            }, f.isMatch = function(t, e) {
                var i = f.keys(e),
                    n = i.length;
                if (null == t) return !n;
                for (var o = Object(t), r = 0; r < n; r++) {
                    var s = i[r];
                    if (e[s] !== o[s] || !(s in o)) return !1
                }
                return !0
            };
            var N, z;
            N = function(t, e, i, n) {
                if (t === e) return 0 !== t || 1 / t === 1 / e;
                if (null == t || null == e) return t === e;
                if (t !== t) return e !== e;
                var o = typeof t;
                return ("function" === o || "object" === o || "object" == typeof e) && z(t, e, i, n)
            }, z = function(t, e, i, n) {
                t instanceof f && (t = t._wrapped), e instanceof f && (e = e._wrapped);
                var o = l.call(t);
                if (o !== l.call(e)) return !1;
                switch (o) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t === +e;
                    case "[object Symbol]":
                        return r.valueOf.call(t) === r.valueOf.call(e)
                }
                var s = "[object Array]" === o;
                if (!s) {
                    if ("object" != typeof t || "object" != typeof e) return !1;
                    var a = t.constructor,
                        h = e.constructor;
                    if (a !== h && !(f.isFunction(a) && a instanceof a && f.isFunction(h) && h instanceof h) && "constructor" in t && "constructor" in e) return !1
                }
                i = i || [], n = n || [];
                for (var c = i.length; c--;)
                    if (i[c] === t) return n[c] === e;
                if (i.push(t), n.push(e), s) {
                    if (c = t.length, c !== e.length) return !1;
                    for (; c--;)
                        if (!N(t[c], e[c], i, n)) return !1
                } else {
                    var u, d = f.keys(t);
                    if (c = d.length, f.keys(e).length !== c) return !1;
                    for (; c--;)
                        if (u = d[c], !f.has(e, u) || !N(t[u], e[u], i, n)) return !1
                }
                return i.pop(), n.pop(), !0
            }, f.isEqual = function(t, e) {
                return N(t, e)
            }, f.isEmpty = function(t) {
                return null == t || (x(t) && (f.isArray(t) || f.isString(t) || f.isArguments(t)) ? 0 === t.length : 0 === f.keys(t).length)
            }, f.isElement = function(t) {
                return !(!t || 1 !== t.nodeType)
            }, f.isArray = c || function(t) {
                return "[object Array]" === l.call(t)
            }, f.isObject = function(t) {
                var e = typeof t;
                return "function" === e || "object" === e && !!t
            }, f.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function(t) {
                f["is" + t] = function(e) {
                    return l.call(e) === "[object " + t + "]"
                }
            }), f.isArguments(arguments) || (f.isArguments = function(t) {
                return f.has(t, "callee")
            });
            var R = e.document && e.document.childNodes;
            "function" != typeof / . / && "object" != typeof Int8Array && "function" != typeof R && (f.isFunction = function(t) {
                return "function" == typeof t || !1
            }), f.isFinite = function(t) {
                return !f.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t))
            }, f.isNaN = function(t) {
                return f.isNumber(t) && isNaN(t)
            }, f.isBoolean = function(t) {
                return t === !0 || t === !1 || "[object Boolean]" === l.call(t)
            }, f.isNull = function(t) {
                return null === t
            }, f.isUndefined = function(t) {
                return void 0 === t
            }, f.has = function(t, e) {
                return null != t && h.call(t, e)
            }, f.noConflict = function() {
                return e._ = i, this
            }, f.identity = function(t) {
                return t
            }, f.constant = function(t) {
                return function() {
                    return t
                }
            }, f.noop = function() {}, f.property = w, f.propertyOf = function(t) {
                return null == t ? function() {} : function(e) {
                    return t[e]
                }
            }, f.matcher = f.matches = function(t) {
                return t = f.extendOwn({}, t),
                    function(e) {
                        return f.isMatch(e, t)
                    }
            }, f.times = function(t, e, i) {
                var n = Array(Math.max(0, t));
                e = m(e, i, 1);
                for (var o = 0; o < t; o++) n[o] = e(o);
                return n
            }, f.random = function(t, e) {
                return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
            }, f.now = Date.now || function() {
                return (new Date).getTime()
            };
            var D = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                W = f.invert(D),
                q = function(t) {
                    var e = function(e) {
                            return t[e]
                        },
                        i = "(?:" + f.keys(t).join("|") + ")",
                        n = RegExp(i),
                        o = RegExp(i, "g");
                    return function(t) {
                        return t = null == t ? "" : "" + t, n.test(t) ? t.replace(o, e) : t
                    }
                };
            f.escape = q(D), f.unescape = q(W), f.result = function(t, e, i) {
                var n = null == t ? void 0 : t[e];
                return void 0 === n && (n = i), f.isFunction(n) ? n.call(t) : n
            };
            var H = 0;
            f.uniqueId = function(t) {
                var e = ++H + "";
                return t ? t + e : e
            }, f.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/,
                U = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                V = /\\|'|\r|\n|\u2028|\u2029/g,
                X = function(t) {
                    return "\\" + U[t]
                };
            f.template = function(t, e, i) {
                !e && i && (e = i), e = f.defaults({}, e, f.templateSettings);
                var n = RegExp([(e.escape || j).source, (e.interpolate || j).source, (e.evaluate || j).source].join("|") + "|$", "g"),
                    o = 0,
                    r = "__p+='";
                t.replace(n, function(e, i, n, s, a) {
                    return r += t.slice(o, a).replace(V, X), o = a + e.length, i ? r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : s && (r += "';\n" + s + "\n__p+='"), e
                }), r += "';\n", e.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
                var s;
                try {
                    s = new Function(e.variable || "obj", "_", r)
                } catch (a) {
                    throw a.source = r, a
                }
                var l = function(t) {
                        return s.call(this, t, f)
                    },
                    h = e.variable || "obj";
                return l.source = "function(" + h + "){\n" + r + "}", l
            }, f.chain = function(t) {
                var e = f(t);
                return e._chain = !0, e
            };
            var Y = function(t, e) {
                return t._chain ? f(e).chain() : e
            };
            f.mixin = function(t) {
                return f.each(f.functions(t), function(e) {
                    var i = f[e] = t[e];
                    f.prototype[e] = function() {
                        var t = [this._wrapped];
                        return s.apply(t, arguments), Y(this, i.apply(f, t))
                    }
                }), f
            }, f.mixin(f), f.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                var e = n[t];
                f.prototype[t] = function() {
                    var i = this._wrapped;
                    return e.apply(i, arguments),
                        "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0], Y(this, i)
                }
            }), f.each(["concat", "join", "slice"], function(t) {
                var e = n[t];
                f.prototype[t] = function() {
                    return Y(this, e.apply(this._wrapped, arguments))
                }
            }), f.prototype.value = function() {
                return this._wrapped
            }, f.prototype.valueOf = f.prototype.toJSON = f.prototype.value, f.prototype.toString = function() {
                return String(this._wrapped)
            }, "function" == typeof define && define.amd && define("underscore", [], function() {
                return f
            })
        }()
    }(this.FBPublication),
    function(t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            var e;
            e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t()
        }
    }(function() {
        var t;
        return function e(t, i, n) {
            function o(s, a) {
                if (!i[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(s, !0);
                        if (r) return r(s, !0);
                        var h = new Error("Cannot find module '" + s + "'");
                        throw h.code = "MODULE_NOT_FOUND", h
                    }
                    var c = i[s] = {
                        exports: {}
                    };
                    t[s][0].call(c.exports, function(e) {
                        var i = t[s][1][e];
                        return o(i ? i : e)
                    }, c, c.exports, e, t, i, n)
                }
                return i[s].exports
            }
            for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
            return o
        }({
            1: [function(t, e, i) {
                var n = t("matches-selector");
                e.exports = function(t, e, i) {
                    for (var o = i ? t : t.parentNode; o && o !== document;) {
                        if (n(o, e)) return o;
                        o = o.parentNode
                    }
                }
            }, {
                "matches-selector": 5
            }],
            2: [function(t, e, i) {
                function n(t, e, i, n, r) {
                    var s = o.apply(this, arguments);
                    return t.addEventListener(i, s, r), {
                        destroy: function() {
                            t.removeEventListener(i, s, r)
                        }
                    }
                }

                function o(t, e, i, n) {
                    return function(i) {
                        i.delegateTarget = r(i.target, e, !0), i.delegateTarget && n.call(t, i)
                    }
                }
                var r = t("closest");
                e.exports = n
            }, {
                closest: 1
            }],
            3: [function(t, e, i) {
                i.node = function(t) {
                    return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                }, i.nodeList = function(t) {
                    var e = Object.prototype.toString.call(t);
                    return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || i.node(t[0]))
                }, i.string = function(t) {
                    return "string" == typeof t || t instanceof String
                }, i.fn = function(t) {
                    var e = Object.prototype.toString.call(t);
                    return "[object Function]" === e
                }
            }, {}],
            4: [function(t, e, i) {
                function n(t, e, i) {
                    if (!t && !e && !i) throw new Error("Missing required arguments");
                    if (!a.string(e)) throw new TypeError("Second argument must be a String");
                    if (!a.fn(i)) throw new TypeError("Third argument must be a Function");
                    if (a.node(t)) return o(t, e, i);
                    if (a.nodeList(t)) return r(t, e, i);
                    if (a.string(t)) return s(t, e, i);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }

                function o(t, e, i) {
                    return t.addEventListener(e, i), {
                        destroy: function() {
                            t.removeEventListener(e, i)
                        }
                    }
                }

                function r(t, e, i) {
                    return Array.prototype.forEach.call(t, function(t) {
                        t.addEventListener(e, i)
                    }), {
                        destroy: function() {
                            Array.prototype.forEach.call(t, function(t) {
                                t.removeEventListener(e, i)
                            })
                        }
                    }
                }

                function s(t, e, i) {
                    return l(document.body, t, e, i)
                }
                var a = t("./is"),
                    l = t("delegate");
                e.exports = n
            }, {
                "./is": 3,
                delegate: 2
            }],
            5: [function(t, e, i) {
                function n(t, e) {
                    if (r) return r.call(t, e);
                    for (var i = t.parentNode.querySelectorAll(e), n = 0; n < i.length; ++n)
                        if (i[n] == t) return !0;
                    return !1
                }
                var o = Element.prototype,
                    r = o.matchesSelector || o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector;
                e.exports = n
            }, {}],
            6: [function(t, e, i) {
                function n(t) {
                    var e;
                    if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) t.focus(), t.setSelectionRange(0, t.value.length), e = t.value;
                    else {
                        t.hasAttribute("contenteditable") && t.focus();
                        var i = window.getSelection(),
                            n = document.createRange();
                        n.selectNodeContents(t), i.removeAllRanges(), i.addRange(n), e = i.toString()
                    }
                    return e
                }
                e.exports = n
            }, {}],
            7: [function(t, e, i) {
                function n() {}
                n.prototype = {
                    on: function(t, e, i) {
                        var n = this.e || (this.e = {});
                        return (n[t] || (n[t] = [])).push({
                            fn: e,
                            ctx: i
                        }), this
                    },
                    once: function(t, e, i) {
                        function n() {
                            o.off(t, n), e.apply(i, arguments)
                        }
                        var o = this;
                        return n._ = e, this.on(t, n, i)
                    },
                    emit: function(t) {
                        var e = [].slice.call(arguments, 1),
                            i = ((this.e || (this.e = {}))[t] || []).slice(),
                            n = 0,
                            o = i.length;
                        for (n; n < o; n++) i[n].fn.apply(i[n].ctx, e);
                        return this
                    },
                    off: function(t, e) {
                        var i = this.e || (this.e = {}),
                            n = i[t],
                            o = [];
                        if (n && e)
                            for (var r = 0, s = n.length; r < s; r++) n[r].fn !== e && n[r].fn._ !== e && o.push(n[r]);
                        return o.length ? i[t] = o : delete i[t], this
                    }
                }, e.exports = n
            }, {}],
            8: [function(e, i, n) {
                ! function(o, r) {
                    if ("function" == typeof t && t.amd) t(["module", "select"], r);
                    else if ("undefined" != typeof n) r(i, e("select"));
                    else {
                        var s = {
                            exports: {}
                        };
                        r(s, o.select), o.clipboardAction = s.exports
                    }
                }(this, function(t, e) {
                    "use strict";

                    function i(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var o = i(e),
                        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                        },
                        s = function() {
                            function t(t, e) {
                                for (var i = 0; i < e.length; i++) {
                                    var n = e[i];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }
                            return function(e, i, n) {
                                return i && t(e.prototype, i), n && t(e, n), e
                            }
                        }(),
                        a = function() {
                            function t(e) {
                                n(this, t), this.resolveOptions(e), this.initSelection()
                            }
                            return t.prototype.resolveOptions = function() {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                this.action = t.action, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                            }, t.prototype.initSelection = function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }, t.prototype.selectFake = function() {
                                var t = this,
                                    e = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return t.removeFake()
                                }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, o["default"])(this.fakeElem), this.copyText()
                            }, t.prototype.removeFake = function() {
                                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }, t.prototype.selectTarget = function() {
                                this.selectedText = (0, o["default"])(this.target), this.copyText()
                            }, t.prototype.copyText = function() {
                                var t = void 0;
                                try {
                                    t = document.execCommand(this.action)
                                } catch (e) {
                                    t = !1
                                }
                                this.handleResult(t)
                            }, t.prototype.handleResult = function(t) {
                                t ? this.emitter.emit("success", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                }) : this.emitter.emit("error", {
                                    action: this.action,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }, t.prototype.clearSelection = function() {
                                this.target && this.target.blur(), window.getSelection().removeAllRanges()
                            }, t.prototype.destroy = function() {
                                this.removeFake()
                            }, s(t, [{
                                key: "action",
                                set: function() {
                                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                                    if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                                },
                                get: function() {
                                    return this._action
                                }
                            }, {
                                key: "target",
                                set: function(t) {
                                    if (void 0 !== t) {
                                        if (!t || "object" !== ("undefined" == typeof t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                        if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                        this._target = t
                                    }
                                },
                                get: function() {
                                    return this._target
                                }
                            }]), t
                        }();
                    t.exports = a
                })
            }, {
                select: 6
            }],
            9: [function(e, i, n) {
                ! function(o, r) {
                    if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
                    else if ("undefined" != typeof n) r(i, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                    else {
                        var s = {
                            exports: {}
                        };
                        r(s, o.clipboardAction, o.tinyEmitter, o.goodListener), o.clipboard = s.exports
                    }
                }(this, function(t, e, i, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function s(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function l(t, e) {
                        var i = "data-clipboard-" + t;
                        if (e.hasAttribute(i)) return e.getAttribute(i)
                    }
                    var h = o(e),
                        c = o(i),
                        u = o(n),
                        d = function(t) {
                            function e(i, n) {
                                r(this, e);
                                var o = s(this, t.call(this));
                                return o.resolveOptions(n), o.listenClick(i), o
                            }
                            return a(e, t), e.prototype.resolveOptions = function() {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText
                            }, e.prototype.listenClick = function(t) {
                                var e = this;
                                this.listener = (0, u["default"])(t, "click", function(t) {
                                    return e.onClick(t)
                                })
                            }, e.prototype.onClick = function(t) {
                                var e = t.delegateTarget || t.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new h["default"]({
                                    action: this.action(e),
                                    target: this.target(e),
                                    text: this.text(e),
                                    trigger: e,
                                    emitter: this
                                })
                            }, e.prototype.defaultAction = function(t) {
                                return l("action", t)
                            }, e.prototype.defaultTarget = function(t) {
                                var e = l("target", t);
                                if (e) return document.querySelector(e)
                            }, e.prototype.defaultText = function(t) {
                                return l("text", t)
                            }, e.prototype.destroy = function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }, e
                        }(c["default"]);
                    t.exports = d
                })
            }, {
                "./clipboard-action": 8,
                "good-listener": 4,
                "tiny-emitter": 7
            }]
        }, {}, [9])(9)
    }),
    function() {
        function t(t) {
            var e = t.__resizeTriggers__,
                i = e.firstElementChild,
                n = e.lastElementChild,
                o = i.firstElementChild;
            n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, o.style.width = i.offsetWidth + 1 + "px", o.style.height = i.offsetHeight + 1 + "px", i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight
        }

        function e(t) {
            return t.offsetWidth != t.__resizeLast__.width || t.offsetHeight != t.__resizeLast__.height
        }

        function i(i) {
            var n = this;
            t(this), this.__resizeRAF__ && a(this.__resizeRAF__), this.__resizeRAF__ = s(function() {
                e(n) && (n.__resizeLast__.width = n.offsetWidth, n.__resizeLast__.height = n.offsetHeight, n.__resizeListeners__.forEach(function(t) {
                    t.call(n, i)
                }))
            })
        }

        function n() {
            if (!r) {
                var t = (y ? y : "") + ".resize-triggers { " + (b ? b : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                    e = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("style");
                i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t)), e.appendChild(i), r = !0
            }
        }
        var o = document.attachEvent,
            r = !1;
        if (!o) {
            var s = function() {
                    var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                        return window.setTimeout(t, 20)
                    };
                    return function(e) {
                        return t(e)
                    }
                }(),
                a = function() {
                    var t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
                    return function(e) {
                        return t(e)
                    }
                }(),
                l = !1,
                h = "animation",
                c = "",
                u = "animationstart",
                d = "Webkit Moz O ms".split(" "),
                p = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
                f = "",
                g = document.createElement("fakeelement");
            if (void 0 !== g.style.animationName && (l = !0), l === !1)
                for (var m = 0; m < d.length; m++)
                    if (void 0 !== g.style[d[m] + "AnimationName"]) {
                        f = d[m], h = f + "Animation", c = "-" + f.toLowerCase() + "-", u = p[m], l = !0;
                        break
                    }
            var v = "resizeanim",
                y = "@" + c + "keyframes " + v + " { from { opacity: 0; } to { opacity: 0; } } ",
                b = c + "animation: 1ms " + v + "; "
        }
        window.addResizeListener = function(e, r) {
            o ? e.attachEvent("onresize", r) : (e.__resizeTriggers__ || ("static" == getComputedStyle(e).position && (e.style.position = "relative"), n(), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", e.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', e.appendChild(e.__resizeTriggers__), t(e), e.addEventListener("scroll", i, !0), u && e.__resizeTriggers__.addEventListener(u, function(i) {
                i.animationName == v && t(e)
            })), e.__resizeListeners__.push(r))
        }, window.removeResizeListener = function(t, e) {
            o ? t.detachEvent("onresize", e) : (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e), 1), t.__resizeListeners__.length || (t.removeEventListener("scroll", i), t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__)))
        }
    }(),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("underscore/underscore-min")._;
            t(global, exports, i)
        } else t(e, e, e._)
    }(function(t, e, i) {
        "use strict";

        function n(t) {
            this._cls = t, this._pool = []
        }
        n.prototype.constructor = n, n.prototype.get = function() {
            return 0 === this._pool.length && this._pool.push(new this._cls), this._pool.pop()
        }, n.prototype.free = function(t) {
            i.isFunction(t.destructor) && t.destructor(), this._pool.push(t)
        }, e.Pool = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i)
        } else e.fbUtils = t(window, {}, e._)
    }(function(t, e, i) {
        "use strict";

        function n() {
            return t.XDomainRequest && !/MSIE 1/.test(t.navigator.userAgent) ? new t.XDomainRequest : t.XMLHttpRequest ? new t.XMLHttpRequest : void 0
        }

        function o(t) {
            return t instanceof Date || t instanceof RegExp
        }

        function r(t) {
            if (t instanceof Date) return new Date(t.getTime());
            if (t instanceof RegExp) return new RegExp(t);
            throw new Error("Unexpected situation")
        }

        function s(t) {
            var i = [];
            return t.forEach(function(t, n) {
                "object" == typeof t && null !== t ? Array.isArray(t) ? i[n] = s(t) : o(t) ? i[n] = r(t) : i[n] = e.deepExtend({}, t) : i[n] = t
            }), i
        }
        e.SPLITTERS = [",", ";", ".", " ", "?", "!", "'", '"', "", String.fromCharCode(10), String.fromCharCode(13), String.fromCharCode(8211), String.fromCharCode(8212), String.fromCharCode(8722), String.fromCharCode(8209), String.fromCharCode(8208)], e.getNum = function(t) {
            return ("000" + t).slice(-Math.max((t + "").length, 4))
        }, e.mergeObjects = function(t, e) {
            var i = {};
            for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
            for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
            return i
        }, e.getPixelRatio = function() {
            return "undefined" == typeof t.devicePixelRatio ? 1 : t.devicePixelRatio > 1.3 ? 2 : 1
        }, e.split = function(t, e) {
            for (var i = t.split(" "), n = [], o = 0; o < i.length; o++) i[o].length >= e && n.push(i[o]);
            return n
        }, e.isSplitter = function(t) {
            for (var e = 0; e < this.SPLITTERS.length; e++)
                if (t === this.SPLITTERS[e]) return !0;
            return !1
        }, e.screening = function(t) {
            var e = /</gi,
                i = function() {
                    return "&lt;"
                };
            return t.replace(e, i)
        }, e.chunk = function(t, e) {
            "undefined" == typeof e && (e = 2);
            var i = t.match(new RegExp(".{1," + e + "}", "g"));
            return i || []
        }, e.parseQuery = function() {
            var t = {};
            if (!i.isUndefined(window) && !i.isUndefined(window.location) && !i.isUndefined(window.location.search)) {
                var e = window.location.search.replace("?", "");
                if (e.length)
                    for (var n = e.split("&"), o = 0; o < n.length; o++) {
                        var r = n[o].split("=");
                        t[decodeURIComponent(r[0])] = r.length > 1 ? decodeURIComponent(r[1]) : null
                    }
            }
            return t
        }, e.fitScreenSizes = function(e, i, n, o) {
            var r = n || t.innerWidth,
                s = o || t.innerHeight,
                a = r / s,
                l = e / i,
                h = a > l ? e * s / i : r,
                c = a > l ? s : i * r / e;
            return {
                width: h,
                height: c,
                paddingTop: (s - c) / 2,
                paddingLeft: (r - h) / 2
            }
        }, e.fillScreenSizes = function(e, i, n, o) {
            var r = n || t.innerWidth,
                s = o || t.innerHeight,
                a = r / s,
                l = e / i,
                h = a > l ? r : e * s / i,
                c = a > l ? i * r / e : s;
            return {
                width: h,
                height: c,
                paddingTop: (s - c) / 2,
                paddingLeft: (r - h) / 2
            }
        }, e._loadExternalUrl = function(t, e, i) {
            e = e || function() {}, i = i || function() {};
            var o = n();
            o.open("GET", t, !0), o.onerror = function() {
                console.error("Error loading " + t), i(o.status)
            }, o.onreadystatechange = function() {
                4 === o.readyState && (200 === o.status ? e(o) : i(o.status))
            }, o.send(null)
        }, e.loadText = function(t, i, n) {
            i = i || function() {}, n = n || function() {}, e._loadExternalUrl(t, function(t) {
                i(t.responseText)
            }, function(t) {
                n(t)
            })
        }, e.loadJSON = function(t, i, n) {
            i = i || function() {}, n = n || function() {}, e.loadText(t, function(t) {
                i(JSON.parse(t))
            }, function(t) {
                n(t)
            })
        }, e.loadXML = function(t, i, n) {
            i = i || function() {}, n = n || function() {}, e._loadExternalUrl(t, function(t) {
                i(t.response)
            }, n)
        }, e.loadScript = function(e, i) {
            i = i || function() {};
            var n = t.document.getElementsByTagName("head")[0],
                o = t.document.createElement("script");
            o.type = "text/javascript", o.src = e, n.appendChild(o), o.readyState ? o.onreadystatechange = function() {
                "loaded" !== o.readyState && "complete" !== o.readyState || (o.onreadystatechange = null, i())
            } : o.onload = function() {
                i()
            }
        }, e.loadCSS = function(e, n, o) {
            var r = t.document.styleSheets.length,
                s = function(e) {
                    var n = t.document.getElementsByTagName("head")[0],
                        s = t.document.createElement("link");
                    s.href = e, s.type = "text/css", s.rel = "stylesheet", i.isString(o) && (s.id = o), o && document.getElementById(o) ? (n.replaceChild(s, document.getElementById(o)), r--) : n.appendChild(s)
                },
                a = function(e) {
                    return i.filter(t.document.styleSheets, function(t) {
                        return i.isString(t.href) && t.href.indexOf(e) >= 0
                    }).length > 0
                };
            i.isFunction(n) && ! function() {
                var i = setInterval(function() {
                    r < t.document.styleSheets.length && a(e) && (n.call(), clearInterval(i))
                }, 20)
            }(), s(e)
        }, e.romanize = function(t) {
            var e = "",
                n = {
                    M: 1e3,
                    CM: 900,
                    D: 500,
                    CD: 400,
                    C: 100,
                    XC: 90,
                    L: 50,
                    XL: 40,
                    X: 10,
                    IX: 9,
                    V: 5,
                    IV: 4,
                    I: 1
                },
                o = parseInt(t, 10);
            if (!(i.isNaN(o) || o <= 0)) {
                var r;
                for (r in n)
                    if (i.has(n, r))
                        for (; o >= n[r];) e += r, o -= n[r];
                return e
            }
        }, e.deromanize = function(t) {
            var e, t = t.toUpperCase(),
                i = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
                n = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
                o = {
                    M: 1e3,
                    CM: 900,
                    D: 500,
                    CD: 400,
                    C: 100,
                    XC: 90,
                    L: 50,
                    XL: 40,
                    X: 10,
                    IX: 9,
                    V: 5,
                    IV: 4,
                    I: 1
                },
                r = 0;
            if (t && i.test(t)) {
                for (e = n.exec(t); e;) r += o[e[0]], e = n.exec(t);
                return r
            }
        }, e.decodeEntities = function(t) {
            var e = document.createElement("textarea");
            return e.innerHTML = t, e.value
        }, e.cleanString = function(e) {
            var i = t.document.createElement("div");
            return i.appendChild(t.document.createTextNode(e)), i.innerHTML
        }, e.isRoman = function(t) {
            var e = t.toUpperCase(),
                i = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
            return e && i.test(e)
        }, e.renderTemplate = function(e, i, n) {
            n = n || {};
            var o = t.document.createElement("div");
            for (o.innerHTML = i(n); o.firstChild;) e.appendChild(o.firstChild)
        }, e.onWheel = function(t, e) {
            t.addEventListener ? "onwheel" in document ? t.addEventListener("wheel", e) : "onmousewheel" in document ? t.addEventListener("mousewheel", e) : t.addEventListener("MozMousePixelScroll", e) : t.attachEvent("onmousewheel", e)
        }, e.removeOnWheel = function(t, e) {
            t.removeEventListener ? "onwheel" in document ? t.removeEventListener("wheel", e) : "onmousewheel" in document ? t.removeEventListener("mousewheel", e) : t.removeEventListener("MozMousePixelScroll", e) : t.detachEvent("onmousewheel", e)
        };
        var a = 10,
            l = 40,
            h = 800;
        return e.normalizeWheel = function(t) {
            var e = 0,
                i = 0,
                n = 0,
                o = 0;
            return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = e * a, o = i * a, "deltaY" in t && (o = t.deltaY), "deltaX" in t && (n = t.deltaX), (n || o) && t.deltaMode && (1 === t.deltaMode ? (n *= l, o *= l) : (n *= h, o *= h)), n && !e && (e = n < 1 ? -1 : 1), o && !i && (i = o < 1 ? -1 : 1), {
                spinX: e,
                spinY: i,
                pixelX: n,
                pixelY: o
            }
        }, e.fitRectIntoBounds = function(t, e) {
            var i = t.width / t.height,
                n = e.width / e.height,
                o = {};
            return i > n ? (o.width = e.width, o.height = t.height * (e.width / t.width)) : (o.width = t.width * (e.height / t.height), o.height = e.height), o
        }, e.combinePath = function() {
            var t = i.without(Array.prototype.slice.call(arguments), "");
            return 1 === t.length ? t[0] : i.map(t, function(t, e, i) {
                switch (e) {
                    case 0:
                        return t.replace(/(\/$)/, "");
                    case i.length - 1:
                        return t.replace(/(^\/)/, "");
                    default:
                        return t.replace(/(^\/|\/$)/, "")
                }
            }).join("/")
        }, e.addListener = function(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i) : t.attachEvent && t.attachEvent("on" + e, i)
        }, e.deepExtend = function() {
            if (arguments.length < 1 || "object" != typeof arguments[0]) return !1;
            if (arguments.length < 2) return arguments[0];
            var t, i, n = arguments[0],
                a = Array.prototype.slice.call(arguments, 1);
            return a.forEach(function(a) {
                "object" != typeof a || Array.isArray(a) || Object.keys(a).forEach(function(l) {
                    return i = n[l], t = a[l], t === n ? void 0 : "object" != typeof t || null === t ? void(n[l] = t) : Array.isArray(t) ? void(n[l] = s(t)) : o(t) ? void(n[l] = r(t)) : "object" != typeof i || null === i || Array.isArray(i) ? void(n[l] = e.deepExtend({}, t)) : void(n[l] = e.deepExtend(i, t))
                })
            }), n
        }, e
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i)
        } else e.el = t(window, {}, e._)
    }(function(t, e, i) {
        "use strict";
        return e.canvas = {}, e.cTest = !1, e.id = function(e) {
            return t.document.getElementById(e)
        }, e.tag = function(t, i) {
            return e.tags(t, i)[0]
        }, e.className = function(e, n) {
            return n = i.isElement(n) ? n : t.document, n.getElementsByClassName(e)
        }, e.tags = function(e, n) {
            return n = i.isElement(n) ? n : t.document, n.getElementsByTagName(e)
        }, e.add = function(e) {
            return t.document.createElement(e)
        }, e.css = function(t, e) {
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var n = i.replace(/-(.)/g, function(t, e) {
                        return e.toUpperCase()
                    });
                    n = "float" === n ? "cssFloat" : n, t.style[n] = e[i]
                }
        }, e.del = function(t) {
            try {
                return i.isString(t) ? null !== document.getElementById(t) && e.id(t).parentNode.removeChild(e.id(t)) : t.parentNode.removeChild(t), !0
            } catch (n) {
                console.log(n)
            }
            return !1
        }, e.addClass = function(t, n) {
            if (t) {
                i.isString(t) && (t = e.id(t));
                var o = t.getAttribute("class");
                null === o || "undefined" == typeof o ? t.setAttribute("class", n) : o.indexOf(n) < 0 && t.setAttribute("class", o + " " + n)
            }
        }, e.hasClass = function(t, n) {
            if (t) {
                i.isString(t) && (t = e.id(t));
                for (var o = t.className.split(" "), r = 0; r < o.length; r++)
                    if (o[r] === n) return !0;
                return !1
            }
        }, e.removeClass = function(t, n) {
            if (t) {
                i.isString(t) && (t = e.id(t));
                var o = new RegExp(n, "g"),
                    r = t.getAttribute("class");
                i.isNull(r) || t.setAttribute("class", r.replace(o, "").trim())
            }
        }, e.createElement = function(t, e, n, o, r) {
            n = n || -1;
            var s = document.createElement(t);
            for (var a in e) e.hasOwnProperty(a) && ("styles" !== a ? s.setAttribute(a, e[a]) : this.css(s, e.styles));
            if ("top" === o) n !== -1 && (i.isString(n) ? document.getElementById(n).insertBefore(s, document.getElementById(n).firstChild) : n.insertBefore(s, n.firstChild));
            else if ("after" === o) {
                var l = r.nextSibling,
                    h = r.parentNode;
                l ? h.insertBefore(s, l) : h.appendChild(s)
            } else if ("before" === o) {
                var c = r.previousSibling,
                    h = r.parentNode;
                c ? h.insertBefore(s, r) : h.appendChild(s)
            } else n !== -1 && (i.isString(n) ? document.getElementById(n).appendChild(s) : n.appendChild(s));
            return s
        }, e.setText = function(t, e) {
            t["innerText" in t ? "innerText" : "textContent"] = e
        }, e.clear = function(t) {
            i.isString(t) && (t = t.id(t)), t.innerHTML = ""
        }, e
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i)
        } else t(window, e, e._)
    }(function(t, e, i) {
        "use strict";

        function n() {}
        var o, r, s = Array.prototype.slice;
        n.prototype.on = function(t, e, i) {
            if (!o(this, "on", t, [e, i]) || !e) return this;
            this._events = this._events || {};
            var n = this._events[t] || (this._events[t] = []);
            return n.push({
                callback: e,
                context: i,
                ctx: i || this
            }), this
        }, n.prototype.once = function(t, e, n) {
            if (!o(this, "once", t, [e, n]) || !e) return this;
            var r = this,
                s = i.once(function() {
                    r.off(t, s), e.apply(this, arguments)
                });
            return s._callback = e, this.on(t, s, n)
        }, n.prototype.destructor = function() {
            var t, e, n;
            n = i.keys(this._events);
            for (var o = 0, r = n.length; o < r; o++) {
                var s = n[o];
                if (e = this._events[s]) {
                    for (var a = 0, l = e.length; a < l; a++) t = e[a], delete t.callback, delete t.context;
                    delete this._events[s]
                }
            }
        }, n.prototype.off = function(t, e, n) {
            var r, s, a, l;
            if (!this._events || !o(this, "off", t, [e, n])) return this;
            if (!t && !e && !n) return this._events = {}, this;
            l = t ? [t] : i.keys(this._events);
            for (var h = 0, c = l.length; h < c; h++)
                if (t = l[h], a = this._events[t]) {
                    if (this._events[t] = r = [], e || n)
                        for (var u = 0, d = a.length; u < d; u++) s = a[u], (e && e !== s.callback && e !== s.callback._callback || n && n !== s.context) && r.push(s);
                    r.length || delete this._events[t]
                }
            return this
        }, n.prototype.trigger = function(t) {
            if (!this._events) return this;
            var e = s.call(arguments, 1);
            if (!o(this, "trigger", t, e)) return this;
            var i = this._events[t],
                n = this._events.all;
            return i && r(i, e), n && r(n, arguments), this
        }, n.prototype.stopListening = function(t, e, i) {
            var n = this._listeners;
            if (!n) return this;
            var o = !e && !i;
            "object" == typeof e && (i = this), t && ((n = {})[t._listenerId] = t);
            for (var r in n) n.hasOwnProperty(r) && (n[r].off(e, i, this), o && delete this._listeners[r]);
            return this
        }, n.prototype.set = function(t, e, n) {
            var o = this,
                r = t,
                s = r.split(".");
            if (s.length > 1) {
                for (var a = 0; a < s.length - 1; a++)
                    if (o = o[s[a]], i.isUndefined(o)) return console.error("Property does not have", s[a]), this;
                r = s[s.length - 1]
            }
            if (o[r] === e) return this;
            var l = o[r];
            o[r] = e;
            var h = function(i) {
                i.trigger("change:" + t, e, l, this)
            };
            if (i.isUndefined(n) ? (h(this), l = null) : i.defer(i.bind(function() {
                    h(this), l = null
                }, this)), s.length > 1) {
                var c = function(t) {
                    var e = s[0],
                        i = t[s[0]];
                    t.trigger("change:" + e, i, null, this);
                    for (var n = 1; n < s.length - 1; n++) e += "." + s[n], i = i[s[n]], t.trigger("change:" + e, i, null, this)
                };
                i.isUndefined(n) ? c(this) : i.defer(i.bind(function() {
                    c(this)
                }, this))
            }
            return this
        };
        var a = /\s+/;
        o = function(t, e, i, n) {
            if (!i) return !0;
            if ("object" == typeof i) {
                for (var o in i) i.hasOwnProperty(o) && t[e].apply(t, [o, i[o]].concat(n));
                return !1
            }
            if (a.test(i)) {
                for (var r = i.split(a), s = 0, l = r.length; s < l; s++) t[e].apply(t, [r[s]].concat(n));
                return !1
            }
            return !0
        }, r = function(t, e) {
            var i, n = -1,
                o = t.length,
                r = e[0],
                s = e[1],
                a = e[2];
            switch (e.length) {
                case 0:
                    for (; ++n < o;)(i = t[n]).callback.call(i.ctx);
                    return;
                case 1:
                    for (; ++n < o;)(i = t[n]).callback.call(i.ctx, r);
                    return;
                case 2:
                    for (; ++n < o;)(i = t[n]).callback.call(i.ctx, r, s);
                    return;
                case 3:
                    for (; ++n < o;)(i = t[n]).callback.call(i.ctx, r, s, a);
                    return;
                default:
                    for (; ++n < o;)(i = t[n]).callback.apply(i.ctx, e)
            }
        };
        var l = {
            listenTo: "on",
            listenToOnce: "once"
        };
        i.each(l, function(t, e) {
            n.prototype[e] = function(e, n, o) {
                var r = this._listeners || (this._listeners = {}),
                    s = e._listenerId || (e._listenerId = i.uniqueId("l"));
                return r[s] = e, "object" == typeof n && (o = this), e[t](n, o, this), this
            }
        }), n.prototype.bind = n.prototype.on, n.prototype.unbind = n.prototype.off, e.Events = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("underscore/underscore-min")._,
                n = require("fb-html5/common/events").Events,
                o = require("fb-html5/common/fb-utils");
            t(global, exports, i, n, o)
        } else t(e, e, e._, e.Events, e.fbUtils)
    }(function(t, e, i, n, o) {
        "use strict";

        function r(t, e) {
            this._defaultObject = e, this._construct(t)
        }
        r.prototype = new n, r.prototype.constructor = r, r.prototype.cast = function(t) {
            function e(t, e, n, o) {
                if (o = o || 0, !(o > e.length)) {
                    for (var r = 0; r < e.length - o; r++) {
                        var s = e[r];
                        if (!i.has(t, s)) {
                            if (!n) return;
                            t[s] = {}
                        }
                        t = t[s]
                    }
                    return t
                }
            }
            var n = t.split("."),
                o = e(this, n, !0),
                s = e(this._defaultObject, n, !1);
            if (o.constructor !== r) {
                var a = new r(o, s),
                    l = e(this, n, !0, 1);
                l[n[n.length - 1]] = a, this._updateInfoAboutCastedObjects(n)
            }
        }, r.prototype.set = function(t, e, o) {
            if (i.isUndefined(t) && i.isObject(e)) throw new Error("You can't set the value of properties");
            var r = t.split("."),
                s = this._getCasted(r);
            if (s)
                if (s.name) s.value.set(s.name, e, o);
                else {
                    if (!s.value || !i.isObject(e)) throw new Error("You can't set the value of properties");
                    s.value.reset(e)
                } else n.prototype.set.call(this, t, e, o)
        }, r.prototype.onAndChange = function(t, e, i) {
            this.on(t, e, i), this.trigger(t, this._get(t.split(":")[1]), void 0, i)
        }, r.prototype._construct = function(t) {
            var e = this._defaultObject ? o.deepExtend({}, this._defaultObject, t) : t;
            for (var i in e) e.hasOwnProperty(i) && "_" !== i[0] && (this[i] = e[i])
        }, r.prototype._updateInfoAboutCastedObjects = function(t) {
            i.isObject(this._infoAboutCastedObject) || (this._infoAboutCastedObject = {});
            for (var e = this._infoAboutCastedObject, n = 0; n < t.length - 1; n++) {
                var o = t[n];
                i.isObject(e[o]) || (e[o] = {}), e = e[o]
            }
            e[t[t.length - 1]] = !0
        }, r.prototype._makeNewName = function(t, e) {
            for (var i = t[e], n = e + 1; n < t.length; n++) i += "." + t[n];
            return i
        }, r.prototype._getCasted = function(t) {
            for (var e = this._infoAboutCastedObject, n = this, o = 0; o < t.length; o++) {
                if (!i.isObject(e)) {
                    if (e === !0) {
                        for (var r = t[o], s = o + 1; s < t.length; s++) r += "." + t[s];
                        return {
                            value: n,
                            name: this._makeNewName(t, o)
                        }
                    }
                    return
                }
                var a = t[o];
                e = e[a], n = n[a]
            }
            return e === !0 ? {
                value: n,
                name: this._makeNewName(t, o)
            } : void 0
        }, r.prototype.clear = function() {
            var t = this;
            Object.keys(this).forEach(function(e) {
                "_" !== e[0] && delete t[e]
            })
        }, r.prototype._get = function(t) {
            for (var e = t.split("."), n = this, o = 0; o < e.length; o++)
                if (n = n[e[o]], i.isUndefined(n)) return;
            return n
        }, r.prototype.reset = function(t) {
            if (!i.isObject(t)) throw new Error("The value for reset need to be an Object");
            var e = this._defaultObject ? o.deepExtend({}, this._defaultObject, t) : t;
            if (!i.isEmpty(this._infoAboutCastedObject)) throw new Error("You can't reset complex property");
            var n = this,
                r = function(t) {
                    for (var i = t.split("."), o = n, r = e, s = 0; s < i.length - 1; s++) {
                        var a = i[s];
                        o = o && o.hasOwnProperty(a) ? o[a] : null, r = r && r.hasOwnProperty(a) ? r[a] : null
                    }
                    var l = {};
                    return o && o.hasOwnProperty(i[i.length - 1]) && (l.oldValue = o[i[i.length - 1]]), r && r.hasOwnProperty(i[i.length - 1]) && (l.newValue = r[i[i.length - 1]]), l
                },
                s = function() {
                    var t = [];
                    return i.isEmpty(n._events) || Object.keys(n._events).forEach(function(e) {
                        if (e.startsWith("change:")) {
                            var o = n._events[e];
                            if (o)
                                for (var s in o)
                                    if (o.hasOwnProperty(s)) {
                                        var a = o[s],
                                            l = r(e.substr(7));
                                        t.push(i.extend(l, {
                                            event: a
                                        }))
                                    }
                        }
                    }), t
                },
                a = s();
            this.clear(), Object.keys(e).forEach(function(t) {
                "_" !== t[0] && (n[t] = e[t])
            }), Object.keys(a).forEach(function(t) {
                "_" !== t[0] && (n[t] = e[t]);
                var i = a[t],
                    o = i.event;
                o.callback.apply(o.context, [i.newValue, i.oldValue, o])
            })
        }, r.prototype.destructor = function() {
            function t(e, n) {
                for (var o in n)
                    if (n[o] === !0) {
                        var s = e[o];
                        i.isObject(s) && s.constructor === r && s.destructor()
                    } else t(e[o], n[o])
            }
            i.isObject(this._infoAboutCastedObject) && t(this, this._infoAboutCastedObject);
            for (var e in this) i.has(this, e) && delete this[e];
            n.prototype.destructor.call(this)
        }, r.prototype.getJSON = function(t) {
            var e = t || this,
                i = function(t, e) {
                    if ("_" !== t.substring(0, 1)) return e
                };
            return JSON.stringify(e, i)
        }, e.Property = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i)
        } else t(window, e, e._)
    }(function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {
                return e ? e : this ? (e = this, void this.setCallback(function() {})) : new t
            }
            var e;
            return t.prototype.setAdapter = function(t) {
                var e = this;
                this.adapter && (this.adapter.setCallback(null), this.adapter = null), this.adapter = t, this.adapter.setCallback(function(t) {
                    e.callback(t)
                })
            }, t.prototype.setCallback = function(t) {
                this.callback = t
            }, t.prototype.getPathInfo = function() {
                return this.adapter.getPathInfo()
            }, t.prototype.setPath = function(t) {
                this.adapter.setPath(t)
            }, t.prototype.getShareUrl = function(t) {
                return this.adapter.getShareUrl(t)
            }, t.prototype.getEmbedUrl = function(t) {
                return this.adapter.getEmbedUrl(t)
            }, t.prototype.translatePath = function(t) {
                var e = this;
                i.isString(t) && (t = [t]);
                var n = i.chain(t).flatten().map(function(t) {
                    return e.adapter.translatePath(t)
                }).value();
                return 1 === n.length ? n[0] : n
            }, t.prototype.getEmbedPrefix = function() {
                return this.adapter.getEmbedPrefix()
            }, t
        }();
        e.FBRouter = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._,
                n = require("fb-html5/common/fb-utils"),
                o = require("fb-html5/common/fb-router").FBRouter;
            t(global, exports, i, n, o)
        } else t(window, e, e._, e.fbUtils, e.FBRouter)
    }(function(t, e, i, n, o) {
        "use strict";

        function r(t, e, i, n) {
            this.id = t, this.model = e, this.defaults = i, this.bookSize = n
        }
        r.prototype.getPropertyModel = function() {
            return this.model
        }, r.prototype.getThumbnailUrl = function() {
            var t = this.id,
                e = n.getNum(t),
                i = this.getProperty("thFormat"),
                r = this.isStub();
            return r ? this._getStubPageUrl() : o().translatePath("assets/flash/pages/page" + e + "_s." + i);
        }, r.prototype.getTextLayerUrl = function(t) {
            var e = this.id,
                i = n.getNum(e),
                r = this.isStub(),
                s = this.getProperty("textLayer");
            return t = t || !1, r ? this._getStubPageUrl() : s ? o().translatePath("assets/common/pages/text/page" + i + "_" + (t ? "l1" : "c") + ".png") : null
        }, r.prototype.getSubstrateUrl = function(t) {
            var e = function(t) {
                    return i.isEmpty(t) ? "" : "." + t
                },
                r = this.id,
                s = n.getNum(r),
                a = e(this.getProperty("substrateFormat")),
                l = e(this.getProperty("substrateZoomFormat")),
                h = this.isStub();
            return h ? this._getStubPageUrl() : o().translatePath("assets/common/pages/substrates/page" + s + (t ? "_l" : "") + (t ? l : a))
        }, r.prototype._getStubPageUrl = function() {
            return o().translatePath("assets/flash/pages/pagestub.png")
        }, r.prototype.getHtmlUrl = function() {
            var t = this.id,
                e = n.getNum(t);
            return o().translatePath("assets/common/pages/html/page" + e + ".html")
        }, r.prototype.getSearchInfoUrl = function() {
            return o().translatePath("assets/flash/search/search" + n.getNum(this.id) + ".xml")
        }, r.prototype.isStub = function() {
            return Boolean(this.getProperty("stub"))
        }, r.prototype.getProperty = function(t) {
            return i.isUndefined(this.model[t]) ? this.defaults[t] : this.model[t]
        }, r.prototype.getCaption = function() {
            if (i.has(this.model, "displayName")) return this.model.displayName
        }, r.prototype.getUrlHeader = function() {
            if (i.has(this.model, "urlHeader")) return this.model.urlHeader
        }, r.prototype.getRect = function(t) {
            var e = this.getProperty("width"),
                i = this.getProperty("height"),
                o = this.bookSize.width,
                r = this.bookSize.height;
            this.getProperty("wide") && (o *= 2);
            var s, a, l = {};
            return s = n.fitScreenSizes(o, r, t.width, t.height), a = n.fitScreenSizes(e, i, s.width, s.height), l.pageWidth = s.width, l.pageHeight = s.height, l.ratio = a.width / e, l.contentWidth = a.width, l.contentHeight = a.height, l.pagePadding = [(t.height - l.pageHeight) / 2, (t.width - l.pageWidth) / 2], l.contentPadding = [(l.pageHeight - l.contentHeight) / 2, (l.pageWidth - l.contentWidth) / 2], l
        }, e.PageModel = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._,
                n = require("fb-html5/common/page-model").PageModel,
                o = require("fb-html5/common/fb-utils");
            t(global, exports, i, n, o)
        } else t(window, e, e._, e.PageModel, e.fbUtils)
    }(function(t, e, i, n, o) {
        "use strict";

        function r(t) {
            this.model = t, this.numerationOffset = t.numerationOffset
        }
        r.prototype.getPageModel = function(t) {
            if (this.hasPageWithId(t)) {
                if (i.isUndefined(this.pageModelsCache)) {
                    var e = this;
                    this.pageModelsCache = i.memoize(function(t) {
                        return e.model.cast("pages." + t), new n(t, e.model.pages[t], e.model.pages.defaults, e.model.bookSize)
                    })
                }
                return this.pageModelsCache(t)
            }
        }, r.prototype.getPageIdByIndex = function(t) {
            if (!(t >= this.getPagesCount() || t < 0)) {
                var e = this.getStructure()[t];
                return i.isNull(e) ? this.getPageIdByIndex(t - 1) : e
            }
        }, r.prototype.getStructure = function() {
            return this.model.pages.structure
        }, r.prototype.getNumerationOffset = function() {
            return this.model.numerationOffset
        }, r.prototype.getPageIndexById = function(t) {
            var e = i.indexOf(this.getStructure(), t);
            return i.isUndefined(e) ? -1 : e
        }, r.prototype.getUrlHeaderById = function(t) {
            var e = this.getPageModel(t);
            if (!i.isUndefined(e)) {
                var n = e.getUrlHeader();
                return i.isUndefined(n) ? this._calculateCaptionById(t, "-") : n
            }
        }, r.prototype.getPageCaptionById = function(t) {
            var e = this.getPageModel(t);
            if (!i.isUndefined(e)) {
                var n = e.getCaption();
                return i.isUndefined(n) ? this._calculateCaptionById(t, " - ") : n
            }
        }, r.prototype._calculateCaptionById = function(t, e) {
            var n = this,
                r = this.getPageModel(t),
                s = this.getPageIndexById(t),
                a = r.getProperty("wide");
            if (!i.isUndefined(this.getNumerationOffset())) {
                var l = function(t) {
                        return t < n.getNumerationOffset() ? o.romanize(t + 1) : t - n.getNumerationOffset() + 1
                    },
                    h = l(s);
                return !i.isUndefined(a) && a && (this.model.rightToLeft ? h = l(s + 1) + e + h : h += e + l(s + 1)), h
            }
            return !i.isUndefined(a) && a ? this.model.rightToLeft ? (s + 2).toString() + e + (s + 1).toString() : (s + 1).toString() + e + (s + 2).toString() : (s + 1).toString()
        }, r.prototype.getPageIdByUrlHeader = function(t) {
            var e, n, r = t.split("-");
            return i.isUndefined(this.model.urlNames) || (e = this.model.urlNames[t], i.isUndefined(e) || i.isNull(e)) ? (n = o.isRoman(r[0]) ? o.deromanize(r[0]) : i.isUndefined(this.getNumerationOffset()) ? r[0] : Number(r[0]) + this.getNumerationOffset(), this.getPageIdByIndex(n - 1)) : e
        }, r.prototype.getPagesCount = function() {
            return this.getStructure().length
        }, r.prototype.getPageResourcesCount = function() {
            return i.without(this.getStructure(), null).length
        }, r.prototype.hasPageWithId = function(t) {
            return i.has(this.model.pages, t)
        }, r.prototype.isFirstPage = function(t) {
            var e = this.getPageIndexById(t);
            return 0 === e
        }, r.prototype.isLastPage = function(t) {
            var e, n = this.getPageIndexById(t),
                o = this.getPageModel(t);
            return !i.isUndefined(o) && (e = n + (o.getProperty("wide") ? 2 : 1), e === this.getStructure().length)
        }, e.PageTable = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events,
                n = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i, n)
        } else t(window, e, e.Events, e._)
    }(function(t, e, i, n) {
        "use strict";

        function o() {
            this._state = r.IDLE, this._loadedData = void 0, this._id = void 0, this._type = void 0, this.uses = 0, this._url = void 0, this._history = []
        }
        var r = {
                IDLE: 0,
                UNREADY: 1,
                READY: 2,
                LOADING: 3,
                LOADED: 4,
                ERROR: -1,
                CANCELLED: -2
            },
            s = {
                LOADING: "loading",
                LOADED: "loaded",
                DATA_IS_READY: "data",
                ERROR: "error",
                CANCELLED: "cancelled"
            };
        o.prototype = Object.create(i.prototype), o.constructor = o, o.destructor = function() {
            this._state = r.IDLE, this._loadedData = void 0, this._history.push(this.hash()), this._id = void 0, this._type = void 0, this.uses = 0, this._url = void 0, i.prototype.destructor.call(this)
        }, o.prototype.setHash = function(t, e) {
            return this._id = t, this._type = e, this._id + "_" + this._type
        }, o.prototype.id = function() {
            return this._id
        }, o.prototype.type = function() {
            return this._type
        }, o.prototype.hash = function() {
            return this._id + "_" + this._type
        }, o.prototype.getState = function() {
            return this._state
        }, o.prototype.toString = function() {
            return this.hash() + "(" + this._state + ")"
        }, o.prototype.setUrl = function(t) {
            this._url = t, this._state = r.UNREADY
        }, o.prototype.ready = function() {
            if (this._state !== r.IDLE && this._state !== r.UNREADY) throw new Error;
            this._state = r.READY, this._loadedData = this._url
        }, o.prototype.load = function() {
            if (this._state !== r.READY) throw new Error("Can't load loader with status ", (+this._state));
            this._state = r.LOADING;
            var t = this;
            n.defer(function() {
                t._onLoad(t._url)
            }), this.trigger(s.DATA_IS_READY), this.trigger(s.LOADING)
        }, o.prototype.abort = function() {
            this._state = r.CANCELLED, this.trigger("onCancelled")
        }, o.prototype.isIndefiniteProgress = function() {
            return !0
        }, o.prototype.getLoadedData = function() {
            return this.isDataReady() ? this._loadedData : void 0
        }, o.prototype.isIdle = function() {
            return this._state === r.IDLE
        }, o.prototype.isLoaded = function() {
            return this._state === r.LOADED
        }, o.prototype.isDataReady = function() {
            return this._state >= r.LOADING
        }, o.prototype.isLoading = function() {
            return this._state === r.LOADING
        }, o.prototype.isError = function() {
            return this._state === r.ERROR
        }, o.prototype._onLoad = function(t) {
            this._state = r.LOADED, this._loadedData = t, this.trigger(s.LOADED, this._loadedData)
        }, o.prototype._onError = function(t) {
            this._state = r.ERROR, this.trigger("onError", t)
        }, o.prototype._onProgress = function(t, e, i) {
            var n = {
                progress: t
            };
            e && (n.title = e), i && (n.image = i), this.trigger("onProgress", n)
        }, e.BasePageResourceLoader = o, e.LoaderState = r, e.LoaderEvent = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/loaders/base").BasePageResourceLoader,
                n = require("fb-html5/common/loaders/base").LoaderState,
                o = require("fb-html5/common/loaders/base").LoaderEvent;
            t(global, exports, i, n, o)
        } else t(e, e, e.BasePageResourceLoader, e.LoaderState, e.LoaderEvent)
    }(function(t, e, i, n, o) {
        "use strict";

        function r() {
            i.constructor.call(this)
        }
        r.prototype = Object.create(i.prototype), r.prototype.constructor = r, r.prototype.load = function() {
            if (this._state !== n.READY) throw new Error(this.hash() + this._history + "Can't load loader with status " + this._state);
            this._state = n.LOADING;
            var t = this,
                e = new Image(1, 1);
            e.onload = function() {
                t._state = n.LOADED, t.trigger(o.DATA_IS_READY), t.trigger(o.LOADED, t)
            }, e.src = this._url, this._loadedData = this._url, this.trigger(o.LOADING)
        }, r.prototype.isDataReady = function() {
            return this._state >= n.LOADED
        }, r.prototype.toString = function() {
            return this.hash()
        }, e.ProgressiveLoader = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("@flippingbook/fb-publication").PageResourceType;
            t(global, exports, i)
        } else t(e, e, e.PageResourceType)
    }(function(t, e, i) {
        "use strict";

        function n() {
            this._bookFifo = [], this._waitingBookFifo = [], this._otherFifo = []
        }
        n.prototype.constructor = n, n.prototype.isEmpty = function() {
            return 0 === this._bookFifo.length && 0 === this._otherFifo.length
        }, n.prototype.push = function(t) {
            switch (t.type()) {
                case i.PAGE_TEXT:
                case i.ZOOM_PAGE_TEXT:
                case i.PAGE_SUBSTRATE:
                case i.ZOOM_PAGE_SUBSTRATE:
                    this._bookFifo.indexOf(t) < 0 && this._waitingBookFifo.indexOf(t) < 0 && this._bookFifo.push(t);
                    break;
                default:
                    this._otherFifo.indexOf(t) < 0 && this._otherFifo.push(t)
            }
        }, n.prototype.shift = function() {
            if (this._bookFifo.length > 0) return this._bookFifo.shift();
            if (this._otherFifo.length > 0) return this._otherFifo.shift();
            throw new Error("LoaderQueue is empty.")
        }, n.prototype.setBookRange = function(t) {
            function e(e) {
                var i = e.id(),
                    n = t.indexOf(i);
                return n >= 0
            }

            function i(t) {
                return !e(t)
            }
            var n = this._waitingBookFifo.filter(e);
            this._waitingBookFifo = this._waitingBookFifo.filter(i);
            var o = this._bookFifo.filter(i);
            this._waitingBookFifo = this._waitingBookFifo.concat(o), this._bookFifo = this._bookFifo.filter(e), this._bookFifo = this._bookFifo.concat(n)
        }, n.prototype.log = function(t) {
            console.info(t + "-log: w: " + this._waitingBookFifo.toString() + " l: " + this._bookFifo.toString())
        }, e.LoaderQueue = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("underscore/underscore-min")._;
            t(global, exports, i)
        } else t(e, e, e._)
    }(function(t, e, i) {
        "use strict";

        function n() {
            this._dictionary = {}
        }
        n.prototype.constructor = n, n.prototype.push = function(t) {
            this._dictionary.hasOwnProperty(t.id()) || (this._dictionary[t.id()] = {}), this._dictionary[t.id()][t.type()] = t
        }, n.prototype.free = function(t) {
            this._dictionary.hasOwnProperty(t.id()) || (this._dictionary[t.id()] = {}), this._dictionary[t.id()].hasOwnProperty(t.type()) && delete this._dictionary[t.id()][t.type()]
        }, n.prototype.get = function(t, e) {
            if (this._dictionary.hasOwnProperty(t)) {
                var n = this._dictionary[t];
                return i.isUndefined(e) ? n : n[e]
            }
        }, e.LoaderDictionary = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._,
                n = require("fb-html5/common/events").Events;
            t(global, exports, i, n)
        } else t(e, e, e._, e.Events)
    }(function(t, e, i, n) {
        "use strict";

        function o(t) {
            t && this.push(t)
        }
        o.prototype = new n, o.prototype.constructor = o, o.prototype.push = function(t) {
            i.isFunction(t.subscribe) && t.subscribe(this)
        }, e.Analytics = o
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i)
        } else t(e, e, e._)
    }(function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {
                return e ? e : this ? (e = this, void(this.services = {})) : new t
            }
            var e;
            return t.prototype.constructor = t, t.prototype.set = function(t, e) {
                this.services[t] = e
            }, t.prototype.get = function(t) {
                return i.has(this.services, t) ? this.services[t] : (console.error("Service is not registered: " + t), null)
            }, t.prototype.has = function(t) {
                return i.has(this.services, t)
            }, t.prototype.destructor = function() {
                for (var t in this.services)
                    if (i.has(this.services, t)) {
                        var e = this.services[t];
                        i.isFunction(e.destructor) && e.destructor()
                    }
                this.services = {}
            }, t
        }();
        n.LOAD_MANAGER = "LoadManager", n.SEARCH_PROVIDER = "SEARCH_PROVIDER", e.FBLocator = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/frameworks/modernizr");
            t(global, exports, i, n)
        } else t(window, e, e.el, e.Modernizr)
    }(function(t, e, i, n) {
        "use strict";
        var o = {
            parseTranslate: function(t) {
                function e(t) {
                    return parseInt(t.replace("px", ""), 10)
                }
                var i = t.match(/[^(),\s]+/g),
                    n = {};
                if ("undefined" == typeof t) return n = {}, n.translate = {
                    x: 0,
                    y: 0,
                    z: 0
                }, n;
                if (null === i) return n.translate = {
                    x: 0,
                    y: 0,
                    z: 0
                }, n;
                for (var o = 0, r = i.length; o < r; o++) switch (i[o]) {
                    case "translate":
                        n.translate = {
                            x: e(i[o + 1]),
                            y: e(i[o + 2]),
                            z: 0
                        };
                        break;
                    case "translateX":
                        n.translate = {
                            x: e(i[o + 1]),
                            y: 0,
                            z: 0
                        };
                        break;
                    case "translateY":
                        n.translate = {
                            x: 0,
                            y: e(i[o + 1]),
                            z: 0
                        };
                        break;
                    case "translate3d":
                        n.translate = {
                            x: e(i[o + 1]),
                            y: e(i[o + 2]),
                            z: e(i[o + 3])
                        };
                        break;
                    case "translateZ":
                        n.translate = {
                            x: 0,
                            y: 0,
                            z: e(i[o + 1])
                        }
                }
                return n
            },
            translate: function(t, e, i, o) {
                e = e || "0", i = i || "0", o = o || "0", e += "", i += "", o += "", e.indexOf("%") === -1 && (e += "px"), i.indexOf("%") === -1 && (i += "px"), o.indexOf("%") === -1 && (o += "px"), n.csstransforms3d ? t.style[n.prefixedCSS("transform")] = "translate3d(" + e + "," + i + "," + o + ")" : t.style[n.prefixedCSS("transform")] = "translate(" + e + ", " + i + ")"
            },
            origin: function(t, e, i) {
                t.style[n.prefixedCSS("transform-origin")] = e + "px " + i + "px"
            },
            transition: function(t, e, i) {
                t.style[n.prefixedCSS("transition")] = i + " " + e + "ms"
            },
            duration: function(t, e) {
                t.style[n.prefixedCSS("transition-duration")] = e + "ms"
            },
            delay: function(t, e) {
                t.style[n.prefixedCSS("transition-delay")] = e + "ms"
            },
            animation: function(t, e, i) {
                t.style[n.prefixedCSS("animation")] = e + " " + i + "ms"
            },
            perspective: function(t, e) {
                t.style[n.prefixedCSS("transform")] = "perspective(" + e + ")"
            },
            scale: function(t, e, o) {
                t = t || 0, e = e || 0, o = o || 0, n.csstransforms3d ? i.style[n.prefixedCSS("transform")] = "scale3d(" + t + "," + e + "," + o + ")" : i.style[n.prefixedCSS("transform")] = "scale(" + t + "," + e + ")"
            },
            rotate: function(t, e, i, o, r, s) {
                i = i || 0, o = o || 0, r = r || 0, s = s || !1, n.csstransforms3d && !s ? t.style[n.prefixedCSS("transform")] = "rotate3d(" + i + "," + o + "," + r + "," + e + ")" : t.style[n.prefixedCSS("transform")] = "rotate(" + e + ")"
            },
            backfaceVisibility: function(t, e) {
                t.style[n.prefixedCSS("backface-visibility")] = e
            },
            boxShadow: function(t, e) {
                t && (t.style[n.prefixedCSS("box-shadow")] = e)
            },
            getTransform: function(t) {
                return t.style[n.prefixedCSS("transform")]
            },
            changeOnlyScale: function(t, e, i, o) {
                var r = /translate3d\([A-Za-z0-9_, ]*\)/i,
                    s = t.style[n.prefixedCSS("transform")].match(r);
                null === s && (s = ""), t.style[n.prefixedCSS("transform")] = s + " scale3d(" + e + "," + i + "," + o + ")"
            },
            changeOnlyTranslate: function(t, e, i, o) {
                var r = /scale(3d)?\(.*\)/i,
                    s = t.style[n.prefixedCSS("transform")].match(r);
                null === s && (s = ""), this.translate(t, e, i, o), s && s.length && (t.style[n.prefixedCSS("transform")] = t.style[n.prefixedCSS("transform")] + " " + s[0])
            }
        };
        e.html5Lib = o
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/fb-router").FBRouter,
                o = require("fb-html5/common/frameworks/underscore")._,
                r = require("fb-html5/common/events").Events;
            t(global, exports, i, o, n, r)
        } else t(window, e, e.el, e._, e.FBRouter, e.Events)
    }(function(t, e, i, n, o, r) {
        "use strict";
        var s = function() {
            function e() {
                return s ? s : this ? (s = this, void(s.root = i.tag("body"))) : new e
            }
            var s, a = function(e, i, n) {
                    var o = 100,
                        n = n || !1,
                        r = t.innerWidth - o,
                        s = t.innerHeight - o,
                        a = r / s,
                        l = e / i,
                        h = a > l ? e * s / i : r,
                        c = a > l ? s : i * r / e;
                    return n && (h > e || c > i) ? (h = e, c = i, r += o, s += o, o = 0) : (h = Math.round(h), c = Math.round(c)), {
                        width: h,
                        height: c,
                        paddingTop: (s + o - c) / 2,
                        paddingLeft: (r + o - h) / 2
                    }
                },
                l = function(t, e, i) {
                    t.addEventListener ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
                },
                h = function(t, e, i) {
                    t.removeEventListener ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
                };
            return e.prototype = new r, e.prototype.setRootContainer = function(t) {
                this.root = t
            }, e.prototype.showFrame = function(e) {
                var r = this,
                    s = this.root;
                if (this.blackout = i.createElement("div", {
                        "class": "black-out"
                    }, s), this.lightbox = i.createElement("div", {
                        "class": "contentfull-lightbox"
                    }, s), this.closeButton = i.createElement("div", {
                        "class": "closeButton"
                    }, this.lightbox), "img" === e.tagName.toLowerCase())
                    if (e.naturalWidth) this.lightbox.appendChild(e), this._sizing(e.naturalWidth, e.naturalHeight, !0), r.trigger("contentLoaded");
                    else {
                        var a = document.createElement("img");
                        a.src = o().translatePath("static/html/styles/img/preloader.gif"), r.lightbox.appendChild(a), this._sizing(146, 146, !0), e.onload = function() {
                            r.lightbox && (r.lightbox.removeChild(a), r.lightbox.appendChild(e), r._sizing(e.naturalWidth, e.naturalHeight, !0), r.trigger("contentLoaded"))
                        }
                    } else this.lightbox.appendChild(e), this._sizing(), r.trigger("contentLoaded");
                this._bindClose(), n.defer(function() {
                    i.addClass(s, "lightbox-opened")
                }), l(t, "resize", function() {
                    r._sizing.call(r, r.width, r.height, !0)
                })
            }, e.prototype._sizing = function(t, e, i) {
                t = t || 1600, e = e || 900, i = i || !1;
                var n = a(t, e, i);
                this.lightbox.style.width = n.width + "px", this.lightbox.style.height = n.height + "px", this.lightbox.style.top = n.paddingTop + "px", this.lightbox.style.left = n.paddingLeft + "px", this.lightbox.style.margin = "0"
            }, e.prototype._close = function() {
                var t = this,
                    e = this.root;
                i.removeClass(e, "lightbox-opened"), i.del(t.lightbox), this.trigger("closed"),
                    function n() {
                        var e = getComputedStyle(t.blackout);
                        "hidden" === e.visibility ? i.del(t.blackout) : setTimeout(n, 100)
                    }()
            }, e.prototype._bindClose = function() {
                var e = this,
                    i = function(n) {
                        27 === n.keyCode && (n.stopPropagation(), h(t.document, "keyup", i), e._close())
                    },
                    n = function(n) {
                        n.stopPropagation(), h(t.document, "keyup", i), e._close()
                    };
                l(this.closeButton, "click", n), l(this.blackout, "click", n), l(t.document, "keyup", i)
            }, e
        }();
        e.Lightbox = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common//frameworks/underscore")._,
                n = require("fb-html5/common/events").Events,
                o = require("fb-html5/common/page-table").PageTable;
            t(global, exports, i, n, o)
        } else t(window, e, e._, e.Events, e.PageTable)
    }(function(t, e, i, n, o) {
        "use strict";

        function r(t, e, i) {
            this.leftPage = t, this.rightPage = e, this.zoomMode = i
        }

        function s(t) {
            this.pageTable = new o(t), this._model = t, this.state = new r((void 0), this.pageTable.getPageIdByIndex(0), (!1)), this.slideshow = !1, this.slideshowInterval = 1e3, this.totalPages = this.pageTable.getPagesCount(), i.has(t, "customTotalPages") && (this.totalPages = t.customTotalPages), this._initSlideshow(), this.target = null, this.rtl = t.rightToLeft, this._model.on("change:rightToLeft", function(t) {
                this.set("rtl", t)
            }, this)
        }
        r.prototype.isEqualTo = function(t) {
            return i.isEqual(this, t)
        }, e.PagerState = r, s.prototype = new n, s.prototype.constructor = s, s.prototype.getState = function() {
            return this.state
        }, s.prototype._initSlideshow = function() {
            var t = this;
            this.on("change:slideshow", function(e) {
                e ? t.slideshowTimer = setInterval(function() {
                    t.goForward() || t.goToFirst()
                }, t.slideshowInterval) : clearInterval(t.slideshowTimer)
            })
        }, s.prototype.goToPageById = function(t, e) {
            var i = this._getStateByPageIdAndZoomMode(t, this.state.zoomMode);
            return !!this._canChangeStateTo(i) && (!!this.state.isEqualTo(i) || (this.target = e || null, this.set("state", i), !0))
        }, s.prototype.goToPageByIndex = function(t, e) {
            if (t < 0 || t >= this.pageTable.getPagesCount()) return !1;
            var n = this.pageTable.getPageIdByIndex(t);
            return (!i.isUndefined(n) || (n = this.pageTable.getPageIdByIndex(t - 1), !i.isUndefined(n))) && this.goToPageById(n, e)
        }, s.prototype.setZoomMode = function(t, e, n) {
            var o, r;
            return o = e ? i.isUndefined(this.state.rightPage) ? this.state.leftPage : this.state.rightPage : i.isUndefined(this.state.leftPage) ? this.state.rightPage : this.state.leftPage, r = this._getStateByPageIdAndZoomMode(o, t), !!this._canChangeStateTo(r) && (!!this.state.isEqualTo(r) || (this.target = n || null, this.set("state", r), !0))
        }, s.prototype._canChangeStateTo = function(t) {
            return !i.isUndefined(t) && (i.isNull(this._isFreezedBy) || i.isUndefined(this._isFreezedBy))
        }, s.prototype._getStateByPageIdAndZoomMode = function(t, e) {
            if (this.pageTable.hasPageWithId(t)) {
                if (e) return new r(t, (void 0), (!0));
                var i = this.pageTable.getPageIndexById(t);
                return i % 2 !== 0 ? new r(t, this.pageTable.getPageIdByIndex(i + 1), (!1)) : new r(this.pageTable.getPageIdByIndex(i - 1), t, (!1))
            }
        }, s.prototype.trigger = function(t) {
            "change:state" !== t || i.isNull(this.target) ? n.prototype.trigger.apply(this, arguments) : (n.prototype.trigger.apply(this, i.union(arguments, [this.target])), this.target = null)
        }, s.prototype.goToFirst = function() {
            return !!this.goToPageByIndex(0) && (this.trigger("goToFirstPage"), !0)
        }, s.prototype.goToLast = function() {
            return !!this.goToPageByIndex(this.pageTable.getPagesCount() - 1) && (this.trigger("goToFirstPage"), !0)
        }, s.prototype.goBackward = function() {
            var t = this.getPrevPageId();
            if (t) return this.goToPageById(t)
        }, s.prototype.goForward = function() {
            var t = this.getNextPageId();
            if (t) return this.goToPageById(t)
        }, s.prototype.getNextPageId = function() {
            var t = i.filter(this.pageTable.getStructure(), function(t) {
                    return !i.isNull(t)
                }),
                e = this.state.rightPage ? this.state.rightPage : this.state.leftPage,
                n = i.indexOf(t, e);
            return n < t.length - 1 ? t[n + 1] : null
        }, s.prototype.getPrevPageId = function() {
            var t = i.filter(this.pageTable.getStructure(), function(t) {
                    return !i.isNull(t)
                }),
                e = this.state.leftPage ? this.state.leftPage : this.state.rightPage,
                n = i.indexOf(t, e);
            return n > 0 ? t[n - 1] : null
        }, s.prototype.toggleZoomMode = function() {
            return this.setZoomMode(!this.state.zoomMode, !1)
        }, s.prototype.getStateForDisplay = function(t) {
            var e = null,
                n = null;
            return t.leftPage === t.rightPage ? this.pageTable.getPageCaptionById(t.leftPage) : (i.isUndefined(t.leftPage) || (e = this.pageTable.getPageCaptionById(t.leftPage)), i.isUndefined(t.rightPage) || (n = this.pageTable.getPageCaptionById(t.rightPage)), this.isRtl() ? i.isNull(n) ? i.isNull(e) ? "" : e : n + (i.isNull(e) ? "" : " - " + e) : i.isNull(e) ? i.isNull(n) ? "" : n : e + (i.isNull(n) ? "" : " - " + n))
        }, s.prototype.isFirstPage = function(t) {
            var e, i, t = t || this.getState();
            return t.leftPage && (e = this.pageTable.isFirstPage(t.leftPage)), t.rightPage && (i = this.pageTable.isFirstPage(t.rightPage)), e || i
        }, s.prototype.isLastPage = function(t) {
            var e, i, t = t || this.getState();
            return t.leftPage && (e = this.pageTable.isLastPage(t.leftPage)), t.rightPage && (i = this.pageTable.isLastPage(t.rightPage)), e || i
        }, s.prototype.isRtl = function() {
            return !i.isUndefined(this._model.rightToLeft) && this._model.rightToLeft
        }, s.prototype.isHardcover = function() {
            return !i.isUndefined(this._model.hardcover) && this._model.hardcover
        }, s.prototype.freeze = function(t) {
            this._isFreezedBy = t
        }, s.prototype.unfreeze = function(t) {
            this._isFreezedBy && this._isFreezedBy === t && (this._isFreezedBy = null)
        }, s.prototype.isFreezed = function() {
            return !!this._isFreezedBy
        }, s.prototype.isFreezedBy = function(t) {
            return this.isFreezed() && this._isFreezedBy === t
        }, e.Pager = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/loaders/base").BasePageResourceLoader,
                n = require("fb-html5/common/loaders/base").LoaderState,
                o = require("fb-html5/common/loaderd/base").LoaderEvent;
            t(global, exports, i, n, o)
        } else t(window, e, e.BasePageResourceLoader, e.LoaderState, e.LoaderEvent)
    }(function(t, e, i, n, o) {
        "use strict";

        function r() {}
        r.prototype = Object.create(i.prototype), r.constructor = r, r.prototype._getURLGenerator = function() {
            return t.webkitURL || t.URL
        }, r.prototype._isSupported = function() {
            var t = new Blob(["<svg xmlns='http://www.w3.org/2000/svg'></svg>"], {
                    type: "image/svg+xml;charset=utf-8"
                }),
                e = this._getURLGenerator().createObjectURL(t);
            return null !== /^blob:/.exec(e)
        }, r.prototype.load = function() {
            if (!this._isSupported()) return i.prototype.call(this);
            if (this._state !== n.READY) throw new Error("Can't load loader with status ", (+this._state));
            this._state = n.LOADING;
            var t = this,
                e = new XMLHttpRequest;
            e.open("GET", this._url), e.responseType = "arraybuffer", e.onload = function() {
                var i = e.getAllResponseHeaders(),
                    n = i.match(/^Content-Type\:\s*(.*?)$/im),
                    o = n[1] || "image/png",
                    r = new Blob([this.response], {
                        type: o
                    });
                t._onLoad(t._getURLGenerator().createObjectURL(r))
            }, e.onerror = function(e) {
                t._onError(e)
            }, "onprogress" in e && (e.onprogress = function(e) {
                e.lengthComputable && t._onProgress(parseInt(e.loaded / e.total * 100, 10))
            }), e.send(), this.trigger(o.LOADING)
        }, e.XMLHttpPageResourceLoader = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._,
                n = require("fb-html5/common/loaders/progressive-loader").ProgressiveLoader,
                o = require("@flippingbook/fb-publication").PageResourceType,
                r = require("@flippingbook/fb-publication").PageResourceState,
                s = require("fb-html5/common/libs/pool").Pool,
                a = require("fb-html5/common/loaders/base").LoaderState,
                l = require("fb-html5/common/loaders/loader-queue").LoaderQueue,
                h = require("fb-html5/common/loaders/base").LoaderEvent,
                c = require("fb-html5/common/loaders/loader-dictionary").LoaderDictionary;
            t(global, exports, i, n, o, r, s, a, h, l, c)
        } else t(window, e, e._, e.ProgressiveLoader, e.PageResourceType, e.PageResourceState, e.Pool, e.LoaderState, e.LoaderEvent, e.LoaderQueue, e.LoaderDictionary)
    }(function(t, e, i, n, o, r, s, a, l, h, c) {
        "use strict";

        function u(t, e, i, n) {
            this._pageTable = t, this._resourceProvider = e, this._maxLoadingCount = n || 8, this._loaderQueue = new h, this._pool = new s(i), this._loaderDictionary = new c, this._loadingCount = 0;
            var o = this;
            this._onResourceStateChanged = function(t) {
                o._resourceProvider.off(t.id);
                var e = o._loaderDictionary.get(t.id);
                o._updateModel(t);
                for (var i in e)
                    if (e.hasOwnProperty(i)) {
                        var n = e[i];
                        n.getState() === a.UNREADY && (t.state === r.READY ? (n.ready(), o._loaderQueue.push(n), o._tryLoad()) : n.setError("wrong resource state for  " + n.hash()))
                    }
            }
        }
        u.prototype._hash = function(t, e) {
            return t + "_" + e
        }, u.prototype._updateModel = function(t) {
            if (!i.isEmpty(t.pageInfo)) {
                var e = this._pageTable,
                    n = e.getPageModel(t.id).getPropertyModel();
                i.each(t.pageInfo, function(t, e) {
                    n.set(e, t)
                })
            }
        }, u.prototype.setBookRange = function(t, e, i) {
            function n(t) {
                return parseInt(o.getPageIdByIndex(t - 1), 10)
            }
            i = i !== !1;
            var o = this._pageTable;
            if (this._pageExclude = e, i && (this._pageExclude = this._pageExclude.map(n)), t && 2 === t.length) {
                var r, s = [];
                for (r = t[0]; r <= t[1]; r++) {
                    var a = i ? n(r) : r;
                    0 !== s.length && s[s.length - 1] === a || s.push(a)
                }
                for (r = 0; r < s.length; r++) this._pageExclude.push(s[r].toString())
            }
            this._loaderQueue.setBookRange(this._pageExclude), this._tryLoad()
        }, u.prototype._getUrl = function(t, e, i) {
            if (i) {
                var n;
                switch (e) {
                    case o.PAGE_TEXT:
                    case o.ZOOM_PAGE_TEXT:
                        i.getProperty("textLayer") && (n = i.getTextLayerUrl(e === o.ZOOM_PAGE_TEXT));
                        break;
                    case o.PAGE_SUBSTRATE:
                    case o.ZOOM_PAGE_SUBSTRATE:
                        n = i.getSubstrateUrl(e === o.ZOOM_PAGE_SUBSTRATE);
                        break;
                    case o.THUMBNAIL:
                        n = i.getThumbnailUrl()
                }
                return n
            }
        }, u.prototype.getPageLoader = function(t, e) {
            var i = this._loaderDictionary.get(t, e),
                n = this._hash(t, e);
            if (i) return i.uses++, i;
            var o = this._pageTable.getPageModel(t),
                s = this._getUrl(t, e, o);
            if (s) {
                var a = this._resourceProvider.getInfo(t);
                switch (o.isStub() && (a.state = r.READY), i = this._pool.get(), i.setHash(t, e), i.setUrl(s), this._loaderDictionary.push(i), a.state) {
                    case r.UNREADY:
                        this._resourceProvider.on(t, this._onResourceStateChanged);
                        break;
                    case r.READY:
                        this._updateModel(a), i.ready(), this._loaderQueue.push(i), this._tryLoad();
                        break;
                    default:
                        throw this._loaderDictionary.free(i), this._pool.free(i), new Error("resource " + n + " has " + a + "state")
                }
                return i.uses++, i
            }
        }, u.prototype._tryLoad = function() {
            if (this._loadingCount < this._maxLoadingCount && !this._loaderQueue.isEmpty()) {
                var t = this._loaderQueue.shift();
                this._loadingCount++;
                var e = function() {
                    this._loadingCount--, this._tryLoad()
                };
                t.once(l.LOADED, e, this), t.load()
            }
        }, e.LoadManager = u
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events;
            t(global, exports, i)
        } else t(window, e, e.Events)
    }(function(t, e, i) {
        "use strict";

        function n() {
            this.query = null
        }
        n.prototype = new i, n.prototype.constructor = n, n.prototype.getResultsSync = function(t, e) {
            throw new Error("is an abstract method")
        }, n.prototype.getResultsAsync = function(t, e, i) {
            throw new Error("is an abstract method")
        }, n.prototype.getResultsCountSync = function() {
            throw new Error("is an abstract method")
        }, n.prototype.getResultsCountAsync = function(t) {
            throw new Error("is an abstract method")
        }, n.prototype.setQuery = function(t) {
            this.set("query", t)
        }, n.prototype.isQueryValid = function() {
            return !!this.query && this.query.length >= this.getMinimumQueryLength()
        }, n.prototype.getMinimumQueryLength = function() {
            return 1
        }, n.SearchResult = function(t, e, i, n, o, r) {
            this.pageId = t, this.text = e, this.relevance = i, this.startPos = n, this.stopPos = o, this.fullText = r
        }, e.ISearchProvider = n
    }, this.FBPublication || {}),
    function(t, e, i) {
        function n(t) {
            var e, i, n = z[t] = {};
            for (t = t.split(/\s+/), e = 0, i = t.length; e < i; e++) n[t[e]] = !0;
            return n
        }

        function o(t, e, n) {
            if (n === i && 1 === t.nodeType) {
                var o = "data-" + e.replace(W, "-$1").toLowerCase();
                if (n = t.getAttribute(o), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : N.isNumeric(n) ? +n : D.test(n) ? N.parseJSON(n) : n)
                    } catch (r) {}
                    N.data(t, e, n)
                } else n = i
            }
            return n
        }

        function r(t) {
            for (var e in t)
                if (("data" !== e || !N.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function s(t, e, i) {
            var n = e + "defer",
                o = e + "queue",
                r = e + "mark",
                s = N._data(t, n);
            !s || "queue" !== i && N._data(t, o) || "mark" !== i && N._data(t, r) || setTimeout(function() {
                N._data(t, o) || N._data(t, r) || (N.removeData(t, n, !0), s.fire())
            }, 0)
        }

        function a() {
            return !1
        }

        function l() {
            return !0
        }

        function h(t) {
            return !t || !t.parentNode || 11 === t.parentNode.nodeType
        }

        function c(t, e, i) {
            if (e = e || 0, N.isFunction(e)) return N.grep(t, function(t, n) {
                var o = !!e.call(t, n, t);
                return o === i
            });
            if (e.nodeType) return N.grep(t, function(t, n) {
                return t === e === i
            });
            if ("string" == typeof e) {
                var n = N.grep(t, function(t) {
                    return 1 === t.nodeType
                });
                if (ut.test(e)) return N.filter(e, n, !i);
                e = N.filter(e, n)
            }
            return N.grep(t, function(t, n) {
                return N.inArray(t, e) >= 0 === i
            })
        }

        function u(t) {
            var e = gt.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }

        function d(t, e) {
            return N.nodeName(t, "table") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function p(t, e) {
            if (1 === e.nodeType && N.hasData(t)) {
                var i, n, o, r = N._data(t),
                    s = N._data(e, r),
                    a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (i in a)
                        for (n = 0, o = a[i].length; n < o; n++) N.event.add(e, i, a[i][n])
                }
                s.data && (s.data = N.extend({}, s.data))
            }
        }

        function f(t, e) {
            var i;
            1 === e.nodeType && (e.clearAttributes && e.clearAttributes(), e.mergeAttributes && e.mergeAttributes(t), i = e.nodeName.toLowerCase(), "object" === i ? e.outerHTML = t.outerHTML : "input" !== i || "checkbox" !== t.type && "radio" !== t.type ? "option" === i ? e.selected = t.defaultSelected : "input" === i || "textarea" === i ? e.defaultValue = t.defaultValue : "script" === i && e.text !== t.text && (e.text = t.text) : (t.checked && (e.defaultChecked = e.checked = t.checked), e.value !== t.value && (e.value = t.value)), e.removeAttribute(N.expando), e.removeAttribute("_submit_attached"), e.removeAttribute("_change_attached"))
        }

        function g(t) {
            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll("*") : []
        }

        function m(t) {
            "checkbox" !== t.type && "radio" !== t.type || (t.defaultChecked = t.checked)
        }

        function v(t) {
            var e = (t.nodeName || "").toLowerCase();
            "input" === e ? m(t) : "script" !== e && "undefined" != typeof t.getElementsByTagName && N.grep(t.getElementsByTagName("input"), m)
        }

        function y(t) {
            var e = I.createElement("div");
            return Lt.appendChild(e), e.innerHTML = t.outerHTML, e.firstChild
        }

        function b(t, e, i) {
            var n = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = "width" === e ? 1 : 0,
                r = 4;
            if (n > 0) {
                if ("border" !== i)
                    for (; o < r; o += 2) i || (n -= parseFloat(N.css(t, "padding" + qt[o])) || 0), "margin" === i ? n += parseFloat(N.css(t, i + qt[o])) || 0 : n -= parseFloat(N.css(t, "border" + qt[o] + "Width")) || 0;
                return n + "px"
            }
            if (n = At(t, e), (n < 0 || null == n) && (n = t.style[e]), zt.test(n)) return n;
            if (n = parseFloat(n) || 0, i)
                for (; o < r; o += 2) n += parseFloat(N.css(t, "padding" + qt[o])) || 0, "padding" !== i && (n += parseFloat(N.css(t, "border" + qt[o] + "Width")) || 0), "margin" === i && (n += parseFloat(N.css(t, i + qt[o])) || 0);
            return n + "px"
        }

        function w(t) {
            return function(e, i) {
                if ("string" != typeof e && (i = e, e = "*"), N.isFunction(i))
                    for (var n, o, r, s = e.toLowerCase().split(ie), a = 0, l = s.length; a < l; a++) n = s[a], r = /^\+/.test(n), r && (n = n.substr(1) || "*"), o = t[n] = t[n] || [], o[r ? "unshift" : "push"](i)
            }
        }

        function P(t, e, n, o, r, s) {
            r = r || e.dataTypes[0], s = s || {}, s[r] = !0;
            for (var a, l = t[r], h = 0, c = l ? l.length : 0, u = t === se; h < c && (u || !a); h++) a = l[h](e, n, o), "string" == typeof a && (!u || s[a] ? a = i : (e.dataTypes.unshift(a), a = P(t, e, n, o, a, s)));
            return !u && a || s["*"] || (a = P(t, e, n, o, "*", s)), a
        }

        function _(t, e) {
            var n, o, r = N.ajaxSettings.flatOptions || {};
            for (n in e) e[n] !== i && ((r[n] ? t : o || (o = {}))[n] = e[n]);
            o && N.extend(!0, t, o)
        }

        function x(t, e, i, n) {
            if (N.isArray(e)) N.each(e, function(e, o) {
                i || Vt.test(t) ? n(t, o) : x(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
            });
            else if (i || "object" !== N.type(e)) n(t, e);
            else
                for (var o in e) x(t + "[" + o + "]", e[o], i, n)
        }

        function T(t, e, n) {
            var o, r, s, a, l = t.contents,
                h = t.dataTypes,
                c = t.responseFields;
            for (r in c) r in n && (e[c[r]] = n[r]);
            for (;
                "*" === h[0];) h.shift(), o === i && (o = t.mimeType || e.getResponseHeader("content-type"));
            if (o)
                for (r in l)
                    if (l[r] && l[r].test(o)) {
                        h.unshift(r);
                        break
                    }
            if (h[0] in n) s = h[0];
            else {
                for (r in n) {
                    if (!h[0] || t.converters[r + " " + h[0]]) {
                        s = r;
                        break
                    }
                    a || (a = r)
                }
                s = s || a
            }
            if (s) return s !== h[0] && h.unshift(s), n[s]
        }

        function C(t, e) {
            t.dataFilter && (e = t.dataFilter(e, t.dataType));
            var n, o, r, s, a, l, h, c, u = t.dataTypes,
                d = {},
                p = u.length,
                f = u[0];
            for (n = 1; n < p; n++) {
                if (1 === n)
                    for (o in t.converters) "string" == typeof o && (d[o.toLowerCase()] = t.converters[o]);
                if (s = f, f = u[n], "*" === f) f = s;
                else if ("*" !== s && s !== f) {
                    if (a = s + " " + f, l = d[a] || d["* " + f], !l) {
                        c = i;
                        for (h in d)
                            if (r = h.split(" "), (r[0] === s || "*" === r[0]) && (c = d[r[1] + " " + f])) {
                                h = d[h], h === !0 ? l = c : c === !0 && (l = h);
                                break
                            }
                    }
                    l || c || N.error("No conversion from " + a.replace(" ", " to ")), l !== !0 && (e = l ? l(e) : c(h(e)))
                }
            }
            return e
        }

        function S() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function k() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function E() {
            return setTimeout(L, 0), ye = N.now()
        }

        function L() {
            ye = i
        }

        function A(t, e) {
            var i = {};
            return N.each(_e.concat.apply([], _e.slice(0, e)), function() {
                i[this] = t
            }), i
        }

        function M(t) {
            if (!be[t]) {
                var e = I.body,
                    i = N("<" + t + ">").appendTo(e),
                    n = i.css("display");
                i.remove(), "none" !== n && "" !== n || (ge || (ge = I.createElement("iframe"), ge.frameBorder = ge.width = ge.height = 0), e.appendChild(ge), me && ge.createElement || (me = (ge.contentWindow || ge.contentDocument).document, me.write((N.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), me.close()), i = me.createElement(t), me.body.appendChild(i), n = N.css(i, "display"), e.removeChild(ge)), be[t] = n
            }
            return be[t]
        }

        function B(t) {
            return N.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var I = t.document,
            F = t.navigator,
            O = t.location,
            N = function() {
                function e() {
                    if (!a.isReady) {
                        try {
                            I.documentElement.doScroll("left")
                        } catch (t) {
                            return void setTimeout(e, 1)
                        }
                        a.ready()
                    }
                }
                var n, o, r, s, a = function(t, e) {
                        return new a.fn.init(t, e, n)
                    },
                    l = t.jQuery,
                    h = t.$,
                    c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    u = /\S/,
                    d = /^\s+/,
                    p = /\s+$/,
                    f = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    g = /^[\],:{}\s]*$/,
                    m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    y = /(?:^|:|,)(?:\s*\[)+/g,
                    b = /(webkit)[ \/]([\w.]+)/,
                    w = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    P = /(msie) ([\w.]+)/,
                    _ = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    x = /-([a-z]|[0-9])/gi,
                    T = /^-ms-/,
                    C = function(t, e) {
                        return (e + "").toUpperCase()
                    },
                    S = F.userAgent,
                    k = Object.prototype.toString,
                    E = Object.prototype.hasOwnProperty,
                    L = Array.prototype.push,
                    A = Array.prototype.slice,
                    M = String.prototype.trim,
                    B = Array.prototype.indexOf,
                    O = {};
                return a.fn = a.prototype = {
                    constructor: a,
                    init: function(t, e, n) {
                        var o, r, s, l;
                        if (!t) return this;
                        if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
                        if ("body" === t && !e && I.body) return this.context = I, this[0] = I.body, this.selector = t, this.length = 1, this;
                        if ("string" == typeof t) {
                            if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : c.exec(t), !o || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                            if (o[1]) return e = e instanceof a ? e[0] : e, l = e ? e.ownerDocument || e : I, s = f.exec(t), s ? a.isPlainObject(e) ? (t = [I.createElement(s[1])], a.fn.attr.call(t, e, !0)) : t = [l.createElement(s[1])] : (s = a.buildFragment([o[1]], [l]), t = (s.cacheable ? a.clone(s.fragment) : s.fragment).childNodes), a.merge(this, t);
                            if (r = I.getElementById(o[2]), r && r.parentNode) {
                                if (r.id !== o[2]) return n.find(t);
                                this.length = 1, this[0] = r
                            }
                            return this.context = I, this.selector = t, this
                        }
                        return a.isFunction(t) ? n.ready(t) : (t.selector !== i && (this.selector = t.selector, this.context = t.context), a.makeArray(t, this))
                    },
                    selector: "",
                    jquery: "1.7.2",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return A.call(this, 0)
                    },
                    get: function(t) {
                        return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t]
                    },
                    pushStack: function(t, e, i) {
                        var n = this.constructor();
                        return a.isArray(t) ? L.apply(n, t) : a.merge(n, t), n.prevObject = this, n.context = this.context, "find" === e ? n.selector = this.selector + (this.selector ? " " : "") + i : e && (n.selector = this.selector + "." + e + "(" + i + ")"), n
                    },
                    each: function(t, e) {
                        return a.each(this, t, e)
                    },
                    ready: function(t) {
                        return a.bindReady(), r.add(t), this
                    },
                    eq: function(t) {
                        return t = +t, t === -1 ? this.slice(t) : this.slice(t, t + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    slice: function() {
                        return this.pushStack(A.apply(this, arguments), "slice", A.call(arguments).join(","))
                    },
                    map: function(t) {
                        return this.pushStack(a.map(this, function(e, i) {
                            return t.call(e, i, e)
                        }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: L,
                    sort: [].sort,
                    splice: [].splice
                }, a.fn.init.prototype = a.fn, a.extend = a.fn.extend = function() {
                    var t, e, n, o, r, s, l = arguments[0] || {},
                        h = 1,
                        c = arguments.length,
                        u = !1;
                    for ("boolean" == typeof l && (u = l, l = arguments[1] || {}, h = 2), "object" == typeof l || a.isFunction(l) || (l = {}), c === h && (l = this, --h); h < c; h++)
                        if (null != (t = arguments[h]))
                            for (e in t) n = l[e], o = t[e], l !== o && (u && o && (a.isPlainObject(o) || (r = a.isArray(o))) ? (r ? (r = !1, s = n && a.isArray(n) ? n : []) : s = n && a.isPlainObject(n) ? n : {}, l[e] = a.extend(u, s, o)) : o !== i && (l[e] = o));
                    return l
                }, a.extend({
                    noConflict: function(e) {
                        return t.$ === a && (t.$ = h), e && t.jQuery === a && (t.jQuery = l), a
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(t) {
                        t ? a.readyWait++ : a.ready(!0)
                    },
                    ready: function(t) {
                        if (t === !0 && !--a.readyWait || t !== !0 && !a.isReady) {
                            if (!I.body) return setTimeout(a.ready, 1);
                            if (a.isReady = !0, t !== !0 && --a.readyWait > 0) return;
                            r.fireWith(I, [a]), a.fn.trigger && a(I).trigger("ready").off("ready")
                        }
                    },
                    bindReady: function() {
                        if (!r) {
                            if (r = a.Callbacks("once memory"), "complete" === I.readyState) return setTimeout(a.ready, 1);
                            if (I.addEventListener) I.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", a.ready, !1);
                            else if (I.attachEvent) {
                                I.attachEvent("onreadystatechange", s), t.attachEvent("onload", a.ready);
                                var i = !1;
                                try {
                                    i = null == t.frameElement
                                } catch (n) {}
                                I.documentElement.doScroll && i && e()
                            }
                        }
                    },
                    isFunction: function(t) {
                        return "function" === a.type(t)
                    },
                    isArray: Array.isArray || function(t) {
                        return "array" === a.type(t)
                    },
                    isWindow: function(t) {
                        return null != t && t == t.window
                    },
                    isNumeric: function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    },
                    type: function(t) {
                        return null == t ? String(t) : O[k.call(t)] || "object"
                    },
                    isPlainObject: function(t) {
                        if (!t || "object" !== a.type(t) || t.nodeType || a.isWindow(t)) return !1;
                        try {
                            if (t.constructor && !E.call(t, "constructor") && !E.call(t.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (e) {
                            return !1
                        }
                        var n;
                        for (n in t);
                        return n === i || E.call(t, n)
                    },
                    isEmptyObject: function(t) {
                        for (var e in t) return !1;
                        return !0
                    },
                    error: function(t) {
                        throw new Error(t)
                    },
                    parseJSON: function(e) {
                        return "string" == typeof e && e ? (e = a.trim(e), t.JSON && t.JSON.parse ? t.JSON.parse(e) : g.test(e.replace(m, "@").replace(v, "]").replace(y, "")) ? new Function("return " + e)() : void a.error("Invalid JSON: " + e)) : null
                    },
                    parseXML: function(e) {
                        if ("string" != typeof e || !e) return null;
                        var n, o;
                        try {
                            t.DOMParser ? (o = new DOMParser, n = o.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
                        } catch (r) {
                            n = i
                        }
                        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || a.error("Invalid XML: " + e), n
                    },
                    noop: function() {},
                    globalEval: function(e) {
                        e && u.test(e) && (t.execScript || function(e) {
                            t.eval.call(t, e)
                        })(e)
                    },
                    camelCase: function(t) {
                        return t.replace(T, "ms-").replace(x, C)
                    },
                    nodeName: function(t, e) {
                        return t.nodeName && t.nodeName.toUpperCase() === e.toUpperCase()
                    },
                    each: function(t, e, n) {
                        var o, r = 0,
                            s = t.length,
                            l = s === i || a.isFunction(t);
                        if (n)
                            if (l) {
                                for (o in t)
                                    if (e.apply(t[o], n) === !1) break
                            } else
                                for (; r < s && e.apply(t[r++], n) !== !1;);
                        else if (l) {
                            for (o in t)
                                if (e.call(t[o], o, t[o]) === !1) break
                        } else
                            for (; r < s && e.call(t[r], r, t[r++]) !== !1;);
                        return t
                    },
                    trim: M ? function(t) {
                        return null == t ? "" : M.call(t)
                    } : function(t) {
                        return null == t ? "" : t.toString().replace(d, "").replace(p, "")
                    },
                    makeArray: function(t, e) {
                        var i = e || [];
                        if (null != t) {
                            var n = a.type(t);
                            null == t.length || "string" === n || "function" === n || "regexp" === n || a.isWindow(t) ? L.call(i, t) : a.merge(i, t)
                        }
                        return i
                    },
                    inArray: function(t, e, i) {
                        var n;
                        if (e) {
                            if (B) return B.call(e, t, i);
                            for (n = e.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                                if (i in e && e[i] === t) return i
                        }
                        return -1
                    },
                    merge: function(t, e) {
                        var n = t.length,
                            o = 0;
                        if ("number" == typeof e.length)
                            for (var r = e.length; o < r; o++) t[n++] = e[o];
                        else
                            for (; e[o] !== i;) t[n++] = e[o++];
                        return t.length = n, t
                    },
                    grep: function(t, e, i) {
                        var n, o = [];
                        i = !!i;
                        for (var r = 0, s = t.length; r < s; r++) n = !!e(t[r], r), i !== n && o.push(t[r]);
                        return o
                    },
                    map: function(t, e, n) {
                        var o, r, s = [],
                            l = 0,
                            h = t.length,
                            c = t instanceof a || h !== i && "number" == typeof h && (h > 0 && t[0] && t[h - 1] || 0 === h || a.isArray(t));
                        if (c)
                            for (; l < h; l++) o = e(t[l], l, n), null != o && (s[s.length] = o);
                        else
                            for (r in t) o = e(t[r], r, n), null != o && (s[s.length] = o);
                        return s.concat.apply([], s)
                    },
                    guid: 1,
                    proxy: function(t, e) {
                        if ("string" == typeof e) {
                            var n = t[e];
                            e = t, t = n
                        }
                        if (!a.isFunction(t)) return i;
                        var o = A.call(arguments, 2),
                            r = function() {
                                return t.apply(e, o.concat(A.call(arguments)))
                            };
                        return r.guid = t.guid = t.guid || r.guid || a.guid++, r
                    },
                    access: function(t, e, n, o, r, s, l) {
                        var h, c = null == n,
                            u = 0,
                            d = t.length;
                        if (n && "object" == typeof n) {
                            for (u in n) a.access(t, e, u, n[u], 1, s, o);
                            r = 1
                        } else if (o !== i) {
                            if (h = l === i && a.isFunction(o), c && (h ? (h = e, e = function(t, e, i) {
                                    return h.call(a(t), i)
                                }) : (e.call(t, o), e = null)), e)
                                for (; u < d; u++) e(t[u], n, h ? o.call(t[u], u, e(t[u], n)) : o, l);
                            r = 1
                        }
                        return r ? t : c ? e.call(t) : d ? e(t[0], n) : s
                    },
                    now: function() {
                        return (new Date).getTime()
                    },
                    uaMatch: function(t) {
                        t = t.toLowerCase();
                        var e = b.exec(t) || w.exec(t) || P.exec(t) || t.indexOf("compatible") < 0 && _.exec(t) || [];
                        return {
                            browser: e[1] || "",
                            version: e[2] || "0"
                        }
                    },
                    sub: function() {
                        function t(e, i) {
                            return new t.fn.init(e, i)
                        }
                        a.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(i, n) {
                            return n && n instanceof a && !(n instanceof t) && (n = t(n)), a.fn.init.call(this, i, n, e)
                        }, t.fn.init.prototype = t.fn;
                        var e = t(I);
                        return t
                    },
                    browser: {}
                }), a.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(t, e) {
                    O["[object " + e + "]"] = e.toLowerCase()
                }), o = a.uaMatch(S), o.browser && (a.browser[o.browser] = !0, a.browser.version = o.version), a.browser.webkit && (a.browser.safari = !0), u.test(" ") && (d = /^[\s\xA0]+/, p = /[\s\xA0]+$/), n = a(I), I.addEventListener ? s = function() {
                    I.removeEventListener("DOMContentLoaded", s, !1), a.ready()
                } : I.attachEvent && (s = function() {
                    "complete" === I.readyState && (I.detachEvent("onreadystatechange", s), a.ready())
                }), a
            }(),
            z = {};
        N.Callbacks = function(t) {
            t = t ? z[t] || n(t) : {};
            var e, o, r, s, a, l, h = [],
                c = [],
                u = function(e) {
                    var i, n, o, r;
                    for (i = 0, n = e.length; i < n; i++) o = e[i], r = N.type(o), "array" === r ? u(o) : "function" === r && (t.unique && p.has(o) || h.push(o))
                },
                d = function(i, n) {
                    for (n = n || [], e = !t.memory || [i, n], o = !0, r = !0, l = s || 0, s = 0, a = h.length; h && l < a; l++)
                        if (h[l].apply(i, n) === !1 && t.stopOnFalse) {
                            e = !0;
                            break
                        }
                    r = !1, h && (t.once ? e === !0 ? p.disable() : h = [] : c && c.length && (e = c.shift(), p.fireWith(e[0], e[1])))
                },
                p = {
                    add: function() {
                        if (h) {
                            var t = h.length;
                            u(arguments), r ? a = h.length : e && e !== !0 && (s = t, d(e[0], e[1]))
                        }
                        return this
                    },
                    remove: function() {
                        if (h)
                            for (var e = arguments, i = 0, n = e.length; i < n; i++)
                                for (var o = 0; o < h.length && (e[i] !== h[o] || (r && o <= a && (a--, o <= l && l--), h.splice(o--, 1), !t.unique)); o++);
                        return this
                    },
                    has: function(t) {
                        if (h)
                            for (var e = 0, i = h.length; e < i; e++)
                                if (t === h[e]) return !0;
                        return !1
                    },
                    empty: function() {
                        return h = [], this
                    },
                    disable: function() {
                        return h = c = e = i, this
                    },
                    disabled: function() {
                        return !h
                    },
                    lock: function() {
                        return c = i, e && e !== !0 || p.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(i, n) {
                        return c && (r ? t.once || c.push([i, n]) : t.once && e || d(i, n)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return p
        };
        var R = [].slice;
        N.extend({
            Deferred: function(t) {
                var e, i = N.Callbacks("once memory"),
                    n = N.Callbacks("once memory"),
                    o = N.Callbacks("memory"),
                    r = "pending",
                    s = {
                        resolve: i,
                        reject: n,
                        notify: o
                    },
                    a = {
                        done: i.add,
                        fail: n.add,
                        progress: o.add,
                        state: function() {
                            return r
                        },
                        isResolved: i.fired,
                        isRejected: n.fired,
                        then: function(t, e, i) {
                            return l.done(t).fail(e).progress(i), this
                        },
                        always: function() {
                            return l.done.apply(l, arguments).fail.apply(l, arguments), this
                        },
                        pipe: function(t, e, i) {
                            return N.Deferred(function(n) {
                                N.each({
                                    done: [t, "resolve"],
                                    fail: [e, "reject"],
                                    progress: [i, "notify"]
                                }, function(t, e) {
                                    var i, o = e[0],
                                        r = e[1];
                                    N.isFunction(o) ? l[t](function() {
                                        i = o.apply(this, arguments), i && N.isFunction(i.promise) ? i.promise().then(n.resolve, n.reject, n.notify) : n[r + "With"](this === l ? n : this, [i])
                                    }) : l[t](n[r])
                                })
                            }).promise()
                        },
                        promise: function(t) {
                            if (null == t) t = a;
                            else
                                for (var e in a) t[e] = a[e];
                            return t
                        }
                    },
                    l = a.promise({});
                for (e in s) l[e] = s[e].fire, l[e + "With"] = s[e].fireWith;
                return l.done(function() {
                    r = "resolved"
                }, n.disable, o.lock).fail(function() {
                    r = "rejected"
                }, i.disable, o.lock), t && t.call(l, l), l
            },
            when: function(t) {
                function e(t) {
                    return function(e) {
                        n[t] = arguments.length > 1 ? R.call(arguments, 0) : e, --a || l.resolveWith(l, n)
                    }
                }

                function i(t) {
                    return function(e) {
                        s[t] = arguments.length > 1 ? R.call(arguments, 0) : e, l.notifyWith(h, s)
                    }
                }
                var n = R.call(arguments, 0),
                    o = 0,
                    r = n.length,
                    s = new Array(r),
                    a = r,
                    l = r <= 1 && t && N.isFunction(t.promise) ? t : N.Deferred(),
                    h = l.promise();
                if (r > 1) {
                    for (; o < r; o++) n[o] && n[o].promise && N.isFunction(n[o].promise) ? n[o].promise().then(e(o), l.reject, i(o)) : --a;
                    a || l.resolveWith(l, n)
                } else l !== t && l.resolveWith(l, r ? [t] : []);
                return h
            }
        }), N.support = function() {
            var e, i, n, o, r, s, a, l, h, c, u, d = I.createElement("div");
            I.documentElement;
            if (d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", i = d.getElementsByTagName("*"), n = d.getElementsByTagName("a")[0], !i || !i.length || !n) return {};
            o = I.createElement("select"), r = o.appendChild(I.createElement("option")), s = d.getElementsByTagName("input")[0], e = {
                leadingWhitespace: 3 === d.firstChild.nodeType,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /top/.test(n.getAttribute("style")),
                hrefNormalized: "/a" === n.getAttribute("href"),
                opacity: /^0.55/.test(n.style.opacity),
                cssFloat: !!n.style.cssFloat,
                checkOn: "on" === s.value,
                optSelected: r.selected,
                getSetAttribute: "t" !== d.className,
                enctype: !!I.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== I.createElement("nav").cloneNode(!0).outerHTML,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                pixelMargin: !0
            }, N.boxModel = e.boxModel = "CSS1Compat" === I.compatMode, s.checked = !0, e.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !r.disabled;
            try {
                delete d.test
            } catch (p) {
                e.deleteExpando = !1
            }
            if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function() {
                    e.noCloneEvent = !1
                }), d.cloneNode(!0).fireEvent("onclick")), s = I.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), e.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), d.appendChild(s), a = I.createDocumentFragment(), a.appendChild(d.lastChild), e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, e.appendChecked = s.checked, a.removeChild(s), a.appendChild(d), d.attachEvent)
                for (c in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) h = "on" + c, u = h in d, u || (d.setAttribute(h, "return;"), u = "function" == typeof d[h]), e[c + "Bubbles"] = u;
            return a.removeChild(d), a = o = r = d = s = null, N(function() {
                var i, n, o, r, s, a, h, c, p, f, g, m, v = I.getElementsByTagName("body")[0];
                v && (h = 1, m = "padding:0;margin:0;border:", f = "position:absolute;top:0;left:0;width:1px;height:1px;", g = m + "0;visibility:hidden;", c = "style='" + f + m + "5px solid #000;", p = "<div " + c + "display:block;'><div style='" + m + "0;display:block;overflow:hidden;'></div></div><table " + c + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", i = I.createElement("div"), i.style.cssText = g + "width:0;height:0;position:static;top:0;margin-top:" + h + "px", v.insertBefore(i, v.firstChild), d = I.createElement("div"), i.appendChild(d), d.innerHTML = "<table><tr><td style='" + m + "0;display:none'></td><td>t</td></tr></table>", l = d.getElementsByTagName("td"), u = 0 === l[0].offsetHeight, l[0].style.display = "", l[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === l[0].offsetHeight, t.getComputedStyle && (d.innerHTML = "", a = I.createElement("div"), a.style.width = "0", a.style.marginRight = "0", d.style.width = "2px", d.appendChild(a), e.reliableMarginRight = 0 === (parseInt((t.getComputedStyle(a, null) || {
                    marginRight: 0
                }).marginRight, 10) || 0)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.width = d.style.padding = "1px", d.style.border = 0, d.style.overflow = "hidden", d.style.display = "inline", d.style.zoom = 1, e.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div style='width:5px;'></div>", e.shrinkWrapBlocks = 3 !== d.offsetWidth), d.style.cssText = f + g, d.innerHTML = p, n = d.firstChild, o = n.firstChild, r = n.nextSibling.firstChild.firstChild, s = {
                    doesNotAddBorder: 5 !== o.offsetTop,
                    doesAddBorderForTableAndCells: 5 === r.offsetTop
                }, o.style.position = "fixed", o.style.top = "20px", s.fixedPosition = 20 === o.offsetTop || 15 === o.offsetTop, o.style.position = o.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", s.subtractsBorderForOverflowNotVisible = o.offsetTop === -5, s.doesNotIncludeMarginInBodyOffset = v.offsetTop !== h, t.getComputedStyle && (d.style.marginTop = "1%", e.pixelMargin = "1%" !== (t.getComputedStyle(d, null) || {
                    marginTop: 0
                }).marginTop), "undefined" != typeof i.style.zoom && (i.style.zoom = 1), v.removeChild(i), a = d = i = null, N.extend(e, s))
            }), e
        }();
        var D = /^(?:\{.*\}|\[.*\])$/,
            W = /([A-Z])/g;
        N.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (N.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(t) {
                return t = t.nodeType ? N.cache[t[N.expando]] : t[N.expando], !!t && !r(t)
            },
            data: function(t, e, n, o) {
                if (N.acceptData(t)) {
                    var r, s, a, l = N.expando,
                        h = "string" == typeof e,
                        c = t.nodeType,
                        u = c ? N.cache : t,
                        d = c ? t[l] : t[l] && l,
                        p = "events" === e;
                    if (d && u[d] && (p || o || u[d].data) || !h || n !== i) return d || (c ? t[l] = d = ++N.uuid : d = l), u[d] || (u[d] = {}, c || (u[d].toJSON = N.noop)), "object" != typeof e && "function" != typeof e || (o ? u[d] = N.extend(u[d], e) : u[d].data = N.extend(u[d].data, e)), r = s = u[d], o || (s.data || (s.data = {}), s = s.data), n !== i && (s[N.camelCase(e)] = n), p && !s[e] ? r.events : (h ? (a = s[e], null == a && (a = s[N.camelCase(e)])) : a = s, a)
                }
            },
            removeData: function(t, e, i) {
                if (N.acceptData(t)) {
                    var n, o, s, a = N.expando,
                        l = t.nodeType,
                        h = l ? N.cache : t,
                        c = l ? t[a] : a;
                    if (h[c]) {
                        if (e && (n = i ? h[c] : h[c].data)) {
                            N.isArray(e) || (e in n ? e = [e] : (e = N.camelCase(e), e = e in n ? [e] : e.split(" ")));
                            for (o = 0, s = e.length; o < s; o++) delete n[e[o]];
                            if (!(i ? r : N.isEmptyObject)(n)) return
                        }(i || (delete h[c].data, r(h[c]))) && (N.support.deleteExpando || !h.setInterval ? delete h[c] : h[c] = null, l && (N.support.deleteExpando ? delete t[a] : t.removeAttribute ? t.removeAttribute(a) : t[a] = null))
                    }
                }
            },
            _data: function(t, e, i) {
                return N.data(t, e, i, !0)
            },
            acceptData: function(t) {
                if (t.nodeName) {
                    var e = N.noData[t.nodeName.toLowerCase()];
                    if (e) return !(e === !0 || t.getAttribute("classid") !== e)
                }
                return !0
            }
        }), N.fn.extend({
            data: function(t, e) {
                var n, r, s, a, l, h = this[0],
                    c = 0,
                    u = null;
                if (t === i) {
                    if (this.length && (u = N.data(h), 1 === h.nodeType && !N._data(h, "parsedAttrs"))) {
                        for (s = h.attributes, l = s.length; c < l; c++) a = s[c].name, 0 === a.indexOf("data-") && (a = N.camelCase(a.substring(5)), o(h, a, u[a]));
                        N._data(h, "parsedAttrs", !0)
                    }
                    return u
                }
                return "object" == typeof t ? this.each(function() {
                    N.data(this, t)
                }) : (n = t.split(".", 2), n[1] = n[1] ? "." + n[1] : "", r = n[1] + "!", N.access(this, function(e) {
                    return e === i ? (u = this.triggerHandler("getData" + r, [n[0]]), u === i && h && (u = N.data(h, t), u = o(h, t, u)), u === i && n[1] ? this.data(n[0]) : u) : (n[1] = e, void this.each(function() {
                        var i = N(this);
                        i.triggerHandler("setData" + r, n), N.data(this, t, e), i.triggerHandler("changeData" + r, n)
                    }))
                }, null, e, arguments.length > 1, null, !1))
            },
            removeData: function(t) {
                return this.each(function() {
                    N.removeData(this, t)
                })
            }
        }), N.extend({
            _mark: function(t, e) {
                t && (e = (e || "fx") + "mark", N._data(t, e, (N._data(t, e) || 0) + 1))
            },
            _unmark: function(t, e, i) {
                if (t !== !0 && (i = e, e = t, t = !1), e) {
                    i = i || "fx";
                    var n = i + "mark",
                        o = t ? 0 : (N._data(e, n) || 1) - 1;
                    o ? N._data(e, n, o) : (N.removeData(e, n, !0), s(e, i, "mark"))
                }
            },
            queue: function(t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = N._data(t, e), i && (!n || N.isArray(i) ? n = N._data(t, e, N.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = N.queue(t, e),
                    n = i.shift(),
                    o = {};
                "inprogress" === n && (n = i.shift()), n && ("fx" === e && i.unshift("inprogress"), N._data(t, e + ".run", o), n.call(t, function() {
                    N.dequeue(t, e)
                }, o)), i.length || (N.removeData(t, e + "queue " + e + ".run", !0), s(t, e, "queue"))
            }
        }), N.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? N.queue(this[0], t) : e === i ? this : this.each(function() {
                    var i = N.queue(this, t, e);
                    "fx" === t && "inprogress" !== i[0] && N.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    N.dequeue(this, t)
                })
            },
            delay: function(t, e) {
                return t = N.fx ? N.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() {
                        clearTimeout(n)
                    }
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                function n() {
                    --l || r.resolveWith(s, [s])
                }
                "string" != typeof t && (e = t, t = i), t = t || "fx";
                for (var o, r = N.Deferred(), s = this, a = s.length, l = 1, h = t + "defer", c = t + "queue", u = t + "mark"; a--;)(o = N.data(s[a], h, i, !0) || (N.data(s[a], c, i, !0) || N.data(s[a], u, i, !0)) && N.data(s[a], h, N.Callbacks("once memory"), !0)) && (l++, o.add(n));
                return n(), r.promise(e)
            }
        });
        var q, H, j, U = /[\n\t\r]/g,
            V = /\s+/,
            X = /\r/g,
            Y = /^(?:button|input)$/i,
            G = /^(?:button|input|object|select|textarea)$/i,
            Z = /^a(?:rea)?$/i,
            J = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            $ = N.support.getSetAttribute;
        N.fn.extend({
            attr: function(t, e) {
                return N.access(this, N.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    N.removeAttr(this, t)
                })
            },
            prop: function(t, e) {
                return N.access(this, N.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = N.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = i, delete this[t]
                    } catch (e) {}
                })
            },
            addClass: function(t) {
                var e, i, n, o, r, s, a;
                if (N.isFunction(t)) return this.each(function(e) {
                    N(this).addClass(t.call(this, e, this.className))
                });
                if (t && "string" == typeof t)
                    for (e = t.split(V), i = 0, n = this.length; i < n; i++)
                        if (o = this[i], 1 === o.nodeType)
                            if (o.className || 1 !== e.length) {
                                for (r = " " + o.className + " ", s = 0, a = e.length; s < a; s++) ~r.indexOf(" " + e[s] + " ") || (r += e[s] + " ");
                                o.className = N.trim(r)
                            } else o.className = t;
                return this
            },
            removeClass: function(t) {
                var e, n, o, r, s, a, l;
                if (N.isFunction(t)) return this.each(function(e) {
                    N(this).removeClass(t.call(this, e, this.className))
                });
                if (t && "string" == typeof t || t === i)
                    for (e = (t || "").split(V), n = 0, o = this.length; n < o; n++)
                        if (r = this[n], 1 === r.nodeType && r.className)
                            if (t) {
                                for (s = (" " + r.className + " ").replace(U, " "), a = 0, l = e.length; a < l; a++) s = s.replace(" " + e[a] + " ", " ");
                                r.className = N.trim(s)
                            } else r.className = "";
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t,
                    n = "boolean" == typeof e;
                return N.isFunction(t) ? this.each(function(i) {
                    N(this).toggleClass(t.call(this, i, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === i)
                        for (var o, r = 0, s = N(this), a = e, l = t.split(V); o = l[r++];) a = n ? a : !s.hasClass(o), s[a ? "addClass" : "removeClass"](o);
                    else "undefined" !== i && "boolean" !== i || (this.className && N._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : N._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(U, " ").indexOf(e) > -1) return !0;
                return !1
            },
            val: function(t) {
                var e, n, o, r = this[0]; {
                    if (arguments.length) return o = N.isFunction(t), this.each(function(n) {
                        var r, s = N(this);
                        1 === this.nodeType && (r = o ? t.call(this, n, s.val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : N.isArray(r) && (r = N.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = N.valHooks[this.type] || N.valHooks[this.nodeName.toLowerCase()], e && "set" in e && e.set(this, r, "value") !== i || (this.value = r))
                    });
                    if (r) return e = N.valHooks[r.type] || N.valHooks[r.nodeName.toLowerCase()], e && "get" in e && (n = e.get(r, "value")) !== i ? n : (n = r.value, "string" == typeof n ? n.replace(X, "") : null == n ? "" : n)
                }
            }
        }), N.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = t.attributes.value;
                        return !e || e.specified ? t.value : t.text
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, n, o, r = t.selectedIndex,
                            s = [],
                            a = t.options,
                            l = "select-one" === t.type;
                        if (r < 0) return null;
                        for (i = l ? r : 0, n = l ? r + 1 : a.length; i < n; i++)
                            if (o = a[i], o.selected && (N.support.optDisabled ? !o.disabled : null === o.getAttribute("disabled")) && (!o.parentNode.disabled || !N.nodeName(o.parentNode, "optgroup"))) {
                                if (e = N(o).val(), l) return e;
                                s.push(e)
                            }
                        return l && !s.length && a.length ? N(a[r]).val() : s
                    },
                    set: function(t, e) {
                        var i = N.makeArray(e);
                        return N(t).find("option").each(function() {
                            this.selected = N.inArray(N(this).val(), i) >= 0
                        }), i.length || (t.selectedIndex = -1), i
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function(t, e, n, o) {
                var r, s, a, l = t.nodeType;
                if (t && 3 !== l && 8 !== l && 2 !== l) return o && e in N.attrFn ? N(t)[e](n) : "undefined" == typeof t.getAttribute ? N.prop(t, e, n) : (a = 1 !== l || !N.isXMLDoc(t), a && (e = e.toLowerCase(), s = N.attrHooks[e] || (J.test(e) ? H : q)), n !== i ? null === n ? void N.removeAttr(t, e) : s && "set" in s && a && (r = s.set(t, n, e)) !== i ? r : (t.setAttribute(e, "" + n), n) : s && "get" in s && a && null !== (r = s.get(t, e)) ? r : (r = t.getAttribute(e), null === r ? i : r))
            },
            removeAttr: function(t, e) {
                var i, n, o, r, s, a = 0;
                if (e && 1 === t.nodeType)
                    for (n = e.toLowerCase().split(V), r = n.length; a < r; a++) o = n[a], o && (i = N.propFix[o] || o, s = J.test(o), s || N.attr(t, o, ""), t.removeAttribute($ ? o : i), s && i in t && (t[i] = !1))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (Y.test(t.nodeName) && t.parentNode) N.error("type property can't be changed");
                        else if (!N.support.radioValue && "radio" === e && N.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                },
                value: {
                    get: function(t, e) {
                        return q && N.nodeName(t, "button") ? q.get(t, e) : e in t ? t.value : null
                    },
                    set: function(t, e, i) {
                        return q && N.nodeName(t, "button") ? q.set(t, e, i) : void(t.value = e)
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(t, e, n) {
                var o, r, s, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !N.isXMLDoc(t), s && (e = N.propFix[e] || e, r = N.propHooks[e]), n !== i ? r && "set" in r && (o = r.set(t, n, e)) !== i ? o : t[e] = n : r && "get" in r && null !== (o = r.get(t, e)) ? o : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = t.getAttributeNode("tabindex");
                        return e && e.specified ? parseInt(e.value, 10) : G.test(t.nodeName) || Z.test(t.nodeName) && t.href ? 0 : i
                    }
                }
            }
        }), N.attrHooks.tabindex = N.propHooks.tabIndex, H = {
            get: function(t, e) {
                var n, o = N.prop(t, e);
                return o === !0 || "boolean" != typeof o && (n = t.getAttributeNode(e)) && n.nodeValue !== !1 ? e.toLowerCase() : i
            },
            set: function(t, e, i) {
                var n;
                return e === !1 ? N.removeAttr(t, i) : (n = N.propFix[i] || i, n in t && (t[n] = !0), t.setAttribute(i, i.toLowerCase())), i
            }
        }, $ || (j = {
            name: !0,
            id: !0,
            coords: !0
        }, q = N.valHooks.button = {
            get: function(t, e) {
                var n;
                return n = t.getAttributeNode(e), n && (j[e] ? "" !== n.nodeValue : n.specified) ? n.nodeValue : i
            },
            set: function(t, e, i) {
                var n = t.getAttributeNode(i);
                return n || (n = I.createAttribute(i), t.setAttributeNode(n)), n.nodeValue = e + ""
            }
        }, N.attrHooks.tabindex.set = q.set, N.each(["width", "height"], function(t, e) {
            N.attrHooks[e] = N.extend(N.attrHooks[e], {
                set: function(t, i) {
                    if ("" === i) return t.setAttribute(e, "auto"), i
                }
            })
        }), N.attrHooks.contenteditable = {
            get: q.get,
            set: function(t, e, i) {
                "" === e && (e = "false"), q.set(t, e, i)
            }
        }), N.support.hrefNormalized || N.each(["href", "src", "width", "height"], function(t, e) {
            N.attrHooks[e] = N.extend(N.attrHooks[e], {
                get: function(t) {
                    var n = t.getAttribute(e, 2);
                    return null === n ? i : n
                }
            })
        }), N.support.style || (N.attrHooks.style = {
            get: function(t) {
                return t.style.cssText.toLowerCase() || i
            },
            set: function(t, e) {
                return t.style.cssText = "" + e
            }
        }), N.support.optSelected || (N.propHooks.selected = N.extend(N.propHooks.selected, {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        })), N.support.enctype || (N.propFix.enctype = "encoding"), N.support.checkOn || N.each(["radio", "checkbox"], function() {
            N.valHooks[this] = {
                get: function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                }
            }
        }), N.each(["radio", "checkbox"], function() {
            N.valHooks[this] = N.extend(N.valHooks[this], {
                set: function(t, e) {
                    if (N.isArray(e)) return t.checked = N.inArray(N(t).val(), e) >= 0
                }
            })
        });
        var Q = /^(?:textarea|input|select)$/i,
            K = /^([^\.]*)?(?:\.(.+))?$/,
            tt = /(?:^|\s)hover(\.\S+)?\b/,
            et = /^key/,
            it = /^(?:mouse|contextmenu)|click/,
            nt = /^(?:focusinfocus|focusoutblur)$/,
            ot = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
            rt = function(t) {
                var e = ot.exec(t);
                return e && (e[1] = (e[1] || "").toLowerCase(), e[3] = e[3] && new RegExp("(?:^|\\s)" + e[3] + "(?:\\s|$)")), e
            },
            st = function(t, e) {
                var i = t.attributes || {};
                return (!e[1] || t.nodeName.toLowerCase() === e[1]) && (!e[2] || (i.id || {}).value === e[2]) && (!e[3] || e[3].test((i["class"] || {}).value))
            },
            at = function(t) {
                return N.event.special.hover ? t : t.replace(tt, "mouseenter$1 mouseleave$1")
            };
        N.event = {
                add: function(t, e, n, o, r) {
                    var s, a, l, h, c, u, d, p, f, g, m;
                    if (3 !== t.nodeType && 8 !== t.nodeType && e && n && (s = N._data(t))) {
                        for (n.handler && (f = n, n = f.handler, r = f.selector), n.guid || (n.guid = N.guid++), l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function(t) {
                                return "undefined" == typeof N || t && N.event.triggered === t.type ? i : N.event.dispatch.apply(a.elem, arguments)
                            }, a.elem = t), e = N.trim(at(e)).split(" "), h = 0; h < e.length; h++) c = K.exec(e[h]) || [], u = c[1], d = (c[2] || "").split(".").sort(), m = N.event.special[u] || {}, u = (r ? m.delegateType : m.bindType) || u, m = N.event.special[u] || {}, p = N.extend({
                            type: u,
                            origType: c[1],
                            data: o,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            quick: r && rt(r),
                            namespace: d.join(".")
                        }, f), g = l[u], g || (g = l[u] = [], g.delegateCount = 0, m.setup && m.setup.call(t, o, d, a) !== !1 || (t.addEventListener ? t.addEventListener(u, a, !1) : t.attachEvent && t.attachEvent("on" + u, a))), m.add && (m.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), r ? g.splice(g.delegateCount++, 0, p) : g.push(p), N.event.global[u] = !0;
                        t = null
                    }
                },
                global: {},
                remove: function(t, e, i, n, o) {
                    var r, s, a, l, h, c, u, d, p, f, g, m, v = N.hasData(t) && N._data(t);
                    if (v && (d = v.events)) {
                        for (e = N.trim(at(e || "")).split(" "), r = 0; r < e.length; r++)
                            if (s = K.exec(e[r]) || [], a = l = s[1], h = s[2], a) {
                                for (p = N.event.special[a] || {}, a = (n ? p.delegateType : p.bindType) || a, g = d[a] || [], c = g.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, u = 0; u < g.length; u++) m = g[u], !o && l !== m.origType || i && i.guid !== m.guid || h && !h.test(m.namespace) || n && n !== m.selector && ("**" !== n || !m.selector) || (g.splice(u--, 1), m.selector && g.delegateCount--, p.remove && p.remove.call(t, m));
                                0 === g.length && c !== g.length && (p.teardown && p.teardown.call(t, h) !== !1 || N.removeEvent(t, a, v.handle), delete d[a])
                            } else
                                for (a in d) N.event.remove(t, a + e[r], i, n, !0);
                        N.isEmptyObject(d) && (f = v.handle, f && (f.elem = null), N.removeData(t, ["events", "handle"], !0))
                    }
                },
                customEvent: {
                    getData: !0,
                    setData: !0,
                    changeData: !0
                },
                trigger: function(e, n, o, r) {
                    if (!o || 3 !== o.nodeType && 8 !== o.nodeType) {
                        var s, a, l, h, c, u, d, p, f, g, m = e.type || e,
                            v = [];
                        if (!nt.test(m + N.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), a = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), o && !N.event.customEvent[m] || N.event.global[m]))
                            if (e = "object" == typeof e ? e[N.expando] ? e : new N.Event(m, e) : new N.Event(m), e.type = m, e.isTrigger = !0, e.exclusive = a, e.namespace = v.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, u = m.indexOf(":") < 0 ? "on" + m : "", o) {
                                if (e.result = i, e.target || (e.target = o), n = null != n ? N.makeArray(n) : [], n.unshift(e), d = N.event.special[m] || {}, !d.trigger || d.trigger.apply(o, n) !== !1) {
                                    if (f = [
                                            [o, d.bindType || m]
                                        ], !r && !d.noBubble && !N.isWindow(o)) {
                                        for (g = d.delegateType || m, h = nt.test(g + m) ? o : o.parentNode, c = null; h; h = h.parentNode) f.push([h, g]), c = h;
                                        c && c === o.ownerDocument && f.push([c.defaultView || c.parentWindow || t, g])
                                    }
                                    for (l = 0; l < f.length && !e.isPropagationStopped(); l++) h = f[l][0], e.type = f[l][1], p = (N._data(h, "events") || {})[e.type] && N._data(h, "handle"), p && p.apply(h, n), p = u && h[u], p && N.acceptData(h) && p.apply(h, n) === !1 && e.preventDefault();
                                    return e.type = m, r || e.isDefaultPrevented() || d._default && d._default.apply(o.ownerDocument, n) !== !1 || "click" === m && N.nodeName(o, "a") || !N.acceptData(o) || u && o[m] && ("focus" !== m && "blur" !== m || 0 !== e.target.offsetWidth) && !N.isWindow(o) && (c = o[u], c && (o[u] = null), N.event.triggered = m, o[m](), N.event.triggered = i, c && (o[u] = c)), e.result
                                }
                            } else {
                                s = N.cache;
                                for (l in s) s[l].events && s[l].events[m] && N.event.trigger(e, n, s[l].handle.elem, !0)
                            }
                    }
                },
                dispatch: function(e) {
                    e = N.event.fix(e || t.event);
                    var n, o, r, s, a, l, h, c, u, d, p = (N._data(this, "events") || {})[e.type] || [],
                        f = p.delegateCount,
                        g = [].slice.call(arguments, 0),
                        m = !e.exclusive && !e.namespace,
                        v = N.event.special[e.type] || {},
                        y = [];
                    if (g[0] = e, e.delegateTarget = this, !v.preDispatch || v.preDispatch.call(this, e) !== !1) {
                        if (f && (!e.button || "click" !== e.type))
                            for (s = N(this), s.context = this.ownerDocument || this, r = e.target; r != this; r = r.parentNode || this)
                                if (r.disabled !== !0) {
                                    for (l = {}, c = [], s[0] = r, n = 0; n < f; n++) u = p[n], d = u.selector, l[d] === i && (l[d] = u.quick ? st(r, u.quick) : s.is(d)),
                                        l[d] && c.push(u);
                                    c.length && y.push({
                                        elem: r,
                                        matches: c
                                    })
                                }
                        for (p.length > f && y.push({
                                elem: this,
                                matches: p.slice(f)
                            }), n = 0; n < y.length && !e.isPropagationStopped(); n++)
                            for (h = y[n], e.currentTarget = h.elem, o = 0; o < h.matches.length && !e.isImmediatePropagationStopped(); o++) u = h.matches[o], (m || !e.namespace && !u.namespace || e.namespace_re && e.namespace_re.test(u.namespace)) && (e.data = u.data, e.handleObj = u, a = ((N.event.special[u.origType] || {}).handle || u.handler).apply(h.elem, g), a !== i && (e.result = a, a === !1 && (e.preventDefault(), e.stopPropagation())));
                        return v.postDispatch && v.postDispatch.call(this, e), e.result
                    }
                },
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, e) {
                        var n, o, r, s = e.button,
                            a = e.fromElement;
                        return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || I, o = n.documentElement, r = n.body, t.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || s === i || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                    }
                },
                fix: function(t) {
                    if (t[N.expando]) return t;
                    var e, n, o = t,
                        r = N.event.fixHooks[t.type] || {},
                        s = r.props ? this.props.concat(r.props) : this.props;
                    for (t = N.Event(o), e = s.length; e;) n = s[--e], t[n] = o[n];
                    return t.target || (t.target = o.srcElement || I), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey === i && (t.metaKey = t.ctrlKey), r.filter ? r.filter(t, o) : t
                },
                special: {
                    ready: {
                        setup: N.bindReady
                    },
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        delegateType: "focusin"
                    },
                    blur: {
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        setup: function(t, e, i) {
                            N.isWindow(this) && (this.onbeforeunload = i)
                        },
                        teardown: function(t, e) {
                            this.onbeforeunload === e && (this.onbeforeunload = null)
                        }
                    }
                },
                simulate: function(t, e, i, n) {
                    var o = N.extend(new N.Event, i, {
                        type: t,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    n ? N.event.trigger(o, null, e) : N.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
                }
            }, N.event.handle = N.event.dispatch, N.removeEvent = I.removeEventListener ? function(t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i, !1)
            } : function(t, e, i) {
                t.detachEvent && t.detachEvent("on" + e, i)
            }, N.Event = function(t, e) {
                return this instanceof N.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : a) : this.type = t, e && N.extend(this, e), this.timeStamp = t && t.timeStamp || N.now(), void(this[N.expando] = !0)) : new N.Event(t, e)
            }, N.Event.prototype = {
                preventDefault: function() {
                    this.isDefaultPrevented = l;
                    var t = this.originalEvent;
                    t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function() {
                    this.isPropagationStopped = l;
                    var t = this.originalEvent;
                    t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = l, this.stopPropagation()
                },
                isDefaultPrevented: a,
                isPropagationStopped: a,
                isImmediatePropagationStopped: a
            }, N.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(t, e) {
                N.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var i, n = this,
                            o = t.relatedTarget,
                            r = t.handleObj;
                        r.selector;
                        return o && (o === n || N.contains(n, o)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                    }
                }
            }), N.support.submitBubbles || (N.event.special.submit = {
                setup: function() {
                    return !N.nodeName(this, "form") && void N.event.add(this, "click._submit keypress._submit", function(t) {
                        var e = t.target,
                            n = N.nodeName(e, "input") || N.nodeName(e, "button") ? e.form : i;
                        n && !n._submit_attached && (N.event.add(n, "submit._submit", function(t) {
                            t._submit_bubble = !0
                        }), n._submit_attached = !0)
                    })
                },
                postDispatch: function(t) {
                    t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && N.event.simulate("submit", this.parentNode, t, !0))
                },
                teardown: function() {
                    return !N.nodeName(this, "form") && void N.event.remove(this, "._submit")
                }
            }), N.support.changeBubbles || (N.event.special.change = {
                setup: function() {
                    return Q.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (N.event.add(this, "propertychange._change", function(t) {
                        "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                    }), N.event.add(this, "click._change", function(t) {
                        this._just_changed && !t.isTrigger && (this._just_changed = !1, N.event.simulate("change", this, t, !0))
                    })), !1) : void N.event.add(this, "beforeactivate._change", function(t) {
                        var e = t.target;
                        Q.test(e.nodeName) && !e._change_attached && (N.event.add(e, "change._change", function(t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || N.event.simulate("change", this.parentNode, t, !0)
                        }), e._change_attached = !0)
                    })
                },
                handle: function(t) {
                    var e = t.target;
                    if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return N.event.remove(this, "._change"), Q.test(this.nodeName)
                }
            }), N.support.focusinBubbles || N.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var i = 0,
                    n = function(t) {
                        N.event.simulate(e, t.target, N.event.fix(t), !0)
                    };
                N.event.special[e] = {
                    setup: function() {
                        0 === i++ && I.addEventListener(t, n, !0)
                    },
                    teardown: function() {
                        0 === --i && I.removeEventListener(t, n, !0)
                    }
                }
            }), N.fn.extend({
                on: function(t, e, n, o, r) {
                    var s, l;
                    if ("object" == typeof t) {
                        "string" != typeof e && (n = n || e, e = i);
                        for (l in t) this.on(l, e, n, t[l], r);
                        return this
                    }
                    if (null == n && null == o ? (o = e, n = e = i) : null == o && ("string" == typeof e ? (o = n, n = i) : (o = n, n = e, e = i)), o === !1) o = a;
                    else if (!o) return this;
                    return 1 === r && (s = o, o = function(t) {
                        return N().off(t), s.apply(this, arguments)
                    }, o.guid = s.guid || (s.guid = N.guid++)), this.each(function() {
                        N.event.add(this, t, o, n, e)
                    })
                },
                one: function(t, e, i, n) {
                    return this.on(t, e, i, n, 1)
                },
                off: function(t, e, n) {
                    if (t && t.preventDefault && t.handleObj) {
                        var o = t.handleObj;
                        return N(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this
                    }
                    if ("object" == typeof t) {
                        for (var r in t) this.off(r, e, t[r]);
                        return this
                    }
                    return e !== !1 && "function" != typeof e || (n = e, e = i), n === !1 && (n = a), this.each(function() {
                        N.event.remove(this, t, n, e)
                    })
                },
                bind: function(t, e, i) {
                    return this.on(t, null, e, i)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                live: function(t, e, i) {
                    return N(this.context).on(t, this.selector, e, i), this
                },
                die: function(t, e) {
                    return N(this.context).off(t, this.selector || "**", e), this
                },
                delegate: function(t, e, i, n) {
                    return this.on(e, t, i, n)
                },
                undelegate: function(t, e, i) {
                    return 1 == arguments.length ? this.off(t, "**") : this.off(e, t, i)
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        N.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    if (this[0]) return N.event.trigger(t, e, this[0], !0)
                },
                toggle: function(t) {
                    var e = arguments,
                        i = t.guid || N.guid++,
                        n = 0,
                        o = function(i) {
                            var o = (N._data(this, "lastToggle" + t.guid) || 0) % n;
                            return N._data(this, "lastToggle" + t.guid, o + 1), i.preventDefault(), e[o].apply(this, arguments) || !1
                        };
                    for (o.guid = i; n < e.length;) e[n++].guid = i;
                    return this.click(o)
                },
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), N.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
                N.fn[e] = function(t, i) {
                    return null == i && (i = t, t = null), arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                }, N.attrFn && (N.attrFn[e] = !0), et.test(e) && (N.event.fixHooks[e] = N.event.keyHooks), it.test(e) && (N.event.fixHooks[e] = N.event.mouseHooks)
            }),
            function() {
                function t(t, e, i, n, r, s) {
                    for (var a = 0, l = n.length; a < l; a++) {
                        var h = n[a];
                        if (h) {
                            var c = !1;
                            for (h = h[t]; h;) {
                                if (h[o] === i) {
                                    c = n[h.sizset];
                                    break
                                }
                                if (1 !== h.nodeType || s || (h[o] = i, h.sizset = a), h.nodeName.toLowerCase() === e) {
                                    c = h;
                                    break
                                }
                                h = h[t]
                            }
                            n[a] = c
                        }
                    }
                }

                function e(t, e, i, n, r, s) {
                    for (var a = 0, l = n.length; a < l; a++) {
                        var h = n[a];
                        if (h) {
                            var c = !1;
                            for (h = h[t]; h;) {
                                if (h[o] === i) {
                                    c = n[h.sizset];
                                    break
                                }
                                if (1 === h.nodeType)
                                    if (s || (h[o] = i, h.sizset = a), "string" != typeof e) {
                                        if (h === e) {
                                            c = !0;
                                            break
                                        }
                                    } else if (d.filter(e, [h]).length > 0) {
                                    c = h;
                                    break
                                }
                                h = h[t]
                            }
                            n[a] = c
                        }
                    }
                }
                var n = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                    o = "sizcache" + (Math.random() + "").replace(".", ""),
                    r = 0,
                    s = Object.prototype.toString,
                    a = !1,
                    l = !0,
                    h = /\\/g,
                    c = /\r\n/g,
                    u = /\W/;
                [0, 0].sort(function() {
                    return l = !1, 0
                });
                var d = function(t, e, i, o) {
                    i = i || [], e = e || I;
                    var r = e;
                    if (1 !== e.nodeType && 9 !== e.nodeType) return [];
                    if (!t || "string" != typeof t) return i;
                    var a, l, h, c, u, p, m, v, b = !0,
                        w = d.isXML(e),
                        P = [],
                        x = t;
                    do
                        if (n.exec(""), a = n.exec(x), a && (x = a[3], P.push(a[1]), a[2])) {
                            c = a[3];
                            break
                        }
                    while (a);
                    if (P.length > 1 && g.exec(t))
                        if (2 === P.length && f.relative[P[0]]) l = _(P[0] + P[1], e, o);
                        else
                            for (l = f.relative[P[0]] ? [e] : d(P.shift(), e); P.length;) t = P.shift(), f.relative[t] && (t += P.shift()), l = _(t, l, o);
                    else if (!o && P.length > 1 && 9 === e.nodeType && !w && f.match.ID.test(P[0]) && !f.match.ID.test(P[P.length - 1]) && (u = d.find(P.shift(), e, w), e = u.expr ? d.filter(u.expr, u.set)[0] : u.set[0]), e)
                        for (u = o ? {
                                expr: P.pop(),
                                set: y(o)
                            } : d.find(P.pop(), 1 !== P.length || "~" !== P[0] && "+" !== P[0] || !e.parentNode ? e : e.parentNode, w), l = u.expr ? d.filter(u.expr, u.set) : u.set, P.length > 0 ? h = y(l) : b = !1; P.length;) p = P.pop(), m = p, f.relative[p] ? m = P.pop() : p = "", null == m && (m = e), f.relative[p](h, m, w);
                    else h = P = [];
                    if (h || (h = l), h || d.error(p || t), "[object Array]" === s.call(h))
                        if (b)
                            if (e && 1 === e.nodeType)
                                for (v = 0; null != h[v]; v++) h[v] && (h[v] === !0 || 1 === h[v].nodeType && d.contains(e, h[v])) && i.push(l[v]);
                            else
                                for (v = 0; null != h[v]; v++) h[v] && 1 === h[v].nodeType && i.push(l[v]);
                    else i.push.apply(i, h);
                    else y(h, i);
                    return c && (d(c, r, i, o), d.uniqueSort(i)), i
                };
                d.uniqueSort = function(t) {
                    if (w && (a = l, t.sort(w), a))
                        for (var e = 1; e < t.length; e++) t[e] === t[e - 1] && t.splice(e--, 1);
                    return t
                }, d.matches = function(t, e) {
                    return d(t, null, null, e)
                }, d.matchesSelector = function(t, e) {
                    return d(e, null, null, [t]).length > 0
                }, d.find = function(t, e, i) {
                    var n, o, r, s, a, l;
                    if (!t) return [];
                    for (o = 0, r = f.order.length; o < r; o++)
                        if (a = f.order[o], (s = f.leftMatch[a].exec(t)) && (l = s[1], s.splice(1, 1), "\\" !== l.substr(l.length - 1) && (s[1] = (s[1] || "").replace(h, ""), n = f.find[a](s, e, i), null != n))) {
                            t = t.replace(f.match[a], "");
                            break
                        }
                    return n || (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : []), {
                        set: n,
                        expr: t
                    }
                }, d.filter = function(t, e, n, o) {
                    for (var r, s, a, l, h, c, u, p, g, m = t, v = [], y = e, b = e && e[0] && d.isXML(e[0]); t && e.length;) {
                        for (a in f.filter)
                            if (null != (r = f.leftMatch[a].exec(t)) && r[2]) {
                                if (c = f.filter[a], u = r[1], s = !1, r.splice(1, 1), "\\" === u.substr(u.length - 1)) continue;
                                if (y === v && (v = []), f.preFilter[a])
                                    if (r = f.preFilter[a](r, y, n, v, o, b)) {
                                        if (r === !0) continue
                                    } else s = l = !0;
                                if (r)
                                    for (p = 0; null != (h = y[p]); p++) h && (l = c(h, r, p, y), g = o ^ l, n && null != l ? g ? s = !0 : y[p] = !1 : g && (v.push(h), s = !0));
                                if (l !== i) {
                                    if (n || (y = v), t = t.replace(f.match[a], ""), !s) return [];
                                    break
                                }
                            }
                        if (t === m) {
                            if (null != s) break;
                            d.error(t)
                        }
                        m = t
                    }
                    return y
                }, d.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                };
                var p = d.getText = function(t) {
                        var e, i, n = t.nodeType,
                            o = "";
                        if (n) {
                            if (1 === n || 9 === n || 11 === n) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                if ("string" == typeof t.innerText) return t.innerText.replace(c, "");
                                for (t = t.firstChild; t; t = t.nextSibling) o += p(t)
                            } else if (3 === n || 4 === n) return t.nodeValue
                        } else
                            for (e = 0; i = t[e]; e++) 8 !== i.nodeType && (o += p(i));
                        return o
                    },
                    f = d.selectors = {
                        order: ["ID", "NAME", "TAG"],
                        match: {
                            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                        },
                        leftMatch: {},
                        attrMap: {
                            "class": "className",
                            "for": "htmlFor"
                        },
                        attrHandle: {
                            href: function(t) {
                                return t.getAttribute("href")
                            },
                            type: function(t) {
                                return t.getAttribute("type")
                            }
                        },
                        relative: {
                            "+": function(t, e) {
                                var i = "string" == typeof e,
                                    n = i && !u.test(e),
                                    o = i && !n;
                                n && (e = e.toLowerCase());
                                for (var r, s = 0, a = t.length; s < a; s++)
                                    if (r = t[s]) {
                                        for (;
                                            (r = r.previousSibling) && 1 !== r.nodeType;);
                                        t[s] = o || r && r.nodeName.toLowerCase() === e ? r || !1 : r === e
                                    }
                                o && d.filter(e, t, !0)
                            },
                            ">": function(t, e) {
                                var i, n = "string" == typeof e,
                                    o = 0,
                                    r = t.length;
                                if (n && !u.test(e)) {
                                    for (e = e.toLowerCase(); o < r; o++)
                                        if (i = t[o]) {
                                            var s = i.parentNode;
                                            t[o] = s.nodeName.toLowerCase() === e && s
                                        }
                                } else {
                                    for (; o < r; o++) i = t[o], i && (t[o] = n ? i.parentNode : i.parentNode === e);
                                    n && d.filter(e, t, !0)
                                }
                            },
                            "": function(i, n, o) {
                                var s, a = r++,
                                    l = e;
                                "string" != typeof n || u.test(n) || (n = n.toLowerCase(), s = n, l = t), l("parentNode", n, a, i, s, o)
                            },
                            "~": function(i, n, o) {
                                var s, a = r++,
                                    l = e;
                                "string" != typeof n || u.test(n) || (n = n.toLowerCase(), s = n, l = t), l("previousSibling", n, a, i, s, o)
                            }
                        },
                        find: {
                            ID: function(t, e, i) {
                                if ("undefined" != typeof e.getElementById && !i) {
                                    var n = e.getElementById(t[1]);
                                    return n && n.parentNode ? [n] : []
                                }
                            },
                            NAME: function(t, e) {
                                if ("undefined" != typeof e.getElementsByName) {
                                    for (var i = [], n = e.getElementsByName(t[1]), o = 0, r = n.length; o < r; o++) n[o].getAttribute("name") === t[1] && i.push(n[o]);
                                    return 0 === i.length ? null : i
                                }
                            },
                            TAG: function(t, e) {
                                if ("undefined" != typeof e.getElementsByTagName) return e.getElementsByTagName(t[1])
                            }
                        },
                        preFilter: {
                            CLASS: function(t, e, i, n, o, r) {
                                if (t = " " + t[1].replace(h, "") + " ", r) return t;
                                for (var s, a = 0; null != (s = e[a]); a++) s && (o ^ (s.className && (" " + s.className + " ").replace(/[\t\n\r]/g, " ").indexOf(t) >= 0) ? i || n.push(s) : i && (e[a] = !1));
                                return !1
                            },
                            ID: function(t) {
                                return t[1].replace(h, "")
                            },
                            TAG: function(t, e) {
                                return t[1].replace(h, "").toLowerCase()
                            },
                            CHILD: function(t) {
                                if ("nth" === t[1]) {
                                    t[2] || d.error(t[0]), t[2] = t[2].replace(/^\+|\s*/g, "");
                                    var e = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === t[2] && "2n" || "odd" === t[2] && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                                    t[2] = e[1] + (e[2] || 1) - 0, t[3] = e[3] - 0
                                } else t[2] && d.error(t[0]);
                                return t[0] = r++, t
                            },
                            ATTR: function(t, e, i, n, o, r) {
                                var s = t[1] = t[1].replace(h, "");
                                return !r && f.attrMap[s] && (t[1] = f.attrMap[s]), t[4] = (t[4] || t[5] || "").replace(h, ""), "~=" === t[2] && (t[4] = " " + t[4] + " "), t
                            },
                            PSEUDO: function(t, e, i, o, r) {
                                if ("not" === t[1]) {
                                    if (!((n.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))) {
                                        var s = d.filter(t[3], e, i, !0 ^ r);
                                        return i || o.push.apply(o, s), !1
                                    }
                                    t[3] = d(t[3], null, null, e)
                                } else if (f.match.POS.test(t[0]) || f.match.CHILD.test(t[0])) return !0;
                                return t
                            },
                            POS: function(t) {
                                return t.unshift(!0), t
                            }
                        },
                        filters: {
                            enabled: function(t) {
                                return t.disabled === !1 && "hidden" !== t.type
                            },
                            disabled: function(t) {
                                return t.disabled === !0
                            },
                            checked: function(t) {
                                return t.checked === !0
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                            },
                            parent: function(t) {
                                return !!t.firstChild
                            },
                            empty: function(t) {
                                return !t.firstChild
                            },
                            has: function(t, e, i) {
                                return !!d(i[3], t).length
                            },
                            header: function(t) {
                                return /h\d/i.test(t.nodeName)
                            },
                            text: function(t) {
                                var e = t.getAttribute("type"),
                                    i = t.type;
                                return "input" === t.nodeName.toLowerCase() && "text" === i && (e === i || null === e)
                            },
                            radio: function(t) {
                                return "input" === t.nodeName.toLowerCase() && "radio" === t.type
                            },
                            checkbox: function(t) {
                                return "input" === t.nodeName.toLowerCase() && "checkbox" === t.type
                            },
                            file: function(t) {
                                return "input" === t.nodeName.toLowerCase() && "file" === t.type
                            },
                            password: function(t) {
                                return "input" === t.nodeName.toLowerCase() && "password" === t.type
                            },
                            submit: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return ("input" === e || "button" === e) && "submit" === t.type
                            },
                            image: function(t) {
                                return "input" === t.nodeName.toLowerCase() && "image" === t.type
                            },
                            reset: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return ("input" === e || "button" === e) && "_reset" === t.type
                            },
                            button: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            input: function(t) {
                                return /input|select|textarea|button/i.test(t.nodeName)
                            },
                            focus: function(t) {
                                return t === t.ownerDocument.activeElement
                            }
                        },
                        setFilters: {
                            first: function(t, e) {
                                return 0 === e
                            },
                            last: function(t, e, i, n) {
                                return e === n.length - 1
                            },
                            even: function(t, e) {
                                return e % 2 === 0
                            },
                            odd: function(t, e) {
                                return e % 2 === 1
                            },
                            lt: function(t, e, i) {
                                return e < i[3] - 0
                            },
                            gt: function(t, e, i) {
                                return e > i[3] - 0
                            },
                            nth: function(t, e, i) {
                                return i[3] - 0 === e
                            },
                            eq: function(t, e, i) {
                                return i[3] - 0 === e
                            }
                        },
                        filter: {
                            PSEUDO: function(t, e, i, n) {
                                var o = e[1],
                                    r = f.filters[o];
                                if (r) return r(t, i, e, n);
                                if ("contains" === o) return (t.textContent || t.innerText || p([t]) || "").indexOf(e[3]) >= 0;
                                if ("not" === o) {
                                    for (var s = e[3], a = 0, l = s.length; a < l; a++)
                                        if (s[a] === t) return !1;
                                    return !0
                                }
                                d.error(o)
                            },
                            CHILD: function(t, e) {
                                var i, n, r, s, a, l, h = e[1],
                                    c = t;
                                switch (h) {
                                    case "only":
                                    case "first":
                                        for (; c = c.previousSibling;)
                                            if (1 === c.nodeType) return !1;
                                        if ("first" === h) return !0;
                                        c = t;
                                    case "last":
                                        for (; c = c.nextSibling;)
                                            if (1 === c.nodeType) return !1;
                                        return !0;
                                    case "nth":
                                        if (i = e[2], n = e[3], 1 === i && 0 === n) return !0;
                                        if (r = e[0], s = t.parentNode, s && (s[o] !== r || !t.nodeIndex)) {
                                            for (a = 0, c = s.firstChild; c; c = c.nextSibling) 1 === c.nodeType && (c.nodeIndex = ++a);
                                            s[o] = r
                                        }
                                        return l = t.nodeIndex - n, 0 === i ? 0 === l : l % i === 0 && l / i >= 0
                                }
                            },
                            ID: function(t, e) {
                                return 1 === t.nodeType && t.getAttribute("id") === e
                            },
                            TAG: function(t, e) {
                                return "*" === e && 1 === t.nodeType || !!t.nodeName && t.nodeName.toLowerCase() === e
                            },
                            CLASS: function(t, e) {
                                return (" " + (t.className || t.getAttribute("class")) + " ").indexOf(e) > -1
                            },
                            ATTR: function(t, e) {
                                var i = e[1],
                                    n = d.attr ? d.attr(t, i) : f.attrHandle[i] ? f.attrHandle[i](t) : null != t[i] ? t[i] : t.getAttribute(i),
                                    o = n + "",
                                    r = e[2],
                                    s = e[4];
                                return null == n ? "!=" === r : !r && d.attr ? null != n : "=" === r ? o === s : "*=" === r ? o.indexOf(s) >= 0 : "~=" === r ? (" " + o + " ").indexOf(s) >= 0 : s ? "!=" === r ? o !== s : "^=" === r ? 0 === o.indexOf(s) : "$=" === r ? o.substr(o.length - s.length) === s : "|=" === r && (o === s || o.substr(0, s.length + 1) === s + "-") : o && n !== !1
                            },
                            POS: function(t, e, i, n) {
                                var o = e[2],
                                    r = f.setFilters[o];
                                if (r) return r(t, i, e, n)
                            }
                        }
                    },
                    g = f.match.POS,
                    m = function(t, e) {
                        return "\\" + (e - 0 + 1)
                    };
                for (var v in f.match) f.match[v] = new RegExp(f.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source), f.leftMatch[v] = new RegExp(/(^(?:.|\r|\n)*?)/.source + f.match[v].source.replace(/\\(\d+)/g, m));
                f.match.globalPOS = g;
                var y = function(t, e) {
                    return t = Array.prototype.slice.call(t, 0), e ? (e.push.apply(e, t), e) : t
                };
                try {
                    Array.prototype.slice.call(I.documentElement.childNodes, 0)[0].nodeType
                } catch (b) {
                    y = function(t, e) {
                        var i = 0,
                            n = e || [];
                        if ("[object Array]" === s.call(t)) Array.prototype.push.apply(n, t);
                        else if ("number" == typeof t.length)
                            for (var o = t.length; i < o; i++) n.push(t[i]);
                        else
                            for (; t[i]; i++) n.push(t[i]);
                        return n
                    }
                }
                var w, P;
                I.documentElement.compareDocumentPosition ? w = function(t, e) {
                        return t === e ? (a = !0, 0) : t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                    } : (w = function(t, e) {
                        if (t === e) return a = !0, 0;
                        if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
                        var i, n, o = [],
                            r = [],
                            s = t.parentNode,
                            l = e.parentNode,
                            h = s;
                        if (s === l) return P(t, e);
                        if (!s) return -1;
                        if (!l) return 1;
                        for (; h;) o.unshift(h), h = h.parentNode;
                        for (h = l; h;) r.unshift(h), h = h.parentNode;
                        i = o.length, n = r.length;
                        for (var c = 0; c < i && c < n; c++)
                            if (o[c] !== r[c]) return P(o[c], r[c]);
                        return c === i ? P(t, r[c], -1) : P(o[c], e, 1)
                    }, P = function(t, e, i) {
                        if (t === e) return i;
                        for (var n = t.nextSibling; n;) {
                            if (n === e) return -1;
                            n = n.nextSibling
                        }
                        return 1
                    }),
                    function() {
                        var t = I.createElement("div"),
                            e = "script" + (new Date).getTime(),
                            n = I.documentElement;
                        t.innerHTML = "<a name='" + e + "'/>", n.insertBefore(t, n.firstChild), I.getElementById(e) && (f.find.ID = function(t, e, n) {
                            if ("undefined" != typeof e.getElementById && !n) {
                                var o = e.getElementById(t[1]);
                                return o ? o.id === t[1] || "undefined" != typeof o.getAttributeNode && o.getAttributeNode("id").nodeValue === t[1] ? [o] : i : []
                            }
                        }, f.filter.ID = function(t, e) {
                            var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return 1 === t.nodeType && i && i.nodeValue === e
                        }), n.removeChild(t), n = t = null
                    }(),
                    function() {
                        var t = I.createElement("div");
                        t.appendChild(I.createComment("")), t.getElementsByTagName("*").length > 0 && (f.find.TAG = function(t, e) {
                            var i = e.getElementsByTagName(t[1]);
                            if ("*" === t[1]) {
                                for (var n = [], o = 0; i[o]; o++) 1 === i[o].nodeType && n.push(i[o]);
                                i = n
                            }
                            return i
                        }), t.innerHTML = "<a href='#'></a>", t.firstChild && "undefined" != typeof t.firstChild.getAttribute && "#" !== t.firstChild.getAttribute("href") && (f.attrHandle.href = function(t) {
                            return t.getAttribute("href", 2)
                        }), t = null
                    }(), I.querySelectorAll && ! function() {
                        var t = d,
                            e = I.createElement("div"),
                            i = "__sizzle__";
                        if (e.innerHTML = "<p class='TEST'></p>", !e.querySelectorAll || 0 !== e.querySelectorAll(".TEST").length) {
                            d = function(e, n, o, r) {
                                if (n = n || I, !r && !d.isXML(n)) {
                                    var s = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(e);
                                    if (s && (1 === n.nodeType || 9 === n.nodeType)) {
                                        if (s[1]) return y(n.getElementsByTagName(e), o);
                                        if (s[2] && f.find.CLASS && n.getElementsByClassName) return y(n.getElementsByClassName(s[2]), o)
                                    }
                                    if (9 === n.nodeType) {
                                        if ("body" === e && n.body) return y([n.body], o);
                                        if (s && s[3]) {
                                            var a = n.getElementById(s[3]);
                                            if (!a || !a.parentNode) return y([], o);
                                            if (a.id === s[3]) return y([a], o)
                                        }
                                        try {
                                            return y(n.querySelectorAll(e), o)
                                        } catch (l) {}
                                    } else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                        var h = n,
                                            c = n.getAttribute("id"),
                                            u = c || i,
                                            p = n.parentNode,
                                            g = /^\s*[+~]/.test(e);
                                        c ? u = u.replace(/'/g, "\\$&") : n.setAttribute("id", u), g && p && (n = n.parentNode);
                                        try {
                                            if (!g || p) return y(n.querySelectorAll("[id='" + u + "'] " + e), o)
                                        } catch (m) {} finally {
                                            c || h.removeAttribute("id")
                                        }
                                    }
                                }
                                return t(e, n, o, r)
                            };
                            for (var n in t) d[n] = t[n];
                            e = null
                        }
                    }(),
                    function() {
                        var t = I.documentElement,
                            e = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.msMatchesSelector;
                        if (e) {
                            var i = !e.call(I.createElement("div"), "div"),
                                n = !1;
                            try {
                                e.call(I.documentElement, "[test!='']:sizzle")
                            } catch (o) {
                                n = !0
                            }
                            d.matchesSelector = function(t, o) {
                                if (o = o.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(t)) try {
                                    if (n || !f.match.PSEUDO.test(o) && !/!=/.test(o)) {
                                        var r = e.call(t, o);
                                        if (r || !i || t.document && 11 !== t.document.nodeType) return r
                                    }
                                } catch (s) {}
                                return d(o, null, null, [t]).length > 0
                            }
                        }
                    }(),
                    function() {
                        var t = I.createElement("div");
                        t.innerHTML = "<div class='test e'></div><div class='test'></div>", t.getElementsByClassName && 0 !== t.getElementsByClassName("e").length && (t.lastChild.className = "e", 1 !== t.getElementsByClassName("e").length && (f.order.splice(1, 0, "CLASS"), f.find.CLASS = function(t, e, i) {
                            if ("undefined" != typeof e.getElementsByClassName && !i) return e.getElementsByClassName(t[1])
                        }, t = null))
                    }(), I.documentElement.contains ? d.contains = function(t, e) {
                        return t !== e && (!t.contains || t.contains(e))
                    } : I.documentElement.compareDocumentPosition ? d.contains = function(t, e) {
                        return !!(16 & t.compareDocumentPosition(e))
                    } : d.contains = function() {
                        return !1
                    }, d.isXML = function(t) {
                        var e = (t ? t.ownerDocument || t : 0).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    };
                var _ = function(t, e, i) {
                    for (var n, o = [], r = "", s = e.nodeType ? [e] : e; n = f.match.PSEUDO.exec(t);) r += n[0], t = t.replace(f.match.PSEUDO, "");
                    t = f.relative[t] ? t + "*" : t;
                    for (var a = 0, l = s.length; a < l; a++) d(t, s[a], o, i);
                    return d.filter(r, o)
                };
                d.attr = N.attr, d.selectors.attrMap = {}, N.find = d, N.expr = d.selectors, N.expr[":"] = N.expr.filters, N.unique = d.uniqueSort, N.text = d.getText, N.isXMLDoc = d.isXML, N.contains = d.contains
            }();
        var lt = /Until$/,
            ht = /^(?:parents|prevUntil|prevAll)/,
            ct = /,/,
            ut = /^.[^:#\[\.,]*$/,
            dt = Array.prototype.slice,
            pt = N.expr.match.globalPOS,
            ft = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        N.fn.extend({
            find: function(t) {
                var e, i, n = this;
                if ("string" != typeof t) return N(t).filter(function() {
                    for (e = 0, i = n.length; e < i; e++)
                        if (N.contains(n[e], this)) return !0
                });
                var o, r, s, a = this.pushStack("", "find", t);
                for (e = 0, i = this.length; e < i; e++)
                    if (o = a.length, N.find(t, this[e], a), e > 0)
                        for (r = o; r < a.length; r++)
                            for (s = 0; s < o; s++)
                                if (a[s] === a[r]) {
                                    a.splice(r--, 1);
                                    break
                                }
                return a
            },
            has: function(t) {
                var e = N(t);
                return this.filter(function() {
                    for (var t = 0, i = e.length; t < i; t++)
                        if (N.contains(this, e[t])) return !0
                })
            },
            not: function(t) {
                return this.pushStack(c(this, t, !1), "not", t)
            },
            filter: function(t) {
                return this.pushStack(c(this, t, !0), "filter", t)
            },
            is: function(t) {
                return !!t && ("string" == typeof t ? pt.test(t) ? N(t, this.context).index(this[0]) >= 0 : N.filter(t, this).length > 0 : this.filter(t).length > 0)
            },
            closest: function(t, e) {
                var i, n, o = [],
                    r = this[0];
                if (N.isArray(t)) {
                    for (var s = 1; r && r.ownerDocument && r !== e;) {
                        for (i = 0; i < t.length; i++) N(r).is(t[i]) && o.push({
                            selector: t[i],
                            elem: r,
                            level: s
                        });
                        r = r.parentNode, s++
                    }
                    return o
                }
                var a = pt.test(t) || "string" != typeof t ? N(t, e || this.context) : 0;
                for (i = 0, n = this.length; i < n; i++)
                    for (r = this[i]; r;) {
                        if (a ? a.index(r) > -1 : N.find.matchesSelector(r, t)) {
                            o.push(r);
                            break
                        }
                        if (r = r.parentNode, !r || !r.ownerDocument || r === e || 11 === r.nodeType) break
                    }
                return o = o.length > 1 ? N.unique(o) : o, this.pushStack(o, "closest", t)
            },
            index: function(t) {
                return t ? "string" == typeof t ? N.inArray(this[0], N(t)) : N.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(t, e) {
                var i = "string" == typeof t ? N(t, e) : N.makeArray(t && t.nodeType ? [t] : t),
                    n = N.merge(this.get(), i);
                return this.pushStack(h(i[0]) || h(n[0]) ? n : N.unique(n))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        }), N.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return N.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return N.dir(t, "parentNode", i)
            },
            next: function(t) {
                return N.nth(t, 2, "nextSibling")
            },
            prev: function(t) {
                return N.nth(t, 2, "previousSibling")
            },
            nextAll: function(t) {
                return N.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return N.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return N.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return N.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return N.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return N.sibling(t.firstChild)
            },
            contents: function(t) {
                return N.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : N.makeArray(t.childNodes)
            }
        }, function(t, e) {
            N.fn[t] = function(i, n) {
                var o = N.map(this, e, i);
                return lt.test(t) || (n = i), n && "string" == typeof n && (o = N.filter(n, o)), o = this.length > 1 && !ft[t] ? N.unique(o) : o, (this.length > 1 || ct.test(n)) && ht.test(t) && (o = o.reverse()), this.pushStack(o, t, dt.call(arguments).join(","))
            }
        }), N.extend({
            filter: function(t, e, i) {
                return i && (t = ":not(" + t + ")"), 1 === e.length ? N.find.matchesSelector(e[0], t) ? [e[0]] : [] : N.find.matches(t, e)
            },
            dir: function(t, e, n) {
                for (var o = [], r = t[e]; r && 9 !== r.nodeType && (n === i || 1 !== r.nodeType || !N(r).is(n));) 1 === r.nodeType && o.push(r), r = r[e];
                return o
            },
            nth: function(t, e, i, n) {
                e = e || 1;
                for (var o = 0; t && (1 !== t.nodeType || ++o !== e); t = t[i]);
                return t
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        });
        var gt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            mt = / jQuery\d+="(?:\d+|null)"/g,
            vt = /^\s+/,
            yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            bt = /<([\w:]+)/,
            wt = /<tbody/i,
            Pt = /<|&#?\w+;/,
            _t = /<(?:script|style)/i,
            xt = /<(?:script|object|embed|option|style)/i,
            Tt = new RegExp("<(?:" + gt + ")[\\s/>]", "i"),
            Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
            St = /\/(java|ecma)script/i,
            kt = /^\s*<!(?:\[CDATA\[|\-\-)/,
            Et = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            Lt = u(I);
        Et.optgroup = Et.option, Et.tbody = Et.tfoot = Et.colgroup = Et.caption = Et.thead, Et.th = Et.td, N.support.htmlSerialize || (Et._default = [1, "div<div>", "</div>"]), N.fn.extend({
            text: function(t) {
                return N.access(this, function(t) {
                    return t === i ? N.text(this) : this.empty().append((this[0] && this[0].ownerDocument || I).createTextNode(t))
                }, null, t, arguments.length)
            },
            wrapAll: function(t) {
                if (N.isFunction(t)) return this.each(function(e) {
                    N(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = N(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return N.isFunction(t) ? this.each(function(e) {
                    N(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = N(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = N.isFunction(t);
                return this.each(function(i) {
                    N(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    N.nodeName(this, "body") || N(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(t) {
                    1 === this.nodeType && this.appendChild(t)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(t) {
                    1 === this.nodeType && this.insertBefore(t, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(t) {
                    this.parentNode.insertBefore(t, this)
                });
                if (arguments.length) {
                    var t = N.clean(arguments);
                    return t.push.apply(t, this.toArray()), this.pushStack(t, "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(t) {
                    this.parentNode.insertBefore(t, this.nextSibling)
                });
                if (arguments.length) {
                    var t = this.pushStack(this, "after", arguments);
                    return t.push.apply(t, N.clean(arguments)), t
                }
            },
            remove: function(t, e) {
                for (var i, n = 0; null != (i = this[n]); n++) t && !N.filter(t, [i]).length || (e || 1 !== i.nodeType || (N.cleanData(i.getElementsByTagName("*")), N.cleanData([i])), i.parentNode && i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    for (1 === t.nodeType && N.cleanData(t.getElementsByTagName("*")); t.firstChild;) t.removeChild(t.firstChild);
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return N.clone(this, t, e)
                })
            },
            html: function(t) {
                return N.access(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        o = this.length;
                    if (t === i) return 1 === e.nodeType ? e.innerHTML.replace(mt, "") : null;
                    if ("string" == typeof t && !_t.test(t) && (N.support.leadingWhitespace || !vt.test(t)) && !Et[(bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(yt, "<$1></$2>");
                        try {
                            for (; n < o; n++) e = this[n] || {}, 1 === e.nodeType && (N.cleanData(e.getElementsByTagName("*")), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function(t) {
                return this[0] && this[0].parentNode ? N.isFunction(t) ? this.each(function(e) {
                    var i = N(this),
                        n = i.html();
                    i.replaceWith(t.call(this, e, n))
                }) : ("string" != typeof t && (t = N(t).detach()), this.each(function() {
                    var e = this.nextSibling,
                        i = this.parentNode;
                    N(this).remove(), e ? N(e).before(t) : N(i).append(t)
                })) : this.length ? this.pushStack(N(N.isFunction(t) ? t() : t), "replaceWith", t) : this
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e, n) {
                var o, r, s, a, l = t[0],
                    h = [];
                if (!N.support.checkClone && 3 === arguments.length && "string" == typeof l && Ct.test(l)) return this.each(function() {
                    N(this).domManip(t, e, n, !0)
                });
                if (N.isFunction(l)) return this.each(function(o) {
                    var r = N(this);
                    t[0] = l.call(this, o, e ? r.html() : i), r.domManip(t, e, n)
                });
                if (this[0]) {
                    if (a = l && l.parentNode, o = N.support.parentNode && a && 11 === a.nodeType && a.childNodes.length === this.length ? {
                            fragment: a
                        } : N.buildFragment(t, this, h), s = o.fragment, r = 1 === s.childNodes.length ? s = s.firstChild : s.firstChild) {
                        e = e && N.nodeName(r, "tr");
                        for (var c = 0, u = this.length, p = u - 1; c < u; c++) n.call(e ? d(this[c], r) : this[c], o.cacheable || u > 1 && c < p ? N.clone(s, !0, !0) : s)
                    }
                    h.length && N.each(h, function(t, e) {
                        e.src ? N.ajax({
                            type: "GET",
                            global: !1,
                            url: e.src,
                            async: !1,
                            dataType: "script"
                        }) : N.globalEval((e.text || e.textContent || e.innerHTML || "").replace(kt, "/*$0*/")), e.parentNode && e.parentNode.removeChild(e)
                    })
                }
                return this
            }
        }), N.buildFragment = function(t, e, i) {
            var n, o, r, s, a = t[0];
            return e && e[0] && (s = e[0].ownerDocument || e[0]), s.createDocumentFragment || (s = I), !(1 === t.length && "string" == typeof a && a.length < 512 && s === I && "<" === a.charAt(0)) || xt.test(a) || !N.support.checkClone && Ct.test(a) || !N.support.html5Clone && Tt.test(a) || (o = !0, r = N.fragments[a], r && 1 !== r && (n = r)), n || (n = s.createDocumentFragment(), N.clean(t, s, n, i)), o && (N.fragments[a] = r ? n : 1), {
                fragment: n,
                cacheable: o
            }
        }, N.fragments = {}, N.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            N.fn[t] = function(i) {
                var n = [],
                    o = N(i),
                    r = 1 === this.length && this[0].parentNode;
                if (r && 11 === r.nodeType && 1 === r.childNodes.length && 1 === o.length) return o[e](this[0]), this;
                for (var s = 0, a = o.length; s < a; s++) {
                    var l = (s > 0 ? this.clone(!0) : this).get();
                    N(o[s])[e](l), n = n.concat(l)
                }
                return this.pushStack(n, t, o.selector)
            }
        }), N.extend({
            clone: function(t, e, i) {
                var n, o, r, s = N.support.html5Clone || N.isXMLDoc(t) || !Tt.test("<" + t.nodeName + ">") ? t.cloneNode(!0) : y(t);
                if (!(N.support.noCloneEvent && N.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || N.isXMLDoc(t)))
                    for (f(t, s),
                        n = g(t), o = g(s), r = 0; n[r]; ++r) o[r] && f(n[r], o[r]);
                if (e && (p(t, s), i))
                    for (n = g(t), o = g(s), r = 0; n[r]; ++r) p(n[r], o[r]);
                return n = o = null, s
            },
            clean: function(t, e, i, n) {
                var o, r, s, a = [];
                e = e || I, "undefined" == typeof e.createElement && (e = e.ownerDocument || e[0] && e[0].ownerDocument || I);
                for (var l, h = 0; null != (l = t[h]); h++)
                    if ("number" == typeof l && (l += ""), l) {
                        if ("string" == typeof l)
                            if (Pt.test(l)) {
                                l = l.replace(yt, "<$1></$2>");
                                var c, d = (bt.exec(l) || ["", ""])[1].toLowerCase(),
                                    p = Et[d] || Et._default,
                                    f = p[0],
                                    g = e.createElement("div"),
                                    m = Lt.childNodes;
                                for (e === I ? Lt.appendChild(g) : u(e).appendChild(g), g.innerHTML = p[1] + l + p[2]; f--;) g = g.lastChild;
                                if (!N.support.tbody) {
                                    var y = wt.test(l),
                                        b = "table" !== d || y ? "<table>" !== p[1] || y ? [] : g.childNodes : g.firstChild && g.firstChild.childNodes;
                                    for (s = b.length - 1; s >= 0; --s) N.nodeName(b[s], "tbody") && !b[s].childNodes.length && b[s].parentNode.removeChild(b[s])
                                }!N.support.leadingWhitespace && vt.test(l) && g.insertBefore(e.createTextNode(vt.exec(l)[0]), g.firstChild), l = g.childNodes, g && (g.parentNode.removeChild(g), m.length > 0 && (c = m[m.length - 1], c && c.parentNode && c.parentNode.removeChild(c)))
                            } else l = e.createTextNode(l);
                        var w;
                        if (!N.support.appendChecked)
                            if (l[0] && "number" == typeof(w = l.length))
                                for (s = 0; s < w; s++) v(l[s]);
                            else v(l);
                        l.nodeType ? a.push(l) : a = N.merge(a, l)
                    }
                if (i)
                    for (o = function(t) {
                            return !t.type || St.test(t.type)
                        }, h = 0; a[h]; h++)
                        if (r = a[h], n && N.nodeName(r, "script") && (!r.type || St.test(r.type))) n.push(r.parentNode ? r.parentNode.removeChild(r) : r);
                        else {
                            if (1 === r.nodeType) {
                                var P = N.grep(r.getElementsByTagName("script"), o);
                                a.splice.apply(a, [h + 1, 0].concat(P))
                            }
                            i.appendChild(r)
                        }
                return a
            },
            cleanData: function(t) {
                for (var e, i, n, o = N.cache, r = N.event.special, s = N.support.deleteExpando, a = 0; null != (n = t[a]); a++)
                    if ((!n.nodeName || !N.noData[n.nodeName.toLowerCase()]) && (i = n[N.expando])) {
                        if (e = o[i], e && e.events) {
                            for (var l in e.events) r[l] ? N.event.remove(n, l) : N.removeEvent(n, l, e.handle);
                            e.handle && (e.handle.elem = null)
                        }
                        s ? delete n[N.expando] : n.removeAttribute && n.removeAttribute(N.expando), delete o[i]
                    }
            }
        });
        var At, Mt, Bt, It = /alpha\([^)]*\)/i,
            Ft = /opacity=([^)]*)/,
            Ot = /([A-Z]|^ms)/g,
            Nt = /^[\-+]?(?:\d*\.)?\d+$/i,
            zt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
            Rt = /^([\-+])=([\-+.\de]+)/,
            Dt = /^margin/,
            Wt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            qt = ["Top", "Right", "Bottom", "Left"];
        N.fn.css = function(t, e) {
            return N.access(this, function(t, e, n) {
                return n !== i ? N.style(t, e, n) : N.css(t, e)
            }, t, e, arguments.length > 1)
        }, N.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = At(t, "opacity");
                            return "" === i ? "1" : i
                        }
                        return t.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": N.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, o) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, a = N.camelCase(e),
                        l = t.style,
                        h = N.cssHooks[a];
                    if (e = N.cssProps[a] || a, n === i) return h && "get" in h && (r = h.get(t, !1, o)) !== i ? r : l[e];
                    if (s = typeof n, "string" === s && (r = Rt.exec(n)) && (n = +(r[1] + 1) * +r[2] + parseFloat(N.css(t, e)), s = "number"), !(null == n || "number" === s && isNaN(n) || ("number" !== s || N.cssNumber[a] || (n += "px"), h && "set" in h && (n = h.set(t, n)) === i))) try {
                        l[e] = n
                    } catch (c) {}
                }
            },
            css: function(t, e, n) {
                var o, r;
                return e = N.camelCase(e), r = N.cssHooks[e], e = N.cssProps[e] || e, "cssFloat" === e && (e = "float"), r && "get" in r && (o = r.get(t, !0, n)) !== i ? o : At ? At(t, e) : void 0
            },
            swap: function(t, e, i) {
                var n, o, r = {};
                for (o in e) r[o] = t.style[o], t.style[o] = e[o];
                n = i.call(t);
                for (o in e) t.style[o] = r[o];
                return n
            }
        }), N.curCSS = N.css, I.defaultView && I.defaultView.getComputedStyle && (Mt = function(t, e) {
            var i, n, o, r, s = t.style;
            return e = e.replace(Ot, "-$1").toLowerCase(), (n = t.ownerDocument.defaultView) && (o = n.getComputedStyle(t, null)) && (i = o.getPropertyValue(e), "" !== i || N.contains(t.ownerDocument.documentElement, t) || (i = N.style(t, e))), !N.support.pixelMargin && o && Dt.test(e) && zt.test(i) && (r = s.width, s.width = i, i = o.width, s.width = r), i
        }), I.documentElement.currentStyle && (Bt = function(t, e) {
            var i, n, o, r = t.currentStyle && t.currentStyle[e],
                s = t.style;
            return null == r && s && (o = s[e]) && (r = o), zt.test(r) && (i = s.left, n = t.runtimeStyle && t.runtimeStyle.left, n && (t.runtimeStyle.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : r, r = s.pixelLeft + "px", s.left = i, n && (t.runtimeStyle.left = n)), "" === r ? "auto" : r
        }), At = Mt || Bt, N.each(["height", "width"], function(t, e) {
            N.cssHooks[e] = {
                get: function(t, i, n) {
                    if (i) return 0 !== t.offsetWidth ? b(t, e, n) : N.swap(t, Wt, function() {
                        return b(t, e, n)
                    })
                },
                set: function(t, e) {
                    return Nt.test(e) ? e + "px" : e
                }
            }
        }), N.support.opacity || (N.cssHooks.opacity = {
            get: function(t, e) {
                return Ft.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var i = t.style,
                    n = t.currentStyle,
                    o = N.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = n && n.filter || i.filter || "";
                i.zoom = 1, e >= 1 && "" === N.trim(r.replace(It, "")) && (i.removeAttribute("filter"), n && !n.filter) || (i.filter = It.test(r) ? r.replace(It, o) : r + " " + o)
            }
        }), N(function() {
            N.support.reliableMarginRight || (N.cssHooks.marginRight = {
                get: function(t, e) {
                    return N.swap(t, {
                        display: "inline-block"
                    }, function() {
                        return e ? At(t, "margin-right") : t.style.marginRight
                    })
                }
            })
        }), N.expr && N.expr.filters && (N.expr.filters.hidden = function(t) {
            var e = t.offsetWidth,
                i = t.offsetHeight;
            return 0 === e && 0 === i || !N.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || N.css(t, "display"))
        }, N.expr.filters.visible = function(t) {
            return !N.expr.filters.hidden(t)
        }), N.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            N.cssHooks[t + e] = {
                expand: function(i) {
                    var n, o = "string" == typeof i ? i.split(" ") : [i],
                        r = {};
                    for (n = 0; n < 4; n++) r[t + qt[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }
        });
        var Ht, jt, Ut = /%20/g,
            Vt = /\[\]$/,
            Xt = /\r?\n/g,
            Yt = /#.*$/,
            Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Zt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Jt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            $t = /^(?:GET|HEAD)$/,
            Qt = /^\/\//,
            Kt = /\?/,
            te = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            ee = /^(?:select|textarea)/i,
            ie = /\s+/,
            ne = /([?&])_=[^&]*/,
            oe = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
            re = N.fn.load,
            se = {},
            ae = {},
            le = ["*/"] + ["*"];
        try {
            Ht = O.href
        } catch (he) {
            Ht = I.createElement("a"), Ht.href = "", Ht = Ht.href
        }
        jt = oe.exec(Ht.toLowerCase()) || [], N.fn.extend({
            load: function(t, e, n) {
                if ("string" != typeof t && re) return re.apply(this, arguments);
                if (!this.length) return this;
                var o = t.indexOf(" ");
                if (o >= 0) {
                    var r = t.slice(o, t.length);
                    t = t.slice(0, o)
                }
                var s = "GET";
                e && (N.isFunction(e) ? (n = e, e = i) : "object" == typeof e && (e = N.param(e, N.ajaxSettings.traditional), s = "POST"));
                var a = this;
                return N.ajax({
                    url: t,
                    type: s,
                    dataType: "html",
                    data: e,
                    complete: function(t, e, i) {
                        i = t.responseText, t.isResolved() && (t.done(function(t) {
                            i = t
                        }), a.html(r ? N("<div>").append(i.replace(te, "")).find(r) : i)), n && a.each(n, [i, e, t])
                    }
                }), this
            },
            serialize: function() {
                return N.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? N.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || ee.test(this.nodeName) || Zt.test(this.type))
                }).map(function(t, e) {
                    var i = N(this).val();
                    return null == i ? null : N.isArray(i) ? N.map(i, function(t, i) {
                        return {
                            name: e.name,
                            value: t.replace(Xt, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Xt, "\r\n")
                    }
                }).get()
            }
        }), N.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, e) {
            N.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), N.each(["get", "post"], function(t, e) {
            N[e] = function(t, n, o, r) {
                return N.isFunction(n) && (r = r || o, o = n, n = i), N.ajax({
                    type: e,
                    url: t,
                    data: n,
                    success: o,
                    dataType: r
                })
            }
        }), N.extend({
            getScript: function(t, e) {
                return N.get(t, i, e, "script")
            },
            getJSON: function(t, e, i) {
                return N.get(t, e, i, "json")
            },
            ajaxSetup: function(t, e) {
                return e ? _(t, N.ajaxSettings) : (e = t, t = N.ajaxSettings), _(t, e), t
            },
            ajaxSettings: {
                url: Ht,
                isLocal: Jt.test(jt[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": le
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": t.String,
                    "text html": !0,
                    "text json": N.parseJSON,
                    "text xml": N.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: w(se),
            ajaxTransport: w(ae),
            ajax: function(t, e) {
                function n(t, e, n, s) {
                    if (2 !== w) {
                        w = 2, l && clearTimeout(l), a = i, r = s || "", _.readyState = t > 0 ? 4 : 0;
                        var h, u, y, b, P, x = e,
                            S = n ? T(d, _, n) : i;
                        if (t >= 200 && t < 300 || 304 === t)
                            if (d.ifModified && ((b = _.getResponseHeader("Last-Modified")) && (N.lastModified[o] = b), (P = _.getResponseHeader("Etag")) && (N.etag[o] = P)), 304 === t) x = "notmodified", h = !0;
                            else try {
                                u = C(d, S), x = "success", h = !0
                            } catch (k) {
                                x = "parsererror", y = k
                            } else y = x, x && !t || (x = "error", t < 0 && (t = 0));
                        _.status = t, _.statusText = "" + (e || x), h ? g.resolveWith(p, [u, x, _]) : g.rejectWith(p, [_, x, y]), _.statusCode(v), v = i, c && f.trigger("ajax" + (h ? "Success" : "Error"), [_, d, h ? u : y]), m.fireWith(p, [_, x]), c && (f.trigger("ajaxComplete", [_, d]), --N.active || N.event.trigger("ajaxStop"))
                    }
                }
                "object" == typeof t && (e = t, t = i), e = e || {};
                var o, r, s, a, l, h, c, u, d = N.ajaxSetup({}, e),
                    p = d.context || d,
                    f = p !== d && (p.nodeType || p instanceof N) ? N(p) : N.event,
                    g = N.Deferred(),
                    m = N.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    _ = {
                        readyState: 0,
                        setRequestHeader: function(t, e) {
                            if (!w) {
                                var i = t.toLowerCase();
                                t = b[i] = b[i] || t, y[t] = e
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? r : null
                        },
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!s)
                                    for (s = {}; e = Gt.exec(r);) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return e === i ? null : e
                        },
                        overrideMimeType: function(t) {
                            return w || (d.mimeType = t), this
                        },
                        abort: function(t) {
                            return t = t || "abort", a && a.abort(t), n(0, t), this
                        }
                    };
                if (g.promise(_), _.success = _.done, _.error = _.fail, _.complete = m.add, _.statusCode = function(t) {
                        if (t) {
                            var e;
                            if (w < 2)
                                for (e in t) v[e] = [v[e], t[e]];
                            else e = t[_.status], _.then(e, e)
                        }
                        return this
                    }, d.url = ((t || d.url) + "").replace(Yt, "").replace(Qt, jt[1] + "//"), d.dataTypes = N.trim(d.dataType || "*").toLowerCase().split(ie), null == d.crossDomain && (h = oe.exec(d.url.toLowerCase()), d.crossDomain = !(!h || h[1] == jt[1] && h[2] == jt[2] && (h[3] || ("http:" === h[1] ? 80 : 443)) == (jt[3] || ("http:" === jt[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = N.param(d.data, d.traditional)), P(se, d, e, _), 2 === w) return !1;
                if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !$t.test(d.type), c && 0 === N.active++ && N.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Kt.test(d.url) ? "&" : "?") + d.data, delete d.data), o = d.url, d.cache === !1)) {
                    var x = N.now(),
                        S = d.url.replace(ne, "$1_=" + x);
                    d.url = S + (S === d.url ? (Kt.test(d.url) ? "&" : "?") + "_=" + x : "")
                }(d.data && d.hasContent && d.contentType !== !1 || e.contentType) && _.setRequestHeader("Content-Type", d.contentType), d.ifModified && (o = o || d.url, N.lastModified[o] && _.setRequestHeader("If-Modified-Since", N.lastModified[o]), N.etag[o] && _.setRequestHeader("If-None-Match", N.etag[o])), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + le + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers) _.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(p, _, d) === !1 || 2 === w)) return _.abort(), !1;
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[u](d[u]);
                if (a = P(ae, d, e, _)) {
                    _.readyState = 1, c && f.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                        _.abort("timeout")
                    }, d.timeout));
                    try {
                        w = 1, a.send(y, n)
                    } catch (k) {
                        if (!(w < 2)) throw k;
                        n(-1, k)
                    }
                } else n(-1, "No Transport");
                return _
            },
            param: function(t, e) {
                var n = [],
                    o = function(t, e) {
                        e = N.isFunction(e) ? e() : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                if (e === i && (e = N.ajaxSettings.traditional), N.isArray(t) || t.jquery && !N.isPlainObject(t)) N.each(t, function() {
                    o(this.name, this.value)
                });
                else
                    for (var r in t) x(r, t[r], e, o);
                return n.join("&").replace(Ut, "+")
            }
        }), N.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
        var ce = N.now(),
            ue = /(\=)\?(&|$)|\?\?/i;
        N.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return N.expando + "_" + ce++
            }
        }), N.ajaxPrefilter("json jsonp", function(e, i, n) {
            var o = "string" == typeof e.data && /^application\/x\-www\-form\-urlencoded/.test(e.contentType);
            if ("jsonp" === e.dataTypes[0] || e.jsonp !== !1 && (ue.test(e.url) || o && ue.test(e.data))) {
                var r, s = e.jsonpCallback = N.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    a = t[s],
                    l = e.url,
                    h = e.data,
                    c = "$1" + s + "$2";
                return e.jsonp !== !1 && (l = l.replace(ue, c), e.url === l && (o && (h = h.replace(ue, c)), e.data === h && (l += (/\?/.test(l) ? "&" : "?") + e.jsonp + "=" + s))), e.url = l, e.data = h, t[s] = function(t) {
                    r = [t]
                }, n.always(function() {
                    t[s] = a, r && N.isFunction(a) && t[s](r[0])
                }), e.converters["script json"] = function() {
                    return r || N.error(s + " was not called"), r[0]
                }, e.dataTypes[0] = "json", "script"
            }
        }), N.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(t) {
                    return N.globalEval(t), t
                }
            }
        }), N.ajaxPrefilter("script", function(t) {
            t.cache === i && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), N.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = I.head || I.getElementsByTagName("head")[0] || I.documentElement;
                return {
                    send: function(o, r) {
                        e = I.createElement("script"), e.async = "async", t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, o) {
                            (o || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, n && e.parentNode && n.removeChild(e), e = i, o || r(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(0, 1)
                    }
                }
            }
        });
        var de, pe = !!t.ActiveXObject && function() {
                for (var t in de) de[t](0, 1)
            },
            fe = 0;
        N.ajaxSettings.xhr = t.ActiveXObject ? function() {
                return !this.isLocal && S() || k()
            } : S,
            function(t) {
                N.extend(N.support, {
                    ajax: !!t,
                    cors: !!t && "withCredentials" in t
                })
            }(N.ajaxSettings.xhr()), N.support.ajax && N.ajaxTransport(function(e) {
                if (!e.crossDomain || N.support.cors) {
                    var n;
                    return {
                        send: function(o, r) {
                            var s, a, l = e.xhr();
                            if (e.username ? l.open(e.type, e.url, e.async, e.username, e.password) : l.open(e.type, e.url, e.async), e.xhrFields)
                                for (a in e.xhrFields) l[a] = e.xhrFields[a];
                            e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (a in o) l.setRequestHeader(a, o[a])
                            } catch (h) {}
                            l.send(e.hasContent && e.data || null), n = function(t, o) {
                                var a, h, c, u, d;
                                try {
                                    if (n && (o || 4 === l.readyState))
                                        if (n = i, s && (l.onreadystatechange = N.noop, pe && delete de[s]), o) 4 !== l.readyState && l.abort();
                                        else {
                                            a = l.status, c = l.getAllResponseHeaders(), u = {}, d = l.responseXML, d && d.documentElement && (u.xml = d);
                                            try {
                                                u.text = l.responseText
                                            } catch (t) {}
                                            try {
                                                h = l.statusText
                                            } catch (p) {
                                                h = ""
                                            }
                                            a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                        }
                                } catch (f) {
                                    o || r(-1, f)
                                }
                                u && r(a, h, u, c)
                            }, e.async && 4 !== l.readyState ? (s = ++fe, pe && (de || (de = {}, N(t).unload(pe)), de[s] = n), l.onreadystatechange = n) : n()
                        },
                        abort: function() {
                            n && n(0, 1)
                        }
                    }
                }
            });
        var ge, me, ve, ye, be = {},
            we = /^(?:toggle|show|hide)$/,
            Pe = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            _e = [
                ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
                ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
                ["opacity"]
            ];
        N.fn.extend({
            show: function(t, e, i) {
                var n, o;
                if (t || 0 === t) return this.animate(A("show", 3), t, e, i);
                for (var r = 0, s = this.length; r < s; r++) n = this[r], n.style && (o = n.style.display, N._data(n, "olddisplay") || "none" !== o || (o = n.style.display = ""), ("" === o && "none" === N.css(n, "display") || !N.contains(n.ownerDocument.documentElement, n)) && N._data(n, "olddisplay", M(n.nodeName)));
                for (r = 0; r < s; r++) n = this[r], n.style && (o = n.style.display, "" !== o && "none" !== o || (n.style.display = N._data(n, "olddisplay") || ""));
                return this
            },
            hide: function(t, e, i) {
                if (t || 0 === t) return this.animate(A("hide", 3), t, e, i);
                for (var n, o, r = 0, s = this.length; r < s; r++) n = this[r], n.style && (o = N.css(n, "display"), "none" === o || N._data(n, "olddisplay") || N._data(n, "olddisplay", o));
                for (r = 0; r < s; r++) this[r].style && (this[r].style.display = "none");
                return this
            },
            _toggle: N.fn.toggle,
            toggle: function(t, e, i) {
                var n = "boolean" == typeof t;
                return N.isFunction(t) && N.isFunction(e) ? this._toggle.apply(this, arguments) : null == t || n ? this.each(function() {
                    var e = n ? t : N(this).is(":hidden");
                    N(this)[e ? "show" : "hide"]()
                }) : this.animate(A("toggle", 3), t, e, i), this
            },
            fadeTo: function(t, e, i, n) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                function o() {
                    r.queue === !1 && N._mark(this);
                    var e, i, n, o, s, a, l, h, c, u, d, p = N.extend({}, r),
                        f = 1 === this.nodeType,
                        g = f && N(this).is(":hidden");
                    p.animatedProperties = {};
                    for (n in t)
                        if (e = N.camelCase(n), n !== e && (t[e] = t[n], delete t[n]), (s = N.cssHooks[e]) && "expand" in s) {
                            a = s.expand(t[e]), delete t[e];
                            for (n in a) n in t || (t[n] = a[n])
                        }
                    for (e in t) {
                        if (i = t[e], N.isArray(i) ? (p.animatedProperties[e] = i[1], i = t[e] = i[0]) : p.animatedProperties[e] = p.specialEasing && p.specialEasing[e] || p.easing || "swing", "hide" === i && g || "show" === i && !g) return p.complete.call(this);
                        !f || "height" !== e && "width" !== e || (p.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === N.css(this, "display") && "none" === N.css(this, "float") && (N.support.inlineBlockNeedsLayout && "inline" !== M(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                    }
                    null != p.overflow && (this.style.overflow = "hidden");
                    for (n in t) o = new N.fx(this, p, n), i = t[n], we.test(i) ? (d = N._data(this, "toggle" + n) || ("toggle" === i ? g ? "show" : "hide" : 0), d ? (N._data(this, "toggle" + n, "show" === d ? "hide" : "show"), o[d]()) : o[i]()) : (l = Pe.exec(i), h = o.cur(), l ? (c = parseFloat(l[2]), u = l[3] || (N.cssNumber[n] ? "" : "px"), "px" !== u && (N.style(this, n, (c || 1) + u), h = (c || 1) / o.cur() * h, N.style(this, n, h + u)), l[1] && (c = ("-=" === l[1] ? -1 : 1) * c + h), o.custom(h, c, u)) : o.custom(h, i, ""));
                    return !0
                }
                var r = N.speed(e, i, n);
                return N.isEmptyObject(t) ? this.each(r.complete, [!1]) : (t = N.extend({}, t), r.queue === !1 ? this.each(o) : this.queue(r.queue, o))
            },
            stop: function(t, e, n) {
                return "string" != typeof t && (n = e, e = t, t = i), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    function e(t, e, i) {
                        var o = e[i];
                        N.removeData(t, i, !0), o.stop(n)
                    }
                    var i, o = !1,
                        r = N.timers,
                        s = N._data(this);
                    if (n || N._unmark(!0, this), null == t)
                        for (i in s) s[i] && s[i].stop && i.indexOf(".run") === i.length - 4 && e(this, s, i);
                    else s[i = t + ".run"] && s[i].stop && e(this, s, i);
                    for (i = r.length; i--;) r[i].elem !== this || null != t && r[i].queue !== t || (n ? r[i](!0) : r[i].saveState(), o = !0, r.splice(i, 1));
                    n && o || N.dequeue(this, t)
                })
            }
        }), N.each({
            slideDown: A("show", 1),
            slideUp: A("hide", 1),
            slideToggle: A("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            N.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), N.extend({
            speed: function(t, e, i) {
                var n = t && "object" == typeof t ? N.extend({}, t) : {
                    complete: i || !i && e || N.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !N.isFunction(e) && e
                };
                return n.duration = N.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in N.fx.speeds ? N.fx.speeds[n.duration] : N.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function(t) {
                    N.isFunction(n.old) && n.old.call(this), n.queue ? N.dequeue(this, n.queue) : t !== !1 && N._unmark(this)
                }, n
            },
            easing: {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return -Math.cos(t * Math.PI) / 2 + .5
                }
            },
            timers: [],
            fx: function(t, e, i) {
                this.options = e, this.elem = t, this.prop = i, e.orig = e.orig || {}
            }
        }), N.fx.prototype = {
            update: function() {
                this.options.step && this.options.step.call(this.elem, this.now, this), (N.fx.step[this.prop] || N.fx.step._default)(this)
            },
            cur: function() {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var t, e = N.css(this.elem, this.prop);
                return isNaN(t = parseFloat(e)) ? e && "auto" !== e ? e : 0 : t
            },
            custom: function(t, e, n) {
                function o(t) {
                    return r.step(t)
                }
                var r = this,
                    s = N.fx;
                this.startTime = ye || E(), this.end = e, this.now = this.start = t, this.pos = this.state = 0, this.unit = n || this.unit || (N.cssNumber[this.prop] ? "" : "px"), o.queue = this.options.queue, o.elem = this.elem, o.saveState = function() {
                    N._data(r.elem, "fxshow" + r.prop) === i && (r.options.hide ? N._data(r.elem, "fxshow" + r.prop, r.start) : r.options.show && N._data(r.elem, "fxshow" + r.prop, r.end))
                }, o() && N.timers.push(o) && !ve && (ve = setInterval(s.tick, s.interval))
            },
            show: function() {
                var t = N._data(this.elem, "fxshow" + this.prop);
                this.options.orig[this.prop] = t || N.style(this.elem, this.prop), this.options.show = !0, t !== i ? this.custom(this.cur(), t) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), N(this.elem).show()
            },
            hide: function() {
                this.options.orig[this.prop] = N._data(this.elem, "fxshow" + this.prop) || N.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
            },
            step: function(t) {
                var e, i, n, o = ye || E(),
                    r = !0,
                    s = this.elem,
                    a = this.options;
                if (t || o >= a.duration + this.startTime) {
                    this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                    for (e in a.animatedProperties) a.animatedProperties[e] !== !0 && (r = !1);
                    if (r) {
                        if (null == a.overflow || N.support.shrinkWrapBlocks || N.each(["", "X", "Y"], function(t, e) {
                                s.style["overflow" + e] = a.overflow[t]
                            }), a.hide && N(s).hide(), a.hide || a.show)
                            for (e in a.animatedProperties) N.style(s, e, a.orig[e]), N.removeData(s, "fxshow" + e, !0), N.removeData(s, "toggle" + e, !0);
                        n = a.complete, n && (a.complete = !1, n.call(s))
                    }
                    return !1
                }
                return a.duration == 1 / 0 ? this.now = o : (i = o - this.startTime, this.state = i / a.duration, this.pos = N.easing[a.animatedProperties[this.prop]](this.state, i, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
            }
        }, N.extend(N.fx, {
            tick: function() {
                for (var t, e = N.timers, i = 0; i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
                e.length || N.fx.stop()
            },
            interval: 13,
            stop: function() {
                clearInterval(ve), ve = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function(t) {
                    N.style(t.elem, "opacity", t.now)
                },
                _default: function(t) {
                    t.elem.style && null != t.elem.style[t.prop] ? t.elem.style[t.prop] = t.now + t.unit : t.elem[t.prop] = t.now
                }
            }
        }), N.each(_e.concat.apply([], _e), function(t, e) {
            e.indexOf("margin") && (N.fx.step[e] = function(t) {
                N.style(t.elem, e, Math.max(0, t.now) + t.unit)
            })
        }), N.expr && N.expr.filters && (N.expr.filters.animated = function(t) {
            return N.grep(N.timers, function(e) {
                return t === e.elem
            }).length
        });
        var xe, Te = /^t(?:able|d|h)$/i,
            Ce = /^(?:body|html)$/i;
        xe = "getBoundingClientRect" in I.documentElement ? function(t, e, i, n) {
            try {
                n = t.getBoundingClientRect()
            } catch (o) {}
            if (!n || !N.contains(i, t)) return n ? {
                top: n.top,
                left: n.left
            } : {
                top: 0,
                left: 0
            };
            var r = e.body,
                s = B(e),
                a = i.clientTop || r.clientTop || 0,
                l = i.clientLeft || r.clientLeft || 0,
                h = s.pageYOffset || N.support.boxModel && i.scrollTop || r.scrollTop,
                c = s.pageXOffset || N.support.boxModel && i.scrollLeft || r.scrollLeft,
                u = n.top + h - a,
                d = n.left + c - l;
            return {
                top: u,
                left: d
            }
        } : function(t, e, i) {
            for (var n, o = t.offsetParent, r = t, s = e.body, a = e.defaultView, l = a ? a.getComputedStyle(t, null) : t.currentStyle, h = t.offsetTop, c = t.offsetLeft;
                (t = t.parentNode) && t !== s && t !== i && (!N.support.fixedPosition || "fixed" !== l.position);) n = a ? a.getComputedStyle(t, null) : t.currentStyle, h -= t.scrollTop, c -= t.scrollLeft, t === o && (h += t.offsetTop, c += t.offsetLeft, !N.support.doesNotAddBorder || N.support.doesAddBorderForTableAndCells && Te.test(t.nodeName) || (h += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), r = o, o = t.offsetParent), N.support.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (h += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), l = n;
            return "relative" !== l.position && "static" !== l.position || (h += s.offsetTop, c += s.offsetLeft), N.support.fixedPosition && "fixed" === l.position && (h += Math.max(i.scrollTop, s.scrollTop), c += Math.max(i.scrollLeft, s.scrollLeft)), {
                top: h,
                left: c
            }
        }, N.fn.offset = function(t) {
            if (arguments.length) return t === i ? this : this.each(function(e) {
                N.offset.setOffset(this, t, e)
            });
            var e = this[0],
                n = e && e.ownerDocument;
            return n ? e === n.body ? N.offset.bodyOffset(e) : xe(e, n, n.documentElement) : null
        }, N.offset = {
            bodyOffset: function(t) {
                var e = t.offsetTop,
                    i = t.offsetLeft;
                return N.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(N.css(t, "marginTop")) || 0, i += parseFloat(N.css(t, "marginLeft")) || 0), {
                    top: e,
                    left: i
                }
            },
            setOffset: function(t, e, i) {
                var n = N.css(t, "position");
                "static" === n && (t.style.position = "relative");
                var o, r, s = N(t),
                    a = s.offset(),
                    l = N.css(t, "top"),
                    h = N.css(t, "left"),
                    c = ("absolute" === n || "fixed" === n) && N.inArray("auto", [l, h]) > -1,
                    u = {},
                    d = {};
                c ? (d = s.position(), o = d.top, r = d.left) : (o = parseFloat(l) || 0, r = parseFloat(h) || 0), N.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (u.top = e.top - a.top + o), null != e.left && (u.left = e.left - a.left + r), "using" in e ? e.using.call(t, u) : s.css(u)
            }
        }, N.fn.extend({
            position: function() {
                if (!this[0]) return null;
                var t = this[0],
                    e = this.offsetParent(),
                    i = this.offset(),
                    n = Ce.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : e.offset();
                return i.top -= parseFloat(N.css(t, "marginTop")) || 0, i.left -= parseFloat(N.css(t, "marginLeft")) || 0, n.top += parseFloat(N.css(e[0], "borderTopWidth")) || 0, n.left += parseFloat(N.css(e[0], "borderLeftWidth")) || 0, {
                    top: i.top - n.top,
                    left: i.left - n.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || I.body; t && !Ce.test(t.nodeName) && "static" === N.css(t, "position");) t = t.offsetParent;
                    return t
                })
            }
        }), N.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            N.fn[t] = function(o) {
                return N.access(this, function(t, o, r) {
                    var s = B(t);
                    return r === i ? s ? e in s ? s[e] : N.support.boxModel && s.document.documentElement[o] || s.document.body[o] : t[o] : void(s ? s.scrollTo(n ? N(s).scrollLeft() : r, n ? r : N(s).scrollTop()) : t[o] = r)
                }, t, o, arguments.length, null)
            }
        }), N.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            var n = "client" + t,
                o = "scroll" + t,
                r = "offset" + t;
            N.fn["inner" + t] = function() {
                var t = this[0];
                return t ? t.style ? parseFloat(N.css(t, e, "padding")) : this[e]() : null
            }, N.fn["outer" + t] = function(t) {
                var i = this[0];
                return i ? i.style ? parseFloat(N.css(i, e, t ? "margin" : "border")) : this[e]() : null
            }, N.fn[e] = function(t) {
                return N.access(this, function(t, e, s) {
                    var a, l, h, c;
                    return N.isWindow(t) ? (a = t.document, l = a.documentElement[n], N.support.boxModel && l || a.body && a.body[n] || l) : 9 === t.nodeType ? (a = t.documentElement, a[n] >= a[o] ? a[n] : Math.max(t.body[o], a[o], t.body[r], a[r])) : s === i ? (h = N.css(t, e), c = parseFloat(h), N.isNumeric(c) ? c : h) : void N(t).css(e, s)
                }, e, t, arguments.length, null)
            }
        }), "undefined" == typeof t[e] && (t[e] = {}), t[e].jQuery = t[e].$ = N, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return N
        })
    }(window, "FBPublication"),
    function(t) {
        var e = t;
        ! function(t) {
            "use strict";

            function e(t, e, i) {
                if (i[0] && "object" != typeof i[0]) {
                    if (e[i[0]]) return e[i[0]].apply(t, Array.prototype.slice.call(i, 1));
                    throw f(i[0] + " is not a method or property")
                }
                return e.init.apply(t, i)
            }

            function i(t, e, i, n) {
                return {
                    css: {
                        position: "absolute",
                        top: t,
                        left: e,
                        overflow: n || "hidden",
                        zIndex: i || "auto"
                    }
                }
            }

            function n(t, e, i, n, o) {
                var s = 1 - o,
                    a = s * s * s,
                    l = o * o * o;
                return r(Math.round(a * t.x + 3 * o * s * s * e.x + 3 * o * o * s * i.x + l * n.x), Math.round(a * t.y + 3 * o * s * s * e.y + 3 * o * o * s * i.y + l * n.y))
            }

            function o(t) {
                return t / P * 180
            }

            function r(t, e) {
                return {
                    x: t,
                    y: e
                }
            }

            function s() {
                var t;
                if (t = /AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent)) {
                    var e = parseFloat(t[1]);
                    return e > 534.3
                }
                return !0
            }

            function a(t, e, i) {
                return v && i ? " translate3d(" + t + "px," + e + "px, 0px) " : " translate(" + t + "px, " + e + "px) "
            }

            function l(t) {
                return " rotate(" + t + "deg) "
            }

            function h(t, e) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function c() {
                for (var t = ["Moz", "Webkit", "Khtml", "O", "ms"], e = t.length, i = ""; e--;) t[e] + "Transform" in document.body.style && (i = "-" + t[e].toLowerCase() + "-");
                return i
            }

            function u() {
                var t, e = document.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MSTransition: "transitionend",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in i)
                    if (void 0 !== e.style[t]) return i[t]
            }

            function d(t, e, i, n, o) {
                var s, a = [];
                if ("-webkit-" == b) {
                    for (s = 0; s < o; s++) a.push("color-stop(" + n[s][0] + ", " + n[s][1] + ")");
                    t.css({
                        "background-image": "-webkit-gradient(linear, " + e.x + "% " + e.y + "%," + i.x + "% " + i.y + "%, " + a.join(",") + " )"
                    })
                } else {
                    e = {
                        x: e.x / 100 * t.width(),
                        y: e.y / 100 * t.height()
                    }, i = {
                        x: i.x / 100 * t.width(),
                        y: i.y / 100 * t.height()
                    };
                    var l = i.x - e.x,
                        h = i.y - e.y,
                        c = Math.atan2(h, l),
                        u = c - Math.PI / 2,
                        d = Math.abs(t.width() * Math.sin(u)) + Math.abs(t.height() * Math.cos(u)),
                        p = Math.sqrt(h * h + l * l),
                        f = r(i.x < e.x ? t.width() : 0, i.y < e.y ? t.height() : 0),
                        g = Math.tan(c),
                        m = -1 / g,
                        v = (m * f.x - f.y - g * e.x + e.y) / (m - g),
                        y = {
                            x: v,
                            y: m * v - m * f.x + f.y
                        },
                        w = Math.sqrt(Math.pow(y.x - e.x, 2) + Math.pow(y.y - e.y, 2));
                    for (s = 0; s < o; s++) a.push(" " + n[s][1] + " " + 100 * (w + p * n[s][0]) / d + "%");
                    t.css({
                        "background-image": b + "linear-gradient(" + -c + "rad," + a.join(",") + ")"
                    })
                }
            }

            function p(e, i, n) {
                var o = t.Event(e);
                return i.trigger(o, n), o.isDefaultPrevented() ? "prevented" : o.isPropagationStopped() ? "stopped" : ""
            }

            function f(t) {
                function e(t) {
                    this.name = "TurnJsError", this.message = t
                }
                return e.prototype = new Error, e.prototype.constructor = e, new e(t)
            }

            function g(t) {
                var e = {
                    top: 0,
                    left: 0
                };
                do e.left += t.offsetLeft, e.top += t.offsetTop; while (t = t.offsetParent);
                return e
            }

            function m() {
                return navigator.userAgent.indexOf("MSIE 9.0") == -1
            }
            var v, y, b = "",
                w = "4.1.0",
                P = Math.PI,
                _ = P / 2,
                x = "ontouchstart" in window,
                T = x ? {
                    down: "touchstart",
                    move: "touchmove",
                    up: "touchend",
                    over: "touchstart",
                    out: "touchend"
                } : {
                    down: "mousedown",
                    move: "mousemove",
                    up: "mouseup",
                    over: "mouseover",
                    out: "mouseout"
                },
                C = {
                    backward: ["bl", "tl"],
                    forward: ["br", "tr"],
                    all: ["tl", "bl", "tr", "br", "l", "r"]
                },
                S = ["single", "double"],
                k = ["ltr", "rtl"],
                E = {
                    acceleration: !0,
                    display: "double",
                    duration: 600,
                    page: 1,
                    gradients: !0,
                    turnCorners: "bl,br",
                    when: null,
                    ownPageSizeProvider: null
                },
                L = {
                    cornerSize: 100
                },
                A = 6,
                M = {
                    init: function(e) {
                        v = "WebKitCSSMatrix" in window || "MozPerspective" in document.body.style, y = s(), b = c();
                        var i, n = 0,
                            o = this.data(),
                            r = this.children();
                        if (e = t.extend({
                                width: this.width(),
                                height: this.height(),
                                direction: this.attr("dir") || this.css("direction") || "ltr"
                            }, E, e), o.opts = e, o.pageObjs = {}, o.pages = {}, o.pageWrap = {}, o.pageZoom = {}, o.pagePlace = {}, o.pageMv = [], o.zoom = 1, o.totalPages = e.pages || 0, o.eventHandlers = {
                                touchStart: t.proxy(M._touchStart, this),
                                touchMove: t.proxy(M._touchMove, this),
                                touchEnd: t.proxy(M._touchEnd, this),
                                start: t.proxy(M._eventStart, this)
                            }, e.when)
                            for (i in e.when) h(i, e.when) && this.bind(i, e.when[i]);
                        for (this.css({
                                position: "absolute",
                                width: e.width,
                                height: e.height
                            }), this.turn("display", e.display), "" !== e.direction && this.turn("direction", e.direction), v && !x && e.acceleration && this.transform(a(0, 0, !0)), i = 0; i < r.length; i++) "1" != t(r[i]).attr("ignore") && this.turn("addPage", r[i], ++n);
                        return t(this).bind(T.down, o.eventHandlers.touchStart).bind("end", M._eventEnd).bind("pressed", M._eventPressed).bind("released", M._eventReleased).bind("flip", M._flip), t(this).parent().bind("start", o.eventHandlers.start), t(document).bind(T.move, o.eventHandlers.touchMove).bind(T.up, o.eventHandlers.touchEnd), this.turn("page", e.page), o.done = !0, this
                    },
                    addPage: function(e, i) {
                        var n, o, r = !1,
                            s = this.data(),
                            a = s.totalPages + 1;
                        if (s.destroying) return !1;
                        if ((n = /\bp([0-9]+)\b/.exec(t(e).attr("class"))) && (i = parseInt(n[1], 10)), i) {
                            if (i == a) r = !0;
                            else if (i > a) throw f('Page "' + i + '" cannot be inserted')
                        } else i = a, r = !0;
                        return i >= 1 && i <= a && (o = "double" == s.display ? i % 2 ? " odd" : " even" : "", s.done && this.turn("stop"), i in s.pageObjs && M._movePages.call(this, i, 1), r && (s.totalPages = a), s.pageObjs[i] = t(e).css({
                            "float": "left"
                        }).addClass("page p" + i + o), !m() && s.pageObjs[i].hasClass("hard") && s.pageObjs[i].removeClass("hard"), M._addPageContent.call(this, i), M._removeFromDOM.call(this)), this
                    },
                    _addPageContent: function(e) {
                        var i = this.data(),
                            n = i.pageObjs[e];
                        if (n)
                            if (M._necessPage.call(this, e)) {
                                if (!i.pageWrap[e]) {
                                    i.pageWrap[e] = t("<div/>", {
                                        "class": "page-wrapper",
                                        page: e,
                                        css: {
                                            position: "absolute",
                                            overflow: "hidden"
                                        }
                                    }), this.append(i.pageWrap[e]), i.pagePlace[e] || (i.pagePlace[e] = e, i.pageObjs[e].appendTo(i.pageWrap[e]));
                                    var o = M._pageSize.call(this, e, !0);
                                    n.css({
                                        width: o.width,
                                        height: o.height
                                    }), i.pageWrap[e].css(o)
                                }
                                i.pagePlace[e] == e && M._makeFlip.call(this, e)
                            } else i.pagePlace[e] = 0, i.pageObjs[e] && i.pageObjs[e].remove()
                    },
                    hasPage: function(t) {
                        return h(t, this.data().pageObjs)
                    },
                    center: function(e) {
                        var i = this.data(),
                            n = t(this).turn("size"),
                            o = 0;
                        if (!i.noCenter) {
                            if ("double" == i.display) {
                                var r = this.turn("view", e || i.tpage || i.page);
                                "ltr" == i.direction ? r[0] ? r[1] || (o += n.width / 4) : o -= n.width / 4 : r[0] ? r[1] || (o -= n.width / 4) : o += n.width / 4
                            }
                            o = Math.round(o), t(this).css({
                                marginLeft: o
                            })
                        }
                        return this
                    },
                    destroy: function() {
                        var e = this,
                            i = this.data(),
                            n = ["end", "first", "flip", "last", "pressed", "released", "start", "turning", "turned", "zooming", "missing"];
                        if ("prevented" != p("destroying", this)) {
                            for (i.destroying = !0, t.each(n, function(t, i) {
                                    e.unbind(i)
                                }), this.parent().unbind("start", i.eventHandlers.start), t(document).unbind(T.move, i.eventHandlers.touchMove).unbind(T.up, i.eventHandlers.touchEnd); 0 !== i.totalPages;) this.turn("removePage", i.totalPages);
                            return i.fparent && i.fparent.remove(), i.shadow && i.shadow.remove(), this.removeData(), i = null, this
                        }
                    },
                    is: function() {
                        return "object" == typeof this.data().pages
                    },
                    zoom: function(e) {
                        var i = this.data();
                        if ("number" == typeof e) {
                            if (e < .001 || e > 100) throw f(e + " is not a value for zoom");
                            if ("prevented" == p("zooming", this, [e, i.zoom])) return this;
                            var n = this.turn("size"),
                                o = this.turn("view"),
                                r = 1 / i.zoom,
                                s = Math.round(n.width * r * e),
                                a = Math.round(n.height * r * e);
                            i.zoom = e, t(this).turn("stop").turn("size", s, a), i.opts.autoCenter && this.turn("center"), M._updateShadow.call(this);
                            for (var l = 0; l < o.length; l++) o[l] && i.pageZoom[o[l]] != i.zoom && (this.trigger("zoomed", [o[l], o, i.pageZoom[o[l]], i.zoom]), i.pageZoom[o[l]] = i.zoom);
                            return this
                        }
                        return i.zoom
                    },
                    _pageSize: function(t, e) {
                        var i = this.data(),
                            n = {};
                        if ("single" == i.display) n.width = this.width(), n.height = this.height(), e && (n.top = 0, n.left = 0, n.right = "auto");
                        else {
                            var o = Math.floor(this.width() / 2),
                                r = this.height();
                            if (i.pageObjs[t].hasClass("own-size"))
                                if (i.opts.ownPageSizeProvider) {
                                    var s = i.opts.ownPageSizeProvider.getPageSize(t);
                                    n.width = s.width, n.height = s.height
                                } else n.width = i.pageObjs[t].width(), n.height = i.pageObjs[t].height();
                            else n.width = o, n.height = r;
                            if (e) {
                                var a = t % 2;
                                n.top = (r - n.height) / 2, "ltr" == i.direction ? (n[a ? "right" : "left"] = o - n.width, n[a ? "left" : "right"] = "auto") : (n[a ? "left" : "right"] = o - n.width, n[a ? "right" : "left"] = "auto")
                            }
                        }
                        return n
                    },
                    _makeFlip: function(t) {
                        var e = this.data();
                        if (!e.pages[t] && e.pagePlace[t] == t) {
                            var i = "single" == e.display,
                                n = t % 2;
                            e.pages[t] = e.pageObjs[t].css(M._pageSize.call(this, t)).flip({
                                page: t,
                                next: n || i ? t + 1 : t - 1,
                                turn: this
                            }).flip("disable", e.disabled), M._setPageLoc.call(this, t), e.pageZoom[t] = e.zoom
                        }
                        return e.pages[t]
                    },
                    _makeRange: function() {
                        var t, e, i = this.data();
                        if (!(i.totalPages < 1))
                            for (e = this.turn("range"), t = e[0]; t <= e[1]; t++) M._addPageContent.call(this, t)
                    },
                    range: function(t) {
                        var e, i, n, o, r = this.data();
                        if (t = t || r.tpage || r.page || 1, o = M._view.call(this, t), t < 1 || t > r.totalPages) throw f('"' + t + '" is not a valid page');
                        return o[1] = o[1] || o[0], o[0] >= 1 && o[1] <= r.totalPages ? (e = Math.floor((A - 2) / 2), r.totalPages - o[1] > o[0] ? (i = Math.min(o[0] - 1, e), n = 2 * e - i) : (n = Math.min(r.totalPages - o[1], e), i = 2 * e - n)) : (i = A - 1, n = A - 1), [Math.max(1, o[0] - i), Math.min(r.totalPages, o[1] + n)]
                    },
                    _necessPage: function(t) {
                        if (0 === t) return !0;
                        var e = this.turn("range");
                        return this.data().pageObjs[t].hasClass("fixed") || t >= e[0] && t <= e[1]
                    },
                    _removeFromDOM: function() {
                        var t, e = this.data();
                        for (t in e.pageWrap) h(t, e.pageWrap) && !M._necessPage.call(this, t) && M._removePageFromDOM.call(this, t)
                    },
                    _removePageFromDOM: function(t) {
                        var e = this.data();
                        if (e.pages[t]) {
                            var i = e.pages[t].data();
                            B._moveFoldingPage.call(e.pages[t], !1), i.f && i.f.fwrapper && i.f.fwrapper.remove(), e.pages[t].removeData(), e.pages[t].remove(), delete e.pages[t]
                        }
                        e.pageObjs[t] && e.pageObjs[t].remove(), e.pageWrap[t] && (e.pageWrap[t].remove(), delete e.pageWrap[t]), M._removeMv.call(this, t), delete e.pagePlace[t], delete e.pageZoom[t]
                    },
                    removePage: function(t) {
                        var e = this.data();
                        if ("*" == t)
                            for (; 0 !== e.totalPages;) this.turn("removePage", e.totalPages);
                        else {
                            if (t < 1 || t > e.totalPages) throw f("The page " + t + " doesn't exist");
                            e.pageObjs[t] && (this.turn("stop"), M._removePageFromDOM.call(this, t), delete e.pageObjs[t]), M._movePages.call(this, t, -1), e.totalPages = e.totalPages - 1, e.page > e.totalPages ? (e.page = null, M._fitPage.call(this, e.totalPages)) : (M._makeRange.call(this), this.turn("update"))
                        }
                        return this
                    },
                    _movePages: function(t, e) {
                        var i, n = this,
                            o = this.data(),
                            r = "single" == o.display,
                            s = function(t) {
                                var i = t + e,
                                    s = i % 2,
                                    a = s ? " odd " : " even ";
                                o.pageObjs[t] && (o.pageObjs[i] = o.pageObjs[t].removeClass("p" + t + " odd even").addClass("p" + i + a)), o.pagePlace[t] && o.pageWrap[t] && (o.pagePlace[i] = i, o.pageObjs[i].hasClass("fixed") ? o.pageWrap[i] = o.pageWrap[t].attr("page", i) : o.pageWrap[i] = o.pageWrap[t].css(M._pageSize.call(n, i, !0)).attr("page", i), o.pages[t] && (o.pages[i] = o.pages[t].flip("options", {
                                    page: i,
                                    next: r || s ? i + 1 : i - 1
                                })), e && (delete o.pages[t], delete o.pagePlace[t], delete o.pageZoom[t], delete o.pageObjs[t], delete o.pageWrap[t]))
                            };
                        if (e > 0)
                            for (i = o.totalPages; i >= t; i--) s(i);
                        else
                            for (i = t; i <= o.totalPages; i++) s(i)
                    },
                    display: function(e) {
                        var i = this.data(),
                            n = i.display;
                        if (void 0 === e) return n;
                        if (t.inArray(e, S) == -1) throw f('"' + e + '" is not a value for display');
                        switch (e) {
                            case "single":
                                i.pageObjs[0] || (this.turn("stop").css({
                                    overflow: "hidden"
                                }), i.pageObjs[0] = t("<div />", {
                                    "class": "page p-temporal"
                                }).css({
                                    width: this.width(),
                                    height: this.height()
                                }).appendTo(this)), this.addClass("shadow");
                                break;
                            case "double":
                                i.pageObjs[0] && (this.turn("stop").css({
                                    overflow: ""
                                }), i.pageObjs[0].remove(), delete i.pageObjs[0]), this.removeClass("shadow")
                        }
                        if (i.display = e, n) {
                            var o = this.turn("size");
                            M._movePages.call(this, 1, 0), this.turn("size", o.width, o.height).turn("update")
                        }
                        return this
                    },
                    direction: function(e) {
                        var i = this.data();
                        if (void 0 === e) return i.direction;
                        if (e = e.toLowerCase(), t.inArray(e, k) == -1) throw f('"' + e + '" is not a value for direction');
                        return "rtl" == e && t(this).attr("dir", "ltr").css({
                            direction: "ltr"
                        }), i.direction = e, i.done && this.turn("size", t(this).width(), t(this).height()), this
                    },
                    animating: function() {
                        return this.data().pageMv.length > 0
                    },
                    corner: function() {
                        var t, e, i = this.data();
                        for (e in i.pages)
                            if (h(e, i.pages) && (t = i.pages[e].flip("corner"))) return t;
                        return !1
                    },
                    data: function() {
                        return this.data()
                    },
                    disable: function(e) {
                        var i, n = this.data(),
                            o = this.turn("view");
                        n.disabled = void 0 === e || e === !0;
                        for (i in n.pages) h(i, n.pages) && n.pages[i].flip("disable", !!n.disabled || t.inArray(parseInt(i, 10), o) == -1);
                        return this
                    },
                    disabled: function(t) {
                        return void 0 === t ? this.data().disabled === !0 : this.turn("disable", t)
                    },
                    size: function(t, e) {
                        if (void 0 === t || void 0 === e) return {
                            width: this.width(),
                            height: this.height()
                        };
                        this.turn("stop");
                        var i, n, o = this.data(),
                            r = Math.floor("double" == o.display) ? t / 2 : t;
                        this.css({
                            width: t,
                            height: e
                        }), o.pageObjs[0] && o.pageObjs[0].css({
                            width: r,
                            height: e
                        });
                        for (i in o.pageWrap) h(i, o.pageWrap) && (n = M._pageSize.call(this, i, !0), o.pageObjs[i].css({
                            width: n.width,
                            height: n.height
                        }), o.pageWrap[i].css(n), o.pages[i] && o.pages[i].css({
                            width: n.width,
                            height: n.height
                        }));
                        return this.turn("resize"), this
                    },
                    resize: function() {
                        var t, e = this.data();
                        for (e.pages[0] && (e.pageWrap[0].css({
                                left: -this.width()
                            }), e.pages[0].flip("resize", !0)), t = 1; t <= e.totalPages; t++) e.pages[t] && e.pages[t].flip("resize", !0);
                        M._updateShadow.call(this), e.opts.autoCenter && this.turn("center")
                    },
                    _removeMv: function(t) {
                        var e, i = this.data();
                        for (e = 0; e < i.pageMv.length; e++)
                            if (i.pageMv[e] == t) return i.pageMv.splice(e, 1), !0;
                        return !1
                    },
                    _addMv: function(t) {
                        var e = this.data();
                        M._removeMv.call(this, t), e.pageMv.push(t)
                    },
                    _view: function(t) {
                        var e = this.data();
                        return t = t || e.page, "double" == e.display ? t % 2 ? [t - 1, t] : [t, t + 1] : [t]
                    },
                    view: function(t) {
                        var e = this.data(),
                            i = M._view.call(this, t);
                        return "double" == e.display ? [i[0] > 0 ? i[0] : 0, i[1] <= e.totalPages ? i[1] : 0] : [i[0] > 0 && i[0] <= e.totalPages ? i[0] : 0]
                    },
                    stop: function(t, e) {
                        if (this.turn("animating")) {
                            var i, n, o, r = this.data();
                            for (r.tpage && (r.page = r.tpage, delete r.tpage), i = 0; i < r.pageMv.length; i++) r.pageMv[i] && r.pageMv[i] !== t && (o = r.pages[r.pageMv[i]], n = o.data().f.opts, o.flip("hideFoldedPage", e), e || B._moveFoldingPage.call(o, !1), n.force && (n.next = n.page % 2 === 0 ? n.page - 1 : n.page + 1, delete n.force))
                        }
                        return this.turn("update"), this
                    },
                    pages: function(t) {
                        var e = this.data();
                        if (t) {
                            if (t < e.totalPages)
                                for (var i = e.totalPages; i > t; i--) this.turn("removePage", i);
                            return e.totalPages = t, M._fitPage.call(this, e.page), this
                        }
                        return e.totalPages
                    },
                    _missing: function(t) {
                        var e = this.data();
                        if (!(e.totalPages < 1)) {
                            var i, n = this.turn("range", t),
                                o = [];
                            for (i = n[0]; i <= n[1]; i++) e.pageObjs[i] || o.push(i);
                            o.length > 0 && this.trigger("missing", [o]), this.trigger("range", n)
                        }
                    },
                    _fitPage: function(t) {
                        var e = this.data(),
                            i = this.turn("view", t);
                        if (M._missing.call(this, t), e.pageObjs[t]) {
                            e.page = t, this.turn("stop");
                            for (var n = 0; n < i.length; n++) i[n] && e.pageZoom[i[n]] != e.zoom && (this.trigger("zoomed", [i[n], i, e.pageZoom[i[n]], e.zoom]), e.pageZoom[i[n]] = e.zoom);
                            M._removeFromDOM.call(this), M._makeRange.call(this), M._updateShadow.call(this), this.trigger("turned", [t, i]), this.turn("update"), e.opts.autoCenter && this.turn("center")
                        }
                    },
                    _turnPage: function(e) {
                        var i, n, o = this.data(),
                            r = o.pagePlace[e],
                            s = this.turn("view"),
                            a = this.turn("view", e);
                        if (o.page != e) {
                            var l = o.page;
                            if ("prevented" == p("turning", this, [e, a])) return void(l == o.page && t.inArray(r, o.pageMv) != -1 && o.pages[r].flip("hideFoldedPage", !0));
                            t.inArray(1, a) != -1 && this.trigger("first"), t.inArray(o.totalPages, a) != -1 && this.trigger("last")
                        }
                        "single" == o.display ? (i = s[0], n = a[0]) : s[1] && e > s[1] ? (i = s[1], n = a[0]) : s[0] && e < s[0] && (i = s[0], n = a[1]);
                        var h = o.opts.turnCorners.split(","),
                            c = o.pages[i].data().f,
                            u = c.opts,
                            d = c.point;
                        M._missing.call(this, e), o.pageObjs[e] && (this.turn("stop"), o.page = e, M._makeRange.call(this), o.tpage = n, u.next != n && (u.next = n, u.force = !0), this.turn("update"), c.point = d, "hard" == c.effect ? "ltr" == o.direction ? o.pages[i].flip("turnPage", e > i ? "r" : "l") : o.pages[i].flip("turnPage", e > i ? "l" : "r") : "ltr" == o.direction ? o.pages[i].flip("turnPage", h[e > i ? 1 : 0]) : o.pages[i].flip("turnPage", h[e > i ? 0 : 1]))
                    },
                    page: function(e) {
                        var i = this.data();
                        if (void 0 === e) return i.page;
                        if (!i.disabled && !i.destroying) {
                            if (e = parseInt(e, 10), e > 0 && e <= i.totalPages) return e != i.page && (i.done && t.inArray(e, this.turn("view")) == -1 ? M._turnPage.call(this, e) : M._fitPage.call(this, e)), this;
                            throw f("The page " + e + " does not exist")
                        }
                    },
                    next: function() {
                        return this.turn("page", Math.min(this.data().totalPages, M._view.call(this, this.data().page).pop() + 1))
                    },
                    previous: function() {
                        return this.turn("page", Math.max(1, M._view.call(this, this.data().page).shift() - 1))
                    },
                    peel: function(t, e, i) {
                        var n = this.data(),
                            o = this.turn("view");
                        if (e = void 0 === e || e === !0, i = i !== !1, t === !1) this.turn("stop", null, e);
                        else if ("single" == n.display) n.pages[n.page].flip("peel", t, e, i);
                        else {
                            var r;
                            r = "ltr" == n.direction ? t.indexOf("l") != -1 ? o[0] : o[1] : t.indexOf("l") != -1 ? o[1] : o[0], n.pages[r] && n.pages[r].flip("peel", t, e, i)
                        }
                        return this
                    },
                    _addMotionPage: function() {
                        var e = t(this).data().f.opts,
                            i = e.turn;
                        i.data();
                        M._addMv.call(i, e.page)
                    },
                    _eventStart: function(t, e, i) {
                        var n = e.turn.data(),
                            o = n.pageZoom[e.page];
                        return t.isDefaultPrevented() ? void M._updateShadow.call(e.turn) : (o && o != n.zoom && (e.turn.trigger("zoomed", [e.page, e.turn.turn("view", e.page), o, n.zoom]), n.pageZoom[e.page] = n.zoom), "single" == n.display && i && ("l" == i.charAt(1) && "ltr" == n.direction || "r" == i.charAt(1) && "rtl" == n.direction ? (e.next = e.next < e.page ? e.next : e.page - 1, e.force = !0) : e.next = e.next > e.page ? e.next : e.page + 1), M._addMotionPage.call(t.target), void M._updateShadow.call(e.turn))
                    },
                    _eventEnd: function(e, i, n) {
                        var o = t(e.target),
                            r = (o.data().f, i.turn),
                            s = r.data();
                        if (n) {
                            var a = s.tpage || s.page;
                            a != i.next && a != i.page || (delete s.tpage, M._fitPage.call(r, a || i.next, !0))
                        } else M._removeMv.call(r, i.page), M._updateShadow.call(r), r.turn("update")
                    },
                    timeout: null,
                    _eventPressed: function(e) {
                        window.cornerClickSemafor = !0, clearTimeout(this.timeout), this.timeout = setTimeout(function() {
                            window.cornerClickSemafor = !1
                        }, 600);
                        var i = t(e.target).data().f,
                            n = i.opts.turn,
                            o = n.data();
                        o.pages;
                        return o.mouseAction = !0, n.turn("update"), i.time = (new Date).getTime()
                    },
                    _eventReleased: function(e, i) {
                        var n, o = t(e.target),
                            r = o.data().f,
                            s = r.opts.turn,
                            a = s.data();
                        n = "single" == a.display ? "br" == i.corner || "tr" == i.corner ? i.x < o.width() / 2 : i.x > o.width() / 2 : i.x < 0 || i.x > o.width(), ((new Date).getTime() - r.time < 200 || n) && (e.preventDefault(), M._turnPage.call(s, r.opts.next)), a.mouseAction = !1
                    },
                    _flip: function(e) {
                        e.stopPropagation();
                        var i = t(e.target).data().f.opts;
                        i.turn.trigger("turn", [i.next]), i.turn.data().opts.autoCenter && i.turn.turn("center", i.next)
                    },
                    _touchStart: function() {
                        var t = this.data();
                        for (var e in t.pages)
                            if (h(e, t.pages) && B._eventStart.apply(t.pages[e], arguments) === !1) return !1
                    },
                    _touchMove: function() {
                        var t = this.data();
                        for (var e in t.pages) h(e, t.pages) && B._eventMove.apply(t.pages[e], arguments)
                    },
                    _touchEnd: function() {
                        var t = this.data();
                        for (var e in t.pages) h(e, t.pages) && B._eventEnd.apply(t.pages[e], arguments)
                    },
                    calculateZ: function(t) {
                        var e, i, n, o, r, s = this,
                            a = this.data(),
                            l = this.turn("view"),
                            h = l[0] || l[1],
                            c = t.length - 1,
                            u = {
                                pageZ: {},
                                partZ: {},
                                pageV: {}
                            },
                            d = function(t) {
                                var e = s.turn("view", t);
                                e[0] && (u.pageV[e[0]] = !0), e[1] && (u.pageV[e[1]] = !0)
                            };
                        for (e = 0; e <= c; e++) i = t[e], n = a.pages[i].data().f.opts.next, o = a.pagePlace[i], d(i), d(n), r = a.pagePlace[n] == n ? n : i, u.pageZ[r] = a.totalPages - Math.abs(h - r), u.partZ[o] = 2 * a.totalPages - c + e;
                        return u
                    },
                    update: function() {
                        var e, i = this.data();
                        if (this.turn("animating") && 0 !== i.pageMv[0]) {
                            var n, o, r = this.turn("calculateZ", i.pageMv),
                                s = this.turn("corner"),
                                a = this.turn("view"),
                                l = this.turn("view", i.tpage);
                            for (e in i.pageWrap) h(e, i.pageWrap) && (o = i.pageObjs[e].hasClass("fixed"), i.pageWrap[e].css({
                                display: r.pageV[e] || o ? "" : "none",
                                zIndex: ((i.pageObjs[e].hasClass("hard") ? r.partZ[e] : r.pageZ[e]) || (o ? -1 : 0)) + 3
                            }), (n = i.pages[e]) && (n.flip("z", r.partZ[e] || null), r.pageV[e] && n.flip("resize"), i.tpage ? n.flip("hover", !1).flip("disable", t.inArray(parseInt(e, 10), i.pageMv) == -1 && e != l[0] && e != l[1]) : n.flip("hover", s === !1).flip("disable", e != a[0] && e != a[1])))
                        } else
                            for (e in i.pageWrap)
                                if (h(e, i.pageWrap)) {
                                    var c = M._setPageLoc.call(this, e);
                                    i.pages[e] && i.pages[e].flip("disable", i.disabled || 1 != c).flip("hover", !0).flip("z", null)
                                } return this
                    },
                    _updateShadow: function() {
                        var e, n, o, r = this.data(),
                            s = this.width(),
                            a = this.height(),
                            l = "single" == r.display ? s : Math.floor(s / 2);
                        e = this.turn("view"), r.shadow || (r.shadow = t("<div />", {
                            "class": "shadow",
                            css: i(0, 0, 0).css
                        }).appendTo(this));
                        for (var h = 0; h < r.pageMv.length && (e[0] && e[1]); h++) e = this.turn("view", r.pages[r.pageMv[h]].data().f.opts.next), n = this.turn("view", r.pageMv[h]), e[0] = e[0] && n[0], e[1] = e[1] && n[1];
                        switch (o = e[0] ? e[1] ? 3 : "ltr" == r.direction ? 2 : 1 : "ltr" == r.direction ? 1 : 2) {
                            case 1:
                                r.shadow.css({
                                    width: l,
                                    height: a,
                                    top: 0,
                                    left: l
                                });
                                break;
                            case 2:
                                r.shadow.css({
                                    width: l,
                                    height: a,
                                    top: 0,
                                    left: 0
                                });
                                break;
                            case 3:
                                r.shadow.css({
                                    width: s,
                                    height: a,
                                    top: 0,
                                    left: 0
                                })
                        }
                    },
                    _setPageLoc: function(t) {
                        var e = this.data(),
                            i = this.turn("view"),
                            n = 0;
                        if (t == i[0] || t == i[1] ? n = 1 : ("single" == e.display && t == i[0] + 1 || "double" == e.display && t == i[0] - 2 || t == i[1] + 2) && (n = 2), !this.turn("animating")) switch (n) {
                            case 1:
                                e.pageWrap[t].css({
                                    zIndex: e.totalPages,
                                    display: ""
                                });
                                break;
                            case 2:
                                e.pageWrap[t].css({
                                    zIndex: e.totalPages - 1,
                                    display: ""
                                });
                                break;
                            case 0:
                                e.pageWrap[t].css({
                                    zIndex: 2,
                                    display: e.pageObjs[t].hasClass("fixed") ? "" : "none"
                                })
                        }
                        return n
                    },
                    options: function(e) {
                        if (void 0 === e) return this.data().opts;
                        var i = this.data();
                        if (t.extend(i.opts, e), e.pages && this.turn("pages", e.pages), e.page && this.turn("page", e.page), e.display && this.turn("display", e.display), e.direction && this.turn("direction", e.direction), e.width && e.height && this.turn("size", e.width, e.height), e.when)
                            for (var n in e.when) h(n, e.when) && this.unbind(n).bind(n, e.when[n]);
                        return this
                    },
                    version: function() {
                        return w
                    }
                },
                B = {
                    init: function(t) {
                        return this.data({
                            f: {
                                disabled: !1,
                                hover: !1,
                                effect: this.hasClass("hard") ? "hard" : "sheet"
                            }
                        }), this.flip("options", t), B._addPageWrapper.call(this), this
                    },
                    setData: function(e) {
                        var i = this.data();
                        return i.f = t.extend(i.f, e), this
                    },
                    options: function(e) {
                        var i = this.data().f;
                        return e ? (B.setData.call(this, {
                            opts: t.extend({}, i.opts || L, e)
                        }), this) : i.opts
                    },
                    z: function(t) {
                        var e = this.data().f;
                        return e.opts["z-index"] = t, e.fwrapper && e.fwrapper.css({
                            zIndex: t || parseInt(e.parent.css("z-index"), 10) || 2
                        }), this
                    },
                    _cAllowed: function() {
                        var t = this.data().f,
                            e = t.opts.page,
                            i = t.opts.turn.data(),
                            n = e % 2;
                        return "hard" == t.effect ? "ltr" == i.direction ? [n ? "r" : "l"] : [n ? "l" : "r"] : "single" == i.display ? 1 == e ? "ltr" == i.direction ? C.forward : C.backward : e == i.totalPages ? "ltr" == i.direction ? C.backward : C.forward : C.all : "ltr" == i.direction ? C[n ? "forward" : "backward"] : C[n ? "backward" : "forward"]
                    },
                    _cornerActivated: function(e) {
                        var i = this.data().f,
                            n = this.width(),
                            o = this.height(),
                            r = {
                                x: e.x,
                                y: e.y,
                                corner: ""
                            },
                            s = i.opts.cornerSize;
                        if (r.x <= 0 || r.y <= 0 || r.x >= n || r.y >= o) return !1;
                        var a = B._cAllowed.call(this);
                        switch (i.effect) {
                            case "hard":
                                if (r.x > n - s) r.corner = "r";
                                else {
                                    if (!(r.x < s)) return !1;
                                    r.corner = "l"
                                }
                                break;
                            case "sheet":
                                if (r.y < s) r.corner += "t";
                                else {
                                    if (!(r.y >= o - s)) return !1;
                                    r.corner += "b"
                                }
                                if (r.x <= s) r.corner += "l";
                                else {
                                    if (!(r.x >= n - s)) return !1;
                                    r.corner += "r"
                                }
                        }
                        return !(!r.corner || t.inArray(r.corner, a) == -1) && r
                    },
                    _isIArea: function(t) {
                        var e = this.data().f.parent.offset();
                        return t = x && t.originalEvent ? t.originalEvent.touches[0] : t, B._cornerActivated.call(this, {
                            x: t.pageX - e.left,
                            y: t.pageY - e.top
                        })
                    },
                    _c: function(t, e, i) {
                        switch (e = e || 0, i = i || e, t) {
                            case "tl":
                                return r(e, i);
                            case "tr":
                                return r(this.width() - e, i);
                            case "bl":
                                return r(e, this.height() - i);
                            case "br":
                                return r(this.width() - e, this.height() - i);
                            case "l":
                                return r(e, 0);
                            case "r":
                                return r(this.width() - e, 0)
                        }
                    },
                    _c2: function(t) {
                        switch (t) {
                            case "tl":
                                return r(2 * this.width(), 0);
                            case "tr":
                                return r(-this.width(), 0);
                            case "bl":
                                return r(2 * this.width(), this.height());
                            case "br":
                                return r(-this.width(), this.height());
                            case "l":
                                return r(2 * this.width(), 0);
                            case "r":
                                return r(-this.width(), 0)
                        }
                    },
                    _foldingPage: function() {
                        var t = this.data().f;
                        if (t) {
                            var e = t.opts;
                            return e.turn ? (t = e.turn.data(), "single" == t.display ? e.next > 1 || e.page > 1 ? t.pageObjs[0] : null : t.pageObjs[e.next]) : void 0
                        }
                    },
                    _backGradient: function() {
                        var e = this.data().f,
                            n = e.opts.turn.data(),
                            o = n.opts.gradients && ("single" == n.display || 2 != e.opts.page && e.opts.page != n.totalPages - 1);
                        return o && !e.bshadow && (e.bshadow = t("<div/>", i(0, 0, 1)).css({
                            position: "",
                            width: this.width(),
                            height: this.height()
                        }).appendTo(e.parent)), o
                    },
                    type: function() {
                        return this.data().f.effect
                    },
                    resize: function(t) {
                        var e = this.data().f,
                            i = e.opts.turn.data(),
                            n = this.width(),
                            o = this.height();
                        switch (e.effect) {
                            case "hard":
                                t && (e.wrapper.css({
                                    width: n,
                                    height: o
                                }), e.fpage.css({
                                    width: n,
                                    height: o
                                }), i.opts.gradients && (e.ashadow.css({
                                    width: n,
                                    height: o
                                }), e.bshadow.css({
                                    width: n,
                                    height: o
                                })));
                                break;
                            case "sheet":
                                if (t) {
                                    var r = Math.round(Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)));
                                    e.wrapper.css({
                                        width: r,
                                        height: r
                                    }), e.fwrapper.css({
                                        width: r,
                                        height: r
                                    }).children(":first-child").css({
                                        width: n,
                                        height: o
                                    }), e.fpage.css({
                                        width: n,
                                        height: o
                                    }), i.opts.gradients && e.ashadow.css({
                                        width: n,
                                        height: o
                                    }), B._backGradient.call(this) && e.bshadow.css({
                                        width: n,
                                        height: o
                                    })
                                }
                                if (e.parent.is(":visible")) {
                                    var s = g(e.parent[0]);
                                    e.fwrapper.css({
                                        top: s.top,
                                        left: s.left
                                    }), s = g(e.opts.turn[0]), e.fparent.css({
                                        top: -s.top,
                                        left: -s.left
                                    })
                                }
                                this.flip("z", e.opts["z-index"])
                        }
                    },
                    _addPageWrapper: function() {
                        var e = this.data().f,
                            n = e.opts.turn.data(),
                            o = this.parent();
                        if (e.parent = o, !e.wrapper) switch (e.effect) {
                            case "hard":
                                var r = {};
                                r[b + "transform-style"] = "preserve-3d", r[b + "backface-visibility"] = "hidden", e.wrapper = t("<div/>", i(0, 0, 2)).css(r).appendTo(o).prepend(this), e.fpage = t("<div/>", i(0, 0, 1)).css(r).appendTo(o), n.opts.gradients && (e.ashadow = t("<div/>", i(0, 0, 0)).hide().appendTo(o), e.bshadow = t("<div/>", i(0, 0, 0)));
                                break;
                            case "sheet":
                                var s = this.width(),
                                    a = this.height();
                                Math.round(Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2)));
                                if (e.fparent = e.opts.turn.data().fparent, !e.fparent) {
                                    var l = t("<div/>", {
                                        css: {
                                            "pointer-events": "none"
                                        }
                                    }).hide();
                                    l.data().flips = 0, l.css(i(0, 0, "auto", "visible").css).appendTo(e.opts.turn), e.opts.turn.data().fparent = l, e.fparent = l
                                }
                                this.css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    bottom: "auto",
                                    right: "auto"
                                }), e.wrapper = t("<div/>", i(0, 0, this.css("z-index"))).appendTo(o).prepend(this), e.fwrapper = t("<div/>", i(o.offset().top, o.offset().left)).hide().appendTo(e.fparent), e.fpage = t("<div/>", i(0, 0, 0, "visible")).css({
                                    cursor: "default",
                                    overflow: "hidden"
                                }).appendTo(e.fwrapper), n.opts.gradients && (e.ashadow = t("<div/>", i(0, 0, 1)).appendTo(e.fpage)), B.setData.call(this, e)
                        }
                        B.resize.call(this, !0)
                    },
                    _fold: function(t) {
                        var e = this.data().f,
                            i = e.opts.turn.data(),
                            n = B._c.call(this, t.corner),
                            s = this.width(),
                            h = this.height();
                        switch (e.effect) {
                            case "hard":
                                "l" == t.corner ? t.x = Math.min(Math.max(t.x, 0), 2 * s) : t.x = Math.max(Math.min(t.x, s), -s);
                                var c, u, p, f, g, m = i.totalPages,
                                    v = e.opts["z-index"] || m,
                                    w = {
                                        overflow: "visible"
                                    },
                                    x = n.x ? (n.x - t.x) / s : t.x / s,
                                    T = 90 * x,
                                    C = T < 90;
                                switch (t.corner) {
                                    case "l":
                                        f = "0% 50%", g = "100% 50%", C ? (c = 0, u = e.opts.next - 1 > 0, p = 1) : (c = "100%", u = e.opts.page + 1 < m, p = 0);
                                        break;
                                    case "r":
                                        f = "100% 50%", g = "0% 50%", T = -T, s = -s, C ? (c = 0, u = e.opts.next + 1 < m, p = 0) : (c = "-100%", u = 1 != e.opts.page, p = 1)
                                }
                                w[b + "perspective-origin"] = g, e.wrapper.transform("rotateY(" + T + "deg)translate3d(0px, 0px, " + (this.attr("depth") || 0) + "px)", g), e.fpage.transform("translateX(" + s + "px) rotateY(" + (180 + T) + "deg)", f), e.parent.css(w), C ? (x = -x + 1, e.wrapper.css({
                                    zIndex: v + 1
                                }), e.fpage.css({
                                    zIndex: v
                                })) : (x -= 1, e.wrapper.css({
                                    zIndex: v
                                }), e.fpage.css({
                                    zIndex: v + 1
                                })), i.opts.gradients && (u ? e.ashadow.css({
                                    display: "",
                                    left: c,
                                    backgroundColor: "rgba(0,0,0," + .5 * x + ")"
                                }).transform("rotateY(0deg)") : e.ashadow.hide(), e.bshadow.css({
                                    opacity: -x + 1
                                }), C ? e.bshadow.parent()[0] != e.wrapper[0] && e.bshadow.appendTo(e.wrapper) : e.bshadow.parent()[0] != e.fpage[0] && e.bshadow.appendTo(e.fpage), d(e.bshadow, r(100 * p, 0), r(100 * (-p + 1), 0), [
                                    [0, "rgba(0,0,0,0.3)"],
                                    [1, "rgba(0,0,0,0)"]
                                ], 2));
                                break;
                            case "sheet":
                                var S, k, E, L, A, M, I, F = this,
                                    O = 0,
                                    N = 0,
                                    z = r(0, 0),
                                    R = r(0, 0),
                                    D = r(0, 0),
                                    W = B._foldingPage.call(this),
                                    q = (Math.tan(N), i.opts.acceleration),
                                    H = e.wrapper.height(),
                                    j = "t" == t.corner.substr(0, 1),
                                    U = "l" == t.corner.substr(1, 1),
                                    V = function() {
                                        var e = r(0, 0),
                                            a = r(0, 0);
                                        e.x = n.x ? n.x - t.x : t.x, y ? e.y = n.y ? n.y - t.y : t.y : e.y = 0, a.x = U ? s - e.x / 2 : t.x + e.x / 2, a.y = e.y / 2;
                                        var l = _ - Math.atan2(e.y, e.x),
                                            c = l - Math.atan2(a.y, a.x),
                                            u = Math.max(0, Math.sin(c) * Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2)));
                                        if (O = o(l), D = r(u * Math.sin(l), u * Math.cos(l)), l > _ && (D.x = D.x + Math.abs(D.y * e.y / e.x), D.y = 0, Math.round(D.x * Math.tan(P - l)) < h)) return t.y = Math.sqrt(Math.pow(h, 2) + 2 * a.x * e.x), j && (t.y = h - t.y), V();
                                        if (l > _) {
                                            var d = P - l,
                                                p = H - h / Math.sin(d);
                                            z = r(Math.round(p * Math.cos(d)), Math.round(p * Math.sin(d))), U && (z.x = -z.x), j && (z.y = -z.y)
                                        }
                                        S = Math.round(D.y / Math.tan(l) + D.x);
                                        var f = s - S,
                                            g = f * Math.cos(2 * l),
                                            m = f * Math.sin(2 * l);
                                        if (R = r(Math.round(U ? f - g : S + g), Math.round(j ? m : h - m)), i.opts.gradients) {
                                            A = f * Math.sin(l);
                                            var v = B._c2.call(F, t.corner),
                                                b = Math.sqrt(Math.pow(v.x - t.x, 2) + Math.pow(v.y - t.y, 2)) / s;
                                            I = Math.sin(_ * (b > 1 ? 2 - b : b)), M = Math.min(b, 1), L = A > 100 ? (A - 100) / A : 0, k = r(A * Math.sin(l) / s * 100, A * Math.cos(l) / h * 100), B._backGradient.call(F) && (E = r(1.2 * A * Math.sin(l) / s * 100, 1.2 * A * Math.cos(l) / h * 100), U || (E.x = 100 - E.x), j || (E.y = 100 - E.y))
                                        }
                                        return D.x = Math.round(D.x), D.y = Math.round(D.y), !0
                                    },
                                    X = function(t, n, o, c) {
                                        var u = ["0", "auto"],
                                            p = (s - H) * o[0] / 100,
                                            f = (h - H) * o[1] / 100,
                                            g = {
                                                left: u[n[0]],
                                                top: u[n[1]],
                                                right: u[n[2]],
                                                bottom: u[n[3]]
                                            },
                                            m = {},
                                            v = 90 != c && c != -90 ? U ? -1 : 1 : 0,
                                            y = o[0] + "% " + o[1] + "%";
                                        F.css(g).transform(l(c) + a(t.x + v, t.y, q), y), e.fpage.css(g).transform(l(c) + a(t.x + R.x - z.x - s * o[0] / 100, t.y + R.y - z.y - h * o[1] / 100, q) + l((180 / c - 2) * c), y), e.wrapper.transform(a(-t.x + p - v, -t.y + f, q) + l(-c), y), e.fwrapper.transform(a(-t.x + z.x + p, -t.y + z.y + f, q) + l(-c), y), i.opts.gradients && (o[0] && (k.x = 100 - k.x), o[1] && (k.y = 100 - k.y), m["box-shadow"] = "0 0 20px rgba(0,0,0," + .5 * I + ")", W.css(m), d(e.ashadow, r(U ? 100 : 0, j ? 0 : 100), r(k.x, k.y), [
                                            [L, "rgba(0,0,0,0)"],
                                            [.8 * (1 - L) + L, "rgba(0,0,0," + .2 * M + ")"],
                                            [1, "rgba(255,255,255," + .2 * M + ")"]
                                        ], 3, N), B._backGradient.call(F) && d(e.bshadow, r(U ? 0 : 100, j ? 0 : 100), r(E.x, E.y), [
                                            [.6, "rgba(0,0,0,0)"],
                                            [.8, "rgba(0,0,0," + .3 * M + ")"],
                                            [1, "rgba(0,0,0,0)"]
                                        ], 3))
                                    };
                                switch (t.corner) {
                                    case "l":
                                        break;
                                    case "r":
                                        break;
                                    case "tl":
                                        t.x = Math.max(t.x, 1), V(), X(D, [1, 0, 0, 1], [100, 0], O);
                                        break;
                                    case "tr":
                                        t.x = Math.min(t.x, s - 1), V(), X(r(-D.x, D.y), [0, 0, 0, 1], [0, 0], -O);
                                        break;
                                    case "bl":
                                        t.x = Math.max(t.x, 1), V(), X(r(D.x, -D.y), [1, 1, 0, 0], [100, 100], -O);
                                        break;
                                    case "br":
                                        t.x = Math.min(t.x, s - 1), V(), X(r(-D.x, -D.y), [0, 1, 1, 0], [0, 100], O)
                                }
                        }
                        e.point = t
                    },
                    _moveFoldingPage: function(t) {
                        var e = this.data().f;
                        if (e) {
                            var i = e.opts.turn,
                                n = i.data(),
                                o = n.pagePlace;
                            if (t) {
                                var r = e.opts.next;
                                if (o[r] != e.opts.page) {
                                    e.folding && B._moveFoldingPage.call(this, !1);
                                    var s = B._foldingPage.call(this);
                                    s.appendTo(e.fpage), o[r] = e.opts.page, e.folding = r
                                }
                                i.turn("update")
                            } else if (e.folding) {
                                if (n.pages[e.folding]) {
                                    var a = n.pages[e.folding].data().f;
                                    n.pageObjs[e.folding].appendTo(a.wrapper)
                                } else n.pageWrap[e.folding] && n.pageObjs[e.folding].appendTo(n.pageWrap[e.folding]);
                                e.folding in o && (o[e.folding] = e.folding), delete e.folding
                            }
                        }
                    },
                    _showFoldedPage: function(t, e) {
                        var i = B._foldingPage.call(this),
                            n = this.data(),
                            o = n.f,
                            r = o.visible;
                        if (i) {
                            if (!r || !o.point || o.point.corner != t.corner) {
                                var s = "hover" == o.status || "peel" == o.status || o.opts.turn.data().mouseAction ? t.corner : null;
                                if (r = !1, "prevented" == p("start", this, [o.opts, s])) return !1
                            }
                            if (e) {
                                var a = this,
                                    l = o.point && o.point.corner == t.corner ? o.point : B._c.call(this, t.corner, 1);
                                this.animatef({
                                    from: [l.x, l.y],
                                    to: [t.x, t.y],
                                    duration: 400,
                                    frame: function(e) {
                                        t.x = Math.round(e[0]), t.y = Math.round(e[1]), B._fold.call(a, t)
                                    }
                                })
                            } else B._fold.call(this, t), n.effect && !n.effect.turning && this.animatef(!1);
                            if (!r) switch (o.effect) {
                                case "hard":
                                    o.visible = !0, B._moveFoldingPage.call(this, !0), o.fpage.show(), o.opts.shadows && o.bshadow.show();
                                    break;
                                case "sheet":
                                    o.visible = !0, o.fparent.show().data().flips++, B._moveFoldingPage.call(this, !0), o.fwrapper.show(), o.bshadow && o.bshadow.show()
                            }
                            return !0
                        }
                        return !1
                    },
                    hide: function() {
                        var t = this.data().f,
                            e = t.opts.turn.data(),
                            i = B._foldingPage.call(this);
                        switch (t.effect) {
                            case "hard":
                                e.opts.gradients && (t.bshadowLoc = 0, t.bshadow.remove(), t.ashadow.hide()), t.wrapper.transform(""), t.fpage.hide();
                                break;
                            case "sheet":
                                0 === --t.fparent.data().flips && t.fparent.hide(), this.css({
                                    left: 0,
                                    top: 0,
                                    right: "auto",
                                    bottom: "auto"
                                }).transform(""), t.wrapper.transform(""), t.fwrapper.hide(), t.bshadow && t.bshadow.hide(), i.transform("")
                        }
                        return t.visible = !1, this
                    },
                    hideFoldedPage: function(t) {
                        var e = this.data().f;
                        if (e.point) {
                            var i = this,
                                o = e.point,
                                s = function() {
                                    e.point = null, e.status = "", i.flip("hide"), i.trigger("end", [e.opts, !1])
                                };
                            if (t) {
                                var a = B._c.call(this, o.corner),
                                    l = "t" == o.corner.substr(0, 1),
                                    h = l ? Math.min(0, o.y - a.y) / 2 : Math.max(0, o.y - a.y) / 2,
                                    c = r(o.x, o.y + h),
                                    u = r(a.x, a.y - h);
                                this.animatef({
                                    from: 0,
                                    to: 1,
                                    frame: function(t) {
                                        var e = n(o, c, u, a, t);
                                        o.x = e.x, o.y = e.y, B._fold.call(i, o)
                                    },
                                    complete: s,
                                    duration: 800,
                                    hiding: !0
                                })
                            } else this.animatef(!1), s()
                        }
                    },
                    turnPage: function(t) {
                        var e = this,
                            i = this.data().f,
                            o = i.opts.turn.data();
                        t = {
                            corner: i.corner ? i.corner.corner : t || B._cAllowed.call(this)[0]
                        };
                        var r = i.point || B._c.call(this, t.corner, i.opts.turn ? o.opts.elevation : 0),
                            s = B._c2.call(this, t.corner);
                        this.trigger("flip").animatef({
                            from: 0,
                            to: 1,
                            frame: function(i) {
                                var o = n(r, r, s, s, i);
                                t.x = o.x, t.y = o.y, B._showFoldedPage.call(e, t)
                            },
                            complete: function() {
                                e.trigger("end", [i.opts, !0])
                            },
                            duration: o.opts.duration,
                            turning: !0
                        }), i.corner = null
                    },
                    moving: function() {
                        return "effect" in this.data()
                    },
                    isTurning: function() {
                        return this.flip("moving") && this.data().effect.turning
                    },
                    corner: function() {
                        return this.data().f.corner
                    },
                    _eventStart: function(t) {
                        var e = this.data().f,
                            i = e.opts.turn;
                        if (!e.corner && !e.disabled && !this.flip("isTurning") && e.opts.page == i.data().pagePlace[e.opts.page]) {
                            if (e.corner = B._isIArea.call(this, t), e.corner && B._foldingPage.call(this)) return this.trigger("pressed", [e.point]), B._showFoldedPage.call(this, e.corner), !1;
                            e.corner = null
                        }
                    },
                    _eventMove: function(t) {
                        var e = this.data().f;
                        if (!e.disabled)
                            if (t = x ? t.originalEvent.touches : [t], e.corner) {
                                var i = e.parent.offset();
                                e.corner.x = t[0].pageX - i.left, e.corner.y = t[0].pageY - i.top, B._showFoldedPage.call(this, e.corner)
                            } else if (e.hover && !this.data().effect && this.is(":visible")) {
                            var n = B._isIArea.call(this, t[0]);
                            if (n) {
                                if ("sheet" == e.effect && 2 == n.corner.length || "hard" == e.effect) {
                                    e.status = "hover";
                                    var o = B._c.call(this, n.corner, e.opts.cornerSize / 2);
                                    n.x = o.x, n.y = o.y, B._showFoldedPage.call(this, n, !0)
                                }
                                p("overcorner", this, [this.data().pageId])
                            } else "hover" == e.status && (e.status = "", B.hideFoldedPage.call(this, !0), p("outcorner", this, [this.data().pageId]))
                        }
                    },
                    _eventEnd: function() {
                        var t = this.data().f,
                            e = t.corner;
                        !t.disabled && e && "prevented" != p("released", this, [t.point || e]) && B.hideFoldedPage.call(this, !0), t.corner = null
                    },
                    disable: function(t) {
                        return B.setData.call(this, {
                            disabled: t
                        }), this
                    },
                    hover: function(t) {
                        return B.setData.call(this, {
                            hover: t
                        }), this
                    },
                    peel: function(e, i, n) {
                        var o = this.data().f;
                        if (e) {
                            if (t.inArray(e, C.all) == -1) throw f("Corner " + e + " is not permitted");
                            if (t.inArray(e, B._cAllowed.call(this)) != -1) {
                                var r = 60 + 15 * (n ? Math.random() : 1),
                                    s = .65 * (o.opts.cornerSize / 2 * (n ? Math.random() : 1) + o.opts.cornerSize / 4),
                                    a = Math.round(s * Math.sin(r * Math.PI / 180)),
                                    l = Math.round(s * Math.cos(r * Math.PI / 180)),
                                    h = B._c.call(this, e, a, l);
                                o.status = "peel", B._showFoldedPage.call(this, {
                                    corner: e,
                                    x: h.x,
                                    y: h.y
                                }, i)
                            }
                        } else o.status = "", B.hideFoldedPage.call(this, i);
                        return this
                    }
                };
            window.requestAnim = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    window.setTimeout(t, 1e3 / 60)
                }
            }(), t.extend(t.fn, {
                flip: function() {
                    return e(t(this[0]), B, arguments)
                },
                turn: function() {
                    return e(t(this[0]), M, arguments)
                },
                transform: function(t, e) {
                    var i = {};
                    return e && (i[b + "transform-origin"] = e), i[b + "transform"] = t, this.css(i)
                },
                animatef: function(e) {
                    var i = this.data();
                    if (i.effect && i.effect.stop(), e) {
                        e.to.length || (e.to = [e.to]), e.from.length || (e.from = [e.from]);
                        for (var n = [], o = e.to.length, r = !0, s = this, a = (new Date).getTime(), l = function() {
                                if (i.effect && r) {
                                    for (var t = [], h = Math.min(e.duration, (new Date).getTime() - a), c = 0; c < o; c++) t.push(i.effect.easing(1, h, e.from[c], n[c], e.duration));
                                    e.frame(1 == o ? t[0] : t), h == e.duration ? (delete i.effect, s.data(i), e.complete && e.complete()) : window.requestAnim(l)
                                }
                            }, h = 0; h < o; h++) n.push(e.to[h] - e.from[h]);
                        i.effect = t.extend({
                            stop: function() {
                                r = !1
                            },
                            easing: function(t, e, i, n, o) {
                                return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
                            }
                        }, e), this.data(i), l()
                    } else delete i.effect
                }
            }), t.isTouch = x, t.mouseEvents = T, t.cssPrefix = c, t.cssTransitionEnd = u, t.findPos = g
        }(e)
    }(this.FBPublication.$),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events;
            t(global, exports, i)
        } else t(window, e, e.Events)
    }(function(t, e, i) {
        "use strict";

        function n(t) {
            this.presenter = t, this.scaleFactor = 1, this.offsetFactor = 0
        }
        n.prototype = new i, n.prototype.constructor = n, n.prototype.init = function() {}, n.prototype.getDOMElement = function() {
            throw new Error("Method getDOMElement should be overridden")
        }, n.prototype.scale = function(t) {
            this.scaleFactor = t
        }, n.prototype.offset = function(t) {
            this.offsetFactor = t
        }, n.prototype.destroy = function() {}, n.prototype.highlight = function() {}, e.BaseContentView = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/html5").html5Lib,
                o = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, o, i, n)
        } else t(window, e, e._, e.el, e.html5Lib)
    }(function(t, e, i, n, o) {
        "use strict";

        function r(t) {
            this.presenter = t
        }
        r.prototype.init = function(t, e) {
            var o = {
                offsetFactor: 0,
                scaleFactor: 1
            };
            return i.extend(o, e), this.offsetFactor = o.offsetFactor, this.scaleFactor = o.scaleFactor, this.item = t, this.view = n.createElement("div", {
                "class": "highlight-element",
                styles: {
                    position: "absolute"
                }
            }), this._place(), this
        }, r.prototype.getViewDOMElement = function() {
            return this.view
        }, r.prototype.offset = function(t) {
            this.offsetFactor = t, this._place()
        }, r.prototype.scale = function(t) {
            this.scaleFactor = t, this._place()
        }, r.prototype._place = function() {
            n.css(this.view, {
                top: this.item.y * this.scaleFactor + "px",
                left: (this.item.x + this.offsetFactor) * this.scaleFactor + "px",
                width: this.item.width * this.scaleFactor + "px",
                height: this.item.height * this.scaleFactor + "px"
            }), this.item.angle && (o.origin(this.view, 0, 0), o.rotate(this.view, this.item.angle + "rad", 0, 0, 1, !0))
        }, e.HighlighterView = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/book/content/widgets/base/view").BaseContentView,
                o = require("fb-html5/common/lightbox").Lightbox,
                r = require("fb-html5/common/html5").html5Lib,
                s = require("underscore/underscore-min")._,
                a = require("fb-html5/common/fb-utils");
            t(global, exports, i, n, r, s, a, o)
        } else t(window, e, e.el, e.BaseContentView, e.html5Lib, e._, e.fbUtils, e.Lightbox)
    }(function(t, e, i, n, o, r, s, a) {
        "use strict";

        function l(t) {
            n.call(this, t)
        }
        l.prototype = Object.create(n.prototype), l.prototype.init = function(e) {
            var n = {
                urls: [],
                rect: null,
                thumbnailUrl: "",
                rotation: 0,
                highlightOnHover: !0,
                highlightOnFlip: !0,
                highlightColor: "#3FC7FF"
            };
            r.extend(n, e), this.rect = n.rect, this.urls = n.urls, this.shouldHighlightOnHover = n.highlightOnHover, this.shouldHighlightOnFlip = n.highlightOnFlip;
            var a = this;
            return this.imageContainer = i.createElement("div", {
                "class": "image",
                styles: {
                    "background-image": n.thumbnailUrl ? "url('" + n.thumbnailUrl + "')" : ""
                }
            }), this.imageHighlight = i.createElement("div", {
                "class": "image-highlight",
                styles: {
                    "background-color": n.highlightColor
                }
            }, this.imageContainer), r.isUndefined(n.rotation) || (o.origin(this.imageContainer, 0, 0), o.rotate(this.imageContainer, n.rotation + "rad", 0, 0, 1, !0)), s.addListener(this.imageContainer, "mousemove", function(t) {
                t.stopPropagation()
            }), s.addListener(this.imageContainer, "mousedown", function(t) {
                t.stopPropagation()
            }), new t.Hammer(this.imageContainer, {}).on("tap", r.bind(this._onImageClick, this)), this.shouldHighlightOnHover && (this.imageContainer.onmouseover = function() {
                a.imageHighlight.style.opacity = .5, a.timeout && clearTimeout(a.timeout)
            }, this.imageContainer.onmouseout = function() {
                a.imageHighlight.style.opacity = 0
            }), this
        }, l.prototype._onImageClick = function(t) {
            if (this.urls && this.urls.length) {
                var e = document.createElement("img"),
                    i = this;
                e.src = this.urls[0], e.style.width = "100%", a().showFrame(e), this.presenter.onImageClick();
                var n = function() {
                    i.presenter.onImageLoaded()
                };
                a().on("contentLoaded", n), a().once("closed", function() {
                    a().off("contentLoaded", n)
                })
            }
            t.srcEvent.stopPropagation()
        }, l.prototype.highlight = function() {
            var t = this;
            r.delay(function() {
                function e() {
                    t.imageHighlight.style.opacity = 0
                }
                t.shouldHighlightOnFlip !== !1 && (t.timeout = setTimeout(e, 500), t.imageHighlight.style.opacity = .5)
            }, 500)
        }, l.prototype.getDOMElement = function() {
            return this.imageContainer
        }, l.prototype.scale = function(t) {
            n.prototype.scale.call(this, t), this._place()
        }, l.prototype.offset = function(t) {
            n.prototype.offset.call(this, t), this._place()
        }, l.prototype._place = function() {
            this.imageContainer.style.width = (this.rect.width * this.scaleFactor).toFixed(2) + "px", this.imageContainer.style.height = (this.rect.height * this.scaleFactor).toFixed(2) + "px", this.imageContainer.style.left = ((this.rect.left + this.offsetFactor) * this.scaleFactor).toFixed(2) + "px", this.imageContainer.style.top = (this.rect.top * this.scaleFactor).toFixed(2) + "px"
        }, e.ImageView = l
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/book/content/widgets/base/view").BaseContentView,
                o = require("fb-html5/common/html5").html5Lib,
                r = require("fb-html5/common/frameworks/hammer"),
                s = require("underscore/underscore-min")._;
            t(global, exports, i, r, o, s, n)
        } else t(window, e, e.el, e.Hammer, e.html5Lib, e._, e.BaseContentView)
    }(function(t, e, i, n, o, r, s) {
        "use strict";

        function a(t) {
            s.call(this, t), this.link = i.createElement("a", {
                "class": "publication-link"
            }), this.hammer = new n(this.link, {
                prevent_default: !0
            })
        }
        a.prototype = new s, a.prototype.constructor = a, a.prototype.init = function(t) {
            var e = this,
                i = {
                    title: "",
                    target: "_self",
                    color: "#0000FF",
                    zIndex: void 0,
                    angle: void 0,
                    highlightOnHover: !0,
                    highlightOnFlip: !0,
                    rect: {
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    },
                    scale: 1,
                    offset: 0
                };
            return r.extend(i, t), r.isEmpty(i.title) ? this.link.hasAttribute("title") && this.link.removeAttribute("title") : this.link.title = i.title, this.link.target = i.target, this.link.style.backgroundColor = i.color, r.isUndefined(i.zIndex) || (this.link.style.zIndex = i.zIndex), r.isUndefined(i.angle) || (o.origin(this.link, 0, 0), o.rotate(this.link, i.angle + "rad", 0, 0, 1, !0)), this.hammer.on("tap", function() {
                e.presenter.onLinkTap()
            }), this.shouldHighlightOnHover = i.highlightOnHover, this.shouldHighlightOnFlip = i.highlightOnFlip, this.shouldHighlightOnHover && (this.link.onmouseover = function() {
                e.link.style.opacity = .5, e.timeout && clearTimeout(e.timeout)
            }, this.link.onmouseout = function() {
                e.link.style.opacity = 0
            }), this.rect = i.rect, this.scaleFactor = i.scale, this.offsetFactor = i.offset, this._place(this.scaleFactor, this.offsetFactor), this
        }, a.prototype.highlight = function() {
            var t = this;
            r.delay(function() {
                function e() {
                    t.link.style.opacity = 0
                }
                t.shouldHighlightOnFlip !== !1 && (t.timeout = setTimeout(e, 500), t.link.style.opacity = .5)
            }, 500)
        }, a.prototype.getDOMElement = function() {
            return this.link
        }, a.prototype.scale = function(t) {
            s.prototype.scale.call(this, t), this._place()
        }, a.prototype.offset = function(t) {
            s.prototype.offset.call(this, t), this._place()
        }, a.prototype._place = function() {
            this.link.style.width = (this.rect.width * this.scaleFactor).toFixed(2) + "px", this.link.style.height = (this.rect.height * this.scaleFactor).toFixed(2) + "px", this.link.style.left = ((this.rect.left + this.offsetFactor) * this.scaleFactor).toFixed(2) + "px", this.link.style.top = (this.rect.top * this.scaleFactor).toFixed(2) + "px"
        }, e.LinkView = a
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/book/content/widgets/base/view").BaseContentView,
                o = require("fb-html5/common/lightbox").Lightbox,
                r = require("underscore/underscore-min")._,
                s = require("fb-html5/common/fb-utils");
            t(global, exports, i, n, o, r, s)
        } else t(window, e, e.el, e.BaseContentView, e.Lightbox, e._, e.fbUtils)
    }(function(t, e, i, n, o, r, s) {
        "use strict";

        function a(t) {
            n.call(this, t)
        }
        a.prototype = new n, a.prototype.constructor = a, a.prototype.init = function(e) {
            var n = {
                url: "",
                rect: null,
                thumbnailUrl: ""
            };
            return r.extend(n, e), this.rect = n.rect, this.url = n.url, this.videoContainer = i.createElement("div", {
                "class": "video",
                styles: {
                    position: "absolute",
                    "background-image": "url('" + n.thumbnailUrl + "')"
                }
            }), new t.Hammer(this.videoContainer, {}).on("tap", r.bind(this._onVideoClick, this)), s.addListener(this.videoContainer, "mousemove", function(t) {
                t.stopPropagation()
            }), s.addListener(this.videoContainer, "mousedown", function(t) {
                t.stopPropagation()
            }), this.videoButton = i.createElement("div", {
                "class": "playButton"
            }, this.videoContainer), this._place(), this
        }, a.prototype._onVideoClick = function(t) {
            var e = i.createElement("iframe", {
                width: "100%",
                height: "100%",
                frameborder: 0,
                allowfullscreen: "allowfullscreen"
            });
            e.src = this.url, t.srcEvent.stopPropagation(), o().showFrame(e), this.trigger("videoOpened", e)
        }, a.prototype.getDOMElement = function() {
            return this.videoContainer
        }, a.prototype.scale = function(t) {
            n.prototype.scale.call(this, t), this._place()
        }, a.prototype.offset = function(t) {
            n.prototype.offset.call(this, t), this._place()
        }, a.prototype._place = function() {
            this.videoContainer.style.width = (this.rect.width * this.scaleFactor).toFixed(2) + "px", this.videoContainer.style.height = (this.rect.height * this.scaleFactor).toFixed(2) + "px", this.videoContainer.style.left = ((this.rect.left + this.offsetFactor) * this.scaleFactor).toFixed(2) + "px", this.videoContainer.style.top = (this.rect.top * this.scaleFactor).toFixed(2) + "px", this.videoButton.style.maxWidth = Math.floor(this.rect.width * this.scaleFactor) + "px", this.videoButton.style.maxHeight = Math.floor(this.rect.height * this.scaleFactor) + "px"
        }, e.VideoView = a
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events,
                n = require("fb-html5/common/fb-locator").FBLocator;
            t(global, exports, i, n)
        } else t(window, e, e.Events, e.FBLocator)
    }(function(t, e, i, n) {
        "use strict";

        function o(t) {
            this.model = t
        }
        o.prototype = new i, o.prototype.constructor = o, o.prototype.getView = function() {
            return this.view
        }, o.prototype.getAnalyticsProvider = function() {
            return n().get("analytics")
        }, o.prototype.getLocaleProvider = function() {
            return n().get("locale")
        }, o.prototype.scale = function(t) {
            this.getView().scale(t)
        }, o.prototype.offset = function(t) {
            this.getView().offset(t)
        }, o.prototype.destroy = function() {
            this.getView().destroy()
        }, o.prototype.highlight = function() {
            this.getView().highlight()
        }, e.BaseContentPresenter = o
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("underscore/underscore-min")._,
                n = require("fb-html5/book/widgets/highlighter/view").HighlighterView;
            t(global, exports, i, n)
        } else t(window, e, e._, e.HighlighterView)
    }(function(t, e, i, n) {
        "use strict";

        function o(t) {
            this.model = t, this._cancelled = !1
        }
        o.prototype.getSearchHighlightViews = function(t, e) {
            var o = this;
            this.model.getQueryHighlights(t, function(t, r) {
                o._cancelled || (t ? e(t) : (o.views = i.map(r, function(t) {
                    return new n(this).init(t)
                }), e(null, i.map(o.views, function(t) {
                    return t.getViewDOMElement()
                }))))
            })
        }, o.prototype.offset = function(t) {
            i.each(this.views, function(e) {
                e.offset(t)
            })
        }, o.prototype.scale = function(t) {
            i.each(this.views, function(e) {
                e.scale(t)
            })
        }, o.prototype.cancelAllRequests = function() {
            this._cancelled = !0
        }, e.HighlighterPresenter = o
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/book/content/widgets/image/view").ImageView,
                n = require("fb-html5/book/content/widgets/base/presenter").BaseContentPresenter;
            t(global, exports, n, i)
        } else t(window, e, e.BaseContentPresenter, e.ImageView)
    }(function(t, e, i, n) {
        "use strict";

        function o(t) {
            i.call(this, t)
        }
        o.prototype = Object.create(i.prototype), o.prototype.init = function() {
            return this.view = new n(this).init({
                urls: this.model.getImageUrls(),
                rect: this.model.getRect(),
                rotation: this.model.getRotation(),
                thumbnailUrl: this.model.getThumbnailUrl(),
                highlightOnHover: this.model.shouldBeHighlightedOnHover(),
                highlightOnFlip: this.model.shouldBeHighlightedOnFlip(),
                highlightColor: this.model.getHighlightColor()
            }), this
        }, o.prototype.onImageClick = function() {
            this.getAnalyticsProvider().trigger("image", {
                action: "Click",
                url: this.model.getImageUrls()[0]
            })
        }, o.prototype.onImageLoaded = function() {
            this.getAnalyticsProvider().trigger("image", {
                action: "Loaded",
                url: this.model.getImageUrls()[0]
            })
        }, e.ImagePresenter = o
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/book/content/widgets/link/view").LinkView,
                n = require("fb-html5/book/content/widgets/base/presenter").BaseContentPresenter,
                o = require("underscore/underscore-min")._;
            t(global, exports, i, n, o)
        } else t(window, e, e.LinkView, e.BaseContentPresenter, e._)
    }(function(t, e, i, n, o) {
        "use strict";

        function r(t, e) {
            n.call(this, t), this.contentPresenter = e
        }
        r.prototype = new n, r.prototype.constructor = r, r.prototype.init = function() {
            return this.view = new i(this).init({
                title: this.model.getTitle(),
                target: this.model.getTarget(),
                color: this.model.getBackgroundColor(),
                zIndex: this.model.getZIndex(),
                angle: this.model.getAngle(),
                highlightOnHover: this.model.shouldBeHighlightedOnHover(),
                highlightOnFlip: this.model.shouldBeHighlightedOnFlip(),
                rect: this.model.getRect()
            }), this.model.isInternal() && this.getLocaleProvider().onAndChange("change:AlertMessage.LINK_PAGE_TIP", this.onLinkCaptionChanged, this), this
        }, r.prototype.onLinkTap = function() {
            var t = this.model.getUrl();
            if (t.indexOf("fb-internal://") === -1) {
                var e = this.getView().getDOMElement();
                e.href = this.model.getUrl(), this.getAnalyticsProvider().trigger("link", {
                    action: "External",
                    url: t,
                    pageNumber: this.model.getPageNumber(),
                    target: this.model.getTarget()
                }), e.click(), e.removeAttribute("href")
            } else {
                var i = t.replace("fb-internal://", "");
                this.getAnalyticsProvider().trigger("link", {
                    action: "Internal",
                    pageTo: this.model.getPageIndexById(i),
                    pageNumber: this.model.getPageNumber()
                }), this.contentPresenter.requestNavigation("page", {
                    pageId: i
                })
            }
        }, r.prototype.onLinkCaptionChanged = function() {
            var t = this.getView().getDOMElement(),
                e = this.model.getTitle();
            o.isEmpty(e) ? t.hasAttribute("title") && t.removeAttribute("title") : t.title = this.getLocaleProvider().get("AlertMessage.LINK_PAGE_TIP") + " " + e
        }, e.LinkPresenter = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/book/content/widgets/video/view").VideoView,
                n = require("fb-html5/book/content/widgets/base/presenter").BaseContentPresenter,
                o = require("fb-html5/common/fb-utils");
            t(global, exports, n, i, o)
        } else t(window, e, e.BaseContentPresenter, e.VideoView, e.fbUtils)
    }(function(t, e, i, n, o) {
        "use strict";

        function r(t) {
            i.call(this, t)
        }
        r.prototype = new i, r.prototype.constructor = r, r.prototype.init = function() {
            return this.view = new n(this).init({
                url: this.model.getVideoUrl(),
                rect: this.model.getRect(),
                thumbnailUrl: this.model.getThumbnailUrl()
            }), this.view.on("videoOpened", this._initVideoApi, this), this
        }, r.prototype._initVideoApi = function(e) {
            var i, n = this,
                r = this.model.getProvider();
            if ("youtube" === r) {
                var s = function() {
                    var o = function(e) {
                        e.data === t.YT.PlayerState.PLAYING && n._onVideoPlay(Math.round(1e3 * e.target.getCurrentTime()) / 1e3), e.data === t.YT.PlayerState.PAUSED && n._onVideoPause(Math.round(1e3 * e.target.getCurrentTime()) / 1e3), e.data === t.YT.PlayerState.ENDED && n._onVideoStop(Math.round(1e3 * e.target.getCurrentTime()) / 1e3)
                    };
                    t.onYouTubeIframeAPIReady = function() {
                        i = new t.YT.Player(e), i.addEventListener("onStateChange", o)
                    }
                };
                o.loadScript("https://www.youtube.com/iframe_api", s)
            }
            if ("vimeo" === r) {
                var a = function() {
                    i = new t.Vimeo.Player(e), i.on("play", function(t) {
                        n._onVideoPlay(t.seconds)
                    }), i.on("pause", function(t) {
                        n._onVideoPause(t.seconds)
                    }), i.on("ended", function(t) {
                        n._onVideoStop(t.seconds)
                    }), i.on("seeked", function(t) {
                        n._onVideoSeekTo(t.seconds)
                    })
                };
                o.loadScript("https://player.vimeo.com/api/player.js", a)
            }
        }, r.prototype._onVideoPlay = function(t) {
            this.getAnalyticsProvider().trigger("video", {
                action: "Play",
                url: this.model.getAnalyticsVideoUrl(),
                time: t
            })
        }, r.prototype._onVideoPause = function(t) {
            this.getAnalyticsProvider().trigger("video", {
                action: "Pause",
                url: this.model.getAnalyticsVideoUrl(),
                time: t
            })
        }, r.prototype._onVideoStop = function(t) {
            this.getAnalyticsProvider().trigger("video", {
                action: "Stop",
                url: this.model.getAnalyticsVideoUrl(),
                time: t
            })
        }, r.prototype._onVideoSeekTo = function(t) {
            this.getAnalyticsProvider().trigger("video", {
                action: "SeekTo",
                url: this.model.getAnalyticsVideoUrl(),
                time: t
            })
        }, e.VideoPresenter = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("underscore/underscore-min")._,
                n = require("fb-html5/common/fb-utils");
            t(global, exports, i, n)
        } else t(window, e, e._, e.fbUtils)
    }(function(t, e, i, n) {
        "use strict";

        function o(t, e, i, n) {
            var o, r, s, a, l, h, c, u = "R" === t[1];
            u ? (o = t[2] / 10, r = t[3] / 10, s = t[4] / 1e3, a = t[5] / 10) : (o = t[1] / 10, r = t[2] / 10, s = t[3] / 1e3, a = t[4] / 10), l = i + (n - 1), h = 0 === i ? 0 : e[i - 1] / 10, c = e[l] / 10 - h, this.y = r, this.x = o + h - (u ? c : 0), this.width = c, this.height = a, this.angle = s, this.rotatePadding = h - (u ? c : 0)
        }

        function r(t) {
            this.pageModel = t, this._data = null
        }
        r.prototype.getQueryHighlights = function(t, e) {
            var n = this;
            i.isNull(this.data) ? this._parseHighlightData(t, e) : this._loadHighlightIndex(function(i, o) {
                i ? e(i) : (n._data = o, n._parseHighlightData(t, e))
            })
        }, r.prototype._loadHighlightIndex = function(t) {
            n.loadXML([this.pageModel.getSearchInfoUrl()], function(e) {
                t(null, e)
            }, function(e) {
                t(e)
            })
        }, r.prototype._parseHighlightData = function(t, e) {
            var r = [];
            try {
                var s, a, l, h, c;
                s = this._data.split("\n"), t = t.toLowerCase() || "", t = n.split(t, 0);
                for (var u = 1, d = s.length; u < d; u++) {
                    a = s[u], l = 0;
                    for (var p = 0, f = t.length; p < f; p++) {
                        if (h = t[p], c = a.split(String.fromCharCode(2)), h.length < this.searchLimit) {
                            var g = i.isUndefined(s[u - 1]) ? "" : s[u - 1].split(String.fromCharCode(2))[0],
                                m = i.isUndefined(s[u]) ? "" : s[u].split(String.fromCharCode(2))[0],
                                v = i.isUndefined(s[u + 1]) ? "" : s[u + 1].split(String.fromCharCode(2))[0],
                                y = g + " " + m,
                                b = m + " " + v,
                                w = t[p - 1] || "",
                                P = t[p],
                                _ = t[p + 1] || "",
                                x = w + " " + P,
                                T = P + " " + _,
                                C = !1;
                            "" !== w && y.toLowerCase().indexOf(x) !== -1 && (C = !0), "" !== _ && b.toLowerCase().indexOf(T) !== -1 && (C = !0)
                        } else C = !0;
                        if ((l = c[0].toLowerCase().indexOf(h)) !== -1 && C) {
                            var S = a.split(String.fromCharCode(4)),
                                k = [],
                                E = [];
                            if (S.length > 1) {
                                for (var L = 0, A = S.length; L < A; L++) k[L] = S[L].split(String.fromCharCode(2)), L > 0 && k[L].unshift(k[0][0]), E[L] = k[L][5].split(String.fromCharCode(3));
                                for (var M = l, B = l + h.length, I = 0, F = k.length; I < F; I++) {
                                    var O;
                                    E[I].length <= M ? (M -= E[I].length, B -= E[I].length) : (B > E[I].length ? (O = E[I].length, B -= E[I].length) : (O = B, B = 0), M > 0 && (O -= M), r.push(new o(k[I], E[I], M, O)), M = 0)
                                }
                            } else E = "R" === c[1] ? c[6].split(String.fromCharCode(3)) : c[5].split(String.fromCharCode(3)), r.push(new o(c, E, l, h.length))
                        }
                    }
                }
            } catch (N) {
                e(N)
            }
            e(null, r)
        }, e.HighlighterModel = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/fb-router").FBRouter;
            t(global, exports, i)
        } else t(window, e, e.FBRouter)
    }(function(t, e, i) {
        "use strict";

        function n(t, e) {
            this.model = t, this.linkProps = e
        }
        n.prototype.getImageUrls = function() {
            for (var t = [], e = 0, n = this.model.urls.length; e < n; e++) t[e] = i().translatePath("assets/common/pages-content/" + this.model.urls[e]);
            return t
        }, n.prototype.getThumbnailUrl = function() {
            return i().translatePath("assets/common/pages-content/" + this.model.previewUrl) || ""
        }, n.prototype.getRotation = function() {
            return this.model.rotation || 0
        }, n.prototype.getRect = function() {
            return {
                width: this.model.width,
                height: this.model.height,
                left: this.model.x,
                top: this.model.y
            }
        }, n.prototype.shouldBeHighlightedOnHover = function() {
            return this.linkProps.highlightOnHover
        }, n.prototype.shouldBeHighlightedOnFlip = function() {
            return this.linkProps.highlightOnFlip
        }, n.prototype.getHighlightColor = function() {
            return this.linkProps.color
        }, e.ImageModel = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("underscore/underscore-min")._;
            t(global, exports, i)
        } else t(window, e, e._)
    }(function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            this.pageNumber = t, this.linkModel = e, this.pageTable = i
        }
        n.prototype.getTitle = function() {
            if (this.linkModel.tooltipEnabled !== !1) {
                if (!i.isUndefined(this.linkModel.url)) return this.linkModel.url;
                if (!i.isUndefined(this.linkModel.id)) return "" + this.pageTable.getPageCaptionById(this.linkModel.id)
            }
            return ""
        }, n.prototype.isInternal = function() {
            return !i.isUndefined(this.linkModel.id)
        }, n.prototype.getUrl = function() {
            return this.linkModel.url ? this.linkModel.url : this.linkModel.id ? "fb-internal://" + this.linkModel.id : "#"
        }, n.prototype.getTarget = function() {
            return this.linkModel.target || "_self"
        }, n.prototype.getBackgroundColor = function() {
            return this.linkModel.color || "#75869C"
        }, n.prototype.getZIndex = function() {
            return this.linkModel.zIndex || 0
        }, n.prototype.getAngle = function() {
            return this.linkModel.angle || 0
        }, n.prototype.shouldBeHighlightedOnHover = function() {
            return this.linkModel.highlightOnHover
        }, n.prototype.shouldBeHighlightedOnFlip = function() {
            return this.linkModel.highlightOnFlip
        }, n.prototype.getRect = function() {
            return {
                width: this.linkModel.rect[0],
                height: this.linkModel.rect[1],
                left: this.linkModel.rect[2],
                top: this.linkModel.rect[3]
            }
        }, n.prototype.getPageNumber = function() {
            return this.pageNumber
        }, n.prototype.getPageIndexById = function(t) {
            return this.pageTable.getPageIndexById(t) + 1
        }, e.LinkModel = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/fb-router").FBRouter;
            t(global, exports, i)
        } else t(window, e, e.FBRouter)
    }(function(t, e, i) {
        "use strict";

        function n(t) {
            this.videoModel = t
        }
        n.prototype.getVideoUrl = function() {
            var t = this.videoModel.id,
                e = this.videoModel.provider,
                i = this.videoModel.startFrom,
                n = this.videoModel.autoplay,
                o = {},
                r = "",
                s = {};
            n && (s.autoplay = "1");
            var a = function(t) {
                var e = parseInt(t / 3600, 10) % 24,
                    i = parseInt(t / 60, 10) % 60,
                    t = t % 60,
                    n = "";
                return e && (n += e + "h"), i && (n += i + "m"), n += t + "s"
            };
            switch (e) {
                case "youtube":
                    r = "https://www.youtube.com/embed/" + t, i && (s.start = i), s.enablejsapi = "1", s.version = "3", s.rel = "0";
                    break;
                case "vimeo":
                    r = "https://player.vimeo.com/video/" + t, i && (o.t = a(i));
                    break;
                default:
                    r = t, i && (s.start = i)
            }
            var l = function(t) {
                    var e = [];
                    for (var i in t) t.hasOwnProperty(i) && e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                    return e.join("&")
                },
                h = l(s),
                c = l(o);
            return r + (h.length > 0 ? "?" + h : "") + (c ? "#" + c : "")
        }, n.prototype.getAnalyticsVideoUrl = function() {
            var t = this.videoModel.id,
                e = this.videoModel.provider,
                i = "";
            switch (e) {
                case "youtube":
                    i = "https://www.youtube.com/watch?v=" + t;
                    break;
                case "vimeo":
                    i = "https://vimeo.com/" + t;
                    break;
                default:
                    i = t
            }
            return i
        }, n.prototype.getRect = function() {
            return {
                width: this.videoModel.width,
                height: this.videoModel.height,
                left: this.videoModel.x,
                top: this.videoModel.y
            }
        }, n.prototype.getStartTime = function() {
            return this.videoModel.startFrom
        }, n.prototype.getProvider = function() {
            return this.videoModel.provider
        }, n.prototype.getThumbnailUrl = function() {
            return this.videoModel.showImage ? i().translatePath("assets/common/pages-content/" + this.videoModel.image) : ""
        }, e.VideoModel = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._,
                n = require("fb-html5/common/fb-utils"),
                o = require("fb-html5/common/events").Events,
                r = require("fb-html5/common/frameworks/hammer"),
                s = require("fb-html5/common/mini-framework"),
                a = require("fb-html5/common/fb-locator").FBLocator;
            t(global, exports, o, r, i, n, s, a)
        } else t(window, e, e.Events, e.Hammer, e._, e.fbUtils, e.el, e.FBLocator)
    }(function(t, e, i, n, o, r, s, a) {
        "use strict";

        function l(t) {
            this.presenter = t
        }
        l.prototype = new i, l.prototype.constructor = l, l.prototype.setFillMode = function(t) {
            this.fillMode = t, this.backgroundContainer.style["background-size"] = "fit" === this.fillMode ? "contain" : "cover"
        }, l.prototype.init = function(t) {
            this.state = l.STATES.IDLE;
            var e = {
                state: l.STATES.IDLE,
                backgroundImages: [],
                mode: "single",
                fillMode: "fit",
                pageSize: {
                    width: 100,
                    height: 100
                },
                pageBackgroundColor: "#FFFFFF",
                content: []
            };
            return o.extend(e, t), this.pageBackgroundColor = e.pageBackgroundColor, this.mode = e.mode, this.pageWidth = e.pageSize.width, this.pageHeight = e.pageSize.height, this.fillMode = e.fillMode, this.content = e.content, this.setBackgroundImages(e.backgroundImages), this.parentObject = s.createElement("div", {
                "class": "page-content",
                styles: {
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    background: e.pageBackgroundColor
                }
            }), this.container = s.createElement("div", {}, this.parentObject), this._buildDOM(this.container), this._addNavigationButtons(this.parentObject), this._bindDOMEvents(this.container), this.on("change:state", this._onStateChanged, this), this.set("state", e.state), this
        }, l.prototype._parseColor = function(t) {
            var e;
            return (e = t.match(/^#([0-9a-f]{3})$/i)) ? (e = e[1], [17 * parseInt(e.charAt(0), 16), 17 * parseInt(e.charAt(1), 16), 17 * parseInt(e.charAt(2), 16)]) : (e = t.match(/^#([0-9a-f]{6})$/i), e ? (e = e[1], [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)]) : [0, 0, 0])
        }, l.prototype._calculateLuma = function(t) {
            var e = 299,
                i = 667,
                n = 114,
                o = (t[0] * e + t[1] * i + t[2] * n) / (e + i + n);
            return o / 255
        }, l.prototype._buildDOM = function(t) {
            var e = {
                position: "relative",
                "background-size": "fit" === this.fillMode ? "contain" : "cover",
                "background-position": "center center",
                "background-repeat": "no-repeat",
                height: "100%"
            };
            switch (this.mode) {
                case "wideLeft":
                    e.width = "200%";
                    break;
                case "wideRight":
                    e.width = "200%", e["margin-left"] = "-100%";
                    break;
                default:
                    e.width = "100%"
            }
            this.backgroundContainer = s.createElement("div", {
                "class": "background",
                styles: e
            }, this.container), this.searchContainer = s.createElement("div", {
                "class": "search-container"
            }, this.container, "top"), this.contentContainer = s.createElement("div", {
                "class": "content-container"
            }, this.container, "top"), this.preloader = s.createElement("div", {
                "class": "preloader",
                styles: {
                    display: "none"
                }
            }, t), this.preloaderBackground = s.createElement("div", {}, this.preloader), this.preloaderAnimation = s.createElement("div", {}, this.preloaderBackground)
        }, l.prototype._bindDOMEvents = function(t) {
            var e = this,
                i = new n.Manager(t, {}),
                o = new n.Tap({
                    event: "singletap"
                }),
                r = new n.Tap({
                    event: "doubletap",
                    taps: 2
                });
            i.add([r, o]), r.recognizeWith(o), o.requireFailure([r]), i.on("singletap", function(t) {
                e.trigger("tap", t.srcEvent)
            }), i.on("doubletap", function(t) {
                e._onDoubleTap(t)
            })
        }, l.prototype._addNavigationButtons = function(t) {
            var e = this,
                i = s.createElement("div", {
                    "class": "prev-nav-button"
                }, t),
                o = s.createElement("div", {
                    "class": "next-nav-button"
                }, t),
                r = new n.Manager(i, {}),
                a = new n.Tap({
                    event: "singletap"
                }),
                l = new n.Tap({
                    event: "doubletap",
                    taps: 2
                });
            r.add([l, a]), l.recognizeWith(a), a.requireFailure([l]), r.on("singletap", function(t) {
                e.presenter.requestNavigation("prev"), t.preventDefault()
            }), r.on("doubletap", function(t) {
                e._onDoubleTap(t)
            });
            var h = new n.Manager(o, {});
            a = new n.Tap({
                event: "singletap"
            }), l = new n.Tap({
                event: "doubletap",
                taps: 2
            }), h.add([l, a]), l.recognizeWith(a), a.requireFailure([l]), h.on("singletap", function(t) {
                e.presenter.requestNavigation("next"), t.preventDefault()
            }), h.on("doubletap", function(t) {
                e._onDoubleTap(t)
            })
        }, l.prototype._onStateChanged = function(t, e) {
            var i = this;
            switch (e === l.STATES.UNREADY && t === l.STATES.LOADING || this._applyPreloaderVisibility(), t) {
                case l.STATES.LOADED:
                    this._applyBackgroundImages(), this.content && this.content.length && o.each(this.content, function(t) {
                        i.addContentElement(t)
                    })
            }
        }, l.prototype._applyPreloaderVisibility = function() {
            switch (this.state) {
                case l.STATES.LOADING:
                    s.css(this.preloader, {
                        display: "block"
                    }), s.addClass(this.preloaderBackground, "loading-bg"), s.addClass(this.preloaderAnimation, "loading");
                    break;
                case l.STATES.UNREADY:
                    s.css(this.preloader, {
                        display: "block"
                    }), s.addClass(this.preloaderBackground, "unready-bg");
                    var t = this._calculateLuma(this._parseColor(this.pageBackgroundColor));
                    this.preloaderText = s.createElement("div", {
                        "class": t < .5 ? "unready-text-light" : "unready-text-dark"
                    }, this.preloader), this.preloaderText.innerText = a().get("locale").get("Other.CONVERTING_PAGE");
                    break;
                default:
                    s.css(this.preloader, {
                        display: "none"
                    })
            }
        }, l.prototype._applyBackgroundImages = function() {
            var t = "";
            o.each(this.backgroundImages, function(e) {
                t += (t ? "," : "") + 'url("' + e + '")'
            }), t && s.css(this.backgroundContainer, {
                "background-image": t
            })
        }, l.prototype.setState = function(t) {
            this.set("state", t)
        }, l.prototype.setBackgroundImages = function(t) {
            this.backgroundImages = o.filter(t, function(t) {
                return t
            }), this.state === l.STATES.LOADED && this._applyBackgroundImages()
        }, l.prototype.getDOMElement = function() {
            return this.parentObject
        }, l.prototype.addContentElement = function(t) {
            this.contentContainer.appendChild(t)
        }, l.prototype.clearContentView = function() {
            this.contentContainer.innerHTML = ""
        }, l.prototype.clearSearchView = function() {
            this.searchContainer.innerHTML = ""
        }, l.prototype.addSearchViews = function(t) {
            var e = this;
            o.each(t, function(t) {
                e.searchContainer.appendChild(t)
            })
        }, l.prototype.updateBackgroundColor = function(t) {
            this.parentObject.style.backgroundColor = t
        }, l.prototype.resize = function(t) {
            var e = this.pageWidth;
            switch (this.mode) {
                case "wideLeft":
                case "wideRight":
                    e /= 2
            }
            var i, n, o;
            if ("fit" === this.fillMode) switch (i = r.fitScreenSizes(e, this.pageHeight, t.width, t.height), Math.abs(i.paddingLeft) < 1 && Math.abs(i.paddingTop) < 1 && (i = r.fillScreenSizes(e, this.pageHeight, t.width, t.height), this.backgroundContainer.style["background-size"] = "cover"), n = (t.width - i.width) / 2, o = (t.height - i.height) / 2, this.mode) {
                case "wideLeft":
                    n *= 2;
                    break;
                case "wideRight":
                    n = 0
            } else i = t, n = o = 0;
            var a = t.width / t.height,
                l = this.pageWidth / this.pageHeight;
            switch (this.mode) {
                case "wideLeft":
                case "wideRight":
                    l /= 2
            }
            var h = a > l ? a / l : l / a,
                c = a > l ? (t.height / h - t.height) / 2 : 0,
                u = 0;
            switch (this.mode) {
                case "wideLeft":
                    a < l ? u = -(t.width - t.width / h) / 2 : a > l && (u = (t.width - t.width / h) / 2);
                    break;
                case "wideRight":
                    a !== l && (u = (t.width - t.width / h) / 2);
                    break;
                default:
                    a > l && (u = (t.width - t.width / h) / 2)
            }
            var d = "fill" === this.fillMode ? "scale(" + h + ") translateX(" + u + "px) translateY(" + c + "px)" : "scale(1) translateX(0px) translateY(0px)";
            this.contentContainer.style.transform = d, this.searchContainer.style.transform = d, s.css(this.container, {
                width: Math.round(i.width) + "px",
                height: Math.round(i.height) + "px",
                "margin-left": Math.round(n) + "px",
                "margin-top": Math.round(o) + "px"
            })
        }, l.prototype._onDoubleTap = function(t) {
            var e = this.container.getBoundingClientRect(),
                i = {
                    x: t.center.x - e.left,
                    y: t.center.y - e.top
                };
            this.presenter.requestNavigation("zoom", {
                center: i
            }), t.preventDefault()
        }, l.STATES = {
            IDLE: "idle",
            UNREADY: "unready",
            LOADING: "loading",
            LOADED: "loaded"
        }, e.ContentView = l
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/book/content/view").ContentView,
                n = require("underscore")._,
                o = require("fb-html5/book/content/widgets/link/presenter").LinkPresenter,
                r = require("fb-html5/book/content/widgets/link/model").LinkModel,
                s = require("fb-html5/book/content/widgets/highlighter/presenter").HighlighterPresenter,
                a = require("fb-html5/book/content/widgets/highlighter/model").HighlighterModel,
                l = require("fb-html5/book/content/widgets/video/model").VideoModel,
                h = require("fb-html5/book/content/widgets/video/presenter").VideoPresenter,
                c = require("fb-html5/book/content/widgets/image/model").ImageModel,
                u = require("fb-html5/book/content/widgets/image/presenter").ImagePresenter,
                d = require("fb-html5/common/fb-utils"),
                p = require("fb-html5/common/events").Events,
                f = require("fb-html5/common/loaderd/base").LoaderState,
                g = require("fb-html5/common/loaderd/base").LoaderEvent;
            t(global, exports, p, i, o, r, s, a, h, l, u, c, d, n, f, g)
        } else t(window, e, e.Events, e.ContentView, e.LinkPresenter, e.LinkModel, e.HighlighterPresenter, e.HighlighterModel, e.VideoPresenter, e.VideoModel, e.ImagePresenter, e.ImageModel, e.fbUtils, e._, e.LoaderState, e.LoaderEvent)
    }(function(t, e, i, n, o, r, s, a, l, h, c, u, d, p, f, g) {
        "use strict";

        function m(t) {
            this.model = t, this.isActive = !1, this.pageContentPresenters = []
        }
        m.prototype = new i, m.prototype.constructor = m, m.prototype.init = function(t) {
            var e = this;
            this.currentSize = t, this.model.on("change:pageContent", function() {
                e.view.clearContentView(), p.each(e._getPageContent(), function(t) {
                    e.view.addContentElement(t)
                })
            }), this.model.on("change:pageBackground", function() {
                e.view.updateBackgroundColor(e.model.getBackgroundColor())
            }), this.model.on("change:fillChanged", function() {
                e.view.setFillMode(e.model.getFillMode()), e.view.resize(e.currentSize)
            }), this.model.on("change:textLayer", function() {
                p.defer(p.bind(function() {
                    this._updateBackgroundImages()
                }, e))
            });
            var i = this.model.getPageSize();
            return this.view = new n(this).init({
                mode: this.model.getMode(),
                fillMode: this.model.getFillMode(),
                pageSize: i,
                pageBackgroundColor: this.model.getBackgroundColor(),
                content: this._getPageContent()
            }), this._updateBackgroundImages(), this._generateSearchHighlights(), this.view.resize(this.currentSize), this
        }, m.prototype._updateBackgroundImages = function() {
            var t = this;
            this.pageResources = this.model.getBackgroundImages();
            var e = t.pageResources[0].getState();
            p.each(this.pageResources, function(t) {
                var i = t.getState();
                i < e && (e = i)
            }), e < f.LOADED && e >= f.READY ? t.view.setState(n.STATES.LOADING) : e < f.READY && t.view.setState(n.STATES.UNREADY);
            var i = 0,
                o = function() {
                    i++, i === t.pageResources.length && (t.view.setBackgroundImages(p.map(t.pageResources, function(t) {
                        return t.getLoadedData()
                    })), t.view.setState(n.STATES.LOADED))
                };
            p.each(this.pageResources, function(t) {
                var e = t.getState();
                e >= f.LOADED ? o() : e < f.LOADED && t.once(g.LOADED, o)
            })
        }, m.prototype._getPageContent = function() {
            var t = this;
            return p.map(this.model.getPageContent(), function(e) {
                return t._contentItemsFactory(e)
            })
        }, m.prototype._contentItemsFactory = function(t) {
            var e, i = this;
            switch (t.type) {
                case "link":
                    e = new o(new r(i.model.getPageNumber(), d.mergeObjects(this.model.getDefaultLinkProps(), t.data), this.model.getPageTable()), this).init();
                    break;
                case "video":
                    e = new l(new h(t.data)).init();
                    break;
                case "image":
                    e = new c(new u(t.data, this.model.getDefaultLinkProps())).init()
            }
            var n = function(t) {
                var n = i.model.getPageSize();
                switch (i.model.getMode()) {
                    case "wideRight":
                    case "wideLeft":
                        n.width /= 2
                }
                var o = d.fitScreenSizes(n.width, n.height, t.width, t.height),
                    r = o.width / n.width;
                "wideRight" === i.model.getMode() && e.offset(-n.width), e.scale(r)
            };
            return this.on("change:currentSize", function(t) {
                n(t)
            }), n(this.currentSize), this.on("change:isActive", function(t) {
                t && e.highlight()
            }), this.model.isReady() ? p.delay(function() {
                e.highlight()
            }, 100) : this.model.once("isReady", function() {
                e.highlight()
            }), this.pageContentPresenters.push(e), e.getView().getDOMElement()
        }, m.prototype._generateSearchHighlights = function() {
            var t = this;
            this.highlightModel = new a(t.model.getPageModel());
            var e = function() {
                    if (t.highlightPresenter) {
                        var e = t.currentSize,
                            i = t.model.getPageSize();
                        switch (t.model.getMode()) {
                            case "wideRight":
                            case "wideLeft":
                                i.width /= 2
                        }
                        var n = d.fitScreenSizes(i.width, i.height, e.width, e.height),
                            o = n.width / i.width;
                        "wideRight" === t.model.getMode() && t.highlightPresenter.offset(-i.width), t.highlightPresenter.scale(o)
                    }
                },
                i = function() {
                    t.highlightPresenter && t.highlightPresenter.cancelAllRequests(), t.highlightPresenter = new s(t.highlightModel), t.highlightPresenter.getSearchHighlightViews(t.model.getSearchQuery(), function(i, n) {
                        !i && n && n.length && (t.view.addSearchViews(n), e())
                    })
                };
            this.model.isSearchActive() && i(), this.model.on("isSearchActive change:searchQuery", function(e) {
                t.model.isSearchActive && (t.view.clearSearchView(), e && i())
            }), this.on("change:currentSize", function() {
                this.model.isSearchActive() && e()
            })
        }, m.prototype.getViewElement = function() {
            return this.view.getDOMElement()
        }, m.prototype.resize = function(t) {
            this.set("currentSize", t), this.view.resize(t)
        }, m.prototype.requestNavigation = function(t, e) {
            this.trigger("requestNavigation", {
                type: t,
                data: e
            })
        }, m.prototype.setActive = function(t) {
            this.set("isActive", t)
        }, m.prototype.isWide = function() {
            return this.model.getMode().indexOf("wide") !== -1
        }, m.prototype.freePageLoaders = function() {
            this.model.freePageLoaders(this.pageResources)
        }, m.prototype.destroy = function() {
            p.each(this.pageContentPresenters, function(t) {
                t.destroy()
            }), this.model.destroy()
        }, e.ContentPresenter = m
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._,
                n = require("fb-html5/common/events").Events,
                o = require("fb-html5/common/fb-locator").FBLocator,
                r = require("@flippingbook/fb-publication").PageResourceType;
            t(global, exports, n, i, o, r)
        } else t(window, e, e.Events, e._, e.FBLocator, e.PageResourceType)
    }(function(t, e, i, n, o, r) {
        "use strict";

        function s(t, e, i, n) {
            var o = this;
            this.pageModel = e, t.props.cast("links"), this.defaultLinksProps = t.props.links, this.highQuality = i, this.pageType = n || (e.getProperty("wide") ? "wide" : "single"), this._bookModel = t, this._isReadyChanged = function(t) {
                o.trigger("isReady", t)
            }, this.listenTo(this._bookModel, "change:isReady", this._isReadyChanged), this._isSearchActiveChanged = function(t) {
                o.trigger("isSearchActive", t)
            }, this.listenTo(this._bookModel, "change:isSearchActive", this._isSearchActiveChanged), this._searchQueryChanged = function(t) {
                o.trigger("change:searchQuery", t)
            }, this.listenTo(this._bookModel, "change:searchQuery", this._searchQueryChanged), this._fillChanged = function() {
                o.trigger("change:fillChanged")
            }, this._contentChanged = function() {
                o.trigger("change:pageContent")
            }, this._backgroundChanged = function() {
                o.trigger("change:pageBackground")
            }, this._textLayerChanged = function() {
                o.trigger("change:textLayer")
            }, this.listenTo(this.pageModel.getPropertyModel(), "change:videos change:links change:images", this._contentChanged), this.listenTo(this.pageModel.getPropertyModel(), "change:pageResize", this._fillChanged), this.listenTo(this.pageModel.getPropertyModel(), "change:backgroundColor", this._backgroundChanged), this.listenTo(this.pageModel.getPropertyModel(), "change:textLayer", this._textLayerChanged), this.listenTo(this.getDefaultLinkProps(), "all", this._contentChanged)
        }
        s.prototype = new i, s.prototype.constructor = s, s.prototype.isReady = function() {
            return this._bookModel.isReady
        }, s.prototype.getPageId = function() {
            return this.getPageModel().id
        }, s.prototype.getPageModel = function() {
            return this.pageModel
        }, s.prototype.getPageContent = function() {
            var t = [];
            return n.each(n.sortBy(this.pageModel.getProperty("links"), "zIndex").reverse(), function(e) {
                t.push({
                    type: "link",
                    data: e
                })
            }), n.each(n.sortBy(this.pageModel.getProperty("videos"), "zIndex").reverse(), function(e) {
                t.push({
                    type: "video",
                    data: e
                })
            }), n.each(n.sortBy(this.pageModel.getProperty("images"), "zIndex").reverse(), function(e) {
                t.push({
                    type: "image",
                    data: e
                })
            }), t
        }, s.prototype.getMode = function() {
            return this.pageType
        }, s.prototype.isSearchActive = function() {
            return this._bookModel.isSearchActive
        }, s.prototype.getSearchQuery = function() {
            return this._bookModel.searchQuery
        }, s.prototype.getPageSize = function() {
            return {
                width: this.pageModel.getProperty("width"),
                height: this.pageModel.getProperty("height")
            }
        }, s.prototype.getDefaultLinkProps = function() {
            return this.defaultLinksProps
        }, s.prototype.getBackgroundImages = function() {
            var t = o().get(o.LOAD_MANAGER);
            return n.filter([t.getPageLoader(this.getPageId(), this.highQuality ? r.ZOOM_PAGE_TEXT : r.PAGE_TEXT), t.getPageLoader(this.getPageId(), this.highQuality ? r.ZOOM_PAGE_SUBSTRATE : r.PAGE_SUBSTRATE)], function(t) {
                return t
            })
        }, s.prototype.getBackgroundColor = function() {
            return this.pageModel.getProperty("backgroundColor")
        }, s.prototype.getPageTable = function() {
            return this._bookModel.getPageTable()
        }, s.prototype.getPageNumber = function() {
            return this.getPageTable().getPageIndexById(this.getPageId())
        }, s.prototype.getFillMode = function() {
            return "FILL" === this.getPageModel().getProperty("pageResize") ? "fill" : "fit"
        }, s.prototype.destroy = function() {
            this.stopListening(this._bookModel, "change:isReady", this._isReadyChanged), this.stopListening(this._bookModel, "change:isSearchActive", this._isSearchActiveChanged), this.stopListening(this._bookModel, "change:searchQuery", this._searchQueryChanged), this.stopListening(this.pageModel.getPropertyModel(), "change:videos change:links change:images", this._contentChanged), this.stopListening(this.pageModel.getPropertyModel(), "change:pageResize", this._fillChanged), this.stopListening(this.pageModel.getPropertyModel(), "change:backgroundColor", this._backgroundChanged), this.stopListening(this.pageModel.getPropertyModel(), "change:textLayer", this._textLayerChanged), this.stopListening(this.getDefaultLinkProps(), "all", this._contentChanged)
        }, e.ContentModel = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events;
            t(global, exports, i)
        } else t(window, e, e.Events)
    }(function(t, e, i) {
        "use strict";

        function n(t) {
            this.presenter = t
        }
        n.prototype = new i, n.prototype.constructor = n, n.prototype.init = function() {}, n.prototype.setTextSelectionMode = function() {}, n.prototype.destroy = function() {}, e.BaseBookView = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/book/components/base/view").BaseBookView,
                n = require("fb-html5/common/fb-utils"),
                o = require("fb-html5/common/html5").html5Lib,
                r = require("fb-html5/common/frameworks/underscore")._,
                s = require("fb-html5/common/frameworks/hammer"),
                a = require("fb-html5/common/mini-framework"),
                l = require("fb-html5/common/events").Events,
                h = require("fb-html5/common/frameworks/modernizr");
            t(global, exports, i, n, o, r, s, a, l, h)
        } else t(window, e, e.BaseBookView, e.fbUtils, e.html5Lib, e._, e.Hammer, e.el, e.Events, e.Modernizr)
    }(function(t, e, i, n, o, r, s, a, l, h) {
        "use strict";

        function c(t, e) {
            this.x = t, this.y = e
        }

        function u(t) {
            i.call(this, t)
        }
        var d = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            transition: "transitionend"
        };
        u.prototype = new i, u.prototype.constructor = u, u.prototype.init = function(t, e) {
            var i = {
                contentProvider: null,
                unitSizeProvider: null,
                animate: null
            };
            if (r.extend(i, e), this._genDOM(t), this.unitPageSizeProvider = i.unitSizeProvider, i.animate ? this.zoomFactor = i.animate.from : this.zoomFactor = i.zoom || this._calcZoomFactorToFitWidth(this.unitPageSizeProvider.getUnitPageSize()), this.contentProvider = i.contentProvider, this.globalWidth = this.mainContainer.clientWidth, this.globalHeight = this.mainContainer.clientHeight, this.maxPullSize = this.globalWidth / 7, this.currentPageCorner = new c(0, 0), this.leftPageCorner = new c(0, 0), this.rightPageCorner = new c(0, 0), this.contentCorner = new c(0, 0), this.leftContentCorner = new c(0, 0), this.rightContentCorner = new c(0, 0), this.contentCornerStore = new c(0, 0), this.currentPageCornerStore = new c(0, 0), this.on("slideAnimation:start", function() {
                    this.presenter.onStartDrag()
                }, this), this.on("slideAnimation:end", function() {
                    this.presenter.onPageChanged()
                }, this), this._newWrapper("current"), this._newWrapper("right"), this._newWrapper("left"), this._bindCurrentWrapperDOM(), this._setCurrentWrapperPosition(), this.container = t, i.animate) {
                var n = i.animate.to || this._calcZoomFactorToFitWidth(this.unitPageSizeProvider.getUnitPageSize());
                this.setZoomValue(n, r.isObject(i.animate.center) ? i.animate.center : null, i.animate.duration)
            }
        }, u.prototype.getDOMElement = function() {
            return this.zoomFrame
        }, u.prototype.getZoomValue = function() {
            return this.zoomFactor
        }, u.prototype.setZoomValue = function(t, e, i, n) {
            if (i = i || 0, this.zoomFactor !== t) {
                var o = this.zoomFactor || 1;
                this.zoomFactor = t, this._scaleCurrentWrapper(t / o, r.isObject(e) ? e : null, i, n), this.trigger("zoom", t, o)
            }
        }, u.prototype._genDOM = function(t) {
            var e = this,
                i = a.createElement("div", {
                    id: "zoom-frame",
                    "class": "zoom-frame"
                }, t);
            this.zoomFrame = i, this.mainContainer = a.createElement("div", {
                id: "zoom-body",
                "class": "zoom-body"
            }, i), this.leftArrow = a.createElement("span", {
                "class": "slide-arrow icon icon-book-prev"
            }, "zoom-frame", "top"), this.rightArrow = a.createElement("span", {
                "class": "slide-arrow icon icon-book-next"
            }, "zoom-frame"), s(this.leftArrow).on("tap", r.throttle(function() {
                e.presenter.goLeft(!0)
            }, 400, {
                leading: !0
            })), s(this.rightArrow).on("tap", r.throttle(function() {
                e.presenter.goRight(!0)
            }, 400, {
                leading: !0
            }))
        }, u.prototype.setLeftArrowVisible = function(t) {
            this.leftArrow.style.display = t ? "inline-block" : "none"
        }, u.prototype.setRightArrowVisible = function(t) {
            this.rightArrow.style.display = t ? "inline-block" : "none"
        }, u.prototype._newWrapper = function(t, e) {
            e = e || null, t = t || "right";
            var i = a.createElement("div", {
                "class": "wrapper"
            });
            i.dataset.position = t;
            var n;
            this.contentProvider && (n = this.contentProvider.getContentForPage(t, e));
            var o = this.unitPageSizeProvider.getUnitPageSize(),
                r = {
                    width: o.width * this.zoomFactor,
                    height: o.height * this.zoomFactor
                };
            n && n.isWide() && (r.height = r.height / 2);
            var l = a.createElement("div", {
                "class": "slide-content",
                styles: {
                    width: r.width + "px",
                    height: r.height + "px",
                    position: "absolute",
                    overflow: "hidden"
                }
            }, i);
            n && (l.appendChild(n.getViewElement()), n.resize(r)), "left" === t ? this.mainContainer.insertBefore(i, this.mainContainer.getElementsByTagName("div")[0]) : this.mainContainer.appendChild(i), this[t + "Wrapper"] = {
                container: i,
                content: l,
                contentObject: n,
                hammer: new s(l, {
                    prevent_default: !0
                })
            }, this[t + "Wrapper"].hammer.add(new s.Pan({
                direction: s.DIRECTION_ALL,
                threshold: 0
            }))
        }, u.prototype.getCurrentWrappers = function() {
            var t = this,
                e = {};
            return r.each(["left", "current", "right"], function(i) {
                t[i + "Wrapper"] && t[i + "Wrapper"].contentObject && (e[i] = t[i + "Wrapper"].content)
            }), e
        }, u.prototype._bindCurrentWrapperDOM = function() {
            this._bindCurrentWrapperDragEvent(), this._initSizes(0)
        }, u.prototype._unbindCurrentWrapperDOM = function() {
            d[h.prefixed("transition")] && this.currentWrapper.container.removeEventListener(d[h.prefixed("transition")], this._animationEnd), this._unbindCurrentWrapperDragEv()
        }, u.prototype._setCurrentWrapperPosition = function() {
            var t = this.currentWrapper.content;
            this.leftWrapper && this.leftWrapper.contentObject || a.addClass(t, "left"), this.rightWrapper && this.rightWrapper.contentObject || a.addClass(t, "right")
        }, u.prototype._bindCurrentWrapperDragEvent = function() {
            var t = this;
            this._tapStart = function(e) {
                var i = {
                    deltaX: e.deltaX,
                    deltaY: e.deltaY
                };
                t._startRender.call(t, i), i = null
            }, this._tapMove = function(e) {
                var i = {
                    deltaX: e.deltaX,
                    deltaY: e.deltaY
                };
                t._render.call(t, i, 0, e.noMomentum)
            }, this._tapEnd = function(e) {
                var i = {
                    deltaX: e.deltaX,
                    deltaY: e.deltaY
                };
                t._stopRender.call(t, i), i = null
            }, this.currentWrapper.hammer.on("panstart", this._tapStart), this.currentWrapper.hammer.on("pan", this._tapMove), this.currentWrapper.hammer.on("panend", this._tapEnd);
            var e, i = {
                deltaX: 0,
                deltaY: 0,
                noMomentum: !0
            };
            this._onWheel = function(o) {
                o.preventDefault && o.preventDefault();
                var r = n.normalizeWheel(o);
                e || t._tapStart(i), clearTimeout(e), e = setTimeout(function() {
                    t._tapEnd(i), e = void 0, i.deltaX = 0, i.deltaY = 0
                }, 250), i.deltaX -= r.pixelX, i.deltaY -= r.pixelY, t._tapMove(i)
            }, n.onWheel(this.currentWrapper.container, this._onWheel)
        }, u.prototype._unbindCurrentWrapperDragEv = function() {
            this.currentWrapper.hammer.off("panstart", this._tapStart), this.currentWrapper.hammer.off("pan", this._tapMove), this.currentWrapper.hammer.off("panend", this._tapEnd), n.removeOnWheel(this.currentWrapper.container, this._onWheel)
        }, u.prototype._onWheel = function() {}, u.prototype._tapStart = function() {}, u.prototype._tapMove = function() {}, u.prototype._tapEnd = function() {}, u.prototype._calcZoomFactorToFitWidth = function(t) {
            return this.mainContainer.getBoundingClientRect().width / t.width
        }, u.prototype.resize = function() {
            this.globalWidth = this.mainContainer.clientWidth, this.globalHeight = this.mainContainer.clientHeight;
            var t = this.unitPageSizeProvider.getUnitPageSize(),
                e = t.width * this.zoomFactor / this.currentWrapper.content.getBoundingClientRect().width;
            this._scaleCurrentWrapper(e)
        }, u.prototype._goToLeft = function() {
            this._unbindCurrentWrapperDOM(), this.mainContainer.removeChild(this.leftWrapper.container), this.leftWrapper = this.currentWrapper, this.currentWrapper = this.rightWrapper, this._newWrapper("right"), this._bindCurrentWrapperDOM(), this._setCurrentWrapperPosition()
        }, u.prototype._goToRight = function() {
            this._unbindCurrentWrapperDOM(), this.mainContainer.removeChild(this.rightWrapper.container), this.rightWrapper = this.currentWrapper, this.currentWrapper = this.leftWrapper, this._newWrapper("left"), this._bindCurrentWrapperDOM(), this._setCurrentWrapperPosition()
        }, u.prototype.goToPage = function(t, e, i) {
            var n = this;
            i = "undefined" == typeof i ? 200 : i, e ? (a.del(this.rightWrapper.content), a.del(this.rightWrapper.container), this._newWrapper("right", t), this.once("slideAnimation:end", function() {
                a.del(this.leftWrapper.content), a.del(this.leftWrapper.container), this._newWrapper("left"), this._initSizes(0)
            }, this), r.delay(function() {
                n.left()
            }, 100)) : (a.del(this.leftWrapper.content), a.del(this.leftWrapper.container), this._newWrapper("left", t), this.once("slideAnimation:end", function() {
                a.del(this.rightWrapper.content), a.del(this.rightWrapper.container), this._newWrapper("right"), this._initSizes(0)
            }), r.delay(function() {
                n.right()
            }, 100)), this._initSizes(0)
        }, u.prototype.right = function(t) {
            t = "undefined" == typeof t ? 100 : t + 1, this.trigger("slideAnimation:start"), this._stopRender(!1, t, "right")
        }, u.prototype.left = function(t) {
            t = "undefined" == typeof t ? 100 : t + 1, this.trigger("slideAnimation:start"), this._stopRender(!1, t, "left")
        }, u.prototype._scaleCurrentWrapper = function(t, e, i, n) {
            t = t || this.zoomFactor, n = n || !1, this._unbindCurrentWrapperDOM(), i = i || 0;
            var s = this.currentWrapper.content.getBoundingClientRect(),
                l = this.currentWrapper.container.getBoundingClientRect();
            e = e || new c(l.left + l.width / 2 - s.left, l.top + l.height / 2 - s.top), e = this._comeOutCorrection(e.x, e.y, t), this.transformStore = o.parseTranslate(this.currentWrapper.content.style[h.prefixedCSS("transform")]);
            var u = this.transformStore.translate.x,
                d = this.transformStore.translate.y;
            o.origin(this.currentWrapper.content, e.x, e.y), o.transition(this.currentWrapper.content, i, "transform"), this.currentWrapper.content.style[h.prefixedCSS("transition-timing-function")] = "cubic-bezier(0.7, 0, 0.27, 1)", this.currentWrapper.content.style[h.prefixedCSS("transform")] = "translate3d(" + u + "px," + d + "px, 0px) scale(" + t + ")", n || r.delay(r.bind(function() {
                var t = this.currentWrapper.content.getBoundingClientRect().top - this.currentWrapper.container.getBoundingClientRect().top,
                    e = this.currentWrapper.content.getBoundingClientRect().left - this.currentWrapper.container.getBoundingClientRect().left,
                    i = this.currentWrapper.container;
                this._newWrapper("current"), r.delay(function() {
                    a.del(i)
                }, 50), a.del(this.rightWrapper.container), a.del(this.leftWrapper.container), this._newWrapper("left"), this._newWrapper("right"), this._initSizes(0, new c(e, t)), this._bindCurrentWrapperDOM(), this._setCurrentWrapperPosition()
            }, this), 1.2 * i || 10)
        }, u.prototype._initSizes = function(t, e) {
            t = t || 0, e = e || new c(0, 0), this.leftPageCorner.x = -this.globalWidth, this.rightPageCorner.x = this.globalWidth, this.deltaWidth = this.currentWrapper.content.clientWidth - this.globalWidth, this.deltaHeight = this.currentWrapper.content.clientHeight - this.globalHeight;
            var i = o.parseTranslate(this.currentWrapper.content.style[h.prefixedCSS("transform")]);
            this.contentCorner.x = i.translate.x + e.x, this.contentCorner.y = i.translate.y + e.y, i = null, 0 === this.contentCorner.x && this.deltaWidth < 0 && (this.contentCorner.x = -this.deltaWidth / 2), this.leftContentCorner.x = -(this.leftWrapper.content.clientWidth - this.globalWidth), this.leftContentCorner.y = 0, this.rightContentCorner.x = 0, this.rightContentCorner.y = 0, this.contentCornerStore.x = 0, this.contentCornerStore.y = 0, this.currentPageCornerStore.x = 0, this.currentPageCornerStore.y = 0, this._setCorners(), this._render(!1), this._stopRender(!1, t, "stop")
        }, u.prototype._setCorners = function() {
            var t = this.leftWrapper.content.clientWidth - this.globalWidth,
                e = this.rightWrapper.content.clientWidth - this.globalWidth,
                i = this.leftWrapper.content.clientHeight - this.globalHeight,
                n = this.rightWrapper.content.clientHeight - this.globalHeight,
                r = 1;
            t < 0 ? this.leftContentCorner.x += t / 2 : this.leftContentCorner.x -= r, e < 0 ? this.rightContentCorner.x -= e / 2 : this.rightContentCorner.x += r, i < 0 ? this.leftContentCorner.y -= i / 2 : this.leftContentCorner.y += r, n < 0 ? this.rightContentCorner.y -= n / 2 : this.rightContentCorner.y += r, o.translate(this.leftWrapper.content, this.leftContentCorner.x, this.leftContentCorner.y), o.translate(this.rightWrapper.content, this.rightContentCorner.x, this.rightContentCorner.y)
        }, u.prototype._render = function(t, e, i) {
            e = e || 0, i = i || !1, t && (this.contentCorner.x = this.contentCornerStore.x + t.deltaX, this.contentCorner.y = this.contentCornerStore.y + t.deltaY);
            var n = this.contentCorner.x - this.currentPageCornerStore.x,
                o = this.contentCorner.y - this.currentPageCornerStore.y;
            this.deltaHeight < 0 ? (this.contentCorner.y = Math.abs(this.deltaHeight) / 2, this.currentPageCorner.y = 0) : o > 0 ? (t || (this.contentCorner.y = this.currentPageCorner.y), this.contentCorner.y = this.currentPageCorner.y + (i ? 0 : this.contentCorner.y / 3)) : Math.abs(o) > this.deltaHeight ? (t || (this.contentCorner.y = this.currentPageCorner.y - this.deltaHeight), this.contentCorner.y = this.currentPageCorner.y - this.deltaHeight + (i ? 0 : (this.contentCorner.y + this.deltaHeight) / 3)) : this.currentPageCorner.y = this.currentPageCornerStore.y, this.deltaWidth < 0 ? (this.currentPageCorner.x = this.contentCorner.x - Math.abs(this.deltaWidth) / 2, this.contentCorner.x = Math.abs(this.deltaWidth) / 2) : n > 0 ? (this.currentPageCorner.x = this.contentCorner.x, this.contentCorner.x = 0) : Math.abs(n) > this.deltaWidth ? (this.currentPageCorner.x = this.contentCorner.x + this.deltaWidth, this.contentCorner.x = -this.deltaWidth) : this.currentPageCorner.x = this.currentPageCornerStore.x, this.leftPageCorner.x = this.currentPageCorner.x - this.globalWidth, this.rightPageCorner.x = this.currentPageCorner.x + this.globalWidth, this.leftPageCorner.y = this.currentPageCorner.y, this.rightPageCorner.y = this.currentPageCorner.y, this._setStyles(e)
        }, u.prototype._setStyles = function(t, e) {
            t = t || 0, e = e || "cubic-bezier(0,0,1,1)", o.transition(this.leftWrapper.container, t, "transform"), o.transition(this.currentWrapper.container, t, "transform"), o.transition(this.rightWrapper.container, t, "transform"), o.transition(this.currentWrapper.content, t, "transform"), this.leftWrapper.container.style[h.prefixedCSS("transition-timing-function")] = e, this.currentWrapper.container.style[h.prefixedCSS("transition-timing-function")] = e, this.rightWrapper.container.style[h.prefixedCSS("transition-timing-function")] = e, this.currentWrapper.content.style[h.prefixedCSS("transition-timing-function")] = e, o.translate(this.leftWrapper.container, this.leftPageCorner.x, this.leftPageCorner.y), o.translate(this.currentWrapper.container, this.currentPageCorner.x, this.currentPageCorner.y), o.translate(this.rightWrapper.container, this.rightPageCorner.x, this.rightPageCorner.y), o.translate(this.currentWrapper.content, this.contentCorner.x, this.contentCorner.y)
        }, u.prototype._startRender = function(t) {
            this.contentCornerStore.x = this.contentCorner.x, this.contentCornerStore.y = this.contentCorner.y, this.currentPageCornerStore.x = this.currentPageCorner.x, this.currentPageCornerStore.y = this.currentPageCorner.y, this.trigger("slideAnimation:start"), this._render(t)
        }, u.prototype._stopRender = function(t, e, i) {
            e = "undefined" == typeof e ? 200 : e, i = i || !1;
            var n = this;
            if ("stop" !== i && (this.currentPageCorner.x < 0 && Math.abs(this.currentPageCorner.x) > this.maxPullSize || "left" === i)) {
                var o = this.rightWrapper.content.childNodes.length;
                if (!i && !o) return void this._render(!1, e);
                this._animationEnd = function() {
                    i || n.presenter.goRight(), n._goToLeft.call(n), n.trigger("slideAnimation:end")
                }, d[h.prefixed("transition")] ? this.currentWrapper.container.addEventListener(d[h.prefixed("transition")], this._animationEnd) : r.delay(this._animationEnd, e), this.contentCorner.x = -(this.globalWidth + this.deltaWidth), this.deltaWidth < 0 && (this.contentCorner.x += this.deltaWidth / 2)
            } else if ("stop" !== i && (this.currentPageCorner.x > 0 && Math.abs(this.currentPageCorner.x) > this.maxPullSize || "right" === i)) {
                var s = this.leftWrapper.content.childNodes.length;
                if (!i && !s) return void this._render(!1, e);
                this._animationEnd = function() {
                    i || n.presenter.goLeft(), n._goToRight.call(n), n.trigger("slideAnimation:end")
                }, d[h.prefixed("transition")] ? this.currentWrapper.container.addEventListener(d[h.prefixed("transition")], this._animationEnd) : r.delay(this._animationEnd, e), this.contentCorner.x = this.globalWidth, this.deltaWidth < 0 && (this.contentCorner.x -= this.deltaWidth / 2)
            }
            t && this.presenter.onEndDrag(), this._render(!1, e)
        }, u.prototype._comeOutCorrection = function(t, e, i) {
            var n = this.currentWrapper.content.getBoundingClientRect(),
                o = this.currentWrapper.container.getBoundingClientRect(),
                r = {
                    width: n.width,
                    height: n.height,
                    top: n.top - o.top,
                    left: n.left - o.left
                },
                s = {
                    width: n.width * i,
                    height: n.height * i,
                    top: r.top - (e * i - e),
                    left: r.left - (t * i - t)
                };
            if (s.width < o.width) {
                s.left = (o.width - s.width) / 2 + o.left;
                var a = s.left - n.left;
                t = a / (1 - i)
            } else s.left > 0 ? t = r.left / (i - 1) : s.left + s.width < o.width && (t = r.width - (o.width - (r.left + r.width)) / (i - 1));
            if (s.height < o.height) {
                s.top = (o.height - s.height) / 2 + o.top;
                var l = s.top - n.top;
                e = l / (1 - i)
            } else s.top > 0 ? e = r.top / (i - 1) : s.top + s.height < o.height && (e = r.height - (o.height - (r.top + r.height)) / (i - 1));
            return new c(t, e)
        }, u.prototype.destroy = function() {
            a.del("zoom-frame")
        }, e.SlideView = u
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/fb-utils"),
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/common/mini-framework"),
                r = require("fb-html5/book/components/base/view").BaseBookView,
                s = require("fb-html5/common/fb-locator").FBLocator,
                a = require("jquery");
            t(global, exports, r, i, o, n, s, a)
        } else t(window, e, e.BaseBookView, e.fbUtils, e.el, e._, e.FBLocator, e.$)
    }(function(t, e, i, n, o, r, s, a) {
        "use strict";

        function l(t) {
            i.call(this, t)
        }
        l.prototype = new i, l.prototype.constructor = l, l.prototype.init = function(e, i) {
            var l = this;
            this.root = e;
            var h = {
                startPage: 1,
                totalPages: 1,
                bookSizeProvider: null,
                contentProvider: null,
                rightToLeft: !1,
                hardcover: !1,
                coverColor: "red",
                flipCorner: !1,
                lightFlipCorner: !1,
                pageFlippingDuration: 600,
                size: {
                    width: 640,
                    height: 480
                }
            };
            r.extend(h, i), this.options = h, this.elementId = "flipbook", this.targetName = "turnjs-flipping-book", n.renderTemplate(this.root, t.FBPublication.JST["workspace-book"], {
                type: this.elementId
            }), this.flipbook = o.id(this.elementId), this.viewport = o.id(this.elementId + "-viewport"), this.central = o.id(this.elementId + "-viewport-central"), this._jqueryFlipbook = a("#" + this.elementId);
            var c = function(t) {
                    l.options.hardcover && (t >= 2 ? a("#" + l.elementId + " .front.cover.inside").addClass("fixed") : a("#" + l.elementId + " .front.cover.inside").removeClass("fixed"), t < l._jqueryFlipbook.turn("pages") ? a("#" + l.elementId + " .back.cover.inside").addClass("fixed") : a("#" + l.elementId + " .back.cover.inside").removeClass("fixed"))
                },
                u = this.options.bookSizeProvider.getBookSize();
            if (this._jqueryFlipbook.turn({
                    width: u.width,
                    height: u.height,
                    gradients: !0,
                    acceleration: !1,
                    autoCenter: !0,
                    duration: h.pageFlippingDuration,
                    ownPageSizeProvider: h.bookSizeProvider,
                    direction: h.rightToLeft ? "rtl" : "ltr",
                    elevation: 50,
                    pages: h.totalPages,
                    page: h.startPage,
                    when: {
                        turning: function(t, e, i) {
                            l._onPageChanged(e, i), l._stopCorner(), l.options.hardcover && (c(e), l._jqueryFlipbook.turn("resize")), l.presenter.onPageChanging()
                        },
                        pressed: function() {
                            l._stopCorner(), l.presenter.onStartDrag()
                        },
                        outcorner: function(t, e) {
                            1 === e && l._startCorner()
                        },
                        overcorner: function() {
                            l._stopCorner()
                        },
                        end: function(t, e, i) {
                            1 === e.page && l._startCorner(), i && l.presenter.onEndDrag()
                        },
                        turned: function(t, e) {
                            1 === e ? l._startCorner() : l._stopCorner(), l.presenter.onPageChanged()
                        },
                        missing: function(t, e) {
                            for (var i = 0; i < e.length; i++) l._addPageContent(e[i])
                        },
                        range: function(t, e, i) {
                            var n = l._jqueryFlipbook.turn("pages"),
                                o = [];
                            l.options.hardcover && n > 0 && (o.push(1), n > 1 && o.push(2), n > 2 && (l._jqueryFlipbook.turn("pages") % 2 === 0 ? (o.push(n - 1), o.push(n)) : o.push(n))), s().get(s.LOAD_MANAGER).setBookRange([e, i], o)
                        }
                    }
                }), this.options.hardcover) {
                var d = this._jqueryFlipbook.turn("pages");
                d > 0 && (this._addPageContent(1), d > 1 && (this._frontInsideCover = this._addPageContent(2)), d > 2 && (this._jqueryFlipbook.turn("pages") % 2 === 0 ? (this._backInsideCover = this._addPageContent(d - 1), this._addPageContent(d)) : this._backInsideCover = this._addPageContent(d)), c(h.startPage))
            }
            this._initNavigationEvents(), this.zoomMode = !1, this.setFlipCorner(this.options.flipCorner)
        }, l.prototype.setFlipCorner = function(t) {
            this.options.flipCorner !== t && (this.options.flipCorner = t, t ? this._startCorner() : this._stopCorner())
        }, l.prototype._startCorner = function() {
            var t = this._jqueryFlipbook;
            if (this.options.flipCorner && this._cornerActive !== !0) {
                this._cornerActive = !0, clearInterval(this.interval), clearInterval(this.interval2);
                var e = this;
                this.options.lightFlipCorner ? this.interval = setInterval(function() {
                    a(t).turn("peel", e.isRightToLeft() ? "bl" : "br", void 0, !1), clearInterval(e.interval)
                }, 900) : this.interval = setInterval(function() {
                    a(t).turn("peel", e.isRightToLeft() ? "bl" : "br"), e.interval2 = setTimeout(function() {
                        a(t).turn("peel", !1)
                    }, 450)
                }, 900)
            }
        }, l.prototype._stopCorner = function() {
            clearInterval(this.interval), clearInterval(this.interval2), this._cornerActive = !1
        }, l.prototype.goToPage = function(t) {
            this._jqueryFlipbook.turn("page", t)
        }, l.prototype.isFlipping = function() {
            return t.cornerClickSemafor === !0
        }, l.prototype.isRightToLeft = function() {
            return "rtl" === this._jqueryFlipbook.turn("direction")
        }, l.prototype._addPageContent = function(t) {
            if (this._jqueryFlipbook.turn("hasPage", t)) return a("#" + this.elementId + " .p" + t).get(0);
            var e = t % 2 !== 0,
                i = o.createElement("div", {});
            1 === t && o.addClass(i, "first"), t === this._jqueryFlipbook.turn("pages") && o.addClass(i, "last");
            var n = this._jqueryFlipbook.turn("page"),
                r = [],
                s = {},
                l = i;
            if (this.options.hardcover) {
                switch (t) {
                    case 1:
                        r = ["hard", "front", "cover"];
                        break;
                    case 2:
                        r = ["hard", "front", "cover", "inside"], n >= 2 && r.push("fixed");
                        break;
                    case this._jqueryFlipbook.turn("pages") - 1:
                        e && (r = ["hard", "back", "cover", "inside"], n < this._jqueryFlipbook.turn("pages") && r.push("fixed"));
                        break;
                    case this._jqueryFlipbook.turn("pages"):
                        r = ["hard", "back", "cover"], e && (r.push("inside"), s.backgroundColor = this.options.coverColor, n < this._jqueryFlipbook.turn("pages") && o.addClass(i, "fixed"))
                }
                if (r.indexOf("inside") !== -1) {
                    s.backgroundColor = this.options.coverColor;
                    var h = this.options.bookSizeProvider.getBookSize(),
                        c = this.options.bookSizeProvider.getPageSize(t),
                        u = h.height - c.height,
                        d = h.width / 2 - c.width,
                        p = r.indexOf("front") === -1 ? 0 : d,
                        f = r.indexOf("front") === -1 ? d : 0;
                    l = o.createElement("div", {
                        styles: {
                            top: u / 2 + "px",
                            bottom: u / 2 + "px",
                            left: (this.isRightToLeft() ? f : p) + "px",
                            right: (this.isRightToLeft() ? p : f) + "px",
                            position: "absolute"
                        }
                    }, i)
                }
                if (0 === r.length) {
                    r = ["own-size"];
                    var g = this.options.bookSizeProvider.getPageSize(t - 1);
                    s.width = g.width + "px", s.height = g.height + "px"
                }
            }
            o.addClass(i, r.join(" ")), o.css(i, s);
            var m = this.options.contentProvider ? this.options.contentProvider.getContentForPage(t) : null;
            return m && (m.dataset.type = "content", l.appendChild(m)), this._jqueryFlipbook.turn("addPage", i, t), o.createElement("div", {
                "class": "gradient"
            }, i), i
        }, l.prototype.resize = function() {
            var t = this.options.bookSizeProvider.getBookSize();
            this._jqueryFlipbook.turn("size", t.width, t.height);
            var e = this.viewport.getBoundingClientRect();
            this.central.style.marginLeft = 2 * Math.floor(-t.width / 4) + "px", this.central.style.marginTop = Math.floor(-t.height / 2) + "px", this.central.style.top = Math.floor(e.height / 2) + "px", this.central.style.left = Math.floor(e.width / 2) + "px"
        }, l.prototype._onPageChanged = function(t, e) {
            var i = e[0] - 1;
            i < 0 && (i = 0), this.presenter.goToPage(i)
        }, l.prototype._initNavigationEvents = function() {
            var t = this,
                e = (this.isRightToLeft() ? ".previous-button" : ".next-button") + " .btn-container",
                i = (this.isRightToLeft() ? ".next-button" : ".previous-button") + " .btn-container",
                n = this.isRightToLeft() ? ".icon-book-last" : ".icon-book-first",
                o = this.isRightToLeft() ? ".icon-book-first" : ".icon-book-last";
            a(e).click(function() {
                t.set("textSelectionMode", !1), t._jqueryFlipbook.turn("next")
            }), a(i).click(function() {
                t.set("textSelectionMode", !1), t._jqueryFlipbook.turn("previous")
            }), a(n).click(function() {
                t.set("textSelectionMode", !1), t.presenter.goToFirst()
            }), a(o).click(function() {
                t.set("textSelectionMode", !1), t.presenter.goToLast()
            })
        }, l.prototype.setTextSelectionMode = function(t) {
            t ? o.addClass(this.viewport, "allowSelect") : o.removeClass(this.viewport, "allowSelect"), this._jqueryFlipbook.turn("disable", t)
        }, l.prototype.setNextButtonVisible = function(t) {
            var e = this.isRightToLeft() ? ".previous-button" : ".next-button";
            t ? a(e).show() : a(e).hide()
        }, l.prototype.setPrevButtonVisible = function(t) {
            var e = this.isRightToLeft() ? ".next-button" : ".previous-button";
            t ? a(e).show() : a(e).hide()
        }, l.prototype.destroy = function() {
            this._stopCorner(), this._jqueryFlipbook.turn("destroy").remove(), o.del("flipbook-viewport")
        }, l.prototype.isAnimating = function() {
            return this._jqueryFlipbook.turn("animating") && !this._cornerActive
        }, l.prototype.getCurrentPagesDomElements = function() {
            var t = this,
                e = {};
            return r.each(this._jqueryFlipbook.turn("view"), function(i) {
                i > 0 && i <= t._jqueryFlipbook.turn("pages") && (e[i] = a(".page-wrapper .p" + i).get(0))
            }), e
        }, l.prototype.setCoverColor = function(t) {
            this.options.coverColor = t, this._backInsideCover && (this._backInsideCover.style.backgroundColor = t), this._frontInsideCover && (this._frontInsideCover.style.backgroundColor = t)
        }, e.TurnJSView = l
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events,
                n = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i, n)
        } else t(window, e, e.Events, e._)
    }(function(t, e, i, n) {
        "use strict";

        function o(t) {
            this.model = t, this.view = this._createView(), this.isReady = !1
        }
        o.prototype = new i, o.prototype.constructor = o, o.prototype.init = function() {
            return this
        }, o.prototype.onPagerStateChange = function(t, e) {
            var i = this;
            n.each(n.uniq([t.leftPage, t.rightPage]), function(t) {
                t && i.onPageActivate(t)
            }), n.each(n.uniq([e.leftPage, e.rightPage]), function(t) {
                t && i.onPageDeactivate(t)
            })
        }, o.prototype.setTextSelectionMode = function(t) {
            this.view.setTextSelectionMode(t)
        }, o.prototype.onPageChanging = function() {
            this.trigger("onPageChanging")
        }, o.prototype.onEndDrag = function() {
            this.trigger("onEndDrag")
        }, o.prototype.onStartDrag = function() {
            this.trigger("onStartDrag")
        }, o.prototype.onPageChanged = function() {
            this.trigger("onPageChanged")
        }, o.prototype.destroy = function() {
            this.view.destroy()
        }, o.prototype._createView = function() {
            throw new Error("_createView should be overriden")
        }, o.prototype.onPageActivate = function() {}, o.prototype.onPageDeactivate = function() {}, o.prototype.resize = function() {}, o.prototype.getDataForTransitionStart = function() {}, e.BaseFlipBookPresenter = o
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/book/components/base/presenter").BaseFlipBookPresenter,
                n = require("fb-html5/book/components/slide/view").SlideView,
                o = require("fb-html5/book/content/presenter").ContentPresenter,
                r = require("fb-html5/book/content/model").ContentModel,
                s = require("fb-html5/common/fb-utils"),
                a = require("fb-html5/common/fb-locator").FBLocator,
                l = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i, o, n, r, s, a, l)
        } else t(window, e, e.BaseFlipBookPresenter, e.ContentPresenter, e.SlideView, e.ContentModel, e.fbUtils, e.FBLocator, e._)
    }(function(t, e, i, n, o, r, s, a, l) {
        "use strict";

        function h(t) {
            i.call(this, t), this.contentPresenters = {}
        }
        var c = 4,
            u = {
                toView: function(t) {
                    return 1 + t * (c - 1)
                },
                fromView: function(t) {
                    return (t - 1) / (c - 1)
                }
            };
        h.prototype = Object.create(i.prototype), h.prototype.constructor = h, h.prototype._createView = function() {
            return new o(this)
        }, h.prototype.init = function(t, e) {
            i.prototype.init.call(this, t);
            var n = this;
            this.size = t.getBoundingClientRect();
            var o = this.model.zoomScaleValue ? u.toView(this.model.zoomScaleValue) : void 0,
                r = {
                    contentProvider: this,
                    unitSizeProvider: this,
                    animate: null
                };
            return l.extend(r, e), r.animate ? (o && (r.animate.to || (r.animate.to = o)), r.animate.fromRect && (r.animate.from = r.animate.fromRect.width / this.getUnitPageSize().width, delete r.animate.fromRect)) : r.zoom = o, this.view.init(t, r), this.view.getDOMElement().dataset.dir = this.model.getPager().isRtl() ? "rtl" : "", this.view.setLeftArrowVisible(this.model.getPager().isRtl() ? this.model.getPager().getNextPageId() : this.model.getPager().getPrevPageId()), this.view.setRightArrowVisible(this.model.getPager().isRtl() ? this.model.getPager().getPrevPageId() : this.model.getPager().getNextPageId()), this.model.zoomScaleValue || this.model.set("zoomScaleValue", u.fromView(this.view.getZoomValue())), this._onViewZoomChanged = function(t) {
                n._fireZoom = !0, n.model.set("zoomScaleValue", u.fromView(t))
            }, this.view.on("zoom", this._onViewZoomChanged), this._onZoomScaleValueChanged = function(t) {
                return n._fireZoom ? void(n._fireZoom = !1) : void n.setZoomValue(u.toView(t), null, 0)
            }, this.listenTo(this.model, "change:zoomScaleValue", this._onZoomScaleValueChanged), i.prototype.init.call(this)
        }, h.prototype.getContentForPage = function(t, e) {
            var i = this.model.getPager(),
                o = this.model.getPageTable(),
                s = i.getState().leftPage,
                h = i.isRtl() ? i.getPrevPageId() : i.getNextPageId(),
                c = i.isRtl() ? i.getNextPageId() : i.getPrevPageId(),
                u = e || ("left" === t ? c : "right" === t ? h : s),
                d = o.getPageModel(u);
            if (a().get(a.LOAD_MANAGER).setBookRange([], [s, i.getPrevPageId(), i.getNextPageId()], !1), d) {
                if (l.has(this.contentPresenters, d.id)) return this.contentPresenters[d.id];
                var p = new r(this.model, d, (!0)),
                    f = new n(p).init(this.size);
                return this.listenTo(f, "requestNavigation", function(t) {
                    if (t) switch (t.type) {
                        case "page":
                            this.model.getPager().goToPageById(t.data.pageId);
                            break;
                        case "next":
                            this.model.getPager().goForward();
                            break;
                        case "prev":
                            this.model.getPager().goBackward();
                            break;
                        case "zoom":
                            this.model.getPager().setZoomMode(!1);
                    }
                }, this), this.contentPresenters[d.id] = f, f
            }
        }, h.prototype.getUnitPageSize = function() {
            return s.fitRectIntoBounds({
                width: this.model.props.bookSize.width,
                height: this.model.props.bookSize.height
            }, {
                width: .95 * this.size.width / 2,
                height: .95 * this.size.height
            })
        }, h.prototype.resize = function(t) {
            this.size = t, this.view.resize()
        }, h.prototype.goLeft = function(t) {
            this._fireTrigger = !t;
            var e = this.model.getPager();
            e.isRtl() ? e.goForward() : e.goBackward()
        }, h.prototype.goRight = function(t) {
            this._fireTrigger = !t;
            var e = this.model.getPager();
            e.isRtl() ? e.goBackward() : e.goForward()
        }, h.prototype.onPagerStateChange = function(t, e) {
            if (this.view.setLeftArrowVisible(this.model.getPager().isRtl() ? this.model.getPager().getNextPageId() : this.model.getPager().getPrevPageId()), this.view.setRightArrowVisible(this.model.getPager().isRtl() ? this.model.getPager().getPrevPageId() : this.model.getPager().getNextPageId()), this._fireTrigger) return void(this._fireTrigger = !1);
            if (t.zoomMode !== !1 && !l.isNull(t) && !l.isUndefined(t)) {
                var i = l.isNull(e) || l.isUndefined(e);
                if (!i && t.leftPage !== e.leftPage) {
                    var n, o = this.model.getPageTable();
                    n = o.getPageIndexById(t.leftPage) > o.getPageIndexById(e.leftPage) ? !this.model.getPager().isRtl() : this.model.getPager().isRtl(), this.view.goToPage(t.leftPage, n)
                }
            }
        }, h.prototype.pre_destroy = function() {
            this.stopListening(this.model, "change:zoomScaleValue", this._onZoomScaleValueChanged), this.view.off("zoom", this._onViewZoomChanged)
        }, h.prototype.destroy = function() {
            l.each(this.contentPresenters, function(t) {
                t.destroy()
            }), i.prototype.destroy.call(this)
        }, h.prototype.onPageActivate = function(t) {
            l.has(this.contentPresenters, t) && this.contentPresenters[t].setActive(!0)
        }, h.prototype.onPageDeactivate = function(t) {
            l.has(this.contentPresenters, t) && this.contentPresenters[t].setActive(!1)
        }, h.prototype.setZoomValue = function(t, e, i, n) {
            this.view.setZoomValue(t, e, i, n)
        }, h.prototype.getDataForTransitionStart = function() {
            return this.view.getCurrentWrappers()
        }, e.SlidePresenter = h
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/book/components/base/presenter").BaseFlipBookPresenter,
                n = require("fb-html5/book/components/turnjs/view").TurnJSView,
                o = require("fb-html5/book/content/presenter").ContentPresenter,
                r = require("fb-html5/book/content/model").ContentModel,
                s = require("fb-html5/common/fb-utils"),
                a = require("underscore")._;
            t(global, exports, i, n, o, r, s, a)
        } else t(window, e, e.BaseFlipBookPresenter, e.TurnJSView, e.ContentPresenter, e.ContentModel, e.fbUtils, e._)
    }(function(t, e, i, n, o, r, s, a) {
        "use strict";

        function l(t, e) {
            this.model = t, this.rect = e
        }

        function h(t, e) {
            l.call(this, t, e)
        }

        function c(t) {
            i.call(this, t), this.targetName = "TurnJSPresenter", this.contentPresenters = {};
            var e = {
                width: 0,
                height: 0
            };
            this.bookSizeProvider = this.model.isHardcover() ? new h(this.model, e) : new l(this.model, e), this.model.on("change:hardcoverColor", this._onHardcoverColorChanged, this)
        }
        l.prototype.getPageSize = function() {
            var t = this.getBookSize();
            return t.width /= 2, t
        }, l.prototype.getBookSize = function() {
            var t = this.model.getPadding(),
                e = this.rect.width * t > 50 ? this.rect.width * (1 - t) : this.rect.width - 50,
                i = s.fitRectIntoBounds({
                    width: 2 * this.model.getBookSize().width,
                    height: this.model.getBookSize().height
                }, {
                    width: e,
                    height: this.rect.height * (1 - t)
                });
            return {
                width: 2 * Math.round(i.width / 2),
                height: Math.round(i.height)
            }
        }, l.prototype.setRect = function(t) {
            this.rect = t
        }, h.prototype = Object.create(l.prototype), h.prototype.constructor = h, h.prototype.getPageSize = function(t) {
            var e = l.prototype.getPageSize.call(this);
            if (1 === t || t === this.model.getPagesCount() && t % 2 === 0) return e;
            var i = this.model.getHardcoverSize(),
                n = e.width / e.height,
                o = i,
                r = o * n;
            return e.width = Math.round(e.width - 2 * r), e.height = Math.round(e.height - 2 * o), e
        }, c.prototype = Object.create(i.prototype), c.prototype.constructor = c, c.prototype._createView = function() {
            return new n(this)
        }, c.prototype.init = function(t) {
            this.bookSizeProvider.setRect(t.getBoundingClientRect());
            var e = this.model.getPager().getState();
            return this.view.init(t, {
                hardcover: this.model.isHardcover(),
                coverColor: this.model.getCoverColor(),
                startPage: this.model.getPager().pageTable.getPageIndexById(e.leftPage ? e.leftPage : e.rightPage) + 1,
                totalPages: this.model.getPagesCount(),
                rightToLeft: this.model.getPager().isRtl(),
                pageFlippingDuration: this.model.getFlippingDuration(),
                bookSizeProvider: this.bookSizeProvider,
                contentProvider: this,
                flipCorner: this.model.getFlipCorner(),
                lightFlipCorner: this.model.getBrowser().firefox
            }), this.model.on("change:flipCorner", this._flipCornerUpdate, this), this.view.setPrevButtonVisible(!this.model.getPager().isFirstPage()), this.view.setNextButtonVisible(!this.model.getPager().isLastPage()), this.resize(t.getBoundingClientRect()), i.prototype.init.call(this)
        }, c.prototype._flipCornerUpdate = function(t) {
            this.view.setFlipCorner(t)
        }, c.prototype.getContentForPage = function(t) {
            if (a.has(this.contentPresenters, t)) return this.contentPresenters[t].getViewElement();
            var e = this.model.getPageTable().getPageIdByIndex(t - 1);
            if (!a.isUndefined(e)) {
                var i = this.model.getPageTable().getPageModel(e),
                    n = i.getProperty("wide"),
                    s = t % 2 !== 0;
                this.model.getPager().isRtl() && (s = !s);
                var l = new r(this.model.getBookModel(), i, (!1), n ? s ? "wideRight" : "wideLeft" : void 0),
                    h = new o(l).init(this.bookSizeProvider.getPageSize(parseInt(t, 10)));
                return this.listenTo(h, "requestNavigation", function(e) {
                    if (!this.view.isFlipping() && e) switch (e.type) {
                        case "page":
                            this.model.getPager().goToPageById(e.data.pageId);
                            break;
                        case "next":
                            if (this.view.isAnimating()) break;
                            this.model.getPager().goForward();
                            break;
                        case "prev":
                            if (this.view.isAnimating()) break;
                            this.model.getPager().goBackward();
                            break;
                        case "zoom":
                            var i = e.data.center;
                            n && s && (i.x += this.bookSizeProvider.getPageSize(t - 1).width), this.model.getPager().setZoomMode(!0, t % 2, {
                                name: "mouse",
                                center: i
                            })
                    }
                }, this), this.contentPresenters[t] = h, h.getViewElement()
            }
        }, c.prototype.goToPage = function(t) {
            var e = this.model.getPager(),
                i = this.model.getPageTable(),
                n = i.getPageIdByIndex(t);
            e.isFreezed() && e.isFreezedBy(this) && e.unfreeze(this), e.goToPageById(n, this.targetName), e.freeze(this)
        }, c.prototype.goToFirst = function() {
            var t = this.model.getPager();
            t.isFreezed() && t.isFreezedBy(this) && t.unfreeze(this), t.goToFirst(), t.freeze(this)
        }, c.prototype.goToLast = function() {
            var t = this.model.getPager();
            t.isFreezed() && t.isFreezedBy(this) && t.unfreeze(this), t.goToLast(), t.freeze(this)
        }, c.prototype.resize = function(t) {
            var e = this;
            this.bookSizeProvider.setRect(t), this.view.resize(), a.each(this.contentPresenters, function(t, i) {
                t.resize(e.bookSizeProvider.getPageSize(parseInt(i, 10)))
            })
        }, c.prototype.onPagerStateChange = function(t, e, n, o) {
            var r = this;
            if (!a.isNull(t) && !a.isUndefined(t) && (i.prototype.onPagerStateChange.apply(this, arguments), this.view.setPrevButtonVisible(!this.model.isFirstPageState(t)), this.view.setNextButtonVisible(!this.model.isLastPageState(t)), this.targetName !== o)) {
                var s = a.isNull(e) || a.isUndefined(e),
                    l = a.isUndefined(t.leftPage) ? t.rightPage : t.leftPage;
                if (!s) {
                    var h = a.isUndefined(e.leftPage) ? e.rightPage : e.leftPage;
                    if (l !== h) {
                        var c = this.model.getPageTable().getPageIndexById(l);
                        if (this.model.isHardcover()) {
                            var u = function(t, e) {
                                t >= 0 && (r.model.getPager().freeze(r), r.once("onPageChanged", function() {
                                    r.model.getPager().unfreeze(r), e >= 0 && r.view.goToPage(e + 1)
                                }), r.view.goToPage(t + 1))
                            };
                            if (this.model.isFirstPageState(e)) {
                                if (!this.model.isLastPageState(t) || !this.model.hasBackOutsideCover()) return void u(1, c)
                            } else if (this.model.isLastPageState(e) && this.model.hasBackOutsideCover()) {
                                if (!this.model.isFirstPageState(t)) return void u(this.model.getPagesCount() - 2, c)
                            } else if (this.model.isFirstPageState(t)) {
                                if (!this.model.isFrontInsideCoverPageState(e)) return void u(1, 0)
                            } else if (this.model.isLastPageState(t) && this.model.hasBackOutsideCover() && !this.model.isBackInsideCoverPageState(e)) return void u(this.model.getPagesCount() - 2, this.model.getPagesCount() - 1)
                        }
                        c >= 0 && this.view.goToPage(c + 1)
                    }
                }
            }
        }, c.prototype.onPageActivate = function(t) {
            var e = this,
                i = this.model.getPageTable(),
                n = i.getPageModel(t),
                o = n.getProperty("wide"),
                r = [i.getPageIndexById(t) + 1];
            o && r.push(i.getPageIndexById(t) + 2), a.each(r, function(t) {
                t > 0 && a.has(e.contentPresenters, t) && e.contentPresenters[t].setActive(!0)
            })
        }, c.prototype.onPageDeactivate = function(t) {
            var e = this,
                i = this.model.getPageTable(),
                n = i.getPageModel(t),
                o = n.getProperty("wide"),
                r = [i.getPageIndexById(t) + 1];
            o && r.push(i.getPageIndexById(t) + 2), a.each(r, function(t) {
                t > 0 && a.has(e.contentPresenters, t) && e.contentPresenters[t].setActive(!1)
            })
        }, c.prototype.getDataForTransitionStart = function() {
            var t = {};
            return a.each(this.view.getCurrentPagesDomElements(), function(e, i) {
                t[i - 1] = e
            }), t
        }, c.prototype._onHardcoverColorChanged = function(t) {
            this.view.setCoverColor(t)
        }, c.prototype.destroy = function() {
            a.each(this.contentPresenters, function(t) {
                t.destroy()
            }), this.model.off("change:hardcoverColor", this._onHardcoverColorChanged, this), this.model.off("change:flipCorner", this._flipCornerUpdate, this), this.model.destroy(), i.prototype.destroy.call(this)
        }, c.prototype.onPageChanged = function() {
            var t = this.model.getPager();
            t.isFreezed() && t.isFreezedBy(this) && t.unfreeze(this), i.prototype.onPageChanged.call(this)
        }, e.TurnJSPresenter = c
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._,
                n = require("fb-html5/common/events").Events;
            t(global, exports, i, n)
        } else t(window, e, e._, e.Events)
    }(function(t, e, i, n) {
        "use strict";

        function o(t) {
            this.bookModel = t, this.bookModel.getProps().on("all", this._trigger, this)
        }
        o.prototype = Object.create(n.prototype), o.prototype.getBookModel = function() {
            return this.bookModel
        }, o.prototype.getPager = function() {
            return this.bookModel.getPager()
        }, o.prototype.getPageTable = function() {
            return this.bookModel.getPageTable()
        }, o.prototype.isHardcover = function() {
            return this.bookModel.props.hardcover
        }, o.prototype.getHardcoverSize = function() {
            return this.isHardcover() ? 10 : 0
        }, o.prototype.getCoverColor = function() {
            return this.bookModel.props.hardcoverColor
        }, o.prototype.getPadding = function() {
            return (100 - this.bookModel.workspaceProperties.bookSize) / 100
        }, o.prototype.getBookSize = function() {
            return this.bookModel.props.bookSize
        }, o.prototype.getPagesCount = function() {
            return this.getPageTable().getPagesCount()
        }, o.prototype.getFlippingDuration = function() {
            return 1e3 * this.bookModel.props.pageFlippingDuration
        }, o.prototype.getFlipCorner = function() {
            return this.bookModel.props.flipCorner
        }, o.prototype.isFirstPageState = function(t) {
            return this.getPager().isFirstPage(t)
        }, o.prototype.isLastPageState = function(t) {
            return this.getPager().isLastPage(t)
        }, o.prototype.isFrontInsideCoverPageState = function(t) {
            return !!this.isHardcover() && (t = t || this.getPager().getState(), !!t.leftPage && 1 === this.getPageTable().getPageIndexById(t.leftPage))
        }, o.prototype.isBackInsideCoverPageState = function(t) {
            if (!this.isHardcover()) return !1;
            if (t = t || this.getPager().getState(), !t.leftPage) return !1;
            var e = this.getPageTable().getPageIndexById(t.leftPage),
                i = this.getPagesCount() - 1;
            return e === i - 1 || e === i - 2
        }, o.prototype.hasBackOutsideCover = function() {
            return this.isHardcover() * this.getPagesCount() % 2 === 0
        }, o.prototype.getBrowser = function() {
            return this.bookModel.browser
        }, o.prototype._trigger = function(t, e, i) {
            this.trigger(t, e, i)
        }, o.prototype.destroy = function() {
            this.bookModel.getProps().off("all", this._trigger, this)
        }, e.TurnJSModel = o
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events;
            t(global, exports, i)
        } else t(window, e, e.Events)
    }(function(t, e, i) {
        "use strict";

        function n() {}
        n.prototype = new i, n.prototype.constructor = n, n.prototype.start = function() {}, n.prototype.clear = function() {}, e.BaseTransition = n
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/book/transitions/base").BaseTransition,
                n = require("fb-html5/common/mini-framework"),
                o = require("fb-html5/common/frameworks/underscore")._,
                r = require("fb-html5/common/html5").html5Lib,
                s = require("fb-html5/common/frameworks/modernizr");
            t(global, exports, n, r, i, o, s)
        } else t(window, e, e.el, e.html5Lib, e.BaseTransition, e._, e.Modernizr)
    }(function(t, e, i, n, o, r, s) {
        "use strict";

        function a(t, e, i) {
            this.pager = t, this.turnJSPresenter = i, this.slidePresenter = e, this.zoomOutDuration = 400, this.animationDuration = 400, this.animationDelay = 40
        }
        a.prototype = new o, a.prototype.constructor = a, a.prototype.start = function(t, e) {
            this.container = t, this.slidePresenter.pre_destroy();
            var i = this,
                o = e.pageId,
                s = this.pager.isRtl(),
                a = this.pager.pageTable.getPageModel(o),
                l = a.getProperty("wide"),
                h = this.pager.pageTable.getPageIndexById(o);
            this.turnJSPresenter.bookSizeProvider.setRect(t.getBoundingClientRect());
            var c = this.turnJSPresenter.bookSizeProvider.getPageSize(h + 1),
                u = l ? 2 : 1;
            this.slidePresenter.setZoomValue(c.width / this.slidePresenter.getUnitPageSize().width * u, null, 400, this.zoomOutDuration), r.delay(function() {
                var e, a = i.pager.getState(),
                    h = i.animationDelay;
                if (!l) {
                    var u = i.slidePresenter.getDataForTransitionStart();
                    a.leftPage === o ? (i.leftPage = i._clonePage(u.current, c), i.leftPage.style.zIndex = 2, e = s ? u.left : u.right, e && (i.rightPage = i._clonePage(e, c, u.current.getBoundingClientRect()), i.rightPage.style.zIndex = 1)) : (e = s ? u.right : u.left, e && (i.leftPage = i._clonePage(e, c, u.current.getBoundingClientRect()), i.leftPage.style.zIndex = 1), i.rightPage = i._clonePage(u.current, c), i.rightPage.style.zIndex = 2), i.leftPage && i.rightPage && (t.appendChild(i.leftPage), t.appendChild(i.rightPage), r.delay(function() {
                        var t = s ? -1 : 1;
                        n.changeOnlyTranslate(i.leftPage, .5 * -c.width * t), n.changeOnlyTranslate(i.rightPage, .5 * c.width * t)
                    }, i.animationDelay), h = 1.4 * i.animationDuration)
                }
                r.delay(function() {
                    i._end()
                }, h), r.delay(function() {
                    i.slidePresenter.destroy()
                }, i.animationDelay)
            }, 1.25 * this.zoomOutDuration)
        }, a.prototype._clonePage = function(t, e, o) {
            var o = o || t.getBoundingClientRect(),
                e = e || t.getBoundingClientRect(),
                r = this.container.getBoundingClientRect(),
                a = t.cloneNode(!0);
            return i.css(a, {
                position: "absolute",
                top: o.top - r.top + "px",
                left: o.left - r.left + "px"
            }), a.style[s.prefixedCSS("transform")] = "translate3d(0px, 0px, 0px) scale(" + e.width / t.offsetWidth + ")", a.style.overflow = "hidden", n.origin(a, 0, 0), n.transition(a, this.animationDuration, "transform"), a
        }, a.prototype._end = function() {
            this.trigger("end", this.outputOpts)
        }, a.prototype.clear = function() {
            this.leftPage && i.del(this.leftPage), this.rightPage && i.del(this.rightPage)
        }, e.SlideToTurnJSTransition = a
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/book/transitions/base").BaseTransition,
                n = require("fb-html5/common/mini-framework"),
                o = require("fb-html5/common/frameworks/underscore")._,
                r = require("fb-html5/common/html5").html5Lib;
            t(global, exports, n, r, i, o)
        } else t(window, e, e.el, e.html5Lib, e.BaseTransition, e._)
    }(function(t, e, i, n, o, r) {
        "use strict";

        function s(t, e, i) {
            this.pager = t, this.turnJSPresenter = e, this.slidePresenter = i, this.outputOpts = {
                animate: {
                    from: 1,
                    duration: 500
                }
            }, this.animationDelay = 40, this.animationTime = 400
        }
        s.prototype = new o, s.prototype.constructor = s, s.prototype.start = function(t, e) {
            this.container = t, e.target && e.target.center && (this.outputOpts.animate.center = e.target.center), this.startTransitionData = this.turnJSPresenter.getDataForTransitionStart();
            var i, o, s = this.turnJSPresenter.model.getPageTable(),
                a = this.turnJSPresenter.model.getPager(),
                l = s.getPageIndexById(a.getState().leftPage),
                h = s.getPageModel(a.getState().leftPage),
                c = h.getProperty("wide"),
                u = s.getPagesCount(),
                d = this;
            a.isRtl() ? (i = l % 2 === 0 ? l : l + 1, o = l % 2 === 0 ? l - 1 : l) : (i = l % 2 === 0 ? l - 1 : l, o = l % 2 === 0 ? l : l + 1);
            var p = this.turnJSPresenter.bookSizeProvider.getPageSize(l + 1);
            this.outputOpts.animate.fromRect = p, 0 === l || l === u - 1 ? r.delay(function() {
                d._end()
            }, this.animationDelay) : (this.leftClone = this._clonePage(i), this.rightClone = this._clonePage(o), l === i ? (this.leftClone.style.zIndex = 2, this.rightClone.style.zIndex = 1) : (this.leftClone.style.zIndex = 1, this.rightClone.style.zIndex = 2), t.appendChild(this.leftClone), t.appendChild(this.rightClone), c ? (p.width *= 2, this.outputOpts.animate.fromRect = p) : r.delay(function() {
                n.translate(d.leftClone, .5 * p.width), n.translate(d.rightClone, .5 * -p.width)
            }, this.animationDelay), r.delay(function() {
                d._end()
            }, 1.4 * this.animationTime)), r.delay(function() {
                d.turnJSPresenter.destroy()
            }, this.animationDelay)
        }, s.prototype._clonePage = function(t) {
            var e = this.startTransitionData[t],
                o = e.getBoundingClientRect(),
                r = this.container.getBoundingClientRect(),
                s = e.cloneNode(!0);
            return n.transition(s, this.animationTime, "transform"), i.css(s, {
                position: "absolute",
                top: o.top - r.top + "px",
                left: o.left - r.left + "px",
                backgroundColor: ""
            }), s
        }, s.prototype._end = function() {
            this.trigger("end", this.outputOpts)
        }, s.prototype.clear = function() {
            this.leftClone && i.del(this.leftClone), this.rightClone && i.del(this.rightClone)
        }, e.TurnJSToSlideTransition = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events,
                n = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i, n)
        } else t(window, e, e.Events, e._)
    }(function(t, e, i, n) {
        "use strict";

        function o(t, e, i, n) {
            this.props = t, this.workspaceProperties = e, this.pager = i, this.zoomScaleValue = null, this.isReady = !1, this.searchQuery = "", this.textSelectionMode = !1, this.isSearchActive = !1, this.browser = n
        }
        o.prototype = new i, o.prototype.constructor = o, o.prototype.getPageTable = function() {
            return this.getPager().pageTable
        }, o.prototype.getPager = function() {
            return this.pager
        }, o.prototype.hasPages = function() {
            var t = this.getPageTable().getStructure();
            return !n.isUndefined(t) && t.length > 0
        }, o.prototype.getProps = function() {
            return this.props
        }, o.prototype.getWorkspaceProperties = function() {
            return this.workspaceProperties
        }, o.prototype.setZoomScaleValue = function(t) {
            this.set("zoomScaleValue", t)
        }, o.prototype.setSearchQuery = function(t) {
            this.set("textSelectionMode", !1), t = t || "", this.set("searchQuery", t), "" !== t ? this.set("isSearchActive", !0) : this.set("isSearchActive", !1)
        }, e.BookModel = o
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events,
                n = require("fb-html5/book/components/slide/presenter").SlidePresenter,
                o = require("fb-html5/book/components/turnjs/presenter").TurnJSPresenter,
                r = require("fb-html5/book/components/turnjs/model").TurnJSModel,
                s = require("fb-html5/book/transitions/slide-to-turnjs").SlideToTurnJSTransition,
                a = require("fb-html5/book/transitions/turnjs-to-slide").TurnJSToSlideTransition;
            t(global, exports, i, n, o, r, s, a)
        } else t(window, e, e.Events, e.SlidePresenter, e.TurnJSPresenter, e.TurnJSModel, e.SlideToTurnJSTransition, e.TurnJSToSlideTransition)
    }(function(t, e, i, n, o, r, s, a) {
        "use strict";

        function l(t) {
            this.model = t, this.model.getPager().on("change:state", this._onPagerStateChange, this), this.model.getProps().on("change:rightToLeft change:hardcover change:bookSize change:pageFlippingDuration", function() {
                this.currentPresenter && (this.currentPresenter.destroy(), this._changePresenterTo(this._createPresenter().init(this.container)))
            }, this), this.model.getWorkspaceProperties().on("change:bookSize", function() {
                this.currentPresenter && (this.currentPresenter.destroy(), this._changePresenterTo(this._createPresenter().init(this.container)))
            }, this)
        }
        l.prototype = new i, l.prototype.constructor = l, l.prototype.init = function(t) {
            this.container = t;
            var e = this;
            return this._onPageChanged = function(t) {
                e._notify("onPageChanged", t)
            }, this._onPageChanging = function(t) {
                e._notify("onPageChanging", t)
            }, this._onStartDrag = function(t) {
                e._notify("onStartDrag", t)
            }, this._onEndDrag = function(t) {
                e._notify("onEndDrag", t)
            }, this.model.hasPages() && (this.currentPresenter = this._initPresenter(this._createPresenter().init(t))), this
        }, l.prototype.resize = function(t) {
            this.currentPresenter && this.currentPresenter.resize(t)
        }, l.prototype._onPagerStateChange = function(t, e, i, n) {
            if (this.currentPresenter) {
                var o, r, l, h = this;
                t.zoomMode !== e.zoomMode ? (this.model.getPager().freeze(this), r = this._createPresenter(), t.zoomMode ? (l = {
                    target: n
                }, o = new a(this.model.getPager(), this.currentPresenter, r)) : (l = {
                    pageId: e.leftPage
                }, o = new s(this.model.getPager(), this.currentPresenter, r)), o.once("end", function(t) {
                    this.clear(), h.model.getPager().unfreeze(h), h._changePresenterTo(r.init(h.container, t)), h._notify("zoomTransitionEnd")
                }), o.start(this.container, l)) : this.currentPresenter.onPagerStateChange(t, e, i, n)
            }
        }, l.prototype._createPresenter = function() {
            var t;
            return t = this.model.getPager().getState().zoomMode ? new n(this.model) : new o(new r(this.model))
        }, l.prototype._notify = function(t, e) {
            this.trigger(t, e)
        }, l.prototype._changePresenterTo = function(t) {
            this.currentPresenter && this._destroyCurrentPresenter(), this._initPresenter(t), this.currentPresenter = t, this._notify("onPresenterChanged")
        }, l.prototype._destroyCurrentPresenter = function() {
            this.currentPresenter && (this.stopListening(this.currentPresenter, "onPageChanged", this._onPageChanged), this.stopListening(this.currentPresenter, "onPageChanging", this._onPageChanging), this.stopListening(this.currentPresenter, "onStartDrag", this._onStartDrag), this.stopListening(this.currentPresenter, "onEndDrag", this._onEndDrag))
        }, l.prototype._initPresenter = function(t) {
            return this.listenTo(t, "onPageChanged", this._onPageChanged), this.listenTo(t, "onPageChanging", this._onPageChanging), this.listenTo(t, "onStartDrag", this._onStartDrag), this.listenTo(t, "onEndDrag", this._onEndDrag), t
        }, e.BookPresenter = l
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._,
                n = require("fb-html5/common/fb-utils");
            t(global, exports, i, n)
        } else e.PaginatorUtils = t(window, {}, e._, e.fbUtils)
    }(function(t, e, i, n) {
        "use strict";
        return e.findPageIndexByUserInput = function(t, e) {
            var o = i.findWhere(e.pageTable.model.pages, {
                displayName: t
            });
            if (i.isUndefined(o)) {
                var r = e.pageTable.getNumerationOffset();
                if (r > 0) {
                    var s = n.deromanize(t);
                    if (!i.isUndefined(s) && s <= r) return s - 1
                }
                var a = parseInt(t, 10);
                if (!i.isNaN(a) && a > 0 && a + r <= e.pageTable.getPagesCount()) return a + r - 1
            } else {
                var l = i.findKey(e.pageTable.model.pages, o);
                if (!i.isUndefined(l)) return e.pageTable.getPageIndexById(l)
            }
        }, e
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/common/fb-utils");
            t(global, exports, n, i, o)
        } else t(window, e, e._, e.el, e.fbUtils)
    }(function(t, e, i, n, o) {
        "use strict";
        var r = function() {
            function e() {
                return r ? r : this ? void(r = this) : new e
            }
            var r;
            return e.prototype.init = function(e) {
                var i = this;
                this.container = e || n.tag("body"), o.addListener(t, "resize", function() {
                    i.hideTooltips()
                }), o.addListener(t.document, "click", function(t) {
                    var e = t.target || t.srcElement;
                    i._isTip(e) || i._isInTooltip(e) || i.hideTooltips()
                }), o.addListener(t, "keyup", function() {
                    i.hideTooltips()
                }), this._timers_id = [], this._isActiveTooltips = !1
            }, e.prototype.showTooltip = function(e, o) {
                var r = this,
                    s = {
                        hideTime: 1500,
                        text: "",
                        position: "top"
                    };
                i.extend(s, o);
                var a = n.createElement("div", {
                    "class": "tooltip" + (s.position ? " " + s.position : "")
                }, this.container);
                a.innerHTML = t.FBPublication.JST["workspace-tooltip"]({
                    text: s.text
                });
                var l = window.pageYOffset || document.documentElement.scrollTop || 0,
                    h = window.pageXOffset || document.documentElement.scrollLeft || 0,
                    c = e.getBoundingClientRect(),
                    u = c.width || c.left - c.right,
                    d = u / 2 + c.left + h - a.clientWidth / 2;
                d < 10 && (d = 10), i.defer(function() {
                    n.addClass(a, "tooltip-active"), a.style.left = d + "px", n.hasClass(a, "bottom") ? a.style.top = c.bottom + l + 5 + "px" : a.style.top = c.top + l - a.clientHeight - 5 + "px"
                }), this._timers_id.push(i.delay(function() {
                    r.hideTooltips()
                }, s.hideTime)), this._isActiveTooltips = !0
            }, e.prototype.hideTooltips = function() {
                if (this._isActiveTooltips) {
                    for (var t = n.className("tooltip"), e = 0; e < t.length; e++) n.del(t[e]);
                    for (; this._timers_id.length;) clearTimeout(this._timers_id.pop())
                }
            }, e.prototype._isTip = function(t) {
                return n.hasClass(t, "tip")
            }, e.prototype._isInTooltip = function(t) {
                return !(!t || t === this.container) && (!!n.hasClass(t, "tooltip") || this._isInTooltip(t.parentElement))
            }, e
        }();
        e.TooltipManager = r
    }, this.FBPublication || {}), this.FBPublication.LOCALE = {
        locales: ["en", "ar", "de", "es", "fi", "fr", "he", "it", "ja", "ko", "nl", "no", "pl", "pt", "ru", "sv", "tr", "zh"],
        substitutes: {
            nb: "no",
            nn: "no",
            be: "ru"
        },
        rtl: ["ar", "he"],
        fonts: [{
            locales: ["de", "en", "es", "fi", "fr", "it", "nl", "no", "pl", "pt", "sv", "tr"],
            "font-family": "Open Sans",
            subset: "latin-ext",
            "font-weight-bold": "800",
            "font-weight-normal": "600"
        }, {
            locales: ["ar"],
            "font-family": "Cairo",
            subset: "arabic",
            "font-weight-bold": "700",
            "font-weight-normal": "600"
        }, {
            locales: ["he"],
            "font-family": "Rubik",
            subset: "hebrew",
            "font-weight-bold": "700",
            "font-weight-normal": "500"
        }, {
            locales: ["ru"],
            "font-family": "Open Sans",
            subset: "cyrillic,cyrillic-ext",
            "font-weight-bold": "800",
            "font-weight-normal": "600"
        }]
    }, this.FBPublication.PAGER = {
        links: {
            color: "#40C6FF",
            target: "_blank",
            highlightOnFlip: !0,
            highlightOnHover: !0
        },
        search: {
            color: "#FFE921"
        },
        hardcover: !1,
        hardcoverColor: "#5a5f63",
        flipCorner: !0,
        rightToLeft: !1,
        numerationOffset: 0,
        pageFlippingDuration: .8,
        pages: {
            defaults: {
                width: 0,
                height: 0,
                thFormat: "jpg",
                textLayer: !0,
                substrateFormat: "",
                substrateZoomFormat: "",
                stub: !1,
                slideDelay: 2,
                backgroundColor: "#FFFFFF",
                wide: !1,
                pageResize: "FIT"
            }
        }
    }, this.FBPublication.WORKSPACE = {
        toc: {
            enabled: !0
        },
        downloads: {
            enabled: !1
        },
        sound: {
            background: {
                loop: !0,
                volume: 30
            },
            flip: {
                enabled: !0,
                volume: 25,
                hard: ["blow.mp3"],
                soft: ["flip2.mp3", "flip3.mp3", "flip4.mp3"]
            },
            enabled: !0
        },
        print: {
            allPagesVisible: !1,
            currentPagesVisible: !0,
            selectedPagesVisible: !0
        },
        search: {
            path: "/searchtext.xml",
            exactMatch: !1,
            searchCharactersLimit: 1,
            enabled: !1
        },
        bookSize: 95,
        components: {
            bottomBar: !0,
            zoom: !0,
            navigation: !1,
            topBar: !0,
            embed: !1,
            fullscreen: !0,
            print: !0,
            thumbnails: !0,
            share: !0,
            textSelection: !1,
            slideshow: !1,
            paginator: {
                enabled: !0,
                totalPagesVisible: !0
            },
            copyright: {
                enabled: !1,
                url: "http://flippingbook.com?src=1",
                target: "_blank",
                label: "FlippingBook Demo"
            }
        },
        thumbType: "AUTO"
    },
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/events").Events,
                o = require("fb-html5/common/frameworks/underscore")._,
                r = require("fb-html5/common/frameworks/hammer").Hammer,
                s = require("fb-html5/common/fb-locator").FBLocator;
            t(global, exports, n, i, o, r, s)
        } else t(window, e, e.Events, e.el, e._, e.Hammer, e.FBLocator)
    }(function(t, e, i, n, o, r, s) {
        "use strict";

        function a(t, e, i, o) {
            this.pager = e, this.properties = i, this.sound = o, this.fullscreen = !1, this.rootElement = n.createElement("div", {
                "class": "bottom-toolbar-frame"
            }, t, "top"), this.getLocaleProvider().onAndChange("change:BottomMenu", this._initBottomMenu, this), this.pager.on("change:rtl", this._initBottomMenu, this), this.pager.on("change:slideshow", this._toggleSlideshow, this);
            var r = this,
                s = function(t) {
                    t ? n.removeClass(r.rootElement, "hidden") : n.addClass(r.rootElement, "hidden")
                };
            this.properties.onAndChange("change:components.bottomBar", function(t) {
                s(t)
            })
        }
        a.prototype = new i, a.constructor = a, a.prototype._initBottomMenu = function() {
            this.rootElement.innerHTML = t.FBPublication.JST["workspace-bottom-menu"]({
                zoomIcon: this.pager.getState().zoomMode ? "icon-zoomout" : "icon-zoomin",
                slideshowIcon: this.pager.slideshow ? "icon-slideshow-pause" : "icon-slideshow",
                fullscreenIcon: this.fullscreen ? "icon-fullscreen-out" : "icon-fullscreen",
                localization: {
                    toc: this.getLocaleProvider().get("BottomMenu.TOC_TIP"),
                    thumbnails: this.getLocaleProvider().get("BottomMenu.THUMBNAILS_TIP"),
                    social: this.getLocaleProvider().get("BottomMenu.PERMALINK_TIP"),
                    textSelection: this.getLocaleProvider().get("BottomMenu.SELECT_BUTTON_TIP"),
                    print: this.getLocaleProvider().get("BottomMenu.PRINT_TIP"),
                    download: this.getLocaleProvider().get("BottomMenu.SAVE_TIP"),
                    sound: this.getLocaleProvider().get("BottomMenu.SOUND_BUTTON_TIP"),
                    fullscreen: this.fullscreen ? this.getLocaleProvider().get("BottomMenu.NORMAL_BUTTON_TIP") : this.getLocaleProvider().get("BottomMenu.FULLSCREEN_BUTTON_TIP"),
                    zoom: this.pager.getState().zoomMode ? this.getLocaleProvider().get("BottomMenu.UNZOOM_BUTTON_TIP") : this.getLocaleProvider().get("BottomMenu.ZOOM_BUTTON_TIP"),
                    firstPage: this.pager.isRtl() ? this.getLocaleProvider().get("NavigationPanel.LAST_PAGE_TIP") : this.getLocaleProvider().get("NavigationPanel.FIRST_PAGE_TIP"),
                    lastPage: this.pager.isRtl() ? this.getLocaleProvider().get("NavigationPanel.FIRST_PAGE_TIP") : this.getLocaleProvider().get("NavigationPanel.LAST_PAGE_TIP"),
                    nextPage: this.pager.isRtl() ? this.getLocaleProvider().get("NavigationPanel.PREV_PAGE_TIP") : this.getLocaleProvider().get("NavigationPanel.NEXT_PAGE_TIP"),
                    previousPage: this.pager.isRtl() ? this.getLocaleProvider().get("NavigationPanel.NEXT_PAGE_TIP") : this.getLocaleProvider().get("NavigationPanel.PREV_PAGE_TIP"),
                    slideshow: this.pager.slideshow ? this.getLocaleProvider().get("NavigationPanel.PAUSE_PAGE_TIP") : this.getLocaleProvider().get("NavigationPanel.PLAY_PAGE_TIP")
                }
            }), this._initComponents()
        }, a.prototype.getLocaleProvider = function() {
            return s().get("locale")
        }, a.prototype.getRootElement = function() {
            return this.rootElement
        }, a.prototype._initComponents = function() {
            this._initButtons(), this._initNavigation(), this._initSlideshow()
        }, a.prototype._initNavigation = function() {
            var t = n.id("first-page"),
                e = n.id("prev-page"),
                i = n.id("next-page"),
                s = n.id("last-page"),
                a = new r(t, {}),
                l = new r(e, {}),
                h = new r(i, {}),
                c = new r(s, {}),
                u = this;
            a.on("tap", o.throttle(function() {
                u.pager.isRtl() ? u.pager.goToLast() : u.pager.goToFirst()
            }, 500)), l.on("tap", o.throttle(function() {
                u.pager.isRtl() ? u.pager.goForward() : u.pager.goBackward()
            }, 500)), h.on("tap", o.throttle(function() {
                u.pager.isRtl() ? u.pager.goBackward() : u.pager.goForward()
            }, 500)), c.on("tap", o.throttle(function() {
                u.pager.isRtl() ? u.pager.goToFirst() : u.pager.goToLast()
            }, 500));
            var d = function(o) {
                var r = [t, e, i, s],
                    a = n.id("icon-book-first"),
                    l = n.id("icon-book-last");
                if (o) {
                    n.addClass(a, "hidden-component"), n.addClass(l, "hidden-component");
                    for (var h = 0; h < r.length; h++) n.removeClass(r[h], "hidden-component")
                } else {
                    n.removeClass(a, "hidden-component"), n.removeClass(l, "hidden-component");
                    for (var h = 0; h < r.length; h++) n.addClass(r[h], "hidden-component")
                }
            };
            this.properties.onAndChange("change:components.navigation", function(t) {
                d(t)
            })
        }, a.prototype._initSlideshow = function() {
            var t = this,
                e = n.id("slideshow"),
                i = new r(e, {});
            i.on("tap", function() {
                t.pager.set("slideshow", !t.pager.slideshow)
            });
            var o = function(i) {
                i ? n.removeClass(e, "hidden-component") : (n.addClass(e, "hidden-component"), t.pager.set("slideshow", !1))
            };
            this.properties.on("change:components.slideshow", function(t) {
                o(t)
            }), o(this.properties.components.slideshow)
        }, a.prototype._initButtons = function() {
            var t = this,
                e = n.id("toc"),
                i = n.id("thumbnails"),
                s = n.id("social"),
                a = n.id("text-selection"),
                l = n.id("print"),
                h = n.id("download"),
                c = n.id("sound"),
                u = n.id("fullscreen"),
                d = n.id("zoom-page"),
                p = function(e, i) {
                    var o = e.className.indexOf("hidden-component") === -1;
                    o !== i && (i ? n.removeClass(e, "hidden-component") : n.addClass(e, "hidden-component"), t._validateDividersVisibility())
                },
                f = new r(a, {}),
                g = new r(l, {}),
                m = new r(d, {}),
                v = new r(u, {}),
                y = new r(h, {}),
                b = new r(s, {}),
                w = new r(e, {}),
                P = new r(i, {}),
                _ = new r(c, {});
            w.on("tap", function() {
                t.trigger("tap:toc")
            }), this.properties.cast("toc"), this.properties.toc.onAndChange("change:enabled change:children", function() {
                var t = this.properties.toc;
                p(e, t.enabled !== !1 && t.children && t.children.length > 0)
            }, this), P.on("tap", function() {
                t.trigger("tap:thumbnails")
            }), this.properties.onAndChange("change:components.thumbnails", function(t) {
                p(i, t)
            }), b.on("tap", function() {
                t.trigger("tap:social")
            }), this.properties.on("change:components.share", function(t) {
                p(s, t)
            }), p(s, this.properties.components.share), f.on("tap", function() {
                t.trigger("tap:textSelection")
            }), this.properties.onAndChange("change:components.textSelection", function(t) {
                p(a, t)
            }), g.on("tap", function() {
                t.trigger("tap:print")
            }), this.properties.onAndChange("change:components.print", function(t) {
                p(l, t)
            }), y.on("tap", function() {
                t.trigger("tap:download")
            }), this.properties.on("change:downloads", function(t) {
                p(h, !o.isUndefined(t) && !o.isEmpty(t) && o.has(t, "enabled") && t.enabled)
            }), p(h, !o.isUndefined(this.properties.downloads) && !o.isEmpty(this.properties.downloads) && o.has(this.properties.downloads, "enabled") && this.properties.downloads.enabled), _.on("tap", function() {
                t.trigger("tap:sound")
            });
            var x = function() {
                var t = !!this.sound && this.sound.canWork;
                p(c, t)
            };
            this.properties.cast("sound"), this.properties.sound.onAndChange("change:enabled", x, this), this.sound && this.sound.on("change:canWork", x, this), v.on("tap", function() {
                t.trigger("tap:fullscreen")
            }), this.properties.onAndChange("change:components.fullscreen", function(t) {
                p(u, t)
            }), m.on("tap", o.throttle(function() {
                t.pager.toggleZoomMode()
            }, 1500, {
                leading: !0
            })), this.pager.on("change:state", function(e) {
                n.removeClass(m.element, "icon-zoomout"), n.removeClass(m.element, "icon-zoomin"), n.addClass(m.element, e.zoomMode ? "icon-zoomout" : "icon-zoomin"), m.element.title = e.zoomMode ? t.getLocaleProvider().get("BottomMenu.UNZOOM_BUTTON_TIP") : t.getLocaleProvider().get("BottomMenu.ZOOM_BUTTON_TIP")
            }), this.properties.on("change:components.zoom", function(t) {
                p(d, t)
            }), p(d, this.properties.components.zoom), this._validateDividersVisibility()
        }, a.prototype._validateDividersVisibility = function() {
            var t = n.className("group1", this.rootElement),
                e = n.className("group2", this.rootElement),
                i = n.className("group3", this.rootElement),
                o = n.id("divider1"),
                r = n.id("divider2"),
                s = function(t, e) {
                    if (0 === t.length || 0 === e.length) return !1;
                    for (var i, n = !1, o = !1, r = 0; r < t.length; r++) i = t[r], n = n || i.className.indexOf("hidden-component") === -1;
                    for (r = 0; r < e.length; r++) i = e[r], o = o || i.className.indexOf("hidden-component") === -1;
                    return n && o
                };
            s(t, e) ? n.removeClass(o, "hidden-component") : n.addClass(o, "hidden-component"), s(e, i) ? n.removeClass(r, "hidden-component") : n.addClass(r, "hidden-component")
        }, a.prototype._toggleSlideshow = function(t) {
            var e = n.id("slideshow");
            n.removeClass(e, "icon-slideshow-pause"), n.removeClass(e, "icon-slideshow"), n.addClass(e, t ? "icon-slideshow-pause" : "icon-slideshow"), e.title = t ? this.getLocaleProvider().get("NavigationPanel.PAUSE_PAGE_TIP") : this.getLocaleProvider().get("NavigationPanel.PLAY_PAGE_TIP")
        }, a.prototype.toggleFullscreen = function(t) {
            var e = n.id("fullscreen");
            n.removeClass(e, "icon-fullscreen-out"), n.removeClass(e, "icon-fullscreen"), n.addClass(e, t ? "icon-fullscreen-out" : "icon-fullscreen"), this.fullscreen = t, e.title = t ? this.getLocaleProvider().get("BottomMenu.NORMAL_BUTTON_TIP") : this.getLocaleProvider().get("BottomMenu.FULLSCREEN_BUTTON_TIP")
        }, a.prototype.toggleSound = function(t) {
            var e = n.id("sound");
            n.removeClass(e, "icon-sound"), n.removeClass(e, "icon-mute"), n.addClass(e, t ? "icon-mute" : "icon-sound")
        }, a.prototype.toogleTextSelectionMode = function(t) {
            var e = n.id("text-selection");
            n.removeClass(e, "toggled"), t && n.addClass(e, "toggled")
        }, e.BottomMenu = a
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/common/fb-router").FBRouter,
                r = require("fb-html5/common/fb-utils"),
                s = require("fb-html5/common/fb-locator").FBLocator;
            t(global, exports, n, i, o, r, s)
        } else t(window, e, e._, e.el, e.FBRouter, e.fbUtils, e.FBLocator)
    }(function(t, e, i, n, o, r, s) {
        "use strict";

        function a(t, e, i, n) {
            this.rootElement = t, this.data = e, this.pager = n, this.windowTitle = i, this.currentOption = "", this.currentFile = "", this._render(), this.getLocaleProvider().on("change:SaveWindow", this._onLocaleChange, this)
        }
        a.prototype._render = function() {
            this.content || (this.content = n.createElement("div", {
                "class": "popup-content"
            }, this.rootElement));
            var e = this._buildDownloadsArray();
            this.content.innerHTML = t.FBPublication.JST["workspace-download-window"](e), this._bindElements()
        }, a.prototype._onLocaleChange = function() {
            n.setText(this.windowTitle, this.getLocaleProvider().get("SaveWindow.TITLE")), this.update()
        }, a.prototype.getAnalyticsProvider = function() {
            return s().get("analytics")
        }, a.prototype.getLocaleProvider = function() {
            return s().get("locale")
        }, a.prototype.update = function(t) {
            t && (this.data = t), n.del(this.content), delete this.content, this._render()
        }, a.prototype._buildDownloadsArray = function() {
            var t = [],
                e = function(t) {
                    return o().translatePath("assets/common/downloads/" + t)
                };
            if (this.data.url && t.push({
                    title: "fullTitle",
                    fileUrl: e(this.data.url),
                    fileName: this.data.url,
                    fileSize: this._formatSize(this.data.size),
                    fileType: "." + this.data.url.split(".").pop(),
                    option: "Full"
                }), this.data.pageFiles && !i.isEmpty(this.data.pageFiles)) {
                var n = this.data.pageFiles,
                    s = function(t) {
                        return i.isArray(n) ? i.find(n, function(e) {
                            return e.url === t
                        }) : n[t]
                    };
                if (this.pager.state.leftPage && this.pager.state.rightPage && this.pager.state.leftPage !== this.pager.state.rightPage) {
                    var a = this.pager.state.leftPage,
                        l = this.pager.state.rightPage,
                        h = s(a),
                        c = s(l);
                    h && h.size && t.push({
                        title: "currentLeftTitle",
                        fileUrl: e("page" + r.getNum(a) + ".pdf"),
                        fileName: "page" + r.getNum(a) + ".pdf",
                        fileSize: this._formatSize(h.size),
                        fileType: ".pdf",
                        option: "Current"
                    }), c && c.size && t.push({
                        title: "currentRightTitle",
                        fileUrl: e("page" + r.getNum(l) + ".pdf"),
                        fileName: "page" + r.getNum(l) + ".pdf",
                        fileSize: this._formatSize(c.size),
                        fileType: ".pdf",
                        option: "Current"
                    })
                } else {
                    var u = this.pager.state.leftPage || this.pager.state.rightPage,
                        d = s(u);
                    d && d.size && t.push({
                        title: "currentTitle",
                        fileUrl: e("page" + r.getNum(u) + ".pdf"),
                        fileName: "page" + r.getNum(u) + ".pdf",
                        fileSize: this._formatSize(d.size),
                        fileType: ".pdf",
                        option: "Current"
                    })
                }
            }
            if (this.data.macAppFile && !i.isEmpty(this.data.macAppFile)) {
                var p = this.data.macAppFile;
                t.push({
                    title: "macTitle",
                    fileUrl: e(p.url),
                    fileName: p.url,
                    fileSize: this._formatSize(p.size),
                    fileType: "." + p.url.split(".").pop(),
                    option: "Mac"
                })
            }
            if (this.data.winAppFile && !i.isEmpty(this.data.winAppFile)) {
                var f = this.data.winAppFile;
                t.push({
                    title: "winTitle",
                    fileUrl: e(f.url),
                    fileName: f.url,
                    fileSize: this._formatSize(f.size),
                    fileType: "." + f.url.split(".").pop(),
                    option: "Windows"
                })
            }
            if (this.data.customFiles && !i.isEmpty(this.data.customFiles)) {
                t.customFiles = [];
                for (var g = 0; g < this.data.customFiles.length; g++) {
                    var m = this.data.customFiles[g],
                        v = m.url.split("/").pop();
                    v.length > 45 && (v = v.slice(0, 25) + " ... " + v.slice(-15)), t.customFiles.push({
                        title: v,
                        fileUrl: e(m.url),
                        fileSize: this._formatSize(m.size),
                        fileType: "." + m.url.split(".").pop(),
                        fileName: m.url,
                        option: "Custom"
                    })
                }
            }
            return t.localization = {
                text: this.getLocaleProvider().get("SaveWindow.SAVE_WINDOW_TEXT"),
                button: this.getLocaleProvider().get("SaveWindow.SAVE_BUTTON"),
                frameTitle: this.getLocaleProvider().get("SaveWindow.SAVE_GROUP"),
                fullTitle: this.getLocaleProvider().get("SaveWindow.FULL_PUBLICATION"),
                currentTitle: this.getLocaleProvider().get("SaveWindow.SAVE_CURRENT_PAGE"),
                currentLeftTitle: this.getLocaleProvider().get("SaveWindow.SAVE_LEFT_PAGE"),
                currentRightTitle: this.getLocaleProvider().get("SaveWindow.SAVE_RIGHT_PAGE"),
                macTitle: this.getLocaleProvider().get("SaveWindow.MAC_OFFLINE_PUBLICATION"),
                winTitle: this.getLocaleProvider().get("SaveWindow.WINDOWS_OFFLINE_PUBLICATION"),
                customTitle: this.getLocaleProvider().get("SaveWindow.ATTACHED_FILES")
            }, t
        }, a.prototype._formatSize = function(t) {
            var e = t / 1048576;
            return e = e < 1 ? e < .1 ? (1024 * e).toFixed(0) + " KB" : e.toFixed(2) + " MB" : e < 100 ? e.toFixed(1) + " MB" : e.toFixed(0) + " MB"
        }, a.prototype._bindElements = function() {
            var e = t.document.querySelectorAll(".download-radio"),
                n = t.document.getElementById("download-custom"),
                o = t.document.getElementById("download-custom-select"),
                r = t.document.getElementById("download-btn"),
                s = this,
                a = function() {
                    s.getAnalyticsProvider().trigger("download", {
                        option: s.currentOption,
                        url: s.currentFile
                    })
                };
            r.addEventListener("click", a);
            var l = function(t, e, i) {
                    r.href = e, s.currentOption = t, s.currentFile = i
                },
                h = function() {
                    var t = o.options[o.selectedIndex].getAttribute("data-option"),
                        e = o.options[o.selectedIndex].getAttribute("data-url"),
                        i = o.options[o.selectedIndex].getAttribute("data-filename");
                    l(t, e, i)
                };
            i.each(e, function(t) {
                t.addEventListener("change", function(t) {
                    l(t.target.getAttribute("data-option"), t.target.getAttribute("data-url"), t.target.getAttribute("data-filename")), n && o && o.setAttribute("disabled", "disabled")
                })
            }), n && o && (n.addEventListener("change", function() {
                o.removeAttribute("disabled"), h()
            }), o.addEventListener("change", h)), i.isEmpty(e) ? i.isUndefined(n) || n.click() : e[0].click()
        }, a.prototype.onClose = function() {
            this.getLocaleProvider().off("change:SaveWindow", this._onLocaleChange, this)
        }, e.DownloadWindow = a
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/property").Property,
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/jsons/locale.json");
            t(global, exports, i, n, o)
        } else t(e, e, e.Property, e._, e.LOCALE)
    }(function(t, e, i, n, o) {
        "use strict";

        function r() {}
        r.prototype = new i, r.prototype.constructor = r, r.prototype.getNewLocale = function(t, e) {
            var i = t ? t : [],
                r = e ? e : o ? o.locales : [],
                s = o ? o.substitutes : {},
                a = "en";
            if (r && r.length > 0 && (a = r[0]), i) {
                for (var l in s)
                    if (s.hasOwnProperty(l)) {
                        var h = n.indexOf(i, l);
                        h >= 0 && (i[h] = s[l])
                    }
                for (var c = 0; c < i.length; c++)
                    if (n.indexOf(r, i[c]) >= 0) {
                        a = i[c];
                        break
                    }
            }
            return a
        }, r.prototype.getFontConfig = function() {
            if (this.locale && o.fonts) {
                var t = n.filter(o.fonts, function(t) {
                    return n.indexOf(t.locales, this.locale) !== -1
                }, this);
                if (t.length > 0) return t[0]
            }
        }, r.prototype.isLocaleRTL = function() {
            return !(!this.locale || !o.rtl) && n.indexOf(o.rtl, this.locale) !== -1
        }, r.prototype.set = function(t, e, n) {
            for (var o = t.split("."), r = this, s = 0; s < o.length - 1; s++) r.hasOwnProperty(o[s]) || (r[o[s]] = {}), r = r[o[s]];
            i.prototype.set.call(this, t, e, n)
        }, r.prototype.setLanguage = function(t, e) {
            this.reset(t), this.locale = e
        }, r.prototype.cast = function() {
            console.error("Please, don't cast members of FBL10n instance")
        }, r.prototype.get = function(t, e) {
            for (var i = t.split("."), o = this, r = 0; r < i.length; r++) {
                if (!o.hasOwnProperty(i[r])) return t;
                o = o[i[r]]
            }
            var s = o;
            if (n.isString(s)) {
                for (var a in e) "_" !== a && e.hasOwnProperty(a) && (s = s.replace(new RegExp("%\\{" + a + "\\}", "g"), e[a]));
                return s
            }
            return t
        }, e.FBL10n = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("underscore/underscore-min")._,
                n = require("fb-html5/common/mini-framework"),
                o = require("fb-html5/common/fb-router").FBRouter,
                r = require("fb-html5/common/events").Events,
                s = require("fb-html5/common/fb-locator").FBLocator;
            t(global, exports, i, r, n, o, s)
        } else t(window, e, e._, e.Events, e.el, e.FBRouter, e.FBLocator)
    }(function(t, e, i, n, o, r, s) {
        "use strict";

        function a(e, n, r, s) {
            this.isBottomOpaque = !1, this.isBottomJustify = !1, this.container = e, this.flipbookContainer = s, this.bottomMenu = r, this.rootElement = o.createElement("div", {
                "class": "logo-frame hidden",
                id: "logo-frame"
            }, e), this.properties = n.logoLink, this.link = o.createElement("a", {}, this.rootElement), this.img = o.createElement("img", {}, this.link);
            var a = this;
            t.addEventListener("resize", function() {
                i.defer(function() {
                    a.resetLogoPosition()
                })
            }), this.img.onload = function() {
                a.resetLogoPosition()
            }, n.on("change:logoLink", this._onPropertiesChange, this), n.on("change:components.bottomBar", this.resetLogoPosition, this), this._onPropertiesChange()
        }

        function l(t) {
            return t.width >= c && t.height >= c ? t : void 0
        }
        var h = 10,
            c = 10;
        a.prototype.constructor = a, a.prototype.getLocaleProvider = function() {
            return s().get("locale")
        }, a.prototype._onPropertiesChange = function() {
            var t = this.properties.url;
            this.link.href = t, i.isEmpty(t) ? (o.removeClass(this.rootElement, "linked"), this.rootElement.appendChild(this.img), this.link.href = "", this.img.removeAttribute("alt"), this.img.removeAttribute("title")) : (o.addClass(this.rootElement, "linked"), this.link.appendChild(this.img), this.link.href = t, this.getLocaleProvider().onAndChange("change:TopMenu.EXTERNAL_LINK_TIP", function() {
                this.img.alt = this.img.title = this.getLocaleProvider().get("TopMenu.EXTERNAL_LINK_TIP", {
                    0: t
                })
            }, this)), this.link.target = this.properties.target;
            var e = this.properties.image;
            if (i.isEmpty(e)) o.addClass(this.rootElement, "hidden"), this.img.removeAttribute("src");
            else {
                var n = r().translatePath(e);
                o.removeClass(this.rootElement, "hidden"), this.img.src = n
            }
        }, a.prototype.updateMenuClasses = function(t) {
            this.isBottomOpaque = void 0 !== i.find(t, function(t) {
                return "opaqueBottom" === t
            }), this.isBottomJustify = void 0 !== i.find(t, function(t) {
                return "justifyBottom" === t
            }), this.resetLogoPosition()
        }, a.prototype.resetLogoPosition = function() {
            var t = this._initRects(),
                e = t.filter(function(t) {
                    return "mini_mode" === t.placement
                }),
                n = this._sortRects(t),
                r = this.properties.image;
            e.length > 0 && !i.isEmpty(r) ? (this._placeLogo(e[0]), o.removeClass(this.rootElement, "hidden")) : n.length > 0 && !i.isEmpty(r) ? (this._placeLogo(n[0]), o.removeClass(this.rootElement, "hidden")) : o.addClass(this.rootElement, "hidden")
        }, a.prototype._placeLogo = function(t) {
            var e = t.rect,
                i = t.scale,
                n = t.placement;
            switch (this.img.height = Math.floor(this.img.naturalHeight * i), n) {
                case "between":
                case "above_menu":
                case "under_book":
                case "right":
                    this.rootElement.style.top = e.y + e.height - this.img.height + "px", this.rootElement.style.bottom = "", this.rootElement.style.right = e.right + "px", this.rootElement.style.zIndex = 1;
                    break;
                case "inside_menu":
                    this.rootElement.style.top = e.y + Math.floor((e.height - this.img.height) / 2) + "px", this.rootElement.style.bottom = "", this.rootElement.style.right = e.right + "px", this.rootElement.style.zIndex = 4;
                    break;
                case "mini_mode":
                    this.rootElement.style.bottom = e.bottom + "px", this.rootElement.style.top = "", this.rootElement.style.right = e.right + "px", this.rootElement.style.zIndex = 1
            }
        }, a.prototype._sortRects = function(t) {
            return t.sort(function(t, e) {
                var i = ["inside_menu", "under_book", "right", "between", "above_menu"];
                return t.scale === e.scale ? i.indexOf(t.placement) - i.indexOf(e.placement) : e.scale - t.scale
            })
        }, a.prototype._initRects = function() {
            var t = this._getRect(this.bottomMenu),
                e = this._getRect(this.flipbookContainer),
                n = i.findWhere(o.className("bottom-toolbar"), {
                    localName: "ul"
                }),
                r = this._getRect(n),
                s = {
                    x: 0,
                    y: 0,
                    width: e.width,
                    height: e.height
                };
            s.width = Math.round(s.width / 2), s.x = (e.width - s.width) / 2;
            var a = [];
            if (i.isUndefined(t)) {
                var l = this._getMiniModeRect(s, e);
                if (!i.isUndefined(l)) {
                    var h = this._calculateScale(l);
                    a.push({
                        rect: l,
                        scale: h,
                        placement: "mini_mode"
                    })
                }
                return a
            }
            var c = this._getBetweenRect(s, t, e);
            if (!i.isUndefined(c)) {
                var u = this._calculateScale(c);
                a.push({
                    rect: c,
                    scale: u,
                    placement: "between"
                })
            }
            var d = this._getAboveRect(s, t, e);
            if (!i.isUndefined(d)) {
                var p = this._calculateScale(d);
                a.push({
                    rect: d,
                    scale: p,
                    placement: "above_menu"
                })
            }
            if (!this.isBottomOpaque && !this.isBottomJustify) {
                var f = this._getUnderRect(s, r, t);
                if (!i.isUndefined(f)) {
                    var g = this._calculateScale(f);
                    a.push({
                        rect: f,
                        scale: g,
                        placement: "under_book"
                    })
                }
                var m = this._getRightRect(s, r, t);
                if (!i.isUndefined(m)) {
                    var v = this._calculateScale(m);
                    a.push({
                        rect: m,
                        scale: v,
                        placement: "right"
                    })
                }
                var y = this._getMenuRect(r, t);
                if (!i.isUndefined(y)) {
                    var b = this._calculateScale(y);
                    a.push({
                        rect: y,
                        scale: b,
                        placement: "inside_menu"
                    })
                }
            }
            return a
        }, a.prototype._calculateScale = function(t) {
            var e = this.img.naturalHeight,
                i = this.img.naturalWidth,
                n = t.height,
                o = t.width,
                r = 1,
                s = 1;
            e > n && (r = n / e), i > o && (s = o / i);
            var a = Math.min(s, r, 1);
            return a
        }, a.prototype._getRightRect = function(t, e, i) {
            var n = Math.floor(t.y + t.height / 2 + h),
                o = i.y + i.height - n - h,
                r = Math.max(e.x + e.width, t.x + t.width) + h,
                s = i.width - r - h,
                a = h;
            return l({
                x: r,
                y: n,
                width: s,
                height: o,
                right: a
            })
        }, a.prototype._getUnderRect = function(t, e, i) {
            var n = Math.floor(t.y + t.height + h),
                o = i.y + i.height - n - h,
                r = e.x + e.width + h,
                s = i.width - r - h,
                a = h;
            return l({
                x: r,
                y: n,
                width: s,
                height: o,
                right: a
            })
        }, a.prototype._getMenuRect = function(t, e) {
            var i = e.y,
                n = e.height,
                o = t.x + t.width + h,
                r = e.width - o - h,
                s = h;
            return l({
                x: o,
                y: i,
                width: r,
                height: n,
                right: s
            })
        }, a.prototype._getAboveRect = function(t, e, i) {
            var n = Math.floor(t.y + t.height / 2 + h),
                o = e.y - n - h,
                r = t.x + t.width + h,
                s = i.width - r - h,
                a = h;
            return l({
                x: r,
                y: n,
                width: s,
                height: o,
                right: a
            })
        }, a.prototype._getBetweenRect = function(t, e, i) {
            var n = t.y + t.height + h,
                o = e.y - n - h,
                r = h,
                s = i.width - 2 * h,
                a = h;
            return l({
                x: r,
                y: n,
                width: s,
                height: o,
                right: a
            })
        }, a.prototype._getMiniModeRect = function(t, e) {
            var i = e.height - 2 * h,
                n = Math.floor(e.width / 4 - h),
                o = h,
                r = h;
            return l({
                width: n,
                height: i,
                right: o,
                bottom: r
            })
        }, a.prototype._getRect = function(t) {
            var e = t.getBoundingClientRect(),
                i = this.container.getBoundingClientRect();
            if (0 !== e.width && 0 !== i.width) return {
                x: e.left - i.left,
                y: e.top - i.top,
                width: e.width,
                height: e.height
            }
        }, e.Logo = a
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/frameworks/underscore")._,
                n = require("fb-html5/common/mini-framework"),
                o = require("fb-html5/workspace/utils/paginator-utils"),
                r = require("fb-html5/common/events").Events;
            t(global, exports, i, n, o, r)
        } else t(window, e, e._, e.el, e.PaginatorUtils, e.Events)
    }(function(t, e, i, n, o, r) {
        "use strict";

        function s(t, e) {
            var r = this;
            this.pager = t, this.properties = e, this.paginatorInput = n.id("pager-val"), this.totalPages = n.id("pages-count"), this.divider = n.id("pages-divider"), this.properties.onAndChange("change:totalPagesVisible", function(t) {
                t ? (n.removeClass(this.totalPages, "hidden-component"), n.removeClass(this.divider, "hidden-component")) : (n.addClass(this.totalPages, "hidden-component"), n.addClass(this.divider, "hidden-component"))
            }, this), this.leftPage = void 0, this.rightPage = void 0, this.paginatorInput.addEventListener("click", function(t) {
                t.target.select()
            }), this.paginatorInput.addEventListener("keypress", function(t) {
                if (13 === t.keyCode) {
                    var e = t.target.value;
                    if (!i.isEmpty(e)) {
                        var n = o.findPageIndexByUserInput(e, r.pager);
                        i.isUndefined(n) || r.pager.goToPageByIndex(n)
                    }
                    t.target.blur()
                }
            }), this.paginatorInput.addEventListener("blur", function() {
                r._updateInput(r.pager.getState())
            }), this.pager.on("change:state", this.updateCurrentPages, this), this.pager.on("change:totalPages", this.updateTotalPages, this), this.pager.on("change:rtl", function() {
                this.updateCurrentPages(this.pager.getState())
            }, this), this.pager._model.on("change:numerationOffset", function() {
                var t = this.pager.pageTable.getStructure().length - this.pager.pageTable.getNumerationOffset();
                this.updateCurrentPages(this.pager.getState()), this.updateTotalPages(t)
            }, this), this.target = "paginator", this.updateCurrentPages(this.pager.getState()), this.updateTotalPages(this.pager.totalPages)
        }
        s.prototype = new r, s.prototype.constructor = s, s.prototype.updateCurrentPages = function(t, e, i, n) {
            n !== this.target && (this._updateInput(t), this._updateListenToPageChanges(t))
        }, s.prototype._updateListenToPageChanges = function(t) {
            this.leftPage && this.stopListening(this.pager.pageTable.getPageModel(this.leftPage).getPropertyModel(), "change:displayName", this._pageCaptionChanged), this.rightPage && this.rightPage !== this.leftPage && this.stopListening(this.pager.pageTable.getPageModel(this.rightPage).getPropertyModel(), "change:displayName", this._pageCaptionChanged), t.leftPage ? (this.leftPage = t.leftPage, this.listenTo(this.pager.pageTable.getPageModel(this.leftPage).getPropertyModel(), "change:displayName", this._pageCaptionChanged)) : this.leftPage = void 0, t.rightPage && t.rightPage !== t.leftPage ? (this.rightPage = t.rightPage, this.listenTo(this.pager.pageTable.getPageModel(this.rightPage).getPropertyModel(), "change:displayName", this._pageCaptionChanged)) : this.rightPage = void 0
        }, s.prototype._pageCaptionChanged = function() {
            this.updateCurrentPages(this.pager.getState())
        }, s.prototype.updateTotalPages = function(t) {
            n.setText(this.totalPages, t)
        }, s.prototype._updateInput = function(t) {
            var e = this.pager.getStateForDisplay(t),
                n = 5;
            this.paginatorInput.value = i.isUndefined(e) ? "" : e, !i.isUndefined(this.paginatorInput.value) && !i.isNull(this.paginatorInput.value) && this.paginatorInput.value.length > 5 && (n = this.paginatorInput.value.length), this.paginatorInput.size = n
        }, e.Paginator = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/events").Events,
                o = require("fb-html5/common/frameworks/underscore")._,
                r = require("fb-html5/common/frameworks/hammer").Hammer;
            t(global, exports, i, n, o, r)
        } else t(window, e, e.el, e.Events, e._, e.Hammer)
    }(function(t, e, i, n, o, r) {
        "use strict";

        function s(e, n) {
            var r = Array.prototype.slice.call(arguments, 2);
            this.container = n || i.tag("body"), this.renderWindow(e.iconName, e.title), this.childView = new(Function.prototype.bind.apply(t.FBPublication[e.content], o.union([null, this.mainWindow, e.data, this.windowTitle], r))), o.functions(this.childView).indexOf("on") !== -1 && this.childView.on("close", function() {
                this.close()
            }, this)
        }
        s.prototype = new n, s.prototype.constructor = s, s.prototype.renderWindow = function(t, e) {
            this.blackOut = i.createElement("div", {
                "class": "black-out"
            }, this.container), this.mainWindow = i.createElement("div", {
                "class": "popup-window"
            });
            var n = i.createElement("div", {
                "class": "popup-title-frame"
            }, this.mainWindow);
            this.windowTitle = i.createElement("h3", {
                "class": "popup-title icon icon-" + t
            }, n), i.setText(this.windowTitle, e), this.closeButton = i.createElement("span", {
                "class": "icon icon-close"
            }, n), this.container.appendChild(this.mainWindow);
            var r = this;
            o.defer(function() {
                i.addClass(r.container, "popup-opened")
            }), this.bindDOM()
        }, s.prototype.updateWindow = function(t) {
            o.functions(this.childView).indexOf("update") !== -1 && this.childView.update(t)
        }, s.prototype.bindDOM = function() {
            var e = new r(this.blackOut, {}),
                i = new r(this.closeButton, {}),
                n = this,
                o = function(t) {
                    27 === t.keyCode && n.close()
                },
                s = function() {
                    n.close()
                };
            e.on("tap", s), i.on("tap", s), t.addEventListener("keydown", o), this.on("popup:close", function() {
                t.removeEventListener("keydown", o)
            })
        }, s.prototype.close = function() {
            o.functions(this.childView).indexOf("onClose") !== -1 && this.childView.onClose(), i.del(this.mainWindow), this.mainWindow = null, i.removeClass(this.container, "popup-opened");
            var t = this;
            ! function e() {
                var n = getComputedStyle(t.blackOut);
                "hidden" === n.visibility ? i.del(t.blackOut) : setTimeout(e, 100)
            }(), this.trigger("popup:close")
        }, e.Popup = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events,
                n = require("fb-html5/common/mini-framework"),
                o = require("fb-html5/common/frameworks/underscore")._,
                r = require("fb-html5/common/fb-locator").FBLocator;
            t(global, exports, i, n, o, r)
        } else t(window, e, e.Events, e.el, e._, e.FBLocator)
    }(function(t, e, i, n, o, r) {
        "use strict";

        function s(t) {
            return t = Number(t), t === parseInt(t, 10)
        }

        function a(t, e) {
            return Number(t) > 0 && Number(t) <= e
        }

        function l(t, e, i, n, o) {
            this.pager = n, this.printer = o, this.rootElement = t, this.data = e || {}, this.windowTitle = i, this.currentPageInformer = 0, this.leftArrow = !0, this.rightArrow = !0, this.printOption = "", this.pagesForPrint = [], this._bindInnerEvents(), this._render(), this.getLocaleProvider().on("change:PrintWindow", this._onLocaleChange, this)
        }
        l.prototype = new i, l.prototype.constructor = l, l.prototype._render = function() {
            this.content || (this.content = n.createElement("div", {
                "class": "print-window-container"
            }, this.rootElement)), this.data.print.localization = {
                masterFrameTitle: this.getLocaleProvider().get("PrintWindow.PRINT_PAGES_GROUP"),
                slaveFrameTitle: this.getLocaleProvider().get("PrintWindow.PRINT_PREVIEW_GROUP"),
                allPages: this.getLocaleProvider().get("PrintWindow.ALL_PAGES"),
                selectedPages: this.getLocaleProvider().get("PrintWindow.SELECT_PAGES"),
                currentPages: this.getLocaleProvider().get("PrintWindow.CURRENT_PAGES"),
                pages: this.getLocaleProvider().get("PrintWindow.SIZE_DATA", {
                    0: ""
                }),
                button: this.getLocaleProvider().get("PrintWindow.PRINT_BUTTON")
            }, this.content.innerHTML = t.FBPublication.JST["workspace-print-window"](this.data.print), o.defer(o.bind(this._bindElements, this))
        }, l.prototype._onLocaleChange = function() {
            n.setText(this.windowTitle, this.getLocaleProvider().get("PrintWindow.TITLE")), this.update()
        }, l.prototype.getAnalyticsProvider = function() {
            return r().get("analytics")
        }, l.prototype.getLocaleProvider = function() {
            return r().get("locale")
        }, l.prototype.update = function(t) {
            t && (this.data = t), n.del(this.content), delete this.content, this._render()
        }, l.prototype._bindElements = function() {
            n.id("print-opt").addEventListener("change", o.bind(this._setPrintOption, this)), this._setPrintOption({
                target: n.id("print-opt")
            }), n.id("inp-pages").addEventListener("input", o.bind(this._parseCustom, this)), n.id("print-btn").addEventListener("click", o.bind(function() {
                if (0 !== this.pagesForPrint.length) {
                    var t, e = [];
                    "All" === this.printOption ? e.push("All Pages") : this.pagesForPrint.forEach(function(i) {
                        t = "" + (i + 1), e.push(t)
                    }), this.getAnalyticsProvider().trigger("print", {
                        option: this.printOption,
                        pageNumbers: e
                    }), this.printer.print(this.pagesForPrint)
                }
            }, this)), n.id("to-right").addEventListener("click", t.RTL ? o.bind(this._informerGoBack, this) : o.bind(this._informerGoForward, this)), n.id("to-left").addEventListener("click", t.RTL ? o.bind(this._informerGoForward, this) : o.bind(this._informerGoBack, this)), this._updateView()
        }, l.prototype._setPrintOption = function(t) {
            var e = t.target.value;
            switch (e) {
                case "all":
                    this._addAllPages(), this.printOption = "All", n.removeClass("inp-pages", "active");
                    break;
                case "custom":
                    this._parseCustom({
                        target: n.id("inp-pages")
                    }), this.printOption = "Custom", n.addClass("inp-pages", "active");
                    break;
                case "current":
                    this._addCurrentPages(), this.printOption = "Current", n.removeClass("inp-pages", "active")
            }
        }, l.prototype._bindInnerEvents = function() {
            var t = this;
            this.on("change:pagesForPrint", function() {
                t._updateView()
            }), this.on("input:error", function() {
                n.addClass("inp-pages", "err")
            }, this), this.on("input:ok", function() {
                n.removeClass("inp-pages", "err")
            }, this), this.on("change:leftArrow", function(t) {
                t ? n.css(n.id("to-left"), {
                    opacity: "1",
                    cursor: "pointer"
                }) : n.css(n.id("to-left"), {
                    opacity: "0",
                    cursor: "default"
                })
            }, this), this.on("change:rightArrow", function(t) {
                t ? n.css(n.id("to-right"), {
                    opacity: "1",
                    cursor: "pointer"
                }) : n.css(n.id("to-right"), {
                    opacity: "0",
                    cursor: "default"
                })
            }, this)
        }, l.prototype._addAllPages = function() {
            for (var t = [], e = 0; e < this.pager.pageTable.getStructure().length; e++) t[e] = e;
            this.set("pagesForPrint", t)
        }, l.prototype._addCurrentPages = function() {
            var t = this.pager.getState();
            this.set("pagesForPrint", this.printer.getPagesForPrintByState(t))
        }, l.prototype._parseCustom = function(t) {
            var e = t.target.value.replace(" ", ""),
                i = this.pager.pageTable.getPagesCount(),
                n = 0,
                r = [],
                l = [],
                h = [];
            if ("" === e) return void this.set("pagesForPrint", []);
            this.set("pagesForPrint", []), r = e.split(",");
            for (var c = 0, u = r.length; c < u; c++)
                if (s(r[c]) && a(r[c], i)) l.push(Number(r[c]));
                else if (h = r[c].split("-"), 2 === h.length && s(h[0]) && s(h[1]) && a(h[0], i) && a(h[1], i))
                for (var d = Number(h[0]), p = Number(h[1]); d <= p; d++) l.push(d);
            else ++n, this.trigger("input:error");
            0 === n && this.trigger("input:ok"), this.set("pagesForPrint", o.map(o.uniq(l), function(t) {
                return t - 1
            }))
        }, l.prototype._updateView = function() {
            var t = this.pagesForPrint.length;
            n.setText(n.id("pages-for-print"), t), n.setText(n.id("count-images"), t), 0 === t ? n.addClass("print-btn", "disabled") : n.removeClass("print-btn", "disabled"), this.currentPageInformer = 0, this._updateImageInformer()
        }, l.prototype._updateImageInformer = function() {
            if (n.setText(n.id("curr-image"), this.currentPageInformer + 1), 0 === this.pagesForPrint.length) return n.setText(n.id("curr-image"), 0), n.id("img-el").style.background = "none", this.set("leftArrow", !1), void this.set("rightArrow", !1);
            switch (this.currentPageInformer) {
                case 0:
                    this.set("leftArrow", !!t.RTL && 1 !== this.pagesForPrint.length), this.set("rightArrow", !t.RTL && 1 !== this.pagesForPrint.length);
                    break;
                case this.pagesForPrint.length - 1:
                    this.set("leftArrow", !t.RTL), this.set("rightArrow", !!t.RTL);
                    break;
                default:
                    this.set("leftArrow", !0), this.set("rightArrow", !0)
            }
            this._renderImage(this.currentPageInformer)
        }, l.prototype._informerGoForward = function() {
            this.currentPageInformer !== this.pagesForPrint.length - 1 && (this.currentPageInformer++, this._updateImageInformer())
        }, l.prototype._informerGoBack = function() {
            this.currentPageInformer <= 0 || (this.currentPageInformer--, this._updateImageInformer())
        }, l.prototype._renderImage = function(e) {
            var i = this.pagesForPrint[e],
                r = this.pager.pageTable.getStructure()[i],
                s = !1;
            o.isNull(r) && (r = this.pager.pageTable.getPageIdByIndex(i), s = !0);
            var a, l = this.pager.pageTable.getPageModel(r),
                h = n.id("img-el"),
                c = l.getThumbnailUrl(),
                u = 0,
                d = l.getProperty("wide"),
                p = Math.round(h.parentElement.getBoundingClientRect().height),
                f = Math.round(h.parentElement.getBoundingClientRect().width),
                g = l.getProperty("height"),
                m = l.getProperty("width");
            m = d ? m / 2 : m, m > g ? (a = f / m, p = Math.round(g * a)) : (a = p / g, f = Math.round(m * a)), u = d && s ? -f : u, n.css(h, {
                background: 'url("' + c + '") #ffffff no-repeat',
                width: f + "px",
                height: p + "px",
                "margin-top": -(p / 2) + "px",
                "background-position": u + "px center",
                "background-size": "auto 100%"
            }), t.RTL ? n.css(h, {
                "margin-right": -(f / 2) + "px"
            }) : n.css(h, {
                "margin-left": -(f / 2) + "px"
            })
        }, l.prototype.onClose = function() {
            this.printer.reset(), this.getLocaleProvider().off("change:PrintWindow", this._onLocaleChange, this)
        }, e.PrintWindow = l
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events,
                n = require("fb-html5/common/mini-framework"),
                o = require("fb-html5/common/fb-utils"),
                r = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i, n, o, r)
        } else t(window, e, e.Events, e.el, e.fbUtils, e._)
    }(function(t, e, i, n, o, r) {
        "use strict";

        function s(t, e) {
            this.container = e || n.tag("body"), this.pager = t, this.pagesForPrint = [], this.isReadyToPrint = !0, this.on("change:pagesForPrint", this._preparePrintData, this), this.pager.on("change:state", this._onPagerStateChange, this), this._onPagerStateChange(this.pager.getState())
        }
        s.prototype = new i, s.prototype.constructor = s, s.prototype._onPagerStateChange = function() {}, s.prototype.getPagesForPrintByState = function(t) {
            var e = [t.leftPage, t.rightPage],
                i = this;
            if (e = r.filter(e, function(t) {
                    return !(r.isUndefined(t) || r.isNull(t))
                }), e.length > 0) {
                if (1 === e.length) return [this.pager.pageTable.getPageIndexById(e[0])];
                if (e[0] === e[1]) {
                    var n = this.pager.pageTable.getPageIndexById(e[0]);
                    return [n, n + 1]
                }
                return r.map(e, function(t) {
                    return i.pager.pageTable.getPageIndexById(t)
                })
            }
            return []
        }, s.prototype.print = function(t) {
            t && (this.set("pagesForPrint", t), this.isReadyToPrint ? this._print() : this.once("change:isReadyToPrint", this._print, this))
        }, s.prototype._print = function() {
            this.isReadyToPrint && t.print()
        }, s.prototype.reset = function() {
            this.set("isReadyToPrint", !1), n.del("print-view"), this._onPagerStateChange(this.pager.getState())
        }, s.prototype._preparePrintData = function(t) {
            var e, i = this;
            if (0 !== t.length) {
                this.isReadyToPrint = !1, n.id("print-view") ? (e = n.id("print-view"), e.innerHTML = "") : e = n.createElement("div", {
                    "class": "print-view",
                    id: "print-view"
                }, this.container);
                var o = [],
                    s = function(t, r) {
                        var s = t.getProperty("wide"),
                            a = n.createElement("div", {
                                "class": "page-container"
                            }, e),
                            l = function(t) {
                                o.push(t.id), o.length === i.pagesForPrint.length && i.set("isReadyToPrint", !0)
                            },
                            h = n.createElement("img", {
                                styles: {
                                    width: s ? "200%" : "100%",
                                    height: "100%",
                                    display: "block",
                                    "margin-left": s && r ? "-100%" : "0"
                                }
                            }, a);
                        h.onload = function() {
                            if (t.getProperty("textLayer")) {
                                var e = n.createElement("img", {
                                    styles: {
                                        width: s ? "200%" : "100%",
                                        position: "absolute",
                                        top: 0,
                                        left: s && r ? "-100%" : "0",
                                        display: "block"
                                    }
                                }, a, "after", h);
                                e.onload = function() {
                                    l(t)
                                }, e.src = t.getTextLayerUrl(!0)
                            } else l(t)
                        }, h.src = t.getSubstrateUrl(!0), n.createElement("div", {
                            "class": "page-break"
                        }, a)
                    };
                r.each(t, function(t) {
                    var e = !1,
                        n = i.pager.pageTable.getStructure()[t];
                    r.isNull(n) && (e = !0, n = i.pager.pageTable.getPageIdByIndex(t)), s(i.pager.pageTable.getPageModel(n), e)
                })
            }
        }, e.Print = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/search/i-search-provider").ISearchProvider,
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/common/fb-utils"),
                r = require("fb-html5/common/fb-router").FBRouter;
            t(global, exports, n, i, o, r)
        } else t(window, e, e._, e.ISearchProvider, e.fbUtils, e.FBRouter)
    }(function(t, e, i, n, o, r) {
        "use strict";

        function s(t, e) {
            t = t || {}, this.searchCharactersLimit = t.searchCharactersLimit, this.exactMatch = t.exactMatch, this.maxTextResultLength = t.maxTextResultLength || 90, this.searchIndex = null, this.result = null, this._pageTable = e;
            var i = this;
            this.on("change:query", function() {
                i.set("result", null)
            })
        }
        s.prototype = new n, s.prototype.constructor = s, s.prototype.getResultsAsync = function(t, e, n) {
            var o = this;
            if (i.isEmpty(this.query) || !this.isQueryValid()) return [];
            if (!i.isNull(this.result)) return void n(this.result.slice(t * e, t * e + e - 1));
            var r = function() {
                i.defer(function() {
                    o._run_search(), n(o.result.slice(t * e, t * e + e - 1))
                })
            };
            i.isNull(this.searchIndex) ? this.loadSearchIndex(function() {
                r()
            }) : r()
        }, s.prototype.getResultsCountSync = function() {
            return i.isNull(this.result) ? void 0 : this.result.length
        }, s.prototype._getBold = function(t, e) {
            var i = new RegExp(e, "ig"),
                n = function(t) {
                    return "<b>" + t + "</b>"
                };
            return t.replace(i, n)
        }, s.prototype.loadSearchIndex = function(t) {
            var e = this;
            o.loadJSON([r().translatePath("assets/common/search/searchtext.js")], function(i) {
                e.searchIndex = i.pages.page, t()
            })
        }, s.prototype._run_search = function() {
            var t = [],
                e = this.query.toLowerCase(),
                n = o.split(e, this.searchCharactersLimit),
                r = n.length;
            for (var s in this.searchIndex)
                if (i.has(this.searchIndex, s)) {
                    var a = this.searchIndex[s],
                        l = this._searchFullCoincidence(e, a["#text"], a["@ID"], !0);
                    i.isNull(l) || t.push(l), i.isNull(l) && null !== a["#text"] && (this.exactMatch || (r > 1 ? (l = this._searchPartiallyCoincidence(n, a["#text"], a["@ID"], r, e.length), i.isNull(l) || t.push(l)) : 1 === r && (l = this._searchFullCoincidence(n[0], a["#text"], a["@ID"], !1), i.isNull(l) || t.push(l))));
                }
            this.result = t.sort(this._sortFunc.bind(this))
        }, s.prototype._buildSearchText = function(t, e, i) {
            i = i || [];
            var n = e - this.maxTextResultLength / 2;
            n = n < 0 ? 0 : n;
            var r = t.substr(n, parseInt(this.maxTextResultLength, 10) + 6);
            if (r = "..." + r + "...", r = o.screening(r), i.length > 0)
                for (var s = 0; s < i.length; s++) r = this._getBold(r, i[s]);
            else r = this._getBold(r, this.query);
            return r
        }, s.prototype._buildIndexes = function(t, e, i) {
            for (var n = [], o = 0; o < e; o++) {
                for (var r = [], s = t[o], a = -this.searchCharactersLimit; a !== -1;) a = i.indexOf(s, a + this.searchCharactersLimit), a !== -1 && r.push(a);
                r.length > 0 && n.push(r)
            }
            return n
        }, s.prototype._searchFullCoincidence = function(t, e, i, r) {
            for (var s = -1, a = -1, l = e.toLowerCase();
                (s = l.indexOf(t, s + 1)) >= 0;)
                if (a = s, s !== -1 && (0 === s || o.isSplitter(l.charAt(s - 1))) && (s + t.length === l.length || o.isSplitter(l.charAt(s + t.length)))) return new n.SearchResult(i, this._buildSearchText(e, s, [t]), r ? 0 : 1, s, s + t.length, r);
            return a >= 0 && !this.exactMatch ? new n.SearchResult(i, this._buildSearchText(e, a, [t]), r ? 2 : 3, a, a + t.length, r) : null
        }, s.prototype._searchPartiallyCoincidence = function(t, e, i, o) {
            var r = e.toLowerCase(),
                s = this._buildIndexes(t, o, r);
            if (null === s || 0 === s.length) return null;
            for (var a = 0, l = new Array(s.length), h = 0; h < s.length; h++) l[h] = s[h][0];
            for (var c = 0; c < s.length - 1; c++) {
                var u = 1e3,
                    d = s[c],
                    p = s[c + 1];
                if (null === d || null === p) break;
                for (var f = d.length, g = p.length, m = 0; m < f; m++)
                    for (var v = 0; v < g; v++) {
                        var y = d[m],
                            b = p[v],
                            w = b > y ? 1 : 2,
                            P = b > y ? b - y : y - b,
                            _ = P * w;
                        _ < u && (l[c] = y, l[c + 1] = b, u = _)
                    }
                a += u
            }
            for (var x = 1e4, T = 0, C = 0; null !== l && C < l.length; C++) x = Math.min(x, l[C]), T = Math.max(T, l[C]);
            return a += 1e3 * (o - s.length), r = null, new n.SearchResult(i, this._buildSearchText(e, x, t), a + 4, x, T, (!1))
        }, s.prototype._sortFunc = function(t, e) {
            if (t.relevance !== e.relevance) return t.relevance - e.relevance;
            if (t.pageId !== e.pageId) {
                var i = this._pageTable.getPageIndexById("" + t.pageId),
                    n = this._pageTable.getPageIndexById("" + e.pageId);
                return i - n
            }
            return 0
        }, s.prototype.getMinimumQueryLength = function() {
            return this.searchCharactersLimit
        }, e.LocalSearchProvider = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/common/events").Events,
                r = require("fb-html5/common/frameworks/hammer").Hammer,
                s = require("fb-html5/common/fb-utils"),
                a = require("fb-html5/common/fb-locator").FBLocator;
            t(global, exports, n, i, o, r, s, a)
        } else t(window, e, e._, e.el, e.Events, e.Hammer, e.fbUtils, e.FBLocator)
    }(function(t, e, i, n, o, r, s, a) {
        "use strict";

        function l(t, e, o) {
            var r = this;
            this.rootView = t, this.provider = o, this.pager = e, this.preloader = null, this.searchResultsCountPanel = null, this.scrollView = null, this.listView = null, this.createSearchInputBlock(), this.createSubHeader2(), this.createPreloader(), this.createList(), this.showResults(!0), this.provider.on("change:query", function() {
                n.clear(r.listView), i.defer(function() {
                    r.showResults()
                })
            })
        }
        l.prototype = new o, l.prototype.constructor = l, l.prototype.getAnalyticsProvider = function() {
            return a().get("analytics")
        }, l.prototype.getLocaleProvider = function() {
            return a().get("locale")
        }, l.prototype.createSubHeader1 = function() {
            var t = n.createElement("div", {
                "class": "search-sub-header subheader"
            }, this.rootView);
            n.setText(t, this.getLocaleProvider().get("SearchToolWindow.SEARCH_RESULTS"))
        }, l.prototype.createSearchInputBlock = function() {
            var t = this,
                e = n.createElement("div", {
                    "class": "search-input-block"
                }, this.rootView),
                i = n.createElement("span", {
                    "class": "btn icon icon-search"
                }, e),
                o = n.createElement("input", {}, n.createElement("label", {}, e));
            o.placeholder = this.getLocaleProvider().get("SearchToolWindow.QUERY_PLACEHOLDER"), o.value = this.provider.query, o.focus(), n.createElement("div", {
                styles: {
                    clear: "both"
                }
            }, e);
            var s = function() {
                t.provider.set("query", o.value), t.getAnalyticsProvider().trigger("search", {
                    query: o.value
                })
            };
            o.addEventListener("keydown", function(t) {
                13 === t.keyCode && s()
            }), new r(i, {}).on("tap", s), this.provider.on("change:query", function() {
                o.value !== t.provider.query && (o.value = t.provider.query)
            })
        }, l.prototype.createSubHeader2 = function() {
            this.searchResultsCountPanel = n.createElement("div", {
                "class": "search-sub-header subheader"
            }, this.rootView)
        }, l.prototype.createPreloader = function() {
            this.preloader = n.createElement("div", {
                "class": "search-preloader"
            }, this.rootView);
            for (var t = n.createElement("div", {
                    "class": "preloader-dots"
                }, this.preloader), e = 0; e < 5; e++) n.createElement("div", {
                "class": "dot"
            }, t)
        }, l.prototype.createList = function() {
            this.scrollView = n.createElement("div", {
                "class": "scroller"
            }, this.rootView), this.listView = n.createElement("ul", {
                "class": "search-ul"
            }, this.scrollView)
        }, l.prototype.showResults = function(t) {
            var e = this;
            return n.removeClass(this.searchResultsCountPanel, "empty-result"), this.provider.isQueryValid() ? (i.isUndefined(this.provider.getResultsCountSync()) ? (n.removeClass(this.preloader, "hidden"), n.addClass(this.scrollView, "hidden"), n.setText(this.searchResultsCountPanel, this.getLocaleProvider().get("SearchToolWindow.SEARCH_IN_PROGRESS", {
                0: this.provider.getMinimumQueryLength()
            }))) : (n.addClass(this.preloader, "hidden"), n.removeClass(this.scrollView, "hidden"), n.setText(this.searchResultsCountPanel, this.getLocaleProvider().get("SearchToolWindow.PAGES_FOUND", {
                0: this.provider.getResultsCountSync()
            }))), void this.provider.getResultsAsync(0, Number.MAX_VALUE, function(t) {
                n.addClass(e.preloader, "hidden"), n.removeClass(e.scrollView, "hidden"), n.setText(e.searchResultsCountPanel, e.getLocaleProvider().get("SearchToolWindow.PAGES_FOUND", {
                    0: e.provider.getResultsCountSync()
                })), i.isEmpty(t) || (i.each(t, function(t) {
                    var i = n.createElement("li", {
                            "class": "search-item"
                        }, e.listView),
                        o = n.createElement("p", {
                            "class": "list-item search-item-p p" + t.pageId
                        }, i),
                        a = n.createElement("span", {
                            "class": "search-item-title",
                            styles: {
                                width: "214px"
                            }
                        }, o);
                    a.innerHTML = "<b>" + s.cleanString(e.getLocaleProvider().get("SearchToolWindow.PAGE_NUMBER", {
                        0: e.pager.pageTable.getPageCaptionById(t.pageId + "")
                    })) + ":</b> " + t.text, r(o, {}).on("tap", function() {
                        e.trigger("change:page", {
                            pageId: t.pageId + "",
                            target: "search"
                        })
                    })
                }), e.trigger("change:height"))
            })) : (n.addClass(this.preloader, "hidden"), n.removeClass(this.scrollView, "hidden"), void(i.isEmpty(this.provider.query) && t ? (n.addClass(this.searchResultsCountPanel, "empty-result"), n.setText(this.searchResultsCountPanel, "")) : (n.removeClass(this.searchResultsCountPanel, "empty-result"), n.setText(this.searchResultsCountPanel, this.getLocaleProvider().get("SearchToolWindow.MIN_WORD_ERRROR", {
                0: this.provider.getMinimumQueryLength()
            })))))
        }, l.prototype.setElementActive = function(t) {
            n.removeClass(this.listView.querySelector(".active"), "active"), i.defer(function() {
                n.addClass(t, "active")
            })
        }, e.SearchWindow = l
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/fb-utils"),
                o = require("fb-html5/common/fb-router").FBRouter,
                r = require("fb-html5/common/frameworks/underscore")._,
                s = require("fb-html5/workspace/tooltip").TooltipManager,
                a = require("fb-html5/common/fb-locator").FBLocator;
            t(global, exports, i, n, o, r, s, a)
        } else t(window, e, e.el, e.fbUtils, e.FBRouter, e._, e.TooltipManager, e.FBLocator)
    }(function(t, e, i, n, o, r, s, a) {
        "use strict";

        function l(t, e, i, n) {
            this.rootElement = t, this.properties = e, this.pager = n, this.windowTitle = i, this.currentUrl = o().getShareUrl(), this._render(), this._enableClipboard(), this.getLocaleProvider().on("change:PermanentLinkBar", this._onLocaleChange, this)
        }
        l.prototype._render = function() {
            var e = this;
            this.content || (this.content = i.createElement("div", {
                "class": "popup-content"
            }, this.rootElement)), n.renderTemplate(this.content, t.FBPublication.JST["workspace-social-window"], {
                embedVisibility: this.properties.components.embed,
                localization: {
                    shareTab: this.getLocaleProvider().get("PermanentLinkBar.SHARE_TAB"),
                    embedTab: this.getLocaleProvider().get("PermanentLinkBar.INSERT_TO_SITE_TAB"),
                    shareCurrent: this.getLocaleProvider().get("PermanentLinkBar.SHARE_CURRENT_PAGE"),
                    embedCurrent: this.getLocaleProvider().get("PermanentLinkBar.INSERT_CURRENT_PAGE"),
                    width: this.getLocaleProvider().get("PermanentLinkBar.WIDTH"),
                    height: this.getLocaleProvider().get("PermanentLinkBar.HEIGHT"),
                    fullPublication: this.getLocaleProvider().get("PermanentLinkBar.FULL_PUBLICATION"),
                    linkablePage: this.getLocaleProvider().get("PermanentLinkBar.LINKABLE_PAGE"),
                    embedType: this.getLocaleProvider().get("PermanentLinkBar.EMBEDDING_TYPE"),
                    copyButton: this.getLocaleProvider().get("PermanentLinkBar.COPY_BUTTON"),
                    shareText: this.getLocaleProvider().get("PermanentLinkBar.SHARE_TEXT"),
                    facebookTitle: this.getLocaleProvider().get("PermanentLinkBar.SHARE_TO_FACEBOOK"),
                    twitterTitle: this.getLocaleProvider().get("PermanentLinkBar.SHARE_TO_TWITTER"),
                    linkedinTitle: this.getLocaleProvider().get("PermanentLinkBar.SHARE_TO_LINKEDIN"),
                    tumblrTitle: this.getLocaleProvider().get("PermanentLinkBar.SHARE_TO_TUMBLR"),
                    googleTitle: this.getLocaleProvider().get("PermanentLinkBar.SHARE_TO_GOOGLE_PLUS"),
                    mailTitle: this.getLocaleProvider().get("PermanentLinkBar.SEND_BY_EMAIL"),
                    vkTitle: this.getLocaleProvider().get("PermanentLinkBar.SHARE_TO_VK")
                }
            }), this.qr = i.id("qr"), this.copyButton = i.id("copy-button"), this.urlContainer = i.id("share-url-container"), this.facebookBtn = i.id("facebook-link"), this.twitterBtn = i.id("twitter-link"), this.linkedInBtn = i.id("linkedin-link"), this.tubmlrBtn = i.id("tumblr-link"), this.googleBtn = i.id("google-link"), this.mailBtn = i.id("mail-link"), this.vkBtn = i.id("vk-link");
            var r = i.id("current-page-checkbox");
            "undefined" != typeof r.addEventListener && r.addEventListener("change", function() {
                i.id("current-page-embed").checked = r.checked, e.currentUrl = o().getShareUrl(r.checked), e.currentPage = r.checked, e._updateUrl()
            }), this._bindTabs(), this._updateUrl(), this._bindAnalytics(), this._initEmbedTab()
        }, l.prototype._onLocaleChange = function() {
            i.setText(this.windowTitle, this.getLocaleProvider().get("PermanentLinkBar.TITLE")), this.update()
        }, l.prototype.getAnalyticsProvider = function() {
            return a().get("analytics")
        }, l.prototype.getLocaleProvider = function() {
            return a().get("locale")
        }, l.prototype.update = function(t) {
            t && (this.properties = t), i.del(this.content), delete this.content, this._render()
        }, l.prototype._bindTabs = function() {
            var t = this;
            this.embedButtonTab = i.id("embed-button-tab"), this.shareButtonTab = i.id("share-button-tab"), this.embedButtonTab.addEventListener("click", function() {
                t.shareButtonTab.className = "", t.embedButtonTab.className = "active", i.removeClass(i.id("share-tab"), "active"), i.addClass(i.id("embed-tab"), "active")
            }), this.shareButtonTab.addEventListener("click", function() {
                t.shareButtonTab.className = "active", t.embedButtonTab.className = "", i.addClass(i.id("share-tab"), "active"), i.removeClass(i.id("embed-tab"), "active")
            })
        }, l.prototype._bindAnalytics = function() {
            var t = this;
            this.facebookBtn.addEventListener("click", function() {
                t.getAnalyticsProvider().trigger("share", {
                    service: "Facebook",
                    url: t.currentUrl
                })
            }), this.twitterBtn.addEventListener("click", function() {
                t.getAnalyticsProvider().trigger("share", {
                    service: "Twitter",
                    url: t.currentUrl
                })
            }), this.linkedInBtn.addEventListener("click", function() {
                t.getAnalyticsProvider().trigger("share", {
                    service: "LinkedIn",
                    url: t.currentUrl
                })
            }), this.tubmlrBtn.addEventListener("click", function() {
                t.getAnalyticsProvider().trigger("share", {
                    service: "Tumblr",
                    url: t.currentUrl
                })
            }), this.googleBtn.addEventListener("click", function() {
                t.getAnalyticsProvider().trigger("share", {
                    service: "Google+",
                    url: t.currentUrl
                })
            }), this.mailBtn.addEventListener("click", function() {
                t.getAnalyticsProvider().trigger("share", {
                    service: "Email",
                    url: t.currentUrl
                })
            }), this.vkBtn.addEventListener("click", function() {
                t.getAnalyticsProvider().trigger("share", {
                    service: "VK",
                    url: t.currentUrl
                })
            })
        }, l.prototype._updateUrl = function() {
            var t = this.properties.title;
            this.urlContainer.value = this.currentUrl;
            var e = function(t, e) {
                var i = [];
                for (var n in e)
                    if (r.has(e, n)) {
                        var o = encodeURIComponent(n),
                            s = encodeURIComponent(e[n]);
                        i.push(o + "=" + s)
                    }
                return t + "?" + i.join("&")
            };
            this.facebookBtn.href = e("http://www.facebook.com/sharer.php", {
                u: this.currentUrl
            }), this.twitterBtn.href = e("http://twitter.com/share", {
                text: t,
                url: this.currentUrl
            }), this.linkedInBtn.href = e("http://www.linkedin.com/shareArticle", {
                mini: !0,
                url: this.currentUrl,
                title: t,
                summary: t
            }), this.tubmlrBtn.href = e("http://www.tumblr.com/share/link", {
                url: this.currentUrl,
                name: t
            }), this.googleBtn.href = e("https://plus.google.com/share", {
                text: t,
                url: this.currentUrl
            }), this.mailBtn.href = e("mailto:", {
                subject: t,
                body: this.currentUrl
            }), this.vkBtn.href = e("http://vk.com/share.php", {
                url: this.currentUrl,
                title: t
            }), this._renderQR();
            var i = this._getPageLinkParams();
            this.animatedUrl = o().translatePath(e("assets/common/embed/page.html", i))
        }, l.prototype._getPageLinkParams = function() {
            function t(t) {
                var e = i.pager.pageTable.getPageModel(t);
                if (e.isStub()) return "s";
                switch (e.getProperty("thFormat")) {
                    case "jpg":
                        return "j";
                    default:
                        return "p"
                }
            }
            var e = {
                    link: this.currentUrl
                },
                i = this;
            if (this.currentPage === !0) {
                var n = this.pager.getState();
                e.f = "", void 0 !== n.rightPage && (e.f += t(n.rightPage), e.p = this.pager.pageTable.getPageIndexById(n.rightPage) + 1), void 0 !== n.leftPage && (e.f += t(n.leftPage), e.p = this.pager.pageTable.getPageIndexById(n.leftPage) + 1)
            } else e.f = t(this.pager.pageTable.getPageIdByIndex(0));
            return e
        }, l.prototype._renderQR = function() {
            i.clear(this.qr), new t.FBPublication.QRCode(this.qr, {
                text: this.currentUrl,
                width: 96,
                height: 96
            })
        }, l.prototype._enableClipboard = function() {
            var e = this,
                n = new t.Clipboard(this.copyButton),
                o = new t.Clipboard(i.id("embed-copy-button"));
            n.on("success", function(t) {
                t.clearSelection()
            }), n.on("error", function() {
                s().showTooltip(e.urlContainer, {
                    hideTime: 2e3,
                    text: this.getLocaleProvider().get("PermanentLinkBar.COPY_TOOLTIP"),
                    position: "bottom"
                })
            }), o.on("success", function(t) {
                t.clearSelection()
            }), o.on("error", function() {
                s().showTooltip(e.urlContainer, {
                    hideTime: 2e3,
                    text: this.getLocaleProvider().get("PermanentLinkBar.COPY_TOOLTIP"),
                    position: "bottom"
                })
            })
        }, l.prototype._initEmbedTab = function() {
            var t = this;
            this.embedTextarea = i.id("embed-text"), this.embedTypeSelect = i.id("embed-type-select"), this.embedWidth = i.id("embed-width"), this.embedHeight = i.id("embed-height"), this.currentPageEmbed = i.id("current-page-embed");
            var e = function() {
                t.currentUrl = o().getShareUrl(t.currentPageEmbed.checked), t.currentPage = t.currentPageEmbed.checked, i.id("current-page-checkbox").checked = t.currentPageEmbed.checked, t._updateUrl(), 1 * t.embedTypeSelect.value === 1 ? (i.id("embed-size-frame").style.display = "inline-block", t.embedTextarea.value = t._getPublicationEmbed(t.embedWidth.value, t.embedHeight.value, !0)) : (i.id("embed-size-frame").style.display = "none", t.embedTextarea.value = t._getPublicationEmbed("240", "210", !0))
            };
            this.embedTypeSelect.addEventListener("change", e), this.currentPageEmbed.addEventListener("change", e), this.embedWidth.addEventListener("keyup", e), this.embedHeight.addEventListener("keyup", e), this.properties.on("change:title", e, this), e()
        }, l.prototype._getPublicationEmbed = function(t, e, i) {
            var n = this.currentUrl,
                r = this.properties.title,
                s = o().translatePath("static/html/embed.js"),
                a = o().getEmbedPrefix();
            return i = i ? "yes" : "no", '<a class="' + a + '-embed" style="max-width: 100%;" href="' + n + '" data-' + a + '-lightbox="' + i + '" data-' + a + '-version="1" data-' + a + '-width="' + t + 'px" data-' + a + '-height="' + e + 'px">' + r + '</a><script async defer src="' + s + '"></script>'
        }, l.prototype.onClose = function() {
            this.getLocaleProvider().off("change:PermanentLinkBar", this._onLocaleChange, this)
        }, e.SocialWindow = l
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/common/events").Events,
                r = require("fb-html5/common/property").Property,
                s = require("fb-html5/common/fb-router").FBRouter;
            t(global, exports, n, i, o, s, r)
        } else t(window, e, e._, e.el, e.Events, e.FBRouter, e.Property)
    }(function(t, e, i, n, o, r, s) {
        "use strict";

        function a(t, e, i) {
            return this._canPlayMp3() ? t && t.constructor === s ? (this.container = i || n.tag("body"), this.properties = t, this.muted = !1, this.soundEnabled = !0, this.pager = e, this.properties.cast("background"), this._initBackgroundSound(this.properties.background), this.properties.cast("flip"), this._initFlipBookSounds(this.properties.flip), void this.properties.on("change:enabled", function(t) {
                this.soundEnabled = t, this._fadeBackgroundSound(), this._updateCanWork()
            }, this)) : void console.error("Sound need properties in constructor") : void console.error("Audio mp3 is not supported")
        }
        a.prototype = new o, a.constructor = a, a.prototype._canPlayMp3 = function() {
            var t = new Audio,
                e = !!t.canPlayType && "" !== t.canPlayType("audio/mp3");
            return e
        }, a.prototype._updateCanWork = function() {
            var t = this.properties.enabled,
                e = this.flipEnabled && !i.isEmpty(this.properties.flip.soft),
                n = !i.isEmpty(this.properties.background.url);
            this.set("canWork", this._canPlayMp3() && t && (e || n))
        }, a.prototype._initBackgroundSound = function(t) {
            var e = {
                autoplay: "autoplay"
            };
            !this.muted && this.soundEnabled || (e.muted = "muted"), this.audio = n.createElement("audio", e, this.container), this.on("change:muted", function() {
                this._fadeBackgroundSound()
            }), t.onAndChange("change:loop", function(t) {
                this._updateBackgroundLoop(t)
            }, this), t.on("change:url", function(t) {
                this._updateBackgroundURL(t), this._updateCanWork()
            }, this), t.onAndChange("change:volume", function(t) {
                this._updateBackgroundVolume(t)
            }, this)
        }, a.prototype._updateBackgroundVolume = function(t) {
            this.audio.volume = t / 100, this.backgroundVolume = this.audio.volume
        }, a.prototype._updateBackgroundLoop = function(t) {
            this.audio.loop = t, this.audio.paused && this.audio.play()
        }, a.prototype._updateBackgroundURL = function(t) {
            if (i.isEmpty(t)) this._fadeBackgroundSound(!0);
            else if (this.backgroundAudioSources) this.backgroundAudioSources.src = r().translatePath("assets/common/sound/background/" + t), this.audio.load();
            else {
                var e = {
                    type: "audio/mp3"
                };
                e.src = r().translatePath("assets/common/sound/background/" + t), this.backgroundAudioSources = n.createElement("source", e, this.audio)
            }
        }, a.prototype._fadeBackgroundSound = function(t) {
            if (!i.isUndefined(this.audio)) {
                var e = i.isUndefined(t) ? this.muted || !this.soundEnabled : t,
                    n = this;
                this.fadeEffect = void 0;
                var o, r = 500,
                    s = 100,
                    a = r / s;
                i.isUndefined(this.fadeEffect) || clearInterval(this.fadeEffect), e ? (o = this.audio.volume / a, this.fadeEffect = setInterval(function() {
                    0 === n.audio.volume ? (n.audio.muted = !0, clearInterval(n.fadeEffect)) : n.audio.volume > o ? n.audio.volume -= o : n.audio.volume = 0
                }, s)) : (o = (this.backgroundVolume - this.audio.volume) / a, this.audio.muted = !1, this.fadeEffect = setInterval(function() {
                    n.audio.volume === n.backgroundVolume ? clearInterval(n.fadeEffect) : n.audio.volume + o <= n.backgroundVolume ? n.audio.volume += o : n.audio.volume = n.backgroundVolume
                }, s))
            }
        }, a.prototype.createFlipElements = function(t, e) {
            var o = [];
            if (!i.isUndefined(e[t]))
                for (var s, a, l = e[t].length, h = 0; h < l; h++) s = e[t][h], a = n.createElement("audio", {
                    id: t + "FlipSound_" + (h + 1)
                }, this.container), n.createElement("source", {
                    src: r().translatePath("assets/common/sound/flip/" + s),
                    type: "audio/mp3"
                }, a), a.volume = 1, o.push(a);
            return o
        }, a.prototype._initFlipBookSounds = function(t) {
            var e = this;
            t.onAndChange("change:soft", function() {
                this._updateCanWork()
            }, this);
            var n = this.createFlipElements("soft", t),
                o = this.createFlipElements("hard", t),
                r = function(t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t
                },
                s = function(t) {
                    var s = t === !0 ? o : n;
                    if (s && s.length > 0) {
                        var a = r(0, s.length - 1),
                            l = s[a],
                            h = r(5, 10) / 10;
                        l.volume = e.flipVolume * h, i.isUndefined(l) || (l.pause(), function(t) {
                            i.delay(function() {
                                t.paused && (t.currentTime = 0, t.play())
                            }, 10)
                        }(l))
                    }
                };
            this.pager.on("change:state", function(t, i) {
                if (!e.muted && e.flipEnabled && e.soundEnabled && t.zoomMode === i.zoomMode && !t.zoomMode) {
                    var n = (this.pageTable.isLastPage(i.leftPage) || this.pageTable.isLastPage(t.leftPage) || this.pageTable.isFirstPage(i.rightPage) || this.pageTable.isFirstPage(t.rightPage)) && this.isHardcover();
                    s(n)
                }
            }), t.onAndChange("change:volume", function(t) {
                this.flipVolume = t / 100
            }, this), t.onAndChange("change:enabled", function(t) {
                this.flipEnabled = t, this._updateCanWork()
            }, this)
        }, e.Sound = a
    }, this.FBPublication || {}), window.FBPublication = window.FBPublication || {}, window.FBPublication.JST = {}, FBPublication.JST["workspace-book"] = function(t) {
        var e = '<div class="' + t.type + '-viewport" id="' + t.type + '-viewport"> <div id="' + t.type + '-viewport-central" class="' + t.type + '-viewport-central"> <div class="' + t.type + '" id="' + t.type + '"> <!-- Next button --> <div ignore="1" class="next-button"> <div class="btn-container"> <span class="icon icon-book-next"></span> </div> <span id="icon-book-last" class="icon icon-book-last"></span> </div> <!-- Previous button --> <div ignore="1" class="previous-button"> <div class="btn-container"> <span class="icon icon-book-prev"></span> </div> <span id="icon-book-first" class="icon icon-book-first"></span> </div> </div> </div></div>';
        return e
    }, FBPublication.JST["workspace-bottom-menu"] = function(t) {
        var e = "undefined" != typeof _encodeHTML ? _encodeHTML : function(t) {
                var e = {
                        "&": "&#38;",
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "/": "&#47;"
                    },
                    i = t ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                return function(t) {
                    return t ? t.toString().replace(i, function(t) {
                        return e[t] || t
                    }) : ""
                }
            }(),
            i = '<ul class="bottom-toolbar"> <li class="icon icon-toc group1" id="toc" title="' + e(t.localization.toc) + '"></li> <li class="icon icon-thumbnails group1" id="thumbnails" title="' + e(t.localization.thumbnails) + '"></li> <li class="divider" id="divider1"></li> <li class="icon icon-social group2" id="social" title="' + e(t.localization.social) + '"></li> <li class="icon icon-font group2" id="text-selection" title="' + e(t.localization.textSelection) + '"></li> <li class="icon icon-print group2" id="print" title="' + e(t.localization.print) + '"></li> <li class="icon icon-download group2" id="download" title="' + e(t.localization.download) + '"></li> <li class="icon icon-sound group2" id="sound" title="' + e(t.localization.sound) + '"></li> <li class="divider" id="divider2"></li> <li class="icon ' + (t.fullscreenIcon || "icon-fullscreen") + ' group3" id="fullscreen" title="' + e(t.localization.fullscreen) + '"></li> <li class="icon ' + (t.zoomIcon || "icon-zoomin") + ' group3" id="zoom-page" title="' + e(t.localization.zoom) + '"></li> <li class="divider void"></li> <li class="nav-bar"> <ul class=""> <li class="icon icon-first group4" id="first-page" title="' + e(t.localization.firstPage) + '"></li> <li class="icon icon-previous group4" id="prev-page" title="' + e(t.localization.previousPage) + '"></li> <li class="icon ' + (t.slideshowIcon || "icon-slideshow") + ' group4" id="slideshow" title="' + e(t.localization.slideshow) + '"></li> <li class="icon icon-next group4" id="next-page" title="' + e(t.localization.nextPage) + '"></li> <li class="icon icon-last group4" id="last-page" title="' + e(t.localization.lastPage) + '"></li> </ul> </li></ul>';
        return i
    }, FBPublication.JST["workspace-download-window"] = function(t) {
        var e = "undefined" != typeof _encodeHTML ? _encodeHTML : function(t) {
                var e = {
                        "&": "&#38;",
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "/": "&#47;"
                    },
                    i = t ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                return function(t) {
                    return t ? t.toString().replace(i, function(t) {
                        return e[t] || t
                    }) : ""
                }
            }(),
            i = '<div class="download-title-frame" data-title="' + e(t.localization.frameTitle) + '"> <h3 class="download-title">' + e(t.localization.text) + "</h3> ",
            n = t;
        if (n)
            for (var o, r = -1, s = n.length - 1; r < s;) o = n[r += 1], i += ' <label class="download-radio-label"> <input name="download-item" type="radio" data-url="' + (o.fileUrl || "") + '" data-filename="' + (o.fileName || "") + '" data-option="' + o.option + '" class="download-radio"> ' + e(t.localization[o.title] || "") + " (" + (o.fileType || ""), o.fileType && o.fileSize && (i += ", "), i += "" + (o.fileSize || "") + ")</label> ";
        if (i += " ", t.customFiles) {
            i += ' <label class="download-radio-label"> <input name="download-item" id="download-custom" type="radio" class="download-radio-custom"> ' + e(t.localization.customTitle) + ' <select name="download-custom" id="download-custom-select" class="download-custom" disabled="disabled"> ';
            var a = t.customFiles;
            if (a)
                for (var o, r = -1, l = a.length - 1; r < l;) o = a[r += 1], i += ' <option data-url="' + (o.fileUrl || "") + '" data-filename="' + (o.fileName || "") + '" data-option="' + (o.option || "") + '">' + (o.title || "") + " (" + (o.fileType || ""), o.fileType && o.fileSize && (i += ", "), i += "" + (o.fileSize || "") + ")</option> ";
            i += " </select> </label> "
        }
        return i += '</div><a id="download-btn" class="popup-button download-button" href="" target="_blank">' + e(t.localization.button) + "</a>"
    }, FBPublication.JST["workspace-print-window"] = function(t) {
        var e = "undefined" != typeof _encodeHTML ? _encodeHTML : function(t) {
                var e = {
                        "&": "&#38;",
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "/": "&#47;"
                    },
                    i = t ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                return function(t) {
                    return t ? t.toString().replace(i, function(t) {
                        return e[t] || t
                    }) : ""
                }
            }(),
            i = '<div class="print-title-frame"> <div class="title-frame master" data-title="' + e(t.localization.masterFrameTitle) + '"> <select class="print-options-list" id="print-opt"> ';
        return t.allPagesVisible && (i += ' <option value="all">' + e(t.localization.allPages) + "</option> "), i += " ", t.currentPagesVisible && (i += ' <option value="current">' + e(t.localization.currentPages) + "</option> "), i += " ", t.selectedPagesVisible && (i += ' <option value="custom">' + e(t.localization.selectedPages) + "</option> "), i += ' </select> <p class="pages-count-label">' + e(t.localization.pages) + ' <span id="pages-for-print"></span></p> <input type="text" class="print-page-inp" id="inp-pages"> </div> <div class="title-frame slave" data-title="' + e(t.localization.slaveFrameTitle) + '"> <span class="icon icon-left-arrow" id="to-left"></span> <div class="image-frame"> <div class="img-el" id="img-el"></div> </div> <span class="icon icon-right-arrow" id="to-right"></span> <p class="print-slider"><span id="curr-image"></span> / <span id="count-images"></span></p> </div></div><span class="popup-button print-button" id="print-btn">' + e(t.localization.button) + "</span>"
    }, FBPublication.JST["workspace-social-window"] = function(t) {
        var e = "undefined" != typeof _encodeHTML ? _encodeHTML : function(t) {
                var e = {
                        "&": "&#38;",
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "/": "&#47;"
                    },
                    i = t ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                return function(t) {
                    return t ? t.toString().replace(i, function(t) {
                        return e[t] || t
                    }) : ""
                }
            }(),
            i = '<div class="socialBody"> <div class="window-tabs-head ';
        return t.embedVisibility || (i += "disabled"), i += '"> <span id="share-button-tab" class="active">' + e(t.localization.shareTab) + '</span> <span id="embed-button-tab">' + e(t.localization.embedTab) + '</span> </div> <section class="window-tab active" id="share-tab"> <div class="qr" id="qr"></div> <div class="url-section"> <textarea class="url-container tip" id="share-url-container" readonly></textarea> <label for="current-page-checkbox" class="current-page-label"><input type="checkbox" id="current-page-checkbox" /> ' + e(t.localization.shareCurrent) + '</label> <span id="copy-button" class="popup-button social-button tip" data-clipboard-target="#share-url-container">' + e(t.localization.copyButton) + '</span> </div> <span class="text-block">' + e(t.localization.shareText) + '</span> <a class="social-link facebook-link" id="facebook-link" target="_blank" title="' + e(t.localization.facebookTitle) + '"></a> <a class="social-link twitter-link" id="twitter-link" target="_blank" title="' + e(t.localization.twitterTitle) + '"></a> <a class="social-link linkedin-link" id="linkedin-link" target="_blank" title="' + e(t.localization.linkedinTitle) + '"></a> <a class="social-link tumblr-link" id="tumblr-link" target="_blank" title="' + e(t.localization.tumblrTitle) + '"></a> <a class="social-link google-link" id="google-link" target="_blank" title="' + e(t.localization.googleTitle) + '"></a> <a class="social-link mail-link" id="mail-link" target="_blank" title="' + e(t.localization.mailTitle) + '"></a> <a class="social-link vk-link" id="vk-link" target="_blank" title="' + e(t.localization.vkTitle) + '"></a> </section> <section class="window-tab " id="embed-tab"> <label class="embed-label">' + e(t.localization.embedType) + ' <select id="embed-type-select"> <option value="1">' + e(t.localization.fullPublication) + '</option> <option value="2">' + e(t.localization.linkablePage) + '</option> </select> </label> <label class="embed-label" for="current-page-embed"><input type="checkbox" id="current-page-embed" /> ' + e(t.localization.embedCurrent) + '</label> <textarea id="embed-text" class="embed-text-area"></textarea> <div class="embed-size-frame" id="embed-size-frame"> <label for="embed-width">' + e(t.localization.width) + ': <input class="size-inp" type="text" value="640" id="embed-width" /></label> <label for="embed-height">' + e(t.localization.height) + ': <input class="size-inp" type="text" value="480" id="embed-height" /></label> </div> <span id="embed-copy-button" class="popup-button social-button embed-copy tip" data-clipboard-target="#embed-text">' + e(t.localization.copyButton) + "</span> </section></div>"
    }, FBPublication.JST["workspace-tool-window"] = function(t) {
        var e = "undefined" != typeof _encodeHTML ? _encodeHTML : function(t) {
                var e = {
                        "&": "&#38;",
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "/": "&#47;"
                    },
                    i = t ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                return function(t) {
                    return t ? t.toString().replace(i, function(t) {
                        return e[t] || t
                    }) : ""
                }
            }(),
            i = '<div class="tool-window" id="tool-window"> <div class="tool-title-frame"> <h3 class="tool-title icon icon-' + t.icon + '">' + e(t.title) + '</h3> <span class="icon icon-close" id="tool-left-window"></span> </div> <div class="scroller" id="scroller"> <div class="cont" id="content-scroller"> </div> </div></div>';
        return i
    }, FBPublication.JST["workspace-tooltip"] = function(t) {
        var e = "undefined" != typeof _encodeHTML ? _encodeHTML : function(t) {
                var e = {
                        "&": "&#38;",
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "/": "&#47;"
                    },
                    i = t ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                return function(t) {
                    return t ? t.toString().replace(i, function(t) {
                        return e[t] || t
                    }) : ""
                }
            }(),
            i = '<div class="arrow"></div><div class="tooltip-content"> ' + e(t.text) + "</div>";
        return i
    }, FBPublication.JST["workspace-top-bar"] = function(t) {
        var e = "undefined" != typeof _encodeHTML ? _encodeHTML : function(t) {
                var e = {
                        "&": "&#38;",
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "/": "&#47;"
                    },
                    i = t ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                return function(t) {
                    return t ? t.toString().replace(i, function(t) {
                        return e[t] || t
                    }) : ""
                }
            }(),
            i = '<span class="publication-title" id="publication-title">' + e(t.title) + '</span><span class="divider"></span><span class="pager" id="pager"> <span id="page-text">' + e(t.page || "page:") + '</span> <input type="text" id="pager-val"> <span id="pages-divider">/</span> <span class="pager-total" id="pages-count"></span></span><span class="space"></span><span class="copyright-button" id="copyright-button"> <a target="_blank" id="copyright-link"></a></span><span class="search-button" id="search-button"> <span class="icon icon-search icon-button"></span></span>';
        return i
    },
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/fb-utils"),
                o = require("fb-html5/common/frameworks/underscore")._,
                r = require("fb-html5/common/frameworks/hammer").Hammer,
                s = require("fb-html5/common/fb-locator").FBLocator,
                a = require("@flippingbook/fb-publication").PageResourceType,
                l = require("fb-html5/common/loaderd/base").LoaderEvent;
            t(global, exports, i, o, r, s, a, l, n)
        } else t(window, e, e.el, e._, e.Hammer, e.FBLocator, e.PageResourceType, e.LoaderEvent, e.fbUtils)
    }(function(t, e, i, n, o, r, s, a, l) {
        "use strict";

        function h(e, i, n, o, r, s, a) {
            this.visible = !1, this.numberOfRows = i, this.wrapper = n, this.pageNum = e, this.pager = o, this.thumbnailsObj = s, this.bodyContainer = a, this.leftWindowWidth = t.document.querySelector(".tool-title-frame").getBoundingClientRect().width, r = o.pageTable.getPageIndexById(r.leftPage || r.rightPage), this.thumbnailsObj.on("scroll", function() {
                this._changePos(!1)
            }, this), this._init(), this._initTH(), this._render(), r <= this.endIndex && r >= this.startIndex && this._renderPageContent(), this.thumbnailsObj.on("change:active", function() {
                this._changePos(!0)
            }, this)
        }
        h.prototype._init = function() {
            var t = 2 * this.numberOfRows * (this.pageNum - 1) - 1,
                e = 2 * this.numberOfRows * this.pageNum - 2;
            this.startIndex = t < 0 ? -1 : t, this.endIndex = e >= this.pager.pageTable.getPagesCount() ? this.pager.pageTable.getPagesCount() - 1 : e
        }, h.prototype._initTH = function() {
            this._renderItem(0, !0);
            try {
                var t = i.className("th-string th-template")[0],
                    e = t.getBoundingClientRect();
                this.thHeight = e.bottom - e.top
            } catch (n) {
                console.error("Can't find template. Defaulting thHeight to 43. \nError: " + n.name + n.message), this.thHeight = 43;
            } finally {
                i.del(t)
            }
        }, h.prototype._changePos = function(e) {
            e = e || !1;
            var i = this.pager.getState();
            i = this.pager.pageTable.getPageIndexById(i.leftPage || i.rightPage);
            var o = i >= this.startIndex && i <= this.endIndex;
            o && !e || !o && e || n.delay(n.bind(function() {
                var i = this.pageWrapper.getBoundingClientRect();
                this.visible ? e || (i.bottom < 0 || i.top > t.innerHeight) && this._clear() : (i.bottom > 0 && i.top < t.innerHeight || e) && this._renderPageContent()
            }, this), e ? 0 : 700)
        }, h.prototype._render = function() {
            this.pageWrapper = i.createElement("div", {
                id: "page" + this.pageNum,
                styles: {
                    height: this._getRowsHeight() + "px"
                }
            }, this.wrapper)
        }, h.prototype._renderPageContent = function() {
            for (var t = this.startIndex; t <= this.endIndex; t++) this._renderItem(t);
            this.visible = !0
        }, h.prototype._clear = function() {
            this.pageWrapper.innerHTML = "", this.visible = !1
        }, h.prototype._getRowsHeight = function() {
            for (var t, e, i, o = 0, r = this.startIndex; r <= this.endIndex; r++) t = this.pager.pageTable.getPageIdByIndex(r), n.isUndefined(t) || (e = this.pager.pageTable.getPageModel(t), i = e.getProperty("wide"), r % 2 !== 1 && 0 !== r || (o += 1 * e.getRect(this._getWrapperRect(e)).pageHeight.toFixed(0) + this.thHeight));
            return o
        }, h.prototype._getWrapperRect = function(t) {
            var e = t.getProperty("wide");
            return {
                width: e ? this.leftWindowWidth - 20 : (this.leftWindowWidth - 40) / 2,
                height: this.leftWindowWidth
            }
        }, h.prototype._renderItem = function(e, h) {
            var c = this,
                u = this.pager.pageTable.getPageIdByIndex(e);
            if (!n.isUndefined(u)) {
                var d, p, f, g = this.pager.pageTable.getPageModel(u),
                    m = g.getProperty("wide");
                if (!m || e % 2 !== 0) {
                    var v = h ? this.bodyContainer || t.document.body : this.pageWrapper;
                    e % 2 !== 1 && 0 !== e || (this.thString = i.createElement("div", {
                        "class": h ? "th-string th-template" : "th-string"
                    }, v)), this.pager.isRtl() && i.addClass(this.thString, "rtl"), d = i.createElement("div", {
                        "class": m ? "th-item-wrapper wide" : "th-item-wrapper"
                    }, this.thString);
                    var y = {};
                    if (h || (y = {
                            height: g.getRect(this._getWrapperRect(g)).pageHeight.toFixed(0) + "px",
                            "background-color": g.getProperty("backgroundColor")
                        }), p = i.createElement("div", {
                            "class": "th-img-element p" + u,
                            styles: y
                        }, d), !h) {
                        var b = r().get(r.LOAD_MANAGER),
                            w = b.getPageLoader(g.id, s.THUMBNAIL);
                        if (w) {
                            var P = function() {
                                ! function(t) {
                                    var e = l.fitScreenSizes(g.getProperty("width"), g.getProperty("height"), g.bookSize.width, g.bookSize.height);
                                    i.css(t, {
                                        "background-image": 'url("' + w.getLoadedData() + '")',
                                        "background-size": "FILL" === g.getProperty("pageResize") || Math.abs(e.paddingLeft) <= 1 && Math.abs(e.paddingTop) <= 1 ? "cover" : "contain"
                                    })
                                }(p)
                            };
                            w.isDataReady() ? P() : w.once(a.DATA_IS_READY, P)
                        }
                    }
                    o(p, {}).on("tap", function(t) {
                        c.thumbnailsObj.unsetActiveTHs(), c.pager.getState().zoomMode ? i.addClass(t.target.parentNode, "active") : i.addClass(t.target.parentNode.parentNode, "active"), c.thumbnailsObj.trigger("change:page", {
                            pageId: u,
                            target: "th"
                        })
                    }), f = i.createElement("span", {
                        "class": "th-item-title"
                    }, d), i.setText(f, this.pager.pageTable.getPageCaptionById(u))
                }
            }
        }, e.THPage = h
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/workspace/th-page-view.js"),
                o = require("fb-html5/common/frameworks/underscore")._,
                r = require("fb-html5/common/events").Events;
            t(global, exports, o, i, r, n)
        } else t(window, e, e._, e.el, e.Events, e.THPage)
    }(function(t, e, i, n, o, r) {
        "use strict";

        function s(t, e, i) {
            this.rootElement = t, this.bodyContainer = i, this.pager = e, this.thString = null, this.leftPage = void 0, this.rightPage = void 0, this.listenTo(this.pager, "change:state", this.setActiveTHs), this.listenTo(this.pager, "change:state", this._listenToPageChanges), this.render(), this._listenToPageChanges(this.pager.getState())
        }
        s.prototype = new o, s.prototype.constructor = s, s.prototype.render = function() {
            var t = 20,
                e = Math.ceil((this.pager.pageTable.getPagesCount() + 1) / (2 * t));
            this.thBody = n.createElement("div", {
                "class": "cont"
            }, this.rootElement);
            for (var i = 1; i <= e; i++) new r(i, t, this.thBody, this.pager, this.pager.getState(), this, this.bodyContainer);
            this.setActiveTHs(this.pager.getState()), this._updateScroll()
        }, s.prototype._updateScroll = function() {
            i.defer(i.bind(function() {
                this.trigger("change:height");
                var t = n.className("th-item-wrapper active", this.rootElement)[0] || n.className("th-string active", this.rootElement)[0];
                i.isUndefined(t) || (this.trigger("scroll:toElement", {
                    el: t,
                    speed: this.firstTimeScrolled ? 200 : 0
                }), this.firstTimeScrolled = !0)
            }, this))
        }, s.prototype._pagePropsChanged = function() {
            this.trigger("reloadRequested")
        }, s.prototype._listenToPageChanges = function(t) {
            t.leftPage ? (this.leftPage = t.leftPage, this.listenTo(this.pager.pageTable.getPageModel(this.leftPage).getPropertyModel(), "change:backgroundColor change:displayName", this._pagePropsChanged)) : this.leftPage = void 0, t.rightPage && t.rightPage !== t.leftPage ? (this.rightPage = t.rightPage, this.listenTo(this.pager.pageTable.getPageModel(this.rightPage).getPropertyModel(), "change:backgroundColor change:displayName", this._pagePropsChanged)) : this.rightPage = void 0
        }, s.prototype._stopListeningToPageChanges = function() {
            this.leftPage && this.stopListening(this.pager.pageTable.getPageModel(this.leftPage).getPropertyModel(), "change:backgroundColor change:displayName", this._pagePropsChanged), this.rightPage && this.rightPage !== this.leftPage && this.stopListening(this.pager.pageTable.getPageModel(this.rightPage).getPropertyModel(), "change:backgroundColor change:displayName", this._pagePropsChanged)
        }, s.prototype.unsetActiveTHs = function() {
            for (var t = this.rootElement.querySelectorAll(".active"), e = 0, i = t.length; e < i; e++) n.removeClass(t[e], "active");
            this._stopListeningToPageChanges()
        }, s.prototype.setActiveTHs = function(t, e, o, r) {
            if (i.isUndefined(r) || "th" !== r) {
                var s = this;
                this.trigger("change:active"), i.defer(function() {
                    s.unsetActiveTHs();
                    var e = i.isUndefined(t.leftPage) ? null : s.rootElement.querySelector(".p" + t.leftPage),
                        o = i.isUndefined(t.rightPage) ? null : s.rootElement.querySelector(".p" + t.rightPage),
                        r = 0,
                        a = null,
                        l = !1;
                    e && o ? (a = e.parentNode.parentNode, l = !0) : (e && (a = e.parentNode), o && (a = o.parentNode)), n.addClass(a, "active"), l || (a = a.parentNode), r = a.offsetTop - s.thBody.offsetTop, (r + a.offsetHeight > s.thBody.scrollTop + s.thBody.offsetHeight || r < s.thBody.scrollTop) && (s.thBody.scrollTop = r), s._updateScroll()
                })
            }
        }, s.prototype.destructor = function() {
            this._stopListeningToPageChanges(), this.stopListening(this.pager, "change:state", this.setActiveTHs), this.stopListening(this.pager, "change:state", this._listenToPageChanges)
        }, e.Thumbnails = s
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/common/events").Events,
                r = require("fb-html5/common/frameworks/hammer").Hammer,
                s = require("fb-html5/common/fb-utils");
            t(global, exports, n, i, o, r, s)
        } else t(window, e, e._, e.el, e.Events, e.Hammer, e.fbUtils)
    }(function(t, e, i, n, o, r, s) {
        "use strict";

        function a(t, e, n) {
            var o = function(t, e) {
                return e = e || 0, i.isUndefined(t) ? e : o(t.parent, e + 1)
            };
            this.id = "id" + h++, this.level = o(t), this.parent = t, this.title = e, this.page = n
        }

        function l(t, e, i, n) {
            this.rootElement = t, this.browser = n, this.toc = i, this.listenTo(this.toc, "change:children", this._tocChanged), this.pager = e, this.listenTo(this.pager, "change:state", this.scanTOCforCurrentPage), this.render()
        }
        var h = 0;
        a.prototype.push = function(t) {
            i.has(this, "children") || (this.children = []), this.children.push(t)
        }, l.prototype = new o, l.prototype.constructor = l, l.prototype.destructor = function() {
            this.stopListening(this.toc, "change:children", this._tocChanged), this.stopListening(this.pager, "change:state", this.scanTOCforCurrentPage)
        }, l.prototype._generateTOCStructure = function() {
            this.tocStructure = new a, this.dictionary = [];
            var t = this,
                e = function(t, i) {
                    return t.parent && (t.parent === i || e(t.parent, i))
                },
                i = function(n, o) {
                    for (var r in o)
                        if (o.hasOwnProperty(r)) {
                            var s = o[r],
                                l = new a(n, s.title, s.page);
                            n.push(l), t.dictionary.hasOwnProperty(l.page) ? e(l, t.dictionary[l.page]) && (t.dictionary[l.page] = l) : t.dictionary[l.page] = l, i(l, s.children)
                        }
                };
            i(this.tocStructure, this.toc.children)
        }, l.prototype._tocChanged = function() {
            this.render()
        }, l.prototype.render = function() {
            n.clear(this.rootElement);
            var t = this.toc;
            if (t.enabled !== !1 && t.children && t.children.length > 0) {
                var e = this;
                this._generateTOCStructure(), this.generateTOCSubLevel(this.tocStructure.children, this.rootElement, 0), this.scanTOCforCurrentPage(this.pager.getState()), this.setActiveCounter = 0, i.defer(function() {
                    e.trigger("change:height")
                })
            }
        }, l.prototype._goToPage = function(t, e) {
            this._setActiveElement(t, !1), this.trigger("change:page", {
                pageIndex: e.page - 1,
                target: "toc"
            })
        }, l.prototype._openChild = function(e, i, o, r) {
            if (e.querySelector(".toc-sub-item-ul") || this.generateTOCSubLevel(i.children, e, i.level), e.className.indexOf("opened") !== -1) {
                if (r) return;
                n.removeClass(e, "opened"), n.removeClass(o, "icon-down-arrow"), n.addClass(o, "icon-" + (t.RTL ? "left" : "right") + "-arrow")
            } else n.addClass(e, "opened"), n.removeClass(o, "icon-" + (t.RTL ? "left" : "right") + "-arrow"), n.addClass(o, "icon-down-arrow");
            this.trigger("change:height")
        }, l.prototype.generateTOCSubLevel = function(e, o, a) {
            var l = this,
                h = n.createElement("ul", {
                    "class": 0 === a ? "toc-item" : "toc-sub-item-ul"
                }, o);
            i.each(e, function(e) {
                var o = n.createElement("li", {
                        "class": "toc-item"
                    }, h),
                    c = {};
                c["padding-" + (t.RTL ? "right" : "left")] = a <= 2 ? 20 * a + "px" : "60px";
                var u = n.createElement("p", {
                        "class": "list-item toc-item-p p" + e.page + " " + e.id,
                        styles: c
                    }, o),
                    d = n.createElement("span", {
                        "class": "icon"
                    }, u),
                    p = n.createElement("span", {
                        "class": "toc-item-title",
                        styles: {
                            width: a <= 2 ? 214 - 20 * a + "px" : "154px"
                        }
                    }, u);
                n.setText(p, s.decodeEntities(e.title)), i.isEmpty(e.children) ? r(u, {}).on("tap", function() {
                    l._goToPage(u, e)
                }) : (n.addClass(d, "icon-" + (t.RTL ? "left" : "right") + "-arrow"), r(d).on("tap", function() {
                    l._openChild(o, e, d, !1)
                }), r(p, {}).on("tap", function() {
                    l._openChild(o, e, d, !0), l._goToPage(u, e)
                }))
            }, this)
        }, l.prototype.scanTOCforCurrentPage = function(t, e, n, o) {
            function r(t) {
                if (!i.isUndefined(t.page)) {
                    var e, n, o;
                    i.isUndefined(t.parent) || r(t.parent), o = a.rootElement.querySelector("." + t.id), o && (e = o.parentNode, n = o.querySelector(".icon"), i.isEmpty(t.children) || a._openChild(e, t, n, !0))
                }
            }

            function s(t) {
                "Internet Explorer" !== a.browser.name && r(t), a.rootElement.querySelector("." + t.id) && a._setActiveElement(a.rootElement.querySelector("." + t.id), !0)
            }
            var a = this;
            (i.isUndefined(o) || "toc" !== o) && i.defer(i.bind(function(t) {
                var e = i.isUndefined(t.rightPage) ? Number.MIN_SAFE_INTEGER : this.pager.pageTable.getPageIndexById(t.rightPage) + 1,
                    n = i.isUndefined(t.leftPage) ? Number.MIN_SAFE_INTEGER : this.pager.pageTable.getPageIndexById(t.leftPage) + 1;
                t.zoomMode || e !== n || e === Number.MIN_SAFE_INTEGER || e++;
                var o = Math.max(e, n),
                    r = !1;
                if (o !== Number.MIN_SAFE_INTEGER)
                    for (var l = o; l > 0; l--)
                        if (!i.isUndefined(this.dictionary[l])) {
                            s(this.dictionary[l]), r = !0;
                            break
                        }
                r || a._setActiveElement()
            }, this), t)
        }, l.prototype._setActiveElement = function(t, e) {
            for (var o = this, r = this.rootElement.querySelectorAll(".active"), s = !1, a = 0, l = r.length; a < l; a++) t === r[a] ? s = !0 : n.removeClass(r[a], "active");
            !s && t && (this.setActiveCounter++, i.defer(function() {
                o.setActiveCounter--, 0 === o.setActiveCounter && (n.addClass(t, "active"), e && o._updateScroll())
            }))
        }, l.prototype._updateScroll = function() {
            i.defer(i.bind(function() {
                var t = n.className("toc-item-p active", this.rootElement)[0];
                i.isUndefined(t) || (this.trigger("scroll:toElement", {
                    el: t,
                    speed: this.firstTimeScrolled ? 200 : 0
                }), this.firstTimeScrolled = !0)
            }, this))
        }, e.TOC = l
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/events").Events,
                o = require("fb-html5/common/fb-utils"),
                r = require("fb-html5/common/frameworks/hammer").Hammer,
                s = require("fb-html5/common/frameworks/iscroll").IScroll,
                a = require("fb-html5/common/frameworks/underscore")._;
            t(global, exports, i, n, o, r, s, a)
        } else t(window, e, e.el, e.Events, e.fbUtils, e.Hammer, e.IScroll, e._)
    }(function(t, e, i, n, o, r, s, a) {
        "use strict";

        function l(t, e, n, o, r, s) {
            this.options = {
                position: "left"
            }, a.extend(this.options, r), this.container = o || i.tag("body"), this.renderWindow(t.iconName, t.title), e && (this.content = new e(i.id("content-scroller"), n, t.data, s), this.content.on("change:page", function(t) {
                this.trigger("change:page", t)
            }, this), this.content.on("change:height", function() {
                this.scrollObj.refresh()
            }, this), this.content.on("scroll:toElement", function(t) {
                a.isUndefined(t.el) || this.scrollObj.scrollToElement(t.el, t.speed, !0, !0)
            }, this), this.content.on("reloadRequested", function() {
                this.trigger("toolWindow:reload")
            }, this)), this.currentDOMElement = i.id("tool-window"), "left" !== this.getPosition() && i.addClass(this.currentDOMElement, this.getPosition())
        }
        l.prototype = new n, l.prototype.constructor = l, l.prototype.renderWindow = function(e, r) {
            var a = this;
            o.renderTemplate(this.container, t.FBPublication.JST["workspace-tool-window"], {
                icon: e,
                title: r
            }), this.bindDOM(), this.scrollObj = new s(i.id("scroller"), {
                mouseWheel: !0,
                scrollbars: !0,
                fadeScrollbars: !0,
                interactiveScrollbars: !0
            }), this.scrollObj.on("scroll", function() {
                a.content instanceof n && a.content.trigger("scroll")
            })
        }, l.prototype.bindDOM = function() {
            var t = new r(i.id("tool-left-window"), {}),
                e = this;
            t.on("tap", function() {
                e.trigger("toolWindow:close")
            })
        }, l.prototype.removeWindow = function() {
            i.del(this.currentDOMElement), this.currentDOMElement = null, a.isObject(this.content) && a.isFunction(this.content.destructor) && this.content.destructor()
        }, l.prototype.getPosition = function() {
            return this.options.position
        }, e.ToolWindow = l
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/workspace/paginator").Paginator,
                o = require("fb-html5/common/frameworks/underscore")._,
                r = require("fb-html/common/events").Events,
                s = require("fb-html/common/frameworks/hammer").Hammer,
                a = require("fb-html5/common/fb-utils"),
                l = require("fb-html5/common/fb-locator").FBLocator;
            t(global, exports, i, n, o, r, s, a, l)
        } else t(window, e, e.el, e.Paginator, e._, e.Events, e.Hammer, e.fbUtils, e.FBLocator)
    }(function(t, e, i, n, o, r, s, a, l) {
        "use strict";

        function h(t, e, n) {
            this._container = i.createElement("div", {
                id: "top",
                "class": "top-toolbar"
            }, t, "top"), this._properties = n, this._properties.cast("components.paginator"), this._pager = e, this._render();
            var o = this,
                r = function(t) {
                    i.removeClass(o._container, "hidden"), t || i.addClass(o._container, "hidden")
                };
            this._properties.on("change:components.topBar", function(t) {
                r(t)
            }), r(this._properties.components.topBar), this.title = i.id("publication-title"), this._properties.on("change:title", function(t) {
                i.setText(this.title, a.decodeEntities(t)), this._validateDividerVisibility()
            }, this), this._properties.components.paginator.onAndChange("change:enabled", function(t) {
                this._validateDividerVisibility();
                var e = i.className("pager", this._container);
                if (e.length > 0) {
                    var n = e[0];
                    t ? i.removeClass(n, "hidden-component") : i.addClass(n, "hidden-component")
                }
            }, this)
        }
        h.prototype = new r, h.prototype.constructor = h, h.prototype.getLocaleProvider = function() {
            return l().get("locale")
        }, h.prototype._validateDividerVisibility = function() {
            var t = i.className("divider", this._container),
                e = t && t.length > 0 ? t[0] : null;
            o.isNull(e) || (i.removeClass(e, "hidden-component"), !o.isEmpty(this._properties.title) && this._properties.components.paginator.enabled || i.addClass(e, "hidden-component"))
        }, h.prototype._render = function() {
            var e = this;
            this._container.innerHTML = t.FBPublication.JST["workspace-top-bar"]({
                title: a.decodeEntities(this._properties.title)
            });
            var o = i.id("page-text");
            this.getLocaleProvider().onAndChange("change:TopMenu.PAGES_LABEL", function() {
                i.setText(o, e.getLocaleProvider().get("TopMenu.PAGES_LABEL"))
            }), new n(this._pager, this._properties.components.paginator), this._renderSearchButton(), this._renderCopyrightButton()
        }, h.prototype._renderSearchButton = function() {
            var t = this;
            this._searchButton = i.id("search-button"), new s(this._searchButton, {}).on("tap", function() {
                t.trigger("search:request")
            }), this.searchButtonVisible = !0;
            var e = function() {
                t.searchButtonVisible && t._properties.search && t._properties.search.enabled ? i.removeClass(t._searchButton, "hidden-component") : i.addClass(t._searchButton, "hidden-component")
            };
            this.on("change:searchButtonVisible", e), this._properties.on("change:search", e), e()
        }, h.prototype._renderCopyrightButton = function() {
            var t = this,
                e = i.id("copyright-button"),
                n = i.id("copyright-link");
            this._properties.cast("components.copyright");
            var o = this._properties.components.copyright;
            o.onAndChange("change:enabled", function(t) {
                i.removeClass(e, "hidden-component"), t || i.addClass(e, "hidden-component")
            }), o.onAndChange("change:url change:label", function() {
                var e = o.url,
                    r = a.decodeEntities(o.label);
                n.href = e || "#", i.setText(n, r || ""), n.title = e ? t.getLocaleProvider().get("TopMenu.EXTERNAL_LINK_TIP", {
                    0: e
                }) : r || ""
            }), this.getLocaleProvider().onAndChange("change:TopMenu.EXTERNAL_LINK_TIP", function() {
                o.url && (n.title = t.getLocaleProvider().get("TopMenu.EXTERNAL_LINK_TIP", {
                    0: o.url
                }))
            }), o.onAndChange("change:target", function(t) {
                n.target = t || "_blank"
            })
        }, e.TopBar = h
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/common/frameworks/hammer").Hammer;
            t(global, exports, n, i, o)
        } else t(window, e, e._, e.el, e.Hammer)
    }(function(t, e, i, n, o) {
        "use strict";

        function r(t, e, i) {
            this.container = t, this.bookModel = e, this.pager = i, this.hidden = !1, this.pager.on("change:state", function(t, e) {
                t.zoomMode !== e.zoomMode && (t.zoomMode ? this.hidden || (this.zoomPanel = this.bindZoomPanel()) : this.zoomPanel && (n.del(this.zoomPanel), this.zoomPanel = null))
            }, this), this.pager.getState().zoomMode && (this.zoomPanel = this.bindZoomPanel())
        }
        r.prototype.bindZoomPanel = function() {
            var e = this,
                i = n.createElement("div", {
                    id: "zoom-panel",
                    "class": "zoom-panel"
                }, this.container),
                r = n.createElement("span", {
                    "class": "zoom-panel-caption"
                }, i);
            n.setText(r, "–");
            var s = n.createElement("div", {
                    "class": "zoom-panel-line"
                }, i),
                a = {};
            a[t.RTL ? "right" : "left"] = (77 * this.bookModel.zoomScaleValue).toFixed(0) - 4 + "px";
            var l = n.createElement("div", {
                id: "zoom-slider",
                "class": "zoom-panel-slider",
                styles: a
            }, s);
            ! function(i) {
                e.bookModel.on("change:zoomScaleValue", function(e) {
                    i && (i.style[t.RTL ? "right" : "left"] = (77 * e).toFixed(0) - 4 + "px")
                })
            }(l);
            var h = n.createElement("span", {
                "class": "zoom-panel-caption"
            }, i);
            n.setText(h, "+");
            var l = new o(l, {}),
                c = new o(s, {}),
                u = new o(h, {}),
                d = new o(r, {}),
                p = s.getBoundingClientRect(),
                f = t.RTL ? Math.abs(p.right - p.left) : Math.abs(p.left - p.right),
                g = function(i) {
                    var n = t.RTL ? -Math.round(i.center.x - p.right) : Math.round(i.center.x - p.left);
                    n < 0 || n > f || e.changeFlipBookZoomValue(n / f)
                };
            return l.on("pan", g), c.on("tap", g), u.on("tap", function() {
                var t = e.bookModel.zoomScaleValue + .1;
                t = t < 0 ? 0 : t > 1 ? 1 : t, e.changeFlipBookZoomValue(t)
            }), d.on("tap", function() {
                var t = e.bookModel.zoomScaleValue - .1;
                t = t < 0 ? 0 : t > 1 ? 1 : t, e.changeFlipBookZoomValue(t)
            }), i
        }, r.prototype.changeFlipBookZoomValue = function(t) {
            this.bookModel.set("zoomScaleValue", t)
        }, e.ZoomPanel = r
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/mini-framework"),
                n = require("fb-html5/common/frameworks/underscore")._,
                o = require("fb-html5/common/events").Events,
                r = require("fb-html5/workspace/search/top-bar").TopBar,
                s = require("fb-html5/workspace/popup").Popup,
                a = require("fb-html5/workspace/zoom-panel").ZoomPanel,
                l = require("fb-html5/workspace/sound").Sound,
                h = require("fb-html5/workspace/tool-window").ToolWindow,
                c = require("fb-html5/workspace/th-window").Thumbnails,
                u = require("fb-html5/workspace/toc-window").TOC,
                d = require("fb-html5/workspace/search/search-window").SearchWindow,
                p = require("fb-html5/workspace/bottom-menu").BottomMenu,
                f = require("fb-html5/workspace/logo").Logo,
                g = require("fb-html5/workspace/print").Print,
                m = require("fb-html5/workspace/tooltip").TooltipManager,
                v = require("fb-html5/common/frameworks/hammer").Hammer,
                y = require("fb-html5/book/book-model").BookModel,
                b = require("fb-html5/book/book-presenter").BookPresenter,
                w = require("fb-html5/common/libs/lightbox").Lightbox,
                P = require("fb-html5/common/fb-locator").FBLocator,
                _ = require("fb-html5/common/fb-utils");
            t(global, exports, n, i, o, r, s, a, l, h, c, u, d, p, g, m, f, v, y, b, w, P, _)
        } else t(window, e, e._, e.el, e.Events, e.TopBar, e.Popup, e.ZoomPanel, e.Sound, e.ToolWindow, e.Thumbnails, e.TOC, e.SearchWindow, e.BottomMenu, e.Print, e.TooltipManager, e.Logo, e.Hammer, e.BookModel, e.BookPresenter, e.Lightbox, e.FBLocator, e.fbUtils)
    }(function(t, e, i, n, o, r, s, a, l, h, c, u, d, p, f, g, m, v, y, b, w, P, _) {
        "use strict";

        function x(t) {
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : t.msRequestFullscreen && t.msRequestFullscreen()
        }

        function T() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }

        function C(e, o, s, h, c, u) {
            this.pager = e, this.slideshow = !1, this.fullscreen = !1, this.browser = u, this.miniMode = !1, this.toolWindow = "none", this._toolWindowObj = null, this.currentPopup = "none", this._currentPopupObj = null, this.properties = h, this.pagesProps = s, this.workspaceContainer = o, this.flipbookContainer = n.createElement("div", {
                "class": "flipbook-container",
                id: "flipbook-container"
            }, this.workspaceContainer), this.bodyContainer = c, w().setRootContainer(c), this.bookModel = new y(this.pagesProps, this.properties, this.pager, this.browser), this.printer = new f(this.pager, this.bodyContainer), this.properties.cast("sound"), this.sound = new l(this.properties.sound, this.pager, this.bodyContainer), this.bottomMenu = new p(this.workspaceContainer, this.pager, this.properties, this.sound), this._initBottomMenuButtons();
            var d = this;
            this._initSearch(), this.topBar = new r(this.workspaceContainer, this.pager, this.properties), this.topBar.on("search:request", function() {
                d.set("toolWindow", "search")
            }), this.zoomPanel = new a(this.flipbookContainer, this.bookModel, this.pager), i.has(this.properties, "logoLink") && (this.logo = new m(this.workspaceContainer, this.properties, this.bottomMenu.getRootElement(), this.flipbookContainer)), this.on("change:fullscreen", this.toggleFullscreen, this), t.addEventListener("fullscreenchange", function() {
                d.fullscreenCheck.call(d)
            }), t.addEventListener("webkitfullscreenchange", function() {
                d.fullscreenCheck.call(d)
            }), t.addEventListener("mozfullscreenchange", function() {
                d.fullscreenCheck.call(d)
            }), this.on("change:toolWindow", this._onToolWindowChanged, this), this.properties.on("change:defaultToolWindow", function(t) {
                this.miniMode || this.set("toolWindow", t)
            }, this), this.on("change:currentPopup", this._onCurrentPopupChanged, this), this._bindProperties(), g().init(this.bodyContainer), this.bookPresenter = new b(this.bookModel).init(this.flipbookContainer), this.onResizeFlipbookContainer = function() {
                d.flipbookContainerResized = !0, d.bookPresenter.resize(d.flipbookContainer.getBoundingClientRect())
            }, t.addResizeListener(this.flipbookContainer, this.onResizeFlipbookContainer), i.defer(function() {
                d.flipbookContainerResized !== !0 && d.onResizeFlipbookContainer()
            }), this.pager.on("change:state", this._sendStateAnalytics, this), this.pager.on("goToLastPage", function() {
                d.getAnalyticsProvider().trigger("goToLastPage")
            }), this.pager.on("goToFirstPage", function() {
                d.getAnalyticsProvider().trigger("goToFirstPage")
            }), this.pager.on("change:slideshow", function(t) {
                t ? d.getAnalyticsProvider().trigger("slideshow", {
                    action: "Start"
                }) : d.getAnalyticsProvider().trigger("slideshow", {
                    action: "Stop"
                })
            }), this._sendStateAnalytics(), this.pagesProps.on("change:rightToLeft change:numerationOffset", function() {
                "thumbnails" === this.toolWindow && (this.set("toolWindow", "none"), this.set("toolWindow", "thumbnails")), "search" === this.toolWindow && (this.set("toolWindow", "none"), this.set("toolWindow", "search"))
            }, this);
            var v = function(t) {
                    if ("body" === t.target.tagName.toLowerCase() || i.isNull(t.target) || i.isUndefined(t.target)) {
                        var e, n;
                        if (d.pagesProps.rightToLeft ? (n = 39, e = 37) : (n = 37, e = 39), "none" === d.currentPopup) switch (t.keyCode) {
                            case n:
                                d.pager.goBackward(), t.preventDefault();
                                break;
                            case e:
                                d.pager.goForward(), t.preventDefault()
                        }
                    }
                },
                P = i.throttle(v, 500, {
                    leading: !0
                }),
                x = function() {
                    d.pager.getState().zoomMode ? t.addEventListener("keydown", P) : t.addEventListener("keydown", v)
                },
                T = function() {
                    d.pager.getState().zoomMode ? t.removeEventListener("keydown", v) : t.removeEventListener("keydown", P)
                };
            if (x(), this.listenTo(this.pager, "change:state", function(t, e) {
                    t.zoomMode !== e.zoomMode && (T(), x())
                }), !this.miniMode)
                if (i.isUndefined(this.properties.defaultToolWindow)) {
                    var C = _.parseQuery();
                    C.search && C.search.length && (this.searchProvider.set("query", C.search), this.set("toolWindow", "search"))
                } else switch (this.properties.defaultToolWindow) {
                    case "toc":
                        this.set("toolWindow", "toc");
                        break;
                    case "thumbnails":
                        this.set("toolWindow", "thumbnails");
                        break;
                    case "search":
                        this.set("toolWindow", "search");
                        break;
                    default:
                        this.set("toolWindow", "none")
                }
                this._initMiniMode()
        }
        C.prototype = new o, C.prototype.constructor = C, C.prototype.destructor = function() {
            t.removeResizeListener(this.flipbookContainer, this.onResizeFlipbookContainer), t.removeResizeListener(this.bodyContainer, this.onResizeBodyContainer)
        }, C.prototype.getAnalyticsProvider = function() {
            return P().get("analytics")
        }, C.prototype.getLocaleProvider = function() {
            return P().get("locale")
        }, C.prototype.updateMenuClasses = function(t) {
            var e = this.workspaceContainer;
            n.removeClass(e, "opaqueTop"), n.removeClass(e, "opaqueBottom"), n.removeClass(e, "justifyBottom");
            var o = t.split(" ");
            i.each(o, function(t) {
                n.addClass(e, t)
            }), this.logo && this.logo.updateMenuClasses(o)
        }, C.prototype._initBottomMenuButtons = function() {
            var t = this;
            this.bottomMenu.on("tap:fullscreen", function() {
                t.set("fullscreen", !t.fullscreen)
            }), this.bottomMenu.on("tap:download", function() {
                t.set("currentPopup", "download")
            }), this.bottomMenu.on("tap:social", function() {
                t.set("currentPopup", "social")
            }), this.bottomMenu.on("tap:print", function() {
                t.set("currentPopup", "print")
            }), this.bottomMenu.on("tap:toc", function() {
                "toc" === t.toolWindow ? t.set("toolWindow", "none") : t.set("toolWindow", "toc")
            }), this.bottomMenu.on("tap:thumbnails", function() {
                "thumbnails" === t.toolWindow ? t.set("toolWindow", "none") : t.set("toolWindow", "thumbnails")
            }), this.bottomMenu.on("tap:sound", function() {
                t.sound.set("muted", !t.sound.muted)
            }), this.sound.on("change:muted", function(e) {
                t.getAnalyticsProvider().trigger("sound", {
                    action: e ? "Off" : "On"
                }), t.bottomMenu.toggleSound(e)
            }), this.bookModel.on("change:textSelectionMode", function(e) {
                t.bottomMenu.toogleTextSelectionMode(e)
            })
        }, C.prototype._sendStateAnalytics = function(t, e) {
            var i, n, o, r, s, a, l = t || this.pager.state;
            e && l.zoomMode !== e.zoomMode && (i = l.zoomMode ? l.leftPage : e.leftPage, n = l.zoomMode ? "Zoom In" : "Zoom Out", o = "" + (this.pager.pageTable.getPageIndexById(i) + 1), this.getAnalyticsProvider().trigger("zoom", {
                action: n,
                pageNumber: o
            })), r = l.leftPage || l.rightPage, s = "" + (this.pager.pageTable.getPageIndexById(r) + 1), a = this.pager.pageTable.isFirstPage(r) || this.pager.pageTable.isLastPage(r) ? void 0 : "" + (this.pager.pageTable.getPageIndexById(l.rightPage) + 1), l.zoomMode ? this.getAnalyticsProvider().trigger("page", {
                action: "openInSlide",
                pageNumber: s
            }) : this.getAnalyticsProvider().trigger("page", {
                action: "openInSpread",
                pageNumberLeft: s,
                pageNumberRight: a
            })
        }, C.prototype._bindProperties = function() {
            var t = this;
            this.properties.on("change:components.thumbnails", function(e) {
                e || "thumbnails" !== t.toolWindow || t.set("toolWindow", "none")
            }), this.properties.on("change:search", function(e) {
                i.isEmpty(e) && "search" === t.toolWindow && t.set("toolWindow", "none")
            }), this.properties.on("change:downloads", function(e) {
                !i.isUndefined(e) && !i.isNull(e) && i.has(e, "enabled") && e.enabled && "download" === t.currentPopup ? t._currentPopupObj.updateWindow(t.properties.downloads) : "download" === t.currentPopup && t._currentPopupObj.close()
            }), this.properties.on("change:components.share", function(t) {}), this.getLocaleProvider().on("change:SearchToolWindow", function() {
                t.reloadToolWindow("search")
            }), this.getLocaleProvider().on("change:TOCToolWindow", function() {
                t.reloadToolWindow("toc")
            }), this.getLocaleProvider().on("change:ThumbnailsToolWindow", function() {
                t.reloadToolWindow("thumbnails")
            })
        }, C.prototype._onToolWindowChanged = function(t, e) {
            if ("search" === e && "search" !== t && this.bookModel.setSearchQuery(""), "none" !== e) {
                if (this._toolWindowObj) {
                    this._toolWindowObj.removeWindow(), this._toolWindowObj = void 0;
                    var n = {
                        toc: "TOC",
                        search: "Search",
                        thumbnails: "Thumbnails"
                    };
                    this.getAnalyticsProvider().trigger("window", {
                        action: "Close",
                        component: n[e]
                    })
                }
                this.topBar.set("searchButtonVisible", !0)
            }
            if ("toc" === t) this.properties.cast("toc"), this._toolWindowObj = new h({
                iconName: "toc",
                title: this.getLocaleProvider().get("TOCToolWindow.TITLE"),
                data: this.properties.toc
            }, u, this.pager, this.bodyContainer, {}, this.browser), this.getAnalyticsProvider().trigger("window", {
                action: "Open",
                component: "TOC"
            });
            else if ("thumbnails" === t) this._toolWindowObj = new h({
                iconName: "thumbnails",
                title: this.getLocaleProvider().get("ThumbnailsToolWindow.TITLE"),
                data: this.bodyContainer
            }, c, this.pager, this.bodyContainer), this.getAnalyticsProvider().trigger("window", {
                action: "Open",
                component: "Thumbnails"
            });
            else {
                if ("search" !== t) return void this._resize();
                this._toolWindowObj = new h({
                    iconName: "search",
                    title: this.getLocaleProvider().get("SearchToolWindow.TITLE"),
                    data: this.searchProvider
                }, d, this.pager, this.bodyContainer, {
                    position: "right"
                }), this.getAnalyticsProvider().trigger("window", {
                    action: "Open",
                    component: "Search"
                }), this.topBar.set("searchButtonVisible", !1), this.searchProvider.isQueryValid() && this.bookModel.setSearchQuery(this.searchProvider.query)
            }
            this._resize(), this._toolWindowObj.on("change:page", function(t) {
                var e = i.has(t, "target") ? t.target : null;
                i.isUndefined(t.pageId) ? i.isUndefined(t.pageIndex) || this.pager.goToPageByIndex(t.pageIndex, e) : this.pager.goToPageById(t.pageId, e)
            }, this), this._toolWindowObj.once("toolWindow:close", function() {
                this.set("toolWindow", "none")
            }, this), this._toolWindowObj.once("toolWindow:reload", this.reloadToolWindow, this)
        }, C.prototype.reloadToolWindow = function(t) {
            if (!t || t && this.toolWindow === t) {
                var e = this.toolWindow;
                this.set("toolWindow", "none"), this.set("toolWindow", e)
            }
        }, C.prototype._onCurrentPopupChanged = function(t, e) {
            if ("none" !== e) {
                var i = {
                    download: "Download",
                    social: "Share",
                    print: "Print"
                };
                this.getAnalyticsProvider().trigger("window", {
                    action: "Close",
                    component: i[e]
                })
            }
            if ("download" === t) this._currentPopupObj = new s({
                iconName: "download",
                title: this.getLocaleProvider().get("SaveWindow.TITLE"),
                content: "DownloadWindow",
                data: this.properties.downloads
            }, this.bodyContainer, this.pager), this.getAnalyticsProvider().trigger("window", {
                action: "Open",
                component: "Download"
            });
            else if ("social" === t) this._currentPopupObj = new s({
                iconName: "social",
                title: this.getLocaleProvider().get("PermanentLinkBar.TITLE"),
                content: "SocialWindow",
                data: this.properties
            }, this.bodyContainer, this.pager), this.getAnalyticsProvider().trigger("window", {
                action: "Open",
                component: "Share"
            });
            else {
                if ("print" !== t) return;
                this._currentPopupObj = new s({
                    iconName: "print",
                    title: this.getLocaleProvider().get("PrintWindow.TITLE"),
                    content: "PrintWindow",
                    data: this.properties
                }, this.bodyContainer, this.pager, this.printer), this.getAnalyticsProvider().trigger("window", {
                    action: "Open",
                    component: "Print"
                })
            }
            this._currentPopupObj.once("popup:close", function() {
                this.set("currentPopup", "none"), this.set("_currentPopupObj", null)
            }, this)
        }, C.prototype.fullscreenCheck = function() {
            t.document.fullScreen || t.document.mozFullScreen || t.document.webkitIsFullScreen ? this.set("fullscreen", !0) : this.set("fullscreen", !1)
        }, C.prototype.toggleFullscreen = function(t) {
            t ? (x(this.bodyContainer), this.getAnalyticsProvider().trigger("fullscreen", {
                action: "On"
            })) : (T(), this.getAnalyticsProvider().trigger("fullscreen", {
                action: "Off"
            })), this.bottomMenu.toggleFullscreen(t)
        }, C.prototype._resize = function() {
            this.logo && this.logo.resetLogoPosition()
        }, C.prototype.getState = function() {
            return {
                toolWindow: this.toolWindow,
                popup: this.currentPopup,
                isFullscreen: this.fullscreen,
                searchQuery: this.searchProvider.query
            }
        }, C.prototype._initSearch = function() {
            var t = this;
            this.searchProvider = P().get(P.SEARCH_PROVIDER), this.searchProvider.on("change:query", function(e) {
                t.searchProvider.isQueryValid() ? t.bookModel.setSearchQuery(e) : t.bookModel.setSearchQuery("")
            })
        }, C.prototype._initMiniMode = function() {
            var e = this,
                o = n.createElement("div", {
                    "class": "clickToRead"
                }, this.bodyContainer);
            this.getLocaleProvider().onAndChange("change:Other.CLICK_TO_READ", function() {
                n.setText(o, this.getLocaleProvider().get("Other.CLICK_TO_READ"))
            }, this), new v(o, {}).on("tap", function() {
                e.set("fullscreen", !0)
            }), this.onResizeBodyContainer = function() {
                e.bodyContainerResized = !0;
                var t = e.bodyContainer.getBoundingClientRect();
                t.width <= 550 || t.height <= 300 ? (e.zoomPanel.hidden = !0, e.miniMode = !0, n.addClass(e.bodyContainer, "mini"), e._currentPopupObj && e._currentPopupObj.close(), e.set("toolWindow", "none"), e.zoomPanel.zoomPanel && (n.del(e.zoomPanel.zoomPanel), e.zoomPanel.zoomPanel = null)) : (n.removeClass(e.bodyContainer, "mini"), e.zoomPanel.hidden = !1, e.miniMode = !1, e.pager.getState().zoomMode && (e.zoomPanel.zoomPanel || (e.zoomPanel.zoomPanel = e.zoomPanel.bindZoomPanel())))
            }, t.addResizeListener(this.bodyContainer, this.onResizeBodyContainer), i.defer(function() {
                e.bodyContainerResized !== !0 && e.onResizeBodyContainer()
            }), this.bookPresenter.on("onPageChanging onStartDrag", function() {
                n.addClass(o, "turning")
            }), this.bookPresenter.on("onPageChanged onEndDrag", function() {
                n.removeClass(o, "turning")
            })
        }, C.prototype.onReady = function() {
            this.bookModel.set("isReady", !0)
        }, e.Workspace = C
    }, this.FBPublication || {}),
    function(t, e) {
        "use strict";
        if ("undefined" != typeof exports) {
            var i = require("fb-html5/common/events").Events,
                n = require("fb-html5/common/property").Property,
                o = require("fb-html5/common/fb-utils"),
                r = require("fb-html5/common/pager").Pager,
                s = require("fb-html5/workspace/workspace").Workspace,
                a = require("fb-html5/workspace/search/local-search-provider").LocalSearchProvider,
                l = require("fb-html5/common/mini-framework"),
                h = require("fb-html5/common/frameworks/underscore")._,
                c = require("fb-html5/common/fb-router").FBRouter,
                u = require("@flippingbook/fb-publication").LocalHashAdapter,
                d = require("fb-html5/common/analytics").Analytics,
                p = require("fb-html5/common/fb-locator").FBLocator,
                f = require("fb-html5/workspace/fb-l10n").FBL10n,
                g = require("fb-html5/common/loaders/load-manager").LoadManager,
                m = require("@flippingbook/fb-publication").ResourceStateProvider,
                v = require("fb-html5/jsons/workspace.json"),
                y = require("fb-html5/jsons/pager.json"),
                b = require("fb-html5/common/loaders/progressive-loader").ProgressiveLoader;
            t(global, exports, i, o, r, s, a, l, n, h, c, u, d, p, f, v, y, g, m, b)
        } else t(window, e, e.Events, e.fbUtils, e.Pager, e.Workspace, e.LocalSearchProvider, e.el, e.Property, e._, e.FBRouter, e.LocalHashAdapter, e.Analytics, e.FBLocator, e.FBL10n, e.WORKSPACE, e.PAGER, e.LoadManager, e.ResourceStateProvider, e.ProgressiveLoader)
    }(function(t, e, i, n, o, r, s, a, l, h, c, u, d, p, f, g, m, v, y, b) {
        "use strict";

        function w(t, e) {
            e = e || {}, this.extensions = e.extensions, this.userAgentInfo = e.userAgentInfo, this.services = e.services || {}, this.isStarted = !1, h.isObject(t) ? this.container = t : this.container = a.tag("body"), p().set("analytics", new d(e.analytics)), this.workspaceProps = null, this.pagesProps = null, this.isLocaleLoaded = !1, this.isCssLoaded = !1, this.skinConfig = null, this.isSkinConfigInited = !1, this.on("change:workspaceProps change:pagesProps change:skinConfig change:isLocaleLoaded change:isSkinConfigInited", this.tryToStart, this), this.on("change:workspaceProps", this.loadLocale, this), c().setAdapter(e.adapter || new u({
                mappings: {
                    "skins/current": "build/skins/default",
                    "static/html/": "build/"
                }
            })), this.routerEnabled = !0, this.loadProperties()
        }
        w.prototype = new i, w.prototype.constructor = w, w.prototype.isLoaded = function() {
            return h.isObject(this.workspaceProps) && h.isObject(this.pagesProps) && this.isCssLoaded && this.isLocaleLoaded && h.isObject(this.skinConfig) && this.isSkinConfigInited
        }, w.prototype.tryToStart = function() {
            if (this.isLoaded()) {
                var t = this.container.getBoundingClientRect();
                if (0 === t.width || 0 === t.height) return this.destructor(), void this.trigger("error", "the publication is not in DOM");
                this.start(), this._unsubscribeFromLoaders()
            }
        }, w.prototype.setDefaultLogic = function() {
            var t = {};
            this.workspaceProps.search && this.workspaceProps.search.searchCharactersLimit && (t.searchCharactersLimit = this.workspaceProps.search.searchCharactersLimit), p().set(p.SEARCH_PROVIDER, this.services[p.SEARCH_PROVIDER] || new s(t, this.pager.pageTable));
            var e = this.services.resourceProvider || new y;
            p().set(p.LOAD_MANAGER, new v(this.pager.pageTable, e, b, 2))
        }, w.prototype.loadProperties = function() {
            var t = this;
            n.loadJSON(c().translatePath("assets/html/workspace.json"), function(e) {
                var i = h.isObject(t.extensions) && h.isObject(t.extensions.workspaceProps) ? n.deepExtend(e, t.extensions.workspaceProps) : e;
                t.set("workspaceProps", new l(i, g), !0)
            }), n.loadJSON(c().translatePath("assets/common/pager.json"), function(e) {
                var i = h.isObject(t.extensions) && h.isObject(t.extensions.pagesProps) ? n.deepExtend(e, t.extensions.pagesProps) : e;
                t.set("pagesProps", new l(i, m), !0)
            })
        }, w.prototype.loadCss = function() {
            if (this.direction !== t.RTL) {
                var e = this,
                    i = "buildCss";
                n.loadCSS(c().translatePath("static/html/styles/css/build" + (t.RTL ? ".rtl" : "") + ".css"), function() {
                    e._registerStyleTagForDestructor(i), e.loadSkin(), e.set("isCssLoaded", !0, !0), e.set("direction", t.RTL, !0)
                }, i)
            }
        }, w.prototype.loadSkin = function() {
            var e = this,
                i = "skinCss";
            n.loadCSS(c().translatePath("skins/current/css/build" + (t.RTL ? ".rtl" : "") + ".css"), function() {
                e._registerStyleTagForDestructor(i), n.loadJSON(c().translatePath("skins/current/config.json"), function(i) {
                    var n = h.extend(i, t.SKIN_CONFIG);
                    e.set("skinConfig", new l(n), !0), e.skinConfig.on("all", e._onSkinConfigChange, e), h.each(n, function(t, i) {
                        e.setParamToSkin(i, t)
                    }), e.set("isSkinConfigInited", !0, !0)
                })
            }, i)
        }, w.prototype.loadLocale = function() {
            var e = this;
            h.isObject(this.workspaceProps) && this.workspaceProps.onAndChange("change:locales", function() {
                e.isLocaleLoading && console.error("Previous locale is still loading!"), e.set("isLocaleLoading", !0, !1), p().has("locale") || p().set("locale", new f);
                var i = p().get("locale").getNewLocale(this.userAgentInfo.locales, this.workspaceProps.locales);
                n.loadJSON(c().translatePath("locales/" + i + ".json"), function(n) {
                    p().get("locale").setLanguage(n, i), t.RTL = p().get("locale").isLocaleRTL(), e.set("isLocaleLoading", !1, !1), e.set("isLocaleLoaded", !0, !0), e.loadCss(), e._setFont()
                }, function(t) {
                    console.error("Could not load locale '" + i + "', error code " + t + ".")
                })
            }, this)
        }, w.prototype._setFont = function() {
            var t = "fontCss",
                e = p().get("locale").getFontConfig(),
                i = this;
            return h.isUndefined(e) ? void(this.container.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif') : (this.container.style.fontFamily = e["font-family"] + ", Helvetica, Arial, sans-serif", void n.loadCSS("https://fonts.googleapis.com/css?family=" + encodeURIComponent(e["font-family"] + ":" + e["font-weight-normal"] + "," + e["font-weight-bold"] + "&amp;subset=" + e.subset), function() {
                i._registerStyleTagForDestructor(t), i.setParamToSkin("font-weight-normal", e["font-weight-normal"]), i.setParamToSkin("font-weight-bold", e["font-weight-bold"])
            }, t))
        }, w.prototype.setParamToSkin = function(t, e) {
            var i = this,
                o = function(t, e) {
                    if (i._editorScriptLoader) {
                        if (!h.isUndefined(i._previousSkinModifiers)) {
                            for (var n = i._previousSkinModifiers.length, o = 0; o < n; o++) i._modifySkin(i._previousSkinModifiers[o].param, i._previousSkinModifiers[o].value);
                            i._previousSkinModifiers = []
                        }
                        h.isUndefined(t) || i._modifySkin(t, e)
                    } else console.error("templates.js is not loaded yet")
                };
            this._editorScriptLoader === !0 ? o(t, e) : (h.isUndefined(this._previousSkinModifiers) && (this._previousSkinModifiers = []), this._previousSkinModifiers.push({
                param: t,
                value: e
            }), h.isUndefined(this._editorScriptLoader) && (this._editorScriptLoader = !1, n.loadScript(c().translatePath("skins/current/templates.js"), function() {
                i.isStarted ? (i._editorScriptLoader = !0, o()) : i.on("change:isStarted", function(t) {
                    t && (this._editorScriptLoader = !0, o())
                }, i)
            })))
        }, w.prototype._onSkinConfigChange = function(t, e) {
            t = t.split(":")[1], this.setParamToSkin(t, e)
        }, w.prototype._registerStyleTagForDestructor = function(t) {
            this.hasOwnProperty("_styleTags") || (this._styleTags = []), this._styleTags.push(t)
        }, w.prototype._unsubscribeFromLoaders = function() {
            this.off("change:workspaceProps change:pagesProps change:skinConfig change:isLocaleLoaded change:isSkinConfigInited", this.tryToStart, this), this.off("change:workspaceProps", this.tryToLoadLocale, this), clearInterval(this._startInterval)
        }, w.prototype.destructor = function() {
            function t(t) {
                h.isObject(t) && t.constructor === l && t.destructor()
            }
            this.workspace && h.isFunction(this.workspace.destructor) && this.workspace.destructor(), this._unsubscribeFromLoaders(), h.each(this._styleTags, function(t) {
                a.del(t)
            }), t(this.workspaceProps), t(this.pagesProps), t(this.skinConfig), p().destructor()
        }, w.prototype._modifySkin = function(e, i) {
            if ("classes" === e) this.workspace.updateMenuClasses(i);
            else {
                var n = this,
                    o = function(i, o) {
                        var r = a.tag("head"),
                            s = i + "-style",
                            l = a.id(s);
                        h.isNull(l) && (l = a.createElement("style", {
                            id: s
                        }, r), n._registerStyleTagForDestructor(s)), h.has(t.FBPublication.SKIN_TEMPLATES, i) ? l.innerHTML = t.FBPublication.SKIN_TEMPLATES[i](o) : console.error("global.FBPublication.SKIN_TEMPLATES does not have " + e)
                    };
                "background-size" === e && ("auto" === i ? o("background-repeat", "repeat") : o("background-repeat", "no-repeat"));
                var r = /url\((?:'|")((?:\w|\/|\.|-|_)*)(?:'|")\)/g.exec(i);
                if (h.isArray(r) && 2 === r.length) {
                    var s = c().translatePath(r[1]);
                    i = 'url("' + s + '")'
                }
                o(e, i)
            }
        }, w.prototype.start = function() {
            if (!this.isStarted) {
                a.addClass(this.container, "publication-container");
                var t = a.createElement("div", {
                    "class": "main-frame",
                    id: "main-frame"
                }, this.container, "top");
                this.pager = new o(this.pagesProps), this.setDefaultLogic(), this._initRouter(), this.workspace = new r(this.pager, t, this.pagesProps, this.workspaceProps, this.container, this.userAgentInfo.browser), this.workspace.bookPresenter.on("onPageChanged", function() {
                    this.trigger("turned", this.getState())
                }, this), this.workspace.bookPresenter.on("zoomTransitionEnd", function() {
                    var t = this.getState();
                    this.trigger(t.isZoomed ? "zoomed" : "unzoomed", t)
                }, this), this.set("isStarted", !0, !0), p().get("analytics").trigger("timing", {
                    type: "publicationOpened"
                })
            }
        }, w.prototype.onReady = function() {
            this.workspace.onReady()
        }, w.prototype.getState = function() {
            var t = {};
            if (t.version = "html5", t.isStarted = this.isStarted, this.isStarted) {
                var e = this.workspace.getState(),
                    i = this.pager.getState();
                t.pageIndex = this.pager.pageTable.getPageIndexById(i.leftPage || i.rightPage), t.isZoomed = i.zoomMode, t.ui = e
            }
            return t
        }, w.prototype.goToPage = function(t) {
            this.pager && this.pager.goToPageByIndex(t)
        }, w.prototype.setLocalizationString = function(t, e) {
            if (!p().get("locale")) return console.error("Unable to reach the locale provider"), !1;
            try {
                p().get("locale").set(t, e)
            } catch (i) {
                return console.error("Unable to set localization string with key", t), !1
            }
            return !0
        }, w.prototype._initRouter = function() {
            var t, e = this,
                i = "app.js",
                n = {};
            this.pager.on("change:state", function(e, o, r, s) {
                if (s !== i && this.routerEnabled) {
                    n.zoom = e.zoomMode;
                    var a = void 0 !== e.leftPage ? e.leftPage : e.rightPage;
                    t = a, n.page = this.pager.pageTable.getUrlHeaderById(t), c().setPath(n)
                }
            }, this);
            var o = function() {
                if (e.routerEnabled) {
                    var t, n = c().getPathInfo();
                    if (n && h.has(n, "page")) {
                        var o = e.pager.pageTable.getPageIdByUrlHeader(n.page);
                        e.pager.goToPageById(o, i), h.has(n, "zoom") ? (t = e.pager.getState(), e.pager.setZoomMode(n.zoom, t.rightPage === o, i)) : e.pager.setZoomMode(!1, !0, i)
                    }
                }
            };
            c().setCallback(function() {
                o()
            }), o()
        }, e.App = w
    }, this.FBPublication || {});