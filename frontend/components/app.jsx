const React = require('react');
const Modal = require('react-modal');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const History = require('../history');
const LoginForm = require('./login_form');
const ModalStyle = require('../modal_style');

const App = React.createClass({

  getInitialState() {
    return({ logged_in: SessionStore.currentUserHasBeenFetched() });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _handleLogOut() {
    SessionActions.logOut();
    this.setState({ logged_in: false });
    History.push("/login");
  },

  logOut() {
    if (SessionStore.currentUserHasBeenFetched()) {
      return (
        <button onClick={this._handleLogOut}>Log Out</button>
      );
    }

  },

  render() {
    return (
      <div>

        <nav className="nav-bar group">
          <Link to="/stream">Home</Link>
          <Link to="/upload">Upload</Link>

          { this.logOut() }
        </nav>

        { this.props.children }
      </div>
    );
  }

});

module.exports = App;
