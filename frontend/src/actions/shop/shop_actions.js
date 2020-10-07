import * as GoogleApiUtil from '../../util/google_api_util';

export const RECEIVE_NEARBY_SHOPS = 'RECEIVE_NEARBY_SHOPS';

const receiveNearbyShops = shops => {
    return {
        type: RECEIVE_NEARBY_SHOPS,
        shops
    }
};

export const fetchNearbyShops = params => dispatch => {
    return GoogleApiUtil.fetchNearbyShops(params).then(shops => (
        dispatch(receiveNearbyShops(shops))
    ))
};