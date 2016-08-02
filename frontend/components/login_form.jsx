const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const History = require('../history');

const LoginForm = React.createClass({

  getInitialState() {
    return({username: "", password: ""});
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  errors() {
    const errors = ErroStore.errors(this.formType());
    const messages = errors.map( (errorMsg, i) => {
      return <li key={i}>{errorMsg}</li>;
    });

    return <ul>{messages}</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  handleUsername(e) {
    this.setState({username: e.target.value});
  },

  handlePassword(e) {
    this.setState({password: e.target.value});
  },

  handleSignUp(e) {
    e.preventDefault();
    SessionActions.signUp(this.state);
  },

  handleLogin(e) {
    e.preventDefault();
    SessionActions.logIn(this.state);
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      History.push("/");
    }
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
