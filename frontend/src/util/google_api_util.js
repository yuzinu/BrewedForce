import $ from 'jquery';
import keys from '../keys';


export const fetchNearbyShops = (params) => {
    return $.ajax({
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${params.location}&rankby=prominence&type=cafe&key=${keys.googleMapKey}`,
    });
};