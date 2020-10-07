const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require('../../config/keys')

const Shop = require('../../models/Shop');

router.get('/', (req, res) => {
    Coffee.find()
        .then(coffees => res.json(coffees))
        .catch(err => res.status(404).json({ nocoffeesfound: 'No coffees found' }));
});

router.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${params.location}&rankby=prominence&type=cafe&key=${keys.googleMapKey}`, (req, res) => {
        .then(shops => res.json(shops))
        .catch(err =>
            res.status(404).json({ nocoffeefound: 'No coffee found with that ID' })
        );
});



module.exports = router;