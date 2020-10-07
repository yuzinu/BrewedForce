import * as GoogleApiUtil from '../../util/google_api_util';

export const RECEIVE_NEARBY_SHOPS = 'RECEIVE_NEARBY_SHOPS';
export const RECEIVE_SHOP_DETAILS = 'RECEIVE_SHOP_DETAILS';

const receiveNearbyShops = shops => {
    return {
        type: RECEIVE_NEARBY_SHOPS,
        shops
    }
};

const receiveShopDetails = details => {
  return {
    type: RECEIVE_SHOP_DETAILS,
    details
  }
}

export const fetchNearbyShops = params => {
  return dispatch => {
    return GoogleApiUtil.fetchNearbyShops(params)
      .then(({data}) => {
        dispatch(receiveNearbyShops(data))
      })
  }
}

export const fetchShopDetails = shopId => {
  return dispatch => {
    return GoogleApiUtil.fetchShopDetails(shopId)
      .then(details => {
        dispatch(receiveShopDetails(details))
      })
  }
}

