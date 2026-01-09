// Corrections Course Listing Script
// Created by Frank Jamison
// August 17, 2006

	createArray();
	
	courseNumbr[1] = 'CORR 101';
	courseTitle[1] = "Introduction to Correctional Science";
	courseUnits[1] = "3 Units";
	courseLinks[1] = "corr101.html"

	courseNumbr[2] = 'CORR 102';
	courseTitle[2] = "Control and Supervision in Corrections";
	courseUnits[2] = "3 Units";
	courseLinks[2] = "corr102.html"

	courseNumbr[3] = 'CORR 103';
	courseTitle[3] = "Correctional Interviewing and Counseling";
	courseUnits[3] = "3 Units";
	courseLinks[3] = "corr103.html"

	courseNumbr[4] = 'CORR 104';
	courseTitle[4] = "Legal Aspects of Corrections";
	courseUnits[4] = "3 Units";
	courseLinks[4] = "corr104.html"

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
