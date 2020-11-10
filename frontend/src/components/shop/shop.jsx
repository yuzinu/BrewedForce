import React from 'react';
import './shop.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
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
            phone_number: '',
            image: ''
        };
        this.calculateRatings = this.calculateRatings.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
      this.setState({ showModal: true });
    }

    handleCloseModal() {
      this.setState({ showModal: false });
      const shopId = this.props.match.params.shopId;
      this.props.fetchShopReviews(shopId)
        .then(() => this.calculateRatings());
    }

    componentDidMount() {
        this.props.fetchShopPresence(this.props.match.params.shopId)
            // .then(() => {

        if (this.props.shopDetails) {
        this.props.fetchShopCoffees(this.props.match.params.shopId)
          .then(this.props.fetchShopDetails(this.props.match.params.shopId))
            .then(this.setState({
                name: this.props.shopDetails.name,
                id: this.props.match.params.shopId,
                location: this.props.shopDetails.formatted_address,
                price_level: this.props.shopDetails.price_level,
                ratings: this.calculateRatings(),
                coffees: this.props.shopCoffees || [],
                website: this.props.shopDetails.website,
                phone_number: this.props.shopDetails.formatted_phone_number,
                image: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.shopDetails.photos[0].photo_reference}&sensor=false&key=AIzaSyDvUSqdDw6TdxHjNZudz295QAu9ZWjYm0k`
            }, () => this.props.fetchShopReviews(this.state.id)));
        }
        else {
            this.props.fetchShopCoffees(this.props.match.params.shopId)
            .then(this.props.fetchShopDetails(this.props.match.params.shopId));
        }
    // })
    }

    componentDidUpdate(prevProps) {
        if (this.props.shopDetails !== undefined && 
                (prevProps.shopDetails === undefined || 
                (prevProps.shopDetails !== undefined && 
                    this.props.shopDetails.name !== prevProps.shopDetails.name)
                )
            )
            {
            this.setState({
                name: this.props.shopDetails.name,
                id: this.props.match.params.shopId,
                location: this.props.shopDetails.formatted_address,
                price_level: this.props.shopDetails.price_level,
                ratings: this.calculateRatings(),
                coffees: this.props.shopCoffees || [],
                website: this.props.shopDetails.website,
                phone_number: this.props.shopDetails.formatted_phone_number,
                image: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.shopDetails.photos[0].photo_reference}&sensor=false&key=AIzaSyDvUSqdDw6TdxHjNZudz295QAu9ZWjYm0k`
            }, () => this.props.fetchShopReviews(this.state.id));
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
            sum += reviews[i].rating;
        }

        let average = sum/this.props.shopReviews.length;
        return average;
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
                    <div className='review' key={review._id}>
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
        if (typeof date === 'undefined') return '';
        date = date.split('T')[0].split('-').reverse();
        let render_date = date.join('/').split('/');
        [ render_date[0], render_date[1] ] = [ date[1], date[0] ]
        return render_date.join('/')
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
        const shopId = this.props.match.params.shopId
        const phone = <FontAwesomeIcon className='phone-icon' icon={faPhone}/>
        const browser = <FontAwesomeIcon className='browser-icon' icon={faWindowMaximize} />

        if(this.state.name === '') return null;
        return (
            <div className='main-container'>
                {/* <div className='shop-header-background' style={{backgroundImage: `url(${this.state.image})`}}> */}
                    <div className='shop-header'>
                        <div className="shop-header-image-container">
                            <img className="shop-header-image" src={this.state.image} />
                        </div>

                        <div className="shop-header-details">
                            <div className='shop-header-details-left'>
                                <h1 className='shop-header-details-left-title'>{this.state.name}</h1>
                                <div className='shop-header-ratings-container'>
                                    <ShopRatings size={'35px'} ratings={this.calculateRatings()}/>
                                    <div className='shop-header-ratings-container-num-reviews'>{this.numReviews() === 1 ? `${this.numReviews()} Review` : `${this.numReviews()} Reviews`} </div>
                                </div>
                                <div className='shop-header-details-left-address'>
                                    <div>{this.state.location}</div>
                                </div>
                            </div>
                            <div className='shop-header-details-right'>
                                <div className='shop-header-details-right-website'>
                                    {browser}<a href={this.state.website} className='link'>{this.renderWebsite()}</a>
                                </div>
                                <a href={`tel:${this.state.phone_number}`} className='shop-header-details-right-number'>{phone}{this.state.phone_number}</a>
                            </div>
                        </div>
                    {/* </div> */}
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
                            {/* <Link className='link-write-review' to='/reviews/review_form'>
                                <div className='write-a-review'>Write a Review</div>
                            </Link> */}
                            {this.props.loggedIn ? (<div className='score-modal-btn-container'>
                              <button onClick={this.handleOpenModal} className='coffee-score-btn'>
                                Write a Review
                              </button>
                              <ReactModal 
                                isOpen={this.state.showModal} 
                                // appElement={root} 
                                className='score-modal'
                                overlayClassName='score-modal-background'
                                onRequestClose={this.handleCloseModal}
                                ariaHideApp={false}
                              >
                                <ReviewFormContainer shop={shopId} closeModal={this.handleCloseModal}/>
                              </ReactModal>
                            </div>) : (<></>)}
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


