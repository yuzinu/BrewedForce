import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
require('./coffee_index.scss');

export default class CoffeeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coffees: ""};
        this.displayCoffees = this.displayCoffees.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCoffees()
        .then(data => this.setState({coffees: data.coffees}));
    }

    displayCoffees() {
        let slideIndex = 1;
        let coffeeArray = [];
        this.state.coffees.map( (coffee, i) => {
            if (i % 6 === 0) coffeeArray.push([]);
            coffeeArray[coffeeArray.length-1].push(coffee);
        });

        return (
            coffeeArray.map(bundle => (
                <div className="coffee-index-container">
                    <ul className="coffee-index-ul-left">
                        {bundle.map((coffee,i) => {
                            if (i < 3) {
                                return <Link to={`/coffees/${coffee._id}`}>
                                    <li className="coffee-index-item" key={coffee._id}>
                                        <div className="coffee-index-item-name">{coffee.name}</div>
                                        <div className="coffee-index-item-origin">{coffee.origin}</div>
                                    </li>
                                </Link>
                            }
                        })}
                    </ul>

                    <ul className="coffee-index-ul-right">
                        {bundle.map((coffee, i) =>  {
                            if (i >= 3) {
                                return <Link to={`/coffees/${coffee._id}`}>
                                    <li className="coffee-index-item" key={coffee._id}>
                                        <div className="coffee-index-item-name">{coffee.name}</div>
                                        <div className="coffee-index-item-origin">{coffee.origin}</div>
                                    </li>
                                </Link>
                            }
                        })}
                    </ul>
                </div>
                )
            )
        )
    }

    render() {
        return this.state.coffees ? (
            <Carousel className={"coffee-index-carousel"} animation={"slide"} navButtonsAlwaysVisible={true} timeout={600} autoPlay={false}>
                {this.displayCoffees()}
            </Carousel>
        ) : (
            <div></div>
        )
    }
}