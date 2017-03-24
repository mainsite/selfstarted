//jshint esversion:6
const express = require('express');
const router = express.Router();
const Users = require('../models/users.model');
const Projects = require('../models/projects.model');

router.post('/testpost', function (req, res, next) {

    var newUser = new Users({
        selfStartedUserName: "dummyusertesting",
        userEmail: "dummy@usertesting.com",
        linkedInUniqueId: "dummyusertesting",
        linkedInURL: "https://www.linkedin.com/in/dummyusertesting",
        userLocation: "Hollywood, CA",
        userLocationLowerCase: "hollywood, ca",
        firstName: "Dummy",
        firstNameLowerCase: "dummy",
        lastName: "User",
        lastNameLowerCase: "user",
        userSchoolName: "University of Central Florida",
        userPhotoLink: "https://s-media-cache-ak0.pinimg.com/originals/85/9d/a7/859da77c02655e6b93f86b0107d14dc4.jpg",
        aboutMe: "dummy data delete this user later blah blah",
        signUpDate: "2017-03-23T05:00:00.000Z",
        lastLoginDate: "2017-03-23T05:00:00.000Z",
        isActiveUser: true
    });

    newUser.save(function (err, newUser) {
        if (err) {
            console.log("error saving user");
            res.send(err);
        } else {
            console.log('posted user');
            res.send('posted user');
        }
    });
}); // end of the /testpost post route

// test route for getting dummy user data
router.get('/testget', function (req, res, next) {
    // get all of the users
    Users.find({}, function (err, data) {
        if (err) console.log("error getting user list");
        // send the users back as JSON
        console.log("data", data);
        res.json(data);
    });
}); // end of the /testget get route

// test project route for posting dummy project data
router.post('/testprojectpost', function (req, res, next) {

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
            res.send("posting project error");
        } else {
            console.log('posted project');
            res.send('posted project');
        }
    });
}); // end of the /testprojectpost post route


// test project route for getting dummy project data
router.get('/testprojectget', function (req, res, next) {
    // get all of the users
    Projects.find({}, function (err, data) {
        if (err) console.log("error getting project list");
        // send the users back as JSON
        console.log("data", data);
        res.json(data);
    });
}); // end of the /testprojectget get route

module.exports = router;