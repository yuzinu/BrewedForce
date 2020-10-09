import React from 'react';
import { withRouter } from 'react-router-dom';
require('./session.scss');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

    let demoUser = {
      identifier: "silver_snoopy",
      password: "speedmaster"
    }

    this.props.login(demoUser);
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
          />

          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
          />
          
          <div className="login-form-button-wrapper">
            <button className="login-form-submit-button">Login</button>
            {this.renderErrors()}
            <button 
              className='login-form-submit-button'
              onClick={this.demoLogin}
              >Take a Tour
            </button>
          </div>
      </form>
    </div>
    );
  }
}

export default withRouter(LoginForm);