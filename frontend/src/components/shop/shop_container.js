import { connect } from 'react-redux';

import Shop from './shop';
import { fetchShopReviews } from '../../actions/review/review_actions';
import { fetchShopDetails } from '../../actions/shop/shop_actions';

const mapStateToProps = state => {
    return {
        shopReviews: state.entities.reviews.shopReviews,
        shopDetails: state.entities.shops
    }
};

const mapDispatchToProps = dispatch => ({
    fetchShopReviews: shopId => dispatch(fetchShopReviews(shopId)),
    fetchShopDetails: shopId => dispatch(fetchShopDetails(shopId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);