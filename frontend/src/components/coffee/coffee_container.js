import { connect } from 'react-redux';
import Coffee from './coffee';

const mSTP = (state, ownProps) => {
  // REVIEW THIS GETTER!!
  const coffee = state.coffees[ownProps.match.params.coffeeId];
  // const coffeeScore = state.coffeeScores[???]
  return {
    coffee
    // coffeeScore
  };
};

const mDTP = dispatch => {
  return {
    
  };
};

export default connect(mSTP, mDTP)(Coffee);