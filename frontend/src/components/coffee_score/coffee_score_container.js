import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CoffeeScoreForm from './coffee_score_form';
import { createCoffeeScore } from '../../actions/coffee_score/coffee_score_action';

const mSTP = (state, ownProps) => {
  const user = state.session.user;
  const coffee = state.entities.coffees[ownProps.match.params.coffeeId];
  return {
    user,
    coffee
  };
};

const mDTP = dispatch => {
  return {
    createCoffeeScore: score => dispatch(createCoffeeScore(score))
  };
};

export default withRouter(connect(mSTP, mDTP)(CoffeeScoreForm));