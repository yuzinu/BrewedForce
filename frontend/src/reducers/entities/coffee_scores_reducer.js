import { 
  RECEIVE_COFFEE_SCORE,
  RECEIVE_COFFEE_SCORES
} from '../../actions/coffee_score/coffee_score_action';

const coffeeScoresReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COFFEE_SCORE:
      const score = action.coffeeScore.data;
      newState[score._id] = score;
      debugger
      return newState;
    case RECEIVE_COFFEE_SCORES:
      const data = action.coffeeScores.data;
      data.forEach(datum => {
        newState[datum._id] = datum;
      })
      return newState;
    default:
      return state;
  }
}

export default coffeeScoresReducer;