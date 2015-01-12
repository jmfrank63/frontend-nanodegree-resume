// Instructor Notes

// work contains an array of jobs. Each job object in jobs should contain 
// an employer, title, location, dates worked and description.

var work = {
    "job1" : {
        "employer" : "employer1",
        "title" : "title1",
        "location" : "location1",
        "date_start" : "date1.start",
        "date_end" : "date1.end",
        "description" : "description1"
    },
    "job2" : {
        "employer" : "employer2",
        "title" : "title2",
        "location" : "location2",
        "date_start" : "date2.start",
        "date_end" : "date2.end",
        "description" : "description2"
    },
    "job3" : {
        "employer" : "employer3",
        "title" : "title3",
        "location" : "location3",
        "date_start" : "date3.start",
        "date_end" : "date3.end",
        "description" : "description3"
    },
    "job4" : {
        "employer" : "employer4",
        "title" : "title4",
        "location" : "location4",
        "date_start" : "date4.start",
        "date_end" : "date4.end",
        "description" : "description4"
    }
};

// projects contains an array of projects. Each project object in projects
// should contain a title, dates worked, description, and an images array
// with URL strings for project images.

var projects = {
    "project1" : {
        "title" : "title1",
        "date_start" : "date1.start",
        "date_end" : "date1.end",
        "description" : "description1",
        "projects" : [
            "http://lorempixel.com/200/200/technics/1",
            "http://lorempixel.com/200/200/technics/2",
            "http://lorempixel.com/200/200/technics/3",
            "http://lorempixel.com/200/200/technics/4"
            ]
    },
    "project2" : {
        "title" : "title2",
        "date_start" : "date2.start",
        "date_end" : "date2.end",
        "description" : "description2",
        "projects" : [
            "http://lorempixel.com/200/200/technics/1",
            "http://lorempixel.com/200/200/technics/2",
            "http://lorempixel.com/200/200/technics/3",
            "http://lorempixel.com/200/200/technics/4"
            ]
    },
    "project3" : {
        "title" : "title3",
        "date_start" : "date3.start",
        "date_end" : "date3.end",
        "description" : "description1",
        "projects" : [
            "http://lorempixel.com/200/200/technics/1",
            "http://lorempixel.com/200/200/technics/2",
            "http://lorempixel.com/200/200/technics/3",
            "http://lorempixel.com/200/200/technics/4"
            ]
    },
    "project4" : {
        "title" : "title4",
        "date_start" : "date4.start",
        "date_end" : "date4.end",
        "description" : "description1",
        "projects" : [
            "http://lorempixel.com/200/200/technics/1",
            "http://lorempixel.com/200/200/technics/2",
            "http://lorempixel.com/200/200/technics/3",
            "http://lorempixel.com/200/200/technics/4"
            ]
    }
};

// bio contains a name, role, welcomeMessage, contacts object and skills array.
// The contacts object should contain (but doesn't have to) a mobile number,
// email address, github username, twitter handle and location.

var bio = {
    "name" : "John Doe",
    "role" : "Front-End Ninja",
    "bioPic" : "images/fry.jpg",
    "welcomeMessage" : "You won't hear me coming!",
    "contacts" : {
        "mobile" : "mobile_phone1",
        "email" : "email_address1",
        "github" : "github_username1",
        "twitter" : "twitter_handle1",
        "location" : "location1"
    },
    "skills" : ["awesomeness1", "programming1", "javascript1", "html1"]
};

// education contains an array of schools. Each school object in schools 
// contains a name, location, degree, majors array, dates attended and a 
// url for the school's website. education also contains an onlineCourses array.
// Each onlineCourse object in onlineCourses should contain a title, school,
// dates attended and a url for the course.

var education = {
    "school1" : {
        "name" : "name1",
        "location" : "location1",
        "degree" : "degree1",
        "majors" : ["major1_1", "major1_2", "major1_3", "major1_4"],
        "date_start" : "date1.start",
        "date_end" : "date1.end",
        "url" : "http://www.school1.org"
    },
    "school2" : {
        "name" : "name2",
        "location" : "location2",
        "degree" : "degree2",
        "majors" : ["major2_1", "major2_2", "major2_3", "major2_4"],
        "date_start" : "date2.start",
        "date_end" : "date2.end",
        "url" : "http://www.school2.org"
    },
    "school3" : {
        "name" : "name3",
        "location" : "location3",
        "degree" : "degree3",
        "majors" : ["major3_1", "major3_2", "major3_3", "major3_4"],
        "date_start" : "date3.start",
        "date_end" : "date3.end",
        "url" : "http://www.school3.org"
    },
    "school4" : {
        "name" : "name4",
        "location" : "location4",
        "degree" : "degree4",
        "majors" : ["major4_1", "major4_2", "major4_3", "major4_4"],
        "date_start" : "date4.start",
        "date_end" : "date4.end",
        "url" : "http://www.school4.org"
    },
    "onlineCourses" : {
        "onlineCourse1" : {
            "title" : "title1",
            "school" : "school1",
            "date_start" : "date1_start",
            "date_end" : "date1_end",
            "url" : "http://www.onlineCourse1.org"
        },
        "onlineCourse2" : {
            "title" : "title2",
            "school" : "school2",
            "date_start" : "date2_start",
            "date_end" : "date2_end",
            "url" : "http://www.onlineCourse2.org"
        },
        "onlineCourse3" : {
            "title" : "title3",
            "school" : "school3",
            "date_start" : "date3_start",
            "date_end" : "date3_end",
            "url" : "http://www.onlineCourse3.org"
        },
        "onlineCourse4" : {
            "title" : "title4",
            "school" : "school4",
            "date_start" : "date4_start",
            "date_end" : "date4_end",
            "url" : "http://www.onlineCourse4.org"
        }
    }
};
if (bio['role'] && bio['name']) {
  $('#header').prepend(HTMLheaderRole.replace('%data%', bio['role']));
  $('#header').prepend(HTMLheaderName.replace('%data%', bio['name']));
}

if (bio['bioPic']) {
  $('#header').append(HTMLbioPic.replace('%data%', bio['bioPic']));
}

if (bio['welcomeMessage']) {
  $('#header').append(HTMLWelcomeMsg.replace('%data%', bio['welcomeMessage']));
}


if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        $('#skills').append(HTMLskills.replace('%data%',bio.skills[i]));
    }
}

