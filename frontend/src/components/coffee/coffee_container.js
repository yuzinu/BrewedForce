import { connect } from 'react-redux';
import Coffee from './coffee';
import { fetchCoffee } from '../../actions/coffee/coffee_actions';
import { fetchCoffeeScores } from '../../actions/coffee_score/coffee_score_action';

const mSTP = (state, ownProps) => {
  const coffeeId = ownProps.match.params.coffeeId;
  const coffee = state.entities.coffees[coffeeId];
  const coffeeScores = state.entities.coffeeScores
  return {
    coffee,
    coffeeScores: Object.values(coffeeScores)
  };
};

const mDTP = dispatch => {
  return {
    fetchCoffee: coffeeId => dispatch(fetchCoffee(coffeeId)),
    fetchCoffeeScores: coffeeId => dispatch(fetchCoffeeScores(coffeeId))
  };
};

export default connect(mSTP, mDTP)(Coffee);