import React from 'react';
// import './shop.css';

import ReviewFormContainer from '../review/review_form_container';


export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            location: '',
            price_level: null,
        };
    }

   

    componentDidMount() {
        this.props.fetchShopDetails(this.props.match.params.shopId)
        

        // if(this.props.location.state) {
        //     this.setState({
        //         name: this.props.location.state.name,
        //         id: this.props.location.state.place_id,
        //         location: this.props.location.state.vicinity,
        //         price_level: this.props.location.state.price_level,
        //     },  () => this.props.fetchShopReviews(this.state.id))
        // }
    }

    componentDidUpdate(prevProps) {
        if(Object.values(this.props.shopDetails).length > 0 
            && this.props.shopDetails.name !== prevProps.shopDetails.name) {
                this.setState({
                    name: this.props.shopDetails.name,
                    id: this.props.match.params.shopId,
                    location: this.props.shopDetails.formatted_address,
                    price_level: this.props.shopDetails.price_level
                }, () => this.props.fetchShopReviews(this.state.id))
        }
    }


    renderReviews() {
        let reviews;
        if(!this.props.shopReviews || this.props.shopReviews.legnth === 0) {
            return;
        } else {
            reviews = this.props.shopReviews;
        }

        return reviews
            .map((review, i) => {
                return (
                    <div>
                        <div>{review.user}</div>
                        <div>{review.rating}</div>
                        <div>{review.text}</div>
                    </div>
                )
            })
    }
    
    render() {
        debugger
        if(this.state.name === '') return null;
        return (
            <div>
                <h1>{this.state.name}</h1>
                <div>
                    {this.renderReviews()}
                </div>
            </div>
        )

    }
};


