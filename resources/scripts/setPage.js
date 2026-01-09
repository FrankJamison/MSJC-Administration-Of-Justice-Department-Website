// Resolution Dependent Page Setup and Stylesheet Selection Script
// Created by Frank Jamison
// August 17, 2006

window.onload = initPage;

checkBrowserWidth();

attachEventListener(window, "resize", checkBrowserWidth, false);
attachEventListener(window, "resize", initPage, false);
attachEventListener(window, "load", initPage, false);

function checkBrowserWidth() {
    var theWidth = getBrowserWidth();

    if (theWidth == 0) {
        var resolutionCookie = document.cookie.match(/(^|;)msjc_res_layout[^;]*(;|$)/);

        if (resolutionCookie != null) {
            setStylesheet(unescape(resolutionCookie[0].split("=")[1]));
        }
        addLoadListener(checkBrowserWidth);

        return false;
    }

    // Monitor Resolutions/Screen Widths 800px or Below
    if (theWidth <= 800) {
        setStylesheet("800 x 600");
        document.cookie = "msjc_res_layout=" + escape("800 x 600");
    }

    // Monitor Resolutions/Screen Widths Between 1025px and 1152px
    else if (theWidth > 1025 && theWidth <= 1152) {
        setStylesheet("1152 x 864");
        document.cookie = "msjc_res_layout=" + escape("1152 x 864");
    }

    // Monitor Resolutions/Screen Widths Between 1153px and 1280px
    else if (theWidth > 1153) {
        setStylesheet("1280 x 1024");
        document.cookie = "msjc_res_layout=" + escape("1280 x 1024");
    }

    // Default Monitor Resolutions/Screen Width Between 801px and 1024px
    else {
        setStylesheet("");
        document.cookie = "msjc_res_layout=";
    }

    return true;
};

function getBrowserWidth() {
    if (window.innerWidth) {
        return window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth != 0) {
        return document.documentElement.clientWidth;
    } else if (document.body) {
        return document.body.clientWidth;
    }
    return 0;
};

function setStylesheet(styleTitle) {
    var currTag;

    if (document.getElementsByTagName) {
        for (var i = 0;
            (currTag = document.getElementsByTagName("link")[i]); i++) {
            if (currTag.getAttribute("rel").indexOf("style") != -1 && currTag.getAttribute("title")) {
                currTag.disabled = true;
                if (currTag.getAttribute("title") == styleTitle) {
                    currTag.disabled = false;
                }
            }
        }
    }
    return true;
};

function addLoadListener(fn) {
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('load', fn, false);
    } else if (typeof document.addEventListener != 'undefined') {
        document.addEventListener('load', fn, false);
    } else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent('onload', fn);
    } else {
        return false;
    }
    return true;
};

function attachEventListener(target, eventType, functionRef, capture) {
    if (typeof target.addEventListener != "undefined") {
        target.addEventListener(eventType, functionRef, capture);
    } else if (typeof target.attachEvent != "undefined") {
        target.attachEvent("on" + eventType, functionRef);
    } else {
        return false;
    }
    return true;
};

function initPage(wh) {

    var h = document.getElementById('header');
    var c = document.getElementById('content');
    var s = document.getElementById('sidebar');
    var p = document.getElementById('pageInfo');
    var f = document.getElementById('footer');

    setContent(h, c, s, p, f);

};

function setContent(h, c, s, p, f) {

    p.style.height = "";
    s.style.height = "";
    c.style.height = "";
    c.style.paddingBottom = "";
    s.style.paddingBottom = "";
    p.style.paddingBottom = "";

    var bh = getBodyHeight(h, c, f);
    var wh = getWindowHeight();
    var ww = getWindowWidth();
    var hw = h.offsetWidth;
    var hh = h.offsetHeight;
    var ch = c.offsetHeight;
    var sh = s.offsetHeight;
    var ph = p.offsetHeight;
    var fh = f.offsetHeight;

    if (navigator.appName.indexOf("Microsoft") == -1 && navigator.userAgent.indexOf('Opera') == -1 && ww < hw) {
        wh -= 19;
    } else if (navigator.userAgent.indexOf('Opera') != -1 && ww < hw) {
        wh -= 17;
    }

    if (bh < wh) {
        c.style.height = wh - hh - fh + 'px';
        ch = wh - hh - fh;
        p.style.height = wh - hh - fh + 'px';
        s.style.height = wh - hh - fh + 'px';
    } else if (bh > wh) {
        // Footer is fixed to the viewport; add bottom padding only when scrolling
        // so content is not hidden behind the footer.
        var footerPad = fh + 20;
        c.style.paddingBottom = footerPad + 'px';
        s.style.paddingBottom = footerPad + 'px';
        p.style.paddingBottom = footerPad + 'px';

        if (ch != sh && ch != ph) {
            if (ph > sh) ch = ph;
            else ch = sh;
        }

        if ((ch == sh || ch == ph) && sh > ph) {
            p.style.height = sh + 'px';
            c.style.height = sh + 'px';
            // Keep existing behavior, but also reserve space for fixed footer.
            c.style.paddingBottom = footerPad + 'px';
            s.style.paddingBottom = footerPad + 'px';
            p.style.paddingBottom = footerPad + 'px';
        } else if ((ch == sh || ch == ph) && sh < ph) {
            s.style.height = ph - 20 + 'px';
            c.style.height = ph - 20 + 'px';
        }
    }
}


function getWindowHeight() {
    var windowHeight = 0;

    if (typeof(window.innerHeight) == 'number')
        windowHeight = window.innerHeight;

    else {

        if (document.documentElement && document.documentElement.clientHeight)
            windowHeight = document.documentElement.clientHeight;

        else {
            if (document.body && document.body.clientHeight)
                windowHeight = document.body.clientHeight;
        };
    };

    return windowHeight;
};

function getWindowWidth() {
    var windowWidth = 0;

    if (typeof(window.innerWidth) == 'number')
        windowWidth = window.innerWidth;

    else {

        if (document.documentElement && document.documentElement.clientWidth)
            windowWidth = document.documentElement.clientWidth;

        else {
            if (document.body && document.body.clientWidth)
                windowWidth = document.body.clientWidth;
        };
    };

    return windowWidth;
};

function getBodyHeight(h, c, f) {
    var hh = h.offsetHeight;
    var ch = c.offsetHeight;
    var fh = f.offsetHeight;
    var bh = (hh + ch + fh);
    return bh;
};

function href(URL) {
    window.open(URL);
}