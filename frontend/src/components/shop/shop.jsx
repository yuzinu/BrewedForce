import React from 'react';
import './shop.scss';
import { Link } from 'react-router-dom';

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
            coffees: []
        };
        this.calculateRatings = this.calculateRatings.bind(this);
    }

    componentDidMount() {

        this.props.fetchShopCoffees(this.props.match.params.shopId).then(
        this.props.fetchShopDetails(this.props.match.params.shopId))


    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props.shopDetails !== undefined
            && (prevProps.shopDetails === undefined 
                || (prevProps.shopDetails !== undefined && this.props.shopDetails.name !== prevProps.shopDetails.name))) {
            this.setState({
                name: this.props.shopDetails.name,
                id: this.props.match.params.shopId,
                location: this.props.shopDetails.formatted_address,
                price_level: this.props.shopDetails.price_level,
                ratings: this.calculateRatings(),
                coffees: this.props.shopCoffees || []
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
        return sum/this.props.shopReviews.length;
    }

    renderReviews() {
        debugger
        let reviews;
        if(!this.props.shopReviews || this.props.shopReviews.length === 0) {
            return 'Be the first to write a review';
        } else {
            reviews = this.props.shopReviews;
        }
        debugger
        return reviews
            .map((review, i) => {
                return (
                    <div className='review'>
                        <div className='review-rating'><ShopRatings size={'25px'} ratings={review.rating} /></div>
                        <div className='review-user'>{review.user}</div>
                        <div className='review-text'>{review.text}</div>
                    </div>
                )
            })
    }

    renderCoffees() {
        debugger
        let coffees;
        if(this.state.coffees.length === 0) {
            return [];
        } else {
            coffees = this.state.coffees;
        }
        return coffees
            .map((coffee, i) => {
                return (
                    <Link to={`/coffees/${coffee[0]._id}`} className='link' >
                        <div className='coffee-name'>{coffee[0].name}</div>
                    </Link>
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
        debugger
        if(this.state.name === '') return null;
        return (
            <div className='main-container'>
                <div className='shop-container'>
                    
                        <div className='shop-description'>
                            <h1 className='shop-title'>{this.state.name}</h1>
                                <div className='ratings-container'>
                                    <ShopRatings size={'35px'} ratings={this.calculateRatings()}/>
                                    <div className='num-reviews'>{this.numReviews()} Reviews</div>
                                </div>
                                <div className='address'>
                                    <div>{this.state.location}</div>
                                </div>
                        </div>
                </div>
                <div className='bottom-container'>
                    <div className='bottom-filler'/>
                    <div className='bottom-container-sub'>
                        <div className='bottom-container-sub-coffees'>
                            <div className='coffees'>
                                <div className='coffees-title'>Coffees Served</div>
                                <div className='coffees-container'>
                                    {this.renderCoffees()}
                                </div>
                               
                            </div>
                        </div>

                        <div className='bottom-container-sub-reviews'>
                            <div className='review-title'>Reviews</div>
                            <Link className='link-write-review' to='/reviews/review_form'>
                                <div classname='write-a-review'>Write a Review</div>
                            </Link>
                            <div className={this.renderReviews() === 'Be the first to write a review' ? 'no-reviews': 'all-reviews' }>
                                {this.renderReviews()}
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        )

    }
};


