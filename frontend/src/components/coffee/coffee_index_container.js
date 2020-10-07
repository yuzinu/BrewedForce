import { connect } from 'react-redux';
import CoffeeIndex from './coffee_index';
import { fetchAllCoffees } from '../../actions/coffee/coffee_actions';

const mSTP = (state) => ({
        coffees: state.entities.coffees
});

const mDTP = dispatch => ({
        fetchAllCoffees: () => dispatch(fetchAllCoffees())
});

export default connect(mSTP, mDTP)(CoffeeIndex);