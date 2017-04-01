//jshint esversion:6
const express = require('express');
const router = express.Router();
const Messages = require('../models/messages.model');

// route to get all messages. Pass in user's _id as _messageOwner to get that
// user's messages. For params, pass in messageDeleted: false
// so that the deleted messages aren't returned. 
router.get('/messages/searchMessages?', function(req, res, next) {

    console.log(req.query);

    Messages.find(req.query)
        .populate('_messageOwner')
        .populate('_fromUser')
        .populate('_toUser')
        .exec(function(error, messagesData) {
        	if (error) {
        		console.log(error);
        		res.send(error);
        	} else {
        		res.json(messagesData);
        	}
            // if (error) return error;
            // res.json(messagesData);
        });
});


module.exports = router;