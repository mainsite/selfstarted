// The reviews collection model.
// This collection houses the reviews users 
// leave for each other after project completion.

// Require mongoose
var mongoose = require("mongoose");

// require the connection
var db = require("../config/connection");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ReviewsSchema = new Schema({

});

// Create the ToDo model with the ToDoSchema
var Reviews = mongoose.model("Reviews", ReviewsSchema);

// Export the model
module.exports = Reviews;