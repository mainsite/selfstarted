//jshint esversion:6
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

// dependencies for database
const Users = require('../models/users.model');
const Projects = require('../models/projects.model');
const Messages = require('../models/messages.model');
const Reviews = require('../models/reviews.model');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function (req, res, next) {
    console.log("api reached");
    res.end();
});

// ======================= TEST ROUTES BELOW ====================
// test route for posting dummy user data
router.post('/testpost', function(req, res, next) {

	var newUser = new Users({
		selfStartedUserName: "justinbesteman",
		userEmail: "justin@besteman.io",
		linkedInUserName: "unknown",
		linkedInUniqueId: "lKQTrIf0VT",
		lastLinkedInAPIRefresh: "2017-03-17T05:00:00.000Z",
		userLocation: "Orlando, Florida Area",
		willDoRemoteProjects: true,
		willDoLocalProjects: true,
		defaultSkillByCollege: "Business Administration",
		defaultSkillByProgram: "Economics",
		additionalSkills: "Juggling, Coding, Teaching",
		firstName: "Justin",
		lastName: "Besteman",
		userSchoolName: "University of Central Florida",
		userPhotoLink: "https://media.licdn.com/mpr/mprx/0_mjjX1d0o71NnHMVDeJFogOvId14nSH9lmJWXvjdoWCkcS4HlIJwoZYtoocz5aWMT3uL5RZAE8kcBwuRjFm44RjyQLkc9w2uT3m4FrpWwa5GsTVBjS0mWKebs5AD6G2RKeDyHBmV9i94",
		aboutMe: "dummy data delete this user later blah blah",
		signUpDate: "2017-03-17T05:00:00.000Z",
		lastLoginDate: "2017-03-17T05:00:00.000Z",
		isActiveUser: true
	});

	newUser.save(function (err, newUser) {
		if (err) {
			console.log("error saving user");
		} else {
			console.log('posted user');
			res.send('posted user');
		}
	});
	res.send("could not post - user exists?");
}); // end of the /testpost post route

// test route for getting dummy user data
router.get('/testget', function(req, res, next) {
	// get all of the users
	Users.find({}, function(err, data) {
		if (err) console.log("error getting user list");
		// send the users back as JSON
		console.log("data", data);
		res.json(data);
	})
}) // end of the /testget get route

// test project route for posting dummy project data
router.post('/testprojectpost', function(req, res, next) {

	var newProject = new Projects({
		projectName: "Test Project 1",
		projectDescription: "This is sample project description blah blah blah",
		projectStartDate: "2017-03-17T05:00:00.000Z",
		projectEndDate: "2017-04-17T05:00:00.000Z",
		projectLocation: "Orlando, Florida Area",
		projectCategoryByCollege: "Business Administration",
		projectCategoryByProgram: "Economics",
		otherSkillsDesired: ["Awesomeness", "Superness"],
		remotePermitted: true,
		_primaryProjectOwner: null,
		_usersInvited: null,
		_usersAssigned: null
	});

	newProject.save(function (err, newProject) {
		if (err) {
			console.log("error saving project");
			console.log(err);
		} else {
			console.log('posted project');
			res.send('posted project');
		}
	});
	res.send("could not post - project exists?");
}); // end of the /testprojectpost post route


// test project route for getting dummy project data
router.get('/testprojectget', function(req, res, next) {
	// get all of the users
	Projects.find({}, function(err, data) {
		if (err) console.log("error getting project list");
		// send the users back as JSON
		console.log("data", data);
		res.json(data);
	})
}) // end of the /testprojectget get route


// ==================== END OF TEST ROUTES ==========================================

module.exports = router;