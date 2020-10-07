import { RECEIVE_NEARBY_SHOPS } from '../../actions/shop/shop_actions';

const shopsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    debugger;
    switch(action.type) {
        case RECEIVE_NEARBY_SHOPS:
            return action.shops;
        default:
            return state;
    }
};

export default shopsReducer;