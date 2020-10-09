import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
require('./main_page.scss');

class MainPage extends React.Component {

  render() {
    const github = <FontAwesomeIcon icon={faGithubSquare} />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
    return (
      <div className="main-page">
        <footer className="coffee-footer">
          <div className='personal-info'>
            <div className='links'>
              <a href="https://github.com/troubadour10">
                {github}<span></span>
              </a>
              <a href="https://www.linkedin.com/in/mark-camilleri-0414b4152/">
                {linkedin}<span></span>
              </a>
            </div>
            <span>Mark Camilleri</span>            
          </div>
          <div className='personal-info'>
            <div className='links'>
              <a href="https://github.com/jkim617">
                {github}<span></span>
              </a>
              <a href="https://www.linkedin.com/in/kun-hee-kim-0b23b013b">
                {linkedin}<span></span>
              </a>
            </div>
            <span>Kun Hee Kim</span>
          </div>
          <div className='copyright'>
            Copyright &copy; 2020 BrewedForce by the Brewners
          </div>
          <div className='personal-info'>            
            <div className='links'>
              <a href="https://github.com/yuzinu">
                {github}<span></span>
              </a>
              <a href="https://www.linkedin.com/in/eugene-moon-7b74182a/">
                {linkedin}<span></span>
              </a>
            </div>
            <span>Eugene Moon</span>
          </div>
          <div className='personal-info'>
            <div className='links'>
              <a href="https://github.com/drewwebs">
                {github}<span></span>
              </a>
              <a href="https://www.linkedin.com/in/drew-webster-4261a934/">
                {linkedin}<span></span>
              </a>
            </div>
            <span>Drew Webster</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainPage;