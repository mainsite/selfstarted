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

module.exports = router;