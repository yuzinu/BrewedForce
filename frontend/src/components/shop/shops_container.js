import { connect } from 'react-redux';

import Shops from './shops';
import { fetchSearchResults, fetchSearchPhoto } from '../../actions/shop/shop_actions';

const mapStateToProps = state => {
    debugger
    return {
        searchResults: state.entities.shops.searchResults
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSearchResults: input => dispatch(fetchSearchResults(input)),
    fetchSearchPhoto: ref => dispatch(fetchSearchResults(ref))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shops);
