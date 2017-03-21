//jshint esversion:6
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const testRoute = require('./test.api');
const projectsRoute = require('./projects.api');

// dependencies for database
const Messages = require('../models/messages.model');
const Reviews = require('../models/reviews.model');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use('/', testRoute);
router.use('/', projectsRoute);

router.get('/', function (req, res, next) {
    console.log("api reached");
    res.end();
});

module.exports = router;