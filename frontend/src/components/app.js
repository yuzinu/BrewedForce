import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UserContainer from './user/user_container';
import ReviewFormContainer from './review/review_form';
import CoffeeContainer from './coffee/coffee_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserContainer} />
      <ProtectedRoute exact path="/reviews/review_form" component={ReviewFormContainer} />
      <Route exact path ="/coffees/:coffeeId" component={CoffeeContainer} />
    </Switch>
  </div>
);

export default App;