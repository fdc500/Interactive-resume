'use strict';
$(function() {
	var model = {
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
		"bio": {
			"name": "Felipe De Castro V.",
			"pic_url": "images/fdcv2.jpg",
			"role": "Software Engineer",
			"welcome_message" : "Mobil apps and front-end Web developer, as well as an amateur photographer.",
			"contacts": {
				"mobile": "829-986-1950",
				"email": "fdecastro@zettabyte.do",
				"github": "fdc500",
				"twitter": "@fdcv500",
				"location": "Santiago de los Caballeros, R.D."
			},
			"skills": ["Software Developer", "Web Design", "Java", "Database Manager"],
		},
		"education": {
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
			]
		},
        init: function() {
        }
    };

    var controller = {
        init: function() {
        },

        getJobs: function() {
            return model.jobs;
        },
        getBio: function() {
        	return model.bio;
        },
        getProjects: function() {
        	return model.projects;
        },
        getEducation: function() {
        	return model.education;
        }
    };

    var viewWork = {
        render: function() {
			var jobsObj = controller.getJobs(),
				HTMLworkStart = '<div class="work-entry">',
				HTMLworkEmployer = '<a class="red-text" href="%href%">%data%',
				HTMLworkTitle = ' - %data%</a>',
				HTMLworkDates = '<div class="date-text">%data%</div>',
				HTMLworkLocation = '<div class="location-text">%data%</div>',
				HTMLworkDescription = '<p><br>%data%</p>';

			if (jobsObj.length > 0) {
				var formattedJobs = HTMLworkStart;
				for (var job in jobsObj) {
					formattedJobs += HTMLworkEmployer.replace('%data%', jobsObj[job].employer);
					formattedJobs = formattedJobs.replace('%href%', jobsObj[job].employerWWW);
					formattedJobs += HTMLworkTitle.replace('%data%', jobsObj[job].title);
					formattedJobs += HTMLworkDates.replace('%data%', jobsObj[job].dates);
					formattedJobs += HTMLworkLocation.replace('%data%', jobsObj[job].location);
					formattedJobs += HTMLworkDescription.replace('%data%', jobsObj[job].description);
					}
				formattedJobs += '</div>';
			}
			$('#workExperience').append(formattedJobs);
        }
    };

    var viewBio = {
        render: function() {
			var bioObj = controller.getBio(),
				HTMLheaderName = '<h1 id="name" class="red-text">%data%</h1>',
				HTMLheaderRole = '<span class="white-text" id="role">%data%</span><hr>',
				HTMLmobile = '<li class="flex-item"><span class="red-text">mobile</span><span class="white-text">%data%</span></li>',
				HTMLemail = '<li class="flex-item"><span class="red-text">email</span><span class="white-text">%data%</span></li>',
				HTMLtwitter = '<li class="flex-item"><span class="red-text">twitter</span><span class="white-text">%data%</span></li>',
				HTMLgithub = '<li class="flex-item"><span class="red-text">github</span><span class="white-text">%data%</span></li>',
				HTMLlocation = '<li class="flex-item"><span class="red-text">location</span><span class="white-text">%data%</span></li>',
				HTMLbioPic = '<img src="%data%" class="biopic">',
				HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>',
				HTMLskillsStart = '<h3 id="skillsH3" class="red-text skill">Skills at a Glance:</h3>',
				HTMLskillsUl = '<ul id="skills" class="flex-items"></ul>',
				HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

			if (bioObj.length !== 'undefined') {
				var formattedName = HTMLheaderName.replace('%data%', bioObj.name);
				var formattedRole = HTMLheaderRole.replace('%data%', bioObj.role);
				var formattedContactInfo = HTMLmobile.replace('%data%', bioObj.contacts.mobile);
				formattedContactInfo += HTMLemail.replace('%data%', bioObj.contacts.email);
				formattedContactInfo += HTMLtwitter.replace('%data%', bioObj.contacts.twitter);
				formattedContactInfo += HTMLgithub.replace('%data%', bioObj.contacts.github);
				formattedContactInfo += HTMLlocation.replace('%data%', bioObj.contacts.location);
				var formattedPicUrl = HTMLbioPic.replace('%data%', bioObj.pic_url);
				var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bioObj.welcome_message);

				$('#header').prepend([formattedName]);
				$(formattedRole).insertAfter('#name');
				$('#topContacts').append([formattedContactInfo]);

				$(formattedPicUrl).insertAfter('#topContacts');
				$('#footerContacts').append(formattedContactInfo);
			}
			if (bioObj.skills.length > 0) {
				var formattedSkills = HTMLskillsUl;
				$('#header').append([HTMLskillsStart]);
				$('#header').append([formattedSkills]);
				for (var skill in bioObj.skills) {
					formattedSkills = HTMLskills.replace('%data%', bioObj.skills[skill]);
					$('#skills').append([formattedSkills]);
				}
				$(formattedWelcomeMessage).insertAfter('#skills');
			}
        }
    };

    var viewProjects = {
        render: function() {
			var projectsObj = controller.getProjects(),
				HTMLprojectStart = '<div class="project-entry"></div>',
				HTMLprojectTitle = '<a class="red-text" href="#">%data%</a>',
				HTMLprojectDates = '<div class="date-text">%data%</div>',
				HTMLprojectDescription = '<p><br>%data%</p>',
				HTMLprojectImage = '<img src="%data%">';

			if (projectsObj.length > 0) {
				var formattedProjects = HTMLprojectStart;
				for (var project in projectsObj) {
					var formattedProjectEntries = '';
					formattedProjectEntries += HTMLprojectTitle.replace('%data%', projectsObj[project].title);
					formattedProjectEntries += HTMLprojectDates.replace('%data%', projectsObj[project].dates);
					formattedProjectEntries += HTMLprojectDescription.replace('%data%', projectsObj[project].description);
					for (var image in projectsObj[project].images) {
						formattedProjectEntries += HTMLprojectImage.replace('%data%', projectsObj[project].images[image]);
					}
					$('#projects').append([formattedProjects]);
					$('.project-entry:last').append([formattedProjectEntries]);
				}
			}
    	}
    };

    var viewEducation = {
        render: function() {
			var educationObj = controller.getEducation(),
				HTMLschoolStart = '<div class="education-entry"></div>',
				HTMLschoolName = '<a id="schoolName" class="red-text" href="#">%data%',
				HTMLschoolDegree = ' -- %data%</a>',
				HTMLschoolDates = '<div class="date-text">%data%</div>',
				HTMLschoolLocation = '<div class="location-text">%data%</div>',
				HTMLschoolMajor = '<div><br><em>Major: %data%</em></div>',

				HTMLonlineClasses = '<h3>Online Classes:</h3>',
				HTMLonlineTitle = '<a id="onlineCourse" class="red-text" href="#">%data%',
				HTMLonlineSchool = ' - %data%</a>',
				HTMLonlineDates = '<div class="date-text">%data%</div>',
				HTMLonlineURL = '<br><a id="url" class="url" href="#">%data%</a>';

			var formattedSchoolStart = HTMLschoolStart;
			if (educationObj.school.length > 0) {
				for (var school in educationObj.school) {
					var formattedSchoolName = HTMLschoolName.replace('%data%', educationObj.school[school].name);
					var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', educationObj.school[school].degree);
					var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', educationObj.school[school].major);
					var formattedSchoolDates = HTMLschoolDates.replace('%data%', educationObj.school[school].dates);
					var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', educationObj.school[school].location);
					$('#education').append([formattedSchoolStart]);
					$('.education-entry').append(formattedSchoolName + formattedSchoolDegree);
					$('.education-entry').append([formattedSchoolDates]);
					$('.education-entry').append([formattedSchoolLocation]);
					$('.education-entry').append([formattedSchoolMajor]);
					$('#schoolName').attr('href', educationObj.school[school].url);
				}
			}
			if (educationObj.onlineCourses.length > 0) {
				var formattedOnlineClasses = HTMLonlineClasses;
				$('#education').append([formattedSchoolStart]);
				$('.education-entry').last().append([formattedOnlineClasses]);
				for (var course in educationObj.onlineCourses) {
					var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', educationObj.onlineCourses[course].title);
					var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', educationObj.onlineCourses[course].school);
					var formattedOnlineDates = HTMLonlineDates.replace('%data%', educationObj.onlineCourses[course].date);
					var formattedOnlineUrl = HTMLonlineURL.replace('%data%', educationObj.onlineCourses[course].url);
					$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
					$('.education-entry:last').append([formattedOnlineDates]);
					$('.education-entry:last').append([formattedOnlineUrl]);
					$('#onlineCourse').attr('href', educationObj.onlineCourses[course].url);
					$('#url').attr('href', educationObj.onlineCourses[course].url);
				}
			}
		}
    };

	viewBio.render();
	viewWork.render();
	viewProjects.render();
	viewEducation.render();

	var internationalizeButton = '<button>Internationalize</button>';
	var googleMap = '<div id="map" class="map"></div>';

	$('#mapDiv').append(googleMap);

	/*
	Uncomment the code below when you're ready to implement a Google Map!
	*/

	//Calls the initializeMap() function when the page loads
	window.addEventListener('load', initializeMap);

	// Vanilla JS way to listen for resizing of the window
	// and adjust map bounds
	window.addEventListener('resize', function(e) {
	   //Make sure the map bounds get updated on page resize
	   map.fitBounds(mapBounds);
	});

	$(document).click(function(loc) {
		var x = loc.pageX;
		var y = loc.pageY;
		logClicks(x, y);
	});

	$('#main').append([internationalizeButton]);
	function inName() {
		var bioObj = controller.getBio();
		var nameArray = bioObj.name.trim().split(' ');
		var internationalName = '';
		for (var splitName in nameArray) {
			if (splitName == 0) {
				internationalName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].substr(1).toLowerCase() + ' ';
			} else {
				internationalName += nameArray[splitName].toUpperCase() + ' ';
			}
		}
		return internationalName.trim();
	}


	/*
	This is the fun part. Here's where we generate the custom Google Map for the website.
	See the documentation below for more details.
	https://developers.google.com/maps/documentation/javascript/reference
	*/
	var map;    // declares a global map variable


	/*
	Start here! initializeMap() is called when page is loaded.
	*/
	function initializeMap() {

	  var locations;

	  var mapOptions = {
	    disableDefaultUI: true
	  };

	  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
	  // <div id="map">, which is appended as part of an exercise late in the course.
	  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


	  /*
	  locationFinder() returns an array of every location string from the JSONs
	  written for bio, education, and work.
	  */
	  function locationFinder() {

	    // initializes an empty array
	    var locations = [];

	    var bioObj = controller.getBio();
	    var jobsObj = controller.getJobs();
	    var educationObj = controller.getEducation();

	    // adds the single location property from bio to the locations array
	    locations.push(bioObj.contacts.location);

	    // iterates through school locations and appends each location to
	    // the locations array
	    for (var school in educationObj.schools) {
	      locations.push(educationObj.schools[school].location);
	    }

	    // iterates through work locations and appends each location to
	    // the locations array
	    for (var job in jobsObj) {
	      locations.push(jobsObj[job].location);
	    }

	    return locations;
	  }

	  /*
	  createMapMarker(placeData) reads Google Places search results to create map pins.
	  placeData is the object returned from search results containing information
	  about a single location.
	  */
	  function createMapMarker(placeData) {

	    // The next lines save location data from the search result object to local variables
	    var lat = placeData.geometry.location.lat();  // latitude from the place service
	    var lon = placeData.geometry.location.lng();  // longitude from the place service
	    var name = placeData.formatted_address;   // name of the place from the place service
	    var bounds = window.mapBounds;            // current boundaries of the map window

	    // marker is an object with additional data about the pin for a single location
	    var marker = new google.maps.Marker({
	      map: map,
	      position: placeData.geometry.location,
	      title: name
	    });

	    // infoWindows are the little helper windows that open when you click
	    // or hover over a pin on a map. They usually contain more information
	    // about a location.
		var HTMLlocationName = '<div class="location-text red-text" href="#">%data%</div>';
	    var infoWindow = new google.maps.InfoWindow({
	      content: HTMLlocationName.replace("%data%", name)
	    });

	    google.maps.event.addListener(marker, 'click', function() {
	      // your code goes here!
		  	infoWindow.open(map,marker);
	    });

	    // this is where the pin actually gets added to the map.
	    // bounds.extend() takes in a map location object
	    bounds.extend(new google.maps.LatLng(lat, lon));
	    // fit the map to the new marker
	    map.fitBounds(bounds);
	    // center the map
	    map.setCenter(bounds.getCenter());
	  }

	  /*
	  callback(results, status) makes sure the search returned results for a location.
	  If so, it creates a new map marker for that location.
	  */
	  function callback(results, status) {
	    if (status == google.maps.places.PlacesServiceStatus.OK) {
	      createMapMarker(results[0]);
	    }
	  }

	  /*
	  pinPoster(locations) takes in the array of locations created by locationFinder()
	  and fires off Google place searches for each location
	  */
	  function pinPoster(locations) {

	    // creates a Google place search service object. PlacesService does the work of
	    // actually searching for location data.
	    var service = new google.maps.places.PlacesService(map);

	    // Iterates through the array of locations, creates a search object for each location
	    for (var place in locations) {

	      // the search request object
	      var request = {
	        query: locations[place]
	      };

	      // Actually searches the Google Maps API for location data and runs the callback
	      // function with the search results after each search.
	      service.textSearch(request, callback);
	    }
	  }

	  // Sets the boundaries of the map based on pin locations
	  window.mapBounds = new google.maps.LatLngBounds();

	  // locations is an array of location strings returned from locationFinder()
	  locations = locationFinder();

	  // pinPoster(locations) creates pins on the map for each location in
	  // the locations array
	  pinPoster(locations);

	}

});