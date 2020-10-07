import { RECEIVE_ALL_COFFEES, RECEIVE_COFFEE } from '../../actions/coffee/coffee_actions';

const coffeesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COFFEE:
      const coffee = action.coffee;
      newState[coffee._id] = coffee;
      return newState;
    case RECEIVE_ALL_COFFEES:
      
      return Object.assign({}, action.coffees);
    default:
      return state;
  }
};

export default coffeesReducer;