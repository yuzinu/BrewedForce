import { connect } from 'react-redux';
import { fetchAllShopReviews } from '../../actions/review/review_actions';
import Shops from './shops';
import { fetchSearchResults, 
  clearSearchResults, 
  fetchSearchPhoto,
  fetchAllShops,
  fetchShopDetails
} from '../../actions/shop/shop_actions';

const mapStateToProps = state => {
    return {
        searchResults: state.entities.shops.searchResults,
        loading: state.ui.loading,
        shops: state.entities.shops,
        reviews: Object.values(state.entities.reviews)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSearchResults: input => dispatch(fetchSearchResults(input)),
    fetchSearchPhoto: ref => dispatch(fetchSearchResults(ref)),
    clearSearchResults: () => dispatch(clearSearchResults()),
    fetchAllShops: () => dispatch(fetchAllShops()),
    fetchAllShopReviews: () => dispatch(fetchAllShopReviews()),
    fetchShopDetails: shopId => dispatch(fetchShopDetails(shopId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shops);
