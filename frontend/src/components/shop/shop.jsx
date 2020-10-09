import React from 'react';
import './shop.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';


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
            coffees: [],
            website: '',
            phone_number: ''
        };
        this.calculateRatings = this.calculateRatings.bind(this);
    }

    componentDidMount() {
        this.props.fetchShopCoffees(this.props.match.params.shopId)
          .then(this.props.fetchShopDetails(this.props.match.params.shopId));
    }

    componentDidUpdate(prevProps) {
        if (this.props.shopDetails !== undefined
            && (prevProps.shopDetails === undefined 
                || (prevProps.shopDetails !== undefined && this.props.shopDetails.name !== prevProps.shopDetails.name))) {
            this.setState({
                name: this.props.shopDetails.name,
                id: this.props.match.params.shopId,
                location: this.props.shopDetails.formatted_address,
                price_level: this.props.shopDetails.price_level,
                ratings: this.calculateRatings(),
                coffees: this.props.shopCoffees || [],
                website: this.props.shopDetails.website,
                phone_number: this.props.shopDetails.formatted_phone_number
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
        let reviews;
        if(!this.props.shopReviews || this.props.shopReviews.length === 0) {
            return 'Be the first to write a review';
        } else {
            reviews = this.props.shopReviews;
        }
        return reviews
            .map((review, i) => {
                return (
                    <div className='review'>
                        <div className='review-rating'><ShopRatings size={'25px'} ratings={review.rating} /></div>
                        <div className='review-sub-row'>
                            <div className='review-user'>{review.user.username}</div>
                            <div className='review-date'>{this.renderReviewDate(review.user.updatedAt)}</div>
                        </div>
                        <div className='review-text'>{review.text}</div>
                        
                    </div>
                )
            })
    }

    renderReviewDate(date) {
        date = date.split('T')[0].split('-').reverse()
        
        [ date[0], date[1] ] = [ date[1], date[0] ];
        return date.join('/')
    }

    renderCoffees() {
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

    renderWebsite() {
        if (this.state.website) {
        return this.state.website.split('/')[2]}
    }

    numReviews() {
        if (!this.props.shopReviews || this.props.shopReviews.length === 0) {
            return "No";
        } else {
            return this.props.shopReviews.length;
        }
    }
    
    
    render() {
        const phone = <FontAwesomeIcon className='phone-icon' icon={faPhone}/>
        const browser = <FontAwesomeIcon className='browser-icon' icon={faWindowMaximize} />
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
                        <div className='shop-description-2'>
                            <div className='shop-website'>
                                {browser}<a href={this.state.website} className='link'>{this.renderWebsite()}</a>
                            </div>
                        <div className='shop-number'>{phone}{this.state.phone_number}</div>
                        </div>

                </div>
                <div className='bottom-container'>
                    <div className='bottom-container-sub'>
                        <div className='bottom-container-sub-coffees'>
                            <div className='coffees'>
                                <div className='coffees-title'>Our Coffees</div>
                                <div className='coffees-container'>
                                    {this.renderCoffees()}
                                </div>
                               
                            </div>
                        </div>

                        <div className='bottom-container-sub-reviews'>
                            <div className='review-title'>Reviews</div>
                            <Link className='link-write-review' to='/reviews/review_form'>
                                <div className='write-a-review'>Write a Review</div>
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


