import axios from 'axios';

export const createReview = review => {
  return axios.post('/api/reviews/', review)
}

export const updateReview = review => {
  return axios.patch(`/api/reviews/${review.id}`, review)
}