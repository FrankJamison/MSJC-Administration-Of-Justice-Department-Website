// Corrections Core Course Listing Script
// Created by Frank Jamison
// August 17, 2006

	createArray();
	
	courseNumbr[1] = 'AJ 101';
	courseTitle[1] = "Criminal Law";
	courseUnits[1] = "3 Units";
	courseLinks[1] = "aj101.html"

	courseNumbr[2] = 'AJ 105';
	courseTitle[2] = "Public Safety Communications";
	courseUnits[2] = "3 Units";
	courseLinks[2] = "aj105.html"

	courseNumbr[3] = 'CORR 101';
	courseTitle[3] = "Introduction to Correctional Science";
	courseUnits[3] = "3 Units";
	courseLinks[3] = "corr101.html"

	courseNumbr[4] = 'CORR 102';
	courseTitle[4] = "Control and Supervision in Corrections";
	courseUnits[4] = "3 Units";
	courseLinks[4] = "corr102.html"

	courseNumbr[5] = 'CORR 103';
	courseTitle[5] = "Correctional Interviewing and Counseling";
	courseUnits[5] = "3 Units";
	courseLinks[5] = "corr103.html"

	/* ----------------------------------- */
	/* Begin Menu Script (Do Not Edit) */
	/* ----------------------------------- */
	
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
