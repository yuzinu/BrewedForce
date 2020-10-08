const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require('../../config/keys');
const rp = require('request-promise');

router.get('/', (req, res) => {
  const location = req.params.location;
  const params = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=200&rankby=prominence&type=cafe&key=${keys.googleKey}`,
    json: true
  };
  rp(params)
    .then(data => res.status(200).json(data.results))
    .catch(err => res.status(400).json(err));
})

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  const params = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.id}&key=${keys.googleKey}`,
    json: true
  };
  rp(params)
    .then(data => res.status(200).json(data.result))
    .catch(err => res.status(400).json(err));

})

module.exports = router;