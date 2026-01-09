// Jam Express Drop-Down Menu Script 1.0
// Created by Frank Jamison
// August 20, 2006
// All Rights Reserved
// Used with Permission

jamExpressMenu();

/* Begin Menu Items */

tmenu[1] = 'Home';
tlink[1] = "index.html";
ttype[1] = "static";

tmenu[2] = new Array(4);
tlink[2] = "#";
ttype[2] = "dropdown";
tmenu[2][0] = 'Degrees &amp; Certificates'
tmenu[2][1] = '<a href="degree.html">Associate in Science Degree</a>'
tmenu[2][2] = '<a href="certificate.html">Admin. of Justice Certificate</a>'
tmenu[2][3] = '<a href="corrections.html">Corrections Certificate</a>'

tmenu[3] = new Array(3);
tlink[3] = "#";
ttype[3] = "dropdown";
tmenu[3][0] = 'Course Descriptions'
tmenu[3][1] = '<a href="coursesaj.html">Administration of Justice</a>'
tmenu[3][2] = '<a href="coursescorr.html">Corrections</a>'

tmenu[4] = new Array(4);
tlink[4] = "#";
ttype[4] = "dropdown";
tmenu[4][0] = 'Resources'
tmenu[4][1] = '<a href="careers.html">Career Opportunities</a>'
tmenu[4][2] = '<a href="links.html">Online Resources</a>'
tmenu[4][3] = '<a href="javascript:href(\'http://www.msjc.edu/schedule/\')">Course Schedule</a>'

tmenu[5] = 'Contact Us';
tlink[5] = "contact.html";
ttype[5] = "static";


function jamExpressMenu() {
    tmenu = new Array();
    tlink = new Array();
    ttype = new Array();
}

function showMe(i) {
    var id = 'subMenu' + i + '';
    var sm = document.getElementById(id);
    if (!sm) {
        return;
    }
    sm.style.display = 'block';
}

function hideMe(i) {
    var id = 'subMenu' + i + '';
    var sm = document.getElementById(id);
    if (!sm) {
        return;
    }
    sm.style.display = 'none';
}

var hide;
var menuAlign = getStyle();
if (menuAlign !== 'left' && menuAlign !== 'right') {
    menuAlign = 'right';
}
var MENU = tmenu.length;



document.write('<div id="jamExpressMenu"><ul id="topMenu"><li class="endSpace">&nbsp;</li>');

if (menuAlign == 'left') {
    for (var i = 1; i < MENU; i++) {
        if (ttype[i] == "dropdown") {
            document.write('<li class="topMenuLink" id="topMenu' + i + '"><a href="' + tlink[i] + '" class="' + ttype[i] + '" onmouseover="showMe(' + i + ');" onmouseout="hide=setTimeout(\'hideMe(' + i + ')\',250)">' + tmenu[i][0] + '</a>');
            document.write('<ul class="subMenu" id="subMenu' + i + '">');
            for (var j = 1; j < tmenu[i].length; j++) {
                document.write('<li class="subMenuLink" onmouseover="clearTimeout(hide);" onmouseout="hide=setTimeout(\'hideMe(' + i + ')\',250)">' + tmenu[i][j] + '</li>');
            }
            document.write('</ul></li>');
        } else {
            document.write('<li class="topMenuLink" id="topMenu' + i + '"><a href="' + tlink[i] + '" class="' + ttype[i] + '">' + tmenu[i] + '</a></li>');
        }
    }
}

if (menuAlign == 'right') {
    for (var i = MENU - 1; i > 0; i--) {
        if (ttype[i] == "dropdown") {
            document.write('<li class="topMenuLink" id="topMenu' + i + '"><a href="' + tlink[i] + '" class="' + ttype[i] + '" onmouseover="showMe(' + i + ');" onmouseout="hide=setTimeout(\'hideMe(' + i + ')\',250)">' + tmenu[i][0] + '</a>');
            document.write('<ul class="subMenu" id="subMenu' + i + '">');
            for (var j = 1; j < tmenu[i].length; j++) {
                document.write('<li class="subMenuLink" onmouseover="clearTimeout(hide);" onmouseout="hide=setTimeout(\'hideMe(' + i + ')\',250)">' + tmenu[i][j] + '</li>');
            }
            document.write('</ul></li>');
        } else {
            document.write('<li class="topMenuLink" id="topMenu' + i + '"><a href="' + tlink[i] + '" class="' + ttype[i] + '">' + tmenu[i] + '</a></li>');
        }
    }
}

document.write('<li class="endSpace">&nbsp;</li></ul><br class="clearit" /></div>');

function getStyle() {
    var sheets = document.styleSheets;
    var ie = (navigator.appVersion.indexOf("MSIE") != -1);

    for (var i = 0; i < sheets.length; i++) {
        var rules;
        try {
            rules = ie ? sheets[i].rules : sheets[i].cssRules;
        } catch (e) {
            // Some stylesheets can be inaccessible (missing file, blocked, etc.)
            continue;
        }
        if (!rules) {
            continue;
        }

        for (var j = 0; j < rules.length; j++) {
            var rule = rules[j];
            if (!rule || !rule.selectorText) {
                continue;
            }
            if (rule.selectorText == ".topMenuLink") {
                if (ie && rule.style && rule.style.styleFloat) {
                    return rule.style.styleFloat;
                }
                if (rule.style && typeof rule.style.getPropertyValue === 'function') {
                    return rule.style.getPropertyValue('float');
                }
                if (rule.style && rule.style.float) {
                    return rule.style.float;
                }
            }
        }
    }

    // Safe default if we can't detect it.
    return 'right';
}