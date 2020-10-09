import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createCoffeeScore } from '../../actions/coffee_score/coffee_score_action';
import { createReview } from '../../actions/review/review_actions';

const mSTP = (state, ownProps) => {
  const user = state.session.user;
  debugger
  // const shop = ownProps.match.params.shopId;
  // GET SHOP INFO
  return {
    user,
    // shop
    // coffees: Object.values(coffees)
  };
};

const mDTP = dispatch => {
  // createCoffeeScore: score => dispatch(createCoffeeScore(score)),
  return {
    createReview: review => dispatch(createReview(review))
  };
};

export default withRouter(connect(mSTP, mDTP)(ReviewForm));