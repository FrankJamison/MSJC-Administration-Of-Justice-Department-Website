// Resolution Dependent Popup Window Script
// Created by Frank Jamison
// August 17, 2006


var popup	 			    = "yes"			// Open window in popup mode (yes/no)
var scrollbarS 			= "no"			// Popup window scrollbar (yes/no)

switch(screen.width) {
	case 640: 
		var height = 350				// Popup window height
		var width  = 500				// Popup window width
		break;
	case 800: 
		var height = 300				// Popup window height
		var width  = 400				// Popup window width
		break;
	case 1024: 
		var height = 384				// Popup window height
		var width  = 512				// Popup window width
		break;
	case 1152: 
		var height = 432				// Popup window height
		var width  = 576				// Popup window width
		break;
	case 1280: 
		var height = 512				// Popup window height
		var width  = 640				// Popup window width
		break;
	default : 
		var height = 512				// Popup window height
		var width  = 640				// Popup window width
		break;
}

function popUp(URL) {
	day = new Date();
	id  = day.getTime();
	
	if (popup == "yes") {
		eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=' + scrollbarS + ',location=0,statusbar=0,menubar=0,resizable=0,left=125,top=100,width='+width+',height='+height+'');"); }
		
	else 
		if (popup == "no") {
			eval("page" + id + " = window.open(URL);"); } }
