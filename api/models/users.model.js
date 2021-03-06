// The users collection model.
// This collection houses the master users list
// and info owned by the user.
var findOneOrCreate = require('mongoose-find-one-or-create');
// Require mongoose
var mongoose = require("mongoose");

// require the connection
var db = require("../config/connection.config");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var UsersSchema = new Schema({

  // selfStartedUserName is a unique user name on selfstarted. We
  // may want to implement this if we start having users
  // authenticated from multiple sources. Remove dead space with trim.
  selfStartedUserName: {
    type: String,
    unique: true,
    trim: true
  },

  // userEmail can be had from the LinkedIn API. For other methods
  // of auth to be added later we may need to prompt user for this
  // if it is not included within that particular API. Also this
  // needs to be unique so we don't end up with duplicate accounts.
  // Remove dead space with trim.
  userEmail: {
    type: String,
    unique: true,
    trim: true
  },

  // Since we will be adding other authentication
  // methods later, do not set the linkedInUserName
  // to required: true
  linkedInUserName: {
    type: String
  },

  // LinkedIn has their own unique user ID beyond
  // the user name that is used for referencing
  // the user. Apparently linkedin user name can change.
  linkedInUniqueId: {
    type: String
  },

  // User's LinkedIn profile URL
  linkedInURL: {
    type: String,
    trim: true
  },

  // lastLinkedInAPIRefresh shows when we last pulled
  // the user's data from LinkedIn. Use this for checking
  // when data has been updated and pull fresh
  // data accordingly. Verify if LinkedIn API supports
  // showing of last update. If not then maybe just 
  // offer user the option to refresh data by presenting
  // a "refresh from linkedin" button? Or maybe do
  // it automatically every 30 days or every login, whichever
  // comes later? TBD
  lastLinkedInAPIRefresh: {
    type: Date
  },

  // OLD USER LOCATION CODE ---- DEPRECATED
  // userLocation is required in order to list projects
  // by distance when user searches for them. For
  // future consideration - do we want set another
  // field for latitude/longitude so we are not
  // calculating that every time for the user?
  // Google Maps Geocoding API can take in any string
  // for location such as "Orlando, FL" or "Orlando FL" and
  // convert that to lat/long.
  // userLocation: {
    // type: String,
    // required: true
  // },

  // lower case version of the userLocation for searching
  // case insensitive. Faster approach than doing a case
  // insensitive approach which ignores indexing and causes
  // performance hit
  // userLocationLowerCase: {
    // type: String,
    // required: true
  // },
  // OLD USER LOCATION CODE ---- DEPRECATED

  // userCountry is the country the user will be located in.
  // It can be an actual country name, or just "online".
  userCountry: {
    type: String
  },

  // userState is the state the user will be located in.
  // It can be an actual state/province name, or just "online".
  userState: {
    type: String
  },

  // userCity is the city area the user will be located in.
  // It needs to cover suburban cities too. For example, "Orlando"
  // would cover Kissimmee, Windermere, Casselberry, etc.
  // It can be an actual city name, or just "online"
  userCity: {
    type: String
  },

  // willDoRemoteProjects is a boolean for whether the user
  // is willing to work on projects remotely. If they are
  // then this will be used for showing them available on
  // talent search remote user results. Default initial
  // setting is false until they opt in to be listed
  // as available.
  willDoRemoteProjects: {
    type: Boolean,
    default: false
  },

  // willDoLocalProjects is a boolean for whether the user
  // is willing to work on nearby projects (under 50mi?). If
  // they are then this will be used for showing them available
  // on talent search local results. Default initial setting is
  // true so they show up in talent search unless they opt out
  // from their profile view.
  willDoLocalProjects: {
    type: Boolean,
    default: true
  },

  // For now this refers to projectAreas.js for classification
  // of the user where everything is defined by college & program.
  // This works in tandem with defaultSkillByProgram
  // to define the user's default expertise. It's cleaner
  // to separate them into two string types rather than a single
  // array type.
  defaultSkillByCollege: {
    type: String,
  },

  // See defaultSkillByCollege comments above.
  defaultSkillByProgram: {
    type: String
  },

  // Additional skills may be populated either from LinkedIn skills
  // list, or perhaps by user self-entry on their profile page. TBD.
  // This may need to be broken out into another collection. Or perhaps
  // we just want this to be a long stringed together list?
  additionalSkills: {
    type: Array
  },

  // User's first name, and it must be required. For now we will get
  // this from LinkedIn.
  firstName: {
    type: String,
    required: true
  },

  // first name lower case version for better searching by user name.
  firstNameLowerCase: {
    type: String,
    required: true
  },

  // User's last name, and it must be required. For now we will get
  // this from LinkedIn.
  lastName: {
    type: String,
    required: true
  },

  // last name lower case version for better searching by user name.
  lastNameLowerCase: {
    type: String,
    required: true
  },

  // User's school name. We may not be able to get this from
  // LinkedIn because user may have more than one school, or
  // user may wish to update their current school if they're taking
  // a class somewhere else temporarily. However, this will be
  // needed in order to help group together students from common
  // schools. Maybe allow the user to self update on profile page?
  userSchoolName: {
    type: String
  },

  // User's photo link. For now we're pulling this from LinkedIn.
  userPhotoLink: {
    type: String,
    default: "/assets/images/defaultuser.jpg"
  },

  // aboutMe allows the user to save a personal description of any kind.
  // Trim it to remove dead space.
  aboutMe: {
    type: String,
    trim: true
  },

  // signUpDate is when the account was first created on selfstarted,
  // and it can be set as a default value of current at the time of
  // account creation
  signUpDate: {
    type: Date,
    required: true,
    default: Date.now
  },

  // lastLoginDate tracks when the user last accessed selfstarted,
  // and has a default of current which will get inserted when account
  // is created reflecting the first login.
  lastLoginDate: {
    type: Date,
    required: true,
    default: Date.now
  },

  // isActiveUser is a boolean. Perhaps we set the user to inactive
  // if there is no activity in 60 days (?) which causes them to be
  // removed from any ACTIVE projects automatically? (But what happens
  // if the project owner gets dropped!?!?) Set it to default
  // active for when account is first created on selfstarted.
  isActiveUser: {
    type: Boolean,
    default: true
  }

});

UsersSchema.plugin(findOneOrCreate);

// Create the Users model with the UsersSchema
var Users = mongoose.model("Users", UsersSchema);

// Export the model
module.exports = Users;