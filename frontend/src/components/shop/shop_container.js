import { connect } from 'react-redux';

import Shop from './shop';
import { fetchShopReviews } from '../../actions/review/review_actions';
import { fetchShopDetails,
        fetchShopCoffees } from '../../actions/shop/shop_actions';


const mapStateToProps = state => {
    return {
        shopReviews: state.entities.reviews.shopReviews,
        shopDetails: state.entities.shops.shopDetails,
        shopCoffees: state.entities.shops.coffees
       

    
    }
};

const mapDispatchToProps = dispatch => ({
    fetchShopReviews: shopId => dispatch(fetchShopReviews(shopId)),
    fetchShopDetails: shopId => dispatch(fetchShopDetails(shopId)),
    fetchShopCoffees: shopId => dispatch(fetchShopCoffees(shopId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);