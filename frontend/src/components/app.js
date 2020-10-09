import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import SideBarContainer from './sidebar/sidebar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ReviewFormContainer from './review/review_form_container';
import EditReviewFormContainer from './review/edit_review_form_container';
import CoffeeContainer from './coffee/coffee_container';
import CoffeeIndex from './coffee/coffee_index_container';
import ShopContainer from './shop/shop_container';
import UserContainer from './user/user_container';

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
      <> 
      <div className="app-container">
        <Route path="/" component={SideBarContainer} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/users/:userId" component={UserContainer} />
          {/* <ProtectedRoute exact path="/reviews/review_form" component={ReviewFormContainer} /> */}
          <ProtectedRoute exact path="/reviews/review_form/:reviewId/edit" component={EditReviewFormContainer} />
          <Route exact path ="/coffees/:coffeeId"
            render={(props) => (
              <CoffeeContainer {...props} geolocation={geolocation}/>
            )}
          />
          <Route path ="/coffees" component={CoffeeIndex} />
          <Route path="/shops/:shopId" component={ShopContainer} />
          {/* <Route exact path ="/coffees/:coffeeId" component={(location) => <CoffeeContainer location={location} />} /> */}
        </Switch>
      </div>
      </>
    )}
};

export default App;

// <a href="https://www.freepik.com/photos/coffee">Coffee photo created by freepik - www.freepik.com</a>
