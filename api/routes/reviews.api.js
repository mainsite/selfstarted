//jshint esversion:6
const express = require('express');
const router = express.Router();
const Reviews = require('../models/reviews.model');

router.get('/reviews/searchReviews?', function(req, res, next) {

    console.log(req.query);

    Reviews.find(req.query)
        .populate('_projectId')
        .populate('_reviewFromUser')
        .populate('_reviewForUser')
        .exec(function(error, reviewsData) {
        	if (error) {
        		console.log(error);
        		res.send(error);
        	} else {
        		res.json(reviewsData);
        	}
            // if (error) return error;
            // res.json(reviewsData);
        });
});

module.exports = router;