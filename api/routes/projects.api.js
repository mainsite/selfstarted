//jshint esversion:6
const express = require('express');
const router = express.Router();
const Projects = require('../models/projects.model');

router.post('/projects/newProject', function (req, res, next) {
    console.log('saving new project');

    console.log(req.body);

    // received remotePermitted as string - convert it to boolean
    var remotePermittedConverted = (req.body.remotePermitted === "true") ? true : false;

    // build the constructor
    var newProject = new Projects({
        projectName: req.body.projectName,
        projectNameLowerCase: req.body.projectNameLowerCase,
        projectDescription: req.body.projectDescription,
        projectStartDate: req.body.projectStartDate,
        projectEndDate: req.body.projectEndDate,
        projectLocation: req.body.projectLocation,
        projectLocationLowerCase: req.body.projectLocationLowerCase,
        projectCategoryByCollege: req.body.projectCategoryByCollege,
        projectCategoryByProgram: req.body.projectCategoryByProgram,
        otherSkillsDesired: req.body.otherSkillsDesired,
        remotePermitted: remotePermittedConverted,
        _primaryProjectOwner: req.body._primaryProjectOwner,
        _usersInvited: null,
        _usersAssigned: null
    });

    newProject.save(function (err, newProject) {
        if (err) {
            console.log("error saving project");
            console.log(err);
            res.send("posting error");
        } else {
            console.log('posted project');
            res.send('posted project');
        }
    });

});

// updateProject is a post route for user to update the project they own
// or to delete it by setting the isDeleted key to true
router.post('/projects/updateProject', function(req, res, next) {
    console.log('updating project')
    console.log(req.body);

    Projects.findByIdAndUpdate(req.body._id, {
        projectName: req.body.projectName,
        projectNameLowerCase: req.body.projectNameLowerCase,
        projectDescription: req.body.projectDescription,
        projectStartDate: req.body.projectStartDate,
        projectEndDate: req.body.projectEndDate,
        projectLocation: req.body.projectLocation,
        projectLocationLowerCase: req.body.projectLocationLowerCase,
        projectCategoryByCollege: req.body.projectCategoryByCollege,
        projectCategoryByProgram: req.body.projectCategoryByProgram,
        otherSkillsDesired: req.body.otherSkillsDesired,
        remotePermitted: req.body.remotePermitted,
        isDeleted: req.body.isDeleted
    })
    .exec(function(err, projectData) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(projectData);
        }
    });

});

// searchProjects is used to get projects that match
// criteria user enters on the front end form
// NOTE: Need to add isDeleted false
router.get('/projects/searchProjects?', function(req, res, next) {

    console.log(req.query);

    Projects.find(req.query)
        .populate('_primaryProjectOwner')
        .populate('_usersAssigned')
        .exec(function(error, projectsData) {
            if (error) return error;
            res.json(projectsData);
        });
});

// searchPersonalProjects route for user to get their own projects
// for their dashboard. Do not include isDeleted flag so they
// receive both active and deleted projects. Parse on the front
// end. Also, remember to search by user ID in _primaryProjectOwner
router.get('/projects/searchPersonalProjects?', function(req, res, next) {

});

module.exports = router;