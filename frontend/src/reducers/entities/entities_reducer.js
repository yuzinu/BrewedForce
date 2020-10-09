import { combineReducers } from 'redux';
import coffeesReducer from './coffees_reducer';
import coffeeScoresReducer from './coffee_scores_reducer';
import reviewsReducer from './reviews_reducer';
import shopsReducer from './shops_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  coffees: coffeesReducer,
  coffeeScores: coffeeScoresReducer,
  reviews: reviewsReducer,
  shops: shopsReducer,
  users: usersReducer
})

export default entitiesReducer;