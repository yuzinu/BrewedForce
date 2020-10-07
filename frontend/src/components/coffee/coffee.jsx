import React from 'react';
import './coffee.css';
import { Link } from 'react-router-dom';



export default class Coffee extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avgAroma: 0,
      avgAcidity: 0,
      avgBody: 0,
      avgFlavor: 0,
      avgAftertaste: 0
    }
    

    this.calculateAverageScores = this.calculateAverageScores.bind(this);
  }

  componentDidMount() {
    debugger
    const { fetchCoffee, fetchCoffeeScores } = this.props;
    const coffeeId = this.props.match.params.coffeeId;
    fetchCoffee(coffeeId);
    fetchCoffeeScores(coffeeId)
      .then(() => this.calculateAverageScores());
  }

  componentDidUpdate(prevProps) {
    debugger
    // if (prevProps.match.params !== this.props.match.params) {
    //   const { fetchCoffee, fetchCoffeeScores } = this.props;
    //   const coffeeId = this.props.match.params.coffeeId;
    //   fetchCoffee(coffeeId);
    //   fetchCoffeeScores(coffeeId)
    //     .then(() => this.calculateAverageScores());
    // }
    if (prevProps.geolocation !== this.props.geolocation) {
      debugger
      this.fetchNearbyShops();
    }
  }

  calculateAverageScores() {
    const { coffeeScores } = this.props;
    const coffeeId = this.props.match.params.coffeeId;
    let totalAroma = 0;
    let totalAcidity = 0;
    let totalBody = 0;
    let totalFlavor = 0;
    let totalAftertaste = 0;
    let i = 0;
    coffeeScores.forEach(score => {
      if (score.coffee === coffeeId) {
        i++;
        totalAroma += score.aroma;
        totalAcidity += score.acidity;
        totalBody += score.body;
        totalFlavor += score.flavor;
        totalAftertaste += score.aftertaste;
      }
    })
    this.setState({
      avgAroma: totalAroma/i,
      avgAcidity: totalAcidity/i,
      avgBody: totalBody/i,
      avgFlavor: totalFlavor/i,
      avgAftertaste: totalAftertaste/i
    })
  }

  fetchNearbyShops() {
    if(!this.props.geolocation) return "No shops nearby";

    const params = {
      location: {
        latitude: this.props.geolocation.latitude,
        longitude: this.props.geolocation.longitude
      }
      // location: `${this.props.geolocation.latitude},${this.props.geolocation.longitude}`
    };
    this.props.fetchNearbyShops(params)
  }

  renderNearbyShops() {
    let shops;
    if (Object.values(this.props.nearbyShops).length === 0) {
      return;
    } else {
      shops = this.props.nearbyShops;
    }
    

    return shops
      .map((shop, i) => {
      return (
        <Link to={{
          pathname: `/shops/${shop.place_id}`,
          state: {details: shop},
          }}
          className='' >
          <div>{shop.name}</div>
          {shop.icon}
        </Link>
      )
    }
    )
  
  }

  render() {
    const { coffee, coffeeScores } = this.props;
    const { avgAroma, avgAcidity, avgBody, avgFlavor, avgAftertaste } = this.state;
    if (!coffee || !coffeeScores) return null;
    return (
      <>
        <div className='coffee-show-container'>
          <h1 className='coffee-show-title'>{coffee.name}</h1>
          <span className='coffee-show-origin'>{coffee.origin}</span>
          <span className='coffee-show-source'>{coffee.source}</span>
          <ul className='coffee-score-list'>
            <li className='coffee-score-item'>Aroma: {avgAroma}</li>
            <li className='coffee-score-item'>Acidity: {avgAcidity}</li>
            <li className='coffee-score-item'>Body: {avgBody}</li>
            <li className='coffee-score-item'>Flavor: {avgFlavor}</li>
            <li className='coffee-score-item'>Aftertaste: {avgAftertaste}</li>
          </ul>
        </div>
        <div>
          {this.renderNearbyShops()}
        </div>
      </>
    )
  }

}