// Career Options Script
// Created by Frank Jamison
// August 17, 2006

	createArray();
	
	col1[1] = 'Accident Investigator';
	col2[1] = "Alcoholism Counselor";
	col3[1] = "Animal Control"

	col1[2] = 'Border Patrol Agent';
	col2[2] = "Correctional Counselor";
	col3[2] = "Corrections Officer"

	col1[3] = 'Counselor';
	col2[3] = "Criminal Investigator";
	col3[3] = "Customs Agent"

	col1[4] = 'Deputy Sheriff';
	col2[4] = "Drug Enforcement";
	col3[4] = "Evidence Technician"

	col1[5] = 'FBI Agent';
	col2[5] = "Fingerprint Classifier";
	col3[5] = "Forest Ranger"

	col1[6] = 'Highway Patrol Officer';
	col2[6] = "Industrial Security Officer";
	col3[6] = "Insurance Investigator"

	col1[7] = 'Investigator Trainer';
	col2[7] = "Jailer";
	col3[7] = "Law"

	col1[8] = 'Legal Secretary';
	col2[8] = "Matron";
	col3[8] = "Officer Agent Drug Abuse"

	col1[9] = 'Paralegal';
	col2[9] = "Park Ranger";
	col3[9] = "Parole Agent"

	col1[10] = 'Police Clerk';
	col2[10] = "Police Dispatcher";
	col3[10] = "Police Officer"

	col1[11] = 'Polygraph Operator';
	col2[11] = "Private Detective";
	col3[11] = "Probation Officer"

	col1[12] = 'Security Specialist';
	col2[12] = "Store Detective";
	col3[12] = "Warden"

	function createArray() {
		col1 = new Array();
		col2 = new Array();
		col3 = new Array();
	}
	
	var ROWS = col1.length;
	
	for (i=1; i < ROWS; i++) {
		document.write('<div class="col1">'+col1[i]+'</div>');
		document.write('<div class="col2">'+col2[i]+'</div>');
		document.write('<div class="col3">'+col3[i]+'</div><br />');
	}
