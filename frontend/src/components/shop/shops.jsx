import React from 'react';
import './shops.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from './search';



export default class UserNav extends React.Component {
    constructor(props) {
        super(props);
        this.formatTopShops = this.formatTopShops.bind(this);
    }

    componentDidMount() {
      this.props.fetchAllShops()
        .then(shops => this.formatTopShops(shops.shops.data));
    }

    formatTopShops(shops) {
      // debugger
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
