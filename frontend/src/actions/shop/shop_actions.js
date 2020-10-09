import * as GoogleApiUtil from '../../util/google_api_util';
import * as ShopsApiUtil from '../../util/shops/shops_api_util';

export const RECEIVE_NEARBY_SHOPS = 'RECEIVE_NEARBY_SHOPS';
export const RECEIVE_SHOP_DETAILS = 'RECEIVE_SHOP_DETAILS';
export const RECEIVE_SHOP_COFFEES = 'RECEIVE_SHOP_COFFEES';
export const CHECK_SHOP_PRESENCE = 'CHECK_SHOP_PRESENCE';

const checkShopPresence = (shop) => {
  return {
    type: CHECK_SHOP_PRESENCE,
    shop
  }
}

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

const receiveShopCoffees = coffees => {
  return {
    type: RECEIVE_SHOP_COFFEES,
    coffees
  }
}

export const fetchShopPresence = shopId => {
  return dispatch => {
    return ShopsApiUtil.fetchShopPresence(shopId)
      .then(shop => {
        dispatch(checkShopPresence(shop))
      })
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

export const fetchShopCoffees = shopId => {
  return dispatch => {
    return ShopsApiUtil.fetchShopCoffees(shopId)
      .then(coffees => {
        dispatch(receiveShopCoffees(coffees))
      })
  }
}

