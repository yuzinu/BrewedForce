import React from 'react';
import './coffee.css';

export default class Coffee extends React.Component {

  render() {
    const { coffee } = this.props;
    const { name, roaster, origin, source } = coffee;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{roaster}</h3>
      </div>
    )
  }

}