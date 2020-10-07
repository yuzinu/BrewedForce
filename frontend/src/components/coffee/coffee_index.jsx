import React from 'react';
import { Link } from 'react-router-dom';
require('./coffee_index.scss');

export default class CoffeeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coffees: ""};
    }

    componentDidMount() {
        this.props.fetchAllCoffees().
        then(data => this.setState({coffees: data.coffees}));
    }

    render() {
        return this.state.coffees ? (
            <div className="coffee-index-container">
                <ul>
                {this.state.coffees.map((coffee, i) => {
                    if (i < 3) {
                        return <Link to={`/coffees/${coffee._id}`}>
                            <li className="coffee-index-item-left" key={coffee._id}>
                                <div className="coffee-index-item-name">{coffee.name}</div>
                                <div className="coffee-index-item-origin">{coffee.origin}</div>
                            </li>
                        </Link>
                    
                    } else {
                        return <Link to={`/coffees/${coffee._id}`}>
                            <li className="coffee-index-item-right" key={coffee._id}>
                                <div className="coffee-index-item-name">{coffee.name}</div>
                                <div className="coffee-index-item-origin">{coffee.origin}</div>
                            </li>
                        </Link>
                    }
                })}
                </ul>
            </div>
        ) : (
            <div></div>
        )
    }
}