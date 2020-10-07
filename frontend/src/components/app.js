import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import SideBarContainer from './sidebar/sidebar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UserContainer from './user/user_container';
import ReviewFormContainer from './review/review_form';
import CoffeeContainer from './coffee/coffee_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: null};

  }

  componentDidMount() {
  
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({location: position.coords})
    });
  }
  
  
  render() {

    const geolocation = this.state.location;

    return(
  <div> 
    <SideBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserContainer} />
      <ProtectedRoute exact path="/reviews/review_form" component={ReviewFormContainer} />
      <Route exact path ="/coffees/:coffeeId"
        render={(props) => (
          <CoffeeContainer {...props} geolocation={geolocation}/>
        )}
      />

      {/* <Route exact path ="/coffees/:coffeeId" component={(location) => <CoffeeContainer location={location} />} /> */}
    </Switch>
      </div>)}
};

export default App;