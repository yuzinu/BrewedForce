import { connect } from 'react-redux';
import EditReviewForm from './edit_review_form';
import { updateCoffeeScore } from '../../actions/coffee_score/coffee_score_action';
import { updateReview } from '../../actions/review/review_actions';


const mSTP = (state, ownProps) => {
  return {
    review: state.entities.reviews[ownProps.match.params.reviewId]
  };
};

const mDTP = dispatch => {
  return {
    updateCoffeeScore: score => dispatch(updateCoffeeScore(score)),
    updateReview: review => dispatch(updateReview(review))
  };
};

export default connect(mSTP, mDTP)(EditReviewForm);