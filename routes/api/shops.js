const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require('../../config/keys');
const rp = require('request-promise');

// const Coffee = require('../../models/Coffee');
router.get('/', (req, res) => {
  // const location = req.params.location;
  const params = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7215,-74.0000&radius=200&rankby=prominence&type=cafe&key=${keys.googleKey}`,
    json: true
  };
  rp(params)
    .then(data => res.status(200).json(data.results))
    .catch(err => res.status(400).json(err));
})

module.exports = router;