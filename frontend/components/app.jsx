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
    return({ logged_in: SessionStore.currentUserHasBeenFetched(), currentSong: null });
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _handleLogOut() {
    SessionActions.logOut();
    this.setState({ logged_in: false });
    History.push("/login");
  },

  logOut() {
    if (SessionStore.currentUserHasBeenFetched()) {
      return (
        <li className="nav-list-item"><button onClick={this._handleLogOut}>Log Out</button></li>
      );
    }

  },

  render() {
    return (
      <div id="app">

        <nav className="nav-bar group">
          <ul className="nav-list group" >
            <li className="nav-list-item"><Link to="/stream">Home</Link></li>
            <li className="nav-list-item"><Link to="/upload">Upload</Link></li>

            { this.logOut() }
          </ul>
        </nav>

        { this.props.children }

        <audio id="audio-player" />
      </div>
    );
  }

});

module.exports = App;
