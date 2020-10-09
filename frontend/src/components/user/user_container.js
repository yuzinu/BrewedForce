import { connect } from 'react-redux';
import User from './user';
import { fetchUser } from '../../actions/user/user_actions';
import { fetchUserCoffeeScores } from '../../actions/coffee_score/coffee_score_action';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  return {
    user
  };
};

const mDTP = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUserCoffeeScores: userId => dispatch(fetchUserCoffeeScores(userId))
  };
};

export default connect(mSTP, mDTP)(User);