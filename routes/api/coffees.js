const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const coffee = require('../../models/coffee');
const validatecoffeeInput = require('../../validation/coffees');

router.get('/', (req, res) => {
    Coffee.find()
        .then(coffees => res.json(coffees))
        .catch(err => res.status(404).json({ nocoffeesfound: 'No coffees found' }));
});

router.get('/:coffee_id', (req, res) => {
    Coffee.find({ coffee: req.params.coffee_id })
        .then(coffees => res.json(coffees))
        .catch(err =>
            res.status(404).json({ nocoffeesfound: 'No coffees found with that name' }
            )
        );
});

router.get('/:id', (req, res) => {
    Coffee.findById(req.params.id)
        .then(coffee => res.json(coffee))
        .catch(err =>
            res.status(404).json({ nocoffeefound: 'No coffee found with that ID' })
        );
});

module.exports = router;