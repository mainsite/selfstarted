//jshint esversion:6
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const testRoute = require('./test.api');
const projectsRoute = require('./projects.api');
const usersRoute = require('./users.api');
const reviewsRoute = require('./reviews.api');
const messagesRoute = require('./messages.api');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use('/', testRoute);
router.use('/', projectsRoute);
router.use('/', usersRoute);
router.use('/', reviewsRoute);
router.use('/', messagesRoute);

router.get('/', function (req, res, next) {
    console.log("api reached");
    res.end();
});

module.exports = router;