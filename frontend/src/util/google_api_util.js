import axios from 'axios';

export const fetchNearbyShops = params => {
  debugger
  return axios.get(`/api/shops`)
};

export const fetchShopDetails = shopId => {
  return axios.get(`/api/shops/${shopId}`)
}
