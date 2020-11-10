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
        this.compareRatings = this.compareRatings.bind(this);
    }

    componentDidMount() {
      this.props.fetchAllShops()
        .then(() => this.formatTopShops());
    }
    
    formatTopShops() {
      const sorted = this.props.shops.shops.sort(this.compareRatings)
      sorted.splice(6)
      this.setState({ topShops: sorted });
      sorted.map(shop => {
        console.log(shop.place_id)
        return this.props.fetchShopDetails(shop.place_id)
          .then(() => this.setState({ [shop.place_id]: this.props.shops.shopDetails.name}));
      })
    }

    compareRatings(a, b) {
      const aRating = a.rating;
      const bRating = b.rating;
      let comp = 0;
      if (aRating > bRating) {
        comp = -1;
      } else if (aRating < bRating) {
        comp = 1;
      }
      return comp;
    }
    
    render() {
        if (typeof this.state.topShops === 'undefined') return null;
        console.log(this.state);
        return (
          <div className='shops-show'>
            <div className='shops-show-left'>
              <p className='shops-show-left-title'>Top Rated Coffee Shops</p>
              <ul className='top-shops'>
                {this.state.topShops.map(shop => {
                  return (
                    <Link to={`/shops/${shop.place_id}`} className='top-shop-link'>
                      <li key={shop.place_id} className='top-shop'>
                        <span className='top-shop-name'>{this.state[shop.place_id]}</span>
                        <span className='top-shop-rating'>{shop.rating}/5</span>
                      </li>
                    </Link>
                  )
                })}
              </ul>
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
