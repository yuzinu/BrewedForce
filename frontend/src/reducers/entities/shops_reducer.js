import { RECEIVE_NEARBY_SHOPS } from '../../actions/shop/shop_actions';

const shopsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_NEARBY_SHOPS:
            nextState['nearbyShops'] = action.shops;
            return nextState;
        default:
            return state;
    }
};

export default shopsReducer;