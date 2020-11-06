import * as ReviewsApiUtil from '../../util/reviews/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_SHOP_REVIEWS = 'RECEIVE_SHOP_REVIEWS';

const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

const receiveShopReviews = reviews => {
  return {
    type: RECEIVE_SHOP_REVIEWS,
    reviews
  }
}

export const fetchAllShopReviews = () => {
  return dispatch => {
    return ReviewsApiUtil.fetchAllShopReviews()
      .then(reviews => dispatch(receiveShopReviews(reviews)))
  }
}

export const fetchShopReviews = shopId => {
  return dispatch => {
    return ReviewsApiUtil.fetchShopReviews(shopId)
      .then(reviews => dispatch(receiveShopReviews(reviews)))
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