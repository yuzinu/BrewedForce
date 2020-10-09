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
    if (!user || !user.coffeeScores) return null;
    return (
      <div className="profile-container">
        <Gravatar className="profile-details-picture" email={user.email} size={200}/>
        <div className="profile-details">
          <h1 className="profile-details-username">{user.username}</h1>
          <h1 className="profile-details-review-count">{`Coffees Reviewed: ${coffeeScores.length}`}</h1>
        </div>
      </div>
    )
  }

}