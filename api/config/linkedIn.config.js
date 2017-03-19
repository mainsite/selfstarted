//jshint esversion:6
const linkedInKeys = require('./linkedInKeys');

var linkedInConfig = {
    LINKEDIN_API_KEY: linkedInKeys.clientID,
    LINKEDIN_SECRET_KEY: linkedInKeys.clientSecret,
    SESSION_KEY: linkedInKeys.sessionKey
};

module.exports = linkedInConfig;