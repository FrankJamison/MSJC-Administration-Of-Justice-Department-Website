// Popup Window Footer Script
// Created by Frank Jamison
// August 17, 2006


document.write('<div id="print">');
document.write('<form style="margin: 0px">');
document.write('<input type="button" value="Print" onClick=\'window.print()\' class="button-popups" onmouseover="this.className=\'buttonon-popups\'" onmouseout="this.className=\'button-popups\'"><br />');
document.write('</form></div>');

document.write('<div id="close">');
document.write('<form style="margin: 0px">');
document.write('<input type="button" value="Close" onClick=\'window.close()\' class="button-popups" onmouseover="this.className=\'buttonon-popups\'" onmouseout="this.className=\'button-popups\'"><br />');
document.write('</form></div>');

function getWindowHeight() {
	var windowHeight = 0;
	if (typeof(window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
	} else {
		if (document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		} else {
			if (document.body && document.body.clientHeight) {
				windowHeight = document.body.clientHeight;
			}
		}
	}
	return windowHeight;
}

function setFooter() {
	var wh = getWindowHeight();
	var hh = document.getElementById('header').offsetHeight;
	var ch = document.getElementById('content').offsetHeight;
	var fh = 23;
	ph = (-1) * (wh - (hh + ch + fh));
	window.resizeBy(0, ph);
	
}


function href(URL) {
	window.opener.location.href=URL;
}

window.onload = function() {
	setFooter();
}

window.onresize = function() {
	setFooter();
}

