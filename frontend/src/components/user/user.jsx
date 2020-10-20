import React from 'react';
import Gravatar from 'react-gravatar';
import './user.scss';

export default class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeScores: []
    }
  }

  componentDidMount() {
    const { fetchUser, fetchUserCoffeeScores } = this.props;
    const userId = this.props.match.params.userId;
    fetchUser(userId).then(() => fetchUserCoffeeScores(userId)
    .then(data => this.setState({coffeeScores: data.coffeeScores.data})));
  }


  render() {
    const { user } = this.props;
    const { coffeeScores } = this.state;
    let rank = "";
    switch (true) {
      case (coffeeScores.length < 10):
        rank = <div>Sipper</div>;
        break;
      case (coffeeScores.length < 20):
        rank = <div>Caffeine Junkie</div>;
        break;
      case (coffeeScores.length < 50):
        rank = <div>Brewer</div>;
        break;
      default:
        rank = <div>Redeye Knight</div>;
        break;
    }
    if (!user || !user.coffeeScores) return null;
    return (
      <div className="profile-container">
        <Gravatar className="profile-details-picture" email={user.email} size={200}/>
        <div className="profile-details">
          <div className="profile-details-info">
            <h1 className="profile-details-username">{user.username}</h1>
            <h1 className="profile-details-review-count">{`Coffees Reviewed: ${coffeeScores.length}`}</h1>
          </div>
          <div className="profile-details-rank">Rank:{rank}</div>
        </div>
      </div>
    )
  }

}