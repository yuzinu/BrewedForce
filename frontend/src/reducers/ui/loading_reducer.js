import { 
  START_LOADING, 
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS
} from '../../actions/shop/shop_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING:
      return true;
    case CLEAR_SEARCH_RESULTS:
      return false;
    case RECEIVE_SEARCH_RESULTS:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;