import axios from 'axios';

export const fetchNearbyShops = params => {
  
  return axios.get(`/api/shops`)
};

export const fetchShopDetails = shopId => {
  return axios.get(`/api/shops/${shopId}`)
}

export const fetchSearchResults = id => {
  
  return axios.get(`/api/shops/search/${id}`)
}

export const fetchSearchPhoto = ref => {
  return axios.get(`/api/shops/search/photo/${ref}`)
}