var linkedInKeys;
try {
    linkedInKeys = require('./linkedInKeys');
} catch (e){
    console.log("using env keys in production");
}

var linkedInConfig = {
    LINKEDIN_API_KEY: linkedInKeys.clientID,
    LINKEDIN_SECRET_KEY: linkedInKeys.clientSecret,
    SESSION_KEY: linkedInKeys.sessionKey
};

module.exports = linkedInConfig;