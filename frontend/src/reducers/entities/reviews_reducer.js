import { RECEIVE_REVIEW,
        RECEIVE_SHOP_REVIEWS } from '../../actions/review/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      newState[action.review.data._id] = action.review.data;
      return newState;
    case RECEIVE_SHOP_REVIEWS:
      newState['shopReviews'] = action.reviews.data;
      return newState;
    default:
      return state;
  }
}


export default reviewsReducer;