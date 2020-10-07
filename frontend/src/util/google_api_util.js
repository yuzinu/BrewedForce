// import $ from 'jquery';
// import {Client} from '@googlemaps/google-maps-services-js';
// import keys from '../keys';


// export const fetchNearbyShops = (params) => {
//     return $.ajax({
//         method: 'get',
//         url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${params.location}&rankby=prominence&type=cafe&key=${keys.googleMapKey}`,
//     });
// };

// const client = new Client({});

// export const fetchNearbyShops = (params) => {

// // };

import axios from 'axios';
export const fetchNearbyShops = params => {
  return axios.get(`/api/shops`)
};

export const fetchShopDetails = shopId => {
  return axios.get(`/api/shops/${shopId}`)
}
