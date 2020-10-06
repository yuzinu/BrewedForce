import React from 'react';
import './coffee.css';

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
    fetchCoffee(coffeeId)
      .then(() => fetchCoffeeScores(coffeeId))
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
      debugger
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

  render() {
    const { coffee } = this.props;
    const { avgAroma, avgAcidity, avgBody, avgFlavor, avgAftertaste } = this.state;
    if (!coffee) return null;
    // debugger
    return (
      <div>
        <h1>{coffee.name}</h1>
        <span>{coffee.origin}</span>
        <span>{coffee.source}</span>
        <button onClick={this.calculateAverageScores}>avg scores</button>
        <ul>
          <li>{avgAroma}</li>
          <li>{avgAcidity}</li>
          <li>{avgBody}</li>
          <li>{avgFlavor}</li>
          <li>{avgAftertaste}</li>
        </ul>
      </div>
    )
  }

}