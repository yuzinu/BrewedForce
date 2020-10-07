import { combineReducers } from 'redux';
import coffeesReducer from './coffees_reducer';
import coffeeScoresReducer from './coffee_scores_reducer';
import reviewsReducer from './reviews_reducer';
import shopsReducer from './shops_reducer';

const entitiesReducer = combineReducers({
  coffees: coffeesReducer,
  coffeeScores: coffeeScoresReducer,
  reviews: reviewsReducer,
  shops: shopsReducer
})

export default entitiesReducer;