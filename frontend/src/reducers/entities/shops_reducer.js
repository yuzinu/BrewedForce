import { RECEIVE_NEARBY_SHOPS,
        RECEIVE_SHOP_DETAILS,
        RECEIVE_SHOP_COFFEES, 
        CHECK_SHOP_PRESENCE,
        RECEIVE_SEARCH_RESULTS,
        CLEAR_SEARCH_RESULTS } from '../../actions/shop/shop_actions';

const shopsReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_NEARBY_SHOPS:
            return action.shops
        case RECEIVE_SHOP_DETAILS:
            nextState['shopDetails'] = action.details.data;
            return nextState
        case RECEIVE_SHOP_COFFEES:
            nextState['coffees'] = action.coffees.data;
            return nextState
        case CHECK_SHOP_PRESENCE:
            return nextState
        case RECEIVE_SEARCH_RESULTS:
            nextState['searchResults'] = action.shops.data;
            return nextState
        case CLEAR_SEARCH_RESULTS:
            nextState = {}
            return nextState;
        default:
            return state;
    }
};

export default shopsReducer;