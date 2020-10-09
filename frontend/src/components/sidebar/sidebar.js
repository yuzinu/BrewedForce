import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="sidebar-buttons">
                <Link className="sidebar-buttons-link" to={'/profile'}>Profile</Link>
                <Link className="sidebar-buttons-link" to={'/coffees'}>Coffees</Link>
                <Link className="sidebar-buttons-link" to={'/shops'}>Shops</Link>
                <Link className="sidebar-buttons-link" to={'/roasters'}>Roasters</Link>
                <button className="sidebar-buttons-link" onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="sidebar-buttons">
              <Link className="sidebar-buttons-link" to={'/coffees'}>Coffees</Link>
              <Link className="sidebar-buttons-link" to={'/shops'}>Shops</Link>
              <Link className="sidebar-buttons-link" to={'/roasters'}>Roasters</Link>
              <Link className="sidebar-buttons-link" to={'/login'}>Login</Link>
              <Link className="sidebar-buttons-link" to={'/signup'}>Signup</Link>
            </div>
        );
      }
  }

  render() {
      if (this.props.location.pathname === "/") {
        return (
          <div className="sidebar-main-wrapper">
            <div className="sidebar-main">
                <Link to="/" className="sidebar-header">BF</Link>
                { this.getLinks() }
            </div>
          </div>
        );
      } else {
        return (
          <div className="sidebar-wrapper">
            <div className="sidebar">
                <Link to="/" className="sidebar-header">BF</Link>
                { this.getLinks() }
            </div>
          </div>
        );
      }
  }
}

export default SideBar;