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
    const errors = ErrorStore.errors(this.formType());
    const messages = errors.map( (errorMsg, i) => {
      return <li key={i}>{errorMsg}</li>;
    });

    return <ul id="login-errors">{ messages }</ul>;
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

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(this.state);
    } else {
      SessionActions.signUp(this.state);
    }
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      History.push("/");
    }
  },

  render () {

    return (
      <div className="auth-form-container">

        <div id="auth-form">
          <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                onChange={this.handleUsername}
                value={this.state.username}
                placeholder="username"
              />
            <br/>
            <br/>
            <input
              type="password"
              onChange={this.handlePassword}
              placeholder="password"
            />
            <br/>
            <input
              type="submit"
              value="Submit"
            />
            <br/>
            <div>
              { this.errors() }
            </div>
          </form>
        </div>
      </div>
    );

  }
});

module.exports = LoginForm;
