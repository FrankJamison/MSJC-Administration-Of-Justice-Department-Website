// Favorite Links Listing Script
// Created by Frank Jamison
// August 17, 2006


	createArray();
	
	site[1] = "American Police Beat";
	surl[1] = "http://apbweb.com/";
	desc[1] = "The nation's largest circulated, most avidly read publication for the law enforcement profession."

	site[2] = "California Commission on Peace Officer Standards & Training (POST)";
	surl[2] = "http://post.ca.gov/";
	desc[2] = "The Commission on Peace Officer Standards and Training (POST) was established by the Legislature in 1959 to set minimum selection and training standards for California law enforcement."

	site[3] = "California Department of Corrections";
	surl[3] = "http://www.cdcr.ca.gov/";
	desc[3] = "Official site offering information about programs, criminal issues, facilities, and employment information."

	site[4] = "California Highway Patrol";
	surl[4] = "http://www.chp.ca.gov/";
	desc[4] = "Enforcement policies, driver safety tips, and history."

	site[5] = "California Megan's Law Website";
	surl[5] = "http://www.meganslaw.ca.gov/";
	desc[5] = "Access to information on more than 63,000 persons required to register in California as sex offenders."

	site[6] = "California Office of the Attorney General";
	surl[6] = "http://caag.state.ca.us/";
	desc[6] = "Legal opinions, crime alerts, press releases, and information on the work of the office."

	site[7] = "California Peace Officer Association";
	surl[7] = "http://www.cpoa.org/";
	desc[7] = "Serves the needs of professional law enforcement through issue exploration, resource development, educational opportunities, and legislative advocacy."

	site[8] = "California Police Department & Law Enforcement Agency Listing";
	surl[8] = "http://search.officer.com/agencysearch/agencyresult.asp?state=CA";
	desc[8] = "A comprehensive directory of California law enforcement agencies, associations, and more."

	site[9] = "Federal Bureau of Investigation";
	surl[9] = "http://www.fbi.gov/";
	desc[9] = "The Official Website of the Federal Bureau of Investigation."

	site[10] = "Los Angeles Police Department";
	surl[10] = "http://www.lapdonline.org/";
	desc[10] = "Official site of the LAPD, including community links, programs, heroes, most wanted list, and professional and volunteer opportunities."

	site[11] = "Los Angeles Sheriff's Department";
	surl[11] = "http://www.lasd.org/";
	desc[11] = "Provides a message from the sheriff, unsolved crimes, employment opportunities, and the stance on hate crimes. Includes the mission, history and organization of the department."

	site[12] = "Officer.com";
	surl[12] = "http://officer.com/";
	desc[12] = "Leading news and information source for the police and law enforcement community."

	site[13] = "Orange County Sheriff's Department";
	surl[13] = "http://www.ocsd.org/";
	desc[13] = "OCSD offers online community resources and services for Cad Calls, Inmate Info, Crime Stats and Department Info."

	site[14] = "Peace Officers Research Association of California";
	surl[14] = "http://www.porac.org/";
	desc[14] = "PORAC is a professional federation of local, state and federal law enforcement associations."

	site[15] = "PoliceOne.com";
	surl[15] = "http://policeone.com/";
	desc[15] = "Providing officers with information and resources that make them better able to protect their communities and stay safer on the streets."

	site[16] = "Riverside County Sheriff's Department";
	surl[16] = "http://www.riversidesheriff.org/";
	desc[16] = "Information on the department including employment opportunities, volunteer information, crime prevention, high profile cases, online report form, and image maps of Riverside, California, to determine which station or agency covers your area."

	site[17] = "San Bernardino Sheriff's Department";
	surl[17] = "http://www.co.san-bernardino.ca.us/sheriff";
	desc[17] = "Provides police service for the unincorporated areas of the county and several smaller municipalities."

	site[18] = "San Diego Police Department";
	surl[18] = "http://www.sandiego.gov/police";
	desc[18] = "General information, crime facts and figures, police services, crime prevention and education, and career information."

	site[19] = "San Diego Sheriff's Department";
	surl[19] = "http://sdsheriff.net/home/";
	desc[19] = "The department provides general law enforcement and jail functions for the people of San Diego County in a service area of approximately 4,200 square miles."

	site[20] = "U.S. Customs and Border Protection";
	surl[20] = "http://www.cbp.gov/";
	desc[20] = "Overview of services CBP fulfills for the United States and where to find information about these services."

	function createArray() {
		site = new Array();
		surl = new Array();
		desc = new Array();
	}
	
	var LINKS = site.length;
	
	for (i=1; i < LINKS; i++) {
		document.write('<p><a href="javascript:href(\''+surl[i]+'\')" class="bigLink">'+site[i]+'</a><br />');
		document.write(desc[i]+'</p>');
	}
