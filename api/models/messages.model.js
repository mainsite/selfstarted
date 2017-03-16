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

});

// Create the ToDo model with the ToDoSchema
var Messages = mongoose.model("Messages", MessagesSchema);

// Export the model
module.exports = Messages;