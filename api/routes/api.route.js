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

// test route for reading dummy user data
router.get('/testget', function(req, res, next) {
	// get all of the users
	Users.find({}, function(err, data) {
		if (err) console.log("error getting user list");
		// send the users back as JSON
		console.log("data", data);
		res.json(data);
	})
}) // end of the /testget get route
// ==================== END OF TEST ROUTES ==========================================

module.exports = router;