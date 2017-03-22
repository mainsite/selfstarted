//jshint esversion:6
const express = require('express');
const router = express.Router();
const Users = require('../models/users.model');

router.post('/users/updateUser', function(req, res) {

	console.log(req.body);

	Users.findByIdAndUpdate(req.body._id, {willDoRemoteProjects: req.body.willDoRemoteProjects, willDoLocalProjects: req.body.willDoLocalProjects, userSchoolName: req.body.userSchoolName, additionalSkills: req.body.additionalSkills})
		.exec(function(err, userData) {
			if (err) {
				console.log(err);
				res.send(err)
			} else {
				res.send(userData);
			}
		});
});

router.get('/users/searchUsers?', function(req, res, next) {

    console.log(req.query);

    Users.find(req.query)
        .exec(function(error, usersData) {
            if (error) return error;
            res.json(usersData);
        });
});

module.exports = router;