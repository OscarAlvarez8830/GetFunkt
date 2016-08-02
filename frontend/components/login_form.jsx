const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

  getInitialState() {
    return({username: "", password: ""});
  },

  handleUsername(e) {
    this.setState({username: e.target.value});
  },

  handlePassword(e) {
    this.setState({password: e.target.value});
  },

  handleSignUp(e) {
    e.preventDefault();
  },

  handleLogin(e) {
    e.preventDefault();
  },

  render () {

    return (
      <div id="auth-form">
        <button id="signup" onClick={this.handleSignUp}>Sign Up</button>
        <button id="login" onClick={this.handleLogin}>Log In</button>
        <form>
          <input
            type="text"
            onChange={this.handleUsername}
            value={this.state.username}
          />
          <input
            type="password"
            on Change={this.handlePassword}
          />
        </form>
      </div>
    );

  }
});

module.exports = LoginForm;
