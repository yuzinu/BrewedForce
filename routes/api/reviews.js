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

router.get('/shop/:shop_id', (req, res) => {
    Review.find({ shop: req.params.shop_id })
        .then(reviews => res.json(reviews))
        .catch(err =>
            res.status(404).json({ noReviewsfound: 'No reviews found from that user' }
            )
        );
});

router.get('/coffee/:coffee_id', (req, res) => {
    Review.find({ coffee: req.params.coffee_id })
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
    passport.authenticate('jwt', { session: false}),
    (req, res) => {

        const { errors, isValid } = validateReviewInput(req.body);       
        
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newReview = new Review({
            // user: req.body.user.id,
            // shop: req.body.shop.id,
            // coffee: req.body.coffee.id,
            // coffee_score: req.body.coffee_score.id,
            rating: req.body.rating,
            text: req.body.text
        });

        newReview
            .save()
            .then(review => res.json(review));
    }
    
);

router.patch('/:id', passport.authenticate('jwt', { session: false }),
        (req, res) => {
        const { id } = req.params;
        
        const { errors, isValid } = validateReviewInput(req.body);      
        
        if (!isValid) {
            return res.status(400).json(errors);
        }

  
        Review.findByIdAndUpdate(id, req.body, { new: true }, (err, review) => {
            res.json(review)})
            .then(() => res.status(202).json('Review updated successfully.'))
        }
);

module.exports = router;
