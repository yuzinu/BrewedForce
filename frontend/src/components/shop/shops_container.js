import { connect } from 'react-redux';

import Shops from './shops';
import { fetchSearchResults, clearSearchResults, fetchSearchPhoto } from '../../actions/shop/shop_actions';

const mapStateToProps = state => {
    return {
        searchResults: state.entities.shops.searchResults,
        loading: state.ui.loading
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSearchResults: input => dispatch(fetchSearchResults(input)),
    fetchSearchPhoto: ref => dispatch(fetchSearchResults(ref)),
    clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shops);
