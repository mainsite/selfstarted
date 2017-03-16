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

	// _projectId references the id of the project which when finished will
	// offer users the ability to leave feedback for one another.
	_projectId: {
		type: Schema.ObjectId,
		ref: "Projects"
	},

	// _reviewFromUser references the user who left the review.
	_reviewFromUser: {
		type: Schema.ObjectId,
		ref: "Users"
	},

	// _reviewForUser references the user for whom the review has been left.
	_reviewForUser: {
		type: Schema.ObjectId,
		ref: "Users"
	},

	// reviewText contains the actual review contents / body, and is required
	// so we don't end up with blank reviews.
	reviewText: {
		type: String,
		required: true
	},

	// reviewActive is a bool showing whether the review is active or not. Reviewer
	// who left the review should have the ability to withdraw it. Only display the
	// review if this flag is true. By default we want the review visible, so true.
	reviewActive: {
		type: Boolean,
		default: true
	}

});

// Create the Reviews model with the ReviewsSchema
var Reviews = mongoose.model("Reviews", ReviewsSchema);

// Export the model
module.exports = Reviews;