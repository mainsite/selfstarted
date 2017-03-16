// The messages collection model.
// This collection houses the messages
// being sent back and forth between users.

// Require mongoose
var mongoose = require("mongoose");

// require the connection
var db = require("../config/connection");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var MessagesSchema = new Schema({

	// messageSubject is the title/subject field of the message. It
	// is required.
	messageSubject: {
		type: String,
		required: true
	},

	// messageText contains the actual body of the message. It is
	// required so we don't end up having blank messages.
	messageText: {
		type: String,
		required: true
	},

	// _fromUser tracks who sent the message, and for this we
	// reference the Users collection
	_fromUser: {
		type: String,
		ref: "Users"
	},

	// _toUser tracks who the message was sent to, and for this
	// we again reference the Users collection
	_toUser: {
		type: String,
		ref: "Users"
	},

	// sendDate tracks when the mssage was sent, and it can be
	// set to a default of the message creation date
	messageSendDate: {
		type: Date,
		default: Date.now
	},

	// toUserRead is a bool that tracks whether the message
	// has been read by the user who was sent the message,
	// and default is false to indicate unread
	toUserRead: {
		type: Boolean,
		default: false
	},

	// messageReadDate tracks when the recepient read the message
	messageReadDate: {
		type: Date
	},

	// sendUserDeletedMessage tracks whether the sending user has
	// deleted the message from their end so we no longer need to display
	// it in their sent items, and default is false to indicate not deleted
	sendUserDeletedMessage: {
		type: Boolean,
		default: false
	},

	// toUserDeletedMessage tracks whether the receiving user has
	// deleted the message from their end so we no longer need to display
	// it in their sent items, and default is false to indicate not deleted
	toUserDeletedMessage: {
		type: Boolean,
		default: false
	}

});

// Create the Messages model with the MessagesSchema
var Messages = mongoose.model("Messages", MessagesSchema);

// Export the model
module.exports = Messages;