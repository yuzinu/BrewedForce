import React from 'react';
require('./main_page.scss');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page">
        <footer className="coffee-footer">
          Copyright &copy; 2020 BrewedForce by the Brewners
        </footer>
      </div>
    );
  }
}

export default MainPage;