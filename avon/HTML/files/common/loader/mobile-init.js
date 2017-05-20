! function(e) {
    "use strict";
    var t = e.document.body,
        n = e.document.head;
    if (t.innerHTML = "", detector.platform.ios && "undefined" != typeof window.devicePixelRatio && 1 === window.devicePixelRatio) {
        for (var i = document.getElementsByTagName("meta"), a = 0; a < i.length; a++) "viewport" == i[a].name && document.head.removeChild(i[a]);
        var o = "initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui",
            r = document.createElement("meta");
        r.name = "viewport", r.content = o, document.getElementsByTagName("head")[0].appendChild(r), r = null, i = null, o = null
    }
    if ("undefined" == typeof e.PUBL && (e.PUBL = !1), "undefined" == typeof e.DEBUG_MODE && (e.DEBUG_MODE = !1), PUBL) {
        var s = function() {
                var e = {},
                    t = window.location.search.substring(1);
                if ("" === t) return e;
                for (var n = t.split("&"), i = 0; i < n.length; i++)
                    if ("" !== n[i]) {
                        var a = n[i].split("=");
                        if ("undefined" == typeof e[a[0]]) e[a[0]] = a[1];
                        else if ("string" == typeof e[a[0]]) {
                            var o = [e[a[0]], a[1]];
                            e[a[0]] = o
                        } else e[a[0]].push(a[1])
                    }
                return e
            }(),
            d = "";
        "undefined" != typeof s.p && (d += s.p), "undefined" != typeof s.id && (d = d + "/" + s.id), "" !== d && (window.location.hash = d)
    }
    e.LOCALS_FOLDER = STATIC_FOLDER + "/mobile/locals", e.STYLES_FOLDER = STATIC_FOLDER + "/mobile/styles", e.JAVASCRIPT_FOLDER = STATIC_FOLDER + "/mobile/javascript", e.FILES_FOLDER = STATIC_FOLDER + "/mobile", e.TH_FOLDER = ASSETS_FOLDER + "/flash/pages/", e.COMMON_FOLDER = ASSETS_FOLDER + "/common", e.BACKGROUND_FOLDER = ASSETS_FOLDER, e.ASSETS_FOLDER = ASSETS_FOLDER + "/mobile", "undefined" != typeof e.initAnalytics && e.initAnalytics("Mobile");
    var c = document.createElement("link");
    c.type = "text/css", c.rel = "stylesheet", c.href = e.STYLES_FOLDER + "/production.css", n.appendChild(c);
    var l = document.createElement("script");
    l.type = "text/javascript", l.charset = "utf-8", l.async = !1, l.addEventListener("load", function() {
        if (DEBUG_MODE) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.charset = "utf-8", t.async = !1, t.src = e.JAVASCRIPT_FOLDER + "/require.js?" + Math.random(), n.appendChild(t)
        } else {
            var t = document.createElement("script");
            t.type = "text/javascript", t.charset = "utf-8", t.async = !1, t.src = e.JAVASCRIPT_FOLDER + "/production.js", n.appendChild(t)
        }
    }), l.src = e.ASSETS_FOLDER + "/properties.js", n.appendChild(l)
}(this);