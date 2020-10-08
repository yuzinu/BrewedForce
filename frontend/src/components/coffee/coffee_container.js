import { connect } from 'react-redux';
import Coffee from './coffee';
import { fetchCoffee } from '../../actions/coffee/coffee_actions';
import { fetchCoffeeScores } from '../../actions/coffee_score/coffee_score_action';
import { fetchNearbyShops } from '../../actions/shop/shop_actions';

const mSTP = (state, ownProps) => {
  // 
  const coffeeId = ownProps.match.params.coffeeId;
  const coffee = state.entities.coffees[coffeeId];
  const coffeeScores = state.entities.coffeeScores;
  const nearbyShops = state.entities.shops;

  return {
    coffee,
    coffeeId,
    coffeeScores: Object.values(coffeeScores),
    nearbyShops
  };
};

const mDTP = dispatch => {
  return {
    fetchCoffee: coffeeId => dispatch(fetchCoffee(coffeeId)),
    fetchCoffeeScores: coffeeId => dispatch(fetchCoffeeScores(coffeeId)),
    fetchNearbyShops: params => dispatch(fetchNearbyShops(params))
  };
};

export default connect(mSTP, mDTP)(Coffee);