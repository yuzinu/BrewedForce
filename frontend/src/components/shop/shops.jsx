import React from 'react';
import './shops.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from './search';



export default class UserNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.formatTopShops = this.formatTopShops.bind(this);
    }

    componentDidMount() {
      const { fetchAllShops, fetchAllShopReviews } = this.props;
      fetchAllShops()
        .then(() => fetchAllShopReviews()
        .then(() => this.formatTopShops())
      );
    }

    formatTopShops() {
      this.props.shops.shops.forEach(shop => {
        // console.log(shop.place_id)
        this.props.fetchShopDetails(shop.place_id)
        .then(() => this.setState({ [shop.place_id]: this.props.shops.shopDetails.rating }))
          // .then(() => console.log(this.props.shops))
      })
      setTimeout(() => console.log(this.state), 5000);
    }

    render() {
        return (
          <div className='shops-show'>
            <div className='shops-show-left'>
              <p className='shops-show-left-title'>Top Rated Coffee Shops</p>
            </div>
            <div className='shops-show-center'>

            </div>
            <div className='shops-show-right'>
                <SearchBar props={this.props} />
            </div>

          </div>


        )
    }
    
}
