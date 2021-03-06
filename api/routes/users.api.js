//jshint esversion:6
const express = require('express');
const router = express.Router();
const Users = require('../models/users.model');

// updateUser is a post route that hooks to the user's profile
// on the front end where they're updating their profile info.
// The items needed (and listed in the route below) are not
// available from linked in and must be manually updated by user
// in their profile view.
router.post('/users/updateUser', function (req, res) {

	console.log(req.body);

	Users.findByIdAndUpdate(req.body._id, {
		willDoRemoteProjects: req.body.willDoRemoteProjects,
		willDoLocalProjects: req.body.willDoLocalProjects,
		userSchoolName: req.body.userSchoolName,
		additionalSkills: req.body.additionalSkills,
		defaultSkillByCollege: req.body.defaultSkillByCollege,
		defaultSkillByProgram: req.body.defaultSkillByProgram,
		aboutMe: req.body.aboutMe,
		userCountry: req.body.userCountry,
		userState: req.body.userState,
		userCity: req.body.userCity
	})
		.exec(function (error, userData) {
			if (error) {
				console.log(error);
				res.send(error);
			} else {
				res.send(userData);
			}
		});
});

// route for finding talent based on find talent form on front end and 
// using the parameters being passed within the query
router.get('/users/searchUsers?', function (req, res, next) {

	console.log(req.query);

	Users.find(req.query)
		.exec(function (error, usersData) {
			if (error) {
				console.log(error);
				res.send(error);
			} else {
				res.json(usersData);
			}
			// if (error) return error;
			// res.json(usersData);
		});
});

module.exports = router;