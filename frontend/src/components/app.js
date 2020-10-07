import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import SidebarContainer from './sidebar/sidebar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UserContainer from './user/user_container';
import ReviewFormContainer from './review/review_form_container';
import EditReviewFormContainer from './review/edit_review_form_container';
import CoffeeContainer from './coffee/coffee_container';

require('../../src/App.scss');

const App = () => (
  <div className="app-container">
    <SidebarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserContainer} />
      <ProtectedRoute exact path="/reviews/review_form" component={ReviewFormContainer} />
      <ProtectedRoute exact path="/reviews/review_form/:reviewId/edit" component={ReviewFormContainer} />
      <Route exact path ="/coffees/:coffeeId" component={CoffeeContainer} />
    </Switch>
  </div>
);

export default App;

// <a href="https://www.freepik.com/photos/coffee">Coffee photo created by freepik - www.freepik.com</a>
