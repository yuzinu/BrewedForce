import React from 'react';
import './coffee.scss';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';



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
    
    const { fetchCoffee, fetchCoffeeScores } = this.props;
    const coffeeId = this.props.match.params.coffeeId;
    fetchCoffee(coffeeId);
    fetchCoffeeScores(coffeeId)
      .then(() => this.calculateAverageScores());
  }

  componentDidUpdate(prevProps) {
    
    // if (prevProps.match.params !== this.props.match.params) {
    //   const { fetchCoffee, fetchCoffeeScores } = this.props;
    //   const coffeeId = this.props.match.params.coffeeId;
    //   fetchCoffee(coffeeId);
    //   fetchCoffeeScores(coffeeId)
    //     .then(() => this.calculateAverageScores());
    // }
    if (prevProps.geolocation !== this.props.geolocation) {
      
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

    const BorderLinearProgress = withStyles((theme) => ({
      root: {
        height: 10,
        // borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      bar: {
        // borderRadius: 2,
        backgroundColor: "rgb(63, 182, 221)",
      },
    }))(LinearProgress);

    if (!coffee || !coffeeScores) return null;
    return (
      <>
        <div className='coffee-show-container'>
          <div className="coffee-details">
            <h1 className='coffee-details-title'>{coffee.name}</h1>
            <span className='coffee-details-origin'>{coffee.origin}</span>
            <span className='coffee-details-source'>{coffee.source}</span>
          </div>
          <ul className='coffee-score-list'>
            <li className='coffee-score-item'>Aroma: {avgAroma}
            <BorderLinearProgress value={avgAroma*10} variant={"determinate"} /></li>
            <li className='coffee-score-item'>Acidity: {avgAcidity}
            <BorderLinearProgress value={avgAcidity * 10} variant={"determinate"} /></li>
            <li className='coffee-score-item'>Body: {avgBody}
            <BorderLinearProgress value={avgBody * 10} variant={"determinate"} /></li>
            <li className='coffee-score-item'>Flavor: {avgFlavor}
            <BorderLinearProgress value={avgFlavor * 10} variant={"determinate"} /></li>
            <li className='coffee-score-item'>Aftertaste: {avgAftertaste}
            <BorderLinearProgress value={avgAftertaste * 10} variant={"determinate"} /></li>
          </ul>
        </div>
          {this.renderNearbyShops()}
        
      </>
    )
  }

}