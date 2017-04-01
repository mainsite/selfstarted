// The messages collection model.
// This collection houses the messages
// being sent back and forth between users.

// Require mongoose
var mongoose = require("mongoose");

// require the connection
var db = require("../config/connection.config");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var MessagesSchema = new Schema({

	// _messageOwner tracks who owns this message. Every user has their
	// own unique copy that they can delete, have mark read, etc.
	_messageOwner: {
		type: Schema.ObjectId,
		ref: "Users"
	},

	// _fromUser tracks who sent the message, and for this we
	// reference the Users collection
	_fromUser: {
		type: Schema.ObjectId,
		ref: "Users"
	},

	// _toUser tracks who the message was sent to, and for this
	// we again reference the Users collection
	_toUser: {
		type: Schema.ObjectId,
		ref: "Users"
	},

	// messageSubject is the title/subject field of the message. It
	// is required. We also want to trim it to get rid of any dead space.
	messageSubject: {
		type: String,
		required: true,
		trim: true
	},

	// messageText contains the actual body of the message. It is
	// required so we don't end up having blank messages. We also want
	// to trim it to remove dead space.
	messageText: {
		type: String,
		required: true,
		trim: true
	},

	// messageCreateDate tracks when the mssage was created/sent, and it can be
	// set to a default of the current date when the document is created.
	messageCreateDate: {
		type: Date,
		default: Date.now
	},

	// messageReadDate tracks when the message was first read.
	messageReadDate: {
		type: Date
	},

	// isRead tracks whether the user has read the message. Default is false
	// to indicate message hasn't been read yet.
	isRead: {
		type: Boolean,
		default: false
	},

	// messageDeleteDate tracks when the user deleted the message.
	messageDeleteDate: {
		type: Date
	},

	// isDeleted tracks whether the user has deleted the message.
	isDeleted: {
		type: Boolean,
		default: false
	}

});

// Create the Messages model with the MessagesSchema
var Messages = mongoose.model("Messages", MessagesSchema);

// Export the model
module.exports = Messages;