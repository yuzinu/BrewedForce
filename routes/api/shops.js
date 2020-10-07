const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Shop = require('../../models/Shop');
const keys = require('../../config/keys')
import {Client} from '@googlemaps/google-maps-services-js';

router.get('/', (req, res) => {
    Coffee.find()
        .then(coffees => res.json(coffees))
        .catch(err => res.status(404).json({ nocoffeesfound: 'No coffees found' }));
});

client
.placesNearby({
  params: {
    location: {lat: params.location.latitude, lng: params.location.longitude},
    key: keys.googleKey,
    rankby: "prominence",
    type: "cafe",
  },
  timeout: 1000,
})
.then((res) => {
  ;
  console.log(res);
})
.catch((e) => {
  ;
  console.log(e);
});



module.exports = router;