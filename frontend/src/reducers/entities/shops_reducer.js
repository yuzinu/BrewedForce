import { RECEIVE_NEARBY_SHOPS,
        RECEIVE_SHOP_DETAILS } from '../../actions/shop/shop_actions';

const shopsReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_NEARBY_SHOPS:
            return action.shops
        case RECEIVE_SHOP_DETAILS:
            return nextState['shopDetails'] = action.details.data
        default:
            return state;
    }
};

export default shopsReducer;