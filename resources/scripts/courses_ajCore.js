// Administration of Justice Core Course Listing Script
// Created by Frank Jamison
// August 17, 2006


	createArray();
	
	courseNumbr[1] = 'AJ 101';
	courseTitle[1] = "Criminal Law";
	courseUnits[1] = "3 Units";
	courseLinks[1] = "aj101.html"

	courseNumbr[2] = 'AJ 102';
	courseTitle[2] = "Introduction to Law Enforcement";
	courseUnits[2] = "3 Units";
	courseLinks[2] = "aj102.html"

	courseNumbr[3] = 'AJ 106';
	courseTitle[3] = "Juvenile Procedures I";
	courseUnits[3] = "3 Units";
	courseLinks[3] = "aj106.html"

	courseNumbr[4] = 'AJ 111';
	courseTitle[4] = "Administration of Justice";
	courseUnits[4] = "3 Units";
	courseLinks[4] = "aj111.html"

	courseNumbr[5] = 'AJ 118';
	courseTitle[5] = "Police Community Relations";
	courseUnits[5] = "3 Units";
	courseLinks[5] = "aj118.html"

	function createArray() {
		courseNumbr = new Array();
		courseTitle = new Array();
		courseUnits = new Array();
		courseLinks = new Array();
	}
	
	var COURSES = courseNumbr.length;
	
	for (i=1; i < COURSES; i++) {
		document.write('<div class="courseNum"><a href="javascript:popUp(\'courses/'+courseLinks[i]+'\')" title="Click here to view course decsription">'+courseNumbr[i]+'</a></div>');
		document.write('<div class="courseTitle">'+courseTitle[i]+'</div>');
		document.write('<div class="courseUnits">'+courseUnits[i]+'</div><br />');
	}
