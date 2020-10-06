import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createCoffeeScore } from '../../actions/coffee_score/coffee_score_action';
import { createReview } from '../../actions/review/review_actions';

const mSTP = (state, ownProps) => {
  const user = state.session.user;
  const coffees = state.entities.coffees;
  // GET SHOP INFO
  return {
    user,
    coffees: Object.values(coffees)
    // shop
  };
};

const mDTP = dispatch => {
  return {
    createCoffeeScore: score => dispatch(createCoffeeScore(score)),
    createReview: review => dispatch(createReview(review))
  };
};

export default connect(mSTP, mDTP)(ReviewForm);