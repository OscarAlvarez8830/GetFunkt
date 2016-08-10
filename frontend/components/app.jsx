const React = require('react');
const Modal = require('react-modal');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const SongActions = require('../actions/song_actions');
const SongStore = require('../stores/song_store');
const History = require('../history');
const LoginForm = require('./login_form');
const ModalStyle = require('../modal_style');

const App = React.createClass({

  getInitialState() {
    return({ logged_in: SessionStore.currentUserHasBeenFetched(), currentSong: {} });
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
    this.songListener = SongStore.addListener(this.playCurrentSong);
  },

  playCurrentSong() {
    this.setState({currentSong: SongStore.currentSong()});
  },

  componentWillUnmount() {
    this.sessionListener.remove();
    this.songListener.remove();
  },

  _handleLogOut() {
    SessionActions.logOut();
    SongActions.clearCurrentSong();
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

        <audio className="audio-player group"
          src={this.state.currentSong.audio_url}
          autoPlay="autoplay"
          controls="controls"
          />

      </div>
    );
  }

});

module.exports = App;
