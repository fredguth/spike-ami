var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function(t, e) {
    "use strict";
    "undefined" != typeof exports ? t(global, exports) : e.fbUtils = t(window, {})
}(function(t, e) {
    "use strict";
    return e.mergeObjects = function(t, e) {
        var o = {};
        for (var n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
        for (var n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
        return o
    }, e.decodeHtml = function(t) {
        var e = document.createElement("textarea");
        return e.innerHTML = t, e.value
    }, e
}, this),
function(t, e) {
    "use strict";
    "undefined" != typeof exports ? t(global, exports) : t(e, e)
}(function(t, e) {
    "use strict";

    function o() {
        this.callback = null
    }
    o.prototype.setCallback = function(t) {
        this.callback = t
    }, o.prototype.getPathInfo = function() {
        throw new Error("Method getPathInfo() should be overridden")
    }, o.prototype.setPath = function() {
        throw new Error("Method setPath() should be overridden")
    }, o.prototype.getShareUrl = function() {
        throw new Error("Method getShareUrl() should be overridden")
    }, o.prototype.getEmbedUrl = function() {
        throw new Error("Method getEmbedUrl() should be overridden")
    }, o.prototype.translatePath = function() {
        throw new Error("Method translatePath() should be overridden")
    }, o.prototype.getEmbedPrefix = function() {
        throw new Error("Method getEmbedPrefix() should be overridden")
    }, e.AbstractAdapter = o
}, this),
function(t, e) {
    "use strict";
    if ("undefined" != typeof exports) {
        var o = require("./abstract-adapter").AbstractAdapter;
        t(global, exports, o)
    } else t(e, e, e.AbstractAdapter)
}(function(t, e, o) {
    "use strict";

    function n(e) {
        this.mappings = e, this.baseUrl = "", t.location && (this.baseUrl = t.location.href.split("#")[0])
    }
    n.prototype = new o, n.constructor = n, n.prototype.translatePath = function(t) {
        for (var e in this.mappings)
            if (this.mappings.hasOwnProperty(e) && 0 === t.indexOf(e)) return t.replace(e, this.mappings[e]);
        return t
    }, n.prototype.getShareUrl = function() {
        return this.baseUrl
    }, n.prototype.getEmbedUrl = function() {
        return this.baseUrl
    }, e.AbstractLocalAdapter = n
}, this),
function(t, e) {
    "use strict";
    if ("undefined" != typeof exports) {
        var o = require("./local").AbstractLocalAdapter,
            n = require("../fb-utils");
        t(global, exports, o, n)
    } else t(e, e, e.AbstractLocalAdapter, e.fbUtils)
}(function(t, e, o, n) {
    "use strict";

    function i(e) {
        var i = {
            mappings: {},
            firstPage: "1"
        };
        this.options = n.mergeObjects(i, e || {}), o.call(this, this.options.mappings);
        var r = this;
        "undefined" != typeof t.addEventListener ? t.addEventListener("hashchange", function() {
            r._hashChanged()
        }) : "undefined" != typeof t.attachEvent && t.attachEvent("onhashchange", function() {
            r._hashChanged()
        }), this._parseQueryString()
    }
    i.prototype = new o, i.constructor = i, i.prototype.setPath = function(e) {
        var o = "";
        e.page === this.options.firstPage ? (e.zoom || e.productId) && (o += e.page) : o += e.page, e.zoom && (o += "/z"), e.productId && (o += "/" + e.productId), t.location && t.location.hash !== o && (t.location.hash = o)
    }, i.prototype.getPathInfo = function() {
        return t.location ? this._getInfoFromHash(t.location.hash) : null
    }, i.prototype.getShareUrl = function(e) {
        var n = o.prototype.getShareUrl.call(this);
        if (e && t.location) {
            var i = "",
                r = this._getInfoFromHash(t.location.hash);
            if (r) {
                for (var s in r)
                    if (r.hasOwnProperty(s)) {
                        var a = r[s];
                        switch (s) {
                            case "page":
                                s = "p";
                                break;
                            case "zoom":
                                s = "z";
                                break;
                            case "productId":
                                s = "id"
                        }
                        i.length > 0 && (i += "&"), i += encodeURIComponent(s) + "=" + ("boolean" == typeof a ? "1" : encodeURIComponent(a))
                    }
                if (i.length > 0)
                    if (n.indexOf("?") !== -1) {
                        var p = n.split("?");
                        p[1].length > 0 && (p[1] += "&"), p[1] += i, n = p.join("?")
                    } else n += "?" + i
            }
        }
        return n
    }, i.prototype.getEmbedPrefix = function() {
        return "fbp"
    }, i.prototype._hashChanged = function() {
        if (t.location) {
            var e = t.location.hash,
                o = this._getInfoFromHash(e);
            o && this.callback && this.callback(o)
        }
    }, i.prototype._getInfoFromHash = function(t) {
        if ("#" === t.substring(0, 1) && (t = t.slice(1)), 0 === t.length) return null;
        var e = t.split("/"),
            o = {};
        return o.page = encodeURIComponent(e[0]), 2 === e.length ? "z" !== e[1] ? o.productId = encodeURIComponent(e[1]) : o.zoom = !0 : e.length > 2 && (o.zoom = "z" === e[1], o.productId = encodeURIComponent(e[2])), o
    }, i.prototype._parseQueryString = function() {
        if (t.location) {
            var e = t.location.search.replace("?", "");
            if (e.length) {
                for (var o = {}, n = e.split("&"), i = 0; i < n.length; i++) {
                    var r = n[i].split("=");
                    o[decodeURIComponent(r[0])] = r.length > 1 ? decodeURIComponent(r[1]) : null
                }
                var s = ["p", "page", "z", "zoom", "id"],
                    a = !1;
                for (i = 0; i < s.length; i++)
                    if (o.hasOwnProperty(s[i])) {
                        a = !0;
                        break
                    }
                if (a) {
                    var p = this._getInfoFromHash(t.location.hash);
                    for (p || (p = {}), p.page = o.p || o.page || p.page, p.zoom = "1" === o.z || "1" === o.zoom || p.zoom, p.productId = o.id || p.id, p.page && this.setPath(p), i = 0; i < s.length; i++) o.hasOwnProperty(s[i]) && delete o[s[i]];
                    var h = "";
                    for (var l in o) o.hasOwnProperty(l) && (h.length > 0 && (h += "&"), h = encodeURIComponent(l) + "=" + (o[l] ? encodeURIComponent(o[l]) : ""));
                    t.location.search = h.length > 0 ? "?" + h : ""
                }
            }
        }
    }, e.LocalHashAdapter = i
}, this),
function(t, e) {
    "use strict";
    "undefined" != typeof exports ? t(global, exports) : t(e, e)
}(function(t, e) {
    "use strict";

    function o(e) {
        this._navigator = e ? e : t.navigator ? t.navigator : window ? window.navigator : void 0, this.browser = this._getBrowser(), this.flash = this._getFlash(), this.os = this._getOS(), this.device = this._getDevice(), this.locales = this._getLocales(), this.locale = this.locales ? this.locales[0] : void 0
    }
    o.prototype.constructor = o, o.prototype._getBrowser = function() {
        var t, e = "undefined" != typeof this._navigator ? this._navigator.userAgent.toLowerCase() : "",
            o = function(t) {
                var o = e.match(t);
                return o && o.length > 1 && o[1] || ""
            },
            n = /CrOS/.test(e),
            i = o(/edge\/(\d+(\.\d+)?)/i),
            r = o(/version\/(\d+(\.\d+)?)/i),
            s = !1;
        return /opera|opr/i.test(e) ? t = {
            name: "Opera",
            opera: !0,
            version: r || o(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
        } : /yabrowser/i.test(e) ? t = {
            name: "Yandex Browser",
            yandexbrowser: !0,
            version: r || o(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /windows phone/i.test(e) ? (s = !0, t = {
            name: "Windows Phone IE",
            ie: !0
        }, i ? (t.msedge = !0, t.version = i) : (t.msie = !0, t.version = o(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? (t = {
            name: "Internet Explorer",
            msie: !0,
            ie: !0,
            version: o(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        }, /trident/i.test(e) && ("7.0" === t.version && "4.0" === o(/(?:trident\/)(\d+(\.\d+)?)/i) && (t.version = "8.0"), "7.0" === t.version && "5.0" === o(/(?:trident\/)(\d+(\.\d+)?)/i) && (t.version = "9.0"))) : t = /silk/i.test(e) ? {
            name: "Amazon Silk",
            silk: !0,
            version: o(/silk\/(\d+(\.\d+)?)/i)
        } : n ? {
            name: "Chrome",
            chrome: !0,
            version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : /chrome.+? edge/i.test(e) ? {
            name: "Microsoft Edge",
            ie: !0,
            msedge: !0,
            version: i
        } : /chrome|crios|crmo/i.test(e) ? {
            name: "Chrome",
            chrome: !0,
            version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : /seamonkey\//i.test(e) ? {
            name: "SeaMonkey",
            seamonkey: !0,
            version: o(/seamonkey\/(\d+(\.\d+)?)/i)
        } : /firefox|iceweasel/i.test(e) ? {
            name: "Firefox",
            firefox: !0,
            version: o(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
        } : /phantom/i.test(e) ? {
            name: "PhantomJS",
            phantom: !0,
            version: o(/phantomjs\/(\d+(\.\d+)?)/i)
        } : /safari/i.test(e) ? {
            name: "Safari",
            safari: !0,
            version: r
        } : {
            other: !0
        }, s || t.msie || t.msedge || !/(apple)?webkit/i.test(e) ? !t.opera && /gecko\//i.test(e) && (t.name = t.name || "Gecko", t.gecko = !0, t.version = t.version || o(/gecko\/(\d+(\.\d+)?)/i)) : (t.name = t.name || "Webkit", t.webkit = !0, !t.version && r && (t.version = r)), t.name || (t.name = "Other"), t
    }, o.prototype._getFlash = function() {
        var e = "undefined",
            o = "object",
            n = "Shockwave Flash",
            i = "ShockwaveFlash.ShockwaveFlash",
            r = "application/x-shockwave-flash",
            s = null;
        if (_typeof(this._navigator.plugins) !== e && _typeof(this._navigator.plugins[n]) === o) {
            var a = this._navigator.plugins[n].description;
            if (a && (_typeof(this._navigator.mimeTypes) === e || !this._navigator.mimeTypes[r] || this._navigator.mimeTypes[r].enabledPlugin)) {
                var p = !1;
                a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), s = [parseInt(a.replace(/^(.*)\..*$/, "$1"), 10), parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10), /[a-zA-Z]/.test(a) ? parseInt(a.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0]
            }
        } else if (_typeof(t.ActiveXObject) !== e) try {
            var h = new t.ActiveXObject(i);
            h && (a = h.GetVariable("$version"), a && (p = !0, a = a.split(" ")[1].split(","), s = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]))
        } catch (l) {}
        return s
    }, o.prototype._getOS = function() {
        var t = "undefined" != typeof this._navigator ? this._navigator.userAgent.toLowerCase() : "",
            e = function(e) {
                var o = t.match(e);
                return o && o.length > 1 && o[1] || ""
            },
            o = {
                name: "Other",
                other: !0
            },
            n = e(/(ipod|iphone|ipad)/i).toLowerCase(),
            i = /like android/i.test(t),
            r = !i && /android/i.test(t),
            s = e(/version\/(\d+(\.\d+)?)/i);
        return n ? o = {
            name: "iOS",
            version: e(/os\s(\d+_*\d*_*\d*)/).split("_").join("."),
            ios: !0
        } : r ? o = {
            name: "Android",
            version: e(/android\s(\d+\.*\d*\.*\d*)/),
            android: !0
        } : /mac os/.test(t) ? o = {
            name: "Mac OS",
            mac: !0
        } : /windows/i.test(t) ? o = {
            name: "Windows",
            windows: !0
        } : /playbook|blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
            name: "Blackberry",
            blackberry: !0,
            version: s || e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        } : /(web|hpw)os/i.test(t) ? (o = {
            name: "WebOS",
            webos: !0,
            version: s || e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        }, /touchpad\//i.test(t) && (o.touchpad = !0)) : /bada/i.test(t) ? o = {
            name: "Bada",
            bada: !0,
            version: e(/dolfin\/(\d+(\.\d+)?)/i)
        } : /tizen/i.test(t) ? o = {
            name: "Tizen",
            tizen: !0,
            version: e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || s
        } : /sailfish/i.test(t) ? o = {
            name: "Sailfish",
            sailfish: !0,
            version: e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        } : /firefox|iceweasel/i.test(t) && /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o = {
            name: "Firefox OS",
            firefoxos: !0
        }), o
    }, o.prototype._getDevice = function() {
        var t = "undefined" != typeof this._navigator ? this._navigator.userAgent.toLowerCase() : "",
            e = {},
            o = /like android/i.test(t),
            n = !o && /android/i.test(t),
            i = /cros/.test(t);
        return e.name = t.match(/ipad/) ? "ipad" : t.match(/ipod/) ? "ipod" : t.match(/iphone/) ? "iphone" : n ? "android" : t.match(/windows phone/) ? "wphone" : t.match(/mobile/) ? "mobile" : t.match(/mac|win|linux/) || i ? "desktop" : "other", e[e.name] = !0, e
    }, o.prototype._getLocales = function() {
        if ("undefined" != typeof this._navigator) {
            if (this._navigator.languages && this._navigator.languages.length > 0) {
                for (var t, e = [], o = 0; o < this._navigator.languages.length; o++) t = this._navigator.languages[o], t = t.split("_")[0].split("-")[0], e.indexOf(t) === -1 && e.push(t);
                return e
            }
            var n = this._navigator.language || this._navigator.browserLanguage || this._navigator.userLanguage;
            if (n) {
                var i = n.split("_")[0].split("-")[0];
                return [i]
            }
        }
    }, e.UserAgentDetector = o
}, this),
function(t, e) {
    "use strict";
    "undefined" != typeof exports ? t(global, exports) : t(window, e)
}(function(t, e) {
    "use strict";

    function o() {}
    var n = Array.prototype.slice;
    o.prototype.on = function(t, e, o) {
        this._events = this._events || {};
        var n = this._events[t] || (this._events[t] = []);
        return n.push({
            callback: e,
            context: o || this
        }), this
    }, o.prototype.once = function(t, e, o) {
        var n = this,
            i = function r() {
                n.off(t, r), e.apply(this, arguments)
            };
        return i._callback = e, this.on(t, i, o)
    }, o.prototype.off = function(t, e, o) {
        o = o || this;
        var n, i, r;
        if (!t && !e && !o) return this._events = {}, this;
        for (var t in this._events)
            if (this._events.hasOwnProperty(t) && (r = this._events[t])) {
                if (this._events[t] = n = [], e || o)
                    for (var s = 0, a = r.length; s < a; s++) i = r[s], (e && e !== i.callback && e !== i.callback._callback || o && o !== i.context) && n.push(i);
                n.length || delete this._events[t]
            }
        return this
    }, o.prototype.trigger = function(t) {
        if (this._events) {
            var e, o = n.call(arguments, 1),
                i = this._events[t];
            if (i)
                for (var r in i) i.hasOwnProperty(r) && (e = i[r]).callback.apply(e.context, o)
        }
    }, e.Events = o
}, this),
function(t, e) {
    "use strict";
    "undefined" != typeof exports ? t(global, exports) : t(window, e)
}(function(t, e) {
    "use strict";
    e.PageResourceType = {
        PAGE_TEXT: 0,
        PAGE_SUBSTRATE: 1,
        THUMBNAIL: 2,
        ZOOM_PAGE_TEXT: 10,
        ZOOM_PAGE_SUBSTRATE: 11
    }, e.PageResourceState = {
        READY: 1,
        ERROR: -1,
        UNREADY: 0
    }
}, this.FBPublication || (this.FBPublication = {})),
function(t, e) {
    "use strict";
    if ("undefined" != typeof exports) {
        var o = require("./page-resource-enums").PageResourceState;
        t(global, exports, o)
    } else t(e, e, e.PageResourceState)
}(function(t, e, o) {
    "use strict";

    function n() {
        this.states = {}
    }
    n.prototype.constructor = n, n.prototype.on = function(t, e) {
        this._setState(t, o.READY), e(this.getInfo(t))
    }, n.prototype.off = function() {}, n.prototype._setState = function(t, e) {
        this.states[t] = e
    }, n.prototype._getState = function(t) {
        return this.states.hasOwnProperty(t) ? this.states[t] : o.UNREADY
    }, n.prototype.getInfo = function(t) {
        return {
            id: t,
            state: this._getState(t),
            pageInfo: {}
        }
    }, e.ResourceStateProvider = n
}, this.FBPublication || (this.FBPublication = {})),
function(t, e) {
    "use strict";
    if ("undefined" != typeof exports) {
        var o = require("./fb-utils");
        t(global, exports, o)
    } else t(e, e, e.fbUtils)
}(function(t, e, o) {
    "use strict";

    function n(e, n, i) {
        var r = {
                backgroundColor: "#0b97c4",
                titleColor: "#fff",
                titleText: "",
                coverSrc: "assets/cover300.jpg",
                logoLink: {
                    image: null,
                    url: "http://flippingbook.com"
                }
            },
            s = this;
        this.adapter = n, this.options = o.mergeObjects(r, i), this.preloader = t.document.createElement("div"), this.preloader.id = "preloader", this.preloader.style.width = "100%", this.preloader.style.height = "100%", this.preloader.style.lineHeight = window.innerHeight + "px", this.preloader.style.position = "absolute", this.preloader.style.top = "0px", this.preloader.style.left = "0px", this.preloader.style.right = "0px", this.preloader.style.bottom = "0px", this.preloader.style.textAlign = "center", this.preloader.style.backgroundColor = this.options.backgroundColor, this.preloader.style.zIndex = 1e6, this._resize = function() {
            s.preloader.style.lineHeight = window.innerHeight + "px", s._setCoverSize()
        }, t.addEventListener("resize", this._resize), e.appendChild(this.preloader), this._render()
    }
    n.prototype._render = function() {
        var e, n;
        this._applyStyles(), e = t.document.createElement("div"), e.className = "preloader-container", n = t.document.createElement("h3"), n.className = "preloader-title", n.innerText = o.decodeHtml(this.options.titleText), e.appendChild(n), this.coverContainer = t.document.createElement("div"), this.coverContainer.className = "preloader-cover", e.appendChild(this.coverContainer), "undefined" != typeof this.options.logoLink && this.options.logoLink.image && (this.logoContainer = t.document.createElement("a"), this.options.logoLink.url && (this.logoContainer.href = this.options.logoLink.url, this.logoContainer.target = this.options.logoLink.target || "_blank"), this.logoContainer.className = "preloader-logo", e.appendChild(this.logoContainer), this._tuneLogoSize()), this._injectImage(), this.preloader.appendChild(e)
    }, n.prototype._resize = function() {}, n.prototype._applyStyles = function() {
        var e = t.document.createElement("style"),
            o = "\n\t\t\t\t.preloader-container{\n\t\t\t\t\tline-height: 1;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\twidth: 500px;\n\t\t\t\t}\n\t\t\n\t\t\t\t.preloader-title{\n\t\t\t\t\tmax-height: 55px;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tfont-family: Arial, sans-serif;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\tline-height: 1.2;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tcolor: " + this.options.titleColor + ";\n\t\t\t\t}\n\t\t\n\t\t\t\t.preloader-cover{\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tmargin: 70px 0;\n\t\t\t\t\twidth: 300px;\n\t\t\t\t\theight: 300px;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\t\t\n\t\t\t\t.preloader-cover img{\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tclip: rect(auto, 0px, auto, auto);\n\t\t\t\t}\n\t\t\n\t\t\t\t.preloader-cover:after{\n\t\t\t\t\tcontent: '';\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-image: url('" + this.adapter.translatePath(this.options.coverSrc) + "');\n\t\t\t\t\tbackground-position: 50% 50%;\n\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t\tbackground-size: contain;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\topacity: 0.4;\n\t\t\t\t}\n\t\t\n\t\t\t\t.preloader-logo{\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\twidth: 250px;\n\t\t\t\t\theight: 190px;\n\t\t\t\t\tbackground-image: " + ("undefined" != typeof this.options.logoLink && this.options.logoLink.image ? 'url("' + this.adapter.translatePath(this.options.logoLink.image) + '")' : "none") + ";\n\t\t\t\t\tbackground-position: 50% 50%;\n\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t\tbackground-size: contain;\n\t\t\t\t\tmargin: 0 100px;\n\t\t\t\t\tbox-sizing: content-box;\n\t\t\t\t}\n\t\t\t\t@media all and (max-width: 1300px), all and (max-height: 768px){\n\t\t\t\t\t.preloader-container{\n\t\t\t\t\t\twidth: 500px;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-title{\n\t\t\t\t\t\twidth: 500px;\n\t\t\t\t\t\tmax-height: 55px;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-cover{\n\t\t\t\t\t\twidth: 240px;\n\t\t\t\t\t\theight: 240px;\n\t\t\t\t\t\tmargin: 50px 0;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-logo{\n\t\t\t\t\t\twidth: 240px;\n\t\t\t\t\t\theight: 90px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@media all and (max-width: 600px), all and (max-height: 600px){\n\t\t\t\t\t.preloader-container{\n\t\t\t\t\t\twidth: 500px;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-title{\n\t\t\t\t\t\twidth: 500px;\n\t\t\t\t\t\tmax-height: 55px;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-cover{\n\t\t\t\t\t\twidth: 200px;\n\t\t\t\t\t\theight: 200px;\n\t\t\t\t\t\tmargin: 20px 0 30px 0;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-logo{\n\t\t\t\t\t\twidth: 200px;\n\t\t\t\t\t\theight: 85px;\n\t\t\t\t\t\tmargin: 0 100px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@media all and (max-width: 550px), all and (max-height: 450px){\n\t\t\t\t\t.preloader-container{\n\t\t\t\t\t\twidth: 350px;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-title{\n\t\t\t\t\t\twidth: 350px;\n\t\t\t\t\t\tmax-height: 40px;\n\t\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-cover{\n\t\t\t\t\t\twidth: 160px;\n\t\t\t\t\t\theight: 160px;\n\t\t\t\t\t\tmargin: 10px 0;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-logo{\n\t\t\t\t\t\twidth: 160px;\n\t\t\t\t\t\theight: 40px;\n\t\t\t\t\t\tmargin: 0 80px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@media all and (max-width: 400px), all and (max-height: 300px){\n\t\t\t\t\t.preloader-container{\n\t\t\t\t\t\twidth: 190px;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-title{\n\t\t\t\t\t\twidth: 190px;\n\t\t\t\t\t\tmax-height: 40px;\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-cover{\n\t\t\t\t\t\twidth: 100px;\n\t\t\t\t\t\theight: 100px;\n\t\t\t\t\t\tmargin: 10px 0;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-logo{\n\t\t\t\t\t\twidth: 100px;\n\t\t\t\t\t\theight: 34px;\n\t\t\t\t\t\tmargin: 0 40px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 242px), all and (max-height: 212px){\n\t\t\t\t\t\n\t\t\t\t\t.preloader-title{\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-cover{\n\t\t\t\t\t\twidth: 100px;\n\t\t\t\t\t\theight: 100px;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t}\n\t\t\t\t\t.preloader-logo{\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t";
        e.appendChild(t.document.createTextNode(o)), document.getElementsByTagName("head")[0].appendChild(e)
    }, n.prototype._injectImage = function() {
        var t = this;
        this.coverIMG = new Image, this.coverIMG.onload = function() {
            t.coverContainer.appendChild(t.coverIMG), t._setCoverSize(), t.progress(100)
        }, this.coverIMG.src = this.adapter.translatePath(this.options.coverSrc)
    }, n.prototype._tuneLogoSize = function() {
        if ("undefined" != typeof this.options.logoLink && this.options.logoLink.image) {
            var t, e = this,
                o = e.logoContainer,
                n = new Image,
                i = function() {
                    t = e.logoContainer.getBoundingClientRect(), e.logoIMGRect.width < t.width && e.logoIMGRect.height < t.height ? (o.style.backgroundPosition = "50% 0%", o.style.backgroundSize = "auto") : (o.style.backgroundPosition = "50% 50%", o.style.backgroundSize = "contain")
                };
            if (this.logoIMGRect) return void i();
            n.onload = function() {
                e.logoIMGRect = {
                    width: n.naturalWidth,
                    height: n.naturalHeight
                }, i()
            }, n.src = this.adapter.translatePath(this.options.logoLink.image)
        }
    }, n.prototype._setCoverSize = function() {
        var t, e, o, n = this.coverContainer.getBoundingClientRect();
        t = this.coverIMG.naturalWidth || this.coverIMG.width, e = this.coverIMG.naturalHeight || this.coverIMG.height, t > e ? (o = n.width / this.coverIMG.naturalWidth, this.coverIMG.style.left = "0px", this.coverIMG.style.height = this.coverIMG.naturalHeight * o + "px", this.coverIMG.style.width = n.width + "px", this.coverIMG.style.top = (n.height - this.coverIMG.height) / 2 + "px") : (o = n.height / this.coverIMG.naturalHeight, this.coverIMG.style.top = "0px", this.coverIMG.style.width = this.coverIMG.naturalWidth * o + "px", this.coverIMG.style.height = n.height + "px", this.coverIMG.style.left = (n.width - this.coverIMG.width) / 2 + "px")
    }, n.prototype.progress = function(t) {
        var e = this.coverIMG.width * t / 100;
        this.coverIMG.style.clip = "rect(auto, " + e + "px, auto, auto)"
    }, n.prototype.remove = function() {
        t.removeEventListener("resize", this._resize), this.preloader.parentNode.removeChild(this.preloader), delete this.preloader
    }, e.Preloader = n
}, this),
function(t, e) {
    "use strict";
    "undefined" != typeof exports ? t(global, exports) : t(e, e)
}(function(t, e) {
    "use strict";

    function o(t, e) {
        this.userAgentInfo = t, this.priorities = e
    }
    o.prototype.constructor = o, o.prototype.getSupportedVersions = function() {
        var t = [];
        if (this.userAgentInfo.device.desktop) {
            var e = this.userAgentInfo.os.mac && this.userAgentInfo.browser.safari ? [19, 0] : [10, 3],
                o = this.userAgentInfo.flash;
            if (o && (o[0] > e[0] || o[0] === e[0] && o[1] >= e[1]) && t.push("flash"), this.userAgentInfo.browser.ie) {
                var n = (this.userAgentInfo.browser.version || "7.0").split(".")[0];
                n > 10 && t.push("html")
            } else t.push("html")
        } else {
            var i = this.userAgentInfo.os.ios,
                r = this.userAgentInfo.os.android && (parseInt(this.userAgentInfo.os.version.split(".")[0], 10) > 4 || 4 === parseInt(this.userAgentInfo.os.version.split(".")[0], 10) && parseInt(this.userAgentInfo.os.version.split(".")[1], 10) >= 1);
            (i || r) && t.push("mobile")
        }
        return t
    }, o.prototype.mainVersion = function() {
        var t = this.getSupportedVersions();
        if (this.priorities) {
            for (var e = 0; e < this.priorities.length; e++)
                for (var o = 0; o < t.length; o++)
                    if (t[o] === this.priorities[e]) return this.priorities[e]
        } else if (t && t.length > 0) return t[0];
        return null
    }, o.prototype.isRenderable = function() {
        return null !== this.mainVersion()
    }, e.PublicationDetector = o
}, this),
function(t, e) {
    "use strict";
    if ("undefined" != typeof exports) {
        var o = require("./ua-detector").UserAgentDetector,
            n = require("./publication-detector").PublicationDetector,
            i = require("./adapters/local-hash").LocalHashAdapter,
            r = require("./preloader").Preloader,
            s = require("./fb-utils"),
            a = require("./events").Events;
        t(global, exports, o, n, i, r, s, a)
    } else t(e, e, e.UserAgentDetector, e.PublicationDetector, e.LocalHashAdapter, e.Preloader, e.fbUtils, e.Events)
}(function(t, e, o, n, i, r, s, a) {
    "use strict";

    function p(t) {
        return "function" == typeof t || !1
    }

    function h(e) {
        var r = {
            container: t.document.getElementsByTagName("body")[0],
            callback: function() {},
            onPublicationLoad: function() {},
            navigator: t.navigator
        };
        this.options = s.mergeObjects(r, e), this.options.adapter || (this.options.adapter = new i), this.userAgentInfo = new o(this.options.navigator), this.detector = new n(this.userAgentInfo);
        var a = this.detector.getSupportedVersions();
        if (a && a.length) {
            var p = this.options.callback(a);
            p ? this._renderVersion(p) : void 0 === p && this._renderVersion(a[0])
        }
    }
    h.prototype = new a, h.prototype.constructor = h, h.prototype.goToPage = function(t) {
        this._app && p(this._app.goToPage) && this._app.goToPage(t)
    }, h.prototype._renderVersion = function(e) {
        function o(e, o) {
            var n = t.document.getElementsByTagName("head")[0],
                i = t.document.createElement("script");
            i.type = "text/javascript", i.charset = "UTF-8", i.async = !1, i.src = e;
            var r = function s(t, e) {
                "loaded" === t.readyState || "complete" === t.readyState ? e() : setTimeout(function() {
                    s(t, e)
                }, 100)
            };
            "function" == typeof o && ("undefined" != typeof i.addEventListener ? i.addEventListener("load", o, !1) : i.onreadystatechange = function() {
                i.onreadystatechange = null, r(i, o)
            }), n.appendChild(i)
        }
        this.container = this.options.container, this.options.container.innerHTML = "", this.options.container.setAttribute("class", "");
        var n = new r(this.container, this.options.adapter, this.options.preloader),
            i = this.options.onPublicationLoad,
            s = this,
            a = function(e) {
                function o() {
                    clearInterval(s.progressInterval), n.remove(), p(s.app.onReady) && s.app.onReady()
                }
                s.publication ? (s.publication.style.transition = "opacity 0.25s ease-in-out", s.publication.addEventListener("transitionend", o, !1), s.publication.style.opacity = 1, t.detector.browser.firefox && (s.publication.style.visibility = "visible")) : (n.preloader.style.transition = "opacity 0.25s ease-in-out", n.preloader.addEventListener("transitionend", o, !1), n.preloader.style.opacity = 0), e && (s.app = e), p(s.app.on) && (s.app.on("turned", function(t) {
                    this.trigger("turned", t)
                }, s), s.app.on("zoomed", function(t) {
                    this.trigger("zoomed", t)
                }, s), s.app.on("unzoomed", function(t) {
                    this.trigger("unzoomed", t)
                }, s)), i(e)
            };
        this.options.onPublicationLoad = function(t) {
            s._isLoaded = !0, s._app = t, s._hasProgress && a(t)
        }, this.options.onProgress = function(t) {
            n.progress(t)
        }, this.options.onInit = function(t, e) {
            if (s._isLoaded = !1, s._hasProgress = !1, s.publication = t, e !== !0) {
                var o = 0,
                    i = function() {
                        n.progress(o++), s._isLoaded && (clearInterval(s.progressInterval), a(s._app)), o > 100 && (o = 0)
                    };
                n.progress(100), setTimeout(function() {
                    s._isLoaded ? a(s._app) : s.progressInterval = setInterval(i, s.options.preloader && s.options.preloader.progressSpeed || 10)
                }, 500)
            } else s._hasProgress = !0;
            void 0 !== s.publication && (t.style.opacity = 0, s.userAgentInfo.browser.firefox && (s.publication.style.visibility = "hidden"))
        }, this.options.userAgentInfo = this.userAgentInfo;
        var h = t.document.createElement("div");
        h.id = "publication", this.container.appendChild(h), this.options.container = h, o(this.options.adapter.translatePath("static/" + e + "/init.js"), function() {
            t.FBPublicationVersion(s.options)
        })
    }, h.prototype.getState = function() {
        var t = {};
        return this._app && p(this._app.getState) && (t = this._app.getState()), t
    }, e.Publication = h
}, this);