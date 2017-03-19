//jshint esversion:6
const express = require('express');
const router = express.Router();
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const linkedInConfig = require('../config/linkedIn.config');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(session({
    secret: linkedInConfig.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
router.use(passport.initialize());
router.use(passport.session());

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete LinkedIn profile is
//   serialized and deserialized.
passport.serializeUser(function (user, done) {
    console.log(user.id);
    done(null, user);
});
passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new LinkedInStrategy({
    clientID: linkedInConfig.LINKEDIN_API_KEY,
    clientSecret: linkedInConfig.LINKEDIN_SECRET_KEY,
    callbackURL: "http://localhost:4000/auth/linkedin/callback",
    profileFields: ['id', 'first-name', 'last-name', 'email-address', 'headline', "location", "positions", "picture-url", "public-profile-url", ""]
},
    function (token, tokenSecret, profile, done) {
        //console.log("profile", profile._json);
        process.nextTick(function () {
            return done(null, profile);
        });
    }
));

router.get('/', function (req, res) {
    console.log("auth reached");
    res.end();
});

//this route goes to linkedIn and therefore doesn't need a respnse handled
router.get('/linkedin', passport.authenticate('linkedin'), function (req, res) {
});

//if authentication succeeds we redirect to the dashboard
//if failure user goes back to login page
//TODO make a login page
router.get('/linkedin/callback',
    passport.authenticate('linkedin', {
        successRedirect: '/#!/dashboard',
        failureRedirect: '/#!/login'
    }));

//test if user data is retreivable client side
router.get('/userdata', ensureAuthenticated, function (req, res) {
    res.json(req.user);
});

function ensureAuthenticated(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
}

module.exports = router;