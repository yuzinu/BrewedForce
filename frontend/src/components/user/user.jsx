import React from 'react';
import './user.css';

export default class User extends React.Component {

  componentDidMount() {
    // fetch user info
  }


  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>{user.username}</h1>
        <h3>{user.rank}</h3>
        <ul>
          {/* top/recent/all reviews */}
        </ul>
      </div>
    )
  }
}