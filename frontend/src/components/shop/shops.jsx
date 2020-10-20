import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from './search';



export default class UserNav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='shops-show'>
                <SearchBar props={this.props} />
            </div>


        )
    }
    
}
