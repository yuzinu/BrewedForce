import React from 'react';
require('./main_page.scss');

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page">
        {/* <h1 className="coffee-header"></h1> */}
        <footer className="coffee-footer">
          Copyright &copy; 2020 BrewedForce
        </footer>
      </div>
    );
  }
}

export default MainPage;