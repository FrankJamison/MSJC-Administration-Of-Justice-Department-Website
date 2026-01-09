// Resolution Dependent Popup Stylesheet Selection Script
// Created by Frank Jamison
// August 17, 2006

	var currTag;
	var styleTitle;
	
	switch(screen.width) {
    case 640: 
      styleTitle = '800 x 600';
      break;
    case 800: 
      styleTitle = '800 x 600';
      break;
    case 1152: 
      styleTitle = '1152 x 864';
      break;
    case 1280: 
      styleTitle = '1280 x 1024';
      break;
    case 1600: 
      styleTitle = '1280 x 1024';
      break;
    default : 
      styleTitle = '';
      break;
  }
	
		for (var i = 0; (currTag = document.getElementsByTagName("link")[i]); i++) {
			if (currTag.getAttribute("rel").indexOf("style") != -1 && currTag.getAttribute("title")) {
				currTag.disabled = true;
				if(currTag.getAttribute("title") == styleTitle) { currTag.disabled = false;}
			}
	}
