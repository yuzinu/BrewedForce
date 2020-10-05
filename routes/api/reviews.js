const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/reviews');

router.get('/', (req, res) => {
    Review.find()
    .sort({date: -1})
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noReviewsFound: 'No reviews found'}))
});

router.get('/user/:user_id', (req, res) => {
    Review.find({ user: req.params.user_id })
        .then(reviews => res.json(reviews))
        .catch(err =>
            res.status(404).json({ noReviewsfound: 'No reviews found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err =>
            res.status(404).json({ noReviewFound: 'No review found with that ID' })
        );
});

router.post('/',
    
);

router.patch('/',
    Review.findById(req.params.id)

);
