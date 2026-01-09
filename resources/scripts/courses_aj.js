// Administration of Justice Course Listing Script
// Created by Frank Jamison
// August 17, 2006

	createArray();
	
	courseNumbr[1] = 'AJ 071';
	courseTitle[1] = "Penal Code 832 Instruction";
	courseUnits[1] = "3 Units";
	courseLinks[1] = "aj071.html"

	courseNumbr[2] = 'AJ 101';
	courseTitle[2] = "Criminal Law";
	courseUnits[2] = "3 Units";
	courseLinks[2] = "aj101.html"

	courseNumbr[3] = 'AJ 102';
	courseTitle[3] = "Introduction to Law Enforcement";
	courseUnits[3] = "3 Units";
	courseLinks[3] = "aj102.html"

	courseNumbr[4] = 'AJ 103';
	courseTitle[4] = "Criminal Evidence";
	courseUnits[4] = "3 Units";
	courseLinks[4] = "aj103.html"

	courseNumbr[5] = 'AJ 104';
	courseTitle[5] = "Patrol Procedures";
	courseUnits[5] = "3 Units";
	courseLinks[5] = "aj104.html"

	courseNumbr[6] = 'AJ 105';
	courseTitle[6] = "Public Safety Communications";
	courseUnits[6] = "3 Units";
	courseLinks[6] = "aj105.html"

	courseNumbr[7] = 'AJ 106';
	courseTitle[7] = "Juvenile Procedures I";
	courseUnits[7] = "3 Units";
	courseLinks[7] = "aj106.html"

	courseNumbr[8] = 'AJ 108';
	courseTitle[8] = "Criminal Investigation";
	courseUnits[8] = "3 Units";
	courseLinks[8] = "aj108.html"

	courseNumbr[9] = 'AJ 111';
	courseTitle[9] = "Administration of Justice";
	courseUnits[9] = "3 Units";
	courseLinks[9] = "aj111.html"

	courseNumbr[10] = 'AJ 114';
	courseTitle[10] = "Laws of Arrest, Search and Seizure";
	courseUnits[10] = "3 Units";
	courseLinks[10] = "aj114.html"

	courseNumbr[11] = 'AJ 118';
	courseTitle[11] = "Police Community Relations";
	courseUnits[11] = "3 Units";
	courseLinks[11] = "aj118.html"

	courseNumbr[12] = 'AJ 125';
	courseTitle[12] = "Vice Control";
	courseUnits[12] = "3 Units";
	courseLinks[12] = "aj125.html"

	courseNumbr[13] = 'AJ 127';
	courseTitle[13] = "Defensive Tactics for Public Safety Personnel";
	courseUnits[13] = "3 Units";
	courseLinks[13] = "aj127.html"

	courseNumbr[14] = 'AJ 128';
	courseTitle[14] = "Traffic Control, Enforcement, and Investigation";
	courseUnits[14] = "3 Units";
	courseLinks[14] = "aj128.html"

	courseNumbr[15] = 'AJ 140';
	courseTitle[15] = "Principles of Biology in Forensics<img src=\"resources/images/image_new.gif\" alt=\"New Course\" title=\"New this semester\" width=\"31\" height=\"12\" class=\"newCourse\" />";
	courseUnits[15] = "4 Units";
	courseLinks[15] = "aj140.html"

	courseNumbr[16] = 'AJ 141';
	courseTitle[16] = "Principles of Chemistry in Forensics<img src=\"resources/images/image_new.gif\" alt=\"New Course\" title=\"New this semester\" width=\"31\" height=\"12\" class=\"newCourse\" />";
	courseUnits[16] = "4 Units";
	courseLinks[16] = "aj141.html"

	courseNumbr[17] = 'AJ 142';
	courseTitle[17] = "Principles of Toxicology in Forensics<img src=\"resources/images/image_new.gif\" alt=\"New Course\" title=\"New this semester\" width=\"31\" height=\"12\" class=\"newCourse\" />";
	courseUnits[17] = "4 Units";
	courseLinks[17] = "aj142.html"

	courseNumbr[18] = 'AJ 149';
	courseTitle[18] = "Occupational Internship: Administration Of Justice";
	courseUnits[18] = "1-4 Units";
	courseLinks[18] = "aj149.html"

	courseNumbr[19] = 'AJ 299';
	courseTitle[19] = "Special Projects: Administration Of Justice";
	courseUnits[19] = "1-4 Units";
	courseLinks[19] = "aj299.html"

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
