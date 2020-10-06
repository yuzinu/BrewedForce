import * as CoffeeScoresApiUtil from '../../util/coffee_scores/coffee_scores_api_util';

export const RECEIVE_COFFEE_SCORES = 'RECEIVE_COFFEE_SCORES';

const receiveCoffeeScores = coffeeScores => {
  return {
    type: RECEIVE_COFFEE_SCORES,
    coffeeScores
  }
}

export const fetchCoffeeScores = coffeeId => {
  return dispatch => {
    return CoffeeScoresApiUtil.fetchCoffeeScores(coffeeId)
      .then(coffeeScores => dispatch(receiveCoffeeScores(coffeeScores)))
  }
}