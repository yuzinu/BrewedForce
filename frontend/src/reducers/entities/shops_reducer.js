import { RECEIVE_NEARBY_SHOPS,
        RECEIVE_SHOP_DETAILS,
        RECEIVE_SHOP_COFFEES } from '../../actions/shop/shop_actions';

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
        default:
            return state;
    }
};

export default shopsReducer;