//jshint esversion:6
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../../src/index.html'));
});

module.exports = router;