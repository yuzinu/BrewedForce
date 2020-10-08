import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Textfit } from 'react-textfit';
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
                                        <Textfit min={16} mode="multi" className="coffee-index-item-name">{coffee.name}</Textfit>
                                        <Textfit min={16} max={18} mode="multi" className="coffee-index-item-origin">{coffee.origin}</Textfit>
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
                                        <Textfit min={16} mode="multi" className="coffee-index-item-name">{coffee.name}</Textfit>
                                        <Textfit min={16} max={18} mode="multi" className="coffee-index-item-origin">{coffee.origin}</Textfit>
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
        const CoffeeCarousel = withStyles((theme) => ({
            button: {
                backgroundColor: "#ffffff",
                color: "black",
                '&:hover': {
                    opacity: 0.6
                }
            },
            buttonWrapper: {
                '&:hover': {
                    '& $button': {
                        backgroundColor: "#ffffff",
                        filter: "brightness(120%)",
                        opacity: 0.4
                    }
                }
            },
        }))(Carousel)

        return this.state.coffees ? (
            <CoffeeCarousel className={"coffee-index-carousel"} animation={"slide"} navButtonsAlwaysVisible={true} timeout={600} autoPlay={false}>
                {this.displayCoffees()}
            </CoffeeCarousel>
        ) : (
            <div></div>
        )
    }
}