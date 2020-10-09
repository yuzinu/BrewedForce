import { RECEIVE_USER } from '../../actions/user/user_actions';
import { RECEIVE_USER_COFFEE_SCORES } from '../../actions/coffee_score/coffee_score_action';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      const data = action.user.data;
      newState[data._id] = data;
      return newState;
    case RECEIVE_USER_COFFEE_SCORES:
      newState[action.coffeeScores.data[0].user].coffeeScores = action.coffeeScores.data;
      return newState;
    default:
      return state;
  }
}

export default usersReducer;