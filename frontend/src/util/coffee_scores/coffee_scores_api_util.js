import axios from 'axios';

export const fetchCoffeeScores = coffeeId => {
  return axios.get(`/api/coffee_scores/coffee/${coffeeId}`)
}