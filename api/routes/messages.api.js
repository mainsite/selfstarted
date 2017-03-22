//jshint esversion:6
const express = require('express');
const router = express.Router();
const Messages = require('../models/messages.model');

router.get('/messages/searchMessages?', function(req, res, next) {

    console.log(req.query);

    Projects.find(req.query)
        .populate('_fromUser')
        .populate('_toUser')
        .exec(function(error, messagesData) {
            if (error) return error;
            res.json(messagesData);
        });
});

module.exports = router;