import axios from 'axios';

export const fetchShopCoffees = place_id => {
    return axios.get(`/api/shops/${place_id}/coffees`)
}

export const fetchShopPresence = place_id => {
    return axios.post(`/api/shops/${place_id}`)
}