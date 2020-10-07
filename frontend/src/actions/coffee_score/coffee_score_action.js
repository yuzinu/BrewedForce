import * as CoffeeScoresApiUtil from '../../util/coffee_scores/coffee_scores_api_util';

export const RECEIVE_COFFEE_SCORE = 'RECEIVE_COFFEE_SCORE';
export const RECEIVE_COFFEE_SCORES = 'RECEIVE_COFFEE_SCORES';


const receiveCoffeeScore = coffeeScore => {
  return {
    type: RECEIVE_COFFEE_SCORE,
    coffeeScore
  }
}

const receiveCoffeeScores = coffeeScores => {
  return {
    type: RECEIVE_COFFEE_SCORES,
    coffeeScores
  }
}

export const createCoffeeScore = coffeeScore => {
  return dispatch => {
    return CoffeeScoresApiUtil.createCoffeeScore(coffeeScore)
      .then(coffeeScore => dispatch(receiveCoffeeScore(coffeeScore)))
  }
}

export const updateCoffeeScore = coffeeScore => {
  return dispatch => {
    return CoffeeScoresApiUtil.updateCoffeeScore(coffeeScore)
      .then(coffeeScore => dispatch(receiveCoffeeScore(coffeeScore)))
  }
}

export const fetchCoffeeScores = coffeeId => {
  return dispatch => {
    return CoffeeScoresApiUtil.fetchCoffeeScores(coffeeId)
      .then(coffeeScores => dispatch(receiveCoffeeScores(coffeeScores)))
  }
}