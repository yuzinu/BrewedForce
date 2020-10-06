import { RECEIVE_COFFEE } from '../../actions/coffee/coffee_actions';

const coffeesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COFFEE:
      const data = action.coffee.data;
      newState[data._id] = data;
      return newState;
    default:
      return state;
  }
}

export default coffeesReducer;