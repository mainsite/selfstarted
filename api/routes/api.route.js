//jshint esversion:6
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function (req, res, next) {
    console.log("api reached");
    res.end();
});

module.exports = router;