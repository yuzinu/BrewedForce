import React from 'react';
import './shop.css';

import ReviewFormContainer from '../review/review_form_container';


export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };


    }
    
    render() {
        return (
            <div>
                <h1></h1>
                <div>
                </div>
                <div> 
                    <ReviewFormContainer/>
                </div>
            </div>
        )

    }
}

