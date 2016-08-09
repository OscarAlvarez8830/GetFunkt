const React = require('react');
const Modal = require('react-modal');
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
    const errors = ErrorStore.errors(this.props.formType);
    const messages = errors.map( (errorMsg, i) => {
      return <li key={i}>{errorMsg}</li>;
    });

    return <ul id="login-errors">{ messages }</ul>;
  },

  handleUsername(e) {
    this.setState({username: e.target.value});
  },

  handlePassword(e) {
    this.setState({password: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === "login") {
      SessionActions.logIn(this.state);
      History.push("/stream");
    } else {
      SessionActions.signUp(this.state);
    }
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      History.push("/stream");
    }
  },

  guestLogin() {
    SessionActions.logIn({username: 'guest', password: 'password'});
  },

  render() {

    return (
        <div className="auth-form-container">

          <div id="auth-form group">
            <form onSubmit={this.handleSubmit}>
                <input
                  className="input"
                  type="text"
                  onChange={this.handleUsername}
                  value={this.state.username}
                  placeholder="username"
                />

              <input
                className="input"
                type="password"
                onChange={this.handlePassword}
                placeholder="password"
              />
              <input
                className="login-button"
                type="submit"
                value="Submit"
              />
              <div>
                { this.errors() }
              </div>
            </form>
            <button className="login-button" onClick={this.guestLogin}>Guest</button>
          </div>
        </div>
    );

  }
});

module.exports = LoginForm;
