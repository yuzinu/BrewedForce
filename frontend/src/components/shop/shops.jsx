import React from 'react';
import './shops.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from './search';



export default class UserNav extends React.Component {
    constructor(props) {
        super(props);
        // this.clearResults = this.clearResults.bind(this);
    }

    // componentDidMount() {
    //   this.props.clearSearchResults();
    // }

    // clearResults() {
    //   this.props.clearSearchResults();
    // }

    render() {
        return (
          <div className='shops-show'>
            <div className='shops-show-left'>
              <p>SHOWS SHOW LEFT</p>
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
