// The projects collection model.
// This collection houses all of the projects
// and their related info.

// Require mongoose
var mongoose = require("mongoose");

// require the connection
var db = require("../config/connection.config");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ProjectsSchema = new Schema({

	// projectName is the name of the title, entered by the project owner,
	// and it is required. Remove dead space with trim.
	projectName: {
		type: String,
		required: true,
		trim: true
	},

	// projectDescription is a text description entered by the project owner,
	// and it is a required field. Remove dead space with trim.
	projectDescription: {
		type: String,
		required: true,
		trim: true
	},

	// projectStartDate is estimated start date per the project owner
	projectStartDate: {
		type: Date
	},

	// projectEndDate is the estimated end date per the project owner,
	// and we should update this also when the project is marked completed
	// by the owner
	projectEndDate: {
		type: Date
	},

	// projectLocation is the city/etc where the project will be located.
	// Consider making the default value the same as primary project owner's
	// location?
	projectLocation: {
		type: String,
		required: true
	},

	// projectCategoryByCollege references projectAreas.js by which we store
	// the main category by college, and subsequently in projectCategoryByProgram
	// we store the program. This may correlate with the user's defaultSkillByCollege
	// or defaultSkillByProgram fields. This should be required.
	projectCategoryByCollege: {
		type: String,
		required: true
	},

	// see description above for projectCategoryByCollege.
	projectCategoryByProgram: {
		type: String,
		required: true
	},

	// otherSkillsDesired tracks other skills that the project owner is looking
	// for. Do we want to keep this open ended (hard to match with others then) or
	// do we want this to be drop-down type option to select other College/Program
	// combinations?
	otherSkillsDesired: {
		type: Array
	},

	// remotePermitted tracks whether project allows for remote work for distant
	// users. Later we may want to break this into remote work per user, but that could
	// get hair. May be simpler to just leave it as a global project option, and let
	// users internally figure out who is remote and who is local. Set it to default
	// false so remote is an opt in, and default is local users only.
	remotePermitted: {
		type: Boolean,
		default: false
	},

	// _primaryProjectOwner is the user who created and maintains the project,
	// and a project must have an owner so it's required. Keep in mind what happens
	// if user goes inactive and is removed from the project, and code for that
	// eventuality.
	_primaryProjectOwner: {
		type: Schema.ObjectId,
		ref: "Users",
		required: true
	},

	// _usersInvited tracks the users who have been invited to the project but
	// do not belong to it yet.
	_usersInvited: [{
		type: Schema.ObjectId,
		ref: "Users"
	}],

	// _usersAssigned will be an array of users that belong to the project who
	// accepted after being invited. Remember to always add the project owner
	// as in this array.
	_usersAssigned: [{
		type: Schema.ObjectId,
		ref: "Users"
	}]

});

// Create the Projects model with the ProjectsSchema
var Projects = mongoose.model("Projects", ProjectsSchema);

// Export the model
module.exports = Projects;