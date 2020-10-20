import React from 'react';
import { withRouter } from 'react-router-dom';
import Typed from 'typed.js';
require('./session.scss');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: '',
      password: '',
      errors: {}
    };

    this.clearedErrors = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors})
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      identifier: this.state.identifier,
      password: this.state.password
    };

    this.props.login(user); 
  }

  demoLogin(e) {
    e.preventDefault();

    function random(array) {
      return array[Math.round(Math.random())];
    }

    let identifier = random(["silver_snoopy", "silver_snoopy@omega.com"]);
    let password = "speedmaster";

    const demo_identifier = {
      strings: [identifier],
      typeSpeed: 48, 
    };

    const demo_password = {
      strings: [password],
      typeSpeed: 56, 
    };

    this.setState({
      identifier: '',
      password: ''
    });

    setTimeout(() => {
      new Typed(".demo-identifier", demo_identifier);
    }, 24);


    setTimeout(() => {
      new Typed(".demo-password", demo_password);
    }, 1760);

    setTimeout(() => {
      this.props.login({
        identifier: identifier,
        password: password
      });
    }, 2800);
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <div className="session-form-container">
      <form className="login-form" onSubmit={this.handleSubmit}>
          <h1>Log in!</h1>
          <input type="text"
            value={this.state.identifier}
            onChange={this.update('identifier')}
            placeholder="Email or username"
            className="demo-identifier"
          />

          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
            className="demo-password"
          />
          
          <div className="login-form-button-wrapper">
            <button className="login-form-submit-button">Login</button>
            <button 
              className='login-form-submit-button'
              onClick={this.demoLogin}
              >Take a Tour
            </button>
          </div>
          {this.renderErrors()}
      </form>
    </div>
    );
  }
}

export default withRouter(LoginForm);