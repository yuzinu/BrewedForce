import React from 'react';
import './coffee.scss';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import ReactModal from 'react-modal';
import CoffeeScoreFormContainer from '../coffee_score/coffee_score_container';


export default class Coffee extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avgAroma: 0,
      avgAcidity: 0,
      avgBody: 0,
      avgFlavor: 0,
      avgAftertaste: 0,
      showModal: false
    }
    
    this.calculateAverageScores = this.calculateAverageScores.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
 
  handleCloseModal() {
    this.setState({ showModal: false });
    const coffeeId = this.props.match.params.coffeeId;
    this.props.fetchCoffeeScores(coffeeId)
      .then(() => this.calculateAverageScores());
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
    });
    this.setState({
      avgAroma: (totalAroma/i).toFixed(1),
      avgAcidity: (totalAcidity/i).toFixed(1),
      avgBody: (totalBody/i).toFixed(1),
      avgFlavor: (totalFlavor/i).toFixed(1),
      avgAftertaste: (totalAftertaste/i).toFixed(1)
    });
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
          pathname: `/shops/${shop.place_id}`
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

    const root = document.getElementById('root');
    const ScoreBar = withStyles((theme) => ({
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
            <ScoreBar value={avgAroma*10} variant={"determinate"} /></li>
            <li className='coffee-score-item'>Acidity: {avgAcidity}
            <ScoreBar value={avgAcidity * 10} variant={"determinate"} /></li>
            <li className='coffee-score-item'>Body: {avgBody}
            <ScoreBar value={avgBody * 10} variant={"determinate"} /></li>
            <li className='coffee-score-item'>Flavor: {avgFlavor}
            <ScoreBar value={avgFlavor * 10} variant={"determinate"} /></li>
            <li className='coffee-score-item'>Aftertaste: {avgAftertaste}

            <ScoreBar value={avgAftertaste * 10} variant={"determinate"} /></li>
          <div className='score-modal-btn-container'>
            <button onClick={this.handleOpenModal} className='coffee-score-btn'>
              Review Coffee
            </button>
            <ReactModal 
              isOpen={this.state.showModal} 
              appElement={root} 
              className='score-modal'
              onRequestClose={this.handleCloseModal}
            >
              <CoffeeScoreFormContainer closeModal={this.handleCloseModal}/>
            </ReactModal>
          </div>
          </ul>
        </div>
          {this.renderNearbyShops()}
        
      </>
    )
  }

}