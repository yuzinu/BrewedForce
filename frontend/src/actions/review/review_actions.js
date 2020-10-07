import * as ReviewsApiUtil from '../../util/reviews/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

export const createReview = review => {
  return dispatch => {
    return ReviewsApiUtil.createReview(review)
      .then(review => dispatch(receiveReview(review)))
  }
}

export const updateReview = review => {
  return dispatch => {
    return ReviewsApiUtil.updateReview(review)
      .then(review => dispatch(receiveReview(review)))
  }
}