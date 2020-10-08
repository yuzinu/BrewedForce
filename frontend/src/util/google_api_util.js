import axios from 'axios';

export const fetchNearbyShops = params => {
  
  return axios.get(`/api/shops`)
};

export const fetchShopDetails = shopId => {
  return axios.get(`/api/shops/${shopId}`)
}
