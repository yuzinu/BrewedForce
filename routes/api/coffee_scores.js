const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const CoffeeScore = require('../../models/CoffeeScore');
const validateCoffeeScoreInput = require('../../validation/coffee_scores');

router.get('/', (req, res) => {
  CoffeeScore.find()
    .sort({ date: -1 })
    .then(coffee_scores => res.json(coffee_scores))
    .catch(err => res.status(404).json({ nocoffeescoresfound: 'No coffee scores found' }));
});

router.get('/user/:user_id', (req, res) => {
  CoffeeScore.find({user: req.params.user_id})
    .then(coffee_scores => res.json(coffee_scores))
    .catch(err =>
      res.status(404).json({ nocoffeescoresfound: 'No coffee scores found from that user' }
    )
  );
});

router.get('/shop/:user_id', (req, res) => { //TODO UPDATE WITH MAPS API PATH
  CoffeeScore.find({shop: req.params.user_id})
    .then(coffee_scores => res.json(coffee_scores))
    .catch(err =>
      res.status(404).json({ nocoffeescoresfound: 'No coffee scores found from that user' }
    )
  );
});

router.get('/coffee/:coffee_id', (req, res) => {
  CoffeeScore.find({coffee: req.params.coffee_id})
    .then(coffee_scores => res.json(coffee_scores))
    .catch(err =>
      res.status(404).json({ nocoffeescoresfound: 'No coffee scores found from that user' }
    )
  );
});

router.get('/:id', (req, res) => {
  CoffeeScore.findById(req.params.id)
    .then(coffee_score => res.json(coffee_score))
    .catch(err =>
      res.status(404).json({ nocoffeescorefound: 'No coffee score found with that ID' })
    );
});

// const { errors, isValid } = validateCoffeeScoreInput(req.body);
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newCoffeeScore = new CoffeeScore({
      user: req.user.id,
      shop: req.shop.id,
      coffee: req.coffee.id,
      aroma: req.body.aroma,
      acidity: req.body.acidity,
      body: req.body.body,
      flavor: req.body.flavor,
      aftertaste: req.body.aftertaste
    });

    newCoffeeScore
      .save()
      .then(coffee_score => res.json(coffee_score));
  }
);

router.patch('/:id', (req, res) => {
  CoffeeScore.findById(req.params.id)
    .then(coffee_score => res.json(coffee_score))
    .catch(err =>
      res.status(404).json({ nocoffeescorefound: 'No coffee score found with that ID' })
    );
});

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // CoffeeScore.findById(req.params.id).
    // const { errors, isValid } = validateCoffeeScoreInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newCoffeeScore = new CoffeeScore({
      user: req.user.id,
      shop: req.shop.id,
      coffee: req.coffee.id,
      aroma: req.body.aroma,
      acidity: req.body.acidity,
      body: req.body.body,
      flavor: req.body.flavor,
      aftertaste: req.body.aftertaste
    });

    newCoffeeScore
      .save()
      .then(coffee_score => res.json(coffee_score));
  }
);

module.exports = router;