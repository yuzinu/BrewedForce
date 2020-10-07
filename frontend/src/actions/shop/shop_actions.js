import * as GoogleApiUtil from '../../util/google_api_util';

export const RECEIVE_NEARBY_SHOPS = 'RECEIVE_NEARBY_SHOPS';

const receiveNearbyShops = shops => {
  debugger
    return {
        type: RECEIVE_NEARBY_SHOPS,
        shops
    }
};

export const fetchNearbyShops = params => {
  return dispatch => {
    return GoogleApiUtil.fetchNearbyShops(params)
      .then(({data}) => {
        debugger
        dispatch(receiveNearbyShops(data))
      })
  }
}