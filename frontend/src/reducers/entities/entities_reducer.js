import { combineReducers } from 'redux';
import coffeesReducer from './coffees_reducer';
import coffeeScoresReducer from './coffee_scores_reducer';

const entitiesReducer = combineReducers({
  coffees: coffeesReducer,
  coffeeScores: coffeeScoresReducer
})

export default entitiesReducer;