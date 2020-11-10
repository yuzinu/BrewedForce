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
      const topShops = [];
      let min;
      console.log(this.props.shops.shops)
      const sorted = this.props.shops.shops.sort(this.compareRatings)
      console.log(sorted)
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
