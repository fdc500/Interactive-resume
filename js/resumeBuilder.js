var work = {
	"jobs" : [
	{
		"employer" : "Zettabyte Technology S.R.L.",
		"employerWWW" : "http://www.zettabyte.do",
		"title" : "General Manager",
		"location" : "Santiago de los Caballeros",
		"dates" : "January 2015 to Current",
		"description" : "This Position Details section contains general information about the job – the current or requested classification, working title, pay range, exemption status, department name and number, position number, percentage of effort, the job description summary, comparable positions, etc."
	}, 
	{
		"employer" : "Asociación Cibao",
		"employerWWW" : "http://www.asociacioncibao.com.do",
		"title" : "Credit Card Manager",
		"location" : "Santiago de los Caballeros",
		"dates" : "January 2007 to Current",
		"description" : "This Position Details section contains general information about the job – the current or requested classification, working title, pay range, exemption status, department name and number, position number, percentage of effort, the job description summary, comparable positions, etc."
	}, 
	{
		"employer" : "Republic Bank",
		"employerWWW" : "https://www.republicbank.com",
		"title" : "Operations Manager",
		"location" : "Santo Domingo",
		"dates" : "January 2002 to December 2006",
		"description" : "This Position Details section contains general information about the job – the current or requested classification, working title, pay range, exemption status, department name and number, position number, percentage of effort, the job description summary, comparable positions, etc."
	}
	], 
	"display" : function() {
		if (work.jobs.length > 0) {
			var formattedJobs = HTMLworkStart;
			for (var job in work.jobs) {
				formattedJobs += HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				formattedJobs = formattedJobs.replace("%href%", work.jobs[job].employerWWW);
				formattedJobs += HTMLworkTitle.replace("%data%", work.jobs[job].title);
				formattedJobs += HTMLworkDates.replace("%data%", work.jobs[job].dates);
				formattedJobs += HTMLworkLocation.replace("%data%", work.jobs[job].location);	
				formattedJobs += HTMLworkDescription.replace("%data%", work.jobs[job].description);		
				}
			formattedJobs += '</div>';
			$("#workExperience").append([formattedJobs]);
		}
	}
}

var projects = {
	"projects" : [
	{
		"title" : "Classic Arcade Game: Frogger",
		"dates" : "Ago 24, 2015",
		"description" : "Visual assets, a game loop engine, player characters and enemies, lets you recreate the classic arcade game Frogger.",
		"images" : ["images/frogger300x200.jpg", "images/frogger2.jpg"]
	},
		{
		"title" : "Map Project",
		"dates" : "Nov 30, 2015",
		"description" : "Single-page application featuring a map, including: map markers to identify popular locations, a search function to easily discover these locations, and a listview to support simple browsing of all locations.",
		"images" : ["images/map300x200.jpg", "images/map2.jpg"]
	}
	], 
	"display" : function() {
		if (projects.projects.length > 0) {
			var formattedProjects = HTMLprojectStart;
			for (var project in projects.projects) {
				var formattedProjectEntries = "";
				formattedProjectEntries += HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				formattedProjectEntries += HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				formattedProjectEntries += HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				for (var image in projects.projects[project].images) {
					formattedProjectEntries += HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				}
				$("#projects").append([formattedProjects]);
				$(".project-entry:last").append([formattedProjectEntries]);
			}
		}	
	}
}

var bio = {
	"name" : "Felipe De Castro V.", 
	"pic_url" : "images/fdcv2.jpg",
	"role" : "Software Engineer",
	"welcome_message" : "Mobil apps and front-end Web developer, as well as an amateur photographer.",
	"contacts" : {
		"mobile" : "829-986-1950",
		"email" : "fdecastro@zettabyte.do",
		"github" : "fdc500",
		"twitter" : "@fdcv500",
		"location" : "Santiago de los Caballeros, R.D."
	},
	"skills" : ["Software Developer", "Web Design", "Java", "Database Manager"], 
	"display" : function() {
		if (bio.length !== "undefined") {
			var formattedName = HTMLheaderName.replace("%data%", bio.name);
			var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			var formattedContactInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
			formattedContactInfo += HTMLemail.replace("%data%", bio.contacts.email);
			formattedContactInfo += HTMLtwitter.replace("%data%", bio.contacts.twitter);
			formattedContactInfo += HTMLgithub.replace("%data%", bio.contacts.github);
			formattedContactInfo += HTMLlocation.replace("%data%", bio.contacts.location);
			var formattedPicUrl = HTMLbioPic.replace("%data%", bio.pic_url);
			var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
			
			$("#header").prepend([formattedName]);
			$(formattedRole).insertAfter("#name");
			$("#topContacts").append([formattedContactInfo]);
			
			$(formattedPicUrl).insertAfter("#topContacts");
			$("#footerContacts").append(formattedContactInfo);
		}
		if (bio.skills.length > 0) {
			var formattedSkills = '<ul id="skills" class="flex-items"></ul>';
			$("#header").append([HTMLskillsStart]);
			$("#header").append([formattedSkills]);
			for (skill in bio.skills) {
				formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append([formattedSkills]);
			}
			//formattedSkills += '';
			$(formattedWelcomeMessage).insertAfter("#skills");
		}		
	}
}

var education = {
	"school" : [
	{
		"name" : "Universidad Abierta Para Adultos, UAPA",
		"degree" : "Software Engeeniring",
		"major" : "SE",
		"location" : "Santiago de los Caballeros",
		"country" : "Dominican Republic",	
		"dates" : 2014, 
		"url" : "http://www.uapa.edu.do"
	}
	], 
	"onlineCourses" : [
	{
     	"title" : "Front-End Web Developer Nanodegree",
     	"school" : "Udacity",
     	"date" : 2015,
     	"url" : "https://www.udacity.com"
	}
	], 
	"display" : function() {
		if (education.school.length > 0) {
			var formattedSchoolStart = HTMLschoolStart;
			for (var school in education.school) {
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[school].name);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.school[school].degree);
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.school[school].major);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.school[school].dates);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[school].location);
				$("#education").append([formattedSchoolStart]);
				$(".education-entry").append(formattedSchoolName + formattedSchoolDegree);
				$(".education-entry").append([formattedSchoolDates]);
				$(".education-entry").append([formattedSchoolLocation]);
				$(".education-entry").append([formattedSchoolMajor]);
				$("#schoolName").attr("href", education.school[school].url);
			}
		}
		if (education.onlineCourses.length > 0) {
			var formattedOnlineClasses = HTMLonlineClasses;
			$("#education").append([formattedSchoolStart]);
			$(".education-entry").last().append([formattedOnlineClasses]);
			for (var course in education.onlineCourses) {
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append([formattedOnlineDates]);
				$(".education-entry:last").append([formattedOnlineUrl]);
				$("#onlineCourse").attr("href", education.onlineCourses[course].url);
				$("#url").attr("href", education.onlineCourses[course].url);
			}
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});

$("#main").append([internationalizeButton]);
function inName() {
	var nameArray = bio.name.trim().split(" ");
	var internationalName = "";
	for (splitName in nameArray) {
		if (splitName == 0) {
			internationalName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].substr(1).toLowerCase() + " "; 
		} else {
			internationalName += nameArray[splitName].toUpperCase() + " ";	
		}
	}
	return internationalName.trim();
}

