import axios from 'axios';

export const fetchShop = shopId => {
    return axios.get(`/api/shops/${shopId}`)
}