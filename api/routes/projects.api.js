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

    // we want to only return projects that are not deleted so add that value
    req.query.isDeleted = false;
    
    console.log(req.query);

    Projects.find(req.query)
        .populate('_primaryProjectOwner')
        .populate('_usersAssigned')
        .populate('_usersInvited')
        .exec(function(error, projectsData) {
            if (error) return error;
            res.json(projectsData);
        });
});

// searchPersonalProjects route for user to get their own projects
// for their dashboard. Do not include isDeleted flag so they
// receive both active and deleted projects. Parse on the front
// end. req.query needs to send _primaryProjectOwner 
// objectID from the front end
router.get('/projects/searchPersonalProjects?', function(req, res, next) {

    Projects.find(req.query)
        .populate('_primaryProjectOwner')
        .populate('_usersAssigned')
        .populate('_usersInvited')
        .exec(function(error, personalProjectsData) {
            if (error) return error;
            res.json(personalProjectsData);
        });
});

// searchAssignedProjects route for user to find projects they're assigned
// to but do not own. THIS IS THE REASON WHY WE DO NOT PUT THE PROJECT OWNER
// IN THE ASSIGNED USERS FIELD. req.query needs to send the user's objectID
// as _usersAssigned from the front end
router.get('/projects/searchAssignedProjects?', function(req, res, next) {

    Projects.find(req.query)
        .populate('_primaryProjectOwner')
        .populate('_usersAssigned')
        .populate('_usersInvited')
        .exec(function(error, assignedProjectsData) {
            if (error) return error;
            res.json(assignedProjectsData);
        });
});

// searchInvitedProjects route for user to find projects they're invited to
// or have put in a request to join, but are not assigned yet. req.query 
// needs to send the user's objectID as _usersInvited from the front end
router.get('/projects/searchInvitedProjects?', function(req, res, next) {

    Projects.find(req.query)
        .populate('_primaryProjectOwner')
        .populate('_usersAssigned')
        .populate('_usersInvited')
        .exec(function(error, invitedProjectsData) {
            if (error) return error;
            res.json(invitedProjectsData);
        });
});

module.exports = router;