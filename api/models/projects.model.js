// The projects collection model.
// This collection houses all of the projects
// and their related info.

// Require mongoose
var mongoose = require("mongoose");

// require the connection
var db = require("../config/connection");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ProjectsSchema = new Schema({

});

// Create the Projects model with the ProjectsSchema
var Projects = mongoose.model("Projects", ProjectsSchema);

// Export the model
module.exports = Projects;