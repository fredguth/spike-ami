! function(a) {
    "use strict";

    function b(a, b) {
        document.getElementById(a) && (document.getElementById(a).innerHTML = b)
    }

    function c(a, b) {
        document.getElementById(a) && document.getElementById(a).setAttribute("title", b)
    }
    String.format || (String.format = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return a.replace(/{(\d+)}/g, function(a, c) {
            return "undefined" != typeof b[c] ? b[c] : a
        })
    });
    var d = a.LANGS[0],
        e = a.navigator.userLanguage || a.navigator.language;
    if (void 0 !== e && (e = e.split("-")[0].toLowerCase()) != d)
        for (var f = 0; f < LANGS.length; f++)
            if (LANGS[f] == e) {
                d = LANGS[f];
                break
            }
    a.localPending = function() {
        var d = a.document;
        b("popupTitle", a.PUBLICATION_NAME);
        var e = "";
        switch (a.PUBLICATION_TYPE) {
            case "book":
                e = LOCALS["FLIP BOOK"];
                break;
            case "catalog":
                e = LOCALS["DIGITAL CATALOG"];
                break;
            case "document":
                e = LOCALS.DOCUMENT;
                break;
            case "magazine":
                e = LOCALS["DIGITAL MAGAZINE"];
                break;
            case "photoalbum":
                e = LOCALS["PHOTO GALLERY"]
        }
        var f = String.format(LOCALS.SEO_INFO_TEXT, a.PUBLICATION_NAME, " ");
        if (a.detector.device.pc && (f += "<br/><br/>" + String.format(LOCALS.NOTIFICATION_TEXT, e), f += '<br/><br/><a id="flashLink" href="http://get.adobe.com/flashplayer/" title="Install Flash Player"><img src="./styles/get_flash_player.jpg" alt="Install Flash Player" border="0" style="border:0;display:block;" width="160" height="41"></a>'), b("popupText", f), c("closeButton", LOCALS.CLOSE_BUTTON), !a.HTML5_PUBLICATION && !a.detector.publisher.isOn) {
            var g = !!window.sessionStorage;
            a.detector.device.pc && g && !window.sessionStorage.getItem("infoHasBeenShown") && (d.getElementById("infoPopUp").style.display = "block", d.getElementById("popUp").style.display = "block", window.sessionStorage.setItem("infoHasBeenShown", !0))
        }
        b("downloadPageLink", LOCALS.DOWNLOAD_PAGE), b("downloadPdfLink", LOCALS.DOWNLOAD_TITLE + " PDF"), b("downloadMacLink", LOCALS.DOWNLOAD_MAC), b("downloadWindowsLink", LOCALS.DOWNLOAD_WIN), c("tocLink", LOCALS.TOC_TITLE), b("tocLabel", LOCALS.TOC_TITLE), c("prevPageArrow", LOCALS.PREV_PAGE), c("nextPageArrow", LOCALS.NEXT_PAGE), c("tocPageArrow", LOCALS.TOC_TITLE), b("pageLabel", LOCALS.PAGE), b("basicVersionTitle", LOCALS.BASIC_VERSION), c("infoButton", LOCALS.ABOUT_TITLE), c("zoomIn", LOCALS.ZOOM_IN), c("zoomOut", LOCALS.ZOOM_OUT), c("facebookShare", LOCALS.SHARE_FACEBOOK), b("facebookShareText", LOCALS.SHARE_FACEBOOK), c("twitterShare", LOCALS.SHARE_TWITTER), b("twitterShareText", LOCALS.SHARE_TWITTER), c("linkedinShare", LOCALS.SHARE_LINKEDIN), b("linkedinShareText", LOCALS.SHARE_LINKEDIN), c("tumblrShare", LOCALS.SHARE_TUMBLR), b("tumblrShareText", LOCALS.SHARE_TUMBLR), c("googleShare", LOCALS.SHARE_GOOGLE), b("googleShareText", LOCALS.SHARE_GOOGLE), c("mailShare", LOCALS.SHARE_EMAIL), b("mailShareText", LOCALS.SHARE_EMAIL), c("vkShare", LOCALS.SHARE_VK), b("vkShareText", LOCALS.SHARE_VK), b("poweredBy", LOCALS.POWERED_BY), b("tocTitle", LOCALS.TOC_TITLE)
    }, a.loadScript(a.STATIC_FOLDER + "/javascript/locales/" + d + "/textlang.js", function() {})
}(this);