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
const UserModel = require('../models/users.model');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(cookieParser());
router.use(session({
    secret: linkedInConfig.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

router.use(passport.initialize());
router.use(passport.session());

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
    scope: ['r_emailaddress', 'r_basicprofile', 'r_emailaddress'],
    profileFields: ['id', 'first-name', 'last-name', 'email-address', 'headline', "location", "positions", "picture-url", "public-profile-url"]
},
    function (token, tokenSecret, profile, done) {
        console.log("profile", profile._json);
        UserModel.findOneOrCreate({ linkedInUniqueId: profile.id }, newUser(profile),
            function (err, user) {
                if (err) {
                    console.log("error", err);
                    return done(err, false);
                }
                return done(null, user._id);
            });
    })
);

router.get('/', function (req, res) {
    console.log("auth reached");
    res.end();
});

//this route goes to linkedIn and therefore doesn't need a respnse handled
router.get('/linkedin', passport.authenticate('linkedin', { state: linkedInConfig.SESSION_KEY }), function (req, res) {
});

//if authentication succeeds we redirect to the dashboard
//if failure user goes back to login page
//TODO make a login page
router.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/#!/dashboard',
    failureRedirect: '/#!/login'
}));

//test if user data is retreivable client side
router.get('/userdataid', ensureAuthenticated, function (req, res) {
    //console.log(req.user);
    res.json(req.user);
});

function ensureAuthenticated(req, res, next) {
    console.log(req.isAuthenticated());

    if (req.isAuthenticated()) {
        return next();
    } else {
        res.send(false);
    }
}

function newUser(profile) {
    return {
        selfStartedUserName: profile.id,
        linkedInUniqueId: profile.id,
        linkedInURL: profile._json.publicProfileUrl,
        firstName: profile._json.firstName,
        lastName: profile._json.lastName,
        firstNameLowerCase: profile._json.firstName.toLowerCase(),
        lastNameLowerCase: profile._json.lastName.toLowerCase(),
        userEmail: profile._json.emailAddress,
        userLocation: profile._json.location.name,
        userLocationLowerCase: profile._json.location.name.toLowerCase(),
        aboutMe: profile._json.headline,
        userPhotoLink: profile._json.pictureUrl
    };
}

module.exports = router;