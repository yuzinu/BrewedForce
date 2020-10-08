import React from 'react';
import './shop.scss';

import ReviewFormContainer from '../review/review_form_container';
import ShopRatings from './ratings';


export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            location: '',
            price_level: null,
            ratings: 3
        };
        this.calculateRatings = this.calculateRatings.bind(this);
    }

    componentDidMount() {
        this.props.fetchShopDetails(this.props.match.params.shopId)
        // .then(() => this.calculateRatings())

    }

    componentDidUpdate(prevProps) {


        if(Object.values(this.props.shopDetails).length > 0 
            && this.props.shopDetails.name !== prevProps.shopDetails.name) {
                this.setState({
                    name: this.props.shopDetails.name,
                    id: this.props.match.params.shopId,
                    location: this.props.shopDetails.formatted_address,
                    price_level: this.props.shopDetails.price_level,
                    ratings: this.calculateRatings()
                }, () => this.props.fetchShopReviews(this.state.id))
        }
    }

    calculateRatings() {
        let reviews;
        if (!this.props.shopReviews || this.props.shopReviews.length === 0) {
            return 0;
        } else {
            reviews = this.props.shopReviews;
        }
        
        let sum = 0;

        for (let i = 0; i < reviews.length; i++) {
            sum += reviews[i].rating
        }
        debugger
        return sum/this.props.shopReviews.length;
    }

    renderReviews() {
        let reviews;
        if(!this.props.shopReviews || this.props.shopReviews.length === 0) {
            return;
        } else {
            reviews = this.props.shopReviews;
        }
  
        return reviews
            .map((review, i) => {
                return (
                    <div className='review'>
                        <div className='review-user'>{review.user}</div>
                        <div className='review-rating'>{review.rating}</div>
                        <div className='review-text'>{review.text}</div>
                    </div>
                )
            })
    }

    numReviews() {
        if (!this.props.shopReviews || this.props.shopReviews.length === 0) {
            return;
        } else {
            return this.props.shopReviews.length;
        }
    }
    
    
    render() {
        if(this.state.name === '') return null;
        return (
            <div className='main-container'>
                <div className='shop-container'>
                    <div>
                        <div className='shop-description'>
                            <h1 className='shop-title'>{this.state.name}</h1>
                                <div className='ratings-container'>
                                    <ShopRatings ratings={this.calculateRatings()}/>
                                    <div className='num-reviews'>{this.numReviews()} Reviews</div>
                                </div>

        
                        </div>
                    </div>
                    <div>
                        {this.renderReviews()}
                    </div>

                </div>
            </div>
        )

    }
};


