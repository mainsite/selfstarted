//jshint esversion:6
const express = require('express');
const router = express.Router();
const Messages = require('../models/messages.model');

// route to get all messages. Pass in user's _id as _messageOwner parameter to 
// get that user's messages. Deleted messages are not returned.
router.get('/messages/searchMessages?', function(req, res, next) {

    console.log(req.query);

    // only want to return non-deleted messages
    req.query.isDeleted = false;

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

// Route to post a new message. Need to pass in object ID of the _fromUser, 
// object ID of the _toUser, the messageSubject and messageText
router.post('/messages/newMessage', function(req, res, next) {
    console.log(req.body);

    var newMessage1 = new Messages({
        _messageOwner: req.body._fromUser,
        _fromUser: req.body._fromUser,
        _toUser: req.body._toUser,
        messageSubject: req.body.messageSubject,
        messageText: req.body.messageText,
    });

    var newMessage2 = new Messages({
        _messageOwner: req.body._toUser,
        _fromUser: req.body._fromUser,
        _toUser: req.body._toUser,
        messageSubject: req.body.messageSubject,
        messageText: req.body.messageText,
    });

    newMessage1.save(function (error, result) {
        if (error) {
            console.log('first message error', error);
            res.send(error);
        } else {
            newMessage2.save(function (err, res) {
                if (err) {
                    console.log('second message error', err);
                    res.send(err);
                } else {
                    console.log('messages posted');
                    res.send('messages posted');
                }
            });
        }
    });
});

// route to mark message as having been read. Need to pass in the
// object id of the message as _id. 
router.post('/messages/markMessageRead', function(req, res, next) {
    console.log(req.body);

    Messages.findOneAndUpdate(req.body._id, {
        isRead: true,
        messageReadDate: Date.now()
    })
    .exec(function(error, messageData) {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            res.json(messageData);
        }
    });
});

// route to mark message as deleted. Need to pass in the
// object id of the message as _id.
router.post('/messages/deleteMessage', function(req, res, next) {
    console.log(req.body);

    Messages.findOneAndUpdate(req.body._id, {
        isDeleted: true,
        messageDeleteDate: Date.now()
    })
    .exec(function(error, messageData) {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            res.json(messageData);
        }
    });
});

module.exports = router;