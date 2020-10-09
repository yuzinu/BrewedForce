import React from 'react';
import Gravatar from 'react-gravatar'

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
      <div>
        <h1>{`${user.username} has reviewed ${coffeeScores.length} coffees!`}</h1>
        <Gravatar email={user.email} size={200}/>
      </div>
    )
  }

}