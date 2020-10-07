import axios from 'axios';

export const fetchCoffee = coffeeId => {
  return axios.get(`/api/coffees/${coffeeId}`);
};

export const fetchAllCoffees = (filters) => {
  return axios.get('/api/coffees');
};