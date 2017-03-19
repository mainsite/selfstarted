//jshint esversion:6
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const linkedIn = require('passport-linkedin').Strategy;
const linkedInConfig = require('../config/linkedIn.config');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(passport.initialize());

router.get('/', function (req, res, next) {

    console.log("reached auth");
    res.end();
});

router.get('/linkedin/callback', function (req, res, next) {

});

module.exports = router;