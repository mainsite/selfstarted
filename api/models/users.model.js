// The users collection model.
// This collection houses the master users list
// and info owned by the user.

// Require mongoose
var mongoose = require("mongoose");

// require the connection
var db = require("../config/connection");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var UsersSchema = new Schema({

});

// Create the ToDo model with the ToDoSchema
var Users = mongoose.model("Users", UsersSchema);

// Export the model
module.exports = Users;