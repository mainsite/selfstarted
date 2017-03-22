//jshint esversion:6
const express = require('express');
const router = express.Router();
const Users = require('../models/users.model');

router.get('/users/searchUsers?', function(req, res, next) {

    console.log(req.query);

    Users.find(req.query)
        .exec(function(error, usersData) {
            if (error) return error;
            res.json(usersData);
        });
});

module.exports = router;