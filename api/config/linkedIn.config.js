var linkedInKeys;
try {
    linkedInKeys = require('./linkedInKeys');
} catch (e){
    console.log("using env keys in production");
}

var linkedInConfig = {
    LINKEDIN_API_KEY: process.env.CLIENT_ID || linkedInKeys.clientID,
    LINKEDIN_SECRET_KEY: process.env.SECRET_KEY || linkedInKeys.clientSecret,
    SESSION_KEY: process.env.SESSION_KEY || linkedInKeys.sessionKey,
    CALLBACK_URL: process.env.CALLBACK_URL || linkedInKeys.callbackUrl
};

module.exports = linkedInConfig;