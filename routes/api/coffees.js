const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Coffee = require('../../models/Coffee');
const validateCoffeeInput = require('../../validation/coffees');

router.get('/', (req, res) => {
    Coffee.find()
        .then(coffees => res.json(coffees))
        .catch(err => res.status(404).json({ nocoffeesfound: 'No coffees found' }));
});

router.get('/:id', (req, res) => {
    Coffee.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err =>
            res.status(404).json({ nocoffeefound: 'No coffee found with that ID' })
        );
});

module.exports = router;