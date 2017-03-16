// require mongoose
var mongoose = require('mongoose');

// Require bluebird as promise because mongoose promises are deprecated
var Promise = require('bluebird');
mongoose.Promise = Promise;

// make the connection
mongoose.connect("mongodb://localhost/selfstarted");

var db = mongoose.connection;

// check for error
db.on("error", function (error) {
    console.log("database error: ", err);
});

// confirm connection
db.once("open", function () {
    console.log("mongoose connected to selfstarted db");
});

// export the database
module.exports = db;