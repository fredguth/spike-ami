! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        var d = a("@flippingbook/fb-publication/libs/publication-detector").PublicationDetector,
            e = a("@flippingbook/fb-publication/libs/ua-detector").UserAgentDetector;
        ! function(a) {
            "use strict";

            function b() {
                var a = -1;
                if ("Microsoft Internet Explorer" == navigator.appName) {
                    var b = navigator.userAgent,
                        c = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                    null != c.exec(b) && (a = parseFloat(RegExp.$1))
                } else if ("Netscape" == navigator.appName) {
                    var b = navigator.userAgent,
                        c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
                    null != c.exec(b) && (a = parseFloat(RegExp.$1))
                }
                return a
            }

            function c() {
                this.isMobile = !1, this.isFlash = !1, this.isBasic = !1, this.ua = navigator.userAgent.toLowerCase();
                var c = [0, 0, 0],
                    d = navigator.platform.toLowerCase(),
                    e = this.ua.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0];
                if ("undefined" != typeof navigator.plugins && "object" == typeof navigator.plugins["Shockwave Flash"]) {
                    var f = navigator.plugins["Shockwave Flash"].description;
                    if (f && ("undefined" == typeof navigator.mimeTypes || !navigator.mimeTypes["application/x-shockwave-flash"] || navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) {
                        f = f.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), c[0] = parseInt(f.replace(/^(.*)\..*$/, "$1"), 10), c[1] = parseInt(f.replace(/^.*\.(.*)\s.*$/, "$1"), 10), c[2] = /[a-zA-Z]/.test(f) ? parseInt(f.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else if ("undefined" != typeof a.ActiveXObject) try {
                    var g = new a.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    g && (f = g.GetVariable("$version")) && (!0, f = f.split(" ")[1].split(","), c = [parseInt(f[0], 10), parseInt(f[1], 10), parseInt(f[2], 10)])
                } catch (u) {}
                0 === c[0] && 0 === c[1] && 0 === c[2] ? this.flash = !1 : this.flash = !0, this.publisher = {}, this.publisher.isOn = void 0 !== function(b) {
                    var c = a.document.cookie.match(new RegExp("(?:^|; )" + b.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                    return c ? decodeURIComponent(c[1]) : undefined
                }("publisher"), this.browser = {}, this.platform = {}, this.device = {}, this.browser.name = "version" == e[1] ? e[3] : e[1], this.browser.name = "unknown" == this.browser.name ? "safari" : this.browser.name, this.browser[this.browser.name] = !0;
                var h = "ie" == e[1] && document.documentMode;
                if (this.browser.version = h || parseFloat("opera" == e[1] && e[4] ? e[4] : e[2]), this.platform.name = this.ua.match(/ip(?:ad|od|hone)/) ? "ios" : this.ua.match(/(?:trident)/) ? "win" : (this.ua.match(/(?:webos|android|bada|symbian|palm|blackberry)/) || d.match(/mac|win|linux/) || ["other"])[0], ("ontouchstart" in a || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "win" === this.platform.name && (this.platform.name = "wphone"), this.platform[this.platform.name] = !0, this.platform.version = 0, this.platform.mac) {
                    var i = this.ua.match(/os\sx\s(\d+[\._]*\d*[\._]*\d*)/);
                    this.platform.version = "[object Array]" === Object.prototype.toString.call(i) && i.length > 1 ? i[1].split(/[\._]/) : 0
                } else if (this.platform.ios) {
                    var i = this.ua.match(/os\s(\d+_*\d*_*\d*)/);
                    this.platform.version = "[object Array]" === Object.prototype.toString.call(i) && i.length > 1 ? i[1].split("_") : 0
                } else if (this.platform.android) {
                    var i = this.ua.match(/android\s(\d+\.*\d*\.*\d*)/);
                    this.platform.version = "[object Array]" === Object.prototype.toString.call(i) && i.length > 1 ? i[1].split(".") : 0
                }
                switch (this.platform.verCheck = function(a) {
                    return 1 * this.platform.version == 1 * a ? 0 : 1 * a > 1 * this.platform.version ? -1 : 1
                }, this.device.name = this.ua.match(/ipad/) ? "ipad" : this.ua.match(/ipad/) ? "ipad" : this.ua.match(/iphone/) ? "iphone" : this.ua.match(/android/) ? "android" : d.match(/mac|win|linux/) ? "pc" : "other", "wphone" === this.platform.name && (this.device.name = "wphone"), this.device[this.device.name] = !0, this.device.version = this.platform.version[0], this.device.type = this.ua.match(/(mobile\ssafari)|iphone|ipod/) ? "mobile" : "tablet", this.queryString = function() {
                    var b = {},
                        c = a.location.search.substring(1);
                    if ("" === c) return b;
                    for (var d = c.split("&"), e = 0; e < d.length; e++)
                        if ("" !== d[e]) {
                            var f = d[e].split("=");
                            if ("undefined" == typeof b[f[0]]) b[f[0]] = f[1];
                            else if ("string" == typeof b[f[0]]) {
                                var g = [b[f[0]], f[1]];
                                b[f[0]] = g
                            } else b[f[0]].push(f[1])
                        }
                    return b
                }(), this.queryString.v) {
                    case "basic":
                        this.isBasic = !0, this.isMobile = this.isFlash = !1;
                        break;
                    case "mobile":
                        this.isMobile = !0;
                        break;
                    case "flash":
                        this.isFlash = !0
                }
                var j = this.platform.ios && b() === -1,
                    k = b() === -1 && this.platform.android && (parseInt(this.platform.version[0], 10) > 4 || 4 === parseInt(this.platform.version[0], 10) && parseInt(this.platform.version[1], 10) >= 1),
                    l = j && this.browser.safari && b() === -1,
                    m = k && this.browser.chrome && b() === -1;
                if (this.isBasic || this.isMobile || this.isFlash || ((j || k) && "undefined" == typeof COMPATIBLE ? this.isMobile = !0 : l || m ? this.isMobile = !0 : this.flash && this.device.pc && (c[0] > 10 || 10 === c[0] && c[1] >= 3) ? this.isFlash = !0 : this.isBasic = !0), this._loadVersion(), this.device.android && !this.browser.chrome) {
                    for (var n = document.getElementsByTagName("meta"), o = 0; o < n.length; o++) "viewport" == n[o].name && document.getElementsByTagName("head")[0].removeChild(n[o]);
                    var p = this.platform.android && !this.browser.chrome && (parseInt(this.platform.version[0], 10) < 4 || 4 === parseInt(this.platform.version[0], 10) && parseInt(this.platform.version[1], 10) <= 3),
                        q = p ? 1.5 : 1,
                        r = "width=device-width, height=device-height, initial-scale=" + q / a.devicePixelRatio + ", minimum-scale=" + q / window.devicePixelRatio + ", user-scalable=yes, maximum-scale=2.0" + (p ? "" : ", target-densitydpi=device-dpi");
                    if (this.ua.indexOf("gt")) var r = "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, user-scalable=yes, maximum-scale=2.0" + (p ? "" : ", target-densitydpi=device-dpi");
                    var s = document.createElement("meta");
                    s.name = "viewport", s.content = r, document.getElementsByTagName("head")[0].appendChild(s)
                }
                if ("undefined" != typeof a.innerWidth) {
                    var t = document.createElement("style");
                    t.appendChild(document.createTextNode("@-ms-viewport{width:" + (a.innerWidth < 640 ? 640 : a.innerWidth) + "px; zoom: 1;}@-moz-viewport{width:" + (a.innerWidth < 640 ? 640 : a.innerWidth) + "px; zoom: 1;}  @-webkit-viewport{width:" + (a.innerWidth < 640 ? 640 : a.innerWidth) + "px; zoom: 1;}  @-o-viewport{width:" + (a.innerWidth < 640 ? 640 : a.innerWidth) + "px; zoom: 1;} @viewport{width:" + (a.innerWidth < 640 ? 640 : a.innerWidth) + "px; zoom: 1;}")), document.getElementsByTagName("head")[0].appendChild(t)
                }
            }
            c.prototype._loadVersion = function() {
                function b(b) {
                    var d = a.MAIN_PAGE || "index.html",
                        e = "../../../" + d,
                        f = a.document;
                    f.domain.indexOf("publ.com") == -1 && f.domain.indexOf("cld.bz") == -1 && f.domain.indexOf("cld.mobi") == -1 && f.domain.indexOf("cld.local") == -1 || (e = a.location.protocol + "//" + a.location.host + "/" + a.location.href.split("/")[4]);
                    var g = "";
                    "undefined" != typeof a.CURRENT_PAGE && "1" != a.CURRENT_PAGE && (g += "#" + encodeURIComponent(a.CURRENT_PAGE));
                    var h = "";
                    b && ("mobile" !== c.queryString.v && "flash" !== c.queryString.v || (h = "?v" + c.queryString.v)), a.location = e + h + g
                }
                var c = this;
                if (!("undefined" != typeof a.IS_DEBUG && a.IS_DEBUG || this.publisher.isOn))
                    if (a.HTML5_PUBLICATION) {
                        var f = new d(new e(a.navigator)),
                            g = f.getSupportedVersions();
                        g && g.length && (1 === g.length && "flash" === g[0] || b(!1))
                    } else(this.isMobile || this.isFlash) && b(!0);
                this.device.pc || a.document.getElementsByTagName("html")[0].setAttribute("class", "isMobile")
            }, a.detector = new c
        }(window),
        function(a) {
            "use strict";

            function b() {
                this._popUp(), "undefined" == typeof this.currentZoom && (this.currentZoom = 1), this.pageContainer = document.getElementById("pageContainer"), this.pageRect = this._getBoundingClientRect(this.pageContainer), this.mobileMenu = "close", this.lastFontSize = 0, this.offset = {
                    right: .05,
                    left: .05,
                    top: .05,
                    bottom: .05
                }, this.videoFrame = !1, this.galleryFrame = !1, this.currentWindowWidth = this._getWindowWidth(), this.currentWindowHeight = this._getWindowHeight(), this._setSizes(), this._fontCorrection(), this._parseVideos(), this._parseImages();
                var b = this;
                if (this._addEvent(a, "resize", function() {
                        a.detector.device.pc ? (b._setSizes.call(b), b._fontCorrection.call(b)) : ((b.currentWindowWidth < b.currentWindowHeight && b._getWindowWidth.call(b) > b._getWindowHeight.call(b) || b.currentWindowWidth > b.currentWindowHeight && b._getWindowWidth.call(b) < b._getWindowHeight.call(b)) && (b._setSizes.call(b), b._fontCorrection.call(b)), b.currentWindowWidth = b._getWindowWidth.call(b), b.currentWindowHeight = b._getWindowHeight.call(b))
                    }), this._zoomButtons(), this._socialButtons(), this._mobileMenu(), a.detector.platform.mac && document.getElementById("downloadWindows") ? document.getElementById("downloadWindows").parentNode.removeChild(document.getElementById("downloadWindows")) : a.detector.platform.win && document.getElementById("downloadMac") ? document.getElementById("downloadMac").parentNode.removeChild(document.getElementById("downloadMac")) : a.detector.platform.linux && (document.getElementById("downloadWindows") && document.getElementById("downloadWindows").parentNode.removeChild(document.getElementById("downloadWindows")), document.getElementById("downloadMac") && document.getElementById("downloadMac").parentNode.removeChild(document.getElementById("downloadMac"))), "basic" === a.detector.queryString.v)
                    for (var c = this._getElementsByClass("internalLink"), d = 0, e = c.length; d < e; d++) {
                        var f = c[d];
                        a.HTML5_PUBLICATION || (f.href = f.href + "?v=basic")
                    }
            }
            b.prototype._popUp = function() {
                if (a.HTML5_PUBLICATION) return document.getElementById("infoButton").style.display = "none", void(document.getElementById("verContainer").style.cursor = "default");
                var b = function() {
                        document.getElementById("infoPopUp").style.display = "none", document.getElementById("popUp").style.display = "none"
                    },
                    c = function() {
                        document.getElementById("infoPopUp").style.display = "block", document.getElementById("popUp").style.display = "block"
                    };
                this._addEvent(document.getElementById("infoPopUp"), "click", b), this._addEvent(document.getElementById("closeButton"), "click", b), this._addEvent(document.getElementById("verContainer"), "click", c)
            }, b.prototype._mobileMenu = function() {
                if (document.getElementById("mobileMenuButton")) {
                    var b = this;
                    "ontouchstart" in document.documentElement && (!a.detector.platform.android || a.detector.browser.chrome || a.detector.browser.opera || a.detector.browser.firefox) ? (document.getElementById("mobileMenuButton").addEventListener("touchstart", function(a) {
                        a.preventDefault(), a.stopPropagation()
                    }), document.getElementById("mobileMenuButton").addEventListener("touchend", function(a) {
                        a.stopPropagation(), a.preventDefault(), "close" === b.mobileMenu ? b._mobileMenuOpen.call(b) : b._mobileMenuClose.call(b)
                    }), document.getElementById("mainFrame").addEventListener("touchend", function() {
                        event.stopPropagation(), "close" !== b.mobileMenu && b._mobileMenuClose.call(b)
                    })) : (this._addEvent(document.getElementById("mobileMenuButton"), "click", function() {
                        event.stopPropagation(), event.preventDefault(), "close" === b.mobileMenu ? b._mobileMenuOpen.call(b) : b._mobileMenuClose.call(b)
                    }), this._addEvent(document.getElementById("mainFrame"), "click", function() {
                        "close" !== b.mobileMenu && b._mobileMenuClose.call(b)
                    }))
                }
            }, b.prototype._mobileMenuOpen = function() {
                document.getElementById("mainFrame").className = "mainFrame openMenu", this.mobileMenu = "open"
            }, b.prototype._mobileMenuClose = function() {
                document.getElementById("mainFrame").className = "mainFrame closeMenu", this.mobileMenu = "close"
            }, b.prototype._socialButtons = function(b) {
                var c = a.FILES_FOLDER || "files",
                    d = a.MAIN_PAGE || "index.html";
                if (document.getElementById("facebookShare")) {
                    if (void 0 === b) {
                        b = a.location.href;
                        var e = new RegExp("/" + c + "/.*", "i");
                        b = b.replace(e, "/" + d)
                    }
                    b = encodeURIComponent(b);
                    var f = encodeURIComponent(a.PUBLICATION_NAME);
                    document.getElementById("facebookShare").setAttribute("href", "//m.facebook.com/sharer.php?u=" + b), document.getElementById("twitterShare").setAttribute("href", "//twitter.com/intent/tweet?text=" + f + "&url=" + b), document.getElementById("linkedinShare").setAttribute("href", "//www.linkedin.com/shareArticle?mini=true&url=" + b + "&title=" + f + "&summary=" + f + "&source=" + b), document.getElementById("tumblrShare").setAttribute("href", "//www.tumblr.com/share/link?url=" + b + "&name=" + f), document.getElementById("googleShare").setAttribute("href", "//plus.google.com/share?url=" + b), document.getElementById("mailShare").setAttribute("href", "mailto:?subject=" + f + "&body=" + b), document.getElementById("vkShare").setAttribute("href", "//vk.com/share.php?url=" + b + "&title=" + f)
                }
            }, b.prototype._zoomButtons = function() {
                function b(a, b, c, d, e) {
                    try {
                        if (!a || !b) return !1;
                        var f = a + "=" + encodeURIComponent(b);
                        return f += "; path=/", c && (f += "; expires=" + c.toGMTString()), d && (f += "; domain=" + d), e && (f += "; secure"), document.cookie = f, !0
                    } catch (g) {
                        console.log(e)
                    }
                }
                if (document.getElementById("zoomIn")) {
                    if ((a.PointerEvent || "ontouchstart" in a) && !a.detector.device.pc) return void document.getElementById("zoomContainer").parentNode.removeChild(document.getElementById("zoomContainer"));
                    var c = this,
                        d = (this._getWindowWidth() - 100) / this._getFitScreenSizes(this.pageRect.width, this.pageRect.height).width,
                        e = new Date;
                    e.setMonth(e.getMonth() + 6), this._addEvent(document.getElementById("zoomIn"), "click", function() {
                        c.currentZoom + .2 > d || (c.currentZoom = c.currentZoom + .2, c._setSizes.call(c), c._fontCorrection.call(c))
                    }), this._addEvent(document.getElementById("zoomOut"), "click", function() {
                        1 !== c.currentZoom && (c.currentZoom = c.currentZoom - .2, c._setSizes.call(c), c._fontCorrection.call(c), b("zoom", c.currentZoom, e))
                    })
                }
            }, b.prototype._getFitScreenSizes = function(a, b, c) {
                c = c || this._getWindowWidth() * (2 * this.offset.top), c = Math.round(c);
                var d = this._getWindowWidth(),
                    e = this._getWindowHeight(),
                    f = d / e,
                    g = 0 == b ? 0 : a / b,
                    h = Math.round(f > g ? 0 == b ? 0 : a * (e - c) / b : d - c),
                    i = Math.round(f > g ? e - c : 0 == a ? 0 : b * (d - c) / a);
                return {
                    width: Math.round(h),
                    height: Math.round(i)
                }
            }, b.prototype._getFitWidthSizes = function(a, b, c) {
                c = c || this._getBoundingClientRect(document.body).width * (2 * this.offset.top), c = Math.round(c);
                var d = this._getBoundingClientRect(document.body).width,
                    e = Math.round(d - c),
                    f = Math.round(b * (d - c) / a);
                return {
                    width: Math.round(e),
                    height: Math.round(f)
                }
            }, b.prototype._setSizes = function() {
                var b = 0,
                    c = 0;
                "undefined" != typeof a.TOC_BOOK_HEIGHT ? (this.newRect = a.detector.device.pc ? this._getFitScreenSizes(this.pageRect.width, a.TOC_BOOK_HEIGHT) : this._getFitWidthSizes(this.pageRect.width, a.TOC_BOOK_HEIGHT), this.pageContainer.style.width = this.newRect.width * this.currentZoom + "px", b = this._getWindowHeight() > this.pageRect.height * this.currentZoom ? (this._getWindowHeight() - this.pageRect.height * this.currentZoom) / 2 : this._getWindowHeight() * this.offset.top, c = this._getWindowWidth() - 100 > this.newRect.width * this.currentZoom ? (this._getWindowWidth() - this.newRect.width * this.currentZoom) / 2 + "px" : this._getWindowWidth() * this.offset.left + "px") : (this.newRect = a.detector.device.pc ? this._getFitScreenSizes(this.pageRect.width, this.pageRect.height) : this._getFitWidthSizes(this.pageRect.width, this.pageRect.height), this.pageContainer.style.width = this.newRect.width * this.currentZoom + "px", this.pageContainer.style.height = this.newRect.height * this.currentZoom + "px", b = this._getWindowHeight() > this.newRect.height * this.currentZoom ? (this._getWindowHeight() - this.newRect.height * this.currentZoom) / 2 : this._getWindowHeight() * this.offset.top, c = this._getWindowWidth() - 100 > this.newRect.width * this.currentZoom ? (this._getWindowWidth() - this.newRect.width * this.currentZoom) / 2 + "px" : this._getWindowWidth() * this.offset.left + "px"), this.pageContainer.style.left = "0", b = b - 45 > 10 ? b - 45 : 10, "pc" !== a.detector.device.type && (b = 20), this.pageContainer.style.margin = b + "px 0 0 " + c;
                var d = 0 == this.pageRect.width ? 0 : this.newRect.width * this.currentZoom * 20 / this.pageRect.width;
                this.lastFontSize = d.toFixed(6), document.body.style.fontSize = this.lastFontSize + "px"
            }, b.prototype._fontCorrection = function() {
                for (var a = this._getElementsByClass("testString"), b = 0, c = 0, d = a.length; c < d; c++) {
                    var e = a[c],
                        f = e.parentNode,
                        g = this._getBoundingClientRect(e),
                        h = this._getBoundingClientRect(f),
                        i = this._getBoundingClientRect(document.getElementById("pageContainer")),
                        j = 0 == i.width ? 0 : h.width / i.width,
                        k = g.width - h.width > 0 ? (g.width - h.width) / h.width : 0;
                    k *= j, b = b >= k ? b : k
                }
                document.body.style.fontSize = this.lastFontSize * (1 - b) + "px"
            }, b.prototype._parseVideos = function() {
                for (var b = this._getElementsByClass("videoItem"), c = this, d = 0, e = b.length; d < e; d++) {
                    var f = b[d],
                        g = f.className.split(" ")[1],
                        h = VIDEOS_INFO[f.id],
                        i = h.videoId;
                    ! function(a, b) {
                        c._addEvent(f, "click", function() {
                            c._showVideo.call(c, a, b)
                        })
                    }(i, g);
                    var j = h.thumb;
                    j && function(a, b) {
                        var d = new Image;
                        d.onload = function(a) {
                            b.style.backgroundImage = "url('" + a.target.src + "')", c._sizeVideoIcon(b)
                        }, d.src = a
                    }(j, f)
                }
                this._addEvent(a, "resize", function(a) {
                    c._sizeVideoIcons()
                })
            }, b.prototype._sizeVideoIcons = function() {
                for (var a = this._getElementsByClass("videoItem"), b = 0, c = a.length; b < c; b++) this._sizeVideoIcon(a[b])
            }, b.prototype._sizeVideoIcon = function(a) {
                var b = this._getBoundingClientRect(a),
                    c = this._getElementsByClass("play", a)[0];
                if (c) {
                    var d = b.height > 50 ? .35 * b.height : .8 * b.height;
                    c.style.width = d + "px", c.style.height = d + "px", c.style.margin = -d / 2 + "px 0 0 " + -d / 2 + "px"
                }
            }, b.prototype._showVideo = function(b, c) {
                this.videoFrame = document.createElement("iframe");
                var d = document.createElement("div"),
                    e = this;
                this._getFitScreenSizes(1600, 900, this._getWindowHeight() / 10);
                d.className = "blackoutVideo", document.body.appendChild(d), this._addEvent(d, "click", function(a) {
                    a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, e._hideVideo.call(e)
                }), "youtube" === c ? (this.videoFrame.className = this.videoFrame.className + " youtube-player", this.videoFrame.src = "//www.youtube.com/embed/" + b + "?autoplay=1&html5=1") : this.videoFrame.src = "//player.vimeo.com/video/" + b + "?title=0&amp;byline=0&amp;portrait=0&amp;color=da4541", a.detector.publisher.isOn && (this.videoFrame.src += "&publisher=1"), document.body.appendChild(this.videoFrame), this._resizeVideo(), this._addEvent(a.document, "keyup", function(a) {
                    a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, 27 === (a.keyCode ? a.keyCode : a.which) && e._hideVideo.call(e)
                }), this._addEvent(a, "resize", function(a) {
                    e._resizeVideo()
                })
            }, b.prototype._resizeVideo = function() {
                if (this.videoFrame) {
                    var a = this._getFitScreenSizes(1600, 900, this._getWindowHeight() / 10);
                    this.videoFrame.className = "videoFrame", this.videoFrame.setAttribute("type", "text/html"), this.videoFrame.setAttribute("width", a.width + "px"), this.videoFrame.setAttribute("height", a.height + "px"), this.videoFrame.setAttribute("frameBorder", "0"), this.videoFrame.style.top = "50%", this.videoFrame.style.left = "50%", this.videoFrame.style.margin = -a.height / 2 + "px 0 0 " + -a.width / 2 + "px"
                }
            }, b.prototype._hideVideo = function() {
                var a = this._getElementsByClass("blackoutVideo");
                this.videoFrame && this.videoFrame.parentNode.removeChild(this.videoFrame);
                for (var b = 0, c = a.length; b < c; b++) {
                    var d = a[b];
                    d.parentNode.removeChild(d)
                }
                this.videoFrame = !1
            }, b.prototype._parseImages = function() {
                for (var b = this._getElementsByClass("imageItem"), c = this, d = 0, e = b.length; d < e; d++) {
                    var f = b[d],
                        g = f.id;
                    ! function(b) {
                        c._addEvent(f, "click", function() {
                            "undefined" != typeof a.GALLERY_CONTENT && b in a.GALLERY_CONTENT && c._showGallery.call(c, b)
                        })
                    }(g)
                }
            }, b.prototype._showGallery = function(b) {
                var c = document.createElement("div"),
                    d = this;
                c.className = "blackoutGallery", document.body.appendChild(c), this._addEvent(c, "click", function(a) {
                    a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, d._hideGallery.call(d)
                });
                var e = document.createElement("img");
                e.className = "galleryPreloader", e.setAttribute("src", a.DYNAMIC_FOLDER + "/basic-html/styles/preloader.gif"), document.body.appendChild(e), this.imageContainer = document.createElement("img"), this.imageContainer.className = "galleryImage", this._addEvent(this.imageContainer, "load", function() {
                    e && e.parentNode.removeChild(e), d.imageContainerCloseButton = document.createElement("a"), d.imageContainerCloseButton.className = "galleryCloseButton", d.imageContainerCloseButton.setAttribute("href", "#"), document.body.appendChild(d.imageContainerCloseButton), d.imageContainerWidth = d.imageContainer.width, d.imageContainerHeight = d.imageContainer.height, d._resizeImage(), d._addEvent(d.imageContainerCloseButton, "click", function(a) {
                        a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, d._hideGallery.call(d)
                    })
                }), this._addEvent(this.imageContainer, "error", function() {
                    e && e.parentNode.removeChild(e)
                }), this.imageContainer.style.top = "-1000%", this.imageContainer.style.left = "-1000%", this.imageContainer.setAttribute("src", a.GALLERY_CONTENT[b][0]), document.body.appendChild(this.imageContainer), this._addEvent(a.document, "keyup", function(a) {
                    a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, 27 === (a.keyCode ? a.keyCode : a.which) && d._hideGallery.call(d)
                }), this._addEvent(a, "resize", function(a) {
                    d._resizeImage()
                })
            }, b.prototype._resizeImage = function() {
                if (this.imageContainer && this.imageContainerCloseButton) {
                    var a = this.imageContainerWidth,
                        b = this.imageContainerHeight,
                        c = 30 + .1 * Math.max(this._getWindowWidth(), this._getWindowHeight()),
                        d = this._getWindowWidth() - c,
                        e = this._getWindowHeight() - c;
                    if (this.imageContainer.style.backgroundColor = "#FFFFFF", this.imageContainerWidth > d - 12 || this.imageContainerHeight > e - 12) {
                        var f = this._getFitScreenSizes(this.imageContainerWidth, this.imageContainerHeight, c);
                        this.imageContainer.setAttribute("width", f.width + "px"), this.imageContainer.setAttribute("height", f.height + "px"), this.imageContainer.style.margin = -(f.height / 2 + 6) + "px 0 0 " + (-f.width / 2 - 6) + "px", this.imageContainerCloseButton.style.margin = -(f.height / 2 + 6 + 15) + "px 0 0 " + (f.width / 2 + 6 - 15) + "px"
                    } else this.imageContainer.setAttribute("width", a + "px"), this.imageContainer.setAttribute("height", b + "px"), this.imageContainer.style.margin = -(b / 2 + 6) + "px 0 0 " + (-a / 2 - 6) + "px", this.imageContainerCloseButton.style.margin = -(b / 2 + 6 + 15) + "px 0 0 " + (a / 2 + 6 - 15) + "px";
                    this.imageContainer.style.borderWidth = "6px", this.imageContainer.style.top = "50%", this.imageContainer.style.left = "50%"
                }
            }, b.prototype._hideGallery = function() {
                var a = this._getElementsByClass("blackoutGallery"),
                    b = this._getElementsByClass("galleryPreloader");
                this.imageContainer && this.imageContainer.parentNode.removeChild(this.imageContainer), this.imageContainerCloseButton && this.imageContainerCloseButton.parentNode.removeChild(this.imageContainerCloseButton);
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    e.parentNode.removeChild(e)
                }
                for (c = 0, d = b.length; c < d; c++) {
                    var f = b[c];
                    f.parentNode.removeChild(f)
                }
                this.imageContainer = !1, this.imageContainerCloseButton = !1, this.imageContainerHeight = this.imageContainerWidth = 0
            }, b.prototype._getBoundingClientRect = function(a) {
                var b = a.getBoundingClientRect();
                return {
                    width: b.width || b.right - b.left,
                    height: b.height || b.bottom - b.top,
                    left: b.left,
                    right: b.right,
                    top: b.top,
                    bottom: b.bottom
                }
            }, b.prototype._getWindowWidth = function() {
                return a.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            }, b.prototype._getWindowHeight = function() {
                return a.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }, b.prototype._getElementsByClass = function(b, c) {
                if (void 0 === c && (c = a.document), "function" == typeof c.getElementsByClassName) return c.getElementsByClassName(b);
                var d = [],
                    e = c.getElementsByTagName("*");
                for (var f in e)
                    if (Object.prototype.hasOwnProperty.call(e, f) && "object" == typeof e[f]) {
                        var g = Object.prototype.hasOwnProperty.call(e[f], "className") ? e[f].className : e[f].getAttribute("className"),
                            h = null === g ? [] : g.split(" ");
                        this._indexOf(h, b) !== -1 && d.push(e[f])
                    }
                return d
            }, b.prototype._addEvent = function(b, c, d) {
                a.addEventListener ? b.addEventListener(c, d, !0) : b.attachEvent("on" + c, d)
            }, b.prototype._indexOf = function(a, b) {
                if (null == a) return -1;
                var c, d;
                for (c = 0, d = a.length; c < d; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            }, b.prototype._setFrame = function() {
                navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && (document.body.style.height = this._getWindowHeight() + "px"), a.scrollTo(0, 0)
            }, a.BasicPage = b;
            var c = function() {
                "undefined" == typeof a.BASIC_PAGE && (a.BASIC_PAGE = new b)
            };
            a.addEventListener ? a.addEventListener("load", c, !0) : a.attachEvent("onload", c)
        }(window)
    }, {
        "@flippingbook/fb-publication/libs/publication-detector": 2,
        "@flippingbook/fb-publication/libs/ua-detector": 3
    }],
    2: [function(a, b, c) {
        (function(a) {
            ! function(b, d) {
                "use strict";
                void 0 !== c ? b(a, c) : b(d, d)
            }(function(a, b) {
                "use strict";

                function c(a, b) {
                    this.userAgentInfo = a, this.priorities = b
                }
                c.prototype.constructor = c, c.prototype.getSupportedVersions = function() {
                    var a = [];
                    if (this.userAgentInfo.device.desktop) {
                        var b = this.userAgentInfo.os.mac && this.userAgentInfo.browser.safari ? [19, 0] : [10, 3],
                            c = this.userAgentInfo.flash;
                        if (c && (c[0] > b[0] || c[0] === b[0] && c[1] >= b[1]) && a.push("flash"), this.userAgentInfo.browser.ie) {
                            (this.userAgentInfo.browser.version || "7.0").split(".")[0] > 10 && a.push("html")
                        } else a.push("html")
                    } else {
                        var d = this.userAgentInfo.os.ios,
                            e = this.userAgentInfo.os.android && (parseInt(this.userAgentInfo.os.version.split(".")[0], 10) > 4 || 4 === parseInt(this.userAgentInfo.os.version.split(".")[0], 10) && parseInt(this.userAgentInfo.os.version.split(".")[1], 10) >= 1);
                        (d || e) && a.push("mobile")
                    }
                    return a
                }, c.prototype.mainVersion = function() {
                    var a = this.getSupportedVersions();
                    if (this.priorities) {
                        for (var b = 0; b < this.priorities.length; b++)
                            for (var c = 0; c < a.length; c++)
                                if (a[c] === this.priorities[b]) return this.priorities[b]
                    } else if (a && a.length > 0) return a[0];
                    return null
                }, c.prototype.isRenderable = function() {
                    return null !== this.mainVersion()
                }, b.PublicationDetector = c
            }, this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    3: [function(a, b, c) {
        (function(a) {
            ! function(b, d) {
                "use strict";
                void 0 !== c ? b(a, c) : b(d, d)
            }(function(a, b) {
                "use strict";

                function c(a) {
                    this._navigator = a, this.browser = this._getBrowser(), this.flash = this._getFlash(), this.os = this._getOS(), this.device = this._getDevice()
                }
                c.prototype.constructor = c, c.prototype._getBrowser = function() {
                    var a, b = "undefined" != typeof this._navigator ? this._navigator.userAgent.toLowerCase() : "",
                        c = function(a) {
                            var c = b.match(a);
                            return c && c.length > 1 && c[1] || ""
                        },
                        d = /CrOS/.test(b),
                        e = c(/edge\/(\d+(\.\d+)?)/i),
                        f = c(/version\/(\d+(\.\d+)?)/i),
                        g = !1;
                    return /opera|opr/i.test(b) ? a = {
                        name: "Opera",
                        opera: !0,
                        version: f || c(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
                    } : /yabrowser/i.test(b) ? a = {
                        name: "Yandex Browser",
                        yandexbrowser: !0,
                        version: f || c(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                    } : /windows phone/i.test(b) ? (g = !0, a = {
                        name: "Windows Phone IE",
                        ie: !0
                    }, e ? (a.msedge = !0, a.version = e) : (a.msie = !0, a.version = c(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(b) ? (a = {
                        name: "Internet Explorer",
                        msie: !0,
                        ie: !0,
                        version: c(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                    }, /trident/i.test(b) && ("7.0" === a.version && "4.0" === c(/(?:trident\/)(\d+(\.\d+)?)/i) && (a.version = "8.0"), "7.0" === a.version && "5.0" === c(/(?:trident\/)(\d+(\.\d+)?)/i) && (a.version = "9.0"))) : a = /silk/i.test(b) ? {
                        name: "Amazon Silk",
                        silk: !0,
                        version: c(/silk\/(\d+(\.\d+)?)/i)
                    } : d ? {
                        name: "Chrome",
                        chrome: !0,
                        version: c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : /chrome.+? edge/i.test(b) ? {
                        name: "Microsoft Edge",
                        ie: !0,
                        msedge: !0,
                        version: e
                    } : /chrome|crios|crmo/i.test(b) ? {
                        name: "Chrome",
                        chrome: !0,
                        version: c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : /seamonkey\//i.test(b) ? {
                        name: "SeaMonkey",
                        seamonkey: !0,
                        version: c(/seamonkey\/(\d+(\.\d+)?)/i)
                    } : /firefox|iceweasel/i.test(b) ? {
                        name: "Firefox",
                        firefox: !0,
                        version: c(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
                    } : /phantom/i.test(b) ? {
                        name: "PhantomJS",
                        phantom: !0,
                        version: c(/phantomjs\/(\d+(\.\d+)?)/i)
                    } : /safari/i.test(b) ? {
                        name: "Safari",
                        safari: !0,
                        version: f
                    } : {
                        other: !0
                    }, g || a.msie || a.msedge || !/(apple)?webkit/i.test(b) ? !a.opera && /gecko\//i.test(b) && (a.name = a.name || "Gecko", a.gecko = !0, a.version = a.version || c(/gecko\/(\d+(\.\d+)?)/i)) : (a.name = a.name || "Webkit", a.webkit = !0, !a.version && f && (a.version = f)), a.name || (a.name = "Other"), a
                }, c.prototype._getFlash = function() {
                    var b = null;
                    if ("undefined" != typeof this._navigator.plugins && "object" == typeof this._navigator.plugins["Shockwave Flash"]) {
                        var c = this._navigator.plugins["Shockwave Flash"].description;
                        if (c && ("undefined" == typeof this._navigator.mimeTypes || !this._navigator.mimeTypes["application/x-shockwave-flash"] || this._navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) {
                            c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), b = [parseInt(c.replace(/^(.*)\..*$/, "$1"), 10), parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10), /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0]
                        }
                    } else if ("undefined" != typeof a.ActiveXObject) try {
                        var d = new a.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        d && (c = d.GetVariable("$version")) && (!0, c = c.split(" ")[1].split(","), b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)])
                    } catch (e) {}
                    return b
                }, c.prototype._getOS = function() {
                    var a = "undefined" != typeof this._navigator ? this._navigator.userAgent.toLowerCase() : "",
                        b = function(b) {
                            var c = a.match(b);
                            return c && c.length > 1 && c[1] || ""
                        },
                        c = {
                            name: "Other",
                            other: !0
                        },
                        d = b(/(ipod|iphone|ipad)/i).toLowerCase(),
                        e = /like android/i.test(a),
                        f = !e && /android/i.test(a),
                        g = b(/version\/(\d+(\.\d+)?)/i);
                    return d ? c = {
                        name: "iOS",
                        version: b(/os\s(\d+_*\d*_*\d*)/).split("_").join("."),
                        ios: !0
                    } : f ? c = {
                        name: "Android",
                        version: b(/android\s(\d+\.*\d*\.*\d*)/),
                        android: !0
                    } : /mac os/.test(a) ? c = {
                        name: "Mac OS",
                        mac: !0
                    } : /windows/i.test(a) ? c = {
                        name: "Windows",
                        windows: !0
                    } : /playbook|blackberry|\bbb\d+/i.test(a) || /rim\stablet/i.test(a) ? c = {
                        name: "Blackberry",
                        blackberry: !0,
                        version: g || b(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                    } : /(web|hpw)os/i.test(a) ? (c = {
                        name: "WebOS",
                        webos: !0,
                        version: g || b(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                    }, /touchpad\//i.test(a) && (c.touchpad = !0)) : /bada/i.test(a) ? c = {
                        name: "Bada",
                        bada: !0,
                        version: b(/dolfin\/(\d+(\.\d+)?)/i)
                    } : /tizen/i.test(a) ? c = {
                        name: "Tizen",
                        tizen: !0,
                        version: b(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
                    } : /sailfish/i.test(a) ? c = {
                        name: "Sailfish",
                        sailfish: !0,
                        version: b(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                    } : /firefox|iceweasel/i.test(a) && /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(a) && (c = {
                        name: "Firefox OS",
                        firefoxos: !0
                    }), c
                }, c.prototype._getDevice = function() {
                    var a = "undefined" != typeof this._navigator ? this._navigator.userAgent.toLowerCase() : "",
                        b = {},
                        c = /like android/i.test(a),
                        d = !c && /android/i.test(a),
                        e = /cros/.test(a);
                    return b.name = a.match(/ipad/) ? "ipad" : a.match(/ipod/) ? "ipod" : a.match(/iphone/) ? "iphone" : d ? "android" : a.match(/windows phone/) ? "wphone" : a.match(/mobile/) ? "mobile" : a.match(/mac|win|linux/) || e ? "desktop" : "other", b[b.name] = !0, b
                }, b.UserAgentDetector = c
            }, this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}]
}, {}, [1]);