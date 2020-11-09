import React from 'react';
import './shops.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from './search';



export default class UserNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addShopRatingsToState = this.addShopRatingsToState.bind(this);
        this.formatTopShops = this.formatTopShops.bind(this);
    }

    componentDidMount() {
      const { fetchAllShops, fetchAllShopReviews } = this.props;
      fetchAllShops()
        .then(() => fetchAllShopReviews()
        .then(() => this.addShopRatingsToState())
      );
    }

    addShopRatingsToState() {
      this.props.shops.shops.forEach(shop => {
        this.props.fetchShopDetails(shop.place_id)
        .then(() => this.setState({ [shop.place_id]: this.props.shops.shopDetails.rating }, () => {
          if (Object.values(this.state).length === this.props.shops.shops.length) {
            this.formatTopShops();
          }
        }))
      });
    }

    formatTopShops() {
      // console.log(this.state)
      const topShops = [];
      const sorted = Object.values(this.state).sort((a, b) => b - a);
      let i = 0;
      // Object.keys(this.state).forEach(shop => {
      // });
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
